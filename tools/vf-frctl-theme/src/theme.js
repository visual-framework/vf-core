'use strict';

const Path        = require('path');
const _           = require('lodash');
const Theme       = require('@frctl/fractal').WebTheme;
const packageJSON = require('../package.json');

module.exports = function(options, fractal){

    const config = _.defaultsDeep(_.clone(options || {}), {
        skin: 'default',
        rtl: false,
        lang: 'en',
        styles: 'default',
        scripts: 'default',
        format: 'YAML',
        static: {
            mount: 'themes/vf-frctl-theme',
        },
        version: packageJSON.version,
        favicon: null
    });

    // config.panels  = config.panels || ['html', 'view', 'context', 'resources', 'info', 'notes'];
    config.panels  = config.panels || ['html', 'resources', 'info'];
    config.nav     = config.nav || ['components','docs','assets'];
    config.styles  = [].concat(config.styles).concat(config.stylesheet).filter(url => url).map(url => (url === 'default' ? `/${config.static.mount}/css/${config.skin}.css` : url));
    config.scripts = [].concat(config.scripts).filter(url => url).map(url => (url === 'default' ? `/${config.static.mount}/js/vf-frctl-theme.js` : url));
    config.favicon = config.favicon || `/${config.static.mount}/favicon.ico`;

    const assetSourceName = 'components';

    const theme = new Theme(Path.join(__dirname, '..', 'views'), config);

    // console.log(fractal);

    theme.setErrorView('pages/error.njk');

    theme.addStatic(Path.join(__dirname, '..' , 'dist'), `/${config.static.mount}`);

    theme.addRoute('/', {
        handle: 'overview',
        view: 'pages/doc.njk',
    });

    theme.addRoute('/docs', {
        redirect: '/'
    });

    theme.addRoute('/components', {
        redirect: '/'
    });

    theme.addRoute('/assets', {
        redirect: '/'
    });

    theme.addRoute('/assets/:name', {
        handle: 'asset-source',
        view: 'pages/assets.njk'
    }, function(app){
        return app.assets.visible().map(asset => ({name: asset.name}));
    });

    theme.addRoute('/components/preview/:handle', {
        handle: 'preview',
        view: 'pages/components/preview.njk'
    }, getHandles);

    theme.addRoute('/components/render/:handle', {
        handle: 'render',
        view: 'pages/components/render.njk'
    }, getHandles);

    theme.addRoute('/components/detail/:handle', {
        handle: 'component',
        view: 'pages/components/detail.njk'
    }, getHandles);

    theme.addRoute('/components/raw/:handle/:asset', {
        handle: 'component-resource',
        static: function(params, app){
            const component = app.components.find(`@${params.handle}`);
            if (component) {
                return Path.join(component.viewDir, params.asset);
            }
            throw new Error('Component not found');
        }
    }, getResources);

    theme.addRoute('/docs/:path([^\?]+?)', {
        handle: 'page',
        view: 'pages/doc.njk'
    }, function(app){
        return app.docs.filter(d => (!d.isHidden && d.path !== '')).flatten().map(page => ({path: page.path}));
    });

    theme.on('init', function(env, app){
      require('./filters')(theme, env, app, fractal);
      require('./extensions/render.js')(theme, env, app, fractal);
      require('./extensions/markdown.js')(theme, env, app, fractal);
    });

    let handles = null;

    function getHandles(app) {
        app.components.on('updated', () => (handles = null));
        if (handles) {
            return handles;
        }
        handles = [];
        app.components.flatten().each(comp => {
            handles.push(comp.handle);
            if (comp.variants().size > 1) {
                comp.variants().each(variant => handles.push(variant.handle));
            }
        });
        handles = handles.map(h => ({handle: h}));
        return handles;
    }

    function getResources(app) {
        let params = [];
        app.components.flatten().each(comp => {
            params = params.concat(comp.resources().flatten().toArray().map(res => {
                return {
                    handle: comp.handle,
                    asset: res.base
                };
            }));
        });
        return params;
    }

    return theme;
};

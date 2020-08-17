// Pass the fractal environment, components
// console.log(global.fractal.components._monitor._events);

// console.log(global.fractal.components.flatten());

// for (let item of global.fractal.components) {
//   console.log(item.handle);
//   try {
//     for (let subitem of item) {
//       console.log(item.handle + ': ' + subitem.handle);
//     }
//   }
//   catch(error) {
//     console.log(item);
//   }
//
// }

let localComponents = global.fractal.components.toJSON().items;

// Filter through the components to select only the vf-core-components object
// function filterVfCoreComponents(item) {
//   return item.handle == 'vf-core-components';
// }

// let vfCoreComponents = localComponents.find(filterVfCoreComponents)
// console.log(vfCoreComponents)

module.exports = {
  fractal: global.fractal,
  localComponents: localComponents,
  // vfCoreComponents: vfCoreComponents.items
  // coreComponents: global.fractal.components.items()
};

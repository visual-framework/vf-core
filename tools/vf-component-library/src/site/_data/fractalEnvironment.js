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

// Filter through the components to make a list of components with children components, like vf-form
let parentComponents = localComponents.filter(component => component.items);
let childComponents = [];
parentComponents.forEach(parent => {
  parent.items.forEach(component => {
    childComponents.push(component);
  });
});

module.exports = {
  fractal: global.fractal,
  localComponents: localComponents,
  childComponents: childComponents
  // vfCoreComponents: vfCoreComponents.items
  // coreComponents: global.fractal.components.items()
};

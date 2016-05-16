var jsdom = require('jsdom').jsdom;

module.exports = function () {
  global.document = jsdom('');
  global.window = document.defaultView;
  var exposedProperties = ['window', 'navigator', 'document'];
  Object.keys(document.defaultView).forEach((property) => {
    if (typeof global[property] === 'undefined') {
      exposedProperties.push(property);
      global[property] = document.defaultView[property];
    }
  });

  global.navigator = {
    userAgent: 'node.js',
  };
}

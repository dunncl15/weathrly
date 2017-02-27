require('babel-register')({
  presets: ['react', 'es2015'],
});
require('babel-polyfill');
const makeJQ = require('jquery');

global.document = require('jsdom').jsdom(
 '<head><meta charset="UTF-8"><div class="application"></div></head>'
);

global.window = document.defaultView;
global.navigator = window.navigator;
global.$ = global.jQuery = makeJQ(window);

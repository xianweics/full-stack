const Enzyme = require('enzyme/build');
const JSDOM = require('jsdom');
const Adapter = require('enzyme-adapter-react-16/build');

// emulate browser environment
if (typeof document === 'undefined') {
  const dom = new JSDOM(
    '<!doctype html><html lang="en"><head></head><body></body></html>');
  global.window = dom.window;
  global.document = global.window.document;
  global.navigator = global.window.navigator;
}

// config enzyme
Enzyme.configure({
  adapter: new Adapter()
});

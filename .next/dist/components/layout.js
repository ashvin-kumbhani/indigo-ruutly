'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _regenerator = require('babel-runtime/regenerator');

var _regenerator2 = _interopRequireDefault(_regenerator);

var _asyncToGenerator2 = require('babel-runtime/helpers/asyncToGenerator');

var _asyncToGenerator3 = _interopRequireDefault(_asyncToGenerator2);

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _link = require('next/dist/lib/link.js');

var _link2 = _interopRequireDefault(_link);

var _head = require('next/dist/lib/head.js');

var _head2 = _interopRequireDefault(_head);

var _navbar = require('./navbar');

var _navbar2 = _interopRequireDefault(_navbar);

var _footer = require('./footer');

var _footer2 = _interopRequireDefault(_footer);

var _nprogress = require('nprogress');

var _nprogress2 = _interopRequireDefault(_nprogress);

var _index = require('next/dist/lib/router/index.js');

var _index2 = _interopRequireDefault(_index);

var _reactI18next = require('react-i18next');

var _i18n = require('../i18n');

var _i18n2 = _interopRequireDefault(_i18n);

var _settings = require('../settings.js');

var _settings2 = _interopRequireDefault(_settings);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var _this = undefined;

_index2.default.onRouteChangeStart = function (url) {
  console.log('Loading: ' + url);
  _nprogress2.default.start();
};
_index2.default.onRouteChangeComplete = function () {
  return _nprogress2.default.done();
};
_index2.default.onRouteChangeError = function () {
  return _nprogress2.default.done();
};

var Layout = function Layout(_ref) {
  var t = _ref.t,
      initialI18nStore = _ref.initialI18nStore,
      children = _ref.children,
      _ref$title = _ref.title,
      title = _ref$title === undefined ? 'Default Title' : _ref$title,
      _ref$description = _ref.description,
      description = _ref$description === undefined ? "Default Description" : _ref$description;
  return _react2.default.createElement('div', null, _react2.default.createElement(_head2.default, null, _react2.default.createElement('title', null, title), _react2.default.createElement('meta', { name: 'description', content: description }), _react2.default.createElement('meta', { charSet: 'utf-8' }), _react2.default.createElement('meta', { httpEquiv: 'X-UA-Compatible', content: 'IE=edge' }), _react2.default.createElement('meta', { name: 'viewport', content: 'initial-scale=1.0, width=device-width' }), _react2.default.createElement('link', { rel: 'icon', sizes: '192x192', href: 'https://www.chapters.indigo.ca/ui/4.17.5/Images/favicon_192x192.png' }), _react2.default.createElement('link', { rel: 'apple-touch-icon-precomposed', sizes: '180x180', href: 'https://www.chapters.indigo.ca/ui/4.17.5/Images/favicon_180x180.png' }), _react2.default.createElement('link', { rel: 'apple-touch-icon-precomposed', sizes: '152x152', href: 'https://www.chapters.indigo.ca/ui/4.17.5/Images/favicon_152x152.png' }), _react2.default.createElement('link', { rel: 'apple-touch-icon-precomposed', sizes: '144x144', href: 'https://www.chapters.indigo.ca/ui/4.17.5/Images/favicon_144x144.png' }), _react2.default.createElement('link', { rel: 'apple-touch-icon-precomposed', sizes: '120x120', href: 'https://www.chapters.indigo.ca/ui/4.17.5/Images/favicon_120x120.png' }), _react2.default.createElement('link', { rel: 'apple-touch-icon-precomposed', sizes: '114x114', href: 'https://www.chapters.indigo.ca/ui/4.17.5/Images/favicon_114x114.png' }), _react2.default.createElement('link', { rel: 'apple-touch-icon-precomposed', sizes: '76x76', href: 'https://www.chapters.indigo.ca/ui/4.17.5/Images/favicon_76x76.png' }), _react2.default.createElement('link', { rel: 'apple-touch-icon-precomposed', sizes: '72x72', href: 'https://www.chapters.indigo.ca/ui/4.17.5/Images/favicon_72x72.png' }), _react2.default.createElement('link', { rel: 'apple-touch-icon-precomposed', sizes: '57x57', href: 'https://www.chapters.indigo.ca/ui/4.17.5/Images/favicon_57x57.png' }), _react2.default.createElement('link', { rel: 'shortcut icon', type: 'image/x-icon', href: 'https://www.chapters.indigo.ca/ui/4.17.5/Images/favicon_16x16.png' }), _react2.default.createElement('link', { rel: 'shortcut icon', type: 'image/x-icon', href: 'https://www.chapters.indigo.ca/ui/4.17.5/Images/favicon.ico' }), _react2.default.createElement('link', { rel: 'stylesheet', type: 'text/css', href: '/static/styles.css' }), _react2.default.createElement('link', { rel: 'stylesheet', href: 'https://unpkg.com/react-select/dist/react-select.css' }), _react2.default.createElement('script', { src: 'https://use.fontawesome.com/5a61b089d7.js' }), _react2.default.createElement('script', { type: 'text/javascript', src: 'https://www.ruutly.com/js/if.js' })), _react2.default.createElement('header', null, _react2.default.createElement(_navbar2.default, { t: t })), _react2.default.createElement('div', { className: 'container' }, children), _react2.default.createElement(_footer2.default, { t: t }));
};

var ExtendedLayout = (0, _reactI18next.translate)('common', { i18n: _i18n2.default })(Layout);

// Passing down initial translations
// use req.i18n instance on serverside to avoid overlapping requests set the language wrong
ExtendedLayout.getInitialProps = function () {
  var _ref3 = (0, _asyncToGenerator3.default)(_regenerator2.default.mark(function _callee(_ref2) {
    var req = _ref2.req;
    return _regenerator2.default.wrap(function _callee$(_context) {
      while (1) {
        switch (_context.prev = _context.next) {
          case 0:
            if (!(req && !process.browser)) {
              _context.next = 2;
              break;
            }

            return _context.abrupt('return', _i18n2.default.getInitialProps(req, 'common'));

          case 2:
            return _context.abrupt('return', {});

          case 3:
          case 'end':
            return _context.stop();
        }
      }
    }, _callee, _this);
  }));

  return function (_x) {
    return _ref3.apply(this, arguments);
  };
}();

exports.default = ExtendedLayout;
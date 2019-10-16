'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _style = require('styled-jsx/style.js');

var _style2 = _interopRequireDefault(_style);

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _link = require('next/dist/lib/link.js');

var _link2 = _interopRequireDefault(_link);

var _reactFontawesome = require('react-fontawesome');

var _reactFontawesome2 = _interopRequireDefault(_reactFontawesome);

var _i18n = require('../i18n');

var _i18n2 = _interopRequireDefault(_i18n);

var _settings = require('../settings.js');

var _settings2 = _interopRequireDefault(_settings);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var closeNav = function closeNav(e) {
  e.preventDefault();
  document.getElementById("navigation").style.height = "0%";
};

var openNav = function openNav(e) {
  e.preventDefault();
  document.getElementById("navigation").style.height = "100%";
};

var closeNavOnClick = function closeNavOnClick(e) {
  document.getElementById("navigation").style.height = "0%";
};

var changeLang = function changeLang(e) {
  e.preventDefault();
  if (_i18n2.default.language == "fr") {
    _i18n2.default.changeLanguage('en');
  } else {
    _i18n2.default.changeLanguage('fr');
  }
};

exports.default = function (_ref) {
  var t = _ref.t;
  return _react2.default.createElement('header', {
    'data-jsx': 177433985
  }, _react2.default.createElement('div', { id: 'navigation', className: 'overlay', 'data-jsx': 177433985
  }, _react2.default.createElement('a', { href: '#', onClick: closeNav, className: 'close-button', 'data-jsx': 177433985
  }, '\xD7'), _react2.default.createElement('nav', { className: 'overlay-content', 'data-jsx': 177433985
  }, _react2.default.createElement('li', {
    'data-jsx': 177433985
  }, _react2.default.createElement('a', { href: t('common:header.link1'), 'data-jsx': 177433985
  }, t('common:header.text1'))), _react2.default.createElement('li', {
    'data-jsx': 177433985
  }, _react2.default.createElement('a', { href: t('common:header.link2'), 'data-jsx': 177433985
  }, t('common:header.text2'))), _react2.default.createElement('li', { onClick: closeNavOnClick, 'data-jsx': 177433985
  }, _react2.default.createElement(_link2.default, { href: t('common:header.link3') }, _react2.default.createElement('a', { href: t('common:header.link3'), 'data-jsx': 177433985
  }, t('common:header.text3')))), _react2.default.createElement('li', { onClick: closeNavOnClick, 'data-jsx': 177433985
  }, _react2.default.createElement(_link2.default, { href: t('common:header.link7') }, _react2.default.createElement('a', { href: t('common:header.link7'), 'data-jsx': 177433985
  }, t('common:header.text7')))), _react2.default.createElement('li', { onClick: closeNavOnClick, 'data-jsx': 177433985
  }, _react2.default.createElement(_link2.default, { href: t('common:header.link4') }, _react2.default.createElement('a', { href: t('common:header.link4'), 'data-jsx': 177433985
  }, t('common:header.text4')))), _react2.default.createElement('li', { onClick: closeNavOnClick, 'data-jsx': 177433985
  }, _react2.default.createElement(_link2.default, { href: t('common:header.link5') }, _react2.default.createElement('a', { href: t('common:header.link5'), 'data-jsx': 177433985
  }, t('common:header.text5')))), _react2.default.createElement('li', { onClick: closeNavOnClick, 'data-jsx': 177433985
  }, _react2.default.createElement(_link2.default, { href: t('common:header.link6') }, _react2.default.createElement('a', { href: t('common:header.link6'), 'data-jsx': 177433985
  }, t('common:header.text6')))))), _react2.default.createElement('div', { className: 'top-bar', 'data-jsx': 177433985
  }, _react2.default.createElement('div', { className: 'top-bar-inner', 'data-jsx': 177433985
  }, _react2.default.createElement(_link2.default, { href: '/' }, _react2.default.createElement('a', { href: '/', className: 'home-link', 'data-jsx': 177433985
  }, _react2.default.createElement('img', { src: _settings2.default.logo, alt: 'Indigo logo', className: 'brand-img', 'data-jsx': 177433985
  }))), _react2.default.createElement('a', { href: '#', className: 'lang-link', onClick: function onClick(e) {
      changeLang(e);
    }, 'data-jsx': 177433985
  }, t('common:languageSelector')), _react2.default.createElement('ul', { className: 'desktop-nav', 'data-jsx': 177433985
  }, _react2.default.createElement('li', {
    'data-jsx': 177433985
  }, _react2.default.createElement('a', { href: t('common:header.link1'), 'data-jsx': 177433985
  }, t('common:header.text1'))), _react2.default.createElement('li', {
    'data-jsx': 177433985
  }, _react2.default.createElement('a', { href: t('common:header.link2'), 'data-jsx': 177433985
  }, t('common:header.text2'))), _react2.default.createElement('div', { className: 'dropdown', 'data-jsx': 177433985
  }, _react2.default.createElement('li', { className: 'sub-menu-link', 'data-jsx': 177433985
  }, _react2.default.createElement('a', { href: '#', onClick: function onClick(e) {
      return e.preventDefault();
    }, 'data-jsx': 177433985
  }, t('common:header.jobs'))), _react2.default.createElement('ul', { className: 'sub-menu', 'data-jsx': 177433985
  }, _react2.default.createElement('li', {
    'data-jsx': 177433985
  }, _react2.default.createElement(_link2.default, { href: t('common:header.link3') }, _react2.default.createElement('a', { href: t('common:header.link3'), 'data-jsx': 177433985
  }, t('common:header.text3')))), _react2.default.createElement('li', {
    'data-jsx': 177433985
  }, _react2.default.createElement(_link2.default, { href: t('common:header.link7') }, _react2.default.createElement('a', { href: t('common:header.link7'), 'data-jsx': 177433985
  }, t('common:header.text7')))), _react2.default.createElement('li', {
    'data-jsx': 177433985
  }, _react2.default.createElement(_link2.default, { href: t('common:header.link4') }, _react2.default.createElement('a', { href: t('common:header.link4'), 'data-jsx': 177433985
  }, t('common:header.text4')))), _react2.default.createElement('li', {
    'data-jsx': 177433985
  }, _react2.default.createElement(_link2.default, { href: t('common:header.link5') }, _react2.default.createElement('a', { href: t('common:header.link5'), 'data-jsx': 177433985
  }, t('common:header.text5')))), _react2.default.createElement('li', {
    'data-jsx': 177433985
  }, _react2.default.createElement(_link2.default, { href: t('common:header.link6') }, _react2.default.createElement('a', { href: t('common:header.link6'), 'data-jsx': 177433985
  }, t('common:header.text6'))))))), _react2.default.createElement('a', { href: '#', className: 'open-button', onClick: openNav, 'data-jsx': 177433985
  }, _react2.default.createElement(_reactFontawesome2.default, { name: 'bars', style: { fontSize: '25px' } })))), _react2.default.createElement(_style2.default, {
    styleId: 177433985,
    css: 'header[data-jsx="177433985"]{background-color:#fff;border-bottom:1px solid #000}.top-bar[data-jsx="177433985"]{background-color:#fff;max-width:1000px;margin:0 auto;padding:0px 15px}.top-bar[data-jsx="177433985"] .top-bar-inner[data-jsx="177433985"]{padding:15px 0px;display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;-webkit-align-items:center;-webkit-box-align:center;-ms-flex-align:center;align-items:center;position:relative;-webkit-box-pack:space-between;-webkit-justify-content:space-between;-ms-flex-pack:space-between;justify-content:space-between}.desktop-nav[data-jsx="177433985"] a[data-jsx="177433985"],.top-bar[data-jsx="177433985"] a[data-jsx="177433985"]{color:#000;-webkit-text-decoration:none;text-decoration:none}.desktop-nav[data-jsx="177433985"] a[data-jsx="177433985"],.overlay[data-jsx="177433985"] a[data-jsx="177433985"]{font-family:"Gibson SemiBold";-webkit-letter-spacing:2.18px;-moz-letter-spacing:2.18px;-ms-letter-spacing:2.18px;letter-spacing:2.18px;-webkit-text-transform:uppercase;text-transform:uppercase}.desktop-nav[data-jsx="177433985"] a[data-jsx="177433985"]{display:block;position:relative}.desktop-nav[data-jsx="177433985"] .dropdown[data-jsx="177433985"]{display:inline-block}.desktop-nav[data-jsx="177433985"] .dropdown[data-jsx="177433985"]:hover .sub-menu[data-jsx="177433985"]{display:block}.sub-menu-link[data-jsx="177433985"]:hover .desktop-nav[data-jsx="177433985"] .sub-menu[data-jsx="177433985"]{display:block}.desktop-nav[data-jsx="177433985"] .sub-menu[data-jsx="177433985"]{display:none;list-style-type:none;margin:0;padding:15px;position:absolute;z-index:99;right:0;background:#fff}.desktop-nav[data-jsx="177433985"] .sub-menu[data-jsx="177433985"] li[data-jsx="177433985"]{display:block}.desktop-nav[data-jsx="177433985"] a[data-jsx="177433985"]::before{content:\'\';height:2px;background-color:#000;width:0;display:block;position:absolute;bottom:-5px;-webkit-transition:width 0.3s;transition:width 0.3s}.desktop-nav[data-jsx="177433985"] a[data-jsx="177433985"]:hover[data-jsx="177433985"]::before{width:100%}.lang-link[data-jsx="177433985"]{position:absolute;top:10px;right:15px;-webkit-letter-spacing:1.5px;-moz-letter-spacing:1.5px;-ms-letter-spacing:1.5px;letter-spacing:1.5px;font-size:12px}.top-bar[data-jsx="177433985"] a.lang-link[data-jsx="177433985"]:hover{-webkit-text-decoration:underline;text-decoration:underline}.top-bar[data-jsx="177433985"] .open-button[data-jsx="177433985"]{display:none}.desktop-nav[data-jsx="177433985"]{display:block}.desktop-nav[data-jsx="177433985"] a[data-jsx="177433985"]{font-weight:600;font-size:14px}.overlay[data-jsx="177433985"]{height:0%;width:100%;position:fixed;z-index:99;top:0;left:0;background-color:rgba(0,0,0, 0.95);overflow-y:hidden;-webkit-transition:all 0.5s;-moz-transition:all 0.5s;-o-transition:all 0.5s;-webkit-transition:all 0.5s;transition:all 0.5s;display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;-webkit-align-items:center;-webkit-box-align:center;-ms-flex-align:center;align-items:center;-webkit-box-pack:center;-webkit-justify-content:center;-ms-flex-pack:center;justify-content:center}.overlay-content[data-jsx="177433985"]{position:relative;list-style:none;-webkit-text-align:center;text-align:center}.overlay[data-jsx="177433985"] a[data-jsx="177433985"]{padding:15px;-webkit-text-decoration:none;text-decoration:none;-webkit-text-transform:uppercase;text-transform:uppercase;font-size:25px;color:#fff;display:block;-webkit-transition:all 0.3s;-moz-transition:all 0.3s;-o-transition:all 0.3s;-webkit-transition:all 0.3s;transition:all 0.3s}.overlay[data-jsx="177433985"] a[data-jsx="177433985"]:hover,.overlay[data-jsx="177433985"] a[data-jsx="177433985"]:focus{color:' + _settings2.default.hexColor + '}.overlay[data-jsx="177433985"] .close-button[data-jsx="177433985"]{position:absolute;top:-10px;left:0px;font-size:40px}.desktop-nav[data-jsx="177433985"]{margin:0;margin-top:15px;padding:0;list-style-type:none}.desktop-nav[data-jsx="177433985"] li[data-jsx="177433985"]{display:inline-block;padding:15px}@media screen and (max-width:800px){.lang-link[data-jsx="177433985"]{position:relative;top:0;right:0;font-size:14px}.top-bar[data-jsx="177433985"] a[data-jsx="177433985"]{-webkit-flex-basis:100%;-ms-flex-basis:100%;flex-basis:100%}.home-link[data-jsx="177433985"]{-webkit-order:2;-ms-flex-order:2;order:2;-webkit-text-align:center;text-align:center}.lang-link[data-jsx="177433985"]{-webkit-order:3;-ms-flex-order:3;order:3;-webkit-text-align:right;text-align:right}.open-button[data-jsx="177433985"]{-webkit-order:1;-ms-flex-order:1;order:1}.overlay[data-jsx="177433985"] a[data-jsx="177433985"]{padding:10px;font-size:20px}.top-bar[data-jsx="177433985"] .open-button[data-jsx="177433985"]{display:block}.desktop-nav[data-jsx="177433985"]{display:none}}.brand-img[data-jsx="177433985"]{max-width:100%;height:66px}@media (max-width:939px){.brand-img[data-jsx="177433985"]{height:50px}}@media (max-width:568px){.brand-img[data-jsx="177433985"]{height:33px}}@media screen and (max-height:450px){.overlay[data-jsx="177433985"]{overflow-y:auto}.overlay[data-jsx="177433985"] a[data-jsx="177433985"]{padding:10px;-webkit-text-decoration:none;text-decoration:none;font-size:20px}.overlay[data-jsx="177433985"] .closebtn[data-jsx="177433985"]{font-size:40px;top:15px;right:35px}}'
  }));
};
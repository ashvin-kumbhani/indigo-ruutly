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

var _settings = require('../settings.js');

var _settings2 = _interopRequireDefault(_settings);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var getYear = function getYear() {
  var date = new Date();
  var year = date.getFullYear();
  return year;
};

exports.default = function (_ref) {
  var t = _ref.t;
  return _react2.default.createElement('footer', {
    'data-jsx': 422560545
  }, _react2.default.createElement('div', { className: 'footer-content', 'data-jsx': 422560545
  }, _react2.default.createElement('div', { className: 'footer-blocks', 'data-jsx': 422560545
  }, _react2.default.createElement('div', { className: 'footer-menu', 'data-jsx': 422560545
  }, _react2.default.createElement('h4', {
    'data-jsx': 422560545
  }, t('common:footer1.header')), _react2.default.createElement('ul', {
    'data-jsx': 422560545
  }, _react2.default.createElement('li', {
    'data-jsx': 422560545
  }, _react2.default.createElement('a', { href: t('common:footer1.link1'), 'data-jsx': 422560545
  }, t('common:footer1.text1'))), _react2.default.createElement('li', {
    'data-jsx': 422560545
  }, _react2.default.createElement('a', { href: t('common:footer1.link2'), 'data-jsx': 422560545
  }, t('common:footer1.text2'))), _react2.default.createElement('li', {
    'data-jsx': 422560545
  }, _react2.default.createElement(_link2.default, { href: t('common:footer1.link3') }, _react2.default.createElement('a', { href: t('common:footer1.link3'), 'data-jsx': 422560545
  }, t('common:footer1.text3')))), _react2.default.createElement('li', {
    'data-jsx': 422560545
  }, _react2.default.createElement(_link2.default, { href: t('common:footer1.link7') }, _react2.default.createElement('a', { href: t('common:footer1.link7'), 'data-jsx': 422560545
  }, t('common:footer1.text7')))), _react2.default.createElement('li', {
    'data-jsx': 422560545
  }, _react2.default.createElement(_link2.default, { href: t('common:footer1.link4') }, _react2.default.createElement('a', { href: t('common:footer1.link4'), 'data-jsx': 422560545
  }, t('common:footer1.text4')))), _react2.default.createElement('li', {
    'data-jsx': 422560545
  }, _react2.default.createElement(_link2.default, { href: t('common:footer1.link5') }, _react2.default.createElement('a', { href: t('common:footer1.link5'), 'data-jsx': 422560545
  }, t('common:footer1.text5')))), _react2.default.createElement('li', {
    'data-jsx': 422560545
  }, _react2.default.createElement(_link2.default, { href: t('common:footer1.link6') }, _react2.default.createElement('a', { href: t('common:footer1.link6'), 'data-jsx': 422560545
  }, t('common:footer1.text6')))))), _react2.default.createElement('div', { className: 'footer-menu', 'data-jsx': 422560545
  }, _react2.default.createElement('h4', {
    'data-jsx': 422560545
  }, t('common:footer2.header')), _react2.default.createElement('ul', {
    'data-jsx': 422560545
  }, _react2.default.createElement('li', {
    'data-jsx': 422560545
  }, _react2.default.createElement('a', { href: t('common:footer2.link1'), 'data-jsx': 422560545
  }, t('common:footer2.text1'))), _react2.default.createElement('li', {
    'data-jsx': 422560545
  }, _react2.default.createElement('a', { href: t('common:footer2.link2'), 'data-jsx': 422560545
  }, t('common:footer2.text2'))), _react2.default.createElement('li', {
    'data-jsx': 422560545
  }, _react2.default.createElement('a', { href: t('common:footer2.link3'), 'data-jsx': 422560545
  }, t('common:footer2.text3'))), _react2.default.createElement('li', {
    'data-jsx': 422560545
  }, _react2.default.createElement('a', { href: t('common:footer2.link4'), 'data-jsx': 422560545
  }, t('common:footer2.text4'))), _react2.default.createElement('li', {
    'data-jsx': 422560545
  }, _react2.default.createElement('a', { href: t('common:footer2.link5'), 'data-jsx': 422560545
  }, t('common:footer2.text5'))), _react2.default.createElement('li', {
    'data-jsx': 422560545
  }, _react2.default.createElement('a', { href: t('common:footer2.link6'), 'data-jsx': 422560545
  }, t('common:footer2.text6'))))), _react2.default.createElement('div', { className: 'footer-social', 'data-jsx': 422560545
  }, _react2.default.createElement('h4', {
    'data-jsx': 422560545
  }, t('common:footer3.header')), _react2.default.createElement('ul', {
    'data-jsx': 422560545
  }, _settings2.default.twitterLink.length > 0 ? _react2.default.createElement('li', {
    'data-jsx': 422560545
  }, _react2.default.createElement('a', { href: _settings2.default.twitterLink, target: '_blank', 'data-jsx': 422560545
  }, _react2.default.createElement(_reactFontawesome2.default, { fixedWidth: true, name: 'twitter', style: { fontSize: '20px' } }))) : null, _settings2.default.facebookLink.length > 0 ? _react2.default.createElement('li', {
    'data-jsx': 422560545
  }, _react2.default.createElement('a', { href: _settings2.default.facebookLink, target: '_blank', 'data-jsx': 422560545
  }, _react2.default.createElement(_reactFontawesome2.default, { fixedWidth: true, name: 'facebook', style: { fontSize: '20px' } }))) : null, _settings2.default.linkedInLink.length > 0 ? _react2.default.createElement('li', {
    'data-jsx': 422560545
  }, _react2.default.createElement('a', { href: _settings2.default.linkedInLink, target: '_blank', 'data-jsx': 422560545
  }, _react2.default.createElement(_reactFontawesome2.default, { fixedWidth: true, name: 'linkedin', style: { fontSize: '20px' } }))) : null, _settings2.default.instagramLink.length > 0 ? _react2.default.createElement('li', {
    'data-jsx': 422560545
  }, _react2.default.createElement('a', { href: _settings2.default.instagramLink, target: '_blank', 'data-jsx': 422560545
  }, _react2.default.createElement(_reactFontawesome2.default, { fixedWidth: true, name: 'instagram', style: { fontSize: '20px' } }))) : null, _settings2.default.youtubeLink.length > 0 ? _react2.default.createElement('li', {
    'data-jsx': 422560545
  }, _react2.default.createElement('a', { href: _settings2.default.youtubeLink, target: '_blank', 'data-jsx': 422560545
  }, _react2.default.createElement(_reactFontawesome2.default, { fixedWidth: true, name: 'youtube', style: { fontSize: '20px' } }))) : null, _settings2.default.pinterestLink.length > 0 ? _react2.default.createElement('li', {
    'data-jsx': 422560545
  }, _react2.default.createElement('a', { href: _settings2.default.pinterestLink, target: '_blank', 'data-jsx': 422560545
  }, _react2.default.createElement(_reactFontawesome2.default, { fixedWidth: true, name: 'pinterest', style: { fontSize: '20px' } }))) : null))), _react2.default.createElement('div', { className: 'footer-copy', 'data-jsx': 422560545
  }, '\xA9', getYear(), ' ', t('common:copyRight'))), _react2.default.createElement(_style2.default, {
    styleId: 422560545,
    css: 'footer[data-jsx="422560545"]{background-color:#000;color:#fff}.footer-content[data-jsx="422560545"]{max-width:1000px;margin:0 auto;padding:30px 15px}.footer-blocks[data-jsx="422560545"]{display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;-webkit-box-pack:space-between;-webkit-justify-content:space-between;-ms-flex-pack:space-between;justify-content:space-between}.footer-menu[data-jsx="422560545"],.footer-social[data-jsx="422560545"]{margin-bottom:25px}.footer-menu[data-jsx="422560545"] ul[data-jsx="422560545"]{list-style-type:none;margin:0;padding:0}.footer-menu[data-jsx="422560545"] ul[data-jsx="422560545"] li[data-jsx="422560545"] a[data-jsx="422560545"]{color:#fff;-webkit-text-decoration:none;text-decoration:none;-webkit-letter-spacing:1.3px;-moz-letter-spacing:1.3px;-ms-letter-spacing:1.3px;letter-spacing:1.3px;font-family:"Gibson Regular",Helvetica,Arial,Verdana,sans-serif;font-size:11px;line-height:16px}.footer-menu[data-jsx="422560545"] ul[data-jsx="422560545"] li[data-jsx="422560545"] a[data-jsx="422560545"]:hover{-webkit-text-decoration:underline;text-decoration:underline}.footer-blocks[data-jsx="422560545"] h4[data-jsx="422560545"]{font-size:13px;font-family:"Gibson SemiBold",Helvetica,Arial,Verdana,sans-serif;-webkit-letter-spacing:2.34px;-moz-letter-spacing:2.34px;-ms-letter-spacing:2.34px;letter-spacing:2.34px;line-height:20px;-webkit-text-transform:uppercase;text-transform:uppercase}.footer-content[data-jsx="422560545"] .home-link[data-jsx="422560545"]{-webkit-text-decoration:none;text-decoration:none;color:#fff}.footer-content[data-jsx="422560545"] .brand-address[data-jsx="422560545"]{font-size:10px}.footer-content[data-jsx="422560545"] .footer-copy[data-jsx="422560545"]{font-family:"Gibson Regular",Helvetica,Arial,Verdana,sans-serif;font-size:10px;-webkit-letter-spacing:2px;-moz-letter-spacing:2px;-ms-letter-spacing:2px;letter-spacing:2px}.footer-content[data-jsx="422560545"] .footer-nav[data-jsx="422560545"] ul[data-jsx="422560545"],.footer-content[data-jsx="422560545"] .footer-social[data-jsx="422560545"] ul[data-jsx="422560545"]{list-style:none;margin:0;padding:0;padding-top:5px;padding-bottom:5px}.footer-content[data-jsx="422560545"] .footer-nav[data-jsx="422560545"] li[data-jsx="422560545"],.footer-content[data-jsx="422560545"] .footer-social[data-jsx="422560545"] li[data-jsx="422560545"]{display:inline-block;padding-right:10px;-webkit-text-transform:uppercase;text-transform:uppercase}.footer-content[data-jsx="422560545"] .footer-nav[data-jsx="422560545"] li[data-jsx="422560545"] a[data-jsx="422560545"],.footer-content[data-jsx="422560545"] .footer-social[data-jsx="422560545"] li[data-jsx="422560545"] a[data-jsx="422560545"]{color:#fff;-webkit-text-transform:uppercase;text-transform:uppercase;-webkit-text-decoration:none;text-decoration:none;-webkit-transition:all 0.3s;-moz-transition:all 0.3s;-o-transition:all 0.3s;-webkit-transition:all 0.3s;transition:all 0.3s;font-size:12px}.footer-content[data-jsx="422560545"] .footer-nav[data-jsx="422560545"] li[data-jsx="422560545"] a[data-jsx="422560545"]:hover,.footer-content[data-jsx="422560545"] .footer-social[data-jsx="422560545"] li[data-jsx="422560545"] a[data-jsx="422560545"]:hover{color:' + _settings2.default.hexColor + '}@media screen and (max-width:720px){.footer-blocks[data-jsx="422560545"]{-webkit-flex-direction:column;-ms-flex-direction:column;flex-direction:column}.footer-content[data-jsx="422560545"] .footer-nav[data-jsx="422560545"] ul[data-jsx="422560545"] li[data-jsx="422560545"]{display:block}}'
  }));
};
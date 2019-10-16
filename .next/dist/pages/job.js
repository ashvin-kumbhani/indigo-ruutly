'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _regenerator = require('babel-runtime/regenerator');

var _regenerator2 = _interopRequireDefault(_regenerator);

var _extends2 = require('babel-runtime/helpers/extends');

var _extends3 = _interopRequireDefault(_extends2);

var _asyncToGenerator2 = require('babel-runtime/helpers/asyncToGenerator');

var _asyncToGenerator3 = _interopRequireDefault(_asyncToGenerator2);

var _getPrototypeOf = require('babel-runtime/core-js/object/get-prototype-of');

var _getPrototypeOf2 = _interopRequireDefault(_getPrototypeOf);

var _classCallCheck2 = require('babel-runtime/helpers/classCallCheck');

var _classCallCheck3 = _interopRequireDefault(_classCallCheck2);

var _createClass2 = require('babel-runtime/helpers/createClass');

var _createClass3 = _interopRequireDefault(_createClass2);

var _possibleConstructorReturn2 = require('babel-runtime/helpers/possibleConstructorReturn');

var _possibleConstructorReturn3 = _interopRequireDefault(_possibleConstructorReturn2);

var _inherits2 = require('babel-runtime/helpers/inherits');

var _inherits3 = _interopRequireDefault(_inherits2);

var _style = require('styled-jsx/style.js');

var _style2 = _interopRequireDefault(_style);

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _reactFontawesome = require('react-fontawesome');

var _reactFontawesome2 = _interopRequireDefault(_reactFontawesome);

require('isomorphic-fetch');

var _reactGa = require('react-ga');

var _reactGa2 = _interopRequireDefault(_reactGa);

var _reactI18next = require('react-i18next');

var _i18n = require('../i18n');

var _i18n2 = _interopRequireDefault(_i18n);

var _layout = require('../components/layout');

var _layout2 = _interopRequireDefault(_layout);

var _settings = require('../settings.js');

var _settings2 = _interopRequireDefault(_settings);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var _this2 = undefined;

var months = ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December'];

var JobListing = function (_React$Component) {
  (0, _inherits3.default)(JobListing, _React$Component);

  function JobListing() {
    var _ref;

    var _temp, _this, _ret;

    (0, _classCallCheck3.default)(this, JobListing);

    for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    return _ret = (_temp = (_this = (0, _possibleConstructorReturn3.default)(this, (_ref = JobListing.__proto__ || (0, _getPrototypeOf2.default)(JobListing)).call.apply(_ref, [this].concat(args))), _this), _this.getNiceDate = function (date) {
      var dateToFormat = new Date(date);
      return months[dateToFormat.getMonth()] + ' ' + dateToFormat.getDate() + ', ' + dateToFormat.getFullYear();
    }, _this.getNiceDate = function (date) {
      var dateToFormat = new Date(date);
      return months[dateToFormat.getMonth()] + ' ' + dateToFormat.getDate() + ', ' + dateToFormat.getFullYear();
    }, _temp), (0, _possibleConstructorReturn3.default)(_this, _ret);
  }

  (0, _createClass3.default)(JobListing, [{
    key: 'componentDidMount',
    value: function componentDidMount() {
      // if (typeof window !== 'undefined') {
      //   ReactGA.initialize('UA-96732795-1')
      //   const page = window.location.pathname;
      //   ReactGA.set({ page: page })
      //   ReactGA.pageview(page)
      // }
      iFrameResize();
    }
  }, {
    key: 'returnDepartment',
    value: function returnDepartment(fieldObject) {
      var valueLabel = fieldObject.valueLabel;
      return valueLabel;
    }
  }, {
    key: 'companySegment',
    value: function companySegment(fieldObject) {
      var valueLabel = fieldObject.valueLabel;
      if (valueLabel == "Stores") {
        return "Retail";
      } else return valueLabel;
    }
  }, {
    key: 'render',
    value: function render() {
      var job = this.props.job;
      var t = this.props.t;
      console.log(job);
      return _react2.default.createElement(_layout2.default, { title: job.rTitle + ' - ' + _settings2.default.companyName, description: job.jobAd.sections.jobDescription.text.substring(0, 160) + '...' }, _react2.default.createElement('div', { className: 'job-container', 'data-jsx': 2950311546
      }, _react2.default.createElement('div', { className: 'inner-container', 'data-jsx': 2950311546
      }, _react2.default.createElement('div', { className: 'ruutly-container', 'data-jsx': 2950311546
      }, _react2.default.createElement('iframe', { src: 'https://beta.ruutly.com/indigo/' + job.id, frameBorder: '0', width: '100%', height: '0', style: { minWidth: '100%', width: '1px' }, scrolling: 'no', 'data-jsx': 2950311546
      })), _react2.default.createElement('div', { className: 'job-info', 'data-jsx': 2950311546
      }, _react2.default.createElement('div', { className: 'content', 'data-jsx': 2950311546
      }, _react2.default.createElement('h1', {
        'data-jsx': 2950311546
      }, job.name), _react2.default.createElement('div', { className: 'job-meta', 'data-jsx': 2950311546
      }, _react2.default.createElement('ul', {
        'data-jsx': 2950311546
      }, _react2.default.createElement('li', { className: 'industry', 'data-jsx': 2950311546
      }, t('common:segments.' + job.rCompanySegment)), _react2.default.createElement('li', {
        'data-jsx': 2950311546
      }, _react2.default.createElement(_reactFontawesome2.default, { fixedWidth: true, name: 'check-square-o', style: { fontSize: '16px' } }), ' ', t('common:levels.' + job.rExperience)), job.rStoreName.length > 0 ? _react2.default.createElement('li', {
        'data-jsx': 2950311546
      }, _react2.default.createElement(_reactFontawesome2.default, { fixedWidth: true, name: 'shopping-cart', style: { fontSize: '16px' } }), ' ', job.rStoreName) : null, _react2.default.createElement('li', {
        'data-jsx': 2950311546
      }, _react2.default.createElement(_reactFontawesome2.default, { fixedWidth: true, name: 'user-circle-o', style: { fontSize: '16px' } }), ' ', t('common:departments.' + job.rDepartment))))), _react2.default.createElement('div', { className: 'job-ctas', 'data-jsx': 2950311546
      }, _react2.default.createElement('a', { href: job.applyUrl, className: 'apply-button', 'data-jsx': 2950311546
      }, t('common:applyForJob')))), job.jobAd.sections.companyDescription.text.length > 0 ? _react2.default.createElement('div', { className: 'text-container', 'data-jsx': 2950311546
      }, _react2.default.createElement('div', { className: 'text-block', 'data-jsx': 2950311546
      }, _react2.default.createElement('div', { className: 'inner-block', 'data-jsx': 2950311546
      }, _react2.default.createElement('h3', {
        'data-jsx': 2950311546
      }, t('common:job.companyDesc')), _react2.default.createElement('div', { dangerouslySetInnerHTML: { __html: job.jobAd.sections.companyDescription.text }, 'data-jsx': 2950311546
      })))) : null, _react2.default.createElement('div', { className: 'text-container', 'data-jsx': 2950311546
      }, _react2.default.createElement('div', { className: 'text-block', 'data-jsx': 2950311546
      }, _react2.default.createElement('div', { className: 'inner-block', 'data-jsx': 2950311546
      }, _react2.default.createElement('h3', {
        'data-jsx': 2950311546
      }, t('common:job.jobDesc')), _react2.default.createElement('div', { dangerouslySetInnerHTML: { __html: job.jobAd.sections.jobDescription.text }, 'data-jsx': 2950311546
      })))), _react2.default.createElement('div', { className: 'text-container', 'data-jsx': 2950311546
      }, _react2.default.createElement('div', { className: 'text-block', 'data-jsx': 2950311546
      }, _react2.default.createElement('div', { className: 'inner-block', 'data-jsx': 2950311546
      }, _react2.default.createElement('h3', {
        'data-jsx': 2950311546
      }, t('common:job.qualifications')), _react2.default.createElement('div', { dangerouslySetInnerHTML: { __html: job.jobAd.sections.qualifications.text }, 'data-jsx': 2950311546
      })))), job.jobAd.sections.additionalInformation.text.length > 0 ? _react2.default.createElement('div', { className: 'text-container', 'data-jsx': 2950311546
      }, _react2.default.createElement('div', { className: 'text-block', 'data-jsx': 2950311546
      }, _react2.default.createElement('div', { className: 'inner-block', 'data-jsx': 2950311546
      }, _react2.default.createElement('h3', {
        'data-jsx': 2950311546
      }, t('common:job.additionalInfo')), _react2.default.createElement('div', { dangerouslySetInnerHTML: { __html: job.jobAd.sections.additionalInformation.text }, 'data-jsx': 2950311546
      })))) : null), _react2.default.createElement('div', { className: 'apply-div', 'data-jsx': 2950311546
      }, _react2.default.createElement('a', { href: job.applyUrl, className: 'apply-button', 'data-jsx': 2950311546
      }, t('common:applyForJob'))), _react2.default.createElement(_style2.default, {
        styleId: 2950311546,
        css: '.job-container[data-jsx="2950311546"]{background-color:#fff}.inner-container[data-jsx="2950311546"]{padding:0 15px;max-width:1000px;margin:0 auto}.ruutly-container[data-jsx="2950311546"]{padding-top:30px;display:block;margin-bottom:30px}.job-info[data-jsx="2950311546"]{background-color:' + _settings2.default.hexColor + ';border:1px solid ' + _settings2.default.hexColor + ';margin:0 auto;color:#fff;display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;padding:35px 25px;-webkit-align-items:center;-webkit-box-align:center;-ms-flex-align:center;align-items:center;-webkit-box-pack:space-between;-webkit-justify-content:space-between;-ms-flex-pack:space-between;justify-content:space-between}.job-info[data-jsx="2950311546"] .content[data-jsx="2950311546"]{margin-right:25px}.job-info[data-jsx="2950311546"] .content[data-jsx="2950311546"] h1[data-jsx="2950311546"]{margin:0;font-size:22px;line-height:30px;font-family:"Gibson SemiBold";-webkit-letter-spacing:2.18px;-moz-letter-spacing:2.18px;-ms-letter-spacing:2.18px;letter-spacing:2.18px;color:#fff;margin-bottom:15px}.job-info[data-jsx="2950311546"] .content[data-jsx="2950311546"] h1[data-jsx="2950311546"] span[data-jsx="2950311546"]{float:right}.job-info[data-jsx="2950311546"] .job-meta[data-jsx="2950311546"]{font-size:12px;font-family:"Gibson Light",Helvetica,Arial,Verdana,sans-serif;-webkit-letter-spacing:1.5px;-moz-letter-spacing:1.5px;-ms-letter-spacing:1.5px;letter-spacing:1.5px;color:#fff}.job-info[data-jsx="2950311546"] .job-meta[data-jsx="2950311546"] ul[data-jsx="2950311546"]{margin:0;padding:0;margin-left:-5px;margin-right:-5px}.job-info[data-jsx="2950311546"] .job-title-location[data-jsx="2950311546"]{-webkit-flex:1;-ms-flex:1;flex:1}.job-info[data-jsx="2950311546"] .job-meta[data-jsx="2950311546"] ul[data-jsx="2950311546"] li[data-jsx="2950311546"]{display:inline-block;padding:5px 15px;border:1px solid #fff;margin-left:5px;margin-right:5px;margin-bottom:10px}.job-info[data-jsx="2950311546"] .job-meta[data-jsx="2950311546"] ul[data-jsx="2950311546"] li.industry[data-jsx="2950311546"]{font-size:12px;-webkit-text-transform:uppercase;text-transform:uppercase;color:#fff;background-color:transparent;border:1px solid #fff}.job-info[data-jsx="2950311546"] .content[data-jsx="2950311546"] h1[data-jsx="2950311546"] span[data-jsx="2950311546"] a[data-jsx="2950311546"]{-webkit-text-decoration:none;text-decoration:none;color:#fff;font-size:16px;background-color:#fff;padding:5px 30px;border-radius:20px;-webkit-text-transform:uppercase;text-transform:uppercase}.job-ctas[data-jsx="2950311546"] a[data-jsx="2950311546"]{background-color:#FFF;color:#000;position:relative;-webkit-text-decoration:none;text-decoration:none;padding:10px 15px;font-size:12px;-webkit-text-transform:uppercase;text-transform:uppercase;font-family:"Gibson SemiBold",Helvetica,Arial,Verdana,sans-serif;-webkit-letter-spacing:2.3px;-moz-letter-spacing:2.3px;-ms-letter-spacing:2.3px;letter-spacing:2.3px;display:block;width:200px;-webkit-text-align:center;text-align:center;-webkit-transition:all 0.3s;transition:all 0.3s}.job-ctas[data-jsx="2950311546"] a[data-jsx="2950311546"]:hover{color:#fff;background-color:transparent}.job-ctas[data-jsx="2950311546"] a[data-jsx="2950311546"]::before{content:\'\';height:2px;background-color:#fff;width:0;display:block;position:absolute;bottom:0px;left:0;-webkit-transition:width 0.3s;transition:width 0.3s}.job-ctas[data-jsx="2950311546"] a[data-jsx="2950311546"]:hover[data-jsx="2950311546"]::before{width:100%}.text-container[data-jsx="2950311546"]{border:1px solid #000;background-color:#fff;margin:0 auto;margin-bottom:35px}.text-block[data-jsx="2950311546"]{position:relative}.text-block[data-jsx="2950311546"] h1[data-jsx="2950311546"],.text-block[data-jsx="2950311546"] h2[data-jsx="2950311546"]{color:' + _settings2.default.hexColor + ';margin-top:0;margin-bottom:15px}.text-block[data-jsx="2950311546"] h1[data-jsx="2950311546"]{font-size:30px}.text-block[data-jsx="2950311546"] h2[data-jsx="2950311546"]{font-size:20px}.text-block.orange[data-jsx="2950311546"]{background-color:' + _settings2.default.hexColor + ';padding-top:15px;padding-bottom:15px}.more-container[data-jsx="2950311546"]{background-color:#fff}.more-container[data-jsx="2950311546"] .text-content[data-jsx="2950311546"]{max-width:1000px;padding:50px 15px;margin:0 auto}.text-block.orange[data-jsx="2950311546"] .inner-block[data-jsx="2950311546"]{max-width:100%}.text-block[data-jsx="2950311546"] .inner-block[data-jsx="2950311546"]{padding:25px;max-width:800px;margin:0 auto}.apply-div[data-jsx="2950311546"]{display:block;padding-bottom:35px;margin-top:35px;margin-top:35px;-webkit-text-align:center;text-align:center;display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;-webkit-box-pack:center;-webkit-justify-content:center;-ms-flex-pack:center;justify-content:center}.apply-div[data-jsx="2950311546"] .apply-button[data-jsx="2950311546"]{padding:10px 15px;position:relative;min-width:220px;display:block;font-size:12px;-webkit-text-transform:uppercase;text-transform:uppercase;-webkit-text-decoration:none;text-decoration:none;background-color:#000;color:#fff;-webkit-text-transform:uppercase;text-transform:uppercase;font-family:"Gibson SemiBold",Helvetica,Arial,Verdana,sans-serif;-webkit-letter-spacing:2.3px;-moz-letter-spacing:2.3px;-ms-letter-spacing:2.3px;letter-spacing:2.3px;-webkit-text-align:center;text-align:center;background-color:#000;color:#fff;-webkit-transition:all 0.3s;transition:all 0.3s}.apply-div[data-jsx="2950311546"] .apply-button[data-jsx="2950311546"]::before{content:\'\';height:2px;background-color:#000;width:0;display:block;position:absolute;bottom:0px;left:0;-webkit-transition:width 0.3s;transition:width 0.3s}.apply-div[data-jsx="2950311546"] .apply-button[data-jsx="2950311546"]:hover[data-jsx="2950311546"]::before{width:100%}.apply-div[data-jsx="2950311546"] .apply-button[data-jsx="2950311546"]:hover{background-color:transparent;color:#000}.info-inner[data-jsx="2950311546"]{-ms-box-orient:horizontal;display:-webkit-box;display:-moz-box;display:-ms-flexbox;display:-moz-flex;display:-webkit-flex;display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;-webkit-flex-wrap:wrap;-webkit-flex-wrap:wrap;-ms-flex-wrap:wrap;flex-wrap:wrap}.info-inner[data-jsx="2950311546"] .info-item[data-jsx="2950311546"]{color:#fff;font-size:15px;width:33.33%;line-height:30px;-webkit-text-align:center;text-align:center}.text-block[data-jsx="2950311546"] h3[data-jsx="2950311546"]{font-family:"Gibson SemiBold",Helvetica,Arial,Verdana,sans-serif;-webkit-letter-spacing:1.5px;-moz-letter-spacing:1.5px;-ms-letter-spacing:1.5px;letter-spacing:1.5px;-webkit-text-transform:uppercase;text-transform:uppercase}@media screen and (max-width:900px){.info-inner[data-jsx="2950311546"] .info-item[data-jsx="2950311546"]{width:50%}.job-info[data-jsx="2950311546"]{-webkit-flex-direction:column;-ms-flex-direction:column;flex-direction:column}.job-info[data-jsx="2950311546"] .job-ctas[data-jsx="2950311546"]{margin-top:30px;width:100%}.job-info[data-jsx="2950311546"] .job-ctas[data-jsx="2950311546"] a[data-jsx="2950311546"]{width:auto}}@media screen and (max-width:600px){.info-inner[data-jsx="2950311546"] .info-item[data-jsx="2950311546"]{width:100%}}'
      })));
    }
  }]);

  return JobListing;
}(_react2.default.Component);

var ExtendedJob = (0, _reactI18next.translate)('common', { i18n: _i18n2.default })(JobListing);

// Passing down initial translations
// use req.i18n instance on serverside to avoid overlapping requests set the language wrong
ExtendedJob.getInitialProps = function () {
  var _ref3 = (0, _asyncToGenerator3.default)(_regenerator2.default.mark(function _callee(_ref2) {
    var req = _ref2.req,
        _ref2$query = _ref2.query,
        id = _ref2$query.id,
        title = _ref2$query.title;
    var res, json, job;
    return _regenerator2.default.wrap(function _callee$(_context) {
      while (1) {
        switch (_context.prev = _context.next) {
          case 0:
            _context.next = 2;
            return fetch('' + _settings2.default.apiJob + id);

          case 2:
            res = _context.sent;
            _context.next = 5;
            return res.json();

          case 5:
            json = _context.sent;
            job = json;

            job.rStoreName = job.customField.find(function (field) {
              return field.fieldLabel == "Store Name";
            }) ? job.customField.find(function (field) {
              return field.fieldLabel == "Store Name";
            }).valueLabel : "";
            if (job.customField.find(function (field) {
              return field.fieldLabel == "Company Segment";
            }) && job.customField.find(function (field) {
              return field.fieldLabel == "Company Segment";
            }).valueLabel == "Home Office") {
              job.rStoreName = "";
            }
            if (job.customField.find(function (field) {
              return field.fieldLabel == "Company Segment";
            }) && job.customField.find(function (field) {
              return field.fieldLabel == "Company Segment";
            }).valueLabel == "Distribution") {
              job.rStoreName = "";
            }
            job.rDepartment = job.department.label ? job.department.label : "Not Specified";
            job.rLocation = '' + job.location.city + (job.location.region ? ', ' + job.location.region : "Not Specified");
            job.rType = job.typeOfEmployment.label;
            job.rExperience = job.experienceLevel.label;
            job.rCompanySegment = job.customField.find(function (field) {
              return field.fieldLabel == "Company Segment";
            }) ? job.customField.find(function (field) {
              return field.fieldLabel == "Company Segment";
            }).valueLabel : "";
            if (job.customField.find(function (field) {
              return field.fieldLabel == "Company Segment";
            }) && job.customField.find(function (field) {
              return field.fieldLabel == "Company Segment";
            }).valueLabel == "Stores") {
              job.rCompanySegment = "Retail";
            }
            job.rTitle = job.name;

            if (!(req && !process.browser)) {
              _context.next = 19;
              break;
            }

            return _context.abrupt('return', (0, _extends3.default)({ job: json }, _i18n2.default.getInitialProps(req, ['common'])));

          case 19:
            return _context.abrupt('return', { job: json });

          case 20:
          case 'end':
            return _context.stop();
        }
      }
    }, _callee, _this2);
  }));

  return function (_x) {
    return _ref3.apply(this, arguments);
  };
}();

exports.default = ExtendedJob;
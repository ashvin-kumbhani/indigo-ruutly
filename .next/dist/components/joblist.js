'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _regenerator = require('babel-runtime/regenerator');

var _regenerator2 = _interopRequireDefault(_regenerator);

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

var _link = require('next/dist/lib/link.js');

var _link2 = _interopRequireDefault(_link);

var _reactPaginate = require('react-paginate');

var _reactPaginate2 = _interopRequireDefault(_reactPaginate);

var _reactFontawesome = require('react-fontawesome');

var _reactFontawesome2 = _interopRequireDefault(_reactFontawesome);

var _reactScroll = require('react-scroll');

var _reactScroll2 = _interopRequireDefault(_reactScroll);

var _i18n = require('../i18n');

var _i18n2 = _interopRequireDefault(_i18n);

var _reactI18next = require('react-i18next');

var _settings = require('../settings.js');

var _settings2 = _interopRequireDefault(_settings);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var _this3 = undefined;

var reactStringReplace = require('react-string-replace');

var scroll = _reactScroll2.default.animateScroll;

var JobList = function (_React$Component) {
  (0, _inherits3.default)(JobList, _React$Component);

  function JobList() {
    var _ref;

    var _temp, _this, _ret;

    (0, _classCallCheck3.default)(this, JobList);

    for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    return _ret = (_temp = (_this = (0, _possibleConstructorReturn3.default)(this, (_ref = JobList.__proto__ || (0, _getPrototypeOf2.default)(JobList)).call.apply(_ref, [this].concat(args))), _this), _this.handlePageClick = function (data) {
      var selected = data.selected;
      _this.props.handlePageClick(selected);
    }, _temp), (0, _possibleConstructorReturn3.default)(_this, _ret);
  }

  (0, _createClass3.default)(JobList, [{
    key: 'render',
    value: function render() {
      var _this2 = this;

      var currentResults = this.props.jobs;
      var totalResults = this.props.totalResults;
      var t = this.props.t;
      return _react2.default.createElement('div', { style: { paddingBottom: '40px', paddingTop: '40px' }, 'data-jsx': 1845113624
      }, _react2.default.createElement('h3', { id: 'jobs-list', style: { textAlign: 'center', color: '#626262' }, 'data-jsx': 1845113624
      }, t('common:results'), ' (', totalResults, ')'), currentResults.length > 0 ? _react2.default.createElement('ul', { className: 'jobs-list', 'data-jsx': 1845113624
      }, currentResults.map(function (job) {
        if (_this2.props.search.length > 0) {
          var jobName = reactStringReplace(job.rTitle, _this2.props.search, function (match, i) {
            return _react2.default.createElement('span', { key: i, className: 'hl', 'data-jsx': 1845113624
            }, match);
          });
          var jobLocation = reactStringReplace(job.rLocation, _this2.props.search, function (match, i) {
            return _react2.default.createElement('span', { key: i, className: 'hl', 'data-jsx': 1845113624
            }, match);
          });
          var jobExperience = reactStringReplace(job.rExperience, _this2.props.search, function (match, i) {
            return _react2.default.createElement('span', { key: i, className: 'hl', 'data-jsx': 1845113624
            }, match);
          });
          var jobDepartment = reactStringReplace(t('common:departments.' + job.rDepartment), _this2.props.search, function (match, i) {
            return _react2.default.createElement('span', { key: i, className: 'hl', 'data-jsx': 1845113624
            }, match);
          });
          var jobType = reactStringReplace(t('common:types.' + job.rType), _this2.props.search, function (match, i) {
            return _react2.default.createElement('span', { key: i, className: 'hl', 'data-jsx': 1845113624
            }, match);
          });
          var jobStoreName = reactStringReplace(job.rStoreName, _this2.props.search, function (match, i) {
            return _react2.default.createElement('span', { key: i, className: 'hl', 'data-jsx': 1845113624
            }, match);
          });
          return _react2.default.createElement('li', { key: job.id, 'data-jsx': 1845113624
          }, _react2.default.createElement('div', { className: 'job-item', 'data-jsx': 1845113624
          }, _react2.default.createElement('div', { className: 'job-info', 'data-jsx': 1845113624
          }, _react2.default.createElement('div', { className: 'job-title-location', 'data-jsx': 1845113624
          }, _react2.default.createElement(_link2.default, { href: '/job?id=' + job.id + '&tile=' + encodeURIComponent(job.rTitle), as: '/job/' + job.id + '/' + encodeURIComponent(job.rTitle) }, _react2.default.createElement('a', { className: 'view-job-link', href: '/job/' + job.id + '/' + encodeURIComponent(job.rTitle), 'data-jsx': 1845113624
          }, _react2.default.createElement('h3', {
            'data-jsx': 1845113624
          }, jobName))), _react2.default.createElement('div', { className: 'job-meta', 'data-jsx': 1845113624
          }, _react2.default.createElement('ul', {
            'data-jsx': 1845113624
          }, _react2.default.createElement('li', {
            'data-jsx': 1845113624
          }, _react2.default.createElement(_reactFontawesome2.default, { fixedWidth: true, name: 'map-marker', style: { fontSize: '16px' } }), jobLocation), _react2.default.createElement('li', {
            'data-jsx': 1845113624
          }, _react2.default.createElement(_reactFontawesome2.default, { fixedWidth: true, name: 'user-circle-o', style: { fontSize: '16px' } }), ' ', jobDepartment), _react2.default.createElement('li', {
            'data-jsx': 1845113624
          }, _react2.default.createElement(_reactFontawesome2.default, { fixedWidth: true, name: 'clock-o', style: { fontSize: '16px' } }), ' ', jobType), job.rStoreName.length > 0 ? _react2.default.createElement('li', {
            'data-jsx': 1845113624
          }, _react2.default.createElement(_reactFontawesome2.default, { fixedWidth: true, name: 'shopping-cart', style: { fontSize: '16px' } }), ' ', jobStoreName) : null, _react2.default.createElement('li', { className: 'industry', 'data-jsx': 1845113624
          }, t('common:segments.' + job.rCompanySegment))))), _react2.default.createElement('div', { className: 'view-job', 'data-jsx': 1845113624
          }, _react2.default.createElement(_link2.default, { href: '/job?id=' + job.id + '&tile=' + encodeURIComponent(job.rTitle), as: '/job/' + job.id + '/' + encodeURIComponent(job.rTitle) }, _react2.default.createElement('a', { className: 'view-job-link', href: '/job/' + job.id + '/' + encodeURIComponent(job.rTitle), 'data-jsx': 1845113624
          }, t('common:viewJob')))))));
        } else {
          return _react2.default.createElement('li', { key: job.id, 'data-jsx': 1845113624
          }, _react2.default.createElement('div', { className: 'job-item', 'data-jsx': 1845113624
          }, _react2.default.createElement('div', { className: 'job-info', 'data-jsx': 1845113624
          }, _react2.default.createElement('div', { className: 'job-title-location', 'data-jsx': 1845113624
          }, _react2.default.createElement(_link2.default, { href: '/job?id=' + job.id + '&tile=' + encodeURIComponent(job.rTitle), as: '/job/' + job.id + '/' + encodeURIComponent(job.rTitle) }, _react2.default.createElement('a', { className: 'view-job-link', href: '/job/' + job.id + '/' + encodeURIComponent(job.rTitle), 'data-jsx': 1845113624
          }, _react2.default.createElement('h3', {
            'data-jsx': 1845113624
          }, job.rTitle))), _react2.default.createElement('div', { className: 'job-meta', 'data-jsx': 1845113624
          }, _react2.default.createElement('ul', {
            'data-jsx': 1845113624
          }, _react2.default.createElement('li', {
            'data-jsx': 1845113624
          }, _react2.default.createElement(_reactFontawesome2.default, { fixedWidth: true, name: 'map-marker', style: { fontSize: '16px' } }), job.rLocation), _react2.default.createElement('li', {
            'data-jsx': 1845113624
          }, _react2.default.createElement(_reactFontawesome2.default, { fixedWidth: true, name: 'user-circle-o', style: { fontSize: '16px' } }), ' ', t('common:departments.' + job.rDepartment)), _react2.default.createElement('li', {
            'data-jsx': 1845113624
          }, _react2.default.createElement(_reactFontawesome2.default, { fixedWidth: true, name: 'clock-o', style: { fontSize: '16px' } }), ' ', t('common:types.' + job.rType)), job.rStoreName.length > 0 ? _react2.default.createElement('li', {
            'data-jsx': 1845113624
          }, _react2.default.createElement(_reactFontawesome2.default, { fixedWidth: true, name: 'shopping-cart', style: { fontSize: '16px' } }), ' ', job.rStoreName) : null, _react2.default.createElement('li', { className: 'industry', 'data-jsx': 1845113624
          }, t('common:segments.' + job.rCompanySegment))))), _react2.default.createElement('div', { className: 'view-job', 'data-jsx': 1845113624
          }, _react2.default.createElement(_link2.default, { href: '/job?id=' + job.id + '&tile=' + encodeURIComponent(job.rTitle), as: '/job/' + job.id + '/' + encodeURIComponent(job.rTitle) }, _react2.default.createElement('a', { className: 'view-job-link', href: '/job/' + job.id + '/' + encodeURIComponent(job.rTitle), 'data-jsx': 1845113624
          }, t('common:viewJob')))))));
        }
      })) : _react2.default.createElement('p', {
        'data-jsx': 1845113624
      }, 'No results'), _react2.default.createElement(_reactPaginate2.default, { previousLabel: _react2.default.createElement(_reactFontawesome2.default, { name: 'chevron-left' }),
        nextLabel: _react2.default.createElement(_reactFontawesome2.default, { name: 'chevron-right' }),
        breakLabel: _react2.default.createElement('a', { href: '', onClick: function onClick(e) {
            return e.preventDefault();
          }, 'data-jsx': 1845113624
        }, '...'),
        breakClassName: "break-me",
        forcePage: Number(this.props.page),
        pageCount: Math.ceil(totalResults / 10),
        marginPagesDisplayed: 2,
        pageRangeDisplayed: 5,
        onPageChange: this.handlePageClick,
        containerClassName: "pagination",
        subContainerClassName: "pages pagination",
        activeClassName: "active" }), _react2.default.createElement(_style2.default, {
        styleId: 1845113624,
        css: 'h3#jobs-list[data-jsx="1845113624"]{font-family:"Gibson SemiBold",Helvetica,Arial,Verdana,sans-serif;-webkit-letter-spacing:1.5px;-moz-letter-spacing:1.5px;-ms-letter-spacing:1.5px;letter-spacing:1.5px}.hl[data-jsx="1845113624"]{background-color:' + _settings2.default.hexColor + ';color:#fff}.total-results[data-jsx="1845113624"]{display:block;float:left;padding-top:5px}.jobs-list[data-jsx="1845113624"]{display:block;margin:0;padding:0;width:100%;min-height:500px}.jobs-list[data-jsx="1845113624"] li[data-jsx="1845113624"]{list-style:none}.job-item[data-jsx="1845113624"]{position:relative;padding:15px;padding-bottom:10px;margin-bottom:20px;background-color:#fff;-webkit-transition:all 250ms ease 0s;transition:all 250ms ease 0s;-webkit-transition:all 250ms ease 0s;border:1px solid #3d3d3d}.job-item[data-jsx="1845113624"] .view-job[data-jsx="1845113624"] a[data-jsx="1845113624"]{font-family:"Gibson SemiBold",Helvetica,Arial,Verdana,sans-serif;-webkit-letter-spacing:2.3px;-moz-letter-spacing:2.3px;-ms-letter-spacing:2.3px;letter-spacing:2.3px;-webkit-text-decoration:none;text-decoration:none;color:#fff;background-color:#000;-webkit-text-transform:uppercase;text-transform:uppercase;font-size:13px;height:40px;width:130px;display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;position:relative;border:2px solid #000;font-weight:600;-webkit-align-items:center;-webkit-box-align:center;-ms-flex-align:center;align-items:center;-webkit-box-pack:center;-webkit-justify-content:center;-ms-flex-pack:center;justify-content:center;-webkit-transition:0.5s;-webkit-transition:0.5s;transition:0.5s}.job-item[data-jsx="1845113624"] .view-job[data-jsx="1845113624"] a[data-jsx="1845113624"]:hover{border:2px solid rgba(255,255,255,0);background-color:transparent;color:#000}.job-item[data-jsx="1845113624"] .view-job[data-jsx="1845113624"] a[data-jsx="1845113624"]::before{border-bottom:3px solid #000;border-left:0;-webkit-transform-origin:0% 100%}.job-item[data-jsx="1845113624"] .view-job[data-jsx="1845113624"] a[data-jsx="1845113624"]::after{border-top:0;border-right:0;-webkit-transform-origin:50% 50%}.job-item[data-jsx="1845113624"] .view-job[data-jsx="1845113624"] a[data-jsx="1845113624"]:hover[data-jsx="1845113624"]::after,.job-item[data-jsx="1845113624"] .view-job[data-jsx="1845113624"] a[data-jsx="1845113624"]:hover[data-jsx="1845113624"]::before{-webkit-transform:scale(1)}.job-item[data-jsx="1845113624"] .view-job[data-jsx="1845113624"] a[data-jsx="1845113624"]::before,.job-item[data-jsx="1845113624"] .view-job[data-jsx="1845113624"] a[data-jsx="1845113624"]::after{width:100%;height:100%;z-index:3;content:\'\';position:absolute;top:0;left:0;box-sizing:border-box;-webkit-transform:scale(0);-webkit-transition:0.5s;transition:0.5s}.job-item[data-jsx="1845113624"] .view-job[data-jsx="1845113624"]{display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;-webkit-align-items:center;-webkit-box-align:center;-ms-flex-align:center;align-items:center;-webkit-box-pack:center;-webkit-justify-content:center;-ms-flex-pack:center;justify-content:center;width:130px;margin-left:30px}.job-title[data-jsx="1845113624"]{padding:15px}.job-title[data-jsx="1845113624"] a[data-jsx="1845113624"]{color:#000;-webkit-text-decoration:none;text-decoration:none}.job-button[data-jsx="1845113624"]{position:absolute;top:15px;right:15px}.job-button[data-jsx="1845113624"] a[data-jsx="1845113624"]{color:#8C8C8C;padding:5px 30px;border:3px solid ' + _settings2.default.hexColor + ';font-weight:500;-webkit-transition:all 0.3s cubic-bezier(.25,.8,.25,1);transition:all 0.3s cubic-bezier(.25,.8,.25,1);-webkit-transition:all 0.3s cubic-bezier(.25,.8,.25,1)}.job-button[data-jsx="1845113624"] a[data-jsx="1845113624"]:hover{color:#fff;background-color:' + _settings2.default.hexColor + '}.job-title-location[data-jsx="1845113624"] a[data-jsx="1845113624"]{-webkit-text-decoration:none;text-decoration:none;color:#000}.job-title-location[data-jsx="1845113624"] a[data-jsx="1845113624"]:hover{-webkit-text-decoration:underline;text-decoration:underline}.job-title-location[data-jsx="1845113624"] h3[data-jsx="1845113624"]{font-family:"Gibson Regular",Helvetica,Arial,Verdana,sans-serif;-webkit-letter-spacing:1.5px;-moz-letter-spacing:1.5px;-ms-letter-spacing:1.5px;letter-spacing:1.5px;margin:0;margin-bottom:10px;-webkit-text-transform:uppercase;text-transform:uppercase;font-size:15px;-webkit-letter-spacing:-0.4;-moz-letter-spacing:-0.4;-ms-letter-spacing:-0.4;letter-spacing:-0.4;line-height:22px;color:#3d3d3d;-webkit-transition:all 250ms ease 0s;transition:all 250ms ease 0s}.job-title-location[data-jsx="1845113624"] span.country[data-jsx="1845113624"]{-webkit-text-transform:uppercase;text-transform:uppercase}.job-title-location[data-jsx="1845113624"] location-span[data-jsx="1845113624"]{font-family:\'Fjord One\', serif;font-size:16px;color:#505050}.job-footer[data-jsx="1845113624"]{background-color:#8C8C8C;padding:5px 15px}.job-info[data-jsx="1845113624"]{display:-webkit-box;display:-moz-box;display:-ms-flexbox;display:-moz-flex;display:-webkit-flex;display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;-webkit-flex-wrap:wrap;-webkit-flex-wrap:wrap;-ms-flex-wrap:wrap;flex-wrap:wrap;-webkit-box-pack:space-between;-webkit-justify-content:space-between;-ms-flex-pack:space-between;justify-content:space-between}.job-info[data-jsx="1845113624"] .job-meta[data-jsx="1845113624"]{font-size:12px;font-family:"Gibson Light",Helvetica,Arial,Verdana,sans-serif;-webkit-letter-spacing:1.5px;-moz-letter-spacing:1.5px;-ms-letter-spacing:1.5px;letter-spacing:1.5px;color:#747275}.job-info[data-jsx="1845113624"] .job-meta[data-jsx="1845113624"] ul[data-jsx="1845113624"] li.industry[data-jsx="1845113624"]{font-size:12px;-webkit-text-transform:uppercase;text-transform:uppercase;color:#fff;background-color:#003389;border:1px solid #003389}.job-footer[data-jsx="1845113624"] .job-footer-inner[data-jsx="1845113624"]{-ms-box-orient:horizontal;display:-webkit-box;display:-moz-box;display:-ms-flexbox;display:-moz-flex;display:-webkit-flex;display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;-webkit-flex-wrap:wrap;-webkit-flex-wrap:wrap;-ms-flex-wrap:wrap;flex-wrap:wrap}.job-footer[data-jsx="1845113624"] .job-footer-item[data-jsx="1845113624"]{color:#fff;font-size:15px;width:50%;-webkit-text-align:center;text-align:center;-webkit-text-align:right;text-align:right}.job-footer[data-jsx="1845113624"] .job-footer-item[data-jsx="1845113624"]:first-child{-webkit-text-align:left;text-align:left}.job-info[data-jsx="1845113624"] .job-meta[data-jsx="1845113624"] ul[data-jsx="1845113624"]{margin:0;padding:0;margin-left:-5px;margin-right:-5px}.job-info[data-jsx="1845113624"] .job-title-location[data-jsx="1845113624"]{-webkit-flex:1;-ms-flex:1;flex:1}.job-info[data-jsx="1845113624"] .job-meta[data-jsx="1845113624"] ul[data-jsx="1845113624"] li[data-jsx="1845113624"]{display:inline-block;padding:5px 15px;border:1px solid #747275;margin-left:5px;margin-right:5px;margin-bottom:10px}@media screen and (max-width:799px){.job-info[data-jsx="1845113624"]{-webkit-flex-direction:column;-ms-flex-direction:column;flex-direction:column}.job-item[data-jsx="1845113624"] .view-job[data-jsx="1845113624"]{margin:0;width:100%}.job-item[data-jsx="1845113624"] .view-job[data-jsx="1845113624"] a[data-jsx="1845113624"]{width:100%}.job-info[data-jsx="1845113624"] .job-title-location[data-jsx="1845113624"]{margin-bottom:20px}.job-info[data-jsx="1845113624"] .job-title-location[data-jsx="1845113624"],.job-info[data-jsx="1845113624"] .job-meta[data-jsx="1845113624"]{width:100%}}@media screen and (max-width:800px){.job-button[data-jsx="1845113624"]{position:relative;padding-left:15px}.job-title[data-jsx="1845113624"]{padding-bottom:15px;-webkit-text-align:center;text-align:center}.job-footer[data-jsx="1845113624"] .job-footer-item[data-jsx="1845113624"],.job-footer[data-jsx="1845113624"] .job-footer-item[data-jsx="1845113624"]:first-child{-webkit-text-align:center;text-align:center;width:100%}.filter-div[data-jsx="1845113624"] .filter-item[data-jsx="1845113624"]{width:100%;padding-bottom:10px}.filter-div[data-jsx="1845113624"] .filter-item[data-jsx="1845113624"]:last-child .filter-inner[data-jsx="1845113624"],.filter-div[data-jsx="1845113624"] .filter-item[data-jsx="1845113624"]:first-child .filter-inner[data-jsx="1845113624"]{padding:0}.job-sort[data-jsx="1845113624"]{float:none;width:100%}}@media screen and (max-width:1200px){.filter-div[data-jsx="1845113624"]{margin-left:0;margin-right:0}}'
      }));
    }
  }]);

  return JobList;
}(_react2.default.Component);

var ExtendedJobList = (0, _reactI18next.translate)('common', { i18n: _i18n2.default })(JobList);

// Passing down initial translations
// use req.i18n instance on serverside to avoid overlapping requests set the language wrong
ExtendedJobList.getInitialProps = function () {
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

            return _context.abrupt('return', _i18n2.default.getInitialProps(req, ['common']));

          case 2:
            return _context.abrupt('return', {});

          case 3:
          case 'end':
            return _context.stop();
        }
      }
    }, _callee, _this3);
  }));

  return function (_x) {
    return _ref3.apply(this, arguments);
  };
}();

exports.default = ExtendedJobList;
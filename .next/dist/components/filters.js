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

var _propTypes = require('prop-types');

var _propTypes2 = _interopRequireDefault(_propTypes);

var _link = require('next/dist/lib/link.js');

var _link2 = _interopRequireDefault(_link);

var _reactFontawesome = require('react-fontawesome');

var _reactFontawesome2 = _interopRequireDefault(_reactFontawesome);

var _index = require('next/dist/lib/router/index.js');

var _index2 = _interopRequireDefault(_index);

var _reactSelect = require('react-select');

var _reactSelect2 = _interopRequireDefault(_reactSelect);

var _reactScroll = require('react-scroll');

var _reactScroll2 = _interopRequireDefault(_reactScroll);

var _i18n = require('../i18n');

var _i18n2 = _interopRequireDefault(_i18n);

var _reactI18next = require('react-i18next');

var _settings = require('../settings.js');

var _settings2 = _interopRequireDefault(_settings);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var _this3 = undefined;

var scroll = _reactScroll2.default.animateScroll;

var Filters = function (_React$Component) {
  (0, _inherits3.default)(Filters, _React$Component);

  function Filters(props) {
    (0, _classCallCheck3.default)(this, Filters);

    var _this = (0, _possibleConstructorReturn3.default)(this, (Filters.__proto__ || (0, _getPrototypeOf2.default)(Filters)).call(this, props));

    _this.doSearch = _this.doSearch.bind(_this);
    _this.selectDepartment = _this.selectDepartment.bind(_this);
    _this.changeLocation = _this.changeLocation.bind(_this);
    _this.changePositionDepartment = _this.changePositionDepartment.bind(_this);
    _this.changeLevel = _this.changeLevel.bind(_this);
    _this.changeType = _this.changeType.bind(_this);
    _this.changeDept = _this.changeDept.bind(_this);
    _this.resetSearch = _this.resetSearch.bind(_this);
    _this.deptOptions = _this.deptOptions.bind(_this);
    _this.translated = _this.translated.bind(_this);
    return _this;
  }

  (0, _createClass3.default)(Filters, [{
    key: 'doSearch',
    value: function doSearch(e) {
      e.preventDefault();
      var searchQuery = this.refs.searchBox.value;
      var dept = this.props.dept;
      this.props.changeSearch(searchQuery);
      _index2.default.push({
        pathname: '/',
        query: {
          page: 0,
          s: searchQuery,
          dept: dept
        }
      });
      var jobList = document.querySelector('#jobs-list');
      scroll.scrollTo(jobList.offsetTop);
    }
  }, {
    key: 'deptOptions',
    value: function deptOptions() {
      var t = this.props.t;
      return [{ value: "retail-ca", label: t('common:banner.retailCa') }, { value: "retail-us", label: t('common:banner.retailUs') }, { value: "ho", label: t('common:banner.ho') }, { value: "ds", label: t('common:banner.ds') }, { value: "all", label: t('common:banner.viewAll') }];
    }
  }, {
    key: 'selectDepartment',
    value: function selectDepartment(e) {
      e.preventDefault();
      var searchQuery = this.refs.searchBox.value;
      this.props.changeDepartment(e.target.id);
      _index2.default.push({
        pathname: '/',
        query: {
          page: 0,
          s: searchQuery,
          dept: e.target.id
        }
      });
      var jobList = document.querySelector('#jobs-list');
      scroll.scrollTo(jobList.offsetTop);
    }
  }, {
    key: 'changeLocation',
    value: function changeLocation(val) {
      var jobList = document.querySelector('#jobs-list');
      scroll.scrollTo(jobList.offsetTop);
      var s = this.refs.searchBox.value;
      var dept = this.props.dept;
      var location = val;
      var level = this.props.sortLevel.value ? this.props.sortLevel.value : this.props.sortLevel;
      var department = this.props.sortDepartment.value ? this.props.sortDepartment.value : this.props.sortDepartment;
      var type = this.props.sortType.value ? this.props.sortType.value : this.props.sortType;
      this.props.changeLocation(val);
      _index2.default.push({
        pathname: '/',
        query: {
          page: 0,
          location: val.value,
          s: s,
          dept: dept,
          level: level,
          department: department,
          type: type
        }
      });
    }
  }, {
    key: 'changePositionDepartment',
    value: function changePositionDepartment(val) {
      var jobList = document.querySelector('#jobs-list');
      scroll.scrollTo(jobList.offsetTop);
      var s = this.refs.searchBox.value;
      var dept = this.props.dept;
      var location = this.props.sortLocation.value ? this.props.sortLocation.value : this.props.sortLocation;
      var level = this.props.sortLevel.value ? this.props.sortLevel.value : this.props.sortLevel;
      var department = val;
      var type = this.props.sortType.value ? this.props.sortType.value : this.props.sortType;
      this.props.changePositionDepartment(val);
      _index2.default.push({
        pathname: '/',
        query: {
          page: 0,
          location: location,
          s: s,
          dept: dept,
          level: level,
          department: val.value,
          type: type
        }
      });
    }
  }, {
    key: 'changeLevel',
    value: function changeLevel(val) {
      var jobList = document.querySelector('#jobs-list');
      scroll.scrollTo(jobList.offsetTop);
      var s = this.refs.searchBox.value;
      var dept = this.props.dept;
      var location = this.props.sortLocation.value ? this.props.sortLocation.value : this.props.sortLocation;
      var level = val;
      var department = this.props.sortDepartment.value ? this.props.sortDepartment.value : this.props.sortDepartment;
      var type = this.props.sortType.value ? this.props.sortType.value : this.props.sortType;
      this.props.changeLevel(val);
      _index2.default.push({
        pathname: '/',
        query: {
          page: 0,
          location: location,
          s: s,
          dept: dept,
          level: val.value,
          department: department,
          type: type
        }
      });
    }
  }, {
    key: 'changeType',
    value: function changeType(val) {
      var jobList = document.querySelector('#jobs-list');
      scroll.scrollTo(jobList.offsetTop);
      var s = this.refs.searchBox.value;
      var dept = this.props.dept;
      var location = this.props.sortLocation.value ? this.props.sortLocation.value : this.props.sortLocation;
      var level = this.props.sortLevel.value ? this.props.sortLevel.value : this.props.sortLevel;
      var department = this.props.sortDepartment.value ? this.props.sortDepartment.value : this.props.sortDepartment;
      var type = val;
      this.props.changeType(val);
      _index2.default.push({
        pathname: '/',
        query: {
          page: 0,
          location: location,
          s: s,
          dept: dept,
          level: level,
          department: department,
          type: val.value
        }
      });
    }
  }, {
    key: 'deptLabel',
    value: function deptLabel(value) {
      var t = this.props.t;
      switch (value) {
        case "retail-ca":
          return t('common:banner.retailCa');
        case "retail-us":
          return t('common:banner.retailUs');
        case "ho":
          return t('common:banner.ho');
        case "ds":
          return t('common:banner.ds');
        case "all":
          return t('common:banner.viewAll');
        case "":
          return t('common:banner.viewAll');
        default:
          return t('common:banner.viewAll');
      }
    }
  }, {
    key: 'changeDept',
    value: function changeDept(val) {
      var searchQuery = this.refs.searchBox.value;
      this.props.changeDepartment(val.value);
      _index2.default.push({
        pathname: '/',
        query: {
          page: 0,
          s: searchQuery,
          dept: val.value
        }
      });
      var jobList = document.querySelector('#jobs-list');
      scroll.scrollTo(jobList.offsetTop);
    }
  }, {
    key: 'resetSearch',
    value: function resetSearch(e) {
      if (e.target.value.length < 1) {
        var searchQuery = this.refs.searchBox.value;
        var dept = this.props.dept;
        this.props.changeSearch(searchQuery);
        _index2.default.push({
          pathname: '/',
          query: {
            page: 0,
            s: searchQuery,
            dept: dept
          }
        });
        var jobList = document.querySelector('#jobs-list');
        scroll.scrollTo(jobList.offsetTop);
      }
    }
  }, {
    key: 'translated',
    value: function translated(array, option) {
      var t = this.props.t;
      return array.map(function (object) {
        return {
          value: object.value,
          label: t('common:' + option + '.' + object.label)
        };
      });
    }
  }, {
    key: 'render',
    value: function render() {
      var _this2 = this;

      var t = this.props.t;
      return _react2.default.createElement('div', { className: 'inner-container', 'data-jsx': 2776554289
      }, _react2.default.createElement('ul', { className: 'department-list desktop', 'data-jsx': 2776554289
      }, _react2.default.createElement('li', {
        'data-jsx': 2776554289
      }, _react2.default.createElement('a', { href: '#', id: 'retail-us', className: this.props.dept === 'retail-us' ? 'active' : '', onClick: function onClick(e) {
          return _this2.selectDepartment(e);
        }, 'data-jsx': 2776554289
      }, t('common:banner.retailUs'))), _react2.default.createElement('li', {
        'data-jsx': 2776554289
      }, _react2.default.createElement('a', { href: '#', id: 'retail-ca', className: this.props.dept === 'retail-ca' ? 'active' : '', onClick: function onClick(e) {
          return _this2.selectDepartment(e);
        }, 'data-jsx': 2776554289
      }, t('common:banner.retailCa'))), _react2.default.createElement('li', {
        'data-jsx': 2776554289
      }, _react2.default.createElement('a', { href: '#', id: 'ho', className: this.props.dept === 'ho' ? 'active' : '', onClick: function onClick(e) {
          return _this2.selectDepartment(e);
        }, 'data-jsx': 2776554289
      }, t('common:banner.ho'))), _react2.default.createElement('li', {
        'data-jsx': 2776554289
      }, _react2.default.createElement('a', { href: '#', id: 'ds', className: this.props.dept === 'ds' ? 'active' : '', onClick: function onClick(e) {
          return _this2.selectDepartment(e);
        }, 'data-jsx': 2776554289
      }, t('common:banner.ds'))), _react2.default.createElement('li', {
        'data-jsx': 2776554289
      }, _react2.default.createElement('a', { href: '#', id: 'all', className: this.props.dept === 'all' || this.props.dept === '' ? 'active' : '', onClick: function onClick(e) {
          return _this2.selectDepartment(e);
        }, 'data-jsx': 2776554289
      }, t('common:banner.viewAll')))), _react2.default.createElement('div', { className: 'dept-list mobile', 'data-jsx': 2776554289
      }, _react2.default.createElement(_reactSelect2.default, {
        name: 'dept',
        value: { value: this.props.dept === '' ? 'all' : this.props.dept, label: this.deptLabel(this.props.dept) },
        options: this.deptOptions(),
        clearable: false,
        searchable: false,
        onChange: this.changeDept
      })), _react2.default.createElement('div', { className: 'searching-div', 'data-jsx': 2776554289
      }, _react2.default.createElement('form', { onSubmit: this.doSearch, 'data-jsx': 2776554289
      }, _react2.default.createElement('input', { type: 'text', className: 'search-jobs', ref: 'searchBox', name: 'search-jobs', placeholder: t('common:banner.searchBlurb'), defaultValue: this.props.search, onChange: function onChange(e) {
          return _this2.resetSearch(e);
        }, 'data-jsx': 2776554289
      }), _react2.default.createElement('label', { htmlFor: 'search-jobs', onClick: this.doSearch, 'data-jsx': 2776554289
      }, _react2.default.createElement('button', { type: 'submit', 'data-jsx': 2776554289
      }, _react2.default.createElement('span', { className: 'search-text desktop', 'data-jsx': 2776554289
      }, t('common:banner.search')), _react2.default.createElement('span', { className: 'search-text mobile', 'data-jsx': 2776554289
      }, _react2.default.createElement(_reactFontawesome2.default, { fixedWidth: true, name: 'search' })))))), _react2.default.createElement('div', { className: 'filters-div', 'data-jsx': 2776554289
      }, _react2.default.createElement('div', { className: 'filter-item', 'data-jsx': 2776554289
      }, _react2.default.createElement('div', { className: 'filter-inner', 'data-jsx': 2776554289
      }, _react2.default.createElement(_reactSelect2.default, {
        name: 'location',
        value: this.props.sortLocation.value,
        options: this.props.locationOptions,
        placeholder: "All Locations",
        clearable: false,
        searchable: false,
        onChange: this.changeLocation
      }))), _react2.default.createElement('div', { className: 'filter-item', 'data-jsx': 2776554289
      }, _react2.default.createElement('div', { className: 'filter-inner', 'data-jsx': 2776554289
      }, _react2.default.createElement(_reactSelect2.default, {
        name: 'team',
        value: this.props.sortLevel.value,
        options: this.translated(this.props.levelOptions, 'levels'),
        placeholder: t('common:levels.All Levels'),
        clearable: false,
        searchable: false,
        onChange: this.changeLevel
      }))), _react2.default.createElement('div', { className: 'filter-item', 'data-jsx': 2776554289
      }, _react2.default.createElement('div', { className: 'filter-inner', 'data-jsx': 2776554289
      }, _react2.default.createElement(_reactSelect2.default, {
        name: 'department',
        value: this.props.sortDepartment.value,
        options: this.translated(this.props.departmentOptions, 'departments'),
        placeholder: t('common:departments.All Departments'),
        clearable: false,
        searchable: false,
        onChange: this.changePositionDepartment
      }))), _react2.default.createElement('div', { className: 'filter-item', 'data-jsx': 2776554289
      }, _react2.default.createElement('div', { className: 'filter-inner', 'data-jsx': 2776554289
      }, _react2.default.createElement(_reactSelect2.default, {
        name: 'type',
        value: this.props.sortType.value,
        options: this.translated(this.props.typeOptions, 'types'),
        placeholder: t('common:types.All Types'),
        clearable: false,
        searchable: false,
        onChange: this.changeType
      })))), _react2.default.createElement(_style2.default, {
        styleId: 2776554289,
        css: '.inner-container[data-jsx="2776554289"]{padding:0 15px;max-width:1000px;margin:0 auto}.department-list[data-jsx="2776554289"]{display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;-webkit-box-pack:space-between;-webkit-justify-content:space-between;-ms-flex-pack:space-between;justify-content:space-between;-webkit-align-items:center;-webkit-box-align:center;-ms-flex-align:center;align-items:center;position:relative;list-style-type:none;padding:0;margin-top:40px;margin-bottom:15px;margin-left:-10px;margin-right:-10px}.department-list[data-jsx="2776554289"] li[data-jsx="2776554289"]{margin-bottom:15px;min-width:180px;margin-left:10px;margin-right:10px}.department-list[data-jsx="2776554289"] li[data-jsx="2776554289"] a[data-jsx="2776554289"]{font-family:\'Gibson Regular\';-webkit-letter-spacing:0.2em;-moz-letter-spacing:0.2em;-ms-letter-spacing:0.2em;letter-spacing:0.2em;color:#fff;-webkit-text-transform:uppercase;text-transform:uppercase;font-size:13px;-webkit-text-align:center;text-align:center;font-weight:400;-webkit-text-decoration:none;text-decoration:none;display:block;border:1px solid #fff;padding:6px 15px;-webkit-transition:all 250ms ease 0s;transition:all 250ms ease 0s;-webkit-transition:all 250ms ease 0s;display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;height:45px;-webkit-box-pack:center;-webkit-justify-content:center;-ms-flex-pack:center;justify-content:center;-webkit-align-items:center;-webkit-box-align:center;-ms-flex-align:center;align-items:center}.department-list[data-jsx="2776554289"] li[data-jsx="2776554289"] a.active[data-jsx="2776554289"]{color:' + _settings2.default.hexColor + ';background-color:#fff}.department-list[data-jsx="2776554289"] li[data-jsx="2776554289"] a[data-jsx="2776554289"]:hover{color:' + _settings2.default.hexColor + ';background-color:#fff}.searching-div[data-jsx="2776554289"]{margin-bottom:20px;position:relative}.searching-div[data-jsx="2776554289"] .search-jobs[data-jsx="2776554289"]{display:block;font-size:14px;-webkit-appearance:none;border-radius:0;-webkit-flex:1;-ms-flex:1;flex:1;border:2px solid #fff;padding:8px 5px;font-family:\'Gibson Regular\'}.searching-div[data-jsx="2776554289"] .search-jobs[data-jsx="2776554289"]:placeholder-shown{font-style:italic}.searching-div[data-jsx="2776554289"] form[data-jsx="2776554289"]{display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;-webkit-box-pack:space-between;-webkit-justify-content:space-between;-ms-flex-pack:space-between;justify-content:space-between}.searching-div[data-jsx="2776554289"] button[data-jsx="2776554289"]{background-color:transparent;border:2px solid #fff;-webkit-text-transform:uppercase;text-transform:uppercase;font-family:\'Gibson Regular\';-webkit-letter-spacing:0.2em;-moz-letter-spacing:0.2em;-ms-letter-spacing:0.2em;letter-spacing:0.2em;padding:8px 40px;font-size:14px;outline:none;color:#fff;font-weight:400;cursor:pointer;-webkit-transition:all 250ms ease 0s;transition:all 250ms ease 0s;-webkit-transition:all 250ms ease 0s;position:relative;left:-4px;margin-right:-4px}.searching-div[data-jsx="2776554289"] .search-text.desktop[data-jsx="2776554289"]{display:block}.searching-div[data-jsx="2776554289"] .search-text.mobile[data-jsx="2776554289"]{display:none}.searching-div[data-jsx="2776554289"] button[data-jsx="2776554289"]:hover{color:' + _settings2.default.hexColor + ';background-color:#fff}.searching-div[data-jsx="2776554289"] label[data-jsx="2776554289"]{color:#fff;cursor:pointer}.filters-div[data-jsx="2776554289"]{margin-bottom:20px;display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;position:relative;-webkit-box-pack:space-between;-webkit-justify-content:space-between;-ms-flex-pack:space-between;justify-content:space-between;margin-left:-5px;margin-right:-5px;font-family:\'Gibson Regular\'}.filters-div[data-jsx="2776554289"] .filter-item[data-jsx="2776554289"]{width:100%;padding:5px;position:relative}.dept-list.mobile[data-jsx="2776554289"]{display:none;width:230px;margin:0 auto;margin-top:40px;margin-bottom:25px}@media screen and (max-width:999px){.department-list.desktop[data-jsx="2776554289"]{display:none}.dept-list.mobile[data-jsx="2776554289"]{display:block}.department-list[data-jsx="2776554289"],.filters-div[data-jsx="2776554289"]{-webkit-flex-direction:column;-ms-flex-direction:column;flex-direction:column}.filters-div[data-jsx="2776554289"] .filter-item[data-jsx="2776554289"]{width:230px;margin:0 auto}.department-list[data-jsx="2776554289"] li[data-jsx="2776554289"] a[data-jsx="2776554289"]{padding:6px 15px}.searching-div[data-jsx="2776554289"] .search-text.desktop[data-jsx="2776554289"]{display:none}.searching-div[data-jsx="2776554289"] .search-text.mobile[data-jsx="2776554289"]{display:block;position:relative;right:-3px}.searching-div[data-jsx="2776554289"]{margin:0 auto;margin-bottom:25px;width:230px}.searching-div[data-jsx="2776554289"] button[data-jsx="2776554289"]{padding:8px 10px}}'
      }));
    }
  }]);

  return Filters;
}(_react2.default.Component);

var ExtendedFilters = (0, _reactI18next.translate)('common', { i18n: _i18n2.default })(Filters);

// Passing down initial translations
// use req.i18n instance on serverside to avoid overlapping requests set the language wrong
ExtendedFilters.getInitialProps = function () {
  var _ref2 = (0, _asyncToGenerator3.default)(_regenerator2.default.mark(function _callee(_ref) {
    var req = _ref.req;
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
    return _ref2.apply(this, arguments);
  };
}();

exports.default = ExtendedFilters;
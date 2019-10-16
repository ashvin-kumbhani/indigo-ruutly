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

var _toConsumableArray2 = require('babel-runtime/helpers/toConsumableArray');

var _toConsumableArray3 = _interopRequireDefault(_toConsumableArray2);

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

var _index = require('next/dist/lib/router/index.js');

var _index2 = _interopRequireDefault(_index);

require('isomorphic-fetch');

var _reactScroll = require('react-scroll');

var _reactScroll2 = _interopRequireDefault(_reactScroll);

var _reactGa = require('react-ga');

var _reactGa2 = _interopRequireDefault(_reactGa);

var _underscore = require('underscore');

var _underscore2 = _interopRequireDefault(_underscore);

var _i18n = require('../i18n');

var _i18n2 = _interopRequireDefault(_i18n);

var _reactI18next = require('react-i18next');

var _layout = require('../components/layout');

var _layout2 = _interopRequireDefault(_layout);

var _joblist = require('../components/joblist');

var _joblist2 = _interopRequireDefault(_joblist);

var _filters = require('../components/filters');

var _filters2 = _interopRequireDefault(_filters);

var _settings = require('../settings.js');

var _settings2 = _interopRequireDefault(_settings);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var _this6 = undefined;

var ScrollLink = _reactScroll2.default.Link;
var scroll = _reactScroll2.default.animateScroll;

var sortedUniqueArrayOfObjects = function sortedUniqueArrayOfObjects(array) {
  var finalArray = [];
  var uniqueSortedArray = _underscore2.default.uniq(array).sort(function (a, b) {
    return a > b ? 1 : -1;
  });
  uniqueSortedArray.map(function (item) {
    return finalArray.push({ value: item, label: item });
  });
  return finalArray;
};

var returnObject = function returnObject(queryItem) {
  if (queryItem === "all") {
    return { value: "all", label: "All" };
  } else {
    return { value: queryItem, label: queryItem };
  }
};

var HomePage = function (_React$Component) {
  (0, _inherits3.default)(HomePage, _React$Component);

  // static async getInitialProps ({ t, initialI18nStore }) {
  //   const limit = 100
  //   const url = `https://api.smartrecruiters.com/v1/companies/IndigoBooksMusic/postings?limit=${limit}&offset=0`
  //   const url1 = `https://api.smartrecruiters.com/v1/companies/IndigoBooksMusic/postings?limit=${limit}&offset=100`
  //   const url2 = `https://api.smartrecruiters.com/v1/companies/IndigoBooksMusic/postings?limit=${limit}&offset=200`
  //   const url3 = `https://api.smartrecruiters.com/v1/companies/IndigoBooksMusic/postings?limit=${limit}&offset=300`
  //   const res = await fetch(url)
  //   const res1 = await fetch(url1)
  //   const res2 = await fetch(url2)
  //   const res3 = await fetch(url3)
  //   const json = await res.json()
  //   const json1 = await res1.json()
  //   const json2 = await res2.json()
  //   const json3 = await res3.json()
  //   let jobs = [...json.content, ...json1.content, ...json2.content, ...json3.content]

  //   console.log(`HOME GET INITIAL PROPS`)

  //   jobs.map(job => {
  //     job.rStoreName = job.customField.find(field => (field.fieldLabel == "Store Name")) ? job.customField.find(field => (field.fieldLabel == "Store Name")).valueLabel : ""
  //     if (job.customField.find(field => (field.fieldLabel == "Company Segment")) && job.customField.find(field => (field.fieldLabel == "Company Segment")).valueLabel == "Home Office") {
  //       job.rStoreName = ""
  //     }
  //     if (job.customField.find(field => (field.fieldLabel == "Company Segment")) && job.customField.find(field => (field.fieldLabel == "Company Segment")).valueLabel == "Distribution") {
  //       job.rStoreName = ""
  //     }
  //     job.rDepartment = job.department.label ? job.department.label : "Not Specified"
  //     job.rLocation = `${job.location.city}${job.location.region ? `, ${job.location.region}` : "Not Specified"}`
  //     job.rLocation = `${job.location.city}${job.location.region ? `, ${job.location.region}` : "Not Specified"}`
  //     job.rType = job.typeOfEmployment.label
  //     job.rExperience = job.experienceLevel.label
  //     job.rCompanySegment = job.customField.find(field => (field.fieldLabel == "Company Segment")) ? job.customField.find(field => (field.fieldLabel == "Company Segment")).valueLabel : ""
  //     job.rPositionSubSegment = job.customField.find(field => (field.fieldLabel == "Position Sub-Segment")) ? job.customField.find(field => (field.fieldLabel == "Position Sub-Segment")).valueLabel : ""
  //     if (job.customField.find(field => (field.fieldLabel == "Company Segment")) && job.customField.find(field => (field.fieldLabel == "Company Segment")).valueLabel == "Stores") {
  //       job.rCompanySegment = "Retail"
  //     }
  //     job.rTitle = job.name
  //     if (job.rDepartment === "Customer Service" && job.rType == "Contract" && job.rExperience === "Entry Level") {
  //       job.rTitle = "Seasonal Customer Experience Representative"
  //     }

  //     if (job.rDepartment === "Customer Service" && job.rType == "Part-time" && job.rExperience === "Entry Level") {
  //       job.rTitle = "Customer Experience Representative"
  //     }

  //     if (job.rDepartment === "Customer Service" && job.rType == "Full-time" && job.rExperience === "Entry Level") {
  //       job.rTitle = "Customer Experience Representative"
  //     }
  //     if (job.rCompanySegment === "Retail" && job.rPositionSubSegment === "Retail - CER - Stocking/Tasking" && job.rExperience === "Associate" ) {
  //       if (job.rType === "Contract") {
  //         job.rTitle = "Seasonal Operations Leader"  
  //       }
  //       job.rTitle = "Operations Leader"
  //     }
  //     if (job.rCompanySegment === "Retail" && job.rPositionSubSegment === "Retail - CER - Customer Service/Sales" && job.rExperience === "Associate" ) {
  //       if (job.rType === "Contract") {
  //         job.rTitle = "Seasonal Customer Experience Leader"  
  //       }
  //       job.rTitle = "Customer Experience Leader"
  //     }
  //   })

  //   console.log(t, initialI18nStore)

  //   return { jobs }
  // }

  function HomePage(props) {
    (0, _classCallCheck3.default)(this, HomePage);

    var _this = (0, _possibleConstructorReturn3.default)(this, (HomePage.__proto__ || (0, _getPrototypeOf2.default)(HomePage)).call(this, props));

    var query = props.url.query;
    var s = query.s && query.s.length > 0 ? query.s : "";
    var dept = query.dept && query.dept.length > 0 ? query.dept : "all";
    var page = query.page && query.page.length > 0 ? query.page : 0;
    var offset = Math.ceil(page * 10);

    var jobs = props.i18n.language === "fr" ? props.frJobs : props.enJobs;

    jobs = jobs.sort(function (a, b) {
      return a.releasedDate > b.releasedDate ? -1 : 1;
    });
    if (dept == 'retail-ca') {
      jobs = jobs.filter(function (job) {
        return job.rCompanySegment === 'Retail' && job.rCountry == "ca";
      });
    }
    if (dept == 'retail-us') {
      jobs = jobs.filter(function (job) {
        return job.rCompanySegment === 'Retail' && job.rCountry == "us";
      });
    }
    if (dept == 'ho') {
      jobs = jobs.filter(function (job) {
        return job.rCompanySegment === 'Home Office';
      });
    }
    if (dept == 'ds') {
      jobs = jobs.filter(function (job) {
        return job.rCompanySegment === 'Distribution';
      });
    }

    if (s.length > 0) {
      jobs = _this.findMatches(s, jobs);
    }

    var sortLocation = query.location && query.location.length > 0 ? returnObject(query.location) : { value: "all", label: "All" };
    var locationOptions = sortedUniqueArrayOfObjects(jobs.map(function (job) {
      return job.rLocation;
    }));
    var sortLevel = query.level && query.level.length > 0 ? returnObject(query.level) : { value: "all", label: "All" };
    var levelOptions = sortedUniqueArrayOfObjects(jobs.map(function (job) {
      return job.rExperience;
    }));
    var sortDepartment = query.department && query.department.length > 0 ? returnObject(query.department) : { value: "all", label: "All" };
    var departmentOptions = sortedUniqueArrayOfObjects(jobs.map(function (job) {
      return job.rDepartment;
    }));
    var sortType = query.type && query.type.length > 0 ? returnObject(query.type) : { value: "all", label: "All" };
    var typeOptions = sortedUniqueArrayOfObjects(jobs.map(function (job) {
      return job.rType;
    }));

    if (sortLocation.value !== "all") {
      jobs = jobs.filter(function (job) {
        return job.rLocation == sortLocation.value;
      });
    }
    if (sortLevel.value !== "all") {
      jobs = jobs.filter(function (job) {
        return job.rExperience == sortLevel.value;
      });
    }
    if (sortDepartment.value !== "all") {
      jobs = jobs.filter(function (job) {
        return job.rDepartment == sortDepartment.value;
      });
    }
    if (sortType.value !== "all") {
      jobs = jobs.filter(function (job) {
        return job.rType == sortType.value;
      });
    }

    _this.state = {
      page: page,
      s: s,
      dept: dept,
      sortLocation: sortLocation,
      locationOptions: [{ value: "all", label: props.i18n.language == "fr" ? "Tous les emplacements" : "All Locations" }].concat((0, _toConsumableArray3.default)(locationOptions)),
      sortLevel: sortLevel,
      levelOptions: [{ value: "all", label: "All Levels" }].concat((0, _toConsumableArray3.default)(levelOptions)),
      sortDepartment: sortDepartment,
      departmentOptions: [{ value: "all", label: "All Departments" }].concat((0, _toConsumableArray3.default)(departmentOptions)),
      sortType: sortType,
      typeOptions: [{ value: "all", label: "All Types" }].concat((0, _toConsumableArray3.default)(typeOptions)),
      jobs: jobs,
      jobsTotal: jobs.length,
      currentResults: jobs.slice(offset, offset + 10),
      lang: props.i18n.language
    };
    _this.changeDepartment = _this.changeDepartment.bind(_this);
    _this.changeSearch = _this.changeSearch.bind(_this);
    _this.handlePageClick = _this.handlePageClick.bind(_this);
    _this.findMatches = _this.findMatches.bind(_this);
    _this.changeLocation = _this.changeLocation.bind(_this);
    _this.changeLevel = _this.changeLevel.bind(_this);
    _this.changePositionDepartment = _this.changePositionDepartment.bind(_this);
    _this.changeType = _this.changeType.bind(_this);
    return _this;
  }

  (0, _createClass3.default)(HomePage, [{
    key: 'componentDidMount',
    value: function componentDidMount() {
      // if (typeof window !== 'undefined') {
      //   ReactGA.initialize('UA-96732795-1')
      //   const page = window.location.pathname;
      //   ReactGA.set({ page: page })
      //   ReactGA.pageview(page)
      // }
    }
  }, {
    key: 'componentDidUpdate',
    value: function componentDidUpdate(prevProps, prevState) {
      // console.log(this.state.lang)
      console.log();
      if (prevState.lang !== _i18n2.default.language || prevProps.url.query.dept != this.props.url.query.dept) {
        var props = this.props;
        var query = props.url.query;
        var s = query.s && query.s.length > 0 ? query.s : "";
        var dept = query.dept && query.dept.length > 0 ? query.dept : "all";
        var page = query.page && query.page.length > 0 ? query.page : 0;
        var offset = Math.ceil(page * 10);

        console.log('CURRENT LANG: ' + props.i18n.language);

        var jobs = props.i18n.language === "fr" ? props.frJobs : props.enJobs;

        jobs = jobs.sort(function (a, b) {
          return a.releasedDate > b.releasedDate ? -1 : 1;
        });
        if (dept == 'retail-ca') {
          jobs = jobs.filter(function (job) {
            return job.rCompanySegment === 'Retail' && job.rCountry == "ca";
          });
        }
        if (dept == 'retail-us') {
          jobs = jobs.filter(function (job) {
            return job.rCompanySegment === 'Retail' && job.rCountry == "us";
          });
        }
        if (dept == 'ho') {
          jobs = jobs.filter(function (job) {
            return job.rCompanySegment === 'Home Office';
          });
        }
        if (dept == 'ds') {
          jobs = jobs.filter(function (job) {
            return job.rCompanySegment === 'Distribution';
          });
        }

        if (s.length > 0) {
          jobs = this.findMatches(s, jobs);
        }

        var sortLocation = query.location && query.location.length > 0 ? returnObject(query.location) : { value: "all", label: "All" };
        var locationOptions = sortedUniqueArrayOfObjects(jobs.map(function (job) {
          return job.rLocation;
        }));
        var sortLevel = query.level && query.level.length > 0 ? returnObject(query.level) : { value: "all", label: "All" };
        var levelOptions = sortedUniqueArrayOfObjects(jobs.map(function (job) {
          return job.rExperience;
        }));
        var sortDepartment = query.department && query.department.length > 0 ? returnObject(query.department) : { value: "all", label: "All" };
        var departmentOptions = sortedUniqueArrayOfObjects(jobs.map(function (job) {
          return job.rDepartment;
        }));
        var sortType = query.type && query.type.length > 0 ? returnObject(query.type) : { value: "all", label: "All" };
        var typeOptions = sortedUniqueArrayOfObjects(jobs.map(function (job) {
          return job.rType;
        }));

        if (sortLocation.value !== "all") {
          jobs = jobs.filter(function (job) {
            return job.rLocation == sortLocation.value;
          });
        }
        if (sortLevel.value !== "all") {
          jobs = jobs.filter(function (job) {
            return job.rExperience == sortLevel.value;
          });
        }
        if (sortDepartment.value !== "all") {
          jobs = jobs.filter(function (job) {
            return job.rDepartment == sortDepartment.value;
          });
        }
        if (sortType.value !== "all") {
          jobs = jobs.filter(function (job) {
            return job.rType == sortType.value;
          });
        }

        this.setState({
          page: page,
          s: s,
          dept: dept,
          sortLocation: sortLocation,
          locationOptions: [{ value: "all", label: props.i18n.language == "fr" ? "Tous les emplacements" : "All Locations" }].concat((0, _toConsumableArray3.default)(locationOptions)),
          sortLevel: sortLevel,
          levelOptions: [{ value: "all", label: "All Levels" }].concat((0, _toConsumableArray3.default)(levelOptions)),
          sortDepartment: sortDepartment,
          departmentOptions: [{ value: "all", label: "All Departments" }].concat((0, _toConsumableArray3.default)(departmentOptions)),
          sortType: sortType,
          typeOptions: [{ value: "all", label: "All Types" }].concat((0, _toConsumableArray3.default)(typeOptions)),
          jobs: jobs,
          jobsTotal: jobs.length,
          currentResults: jobs.slice(offset, offset + 10),
          lang: props.i18n.language
        });
      }
    }
  }, {
    key: 'changeDepartment',
    value: function changeDepartment(dept) {
      var jobs = this.props.i18n.language === "fr" ? this.props.frJobs : this.props.enJobs;
      jobs = jobs.sort(function (a, b) {
        return a.releasedDate > b.releasedDate ? -1 : 1;
      });
      var offset = 0;
      var page = 0;

      if (dept == 'retail-ca') {
        jobs = jobs.filter(function (job) {
          return job.rCompanySegment === 'Retail' && job.rCountry == "ca";
        });
      }
      if (dept == 'retail-us') {
        jobs = jobs.filter(function (job) {
          return job.rCompanySegment === 'Retail' && job.rCountry == "us";
        });
      }
      if (dept == 'ho') {
        jobs = jobs.filter(function (job) {
          return job.rCompanySegment === 'Home Office';
        });
      }
      if (dept == 'ds') {
        jobs = jobs.filter(function (job) {
          return job.rCompanySegment === 'Distribution';
        });
      }

      if (this.state.s.length > 0) {
        jobs = this.findMatches(this.state.s, jobs);
      }

      var sortLocation = { value: "all", label: "All" };
      var locationOptions = sortedUniqueArrayOfObjects(jobs.map(function (job) {
        return job.rLocation;
      }));
      var sortLevel = { value: "all", label: "All" };
      var levelOptions = sortedUniqueArrayOfObjects(jobs.map(function (job) {
        return job.rExperience;
      }));
      var sortDepartment = { value: "all", label: "All" };
      var departmentOptions = sortedUniqueArrayOfObjects(jobs.map(function (job) {
        return job.rDepartment;
      }));
      var sortType = { value: "all", label: "All" };
      var typeOptions = sortedUniqueArrayOfObjects(jobs.map(function (job) {
        return job.rType;
      }));

      this.setState({
        dept: dept,
        page: page,
        offset: offset,
        sortLocation: sortLocation,
        locationOptions: [{ value: "all", label: this.props.lang == "fr" ? "Tous les emplacements" : "All Locations" }].concat((0, _toConsumableArray3.default)(locationOptions)),
        sortLevel: sortLevel,
        levelOptions: [{ value: "all", label: "All Levels" }].concat((0, _toConsumableArray3.default)(levelOptions)),
        sortDepartment: sortDepartment,
        departmentOptions: [{ value: "all", label: "All Departments" }].concat((0, _toConsumableArray3.default)(departmentOptions)),
        sortType: sortType,
        typeOptions: [{ value: "all", label: "All Types" }].concat((0, _toConsumableArray3.default)(typeOptions)),
        jobs: jobs,
        jobsTotal: jobs.length,
        currentResults: jobs.slice(offset, offset + 10)
      });
    }
  }, {
    key: 'findMatches',
    value: function findMatches(wordToMatch, jobs) {
      return jobs.filter(function (job) {
        var regex = new RegExp(wordToMatch, 'gi');
        return job.rTitle.match(regex) || job.rLocation.match(regex) || job.rExperience.match(regex) || job.rDepartment.match(regex) || job.rType.match(regex) || job.rStoreName.match(regex);
      });
    }
  }, {
    key: 'changeSearch',
    value: function changeSearch(s) {
      var jobs = this.props.i18n.language === "fr" ? this.props.frJobs : this.props.enJobs;
      jobs = jobs.sort(function (a, b) {
        return a.releasedDate > b.releasedDate ? -1 : 1;
      });
      var dept = this.state.dept;
      var offset = 0;
      var page = 0;
      if (dept == 'retail-ca') {
        jobs = jobs.filter(function (job) {
          return job.rCompanySegment === 'Retail' && job.rCountry == "ca";
        });
      }
      if (dept == 'retail-us') {
        jobs = jobs.filter(function (job) {
          return job.rCompanySegment === 'Retail' && job.rCountry == "us";
        });
      }
      if (dept == 'ho') {
        jobs = jobs.filter(function (job) {
          return job.rCompanySegment === 'Home Office';
        });
      }
      if (dept == 'ds') {
        jobs = jobs.filter(function (job) {
          return job.rCompanySegment === 'Distribution';
        });
      }

      jobs = this.findMatches(s, jobs);

      var sortLocation = { value: "all", label: "All" };
      var locationOptions = sortedUniqueArrayOfObjects(jobs.map(function (job) {
        return job.rLocation;
      }));
      var sortLevel = { value: "all", label: "All" };
      var levelOptions = sortedUniqueArrayOfObjects(jobs.map(function (job) {
        return job.rExperience;
      }));
      var sortDepartment = { value: "all", label: "All" };
      var departmentOptions = sortedUniqueArrayOfObjects(jobs.map(function (job) {
        return job.rDepartment;
      }));
      var sortType = { value: "all", label: "All" };
      var typeOptions = sortedUniqueArrayOfObjects(jobs.map(function (job) {
        return job.rType;
      }));

      this.setState({
        s: s,
        page: page,
        offset: offset,
        sortLocation: sortLocation,
        locationOptions: [{ value: "all", label: this.props.lang == "fr" ? "Tous les emplacements" : "All Locations" }].concat((0, _toConsumableArray3.default)(locationOptions)),
        sortLevel: sortLevel,
        levelOptions: [{ value: "all", label: "All Levels" }].concat((0, _toConsumableArray3.default)(levelOptions)),
        sortDepartment: sortDepartment,
        departmentOptions: [{ value: "all", label: "All Departments" }].concat((0, _toConsumableArray3.default)(departmentOptions)),
        sortType: sortType,
        typeOptions: [{ value: "all", label: "All Types" }].concat((0, _toConsumableArray3.default)(typeOptions)),
        jobs: jobs,
        jobsTotal: jobs.length,
        currentResults: jobs.slice(offset, offset + 10)
      });
    }
  }, {
    key: 'handlePageClick',
    value: function handlePageClick(selected) {
      var searchQuery = this.state.s;
      var dept = this.state.dept;
      var offset = Math.ceil(selected * 10);
      var jobs = this.state.jobs;
      _index2.default.replace({
        pathname: '/',
        query: {
          s: searchQuery,
          page: selected,
          dept: dept
        }
      });
      this.setState({
        page: selected,
        offset: offset,
        currentResults: jobs.slice(offset, offset + 10)
      });
      var jobList = document.querySelector('#jobs-list');
      scroll.scrollTo(jobList.offsetTop);
    }
  }, {
    key: 'changeLocation',
    value: function changeLocation(location) {
      var _this2 = this;

      var dept = this.state.dept;
      var offset = 0;
      var page = 0;
      var s = this.state.s;
      var jobs = this.props.i18n.language === "fr" ? this.props.frJobs : this.props.enJobs;
      jobs = jobs.sort(function (a, b) {
        return a.releasedDate > b.releasedDate ? -1 : 1;
      });

      if (dept == 'retail-ca') {
        jobs = jobs.filter(function (job) {
          return job.rCompanySegment === 'Retail' && job.rCountry == "ca";
        });
      }
      if (dept == 'retail-us') {
        jobs = jobs.filter(function (job) {
          return job.rCompanySegment === 'Retail' && job.rCountry == "us";
        });
      }
      if (dept == 'ho') {
        jobs = jobs.filter(function (job) {
          return job.rCompanySegment === 'Home Office';
        });
      }
      if (dept == 'ds') {
        jobs = jobs.filter(function (job) {
          return job.rCompanySegment === 'Distribution';
        });
      }

      if (location.value !== "all") {
        jobs = jobs.filter(function (job) {
          return job.rLocation == location.value;
        });
      }
      if (this.state.sortLevel.value !== "all") {
        jobs = jobs.filter(function (job) {
          return job.rExperience == _this2.state.sortLevel.value;
        });
      }
      if (this.state.sortDepartment.value !== "all") {
        jobs = jobs.filter(function (job) {
          return job.rDepartment == _this2.state.sortDepartment.value;
        });
      }
      if (this.state.sortType.value !== "all") {
        jobs = jobs.filter(function (job) {
          return job.rType == _this2.state.sortType.value;
        });
      }

      var sortLocation = location;
      var locationOptions = sortedUniqueArrayOfObjects(jobs.map(function (job) {
        return job.rLocation;
      }));
      var sortLevel = this.state.sortLevel;
      var levelOptions = sortedUniqueArrayOfObjects(jobs.map(function (job) {
        return job.rExperience;
      }));
      var sortDepartment = this.state.sortDepartment;
      var departmentOptions = sortedUniqueArrayOfObjects(jobs.map(function (job) {
        return job.rDepartment;
      }));
      var sortType = this.state.sortType;
      var typeOptions = sortedUniqueArrayOfObjects(jobs.map(function (job) {
        return job.rType;
      }));

      this.setState({
        s: s,
        page: page,
        offset: offset,
        sortLocation: sortLocation,
        locationOptions: [{ value: "all", label: this.props.lang == "fr" ? "Tous les emplacements" : "All Locations" }].concat((0, _toConsumableArray3.default)(locationOptions)),
        sortLevel: sortLevel,
        levelOptions: [{ value: "all", label: "All Levels" }].concat((0, _toConsumableArray3.default)(levelOptions)),
        sortDepartment: sortDepartment,
        departmentOptions: [{ value: "all", label: "All Departments" }].concat((0, _toConsumableArray3.default)(departmentOptions)),
        sortType: sortType,
        typeOptions: [{ value: "all", label: "All Types" }].concat((0, _toConsumableArray3.default)(typeOptions)),
        jobs: jobs,
        jobsTotal: jobs.length,
        currentResults: jobs.slice(offset, offset + 10)
      });
    }
  }, {
    key: 'changeLevel',
    value: function changeLevel(level) {
      var _this3 = this;

      var dept = this.state.dept;
      var offset = 0;
      var page = 0;
      var s = this.state.s;
      var jobs = this.props.i18n.language === "fr" ? this.props.frJobs : this.props.enJobs;
      jobs = jobs.sort(function (a, b) {
        return a.releasedDate > b.releasedDate ? -1 : 1;
      });

      if (dept == 'retail-ca') {
        jobs = jobs.filter(function (job) {
          return job.rCompanySegment === 'Retail' && job.rCountry == "ca";
        });
      }
      if (dept == 'retail-us') {
        jobs = jobs.filter(function (job) {
          return job.rCompanySegment === 'Retail' && job.rCountry == "us";
        });
      }
      if (dept == 'ho') {
        jobs = jobs.filter(function (job) {
          return job.rCompanySegment === 'Home Office';
        });
      }
      if (dept == 'ds') {
        jobs = jobs.filter(function (job) {
          return job.rCompanySegment === 'Distribution';
        });
      }

      if (this.state.sortLocation.value !== "all") {
        jobs = jobs.filter(function (job) {
          return job.rLocation == _this3.state.sortLocation.value;
        });
      }
      if (level.value !== "all") {
        jobs = jobs.filter(function (job) {
          return job.rExperience == level.value;
        });
      }
      if (this.state.sortDepartment.value !== "all") {
        jobs = jobs.filter(function (job) {
          return job.rDepartment == _this3.state.sortDepartment.value;
        });
      }
      if (this.state.sortType.value !== "all") {
        jobs = jobs.filter(function (job) {
          return job.rType == _this3.state.sortType.value;
        });
      }

      var sortLevel = level;
      var levelOptions = sortedUniqueArrayOfObjects(jobs.map(function (job) {
        return job.rExperience;
      }));
      var sortLocation = this.state.sortLocation;
      var locationOptions = sortedUniqueArrayOfObjects(jobs.map(function (job) {
        return job.rLocation;
      }));
      var sortDepartment = this.state.sortDepartment;
      var departmentOptions = sortedUniqueArrayOfObjects(jobs.map(function (job) {
        return job.rDepartment;
      }));
      var sortType = this.state.sortType;
      var typeOptions = sortedUniqueArrayOfObjects(jobs.map(function (job) {
        return job.rType;
      }));

      this.setState({
        s: s,
        page: page,
        offset: offset,
        sortLocation: sortLocation,
        locationOptions: [{ value: "all", label: this.props.lang == "fr" ? "Tous les emplacements" : "All Locations" }].concat((0, _toConsumableArray3.default)(locationOptions)),
        sortLevel: sortLevel,
        levelOptions: [{ value: "all", label: "All Levels" }].concat((0, _toConsumableArray3.default)(levelOptions)),
        sortDepartment: sortDepartment,
        departmentOptions: [{ value: "all", label: "All Departments" }].concat((0, _toConsumableArray3.default)(departmentOptions)),
        sortType: sortType,
        typeOptions: [{ value: "all", label: "All Types" }].concat((0, _toConsumableArray3.default)(typeOptions)),
        jobs: jobs,
        jobsTotal: jobs.length,
        currentResults: jobs.slice(offset, offset + 10)
      });
    }
  }, {
    key: 'changePositionDepartment',
    value: function changePositionDepartment(department) {
      var _this4 = this;

      var dept = this.state.dept;
      var offset = 0;
      var page = 0;
      var s = this.state.s;
      var jobs = this.props.i18n.language === "fr" ? this.props.frJobs : this.props.enJobs;
      jobs = jobs.sort(function (a, b) {
        return a.releasedDate > b.releasedDate ? -1 : 1;
      });

      if (dept == 'retail-ca') {
        jobs = jobs.filter(function (job) {
          return job.rCompanySegment === 'Retail' && job.rCountry == "ca";
        });
      }
      if (dept == 'retail-us') {
        jobs = jobs.filter(function (job) {
          return job.rCompanySegment === 'Retail' && job.rCountry == "us";
        });
      }
      if (dept == 'ho') {
        jobs = jobs.filter(function (job) {
          return job.rCompanySegment === 'Home Office';
        });
      }
      if (dept == 'ds') {
        jobs = jobs.filter(function (job) {
          return job.rCompanySegment === 'Distribution';
        });
      }

      if (this.state.sortLocation.value !== "all") {
        jobs = jobs.filter(function (job) {
          return job.rLocation == _this4.state.sortLocation.value;
        });
      }
      if (this.state.sortLevel.value !== "all") {
        jobs = jobs.filter(function (job) {
          return job.rExperience == _this4.state.sortLevel.value;
        });
      }
      if (department.value !== "all") {
        jobs = jobs.filter(function (job) {
          return job.rDepartment == department.value;
        });
      }
      if (this.state.sortType.value !== "all") {
        jobs = jobs.filter(function (job) {
          return job.rType == _this4.state.sortType.value;
        });
      }

      var sortDepartment = department;
      var departmentOptions = sortedUniqueArrayOfObjects(jobs.map(function (job) {
        return job.rDepartment;
      }));
      var sortLocation = this.state.sortLocation;
      var locationOptions = sortedUniqueArrayOfObjects(jobs.map(function (job) {
        return job.rLocation;
      }));
      var sortLevel = this.state.sortLevel;
      var levelOptions = sortedUniqueArrayOfObjects(jobs.map(function (job) {
        return job.rExperience;
      }));
      var sortType = this.state.sortType;
      var typeOptions = sortedUniqueArrayOfObjects(jobs.map(function (job) {
        return job.rType;
      }));

      this.setState({
        s: s,
        page: page,
        offset: offset,
        sortLocation: sortLocation,
        locationOptions: [{ value: "all", label: this.props.lang == "fr" ? "Tous les emplacements" : "All Locations" }].concat((0, _toConsumableArray3.default)(locationOptions)),
        sortLevel: sortLevel,
        levelOptions: [{ value: "all", label: "All Levels" }].concat((0, _toConsumableArray3.default)(levelOptions)),
        sortDepartment: sortDepartment,
        departmentOptions: [{ value: "all", label: "All Departments" }].concat((0, _toConsumableArray3.default)(departmentOptions)),
        sortType: sortType,
        typeOptions: [{ value: "all", label: "All Types" }].concat((0, _toConsumableArray3.default)(typeOptions)),
        jobs: jobs,
        jobsTotal: jobs.length,
        currentResults: jobs.slice(offset, offset + 10)
      });
    }
  }, {
    key: 'changeType',
    value: function changeType(type) {
      var _this5 = this;

      var dept = this.state.dept;
      var offset = 0;
      var page = 0;
      var s = this.state.s;
      var jobs = this.props.i18n.language === "fr" ? this.props.frJobs : this.props.enJobs;
      jobs = jobs.sort(function (a, b) {
        return a.releasedDate > b.releasedDate ? -1 : 1;
      });

      if (dept == 'retail-ca') {
        jobs = jobs.filter(function (job) {
          return job.rCompanySegment === 'Retail' && job.rCountry == "ca";
        });
      }
      if (dept == 'retail-us') {
        jobs = jobs.filter(function (job) {
          return job.rCompanySegment === 'Retail' && job.rCountry == "us";
        });
      }
      if (dept == 'ho') {
        jobs = jobs.filter(function (job) {
          return job.rCompanySegment === 'Home Office';
        });
      }
      if (dept == 'ds') {
        jobs = jobs.filter(function (job) {
          return job.rCompanySegment === 'Distribution';
        });
      }

      if (this.state.sortLocation.value !== "all") {
        jobs = jobs.filter(function (job) {
          return job.rLocation == _this5.state.sortLocation.value;
        });
      }
      if (this.state.sortLevel.value !== "all") {
        jobs = jobs.filter(function (job) {
          return job.rExperience == _this5.state.sortLevel.value;
        });
      }
      if (this.state.sortDepartment.value !== "all") {
        jobs = jobs.filter(function (job) {
          return job.rDepartment == _this5.state.sortDepartment.value;
        });
      }
      if (type.value !== "all") {
        jobs = jobs.filter(function (job) {
          return job.rType == type.value;
        });
      }

      var sortType = type;
      var typeOptions = sortedUniqueArrayOfObjects(jobs.map(function (job) {
        return job.rType;
      }));
      var sortLocation = this.state.sortLocation;
      var locationOptions = sortedUniqueArrayOfObjects(jobs.map(function (job) {
        return job.rLocation;
      }));
      var sortLevel = this.state.sortLevel;
      var levelOptions = sortedUniqueArrayOfObjects(jobs.map(function (job) {
        return job.rExperience;
      }));
      var sortDepartment = this.state.sortDepartment;
      var departmentOptions = sortedUniqueArrayOfObjects(jobs.map(function (job) {
        return job.rDepartment;
      }));

      this.setState({
        s: s,
        page: page,
        offset: offset,
        sortLocation: sortLocation,
        locationOptions: [{ value: "all", label: this.props.lang == "fr" ? "Tous les emplacements" : "All Locations" }].concat((0, _toConsumableArray3.default)(locationOptions)),
        sortLevel: sortLevel,
        levelOptions: [{ value: "all", label: "All Levels" }].concat((0, _toConsumableArray3.default)(levelOptions)),
        sortDepartment: sortDepartment,
        departmentOptions: [{ value: "all", label: "All Departments" }].concat((0, _toConsumableArray3.default)(departmentOptions)),
        sortType: sortType,
        typeOptions: [{ value: "all", label: "All Types" }].concat((0, _toConsumableArray3.default)(typeOptions)),
        jobs: jobs,
        jobsTotal: jobs.length,
        currentResults: jobs.slice(offset, offset + 10)
      });
    }
  }, {
    key: 'render',
    value: function render() {
      console.log(this.state.currentResults);
      var t = this.props.t;
      return _react2.default.createElement(_layout2.default, { title: _settings2.default.title }, _react2.default.createElement('div', { className: 'main-banner', 'data-jsx': 3629308260
      }, _react2.default.createElement('div', { className: 'banner-content', 'data-jsx': 3629308260
      }, _react2.default.createElement('div', { className: 'banner-inner', 'data-jsx': 3629308260
      }, _react2.default.createElement('img', { src: 'https://s3-us-west-2.amazonaws.com/ruutly-indigo-static/indigo-logo-white.svg', alt: 'Indigo Logo', 'data-jsx': 3629308260
      }), _react2.default.createElement('h3', {
        'data-jsx': 3629308260
      }, t('common:banner.main'))), _react2.default.createElement(_filters2.default, {
        dept: this.state.dept,
        search: this.state.s,
        changeDepartment: this.changeDepartment,
        changeSearch: this.changeSearch,
        sortLocation: this.state.sortLocation,
        locationOptions: this.state.locationOptions,
        changeLocation: this.changeLocation,
        sortLevel: this.state.sortLevel,
        levelOptions: this.state.levelOptions,
        changeLevel: this.changeLevel,
        sortDepartment: this.state.sortDepartment,
        departmentOptions: this.state.departmentOptions,
        changePositionDepartment: this.changePositionDepartment,
        sortType: this.state.sortType,
        typeOptions: this.state.typeOptions,
        changeType: this.changeType
      }))), _react2.default.createElement('div', { className: 'inner-container', 'data-jsx': 3629308260
      }, _react2.default.createElement(_joblist2.default, {
        jobs: this.state.currentResults,
        page: this.state.page,
        search: this.state.s,
        totalResults: this.state.jobsTotal,
        handlePageClick: this.handlePageClick
      })), _react2.default.createElement(_style2.default, {
        styleId: 3629308260,
        css: '.main-banner[data-jsx="3629308260"]{-webkit-background-size:cover;-moz-background-size:cover;background-size:cover;background-position:center top;background-repeat:no-repeat;background-image:url(' + _settings2.default.background + ');height:auto;padding-top:200px;padding-bottom:50px;position:relative}.main-banner[data-jsx="3629308260"]:before{position:absolute;content:"";display:block;top:0;left:0;right:0;bottom:0;pointer-events:none;background-color:rgba(0,35,96,0.8)}.main-banner[data-jsx="3629308260"] .banner-content[data-jsx="3629308260"]{display:block}.main-banner[data-jsx="3629308260"] .banner-content[data-jsx="3629308260"] .banner-inner[data-jsx="3629308260"]{font-weight:400;-webkit-text-transform:uppercase;text-transform:uppercase;position:relative;color:#fff;max-width:700px;-webkit-text-align:center;text-align:center;margin:0 auto;padding:15px}.main-banner[data-jsx="3629308260"] .banner-content[data-jsx="3629308260"] .banner-inner[data-jsx="3629308260"] img[data-jsx="3629308260"]{margin-bottom:15px}.main-banner[data-jsx="3629308260"] .banner-content[data-jsx="3629308260"] .banner-inner[data-jsx="3629308260"] h1[data-jsx="3629308260"]{font-family:\'Roboto Condensed\', sans-serif;font-weight:400;font-size:30px;line-height:30px;margin-top:0;margin-bottom:10px}.main-banner[data-jsx="3629308260"] .banner-content[data-jsx="3629308260"] .banner-inner[data-jsx="3629308260"] hr[data-jsx="3629308260"]{border-top:4px solid ' + _settings2.default.hexColor + ';max-width:100px;margin:0 auto}.main-banner[data-jsx="3629308260"] .banner-content[data-jsx="3629308260"] .banner-inner[data-jsx="3629308260"] h3[data-jsx="3629308260"]{font-family:Gibson Semibold;font-size:32px;line-height:38px;-webkit-text-transform:uppercase;text-transform:uppercase;-webkit-letter-spacing:5.14px;-moz-letter-spacing:5.14px;-ms-letter-spacing:5.14px;letter-spacing:5.14px;max-width:700px;margin:10px auto;margin-top:0}.inner-container[data-jsx="3629308260"]{padding:0 15px;max-width:1000px;margin:0 auto}@media (max-width:999px){.main-banner[data-jsx="3629308260"]{padding-top:100px}}'
      }));
    }
  }]);

  return HomePage;
}(_react2.default.Component);

var Extended = (0, _reactI18next.translate)('common', { i18n: _i18n2.default })(HomePage);

// Passing down initial translations
// use req.i18n instance on serverside to avoid overlapping requests set the language wrong
Extended.getInitialProps = function () {
  var _ref2 = (0, _asyncToGenerator3.default)(_regenerator2.default.mark(function _callee(_ref) {
    var req = _ref.req;
    var limit, url, url1, url2, url3, res, res1, res2, res3, json, json1, json2, json3, jobs, enJobs, frJobs;
    return _regenerator2.default.wrap(function _callee$(_context) {
      while (1) {
        switch (_context.prev = _context.next) {
          case 0:
            limit = 100;
            url = 'https://api.smartrecruiters.com/v1/companies/IndigoBooksMusic/postings?limit=' + limit + '&offset=0';
            url1 = 'https://api.smartrecruiters.com/v1/companies/IndigoBooksMusic/postings?limit=' + limit + '&offset=100';
            url2 = 'https://api.smartrecruiters.com/v1/companies/IndigoBooksMusic/postings?limit=' + limit + '&offset=200';
            url3 = 'https://api.smartrecruiters.com/v1/companies/IndigoBooksMusic/postings?limit=' + limit + '&offset=300';
            _context.next = 7;
            return fetch(url);

          case 7:
            res = _context.sent;
            _context.next = 10;
            return fetch(url1);

          case 10:
            res1 = _context.sent;
            _context.next = 13;
            return fetch(url2);

          case 13:
            res2 = _context.sent;
            _context.next = 16;
            return fetch(url3);

          case 16:
            res3 = _context.sent;
            _context.next = 19;
            return res.json();

          case 19:
            json = _context.sent;
            _context.next = 22;
            return res1.json();

          case 22:
            json1 = _context.sent;
            _context.next = 25;
            return res2.json();

          case 25:
            json2 = _context.sent;
            _context.next = 28;
            return res3.json();

          case 28:
            json3 = _context.sent;
            jobs = [].concat((0, _toConsumableArray3.default)(json.content), (0, _toConsumableArray3.default)(json1.content), (0, _toConsumableArray3.default)(json2.content), (0, _toConsumableArray3.default)(json3.content));

            jobs.map(function (job) {
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
              job.rCountry = '' + job.location.country;
              job.rType = job.typeOfEmployment.label;
              job.rExperience = job.experienceLevel.label;
              job.rCompanySegment = job.customField.find(function (field) {
                return field.fieldLabel == "Company Segment";
              }) ? job.customField.find(function (field) {
                return field.fieldLabel == "Company Segment";
              }).valueLabel : "";
              job.rPositionSubSegment = job.customField.find(function (field) {
                return field.fieldLabel == "Position Sub-Segment";
              }) ? job.customField.find(function (field) {
                return field.fieldLabel == "Position Sub-Segment";
              }).valueLabel : "";
              if (job.customField.find(function (field) {
                return field.fieldLabel == "Company Segment";
              }) && job.customField.find(function (field) {
                return field.fieldLabel == "Company Segment";
              }).valueLabel == "Stores") {
                job.rCompanySegment = "Retail";
              }
              job.rTitle = job.name;
              if (job.rDepartment === "Customer Service" && job.rType == "Contract" && job.rExperience === "Entry Level") {
                job.rTitle = job.language.code === "fr-CA" ? "Représentant de service à la clientèle saisonnier" : "Seasonal Customer Experience Representative";
              }

              if (job.rDepartment === "Customer Service" && job.rType == "Part-time" && job.rExperience === "Entry Level") {
                job.rTitle = job.language.code === "fr-CA" ? "Représentant de service à la clientèle" : "Customer Experience Representative";
              }

              if (job.rDepartment === "Customer Service" && job.rType == "Full-time" && job.rExperience === "Entry Level") {
                job.rTitle = job.language.code === "fr-CA" ? "Représentant de service à la clientèle" : "Customer Experience Representative";
              }
              if (job.rCompanySegment === "Retail" && job.rPositionSubSegment === "Retail - CER - Stocking/Tasking" && job.rExperience === "Associate") {
                if (job.rType === "Contract") {
                  job.rTitle = job.language.code === "fr-CA" ? "Chef de l'exploitation saisonnier" : "Seasonal Operations Leader";
                }
                job.rTitle = job.language.code === "fr-CA" ? "Chef de l'exploitation" : "Operations Leader";
              }
              if (job.rCompanySegment === "Retail" && job.rPositionSubSegment === "Retail - CER - Customer Service/Sales" && job.rExperience === "Associate") {
                if (job.rType === "Contract") {
                  job.rTitle = job.language.code === "fr-CA" ? "Chef de l’expérience en magasin saisonnier" : "Seasonal Customer Experience Leader";
                }
                job.rTitle = job.language.code === "fr-CA" ? "Chef de l’expérience en magasin" : "Customer Experience Leader";
              }
            });

            enJobs = jobs.filter(function (job) {
              return job.language.code === "en";
            });
            frJobs = jobs.filter(function (job) {
              return job.language.code === "fr-CA";
            });

            if (!(req && !process.browser)) {
              _context.next = 35;
              break;
            }

            return _context.abrupt('return', (0, _extends3.default)({ enJobs: enJobs, frJobs: frJobs }, _i18n2.default.getInitialProps(req, 'common')));

          case 35:
            return _context.abrupt('return', { enJobs: enJobs, frJobs: frJobs });

          case 36:
          case 'end':
            return _context.stop();
        }
      }
    }, _callee, _this6);
  }));

  return function (_x) {
    return _ref2.apply(this, arguments);
  };
}();

exports.default = Extended;
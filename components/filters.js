import React from 'react'
import PropTypes from 'prop-types'
import Link from 'next/link'
import FontAwesome from 'react-fontawesome'
import Router from 'next/router'
import Select from 'react-select'
import Scroll from 'react-scroll'
import i18n from '../i18n'
import { translate } from 'react-i18next';
import settings from '../settings.js'

const scroll = Scroll.animateScroll

class Filters extends React.Component {
	constructor(props) {
    super(props)
    this.doSearch = this.doSearch.bind(this)
    this.selectDepartment = this.selectDepartment.bind(this)
    this.changeLocation = this.changeLocation.bind(this)
    this.changePositionDepartment = this.changePositionDepartment.bind(this)
    this.changeLevel = this.changeLevel.bind(this)
    this.changeType = this.changeType.bind(this)
    this.changeDept = this.changeDept.bind(this)
    this.resetSearch = this.resetSearch.bind(this)
    this.deptOptions = this.deptOptions.bind(this)
    this.translated = this.translated.bind(this)
  }

  doSearch(e) {
    e.preventDefault()
    const searchQuery = this.refs.searchBox.value
    const dept = this.props.dept
    this.props.changeSearch(searchQuery)
    Router.push({
      pathname: '/',
      query: { 
        page: 0,
        s: searchQuery,
        dept,
      }
    })
    const jobList = document.querySelector('#jobs-list')
    scroll.scrollTo(jobList.offsetTop)
  }

  deptOptions() {
    const t = this.props.t
    return [{ value: "retail-ca", label: t('common:banner.retailCa') }, { value: "retail-us", label: t('common:banner.retailUs') }, { value: "ho", label: t('common:banner.ho') }, { value: "ds", label: t('common:banner.ds') }, { value: "all", label: t('common:banner.viewAll') }]
  }

  selectDepartment(e) {
    e.preventDefault()
    const searchQuery = this.refs.searchBox.value
    this.props.changeDepartment(e.target.id)
    Router.push({
      pathname: '/',
      query: { 
        page: 0,
        s: searchQuery,
        dept: e.target.id,
      }
    })
    const jobList = document.querySelector('#jobs-list')
    scroll.scrollTo(jobList.offsetTop)
  }

  changeLocation(val) {
    const jobList = document.querySelector('#jobs-list')
    scroll.scrollTo(jobList.offsetTop)
    const s = this.refs.searchBox.value
    const dept = this.props.dept
    const location = val
    const level = this.props.sortLevel.value ? this.props.sortLevel.value : this.props.sortLevel
    const department = this.props.sortDepartment.value ? this.props.sortDepartment.value : this.props.sortDepartment
    const type = this.props.sortType.value ? this.props.sortType.value : this.props.sortType
    this.props.changeLocation(val)
    Router.push({
      pathname: '/',
      query: { 
        page: 0,
        location: val.value,
        s,
        dept,
        level,
        department,
        type,
      }
    })
  }

  changePositionDepartment(val) {
    const jobList = document.querySelector('#jobs-list')
    scroll.scrollTo(jobList.offsetTop)
    const s = this.refs.searchBox.value
    const dept = this.props.dept
    const location = this.props.sortLocation.value ? this.props.sortLocation.value : this.props.sortLocation
    const level = this.props.sortLevel.value ? this.props.sortLevel.value : this.props.sortLevel
    const department = val
    const type = this.props.sortType.value ? this.props.sortType.value : this.props.sortType
    this.props.changePositionDepartment(val)
    Router.push({
      pathname: '/',
      query: { 
        page: 0,
        location,
        s,
        dept,
        level,
        department: val.value,
        type,
      }
    })
  }

  changeLevel(val) {
    const jobList = document.querySelector('#jobs-list')
    scroll.scrollTo(jobList.offsetTop)
    const s = this.refs.searchBox.value
    const dept = this.props.dept
    const location = this.props.sortLocation.value ? this.props.sortLocation.value : this.props.sortLocation
    const level = val
    const department = this.props.sortDepartment.value ? this.props.sortDepartment.value : this.props.sortDepartment
    const type = this.props.sortType.value ? this.props.sortType.value : this.props.sortType
    this.props.changeLevel(val)
    Router.push({
      pathname: '/',
      query: { 
        page: 0,
        location,
        s,
        dept,
        level: val.value,
        department,
        type,
      }
    })
  }

  changeType(val) {
    const jobList = document.querySelector('#jobs-list')
    scroll.scrollTo(jobList.offsetTop)
    const s = this.refs.searchBox.value
    const dept = this.props.dept
    const location = this.props.sortLocation.value ? this.props.sortLocation.value : this.props.sortLocation
    const level = this.props.sortLevel.value ? this.props.sortLevel.value : this.props.sortLevel
    const department = this.props.sortDepartment.value ? this.props.sortDepartment.value : this.props.sortDepartment
    const type = val
    this.props.changeType(val)
    Router.push({
      pathname: '/',
      query: { 
        page: 0,
        location,
        s,
        dept,
        level,
        department,
        type: val.value,
      }
    })
  }

  deptLabel(value) {
    const t = this.props.t
    switch (value) {
      case "retail-ca":
        return t('common:banner.retailCa')
      case "retail-us":
        return t('common:banner.retailUs')
      case "ho":
        return t('common:banner.ho')
      case "ds":
        return t('common:banner.ds')
      case "all":
        return t('common:banner.viewAll')
      case "":
        return t('common:banner.viewAll')
      default:
        return t('common:banner.viewAll')
    }
  }

  changeDept(val) {
    const searchQuery = this.refs.searchBox.value
    this.props.changeDepartment(val.value)
    Router.push({
      pathname: '/',
      query: { 
        page: 0,
        s: searchQuery,
        dept: val.value,
      }
    })
    const jobList = document.querySelector('#jobs-list')
    scroll.scrollTo(jobList.offsetTop)
  }

  resetSearch(e) {
    if (e.target.value.length < 1) {
      const searchQuery = this.refs.searchBox.value
      const dept = this.props.dept
      this.props.changeSearch(searchQuery)
      Router.push({
        pathname: '/',
        query: { 
          page: 0,
          s: searchQuery,
          dept,
        }
      })
      const jobList = document.querySelector('#jobs-list')
      scroll.scrollTo(jobList.offsetTop)  
    }
    
  }

  translated(array, option) {
    const t = this.props.t
    return array.map(object => {
      return {
        value: object.value,
        label: t(`common:${option}.${object.label}`)
      }
    })
  }

  render() {
    const t = this.props.t
  	return (<div className="inner-container">
  		<ul className="department-list desktop">
				<li><a href="#" id={`retail-us`} className={this.props.dept === 'retail-us' ? `active` : ``} onClick={(e) => (this.selectDepartment(e))}>{t('common:banner.retailUs')}</a></li>
				<li><a href="#" id={`retail-ca`} className={this.props.dept === 'retail-ca' ? `active` : ``} onClick={(e) => (this.selectDepartment(e))}>{t('common:banner.retailCa')}</a></li>
				<li><a href="#" id={`ho`} className={this.props.dept === 'ho' ? `active` : ``} onClick={(e) => (this.selectDepartment(e))}>{t('common:banner.ho')}</a></li>
				<li><a href="#" id={`ds`} className={this.props.dept === 'ds' ? `active` : ``} onClick={(e) => (this.selectDepartment(e))}>{t('common:banner.ds')}</a></li>
				<li><a href="#" id={`all`} className={this.props.dept === 'all' || this.props.dept === '' ? `active` : ``} onClick={(e) => (this.selectDepartment(e))}>{t('common:banner.viewAll')}</a></li>
  		</ul>
      <div className="dept-list mobile">
        <Select
          name="dept"
          value={ { value: this.props.dept === '' ? 'all' : this.props.dept, label: this.deptLabel(this.props.dept) } }
          options={this.deptOptions()}
          clearable={false}
          searchable={false}
          onChange={this.changeDept}
        />
      </div>
  		<div className='searching-div'>
        <form onSubmit={this.doSearch}>
          <input type='text' className='search-jobs' ref="searchBox" name='search-jobs' placeholder={t('common:banner.searchBlurb')} defaultValue={this.props.search} onChange={(e) => (this.resetSearch(e))} />
          <label htmlFor='search-jobs' onClick={this.doSearch}>
            <button type="submit">
              <span className="search-text desktop">{t('common:banner.search')}</span><span className="search-text mobile"><FontAwesome fixedWidth name='search'/></span>
            </button>
          </label>
        </form>
      </div>
      <div className='filters-div'>
        <div className='filter-item'>
          <div className='filter-inner'>
            <Select
              name="location"
              value={this.props.sortLocation.value}
              options={this.props.locationOptions}
              placeholder={"All Locations"}
              clearable={false}
              searchable={false}
              onChange={this.changeLocation}
            />
          </div>
        </div>
        <div className='filter-item'>
          <div className='filter-inner'>
            <Select
              name="team"
              value={this.props.sortLevel.value}
              options={this.translated(this.props.levelOptions, 'levels')}
              placeholder={t('common:levels.All Levels')}
              clearable={false}
              searchable={false}
              onChange={this.changeLevel}
            />
          </div>
        </div>
        <div className='filter-item'>
          <div className='filter-inner'>
            <Select
              name="department"
              value={this.props.sortDepartment.value}
              options={this.translated(this.props.departmentOptions, 'departments')}
              placeholder={t('common:departments.All Departments')}
              clearable={false}
              searchable={false}
              onChange={this.changePositionDepartment}
            />
          </div>
        </div>
        <div className='filter-item'>
          <div className='filter-inner'>
            <Select
              name="type"
              value={this.props.sortType.value}
              options={this.translated(this.props.typeOptions, 'types')}
              placeholder={t('common:types.All Types')}
              clearable={false}
              searchable={false}
              onChange={this.changeType}
            />
          </div>
        </div>
      </div>
  		<style jsx>{`
        .inner-container {
          padding: 0 15px;
          max-width: 1000px;
          margin: 0 auto;
        }
        .department-list {
        	display: flex;
        	justify-content: space-between;
        	align-items: center;
        	position: relative;
        	list-style-type: none;
        	padding: 0;
        	margin-top: 40px;
    	    margin-bottom: 15px;
          margin-left: -10px;
          margin-right: -10px;
        }
        .department-list li {
        	margin-bottom: 15px;
          min-width: 180px;
          margin-left: 10px;
          margin-right: 10px;
        }
        .department-list li a {
          font-family: 'Gibson Regular';
          letter-spacing: 0.2em;
        	color: #fff;
          text-transform: uppercase;
          font-size: 13px;
          text-align: center;
        	font-weight: 400;
        	text-decoration: none;
        	display: block;
        	border: 1px solid #fff;
        	padding: 6px 15px;
        	transition: all 250ms ease 0s;
          -webkit-transition: all 250ms ease 0s;
          display: flex;
          height: 45px;
          justify-content: center;
          align-items: center;
        }

        .department-list li a.active {
          color: ${settings.hexColor};
          background-color: #fff;
        }

        .department-list li a:hover {
        	color: ${settings.hexColor};
					background-color: #fff;
        }
        .searching-div {
          margin-bottom: 20px;
          position: relative;
        }
        .searching-div .search-jobs {
          display: block;
          font-size: 14px;
          -webkit-appearance: none;
          border-radius: 0;
          flex: 1;
          border: 2px solid #fff;
          padding: 8px 5px;
          font-family: 'Gibson Regular';
        }
        .searching-div .search-jobs:placeholder-shown {
        	font-style: italic;
        }
        .searching-div form {
        	display: flex;
    	    justify-content: space-between;
        }
        .searching-div button {
          background-color: transparent;
          border: 2px solid #fff;
          text-transform: uppercase;
          font-family: 'Gibson Regular';
          letter-spacing: 0.2em;
          padding: 8px 40px;
          font-size: 14px;
          outline: none;
          color: #fff;
          font-weight: 400;
          cursor: pointer;
          transition: all 250ms ease 0s;
          -webkit-transition: all 250ms ease 0s;
          position: relative;
          left: -4px;
          margin-right: -4px;
        }
        .searching-div .search-text.desktop {
          display: block;
        }
        .searching-div .search-text.mobile {
          display: none;
        }
        .searching-div button:hover {
					color: ${settings.hexColor};
					background-color: #fff;
        }
        .searching-div label {
          color: #fff;
          cursor: pointer;
        }
        .filters-div {
          margin-bottom: 20px;
          display: flex;
          position: relative;
          justify-content: space-between;
          margin-left: -5px;
          margin-right: -5px;
          font-family: 'Gibson Regular';
        }
        .filters-div .filter-item {
          width: 100%;
          padding: 5px;
          position: relative;
        }
        .dept-list.mobile {
          display: none;
          width: 230px;
          margin: 0 auto;
          margin-top: 40px;
          margin-bottom: 25px;
        }
        @media screen and (max-width: 999px) {
          .department-list.desktop {
            display: none;
          }
          .dept-list.mobile {
            display: block;
          }
        	.department-list, .filters-div {
        		flex-direction: column;
        	}
          .filters-div .filter-item {
            width: 230px;
            margin: 0 auto;
          }
          .department-list li a {
            padding: 6px 15px;
          }
          .searching-div .search-text.desktop {
            display: none;
          }
          .searching-div .search-text.mobile {
            display: block;
            position: relative;
            right: -3px;
          }
          .searching-div {
            margin: 0 auto;
            margin-bottom: 25px;
            width: 230px;
          }
          .searching-div button {
            padding: 8px 10px;
          }
        }
      `}</style>
  	</div>)
  }
}

Filters.propTypes = {
  dept: React.PropTypes.string,
}

const ExtendedFilters = translate('common', { i18n })(Filters)

// Passing down initial translations
// use req.i18n instance on serverside to avoid overlapping requests set the language wrong
ExtendedFilters.getInitialProps = async ({ req }) => {
  if (req && !process.browser) return i18n.getInitialProps(req, ['common'])
  return {}
}

export default ExtendedFilters
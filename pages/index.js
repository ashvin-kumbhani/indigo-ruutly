import React from 'react'
import Link from 'next/link'
import Router from 'next/router'
import 'isomorphic-fetch'
import Scroll from 'react-scroll'
import ReactGA from 'react-ga';
import _ from 'underscore'
import i18n from '../i18n'
import { translate } from 'react-i18next';
import Layout from '../components/layout'
import JobList from '../components/joblist'
import Filters from '../components/filters'
import settings from '../settings.js'

const ScrollLink = Scroll.Link
const scroll = Scroll.animateScroll

const sortedUniqueArrayOfObjects = (array) => {
  const finalArray = []
  const uniqueSortedArray = _.uniq(array).sort((a, b) => a > b ? 1 : -1)
  uniqueSortedArray.map((item) => finalArray.push( { value: item, label: item } ))
  return finalArray
}

const returnObject = (queryItem) => {
  if (queryItem === "all") {
    return { value: "all", label: "All" }
  } else {
    return { value: queryItem, label: queryItem }
  }
}

class HomePage extends React.Component {

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

  constructor(props) {
    super(props)
    const query = props.url.query
    const s = query.s && query.s.length > 0 ? query.s : ""
    const dept = query.dept && query.dept.length > 0 ? query.dept : "all"
    const page = query.page && query.page.length > 0 ? query.page : 0
    const offset = Math.ceil(page*10)
    
    let jobs = props.i18n.language === "fr" ? props.frJobs : props.enJobs

    jobs = jobs.sort((a, b) => a.releasedDate > b.releasedDate ? -1 : 1)
    if (dept == 'retail-ca') {
      jobs = jobs.filter(job => {
        return  job.rCompanySegment === 'Retail' && job.rCountry == "ca"
      })
    }
    if (dept == 'retail-us') {
      jobs = jobs.filter(job => {
        return  job.rCompanySegment === 'Retail' && job.rCountry == "us"
      })
    }
    if (dept == 'ho') {
      jobs = jobs.filter(job => {
        return job.rCompanySegment === 'Home Office'
      })
    }
    if (dept == 'ds') {
      jobs = jobs.filter(job => {
        return job.rCompanySegment === 'Distribution'
      })
    }

    if (s.length > 0) {
      jobs = this.findMatches(s, jobs)
    }

    const sortLocation = query.location && query.location.length > 0 ? returnObject(query.location) : {value: "all", label: "All"}
    const locationOptions = sortedUniqueArrayOfObjects(jobs.map((job) => job.rLocation))
    const sortLevel = query.level && query.level.length > 0 ? returnObject(query.level) : {value: "all", label: "All"}
    const levelOptions = sortedUniqueArrayOfObjects(jobs.map((job) => job.rExperience))
    const sortDepartment = query.department && query.department.length > 0 ? returnObject(query.department) : {value: "all", label: "All"}
    const departmentOptions = sortedUniqueArrayOfObjects(jobs.map((job) => job.rDepartment))
    const sortType = query.type && query.type.length > 0 ? returnObject(query.type) : {value: "all", label: "All"}
    const typeOptions = sortedUniqueArrayOfObjects(jobs.map((job) => job.rType))

    if (sortLocation.value !== "all") {
      jobs = jobs.filter(job => (job.rLocation == sortLocation.value))
    }
    if (sortLevel.value !== "all") {
      jobs = jobs.filter(job => (job.rExperience == sortLevel.value)) 
    }
    if (sortDepartment.value !== "all") {
      jobs = jobs.filter(job => (job.rDepartment == sortDepartment.value)) 
    }
    if (sortType.value !== "all") {
      jobs = jobs.filter(job => (job.rType == sortType.value)) 
    }
    
    this.state = {
      page,
      s,
      dept,
      sortLocation,
      locationOptions: [{ value: "all", label: props.i18n.language == "fr" ? "Tous les emplacements" : "All Locations" }, ...locationOptions],
      sortLevel,
      levelOptions: [{ value: "all", label: "All Levels" }, ...levelOptions],
      sortDepartment,
      departmentOptions: [{ value: "all", label: "All Departments" }, ...departmentOptions],
      sortType,
      typeOptions: [{ value: "all", label: "All Types" }, ...typeOptions],
      jobs,
      jobsTotal: jobs.length,
      currentResults: jobs.slice(offset, offset + 10),
      lang: props.i18n.language,
    }
    this.changeDepartment = this.changeDepartment.bind(this)
    this.changeSearch = this.changeSearch.bind(this)
    this.handlePageClick = this.handlePageClick.bind(this)
    this.findMatches = this.findMatches.bind(this)
    this.changeLocation = this.changeLocation.bind(this)
    this.changeLevel = this.changeLevel.bind(this)
    this.changePositionDepartment = this.changePositionDepartment.bind(this)
    this.changeType = this.changeType.bind(this)
  }

  componentDidMount() {
    // if (typeof window !== 'undefined') {
    //   ReactGA.initialize('UA-96732795-1')
    //   const page = window.location.pathname;
    //   ReactGA.set({ page: page })
    //   ReactGA.pageview(page)
    // }
  }

  componentDidUpdate(prevProps, prevState) {
    // console.log(this.state.lang)
    console.log()
    if ((prevState.lang !== i18n.language) || (prevProps.url.query.dept != this.props.url.query.dept)) {
      let props = this.props
      const query = props.url.query
      const s = query.s && query.s.length > 0 ? query.s : ""
      const dept = query.dept && query.dept.length > 0 ? query.dept : "all"
      const page = query.page && query.page.length > 0 ? query.page : 0
      const offset = Math.ceil(page*10)

      console.log(`CURRENT LANG: ${props.i18n.language}`)
      
      let jobs = props.i18n.language === "fr" ? props.frJobs : props.enJobs

      jobs = jobs.sort((a, b) => a.releasedDate > b.releasedDate ? -1 : 1)
      if (dept == 'retail-ca') {
        jobs = jobs.filter(job => {
          return  job.rCompanySegment === 'Retail' && job.rCountry == "ca"
        })
      }
      if (dept == 'retail-us') {
        jobs = jobs.filter(job => {
          return  job.rCompanySegment === 'Retail' && job.rCountry == "us"
        })
      }
      if (dept == 'ho') {
        jobs = jobs.filter(job => {
          return job.rCompanySegment === 'Home Office'
        })
      }
      if (dept == 'ds') {
        jobs = jobs.filter(job => {
          return job.rCompanySegment === 'Distribution'
        })
      }

      if (s.length > 0) {
        jobs = this.findMatches(s, jobs)
      }

      const sortLocation = query.location && query.location.length > 0 ? returnObject(query.location) : {value: "all", label: "All"}
      const locationOptions = sortedUniqueArrayOfObjects(jobs.map((job) => job.rLocation))
      const sortLevel = query.level && query.level.length > 0 ? returnObject(query.level) : {value: "all", label: "All"}
      const levelOptions = sortedUniqueArrayOfObjects(jobs.map((job) => job.rExperience))
      const sortDepartment = query.department && query.department.length > 0 ? returnObject(query.department) : {value: "all", label: "All"}
      const departmentOptions = sortedUniqueArrayOfObjects(jobs.map((job) => job.rDepartment))
      const sortType = query.type && query.type.length > 0 ? returnObject(query.type) : {value: "all", label: "All"}
      const typeOptions = sortedUniqueArrayOfObjects(jobs.map((job) => job.rType))

      if (sortLocation.value !== "all") {
        jobs = jobs.filter(job => (job.rLocation == sortLocation.value))
      }
      if (sortLevel.value !== "all") {
        jobs = jobs.filter(job => (job.rExperience == sortLevel.value)) 
      }
      if (sortDepartment.value !== "all") {
        jobs = jobs.filter(job => (job.rDepartment == sortDepartment.value)) 
      }
      if (sortType.value !== "all") {
        jobs = jobs.filter(job => (job.rType == sortType.value)) 
      }
      
      this.setState({
        page,
        s,
        dept,
        sortLocation,
        locationOptions: [{ value: "all", label: props.i18n.language == "fr" ? "Tous les emplacements" : "All Locations" }, ...locationOptions],
        sortLevel,
        levelOptions: [{ value: "all", label: "All Levels" }, ...levelOptions],
        sortDepartment,
        departmentOptions: [{ value: "all", label: "All Departments" }, ...departmentOptions],
        sortType,
        typeOptions: [{ value: "all", label: "All Types" }, ...typeOptions],
        jobs,
        jobsTotal: jobs.length,
        currentResults: jobs.slice(offset, offset + 10),
        lang: props.i18n.language,
      });
    }
  }

  changeDepartment(dept) {
    let jobs = this.props.i18n.language === "fr" ? this.props.frJobs : this.props.enJobs
    jobs = jobs.sort((a, b) => a.releasedDate > b.releasedDate ? -1 : 1)
    const offset = 0
    const page = 0

    if (dept == 'retail-ca') {
      jobs = jobs.filter(job => {
        return  job.rCompanySegment === 'Retail' && job.rCountry == "ca"
      })
    }
    if (dept == 'retail-us') {
      jobs = jobs.filter(job => {
        return  job.rCompanySegment === 'Retail' && job.rCountry == "us"
      })
    }
    if (dept == 'ho') {
      jobs = jobs.filter(job => {
        return job.rCompanySegment === 'Home Office'
      })
    }
    if (dept == 'ds') {
      jobs = jobs.filter(job => {
        return job.rCompanySegment === 'Distribution'
      })
    }

    if (this.state.s.length > 0) {
      jobs = this.findMatches(this.state.s, jobs)
    }

    const sortLocation = {value: "all", label: "All"}
    const locationOptions = sortedUniqueArrayOfObjects(jobs.map((job) => job.rLocation))
    const sortLevel = {value: "all", label: "All"}
    const levelOptions = sortedUniqueArrayOfObjects(jobs.map((job) => job.rExperience))
    const sortDepartment = {value: "all", label: "All"}
    const departmentOptions = sortedUniqueArrayOfObjects(jobs.map((job) => job.rDepartment))
    const sortType = {value: "all", label: "All"}
    const typeOptions = sortedUniqueArrayOfObjects(jobs.map((job) => job.rType))

    this.setState({ 
      dept,
      page,
      offset,
      sortLocation,
      locationOptions: [{ value: "all", label: this.props.lang == "fr" ? "Tous les emplacements" : "All Locations" }, ...locationOptions],
      sortLevel,
      levelOptions: [{ value: "all", label: "All Levels" }, ...levelOptions],
      sortDepartment,
      departmentOptions: [{ value: "all", label: "All Departments" }, ...departmentOptions],
      sortType,
      typeOptions: [{ value: "all", label: "All Types" }, ...typeOptions],
      jobs,
      jobsTotal: jobs.length,
      currentResults: jobs.slice(offset, offset + 10),
    })
  }

  findMatches(wordToMatch, jobs) {
    return jobs.filter(job => {
      const regex = new RegExp(wordToMatch, 'gi');
      return job.rTitle.match(regex) || job.rLocation.match(regex) || job.rExperience.match(regex) || job.rDepartment.match(regex) || job.rType.match(regex) || job.rStoreName.match(regex)
    })
  }

  changeSearch(s) {
    let jobs = this.props.i18n.language === "fr" ? this.props.frJobs : this.props.enJobs
    jobs = jobs.sort((a, b) => a.releasedDate > b.releasedDate ? -1 : 1)
    const dept = this.state.dept
    const offset = 0
    const page = 0
    if (dept == 'retail-ca') {
      jobs = jobs.filter(job => {
        return  job.rCompanySegment === 'Retail' && job.rCountry == "ca"
      })
    }
    if (dept == 'retail-us') {
      jobs = jobs.filter(job => {
        return  job.rCompanySegment === 'Retail' && job.rCountry == "us"
      })
    }
    if (dept == 'ho') {
      jobs = jobs.filter(job => {
        return job.rCompanySegment === 'Home Office'
      })
    }
    if (dept == 'ds') {
      jobs = jobs.filter(job => {
        return job.rCompanySegment === 'Distribution'
      })
    }

    jobs = this.findMatches(s, jobs)

    const sortLocation = {value: "all", label: "All"}
    const locationOptions = sortedUniqueArrayOfObjects(jobs.map((job) => job.rLocation))
    const sortLevel = {value: "all", label: "All"}
    const levelOptions = sortedUniqueArrayOfObjects(jobs.map((job) => job.rExperience))
    const sortDepartment = {value: "all", label: "All"}
    const departmentOptions = sortedUniqueArrayOfObjects(jobs.map((job) => job.rDepartment))
    const sortType = {value: "all", label: "All"}
    const typeOptions = sortedUniqueArrayOfObjects(jobs.map((job) => job.rType))

    this.setState({
      s,
      page,
      offset,
      sortLocation,
      locationOptions: [{ value: "all", label: this.props.lang == "fr" ? "Tous les emplacements" : "All Locations" }, ...locationOptions],
      sortLevel,
      levelOptions: [{ value: "all", label: "All Levels" }, ...levelOptions],
      sortDepartment,
      departmentOptions: [{ value: "all", label: "All Departments" }, ...departmentOptions],
      sortType,
      typeOptions: [{ value: "all", label: "All Types" }, ...typeOptions],
      jobs,
      jobsTotal: jobs.length,
      currentResults: jobs.slice(offset, offset + 10),
    })
  }

  handlePageClick(selected) {
    const searchQuery = this.state.s
    const dept = this.state.dept
    const offset = Math.ceil(selected * 10)
    const jobs = this.state.jobs
    Router.replace({
      pathname: '/',
      query: {
        s: searchQuery,
        page: selected,
        dept,
      }
    })
    this.setState({
      page: selected,
      offset: offset,
      currentResults: jobs.slice(offset, offset + 10),
    })
    const jobList = document.querySelector('#jobs-list')
    scroll.scrollTo(jobList.offsetTop)
  }

  changeLocation(location) {
    const dept = this.state.dept
    const offset = 0
    const page = 0
    const s = this.state.s
    let jobs = this.props.i18n.language === "fr" ? this.props.frJobs : this.props.enJobs
    jobs = jobs.sort((a, b) => a.releasedDate > b.releasedDate ? -1 : 1)

    if (dept == 'retail-ca') {
      jobs = jobs.filter(job => {
        return  job.rCompanySegment === 'Retail' && job.rCountry == "ca"
      })
    }
    if (dept == 'retail-us') {
      jobs = jobs.filter(job => {
        return  job.rCompanySegment === 'Retail' && job.rCountry == "us"
      })
    }
    if (dept == 'ho') {
      jobs = jobs.filter(job => {
        return job.rCompanySegment === 'Home Office'
      })
    }
    if (dept == 'ds') {
      jobs = jobs.filter(job => {
        return job.rCompanySegment === 'Distribution'
      })
    }

    if (location.value !== "all") {
      jobs = jobs.filter(job => (job.rLocation == location.value))
    }
    if (this.state.sortLevel.value !== "all") {
      jobs = jobs.filter(job => (job.rExperience == this.state.sortLevel.value)) 
    }
    if (this.state.sortDepartment.value !== "all") {
      jobs = jobs.filter(job => (job.rDepartment == this.state.sortDepartment.value)) 
    }
    if (this.state.sortType.value !== "all") {
      jobs = jobs.filter(job => (job.rType == this.state.sortType.value)) 
    }

    const sortLocation = location
    const locationOptions = sortedUniqueArrayOfObjects(jobs.map((job) => job.rLocation))
    const sortLevel = this.state.sortLevel
    const levelOptions = sortedUniqueArrayOfObjects(jobs.map((job) => job.rExperience))
    const sortDepartment = this.state.sortDepartment
    const departmentOptions = sortedUniqueArrayOfObjects(jobs.map((job) => job.rDepartment))
    const sortType = this.state.sortType
    const typeOptions = sortedUniqueArrayOfObjects(jobs.map((job) => job.rType))

    this.setState({
      s,
      page,
      offset,
      sortLocation,
      locationOptions: [{ value: "all", label: this.props.lang == "fr" ? "Tous les emplacements" : "All Locations" }, ...locationOptions],
      sortLevel,
      levelOptions: [{ value: "all", label: "All Levels" }, ...levelOptions],
      sortDepartment,
      departmentOptions: [{ value: "all", label: "All Departments" }, ...departmentOptions],
      sortType,
      typeOptions: [{ value: "all", label: "All Types" }, ...typeOptions],
      jobs,
      jobsTotal: jobs.length,
      currentResults: jobs.slice(offset, offset + 10),
    })
  }

  changeLevel(level) {
    const dept = this.state.dept
    const offset = 0
    const page = 0
    const s = this.state.s
    let jobs = this.props.i18n.language === "fr" ? this.props.frJobs : this.props.enJobs
    jobs = jobs.sort((a, b) => a.releasedDate > b.releasedDate ? -1 : 1)

    if (dept == 'retail-ca') {
      jobs = jobs.filter(job => {
        return  job.rCompanySegment === 'Retail' && job.rCountry == "ca"
      })
    }
    if (dept == 'retail-us') {
      jobs = jobs.filter(job => {
        return  job.rCompanySegment === 'Retail' && job.rCountry == "us"
      })
    }
    if (dept == 'ho') {
      jobs = jobs.filter(job => {
        return job.rCompanySegment === 'Home Office'
      })
    }
    if (dept == 'ds') {
      jobs = jobs.filter(job => {
        return job.rCompanySegment === 'Distribution'
      })
    }

    if (this.state.sortLocation.value !== "all") {
      jobs = jobs.filter(job => (job.rLocation == this.state.sortLocation.value))
    }
    if (level.value !== "all") {
      jobs = jobs.filter(job => (job.rExperience == level.value)) 
    }
    if (this.state.sortDepartment.value !== "all") {
      jobs = jobs.filter(job => (job.rDepartment == this.state.sortDepartment.value)) 
    }
    if (this.state.sortType.value !== "all") {
      jobs = jobs.filter(job => (job.rType == this.state.sortType.value)) 
    }
    
    const sortLevel = level
    const levelOptions = sortedUniqueArrayOfObjects(jobs.map((job) => job.rExperience))
    const sortLocation = this.state.sortLocation
    const locationOptions = sortedUniqueArrayOfObjects(jobs.map((job) => job.rLocation))
    const sortDepartment = this.state.sortDepartment
    const departmentOptions = sortedUniqueArrayOfObjects(jobs.map((job) => job.rDepartment))
    const sortType = this.state.sortType
    const typeOptions = sortedUniqueArrayOfObjects(jobs.map((job) => job.rType))

    this.setState({
      s,
      page,
      offset,
      sortLocation,
      locationOptions: [{ value: "all", label: this.props.lang == "fr" ? "Tous les emplacements" : "All Locations" }, ...locationOptions],
      sortLevel,
      levelOptions: [{ value: "all", label: "All Levels" }, ...levelOptions],
      sortDepartment,
      departmentOptions: [{ value: "all", label: "All Departments" }, ...departmentOptions],
      sortType,
      typeOptions: [{ value: "all", label: "All Types" }, ...typeOptions],
      jobs,
      jobsTotal: jobs.length,
      currentResults: jobs.slice(offset, offset + 10),
    })
  }

  changePositionDepartment(department) {
    const dept = this.state.dept
    const offset = 0
    const page = 0
    const s = this.state.s
    let jobs = this.props.i18n.language === "fr" ? this.props.frJobs : this.props.enJobs
    jobs = jobs.sort((a, b) => a.releasedDate > b.releasedDate ? -1 : 1)

    if (dept == 'retail-ca') {
      jobs = jobs.filter(job => {
        return  job.rCompanySegment === 'Retail' && job.rCountry == "ca"
      })
    }
    if (dept == 'retail-us') {
      jobs = jobs.filter(job => {
        return  job.rCompanySegment === 'Retail' && job.rCountry == "us"
      })
    }
    if (dept == 'ho') {
      jobs = jobs.filter(job => {
        return job.rCompanySegment === 'Home Office'
      })
    }
    if (dept == 'ds') {
      jobs = jobs.filter(job => {
        return job.rCompanySegment === 'Distribution'
      })
    }

    if (this.state.sortLocation.value !== "all") {
      jobs = jobs.filter(job => (job.rLocation == this.state.sortLocation.value))
    }
    if (this.state.sortLevel.value !== "all") {
      jobs = jobs.filter(job => (job.rExperience == this.state.sortLevel.value)) 
    }
    if (department.value !== "all") {
      jobs = jobs.filter(job => (job.rDepartment == department.value)) 
    }
    if (this.state.sortType.value !== "all") {
      jobs = jobs.filter(job => (job.rType == this.state.sortType.value)) 
    }
    
    const sortDepartment = department
    const departmentOptions = sortedUniqueArrayOfObjects(jobs.map((job) => job.rDepartment))
    const sortLocation = this.state.sortLocation
    const locationOptions = sortedUniqueArrayOfObjects(jobs.map((job) => job.rLocation))
    const sortLevel = this.state.sortLevel
    const levelOptions = sortedUniqueArrayOfObjects(jobs.map((job) => job.rExperience))
    const sortType = this.state.sortType
    const typeOptions = sortedUniqueArrayOfObjects(jobs.map((job) => job.rType))

    this.setState({
      s,
      page,
      offset,
      sortLocation,
      locationOptions: [{ value: "all", label: this.props.lang == "fr" ? "Tous les emplacements" : "All Locations" }, ...locationOptions],
      sortLevel,
      levelOptions: [{ value: "all", label: "All Levels" }, ...levelOptions],
      sortDepartment,
      departmentOptions: [{ value: "all", label: "All Departments" }, ...departmentOptions],
      sortType,
      typeOptions: [{ value: "all", label: "All Types" }, ...typeOptions],
      jobs,
      jobsTotal: jobs.length,
      currentResults: jobs.slice(offset, offset + 10),
    })
  }

  changeType(type) {
    const dept = this.state.dept
    const offset = 0
    const page = 0
    const s = this.state.s
    let jobs = this.props.i18n.language === "fr" ? this.props.frJobs : this.props.enJobs
    jobs = jobs.sort((a, b) => a.releasedDate > b.releasedDate ? -1 : 1)

    if (dept == 'retail-ca') {
      jobs = jobs.filter(job => {
        return  job.rCompanySegment === 'Retail' && job.rCountry == "ca"
      })
    }
    if (dept == 'retail-us') {
      jobs = jobs.filter(job => {
        return  job.rCompanySegment === 'Retail' && job.rCountry == "us"
      })
    }
    if (dept == 'ho') {
      jobs = jobs.filter(job => {
        return job.rCompanySegment === 'Home Office'
      })
    }
    if (dept == 'ds') {
      jobs = jobs.filter(job => {
        return job.rCompanySegment === 'Distribution'
      })
    }

    if (this.state.sortLocation.value !== "all") {
      jobs = jobs.filter(job => (job.rLocation == this.state.sortLocation.value))
    }
    if (this.state.sortLevel.value !== "all") {
      jobs = jobs.filter(job => (job.rExperience == this.state.sortLevel.value)) 
    }
    if (this.state.sortDepartment.value !== "all") {
      jobs = jobs.filter(job => (job.rDepartment == this.state.sortDepartment.value)) 
    }
    if (type.value !== "all") {
      jobs = jobs.filter(job => (job.rType == type.value)) 
    }
    
    const sortType = type
    const typeOptions = sortedUniqueArrayOfObjects(jobs.map((job) => job.rType))
    const sortLocation = this.state.sortLocation
    const locationOptions = sortedUniqueArrayOfObjects(jobs.map((job) => job.rLocation))
    const sortLevel = this.state.sortLevel
    const levelOptions = sortedUniqueArrayOfObjects(jobs.map((job) => job.rExperience))
    const sortDepartment = this.state.sortDepartment
    const departmentOptions = sortedUniqueArrayOfObjects(jobs.map((job) => job.rDepartment))

    this.setState({
      s,
      page,
      offset,
      sortLocation,
      locationOptions: [{ value: "all", label: this.props.lang == "fr" ? "Tous les emplacements" : "All Locations" }, ...locationOptions],
      sortLevel,
      levelOptions: [{ value: "all", label: "All Levels" }, ...levelOptions],
      sortDepartment,
      departmentOptions: [{ value: "all", label: "All Departments" }, ...departmentOptions],
      sortType,
      typeOptions: [{ value: "all", label: "All Types" }, ...typeOptions],
      jobs,
      jobsTotal: jobs.length,
      currentResults: jobs.slice(offset, offset + 10),
    })
  }

  render () {
    console.log(this.state.currentResults)
    const t = this.props.t
    return (
      <Layout title={ settings.title }>
        <div className='main-banner'>
          <div className='banner-content'>
            <div className='banner-inner'>
              {/*<h1>{settings.bannerIntro}</h1>*/}
              <img src={`https://s3-us-west-2.amazonaws.com/ruutly-indigo-static/indigo-logo-white.svg`} alt="Indigo Logo" />
              <h3>{t('common:banner.main')}</h3>
            </div>
            <Filters 
              dept={this.state.dept} 
              search={ this.state.s }
              changeDepartment={ this.changeDepartment }
              changeSearch={ this.changeSearch }
              sortLocation={ this.state.sortLocation }
              locationOptions={ this.state.locationOptions }
              changeLocation={ this.changeLocation }
              sortLevel={ this.state.sortLevel }
              levelOptions={ this.state.levelOptions }
              changeLevel={ this.changeLevel }
              sortDepartment={ this.state.sortDepartment }
              departmentOptions={ this.state.departmentOptions }
              changePositionDepartment={ this.changePositionDepartment }
              sortType={ this.state.sortType }
              typeOptions={ this.state.typeOptions }
              changeType={ this.changeType }
            />
          </div>
        </div>
        <div className='inner-container'>
          <JobList
            jobs={ this.state.currentResults }
            page={ this.state.page }
            search={ this.state.s }
            totalResults={ this.state.jobsTotal }
            handlePageClick= { this.handlePageClick }
          />
        </div>
        <style jsx>{`
          .main-banner {
            -webkit-background-size: cover;
            -moz-background-size: cover;
            background-size: cover;
            background-position: center top;
            background-repeat: no-repeat;
            background-image: url(${settings.background});
            height: auto;
            padding-top: 200px;
            padding-bottom: 50px;
            position: relative;
          }
          .main-banner:before {
            position: absolute;
            content: "";
            display: block;
            top: 0;
            left: 0;
            right: 0;
            bottom: 0;
            pointer-events: none;
            background-color: rgba(0,35,96,0.8);
          }
          .main-banner .banner-content {
            display: block;
          }
          .main-banner .banner-content .banner-inner {
            font-weight: 400;
            text-transform: uppercase;
            position: relative;
            color: #fff;
            max-width: 700px;
            text-align: center;
            margin: 0 auto;
            padding: 15px;
          }
          .main-banner .banner-content .banner-inner img {
            margin-bottom: 15px;
          }
          .main-banner .banner-content .banner-inner h1 {
            font-family: 'Roboto Condensed', sans-serif;
            font-weight: 400;
            font-size: 30px;
            line-height: 30px;
            margin-top: 0;
            margin-bottom: 10px;
          }
          .main-banner .banner-content .banner-inner hr {
            border-top: 4px solid ${settings.hexColor};
            max-width: 100px;
            margin: 0 auto;
          }
          .main-banner .banner-content .banner-inner h3 {
            font-family: Gibson Semibold;
            font-size: 32px;
            line-height: 38px;
            text-transform: uppercase;
            letter-spacing: 5.14px;
            max-width: 700px;
            margin: 10px auto;
            margin-top: 0;
          }
          .inner-container {
            padding: 0 15px;
            max-width: 1000px;
            margin: 0 auto;
          }
          @media (max-width: 999px) {
            .main-banner {
              padding-top: 100px;  
            }
          }
        `}</style>
      </Layout>
    )
  }
}

const Extended = translate('common', { i18n })(HomePage);

// Passing down initial translations
// use req.i18n instance on serverside to avoid overlapping requests set the language wrong
Extended.getInitialProps = async ({ req }) => {
  const limit = 100
  const url = `https://api.smartrecruiters.com/v1/companies/IndigoBooksMusic/postings?limit=${limit}&offset=0`
  const url1 = `https://api.smartrecruiters.com/v1/companies/IndigoBooksMusic/postings?limit=${limit}&offset=100`
  const url2 = `https://api.smartrecruiters.com/v1/companies/IndigoBooksMusic/postings?limit=${limit}&offset=200`
  const url3 = `https://api.smartrecruiters.com/v1/companies/IndigoBooksMusic/postings?limit=${limit}&offset=300`
  const res = await fetch(url)
  const res1 = await fetch(url1)
  const res2 = await fetch(url2)
  const res3 = await fetch(url3)
  const json = await res.json()
  const json1 = await res1.json()
  const json2 = await res2.json()
  const json3 = await res3.json()
  let jobs = [...json.content, ...json1.content, ...json2.content, ...json3.content]

  jobs.map(job => {
    job.rStoreName = job.customField.find(field => (field.fieldLabel == "Store Name")) ? job.customField.find(field => (field.fieldLabel == "Store Name")).valueLabel : ""
    if (job.customField.find(field => (field.fieldLabel == "Company Segment")) && job.customField.find(field => (field.fieldLabel == "Company Segment")).valueLabel == "Home Office") {
      job.rStoreName = ""
    }
    if (job.customField.find(field => (field.fieldLabel == "Company Segment")) && job.customField.find(field => (field.fieldLabel == "Company Segment")).valueLabel == "Distribution") {
      job.rStoreName = ""
    }
    job.rDepartment = job.department.label ? job.department.label : "Not Specified"
    job.rLocation = `${job.location.city}${job.location.region ? `, ${job.location.region}` : "Not Specified"}`
    job.rCountry = `${job.location.country}`
    job.rType = job.typeOfEmployment.label
    job.rExperience = job.experienceLevel.label
    job.rCompanySegment = job.customField.find(field => (field.fieldLabel == "Company Segment")) ? job.customField.find(field => (field.fieldLabel == "Company Segment")).valueLabel : ""
    job.rPositionSubSegment = job.customField.find(field => (field.fieldLabel == "Position Sub-Segment")) ? job.customField.find(field => (field.fieldLabel == "Position Sub-Segment")).valueLabel : ""
    if (job.customField.find(field => (field.fieldLabel == "Company Segment")) && job.customField.find(field => (field.fieldLabel == "Company Segment")).valueLabel == "Stores") {
      job.rCompanySegment = "Retail"
    }
    job.rTitle = job.name
    if (job.rDepartment === "Customer Service" && job.rType == "Contract" && job.rExperience === "Entry Level") {
      job.rTitle = job.language.code === "fr-CA" ? "Représentant de service à la clientèle saisonnier" : "Seasonal Customer Experience Representative"
    }

    if (job.rDepartment === "Customer Service" && job.rType == "Part-time" && job.rExperience === "Entry Level") {
      job.rTitle = job.language.code === "fr-CA" ? "Représentant de service à la clientèle" : "Customer Experience Representative"
    }

    if (job.rDepartment === "Customer Service" && job.rType == "Full-time" && job.rExperience === "Entry Level") {
      job.rTitle = job.language.code === "fr-CA" ? "Représentant de service à la clientèle" : "Customer Experience Representative"
    }
    if (job.rCompanySegment === "Retail" && job.rPositionSubSegment === "Retail - CER - Stocking/Tasking" && job.rExperience === "Associate" ) {
      if (job.rType === "Contract") {
        job.rTitle = job.language.code === "fr-CA" ? "Chef de l'exploitation saisonnier" : "Seasonal Operations Leader"
      }
      job.rTitle = job.language.code === "fr-CA" ? "Chef de l'exploitation" : "Operations Leader"
    }
    if (job.rCompanySegment === "Retail" && job.rPositionSubSegment === "Retail - CER - Customer Service/Sales" && job.rExperience === "Associate" ) {
      if (job.rType === "Contract") {
        job.rTitle = job.language.code === "fr-CA" ? "Chef de l’expérience en magasin saisonnier" : "Seasonal Customer Experience Leader" 
      }
      job.rTitle = job.language.code === "fr-CA" ? "Chef de l’expérience en magasin" : "Customer Experience Leader"
    }
  })

  const enJobs = jobs.filter(job => (job.language.code === "en"))
  const frJobs = jobs.filter(job => (job.language.code === "fr-CA"))

  if (req && !process.browser) return { enJobs, frJobs, ...i18n.getInitialProps(req, 'common') };

  return { enJobs, frJobs };
};

export default Extended;
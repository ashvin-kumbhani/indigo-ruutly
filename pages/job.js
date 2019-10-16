import React from 'react'
import FontAwesome from 'react-fontawesome'
import 'isomorphic-fetch'
import ReactGA from 'react-ga';
import { translate } from 'react-i18next';
import i18n from '../i18n'
import Layout from '../components/layout'
import settings from '../settings.js'

const months = ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December']

class JobListing extends React.Component {

  getNiceDate = (date) => {
    const dateToFormat = new Date(date)
    return `${months[dateToFormat.getMonth()]} ${dateToFormat.getDate()}, ${dateToFormat.getFullYear()}`
  }

  componentDidMount() {
    // if (typeof window !== 'undefined') {
    //   ReactGA.initialize('UA-96732795-1')
    //   const page = window.location.pathname;
    //   ReactGA.set({ page: page })
    //   ReactGA.pageview(page)
    // }
    iFrameResize();
  }

  returnDepartment(fieldObject) {
    const valueLabel = fieldObject.valueLabel;
    return valueLabel;
  }

  companySegment(fieldObject) {
    const valueLabel = fieldObject.valueLabel;
    if (valueLabel == "Stores") {
      return "Retail"
    } else return valueLabel;
  }

  getNiceDate = (date) => {
    const dateToFormat = new Date(date)
    return `${months[dateToFormat.getMonth()]} ${dateToFormat.getDate()}, ${dateToFormat.getFullYear()}`
  }

  render () {
    const job = this.props.job
    const t = this.props.t
    console.log(job);
    return (
      <Layout title={`${job.rTitle} - ${settings.companyName}`} description={`${job.jobAd.sections.jobDescription.text.substring(0, 160)}...`}>
      <div className="job-container">
        <div className='inner-container'>
          <div className='ruutly-container'>
            <iframe src={`https://beta.ruutly.com/indigo/${job.id}`} frameBorder="0" width="100%" height="0" style={{minWidth: '100%', width: '1px'}} scrolling="no" />
          </div>
          <div className="job-info">
            <div className="content">
              <h1>
                {job.name}
              </h1>
              <div className="job-meta">
                <ul>
                  <li className="industry">{t(`common:segments.${job.rCompanySegment}`)}</li>
                  <li><FontAwesome fixedWidth name='check-square-o' style={{fontSize: '16px'}}/> {t(`common:levels.${job.rExperience}`)}</li>
                  {job.rStoreName.length > 0 ? <li><FontAwesome fixedWidth name='shopping-cart' style={{fontSize: '16px'}}/> {job.rStoreName}</li> : null}
                  <li><FontAwesome fixedWidth name='user-circle-o' style={{fontSize: '16px'}}/> {t(`common:departments.${job.rDepartment}`)}</li>
                </ul>
              </div>
            </div>
            <div className="job-ctas">
              <a href={job.applyUrl} className='apply-button'>{t(`common:applyForJob`)}</a>
            </div>
          </div>
          {job.jobAd.sections.companyDescription.text.length > 0 ? <div className='text-container'>
            <div className='text-block'>
              <div className='inner-block'>
                <h3>{t(`common:job.companyDesc`)}</h3>
                <div dangerouslySetInnerHTML={{__html: job.jobAd.sections.companyDescription.text}}/>
              </div>
            </div>
          </div> : null }
          <div className='text-container'>
            <div className='text-block'>
              <div className='inner-block'>
                <h3>{t(`common:job.jobDesc`)}</h3>
                <div dangerouslySetInnerHTML={{__html: job.jobAd.sections.jobDescription.text}}/>
              </div>
            </div>
          </div>
          <div className='text-container'>
            <div className='text-block'>
              <div className='inner-block'>
                <h3>{t(`common:job.qualifications`)}</h3>
                <div dangerouslySetInnerHTML={{__html: job.jobAd.sections.qualifications.text}}/>
              </div>
            </div>
          </div>
          {job.jobAd.sections.additionalInformation.text.length > 0 ? <div className='text-container'>
            <div className='text-block'>
              <div className='inner-block'>
                <h3>{t(`common:job.additionalInfo`)}</h3>
                <div dangerouslySetInnerHTML={{__html: job.jobAd.sections.additionalInformation.text}}/>
              </div>
            </div>
          </div> : null}
        </div>
        <div className='apply-div'>
          <a href={job.applyUrl} className='apply-button'>{t(`common:applyForJob`)}</a>
        </div>
        <style jsx>{`
          .job-container {
            background-color: #fff;
          }
          .inner-container {
            padding: 0 15px;
            max-width: 1000px;
            margin: 0 auto;
          }
          .ruutly-container {
            padding-top: 30px;
            display: block;
            margin-bottom: 30px;
          }
          .job-info {
            background-color: ${settings.hexColor};
            border: 1px solid ${settings.hexColor};
            margin: 0 auto;
            color: #fff;
            display: flex;
            padding: 35px 25px;
            align-items: center;
            justify-content: space-between;
          }
          .job-info .content {
            margin-right: 25px;
          }
          .job-info .content h1 {
            margin: 0;
            font-size: 22px;
            line-height: 30px;
            font-family:"Gibson SemiBold";
            letter-spacing: 2.18px;
            color: #fff;
            margin-bottom: 15px;
          }
          .job-info .content h1 span {
            float: right;
          }
          .job-info .job-meta {
            font-size: 12px;
            font-family: "Gibson Light",Helvetica,Arial,Verdana,sans-serif;
            letter-spacing: 1.5px;
            color: #fff;
          }
          .job-info .job-meta ul {
            margin: 0;
            padding: 0;
            margin-left: -5px;
            margin-right: -5px;
          }
          .job-info .job-title-location {
            flex: 1;
          }
          .job-info .job-meta ul li {
            display: inline-block;
            padding: 5px 15px;
            border: 1px solid #fff;
            margin-left: 5px;
            margin-right: 5px;
            margin-bottom: 10px;
          }
          .job-info .job-meta ul li.industry {
            font-size: 12px;
            text-transform: uppercase;
            color: #fff;
            background-color: transparent;
            border: 1px solid #fff;
          }
          .job-info .content h1 span a {
            text-decoration: none;
            color: #fff;
            font-size: 16px;
            background-color: #fff;
            padding: 5px 30px;
            border-radius: 20px;
            text-transform: uppercase;
          }
          .job-ctas a {
            background-color: #FFF;
            color: #000;
            position: relative;
            text-decoration: none;
            padding: 10px 15px;
            font-size: 12px;
            text-transform: uppercase;
            font-family: "Gibson SemiBold",Helvetica,Arial,Verdana,sans-serif;
            letter-spacing: 2.3px;
            display: block;
            width: 200px;
            text-align: center;
            transition: all 0.3s;
          }
          .job-ctas a:hover {
            color: #fff;
            background-color: transparent;
          }
          .job-ctas a::before {
            content: '';
            height: 2px;
            background-color: #fff;
            width: 0;
            display: block;
            position: absolute;
            bottom: 0px;
            left: 0;
            transition: width 0.3s;
          }
          .job-ctas a:hover::before {
            width: 100%;
          }
          .text-container {
            border: 1px solid #000;
            background-color: #fff;
            margin: 0 auto;
            margin-bottom: 35px;
          }
          .text-block {
            position: relative;
          }
          .text-block h1, .text-block h2 {
            color: ${settings.hexColor};
            margin-top: 0;
            margin-bottom: 15px;
          }
          .text-block h1 {
            font-size: 30px;
          }
          .text-block h2 {
            font-size: 20px;
          }
          .text-block.orange {
            background-color: ${settings.hexColor};
            padding-top: 15px;
            padding-bottom: 15px;
          }
          .more-container {
            background-color: #fff;
          }
          .more-container .text-content {
            max-width: 1000px;
            padding: 50px 15px;
            margin: 0 auto;
          }
          .text-block.orange .inner-block {
            max-width: 100%;
          }
          .text-block .inner-block {
            padding: 25px;
            max-width: 800px;
            margin: 0 auto;
          }
          .apply-div {
            display: block;
            padding-bottom: 35px;
            margin-top: 35px;
            margin-top: 35px;
            text-align: center;
            display: flex;
            justify-content: center;
          }
          .apply-div .apply-button {
            padding: 10px 15px;
            position: relative;
            min-width: 220px;
            display: block;
            font-size: 12px;
            text-transform: uppercase;
            text-decoration: none;
            background-color: #000;
            color: #fff;
            text-transform: uppercase;
            font-family: "Gibson SemiBold",Helvetica,Arial,Verdana,sans-serif;
            letter-spacing: 2.3px;
            text-align: center;
            background-color: #000;
            color: #fff;
            transition: all 0.3s;
            
          }
          .apply-div .apply-button::before {
            content: '';
            height: 2px;
            background-color: #000;
            width: 0;
            display: block;
            position: absolute;
            bottom: 0px;
            left: 0;
            transition: width 0.3s;
          }
          .apply-div .apply-button:hover::before {
            width: 100%;
          }
          .apply-div .apply-button:hover {
            background-color: transparent;
            color: #000;
          }
          .info-inner {
            -ms-box-orient: horizontal;
            display: -webkit-box;
            display: -moz-box;
            display: -ms-flexbox;
            display: -moz-flex;
            display: -webkit-flex;
            display: flex;
            -webkit-flex-wrap: wrap;
            flex-wrap: wrap;
          }
          .info-inner .info-item {
            color: #fff;
            font-size: 15px;
            width: 33.33%;
            line-height: 30px;
            text-align: center;
          }
          .text-block h3 {
            font-family: "Gibson SemiBold",Helvetica,Arial,Verdana,sans-serif;
            letter-spacing: 1.5px;
            text-transform: uppercase;
          }
          @media screen and (max-width: 900px) {
            .info-inner .info-item {
              width: 50%;
            }
            .job-info {
              flex-direction: column;
            }
            .job-info .job-ctas {
              margin-top: 30px;
              width: 100%;
            }
            .job-info .job-ctas a {
              width: auto;
            }
          }
          @media screen and (max-width: 600px) {
            .info-inner .info-item {
              width: 100%;
            }
          }
        `}</style>
      </div>
      </Layout>
    )
  }
}

const ExtendedJob = translate('common', { i18n })(JobListing);

// Passing down initial translations
// use req.i18n instance on serverside to avoid overlapping requests set the language wrong
ExtendedJob.getInitialProps = async ({ req, query: { id, title } }) => {

  const res = await fetch(`${settings.apiJob}${id}`)
  const json = await res.json()
  let job = json
  job.rStoreName = job.customField.find(field => (field.fieldLabel == "Store Name")) ? job.customField.find(field => (field.fieldLabel == "Store Name")).valueLabel : ""
  if (job.customField.find(field => (field.fieldLabel == "Company Segment")) && job.customField.find(field => (field.fieldLabel == "Company Segment")).valueLabel == "Home Office") {
    job.rStoreName = ""
  }
  if (job.customField.find(field => (field.fieldLabel == "Company Segment")) && job.customField.find(field => (field.fieldLabel == "Company Segment")).valueLabel == "Distribution") {
    job.rStoreName = ""
  }
  job.rDepartment = job.department.label ? job.department.label : "Not Specified"
  job.rLocation = `${job.location. city}${job.location.region ? `, ${job.location.region}` : "Not Specified"}`
  job.rType = job.typeOfEmployment.label
  job.rExperience = job.experienceLevel.label
  job.rCompanySegment = job.customField.find(field => (field.fieldLabel == "Company Segment")) ? job.customField.find(field => (field.fieldLabel == "Company Segment")).valueLabel : ""
  if (job.customField.find(field => (field.fieldLabel == "Company Segment")) && job.customField.find(field => (field.fieldLabel == "Company Segment")).valueLabel == "Stores") {
    job.rCompanySegment = "Retail"
  }
  job.rTitle = job.name

  if (req && !process.browser) return { job: json, ...i18n.getInitialProps(req, ['common'])};

  return { job: json };
};

export default ExtendedJob;
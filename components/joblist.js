import React from 'react'
import Link from 'next/link'
import ReactPaginate from 'react-paginate'
import FontAwesome from 'react-fontawesome'
import Scroll from 'react-scroll'
import i18n from '../i18n'
import { translate } from 'react-i18next';
import settings from '../settings.js'
const reactStringReplace = require('react-string-replace')

const scroll = Scroll.animateScroll

class JobList extends React.Component {

  handlePageClick = (data) => {
    const selected = data.selected
    this.props.handlePageClick(selected)
  }

  render() {
    const currentResults = this.props.jobs
    const totalResults = this.props.totalResults
    const t = this.props.t
    return (
      <div style={{paddingBottom: '40px', paddingTop: '40px'}}>
        <h3 id='jobs-list' style={{textAlign: 'center', color: '#626262'}}>{t('common:results')} ({totalResults})</h3>
        { currentResults.length > 0 ? <ul className="jobs-list">
          {currentResults.map((job) => {
            if (this.props.search.length > 0) {
              const jobName = reactStringReplace(job.rTitle, this.props.search, (match, i) => <span key={i} className='hl'>{match}</span>)
              const jobLocation = reactStringReplace(job.rLocation, this.props.search, (match, i) => <span key={i} className='hl'>{match}</span>)
              const jobExperience = reactStringReplace(job.rExperience, this.props.search, (match, i) => <span key={i} className='hl'>{match}</span>)
              const jobDepartment = reactStringReplace(t(`common:departments.${job.rDepartment}`), this.props.search, (match, i) => <span key={i} className='hl'>{match}</span>)
              const jobType = reactStringReplace(t(`common:types.${job.rType}`), this.props.search, (match, i) => <span key={i} className='hl'>{match}</span>)
              const jobStoreName = reactStringReplace(job.rStoreName, this.props.search, (match, i) => <span key={i} className='hl'>{match}</span>)
              return ( <li key={job.id}>
                <div className='job-item'>
                  <div className='job-info'>
                    <div className="job-title-location">
                      <Link href={`/job?id=${job.id}&tile=${encodeURIComponent(job.rTitle)}`} as={`/job/${job.id}/${encodeURIComponent(job.rTitle)}`}>
                        <a className="view-job-link" href={`/job/${job.id}/${encodeURIComponent(job.rTitle)}`}>
                          <h3>{jobName}</h3>
                        </a>
                      </Link>
                      <div className="job-meta">
                        <ul>
                          <li><FontAwesome fixedWidth name='map-marker' style={{fontSize: '16px'}}/>{jobLocation}</li>
                          <li><FontAwesome fixedWidth name='user-circle-o' style={{fontSize: '16px'}}/> {jobDepartment}</li>
                          <li><FontAwesome fixedWidth name='clock-o' style={{fontSize: '16px'}}/> {jobType}</li>
                          {job.rStoreName.length > 0 ? <li><FontAwesome fixedWidth name='shopping-cart' style={{fontSize: '16px'}}/> {jobStoreName}</li> : null}
                          <li className="industry">{t(`common:segments.${job.rCompanySegment}`)}</li>
                        </ul>
                      </div>
                    </div>
                    <div className="view-job">
                      <Link href={`/job?id=${job.id}&tile=${encodeURIComponent(job.rTitle)}`} as={`/job/${job.id}/${encodeURIComponent(job.rTitle)}`}>
                        <a className="view-job-link" href={`/job/${job.id}/${encodeURIComponent(job.rTitle)}`}>
                          {t('common:viewJob')}
                        </a>
                      </Link>
                    </div>
                  </div>
                </div>
              </li>)
            } else {
              return ( <li key={job.id}>
                <div className='job-item'>
                  <div className='job-info'>
                    <div className="job-title-location">
                      <Link href={`/job?id=${job.id}&tile=${encodeURIComponent(job.rTitle)}`} as={`/job/${job.id}/${encodeURIComponent(job.rTitle)}`}>
                        <a className="view-job-link" href={`/job/${job.id}/${encodeURIComponent(job.rTitle)}`}>
                          <h3>{job.rTitle}</h3>
                        </a>
                      </Link>
                      <div className="job-meta">
                        <ul>
                          <li><FontAwesome fixedWidth name='map-marker' style={{fontSize: '16px'}}/>{job.rLocation}</li>
                          <li><FontAwesome fixedWidth name='user-circle-o' style={{fontSize: '16px'}}/> {t(`common:departments.${job.rDepartment}`)}</li>
                          <li><FontAwesome fixedWidth name='clock-o' style={{fontSize: '16px'}}/> {t(`common:types.${job.rType}`)}</li>
                          {job.rStoreName.length > 0 ? <li><FontAwesome fixedWidth name='shopping-cart' style={{fontSize: '16px'}}/> {job.rStoreName}</li> : null}
                          <li className="industry">{t(`common:segments.${job.rCompanySegment}`)}</li>
                        </ul>
                      </div>
                    </div>
                    <div className="view-job">
                      <Link href={`/job?id=${job.id}&tile=${encodeURIComponent(job.rTitle)}`} as={`/job/${job.id}/${encodeURIComponent(job.rTitle)}`}>
                        <a className="view-job-link" href={`/job/${job.id}/${encodeURIComponent(job.rTitle)}`}>
                          {t('common:viewJob')}
                        </a>
                      </Link>
                    </div>
                  </div>
                </div>
              </li>
              )
            }
          })}
        </ul> : <p>No results</p>}
        <ReactPaginate previousLabel={<FontAwesome name='chevron-left' />}
          nextLabel={<FontAwesome name='chevron-right' />}
          breakLabel={<a href="" onClick={(e) => e.preventDefault()}>...</a>}
          breakClassName={"break-me"}
          forcePage={Number(this.props.page)}
          pageCount={Math.ceil(totalResults/10)}
          marginPagesDisplayed={2}
          pageRangeDisplayed={5}
          onPageChange={this.handlePageClick}
          containerClassName={"pagination"}
          subContainerClassName={"pages pagination"}
          activeClassName={"active"} />
        <style jsx>{`
          
          h3#jobs-list {
            font-family: "Gibson SemiBold",Helvetica,Arial,Verdana,sans-serif;
            letter-spacing: 1.5px;
          }
          .hl {
            background-color: ${settings.hexColor};
            color: #fff;
          }
          .total-results {
            display: block;
            float: left;
            padding-top: 5px;
          }
          .jobs-list {
            display: block;
            margin: 0;
            padding: 0;
            width: 100%;
            min-height: 500px;
          }
          .jobs-list li {
            list-style: none;
          }
          .job-item {
            position: relative;
            padding: 15px;
            padding-bottom: 10px;
            margin-bottom: 20px;
            background-color: #fff;
            transition: all 250ms ease 0s;
            -webkit-transition: all 250ms ease 0s;
            border: 1px solid #3d3d3d;
          }
          .job-item .view-job a { 
            font-family: "Gibson SemiBold",Helvetica,Arial,Verdana,sans-serif;
            letter-spacing: 2.3px;
            text-decoration: none;
            color: #fff;
            background-color: #000;
            text-transform: uppercase;
            font-size: 13px;
            height: 40px;
            width: 130px;
            display: flex;
            position: relative;
            border: 2px solid #000;
            font-weight: 600;
            align-items: center;
            justify-content: center;
            -webkit-transition:0.5s;
            transition: 0.5s;
          }
          .job-item .view-job a:hover {
            border: 2px solid rgba(255,255,255,0);
            background-color: transparent;
            color: #000;
          }
          .job-item .view-job a::before {
            border-bottom: 3px solid #000;
            border-left: 0;
            -webkit-transform-origin: 0% 100%;
          }
          .job-item .view-job a::after {
            border-top: 0;
            border-right: 0;
            -webkit-transform-origin: 50% 50%;
          }
          .job-item .view-job a:hover::after, .job-item .view-job a:hover::before {
            -webkit-transform: scale(1);
          }
          .job-item .view-job a::before, .job-item .view-job a::after {
            width: 100%;
            height:100%;
            z-index: 3;
            content:'';
            position: absolute;
            top:0;
            left:0;
            box-sizing: border-box;
            -webkit-transform: scale(0);
            transition: 0.5s;
          }

          .job-item .view-job {
            display: flex;
            align-items: center;
            justify-content: center;
            width: 130px;
            margin-left: 30px;
          }
          .job-title {
            padding: 15px;
          }
          .job-title a {
            color: #000;
            text-decoration: none;
          }
          .job-button {
            position: absolute;
            top: 15px;
            right: 15px;
          }
          .job-button a {
            color: #8C8C8C;
            padding: 5px 30px;
            border: 3px solid ${settings.hexColor};
            font-weight: 500;
            transition: all 0.3s cubic-bezier(.25,.8,.25,1);
            -webkit-transition: all 0.3s cubic-bezier(.25,.8,.25,1);
          }
          .job-button a:hover {
            color: #fff;
            background-color: ${settings.hexColor};
          }
          .job-title-location a {
            text-decoration: none;
            color: #000;
          }
          .job-title-location a:hover {
            text-decoration: underline;
          }
          .job-title-location h3 {
            font-family: "Gibson Regular",Helvetica,Arial,Verdana,sans-serif;
            letter-spacing: 1.5px;
            margin: 0;
            margin-bottom: 10px;
            text-transform: uppercase;
            font-size: 15px;
            letter-spacing: -0.4;
            line-height: 22px;
            color: #3d3d3d;
            transition: all 250ms ease 0s;
          }
          .job-title-location span.country {
            text-transform: uppercase;
          }
          .job-title-location location-span {
            font-family: 'Fjord One', serif;
            font-size: 16px;
            color: #505050;
          }
          .job-footer {
            background-color: #8C8C8C;
            padding: 5px 15px;
          }
          .job-info {
            display: -webkit-box;
            display: -moz-box;
            display: -ms-flexbox;
            display: -moz-flex;
            display: -webkit-flex;
            display: flex;
            -webkit-flex-wrap: wrap;
            flex-wrap: wrap;
            justify-content: space-between;
          }
          .job-info .job-meta {
            font-size: 12px;
            font-family: "Gibson Light",Helvetica,Arial,Verdana,sans-serif;
            letter-spacing: 1.5px;
            color: #747275;
          }
          .job-info .job-meta ul li.industry {
            font-size: 12px;
            text-transform: uppercase;
            color: #fff;
            background-color: #003389;
            border: 1px solid #003389;
          }
          .job-footer .job-footer-inner {
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
          .job-footer .job-footer-item {
            color: #fff;
            font-size: 15px;
            width: 50%;
            text-align: center;
            text-align: right
          }
          .job-footer .job-footer-item:first-child {
            text-align: left;
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
            border: 1px solid #747275;
            margin-left: 5px;
            margin-right: 5px;
            margin-bottom: 10px;
          }
          @media screen and (max-width: 799px) {
            .job-info {
              flex-direction: column;
            }
            .job-item .view-job {
              margin: 0;
              width: 100%;
            }
            .job-item .view-job a {
              width: 100%;
            }
            .job-info .job-title-location {
              margin-bottom: 20px;
            }
            .job-info .job-title-location, .job-info .job-meta {
              width: 100%;
            }
          }
          @media screen and (max-width: 800px) {
            .job-button {
              position: relative;
              padding-left: 15px;
            }
            .job-title {
              padding-bottom: 15px;
              text-align: center;
            }
            .job-footer .job-footer-item, .job-footer .job-footer-item:first-child {
              text-align: center;
              width: 100%;
            }
            .filter-div .filter-item {
              width: 100%;
              padding-bottom: 10px;
            }
            .filter-div .filter-item:last-child .filter-inner, .filter-div .filter-item:first-child .filter-inner {
              padding: 0;
            }
            .job-sort {
              float: none;
              width: 100%;
            }
          }
          @media screen and (max-width: 1200px) {
            .filter-div {
              margin-left: 0;
              margin-right: 0;
            }
          }
        `}</style>
      </div>
    );
  }

}

JobList.propTypes = {
  jobs: React.PropTypes.array,
  perPage: React.PropTypes.number,
}

const ExtendedJobList = translate('common', { i18n })(JobList)

// Passing down initial translations
// use req.i18n instance on serverside to avoid overlapping requests set the language wrong
ExtendedJobList.getInitialProps = async ({ req }) => {
  if (req && !process.browser) return i18n.getInitialProps(req, ['common'])
  return {}
}

export default ExtendedJobList

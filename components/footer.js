import React from 'react'
import Link from 'next/link'
import FontAwesome from 'react-fontawesome'
import settings from '../settings.js'

const getYear = () => {
  const date = new Date()
  const year = date.getFullYear()
  return year
}

export default ({ t }) => (
  <footer>
    <div className='footer-content'>
      <div className="footer-blocks">
        <div className="footer-menu">
          <h4>{t('common:footer1.header')}</h4>
          <ul>
            <li><a href={t('common:footer1.link1')}>{t('common:footer1.text1')}</a></li>
            <li><a href={t('common:footer1.link2')}>{t('common:footer1.text2')}</a></li>
            <li><Link href={t('common:footer1.link3')}><a href={t('common:footer1.link3')}>{t('common:footer1.text3')}</a></Link></li>
            <li><Link href={t('common:footer1.link7')}><a href={t('common:footer1.link7')}>{t('common:footer1.text7')}</a></Link></li>
            <li><Link href={t('common:footer1.link4')}><a href={t('common:footer1.link4')}>{t('common:footer1.text4')}</a></Link></li>
            <li><Link href={t('common:footer1.link5')}><a href={t('common:footer1.link5')}>{t('common:footer1.text5')}</a></Link></li>
            <li><Link href={t('common:footer1.link6')}><a href={t('common:footer1.link6')}>{t('common:footer1.text6')}</a></Link></li>
          </ul>
        </div>
        <div className="footer-menu">
          <h4>{t('common:footer2.header')}</h4>
          <ul>
            <li><a href={t('common:footer2.link1')}>{t('common:footer2.text1')}</a></li>
            <li><a href={t('common:footer2.link2')}>{t('common:footer2.text2')}</a></li>
            <li><a href={t('common:footer2.link3')}>{t('common:footer2.text3')}</a></li>
            <li><a href={t('common:footer2.link4')}>{t('common:footer2.text4')}</a></li>
            <li><a href={t('common:footer2.link5')}>{t('common:footer2.text5')}</a></li>
            <li><a href={t('common:footer2.link6')}>{t('common:footer2.text6')}</a></li>
          </ul>
        </div>
        <div className="footer-social">
          <h4>{t('common:footer3.header')}</h4>
          <ul>
            { settings.twitterLink.length > 0 ? <li><a href={settings.twitterLink} target="_blank"><FontAwesome fixedWidth name='twitter' style={{fontSize: '20px'}}/></a></li> : null }
            { settings.facebookLink.length > 0 ? <li><a href={settings.facebookLink} target="_blank"><FontAwesome fixedWidth name='facebook' style={{fontSize: '20px'}}/></a></li> : null }
            { settings.linkedInLink.length > 0 ? <li><a href={settings.linkedInLink} target="_blank"><FontAwesome fixedWidth name='linkedin' style={{fontSize: '20px'}}/></a></li> : null }
            { settings.instagramLink.length > 0 ? <li><a href={settings.instagramLink} target="_blank"><FontAwesome fixedWidth name='instagram' style={{fontSize: '20px'}}/></a></li> : null }
            { settings.youtubeLink.length > 0 ? <li><a href={settings.youtubeLink} target="_blank"><FontAwesome fixedWidth name='youtube' style={{fontSize: '20px'}}/></a></li> : null }
            { settings.pinterestLink.length > 0 ? <li><a href={settings.pinterestLink} target="_blank"><FontAwesome fixedWidth name='pinterest' style={{fontSize: '20px'}}/></a></li> : null }
          </ul>
        </div>
      </div>
      <div className='footer-copy'>
        &#169;{getYear()} {t('common:copyRight')}
      </div>
    </div>
    <style jsx>{`
      footer {
        background-color: #000;
        color: #fff;
      }
      .footer-content {
        max-width: 1000px;
        margin: 0 auto;
        padding: 30px 15px;
      }
      .footer-blocks {
        display: flex;
        justify-content: space-between;
      }
      .footer-menu, .footer-social {
        margin-bottom: 25px;
      }
      .footer-menu ul {
        list-style-type: none;
        margin: 0;
        padding: 0;
      }
      .footer-menu ul li a {
        color: #fff;
        text-decoration: none;
        letter-spacing: 1.3px;
        font-family: "Gibson Regular",Helvetica,Arial,Verdana,sans-serif;
        font-size: 11px;
        line-height: 16px;
      }
      .footer-menu ul li a:hover {
        text-decoration: underline;
      }
      .footer-blocks h4 {
        font-size: 13px;
        font-family: "Gibson SemiBold",Helvetica,Arial,Verdana,sans-serif;
        letter-spacing: 2.34px;
        line-height: 20px;
        text-transform: uppercase;
      }
      .footer-content .home-link {
        text-decoration: none;
        color: #fff;
      }
      .footer-content .brand-address {
        font-size: 10px;
      }
      .footer-content .footer-copy {
        font-family: "Gibson Regular",Helvetica,Arial,Verdana,sans-serif;
        font-size: 10px;
        letter-spacing: 2px;
      }
      .footer-content .footer-nav ul, .footer-content .footer-social ul {
        list-style: none;
        margin: 0;
        padding: 0;
        padding-top: 5px;
        padding-bottom: 5px;
      }
      .footer-content .footer-nav li, .footer-content .footer-social li {
        display: inline-block;
        padding-right: 10px;
        text-transform: uppercase;
      }
      .footer-content .footer-nav li a, .footer-content .footer-social li a {
        color: #fff;
        text-transform: uppercase;
        text-decoration: none;
        -webkit-transition: all 0.3s;
        -moz-transition: all 0.3s;
        -o-transition: all 0.3s;
        transition: all 0.3s;
        font-size: 12px;
      }
      .footer-content .footer-nav li a:hover, .footer-content .footer-social li a:hover {
        color: ${settings.hexColor};
      }
      @media screen and (max-width: 720px) {
        .footer-blocks { 
          flex-direction: column;
        }
        .footer-content .footer-nav ul li {
          display: block;
        }
      }
    `}</style>
  </footer>
)

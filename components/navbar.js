import Link from 'next/link'
import FontAwesome from 'react-fontawesome'
import i18n from '../i18n'
import settings from '../settings.js'

const closeNav = (e) => {
  e.preventDefault()
  document.getElementById("navigation").style.height = "0%";
}

const openNav = (e) => {
  e.preventDefault()
  document.getElementById("navigation").style.height = "100%";
}

const closeNavOnClick = (e) => {
  document.getElementById("navigation").style.height = "0%";
}

const changeLang = (e) => {
  e.preventDefault()
  if (i18n.language == "fr") {
    i18n.changeLanguage('en')
  } else {
    i18n.changeLanguage('fr')
  }
}

export default ({ t }) => (
  <header>
    <div id='navigation' className='overlay'>
      {/* Button to close the overlay navigation */}
      <a href='#' onClick={closeNav} className='close-button'>&times;</a>
      {/* Overlay Content */}
      <nav className='overlay-content'>
        <li><a href={t('common:header.link1')}>{t('common:header.text1')}</a></li>
        <li><a href={t('common:header.link2')}>{t('common:header.text2')}</a></li>
        <li onClick={closeNavOnClick}><Link href={t('common:header.link3')}><a href={t('common:header.link3')}>{t('common:header.text3')}</a></Link></li>
        <li onClick={closeNavOnClick}><Link href={t('common:header.link7')}><a href={t('common:header.link7')}>{t('common:header.text7')}</a></Link></li>
        <li onClick={closeNavOnClick}><Link href={t('common:header.link4')}><a href={t('common:header.link4')}>{t('common:header.text4')}</a></Link></li>
        <li onClick={closeNavOnClick}><Link href={t('common:header.link5')}><a href={t('common:header.link5')}>{t('common:header.text5')}</a></Link></li>
        <li onClick={closeNavOnClick}><Link href={t('common:header.link6')}><a href={t('common:header.link6')}>{t('common:header.text6')}</a></Link></li>
      </nav>
    </div>
    <div className='top-bar'>
      <div className='top-bar-inner'>
        <Link href="/"><a href='/' className='home-link'><img src={settings.logo} alt='Indigo logo' className='brand-img'/></a></Link>
        <a href='#' className='lang-link' onClick={(e) => { changeLang(e) }}>{t('common:languageSelector')}</a>
        <ul className="desktop-nav">
          <li><a href={t('common:header.link1')}>{t('common:header.text1')}</a></li>
          <li><a href={t('common:header.link2')}>{t('common:header.text2')}</a></li>
          <div className="dropdown">
            <li className="sub-menu-link"><a href="#" onClick={(e) => (e.preventDefault())}>{t('common:header.jobs')}</a></li>
            <ul className="sub-menu">
              <li><Link href={t('common:header.link3')}><a href={t('common:header.link3')}>{t('common:header.text3')}</a></Link></li>
              <li><Link href={t('common:header.link7')}><a href={t('common:header.link7')}>{t('common:header.text7')}</a></Link></li>
              <li><Link href={t('common:header.link4')}><a href={t('common:header.link4')}>{t('common:header.text4')}</a></Link></li>
              <li><Link href={t('common:header.link5')}><a href={t('common:header.link5')}>{t('common:header.text5')}</a></Link></li>
              <li><Link href={t('common:header.link6')}><a href={t('common:header.link6')}>{t('common:header.text6')}</a></Link></li>
            </ul>
          </div>
        </ul>
        <a href='#' className='open-button' onClick={openNav}>
          <FontAwesome name='bars' style={{fontSize: '25px'}}/>
        </a>
      </div>
    </div>
    <style jsx>{`
      header {
        background-color: #fff;
        border-bottom: 1px solid #000;
      }
      .top-bar {
        background-color: #fff;
        max-width: 1000px;
        margin: 0 auto;
        padding: 0px 15px;
      }
      .top-bar .top-bar-inner {
        padding: 15px 0px;
        display: flex;
        align-items: center;
        position: relative;
        justify-content: space-between;
      }
      .desktop-nav a, .top-bar a {
        color: #000;
        text-decoration: none;
      }

      .desktop-nav a, .overlay a {
        font-family:"Gibson SemiBold";
        letter-spacing: 2.18px;
        text-transform: uppercase;
      }

      .desktop-nav a {
        display: block;
        position: relative;
      }

      .desktop-nav .dropdown {
        display: inline-block;
      }

      .desktop-nav .dropdown:hover .sub-menu {
        display: block;
      }

      .sub-menu-link:hover .desktop-nav .sub-menu {
        display: block;
      }

      .desktop-nav .sub-menu {
        display: none;
        list-style-type: none;
        margin: 0;
        padding: 15px;
        position: absolute;
        z-index: 99;
        right: 0;
        background: #fff;
      }

      .desktop-nav .sub-menu li {
        display: block;
      }

      .desktop-nav a::before {
        content: '';
        height: 2px;
        background-color: #000;
        width: 0;
        display: block;
        position: absolute;
        bottom: -5px;
        transition: width 0.3s;
      }

      .desktop-nav a:hover::before {
        width: 100%;
      }

      .lang-link {
        position: absolute;
        top: 10px;
        right: 15px;
        letter-spacing: 1.5px;
        font-size: 12px;
      }
      .top-bar a.lang-link:hover {
        text-decoration: underline;
      }
      .top-bar .open-button {
        display: none;
      }
      .desktop-nav {
        display: block;
      }
      .desktop-nav a {
        font-weight: 600;
        font-size: 14px;
      }
      .overlay {
        height: 0%;
        width: 100%;
        position: fixed;
        z-index: 99;
        top: 0;
        left: 0;
        background-color: rgba(0,0,0, 0.95);
        overflow-y: hidden;
        -webkit-transition: all 0.5s;
        -moz-transition: all 0.5s;
        -o-transition: all 0.5s;
        transition: all 0.5s;
        display: flex;
        align-items: center;
        justify-content: center;
      }
      .overlay-content {
        /* Position the content inside the overlay */
        position: relative;
        list-style: none;
        text-align: center; /* Centered text/links */
      }
      .overlay a {
        /* The navigation links inside the overlay */
        padding: 15px;
        text-decoration: none;
        text-transform: uppercase;
        font-size: 25px;
        color: #fff;
        display: block; /* Display block instead of inline */
        -webkit-transition: all 0.3s;
        -moz-transition: all 0.3s;
        -o-transition: all 0.3s;
        transition: all 0.3s;
      }

      .overlay a:hover, .overlay a:focus {
        /* When you mouse over the navigation links, change their color */
        color: ${settings.hexColor};
      }

      .overlay .close-button {
        /* Position the close button (top right corner) */
        position: absolute;
        top: -10px;
        left: 0px;
        font-size: 40px;
      }
      .desktop-nav {
        margin: 0;
        margin-top: 15px;
        padding: 0;
        list-style-type: none;
      }
      .desktop-nav li {
        display: inline-block;
        padding: 15px;
      }
      @media screen and (max-width: 800px) {
        .lang-link {
          position: relative;
          top: 0;
          right: 0;
          font-size: 14px;
        }
        .top-bar a { 
          flex-basis: 100%;
        }
        .home-link {
          order: 2;
          text-align: center;
        }
        .lang-link {
          order: 3;
          text-align: right;
        }
        .open-button {
          order: 1;
        }
        .overlay a {
          padding: 10px;
          font-size: 20px;
        }
        .top-bar .open-button {
          display: block;
        }
        .desktop-nav {
          display: none;
        }
      }
      .brand-img {
        max-width: 100%;
        height: 66px;
      }
      @media (max-width: 939px) {
        .brand-img {
          height: 50px;
        }
      }
      @media (max-width: 568px) {
        .brand-img {
          height: 33px;
        }
      }
      @media screen and (max-height: 450px) {
        .overlay {overflow-y: auto;}
        .overlay a {
          padding: 10px;
          text-decoration: none;
          font-size: 20px;
        }
        .overlay .closebtn {
          font-size: 40px;
          top: 15px;
          right: 35px;
        }
      }
    `}</style>
  </header>
)

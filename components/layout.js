import Link from 'next/link'
import Head from 'next/head'
import Navbar from './navbar'
import Footer from './footer'
import NProgress from 'nprogress'
import Router from 'next/router'
import { I18nextProvider, translate } from 'react-i18next'
import i18n from '../i18n'
import settings from '../settings.js'

Router.onRouteChangeStart = (url) => {
  console.log(`Loading: ${url}`)
  NProgress.start()
}
Router.onRouteChangeComplete = () => NProgress.done()
Router.onRouteChangeError = () => NProgress.done()

const Layout = ({ t, initialI18nStore, children, title = 'Default Title', description = "Default Description" }) => (
  <div>
    <Head>
      <title>{ title }</title>
      <meta name='description' content={description} />
      <meta charSet='utf-8' />
      <meta httpEquiv="X-UA-Compatible" content="IE=edge"/>
      <meta name='viewport' content='initial-scale=1.0, width=device-width' />
      {/* Facebook Stuff */}
      {/* <meta property="og:url" content="http://eventmobi.ruutly.com/" />
      <meta property="og:title" content={title} />
      <meta property="og:image" content={settings.social} />
      <meta property="og:image:width" content="1200" />
      <meta property="og:image:height" content="630" />
      <meta property="og:site_name" content="eventmobi" />
      <meta property="og:description" content={description} /> */}
      {/* Twitter Stuff */}
      {/* <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:title" content={title} />
      <meta name="twitter:site" content="@eventmobi" />
  		<meta name="twitter:creator" content="@eventmobi" />
      <meta name="twitter:description" content={description} />
      <meta name="twitter:image" content={settings.social} />
      <meta name="twitter:image:width" content="840" />
  		<meta name="twitter:image:height" content="450" />
      <link rel="shortcut icon" href="/static/favicon.ico" /> */}
      
      {/* <!-- For Chrome for Android: --> */}
      <link rel="icon" sizes="192x192" href="https://www.chapters.indigo.ca/ui/4.17.5/Images/favicon_192x192.png" />

      {/* <!-- For iPhone 6 Plus with @3x display: --> */}
      <link rel="apple-touch-icon-precomposed" sizes="180x180" href="https://www.chapters.indigo.ca/ui/4.17.5/Images/favicon_180x180.png" />

      {/* <!-- For iPad with high-resolution Retina display running iOS ≥ 7: --> */}
      <link rel="apple-touch-icon-precomposed" sizes="152x152" href="https://www.chapters.indigo.ca/ui/4.17.5/Images/favicon_152x152.png" />

      {/* <!-- For iPad with high-resolution Retina display running iOS ≤ 6: --> */}
      <link rel="apple-touch-icon-precomposed" sizes="144x144" href="https://www.chapters.indigo.ca/ui/4.17.5/Images/favicon_144x144.png" />

      {/* <!-- For iPhone with high-resolution Retina display running iOS ≥ 7: --> */}
      <link rel="apple-touch-icon-precomposed" sizes="120x120" href="https://www.chapters.indigo.ca/ui/4.17.5/Images/favicon_120x120.png" />

      {/* <!-- For iPhone with high-resolution Retina display running iOS ≤ 6: --> */}
      <link rel="apple-touch-icon-precomposed" sizes="114x114" href="https://www.chapters.indigo.ca/ui/4.17.5/Images/favicon_114x114.png" />

      {/* <!-- For the iPad mini and the first- and second-generation iPad (@1x display) on iOS ≥ 7 --> */}
      <link rel="apple-touch-icon-precomposed" sizes="76x76" href="https://www.chapters.indigo.ca/ui/4.17.5/Images/favicon_76x76.png" />

      {/* <!-- For the iPad mini and the first- and second-generation iPad (@1x display) iOS ≤ 6: --> */}
      <link rel="apple-touch-icon-precomposed" sizes="72x72" href="https://www.chapters.indigo.ca/ui/4.17.5/Images/favicon_72x72.png" />

      {/* <!-- For non-Retina iPhone, iPod Touch, and Android 2.1+ devices: --> */}
      <link rel="apple-touch-icon-precomposed" sizes="57x57" href="https://www.chapters.indigo.ca/ui/4.17.5/Images/favicon_57x57.png" />

      <link rel="shortcut icon" type="image/x-icon" href="https://www.chapters.indigo.ca/ui/4.17.5/Images/favicon_16x16.png" />

      <link rel="shortcut icon" type="image/x-icon" href="https://www.chapters.indigo.ca/ui/4.17.5/Images/favicon.ico" />

      {/* Import CSS */}
      <link rel='stylesheet' type='text/css' href='/static/styles.css' />
      <link rel="stylesheet" href='https://unpkg.com/react-select/dist/react-select.css'/>

      {/* Font Awesome Styles */}
      <script src="https://use.fontawesome.com/5a61b089d7.js"></script>
      <script type="text/javascript" src="https://www.ruutly.com/js/if.js" />
    </Head>
    <header>
      <Navbar t={ t } />
    </header>
    <div className='container'>
      { children }
    </div>
    <Footer t={ t } />
  </div>
)


const ExtendedLayout = translate('common', { i18n })(Layout);

// Passing down initial translations
// use req.i18n instance on serverside to avoid overlapping requests set the language wrong
ExtendedLayout.getInitialProps = async ({ req }) => {
  if (req && !process.browser) return i18n.getInitialProps(req, 'common');
  return {};
};

export default ExtendedLayout;

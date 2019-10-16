'use strict';

var i18n = require('i18next');
var XHR = require('i18next-xhr-backend');
var LanguageDetector = require('i18next-browser-languagedetector');

var options = {
  fallbackLng: 'en',
  load: 'languageOnly', // we only provide en, de -> no region specific locals like en-US, de-DE

  // have a common namespace used around the full app
  ns: ['common'],
  defaultNS: 'common',

  // debug: true,
  saveMissing: true,

  interpolation: {
    escapeValue: false, // not needed for react!!
    formatSeparator: ',',
    format: function format(value, _format, lng) {
      if (_format === 'uppercase') return value.toUpperCase();
      return value;
    }
  }
};

// for browser use xhr backend to load translations and browser lng detector
if (process.browser) {
  i18n.use(XHR)
  // .use(Cache)
  .use(LanguageDetector);
}

// initialize if not already initialized
if (!i18n.isInitialized) i18n.init(options);

// a simple helper to getInitialProps passed on loaded i18n data
i18n.getInitialProps = function (req, namespaces) {
  if (!namespaces) namespaces = i18n.options.defaultNS;
  if (typeof namespaces === 'string') namespaces = [namespaces];

  req.i18n.toJSON = function () {
    return null;
  }; // do not serialize i18next instance and send to client

  var initialI18nStore = {};
  req.i18n.languages.forEach(function (l) {
    initialI18nStore[l] = {};
    namespaces.forEach(function (ns) {
      initialI18nStore[l][ns] = req.i18n.services.resourceStore.data[l][ns] || {};
    });
  });

  return {
    i18n: req.i18n, // use the instance on req - fixed language on request (avoid issues in race conditions with lngs of different users)
    initialI18nStore: initialI18nStore,
    initialLanguage: req.i18n.language
  };
};

module.exports = i18n;
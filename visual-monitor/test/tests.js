'use strict';

var shoovWebdrivercss = require('shoov-webdrivercss');

// This can be executed by passing the environment argument like this:
// PROVIDER_PREFIX=browserstack SELECTED_CAPS=chrome mocha
// PROVIDER_PREFIX=browserstack SELECTED_CAPS=ie11 mocha
// PROVIDER_PREFIX=browserstack SELECTED_CAPS=iphone5 mocha

var capsConfig = {
  'chrome': {
    'browser' : 'Chrome',
    'browser_version' : '52.0',
    'os' : 'OS X',
    'os_version' : 'Yosemite',
    'resolution' : '1600x1200'
  },
  'ie11': {
    'browser' : 'IE',
    'browser_version' : '11.0',
    'os' : 'Windows',
    'os_version' : '7',
    'resolution' : '1680x1050'
  },
  'iphone5': {
    'browser' : 'Chrome',
    'browser_version' : '42.0',
    'os' : 'OS X',
    'os_version' : 'Yosemite',
    'chromeOptions': {
      'mobileEmulation': {
        'deviceName': 'Apple iPhone 5'
      }
    }
  }
};

var selectedCaps = process.env.SELECTED_CAPS || undefined;
var caps = selectedCaps ? capsConfig[selectedCaps] : undefined;

var providerPrefix = process.env.PROVIDER_PREFIX ? process.env.PROVIDER_PREFIX + '-' : '';
var testName = selectedCaps ? providerPrefix + selectedCaps : providerPrefix + 'default';

var baseUrl = process.env.BASE_URL ? process.env.BASE_URL : 'http://master-nm3mijlfxrvx4.eu.platform.sh';

var resultsCallback = process.env.DEBUG ? console.log : shoovWebdrivercss.processResults;

describe('Visual monitor testing', function() {

  this.timeout(99999999);
  var client = {};

  before(function(done){
    client = shoovWebdrivercss.before(done, caps);
  });

  after(function(done) {
    shoovWebdrivercss.after(done);
  });

  it('should show the home page',function(done) {
    client
      .url(baseUrl)
      .webdrivercss(testName + '.homepage', {
        name: '1',
        exclude: [],
        remove:
          [
            '.circles .circles__item__number',
            '.clients__container .clients__item',
            '.footer-links__list',
            '.profession__info__numbers',
            '.smart-agent-popup',
            '.footer-contact__facebook'
          ],
        hide: [],
        screenWidth: selectedCaps == 'chrome' ? [1200] : undefined,
      }, resultsCallback)
      .call(done);
  });

  it('should show the about page',function(done) {
    client
      .url(baseUrl + "/about-us")
      .webdrivercss(testName + '.about-us', {
        name: '1',
        exclude: [],
        remove:
          [
            '.fb-page',
            '.footer-links__list',
          ],
        hide: [],
        screenWidth: selectedCaps == 'chrome' ? [1200] : undefined,
      }, resultsCallback)
      .call(done);
  });

  it('should show the about officials page',function(done) {
    client
      .url(baseUrl + "/about-officials")
      .webdrivercss(testName + '.about-officials', {
        name: '1',
        exclude:
          [
            '.person-box__info__img',
            '.person-box__content',
          ],
        remove:
          [
            '.fb-page',
            '.footer-links__list',
          ],
        hide: [],
        screenWidth: selectedCaps == 'chrome' ? [1200] : undefined,
      }, resultsCallback)
      .call(done);
  });

  it('should show the career-at-danel page',function(done) {
    client
      .url(baseUrl + "/career-at-danel")
      .webdrivercss(testName + '.career-at-danel', {
        name: '1',
        exclude: [],
        remove:
          [
            '.fb-page',
            '.footer-links__list',
          ],
        hide: [],
        screenWidth: selectedCaps == 'chrome' ? [1200] : undefined,
      }, resultsCallback)
      .call(done);
  });

  it('should show the branches page',function(done) {
    client
      .url(baseUrl + "/branches")
      .webdrivercss(testName + '.branches', {
        name: '1',
        exclude: [],
        remove:
          [
            '.branches__content__map',
            '.fb-page',
            '.footer-links__list',
          ],
        hide: [],
        screenWidth: selectedCaps == 'chrome' ? [1200] : undefined,
      }, resultsCallback)
      .call(done);
  });

  it('should show the register page',function(done) {
    client
      .url(baseUrl + "/user/register")
      .webdrivercss(testName + '.register', {
        name: '1',
        exclude: [],
        remove:
          [
            '.branches__content__map',
            '.fb-page',
            '.footer-links__list',
          ],
        hide: [],
        screenWidth: selectedCaps == 'chrome' ? [1200] : undefined,
      }, resultsCallback)
      .call(done);
  });

  it('should show the info-center page',function(done) {
    client
      .url(baseUrl + "/info-center")
      .webdrivercss(testName + '.info-center', {
        name: '1',
        exclude: [],
        remove:
          [
            '.blog-post__content__img',
            '.fb-page',
            '.footer-links__list',
          ],
        hide: [],
        screenWidth: selectedCaps == 'chrome' ? [1200] : undefined,
      }, resultsCallback)
      .call(done);
  });

  it('should show the contact us page',function(done) {
    client
      .url(baseUrl + "/contact-us")
      .webdrivercss(testName + '.contact-us', {
        name: '1',
        exclude: [],
        remove:
          [
            '.blog-post__content__img',
            '.fb-page',
            '.footer-links__list',
          ],
        hide: [],
        screenWidth: selectedCaps == 'chrome' ? [1200] : undefined,
      }, resultsCallback)
      .call(done);
  });

  it('should show the employers page',function(done) {
    client
      .url(baseUrl + "/employers")
      .webdrivercss(testName + '.employers', {
        name: '1',
        exclude: [],
        remove:
          [
            '.fb-page',
            '.footer-links__list',
          ],
        hide: [],
        screenWidth: selectedCaps == 'chrome' ? [1200] : undefined,
      }, resultsCallback)
      .call(done);
  });

  it('should show the request new password page',function(done) {
    client
      .url(baseUrl + "/user/password")
      .webdrivercss(testName + '.password', {
        name: '1',
        exclude: [],
        remove:
          [
            '.fb-page',
            '.footer-links__list',
          ],
        hide: [],
        screenWidth: selectedCaps == 'chrome' ? [1200] : undefined,
      }, resultsCallback)
      .call(done);
  });

  it('should show the Hadera branch page',function(done) {
    client
      .url(baseUrl + "/node/64")
      .webdrivercss(testName + '.Hadera-branch', {
        name: '1',
        exclude:
          [
            '.branch__content__map',
          ],
        remove:
          [
            '.fb-page',
            '.footer-links__list',
          ],
        hide: [],
        screenWidth: selectedCaps == 'chrome' ? [1200] : undefined,
      }, resultsCallback)
      .call(done);
  });

  it('should show the professions page',function(done) {
    client
      .url(baseUrl + "/professions")
      .webdrivercss(testName + '.professions', {
        name: '1',
        exclude:
          [
            '.profession__info__numbers',
          ],
        remove:
          [
            '.fb-page',
            '.footer-links__list',
          ],
        hide: [],
        screenWidth: selectedCaps == 'chrome' ? [1200] : undefined,
      }, resultsCallback)
      .call(done);
  });

  it('should show the login page',function(done) {
    client
      .url(baseUrl)
      .click('.header__user__login__btn')
      .setValue('#login-email', 'admin@example.com')
      .setValue('input[type=\"password"\]', '1z890LNnz70dli')
      .submitForm('.modal__form__submit-btn--login')
      .pause(15000)
      .webdrivercss(testName + '.login-with-pass', {
        name: '1',
        exclude:
          [
            '.branch__content__map',
            '.header__user__info__name',
          ],
        remove:
          [
            '#admin-menu',
            '.circles .circles__item__number',
            '.clients__container .clients__item',
            '.footer-links__list',
            '.profession__info__numbers',
            '.smart-agent-popup',
            '.footer-contact__facebook',
            '.footer-links__list',
          ],
        hide: [],
        screenWidth: selectedCaps == 'chrome' ? [1200] : undefined,
      }, resultsCallback)
      .call(done);
  });

  it('should show the site notifications page',function(done) {
    client
      .url(baseUrl + '/user/1/site-notifications')
      .webdrivercss(testName + '.site-notifications', {
        name: '1',
        exclude:
          [
            '.branch__content__map',
            '.header__user__info__name',
          ],
        remove:
          [
            '#admin-menu',
            '.footer-links__list',
            '.profession__info__numbers',
            '.footer-contact__facebook',
            '.footer-links__list',
          ],
        hide: [],
        screenWidth: selectedCaps == 'chrome' ? [1200] : undefined,
      }, resultsCallback)
      .call(done);
  });

  it('should show the jobs history page',function(done) {
    client
      .url(baseUrl + '/user/1/jobs-history')
      .webdrivercss(testName + '.jobs-history', {
        name: '1',
        exclude:
          [
            '.branch__content__map',
            '.header__user__info__name',
          ],
        remove:
          [
            '#admin-menu',
            '.footer-links__list',
            '.profession__info__numbers',
            '.footer-contact__facebook',
            '.footer-links__list',
          ],
        hide: [],
        screenWidth: selectedCaps == 'chrome' ? [1200] : undefined,
      }, resultsCallback)
      .call(done);
  });

  it('should show the smart agent form page',function(done) {
    client
      .url(baseUrl + '/smart-agent-form')
      .webdrivercss(testName + '.smart-agent-form', {
        name: '1',
        exclude:
          [
            '.branch__content__map',
            '.header__user__info__name',
          ],
        remove:
          [
            '#admin-menu',
            '.footer-links__list',
            '.profession__info__numbers',
            '.footer-contact__facebook',
            '.footer-links__list',
          ],
        hide: [],
        screenWidth: selectedCaps == 'chrome' ? [1200] : undefined,
      }, resultsCallback)
      .call(done);
  });

  it('should show the career basket page',function(done) {
    client
      .url(baseUrl + '/career-basket')
      .pause(5000)
      .webdrivercss(testName + '.career-basket', {
        name: '1',
        exclude: [],
        remove:
          [
            '#admin-menu',
            '.footer-links__list',
            '.profession__info__numbers',
            '.footer-contact__facebook',
            '.footer-links__list',
          ],
        hide: [],
        screenWidth: selectedCaps == 'chrome' ? [1200] : undefined,
      }, resultsCallback)
      .call(done);
  });
});

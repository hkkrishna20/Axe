//  https://cdnjs.cloudflare.com/ajax/libs/axe-core/3.2.2/axe.js
//  https://cdnjs.cloudflare.com/ajax/libs/axe-core/3.2.2/axe.min.js

const axeBuilder = require('axe-webdriverjs');

var webdriver = require('selenium-webdriver'),
        By = webdriver.By, until = webdriver.until;
        var webdriver = require('selenium-webdriver');

var chrome = require('selenium-webdriver/chrome');

var driver = new webdriver.Builder()
    .forBrowser('chrome')
    .build();

// create a PhantomJS WebDriver instance
// const driver = new webDriver.Builder()
//   .forBrowser('phantomjs')
//   .build();

// run the tests and output the results in the console
driver
  .get('http://sitepoint.com')
  .then(() => {
    axeBuilder(driver)
      .analyze((results) => {
        console.log(results);var WebDriver = require('selenium-webdriver'),
  assert = require('chai').assert,
  AxeBuilder = require('../../lib');

describe('sauce-example', function() {
  this.timeout(10000);

  var driver;
  var url = 'https://github.com/dequelabs/axe-webdriverjs';
  before(function(done) {
    driver = new WebDriver.Builder()
      .usingServer('http://ondemand.saucelabs.com:80/wd/hub')
      .withCapabilities({
        browserName: 'Firefox',
        // you must set these environment variables
        username: process.env.SAUCE_USERNAME,
        accessKey: process.env.SAUCE_ACCESS_KEY
      })
      .build();

    driver.get(url).then(function() {
      done();
    });
  });

  after(function() {
    driver.quit();
  });

  it('should find violations', function(done) {
    AxeBuilder(driver).analyze(function(err, results) {
      if (err) {var WebDriver = require('selenium-webdriver'),
  assert = require('chai').assert,
  AxeBuilder = require('../../lib');

describe('sauce-example', function() {
  this.timeout(10000);

  var driver;
  var url = 'https://github.com/dequelabs/axe-webdriverjs';
  before(function(done) {
    driver = new WebDriver.Builder()
      .usingServer('http://ondemand.saucelabs.com:80/wd/hub')
      .withCapabilities({
        browserName: 'Firefox',
        // you must set these environment variables
        username: process.env.SAUCE_USERNAME,
        accessKey: process.env.SAUCE_ACCESS_KEY
      })
      .build();

    driver.get(url).then(function() {
      done();
    });
  });

  after(function() {
    driver.quit();
  });

  it('should find violations', function(done) {
    AxeBuilder(driver).analyze(function(err, results) {
      if (err) {
        return done(err);
      }
      assert.equal(results.url, url);
      done();
    });
  });
});

        return done(err);
      }
      assert.equal(results.url, url);
      done();
    });
  });
});

      });
  });
//var fs = require('fs');
//var stream = fs.createWriteStream("my_file.txt");
//stream.once('open', function(fd) {
//  stream.write("My first row\n");
//  stream.write("My second row\n");
//  stream.end();
//});

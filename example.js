require=(function e(t,n,r){function s(o,u){if(!n[o]){if(!t[o]){var a=typeof require=="function"&&require;if(!u&&a)return a(o,!0);if(i)return i(o,!0);var f=new Error("Cannot find module '"+o+"'");throw f.code="MODULE_NOT_FOUND",f}var l=n[o]={exports:{}};t[o][0].call(l.exports,function(e){var n=t[o][1][e];return s(n?n:e)},l,l.exports,e,t,n,r)}return n[o].exports}var i=typeof require=="function"&&require;for(var o=0;o<r.length;o++)s(r[o]);return s})({1:[function(require,module,exports){
'use strict';

var _createClass = (function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ('value' in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; })();

var _get = function get(_x, _x2, _x3) { var _again = true; _function: while (_again) { var object = _x, property = _x2, receiver = _x3; _again = false; if (object === null) object = Function.prototype; var desc = Object.getOwnPropertyDescriptor(object, property); if (desc === undefined) { var parent = Object.getPrototypeOf(object); if (parent === null) { return undefined; } else { _x = parent; _x2 = property; _x3 = receiver; _again = true; desc = parent = undefined; continue _function; } } else if ('value' in desc) { return desc.value; } else { var getter = desc.get; if (getter === undefined) { return undefined; } return getter.call(receiver); } } };

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError('Cannot call a class as a function'); } }

function _inherits(subClass, superClass) { if (typeof superClass !== 'function' && superClass !== null) { throw new TypeError('Super expression must either be null or a function, not ' + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _reactDom = require('react-dom');

var _reactDom2 = _interopRequireDefault(_reactDom);

var _reactSuperResponsiveTable = require('react-super-responsive-table');

var App = (function (_React$Component) {
  _inherits(App, _React$Component);

  function App() {
    _classCallCheck(this, App);

    _get(Object.getPrototypeOf(App.prototype), 'constructor', this).apply(this, arguments);
  }

  _createClass(App, [{
    key: 'render',
    value: function render() {
      return _react2['default'].createElement(
        'div',
        null,
        _react2['default'].createElement(
          _reactSuperResponsiveTable.Table,
          null,
          _react2['default'].createElement(
            _reactSuperResponsiveTable.Thead,
            null,
            _react2['default'].createElement(
              _reactSuperResponsiveTable.Tr,
              null,
              _react2['default'].createElement(
                _reactSuperResponsiveTable.Th,
                null,
                'Annual Conference'
              ),
              _react2['default'].createElement(
                _reactSuperResponsiveTable.Th,
                null,
                'Year'
              ),
              _react2['default'].createElement(
                _reactSuperResponsiveTable.Th,
                null,
                'Location'
              ),
              _react2['default'].createElement(
                _reactSuperResponsiveTable.Th,
                null,
                'President'
              ),
              _react2['default'].createElement(
                _reactSuperResponsiveTable.Th,
                null,
                'Program Chair'
              ),
              _react2['default'].createElement(
                _reactSuperResponsiveTable.Th,
                null,
                'Conference Theme'
              )
            )
          ),
          _react2['default'].createElement(
            _reactSuperResponsiveTable.Tbody,
            null,
            data.map(function (datum, index) {
              return _react2['default'].createElement(
                _reactSuperResponsiveTable.Tr,
                { key: index },
                _react2['default'].createElement(
                  _reactSuperResponsiveTable.Td,
                  null,
                  datum.Conference
                ),
                _react2['default'].createElement(
                  _reactSuperResponsiveTable.Td,
                  null,
                  datum.Year
                ),
                _react2['default'].createElement(
                  _reactSuperResponsiveTable.Td,
                  null,
                  datum.Location
                ),
                _react2['default'].createElement(
                  _reactSuperResponsiveTable.Td,
                  null,
                  datum.President
                ),
                _react2['default'].createElement(
                  _reactSuperResponsiveTable.Td,
                  null,
                  datum.Chair
                ),
                _react2['default'].createElement(
                  _reactSuperResponsiveTable.Td,
                  null,
                  datum.Theme
                )
              );
            })
          )
        )
      );
    }
  }]);

  return App;
})(_react2['default'].Component);

var data = [{
  'Conference': 31,
  'Year': 2017,
  'Location': 'Alabama Community College System (ACCS)',
  'President': 'Mr. Toner Evans, Samford University',
  'Chair': 'Ms. Kelly Birchfield, Auburn University Montgomery',
  'Theme': 'COMMUNITY!'
}, {
  'Conference': 30,
  'Year': 2016,
  'Location': 'Samford University',
  'President': 'Ms. Angel Jowers, University of West Alabama',
  'Chair': 'Mr. Toner Evans, Samford University',
  'Theme': 'Academ(ia) Awards: Best Practices/Performances in IR'
}, {
  'Conference': 29,
  'Year': 2015,
  'Location': 'Eufaula (Wallace Community College Dothan)',
  'President': 'Dr. Annette Cederholm, Snead State Community College',
  'Chair': 'Ms. Angel Jowers, University of West Alabama',
  'Theme': 'Back to the Future'
}, {
  'Conference': 28,
  'Year': 2014,
  'Location': 'Huntsville (J.F. Drake State Community and Technical College)',
  'President': 'Dr. Jon C. Acker, The University of Alabama',
  'Chair': 'Dr. Annette Cederholm, Snead State Community College',
  'Theme': 'Institutional Research…and Beyond!'
}, {
  'Conference': 27,
  'Year': 2013,
  'Location': 'The University of Alabama',
  'President': 'Mr. John McIntosh, Northwest-Shoals Community College',
  'Chair': 'Dr. Jon C. Acker, The University of Alabama',
  'Theme': 'Moving the Ball Forward'
}, {
  'Conference': 26,
  'Year': 2012,
  'Location': 'Fairhope (Faulkner State Community College)',
  'President': 'Mr. John McIntosh, Northwest-Shoals Community College',
  'Chair': 'Mr. John McIntosh, Northwest-Shoals Community College',
  'Theme': 'Institutional Research: Gaining Insight and Promoting Improvement'
}, {
  'Conference': 25,
  'Year': 2011,
  'Location': 'Troy University',
  'President': 'Ms. Tara George, Jefferson State Community College',
  'Chair': 'Ms. Patricia Pratt, University of West Alabama',
  'Theme': 'The ART of Institutional Research'
}, {
  'Conference': 24,
  'Year': 2010,
  'Location': 'Florence (University of North Alabama)',
  'President': 'Dr. Alicia Simmons, Jacksonville State University',
  'Chair': 'Ms. Tara George, Jefferson State Community College',
  'Theme': 'In Tune with IR'
}, {
  'Conference': 23,
  'Year': 2009,
  'Location': 'Opelika (Auburn University)',
  'President': 'Ms. Diane Sherman, Alabama Commission on Higher Education (ACHE)',
  'Chair': 'Dr. Alicia Simmons, Jacksonville State University',
  'Theme': 'Making Difficult Decisions in Challenging Times'
}, {
  'Conference': 22,
  'Year': 2008,
  'Location': 'Jacksonville State University',
  'President': 'Dr. Yardley Bailey, University of Alabama System',
  'Chair': 'Ms. Diane Sherman, Alabama Commission on Higher Education (ACHE)',
  'Theme': 'A Breath of Fresh AIR'
}, {
  'Conference': 21,
  'Year': 2007,
  'Location': 'Alabama A&M University',
  'President': 'Dr. Sarah Latham, Samford University',
  'Chair': 'Dr. Yardley Bailey, University of Alabama System',
  'Theme': 'Institutional Research: Is it Rocket Science?'
}, {
  'Conference': 20,
  'Year': 2006,
  'Location': 'The University of Alabama',
  'President': 'Dr. Cara Mia Pugh, Auburn University',
  'Chair': 'Dr. Sarah Latham, Samford University',
  'Theme': 'Twenty Years Later: New Challenges…New Opportunities'
}, {
  'Conference': 19,
  'Year': 2005,
  'Location': 'Fairhope (Faulkner State Community College)',
  'President': 'Ms. Kris Mascetti, Auburn University at Montgomery',
  'Chair': 'Dr. Cara Mia Pugh, Auburn University',
  'Theme': 'Off to a Good Start'
}, {
  'Conference': 18,
  'Year': 2004,
  'Location': 'University of Alabama at Birmingham',
  'President': 'Mr. Dan Tennimon, Troy State University Montgomery',
  'Chair': 'Ms. Kris Mascetti, Auburn University at Montgomery',
  'Theme': 'Research-Based Planning and Evaluation'
}, {
  'Conference': 17,
  'Year': 2003,
  'Location': 'Troy State University Montgomery',
  'President': 'Dr. Jim Eck, Samford University',
  'Chair': 'Mr. Dan Tennimon, Troy State University Montgomery',
  'Theme': 'Non-Traditional: The New Majority'
}, {
  'Conference': 16,
  'Year': 2002,
  'Location': 'Samford University',
  'President': 'Dr. Priscilla Holland, University of North Alabama',
  'Chair': 'Dr. Jim Eck, Samford University',
  'Theme': 'Alike or Different?: Product Differentiation and the Institutional Researcher'
}, {
  'Conference': 15,
  'Year': 2001,
  'Location': 'University of North Alabama',
  'President': 'Ms. Mimi McDaniel Johnson, Alabama State University',
  'Chair': 'Dr. Priscilla Holland, University of North Alabama',
  'Theme': 'Data Driven Decisions'
}, {
  'Conference': 14,
  'Year': 2000,
  'Location': 'Gulf Shores (Faulkner State Community College and Bishop State Community College)',
  'President': 'Ms. Teresa Hall, University of Alabama at Birmingham',
  'Chair': 'Ms. Mimi McDaniel Johnson, Alabama State University',
  'Theme': 'IR: Thinking Outside of the Box'
}, {
  'Conference': 13,
  'Year': 1999,
  'Location': 'Auburn University',
  'President': 'Dr. Anna T. Waggener, University of South Alabama',
  'Chair': 'Ms. Teresa Hall, University of Alabama at Birmingham',
  'Theme': "Ready or Not, It's Here: IR Meets Y2K"
}, {
  'Conference': 12,
  'Year': 1998,
  'Location': 'University of Alabama in Huntsville',
  'President': 'Dr. Myrtes Dunn Green, Stillman College',
  'Chair': 'Dr. Anna T. Waggener, University of South Alabama',
  'Theme': 'Challenges and Responses: Anticipating the Twenty-First Century'
}, {
  'Conference': 11,
  'Year': 1997,
  'Location': 'The University of Alabama',
  'President': 'Dr. Julia S. Rogers, University of Montevallo',
  'Chair': 'Dr. Myrtes Dunn Green, Stillman College',
  'Theme': 'Public Perceptions and Misperceptions of Accountability: The Challenges for Institutional Research'
}, {
  'Conference': 10,
  'Year': 1996,
  'Location': 'Samford University',
  'President': 'Mr. Sam Lowther, Auburn University',
  'Chair': 'Dr. Julia S. Rogers, University of Montevallo',
  'Theme': 'Indicators, Outcomes, and Effectiveness: Quantifying the Past and Preparing for the Future'
}, {
  'Conference': 9,
  'Year': 1995,
  'Location': 'Troy State University Dothan',
  'President': 'Dr. Judy Miller, Enterprise State Junior College',
  'Chair': 'Mr. Sam Lowther, Auburn University',
  'Theme': 'The Changing Face of Institutional Research: New Responsibilities and New Techniques'
}, {
  'Conference': 8,
  'Year': 1994,
  'Location': 'University of Alabama in Huntsville',
  'President': 'Dr. Harriott D. Calhoun, Jefferson State Community College',
  'Chair': 'Dr. Judy Miller, Enterprise State Junior College',
  'Theme': 'Technology and Ethics: Implications for Institutional Research'
}, {
  'Conference': 7,
  'Year': 1993,
  'Location': 'University of Montevallo',
  'President': 'Dr. Albert M. Searway, Jacksonville State University',
  'Chair': 'Dr. Harriott D. Calhoun, Jefferson State Community College',
  'Theme': 'Quality and Effectiveness - Issues of the Decade'
}, {
  'Conference': 6,
  'Year': 1992,
  'Location': 'University of South Alabama',
  'President': 'Mr. Don E. Dailey, University of Alabama at Birmingham',
  'Chair': 'Dr. Albert M. Searway, Jacksonville State University',
  'Theme': 'Effectiveness in Higher Education'
}, {
  'Conference': 5,
  'Year': 1991,
  'Location': 'The University of Alabama',
  'President': 'Dr. Kitty C. Collier, Alabama Commission on Higher Education (ACHE)',
  'Chair': 'Mr. Don E. Dailey, University of Alabama at Birmingham',
  'Theme': "Putting It All Together: Institutional Research and Planning in the 1990's"
}, {
  'Conference': 4,
  'Year': 1990,
  'Location': 'Auburn University',
  'President': 'Ms. Debbie Dailey, University of Alabama at Birmingham',
  'Chair': 'Dr. Kitty C. Collier, Alabama Commission on Higher Education (ACHE)',
  'Theme': 'From Statistics to Strategy: Making the Most of Institutional Research'
}, {
  'Conference': 3,
  'Year': 1989,
  'Location': 'University of Alabama at Birmingham',
  'President': 'Dr. Thomas McAlpine, Alabama A&M University',
  'Chair': 'Ms. Debbie Dailey, University of Alabama at Birmingham',
  'Theme': 'Developing the Institutional Research Office: A Nuts and Bolts Approach'
}, {
  'Conference': 2,
  'Year': 1988,
  'Location': 'Alabama State University',
  'President': 'Mr. Alfred H. Yeager, University of South Alabama',
  'Chair': 'Dr. Thomas McAlpine, Alabama A&M University',
  'Theme': 'Building and Expanding Institutional Research'
}, {
  'Conference': 1,
  'Year': 1987,
  'Location': 'Birmingham (Organizational Meeting)',
  'President': 'Ms. Kay Staub, The University of Alabama (Convener)',
  'Chair': 'Dr. Gerald S. Leischuck, Auburn University',
  'Theme': 'Strategic Planning and Outcomes Assessment'
}];

_reactDom2['default'].render(_react2['default'].createElement(App, null), document.getElementById('app'));

},{"react":undefined,"react-dom":undefined,"react-super-responsive-table":undefined}]},{},[1]);

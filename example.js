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
						_react2['default'].createElement(
							_reactSuperResponsiveTable.Tr,
							null,
							_react2['default'].createElement(
								_reactSuperResponsiveTable.Td,
								null,
								'31'
							),
							_react2['default'].createElement(
								_reactSuperResponsiveTable.Td,
								null,
								'2017'
							),
							_react2['default'].createElement(
								_reactSuperResponsiveTable.Td,
								null,
								'Alabama Community College System (ACCS)'
							),
							_react2['default'].createElement(
								_reactSuperResponsiveTable.Td,
								null,
								'Mr. Toner Evans, Samford University'
							),
							_react2['default'].createElement(
								_reactSuperResponsiveTable.Td,
								null,
								'Ms. Kelly Birchfield, Auburn University Montgomery'
							),
							_react2['default'].createElement(_reactSuperResponsiveTable.Td, null)
						),
						_react2['default'].createElement(
							_reactSuperResponsiveTable.Tr,
							null,
							_react2['default'].createElement(
								_reactSuperResponsiveTable.Td,
								null,
								'30'
							),
							_react2['default'].createElement(
								_reactSuperResponsiveTable.Td,
								null,
								'2016'
							),
							_react2['default'].createElement(
								_reactSuperResponsiveTable.Td,
								null,
								'Samford University'
							),
							_react2['default'].createElement(
								_reactSuperResponsiveTable.Td,
								null,
								'Ms. Angel Jowers, University of West Alabama'
							),
							_react2['default'].createElement(
								_reactSuperResponsiveTable.Td,
								null,
								'Mr. Toner Evans, Samford University'
							),
							_react2['default'].createElement(
								_reactSuperResponsiveTable.Td,
								null,
								'Academ(ia) Awards: Best Practices/Performances in IR'
							)
						),
						_react2['default'].createElement(
							_reactSuperResponsiveTable.Tr,
							null,
							_react2['default'].createElement(
								_reactSuperResponsiveTable.Td,
								null,
								'29'
							),
							_react2['default'].createElement(
								_reactSuperResponsiveTable.Td,
								null,
								'2015'
							),
							_react2['default'].createElement(
								_reactSuperResponsiveTable.Td,
								null,
								'Eufaula (Wallace Community College Dothan)'
							),
							_react2['default'].createElement(
								_reactSuperResponsiveTable.Td,
								null,
								'Dr. Annette Cederholm, Snead State Community College'
							),
							_react2['default'].createElement(
								_reactSuperResponsiveTable.Td,
								null,
								'Ms. Angel Jowers, University of West Alabama'
							),
							_react2['default'].createElement(
								_reactSuperResponsiveTable.Td,
								null,
								'Back to the Future'
							)
						),
						_react2['default'].createElement(
							_reactSuperResponsiveTable.Tr,
							null,
							_react2['default'].createElement(
								_reactSuperResponsiveTable.Td,
								null,
								'28'
							),
							_react2['default'].createElement(
								_reactSuperResponsiveTable.Td,
								null,
								'2014'
							),
							_react2['default'].createElement(
								_reactSuperResponsiveTable.Td,
								null,
								'Huntsville (J.F. Drake State Community and Technical College)'
							),
							_react2['default'].createElement(
								_reactSuperResponsiveTable.Td,
								null,
								'Dr. Jon C. Acker, The University of Alabama'
							),
							_react2['default'].createElement(
								_reactSuperResponsiveTable.Td,
								null,
								'Dr. Annette Cederholm, Snead State Community College'
							),
							_react2['default'].createElement(
								_reactSuperResponsiveTable.Td,
								null,
								'Institutional Research…and Beyond!'
							)
						),
						_react2['default'].createElement(
							_reactSuperResponsiveTable.Tr,
							null,
							_react2['default'].createElement(
								_reactSuperResponsiveTable.Td,
								null,
								'27'
							),
							_react2['default'].createElement(
								_reactSuperResponsiveTable.Td,
								null,
								'2013'
							),
							_react2['default'].createElement(
								_reactSuperResponsiveTable.Td,
								null,
								'The University of Alabama'
							),
							_react2['default'].createElement(
								_reactSuperResponsiveTable.Td,
								null,
								'Mr. John McIntosh, Northwest-Shoals Community College'
							),
							_react2['default'].createElement(
								_reactSuperResponsiveTable.Td,
								null,
								'Dr. Jon C. Acker, The University of Alabama'
							),
							_react2['default'].createElement(
								_reactSuperResponsiveTable.Td,
								null,
								'Moving the Ball Forward'
							)
						),
						_react2['default'].createElement(
							_reactSuperResponsiveTable.Tr,
							null,
							_react2['default'].createElement(
								_reactSuperResponsiveTable.Td,
								null,
								'26'
							),
							_react2['default'].createElement(
								_reactSuperResponsiveTable.Td,
								null,
								'2012'
							),
							_react2['default'].createElement(
								_reactSuperResponsiveTable.Td,
								null,
								'Fairhope (Faulkner State Community College)'
							),
							_react2['default'].createElement(
								_reactSuperResponsiveTable.Td,
								null,
								'Mr. John McIntosh, Northwest-Shoals Community College'
							),
							_react2['default'].createElement(
								_reactSuperResponsiveTable.Td,
								null,
								'Mr. John McIntosh, Northwest-Shoals Community College'
							),
							_react2['default'].createElement(
								_reactSuperResponsiveTable.Td,
								null,
								'Institutional Research: Gaining Insight and Promoting Improvement'
							)
						),
						_react2['default'].createElement(
							_reactSuperResponsiveTable.Tr,
							null,
							_react2['default'].createElement(
								_reactSuperResponsiveTable.Td,
								null,
								'25'
							),
							_react2['default'].createElement(
								_reactSuperResponsiveTable.Td,
								null,
								'2011'
							),
							_react2['default'].createElement(
								_reactSuperResponsiveTable.Td,
								null,
								'Troy University'
							),
							_react2['default'].createElement(
								_reactSuperResponsiveTable.Td,
								null,
								'Ms. Tara George, Jefferson State Community College'
							),
							_react2['default'].createElement(
								_reactSuperResponsiveTable.Td,
								null,
								'Ms. Patricia Pratt, University of West Alabama'
							),
							_react2['default'].createElement(
								_reactSuperResponsiveTable.Td,
								null,
								'The ART of Institutional Research'
							)
						),
						_react2['default'].createElement(
							_reactSuperResponsiveTable.Tr,
							null,
							_react2['default'].createElement(
								_reactSuperResponsiveTable.Td,
								null,
								'24'
							),
							_react2['default'].createElement(
								_reactSuperResponsiveTable.Td,
								null,
								'2010'
							),
							_react2['default'].createElement(
								_reactSuperResponsiveTable.Td,
								null,
								'Florence (University of North Alabama)'
							),
							_react2['default'].createElement(
								_reactSuperResponsiveTable.Td,
								null,
								'Dr. Alicia Simmons, Jacksonville State University'
							),
							_react2['default'].createElement(
								_reactSuperResponsiveTable.Td,
								null,
								'Ms. Tara George, Jefferson State Community College'
							),
							_react2['default'].createElement(
								_reactSuperResponsiveTable.Td,
								null,
								'In Tune with IR'
							)
						),
						_react2['default'].createElement(
							_reactSuperResponsiveTable.Tr,
							null,
							_react2['default'].createElement(
								_reactSuperResponsiveTable.Td,
								null,
								'23'
							),
							_react2['default'].createElement(
								_reactSuperResponsiveTable.Td,
								null,
								'2009'
							),
							_react2['default'].createElement(
								_reactSuperResponsiveTable.Td,
								null,
								'Opelika (Auburn University)'
							),
							_react2['default'].createElement(
								_reactSuperResponsiveTable.Td,
								null,
								'Ms. Diane Sherman, Alabama Commission on Higher Education (ACHE)'
							),
							_react2['default'].createElement(
								_reactSuperResponsiveTable.Td,
								null,
								'Dr. Alicia Simmons, Jacksonville State University'
							),
							_react2['default'].createElement(
								_reactSuperResponsiveTable.Td,
								null,
								'Making Difficult Decisions in Challenging Times'
							)
						),
						_react2['default'].createElement(
							_reactSuperResponsiveTable.Tr,
							null,
							_react2['default'].createElement(
								_reactSuperResponsiveTable.Td,
								null,
								'22'
							),
							_react2['default'].createElement(
								_reactSuperResponsiveTable.Td,
								null,
								'2008'
							),
							_react2['default'].createElement(
								_reactSuperResponsiveTable.Td,
								null,
								'Jacksonville State University'
							),
							_react2['default'].createElement(
								_reactSuperResponsiveTable.Td,
								null,
								'Dr. Yardley Bailey, University of Alabama System'
							),
							_react2['default'].createElement(
								_reactSuperResponsiveTable.Td,
								null,
								'Ms. Diane Sherman, Alabama Commission on Higher Education (ACHE)'
							),
							_react2['default'].createElement(
								_reactSuperResponsiveTable.Td,
								null,
								'A Breath of Fresh AIR'
							)
						),
						_react2['default'].createElement(
							_reactSuperResponsiveTable.Tr,
							null,
							_react2['default'].createElement(
								_reactSuperResponsiveTable.Td,
								null,
								'21'
							),
							_react2['default'].createElement(
								_reactSuperResponsiveTable.Td,
								null,
								'2007'
							),
							_react2['default'].createElement(
								_reactSuperResponsiveTable.Td,
								null,
								'Alabama A&M University'
							),
							_react2['default'].createElement(
								_reactSuperResponsiveTable.Td,
								null,
								'Dr. Sarah Latham, Samford University'
							),
							_react2['default'].createElement(
								_reactSuperResponsiveTable.Td,
								null,
								'Dr. Yardley Bailey, University of Alabama System'
							),
							_react2['default'].createElement(
								_reactSuperResponsiveTable.Td,
								null,
								'Institutional Research: Is it Rocket Science?'
							)
						),
						_react2['default'].createElement(
							_reactSuperResponsiveTable.Tr,
							null,
							_react2['default'].createElement(
								_reactSuperResponsiveTable.Td,
								null,
								'20'
							),
							_react2['default'].createElement(
								_reactSuperResponsiveTable.Td,
								null,
								'2006'
							),
							_react2['default'].createElement(
								_reactSuperResponsiveTable.Td,
								null,
								'The University of Alabama'
							),
							_react2['default'].createElement(
								_reactSuperResponsiveTable.Td,
								null,
								'Dr. Cara Mia Pugh, Auburn University'
							),
							_react2['default'].createElement(
								_reactSuperResponsiveTable.Td,
								null,
								'Dr. Sarah Latham, Samford University'
							),
							_react2['default'].createElement(
								_reactSuperResponsiveTable.Td,
								null,
								'Twenty Years Later: New Challenges…New Opportunities'
							)
						),
						_react2['default'].createElement(
							_reactSuperResponsiveTable.Tr,
							null,
							_react2['default'].createElement(
								_reactSuperResponsiveTable.Td,
								null,
								'19'
							),
							_react2['default'].createElement(
								_reactSuperResponsiveTable.Td,
								null,
								'2005'
							),
							_react2['default'].createElement(
								_reactSuperResponsiveTable.Td,
								null,
								'Fairhope (Faulkner State Community College)'
							),
							_react2['default'].createElement(
								_reactSuperResponsiveTable.Td,
								null,
								'Ms. Kris Mascetti, Auburn University at Montgomery'
							),
							_react2['default'].createElement(
								_reactSuperResponsiveTable.Td,
								null,
								'Dr. Cara Mia Pugh, Auburn University'
							),
							_react2['default'].createElement(
								_reactSuperResponsiveTable.Td,
								null,
								'Off to a Good Start'
							)
						),
						_react2['default'].createElement(
							_reactSuperResponsiveTable.Tr,
							null,
							_react2['default'].createElement(
								_reactSuperResponsiveTable.Td,
								null,
								'18'
							),
							_react2['default'].createElement(
								_reactSuperResponsiveTable.Td,
								null,
								'2004'
							),
							_react2['default'].createElement(
								_reactSuperResponsiveTable.Td,
								null,
								'University of Alabama at Birmingham'
							),
							_react2['default'].createElement(
								_reactSuperResponsiveTable.Td,
								null,
								'Mr. Dan Tennimon, Troy State University Montgomery'
							),
							_react2['default'].createElement(
								_reactSuperResponsiveTable.Td,
								null,
								'Ms. Kris Mascetti, Auburn University at Montgomery'
							),
							_react2['default'].createElement(
								_reactSuperResponsiveTable.Td,
								null,
								'Research-Based Planning and Evaluation'
							)
						),
						_react2['default'].createElement(
							_reactSuperResponsiveTable.Tr,
							null,
							_react2['default'].createElement(
								_reactSuperResponsiveTable.Td,
								null,
								'17'
							),
							_react2['default'].createElement(
								_reactSuperResponsiveTable.Td,
								null,
								'2003'
							),
							_react2['default'].createElement(
								_reactSuperResponsiveTable.Td,
								null,
								'Troy State University Montgomery'
							),
							_react2['default'].createElement(
								_reactSuperResponsiveTable.Td,
								null,
								'Dr. Jim Eck, Samford University'
							),
							_react2['default'].createElement(
								_reactSuperResponsiveTable.Td,
								null,
								'Mr. Dan Tennimon, Troy State University Montgomery'
							),
							_react2['default'].createElement(
								_reactSuperResponsiveTable.Td,
								null,
								'Non-Traditional: The New Majority'
							)
						),
						_react2['default'].createElement(
							_reactSuperResponsiveTable.Tr,
							null,
							_react2['default'].createElement(
								_reactSuperResponsiveTable.Td,
								null,
								'16'
							),
							_react2['default'].createElement(
								_reactSuperResponsiveTable.Td,
								null,
								'2002'
							),
							_react2['default'].createElement(
								_reactSuperResponsiveTable.Td,
								null,
								'Samford University'
							),
							_react2['default'].createElement(
								_reactSuperResponsiveTable.Td,
								null,
								'Dr. Priscilla Holland, University of North Alabama'
							),
							_react2['default'].createElement(
								_reactSuperResponsiveTable.Td,
								null,
								'Dr. Jim Eck, Samford University'
							),
							_react2['default'].createElement(
								_reactSuperResponsiveTable.Td,
								null,
								'Alike or Different?: Product Differentiation and the Institutional Researcher'
							)
						),
						_react2['default'].createElement(
							_reactSuperResponsiveTable.Tr,
							null,
							_react2['default'].createElement(
								_reactSuperResponsiveTable.Td,
								null,
								'15'
							),
							_react2['default'].createElement(
								_reactSuperResponsiveTable.Td,
								null,
								'2001'
							),
							_react2['default'].createElement(
								_reactSuperResponsiveTable.Td,
								null,
								'University of North Alabama'
							),
							_react2['default'].createElement(
								_reactSuperResponsiveTable.Td,
								null,
								'Ms. Mimi McDaniel Johnson, Alabama State University'
							),
							_react2['default'].createElement(
								_reactSuperResponsiveTable.Td,
								null,
								'Dr. Priscilla Holland, University of North Alabama'
							),
							_react2['default'].createElement(
								_reactSuperResponsiveTable.Td,
								null,
								'Data Driven Decisions'
							)
						),
						_react2['default'].createElement(
							_reactSuperResponsiveTable.Tr,
							null,
							_react2['default'].createElement(
								_reactSuperResponsiveTable.Td,
								null,
								'14'
							),
							_react2['default'].createElement(
								_reactSuperResponsiveTable.Td,
								null,
								'2000'
							),
							_react2['default'].createElement(
								_reactSuperResponsiveTable.Td,
								null,
								'Gulf Shores (Faulkner State Community College and Bishop State Community College)'
							),
							_react2['default'].createElement(
								_reactSuperResponsiveTable.Td,
								null,
								'Ms. Teresa Hall, University of Alabama at Birmingham'
							),
							_react2['default'].createElement(
								_reactSuperResponsiveTable.Td,
								null,
								'Ms. Mimi McDaniel Johnson, Alabama State University'
							),
							_react2['default'].createElement(
								_reactSuperResponsiveTable.Td,
								null,
								'IR: Thinking Outside of the Box'
							)
						),
						_react2['default'].createElement(
							_reactSuperResponsiveTable.Tr,
							null,
							_react2['default'].createElement(
								_reactSuperResponsiveTable.Td,
								null,
								'13'
							),
							_react2['default'].createElement(
								_reactSuperResponsiveTable.Td,
								null,
								'1999'
							),
							_react2['default'].createElement(
								_reactSuperResponsiveTable.Td,
								null,
								'Auburn University'
							),
							_react2['default'].createElement(
								_reactSuperResponsiveTable.Td,
								null,
								'Dr. Anna T. Waggener, University of South Alabama'
							),
							_react2['default'].createElement(
								_reactSuperResponsiveTable.Td,
								null,
								'Ms. Teresa Hall, University of Alabama at Birmingham'
							),
							_react2['default'].createElement(
								_reactSuperResponsiveTable.Td,
								null,
								'Ready or Not, It\'s Here: IR Meets Y2K'
							)
						),
						_react2['default'].createElement(
							_reactSuperResponsiveTable.Tr,
							null,
							_react2['default'].createElement(
								_reactSuperResponsiveTable.Td,
								null,
								'12'
							),
							_react2['default'].createElement(
								_reactSuperResponsiveTable.Td,
								null,
								'1998'
							),
							_react2['default'].createElement(
								_reactSuperResponsiveTable.Td,
								null,
								'University of Alabama in Huntsville'
							),
							_react2['default'].createElement(
								_reactSuperResponsiveTable.Td,
								null,
								'Dr. Myrtes Dunn Green, Stillman College'
							),
							_react2['default'].createElement(
								_reactSuperResponsiveTable.Td,
								null,
								'Dr. Anna T. Waggener, University of South Alabama'
							),
							_react2['default'].createElement(
								_reactSuperResponsiveTable.Td,
								null,
								'Challenges and Responses: Anticipating the Twenty-First Century'
							)
						),
						_react2['default'].createElement(
							_reactSuperResponsiveTable.Tr,
							null,
							_react2['default'].createElement(
								_reactSuperResponsiveTable.Td,
								null,
								'11'
							),
							_react2['default'].createElement(
								_reactSuperResponsiveTable.Td,
								null,
								'1997'
							),
							_react2['default'].createElement(
								_reactSuperResponsiveTable.Td,
								null,
								'The University of Alabama'
							),
							_react2['default'].createElement(
								_reactSuperResponsiveTable.Td,
								null,
								'Dr. Julia S. Rogers, University of Montevallo'
							),
							_react2['default'].createElement(
								_reactSuperResponsiveTable.Td,
								null,
								'Dr. Myrtes Dunn Green, Stillman College'
							),
							_react2['default'].createElement(
								_reactSuperResponsiveTable.Td,
								null,
								'Public Perceptions and Misperceptions of Accountability: The Challenges for Institutional Research'
							)
						),
						_react2['default'].createElement(
							_reactSuperResponsiveTable.Tr,
							null,
							_react2['default'].createElement(
								_reactSuperResponsiveTable.Td,
								null,
								'10'
							),
							_react2['default'].createElement(
								_reactSuperResponsiveTable.Td,
								null,
								'1996'
							),
							_react2['default'].createElement(
								_reactSuperResponsiveTable.Td,
								null,
								'Samford University'
							),
							_react2['default'].createElement(
								_reactSuperResponsiveTable.Td,
								null,
								'Mr. Sam Lowther, Auburn University'
							),
							_react2['default'].createElement(
								_reactSuperResponsiveTable.Td,
								null,
								'Dr. Julia S. Rogers, University of Montevallo'
							),
							_react2['default'].createElement(
								_reactSuperResponsiveTable.Td,
								null,
								'Indicators, Outcomes, and Effectiveness: Quantifying the Past and Preparing for the Future'
							)
						),
						_react2['default'].createElement(
							_reactSuperResponsiveTable.Tr,
							null,
							_react2['default'].createElement(
								_reactSuperResponsiveTable.Td,
								null,
								'9'
							),
							_react2['default'].createElement(
								_reactSuperResponsiveTable.Td,
								null,
								'1995'
							),
							_react2['default'].createElement(
								_reactSuperResponsiveTable.Td,
								null,
								'Troy State University Dothan'
							),
							_react2['default'].createElement(
								_reactSuperResponsiveTable.Td,
								null,
								'Dr. Judy Miller, Enterprise State Junior College'
							),
							_react2['default'].createElement(
								_reactSuperResponsiveTable.Td,
								null,
								'Mr. Sam Lowther, Auburn University'
							),
							_react2['default'].createElement(
								_reactSuperResponsiveTable.Td,
								null,
								'The Changing Face of Institutional Research: New Responsibilities and New Techniques'
							)
						),
						_react2['default'].createElement(
							_reactSuperResponsiveTable.Tr,
							null,
							_react2['default'].createElement(
								_reactSuperResponsiveTable.Td,
								null,
								'8'
							),
							_react2['default'].createElement(
								_reactSuperResponsiveTable.Td,
								null,
								'1994'
							),
							_react2['default'].createElement(
								_reactSuperResponsiveTable.Td,
								null,
								'University of Alabama in Huntsville'
							),
							_react2['default'].createElement(
								_reactSuperResponsiveTable.Td,
								null,
								'Dr. Harriott D. Calhoun, Jefferson State Community College'
							),
							_react2['default'].createElement(
								_reactSuperResponsiveTable.Td,
								null,
								'Dr. Judy Miller, Enterprise State Junior College'
							),
							_react2['default'].createElement(
								_reactSuperResponsiveTable.Td,
								null,
								'Technology and Ethics: Implications for Institutional Research'
							)
						),
						_react2['default'].createElement(
							_reactSuperResponsiveTable.Tr,
							null,
							_react2['default'].createElement(
								_reactSuperResponsiveTable.Td,
								null,
								'7'
							),
							_react2['default'].createElement(
								_reactSuperResponsiveTable.Td,
								null,
								'1993'
							),
							_react2['default'].createElement(
								_reactSuperResponsiveTable.Td,
								null,
								'University of Montevallo'
							),
							_react2['default'].createElement(
								_reactSuperResponsiveTable.Td,
								null,
								'Dr. Albert M. Searway, Jacksonville State University'
							),
							_react2['default'].createElement(
								_reactSuperResponsiveTable.Td,
								null,
								'Dr. Harriott D. Calhoun, Jefferson State Community College'
							),
							_react2['default'].createElement(
								_reactSuperResponsiveTable.Td,
								null,
								'Quality and Effectiveness - Issues of the Decade'
							)
						),
						_react2['default'].createElement(
							_reactSuperResponsiveTable.Tr,
							null,
							_react2['default'].createElement(
								_reactSuperResponsiveTable.Td,
								null,
								'6'
							),
							_react2['default'].createElement(
								_reactSuperResponsiveTable.Td,
								null,
								'1992'
							),
							_react2['default'].createElement(
								_reactSuperResponsiveTable.Td,
								null,
								'University of South Alabama'
							),
							_react2['default'].createElement(
								_reactSuperResponsiveTable.Td,
								null,
								'Mr. Don E. Dailey, University of Alabama at Birmingham'
							),
							_react2['default'].createElement(
								_reactSuperResponsiveTable.Td,
								null,
								'Dr. Albert M. Searway, Jacksonville State University'
							),
							_react2['default'].createElement(
								_reactSuperResponsiveTable.Td,
								null,
								'Effectiveness in Higher Education'
							)
						),
						_react2['default'].createElement(
							_reactSuperResponsiveTable.Tr,
							null,
							_react2['default'].createElement(
								_reactSuperResponsiveTable.Td,
								null,
								'5'
							),
							_react2['default'].createElement(
								_reactSuperResponsiveTable.Td,
								null,
								'1991'
							),
							_react2['default'].createElement(
								_reactSuperResponsiveTable.Td,
								null,
								'The University of Alabama'
							),
							_react2['default'].createElement(
								_reactSuperResponsiveTable.Td,
								null,
								'Dr. Kitty C. Collier, Alabama Commission on Higher Education (ACHE)'
							),
							_react2['default'].createElement(
								_reactSuperResponsiveTable.Td,
								null,
								'Mr. Don E. Dailey, University of Alabama at Birmingham'
							),
							_react2['default'].createElement(
								_reactSuperResponsiveTable.Td,
								null,
								'Putting It All Together: Institutional Research and Planning in the 1990\'s'
							)
						),
						_react2['default'].createElement(
							_reactSuperResponsiveTable.Tr,
							null,
							_react2['default'].createElement(
								_reactSuperResponsiveTable.Td,
								null,
								'4'
							),
							_react2['default'].createElement(
								_reactSuperResponsiveTable.Td,
								null,
								'1990'
							),
							_react2['default'].createElement(
								_reactSuperResponsiveTable.Td,
								null,
								'Auburn University'
							),
							_react2['default'].createElement(
								_reactSuperResponsiveTable.Td,
								null,
								'Ms. Debbie Dailey, University of Alabama at Birmingham'
							),
							_react2['default'].createElement(
								_reactSuperResponsiveTable.Td,
								null,
								'Dr. Kitty C. Collier, Alabama Commission on Higher Education (ACHE)'
							),
							_react2['default'].createElement(
								_reactSuperResponsiveTable.Td,
								null,
								'From Statistics to Strategy: Making the Most of Institutional Research'
							)
						),
						_react2['default'].createElement(
							_reactSuperResponsiveTable.Tr,
							null,
							_react2['default'].createElement(
								_reactSuperResponsiveTable.Td,
								null,
								'3'
							),
							_react2['default'].createElement(
								_reactSuperResponsiveTable.Td,
								null,
								'1989'
							),
							_react2['default'].createElement(
								_reactSuperResponsiveTable.Td,
								null,
								'University of Alabama at Birmingham'
							),
							_react2['default'].createElement(
								_reactSuperResponsiveTable.Td,
								null,
								'Dr. Thomas McAlpine, Alabama A&M University'
							),
							_react2['default'].createElement(
								_reactSuperResponsiveTable.Td,
								null,
								'Ms. Debbie Dailey, University of Alabama at Birmingham'
							),
							_react2['default'].createElement(
								_reactSuperResponsiveTable.Td,
								null,
								'Developing the Institutional Research Office: A Nuts and Bolts Approach'
							)
						),
						_react2['default'].createElement(
							_reactSuperResponsiveTable.Tr,
							null,
							_react2['default'].createElement(
								_reactSuperResponsiveTable.Td,
								null,
								'2'
							),
							_react2['default'].createElement(
								_reactSuperResponsiveTable.Td,
								null,
								'1988'
							),
							_react2['default'].createElement(
								_reactSuperResponsiveTable.Td,
								null,
								'Alabama State University'
							),
							_react2['default'].createElement(
								_reactSuperResponsiveTable.Td,
								null,
								'Mr. Alfred H. Yeager, University of South Alabama'
							),
							_react2['default'].createElement(
								_reactSuperResponsiveTable.Td,
								null,
								'Dr. Thomas McAlpine, Alabama A&M University'
							),
							_react2['default'].createElement(
								_reactSuperResponsiveTable.Td,
								null,
								'Building and Expanding Institutional Research'
							)
						),
						_react2['default'].createElement(
							_reactSuperResponsiveTable.Tr,
							null,
							_react2['default'].createElement(
								_reactSuperResponsiveTable.Td,
								null,
								'1'
							),
							_react2['default'].createElement(
								_reactSuperResponsiveTable.Td,
								null,
								'1987'
							),
							_react2['default'].createElement(
								_reactSuperResponsiveTable.Td,
								null,
								'Birmingham (Organizational Meeting)'
							),
							_react2['default'].createElement(
								_reactSuperResponsiveTable.Td,
								null,
								'Ms. Kay Staub, The University of Alabama (Convener)'
							),
							_react2['default'].createElement(
								_reactSuperResponsiveTable.Td,
								null,
								'Dr. Gerald S. Leischuck, Auburn University'
							),
							_react2['default'].createElement(
								_reactSuperResponsiveTable.Td,
								null,
								'Strategic Planning and Outcomes Assessment'
							)
						)
					)
				)
			);
		}
	}]);

	return App;
})(_react2['default'].Component);

_reactDom2['default'].render(_react2['default'].createElement(App, null), document.getElementById('app'));

},{"react":undefined,"react-dom":undefined,"react-super-responsive-table":undefined}]},{},[1]);

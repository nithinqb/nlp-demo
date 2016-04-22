/** @jsx React.DOM */

var React = require('react/addons');
var ds = require('../../datastore');

/* create factory with griddle component */
var Griddle = React.createFactory(require('griddle-react'));

var fakeData = require('../data/fakeData.js').fakeData;
var columnMeta = require('../data/columnMeta.js').columnMeta;
var resultsPerPage = 200;

var ReactApp = React.createClass({

      componentDidMount: function () {
        console.log(fakeData);

      },
      render: function () {
        return (
          <div id="table-area">
          <h1>{ds.data}</h1>

          </div>
        )
      }
  });

/* Module.exports instead of normal dom mounting */
module.exports = ReactApp;
var React = require('react/addons');
var rp = require('request-promise');
var ds = require('../../datastore');
var sv = require('../services/index.js')();
var ReactApp = React.createFactory(require('../components/ReactApp'));  

module.exports = function(app) {

	app.get('/', function(req, res){
        sv.fetchMockData('orig').then(function(){
            console.log('AAAAAAAAAAAAAAAAAAAAAA')
                // React.renderToString takes your component
            // and generates the markup
            var reactHtml = React.renderToString(ReactApp({}));
                // sv.fetchMockData().then(function(){
                //      reactHtml= React.renderToString(ReactApp({}));
                // })
                // console.log('$$$$',reactHtml)
            // Output html rendered by react
                // console.log(myAppHtml);
            res.render('index.ejs', {reactOutput: reactHtml});            
        })
	});
    
    app.get('/next', function(req, res){
        sv.fetchMockData('dup').then(function() {
            console.log('BBBBBBBBBBBBBBBBBBBBBBB')
                // React.renderToString takes your component
            // and generates the markup
            var reactHtml = React.renderToString(ReactApp({}));
                // sv.fetchMockData().then(function(){
                //      reactHtml= React.renderToString(ReactApp({}));
                // })
                // console.log('$$$$',reactHtml)
            // Output html rendered by react
                // console.log(myAppHtml);
            res.render('index.ejs', {reactOutput: reactHtml});            
        })
	});

};

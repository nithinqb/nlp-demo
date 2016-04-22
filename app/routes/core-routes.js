var React = require('react/addons');
var sv = require('../../services/index.js')();
var ReactApp = React.createFactory(require('../components/ReactApp'));  

module.exports = function(app) {

	app.get('/', function(req, res){
        sv.fetchMockData('orig').then(function(){
            // React.renderToString takes your component
            // and generates the markup
            var reactHtml = React.renderToString(ReactApp({}));
            // Output html rendered by react
            res.render('index.ejs', {reactOutput: reactHtml});            
        })
	});
    
    app.get('/next', function(req, res){
        sv.fetchMockData('dup').then(function() {
            // React.renderToString takes your component
            // and generates the markup
            var reactHtml = React.renderToString(ReactApp({}));
            // Output html rendered by react
            res.render('index.ejs', {reactOutput: reactHtml});            
        })
	});

};

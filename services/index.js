'use strict';

var rp = require('request-promise');
var ds = require('../datastore.js')

module.exports = function() {


function fetchMockData(t){
    if(t=='orig'){
            return rp.get('http://10.4.0.48:3000/mock_data').then(function(res){
            ds.data = res;      
            return ds.data;
        }) 
    }
    else {
        return rp.get('http://10.4.0.48:3000/').then(function(res){
            ds.data = res;       
            return ds.data;
        })
    }
}

  return {
    fetchMockData: fetchMockData
  };
};



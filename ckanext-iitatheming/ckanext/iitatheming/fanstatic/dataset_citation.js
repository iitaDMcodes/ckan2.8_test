// Enable JavaScript's strict mode. Strict mode catches some common
// programming errors and throws exceptions, prevents some unsafe actions from
// being taken, and disables some confusing and bad JavaScript features.
"use strict";

var doi_link = $('#Identifier').text();
var doi_link_components = doi_link.split("doi.org/");
var doi = doi_link_components[1];

var datacite_doi_citation_url = "https://data.datacite.org/text/x-bibliography;style=apa/" + doi;

$.ajax({     
	  headers: {
	    "Content-Type": "text/plain; charset=utf-8"        
	  },
	  type: "GET",
	  url: datacite_doi_citation_url,    
	  success : function(response) { 
	  	console.log(response) 
	  	$('#citation').append(response);
	  }
	});

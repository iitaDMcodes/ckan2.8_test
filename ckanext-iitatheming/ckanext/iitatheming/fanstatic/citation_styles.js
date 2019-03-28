// Enable JavaScript's strict mode. Strict mode catches some common
// programming errors and throws exceptions, prevents some unsafe actions from
// being taken, and disables some confusing and bad JavaScript features.
"use strict";

/* use jquery to trigger change event of citation style
	and display the selected citation.
*/
 
$('#citation-style').change(
	function()
	{
		// Get selected citation style into @var citation_style
		var citation_style = $('#citation-style').find(':selected').attr('data-citation-style');
		
		// Get dataset doi link into @var doi_link
		var doi_link = $('#Identifier').text();
		
		// Split doi link to into link and doi
		var doi_link_components = doi_link.split("doi.org/");
		
		// Get doi into @var doi	
		var doi = doi_link_components[1];
		
		// join citation style and doi to datacite citation link
		var datacite_doi_citation_url = "https://data.datacite.org/text/x-bibliography;style=" + citation_style + "/" + doi;
	
		// Use ajax to get citation from @var datacite_doi_citation_url
		$.ajax({     
			  headers: {          
			    "Content-Type": "text/plain; charset=utf-8"        
			  },
			  type: "GET",
			  url: datacite_doi_citation_url,    
			  success : function(response) { 
			  	console.log(response);
			  	$('#citation').html(response);
			  }
			});
	}
)
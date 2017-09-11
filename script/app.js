console.log("salut toi !");


// ---------------------------------- utilisation -----------------------------

// $.getJSON("http://cors.io/spreadsheets.google.com/feeds/list/2PACX-1vRPVDAiIAHzlFZr-RK7fvernciK512b3kHNhTb_Fyc_vT29pQnzNl2i4BAKkasVf4iTQqnkHD1_GW5G/od6/public/values?alt=json",
// 	function(data) {
//   //first row "title" column
//   console.log(data.feed.entry[0]['gsx$title']['$t']);
// });
// https://docs.google.com/spreadsheets/d/e/2PACX-1vRPVDAiIAHzlFZr-RK7fvernciK512b3kHNhTb_Fyc_vT29pQnzNl2i4BAKkasVf4iTQqnkHD1_GW5G/pubhtml

// En JSON:
// https://spreadsheets.google.com/feeds/list/[MA-CLE]/od6/public/values?alt=json

// https://spreadsheets.google.com/feeds/list/2PACX-1vRPVDAiIAHzlFZr-RK7fvernciK512b3kHNhTb_Fyc_vT29pQnzNl2i4BAKkasVf4iTQqnkHD1_GW5G/od6/public/values?alt=json


// ------------------------------------



// ID of the Google Spreadsheet
var spreadsheetID = "1-oYlvGP573O4ml4AzgapLhK_KoEqlfDIzvSnWz48_nQ";

// Make sure it is public or set to Anyone with link can view 
var urlJson = "http://spreadsheets.google.com/feeds/list/" + spreadsheetID + "/od6/public/values?alt=json";


$(document).ready(function(){

// ---------------------------------------- requete ajax --------------------------------------------------------
	
		$.ajax({  
			dataType: 'json',
			url: urlJson,
	
			success:function(data){

// ----------------------------------------- clic du mélange ----------------------------------------------------
	
				$('#melange').click(function(){ 

// --------------------------------------------- boucle ---------------------------------------------------------
	
					shuffle(data.feed.entry);
					console.log(data.feed.entry);
					for(var i = 0; i < 15; i++){  
	
// ----------------------------------------- entrées des données ------------------------------------------------ 

						$('#aprenant' + i).html(data.feed.entry[i].title.$t + "<br>" + '<img class="photo-profil" src="' + data.feed.entry[i].gsx$url.$t + '"/>' );
	
					}
	
				});
			},
	
// ------------------------------------------- renvoi d'erreur --------------------------------------------------

			error:function(){
				$('#message-erreur').html(" il doit il y avoir une erreur");
			}
	
		});
	

// ----------------------------------------- mélange aleatoire --------------------------------------------------


		function shuffle(array) { 
			var j, x, i;
			for (i = array.length; i; i--) {
				j = Math.floor(Math.random() * i);
				x = array[i - 1];
				array[i - 1] = array[j];
				array[j] = x;
			}
		};
	

	});

//	--------------------------------------------- console de test -----------------------------------------------

// console.log(urlJson);

 // $.getJSON(url, function(data) {

 //  var entry = data.feed.entry;

 //  $(entry).each(function(){
 //    // Column names are name, age, etc.
 //    $('.results').prepend('<h2>'+this.gsx$name.$t+'</h2><p>'+this.gsx$age.$t+'</p>');
 //  });

 // });


//main

var a = {

	showArr : function(){console.log(d)},
	
	
	iter: function(arr, elem, wht){
		$.each(arr, function(i,v){
			a.buildUI(i,v,elem,wht);
		})
	},
	buildQ : function(){
		var arr = d.philipsdata.valuespace[0].datasource;
		//console.log(d.philipsdata.valuespace[1].datasource);
		a.iter(arr, ".vis", "q");
	},
	buildUI : function(i,v,elem,wht){
		
		switch(wht){
			case "q":
				a.build_question(i,v,elem,wht);
			break;
			case "a":
				a.build_aspekt(i,v,elem,wht);
				//alert("in aspect")
			break;
			case "p":
				a.build_topic(i,v,elem,wht);
			break;
		
		}
	},


	build_question : function(i,v,elem,wht){
		a.build_question_ul(i,v,elem);
		a.build_question_cnt(i,v,elem);
	},
		build_question_ul : function(i,v,elem){
			$('<li><a href="#tabs-'+(i+1)+'">'+v.name+'</a></li>').appendTo(".tbs");
		},
		build_question_cnt : function(i,v,elem){
			$('<div id="tabs-'+(i+1)+'"><div class="accordion acc_'+(i+1)+'"></div></div>').appendTo(elem);
			var cls = ".acc_"+(i+1);
			a.iter(d.philipsdata.valuespace[0].datasource[i].overview, cls, "a");
			//need to iter through d.philipsdata.valuespace[0].datasource[i] and build accordion (.acc) and create new accordion
		},
	build_aspekt : function(j,v,elem,wht){
		a.build_section_h(j,v,elem);
		a.build_section_cnt(j,v,elem);
	},
		build_section_h : function(j,v,elem){

				$('<h3><a href="#">'+v.name+'</a></h3>').appendTo(elem);
		},
		build_section_cnt : function(j,v,elem){
				$('<div class="aspect_'+(j+1)+'"></div>').appendTo(elem);
				var cls = ".aspect_"+(j+1);
				//alert(j);
				a.iter(d.philipsdata.valuespace[0].datasource[j].overview[j].operator, cls, "p");
				
		},
	//build topic
	build_topic : function(i,v,elem){
		console.log("in topic");
		console.log(v.name);
		console.log(elem);
		$('<div class="topic_'+(i+1)+'">'+v.name+'</div>').appendTo(elem);

	}	
	
	
}
//iter
//build aspekts
//build questions

//filter
	//chosen 4 countries
	//region or country
	
//build data
	//by country
	//by region





$(document).ready(function(){
		
		a.showArr();
		a.buildQ();
		$( ".accordion" ).accordion();
		$( ".vis" ).tabs();
		$( "#tabs" ).tabs();
		


		
	
	})
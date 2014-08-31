/**
	*Author: Frederico Luis Figueira
	*Email: frederico05.figueira@gmail.com
	*Date: 31/08/1993
*/
$(document).ready(function(){
		$(".speaker-link-block").mouseover(function(){
			$(this).find(".speakers-name").hide();
		});
});

$(document).ready(function(){
		$(".speaker-link-block").mouseout(function(){
			$(this).find(".speakers-name").show("slow");
		});
});
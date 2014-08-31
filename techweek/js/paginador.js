/**
	*Author: Frederico Luis Figueira
	*Email: frederico05.figueira@gmail.com
	*Date: 31/08/1993
*/

var pag_atual = "#pag_segunda";

$(document).ready(function(){
	$(".dias").on("click", function(){
		$(".dias").each(function(){
			$("#"+$(this).data("pag")).addClass("hide");
			if($(this).hasClass("daySelected")){
				$(this).removeClass("daySelected");
			}
		});
		pag_atual = "#"+$(this).data("pag");
		$(this).addClass("daySelected");
		$("#"+$(this).data("pag")).removeClass("hide");
	});
});

$(document).ready(function(){
	$("#first").on("click", function(){
		switch(pag_atual){
			case "#pag_segunda":
				break;
			case "#pag_terca":
					$("a.dias[data-pag='pag_terca']").removeClass("daySelected");
					$(pag_atual).addClass("hide");
					$("a.dias[data-pag='pag_segunda']").addClass("daySelected");
					$("#pag_segunda").removeClass("hide");
					pag_atual = "#pag_segunda";
				break;

			case "#pag_quarta":
					$("a.dias[data-pag='pag_quarta']").removeClass("daySelected");
					$(pag_atual).addClass("hide");
					$("a.dias[data-pag='pag_terca']").addClass("daySelected");
					$("#pag_terca").removeClass("hide");
					pag_atual = "#pag_terca";
				break;

			case "#pag_quinta":
					$("a.dias[data-pag='pag_quinta']").removeClass("daySelected");
					$(pag_atual).addClass("hide");
					$("a.dias[data-pag='pag_quarta']").addClass("daySelected");
					$("#pag_quarta").removeClass("hide");
					pag_atual = "#pag_quarta";
				break;

			case "#pag_sexta":
					$("a.dias[data-pag='pag_sexta']").removeClass("daySelected");
					$(pag_atual).addClass("hide");
					$("a.dias[data-pag='pag_quinta']").addClass("daySelected");
					$("#pag_quinta").removeClass("hide");
					pag_atual = "#pag_quinta";
				break;
		}
	});
});

$(document).ready(function(){
	$("#last").on("click", function(){
		switch(pag_atual){
			case "#pag_segunda":
					$("a.dias[data-pag='pag_segunda']").removeClass("daySelected");
					$(pag_atual).addClass("hide");
					$("a.dias[data-pag='pag_terca']").addClass("daySelected");
					$("#pag_terca").removeClass("hide");
					pag_atual = "#pag_terca";
				break;
			case "#pag_terca":
					$("a.dias[data-pag='pag_terca']").removeClass("daySelected");
					$(pag_atual).addClass("hide");
					$("a.dias[data-pag='pag_quarta']").addClass("daySelected");
					$("#pag_quarta").removeClass("hide");
					pag_atual = "#pag_quarta";
				break;

			case "#pag_quarta":
					$("a.dias[data-pag='pag_quarta']").removeClass("daySelected");
					$(pag_atual).addClass("hide");
					$("a.dias[data-pag='pag_quinta']").addClass("daySelected");
					$("#pag_quinta").removeClass("hide");
					pag_atual = "#pag_quinta";
				break;

			case "#pag_quinta":
					$("a.dias[data-pag='pag_quinta']").removeClass("daySelected");
					$(pag_atual).addClass("hide");
					$("a.dias[data-pag='pag_sexta']").addClass("daySelected");
					$("#pag_sexta").removeClass("hide");
					pag_atual = "#pag_sexta";
				break;

			case "#pag_sexta":
				break;
		}
	});
});
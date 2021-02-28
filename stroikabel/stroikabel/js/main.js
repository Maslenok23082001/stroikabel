$(document).ready(function(){
	window.left = 0;
	$("#left_strel").click(function(e){
		
		if (window.left == 0) {
			$("#polosa").animate({
				"margin-left" : "0"
			}, 1000);

		}
		else {
			$("#polosa").animate({
				"margin-left" : (window.left + 1583)
			}, 1000);
			window.left += 1583;
		}
		if (window.left == 0) {


		}
	});
	$("#right_strel").click(function(e){
		if (window.left >= -1583) {
			$("#polosa").animate({
				"margin-left" : ((window.left-1583)+"px")
			}, 1000);
			window.left -= 1583;
		}
		else {
			
			$("#polosa").animate({
				"margin-left" : "-3166px"
			}, 1000);
		}
	});
	$(".streloch").click(function(e){
		if (window.left == 0) {
			$(".dot").css({
				"background-color" : "#ffffff"
			});
			$(".dot.one").css({
				"background-color" : "#0014ff"
			});
		}
		else if (window.left == -1583) {
			$(".dot").css({
				"background-color" : "#ffffff"
			});
			$(".dot.two").css({
				"background-color" : "#0014ff"
			});	
		}
		else {
			$(".dot").css({
				"background-color" : "#ffffff"
			});
			$(".dot.three").css({
				"background-color" : "#0014ff"
			});	
		}
	});

	var leftClients = 0;
	$("#arr").click(
		function(e){
			if (leftClients == -603) {
				$("#polosa_friends")
				.animate({
					"margin-left" : 0
				}, 
				{
					duration : 400,
					easing : "swing"
				}
				);	
				leftClients = 0;
			}
			else {
				$("#polosa_friends")
				.animate({
					"margin-left" : (leftClients - 201)+"px"
				}, 
				{
					duration : 400,
					easing : "swing"
				}
				);
				leftClients -= 201;

			}

	});
	$("#arl").click(
		function(e){
			if (leftClients == 0) {
				$("#polosa_friends")
				.animate({
					"margin-left" : "-603px"
				}, 
				{
					duration : 400,
					easing : "swing"
				}
				);	
				leftClients = -603;
			}
			else {
				$("#polosa_friends")
				.animate({
					"margin-left" : (leftClients + 201)+"px"
				}, 
				{
					duration : 400,
					easing : "swing"
				}
				);
				leftClients += 201;

			}

	});
});









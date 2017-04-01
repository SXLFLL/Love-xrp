$(document).ready(function(e) {
	time=setInterval("$.change()",3000);

	t=1;
	$("#t-"+t).fadeIn();
	$.change=function(){
		t++;
		if (t<=$(".title").length) {
		$(".title").slideUp(1500).fadeOut();
		$("#t-"+t).slideDown(1500).fadeIn();

		}else{
			window.location="content.html";
		}
	}
});
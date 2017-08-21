$(document).ready(function() {
	$(".container li").each(function(index, el) {
		$(this).mouseover(function(event) {
			$(this).addClass('active').siblings('li').removeClass('active');
		});
	});
	
	
	
	
$(".ul>li").click(function(){
		$("#box").show();
	});	
	
	$(".closed img").click(function(){
		$("#box").hide();
	});
	
});
		
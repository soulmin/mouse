$(document).ready(function(){
	$(".first_li").mouseover(function(){
		$(this).css({
			'background':'#FFD700'
		});
		$(this).children('ul').css({
			'display':'block',
		});
	});
	$(".first_li").mouseout(function(){
		$(this).removeAttr("style")
		$(this).children('ul').removeAttr("style")
	});
	
	$(".second li").mouseover(function(){
		$(this).css({
			'background':'#00FA9A'
		});
		$(this).children('ul').css({
			'display':'block',
		});
	});
	$(".second li").mouseout(function(){
		$(this).removeAttr("style");
		$(this).children('ul').removeAttr("style");
	});
	$(".third_li").mouseover(function(){
		$(this).css({
			'background':'#BA55D3'
		});
	});
});


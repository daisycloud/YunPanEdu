define(['zepto'], function ($){
 
 var Layer = {
 	show: function($root){
 		var width =  $('body').width();
 		var height =  $('body').height();

 		$root.show();

 		var $dom = $root.find('.box');
 		var dom_w = $dom.width();
 		var dom_h = $dom.height();
 		var $mask = $root.find('.mask');
 		var $close = $root.find('.close');
 		$dom.css({'left': (width - dom_w) / 2 + 'px', 'top': (height - dom_h) / 2 + 'px'});

 		$mask.bind('click', function(e){ $root.hide();});
 		$close.bind('click', function(e){ $root.hide();})

 	}
 }

return {
		fn: Layer
　　　　}
});
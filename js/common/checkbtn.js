define(['zepto'], function ($){
	
	var hoverEv = 'ontouchstart' in window ? 'touchstart' : 'mouseover'
	 var checkBtn = function(opt, callback) {
      var $root = (opt || {}).$root;


      if(!$root.length) return;

       var item = $root.find('span');

       $root.bind('click', function(e){
            var $item = $(e.target);
            if($item.hasClass('on'))
                return;
            
            $item.siblings().removeClass('on');
            $item.addClass('on');

            $(this).attr('data-name',$item.attr('name'))


       })

     
    }


return {set:checkBtn }
});
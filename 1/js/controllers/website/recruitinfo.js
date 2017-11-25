require.config({
baseUrl:"../js/common",
paths: { 
    "zepto":  "jquery",
    "Layer":'layerCommon',
    "checkbtn":'checkbtn',
},
shim: {
　　'zepto':{
　　　 exports: 'jQuery'
　　},
    
}
});

require(['zepto','Layer','checkbtn'],function ($,Layer,checkbtn) {
   
   $('.js-online').bind('click', function(){
        Layer.fn.show($('.recr-onliine-layer'));
   })

   //性别切换
   checkbtn.set( {$root:$('.sex-check')})
   

  
    
});




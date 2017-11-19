require.config({
baseUrl:"../js/common",
paths: { 
    "zepto":  "jquery",
    "Layer":'layerCommon',
},
shim: {
　　'zepto':{
　　　 exports: 'jQuery'
　　},
    
}
});

require(['zepto','Layer'],function ($,Layer) {
   
   $('.js-online').bind('click', function(){
        Layer.fn.show($('.recr-onliine-layer'));
   })
   

  
    
});




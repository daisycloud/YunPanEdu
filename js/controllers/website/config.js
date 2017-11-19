define(function(){
    require.config({
        baseUrl: '../../common/',
           　paths: {
　　　　　　"zepto":  "zepto.min",
            "swiper": "swiper-3.4.2.jquery.min",
　　　　},
　　   shim: {
　　　　　　'zepto':{
　　　　　　　　exports: '$'
　　　　　　},
　　　　}
　　});
});

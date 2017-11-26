require.config({
baseUrl:"../js/common",
paths: { 
    "zepto":  "jquery",
},
shim: {
　　'zepto':{
　　　 exports: 'jQuery'
　　},
}
});

require(['zepto'],function ($) {
    var Tab = {
        init: function(){
            var This = this;

            this.$title = $('.tab-t');
            this.$cont = this.$title.next('.tab-cont');

            this.$t_li = this.$title.find('li');
            this.$cont_li = this.$cont.find('ul');
           
            this.$cont_li.siblings().hide();
            this.$t_li.eq(0).addClass('active');
            this.$cont_li.eq(0).show();

            this.$t_li.bind('click', function(e){ This.switch(e)})
        },
        switch: function(e){
         var $tar = $(e.currentTarget);
         var ind = $tar.index();
         var _cls = 'active';
         var $con = this.$cont_li.eq(ind);

         if($tar.hasClass(_cls))
            return;

         $tar.siblings().removeClass(_cls);
         $tar.addClass(_cls);

         $con.siblings().hide();
         $con.show()

        }
    }

   
if($('.tab-t')){
    Tab.init();
}



    
    
    
});




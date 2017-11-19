require.config({
baseUrl:"../js/common",
paths: { 
    "zepto":  "zepto.min",
    "swiper":"swiper-3.4.2.jquery.min",
    "swipeSlide":'swipeSlide'
},
shim: {
　　'zepto':{
　　　 exports: 'Zepto'
　　},
    'swipeSlide':{
        deps: ['zepto'],
    　　exports: 'swipeSlide'
    　},
}
});

require(['zepto','swipeSlide'],function ($,swipeSlide) {
    var BubbleLayer = {
        init: function(){
            this.$root = $('.js-bubble');
            this.$mask = this.$root.parent().find('.mask');
            this.$mask.bind('click', function(e){ $(e.currentTarget).parent().hide();})
        },
        show: function(){
            this.$root.show();
        }

    };

    var Swipe = {
        init: function(){
            var $root = this.$root = $('.b-swipe-img'),
             $imgs = $root.find('ul'),
             $btn = $root.find('.dot'),
             imgHtml = '',
             dotHtml = '',
             data = [
                {img:'../images/banner1.jpg', url:'#'},
                {img:'../images/banner2.jpg', url:'#'},
                {img:'../images/banner3.jpg', url:'#'}
            ]
            ;

            if(!data.length)
                return;

            $.each(data, function(index,item){
                imgHtml += ' <li><a href="'+ item.url  +'" target="_blank"><img src="'+item.img+'"/> </a></li>';
                dotHtml += ' <span></span>';
            });

            $imgs.html(imgHtml);
            $btn.html(dotHtml);

            this.show();
        },
        show: function () {
            try {
                this.$root.css('height', $('.b-swipe-img').width() / 2.225);
                var imgSwipe = this.$root.swipeSlide({//轮播图Swipe
                    continuousScroll: true,
                    lazyLoad: true,
                    firstCallback: function (i, sum, me) {
                        me.find('.dot').children().first().addClass('curr');
                    },
                    callback: function (i, sum, me) {
                        me.find('.dot').children().eq(i).addClass('curr').siblings().removeClass('curr');
                    }
                });
            } catch (e) {
                console.error(e);
            }
        },
        resize: function(){
            var scale = 640 / 240;
            var windowW = $('body').width();
            this.$root.css('height', this.$root.width() / scale);

        },
    }

    //初始化轮播图
    Swipe.init();

    BubbleLayer.init();

    //Events
    $('.js-msg').bind('click', function(){
        BubbleLayer.show();
    })
    
});




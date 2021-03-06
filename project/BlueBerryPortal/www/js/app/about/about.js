require([], function() {
    require([
        "jquery",
        "bootstrap_affix",
        "plugins/elevator.min",
        "jqurl",
        "app/public/header-footer"
    ], function($, _, categoryView, listView, common) {

        // 左侧菜单栏交互
        (function(){
            // sidebar fixed
            $("#js-lists").affix({
                offset: {
                    top: 382
                }
            });

            $("#js-lists").on({
                "affixed.bs.affix": function() {
                    $("#js-slidead").hide();
                },

                "affixed-top.bs.affix": function(){
                    $("#js-slidead").show();
                }
            });
        })();

    	// 返回顶部
        var elevator = new Elevator({
            element: document.querySelector('#back-to-top'),
            duration: 800 // milliseconds
        });

    });
});

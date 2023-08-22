// 浏览器搞笑标题
var OriginTitle = document.title;
var titleTime;
document.addEventListener('visibilitychange', function () {
    if (document.hidden) {
        $('[rel="icon"]').attr('href', "/images/icons/16.png");
        document.title = '╭(°A°`)╮ 页面崩溃啦快回来呜呜呜呜 ~';
        clearTimeout(titleTime);
    }
    else {
        $('[rel="icon"]').attr('href', "//images/icons/16.png");
        document.title = '(ฅ>ω<*ฅ) 嘿嘿嘿又好啦 ~' + OriginTitle;
        titleTime = setTimeout(function () {
            document.title = OriginTitle;
        }, 2000);
    }
});

$(function () {
    $('#dowebok').fullpage({
        sectionsColor: ['rgb(33,35,37)', '#fff', 'rgb(33,35,37)', '#fff'],
        anchors: ['page0', 'page1', 'page2', 'page3'],
        menu: '#menu',
        verticalCentered: false,
        scrollingSpeed: 1000,

        // 滚动到某一屏后的回调函数
        afterLoad: function (anchorLink, index) {
            // 获取到页面的索引号
            var data = $('.active').data('menuanchor');
            data = data.substr(4)
            //  导航栏的li 添加类
            $('#menu li').eq(data).addClass('listyle').siblings().removeClass('listyle')
            // 如果data == 0 就 调用第一屏的动画
            if (data == 0) {
                $('.name').addClass('names')
                $('.tx img').addClass('amn')
                $('.amo').addClass('amo1')
                $('.work').addClass('workamn')
                $('.line').addClass('lineamn')
                $('.experience .experiences').addClass('experienceamn')
            } else {
                $('.name').removeClass('names')
                $('.tx img').removeClass('amn')
                $('.amo').removeClass('amo1')
                $('.work').removeClass('workamn')
                $('.line').removeClass('lineamn')
                $('.experience .experiences').removeClass('experienceamn')
            }
            // 如果data == 1 就 调用第二屏的动画
            if (data == 1) {
                $('.skills').addClass('skillsman')
                $('.skillsall').addClass('skillsallamn')
                $('.section2 p').addClass('pamn')
            } else {
                $('.skills').removeClass('skillsman')
                $('.skillsall').removeClass('skillsallamn')
                $('.section2 p').removeClass('pamn')
            }
            if (data == 2) {
                $('.case').addClass('caseamn')
                $('.works').addClass('worksamn')
            } else {
                $('.case').removeClass('caseamn')
                $('.works').removeClass('worksamn')
            }
            if (data == 3) {
                $('.section4').addClass('section4amn')
            } else {
                $('.section4').removeClass('section4amn')
            }
        },
        onLeave: function (nextIndex, direction) {
            var data = direction.anchor
            data = parseInt(data.substr(4))
            // 如果data == 0 就 调用第一屏的动画
            if (data == 0) {
                $('.name').addClass('names')
                $('.tx img').addClass('amn')
                $('.amo').addClass('amo1')
                $('.work').addClass('workamn')
                $('.line').addClass('lineamn')
                $('.experience .experiences').addClass('experienceamn')
            }
            // 如果data == 1 就 调用第二屏的动画
            if (data == 1) {
                $('.skills').addClass('skillsman')
                $('.skillsall').addClass('skillsallamn')
                $('.section2 p').addClass('pamn')
            }
            if (data == 2) {
                $('.case').addClass('caseamn')
                $('.works').addClass('worksamn')
            }
            if (data == 3) {
                $('.section4').addClass('section4amn')
            }
            if (data <= 5) {
                $('.amo').addClass('amo1')
            }
        }


    });
    // 点击 导航栏的a 就给li 添加类 其他的去掉类
    $('#menu li a').click(function () {
        $(this).parent().addClass('listyle').siblings().removeClass('listyle')
    })
    // 禁止图片拖拽
    function imgdragstart() { return false; }
    for (i in document.images) document.images[i].ondragstart = imgdragstart;
    // 禁止鼠标右键
    document.oncontextmenu = new Function("event.returnValue=false;");
    $('.works li').mouseover(function () {
        $(this).children().stop().animate({
            bottom: 0
        })
    })
    $('.works li').mouseout(function () {
        $(this).children().stop().animate({
            bottom: -50
        })
    })
});
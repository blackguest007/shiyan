// 等待页面加载完毕之后才执行 JS 代码
window.addEventListener('load', function() {
    // // 设置跟随鼠标的天使特效
    // var pic = document.querySelector('.angel');
    // document.addEventListener('mousemove', function(e) {
    //     // 1. mousemove只要我们鼠标移动1px 就会触发这个事件
    //     // console.log(1);
    //     // 2.核心原理： 每次鼠标移动，我们都会获得最新的鼠标坐标， 把这个x和y坐标做为图片的top和left 值就可以移动图片
    //     var x = e.pageX;
    //     var y = e.pageY;
    //     console.log('x坐标是' + x, 'y坐标是' + y);
    //     //3 . 千万不要忘记给left 和top 添加px 单位
    //     pic.style.left = x - 50 + 'px';
    //     pic.style.top = y - 40 + 'px';
    // });
    // //  鼠标经过 .focus 之后就取消鼠标天使事件的特效
    var timer = setInterval(function() {
        lunbo_r.click(); //  手动调用，没隔 2.5s 执行

    }, 2200)
    var angel = document.queryCommandIndeterm('.angel')
        //  下面开始设计筋斗云案例
    var cloud = document.querySelector('.cloud')
    var cloud1 = document.querySelector('.cloud1')
    var cloud_li_list = cloud1.querySelectorAll('li')
    var cloud_li_location = cloud_li_list[0].offsetLeft
    for (i = 0; i < cloud_li_list.length; i++) { // 给每一个 li 绑定事件
        cloud_li_list[i].addEventListener('mouseenter', function() {
            animate(cloud, this.offsetLeft)
        })
        cloud_li_list[i].addEventListener('mouseleave', function() {
            animate(cloud, cloud_li_location) // 这里 offsetLeft 标准是以浏览器作为标准的，因为其父亲没有给定位
        })
        cloud_li_list[i].addEventListener('click', function() { //  这里设置鼠标点击 li 的时候，将 li 的位置进行存储，因此需要一个变量
            cloud_li_location = this.offsetLeft

        })
    }
    console.log(cloud_li_list.length)
        //  筋斗云案例设计结束
    var focus = document.querySelector('.focus')
    var lunbo_l = document.querySelector('.lunbo_l')
    var lunbo_r = document.querySelector('.lunbo_r')
    focus.addEventListener('mouseenter', function() {
        lunbo_l.style.display = 'block'
        lunbo_r.style.display = 'block'
        clearInterval(timer); //  鼠标进入 focus 之后停止计时器，停止页面的移动
        timer = null;


    })
    focus.addEventListener('mouseleave', function() {
        lunbo_l.style.display = 'none';
        lunbo_r.style.display = 'none';
        timer = setInterval(function() {
            lunbo_r.click(); //  手动调用，没隔 2s 执行

        }, 2200)

    })
    var ul = focus.querySelector('ul')
    var ol = focus.querySelector('.circle')
    ul.addEventListener('mouseenter', function() {
        ol.style.display = 'block'
    })
    ol.addEventListener('mouseenter', function() {
        ol.style.display = 'block'
    })
    lunbo_l.addEventListener('mouseenter', function() {
        ol.style.display = 'block'
    })
    lunbo_r.addEventListener('mouseenter', function() {
        ol.style.display = 'block'
    })
    ul.addEventListener('mouseleave', function() {
        ol.style.display = 'none'
    })

    for (var i = 0; i < ul.children.length; i++) {
        var li = document.createElement('li')
            //  首先生成小圆圈，然后在将小圆圈添加到 ul 里面去
        li.setAttribute('index', i) // 给新添加的 li 设置索引值属性
        ol.appendChild(li); //  将新创建的 li 添加到 ul 里面去
        ol.children[i].className = 'current1'
        li.addEventListener('click', function() {
            for (var i = 0; i < ol.children.length; i++) { //  排它思想的体现，先排除所有，然后在设置自己
                ol.children[i].className = 'current1'
            }
            this.className = 'current0';
            var focus_width = focus.offsetWidth;
            var index = this.getAttribute('index');
            m = index // 这里这个写法一定要理解；原因是左右轮播图移动按钮的那个变量是 m 而小圆圈的那个变量是 circle 去控制的；务必理解
            circle = index //  这里原理跟上面都是一样的
            animate(ul, -index * ul.children[0].offsetWidth);
        })
    }
    ol.children[0].className = 'current0';
    var m = 0; // 尽管 m=0 是在这下面， m = index 是在最上面；但是由于这里是 var 定义了一个变量，因此它在实际执行过程中是优先执行的
    var circle = 0; //  circle 这个变量是用来控制小圆点与轮播图动态变化的

    //  下满将进行克隆 ul 里面的第一个 li，然后追加到 ul 里面去
    var ul_first_chirld = ul.children[0].cloneNode(true)
        //  这里克隆小圆圈一定要写到生成小圆圈代码的下面，如果你写到生成小圆圈的前面的话，那么小圆圈的个数将会受克隆的小圆圈的影响而增多
    ul.appendChild(ul_first_chirld);
    lunbo_r.addEventListener('click', function() {
            //  利用节流阀的思路将 falg 的值调整为 false ，这样下次点击的时候就不会触发这个按钮
            //  这里采用无缝滚动来设置轮播图特效,如果轮播图走到最后的那张复制的图之后执行
            if (m == ul.children.length - 1) {
                ul.style.left = 0 + 'px';
                m = 0;
            }
            m++;
            animate(ul, -m * ul.children[0].offsetWidth);
            circle++;
            if (circle == ol.children.length) { circle = 0; }
            //  下面将对小圆圈进行排它思想处理；circle 是用来设置红色的
            for (i = 0; i < ol.children.length; i++) {
                ol.children[i].className = 'current1'
            }
            ol.children[circle].className = 'current0';



        })
        //  下面将设置左边的按钮的轮廓图功能
    lunbo_l.addEventListener('click', function() {

        //  这里采用无缝滚动来设置轮播图特效,如果轮播图走到最后的那张复制的图之后执行
        if (m == 0) {
            m = ul.children.length - 1;
            ul.style.left = -m * ol.children[0].length + 'px' //  -m 代表向左移动
        }
        m--;
        animate(ul, -m * ul.children[0].offsetWidth);
        circle--;
        if (circle < 0) { circle = ol.children.length - 1; }
        //  下面将对小圆圈进行排它思想处理；circle 是用来设置红色的
        for (i = 0; i < ol.children.length; i++) {
            ol.children[i].className = 'current1'
        }
        ol.children[circle].className = 'current0';

    })


    // 下面将模仿淘宝侧边栏来写一个返回顶部的按钮
    var slider_bar = document.querySelector('.slider-bar')
    var goBack = document.querySelector('.goBack')
    var banner1 = document.querySelector('.banner1')
    var banner1_top = banner1.offsetTop
    document.addEventListener('scroll', function() {
        if (window.pageYOffset >= 900) {
            slider_bar.style.position = 'fixed';
            // slider_bar.style.top = 900 + 'px';
            slider_bar.style.display = 'block'

        } else if (window.pageYOffset <= 900) {
            slider_bar.style.position = 'absolute';
            slider_bar.style.display = 'none'

        }
    })
    goBack.addEventListener('click', function() {
        // scroll(0, 0);
        animate_top(window, 0);
    })
})
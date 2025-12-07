"use strict"

// メニュー開閉の制御
// ryoma.online参照gsap
const trigger = document.querySelector('.menu-trigger');
const menu = document.querySelector('.circle-menu');
const menuItems = document.querySelectorAll('.circle-menu a');
let isOpen = false;

trigger.addEventListener('click', function () {
    isOpen = !isOpen;

    if (isOpen) {
        trigger.classList.add('active');
        menu.classList.add('active');

        // clip-pathアニメーション（必ず0から始める）
        gsap.fromTo(menu,
            { clipPath: "circle(0px at calc(100% - 50px) 50px)" },
            { duration: 0.6, clipPath: "circle(150% at calc(100% - 50px) 50px)", ease: "power2.inOut" }
        );

        // メニュー項目をフェードイン
        gsap.to(menuItems, {
            duration: 0.5,
            opacity: 1,
            y: 0,
            stagger: 0.1,
            delay: 0.3
        });

    } else {
        trigger.classList.remove('active');

        // メニュー項目をフェードアウト
        gsap.to(menuItems, {
            duration: 0.3,
            opacity: 0,
            y: 20
        });

        // clip-pathアニメーション
        gsap.to(menu, {
            duration: 0.6,
            clipPath: "circle(0px at calc(100% - 50px) 50px)",
            ease: "power2.inOut",
            delay: 0.2,
            onComplete: function () {
                menu.classList.remove('active');
            }
        });
    }
});


// jqueryのエフェクト

$(function () {

    $(window).on("scroll", function () {
        let header = $("header");
        if ($(this).scrollTop() > 0) {
            header.addClass("scrolled");
        } else {
            header.removeClass("scrolled");
        }
    });



    $(".work-item").hover(

        function () {

            $(this).addClass("hovered");

            $(this).find(".work-overlay").addClass("show");

            $(this).find("img").addClass("expantion");
        },

        function () {

            $(this).removeClass("hovered");

            $(this).find(".work-overlay").removeClass("show");

            $(this).find("img").removeClass("expantion");
        }
    );

});

$(function () {
    $(".js-fadeLeft").on("inview", function () {
        $(this).addClass("is-inview");
    });
});
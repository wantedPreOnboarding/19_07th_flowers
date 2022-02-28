$(document).ready(function () {
  function slideMobileGroup() {
    $(".slide--active")
      .css("float", "none")
      .css("display", "block")
      .css("width", "100%");
    $(".slide--next")
      .css("display", "block")
      .css("width", "100%")
      .css("padding-left", "0px");
    $(".slide--next__imageBox").css("width", "30%");
    $(".slide__content--info").css("width", "70%");
    $(".main--slide").css("max-width", "none").css("max-height", "none");
    $(".main--slide-btn").css("display", "none");
    $(".slide__content--active span").css("font-size", "12px");
    $(".slide__content--active p").css("font-size", "16px");
    $(".slide__content--info h3").css("font-size", "12px");
    $(".slide__content--info >span").css("font-size", "10px");
    $(".tag__box span").css("font-size", "9px").css("padding", "0px 2px");
    $("#flower-class > h2").css("font-size", "22px");
  }

  function slideTabletMiniGroup() {
    $(".slide--active").css("float", "left").css("width", "50%");
    $(".slide--next")
      .css("display", "inline-block")
      .css("width", "50%")
      .css("padding-left", "10px");
    $(".slide--next__imageBox").css("width", "50%");
    $(".slide__content--info").css("width", "50%");
    $(".main--slide-btn").css("display", "inline-block");
    $(".slide__content--active span").css("font-size", "14px");
    $(".slide__content--active p").css("font-size", "20px");
    $(".slide__content--info h3").css("font-size", "14px");
    $(".slide__content--info >span").css("font-size", "13px");
    $(".tag__box span").css("font-size", "10px").css("padding", "2px 5px");
  }

  function slideTabletGroup() {
    $(".main--slide-btn").addClass("tablet");
  }

  function slideDeskTopGroup() {
    $(".main--slide-btn").removeClass("tablet");
  }

  var breakpoints = require("breakpoints");

  $(window).resize(function () {
    if ($(window).width() < breakpoints.tabletMini) {
      slideMobileGroup();
    } else if ($(window).width() < breakpoints.tablet) {
      slideTabletMiniGroup();
    } else if ($(window).width() < breakpoints.desktop) {
      slideTabletGroup();
    } else {
      slideDeskTopGroup();
    }
  });

  var tagList = [
    { store: "광화문점", color: "#8A2BE2" },
    { store: "잠실점", color: "#1DD1AD" },
    { store: "월계점", color: "#FF9100" },
    { store: "구로점", color: "#0A82FF" },
    { store: "송파점", color: "#FFBE0A" },
    { store: "부산동래점", color: "#46BEFF" },
  ];

  for (i = 0; i < tagList.length; i++) {
    var $span = $("<span></span>")
      .css("margin-right", "5px")
      .css("border", "1px solid " + tagList[i].color)
      .css("color", tagList[i].color)
      .text(tagList[i].store);
    $(".tag__box").append($span);
  }

  var slideList = [
    { imageId: "0", imageName: "클래식 핸드타이드(1/1 ~ 1/15)", url: "#1" },
    { imageId: "1", imageName: "들꽃 화병꽂이(1/10 ~ 1/16)", url: "#2" },
    { imageId: "2", imageName: "롬앤로우 센터피스 (1/17 ~ 1/23)", url: "#3" },
  ];
  var state = 1;

  function changeImage(first, second, third) {
    console.log(123);
    $(".slide--image__active").attr(
      "src",
      "assets/slide_image" + first + ".jpeg"
    ),
      $(".slide--image2").attr("src", "assets/slide_image" + second + ".jpeg"),
      $(".slide--image3").attr("src", "assets/slide_image" + third + ".jpeg"),
      $(".slide__content--firstTitle").text(slideList[second].imageName),
      $(".slide__content--secTitle").text(slideList[third].imageName),
      $(".slide--active__href").attr("href", "#" + first),
      $(".slide--next__href-1").attr("href", "#" + second),
      $(".slide--next__href-2").attr("href", "#" + third);
  }

  $(".next__btn").click(function () {
    if (state === 2) {
      changeImage(state, state - 2, state - 1), (state = 0);
    } else if (state === 1) {
      changeImage(state, state + 1, state - 1), state++;
    } else {
      changeImage(state, state + 1, state + 2), state++;
    }
  });
  $(".prev__btn").click(function () {
    if (state === 2) {
      changeImage(state - 1, state, state - 2);
      state = 0;
    } else if (state === 1) {
      changeImage(state + 1, state - 1, state), state++;
    } else {
      changeImage(state, state + 1, state + 2), state++;
    }
  });
  $(window).trigger("resize");
});

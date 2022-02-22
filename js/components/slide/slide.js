$(document).ready(function() {
  // var slideList = [{imageId:"1", imageName:"클래식 핸드타이드(1/1~1/15)"}, {imageId:"2", imageName:"들꽃 화병 꽃이(1/10)~(1/16)"}, {imageId:"3",  imageName:"롬앤로우 센터피스 (1/17)~(1/23)"}]   
  var state=0;
  $(".next__btn").click(function() {
    if (state ===2){
      $(".slide--image__active").attr("src","assets/slide_image"+state+".jpeg"),
      $(".slide--image2").attr("src","assets/slide_image"+(state-2)+".jpeg"),
      $(".slide--image3").attr("src","assets/slide_image"+(state-1)+".jpeg"),
      state=0
    }
    else if(state ===1){
      $(".slide--image__active").attr("src","assets/slide_image"+state+".jpeg"),
      $(".slide--image2").attr("src","assets/slide_image"+(state+1)+".jpeg"),
      $(".slide--image3").attr("src","assets/slide_image"+(state-1)+".jpeg"),
      state++
    }
    else{
      $(".slide--image__active").attr("src","assets/slide_image"+state+".jpeg"),
      $(".slide--image2").attr("src","assets/slide_image"+(state+1)+".jpeg"),
      $(".slide--image3").attr("src","assets/slide_image"+(state+2)+".jpeg"),
      state++
    } 
});
  $(".prev__btn").click(function() {		// 모든 <button>요소에 click 이벤트를 설정함.
      alert("뒤로가기 버튼!")
  });
});


    
    // if (state ===2){
    //   state=0
    // }
    // else{
    //   state++
    // }
    // $(".slide--image__active").attr("src",`assets/slide_image${state}.jpeg`),
    // $(".slide--image2").attr("src",`assets/slide_image${state===2?state-2:state+1}.jpeg`),
    // $(".slide--image3").attr("src",`assets/slide_image${state!==0 ?state-1:state+2}.jpeg`)
$(document).ready(function() {
  var tagList=[
    {store:"광화문점",color:"#8A2BE2"},
    {store:"잠실점",color:"#1DD1AD"},
    {store:"월계점",color:"#FF9100"},
    {store:"구로점",color:"#0A82FF"},
    {store:"송파점",color:"#FFBE0A"},
    {store:"부산동래점",color:"#46BEFF"}]
  
  for (i=0; i<tagList.length; i++){
    console.log(tagList[i].store);
    var $span=$("<span></span>").css("margin-right","5px").css("border","1px solid "+tagList[i].color).css("color",tagList[i].color).text(tagList[i].store);
    $(".tag__box").append($span)
  }

  var slideList = [{imageId:"0", imageName:"클래식 핸드타이드(1/1 ~ 1/15)"}, {imageId:"1", imageName:"들꽃 화병꽂이(1/10 ~ 1/16)"}, {imageId:"2",  imageName:"롬앤로우 센터피스 (1/17 ~ 1/23)"}]   
  var state=1;

  function changeImage(first,second,third){
    $(".slide--image__active").attr("src","assets/slide_image"+first+".jpeg"),
    $(".slide--image2").attr("src","assets/slide_image"+second+".jpeg"),
    $(".slide--image3").attr("src","assets/slide_image"+third+".jpeg"),
    $(".slide__content--firstTitle").text(slideList[second].imageName),
    $(".slide__content--secTitle").text(slideList[third].imageName)
  }

  $(".next__btn").click(function() {
    if (state ===2){
      changeImage(state,state-2,state-1),
      state=0
    }
    else if(state ===1){
      changeImage(state,state+1,state-1),
      state++
    }
    else{
      changeImage(state,state+1,state+2),
      state++
    } 
  });
  $(".prev__btn").click(function() {	
    if (state ===2){
      changeImage(state-1,state,state-2)
      state=0
    }
    else if(state ===1){
      changeImage(state+1,state-1,state),
      state++
    }
    else{
      changeImage(state,state+1,state+2),
      state++
    } 
  });
});

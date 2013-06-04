$(function(){
//top menu
  $(".menu_common").hover(
	function(){
	   $(".nav_bg").show();
	   $(this).animate({height:"260px"},100);	   
	   $(".nav_menu a").css({color:"white"});
	  },
	function(){
	  $(this).stop(true,true).css({height:"40px"});
	  $(".nav_bg").hide();
	  $(".nav_menu a").removeClass("nav_menu_hover");
	  $(".nav_menu a").css({color:"#242c36"});
	  });
//inner page link
$(".aside_banner_1").attr("href","/fsa2013_city/");
$(".aside_banner_2").attr("href","http://hd.t2cn.com/t2cnevent/xiha.shtml");
$(".aside_banner_3").attr("href","/event/2013052301/");
});
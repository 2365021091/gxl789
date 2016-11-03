var mySwiper = new Swiper(".swiper-container",{
		loop:true,
        speed:500, //延迟时间
        mode:'horizontal',//mode:"vertical"
		//scrollbar: '.swiper-scrollbar',
	    autoplay:2000,
		pagination: '.pagination',
        paginationClickable: true
 })
		window.onresize=window.onload=function(){
			//alert("sss")
			var h=document.getElementById("banner-img").height;
			//alert(h)
			document.getElementById("banner").style.height=h+"px";
			document.getElementById("swiper-container").style.height=h+"px";
			document.getElementById("swiper-slide").style.height=h+"px";
}

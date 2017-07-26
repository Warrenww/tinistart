function scrollFunction(){var t=document.getElementById("nav-buttom"),e=document.getElementById("float-nav"),o=document.getElementById("top"),n=document.getElementById("original-nav")
document.body.scrollTop>100||document.documentElement.scrollTop>100?(n.style.backgroundColor="rgba(0,0,0,.9)",o.style.opacity=.9,o.disabled=0,o.style.cursor="pointer",t.style.backgroundColor="rgba(0,0,0,0.35)",t.style.top="10px",e.style.top=0):(n.style.backgroundColor="rgba(0,0,0,0)",o.style.opacity=0,o.disabled=1,o.style.cursor="default",t.style.backgroundColor="rgba(0,0,0,0)",t.style.top=0,e.style.top="-10%")}function scrollToTop(){0!=document.body.scrollTop||0!=document.documentElement.scrollTop?(window.scrollBy(0,-50),timeOut=setTimeout("scrollToTop()",5)):clearTimeout(timeOut)}function nav(){var t=document.getElementById("icon1"),e=document.getElementById("icon2"),o=document.getElementById("icon3"),n=document.getElementById("nav-buttom"),l=document.getElementById("mobile-nav-container"),n=document.getElementById("mobile-nav"),s=document.getElementById("top")
rotated?(t.style.top=e.style.top=o.style.top="25px",t.style.transform="rotate(45deg)",e.style.transform="rotate(-45deg)",o.style.opacity=0,l.style.right="0%",n.style.zIndex="100",n.style.backgroundColor="rgba(0,0,0,.5)",s.style.display="none"):(t.style.transform=e.style.transform="rotate(0deg)",t.style.top="15px",e.style.top="23.75px",o.style.top="32.5px",o.style.opacity=1,l.style.right="-200px",setTimeout(function(){n.style.zIndex="-1",s.style.display="block"},800),n.style.backgroundColor="rgba(0,0,0,0)"),rotated=!rotated}function scroll_to_div(t){$("html,body").animate({scrollTop:$("#"+t).offset().top},1e3,"easeInOutCubic")}function toggle(t){var e=document.getElementsByTagName("button"),o=$("#"+t).children("li")
if(i<o.length){for(var n=0;n<e.length;n++)e[n].disabled=1
o.eq(i).toggle(300,"easeInOutCubic",function(){i++,toggle(t)})}else{i=0
for(var n=0;n<e.length;n++)e[n].disabled=0}}function rotate(t){var e=document.getElementById(t)
ang=getRotationDegrees($("#"+t)),ang+=180,e.style.transform="rotate("+ang+"deg)"}function getRotationDegrees(t){var e=t.css("-webkit-transform")||t.css("-moz-transform")||t.css("-ms-transform")||t.css("-o-transform")||t.css("transform")
if("none"!==e)var o=e.split("(")[1].split(")")[0].split(","),n=o[0],l=o[1],s=Math.round(Math.atan2(l,n)*(180/Math.PI))
else var s=0
return 0>s?s+360:s}function resize_win(t){var e=window.innerWidth
e>=768?$("#faq li").css("display","list-item"):$("#faq li").css("display","none")}window.onscroll=function(){scrollFunction()}
var timeOut,rotated=!0,i=0
window.onresize=resize_win
var handler=window.onresize
handler()


  window.onscroll = function() {scrollFunction()};
  function scrollFunction() {
    var but = document.getElementById("nav-buttom"),
        fnv = document.getElementById('float-nav');
      if (document.body.scrollTop > 100 || document.documentElement.scrollTop > 100) {
          document.getElementById("nav").style.opacity = .9;
          document.getElementById("top").style.opacity = .9;
          but.style.backgroundColor = 'rgba(0,0,0,0.35)';
          but.style.top = '10px';
          fnv.style.top = 0;
      } else {
          document.getElementById("nav").style.opacity = 0;
          document.getElementById("top").style.opacity = 0;
          but.style.backgroundColor = 'rgba(0,0,0,0)';
          but.style.top = 0;
          fnv.style.top = '-10%';
      }
    }

  var timeOut;
  function scrollToTop() {
    if (document.body.scrollTop!=0 || document.documentElement.scrollTop!=0){
         window.scrollBy(0,-50);
         timeOut=setTimeout('scrollToTop()',5);
    }
    else clearTimeout(timeOut);
  }

  var rotated = true;
  function nav() {
    var div1 = document.getElementById('icon1'),
        div2 = document.getElementById('icon2'),
        div3 = document.getElementById('icon3'),
        main = document.getElementById('nav-buttom'),
        column = document.getElementById('mobile-nav-container'),
        main = document.getElementById('mobile-nav'),
        top = document.getElementById('top');

    if(rotated){
      div1.style.top = div2.style.top = div3.style.top = '25px';
      div1.style.transform   = 'rotate(45deg)';
      div2.style.transform   = 'rotate(-45deg)';
      div3.style.opacity = 0;
      column.style.right = '0%';
      main.style.zIndex = '100' ;
      main.style.backgroundColor = 'rgba(0,0,0,.5)';
      top.style.display = 'none';
    }else {
      div1.style.transform  = div2.style.transform = 'rotate(0deg)';
      div1.style.top = '15px';
      div2.style.top = '23.75px' ;
      div3.style.top = '32.5px' ;
      div3.style.opacity = 1;
      column.style.right = '-200px';
      setTimeout(
        function(){
        main.style.zIndex = '-1';
        top.style.display = 'block';}
        ,800) ;
      main.style.backgroundColor = 'rgba(0,0,0,0)';

    }

    rotated = !rotated;
  }


  function scroll_to_div(div_id){
   $('html,body').animate(
   {scrollTop: $("#"+div_id).offset().top},
   1000,'easeInOutCubic');
  }


  var i=0;
  function toggle(div_id) {
    var b = document.getElementsByTagName('button');
    if(i<$('#'+div_id).children('li').length){
      for(var j=0;j<b.length;j++){b[j].disabled = 1;}
      $("#"+div_id).children('li').eq(i).toggle(300,'easeInOutCubic',function(){i++;toggle(div_id);});
    }else {
      i = 0;
      for(var j=0;j<b.length;j++){b[j].disabled = 0;}
    }
  }

  function rotate(div_id) {
    var d = document.getElementById(div_id);
    ang = getRotationDegrees($('#'+div_id));
    ang += 180;
    d.style.transform  = 'rotate('+ang+'deg)' ;
  }

  function getRotationDegrees(obj) {
    var matrix = obj.css("-webkit-transform") ||
    obj.css("-moz-transform")    ||
    obj.css("-ms-transform")     ||
    obj.css("-o-transform")      ||
    obj.css("transform");
    if(matrix !== 'none') {
        var values = matrix.split('(')[1].split(')')[0].split(',');
        var a = values[0];
        var b = values[1];
        var angle = Math.round(Math.atan2(b, a) * (180/Math.PI));
    } else { var angle = 0; }
    return (angle < 0) ? angle + 360 : angle;
  }



  window.onresize = test;
  var handler = window.onresize;
  handler();
  function test(x) {
    var w = window.innerWidth;
      if(w>1024){$('#faq li').css('display','list-item');}
      else{$('#faq li').css('display','none');}
  }

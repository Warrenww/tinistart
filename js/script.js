
  window.onscroll = function() {scrollFunction()};

  function scrollFunction() {
      if (document.body.scrollTop > 100 || document.documentElement.scrollTop > 100) {
          document.getElementById("nav").style.opacity = .9;
          document.getElementById("nav").style.transition = "opacity .8s";
          document.getElementById("Top").style.opacity = .9;
          document.getElementById("Top").style.transition = "opacity .8s";
      } else {
          document.getElementById("nav").style.opacity = 0;
          document.getElementById("Top").style.opacity = 0;
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
        org = document.getElementById('original-nav'),
        top = document.getElementById('Top');

    if(rotated){
      div1.style.top = div2.style.top = div3.style.top = '20px';
      div1.style.transform   = 'rotate(45deg)';
      div2.style.transform   = 'rotate(-45deg)';
      div3.style.opacity = org.style.opacity = 0;
      column.style.right = '0%';
      main.style.zIndex = '100' ;
      main.style.backgroundColor = 'rgba(0,0,0,.5)';
      top.style.display = 'none';
    }else {
      div1.style.transform  = div2.style.transform = 'rotate(0deg)';
      div1.style.top = '20%';
      div2.style.top = '40%' ;
      div3.style.top = '60%' ;
      div3.style.opacity = org.style.opacity = 1;
      column.style.right = '-40%';
      setTimeout(
        function(){
        main.style.zIndex = '-1';
        top.style.display = 'block';}
        ,800) ;
      main.style.backgroundColor = 'rgba(0,0,0,0)';

    }

    rotated = !rotated;
  }

  var h = window.innerHeight,
      stop = 0 ;
  function gop2() {
    if(stop<h){
      window.scrollBy(0,15);
      timeOut=setTimeout('gop2()',5);
      stop += 15 ;
    }
    else {
      clearTimeout(timeOut);
      stop = 0;
    }
  }
  function gop2F() {
    if(stop<h*0.75){
      window.scrollBy(0,1);
      timeOut=setTimeout('gop2F()',5);
      stop += 1 ;
    }
    else {
      clearTimeout(timeOut);
      stop = 0;
    }
  }
  function goto(a,b) {
    var aa = document.getElementById(a),
        bb = document.getElementById(b);
    var pa = getposition(aa),
        pb = getposition(bb);
    alert(pb-pa);

  }
  function getposition(element) {
    var data = element.getBoundingClientRect();
    return data.offset.top;
  }

  function scroll_to_div(div_id)
  {
   $('html,body').animate(
   {
    scrollTop: $("#"+div_id).offset().top
   },
   'ease-in-out');
  }

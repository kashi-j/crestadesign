// ハンバーガー
$(function(){
  $('.burger-btn').on('click',function(){
    $(this).toggleClass('-active');
    $('.nav-wrapper').toggleClass('-active');
  })
});

$(function(){
  $('.nav-item a').on('click',function(){
    $('.burger-btn').removeClass("-active");
    $('.nav-wrapper').removeClass("-active")
  });
});

// ヘッダースライドショー
const firstSlide = document.getElementById('slide1');
const secondSlide = document.getElementById('slide2');

const myImage = [
  'img/fv-bgi_01@2x.jpg',
  'img/fv-bgi_02@2x.jpg',
  'img/fv-bgi_03@2x.jpg',
];

let count = 1;
let flag = 1;

const change = () => {
  if(count > myImage.length - 1) count = 0;
  if(flag === 0){
    firstSlide.style.backgroundImage = `url(${myImage[count]})`;
    firstSlide.className = 'bg-1 fade-in';
    secondSlide.className = 'bg-2 fade-out';
    count++;
    flag += 1;
  } else{
    secondSlide.style.backgroundImage = `url(${myImage[count]})`;
    secondSlide.className = 'bg-2 fade-in';
    firstSlide.className = 'bg-1 fade-out';
    count++;
    flag = 0;
  }
  setTimeout(change,4000);
};
setTimeout(change, 1000);

// ヘッダー背景色
$(function() {
  let $win = $(window),
      $fv = $('.bg-1'),
      $header = $('.site-title')
      fvHeight = $fv.outerHeight(),
      bgClass = 'header-bg';
  $win.on('load scroll',function(){
    let value = $(this).scrollTop();
      if($win.width()>768)
        if (value > fvHeight) {
          $header.addClass(bgClass);
        } else {
          $header.removeClass(bgClass);
        }
  });
});


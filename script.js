// Responsive Nav in jQuery

$(function() {
  menu = $('nav ul');

  $('#openup').on('click', function(e) {
    e.preventDefault();
    menu.slideToggle();
  });

  $(window).resize(function() {
    var w = $(this).width();
    if (w > 480 && menu.is(':hidden')) {
      menu.removeAttr('style');
    }
  });

  $('nav li').on('click', function(e) {
    var w = $(window).width();
    if (w < 480) {
      menu.slideToggle();
    }
  });
  $('.open-menu').height($(window).height());
});

// Smooth Scrolling in jQuery
$('.cf a').on('click', function(event) {
  if (this.hash !== '') {
    event.preventDefault();

    const hash = this.hash;

    $('html, body').animate(
      {
        scrollTop: $(hash).offset().top
      },
      800,
      function() {
        window.location.hash = hash;
      }
    );
  }
});

// collapsible menu
// var coll = document.getElementsByClassName("btn");
// console.log(coll);

// var content = document.getElementsByClassName('category-items');
// console.log(ca)
// var i;

// for (i = 0; i < coll.length; i++) {
//   coll[i].addEventListener("click", function() {

//     if (content[i].style.display === "flex") {
//       console.log('true')
//       content[i].style.display = "none";
//     } else {
//       content[i].style.display = "flex";
//     }
//   });
// }

let btn = document.getElementsByClassName('btn');

for(let i=0;i<btn.length;i++){
  // console.log(btn[i]);
  let content = document.getElementsByClassName(`item-${i}`);
  // console.log(content[0]);

  btn[i].addEventListener('click', function(){
    if(content[0].style.display === 'flex'){
      content[0].style.display = 'none'
    }
    else{
      content[0].style.display = 'flex'
    }
  })
}

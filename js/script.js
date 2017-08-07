// var _ = require('underscore');

function othername() {
    var first = document.getElementById("firstName").value;
    var last = document.getElementById("lastName").value;
    var userName = first + ' ' + last;
    var profileArea;

    if(first.length > 2 && last.length > 2){
     document.getElementById('welcomeUser').innerHTML = "Hello " + userName;
     $('.test').removeClass('failed');
     $('.test').removeClass('failed');
     profileArea = true;
   }else {
     document.getElementById('welcomeUser').innerHTML = "Please enter First and Last name";
     $('.test').addClass('failed');
     $('.test').addClass('failed');
     profileArea = false;
   }
    // $('#buttonUserDetails').on('click', function(){
    //   $('.user-details').css({'display' : 'none'});
    // })
}

//html button
$('#button-html').mouseenter(function(){
  $('.language-choice-css').fadeTo(300, 0.3)
  $('.language-choice-javascript').fadeTo(300, 0.3)
});
$('#button-html').mouseleave(function(){
  $('.language-choice-css').fadeTo(00001, 1)
  $('.language-choice-javascript').fadeTo(00001, 1)
});
// css button
$('#button-css').mouseenter(function(){
  $('.language-choice-html').fadeTo(300, 0.3)
  $('.language-choice-javascript').fadeTo(300, 0.3)
});
$('#button-css').mouseleave(function(){
  $('.language-choice-html').fadeTo(00001, 1)
  $('.language-choice-javascript').fadeTo(00001, 1)
});

//javascript button
$('#button-javascript').mouseenter(function(){
  $('.language-choice-html').fadeTo(300, 0.3)
  $('.language-choice-css').fadeTo(300, 0.3)
});
$('#button-javascript').mouseleave(function(){
  $('.language-choice-html').fadeTo(00001, 1)
  $('.language-choice-css').fadeTo(00001, 1)
});

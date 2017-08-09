$('.user-login').fadeTo(700, 1);
$('.home-page').fadeTo(1200, 1);

var user;

function othername() {
   user = document.getElementById("userNames").value;
   localStorage.setItem("user", user);

    // var last = document.getElementById("lastName").value;
    // var userName = `${first} ${last}`;
    var logInSuccess;

    if(user.length > 2){
     $('.test').removeClass('failed');
     $('.test').removeClass('failed');
     $('#alert').css({'display' : 'none'});
     $('#welcomeUser').css({'display' : 'inline', "text-align" : 'center'})
     logInSuccess = true;

   }else {

     $('#alert').fadeTo(500,1);
     $('#welcomeUser').css({'display' : 'none'});
     $('.test').addClass('failed');
     $('.test').addClass('failed');
     logInSuccess = false;
   }
    if(logInSuccess === true){
      $('.user-details').fadeOut(900, function (){
        $(location).attr('href', 'index.html')
    });
  }

}

if(window.location.pathname === '/Users/forwardmarketing/Desktop/NorthCoders-precourse-final-project/index.html'){
  user = localStorage.getItem('user');
  document.getElementById('blahblah').innerHTML = 'Welcome Back ' + user;
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

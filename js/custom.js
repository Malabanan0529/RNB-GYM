
  $(function () {

    // MENU
    $('.navbar-collapse a').on('click',function(){
      $(".navbar-collapse").collapse('hide');
    });

    // AOS ANIMATION
    AOS.init({
      disable: 'mobile',
      duration: 800,
      anchorPlacement: 'center-bottom'
    });

    // SMOOTHSCROLL NAVBAR
    $(function() {
      $('.navbar a, .hero-text a').on('click', function(event) {
        var $anchor = $(this);
        $('html, body').stop().animate({
            scrollTop: $($anchor.attr('href')).offset().top - 49
        }, 1000);
        event.preventDefault();
      });
    });    

    // BARFILLER
    $('#bar1').barfiller({
      barColor: '#f13a11',
      duration: 2000
    });
    $('#bar2').barfiller({
        barColor: '#f13a11',
        duration: 2000
    });
    $('#bar3').barfiller({
        barColor: '#f13a11',
        duration: 2000
    });
  });

  // AUTORECIEVE EMAIL
  document.getElementById('emailFormSubmit').addEventListener('submit', function(event) {
    event.preventDefault();

    const form = event.target;

    fetch(form.action, {
        method: form.method,
        headers: {
            'Accept': 'application/json',
            'Content-Type': 'application/x-www-form-urlencoded'
        },
        body: new URLSearchParams(new FormData(form)).toString()
    })
    .then(response => {
        if (response.ok) {
            alert('Email sent successfully!');
        } else {
            alert('Failed to send email.');
        }
    })
    .catch(error => {
        console.error('Error:', error);
        alert('Failed to send email.');
    });
});

// CHECK BOX
function validateForm() {
  var checkbox = document.getElementById('signup-agree');
  if (!checkbox.checked) {
      alert("Please agree to the Terms & Conditions.");
      return false;
  }
  return true;
}


    


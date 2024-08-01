$(document).ready(function () {

    $('#menu').click(function () {
        $(this).toggleClass('fa-times');
        $('.navbar').toggleClass('nav-toggle');
    });

    $(window).on('scroll load', function () {
        $('#menu').removeClass('fa-times');
        $('.navbar').removeClass('nav-toggle');

        if (window.scrollY > 60) {
            document.querySelector('#scroll-top').classList.add('active');
        } else {
            document.querySelector('#scroll-top').classList.remove('active');
        }

        // scroll spy
        $('section').each(function () {
            let height = $(this).height();
            let offset = $(this).offset().top - 200;
            let top = $(window).scrollTop();
            let id = $(this).attr('id');

            if (top > offset && top < offset + height) {
                $('.navbar ul li a').removeClass('active');
                $('.navbar').find(`[href="#${id}"]`).addClass('active');
            }
        });
    });

    // smooth scrolling
    $('a[href*="#"]').on('click', function (e) {
        e.preventDefault();
        $('html, body').animate({
            scrollTop: $($(this).attr('href')).offset().top,
        }, 500, 'linear')
    });



});


document.addEventListener('visibilitychange',
    function () {
        if (document.visibilityState === "visible") {
            document.title = "IBM | Zero_Hunger_Pledge";
            $("#favicon").attr("href", "Assets/images/logo.ico");
        }
        else {
            document.title = "Come Back To Zero_Hunger_Pledge";
            $("#favicon").attr("href", "Assets/images/Back.png");
        }
    });


// <!-- typed js effect starts -->
var typed = new Typed(".typing-text", {
    strings: ["United Nations Sustainable Development (SDGs)",
       "Eliminate Hunger",
       "Ensure food security",
       "improve Nutrientation",
       "Promote Sustainable Agriculture by 2023"],
    loop: true,
    typeSpeed: 50,
    backSpeed: 25,
    backDelay: 500,
});
// <!-- typed js effect ends --> 

/* JavaScript code for signup and login cards */

function toggleUserType() {
  const nameField = document.getElementById('name-field');
  const phoneField = document.getElementById('phone-field');
  const confirmPasswordField = document.getElementById('confirm-password-field');
  const sendButton = document.getElementById('send');
  const toggleButton = document.getElementById('toggle-user-type');

  if (toggleButton.innerText.includes('Existing User')) {
      // Hide fields for existing users
      nameField.style.display = 'none';
      phoneField.style.display = 'none';
      confirmPasswordField.style.display = 'none';

      // Change button texts
      sendButton.innerHTML = 'Login <i class="fa fa-paper-plane"></i>';
      toggleButton.innerHTML = 'Create New User <i class="fas fa-user-alt"></i>';
  } else {
      // Show fields for new users
      nameField.style.display = 'flex';
      phoneField.style.display = 'flex';
      confirmPasswordField.style.display = 'flex';

      // Change button texts
      sendButton.innerHTML = 'Sign Up <i class="fa fa-paper-plane"></i>';
      toggleButton.innerHTML = 'Existing User <i class="fas fa-user-alt"></i>';
  }
}

document.getElementById('toggle-user-type').addEventListener('click', toggleUserType);




/* ===== SCROLL REVEAL ANIMATION ===== */
// const srtop = ScrollReveal({
//     origin: 'top',
//     distance: '80px',
//     duration: 1000,
//     reset: true
// });

// /* SCROLL HOME */
// srtop.reveal('.home2 .content h3', { delay: 200 });
// srtop.reveal('.home2 .content p', { delay: 200 });
// srtop.reveal('.home2 .content .btn', { delay: 200 });

// srtop.reveal('.home2 .image', { delay: 400 });
// srtop.reveal('.home2 .linkedin', { interval: 600 });
// srtop.reveal('.home2 .github', { interval: 800 });



// srtop.reveal('.home2 .dev', { interval: 600 });

// /* SCROLL ABOUT */
// srtop.reveal('.about2 .content h3', { delay: 200 });
// srtop.reveal('.about2 .content .tag', { delay: 200 });
// srtop.reveal('.about2 .content p', { delay: 200 });
// srtop.reveal('.about2 .content .box-container', { delay: 200 });
// srtop.reveal('.about2 .content .resumebtn', { delay: 200 });


// /* SCROLL SKILLS */
// srtop.reveal('.skills2 .container', { interval: 200 });
// srtop.reveal('.skills2 .container .bar', { delay: 400 });


// /* SCROLL PROJECTS */
// srtop.reveal('.work .box', { interval: 200 });


// /* SCROLL CONTACT */
// srtop.reveal('.contact2 .container', { delay: 400 });
// srtop.reveal('.contact2 .container .form-group', { delay: 400 });

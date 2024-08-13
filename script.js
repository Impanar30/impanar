$(document).ready(function () {
    // Smooth scrolling for navigation links
    $('a[href^="#"]').on('click', function(event) {
        var target = $(this.getAttribute('href'));
        if (target.length) {
            event.preventDefault();
            $('html, body').stop().animate({
                scrollTop: target.offset().top
            }, 1000);
        }
    });

    // Simple form validation for contact form
    $('#contact-form').on('submit', function(event) {
        event.preventDefault();
        
        // Basic validation logic
        var name = $('#name').val().trim();
        var email = $('#email').val().trim();
        var message = $('#message').val().trim();
        var errorMessage = '';

        if (name === '') {
            errorMessage += 'Name is required.\n';
        }

        if (email === '') {
            errorMessage += 'Email is required.\n';
        } else if (!validateEmail(email)) {
            errorMessage += 'Invalid email address.\n';
        }

        if (message === '') {
            errorMessage += 'Message is required.\n';
        }

        if (errorMessage !== '') {
            alert(errorMessage);
        } else {
            // AJAX call to submit the form data (dummy call for this example)
            $.ajax({
                url: 'submit_form.php', // Change this to your form handling URL
                method: 'POST',
                data: $(this).serialize(),
                success: function(response) {
                    alert('Form submitted successfully!');
                    $('#contact-form')[0].reset();
                },
                error: function() {
                    alert('There was an error submitting the form.');
                }
            });
        }
    });

    // Email validation function
    function validateEmail(email) {
        var re = /^(([^<>()\[\]\.,;:\s@"]+(\.[^<>()\[\]\.,;:\s@"]+)*)|(".+"))@(([^<>()[\]\.,;:\s@"]+\.)+[^<>()[\]\.,;:\s@"]{2,})$/i;
        return re.test(String(email).toLowerCase());
    }

    // Dynamic content loading using AJAX
    $('.load-content').on('click', function(event) {
        event.preventDefault();
        var page = $(this).data('page');
        $('#dynamic-content').load(page + '.html');
    });
});

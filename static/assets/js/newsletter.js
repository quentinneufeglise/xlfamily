$(function() {

    $("#newsletterform").find("input, textarea, select").jqBootstrapValidation({
        preventSubmit: true,
        submitError: function($form, event, errors) {
            // additional error messages or events
        },
        submitSuccess: function($form, event) {


            event.preventDefault(); // prevent default submit behaviour
            // get values from FORM


            var name = $("input#nl_name").val();
            var email = $("input#nl_email").val();
            var firstName = name; // For Success/Failure Message

            console.log(name);
            console.log(email);


            $.ajax({
                url: "./assets/mail/newsletter.php",
                type: "POST",
                data: {

                    name: name,
                    email : email

                },
                cache: false,
                success: function() {
                    // Success message
                    $('#success_newsletter').html("<div class='alert alert-success'>");
                    $('#success_newsletter > .alert-success').html("<button type='button' class='close' data-dismiss='alert' aria-hidden='true'>&times;")
                        .append("</button>");
                    $('#success_newsletter > .alert-success')
                        .append("<p class='contact-fat2'>Thank you! </p><p>You have successfully subscribed for our newsletter</p>");
                    $('#success_newsletter > .alert-success')

                        .append('</div>');

                    //clear all fields
                    $('#contactForm').trigger("reset");
                },
                error: function() {
                    // Fail message
                    $('#success_newsletter').html("<div class='alert alert-danger'>");
                    $('#success_newsletter > .alert-danger').html("<button type='button' class='close' data-dismiss='alert' aria-hidden='true'>&times;")
                        .append("</button>");
                    $('#success_newsletter > .alert-danger').append("<strong>Oops " + name + ", there seems to have been an error. Please try again later!");
                    $('#success_newsletter > .alert-danger').append('</div>');
                    //clear all fields
                    $('#contactForm').trigger("reset");
                },
            })
        },
        filter: function() {
            return $(this).is(":visible");
        },
    });

    $("a[data-toggle=\"tab\"]").click(function(e) {
        e.preventDefault();
        $(this).tab("show");
    });
});


/*When clicking on Full hide fail/success boxes */
$('#name').focus(function() {
    $('#success').html('');
});







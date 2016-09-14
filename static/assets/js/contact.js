$(function() {

    $("#contactform").find("input, textarea, select").jqBootstrapValidation({
        preventSubmit: true,
        submitError: function($form, event, errors) {
            // additional error messages or events
        },
        submitSuccess: function($form, event) {


            event.preventDefault(); // prevent default submit behaviour
            // get values from FORM


            var name = $("input#name").val();
            var email = $("input#email").val();
            var number = $("input#number").val();
            var thoughts = $("textarea#thoughts").val();

            var firstName = name; // For Success/Failure Message


            $.ajax({
                url: "./assets/mail/contact_me.php",
                type: "POST",
                data: {

                    name: name,
                    email : email,
                    number: number,
                    thoughts: thoughts
                },
                cache: false,
                success: function() {
                    // Success message
                    $('#success').html("<div class='alert alert-success'>");
                    $('#success > .alert-success').html("<button type='button' class='close' data-dismiss='alert' aria-hidden='true'>&times;")
                        .append("</button>");
                    $('#success > .alert-success')
                        .append("<p class='contact-fat2'>Thank you!</p><p>We'll get back to you soon.</p>");
                    $('#success > .alert-success')
                    //    .append("<span><br/><br/>Gebruik de tijd tot aan 21 april om je idee verder te verfijnen.</span>");
                    //$('#success > .alert-success')
                        .append('</div>');

                    //clear all fields
                    $('#contactform').trigger("reset");
                    $('#contactform').hide();
                },
                error: function() {
                    // Fail message
                    $('#success').html("<div class='alert alert-danger'>");
                    $('#success > .alert-danger').html("<button type='button' class='close' data-dismiss='alert' aria-hidden='true'>&times;")
                        .append("</button>");
                    $('#success > .alert-danger').append("<strong>Oops " + name + ", there seems to have been an error. Please try again later!");
                    $('#success > .alert-danger').append('</div>');
                    //clear all fields
                    $('#contactform').trigger("reset");

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







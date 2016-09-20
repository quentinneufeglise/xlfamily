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
                        .append("<p class='contact-fat2'>Great to hear from you!</p><p>Thanks for reaching out. We’ll get back to you shortly. While you’re here, check out the latest news from our blog.</p>");
                    $('#success > .alert-success')
                    //    .append("<span><br/><br/>Gebruik de tijd tot aan 21 april om je idee verder te verfijnen.</span>");
                    //$('#success > .alert-success')
                        .append('</div>');

                    //clear all fields
                    $('#contactform').hide();
                    $('#contactform').removeClass('dirty-name').removeClass('dirty-email').removeClass('dirty-thoughts');
                    $('#contactform').trigger("reset");


                },
                error: function() {
                    // Fail message
                    $('#success').html("<div class='alert alert-danger'>");
                    $('#success > .alert-danger').html("<button type='button' class='close' data-dismiss='alert' aria-hidden='true'>&times;")
                        .append("</button>");
                    $('#success > .alert-danger').append("<strong>Oops " + name + ", there seems to have been an error. Please try again later!");
                    $('#success > .alert-danger').append('</div>');
                    //clear all fields


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

    /*MAKING THE BUTTON BLUE*/

    $('#name, #email, #thoughts').on('keyup', function(){
        var id = $(this).attr('id');
        if( $(this).val().length > 0){
            $('#contactform').addClass('dirty-' + id);
        } else {
            $('#contactform').removeClass('dirty-' + id);
        }
    });


});


/*When clicking on Full hide fail/success boxes */
$('#name').focus(function() {
    $('#success').html('');
});







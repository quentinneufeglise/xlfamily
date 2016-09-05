$(function() {

    $("input, textarea, select").jqBootstrapValidation({
        preventSubmit: true,
        submitError: function($form, event, errors) {
            // additional error messages or events
        },
        submitSuccess: function($form, event) {


            event.preventDefault(); // prevent default submit behaviour
            // get values from FORM
            var ideaname = $("input#ideaname").val();
            var how = $("input#how").val();
            var hotspot = $("select#hotspot").val();
            var category = $("select#category").val();
            var idea = $("textarea#idea").val();
            var name = $("input#name").val();
            var role = $("input#role").val();
            var center = $("input#center").val();
            var email = $("input#email").val();

            //console.log("ideaname " + ideaname);
            //console.log("how " + how);
            //console.log("hotspot " + hotspot);
            //console.log("category " + category);
            //console.log("idea " + idea);
            //console.log("name " + name);
            //console.log("role " + role);
            //console.log("center " + center);
            console.log("email " + email);



            var firstName = name; // For Success/Failure Message


            $.ajax({
                url: "./assets/mail/contact_me.php",
                type: "POST",
                data: {
                    ideaname: ideaname,
                    how : how,
                    hotspot: hotspot,
                    category: category,
                    idea : idea,
                    name: name,
                    role : role,
                    center : center,
                    email : email
                },
                cache: false,
                success: function() {
                    // Success message
                    $('#success').html("<div class='alert alert-success'>");
                    $('#success > .alert-success').html("<button type='button' class='close' data-dismiss='alert' aria-hidden='true'>&times;")
                        .append("</button>");
                    $('#success > .alert-success')
                        .append("<h2>Bedankt! </h2><span class='fa-2x'>Jouw idee is succesvol ingediend</span>");
                    $('#success > .alert-success')
                        .append("<span><br/><br/>Gebruik de tijd tot aan 21 april om je idee verder te verfijnen.</span>");
                    $('#success > .alert-success')
                        .append('</div>');

                    //clear all fields
                    $('#contactForm').trigger("reset");
                },
                error: function() {
                    // Fail message
                    $('#success').html("<div class='alert alert-danger'>");
                    $('#success > .alert-danger').html("<button type='button' class='close' data-dismiss='alert' aria-hidden='true'>&times;")
                        .append("</button>");
                    $('#success > .alert-danger').append("<strong>Oeps " + firstName + ", het lijkt erop dat de mailserver eruit ligt. Probeer het nog een keer later aub of stuur een email naar onderstaand email adres");
                    $('#success > .alert-danger').append('</div>');
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







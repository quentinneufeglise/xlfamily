<?php



$nl_name = $_POST['name'];
$nl_email_address = $_POST['email'];





// Create the email and send the message
$to = 'aneliyas@xlfamily.com';
$email_subject = "New subscriber to the newsletter  :  $nl_name";
$email_body = "Someone wants to be in our newsletter \n\n"."Details\n\n Name: $nl_name \n\n Email address : $nl_email_address";
$headers = "From: noreply@xlfamily.com\n";
$headers .= "Reply-To: info@xlfamily.com";
mail($to,$email_subject,$email_body,$headers);
return true;
?>
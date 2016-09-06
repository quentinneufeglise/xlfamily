<?php



$name = $_POST['name'];
$email_address = $_POST['email'];
$phone_number = $_POST['number'];
$thoughts = $_POST['thoughts'];




	
// Create the email and send the message
$to = 'aneliya@xlfamily.com';
$email_subject = "Contact request XL website  :  $name";
$email_body = "Someone is interested in XL family :) \n\n"."Details\n\n Name: $name \n\n Email address : $email_address \n\n Phone number: $hotspot \n\n.Message : $thoughts \n\n Idee omschrijving: $idea\n\n Naam deelnemer: $name \n\n Rol: $role \n\n Afdeling : $center \n\n Email adres: $email_address";
$headers = "From: noreply@xlfamily.com\n";
$headers .= "Reply-To: $email_address";	
mail($to,$email_subject,$email_body,$headers);
return true;			
?>
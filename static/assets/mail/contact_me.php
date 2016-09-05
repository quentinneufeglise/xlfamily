<?php





$ideaname = $_POST['ideaname'];
$how = $_POST['how'];
$hotspot = $_POST['hotspot'];
$category = $_POST['category'];
$idea = $_POST['idea'];
$name = $_POST['name'];
$role = $_POST['role'];
$center = $_POST['center'];
$owners = $_POST['owners'];
$country = $_POST['country'];
$email_address = $_POST['email'];



	
// Create the email and send the message
$to = 'ragna@xlfamily.com';
$email_subject = "Power up the future  :  $name";
$email_body = "Er is een nieuw idee binnen!! \n\n"."Hier zijn de details:\n\n Idee naam: $ideaname \n\n Hoe voegt het idee waarde toe : $how \n\n Focus: $hotspot \n\n.Categorie : $category \n\n Idee omschrijving: $idea\n\n Naam deelnemer: $name \n\n Rol: $role \n\n Afdeling : $center \n\n Email adres: $email_address";
$headers = "From: noreply@powerupthefuture.nl\n";
$headers .= "Reply-To: $email_address";	
mail($to,$email_subject,$email_body,$headers);
return true;			
?>
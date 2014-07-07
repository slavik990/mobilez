<?php
$email = $_POST['email'];
$name = $_POST['name'];
$phone = $_POST['telephone'];
$kurs = $_POST['message'];
$from = "mobilez@site.com";
$headers  = "From: $from\r\n"; 
$headers .= "Content-type: text/html\r\n";
$to = 'sales@thinkmobiles.com';
$subject = 'Mobilez365';
$message = '<html><body>Message from IT School<br>Name: '.$name.'<br>Email: '.$email.'<br>Phone: '.$phone.'<br>Message: '.$kurs.'</body></html>';
$message = wordwrap($message, 70, "\r\n");
if (filter_var($email, FILTER_VALIDATE_EMAIL)) {
mail($to, $subject, $message, $headers) or die('Error sending Mail');
} 
?>

<?php
$email = $_POST['iAm'];
$name = $_POST['lookingFor'];
$phone = $_POST['email'];
$message = $_POST['message'];
$from = "mobilez@site.com";
$headers  = "From: $from\r\n"; 
    $headers .= "Content-type: text/html\r\n";
$to = 'sales@thinkmobiles.com';
$subject = 'Mobilez365';
$message = '<html><body>'.$email.'<br>'.$name.'<br>Email: '.$phone.'<br>Message: '.$message.'</body> </html>';
$message = wordwrap($message, 70, "\r\n");
if (filter_var($phone, FILTER_VALIDATE_EMAIL)) {
mail($to, $subject, $message, $headers) or die('Error sending Mail');
} 
?>

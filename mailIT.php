<?php
$email = $_POST['email'];
$name = $_POST['name'];
$phone = $_POST['phone'];
$kurs = $_POST['kurs'];
$from = "mobilez@site.com";
$headers  = "From: $from\r\n"; 
$headers .= "Content-type: text/html\r\n";
$to = 'hr@thinkmobiles.com';
$subject = 'IT School';
$message = '<html><body>Message from IT School<br>Name: '.$name.'<br>Email: '.$email.'<br>Phone: '.$phone.'<br>Kurs: '.$kurs.'</body></html>';
$message = wordwrap($message, 70, "\r\n");
if (filter_var($email, FILTER_VALIDATE_EMAIL)) {
mail($to, $subject, $message, $headers) or die('Error sending Mail');
} 
?>

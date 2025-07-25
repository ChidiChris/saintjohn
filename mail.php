<?php
if($_POST)
{	
	//check if its an ajax request, exit if not
    if(!isset($_SERVER['HTTP_X_REQUESTED_WITH']) AND strtolower($_SERVER['HTTP_X_REQUESTED_WITH']) != 'xmlhttprequest') {
	
		//exit script outputting json data
		$output = json_encode(
		array(
			'type'=>'error', 
			'text' => 'Request must come from Ajax'
		));
		
		die($output);
    } 
    //check $_POST vars are set, exit if any missing
	if(!isset($_POST["name"]) || !isset($_POST["email"]) || !isset($_POST["message"]))
	{
		$output = json_encode(array('type'=>'error', 'text' => 'Input fields are empty!'));
		die($output);
	}
    $name = $_POST["name"];
    $email= $_POST["email"];
    $text= $_POST["message"];
	 $subject = "New Contact Message from Website"; // Subject added
    //$headers .= 'Bcc: chidichristopher02@gmail.com' . "\r\n";
    $headers = 'MIME-Version: 1.0' . "\r\n";
    $headers .= "From: " . $email . "\r\n"; // Sender's E-mail
    $headers .= 'Content-type: text/html; charset=iso-8859-1' . "\r\n";
	$headers .= 'Bcc: chidichristopher02@gmail.com' . "\r\n";

    $message ='<table style="width:100%">
        <tr><td>Name: '.$name.'</td></tr>
        <tr><td>Email: '.$email.'</td></tr>
        <tr><td>Message: '.$text.'</td></tr>
    </table>';

    $to_mail= 'chidichristopher0@gmail.com';
	$sentMail = @mail($to_mail, $subject, $message, $headers);
	if(!$sentMail)
	{
		$output = json_encode(array('type'=>'error', 'text' => '❌ Oops! Something went wrong while sending your message. Please try again later or contact us directly.'));
		die($output);
	}

	$output = json_encode(array('type'=>'message', 'text' => '✔️ Your message has been sent.'));
	die($output);
}
?>
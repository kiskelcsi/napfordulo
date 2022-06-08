<?php
    $month = trim($_POST['month']);
    $year  = trim($_POST['year']);
    $qtyguest = trim($_POST['qtyguest']);
    $timereservation = trim($_POST['timereservation']);
    $nameguest = trim($_POST['nameguest']);
    $phoneguest = trim($_POST['phoneguest']);

    if(empty($nameguest) AND empty($phoneguest))
    {
        exit;
    }
    else 
    {
        $subject =   'Asztal foglalás Napforduló étterem';
        $recipient = 'kiskelcsi@gmail.com';
        $mail_body =
            "Dátum: " . $timereservation .' '.$month.' '.$year."\r\n" .
            "Vendégek száma: " . $qtyguest . "\r\n" .
            "Név: " . $nameguest . "\r\n" .
            "Telefon:". $phoneguest;
  
        $header = "From: " . $nameguest . " <" . $recipient . ">\r\n";
        mail($recipient, $subject, $mail_body, $header);

        echo 'send';
    }
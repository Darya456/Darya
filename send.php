<?php
  use PHPMailer\PHPMailer\PHPMailer;
  use PHPMailer\PHPMailer\Exception;

  require 'phpmailer/src/Exception.php';
  require 'phpmailer/src/PHPMailer.php';

  $mail = new PHPMailer(true);
  $mail->CharSet = 'UTF-8';
  $mail->setLanguage('ru', 'phpmailer/language/');
  $mail->IsHTML(true);

  $mail->setFrom($_POST['email'])
  $mail->addAddress('kovalevad534@gmail.com')
  $mail->Subject = 'Вопрос с сайта Pudra.by';

  $body = <h1>Вопрос с сайта pudra.by</h1>;
  $body .= "<p>ФИО: </p>".$_POST['fio'];
  $body .= "<p>Вопрос: </p>".$_POST['text'];
  $body .= "<p>E-mail: </p>".$_POST['email'];

  $mail->Body = $body;

  if(!$mail->send()) {
      $message = 'Ошибка';
  } else {
    $message = 'Данные отправлены';
  }

  $response = ['message' => $message];

  header('Content-type: application/json');
  echo json_encode($response);
?>
<?

	if (isset($_POST[subject])){

		$subject = $_POST[subject];

		$message = '
		<html>
			<body>';
		$message .= '
				<b>Тема: </b> '.$_POST[subject].'<br>
				<b>Имя: </b> '.$_POST[name].'<br>
				<b>Телефон: </b> '.$_POST[phone].'<br>
				<b>Сообщение: </b> '.$_POST[message];
		$message .= '
			</body>
		</html>';


		$to = 'info@yandex.ru';

		$headers  = "Content-type: text/html; charset=utf-8 \r\n";
		$headers .= "From: noreply@site.com\r\n";


		mail($to, $subject, $message, $headers);
	}
?>
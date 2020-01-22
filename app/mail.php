<?
	if(isset ($_POST['title'])) {$title=$_POST['title'];}
	if(isset ($_POST['name'])) {$name=$_POST['name'];}
	if(isset ($_POST['phone'])) {$phonenum=$_POST['phone'];}
	if(isset ($_POST['part'])) {$part=$_POST['part'];}
	if(isset ($_POST['brand'])) {$brand=$_POST['brand'];}
	if(isset ($_POST['city'])) {$city=$_POST['city'];}

	$to = "zakaz@studioin.com.ua"; // Замениь на емаил клиента

	$message = "Форма: $title <br><br>";
	if ( $name || $phonenum || $part || $brand || $city ) {
		$message .= ""
			. ( $name ? " Имя:  $name <br>" : "")
			. ( $phonenum ? " Телефон:  $phonenum <br>" : "")
			. ( $part  ? " Запчасть: $part <br>" : "")
			. ( $brand  ? " Бранд: $brand <br>" : "")
			. ( $city  ? " Город: $city <br>" : "");
	}

	$headers = "MIME-Version: 1.0\r\n";
	$headers .= "Content-type: text/html; charset=UTF-8\r\n";
	$headers .= "From: no-reply@wamp.com.ua"; // Заменить домен на домен клиента

	if (!$title && !$phonenum) {
	} else {
		mail($to,"New lead(engineering.wamp.com.ua)",$message,$headers); // Заменить домен на домен клиента
	}
?>
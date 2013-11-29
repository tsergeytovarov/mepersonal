<?php
	if(isset($_POST['name']))
	{
		$mess = "Имя ".$_POST['name']." Мыло ".$_POST['mail']." Сообщение ".$_POST['mess'];
		mail("tovarov.piter@gmail.com", "Сообщение с моего сайта", $mess);
	}
?>
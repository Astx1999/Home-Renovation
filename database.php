<?php

$connect=mysqli_connect('localhost','root','','db');

if(mysqli_connect_errno($connect))
{
		echo 'Failed to connect';
}

?>

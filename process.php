<?php
require_once('database.php');

// create a variable

$amount=$_POST['amount']; //ajax name


//Execute the query
mysqli_query($connect, "INSERT INTO renovation(total) VALUES('$amount')");


if(mysqli_affected_rows($connect) > 0){
 echo "<p>готово</p>";
 echo "<a href='index.php'>Go Back</a>";
} else {
 echo "Fail<br />";
 echo mysqli_error ($connect);
}
?>

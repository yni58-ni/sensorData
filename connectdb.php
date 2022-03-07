<?php
$dbhost = "localhost";
$dbuser= "root";
$dbpass = "a!438589185@L";
$dbname = "live";
$connection = mysqli_connect($dbhost, $dbuser,$dbpass,$dbname); 
if (mysqli_connect_errno()) {
	die("Database connection failed:".
	mysqli_connection_error()."(".mysqli_connect_errno().")");
}
?>

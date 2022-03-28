<!DOCTYPE html>
<html lang="en">
<head>
</head>
<body>
<?php
$dbhost = "MacBook-Pro.local";
$dbuser= "root";
$dbpass = "";
$dbname = "sensor_data";
$connection = mysqli_connect($dbhost, $dbuser,$dbpass,$dbname); 
$query = 'SELECT * FROM data';
if (mysqli_connect_errno()) {
	echo "Failed to connect to MySQL: " . mysqli_connect_error();
}
$result = mysqli_query($connection,$query);
if (!$result) {
	die("database query failed.");
  }
echo "<table border='1'>";

while($row = mysqli_fetch_assoc($result))
{
echo "<tr>";
echo "<td>" . $row['id'] . "</td>";
echo "<td>" . $row['time'] . "</td>";
echo "<td>" . $row['value'] . "</td>";
echo "</tr>";
}
echo "</table>";

mysqli_close($connection);
?> 
	
</body>
</html>

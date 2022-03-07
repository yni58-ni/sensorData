<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Document</title>
</head>
<body>
<?php
	include'connecttodb.php';
?>
<h1> Here are the censor data:</h1>
<?php
    $sql="SELECT * FROM liveUpdate;";
    $result = mysqli_query($connection,$sql);
    $resultCheck = mysqli_num_rows($result);

    if(resultCheck >0){
        while($row = mysqli_fetch_assoc($result)){
            echo $row['time'];
        }
    }
?>
</body>
</html>
<?php

$db_host = "localhost";
$db_user = "root";
$db_pass = "";
$db_name = "edu_db_accounts";

// Create a connection
$conn = mysqli_connect($db_host, $db_user, $db_pass, $db_name);


// Check connection
if (!$conn){
    echo "Connection Failed!";
}

?>

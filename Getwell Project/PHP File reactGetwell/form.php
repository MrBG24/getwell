<?php
header("Access-Control-Allow-Origin: *"); //add this CORS header to enable any domain to send HTTP requests to these endpoints:
$host = "localhost"; 
$user = "root"; 
$password = ""; 
$dbname = "react_getwell_database"; 
$id = '';

$con = mysqli_connect($host, $user, $password,$dbname);

$method = $_SERVER['REQUEST_METHOD'];

if (!$con) {
die("Connection failed: " . mysqli_connect_error());
}
switch ($method) {
case 'GET':
$sql = "select * from form"; 
break;

case 'POST':
$name = $_POST["name"];
$fathersName = $_POST["fathersName"];
$age = $_POST["age"];
$gender = $_POST["gender"];
$email = $_POST["email"];
$problems = $_POST["problems"];
$circums = $_POST["circums"];
$problemBox = $_POST["problemBox"];
$comfort = $_POST["comfort"];

$sql = "insert into form (name, fathersName, age, gender, email, problems, circums, problemBox, comfort) values ('$name', '$fathersName', '$age', '$gender', '$email', '$problems', '$circums', '$problemBox', '$comfort')"; 
break;
}

// run SQL statement
$result = mysqli_query($con,$sql);

// die if SQL statement failed
if (!$result) {
http_response_code(404);
die(mysqli_error($con));
}

if ($method == 'GET') {
if (!$id) echo '[';
for ($i=0 ; $i<mysqli_num_rows($result) ; $i++) {
echo ($i>0?',':'').json_encode(mysqli_fetch_object($result));
}
if (!$id) echo ']';
} elseif ($method == 'POST') {
echo json_encode($result);
} else {
echo mysqli_affected_rows($con);
}

$con->close();
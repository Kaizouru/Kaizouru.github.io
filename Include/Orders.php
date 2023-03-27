<?php
header('Content-Type: text/html; charset=utf-8');
$server_name = "localhost";
$username = "idangd_idangadas";
$password = "12345";
$db_name = "idangd_JerusalemUsers";


$conn = new mysqli($server_name, $username, $password, $db_name);
if ($conn->connect_error) {
    die("connection failed:" . $conn->connect_error);
}

$mysql_link = mysqli_connect($server_name, $username, $password);
mysqli_select_db($mysql_link, $db_name);
$conn->query("SET NAMES 'utf8'");

if ($_POST) {
    $e_message = "";
    // add a new customer
    $email = $_POST['email'];
    $first_name = $_POST['first_name'];
    $last_name = $_POST['last_name'];
    $phone_number = $_POST['phone'];
    $city = $_POST['city'];
    $street = $_POST['street'];
    $house_number = $_POST['street_num'];

    $sql3 = "SELECT * FROM `customers` WHERE email ='" .$email. "'";
    $result = $conn->query($sql3);
    if ($result->num_rows == 0) {
        $sql = "INSERT INTO `customers` (`email`, `first_name`, `last_name`,`phone_num`,`city`,`street`,`street_num`)
    VALUES ('" . $email . "','" .$first_name. "','" .$last_name. "','" .$phone_number. "','" .$city. "','" .$street. "','" .$house_number. "')";

        if ($conn->query($sql) == FALSE) {
            echo "cannot add new customer, error is " . $conn->error;
            exit();
        }
       
    }
    // add a new Order
    $email = $_POST['email'];
    $guide_name = $_POST['guide'];
    $order_date = $_POST['date'];
    $order_hour = $_POST['time'];
    $tour_name= $_POST['tour'];

    if ($guide_name == 'idan')
        $idan_g = TRUE;
    else
        $idan_g = FALSE;
    if ($guide_name == 'aviv')
        $aviv_t = TRUE;
    else
        $aviv_t = FALSE;
    if ($guide_name == 'shai')
        $shai_z = TRUE;
    else
        $shai_z = FALSE;

    $comments = $_POST['comment'];
  


    if ($tour_name == "120") {
        $tour_name = "History tour";
    } elseif ($tour_name == "350") {
        $tour_name = "Sportive tour";
    } elseif ($tour_name == "200") {
        $tour_name = "Attractions tour";
    }

    $sql2 = "INSERT INTO `orders` (`email`, `tour_name`,`order_date`,`order_hour`,`idan_g`,`aviv_t`,`shai_z`,`comments`)
    VALUES ('" . $email . "',' " .$tour_name. "','" .$order_date. "','".$order_hour. "','" .$idan_g. "','" .$aviv_t. "','" .$shai_z. "','".$comments. "')";

    if ($conn->query($sql2) == FALSE) {
        echo "cannot add new customer, error is " . $conn->error;
        exit();
    }
    else {
        echo '<script type="text/javascript">'; 
    echo 'alert("תודה רבה שהקדשת לנו מזמנך היקר , הנתונים נקלטו בהצלחה ונציג שלנו יחזור אלייך תוך יום עסקים אחד :)");'; 
    echo 'window.location.href = "../index.html";';
    echo '</script>'; 
    }

}

?>


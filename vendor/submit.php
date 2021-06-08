<?php 

    session_start();
    require_once 'connect.php';

    $name = $_POST['name'];
    $email = $_POST['Email'];
    $tel = $_POST['phone'];
    $service = $_POST['service'];
    $message = $_POST['message'];

    $send = mysqli_query($connect, "INSERT INTO `applications` (`name`, `email`, `tel`, `service`, `message`) VALUES ('$name', '$email', '$tel', '$service', '$message')");
    $_SESSION['message'] = 'Заявка успешно отрпавленна!';

    if (mysqli_num_rows($send) > 0) {

        $user = mysqli_fetch_assoc($send);

        $_SESSION['user'] = [
            "id" => $user['id'],
            "name" => $user['name'],
            "tel" => $user['tel'],
            "email" => $user['email'],
            "service" => $user['service'],
            "message" => $user['message']
        ];
    }
        
    header('Location: /index.php');

?>
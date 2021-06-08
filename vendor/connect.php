<?php

    $connect = mysqli_connect('localhost', 'root', 'root', '');

    if (!$connect) {
        die('Error connect to DataBase');
    }
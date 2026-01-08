<?php
include 'config.php';

if ($_SERVER['REQUEST_METHOD'] === 'POST') {
    $name = $_POST['task_name'];
    $desc = $_POST['description'];
    $sql = "INSERT INTO tasks (task_name, description) VALUES (?, ?)";
    
    $stmt = $conn->prepare($sql);
    $stmt->bind_param("ss", $name, $desc);
    $stmt->execute();
    
    header("Location: index.php");
}
?>
<?php
include 'config.php';

if (isset($_GET['id'])) {
    $id = $_GET['id'];
    
    // Get current status
    $sql = "SELECT status FROM tasks WHERE task_id = ?";
    $stmt = $conn->prepare($sql);
    $stmt->bind_param("i", $id);
    $stmt->execute();
    $stmt->bind_result($status);
    $stmt->fetch();
    $stmt->close();
    
    $new_status = $status === "Pending" ? "Done" : "Pending";
    
    $sql = "UPDATE tasks SET status=? WHERE task_id=?";
    $stmt = $conn->prepare($sql);
    $stmt->bind_param("si", $new_status, $id);
    $stmt->execute();
    
    header("Location: index.php");
}
?>
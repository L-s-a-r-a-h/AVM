<?php
if ($_SERVER["REQUEST_METHOD"] == "POST" && isset($_POST['signinBtn'])) {
    // Get form data
    $email = $_POST['email'];
    $password = $_POST['password'];

    
    $servername = "localhost";
    $username = "root";
    $password = "";
    $dbname = "user_authentication"; 

    // Create connection
    $conn = new mysqli($servername, $username, $password, $dbname);

    // Check connection
    if ($conn->connect_error) {
        die("Connection failed: " . $conn->connect_error);
    }

    
    $sql = "SELECT id, full_name, email, password FROM users WHERE email='$email'";
    $result = $conn->query($sql);

    if ($result->num_rows > 0) {
        $row = $result->fetch_assoc();
        if (password_verify($password, $row['password'])) {
            echo "Login successful";
        } else {
            echo "Incorrect password";
        }
    } else {
        echo "User not found";
    }

    $conn->close();
}
?>

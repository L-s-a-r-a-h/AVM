<?php
    $email = $_POST['email'];
    $password = $_POST['password'];

    // Database Connection
    $host = "your_host";
    $username = "your_username";
    $password_db = "your_password";
    $database = "your_database";

    $con = new mysqli($host, $username, $password_db, $database);

    if ($con->connect_error) {
        die("Connection failed: " . $con->connect_error);
    }

    // Prepare SQL query
    $stmt = $con->prepare("SELECT id, email, password FROM registration WHERE email = ?");
    $stmt->bind_param("s", $email);
    $stmt->execute();
    $result = $stmt->get_result();

    // Check if the email exists in the database
    if ($result->num_rows === 1) {
        $row = $result->fetch_assoc();

        // Verify the password
        if (password_verify($password, $row['password'])) {
            echo "<h2>Login Successful</h2>";

            // Start a session and store user information if needed
            $_SESSION['user_id'] = $row['id'];

        } else {
            echo "<h2>Invalid Email or Password</h2>";
        }
    } else {
        echo "<h2>Invalid Email or Password</h2>";
    }

    // Close the database connection
    $con->close();
?>
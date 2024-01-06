<?php

if ($_SERVER['REQUEST_METHOD'] !== 'POST') {
    // Script accessed directly without form submission
    $response = array('message' => 'Invalid request.');
    echo json_encode($response);
    exit;
}


// Get form data
$name = $_POST['name'];
$dob = $_POST['dob'];
$father_name = $_POST['father_name'];
$location = $_POST['location'];
$pin_code = $_POST['pin_code'];
$mobile = $_POST['mobile'];
$email = $_POST['email'];
$examination = $_POST['examination'];
$year = $_POST['year'];
$marks = $_POST['marks'];
$percentage = $_POST['percentage'];
$course = $_POST['course'];
$address = $_POST['address'];


// Set up email headers
$headers = "From: www.jenneysacademy.com" . "\r\n" .
           "Reply-To: $u_email" . "\r\n" ;

// Set up email content
$subject = 'New Application Form the Website from '.$name;
$message = 
"Name: $name\n
Dob: $dob\n
Father name: $father_name\n
Location : $location \n
Pincode : $pin_code \n
Mobile : $mobile \n
Email : $email \n
Examination : $examination \n
Year: $year\n
Marks : $marks \n
Percentage : $percentage \n
Course : $course \n
Address : $address \n

";




error_reporting(E_ALL);
ini_set('display_errors', 1);

if (mail('jenneysacademy@gmail.com', $subject, $message, $headers)) {
    // Email sent successfully
    $response = array('message' => 'Application sent successfully!');
    echo json_encode($response);
} else {
    // Failed to send email
    $response = array('message' => 'Failed to send Application, Please try again.');
    echo json_encode($response);
    echo "Error: " . error_get_last()['message'];
}
?>

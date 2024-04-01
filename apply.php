<?php
require '../vendor/vendor/autoload.php';

use Aws\Ses\SesClient;
use Aws\Exception\AwsException;

if ($_SERVER['REQUEST_METHOD'] !== 'POST') {
    // Script accessed directly without form submission
    $response = array('message' => 'Invalid request.');
    echo json_encode($response);
    exit;
}

$config = require '../vendor/config.php';

$awsKey = $config['aws']['key'];
$awsSecret = $config['aws']['secret'];
$awsRegion = $config['aws']['region'];

$sesClient = new SesClient([
    'version' => 'latest',
    'region' => $awsRegion,
    'credentials' => [
        'key' => $awsKey,
        'secret' => $awsSecret,
    ],
]);

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
$headers = "From: www.jenneysacademy.com\r\n" .
           "Reply-To: $email\r\n" .
           "X-Mailer: PHP/" . phpversion();

// Set up email content
$subject = 'New Application Form the Website from ' . $name;
$message = "Name: $name\n" .
           "Dob: $dob\n" .
           "Father name: $father_name\n" .
           "Location : $location \n" .
           "Pincode : $pin_code \n" .
           "Mobile : $mobile \n" .
           "Email : $email \n" .
           "Examination : $examination \n" .
           "Year: $year\n" .
           "Marks : $marks \n" .
           "Percentage : $percentage \n" .
           "Course : $course \n" .
           "Address : $address \n\n";

// Enable error reporting
error_reporting(E_ALL);
ini_set('display_errors', 1);

$senderEmail = 'mailer@jenneysacademy.com';
$recipientEmail = 'jenneysacademy@gmail.com';

try {
    $result = $sesClient->sendEmail(['Destination' => [
        'ToAddresses' => [$recipientEmail],
    ],
    'Message' => [
        'Body' => [
            'Text' => [
                'Charset' => 'UTF-8',
                'Data' => $message,
            ],
        ],
        'Subject' => [
            'Charset' => 'UTF-8',
            'Data' => $subject,
        ],
    ],
    'Source' => $senderEmail,
    'ReplyToAddresses' => [$email], // Specify Reply-To header

]);

// Prepare JSON response
$response = ['message' => 'Application sent successfully!', 'messageId' => $result['MessageId']];
echo json_encode($response);
} catch (AwsException $e) {
// Prepare JSON error response
$response = ['message' => 'Application to send email. Contact Support', 'error' => $e->getAwsErrorMessage()];
echo json_encode($response);
}
?>
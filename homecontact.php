
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
// Get form data
$u_name = $_POST['name'];
$u_email = $_POST['email'];
$phone = $_POST['phone'];
// Set up email headers
$headers = "From: www.jenneysacademy.com" . "\r\n" .
           "Reply-To: $u_email" . "\r\n" ;

// Set up email content
$subject = 'Enquiry Form the Website';
$message = "Name: $u_name\nEmail: $u_email\nPhone Number: $phone";
error_reporting(E_ALL);
ini_set('display_errors', 1);

$senderEmail = 'asquaremailer@gmail.com';
$recipientEmail = 'elavarasan5193@gmail.com';
$subject = 'Enquiry Form the Website';

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
]);

// Prepare JSON response
$response = ['message' => 'Email sent successfully!', 'messageId' => $result['MessageId']];
echo json_encode($response);
} catch (AwsException $e) {
// Prepare JSON error response
$response = ['message' => 'Failed to send email.', 'error' => $e->getAwsErrorMessage()];
echo json_encode($response);
}
?>

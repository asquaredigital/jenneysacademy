
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
$f_name = $_POST['father_name'];
$email = $_POST['email'];
$mobile = $_POST['mobile'];
$year = $_POST['year'];
$position = $_POST['position'];

$address = $_POST['address'];




// Set up email headers
$headers = "From: www.jenneysacademy.com" . "\r\n" .
           "Reply-To: $email" . "\r\n" ;

// Set up email content
$subject = 'Alumni Enquiry Form the Website';
$message = "Name: $name\nFather Name: $f_name\nEmail: $email\nPhone Number: $mobile\nYear Passed Out: $year\nPosition: $position\nAddress: $address";
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
$response = ['message' => 'Alumni details sent successfully!', 'messageId' => $result['MessageId']];
echo json_encode($response);
} catch (AwsException $e) {
// Prepare JSON error response
$response = ['message' => 'Failed to send Alumni details, Contact Support.', 'error' => $e->getAwsErrorMessage()];
echo json_encode($response);
}
?>


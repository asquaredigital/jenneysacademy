<?php
// Safe PHP backend for Google Translate

$apiKey = 'AIzaSyBs0UZDa5lcoPvQ3xzIMqhDNO56iGSIQVs'; // Replace properly!

// 1. Read raw JSON body
$input = file_get_contents('php://input');
$data = json_decode($input, true);

// 2. Validate
if (!isset($data['texts']) || !is_array($data['texts']) || count($data['texts']) === 0) {
    http_response_code(400);
    echo json_encode(['error' => ['message' => 'Required Text']]);
    exit;
}

// 3. Prepare the Google API request
$postFields = [
    'q' => array_filter($data['texts']), // Remove any accidental empty entries
    'target' => 'ta',
    'format' => 'text'
];

// 4. Set up cURL request
$url = 'https://translation.googleapis.com/language/translate/v2?key=' . $apiKey;

$ch = curl_init($url);
curl_setopt($ch, CURLOPT_RETURNTRANSFER, true);
curl_setopt($ch, CURLOPT_POST, true);
curl_setopt($ch, CURLOPT_HTTPHEADER, ['Content-Type: application/json']);
curl_setopt($ch, CURLOPT_POSTFIELDS, json_encode($postFields));

// 5. Execute
$response = curl_exec($ch);
$error = curl_error($ch);
$httpcode = curl_getinfo($ch, CURLINFO_HTTP_CODE);
curl_close($ch);

// 6. Output back to browser
header('Content-Type: application/json');
if ($response === false) {
    http_response_code(500);
    echo json_encode(['error' => ['message' => $error]]);
} else {
    http_response_code($httpcode);
    echo $response;
}
?>


<?php
// translate.php

$apiKey = 'AIzaSyBs0UZDa5lcoPvQ3xzIMqhDNO56iGSIQVs'; // replace it

// Read raw POST data
$input = file_get_contents('php://input');
$data = json_decode($input, true);

if (!isset($data['texts']) || !is_array($data['texts']) || count($data['texts']) === 0) {
    http_response_code(400);
    echo json_encode(['error' => ['message' => 'Required Text']]);
    exit;
}

// Prepare request to Google
$postFields = [
    'q' => $data['texts'],
    'target' => 'ta',
    'format' => 'text'
];

$ch = curl_init();
curl_setopt($ch, CURLOPT_URL, "https://translation.googleapis.com/language/translate/v2?key=$apiKey");
curl_setopt($ch, CURLOPT_RETURNTRANSFER, 1);
curl_setopt($ch, CURLOPT_POST, 1);
curl_setopt($ch, CURLOPT_HTTPHEADER, ['Content-Type: application/json']);
curl_setopt($ch, CURLOPT_POSTFIELDS, json_encode($postFields));

$response = curl_exec($ch);
$httpCode = curl_getinfo($ch, CURLINFO_HTTP_CODE);

if (curl_errno($ch)) {
    http_response_code(500);
    echo json_encode(['error' => ['message' => curl_error($ch)]]);
    exit;
}

curl_close($ch);

header('Content-Type: application/json');
http_response_code($httpCode);
echo $response;
?>

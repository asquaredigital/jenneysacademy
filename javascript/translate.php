<?php
// PHP backend for Google Translate + Server-side Caching

$apiKey = 'AIzaSyBs0UZDa5lcoPvQ3xzIMqhDNO56iGSIQVs'; // <-- Replace your actual API key here

// 1. Read incoming JSON
$input = file_get_contents('php://input');
$data = json_decode($input, true);

// 2. Validate
if (!isset($data['texts']) || !is_array($data['texts']) || count($data['texts']) === 0) {
    http_response_code(400);
    echo json_encode(['error' => ['message' => 'Required Text']]);
    exit;
}

$texts = array_filter($data['texts']);
$targetLang = 'ta'; // Always translating to Tamil

// 3. Prepare Cache Directory
$cacheFolder = __DIR__ . '/cache/translate/';
if (!file_exists($cacheFolder)) {
    mkdir($cacheFolder, 0755, true);
}

// 4. Generate unique cache filename based on input
$hash = md5(json_encode($texts) . $targetLang);
$cacheFile = $cacheFolder . $hash . '.json';

// 5. If cache exists, serve from cache
if (file_exists($cacheFile)) {
    $cachedContent = file_get_contents($cacheFile);
    header('Content-Type: application/json');
    echo $cachedContent;
    exit;
}

// 6. Else, call Google Translate API
$postFields = [
    'q' => $texts,
    'target' => $targetLang,
    'format' => 'text'
];

$url = 'https://translation.googleapis.com/language/translate/v2?key=' . $apiKey;

$ch = curl_init($url);
curl_setopt($ch, CURLOPT_RETURNTRANSFER, true);
curl_setopt($ch, CURLOPT_POST, true);
curl_setopt($ch, CURLOPT_HTTPHEADER, ['Content-Type: application/json']);
curl_setopt($ch, CURLOPT_POSTFIELDS, json_encode($postFields));

$response = curl_exec($ch);
$error = curl_error($ch);
$httpcode = curl_getinfo($ch, CURLINFO_HTTP_CODE);
curl_close($ch);

// 7. Save to cache if successful
if ($httpcode === 200 && $response !== false) {
    file_put_contents($cacheFile, $response);
}

// 8. Output back to browser
header('Content-Type: application/json');
if ($response !== false) {
    http_response_code($httpcode);
    echo $response;
} else {
    http_response_code(500);
    echo json_encode(['error' => ['message' => $error]]);
}
?>

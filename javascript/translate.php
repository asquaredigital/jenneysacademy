<?php
if ($_SERVER['REQUEST_METHOD'] === 'POST') {
    $texts = $_POST['q']; // multiple texts
    $target = $_POST['target'] ?? 'ta';

    $apiKey = 'AIzaSyBs0UZDa5lcoPvQ3xzIMqhDNO56iGSIQVs'; // replace properly

    $url = 'https://translation.googleapis.com/language/translate/v2?key=' . $apiKey;

    $data = array(
        'q' => $texts,
        'target' => $target,
        'format' => 'text'
    );

    $payload = json_encode($data);

    $ch = curl_init($url);
    curl_setopt($ch, CURLOPT_RETURNTRANSFER, true);
    curl_setopt($ch, CURLOPT_POSTFIELDS, $payload);
    curl_setopt($ch, CURLOPT_HTTPHEADER, array(
        'Content-Type: application/json',
        'Content-Length: ' . strlen($payload)
    ));

    $response = curl_exec($ch);
    $error = curl_error($ch);
    curl_close($ch);

    if ($response === false) {
        echo json_encode(['error' => $error]);
    } else {
        echo $response;
    }
}
?>

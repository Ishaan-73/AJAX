<?php
// Read existing records from JSON file
$records = json_decode(file_get_contents('records.json'), true);

// Get the name from the POST request
$nameToCheck = json_decode(file_get_contents('php://input'), true)['name'];

// Check if a record with the same name already exists
$recordExists = false;
foreach ($records as $record) {
    if ($record['name'] === $nameToCheck) {
        $recordExists = true;
        break;
    }
}

// Send response
header('Content-Type: application/json');
echo json_encode(['exists' => $recordExists]);
?>

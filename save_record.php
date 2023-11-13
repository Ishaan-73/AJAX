<?php
    $records = json_decode(file_get_contents("records.json"), true);
    $new = json_decode(file_get_contents("php://input"), true);

    $records[] = $new;

    file_put_contents("records.json",json_encode($records));

    echo json_encode(['success' => true]);
?>
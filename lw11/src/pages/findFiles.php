<?php
header('Content-type: application/json');

$response = [];
$files = glob('../messages/*.txt');
foreach ($files as $filename) {
    array_push($response,
    "
        <div class='user__data'>
            <img src='img/user.png'>
            <p>
                "file_get_contents($filename)"
            </p>
        </div>
    "
);
}
echo json_encode($response);
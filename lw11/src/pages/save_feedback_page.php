<?php
header('Content-type: application/json');
header("Access-Control-Allow-Origin: *");
header('Access-Control-Allow-Methods: POST,GET,OPTIONS');
header('Access-Control-Allow-Headers: Origin, X-Requested-With, Content-Type, Accept');

$inputJSON = file_get_contents('php://input');
$input = json_decode($inputJSON, true);

$email = $input['email'];
$name = $input['name'];
$activity = $input['activity'];

$file = "../messages/" . strtolower($email) . ".txt";

try
{
	if (file_exists($file))
	{
		$tempArray = file($file);
		if (!(empty($name)))
		{
			$tempArray[0] = "Name: $name\n";
		}

		if (!(empty($activity)))
		{
			$tempArray[2] = "Activity: $activity";
		}

		file_put_contents($file, $tempArray);
	}
	else
	{
		$userTxt = @fopen($file, "w");
		if (!$userTxt) {
			throw new Exception(`File is none`);
		}
		fwrite($userTxt, "Name: $name\n");
		fwrite($userTxt, "Email: $email\n");
		fwrite($userTxt, "Activity: $activity");
		fclose($userTxt);
	}

	$response = array('status' => 200, 'message' => 'OK');
	echo json_encode($response);
}
catch (Exception $e)
{
	$response = array('status' => 500, 'message' => 'Fine is none');
	echo json_encode($response);
}


// function validateForm(): void
// {
//     $name = getPostParameter('name');
//     $email = getPostParameter('email');
//     $activity = getPostParameter('activity');
//     $dataForm = [
//         'name' => $name,
//         'email' => $email,
//         'activity' => $activity,
//         'success' => true,
//     ];
//     $dataSaved = saveData($dataForm);
//
//     if (!$dataSaved)
//     {
//         $arr = ['message' => 'Success'];
//         http_response_code(200);
//     }
//     else
//     {
//         $arr = ['message' => 'Form data hasnt been saved'];
//         http_response_code(500);
//     }
//     saveData($dataForm);
//     http_response_code(200);
//
//
//     header("Content-Type: application/json");
//     header("Access-Control-Allow-Origin: *");
//     header('Access-Control-Allow-Methods: POST,GET,OPTIONS');
//     header('Access-Control-Allow-Headers: Origin, X-Requested-With, Content-Type, Accept');
//     echo json_encode($dataForm);
// }
//
// function saveData(array $args): void
// {
//     $fileData = array_diff_key($args, ['success' => true]);
//     $fileData = json_encode($fileData, JSON_UNESCAPED_UNICODE | JSON_PRETTY_PRINT);
//     $fileData = str_replace(['{', '"', '}'], '', $fileData);
//     file_put_contents(__DIR__ . '/messages/' . strtolower($args['email']) . '.txt', $fileData);
// }
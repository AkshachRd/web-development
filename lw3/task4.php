<?php
header("Content-Type: text/plain");
$inputData = array(
	'first_name' => getQueryStringParameter('first_name'),
	'last_name' => getQueryStringParameter('last_name'),
	'email' => getQueryStringParameter('email'),
	'age' => getQueryStringParameter('age'),
);
surveySaver($inputData);

function surveySaver(array $data): void
{
	$resultString = '';

	if (($data['first_name'] !== null) && ($data['first_name'] !== ''))
	{
		$resultString .= 'First Name: ';
		$resultString .= $data['first_name'];
		$resultString .= "\n";
	}
	if (($data['last_name'] !== null) && ($data['last_name'] !== ''))
	{
		$resultString .= 'Last Name: ';
		$resultString .= $data['last_name'];
		$resultString .= "\n";
	}
	$resultString .= 'Email: ';
	$resultString .= $data['email'];
	$resultString .= "\n";
	if (($data['age'] !== null) && ($data['age'] !== ''))
	{
		$resultString .= 'Age: ';
		$resultString .= $data['age'];
	}
	$filename = './data/';
	$filename .= $data['email'];
	$filename .= '.txt';
    file_put_contents($filename, $resultString);
}

function getQueryStringParameter(string $name): ?string
{
   return isset($_GET[$name]) ? $_GET[$name] : null;
}
<?php
header("Content-Type: text/plain");
$inputEmail = getQueryStringParameter('email');
surveyInfo($inputEmail);

function surveyInfo(string $email): void
{
    $filename = './data/';
    $filename .= $email;
    $filename .= '.txt';
    $data = file_get_contents($filename);
    echo 'First Name: '.getValueFromSurveyInfo($data, 'First Name: ')."\n";
    echo 'Last Name: '.getValueFromSurveyInfo($data, 'Last Name: ')."\n";
    echo 'Email: '.getValueFromSurveyInfo($data, 'Email: ')."\n";
    echo 'Age: '.getValueFromSurveyInfo($data, 'Age: ')."\n";
}

function getValueFromSurveyInfo(string $data, string $position): ?string
{
    $valueOfPosition = '';
    if (strpos($data, $position) !== false)
    {
        $i = strpos($data, $position) + strlen($position);
        while (($data[$i] !== '') && ($data[$i] !== "\n"))
        {
            $valueOfPosition .= $data[$i];
            $i++;
        }
    }
    return $valueOfPosition;
}

function getQueryStringParameter(string $name): ?string
{
    return isset($_GET[$name]) ? $_GET[$name] : null;
}
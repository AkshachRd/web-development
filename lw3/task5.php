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
    if (getValueFromSurveyInfo($data, 'First Name: ') === '')
    {
        echo 'First Name:  ';
        echo "\n";
    }
    else
    {
        echo 'First Name: '.getValueFromSurveyInfo($data, 'First Name: ');
        echo "\n";
    }
    if (getValueFromSurveyInfo($data, 'Last Name: ') === '')
    {
        echo 'Last Name:  ';
        echo "\n";
    }
    else
    {
        echo 'Last Name: '.getValueFromSurveyInfo($data, 'Last Name: ');
        echo "\n";
    }
    if (getValueFromSurveyInfo($data, 'Email: ') === '')
    {
        echo 'Email:  ';
        echo "\n";
    }
    else
    {
        echo 'Email: '.getValueFromSurveyInfo($data, 'Email: ');
        echo "\n";
    }
    if (getValueFromSurveyInfo($data, 'Age: ') === '')
    {
        echo 'Age:  ';
        echo "\n";
    }
    else
    {
        echo 'Age: '.getValueFromSurveyInfo($data, 'Age: ');
        echo "\n";
    }
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
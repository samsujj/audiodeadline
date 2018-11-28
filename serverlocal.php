<?php
header('Content-type: text/html');
header('Access-Control-Allow-Origin: * ');
header("Access-Control-Allow-Credentials: true");
header('Access-Control-Allow-Methods: GET, PUT, POST, DELETE, OPTIONS');
header('Access-Control-Max-Age: 1000');
header('Access-Control-Allow-Headers: Content-Type, Content-Range, Content-Disposition, Content-Description');

$data = json_decode(file_get_contents("php://input"));

function callpostagain($data1){
    $data_string = json_encode($data1);
    $d=http_build_query($data1);

    $ch = curl_init("http://audiodeadline.com:3009/" . $_GET['q'].'?'.$d);
    curl_setopt($ch, CURLOPT_CUSTOMREQUEST, "GET");
    curl_setopt($ch, CURLOPT_POSTFIELDS, $data_string);
    curl_setopt($ch, CURLOPT_RETURNTRANSFER, true);
    $response= curl_exec($ch);
    echo (($response));
    curl_close($ch);
}

function callgetagain(){
    $curl = curl_init();
    curl_setopt_array($curl, array(
        CURLOPT_URL => "http://audiodeadline.com:3009/" . $_GET['q'],
        CURLOPT_RETURNTRANSFER => true,
        CURLOPT_ENCODING => "",
        CURLOPT_MAXREDIRS => 10,
        CURLOPT_TIMEOUT => 30,
        CURLOPT_HTTP_VERSION => CURL_HTTP_VERSION_1_1,
        CURLOPT_CUSTOMREQUEST => "GET",
        ));
    $headers = [];
    curl_setopt($curl, CURLOPT_HTTPHEADER, $headers);
    $response = curl_exec($curl);
    echo $response;
}

if(count($data)==0) {
    $curl = curl_init();
    curl_setopt_array($curl, array(
        CURLOPT_URL => "http://audiodeadline.com:3009/" . $_GET['q'],
        CURLOPT_RETURNTRANSFER => true,
        CURLOPT_ENCODING => "",
        CURLOPT_MAXREDIRS => 10,
        CURLOPT_TIMEOUT => 30,
        CURLOPT_HTTP_VERSION => CURL_HTTP_VERSION_1_1,
        CURLOPT_CUSTOMREQUEST => "GET",
        ));
    $headers = [];
    curl_setopt($curl, CURLOPT_HTTPHEADER, $headers);
    $response = curl_exec($curl);
    if(strlen($response)==0) echo $response;
    else callgetagain();
}else{
    $data_string = json_encode($data);
    $d=http_build_query($data);
    $ch = curl_init("http://audiodeadline.com:3009/" . $_GET['q'].'?'.$d);
    curl_setopt($ch, CURLOPT_CUSTOMREQUEST, "GET");
    curl_setopt($ch, CURLOPT_POSTFIELDS, $data_string);
    curl_setopt($ch, CURLOPT_RETURNTRANSFER, true);
    $response= curl_exec($ch);
    if(strlen($response)>2)
        echo (($response));
    else callpostagain($data);
    curl_close($ch);
}
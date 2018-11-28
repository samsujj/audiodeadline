<?php
header('Content-type: text/html');
header('Access-Control-Allow-Origin: * ');  //I have also tried the * wildcard and get the same response
header("Access-Control-Allow-Credentials: true");
header('Access-Control-Allow-Methods: GET, PUT, POST, DELETE, OPTIONS');
header('Access-Control-Max-Age: 1000');
header('Access-Control-Allow-Headers: Content-Type, Content-Range, Content-Disposition, Content-Description');

$postdata = file_get_contents("php://input");
$postdata = json_decode($postdata);

$amount = $postdata->amount;
$amount = floatval($amount);
$amount = number_format($amount,2);
$exp = $postdata->expmon.substr($postdata->expyear,-2);

$input_xml = '<?xml version="1.0" encoding="UTF-8"?>
     <UAPIRequest>
       <transaction>
         <process>online</process>
         <type>sale</type>
       </transaction>
       <requestData>
         <orderId>190</orderId>
         <orderAmount>'.$amount.'</orderAmount>
         <billing>
           <billingFirstName>'.$postdata->firstname.'</billingFirstName>
           <billingLastName>'.$postdata->lastname.'</billingLastName>
           <billingState>'.$postdata->state.'</billingState>
           <billingZipCode>'.$postdata->zip.'</billingZipCode>
           <billingCountry>US</billingCountry>
           <billingAddressLine1>'.$postdata->address.'</billingAddressLine1>
           <billingCity>'.$postdata->city.'</billingCity>
           <billingPhone>'.$postdata->phone.'</billingPhone>
           <billingEmail>'.$postdata->email.'</billingEmail>
         </billing>
         <shipping>
           <shippingFirstName>'.$postdata->firstname.'</shippingFirstName>
           <shippingLastName>'.$postdata->lastname.'</shippingLastName>
           <shippingState>'.$postdata->state.'</shippingState>
           <shippingZipCode>'.$postdata->zip.'</shippingZipCode>
           <shippingCountry>US</shippingCountry>
           <shippingAddressLine1>'.$postdata->address.'</shippingAddressLine1>
           <shippingCity>'.$postdata->city.'</shippingCity>
           <shippingPhone>'.$postdata->phone.'</shippingPhone>
           <shippingEmail>'.$postdata->email.'</shippingEmail>
         </shipping>
         <card>
           <cardNumber>'.$postdata->cardnumber.'</cardNumber>
           <cardExpiration>'.$exp.'</cardExpiration>
           <cardCVV>'.$postdata->cvv.'</cardCVV>
         </card>
         <currencyCode>840</currencyCode>
       </requestData>
     </UAPIRequest>';

$url = "https://uapi.total-apps.com/universalapi?";

$ch = curl_init();
curl_setopt($ch, CURLOPT_URL, $url);
curl_setopt($ch, CURLOPT_POST, true);
curl_setopt($ch, CURLOPT_USERAGENT, 'Mozilla/5.0 (compatible; MSIE 9.0; Windows NT 6.1; Trident/5.0)');
curl_setopt($ch, CURLOPT_HTTPHEADER, array('Content-type: text/xml','Expect: ','authorized: Aed4f9vjq7zkjV82Om0bscjaBtn13pHi4bgsX6qRAVyKxLOE'));
curl_setopt($ch, CURLOPT_SSLVERSION, 6);
curl_setopt($ch, CURLOPT_POSTFIELDS,$input_xml);
curl_setopt($ch, CURLOPT_SSL_VERIFYPEER, true);
curl_setopt($ch, CURLOPT_SSL_VERIFYHOST,2);
curl_setopt($ch, CURLOPT_RETURNTRANSFER, true);
curl_setopt($ch, CURLOPT_SSLVERSION, 6);
curl_setopt($ch, CURLOPT_CONNECTTIMEOUT, 300);
$output =  curl_exec($ch);
$responseCode = curl_getinfo($ch, CURLINFO_HTTP_CODE);
curl_close($ch);

$xml = new SimpleXMLElement($output);

$data['status'] = 'Declined';
$data['msg'] = '';
$data['transactionId'] = '';
$data['token'] = '';

if(isset($xml->transactionId)){
    $data['transactionId'] = (string)$xml->transactionId;
}

if(isset($xml->token)){
    $data['token'] = (string)$xml->token;
}

if(isset($xml->processorResponseCode)){
    if($xml->processorResponseCode == '000'){
        $data['status'] = 'Approved';
    }
    if(isset($xml->processorResponse)){
        $data['msg'] = (string)$xml->processorResponse;
    }
}else{
    if(isset($xml->statusMessage)){
        $data['msg'] = (string)$xml->statusMessage;
    }
}

echo json_encode($data);

?>




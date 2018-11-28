<?php
/**
 * Created by PhpStorm.
 * User: debasiskar
 * Date: 19/11/18
 * Time: 1:56 PM
 */

header('Content-type: text/html');
header('Access-Control-Allow-Origin: * ');  //I have also tried the * wildcard and get the same response
header("Access-Control-Allow-Credentials: true");
header('Access-Control-Allow-Methods: GET, PUT, POST, DELETE, OPTIONS');
header('Access-Control-Max-Age: 1000');
header('Access-Control-Allow-Headers: Content-Type, Content-Range, Content-Disposition, Content-Description');




/**
 * Created by PhpStorm.
 * User: debasiskar
 * Date: 17/01/18
 * Time: 12:57 PM
 */

//echo 56;exit;
//echo 56;exit;

    $input_xml = '<?xml version="1.0" encoding="UTF-8"?>
     <UAPIRequest>
       <transaction>
         <process>online</process>
         <type>sale</type>
       </transaction>
       <requestData>
         <orderId>190</orderId>
         <orderAmount>0.01</orderAmount>
         <billing>
           <billingFirstName>Dev</billingFirstName>
           <billingLastName>Smith</billingLastName>
           <billingState>CA</billingState>
           <billingZipCode>92656</billingZipCode>
           <billingCountry>US</billingCountry>
           <billingAddressLine1>800 carrie ln</billingAddressLine1>
           <billingCity>lakewoodvillage</billingCity>
         </billing>
         <shipping>
           <shippingCountry>US</shippingCountry>
           </shipping>
           <card>
           <cardNumber>5454545454545454</cardNumber>
           <cardExpiration>0125</cardExpiration>
           <cardCVV>123</cardCVV>
           </card>
           <currencyCode>840</currencyCode>
         </requestData></UAPIRequest>';
    //echo $input_xml;exit;

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
    print_r($output);
    //exit;
echo 88;
echo "<br/>";


    $xml = new SimpleXMLElement($output);
    //echo $xml->bbb->cccc->dddd['Id'];
    echo "<pre>";
    print_r($xml);
    //print_r($xml->Response->Transaction);
    echo "</pre>";


   /* echo "Transaction Status : ".$xml->Response->ExpressResponseMessage."<br/>";
    echo "Transaction Id : ".$xml->Response->Transaction->TransactionID."<br/>";
    echo "Approved Amount : ".$xml->Response->Transaction->ApprovedAmount."<br/>";*/



?>




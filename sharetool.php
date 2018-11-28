<?php
error_reporting(E_ALL);
/**
 * Created by PhpStorm.
 * User: INFLUXIQ-01
 * Date: 04-09-2018
 * Time: 11:54 PM
 */
$type=$_REQUEST['type'];
$actual_link = (isset($_SERVER['HTTPS']) && $_SERVER['HTTPS'] === 'on' ? "https" : "http") . "://$_SERVER[HTTP_HOST]$_SERVER[REQUEST_URI]";

//img static array
$imgarray['backend_static_1']='https://audiodeadline.com/assets/images/shareimage1.jpg';
$imgarray['backend_static_2']='https://audiodeadline.com/assets/images/shareimage2.png';
$imgarray['backend_static_3']='https://audiodeadline.com/assets/images/shareimage3.png';
$imgarray['backend_static_4']='https://audiodeadline.com/assets/images/shareimage4.png';
$imgarray['backend_static_5']='https://audiodeadline.com/assets/images/shareimage5.png';
$imgarray['backend_static_6']='https://audiodeadline.com/assets/images/shareimage6.png';
$imgarray['backend_static_7']='https://audiodeadline.com/assets/images/shareimage7.jpg';
$imgarray['backend_static_8']='https://audiodeadline.com/assets/images/shareimage8.jpg';
$imgarray['backend_static_9']='https://audiodeadline.com/assets/images/shareimage9.jpg';
$imgarray['backend_static_10']='https://audiodeadline.com/assets/images/shareimage10.jpg';
$imgarray['backend_static_11']='https://audiodeadline.com/assets/images/shareimage11.jpg';
$imgarray['sponsor_media_11']='https://audiodeadline.com/assets/images/sponsor_1_media_1.jpg';
$imgarray['sponsor_media_12']='https://audiodeadline.com/assets/images/sponsor_1_media_2.jpg';
$imgarray['sponsor_media_21']='https://audiodeadline.com/assets/images/sponsor_2_media_1.jpg';
$imgarray['sponsor_media_22']='https://audiodeadline.com/assets/images/sponsor_2_media_2.jpg';
$imgarray['sponsor_media_31']='https://audiodeadline.com/assets/images/sponsor_3_media_1.jpg';
$imgarray['sponsor_media_32']='https://audiodeadline.com/assets/images/sponsor_3_media_2.jpg';


if($type=='rsvpsignup'){
    //echo urlencode('http://audiodeadline.com/sharetool.php?type=rsvpsignup&media_id=backend_static_3&username=13214234');exit;
    $description ='AuidoDeadline.com brings A-List Artists and Independent Musicians together. RSVP for streaming ticket sales!';
    $title='RSVP for Streaming Tickets to your favorite A-List Musicians ';
    $image=$imgarray[$_REQUEST['media_id']];
    //echo 57;exit;
    //http://audiodeadline.com/sharetool.php?type=rsvpsignup&media_id=backend_static_2&username=1234
    //echo 'https://audiodeadline.com/signup/'.$_REQUEST['username'].'/'.$_REQUEST['media_id'];exit;
    //echo $_SERVER["HTTP_USER_AGENT"]; //exit;
    /* if(!strpos($_SERVER["HTTP_USER_AGENT"], "facebookexternalhit/")){
         echo 43;
     }
     if(!strpos($_SERVER["HTTP_USER_AGENT"], "Facebot")){
         echo 56;
     }*/
    ?>
    <script type="text/javascript">
        setTimeout(function () {
            window.location.href=("https://audiodeadline.com/signup/<?php echo $_REQUEST['username']; ?>/<?php echo $_REQUEST['media_id']; ?>");
        },100);
    </script>
    <?php
}

if($type=='ticketsale'){
    //echo urlencode('http://audiodeadline.com/sharetool.php?type=rsvpsignup&media_id=backend_static_3&username=13214234');exit;
    $description ='AuidoDeadline.com brings A-List Artists and Independent Musicians together.';
    $title='Ticket Sale';
    $image=$imgarray[$_REQUEST['media_id']];
    //echo 57;exit;
    //http://audiodeadline.com/sharetool.php?type=rsvpsignup&media_id=backend_static_2&username=1234
    //echo 'https://audiodeadline.com/signup/'.$_REQUEST['username'].'/'.$_REQUEST['media_id'];exit;
    //echo $_SERVER["HTTP_USER_AGENT"]; //exit;
    /* if(!strpos($_SERVER["HTTP_USER_AGENT"], "facebookexternalhit/")){
         echo 43;
     }
     if(!strpos($_SERVER["HTTP_USER_AGENT"], "Facebot")){
         echo 56;
     }*/
    ?>
    <script type="text/javascript">
        setTimeout(function () {
            window.location.href=("https://audiodeadline.com/ticket-sale/<?php echo $_REQUEST['utype']; ?>/<?php echo $_REQUEST['username']; ?>/<?php echo $_REQUEST['media_id']; ?>");
        },100);
    </script>
    <?php
}
?>

<!doctype html>
<html>
<head>

<!--for fb-->
<meta property="og:title" content="<?php echo $title; ?>" />
<meta property="fb:app_id" content="906815096194208" />
<meta property="og:description" content="<?php echo $description; ?>" />
<meta property="og:url" content="<?php echo $actual_link; ?>" />
<meta property="og:type" content="website" />
<meta property="og:image" content="<?php echo $image; ?>" />

<!--for twitter-->
<meta property="twitter:card" content="summary_large_image" />
<meta property="twitter:title" content="<?php echo $title; ?>" />
<meta property="twitter:description" content="<?php echo $description; ?>" />
<meta property="twitter:url" content="<?php echo $actual_link; ?>" />
<meta property="twitter:image" content="<?php echo $image; ?>" />

</head>

<body>
<img src="<?php echo $image; ?>">
</body>
</html>

<?php
function Redirect($url, $permanent = false)
{
    header('Location: ' . $url, true, $permanent ? 301 : 302);

    exit();
}


if (!strpos($_SERVER["HTTP_USER_AGENT"], "facebookexternalhit/")  && !strpos($_SERVER["HTTP_USER_AGENT"], "Facebot") ) {
    //Redirect('https://audiodeadline.com/signup/'.$_REQUEST['username'], true);

}
?>
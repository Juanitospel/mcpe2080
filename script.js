document.getElementById("subscribeBtn").addEventListener("click", function() {
    

   
    setTimeout(function() {
        document.getElementById("unlockBtn").style.display = "block";
    }, 10000); 
});

document.getElementById("unlockBtn").addEventListener("click", function() {
   
    document.getElementById("downloadLink").style.display = "block";
});

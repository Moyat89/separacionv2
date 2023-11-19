      function checkin(){
        document.getElementById('nav').style.visibility = 'hidden';
        document.getElementById('text').style.visibility = 'hidden';
        document.getElementById("desplegable").style.display = "flex"; 
        document.getElementById("desplegable").style.justifyContent = "center";
        document.getElementById("desplegable").style.backgroundColor = "initial";
        document.getElementById("desplegable").style.border="none";
        document.getElementById("body").style.display = "flex"; 
        document.getElementById("body").style.justifyContent = "center";
        document.getElementById("body").style.alignItems = "center"; 
      };
      
checkin();
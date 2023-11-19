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
      
      function entrar() {
        document.getElementById('boton').style.visibility = 'hidden';
        document.getElementById('nav').style.visibility = 'visible';
        document.getElementById('text').style.visibility = 'visible';
        document.getElementById("desplegable").style.display = "block"; 
        document.getElementById("desplegable").style.backgroundColor = "rgba(2, 5, 7, 0.8)";
        document.getElementById("desplegable").style.border="2px solid black";
      }

     function entrar() {
        document.getElementById('boton').style.visibility = 'hidden';
        document.getElementById('nav').style.visibility = 'visible';
        document.getElementById('text').style.visibility = 'visible';
        document.getElementById("desplegable").style.display = "block"; 
        document.getElementById("desplegable").style.backgroundColor = "rgba(2, 5, 7, 0.8)";
        document.getElementById("desplegable").style.border="2px solid black";
      }

      window.onload = function() {
        var btn = document.getElementById("boton");
        btn.onclick = entrar;
    }
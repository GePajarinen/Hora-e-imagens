// copiei do w3school. Mostrar o relógio:

var span = document.getElementById('relogio');

function time() {
  var d = new Date();
  var s = d.getSeconds();
  var m = d.getMinutes();
  var h = d.getHours();
  span.textContent = h + ":" + m + ":" + s;
}
setInterval(time, 1000);

//Pra mostrar de acordo com o horário
function atualizar() {

  var data = new Date();
  var hora = data.getHours();
  var msgJS = window.document.getElementById("mensagem");
  var img = window.document.getElementById("imagem");

    if (hora >= 6 && hora < 8) {
      img.src='acordar.png';
      document.body.style.background= '#00ffff'
      msg = "Acorda, xuxin!!";
           
    } else if (hora >= 11 && hora < 14) {
      img.src='almoco.png';
      document.body.style.background= '#FF4233'
      msg = "Hora de comer!";

    } else if (hora >= 17 && hora <21) {
      img.src='happy.png';
      document.body.style.background= '#ff00ff'
      msg = "Happy Hour!";

    } else if (hora >=21){
      img.src='dormir.png';
      document.body.style.background= '#02404b'
      msg= "Hora de mimi!";
    
    } else { //Por cauda dos parênteces vazios nao tava funcionando o relogio
      img.src= "fofura.png";
      }
      msgJS.innerHTML= msg
}

// Botao do c@r@|ho >/ ! id="botao" onclick="festa()"

function festa(){
  //botao.innerHTML= "Acabar a festa =(";
  //botao.style.background= "#ff944d";
  botao.style.opacity= 0;
  document.body.style.background= '#ff00ff';
  mensagem.innerHTML= "Happy Hour!";
  imagem.src = 'happy.png';
  }

function acaboufesta(){
    botao.innerHTML= "Mais festa";
    botao.style.background= "#f00";
    document.body.style.background= '#ff00ff'; 
}




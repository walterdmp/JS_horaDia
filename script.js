function carregar() {
  const msg = document.querySelector("#msg");
  const fundo = document.querySelector("#fundo");
  const data = new Date();
  const hora = data.getHours();
  msg.innerHTML = `Agora são ${hora} horas.`
  
  if(hora >= 0 && hora < 12){
    if(hora == 1){
        msg.innerHTML = `Agora são ${hora} hora.`
    }
    document.body.style.backgroundImage = "url('assets/manha.jpg')";
    fundo.style.background = 'rgb(249, 234, 164)';
  } else if(hora >=  12 && hora < 18) {
    document.body.style.backgroundImage = "url('assets/tarde.jpg')";
    fundo.style.background = '#f8b500';
  } else {
    document.body.style.backgroundImage = "url('assets/noite.jpg')";
    fundo.style.background = '#898370';
  }
}

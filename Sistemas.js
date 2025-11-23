let i = 0;
const fotos = ["Recursos/img1.jpg", "Recursos/img2.jpg", "Recursos/img3.jpg", "Recursos/img4.jpg"];
const textos = ["CEA Thago Thago", "Aula de Sistemas Informáticos por exterior", "Aula de Sistemas Informáticos por interior", "Prácticas realizadas en la carrera"];

function cambiar(n) {
  i = (i + n + fotos.length) % fotos.length;
  document.getElementById("foto").src = fotos[i];
  document.getElementById("texto").innerText = textos[i];
}

document.body.style.zoom = "90%";

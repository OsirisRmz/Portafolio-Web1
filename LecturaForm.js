function leer(){
	//referencia por pseudoclase
	var nom=document.forms["formulario"].elements[0].value;
	//referencia por id
	var clave=document.getElementById("pass").value;
	//referencia por tagname
	var car=document.getElementsByTagName("select")[0].value;
	//referencia por name
	var gen = document.getElementsByName("genero");
var g = "";
for (var i = 0; i < gen.length; i++) {
	if (gen[i].checked) {
		g = gen[i].value;
		break; // Ya encontramos el seleccionado
	}
}
	var ok=document.getElementsByName("check").checked;
	document.getElementById("resultado").innerHTML =
	"<strong>Tu Nombre:</strong> " + nom +
	"<br><strong>Tu password:</strong> " + clave +
	"<br><strong>Tu carrera:</strong> " + car +
	"<br><strong>Tu género es:</strong> " + g +
	"<br><strong>Aceptado:</strong> " + (ok ? "Sí" : "No");
}
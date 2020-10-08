(function(){
	// Variables
	var lista = document.getElementById("lista"),
        tareaInput = document.getElementById("tareaInput"),
		btnNuevaTarea = document.getElementById("btn-agregar");
 
    var iterator = 0;
	// Funciones
	var agregarTarea = function(){
        var tarea = tareaInput.value;
        if (tarea === "" || tarea === undefined) {
			tareaInput.setAttribute("placeholder", "Agrega una tarea valida");
			tareaInput.className = "error";
			return false;
        }
        var tareaSplited =tarea.split("\n");
        var titulo = tareaSplited[0];
        var contendio = document.getElementById("lista");
        var h = document.createElement("h4");
        var t = document.createTextNode(titulo);
        h.appendChild(t);
        
        var lista = document.createElement("li");
        lista.setAttribute("id",iterator);
        lista.appendChild(h);
        

        for (var i=1; i<tareaSplited.length; i++){
            var a = document.createElement("a");
            var dato = document.createTextNode(tareaSplited[i])
            a.appendChild(dato);
            lista.appendChild(a);
            
        }
        
        contendio.appendChild(lista);


            
        tareaInput.value = "";
        iterator = iterator+1;
	};
	var comprobarInput = function(){
        tareaInput.className = "";
	};
 
    var ul = document.getElementById("lista");
    ul.addEventListener("click", function(e){
        console.log(e.target.parentNode.id);
        var id = e.target.parentNode.id;
        console.log(this.id);
        console.log(this);
        var removeElement = document.getElementById(id);
        lista.removeChild(removeElement);
       //document.getElementById(id).remove();
    });
	// Eventos
 

	// Agregar Tarea
	btnNuevaTarea.addEventListener("click", agregarTarea);
 
	// Comprobar Inputs
    tareaInput.addEventListener("click", comprobarInput);
 
    // Borrando Elementos de la lista
    for(i=0; i < lista.length; i++) {
        lista[i].addEventListener('click', function(){
            lista.parentNode.removeChild(this);
        });
    }
	/*for (var i = 0; i <= lista.length; i++) {
		lista[i].addEventListener("click", eleminarTarea);
    }
    function eleminarTarea(){
        
    }*/

}());
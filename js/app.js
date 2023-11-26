function agregarTarea() {
    const tarea = document.getElementById("ingresoTarea").value;

    if (tarea.trim() === "") {
      alert("Por favor, ingrese una tarea.");
      return;
    }

    const lista = document.getElementById("listaTareas");
    
    const tituloLista = document.querySelector("#lista");
    tituloLista.innerHTML = 'Lista de tareas'

    const nuevaTarea = document.createElement("li");
    nuevaTarea.className = "list-group-item d-flex justify-content-between align-items-center";
    nuevaTarea.innerHTML = `
      ${tarea}
      <button class="btn btn-danger btn-sm" onclick="eliminarTarea(this)">Eliminar</button>
    `;

    lista.appendChild(nuevaTarea);

    document.getElementById("ingresoTarea").value = "";
  }

  function eliminarTarea(elemento) {
    const tarea = elemento.parentNode;
    tarea.parentNode.removeChild(tarea);
  }
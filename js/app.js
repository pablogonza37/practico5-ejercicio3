function agregarTarea(event) {
  event.preventDefault();
  const tarea = document.getElementById("ingresoTarea").value;
  const lista = document.getElementById("listaTareas");
  const nuevaTarea = document.createElement("li");
  nuevaTarea.className =
    "list-group-item d-flex justify-content-between align-items-center";
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

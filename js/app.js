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
  guardarTareaEnLocalStorage(tarea);
  document.getElementById("ingresoTarea").value = "";
}

function eliminarTarea(elemento) {
  const tarea = elemento.parentNode;
  tarea.parentNode.removeChild(tarea);
  eliminarTareaDelLocalStorage(tarea.firstChild.textContent.trim());
}

function guardarTareaEnLocalStorage(tarea) {
  let tareas;
  if (localStorage.getItem("tareas") === null) {
    tareas = [];
  } else {
    tareas = JSON.parse(localStorage.getItem("tareas"));
  }
  tareas.push(tarea);
  localStorage.setItem("tareas", JSON.stringify(tareas));
}

function cargarTareasDesdeLocalStorage() {
  let tareas;
  if (localStorage.getItem("tareas") === null) {
    tareas = [];
  } else {
    tareas = JSON.parse(localStorage.getItem("tareas"));
  }

  tareas.forEach(function (tarea) {
    const lista = document.getElementById("listaTareas");
    const nuevaTarea = document.createElement("li");
    nuevaTarea.className =
      "list-group-item d-flex justify-content-between align-items-center";
    nuevaTarea.innerHTML = `
      ${tarea}
      <button class="btn btn-danger btn-sm" onclick="eliminarTarea(this)">Eliminar</button>
    `;
    lista.appendChild(nuevaTarea);
  });
}

function eliminarTareaDelLocalStorage(tarea) {
  let tareas;
  if (localStorage.getItem("tareas") === null) {
    tareas = [];
  } else {
    tareas = JSON.parse(localStorage.getItem("tareas"));
  }
  tareas.forEach(function (tareaElement, index) {
    if (tareaElement === tarea) {
      tareas.splice(index, 1);
    }
  });

  localStorage.setItem("tareas", JSON.stringify(tareas));
}

document.addEventListener("DOMContentLoaded", cargarTareasDesdeLocalStorage);

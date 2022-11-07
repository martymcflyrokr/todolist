
    //Array de tareas
    let listadoTareas = [];

    //captura DOM
    const contenedorTareas = document.getElementById('contenedor-listado')

    //funcion agregar tarea
    const agregarTarea = event => {
        event.preventDefault();
        const { value } = event.target.input;
        if(!value) return;
        listadoTareas.push(value);

        const tareaNueva = document.createElement('div');
        const contenedorBotones = document.createElement('div')
        const eliminaTarea = document.createElement('button')
        const tareaResuelta = document.createElement('input')

        tareaNueva.classList.add('tarea-nueva-div', 'borde-redondo')
        contenedorBotones.classList.add('contenedor-botones')
        eliminaTarea.classList.add('btn-eliminar-tarea', 'borde-redondo')
        tareaResuelta.classList.add('checkbox-btn', 'borde-redondo')
        tareaResuelta.setAttribute('type', 'checkbox')
        tareaResuelta.addEventListener('click', marcarResuelto)


        tareaNueva.textContent = value;
        tareaNueva.id = value;

        eliminaTarea.textContent = "X";

        contenedorTareas.prepend(tareaNueva)
        tareaNueva.append(contenedorBotones)
        contenedorBotones.append(tareaResuelta)
        contenedorBotones.append(eliminaTarea)
        

        console.log(listadoTareas)
    }

    function limpiarLista() {
        listadoTareas = [];
        contenedorTareas.innerHTML='';
        console.log('tareas despues de borrar todas', listadoTareas);

    }

    const marcarResuelto = e => {
       
    }
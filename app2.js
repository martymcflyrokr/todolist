
    //Array de tareas
    listadoTareas = [];


    //Constructor objeto
    function Tarea (nombre, estado) { 
        this.nombre = nombre,
        this.estado = estado
    }


    //captura DOM
    const contenedorTareas = document.getElementById('contenedor-listado')


    //funcion agregar tarea
    const agregarTarea = (event, item) => {
        //captura del click
        event.preventDefault();
        //guarda el click con nombre value
        const { value } = event.target.input;
        //si es vacia, no permite cargar
        if(!value) return;
        //creación nuevo objeto
        nuevaTarea = new Tarea (value, false);
        //Agregado a array
        listadoTareas.push(nuevaTarea);
        event.target.reset();

        const tareaNueva = document.createElement('div');
        const contenedorBotones = document.createElement('div')
        const eliminaTarea = document.createElement('button')
    

        tareaNueva.classList.add('tarea-nueva-div', 'borde-redondo')
        contenedorBotones.classList.add('contenedor-botones')

        eliminaTarea.classList.add('btn-eliminar-tarea', 'borde-redondo')
        eliminaTarea.addEventListener( 'click', (e) => {
            borrarItem(e.target.id)
        })

        eliminaTarea.dataset.item = item;
        
        tareaNueva.addEventListener('click', marcarResuelto)
        tareaNueva.textContent = value;
        tareaNueva.id = value;

        eliminaTarea.textContent = "X";
        eliminaTarea.id = value;

        contenedorTareas.prepend(tareaNueva)
        tareaNueva.append(contenedorBotones)
        contenedorBotones.append(eliminaTarea)
        

        console.log(listadoTareas)
    }

    function limpiarLista() {
        listadoTareas = [];
        contenedorTareas.innerHTML='';
        console.log('tareas despues de borrar todas', listadoTareas);

    }

    const borrarItem = (id) => {
        // e.preventDefault(e.preventDefault)
        // console.log(e.target.id)
        tareaABorrar = document.getElementById(id);
        contenedorTareas.removeChild(tareaABorrar);
        // console.log(listadoTareas)

    }
         
    const marcarResuelto = (e) => {
        e.target.classList.toggle('resuelta')
       
    }

  




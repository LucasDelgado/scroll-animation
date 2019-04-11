let animacionScroll = ()=>{
    //recorremos el HTML busncaod section para animar, los guardamos en un array y lo convertimos en elementos DOM
    // si no se encuentra la clase retornamos false y nos re vamos de la funcion
    let sectionAnimados = document.querySelectorAll(".animacion, .animacion-hijos");
    if( sectionAnimados.length <= 0 ){
        return false
    }
    sectionAnimados = Array.from(sectionAnimados);

    //Agrega mas de un envento en el listenner
    let addListenerMulti = (elemento, eventos, fn) => {
        eventos.split(' ').forEach(e => elemento.addEventListener(e, fn, false));
    }

    let animacionStore = (elemento)=>{
        let data = elemento.dataset;

        //preguntamos si la animacion es a los hijos directos
        if(elemento.classList.contains("animacion-hijos") ){      
            let children = Array.from(elemento.children)
            let num = 0;

            //mapeamos hijos, agregamos la clase y le damos delay sumando el valor al siguiente y generamos una cascada
            children.map((item) => {
                item.classList.add(data.animation);
                item.style.animationDelay = num + 's';
                num += parseFloat(data.delay);
            });

        //si la animacion es al section le damos sus valores a el mismo
        }else{
            elemento.classList.add(data.animation);
            elemento.style.animationDelay = data.delay + 's';
        }    
    }

    //funcion principal de animar
    let animate = () => {
        //preg si esta vacio el array ya qye en el for voy eliminando los elementos que ya animo
        if( sectionAnimados.length != 0 ){
            //tomo los valores actuales del scroll
            let PANTALLA_ARRIBA = window.pageYOffset;
            let PANTALLA_TAMANIO_Y = window.innerHeight;
            let PANTALLA_BOTTOM = PANTALLA_ARRIBA + PANTALLA_TAMANIO_Y;

            //recorro el array de los section y pregunto cual es la posicion
            for (let i = 0; i < sectionAnimados.length; i++) { 
                let topSection = sectionAnimados[i].offsetTop;

                // si es mayor al bootom cumplo la funcion y luego cambio su valor por arafue.
                if( PANTALLA_BOTTOM > topSection){

                    animacionStore( sectionAnimados[i] )
                    
                    sectionAnimados[i] = 'arafue';
                }
            }

            //Busco que exista arafue en el array y si es asi lo elimino del aray
            sectionAnimados = sectionAnimados.filter(item => item != 'arafue');

        }else{
            //salimos de la funcion cuando el array esta vacio
            return false
        }
    }


    //animate section se efectua en load y en scroll.
    addListenerMulti(window, 'load scroll', animate);

}

animacionScroll();
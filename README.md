# Scroll Animate 
Este mini plugin vamos a crear muy sencillamente un animate basico para cuando escroleamos.

## Como Utilizarlo?

tiene 2 tipos de opciones:

1) ejecutamos la animacion al contenedor mismo. Ejemplo:
<section class="dos animacion" data-animation="fadeIn" data-delay="0.2"></section>

Lo que debemos hacer es lo siguiente:
-al section le agregamos la clase animacion y data-animation con el nombre de la animacion que queremos asignarle.
-Como opcion podes darle el data-delay o simplemente no agregarlo


2) ejecutamos la animacion a los hijos directos del contenedor. Ejemplo:
<section class="tres animacion-hijos" data-animation="fadeIn" data-delay="0.2">
    <p>lofnief eofseof iseoifjs efiosef</p>
    <p>lofnief eofseof iseoifjs efiosef</p>
</section> 
Lo que debemos hacer es lo siguiente:
-al section le agregamos la clase animacion-hijos y data-animation con el nombre de la animacion que queremos asignarle y darle el data-delay para hacer el efecto cascada.

## A tener en cuenta
Hay que tener en cuneta que la animacion-hijos le otorga la animacion a hijos directos.
Que a su vez deberan tener un css mencionado depnediendo de los tipos de elementos. Ejemplo:

    .animacion, 
    .animacion-hijos > p{
        opacity: 0;
        animation-duration: 1s;
        animation-fill-mode: forwards;
    }

si  por ejemplo quisieran animar hijos que son div deben agregarle la especificacion al css:

    .animacion, 
    .animacion-hijos > p,
    .animacion-hijos > div{
        opacity: 0;
        animation-duration: 1s;
        animation-fill-mode: forwards;
    }

## Autores
Lucas Delgado     www.lucasdelgado.com.ar

## Licencia
MIT
// La aplicación muestra una lista de productos, en este caso zapatos. La información proviene de un arreglo de objetos
// El usuario puede realizar búsquedas, escribiendo en el input y presionando filtrar
// En ese momento se aplica un filtro al array y se muestran los elementos que coinciden con la búsqueda.

// Tenemos un arreglo de productos

const productos = [
  {nombre: "Zapato negro", tipo: "zapato", color: "negro", img: "./taco-negro.jpg"},
  {nombre: "Zapato azul", tipo: "zapato", color: "azul", img: "./taco-azul.jpg"},
  {nombre: "Bota negra", tipo: "bota", color: "negro", img: "./bota-negra.jpg"},
  {nombre: "Bota azul", tipo: "bota", color: "azul", img: "./bota-azul.jpg"},
  {nombre: "Zapato rojo", tipo: "zapato", color: "rojo", img: "./zapato-rojo.jpg"},
];

// Se cambian las variables tipo var a let y const para mantener el código homologado. Si el proyecto es legacy, entonces se cambian let y const a var
// Los nombres de las variables deben ser significativos y deben dar contexto de la información almacenada. Eso mejora la legibilidad y mantenibilidad del código.
// Es buena práctica colocar un $ delante de las variables y constantes que hacen referencia a elementos HTML para diferenciarlos del resto.
// lista-de-productos es un id, debemos colocar el símbolo #. Cambiamos el método a querySelector.
//input es un id, no una clase, por lo cual se cambia el punto por # para hacer referencia. 

const $lista = document.querySelector("#lista-de-productos");
const $input = document.querySelector('#input');

// El código repetitivo se refactoriza en una función que muestra la lista de productos.

const displayProductos = (lista = [], elemento) => {
  lista.forEach((item) => {

// Los nombre de las variables deben dar contexto de la información almacenada. Eso mejora la legibilidad y mantenibilidad del código.
// Es buena práctica colocar un $ delante de las variables y constantes que hacen referencia a elementos HTML para diferenciarlos del resto.
    const $div = document.createElement("div");
    $div.classList.add("producto");

// Simplificamos la creación de elementos HTML utilizando template strings
   $div.innerHTML = `<p class="titulo">${item.nombre}</p><img src="${item.img}" />`;
   elemento.appendChild($div);

  });
};

// Se llama a la función displayProductos con el arreglo inicial
displayProductos(productos, $lista);

const botonDeFiltro = document.querySelector("button");

//Modificamos nombres de variables
botonDeFiltro.onclick = function() {
  while ($lista.firstChild) {
    $lista.removeChild($lista.firstChild);
  }

//No olvidar cambiar a nuevos nombres de variables
  const texto = $input.value;
 // Recuerda que una vez que termines tu aplicación debes borrar todos los console. Los console son utilizados en la fase de desarrollo, no en producción.
  const productosFiltrados = filtrado(productos, texto);

// Se llama a la funcion displayProductos con el array filtrado

displayProductos(productosFiltrados, $lista);
};

const filtrado = (productos = [], texto) => {
  return productos.filter(item => item.tipo.includes(texto) || item.color.includes(texto));
}; 
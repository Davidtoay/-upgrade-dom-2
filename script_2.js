//2.1 Inserta dinamicamente en un html un div vacio con javascript.
var newDiv = document.createElement("div");
document.body.append(newDiv);


//2.2 Inserta dinamicamente en un html un div que contenga una p con javascript.
newDiv.append(document.createElement("p"));


//2.3 Inserta dinamicamente en un html un div que contenga 6 p utilizando un loop con javascript.
let newDiv2 = document.createElement("div");
document.body.append(newDiv2);
let parrafo = document.createElement("p");
for (let i = 1 ; i <= 6 ; i++){
    let parrafo = document.createElement("p")
    parrafo.innerText = "Parrafo "+i;
    newDiv2.append(parrafo);
}


//2.4 Inserta dinamicamente con javascript en un html una p con el texto 'Soy dinámico!'.
let texto = document.createElement("p");
texto.innerText = "Soy dinámico!"
document.body.append(texto);


//2.5 Inserta en el h2 con la clase .fn-insert-here el texto 'Wubba Lubba dub dub'.
let frase = document.querySelector("h2");
frase.innerText = "Wubba Lubba dub dub";


//2.6 Basandote en el siguiente array crea una lista ul > li con los textos del array.
const lista = document.createElement("ul");
const listItem = document.createElement("li");
const apps = ['Facebook', 'Netflix', 'Instagram', 'Snapchat', 'Twitter'];
listItem.innerHTML = apps;
document.body.append(lista);
for ( let i = 0; i <apps.length; i++){
    const listItem = document.createElement("li");
    listItem.innerHTML = apps[i];
    lista.append(listItem);
}

//2.7 Elimina todos los nodos que tengan la clase .fn-remove-me 
//<< la única manera de resolverlo es con un bucle >>
const eliminado = document.querySelectorAll(".fn-remove-me");
for (let i =0; i< eliminado.length; i++){
    eliminado[i].remove();

}

//2.8 Inserta una p con el texto 'Voy en medio!' entre los dos div. 	Recuerda que no solo puedes insertar elementos con .appendChild.
const medio = document.createElement("p");
medio.innerText = "Voy en medio!";
document.body.insertBefore(medio, texto);


//2.9 Inserta p con el texto 'Voy dentro!', dentro de todos los div con la clase .fn-insert-here
const palabra = document.querySelectorAll("div.fn-insert-here");
for (let i =0; i< palabra.length; i++){
    const voyDentro = document.createElement("p");
    voyDentro.innerText = "Voy dentro!";
    palabra[i].append(voyDentro);
}



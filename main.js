// ### 1. Affiche le contenu textuel du second h1
let secondH1 = document.getElementsByTagName('h1')[1].innerText;

console.log(secondH1);

// ### 2. Affiche le contenu textuel du dernier li


// let dernierLi = document.querySelector("div>ul");
// let dernierli = elt.lastElementChild;
// console.log(dernierli);

let dernierLi = document.getElementsByTagName('li')[3].innerText;
console.log(dernierLi);


// ### 3. Affiche le contenu textuel du premier p en majuscule

let p = document.getElementsByTagName('p')[0].innerText.toUpperCase();


 console.log(p);

// ### 4. Avec l'aide d'un forEach affiche le contenu de chaque li, 
// bonus : affiche chaque li en majuscule

let allLi = document.getElementsByTagName("li")
console.log(Array.from(allLi));

let tabLi = Array.from(allLi);

tabLi.forEach(element =>{
element.textContent = element.textContent.toUpperCase();
console.log(element.textContent);


});


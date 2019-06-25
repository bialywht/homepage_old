const name = 'Maciej';
const age = 39;

console.log(`Nazywam się ${name} i mam ${age} lat.`);

const heading = document.querySelector('#top');
console.log(heading.innerHTML);

heading.innerHTML = "<h1>Zupełnie inny tekst</h1>";

console.log(heading.innerHTML);

function greatings(name,  age){
    console.log(`Nazywam się ${name} i mam ${age} lat.`);
}

greatings('Zygfryd', 100);
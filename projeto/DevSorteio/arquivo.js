function generateNumber(){

const min = Math.ceil(document.querySelector('#minimo' ).value)
const max = Math.floor(document.querySelector('#máximo' ).value)

const result = Math.floor (Math.random() * (max - min + 1)) + min;



alert(result)
}
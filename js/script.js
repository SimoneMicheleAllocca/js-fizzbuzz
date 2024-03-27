
const rowElem =document.querySelector(".row") //object | null
    console.log(rowElem);



for (let i = 1; i <= 99; i++) {
    console.log(i);
    const boxElem = `<div class="box">${i}</div>`;
    rowElem.innerHTML += boxElem;


    if(( i % 3 === 0) && (i % 5 === 0))  {
         console.log("FizzBuzz");
        

    } else if ( i % 5 === 0) {
        console.log("Buzz")
    } else if( i % 3 === 0) {
        console.log("Fizz")
    } 
        
}
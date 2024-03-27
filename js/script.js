
const rowElem =document.querySelector(".row") //object | null
    console.log(rowElem);



for (let i = 1; i <= 99; i++) {
    console.log(i);
    let bgClass;
    
    


    if(( i % 3 === 0) && (i % 5 === 0))  {
         console.log("FizzBuzz");
         
         bgClass = "fizzbuzz";
    } else if ( i % 5 === 0) {
        console.log("Buzz");
        
        bgClass = "buzz";
    } else if( i % 3 === 0) {
        console.log("Fizz")
        
        bgClass = "fizz";
    } 
        
      const boxElem = `<div class = "box ${bgClass}">${i}</div>`;
        rowElem.innerHTML += boxElem;  
       

}


// type of js operator

// Aritomatic js operatoe

let a = 3;
let b = 5;

let c = a+b

console.log("Add=" + c);


let d = 3;
let e = 5;

let f = a ** b

console.log("Expoential=" + f);

let a1 =8;
let b1 =5;

a1--;

console.log("decrement=" + a1)

let A = 5;
let B = 10;

let C = B % A;

console.log("Modulas=" + C)


// Asignment Operator

let a2 = 5;
let b2 = 10;

let C2 = a2 += b2;

console.log("Assignment OP=" + C2)

let a3 = 5;
let b3 = 10;

let C3 = a3 -= b3;

console.log("Assignment OP=" + C3)


let a4 = 2;
let b4 = 10;

let C4 = b4 **= a4;

console.log("Assignment OP=" + C4)


// Comperison Operator


let a5 = 2;
let b5 = 10;


if(a5 == b5){

    console.log("true")
}
else{
    console.log("false")
}


let a6 = 2;
let b6 = "2";


if(a6 === b6){

    console.log("true")
}
else{
    console.log("false")
}


let a7 = 2;
let b7 = 10;


if(a7 !== b7){

    console.log("true")
}
else{
    console.log("false")
}


// Logical operator


let result = 55;


if( result >=80 && result <=100) {
    
    console.log("A+")


}

else if(result >=70 && result <=79 ){
    console.log("A")

}

else{
    console.log( "F")
}


let results = 55;


if( results >=80 && results <=100) {
    
    console.log("A+")
}

else if(results >=70 || results <=79 ){
    console.log("A")
}

else{
    console.log( "F")
}


let rslt = prompt("Enter a number")

rslt= Number(rslt);

if( rslt >=80 && rslt <=100) {
    
    document.write("A+")
}

else if(rslt >=70 && rslt <=79 ){
    
    document.write("A")
}

else{
    document.write("F")
}


// Ternary operator


let a9 = 80;


console.log( a9 >= 80 ? "A+" : "F");


// Function

function firstFun(l,p){
    let g = l + p

    console.log("New one=" + g)
}

firstFun( 20,30);

firstFun( 10, 20);


// Call back function

function one( w){

    console.log('one =' + w)
}

function two(j,k, test){
    let h = j+k;

    test(h);
}

two( 5, 4, one);




// celcious to ferhenheit convertion

let celc = prompt(' enter a value:');

celc = Number(celc);

let farenhite = celc * (9/5) + 32 ;

document.write('Farenheit=' + farenhite );



let L= prompt(' enter a value:');

L = Number(L);

let S = L + 2 -1 *10 ;

document.write('new =' + S );




























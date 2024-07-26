
// 1
function dat()
{

    let a=document.getElementById("num").value
    let b=document.getElementById("num1").value
    let c=document.getElementById("num2").value
    let d=document.getElementById("num3").value

    let mis=(a >= b && a >= c && a >= d) ? a :
    (b >= a && b >= c && b >= d) ? b :
    (c >= a && c >= b && c >= d) ? c : d;

    document.getElementById("misu").innerText=mis+ "is bigger "

    
}
// 2

function data()
{

let age=document.getElementById("cat").value

age>0 && age <=12
? (document.getElementById("text").innerText="child")
:age >12 && age<=20
?(document.getElementById("text").innerText="Teenage")
:age >20 && age <=60
?(document.getElementById("text").innerText="Adult")
:(document.getElementById("text").innerText="Senior");



}
// 3


function data1()
{

let fg=document.getElementById("fg").value

fg>"A" && fg <="Z"
? (document.getElementById("text").innerText="uppercase letter")
:fg >"a" && fg<="z"
?(document.getElementById("text").innerText="Lowercase Letter")
:fg >"0" && fg <="9"
?(document.getElementById("text").innerText="Digital number")
:(document.getElementById("text").innerText="special character");

}

// 4


function data2()
{

let sed=document.getElementById("sed1").value


sed % 3 == 0 && sed % 5 == 0
?(document.getElementById("text").innerText="FizzBuzz")


:sed % 3 == 0
?(document.getElementById("text").innerText="Fizz")
:sed % 5 == 0

?(document.getElementById("text").innerText="Buzz")
: ""

}

// 5


function data3()
{

let disha=document.getElementById("disha").value


disha > 0 
?(document.getElementById("text").innerText="postive")

:disha < 0
?(document.getElementById("text").innerText="negative")

?(document.getElementById("text").innerText="conditional")
}
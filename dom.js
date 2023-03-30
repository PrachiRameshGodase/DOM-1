// getElementById
// let headerTitle=document.getElementById("header-title");
// let header=document.getElementById("main-header");
// console.log(headerTitle);
// headerTitle.innerHTML="<h3>Hello</h3>";
// 
// headerTitle.style.borderBottom="solid 3px #000";

// header.style.borderBottom="solid 3px #000";
// // getElementByClassName
// let itms=document.getElementsByClassName("list-group-item");
// console.log(itms);
// console.log(itms[1]);
// itms[1].textContent="Hello";
// itms[1].style.fontWeight="bold";
// itms[1].style.backgroundColor="Yellow";

// for(let i=0; i<itms.length;i++){
//     itms[i].style.backgroundColor="grey";
// }
// getElementByTagName
// let li=document.getElementsByTagName("li");
// console.log(li);
// console.log(li[1]);
// li[1].textContent="Hello";
// li[1].style.fontWeight="bold";
// li[1].style.backgroundColor="Yellow";
// for(let i=0; i<li.length;i++){
//     li[i].style.backgroundColor="grey";
//     li[i].style.fontWeight="bold";
// }
// QuerySelector
// let header1=document.querySelector("#main-header");
// header1.style.borderBottom="solid 4px #ccc";

// let input=document.querySelector("input");
// input.value="Hello world";

// let submit=document.querySelector('input[type="submit"]');
// submit.value="SEND";

// let item=document.querySelector(".list-group-item");
// item.style.color="red";

// let lastItem=document.querySelector(".list-group-item:last-child");
// lastItem.style.color="blue";

// let secondItem=document.querySelector(".list-group-item:nth-child(2)");
// secondItem.style.color="coral";

// // querySelectorAll
let title=document.querySelectorAll(".title");
console.log(title);
title[0].textContenr="hello";

let odd =document.querySelectorAll("li:nth-child(odd)");
let even =document.querySelectorAll("li:nth-child(even)");
for( let i=0;i<odd.length;i++){
    odd[i].style.backgroundColor="blue";
    even[i].style.backgroundColor="#ccc";
}




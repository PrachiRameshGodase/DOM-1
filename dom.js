// getElementById
let headerTitle=document.getElementById("header-title");
let header=document.getElementById("main-header");
console.log(headerTitle);
// headerTitle.innerHTML="<h3>Hello</h3>";
// 
// headerTitle.style.borderBottom="solid 3px #000";

header.style.borderBottom="solid 3px #000";
// getElementByClassName
let itms=document.getElementsByClassName("list-group-item");
console.log(itms);
console.log(itms[1]);
itms[1].textContent="Hello";
itms[1].style.fontWeight="bold";
itms[1].style.backgroundColor="Yellow";




// Traversing DOM
// let itemList=document.querySelector("#items");
// //parentNode
// console.log(itemList.parentNode);
// itemList.parentNode.style.backgroundColor="#f4f4f4";
// console.log(itemList.parentNode.parentNode);
// console.log(itemList.parentElement);
// itemList.parentElement.style.backgroundColor="#f4f4f4";
// console.log(itemList.parentElement.parentElement);
//childNodes
// console.log(itemList.childNodes);
// console.log(itemList.children);
// console.log(itemList.children[1]);
// itemList.children[1].style.backgroundColor='yellow';

// firstchild
// console.log(itemList.firstChild);
// console.log(itemList.firstElementChild);
// itemList.firstElementChild.textContent="Hello";

// //lastchild
// console.log(itemList.lastChild);
// console.log(itemList.lastElementChild);
// itemList.lastElementChild.textContent="Hello";

//nextSibling
// console.log(itemList.nextSibling);
// console.log(itemList.nextElementSibling);

//previous sibling
// console.log(itemList.previousSibling);
// console.log(itemList.previousElementSibling);
// itemList.previousElementSibling.style.color="green";

//create element
//create a div
// let newDiv=document.createElement("div");
// newDiv.className="hello";
// newDiv.id="hello1";
// newDiv.setAttribute("title","hello Div");
// let newDivText=document.createTextNode("Hello World");
// newDiv.appendChild(newDivText);
// let container=document.querySelector("header .container");
// let h1=document.querySelector("header h1");
// console.log(newDiv);
// newDiv.style.fontSize="30px";
// container.insertBefore(newDiv, h1);

let newli=document.createElement("li");
newli.className="hello";
newli.id="heloo2";
newli.setAttribute("title","hello li");
let newliText=document.createTextNode("Hello world");
newli.appendChild(newliText);


let listGroup=document.querySelector("ul .list-group");
let li=document.querySelector("ul li");
console.log(newli);





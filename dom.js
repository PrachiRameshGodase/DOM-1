
// Traversing DOM....
// let itemList=document.querySelector("#items");

// //parentNode of ul ia main id....
// console.log(itemList.parentNode);
// itemList.parentNode.style.backgroundColor="#f4f4f4";
// console.log(itemList.parentNode.parentNode);

// parent element of ul is main id....
// console.log(itemList.parentElement);
// itemList.parentElement.style.backgroundColor="#f4f4f4";
// console.log(itemList.parentElement.parentElement);

//childNodes....
// console.log(itemList.childNodes);

// console.log(itemList.children);
// console.log(itemList.children[1]);
// itemList.children[1].style.backgroundColor='yellow';

// firstchild....
// console.log(itemList.firstChild);
// console.log(itemList.firstElementChild);
// itemList.firstElementChild.textContent="Hello";

// //lastchild....
// console.log(itemList.lastChild);
// console.log(itemList.lastElementChild);
// itemList.lastElementChild.textContent="Hello";

//nextSibling....
// console.log(itemList.nextSibling);
// console.log(itemList.nextElementSibling);

//previous sibling....
// console.log(itemList.previousSibling);
// console.log(itemList.previousElementSibling);
// itemList.previousElementSibling.style.color="green";



//create element....

//create a div....
// let newDiv=document.createElement("div");

//adding class....
// newDiv.className="hello";

//adding id....
// newDiv.id="hello1";

// adding attributes....
// newDiv.setAttribute("title","hello Div");

//creating text node....
// let newDivText=document.createTextNode("Hello World");

//add text to div
// newDiv.appendChild(newDivText);

// putting div in dom....
// let container=document.querySelector("header .container");
// let h1=document.querySelector("header h1");
// console.log(newDiv);

// newDiv.style.fontSize="30px";
// container.insertBefore(newDiv, h1);

//create div...
let newDiv=document.createElement("Div");

//adding class....
newDiv.className="hello";

//adding id....
newDiv.id="hello2";

//adding attributes....
newDiv.setAttribute("title","hello li");

//creating text node....
let newDivText=document.createTextNode("Hello world");

//add text to div
newDiv.appendChild(newDivText);


let listGroup=document.querySelector("ul .list-group-item");
let h1=document.querySelector("ul h1");
listGroup.insertBefore(newDiv,h1);





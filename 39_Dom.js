const rootNode = document.getRootNode();
// console.log(rootNode);
console.dir(rootNode);

const htmlElementNode = rootNode.childNodes[0];
console.log(htmlElementNode);

const htmlChildNodes = htmlElementNode.childNodes;
console.log(htmlChildNodes);


const headingOne = document.querySelector("h1");
// const headingParentElement = headingOne.parentElement.parentElement;
// headingParentElement.style.backgroundColor = "red";
// console.log(headingParentElement)

console.log(headingOne.parentNode);
console.log(headingOne.parentElement);
// console.log(document.body);
const text = document.getElementsByTagName('li')
for(const li of text){
    // console.log(li.innerText);
}
const findId = document.getElementById("fruits-collection")
const changeFruitsName = document.getElementById("apple")
changeFruitsName.innerText ="Hello world"

// quearySelectorAll
const find = document.querySelectorAll("#hello li")
console.log(find);
for(const li of find){
    // console.log(li.innerText);
}

// js style
// const sections = document.querySelectorAll("section")
// for(const section of sections){
//    section.style.backgroundColor = "light gray"
//    section.style.color = "blue"
//    section.style.marginBottom = "20px"
//    section.style.borderRadius = "8px"
//    section.style.border = "1fx dotted red"
// }
const sections = document.querySelectorAll("section")
for(const section of sections){
    section.style.backgroundColor = "lightgray"
    section.style.marginBottom = "5px"
    section.style.borderRadius = "8px"
    section.style.textAlign = "center"
    section.style.color = "green"
    section.style.border = "2px dotted red"
    section.style.fontStyle = "none"
}

// const   = document.getElementById('fruits-collection').style

const forId = document.getElementById("hello")
forId.style.color = "black"
forId.style.fontWeight = "900"
forId.style.fontSize = "2rem"

const placesList = document.getElementById("places-list")
// console.log(placesList);
placesList.style.textAlign = "left"
placesList.style.color ="black"
placesList.style.fontWeight = "900"
placesList.style.fontSize = "2rem"
const li = document.createElement("li")
li.innerText = "Rokib"
placesList.appendChild(li)

const mainContant = document.getElementById("main-contant")
const degain = document.getElementById("main-contant")
degain.style.color= "blue"
const section =document.createElement("section")
const h1 =document.createElement("h1")
h1.innerText = "My fav food list"
mainContant.appendChild(h1)

const li1 = document.createElement("li")
li1.innerText = "Biriyani"
mainContant.appendChild(li1)

const li2 = document.createElement("li")
li2.innerText = "burhani"
mainContant.appendChild(li2)

const li3 = document.createElement("li")
li3.innerText = "Khasi"
mainContant.appendChild(li3)

mainContant.style.textAlign = "left"
mainContant.style.color ="black"
mainContant.style.fontWeight = "900"
mainContant.style.fontSize = "2rem"
mainContant.style.backgroundColor = "blue"
mainContant.style.textAlign = "center"
mainContant.style.borderRadius = "12px"
mainContant.style.border = "5px double black"

mainContant.appendChild(section)
console.log(document.body);
const text = document.getElementsByTagName('li')
for(const li of text){
    console.log(li.innerText);
}
const findId = document.getElementById("fruits-collection")
const changeFruitsName = document.getElementById("apple")
changeFruitsName.innerText ="Hello world"
//NUMBER
const x = 1.11;
//x= 2;
let y = 2;
y = 3;
// console.log(x)
// console.log(y)
console

//STRING
const name = "Justyna";
// console.log(name + "Nowak")

//OBJECT
const person = {
    name: "Justyna",
    age: 36,
}

// console.log(person)
// console.log(console)
//ARRAY
const people = ["Justyna", "Nowak", "Artur"];
// consele.log(people[1])
// console.log(people)


//FUNCTION
function sayHello(){
    console.log("Hello")
}

sayHello()
//sayHello()
    //argument
function say(name){
    console.log("Hello" + name)
}

say("Justyna")
say("Artur")

//RETURN-zwracanie
function add(x, y){
    return x + y
}
// console.log(add(3,2))
// console.log(say('Adam'))


//pobieranie elementu z HTML'a
const dom = document.querySelector('.subtitle')
dom.innerHTML = "Hello from JS"
// console.log(dom)
// TWORZENIE ELEMENTU JS I DODAWANIE DO HTML'A
const newDOM = document.createElement("div")
newDOM.innerHTML = "test"
// console.log(newDOM)

dom.append(newDOM)


// EVENTS (wydarzenia)
newDOM.onclick = function(){
    console.log("kliknięto")
}

const a = 6;
const b = 5;

if(a < b){
    // wykonaj jeśli prawda
    console.log("A jest mniejsze")
}else{
    // wykonaj jeśli fałsz
    console.log("A jest większe")
}
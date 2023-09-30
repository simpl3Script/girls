const div1 = document.querySelector('.div1');
const div2 = document.querySelector('.div2');

let random, girl, k = 0;

let girls = [
    {
        name: "anita",
        deleted: false,
    },
    {
        name: "elene",
        deleted: false,
    },
    {
        name: "mirca",
        deleted: false,
    },
    {
        name: "eka",
        deleted: false,
    },
    {
        name: "nita",
        deleted: false,
    },
    {
        name: "nini",
        deleted: false,
    },
    {
        name: "kato",
        deleted: false,
    },
    {
        name: "salome",
        deleted: false,
    },
    {
        name: "elene2",
        deleted: false,
    },
    {
        name: "taso",
        deleted: false,
    },
    {
        name: "mia",
        deleted: false,
    },
]

Random();
div1.id = girls[random].name;
div1.innerHTML = `<img src='./images/${girls[random].name}.png'>`

setUp()

function setUp(){
    Random();

    if(girls[random].name != div1.id){
        div2.id = girls[random].name;
        div2.innerHTML = `<img src='./images/${girls[random].name}.png'>`
    }
    else{
        setUp();
    }
}

div1.addEventListener('click', () => {
    check1();
})

div2.addEventListener('click', () => {
    check2();
})

function Random(){
    random = Math.floor(Math.random() * girls.length)
}

function check1(){
    for(let i = 0; i < girls.length; i++){
        if(girls[i].name == div2.id){
            girls[i].deleted = true;
        }
        
    }
    Random();
    girl = girls[random];

    if(girl.name != div1.id){
        if(girl.deleted != true){
            div2.id = girls[random].name;
            div2.innerHTML = `<img src='./images/${girls[random].name}.png'>`
        }
        else{
            check1()
        }
    }
    else{
        check1()
    }
}

function check2(){
    for(let i = 0; i < girls.length; i++){
        if(girls[i].name == div1.id){
            girls[i].deleted = true;
            k++;
        }
    }
    Random();
    girl = girls[random];

    if(girl.name != div2.id){
        if(girl.deleted != true){
            div1.id = girls[random].name;
            div1.innerHTML = `<img src='./images/${girls[random].name}.png'>`
        }
        else{
            check2()
        }
    }
    else{
        check2()
    }
}
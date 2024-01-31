// let todoList=[];
// displayItems();

// function addTodo(){
//     let inputElement = document.querySelector;
//     ('#todo-input');
//     let todoItem = inputElement.value;
//     todoList.push(todoItem);
//     inputElement.value = '';

//     displayItems();
// }

// function displayItems(){
//     let displayElement = document.querySelector;
//     ('#todo-items');
//     displayElement.innerText='';
//     for(let i=0; i<todoList.length; i++){
//         displayElement.innerText = displayElement.innerText+ "\n" + todoList[i];
//     }
// }

const inputBox=document.getElementById("input-box");
const listContainer=document.getElementById("list-container");
function addTask(){
    if(inputBox.value === ''){
        alert("You must write something!");
    }
    else{
        let li = document.createElement("li");
        li.innerHTML=inputBox.value;
        listContainer.appendChild(li);
        let span=document.createElement("span");
        span.innerHTML="\u00d7";
        li.appendChild(span);
    }
    inputBox.value="";


}
listContainer.addEventListener("click",function(e){
    if(e.target.tagName === "LT"){
        e.target.classList.toggle("checked");
        saveData();
    }
    else if(e.target.tagName==="SPAN"){
        e.target.parentElement.remove();
        saveData();
    }
},false);

function saveData(){
    localStorage.setItem("data",listContainer.innerHTML);
}
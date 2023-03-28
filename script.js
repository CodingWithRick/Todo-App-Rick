const inpBox = document.getElementById('inpBox');
const listCont = document.getElementById('listCont');
const form = document.querySelector('.row');
function addTask(){
    if (inpBox.value === ''){
        alert('You must write something!');
    } else {
        let li = document.createElement('li');
        li.innerHTML = inpBox.value;
        listCont.appendChild(li);
        let span = document.createElement('span');
        span.innerHTML = "\u00d7";
        li.appendChild(span);        
    }
    inpBox.value = "";
    saveData();
}

listCont.addEventListener("click", (e)=>{
    if(e.target.tagName === "LI"){
        e.target.classList.toggle("checked");
        saveData();
    } else if (e.target.tagName === "SPAN"){
        e.target.parentElement.remove();
        saveData();
    }
}, false);

function saveData(){
    localStorage.setItem("data", listCont.innerHTML);
}

function showTask(){
    listCont.innerHTML = localStorage.getItem("data");
}

form.addEventListener("submit", (e)=>{
    e.preventDefault();
})

showTask();
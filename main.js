const input_box=document.getElementById("input_box");
const list_cont=document.getElementById("all_list");


function addtask(){
    if(input_box.value===""){
        input_box.placeholder = "You must write anything";
    }
   
    else
    {
        let li=document.createElement("li");
        li.innerHTML=input_box.value;
        list_cont.appendChild(li);
        let span=document.createElement("span")
        span.innerHTML="\u00d7"
        li.appendChild(span)
        input_box.placeholder = "ADD YOUR TASK";

    }
   
    input_box.value="";
    saveData()

}

list_cont.addEventListener("click",function(e){
    if(e.target.tagName==="LI"){
        e.target.classList.toggle("checked");
        saveData();
    }
    else if(e.target.tagName==="SPAN"){
        e.target.parentElement.remove();
        saveData();
        
    }

},false);

function saveData(){
    localStorage.setItem("data",list_cont.innerHTML);
}
function show_task(){
    list_cont.innerHTML=localStorage.getItem("data");
}
show_task();
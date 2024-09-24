const inputBox = document.getElementById("input-box");
const listContainer = document.getElementById("list-container");

function addtask()
{
    if(inputBox.value === "")
    {
        alert("you must write something")
    }

    else
    {
        let li = document.createElement("li")
        li.innerHTML = inputBox.value;
        listContainer.appendChild(li);

        let span = document.createElement("span");
        span.innerHTML = "\u00d7";// this is the code to dispay cross in front of each task
        li.appendChild(span)
    }

    

    inputBox.value = '';
    savedata();
}

listContainer.addEventListener("click" , function(e)
{
    if(e.target.tagName === "LI")
    {
        e.target.classList.toggle("checked");
        savedata();
    }
    else if (e.target.tagName === "SPAN"){

            e.target.parentElement.remove();
            savedata();

    }

}, false);

function savedata()
{
    localStorage.setItem("data" , listContainer.innerHTML);
}

function showlist()
{
    listContainer.innerHTML = localStorage.getItem("data");
}
showlist();

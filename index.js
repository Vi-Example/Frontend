
//Практически весь код взят из первого урока и особо не знаю как работать с JS
//Практически весь код взят из первого урока и особо не знаю как работать с JS

let items = ["Елементы 1", "Елементы 2", "Елементы 3"];


function displayItem()
{
    let itemList = document.getElementById("list");
    itemList.innerHTML = "";

    items.forEach (function (item, index)
    {
        let li = document.createElement("li");
        li.textContent = item;

        let deleteButton = document.createElement("button");
        deleteButton.textContent = "Delete";
        deleteButton.classList += "default-button";
        deleteButton.onclick = function() { deleteText(index);};
        li.appendChild(deleteButton);

        itemList.appendChild(li);
    });
}

displayItem;

function addItem()
{
    let newItemInput = document.getElementById("new-item-input");
    let newItem = newItemInput.value.trim();
    alert(newItem)
    
    if(newItem !== "")
    {
        items.push(newItem);

        newItemInput.value = "";

        displayItem;
    }
}

function deleteText(index)
{
    items.splice(index, 1);

    displayItem();
}
//varible
const item = document.querySelector('.items');
const number = document.querySelector('.number');
const date = document.querySelector('.date');
const button = document.querySelector('.btn');
const record = document.querySelector('.record');

button.addEventListener("click",function(){
    // checking condition
    if(item.value == "" && number.value == "" && date.value == ""){
        alert("Enter any input");
    }else{
        const recordRow = document.createElement("tr") 

        const newItem = document.createElement("th");
        newItem.innerHTML = item.value;
        recordRow.appendChild(newItem);
        const newNumber = document.createElement("th");
        newNumber.innerHTML = number.value;
        recordRow.appendChild(newNumber);
        const newDate = document.createElement("th");
        newDate.innerHTML = date.value;
        recordRow.appendChild(newDate);
         
        record.appendChild(recordRow);

    }
});
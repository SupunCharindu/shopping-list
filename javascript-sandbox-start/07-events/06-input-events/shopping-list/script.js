const itemInput = document.getElementById('item-input'); 
const  priorityInput= document.getElementById('priority-input'); 
const checkbox = document.getElementById('checkbox'); 
const heading = document.querySelector('h1'); 

function onInput(e) {
    heading.textContent =  e.target.value;
}



function onChecked(e) {
   const isChecked = e.target.checked;
    heading.textContent = isChecked ? 'Checkd' : 'Not Checked';
}

function onFocus() {
    console.log('Input is focused');
    itemInput.style.outlineStyle = 'solid';
    itemInput.style.outlinewidth = '1px';
    itemInput.style.outlineColor = 'green';
}

function onBlur() {
    console.log('Input is not focused');
    itemInput.style.outlineStyle = 'none';
}






itemInput.addEventListener('input', onInput);  
priorityInput.addEventListener('change', onInput);  //you can use input as change if you want
checkbox.addEventListener('input', onChecked);  
itemInput.addEventListener('focus', onFocus);
itemInput.addEventListener('blur', onBlur);
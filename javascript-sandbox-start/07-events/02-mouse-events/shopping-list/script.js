const logo = document.querySelector('img');

const onClick = () => console.log('click event');

const onDoubleClick = () => {
    if (document.body.style.backgroundColor !== 'green') {
        document.body.style.backgroundColor = 'green';
        document.body.style.color = 'white';
    } else {
        document.body.style.backgroundColor = 'white';
        document.body.style.color = 'black';
    }
};

const onRightClick = () => console.log('right click event'); 
const onMouseDown = () => console.log('mouse down event'); 
const onMouseUp = () => console.log('mouse up event');  
const onMouseWheel = () => console.log('mouse wheel event');  
const onMouseOver = () =>  {
    document.body.style.backgroundColor = 'red';
}; 
const onMouseOut = () => {
    document.body.style.backgroundColor = 'white';
};
const onDragStart = () => console.log('drag start event');  

const onDrag = () => console.log('drag event');  

const onDragEnd = () => console.log('drag end event');  



//Ecent Listners
logo.addEventListener('click', onClick);
logo.addEventListener('dblclick', onDoubleClick);
logo.addEventListener('contextmenu', onRightClick);
logo.addEventListener('mousedown', onMouseDown);
logo.addEventListener('mouseup', onMouseUp);
logo.addEventListener('wheel', onMouseWheel);
logo.addEventListener('mouseover', onMouseOver);
logo.addEventListener('mouseout', onMouseOut);
logo.addEventListener('mouseover', onMouseOver);
logo.addEventListener('dragstart', onDragStart);
logo.addEventListener('drag', onDrag);
logo.addEventListener('dragend', onDragEnd);
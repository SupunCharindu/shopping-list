function replaceFirstItem() {
    const firstItem = document.querySelector('li:first-child');

    const li = document.createElement('li');
    li.textContent = 'Replace First';

    firstItem.replaceWith(li)

}


function replaceSecondItem() {
    const SecondItem = document.querySelector('li:nth-child(2)');

    SecondItem.outerHTML = '<li>Replace Second</li>';
}

function replaceAllItem() {
    const lis = document.querySelectorAll('li');

    // lis.forEach((item, index) => {
    //     // item.outerHTML = '<li>Replace All</li>';
        
        
    //     if (index === 1){
    //         item.innerHTML = 'Second';
       
       
    //     }else{
    //         item.innerHTML = 'Replace all';
    //     }
   
    // });

    lis.forEach((item, index) => item.outerHTML = index === 3 ? '<li>Second</li>' : '<li>Item</li>')


}

function replaceChildHeading() {
    const header = document.querySelector('header');

    const h1 = document.querySelector('header h1');

    const h2 = document.createElement('h2')
    h2.id = 'app-title';
    h2.textContent = 'Shopping List';
    header.replaceChild(h2, h1)
}







replaceFirstItem();
replaceSecondItem();
replaceAllItem();
replaceChildHeading()
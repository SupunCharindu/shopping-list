
// document.addEventListener(event, function, capture);


const clearBtn = document.querySelector('#clear');

function onClear() {
    const itemList = document.querySelector('ul');
    const items = itemList.querySelectorAll('li');

    // itemList.innerHTML = '';

    items.forEach((item) => item.remove());
}

// JavaScript Event Listner
// clearBtn.onclick = function () {
//      alert('Clear Items');
//   };
// clearBtn.onclick = function () {
//      console.log('Clear Items');
//   };


//addEventLIstner
// clearBtn.addEventListener('click', () => alert('Clear Item'));

// Use named function
clearBtn.addEventListener('click', onClear);

// removeEventListener()
setTimeout(() => clearBtn.removeEventListener('click', onClear), 5000);

// Fire off event from JS
setTimeout(() => clearBtn.click(), 5000)
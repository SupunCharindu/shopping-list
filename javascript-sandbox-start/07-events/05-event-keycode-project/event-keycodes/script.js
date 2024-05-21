//Method 01

// window.addEventListener('keydown', (e) => {
//     const insert = document.getElementById('insert');

//     insert.innerHTML = `
//         <div class="key">
//             ${e.key === ' ' ? 'Space' : e.key}
//             <small>e.key</small>
//         </div>

//         <div class="key">
//             ${e.keyCode}
//             <small>e.keyCode</small>
//         </div>

//         <div class="key">
//             ${e.code}
//             <small>event.code</small>
//         </div>`;
// })

//Method 02
function showKeyCodes(e) {
    const insert = document.getElementById('insert');

    const keyCode = {
        'e.key': e.key === ' ' ? 'Space' : e.key,
        'e.keyCode': e.keyCode,
        'e.code': e.code,
    };

    for (let key in keyCode) {
        const div =document.createElement('div')
    }
}

window.addEventListener('keydown', showKeyCodes);
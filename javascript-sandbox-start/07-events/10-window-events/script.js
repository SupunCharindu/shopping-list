
// window.onload = function () {
//     document.querySelector('h1').textContent = 'Hello World';
// };


// window.addEventListener('load', () => (
//     document.querySelector('h1').textContent = 'Hello World'
// ) )


window.addEventListener('DOMContentLoaded', () => (
    document.querySelector('h1').textContent = 'Hello World'
))



// Resize Event
window.addEventListener('resize', () => {
    document.querySelector(
      'h1'
    ).innerText = `Resized to ${window.innerWidth} x ${window.innerHeight}`;
  });
  


  // Scroll Event
window.addEventListener('scroll', () => {
    console.log(`Scrolled: ${window.scrollX} x ${window.scrollY}`);
  
    if (window.scrollY > 70) {
      document.body.style.backgroundColor = 'black';
      document.body.style.color = 'white';
    } else {
      document.body.style.backgroundColor = 'white';
      document.body.style.color = 'black';
    }
  });
  

  // Focus & Blur Events
window.addEventListener('focus', () => {
    document.querySelectorAll('p').forEach((p) => {
      p.style.color = 'blue';
    });
  });
  
  window.addEventListener('blur', () => {
    document.querySelectorAll('p').forEach((p) => {
      p.style.color = 'black';
    });
  });
  
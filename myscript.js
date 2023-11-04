let content = document.querySelectorAll('.content');
let index = 0;

// next function
function next(){
    content[index].classList.remove('show');
    index = (index + 1) % content.length;
    content[index].classList.add('show');
}

// prev function
function prev(){
    content[index].classList.remove('show');
    index = (index - 1 + content.length) % content.length;
    content[index].classList.add('show');
}
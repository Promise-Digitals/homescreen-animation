let content = document.querySelectorAll('.content');
let index = 0;
let lists = document.querySelectorAll('.lists');

lists[0].onclick = function(){
    for (con of content){
        con.classList.remove('show');
    }
    for (l of lists){
        l.classList.remove('active');
    }
    content[0].classList.add('show');
    lists[0].classList.add('active');
}

lists[1].onclick = function(){
    for (con of content){
        con.classList.remove('show');
    }
    for (l of lists){
        l.classList.remove('active');
    }
    content[1].classList.add('show');
    lists[1].classList.add('active');
}

lists[2].onclick = function(){
    for (con of content){
        con.classList.remove('show');
    }
    for (l of lists){
        l.classList.remove('active');
    }
    content[2].classList.add('show');
    lists[2].classList.add('active');
}


// next function
function next(){
    content[index].classList.remove('show');
    index = (index + 1) % content.length;
    content[index].classList.add('show');
    for(l of lists){
        l.classList.remove('active');
    }
    lists[index].classList.add('active');
}

// prev function
function prev(){
    content[index].classList.remove('show');
    index = (index - 1 + content.length) % content.length;
    content[index].classList.add('show');
    for(l of lists){
        l.classList.remove('active');
    }
    lists[index].classList.add('active');
}

setInterval(next, 5000);

//  for swiper gesture
let touchstartX = 0
let touchendX = 0
    
function checkDirection() {
    if (touchendX < touchstartX){
        next();
    }
    if (touchendX > touchstartX){
        prev();
    }
}

document.querySelector(".container").addEventListener('touchstart', e => {
    touchstartX = e.changedTouches[0].screenX;
})

document.querySelector(".container").addEventListener('touchend', e => {
    touchendX = e.changedTouches[0].screenX;
    checkDirection();
});
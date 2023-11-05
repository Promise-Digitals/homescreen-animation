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

// swiper function detection
// var container = document.querySelector(".container");

//     container.addEventListener("touchstart", startTouch, false);
//     container.addEventListener("touchmove", moveTouch, false);

//   // Swipe Up / Down / Left / Right
//     var initialX = null;
//     var initialY = null;

//     function startTouch(e) {
//     initialX = e.touches[0].clientX;
//     initialY = e.touches[0].clientY;
//     };

//     function moveTouch(e) {
//         if (initialX === null) {
//             return;
//         }

//         if (initialY === null) {
//             return;
//         }

//         var currentX = e.touches[0].clientX;
//         var currentY = e.touches[0].clientY;

//         var diffX = initialX - currentX;
//         var diffY = initialY - currentY;

//         if (Math.abs(diffX) > Math.abs(diffY)) {
//         // sliding horizontally
//             if (diffX > 0) {
//             // swiped left
//             next();
//             console.log("swiped left");
//             } else {
//             // swiped right
//             prev();
//             console.log("swiped right");
//             }  
//         } else {
//         // sliding vertically
//             if (diffY > 0) {
//             // swiped up
//             console.log("swiped up");
//             } else {
//             // swiped down
//             console.log("swiped down");
//             }  
//         }

//         initialX = null;
//         initialY = null;

//         e.preventDefault();
//     };

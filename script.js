window.addEventListener("load", function () {
    var loader = document.querySelector('.loader');
    loader.style.display = "none"; // Hide the loader element

    var boxShadowElement = document.querySelector('.box_parent');
    boxShadowElement.classList.remove('hidden'); // Remove the 'hidden' class
});


// move up button
document.addEventListener("DOMContentLoaded", function () {
    // Add smooth scrolling to all links
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function (e) {
            e.preventDefault();

            document.querySelector(this.getAttribute('href')).scrollIntoView({
                behavior: 'smooth'
            });
        });
    });
});




window.onscroll = function () { stickyHeader() };

function stickyHeader() {
    if (document.body.scrollTop > 0 || document.documentElement.scrollTop > 0) {
        document.getElementById("sticky-header").classList.add("sticky");
    } else {
        document.getElementById("sticky-header").classList.remove("sticky");
    }
}






const box01 = document.querySelector('.box01');
const leftArrowButton = document.querySelector('.left_arrow_button');
const rightArrowButton = document.querySelector('.right_arrow_button');
let currentImageIndex = 1;
const totalImages = 3;
let intervalId;

function changeBackgroundImage(offset) {
    currentImageIndex = (currentImageIndex + offset + totalImages - 1) % totalImages + 1;
    box01.style.backgroundImage = `url(box01_bg_image${currentImageIndex}.jpg)`;
}

function updateImageAndRestartInterval(offset) {
    clearInterval(intervalId);
    changeBackgroundImage(offset);
    intervalId = setInterval(() => changeBackgroundImage(1), 3000);
}

changeBackgroundImage(0);
intervalId = setInterval(() => changeBackgroundImage(1), 3000);

leftArrowButton.addEventListener('click', (event) => {
    event.preventDefault();
    updateImageAndRestartInterval(-1);
});

rightArrowButton.addEventListener('click', (event) => {
    event.preventDefault();
    updateImageAndRestartInterval(1);
});


/********************************************************************************************* */

// each set of elements will be manipulated independently based on the index of the clicked header.
// code 01:*****************

// document.addEventListener('DOMContentLoaded', function () {
//     const headers = document.querySelectorAll('.box07_content-button');
//     const collapses = document.querySelectorAll('.box07_content');
//     const showButtons = document.querySelectorAll('.box07_content-button-show');
//     const hideButtons = document.querySelectorAll('.box07_content-button-hide');

//     headers.forEach((header, index) => {
//         header.addEventListener('click', () => {
//             // Toggle the display for collapses
//             collapses.forEach((collapse, i) => {
//                 collapse.style.display = i === index ? (collapse.style.display === 'none' ? 'block' : 'none') : 'none';
//             });

//             // Toggle the display for showButtons
//             showButtons.forEach((showButton, i) => {
//                 showButton.style.display = i === index ? (showButton.style.display === 'none' ? 'block' : 'none') : 'block';
//             });

//             // Toggle the display for hideButtons
//             hideButtons.forEach((hideButton, i) => {
//                 hideButton.style.display = i === index ? (hideButton.style.display === 'none' ? 'block' : 'none') : 'none';
//             });

//             // Toggle the background-color class for headers
//             headers.forEach((h, i) => {
//                 if (i === index) {
//                     h.classList.toggle('maximized');
//                 } else {
//                     h.classList.remove('maximized');
//                 }
//             });
//         });
//     });
// });




// each set of elements works individually
// code 02:*****************

document.addEventListener('DOMContentLoaded', function () {
    const headers = document.querySelectorAll('.box07_content-button');
    const collapses = document.querySelectorAll('.box07_content');
    const showButtons = document.querySelectorAll('.box07_content-button-show');
    const hideButtons = document.querySelectorAll('.box07_content-button-hide');

    headers.forEach((header, index) => {
        header.addEventListener('click', () => {
            // Toggle the display for collapses
            collapses[index].style.display = (collapses[index].style.display === 'none' ? 'block' : 'none');

            // Toggle the display for showButtons
            showButtons[index].style.display = (showButtons[index].style.display === 'none' ? 'block' : 'none');

            // Toggle the display for hideButtons
            hideButtons[index].style.display = (hideButtons[index].style.display === 'none' ? 'block' : 'none');

            // Toggle the background-color class for headers
            headers[index].classList.toggle('maximized');
        });
    });
});
/********************************************************************************************* */

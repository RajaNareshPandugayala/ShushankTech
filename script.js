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





document.addEventListener("DOMContentLoaded", function () {
    var menuButton = document.getElementById("menubtn");
    var closeButton = document.getElementById("closebtn");
    var menuList = document.querySelector(".header_main-menu_ul01");
    var menuListAs = document.querySelectorAll(".header_main-menu_ul-li01-a");

    menuList.style.display = "none";

    menuButton.addEventListener("click", function () {
        menuList.style.display = "block";
        menuButton.style.display = "none";
        closeButton.style.display = "inline-block";
    });

    closeButton.addEventListener("click", function () {
        menuList.style.display = "none";
        menuButton.style.display = "inline-block";
        closeButton.style.display = "none";
    });


    // Event listener for the a button
    // Loop through each anchor element and add event listener
    menuListAs.forEach(function (menuListA) {
        menuListA.addEventListener("click", function () {
            menuList.style.display = "none";
            menuButton.style.display = "inline-block";
            closeButton.style.display = "none";
        });
    });


});









const box01 = document.querySelector('.box01');
const buttons = document.querySelectorAll('.span_button');
const arrows = document.querySelectorAll('.arrow_button');
let currentImageIndex = 1;
const totalImages = 3;
let intervalId;

function changeBackgroundImage(offset) {
    currentImageIndex = (currentImageIndex + offset + totalImages - 1) % totalImages + 1;
    setBoxBackgroundImage();
}

function setBoxBackgroundImage() {
    //https://www.microsoft.com/en-us/edge/update/year-in-review?form=MT00LC
    const imageUrl = `url(box01_bg_image${currentImageIndex}.webp)`;
    // const gradient = 'linear-gradient(135deg, #a8a8a8, transparent 40%)';
    // const gradient = 'linear-gradient(130deg, #bb61ff, transparent 40%)';
    // const gradient = 'linear-gradient(135deg, #ffabab, transparent 40%)';
    // const gradient = 'linear-gradient(135deg,  #ffabab,transparent 50%, #bb61ff)';
    // const gradient = 'linear-gradient(135deg, #ba99ff, transparent 50%, #8bfaeb)';
    // const gradient = 'linear-gradient(135deg, #ba99ff,transparent 50%, #abd8ff)';
    const gradient = 'linear-gradient(135deg, #1a59c880 20%, transparent)';
    box01.style.backgroundImage = `${gradient}, ${imageUrl}`;

    buttons.forEach((button, index) => {
        button.style.backgroundColor = index + 1 === currentImageIndex ? 'white' : 'gray';
    });
}

function updateImageAndRestartInterval(offset) {
    clearInterval(intervalId);
    changeBackgroundImage(offset);
    intervalId = setInterval(() => changeBackgroundImage(1), 3000);
}

changeBackgroundImage(0);
intervalId = setInterval(() => changeBackgroundImage(1), 3000);

buttons.forEach((button, index) => {
    button.addEventListener('click', (event) => {
        event.preventDefault();
        currentImageIndex = index + 1;
        setBoxBackgroundImage();
    });
});

arrows.forEach((arrow, offset) => {
    arrow.addEventListener('click', (event) => {
        event.preventDefault();
        updateImageAndRestartInterval(offset === 0 ? -1 : 1);
    });
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



function updateSubjectContactUs() {
    var textareaValue = document.getElementById("textarea").value;
    var messageField = document.getElementById("message");
    messageField.value = textareaValue;
    var nameValue = document.getElementById("name").value;
    var subjectField = document.getElementById("subject");
    subjectField.value = "Contact Us - " + nameValue;


    alert("Your request has been sent successfully!")

    var currentUrl = window.location.href;
    document.getElementsByName('_next')[0].value = currentUrl;
    // window.location.reload()
}

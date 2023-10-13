///////logo/////////
function hideLogoAndShowBlankPage() {
    const logoContainer = document.getElementById('logoContainer');
    const logo = document.querySelector('.logo');
    const loginRegisterContainer = document.getElementById('loginRegisterContainer');

    // Add a fade-out effect
    logo.classList.add('fade-out');

    setTimeout(function() {
        logoContainer.style.display = 'none';
        loginRegisterContainer.style.display = 'block';
        document.body.style.backgroundColor = '#1F3A58';
    }, 500); 
}

////////////////////provicy///////////////////////

function showArticleText() {
    const articleText = document.querySelector('.article-text');
    articleText.style.opacity = '1';
}

function showArticlePage() {
    document.getElementById('startPage').style.display = 'none';
    document.getElementById('articlePage').style.display = 'block';

    setTimeout(showArticleText, 100); 
}



///////////////choose sponsor function/////////
window.onload = function() {
    // Show the first image set when the page has finished loading
    showImageSet('set1');
}

function showImageSet(setId) {
    // First, hide all the image sets
    var imageSets = document.querySelectorAll('.image-set');
    for (var i = 0; i < imageSets.length; i++) {
        imageSets[i].style.display = 'none';
    }


    document.getElementById(setId).style.display = 'block';

    // Reset the color of all dot buttons
    var dots = document.querySelectorAll('.dot');
    for (var i = 0; i < dots.length; i++) {
        dots[i].classList.remove('active');
    }

    // Change the color of the clicked dot button to the active color.
    document.querySelector('.dot[onclick="showImageSet(\'' + setId + '\')"]').classList.add('active');
}



///////////////sponsor modal/////////
var modal = document.getElementById("myModal");
var selectedSponsorImgSrc = ""; 
var currentlySelectedImage = null; // Used to track the currently selected image




function openModal(sponsorName, imgSrc) {
    document.getElementById("sponsorName").innerText = sponsorName;
    selectedSponsorImgSrc = imgSrc; 
    modal.style.display = "block";
}


function closeModal() {
    modal.style.display = "none";
}


window.onclick = function(event) {
    if (event.target == modal) {
        closeModal();
    }
}

// Confirmation of Sponsor Selection
function confirmSponsor() {
    closeModal();
    localStorage.setItem("selectedSponsorImgSrc", selectedSponsorImgSrc); 
}

// Open the modal box when the user clicks on the image
function toggleImageSelection(imageElement) {
    var sponsorName = imageElement.alt; 
    openModal(sponsorName, imageElement.src);

    // If there is a previously selected image, remove its border
    if (currentlySelectedImage) {
        currentlySelectedImage.style.border = "none";
    }

    // add a white border to the currently selected image
    imageElement.style.border = "5px solid white";
    currentlySelectedImage = imageElement;
}

// Add click event listeners for all images when the page loads.
window.onload = function() {
    var images = document.querySelectorAll(".clickable-image");
    images.forEach(function(image) {
        image.addEventListener("click", function() {
            toggleImageSelection(image);
        });
    });

    if (document.getElementById("selectedSponsorImg")) {
        document.getElementById("selectedSponsorImg").src = localStorage.getItem("selectedSponsorImgSrc");
    }
}



///////////////////stars function//////////
document.addEventListener("DOMContentLoaded", function() {
    const stars = document.querySelectorAll(".star");

    stars.forEach(star => {
        star.addEventListener("click", function() {
            let value = this.getAttribute("data-value");
            updateStars(value);
        });
    });

    function updateStars(value) {
        stars.forEach(star => {
            if (star.getAttribute("data-value") <= value) {
                star.classList.add("active");
            } else {
                star.classList.remove("active");
            }
        });
    }
});
/////////////////showmodal and finish button///////////

function showModal() {
    var modal1 = document.getElementById("myModal");
    modal1.style.display = "block";


    document.getElementById("finishBtn").style.display = "block";

    var span = document.getElementsByClassName("close1")[0];
    span.onclick = function() {
        modal1.style.display = "none";
    }

    window.onclick = function(event) {
        if (event.target == modal1) {
            modal1.style.display = "none";
        }
    }
}

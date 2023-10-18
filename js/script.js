var currentDate = `${GetDateToday()}`;

var TakeCigs = document.getElementById("CigsButton")
var CigsTaken = document.getElementById("Cigs")
var OneCigsAtTheTime = 0;

if ( document.URL.includes("homepage.html") ) {
  TakeCigs.addEventListener("click", function(){
      OneCigsAtTheTime ++;
      CigsTaken.textContent = `${OneCigsAtTheTime}`;
  })

function updateTimer() {


	// yyyy-MM-dd HH:mm:ss
  past  = Date.parse(currentDate);
  now     = new Date();
  diff    = now - past;

  years  = Math.floor( diff / (1000*60*60*24*30*12) );
  months = Math.floor( diff / (1000*60*60*24*30) );
  days   = Math.floor( diff / (1000*60*60*24) );
  hours  = Math.floor( diff / (1000*60*60) );
  mins   = Math.floor( diff / (1000*60) );
  secs   = Math.floor( diff / 1000 );

  y = years;
  M = months - years  * 12;
  d = days   - months * 30;
  h = hours  - days   * 24;
  m = mins   - hours  * 60;
  s = secs   - mins   * 60;
  document.getElementById("Timer")
    .innerHTML =
    //   '<div><span>since: 1991.03.30</span></div><br>'+
      '<div>' + y + '<span>years</span></div>' +
      '<div>' + M + '<span>months</span></div>' +
      '<div>' + d + '<span>days</span></div>' +
      '<div>' + h + '<span>hours</span></div>' +
      '<div>' + m + '<span>minutes</span></div>' +
      '<div>' + s + '<span>seconds</span></div>' ;
}
setInterval('updateTimer()', 1000 );



}




function GetDateToday(){
        const now = new Date();
      
        const year = now.getFullYear();
        const month = String(now.getMonth() + 1).padStart(2, '0');
        const day = String(now.getDate()).padStart(2, '0');
        const hours = String(now.getHours()).padStart(2, '0');
        const minutes = String(now.getMinutes()).padStart(2, '0');
        const seconds = String(now.getSeconds()).padStart(2, '0');
      
        return `${year}-${month}-${day} ${hours}:${minutes}:${seconds}`;
      
}

// Login script start here

// Sample accounts stored in a JSON object
let accounts = {
  "user1": "password1",
  "user2": "password2"
};

function login() {
  let username = document.getElementById("login-username").value;
  let password = document.getElementById("login-password").value;

  if (accounts[username] && accounts[username] === password) {
      alert("Login successful!");
  } else {
      alert("Login failed. Please check your credentials.");
  }
}

// Create an account
const fs = require('fs');
const path = require('path');

const accountsFilePath = path.join(__dirname, "/js/account.json");

function createAccount(username, password) {
    // Load existing accounts from the file, or create an empty array
    let accounts = [];
    if (fs.existsSync(accountsFilePath)) {
        const data = fs.readFileSync(accountsFilePath, 'utf-8');
        accounts = JSON.parse(data);
    }

    // Check if the account already exists
    const existingAccount = accounts.find(account => account.username === username);
    if (existingAccount) {
        console.log('Account already exists.');
        return;
    }

    // Add the new account to the array
    accounts.push({ username, password });

    // Write the updated array back to the file
    fs.writeFileSync(accountsFilePath, JSON.stringify(accounts, null, 2));
    console.log('Account created successfully.');
}

function SignUp(){
  let username = document.getElementById("signup-username").value;
  let password = document.getElementById("signup-password").value;

  createAccount(username, password)

}











///////logo/////////
function hideLogo() {
  const logo = document.getElementById("LandingLogoID");
  const loginRegisterContainer = document.getElementById('loginRegisterContainer');
  // Add a fade-out effect
  logo.classList.add('fade-out');


  logo.style.display = 'none';
  loginRegisterContainer.style.display = 'flex';
  loginRegisterContainer.style.justifyContent = 'space-around';
  loginRegisterContainer.style.margin = '50px';

  // document.body.style.backgroundColor = '#1F3A58';
  // setTimeout(function() {
  //     logo.style.display = 'none';
  //     loginRegisterContainer.style.display = 'flex';
  //     loginRegisterContainer.style.justifyContent = 'space-around';
  //     loginRegisterContainer.style.margin = '50px';

  //     document.body.style.backgroundColor = '#1F3A58';
  // }, 500); 
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

// Login script end here
var currentDate = `${GetDateToday()}`;

var TakeCigs = document.getElementById("CigsButton")
var CigsTaken = document.getElementById("Cigs")
var OneCigsAtTheTime = 0;

if ( document.URL.includes("Home.html") ) {
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

// Create Account WIP
// function addAccount(username, password) {
//   // Retrieve existing account data from LocalStorage
//   const existingAccounts = JSON.parse(localStorage.getItem("userAccounts")) || {};

//   if (existingAccounts[username]) {
//       alert("Account already exists!");
//   } else {
//       existingAccounts[username] = password;
//       localStorage.setItem("userAccounts", JSON.stringify(existingAccounts));
//       alert("Account added successfully!");
//   }
// }
// Create an account
function SignUp() {
  let username = document.getElementById("signup-username").value;
  let password = document.getElementById("signup-password").value;

  // addAccount(username, password);


  window.location.href = "/Pages/TOS.html";
}

// Login WIP
// function VerifyAccount(username, password){
//   const existingAccounts = JSON.parse(localStorage.getItem("userAccounts")) || {};
//   console.log(existingAccounts);
//   console.log(username,password);
  
//   if (existingAccounts == username && existingAccounts.value == password) {
//       // Successful login
//       alert("Login successful!");
//   } else {
//       // Login failed
//       alert("Login failed. Please check your credentials.");

//   }
// }


function login() {
  let username = document.getElementById("login-username").value;
  let password = document.getElementById("login-password").value;

  // VerifyAccount(username, password);


  window.location.href = "/Pages/TOS.html";
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


// Create an array where the message along with its ID will be stored.
let message = [];

if ( document.URL.includes("Messages.html") ) {
function addMessage(text) {
    // Object where the message will be stored
    const chat = {
        text,
        id: Date.now()
    }

    message.push(chat);

    const list = document.querySelector('.msg-content');
    const messageItem = document.createElement('div');
    messageItem.classList.add('message-item');
    messageItem.setAttribute('data-key', chat.id);

    // Create a <span> element for the message text
    const messageText = document.createElement('span');
    messageText.textContent = chat.text;

    // Create a <span> element for the current time
    const currentTime = document.createElement('span');

    // Format the current time as "00:00"
    const now = new Date();
    const hours = now.getHours().toString().padStart(2, '0');
    const minutes = now.getMinutes().toString().padStart(2, '0');
    currentTime.textContent = `${hours}:${minutes}`;

    // Append both message text and time spans to the message item
    messageItem.appendChild(messageText);
    messageItem.appendChild(currentTime);

    list.appendChild(messageItem);
}

const form = document.querySelector('.input-group');
form.addEventListener('submit', event => {
    event.preventDefault();

    // Input to save the message itself
    const input = document.querySelector('.message');

    // This helps us to detect empty messages and ignore them
    const text = input.value.trim();

    if (text !== '') {
        addMessage(text);
        input.value = '';
        input.focus();
    }
});
}





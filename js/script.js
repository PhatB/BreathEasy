var currentDate = `${GetDateToday()}`;

var TakeCigs = document.getElementById("CigsButton")
var CigsTaken = document.getElementById("Cigs")
var OneCigsAtTheTime = 0;


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

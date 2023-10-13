/* ALERT NOTIFICATION BOX */
alert(save())

function save(){	 
    var userPreference;

      if (confirm("Do you want to activate notifications?") == true) {
          alert("You can recieve notifications now!");
      } else {
          alert("Maybe later");
      }

  }
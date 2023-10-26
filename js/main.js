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

/* Add new diary */
function createPost() {
    // Get user input
    let title = document.getElementById('title').value;
    let author = document.getElementById('author').value;
    let date = document.getElementById('date').value;
    let content = document.getElementById('content').value;

    // Check if all fields have been filled out
    if (title && author && date && content) {
        // Create a new post
        let newPost = `
            <div class="outer">
                <div class="card">
                    <div class="info">
                        <h3 class="title">${title}</h3>
                        <p>by ${author} ${date}</p>
                        <p>${content}</p>
                        <div class="post-interactions">
                            <button>like</button>
                            <button>private</button>
                            <button>public</button>
                        </div>
                    </div>
                </div>
            </div>
        `;

        // Get the timeline element
        let timeline = document.querySelector('.timeline');

        // Append the new post to the timeline
        timeline.innerHTML = newPost + timeline.innerHTML;
        
        // Clear the form fields
        document.getElementById('title').value = '';
        document.getElementById('author').value = '';
        document.getElementById('date').value = '';
        document.getElementById('content').value = '';
    } else {
        alert('Please fill out all fields.');
    }
}



function ShowVideo(){
    //naikinam info
    var info = document.getElementById('main');
    info.parentNode.removeChild(info);
    //kuriam video
    // https://dziugasdegustacijos.lt/degustacija.mp4
    const div = document.createElement('div');
    div.className = "vidiaks";
    div.innerHTML = "<video width='100%' height='100%' controls><source src='https://dziugasdegustacijos.lt/degustacija.mp4' type='video/mp4'>Your browser does not support the video tag.</video>";
    document.getElementById('video').appendChild(div);
}

function ShowError(){
    var err = document.getElementById("error");
    err.classList.remove("hidden");
    document.getElementById("inp").style.backgroundColor = "red";
    
    setTimeout(function(){
        document.getElementById("inp").style.backgroundColor = "";
        err.classList.add("hidden");
    }, 5000);//wait 5 seconds
   
}

let form  = document.getElementById('form');
form.addEventListener('submit', (event) => {
    let code = form.elements['code'];
    
    event.preventDefault();

    data = {kodas: code.value};

    fetch('auth.php', {
        method: 'POST', // or 'PUT'
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(data),
      })
      .then(response => response.json())
      .then(res => {
        console.log('Success:', res);
        if (res===1){
            ShowVideo();
        }else{
            ShowError();
        }
        
      })
      .catch((error) => {
        console.error('Error:', error);
      });

    
});


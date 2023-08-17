function calc(){
    const d = new Date();
    year = d.getFullYear() / 4;
    month = d.getMonth();
    day = d.getDate() - 1;
    min = d.getMinutes() * 60;
    hour = (d.getHours() * 60) * 60;
    sec = d.getSeconds();
    mili = d.getMilliseconds() / 1000;


    seconds = [2678400, 2419200, 2678400, 2592000, 2678400, 2592000, 2678400, 2678400, 2592000, 2678400, 2592000, 2678400]
    if (year % 4 != 0){
        seconds[1] = 2505600;
    }else{
        seconds[1] = 2419200;
    }
    secondsinMonth = 0;
    totalSec = 0;
    for (let i = 0; i < month; i++){
        totalSec = seconds[i] + totalSec;
        secondsinMonth = (secondsinMonth + 1);
    }


    totalSec = totalSec + (day * 86400);
    totalSec = totalSec + min + hour + sec + mili;
    total = 0


    for(let i = 0; i < seconds.length; i++)
    {
        total += seconds[i];
    }
    factor = (total) / 100;
    per = totalSec / factor;
    per = per.toFixed(7);
    document.getElementById("progress").innerHTML = "We are " + per + "% through the year, and I have indeed completed " + per + "% of my new years resolutions!";
}


setInterval(function(){ 
    calc() 
  }, 0);


function submit(){
    user = document.box.name.value.toString();
    text = document.box.body.value.toString();
    fetch('/post', {
      method: 'PUT',
      headers: {
      'Accept': 'application/json',
      'Content-Type': 'application/json'
      },
      body: JSON.stringify({
        user: user,
        text: text,
      })
    })
    location.reload();

  }


  var xhr = new XMLHttpRequest();
  xhr.open("GET", "/posts");
  xhr.responseType = "json";
  xhr.send();
  xhr.onload = function() {
    posts = this.response.posts
  
    posts.reverse()
  
    for (let i = 0; i < posts.length; i++) {
      if(i % 2 != 0){
          document.getElementById("posts").innerHTML += "<div style='color:rgb(224, 224, 224)' ><p>&nbsp;&nbsp;" + posts[i].user + " || " + posts[i].time + "<p><pre>&nbsp;&nbsp;" + posts[i].text + "</pre><div>";
      }else{
        document.getElementById("posts").innerHTML += "<br><div style='color:rgb(224, 224, 224); background:rgb(54, 54, 54);' >&nbsp;<p>&nbsp;&nbsp;" + posts[i].user + " || " + posts[i].time + "<p><pre>&nbsp;&nbsp;" + posts[i].text + "</pre><div>&nbsp;";
      }
    }
  }

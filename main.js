ids = ["JA1796", "TJ1796", "TJ1800", "JA1800", "AB1800", "TJ1804", "CP1804", "JM1808", "CP1808", "JM1812", "DC1812", "JM1816", "RK1816", "JM1820", "JQ1820", "JQ1824", "AJ1824", "WC1824", "HC1824", "AJ1828", "JQ1828", "AJ1832", "HC1832", "WW1832", "JF1832", "MVB1836", "WHH1836","HW1836","WM1836","DW1836", "WHH1840", "MVB1840", "JP1844", "HC1844", "ZT1848", "LC1848", "MVB1848", "FP1852", "WS1852", "JH1852", "JB1856", "JF1856", "MF1856", "AL1860", "SD1860", "JBRIDGE1860", "JBELL1860", "AL1864", "GM1864", "UG1868", "HS1868", "UG1872", "HG1872", "RH1876", "ST1876", "JG1880", "WSH1880", "GC1884", "JB1884", "BH1888", "GC1888", "GC1892", "BH1892", "JW1892", "WJB1896", "WM1896", "WJB1900", "WM1900", "TR1904", "AP1904", "WT1908", "WJB1908", "WW1912", "WT1912", "TR1912", "ED1912", "CEH1916", "WW1916", "JC1920", "WH1920", "CC1924", "JD1924", "RF1924", "HH1928", "AS1928", "FDR1932", "HH1932", "AL1936", "FDR1936", "FDR1940", "WW1940", "FDR1944", "TD1944", "HT1948", "TD1948", "ST1948", "DE1952", "AS1952", "DE1956", "AS1956", "JFK1960", "RN1960", "LBJ1964", "BG1964", "RN1968", "HH1968", "GW1968", "RN1972", "GM1972", "GF1976", "JC1976", "RR1980", "JC1980", "JA1980", "WM1984", "RR1984", "MD1988", "GB1988", "BC1992", "GB1992", "RP1992", "RP1996", "BC1996", "BD1996", "GB2000", "AG2000", "RN2000", "GB2004", "JK2004", "RN2004", "BO2008", "JM2008", "BO2012", "MR2012", "DT2016", "HC2016", "GJ2016", "JS2016", "JB2020", "DT2020", "JJ2020"]

function update(){
  presidents = ["JA1796", "TJ1800", "TJ1804", "JM1808","JM1812", "JM1816", "JM1820", "JQ1824", "AJ1828", "AJ1832", "MVB1836", "WHH1840", "JP1844", "ZT1848", "FP1852", "JB1856", "AL1860", "AL1864", "UG1868", "UG1872", "RH1876", "JG1880", "GC1884", "BH1888", "GC1892", "WM1896", "WM1900", "TR1904", "WT1908", "WW1912", "WW1916", "WH1920", "CC1924", "HH1928", "FDR1932", "FDR1936", "FDR1940", "FDR1944", "HT1948", "DE1952", "DE1956", "JFK1960", "LBJ1964", "RN1968", "RN1972", "JC1976", "RR1980", "RR1984", "GB1988", "BC1992", "BC1996", "GB2000", "GB2004", "BO2008", "BO2012", "DT2016", "JB2020"]
  partyVotes = []
  var timesVotedCorrectly = 0;
  for (let i = 0; i < ids.length; i++) {
      var ifexists = document.getElementById("votes" + ids[i]);
      if(ifexists){
        var xhr = new XMLHttpRequest();
        xhr.open("GET", ids[i]);
        xhr.responseType = "json";
        xhr.send();
        xhr.onload = function() {
            document.getElementById("votes" + ids[i]).innerHTML = this.response.value;
        } 
      }
    }

    electionYears = ['election1796']
    year = 1796;
    for (let i = 0; i < 56; i++) {
      partyVotes.push(getCookie('election' + year + 'party'));

      year = year + 4;
      electionYears.push('election' + year);



    }
    ifexists = document.getElementById("voted");
    for (let i = 0; i < electionYears.length; i++) {
      if(getCookie(electionYears[i]) == presidents[i] && ifexists){
        timesVotedCorrectly++
        document.getElementById("voted").innerHTML = "Times votes for Winner: " + timesVotedCorrectly + "/57";
      }
    
    }
    ifexists = document.getElementById("party");
    if(ifexists){
      document.getElementById("party").innerHTML = "Your Dominant Party: " +  mode(partyVotes);
    }
  



}

update();

function mode(array)
{
    if(array.length == 0)
        return null;
    var modeMap = {};
    var maxEl = array[0], maxCount = 1;
    for(var i = 0; i < array.length; i++)
    {
        var el = array[i];
        if(modeMap[el] == null)
            modeMap[el] = 1;
        else
            modeMap[el]++;  
        if(modeMap[el] > maxCount)
        {
            maxEl = el;
            maxCount = modeMap[el];
        }
    }
    return maxEl;
}






electionYears = ['election1796']
parties = []
year = 1796;
for (let i = 0; i < 56; i++) {
  year = year + 4;
  electionYears.push('election' + year);

}

for (let i = 0; i < electionYears.length; i++) {
  var exists = document.getElementById(getCookie(electionYears[i]));
  if(exists){
    document.getElementById(getCookie(electionYears[i])).style.padding = "9px"
  }

  parties.push(getCookie(electionYears[i] + 'party'));

}
year = 1796









function voteTwoWay(year, candidate, option1, option2, party, number){
  var votes;

  if(getCookie(year) == ""){
      votes = 0;
      var xhr1 = new XMLHttpRequest();
      xhr1.open("GET", "/" + option1);
      xhr1.responseType = "json";
      xhr1.send();
      xhr1.onload = function() {
        votes = this.response.value;
      }
      
      fetch('/' + option1, {
        method: 'POST',
        headers: {
          'Accept': 'application/json',
          'Content-Type': 'application/json'
        },
        body: JSON.stringify({value: votes + 1})
  })
    document.getElementById(option1).style.padding = "9px"
    document.getElementById(option2).style.padding = "6px"
  }




  if(getCookie(year) == option2){

    votes = 0;
    var xhr1 = new XMLHttpRequest();
    xhr1.open("GET", "/" + option1);
    xhr1.responseType = "json";
    xhr1.send();
    xhr1.onload = function() {
      votes = this.response.value;
    }
    
    fetch('/' + option1, {
      method: 'POST',
      headers: {
        'Accept': 'application/json',
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({value: votes + 1})
  })

    console.log('/' + option1, votes);


    votes = 0;
    var xhr1 = new XMLHttpRequest();
    xhr1.open("GET", "/" + option2);
    xhr1.responseType = "json";
    xhr1.send();
    xhr1.onload = function() {
      votes = this.response.value;
    }
  
  fetch('/' + option2, {
    method: 'POST',
    headers: {
      'Accept': 'application/json',
      'Content-Type': 'application/json'
    },
    body: JSON.stringify({value: votes - 1})
})

    console.log('/' + option2, votes);
    document.getElementById(option1).style.padding = "9px"
    document.getElementById(option2).style.padding = "6px"

  }
  setCookie(year, option1, 9999);
  update();
  setCookie(year + 'party', party, 9999);
}

function voteThreeWay(year, candidate, option1, option2, option3, party, number){
  var votes;

  if(getCookie(year) == ""){
      votes = 0;
      var xhr1 = new XMLHttpRequest();
      xhr1.open("GET", "/" + option1);
      xhr1.responseType = "json";
      xhr1.send();
      xhr1.onload = function() {
        votes = this.response.value;
      }
      
      fetch('/' + option1, {
        method: 'POST',
        headers: {
          'Accept': 'application/json',
          'Content-Type': 'application/json'
        },
        body: JSON.stringify({value: votes + 1})
  })
    document.getElementById(option1).style.padding = "9px"
    document.getElementById(option2).style.padding = "6px"
    document.getElementById(option3).style.padding = "6px"
  }




  if(getCookie(year) == option2){

    votes = 0;
    var xhr1 = new XMLHttpRequest();
    xhr1.open("GET", "/" + option1);
    xhr1.responseType = "json";
    xhr1.send();
    xhr1.onload = function() {
      votes = this.response.value;
    }
    
    fetch('/' + option1, {
      method: 'POST',
      headers: {
        'Accept': 'application/json',
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({value: votes + 1})
  })

    console.log('/' + option1, votes);


    votes = 0;
    var xhr1 = new XMLHttpRequest();
    xhr1.open("GET", "/" + option2);
    xhr1.responseType = "json";
    xhr1.send();
    xhr1.onload = function() {
      votes = this.response.value;
    }
  
  fetch('/' + option2, {
    method: 'POST',
    headers: {
      'Accept': 'application/json',
      'Content-Type': 'application/json'
    },
    body: JSON.stringify({value: votes - 1})
  })

    console.log('/' + option2, votes);
    document.getElementById(option1).style.padding = "9px"
    document.getElementById(option2).style.padding = "6px"
    document.getElementById(option3).style.padding = "6px"

  }


  if(getCookie(year) == option3){

    votes = 0;
    var xhr1 = new XMLHttpRequest();
    xhr1.open("GET", "/" + option1);
    xhr1.responseType = "json";
    xhr1.send();
    xhr1.onload = function() {
      votes = this.response.value;
    }
    
    fetch('/' + option1, {
      method: 'POST',
      headers: {
        'Accept': 'application/json',
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({value: votes + 1})
  })

    console.log('/' + option1, votes);


    votes = 0;
    var xhr1 = new XMLHttpRequest();
    xhr1.open("GET", "/" + option3);
    xhr1.responseType = "json";
    xhr1.send();
    xhr1.onload = function() {
      votes = this.response.value;
    }
  
  fetch('/' + option3, {
    method: 'POST',
    headers: {
      'Accept': 'application/json',
      'Content-Type': 'application/json'
    },
    body: JSON.stringify({value: votes - 1})
  })

    console.log('/' + option3, votes);
    document.getElementById(option1).style.padding = "9px"
    document.getElementById(option2).style.padding = "6px"
    document.getElementById(option3).style.padding = "6px"

  }
  setCookie(year, option1, 9999);
  update();
  setCookie(year + 'party', party, 9999);
}




function voteFiveWay(year, candidate, option1, option2, option3, option4, option5, party, number){
  var votes;

  if(getCookie(year) == ""){
      votes = 0;
      var xhr1 = new XMLHttpRequest();
      xhr1.open("GET", "/" + option1);
      xhr1.responseType = "json";
      xhr1.send();
      xhr1.onload = function() {
        votes = this.response.value;
      }
      
      fetch('/' + option1, {
        method: 'POST',
        headers: {
          'Accept': 'application/json',
          'Content-Type': 'application/json'
        },
        body: JSON.stringify({value: votes + 1})
  })
    document.getElementById(option1).style.padding = "9px"
    document.getElementById(option2).style.padding = "6px"
    document.getElementById(option3).style.padding = "6px"
    document.getElementById(option4).style.padding = "6px"
    document.getElementById(option5).style.padding = "6px"
  }

  if(getCookie(year) == option2){

    votes = 0;
    var xhr1 = new XMLHttpRequest();
    xhr1.open("GET", "/" + option1);
    xhr1.responseType = "json";
    xhr1.send();
    xhr1.onload = function() {
      votes = this.response.value;
    }
    
    fetch('/' + option1, {
      method: 'POST',
      headers: {
        'Accept': 'application/json',
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({value: votes + 1})
  })

    console.log('/' + option1, votes);


    votes = 0;
    var xhr1 = new XMLHttpRequest();
    xhr1.open("GET", "/" + option2);
    xhr1.responseType = "json";
    xhr1.send();
    xhr1.onload = function() {
      votes = this.response.value;
    }
  
  fetch('/' + option2, {
    method: 'POST',
    headers: {
      'Accept': 'application/json',
      'Content-Type': 'application/json'
    },
    body: JSON.stringify({value: votes - 1})
  })

    console.log('/' + option2, votes);
    document.getElementById(option1).style.padding = "9px"
    document.getElementById(option2).style.padding = "6px"
    document.getElementById(option3).style.padding = "6px"
    document.getElementById(option4).style.padding = "6px"
    document.getElementById(option5).style.padding = "6px"

  }


  if(getCookie(year) == option3){

    votes = 0;
    var xhr1 = new XMLHttpRequest();
    xhr1.open("GET", "/" + option1);
    xhr1.responseType = "json";
    xhr1.send();
    xhr1.onload = function() {
      votes = this.response.value;
    }
    
    fetch('/' + option1, {
      method: 'POST',
      headers: {
        'Accept': 'application/json',
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({value: votes + 1})
  })

    console.log('/' + option1, votes);


    votes = 0;
    var xhr1 = new XMLHttpRequest();
    xhr1.open("GET", "/" + option3);
    xhr1.responseType = "json";
    xhr1.send();
    xhr1.onload = function() {
      votes = this.response.value;
    }
  
  fetch('/' + option3, {
    method: 'POST',
    headers: {
      'Accept': 'application/json',
      'Content-Type': 'application/json'
    },
    body: JSON.stringify({value: votes - 1})
  })

    console.log('/' + option3, votes);
    document.getElementById(option1).style.padding = "9px"
    document.getElementById(option2).style.padding = "6px"
    document.getElementById(option3).style.padding = "6px"
    document.getElementById(option4).style.padding = "6px"
    document.getElementById(option5).style.padding = "6px"

  }

  if(getCookie(year) == option4){

    votes = 0;
    var xhr1 = new XMLHttpRequest();
    xhr1.open("GET", "/" + option1);
    xhr1.responseType = "json";
    xhr1.send();
    xhr1.onload = function() {
      votes = this.response.value;
    }
    
    fetch('/' + option1, {
      method: 'POST',
      headers: {
        'Accept': 'application/json',
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({value: votes + 1})
  })

    console.log('/' + option1, votes);


    votes = 0;
    var xhr1 = new XMLHttpRequest();
    xhr1.open("GET", "/" + option4);
    xhr1.responseType = "json";
    xhr1.send();
    xhr1.onload = function() {
      votes = this.response.value;
    }
  
  fetch('/' + option4, {
    method: 'POST',
    headers: {
      'Accept': 'application/json',
      'Content-Type': 'application/json'
    },
    body: JSON.stringify({value: votes - 1})
  })

    console.log('/' + option3, votes);
    document.getElementById(option1).style.padding = "9px"
    document.getElementById(option2).style.padding = "6px"
    document.getElementById(option3).style.padding = "6px"
    document.getElementById(option4).style.padding = "6px"
    document.getElementById(option5).style.padding = "6px"

  }

  if(getCookie(year) == option5){

    votes = 0;
    var xhr1 = new XMLHttpRequest();
    xhr1.open("GET", "/" + option1);
    xhr1.responseType = "json";
    xhr1.send();
    xhr1.onload = function() {
      votes = this.response.value;
    }
    
    fetch('/' + option1, {
      method: 'POST',
      headers: {
        'Accept': 'application/json',
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({value: votes + 1})
  })

    console.log('/' + option1, votes);


    votes = 0;
    var xhr1 = new XMLHttpRequest();
    xhr1.open("GET", "/" + option5);
    xhr1.responseType = "json";
    xhr1.send();
    xhr1.onload = function() {
      votes = this.response.value;
    }
  
  fetch('/' + option5, {
    method: 'POST',
    headers: {
      'Accept': 'application/json',
      'Content-Type': 'application/json'
    },
    body: JSON.stringify({value: votes - 1})
  })

    console.log('/' + option3, votes);
    document.getElementById(option1).style.padding = "9px"
    document.getElementById(option2).style.padding = "6px"
    document.getElementById(option3).style.padding = "6px"
    document.getElementById(option4).style.padding = "6px"
    document.getElementById(option5).style.padding = "6px"

  }
  setCookie(year, option1, 9999);
  update();
  setCookie(year + 'party', party, 9999);
}









function voteFourWay(year, candidate, option1, option2, option3, option4, party, number){
  var votes;

  if(getCookie(year) == ""){
      votes = 0;
      var xhr1 = new XMLHttpRequest();
      xhr1.open("GET", "/" + option1);
      xhr1.responseType = "json";
      xhr1.send();
      xhr1.onload = function() {
        votes = this.response.value;
      }
      
      fetch('/' + option1, {
        method: 'POST',
        headers: {
          'Accept': 'application/json',
          'Content-Type': 'application/json'
        },
        body: JSON.stringify({value: votes + 1})
  })
    document.getElementById(option1).style.padding = "9px"
    document.getElementById(option2).style.padding = "6px"
    document.getElementById(option3).style.padding = "6px"
    document.getElementById(option4).style.padding = "6px"
  }

  if(getCookie(year) == option2){

    votes = 0;
    var xhr1 = new XMLHttpRequest();
    xhr1.open("GET", "/" + option1);
    xhr1.responseType = "json";
    xhr1.send();
    xhr1.onload = function() {
      votes = this.response.value;
    }
    
    fetch('/' + option1, {
      method: 'POST',
      headers: {
        'Accept': 'application/json',
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({value: votes + 1})
  })

    console.log('/' + option1, votes);


    votes = 0;
    var xhr1 = new XMLHttpRequest();
    xhr1.open("GET", "/" + option2);
    xhr1.responseType = "json";
    xhr1.send();
    xhr1.onload = function() {
      votes = this.response.value;
    }
  
  fetch('/' + option2, {
    method: 'POST',
    headers: {
      'Accept': 'application/json',
      'Content-Type': 'application/json'
    },
    body: JSON.stringify({value: votes - 1})
  })

    console.log('/' + option2, votes);
    document.getElementById(option1).style.padding = "9px"
    document.getElementById(option2).style.padding = "6px"
    document.getElementById(option3).style.padding = "6px"
    document.getElementById(option4).style.padding = "6px"

  }


  if(getCookie(year) == option3){

    votes = 0;
    var xhr1 = new XMLHttpRequest();
    xhr1.open("GET", "/" + option1);
    xhr1.responseType = "json";
    xhr1.send();
    xhr1.onload = function() {
      votes = this.response.value;
    }
    
    fetch('/' + option1, {
      method: 'POST',
      headers: {
        'Accept': 'application/json',
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({value: votes + 1})
  })

    console.log('/' + option1, votes);


    votes = 0;
    var xhr1 = new XMLHttpRequest();
    xhr1.open("GET", "/" + option3);
    xhr1.responseType = "json";
    xhr1.send();
    xhr1.onload = function() {
      votes = this.response.value;
    }
  
  fetch('/' + option3, {
    method: 'POST',
    headers: {
      'Accept': 'application/json',
      'Content-Type': 'application/json'
    },
    body: JSON.stringify({value: votes - 1})
  })

    console.log('/' + option3, votes);
    document.getElementById(option1).style.padding = "9px"
    document.getElementById(option2).style.padding = "6px"
    document.getElementById(option3).style.padding = "6px"
    document.getElementById(option4).style.padding = "6px"

  }

  if(getCookie(year) == option4){

    votes = 0;
    var xhr1 = new XMLHttpRequest();
    xhr1.open("GET", "/" + option1);
    xhr1.responseType = "json";
    xhr1.send();
    xhr1.onload = function() {
      votes = this.response.value;
    }
    
    fetch('/' + option1, {
      method: 'POST',
      headers: {
        'Accept': 'application/json',
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({value: votes + 1})
  })

    console.log('/' + option1, votes);


    votes = 0;
    var xhr1 = new XMLHttpRequest();
    xhr1.open("GET", "/" + option4);
    xhr1.responseType = "json";
    xhr1.send();
    xhr1.onload = function() {
      votes = this.response.value;
    }
  
  fetch('/' + option4, {
    method: 'POST',
    headers: {
      'Accept': 'application/json',
      'Content-Type': 'application/json'
    },
    body: JSON.stringify({value: votes - 1})
  })

    console.log('/' + option3, votes);
    document.getElementById(option1).style.padding = "9px"
    document.getElementById(option2).style.padding = "6px"
    document.getElementById(option3).style.padding = "6px"
    document.getElementById(option4).style.padding = "6px"

  }
  setCookie(year, option1, 9999);
  update();
  setCookie(year + 'party', party, 9999);
}













function getCookie(cname) {
  let name = cname + "=";
  let decodedCookie = decodeURIComponent(document.cookie);
  let ca = decodedCookie.split(';');http://localhost:8080/vo
  for(let i = 0; i < ca.length; i++) {
    let c = ca[i];
    while (c.charAt(0) == ' ') {
      c = c.substring(1);
    }
    if (c.indexOf(name) == 0) {
      return c.substring(name.length, c.length);
    }
  }
  return "";
}


function setCookie(cname, cvalue, exdays) {
    const d = new Date();
    d.setTime(d.getTime() + (exdays*24*60*60*1000));
    let expires = "expires="+ d.toUTCString();
    document.cookie = cname + "=" + cvalue + ";" + expires + ";path=/";
  }

  function getCookie(cname) {
    let name = cname + "=";
    let decodedCookie = decodeURIComponent(document.cookie);
    let ca = decodedCookie.split(';');
    for(let i = 0; i < ca.length; i++) {
      let c = ca[i];
      while (c.charAt(0) == ' ') {
        c = c.substring(1);
      }
      if (c.indexOf(name) == 0) {
        return c.substring(name.length, c.length);
      }
    }
    return "";
  }
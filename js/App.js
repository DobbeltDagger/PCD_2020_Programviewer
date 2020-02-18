function App() {
  
  this.currImg = '';        // Url to the current background image
  this.schedule = [];       // info about what to show when. The data ...
  
}


/////////////////
App.prototype = {


  ////////////////////////////////
  init: function() {
    console.log("App is initiated");
    this.renderImage('hep');

    // setup schedule
    this.initSchedule();
    console.log("this.schedule:", this.schedule);

    // check time freq
    let self=this;
    setInterval( e => {
      self.checkTime();
    }, 2000);

  },


  ////////////////////////////////
  // get the time - hours and minutes
  checkTime: function() {

    const now = this.getNow();
    console.log("now:", now);

    // go through time here - backwards
    for(let i = this.schedule.length-1; i >= 0; i--) {
      console.log("sched[i]", this.schedule[i]);

      // shorten the time vars
      const scHours = this.schedule[i].hours;
      const scMins = this.schedule[i].mins;

      // compare now to schedule times
      if (now.hours >= scHours && now.mins >= scMins) {
        this.currImg = this.schedule[i].imgUrl;
      }

    }

    // put time in interface
    let showHours = ''; let showMins = ''; 
    (now.hours < 10) ? showHours = '0'+now.hours : showHours = now.hours;
    (now.mins < 10) ? showMins = "0"+now.mins : showMins = now.mins;

    document.getElementById('txtWrapper').innerHTML = showHours + ":" + showMins;

  },


  ////////////////////////////////
  // this function should produce a timer, that goes through the program very quickly.
  // ..for testing purposes
  testTimer: function() {


  },


  ////////////////////////////////
  // this function returns current time as object { hours, mins }
  getNow: function() {
    const date = new Date();
    const hours = date.getHours();
    const mins = date.getMinutes();
    return { hours: hours, mins: mins }
  },


  ////////////////////////////////
  // put the backgournd img on screen
  renderImage: function(imgPath) {

    let test = 'url(images/Program.jpg)';
    // test = 'url(images/' + imgPath + ')';

    // find elm
    let elm = document.getElementById('imgWrapper').style.backgroundImage = test;
  },


  ////////////////////////////////
  // sets up when to show what
  initSchedule: function() {

    this.schedule = [
      // Workshop #1 - Frederik og Rolf
      {
        "hours": 10,
        "mins": 15,
        "imgUrl": "slides2.jpg",
        "desc": "Workshop #1: Live Coding with Sonic Pi  Frederik la Cour & Rolf Holm"
      },
      // BREAK
      {
        "hours": 11,
        "mins": 30,
        "imgUrl": "slides3.jpg",
        "desc": "BREAK"
      },
      // Introduction
      {
        "hours": 11,
        "mins": 45,
        "imgUrl": "slides4.jpg",
        "desc": "Introduction by PCD organizers"
      },
      // Open and Close - Gabriel
      {
        "hours": 11,
        "mins": 55,
        "imgUrl": "slides5.jpg",
        "desc": "Open and Close — Creating Other Archives  Gabriel Pereira"
      },
      // Juicy Blockchain - Anna
      {
        "hours": 12,
        "mins": 15,
        "imgUrl": "slides6.jpg",
        "desc": "A Juicy Blockchain Story about Governance  Anna Brynskov"
      },
      // LUNCH
      {
        "hours": 12,
        "mins": 30,
        "imgUrl": "slides7.jpg",
        "desc": "LUNCH"
      },
      // Sonic Surveys - Alex
      {
        "hours": 13,
        "mins": 00,
        "imgUrl": "slides8.jpg",
        "desc": "Sonic Surveys and Disruptions of Denmark  Alex Mørch"
      },
      // Utopia + - Mogens
      {
        "hours": 13,
        "mins": 20,
        "imgUrl": "slides9.jpg",
        "desc": "Utopia +  Mogens Jacobsen"
      },
      // Fermenting Data -Magda
      {
        "hours": 13,
        "mins": 40,
        "imgUrl": "slides10.jpg",
        "desc": "Fermenting Data: Sampling and Other Experiments with Microbes, Plants, People and Culture Machines  Magda Tyżlik-Carver"
      },
      // BREAK
      {
        "hours": 14,
        "mins": 05,
        "imgUrl": "slides11.jpg",
        "desc": "BREAK"
      },
      // Workshop #2 - Lasse og Niels
      {
        "hours": 14,
        "mins": 15,
        "imgUrl": "slides12.jpg",
        "desc": "Workshop #2: Machine Learning with P5.js  Lasse Korsgaard & Niels Konrad"
      },
      // Social time!
      /*
      {
        "hours": 11,
        "mins": 30,
        "imgUrl": "",
        "desc": "BREAK"
      }, 
      */                                                                
    ];

    return;
  }

}
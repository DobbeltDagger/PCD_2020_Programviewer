function App() {
  
  this.currImg = '';        // Url to the current background image
  this.schedule = [];       // info about what to show when. The data ...
  this.testTime = { hours: 9, mins: 45 };
  
}


/////////////////
App.prototype = {


  ////////////////////////////////
  init: function() {
    console.log("App is initiated");

    // setup schedule
    this.initSchedule();
    // console.log("this.schedule:", this.schedule);
    
    let self=this;
    // start the show program toggle set Interval - every 15 secs
    setInterval( e => { self.toggleShowProgramFlag() }, 1000); // 15000);

    // check time frequently
    setInterval( e => { self.checkTime() }, 100); // 60

  },


  ////////////////////////////////
  // get the time - hours and minutes
  checkTime: function() {

    const now = this.getTestNow(); // getNow();
    // console.log("now:", now);
    this.updateClockInterface(now);



    // go through time here - backwards
    for(let i = this.schedule.length-1; i >= 0; i--) {
      // console.log("sched[i]", this.schedule[i]);
      // compare times
      const scTime = parseInt(this.schedule[i].time);
      let strNow = now.hours + '' + now.mins;
      // console.log("strNow:", strNow);
      if (parseInt(strNow) >= scTime) {
        this.currImg = this.schedule[i].imgUrl;
        // this.renderImage();
        return;
      }
    }

  },

  
  ////////////////////////////////
  // this function returns current time as object { hours, mins }
  getNow: function() {

    // REAL TIME BELOW
    const date = new Date();
    const hours = date.getHours();
    const mins = date.getMinutes();
    return { hours: hours, mins: mins }
  },


  //////////////////////////////////
  // FAKE test time moving fast forward
  getTestNow: function() {
    // console.log("testTime:", this.testTime);
    if (this.testTime.mins >= 59) {
      this.testTime.mins = 0;
      this.testTime.hours++;
    } else {
      this.testTime.mins++;
    }
    return this.testTime;
  },


  ////////////////////////////////
  // put the backgournd img on screen
  renderImage: function(imgPath) {
    let myImg = 'url(images/' + imgPath + ')';
    document.getElementById('imgWrapper').style.backgroundImage = myImg;
  },


  ////////////////////////////////////////
  // check whether to show program or time specific slide
  toggleShowProgramFlag: function() {
    console.log("toggleShowProgramFlag was run");
    this.showProgramFlag = !this.showProgramFlag;
    if (this.showProgramFlag === true) {
      this.renderImage('slides.jpg'); // show the program
    } else {
      this.renderImage(this.currImg); // show the current program item image
    }

  },


  //////////////////////////////////
  // put the time in interface
  updateClockInterface: function(time) {
    if (time.hours >= 24) {
      return
    }
    // put time in interface
    let showHours = ''; let showMins = ''; 
    (time.hours < 10) ? showHours = '0'+time.hours : showHours = time.hours;
    (time.mins < 10) ? showMins = "0"+time.mins : showMins = time.mins;
    document.getElementById('txtWrapper').innerHTML = showHours + ":" + showMins;
  },


  ////////////////////////////////
  // sets up when to show what
  initSchedule: function() {

    this.schedule = [
      // Program as default
      {
        "time": 900,
        "imgUrl": "slides.jpg",
        "desc": "Processing Community Day @Aarhus 2020"
      },
      // Workshop #1 - Frederik og Rolf
      {
        "time": 1015,
        "imgUrl": "slides2.jpg",
        "desc": "Workshop #1: Live Coding with Sonic Pi, Frederik la Cour & Rolf Holm"
      },
      // BREAK
      {
        "time": 1130,
        "imgUrl": "slides3.jpg",
        "desc": "BREAK"
      },
      // Introduction
      {
        "time": 1145,
        "imgUrl": "slides4.jpg",
        "desc": "Introduction by PCD organizers"
      },
      // Open and Close - Gabriel
      {
        "time": 1155,
        "imgUrl": "slides5.jpg",
        "desc": "Open and Close — Creating Other Archives, Gabriel Pereira"
      },
      // Juicy Blockchain - Anna
      {
        "time": 1215,
        "imgUrl": "slides6.jpg",
        "desc": "A Juicy Blockchain Story about Governance, Anna Brynskov"
      },
      // LUNCH
      {
        "time": 1230,
        "imgUrl": "slides7.jpg",
        "desc": "LUNCH"
      },
      // Sonic Surveys - Alex
      {
        "time": 1300,
        "imgUrl": "slides8.jpg",
        "desc": "Sonic Surveys and Disruptions of Denmark, Alex Mørch"
      },
      // Utopia + - Mogens
      {
        "time": 1320,
        "imgUrl": "slides9.jpg",
        "desc": "Utopia +  Mogens Jacobsen"
      },
      // Fermenting Data -Magda
      {
        "time": 1340,
        "imgUrl": "slides10.jpg",
        "desc": "Fermenting Data: Sampling and Other Experiments with Microbes, Plants, People and Culture Machines, Magda Tyżlik-Carver"
      },
      // BREAK
      {
        "time": 1405,
        "imgUrl": "slides11.jpg",
        "desc": "BREAK"
      },
      // Workshop #2 - Lasse og Niels
      {
        "time": 1450,
        "imgUrl": "slides12.jpg",
        "desc": "Workshop #2: Machine Learning with P5.js, Lasse Korsgaard & Niels Konrad"
      },
      // Social time!
      {
        "time": 1530,
        "imgUrl": "slides.jpg",
        "desc": "PCD 2020 is over"
      }, 
    ];

    return;
  }

}
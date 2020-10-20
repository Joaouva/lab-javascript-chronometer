class Chronometer {
  constructor() {
      this.currentTime = 0;
      this.intervalId = 0;

  }
  startClick(callback) {
    this.intervalId = setInterval(() => {
      this.currentTime++;
    if (callback) {
      callback()
    }}, 1000);
  }	

  getMinutes() {
    let min = Math.floor(this.currentTime/60)
    return min
  }
  getSeconds() {
    let sec = Math.floor(this.currentTime%60) 
    return sec;
  }
  twoDigitsNumber(number) {
    if(number<10){
      return `0${number}`;
    }
    else{      
      return `${number}`;
    }
  }
  stopClick() {
    clearInterval(this.intervalId);
  }
  resetClick() {
    this.currentTime = 0;
  }
  splitClick() {
   let min = this.getMinutes();
   let sec = this.getSeconds();

   if (min < 10) {
     return `${0}${min}:${0}${sec}`;
   } else {
     return `$${min}:${0}${sec}`
   }
  }
}

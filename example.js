//This function with find today's date
function calendar(){
  var day = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'];
  var month=['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December'];
  var d = new Date();
  setText('calendar-day', day[d.getDate()]);
  setText('calendar-date', d.getDate());
  setText('calendar-month-year', month[d.getMonth()]+ ' ' + (1900 + d.getYear()));
};

//this function will set the next value of <p> tags
function setText(id, val){
  if(val < 10){
    val = '0' + val; //add leading 0 if val < 10
  }
  document.getElementById('id').innerHTML = val;
};

//call calendar() when the page load
window.onload = calendar;

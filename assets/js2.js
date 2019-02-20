





  var d = new Date();
  var curr_date = d.getDate();
  var curr_month = d.getMonth() + 1; //Months are zero based
  var curr_year = d.getFullYear();
  var curr_hours = d.getHours();
  var curr_min = d.getMinutes();


  function time() {
  document.getElementById("time").innerHTML =
  ("Today is the" + " " + curr_date + "-" + curr_month + "-" + curr_year + " " + curr_hours + "h" + curr_min);
}

time()


if (new Date().getHours() < 18 && new Date().getHours() > 7 && new Date() !== 0, 6) {
  document.getElementById("openclose").innerHTML = "So the restaurant is" + " " + "OPEN";
}
else {
document.getElementById("openclose").innerHTML = "So the restaurant is" + " " + "CLOSED";
}

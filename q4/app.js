function q1pass() {
  if (document.getElementById('search').value === "vimal" || document.getElementById('search').value === "Vimal" || document.getElementById('search').value === "VIMAL") {
    location.href='./q4.html';
  } else {
    document.getElementById("no").innerHTML = "Think Fuckin Hard and Sarcastically Dear";
  }
}
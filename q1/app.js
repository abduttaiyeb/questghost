function q1pass() {
  if (document.getElementById('search').value === "ghost" || document.getElementById('search').value === "Ghost" || document.getElementById('search').value === "GHOST") {
    location.href='./q1.html';
  } else {
    document.getElementById("no").innerHTML = "Think hard duhh, use iodex";
  }
}
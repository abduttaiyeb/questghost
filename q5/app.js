function q1pass() {
  if (document.getElementById('search').value === "cute" || document.getElementById('search').value === "Cute" || document.getElementById('search').value === "CUTE") {
    location.href='./q5.html';
  } else {
    document.getElementById("no").innerHTML = "Not Shy Either bitch, use iodex";
  }
}
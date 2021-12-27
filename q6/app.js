function q1pass() {
  if (document.getElementById('search').value === "kidney" || document.getElementById('search').value === "Kidney" || document.getElementById('search').value === "KIDNEY") {
    location.href='./q6.html';
  } else {
    document.getElementById("no").innerHTML = "ITS EASY BUT BLOODY, THINK HAAAAAAARD Duhh";
  }
}
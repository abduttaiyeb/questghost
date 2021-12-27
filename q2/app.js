function q1pass() {
  if (document.getElementById('search').value === "inhance" || document.getElementById('search').value === "Inhance" || document.getElementById('search').value === "INHANCE") {
    location.href='./q2.html';
  } else {
    document.getElementById("no").innerHTML = "Did you try the actual spelling?, Anyway, Think hard duhh, use iodex";
  }
}
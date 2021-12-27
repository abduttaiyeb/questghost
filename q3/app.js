function q1pass() {
  if (document.getElementById('search').value === "handkerchief" || document.getElementById('search').value === "Handkerchief" || document.getElementById('search').value === "HANDKERCHIEF") {
    location.href='./q3.html';
  } else {
    document.getElementById("no").innerHTML = "You never fogot it though , think hard dumbo";
  }
}
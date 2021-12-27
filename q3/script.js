var pickupLines = [
	{
		line: "I wanna declare you as a constant in my Life's code",
		id: "14"
	},
	{
		line:
			"I cant commit my code, but would commit you for sure",
		id: "205"
	},
	{
		line: "You are the CSS to my HTML",
		id: "3"
	},
{
		line: "No matter how I sort tables, You will always be FIRST",
		id: "37"
	},
{
		line: "You are a Field in my class, you will always be protected",
		id: "23"
	},
{
		line: "Are you a wifi? cuz i am feeling the connection",
		id: "97"
	},
{
		line: "I am a buffered reader, you input meaning into my life",
		id: "69"
	},
{
		line: "Seeing your notification throws a 404 for all my stress",
		id: "82"
	},
	{
		line: "Even Google Map refuses to help when I get lost in your eyes",
		id: "42"
	}
];

var pickup = {
	currentLineIndex: 0,
	init: function() {
		pickup.displayLine(pickup.currentLineIndex);
		document.addEventListener("keydown", pickup.nextLine);

		pickup.refreshBtn = document.getElementById("refresh-btn");
		pickup.refreshBtn.addEventListener("click", pickup.nextLine);
	},

	displayLine: function(index) {
		let line = document.getElementById("pickup-line");
		line.textContent = pickupLines[index].line;

		let author = document.getElementById("pickup-id");
		author.textContent = pickupLines[index].id;
	},

	nextLine: function(e) {
		console.log(e.currentTarget);
		if ( (e.keyCode == 32 && window.innerWidth > 992) || e.currentTarget == pickup.refreshBtn) {
			if (pickup.currentLineIndex === pickupLines.length - 1) {
				pickup.currentLineIndex = 0;
			} else {
				pickup.currentLineIndex++;
			}

			pickup.displayLine(pickup.currentLineIndex);
		}
	}
};
document.addEventListener("DOMContentLoaded", pickup.init);

var nav = {
	init: function() {
		nav.menuBtn = document.getElementById("menu-btn");
		nav.menuBtn.addEventListener("click", nav.toggleMenu);

		nav.menu = document.querySelector(".navigation");
		window.addEventListener("resize", nav.onResize);
	},

	onResize: function() {
		if (window.innerWidth > 992 && window.getComputedStyle(nav.menu).display === "none") {
			nav.menuBtn.innerHTML = '<i class="fa fa-times"></i>';
			nav.menu.style.display = "block";
		} else if (window.innerWidth < 991 && window.getComputedStyle(nav.menu).display === "block") {
			nav.menuBtn.innerHTML = '<i class="fa fa-bars"></i>';
			nav.menu.style.display = "none";
		}
	},

	toggleMenu: function() {
		nav.changeBtn();
		if (window.getComputedStyle(nav.menu).display === "block") {
			nav.menu.style.display = "none";
			return;
		}
		nav.menu.style.display = "block";
	},

	changeBtn: function() {
		if (nav.menuBtn.innerHTML == '<i class="fa fa-bars"></i>') {
			nav.menuBtn.innerHTML = '<i class="fa fa-times"></i>';
			return;
		}
		nav.menuBtn.innerHTML = '<i class="fa fa-bars"></i>';
	}
};
document.addEventListener("DOMContentLoaded", nav.init);
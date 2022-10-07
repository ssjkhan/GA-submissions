// Part 1
// ===

// Data
const menuLinks = [
	{ text: "about", href: "/about" },
	{
		text: "catalog",
		href: "#",
		subLinks: [
			{ text: "all", href: "/catalog/all" },
			{ text: "top selling", href: "/catalog/top" },
			{ text: "search", href: "/catalog/search" },
		],
	},
	{
		text: "orders",
		href: "#",
		subLinks: [
			{ text: "new", href: "/orders/new" },
			{ text: "pending", href: "/orders/pending" },
			{ text: "history", href: "/orders/history" },
		],
	},
	{
		text: "account",
		href: "#",
		subLinks: [
			{ text: "profile", href: "/account/profile" },
			{ text: "sign out", href: "/account/signout" },
		],
	},
];

// Task 1

const mainEl = document.querySelector("main");

mainEl.style.backgroundColor = "var(--main-bg)";
mainEl.innerHTML = "<h1>SEI Rocks!</h1>";
mainEl.setAttribute("class", "flex-ctr");

// Task 2

topMenuEl = document.querySelector("#top-menu");

topMenuEl.style.height = "100%";
topMenuEl.style.backgroundColor = "var(--top-menu-bg)";
topMenuEl.setAttribute("class", "flex-around");

// Task 3
menuLinks.forEach((link) => {
	let anchor = document.createElement("a");
	anchor.setAttribute("href", link.href);
	anchor.textContent = link.text;
	topMenuEl.appendChild(anchor);
});

// Part 2
// ===

// Task 4

const subMenuEl = document.querySelector("#sub-menu");

subMenuEl.style.height = "100%";
subMenuEl.style.backgroundColor = "var(--sub-menu-bg)";
subMenuEl.setAttribute("class", "flex-around");
subMenuEl.style.position = "absolute";
subMenuEl.style.top = "0";

// Task 5

const topMenuLinks = document.querySelectorAll("#top-menu > a");
let showingSubMenu = false;

topMenuEl.addEventListener("click", (event) => {
	event.preventDefault();

	if (event.target.tagName != "A") {
		return;
	}

	showingSubMenu = false;

	if (event.target.classList.contains("active")) {
		event.target.classList.remove("active");
		subMenuEl.style.top = "0";
		return;
	}

	topMenuLinks.forEach((link) => {
		link.classList.remove("active");
	});

	event.target.classList.add("active");

	let targetLink = menuLinks.find(
		(link) => link.text === event.target.textContent
	);

	if (targetLink.hasOwnProperty("subLinks")) {
		showingSubMenu = true;
	}

	if (showingSubMenu) {
		buildSubMenu(targetLink.subLinks);
		subMenuEl.style.top = "100%";
	} else {
		subMenuEl.style.top = "0";
	}

	if (event.target.innerText === "ABOUT") {
		showingSubMenu = false;
		mainEl.innerHTML = "<h1>" + event.target.innerText + "</h1>";
	}
});

function buildSubMenu(subLinks) {
	//clear submenu
	subMenuEl.innerHTML = "";

	subLinks.forEach((link) => {
		let anchor = document.createElement("a");

		anchor.setAttribute("href", link.href);
		anchor.innerText = link.text;

		subMenuEl.appendChild(anchor);
	});
}

// Task 6

subMenuEl.addEventListener("click", (event) => {
	event.preventDefault();

	if (event.target.tagName != "A") {
		return;
	}

	showingSubMenu = false;
	subMenuEl.style.top = "0";

	topMenuLinks.forEach((link) => {
		link.classList.remove("active");
	});

	mainEl.innerHTML = "<h1>" + event.target.innerText + "</h1>";
});

export const changeTheme = () => {
	const modo = document.getElementById("modo") as HTMLDivElement;
	const html = document.getElementsByTagName(
		"html",
	) as HTMLCollectionOf<HTMLHtmlElement>;
	const navbar = document.getElementById("navbar") as HTMLElement;

	modo.onclick = () => {
		modo.classList.toggle("open");
		if (modo.classList.contains("open") === true) {
			window.localStorage.setItem("modo", "light");
			navbar.classList.remove("navbar-dark");
			navbar.classList.add("navbar-light");
			modo.innerText = "Dark mode";
			html[0].style.cssText =
				"--main-color: #ececec;--main-bg-color:#fff;--color-ddd: #111; --color-white: #000";
		} else {
			window.localStorage.setItem("modo", "dark");
			navbar.classList.add("navbar-dark");
			navbar.classList.remove("navbar-light");
			modo.innerText = "Light Mode";
			html[0].style.cssText =
				"--main-color: #1d2239;--main-bg-color: #292e48;--color-ddd: #ddd;--color-white: #fff;";
		}
	};

	if (window.localStorage.getItem("modo") === "light") {
		navbar.classList.remove("navbar-dark");
		navbar.classList.add("navbar-light");
		modo.innerText = "Dark mode";
		html[0].style.cssText =
			"--main-color: #ececec;--main-bg-color:#fff;--color-ddd: #111; --color-white: #000";
	} else {
		navbar.classList.add("navbar-dark");
		navbar.classList.remove("navbar-light");
		window.localStorage.setItem("modo", "dark");
		modo.innerText = "Light Mode";
		html[0].style.cssText =
			"--main-color: #1d2239;--main-bg-color: #292e48;--color-ddd: #ddd;--color-white: #fff;";
	}
};

changeTheme();

// creating function for mobile navigation to work

function toggleMobileNavigation() {
	var element = document.getElementById("mobile-nav"); //selecting id and assigning it to element

	if (element.classList.contains("mobile-nav-open")) {  //if #mobile-nav contains movile-nav=open then

		element.classList.remove("mobile-nav-open");  // then remove or if not then add;
	} else {
		element.classList.add("mobile-nav-open"); // used to open and close the nav button
	}
}
window.onload = function() {
	let recipe = document.getElementsByClassName("wprm-recipe-container")[0];
	if(recipe != null) {
		document.open();
		console.log(recipe);
		document.append(recipe)
	}
}
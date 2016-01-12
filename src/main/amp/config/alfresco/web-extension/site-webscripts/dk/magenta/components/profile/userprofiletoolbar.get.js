// logger.log("### Inside userprofiletoolbar.get.js ###");

//Remove change-password from links
var link;
var idx;
for (var i in model.links) {
	link = model.links[i];
	if (link.id == "change-password-link") {
		idx = i;
	}
}
model.links.splice(idx, 1);
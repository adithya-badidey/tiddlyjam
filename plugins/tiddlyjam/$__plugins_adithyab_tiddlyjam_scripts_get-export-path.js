(function(){
"use strict";

exports.name = "tv-get-export-path";

exports.params = [
    {name: "title"}
];

/*
Run the macro
*/
exports.run = function(title) {
	var sanitized_title = title.replace(/^([^a-z0-9]+)/gi,'').replace(/([^a-z0-9]+)$/gi,'').replace(/([^a-z0-9]+)/gi, '-');
	return (sanitized_title).toLocaleLowerCase();
}
})();
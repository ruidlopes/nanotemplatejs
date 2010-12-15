String.prototype.template = String.prototype.t = function() {
	var args = typeof arguments[0] === "object" ? arguments[0] : arguments;
	return this.replace(/(\$\w+)/g, function(match) { return args[match.substr(1)]; });
};
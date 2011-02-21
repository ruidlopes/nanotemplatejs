(function() {
	var _tregex = /(\$\w+)/g;

	String.prototype.template = String.prototype.t = String.prototype.template || function() {
		if (arguments[0] instanceof Array)
			return arguments[0].map(this.t, this).join("");
		else {
			var args = typeof arguments[0] === "object" ? arguments[0] : arguments;
			return this.replace(_tregex, function(match) { return args[match.substr(1)]; });
		}
	};

	if (typeof Element === "function" || typeof Element === "object")
		Element.prototype.template = Element.prototype.t = Element.prototype.template || function() {
			this._tcache = this._tcache || this.innerHTML;
			this.innerHTML = this._tcache.t.apply(this._tcache, arguments);
		};
})();
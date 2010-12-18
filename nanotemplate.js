String.prototype._tregex = /(\$\w+)/g;

String.prototype.template = String.prototype.t = function() {
	if (arguments[0] instanceof Array && arguments[0][0])
		return this.template(arguments[0][0]) + (arguments[0].length > 1 ? this.template(arguments[0].slice(1)) : "");
	else {
		var args = typeof arguments[0] === "object" ? arguments[0] : arguments;
		return this.replace(this._tregex, function(match) { return args[match.substr(1)]; });
	}
};

if (typeof Element === "function")
	Element.prototype.template = Element.prototype.t = function() {
		this._tcache = this._tcache || this.innerHTML;
		this.innerHTML = this._tcache.t.apply(this._tcache, arguments);
	};
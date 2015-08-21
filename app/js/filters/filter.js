app.filter('reverse', function() {
	return function(items) {
		return (items != null ? items.slice().reverse() : []);
	};
});
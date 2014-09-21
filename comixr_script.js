

function createCookie(name) {
	var date = new Date();
	date.setTime("Thu, Mon 25 Dec 2017");
	var expires = "; expires="+date.toGMTString();
	document.cookie = name + "=1" + expires + "; path=/";
	location.reload();
};

function readCookie(name) {
	var nameEQ = name + "=";
	var ca = document.cookie.split(';');
	for(var i=0;i < ca.length;i++) {
		var c = ca[i];
		while (c.charAt(0)==' ') c = c.substring(1,c.length);
		if (c.indexOf(nameEQ) == 0) return c.substring(nameEQ.length,c.length);
	}
	return null;
};

function eraseCookie(name) {
	createCookie(name,"",-1);
	location.reload();
};

function hasNext(array, i) {
	if (array[i+3] != null)
		return true;
	else return false;
}
function createCookie(name,value) {
	var date = new Date();
	date.setTime("Thu, Mon 25 Dec 2017");
	var expires = "; expires="+date.toGMTString();
	document.cookie = name + "=" + value + expires + "; path=/";
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
	};

    // Data and done callbacks
    var dataCallback = function(data) {
      console.log("Data received", data);
      for (var i = 0; i < data.length; i++) {
	    var d = data[i];
		for (var k in d.data) {
		  document.write("<i>" + k + "</i>: " + d.data[k] + "<br />");
		}
		document.write("<hr>");
	  }
    }
    var doneCallback = function(data) {
      console.log("Done, all data:", data);
      document.write("<b>Done</b><hr>");
    }

// 3. Do the query (when the function is called)
    var doQuery = function() {
      // Query for tile Comixr
      importio.query({
        "connectorGuids": [
          "eaac5815-2a4d-477f-aa40-77be5e3a541b"
        ],
        "input": {
          "webpage/url": "http://xkcd.com/"
        }
      }, { "data": dataCallback, "done": doneCallback });

      // Query for tile Comixr
      importio.query({
        "connectorGuids": [
          "eaac5815-2a4d-477f-aa40-77be5e3a541b"
        ],
        "input": {
          "webpage/url": "http://buttersafe.com/"
        }
      }, { "data": dataCallback, "done": doneCallback });

      // Query for tile Comixr
      importio.query({
        "connectorGuids": [
          "eaac5815-2a4d-477f-aa40-77be5e3a541b"
        ],
        "input": {
          "webpage/url": "http://thedoghousediaries.com/"
        }
      }, { "data": dataCallback, "done": doneCallback });

      // Query for tile Comixr
      importio.query({
        "connectorGuids": [
          "eaac5815-2a4d-477f-aa40-77be5e3a541b"
        ],
        "input": {
          "webpage/url": "http://explosm.net/comics/3688/"
        }
      }, { "data": dataCallback, "done": doneCallback });

      // Query for tile Comixr
      importio.query({
        "connectorGuids": [
          "eaac5815-2a4d-477f-aa40-77be5e3a541b"
        ],
        "input": {
          "webpage/url": "http://questionablecontent.net/"
        }
      }, { "data": dataCallback, "done": doneCallback });

      // Query for tile Comixr
      importio.query({
        "connectorGuids": [
          "eaac5815-2a4d-477f-aa40-77be5e3a541b"
        ],
        "input": {
          "webpage/url": "http://www.sandraandwoo.com/"
        }
      }, { "data": dataCallback, "done": doneCallback });

      // Query for tile Comixr
      importio.query({
        "connectorGuids": [
          "eaac5815-2a4d-477f-aa40-77be5e3a541b"
        ],
        "input": {
          "webpage/url": "http://limbero.org/jl8/183"
        }
      }, { "data": dataCallback, "done": doneCallback });

      // Query for tile Comixr
      importio.query({
        "connectorGuids": [
          "eaac5815-2a4d-477f-aa40-77be5e3a541b"
        ],
        "input": {
          "webpage/url": "http://brawlinthefamily.keenspot.com/"
        }
      }, { "data": dataCallback, "done": doneCallback });
    }
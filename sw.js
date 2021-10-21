self.addEventListener("install", function (event) {
	// Fires when the browser installs the app
	// Here we're just logging the even and the contents of the object passed to the event
	// The purpose of this event is to give the service worker a place to setup the local
	// environment after the installation completes
	console.log("SW: Event fired: ${event.type}");
});

self.addEventListener("activate", function (event) {
	// Fires after the service worker completes its installation
	// It's a place for the service worker to clean up from
	// previous service worker versions
	console.log("SW: Event fired: ${event.type}");
});

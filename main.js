if ("serviceWorker" in navigator) {
  // Register the service worker
  navigator.serviceWorker
    .register("/serviceWorker.js")
    .then((registration) => {
      console.log("Service worker registered:", registration);
    })
    .catch((error) => {
      console.log("Service worker registration failed:", error);
    });
}

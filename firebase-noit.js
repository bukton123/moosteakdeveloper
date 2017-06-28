// // TODO: fill in firebase config information
var config = {
  messagingSenderId: ""
};

firebase.initializeApp(config);
var messaging = firebase.messaging();

// On load register service worker
if ('serviceWorker' in navigator) {
  window.addEventListener('load', () => {
    navigator.serviceWorker.register('/firebase-mess.js').then((registration) => {
      console.log('ServiceWorker registration successful with scope: ', registration.scope);
      messaging.useServiceWorker(registration);
    })
    .then(() => {
      return messaging.requestPermission();
    })
    .then(() => {
      return messaging.getToken();
    })
    .then((token) => {
      localStorage.setItem('noti',token)
    })
    .catch((err) => {
      console.log('ServiceWorker registration failed: ', err);
    });
  });
}

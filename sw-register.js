    var config = {
        messagingSenderId: "85465025350"
    };
    firebase.initializeApp(config);
    var messaging = firebase.messaging();

if('serviceWorker' in navigator) {

    window.addEventListener('load', () => {
        navigator.serviceWorker.register('/service-worker.js').then((registration) => {
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
            console.log('ServiceWorker registration notification failed: ', err);
        });

        navigator.serviceWorker.ready.then(function(registration) {
            console.log('Service Worker Ready');
        });
    })
}
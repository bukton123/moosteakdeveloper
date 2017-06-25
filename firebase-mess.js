importScripts('https://www.gstatic.com/firebasejs/4.1.2/firebase-app.js');
importScripts('https://www.gstatic.com/firebasejs/4.1.2/firebase-messaging.js');

// TODO: fill in messaging sender id
firebase.initializeApp({
  'messagingSenderId': '85465025350'
});

const messaging = firebase.messaging();

// Installs service worker
self.addEventListener('install', (e) => {
  console.log('Service worker installed');
  // var timeStamp = Date.now();
  // e.waitUntil(
  //   caches.open('moosteakdeveloper').then(cache => {
  //     return cache.addAll([
  //       `/`,
  //       `/index.html?timestamp=${timeStamp}`,
  //       `/manifest.json?timestamp=${timeStamp}`,
  //       `/static/js/main.js?timestamp=${timeStamp}`,
  //       `/static/js/manifest.js?timestamp=${timeStamp}`,
  //       `/static/asset/images/384.png?timestamp=${timeStamp}`,
  //       `/static/asset/images/bg.jpg?timestamp=${timeStamp}`,
  //       `/static/asset/images/HiewKao-logo-w-128.png?timestamp=${timeStamp}`,
  //       `/static/icon/32.png?timestamp=${timeStamp}`,
  //       `/static/icon/32.png?timestamp=${timeStamp}`,
  //       `/static/icon/64.png?timestamp=${timeStamp}`,
  //       `/static/icon/128.png?timestamp=${timeStamp}`,
  //       `/static/icon/192.png?timestamp=${timeStamp}`,
  //       `/static/icon/384.png?timestamp=${timeStamp}`,
  //       `/static/icon/512.png?timestamp=${timeStamp}`,
  //       `/static/asset/plugin/font-awesome/css/font-awesome.min.css?timestamp=${timeStamp}`,
  //       `/static/asset/plugin/alert/sweetalert.css?timestamp=${timeStamp}`,
  //       'https://maxcdn.bootstrapcdn.com/bootstrap/3.3.7/css/bootstrap.min.css',
  //       'https://maxcdn.bootstrapcdn.com/bootstrap/3.3.7/css/bootstrap-theme.min.css',
  //       'https://fonts.googleapis.com/css?family=Kanit:300,400,500,600,700',
  //       'https://ajax.googleapis.com/ajax/libs/jquery/3.2.1/jquery.min.js',
  //       'https://maxcdn.bootstrapcdn.com/bootstrap/3.3.7/js/bootstrap.min.js'
  //     ])
  //     .then(() => self.skipWaiting());
  //   })
  // )
});

self.addEventListener('notificationclick', (event) => {
  // Event actions derived from event.notification.data from data received
  var eventURL = event.notification.data;
  event.notification.close();
  if (event.action === 'confirmAttendance') {
    clients.openWindow(eventURL.confirm);
  } else {
    clients.openWindow(eventURL.decline);
  }
}, false);

messaging.setBackgroundMessageHandler((payload) => {
  // Parses data received and sets accordingly
  const data = JSON.parse(payload.data.notification);
  const notificationTitle = data.title;
  const notificationOptions = {
    body: data.body,
    icon: '/static/icon/128.png',
    // actions: [
    //   {action: 'confirmAttendance', title: '👍 Confirm attendance'},
    //   {action: 'cancel', title: '👎 Not coming'}
    // ],
    // data: {confirm: data.confirm, decline: data.decline}
  };

  return self.registration.showNotification(notificationTitle, notificationOptions);
});

self.addEventListener('fetch', event => {
  event.respondWith(
    caches.match(event.request, {ignoreSearch:true}).then(response => {
      return response || fetch(event.request);
    })
  );
});

importScripts('/static/js/workbox-sw.prod.v1.0.1.js')
importScripts('https://www.gstatic.com/firebasejs/4.1.2/firebase-app.js')
importScripts('https://www.gstatic.com/firebasejs/4.1.2/firebase-messaging.js')

const workboxSW  = new WorkboxSW()
const networkFirst = workboxSW.strategies.networkFirst()

workboxSW.router.registerRoute('/*', networkFirst)
workboxSW.precache([
  {
    url: '/index.html',
    revision: 'khj244kgfsdadsah1211dsks',
  },
  {
    url: '/manifest.json',
    revision: 'fdg133rt1ertsdf35rer',
  },
  // {
  //   url: '/static/js/main.f36ca39047bebbb4d9f0.js',
  //   revision: '2ttfh2k4uyxzjerersdweef',
  // },
  // {
  //   url: '/static/js/manifest.f36ca39047bebbb4d9f0.js',
  //   revision: '2ttfh2k455fsvhj5ddaff',
  // }, 
])


workboxSW.generateSW({
    cacheId: 'mu',
    swDest: './sw/sw.js',
    handleFetch: true,
    directoryIndex: 'index.php',
    globDirectory: '../../',
    globPatterns: [
      path.join(tmplDir, 'images/icons.svg'),
      path.join('offline.html')
    ],
    runtimeCaching: [{
      urlPattern: prod ?
        /https:\/\/manutd.one\/(\S{1,400}.html|match_overview\/|news\/)/:
        /http:\/\/localhost\/(\S{1,400}.html|match_overview\/|news\/)/,
      handler: 'cacheFirst',
      options: {
        cacheName: 'pages',
        cacheExpiration: {
          maxEntries: 100,
          maxAgeSeconds: 72 * 60 * 60
        },
        cacheableResponse: {statuses: [200]}
      }
    }],
    navigateFallback: '/offline.html',
    verbose: true
  })


var config = {
  messagingSenderId: ""
};

firebase.initializeApp(config);
const messaging = firebase.messaging()

self.addEventListener('install', (e) => {
    console.log('Service worker installed');
  });

messaging.setBackgroundMessageHandler((payload) => {
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


self.addEventListener('push', function(event) {
  console.log('Received a push message', event);

  self.registration.getNotifications().then(function(notifications) {
    console.log(notifications)
  })

  var title = 'Yay a message. sss';
  var body = 'We have received a push message.';
  var icon = '/static/icon/128.png';
  var tag = 'simple-push-demo-notification-tag';
  var data = {
    doge: {
        wow: 'such amaze notification data'
    }
  };

  event.waitUntil(
    self.registration.showNotification(title, {
      body: body,
      icon: icon,
      tag: tag,
      data: data
    })
  );
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

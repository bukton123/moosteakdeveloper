importScripts('/static/js/workbox-sw.prod.v1.0.1.js')
importScripts('https://www.gstatic.com/firebasejs/4.1.2/firebase-app.js')
importScripts('https://www.gstatic.com/firebasejs/4.1.2/firebase-messaging.js')

const workboxSW  = new WorkboxSW()
const networkFirst = workboxSW.strategies.networkFirst()
var config = {
  messagingSenderId: "85465025350"
};

firebase.initializeApp(config);
const messaging = firebase.messaging()

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
  {
    url: '/static/asset/plugin/font-awesome/css/font-awesome.min.css',
    revision: 'iyu25ywe6ddsdf22ed',
  }, 
  {
    url: '/static/asset/images/384.png',
    revision: 'iyu25ywe6ddf66jowwxc5dsdf22ed',
  }, 
  {
    url: '/static/asset/images/HiewKao-logo-w-128.png',
    revision: 'iyu25ywe6ddsdf22ed5er5wwf8wer5dfhjw',
  }, 
  {
    url: '/static/asset/images/bg.jpg',
    revision: 'iyu25ywe6ddsdf22ed5er5wwf8wer5dfhjw',
  }
])

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

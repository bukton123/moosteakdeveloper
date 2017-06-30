importScripts('https://www.gstatic.com/firebasejs/4.1.2/firebase-app.js')
importScripts('https://www.gstatic.com/firebasejs/4.1.2/firebase-messaging.js')

var config = {
  messagingSenderId: "85465025350"
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
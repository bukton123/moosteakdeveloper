importScripts('/static/js/workbox-sw.prod.v1.0.1.js')
importScripts('/manifest.json')
const workboxSW  = new WorkboxSW()
const networkFirst = workboxSW.strategies.networkFirst()

workboxSW.router.registerRoute('/*', networkFirst)
workboxSW.precache([
  {
    url: '/index.html',
    revision: 'sdfsdfsdfsdf',
  }, {
    url: '/manifest.json',
    revision: 'acdsdsdfsdfsdfsd23',
  }
]);

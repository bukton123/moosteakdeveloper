importScripts('/static/js/workbox-sw.prod.v1.0.1.js')
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
  }, {
    url: '/static/asset/plugin/font-awesome/css/font-awesome.min.css',
    revision: 'acdsdsdfsdfsdfsd23',
  }
]);

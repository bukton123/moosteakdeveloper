importScripts('/static/js/workbox-sw.prod.v1.0.1.js')
const workboxSW  = new WorkboxSW()
const networkFirst = workboxSW.strategies.networkFirst()

workboxSW.router.registerRoute('/*', networkFirst)
workboxSW.precache([
  {
    url: '/index.html',
    revision: 'khj244',
  },
  {
    url: '/manifest.json',
    revision: '2ttfh2k4',
  },
  {
    url: '/static/js/main.js',
    revision: '2ttfh2k4uyxzjsdw',
  },
  {
    url: '/static/js/manifest.js',
    revision: '2ttfh2k455fsvhj5dda',
  }, 
  {
    url: '/static/asset/plugin/font-awesome/css/font-awesome.min.css',
    revision: 'iyu222d',
  }
])

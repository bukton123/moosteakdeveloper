importScripts('/static/js/workbox-sw.prod.v1.0.1.js')
const workboxSW  = new WorkboxSW()

workboxSW .router.registerRoute('/*', workboxSW.strategies.networkFirst())
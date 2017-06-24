importScripts('/static/js/workbox-sw.prod.v1.0.1.js')
const workboxSW  = new WorkboxSW()
const networkFirst = workboxSW.strategies.networkFirst()

workboxSW.router.registerRoute('/*', networkFirst)
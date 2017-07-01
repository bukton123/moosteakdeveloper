const unsubscribe = () => {
  navigator.serviceWorker.ready.then(r => {
    r.pushManager.getSubscription()
      .then(pushSubscription => {
        pushSubscription.unsubscribe().then(unsubscribe => {
          console.log('unsubscribe notification')
        })
        .catch(e => {
          console.log('Unsubscription error: ', e);  
        })
      })
      .catch(e => {
        console.error('Error thrown while unsubscribing from push messaging.', e); 
      })
  })
} 
const subscribe = () => {
  navigator.serviceWorker.ready.then(r => {
    r.pushManager.subscribe(({userVisibleOnly: true}))
      .then(sub => {
        console.log('subscribe notification')
      })
      .catch(e => {
        if (Notification.permission === 'denied')
          console.warn('Permission for Notifications was denied'); 
        else
          console.error('Unable to subscribe to push.', e); 
      })
  })
}


export default {
  subscribe,
  unsubscribe
}
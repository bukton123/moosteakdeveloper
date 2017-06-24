import defaultStore from '../stores/defaultStore'

const requireAuth = (nextState, replace) => {
  if (!defaultStore.isAuth) {
    replace({
      pathname: '/signin'
    })
  }
}

const isrequireAuth = (nextState, replace) => {
  if (defaultStore.isAuth) {
    replace({
      pathname: '/'
    })
  }
}

export {
  requireAuth,
  isrequireAuth
}
import account from '../actions/accountAction'

const requireAuth = (nextState, replace) => {
  if (!account.isAuth()) {
    replace({
      pathname: '/signin'
    })
  }
}

const isrequireAuth = (nextState, replace) => {
  if (account.isAuth()) {
    replace({
      pathname: '/'
    })
  }
}

export {
  requireAuth,
  isrequireAuth
}
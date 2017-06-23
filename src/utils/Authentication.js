import account from '../actions/accountAction'

const requireAuth = (nextState, replace) => {
  if (!account.isAuth()) {
    replace({
      pathname: '/login'
    })
  }
}

export {
  requireAuth
}
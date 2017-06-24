import { observable, computed } from 'mobx'

class DefaultStore {
  @observable auth = false

  setAuth (auth) {
    this.auth = !!auth
  }

  @computed get isAuth () {
    return this.auth
  }
}

const defaultStore = new DefaultStore()

export default defaultStore
export { DefaultStore }
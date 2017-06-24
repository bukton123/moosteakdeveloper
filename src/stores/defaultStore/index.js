import { observable, computed } from 'mobx'

class DefaultStore {
  @observable auth = false
  @observable profile = {}

  setAuth (auth) {
    this.auth = !!auth
  }

  setProfile (profile) {
    this.profile = profile
  }

  @computed get isAuth () {
    return this.auth
  }

  @computed get getProfile () {
    return this.profile
  }
}

const defaultStore = new DefaultStore()

export default defaultStore
export { DefaultStore }
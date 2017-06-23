import { observable } from 'mobx'

class DefaultStore {
  @observable timer = 0

  constructor () {
    setInterval(() => {
      this.timer += 1
    }, 1000)
  }

  resetTimer () {
    this.timer = 0
  }
}

const defaultStore = new DefaultStore()

export default defaultStore
export { DefaultStore }
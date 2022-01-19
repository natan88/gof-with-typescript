import Singleton from './singleton'

const app = () => {
  const singleton1 = Singleton.getInstance()
  const singleton2 = Singleton.getInstance()

  console.log('Singleton 1: ', singleton1.getUuid())
  console.log('Singleton 2: ', singleton2.getUuid())
}

app()

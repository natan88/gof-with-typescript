class Singleton {
  private static instance: Singleton
  private uuid: number
  
  private constructor() {
    this.uuid = new Date().getTime()
  }

  public static getInstance(): Singleton {
    if (!Singleton.instance) {
      Singleton.instance = new Singleton()
    }

    return Singleton.instance
  }

  public getUuid(): number {
    return this.uuid
  }
}

export default Singleton


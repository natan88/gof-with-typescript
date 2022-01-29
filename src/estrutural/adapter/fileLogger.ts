import { Logger } from './logger';

export class FileLogger implements Logger {
  public async info (message: string): Promise<void> {
    console.log(`File: ${message}`)
  }
  public async warn (message: string): Promise<void> {
    console.warn(`File: ${message}`)
  }
  public async error (message: string): Promise<void> {
    console.error(`File: ${message}`)
  }
}

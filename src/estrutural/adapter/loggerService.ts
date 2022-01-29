import { Logger } from './logger';

export class NotificationService {
  constructor (private logger: Logger) {}

  public async info (message: string): Promise<void> {
    await this.logger.info(message)
  }

  public async warn (message: string): Promise<void> {
    await this.logger.warn(message)
  }

  public async error (message: string): Promise<void> {
    await this.logger.error(message)
  }
}

import { CloudLogger } from './cloudLogger';
import { Logger } from './logger';

export class CloudLoggerAdpater implements Logger {

  constructor (private readonly cloudLogger: CloudLogger) {}

  public async info(message: string): Promise<void> {
    this.cloudLogger.sendToServer(message, 'info')
  }

  public async warn(message: string): Promise<void> {
    this.cloudLogger.sendToServer(message, 'worn')
  }

  public async error(message: string): Promise<void> {
    this.cloudLogger.sendToServer(message, 'error')
  }

}

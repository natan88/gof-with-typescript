import { CloudLogger } from './cloudLogger';

export class AwsLogger implements CloudLogger {
  public async sendToServer(message: string, type: string): Promise<void> {
    console.log(`Aws: ${type} - ${message}`)
  }
}

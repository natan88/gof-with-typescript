import { AwsLogger } from './awsLogger'
import { CloudLoggerAdpater } from './cloudLoggerAdapter'
import { FileLogger } from './fileLogger'
import { NotificationService } from './loggerService'

const app = async () => {
  console.log('\n--------- EM ARQUIVO -------------')
  await inicializarLogEmArquivo()

  console.log('\n--------- NA AWS -------------')
  await inicializarLogNaAws()
}

const inicializarLogEmArquivo = async () => {
  const fileLogger: FileLogger = new FileLogger()
  const notificationService: NotificationService = new NotificationService(fileLogger)

  await notificationService.info('logando info em arquivo')
  await notificationService.warn('logando warn em arquivo')
  await notificationService.error('logando error em arquivo')
}

const inicializarLogNaAws = async () => {
  const awsLogger: AwsLogger = new AwsLogger()
  const cloudLoggerAdpater: CloudLoggerAdpater = new CloudLoggerAdpater(awsLogger)
  const notificationService: NotificationService = new NotificationService(cloudLoggerAdpater)

  await notificationService.info('logando info na aws')
  await notificationService.warn('logando warn na aws')
  await notificationService.error('logando error na aws')
}

console.log('============ ADAPTER ==========')
app()

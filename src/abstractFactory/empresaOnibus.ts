import { PassagemOnibusInterestadual, PassagemOnibusUrbano } from './'

export interface EmpresaOnibus {
  emitePassagemOnibusUrbano(params: PassagemParams): PassagemOnibusUrbano
  emitePassagemOnibusInterestadual(params: PassagemParams): PassagemOnibusInterestadual
}

export type PassagemParams = {
  origem: string,
  destino: string,
  dataHoraPartida: Date
}

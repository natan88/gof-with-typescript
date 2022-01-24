import {
  EmpresaOnibus,
  PassagemOnibusInterestadual,
  PassagemOnibusInterestadualConcreta,
  PassagemOnibusUrbano,
  PassagemOnibusUrbanoConcreta,
  PassagemParams
} from '.'

export class EmpresaOnibusConcreta implements EmpresaOnibus {
  emitePassagemOnibusUrbano(params: PassagemParams): PassagemOnibusUrbano {
    return new PassagemOnibusUrbanoConcreta(params)
  }

  emitePassagemOnibusInterestadual(params: PassagemParams): PassagemOnibusInterestadual {
    return new PassagemOnibusInterestadualConcreta(params)
  }
}

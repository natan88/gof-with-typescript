import { PassagemOnibusUrbano, PassagemParams } from '.'

export class PassagemOnibusUrbanoConcreta extends PassagemOnibusUrbano {
  constructor(params: PassagemParams) {
    super(params)
  }

  public exibeDetalhes(): void {
    console.log(`Passagem de ônibus urbano
    Origem: ${this.getOrigem()}
    Destino: ${this.getDestino()}
    Data/Hora: ${this.getDataHoraPartidaFormatada()}`)
  }

}

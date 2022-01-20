import { Passagem } from '.'

/**
 * Este e um produto concreto
 */
export class PassagemOnibusUrbano extends Passagem {
  constructor(origem: string, destino: string, dataHoraPartida: Date) {
    super(origem, destino, dataHoraPartida)
  }

  public exibeDetalhes() {
    console.log(`Passagem de ônibus urbano
    Origem: ${this.getOrigim()}
    Destino: ${this.getDestino()}
    Data/Hora: ${this.getDataHoraPartidaFormatada()}`)
  }
}

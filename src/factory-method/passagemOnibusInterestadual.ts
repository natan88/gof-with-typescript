import Passagem from './passagem';

/**
 * Este e um produto concreto
 */
class PassagemOnibusInterestadual extends Passagem {
  constructor(origem: string, destino: string, dataHoraPartida: Date) {
    super(origem, destino, dataHoraPartida)
  }

  public exibeDetalhes() {
    console.log(`Passagem de ônibus interestadual
    Origem: ${this.getOrigim()}
    Destino: ${this.getDestino()}
    Data/Hora: ${this.getDataHoraPartidaFormatada()}`)
  }
}

export default PassagemOnibusInterestadual

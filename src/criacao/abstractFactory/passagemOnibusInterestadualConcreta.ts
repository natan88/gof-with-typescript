import { PassagemOnibusInterestadual } from './passagemOnibusInterestadual'

export class PassagemOnibusInterestadualConcreta extends PassagemOnibusInterestadual {
  public exibeDetalhes(): void {
    console.log(`Passagem de ônibus interestadual
    Origem: ${this.getOrigem()}
    Destino: ${this.getDestino()}
    Data/Hora: ${this.getDataHoraPartidaFormatada()}`)
  }
}

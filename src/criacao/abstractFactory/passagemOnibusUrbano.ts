import { PassagemParams } from '.'

export abstract class PassagemOnibusUrbano {
  private origem: string
  private destino: string
  private dataHoraPartida: Date

  constructor(private params: PassagemParams) {
    this.origem = params.origem
    this.destino = params.destino
    this.dataHoraPartida = params.dataHoraPartida
  }

  protected getOrigem(): string {
    return this.origem
  }

  protected getDestino(): string {
    return this.destino
  }

  protected getDataHoraPartida(): Date {
    return this.dataHoraPartida
  }

  protected getDataHoraPartidaFormatada(): string {
    return `${this.dataHoraPartida.toLocaleDateString()} às ${this.dataHoraPartida.toLocaleTimeString()}`
  }

  public abstract exibeDetalhes(): void
}

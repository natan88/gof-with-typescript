/**
 * Esta classe é o produto abstrato
 */

export abstract class Passagem {
  constructor(
    private origem: string,
    private destino: string,
    private dataHoraPartida: Date
  ) {}

  public getOrigim(): string {
    return this.origem
  }

  public getDestino(): string {
    return this.destino
  }

  public getDataHoraPartida(): Date {
    return this.dataHoraPartida
  }

  public getDataHoraPartidaFormatada(): string {
    return `${this.dataHoraPartida.toLocaleDateString()} às ${this.dataHoraPartida.toLocaleTimeString()}`
  }

  public abstract exibeDetalhes(): void
}

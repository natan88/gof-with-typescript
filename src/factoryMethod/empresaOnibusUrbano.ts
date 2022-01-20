import { Empresa, Passagem, PassagemOnibusUrbano } from '.';

// Fábrica concreta
export class EmpresaOnibusUrbano extends Empresa {
  public emitePassagem(origem: string, destino: string, dataHoraPartida: Date): Passagem {
    return new PassagemOnibusUrbano(origem, destino, dataHoraPartida)
  }
}

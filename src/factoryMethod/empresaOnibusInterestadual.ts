import { Empresa, Passagem, PassagemOnibusInterestadual } from '.';

// Fábrica concreta
export class EmpresaOnibusInterestadual extends Empresa {
  public emitePassagem(origem: string, destino: string, dataHoraPartida: Date): Passagem {
    return new PassagemOnibusInterestadual(origem, destino, dataHoraPartida)
  }
}

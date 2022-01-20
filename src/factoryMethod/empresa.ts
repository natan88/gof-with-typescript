import { Passagem } from './passagem';

// Fábrica abstrata
export abstract class Empresa {
  public abstract emitePassagem(origem: string, destino: string, dataHoraPartida: Date): Passagem
}

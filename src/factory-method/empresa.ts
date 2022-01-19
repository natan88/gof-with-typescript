import Passagem from './passagem';

// Fábrica abstrata
abstract class Empresa {
  public abstract emitePassagem(origem: string, destino: string, dataHoraPartida: Date): Passagem
}

export default Empresa

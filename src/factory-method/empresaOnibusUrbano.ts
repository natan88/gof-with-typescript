import Empresa from './empresa';
import Passagem from './passagem';
import PassagemOnibusUrbano from './passagemOnibusUrbano';

// Fábrica concreta
class EmpresaOnibusUrbano extends Empresa {
  public emitePassagem(origem: string, destino: string, dataHoraPartida: Date): Passagem {
    return new PassagemOnibusUrbano(origem, destino, dataHoraPartida)
  }
}

export default EmpresaOnibusUrbano

import Empresa from './empresa';
import Passagem from './passagem';
import PassagemOnibusInterestadual from './passagemOnibusInterestadual';

// Fábrica concreta
class EmpresaOnibusInterestadual extends Empresa {
  public emitePassagem(origem: string, destino: string, dataHoraPartida: Date): Passagem {
    return new PassagemOnibusInterestadual(origem, destino, dataHoraPartida)
  }
}

export default EmpresaOnibusInterestadual

import { TipoPaoDeSanduiche } from './sanduiche'
import { Sanduiche } from './sanduiche'
import { SanduicheBuilder } from './sanduicheBuilder'

export class FishBuilder extends SanduicheBuilder {

  private ingredientes: Array<string> = new Array<string>('filé de peixe', 'tomate', 'alface', 'maionese')
  private sanduiche: Sanduiche

  constructor () {
    super()
    this.reset()
  }

  private reset(): void {
    this.sanduiche = new Sanduiche('Fishburguer', TipoPaoDeSanduiche.FISHBURGUER, 2)
  }

  public abrePao(): void {
    this.sanduiche.abrePao()
    console.log('Abre pão de fishburguer')
  }

  public insereIngredientes(): void {
    this.ingredientes.forEach((ingrediente) => {
      this.sanduiche.insereIngrediente(ingrediente)
    })
    console.log('Inserindo ingredientes')
  }

  public fechaPao(): void {
    this.sanduiche.fechaPao()
    console.log('Fecha pão de fishburguer')
  }

  public getSanduiche(): Sanduiche {
    console.log('Fishburguer está pronto')
    return this.sanduiche
  }
}

import { Sanduiche, TipoPaoDeSanduiche } from './sanduiche'
import { SanduicheBuilder } from './sanduicheBuilder'

export class HamburgerBuilder extends SanduicheBuilder {

  private ingredientes: Array<string> = new Array<string>('filé de hamburguer', 'alface', 'molho especial')
  private sanduiche: Sanduiche

  constructor () {
    super()
    this.reset()
  }

  private reset(): void {
    this.sanduiche = new Sanduiche('Hamburger', TipoPaoDeSanduiche.HAMBURGER, 10)
  }

  public abrePao(): void {
    this.sanduiche.abrePao()
    console.log('Abre pão de hamburger')
  }

  public insereIngredientes(): void {
    this.ingredientes.forEach((ingrediente) => {
      this.sanduiche.insereIngrediente(ingrediente)
    })
    console.log('Inserindo ingredientes')
  }

  public fechaPao(): void {
    this.sanduiche.fechaPao()
    console.log('Fecha pão de hamburger')
  }

  public getSanduiche(): Sanduiche {
    console.log('Hamburger está pronto')
    return this.sanduiche
  }
}

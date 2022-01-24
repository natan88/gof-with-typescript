import { Sanduiche } from '.'

export abstract class SanduicheBuilder {
  public abstract abrePao(): void
  public abstract insereIngredientes(): void
  public abstract fechaPao(): void
  public abstract getSanduiche(): Sanduiche
}

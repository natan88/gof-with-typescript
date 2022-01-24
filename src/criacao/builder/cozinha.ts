import { SanduicheBuilder } from '.';

export class Cozinha {
  fazSanduice(builder: SanduicheBuilder): void {
    builder.abrePao()
		builder.insereIngredientes()
		builder.fechaPao()
  }
}

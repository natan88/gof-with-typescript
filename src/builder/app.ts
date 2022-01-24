import {
  Cozinha,
  FishBuilder,
  HamburgerBuilder,
  SanduicheBuilder
} from '.'

const app = () => {
  const cozinha = new Cozinha()
  const hamburgerBuilder: SanduicheBuilder = new HamburgerBuilder()
  const fishBuilder: SanduicheBuilder = new FishBuilder()

  console.log('---------- Fishburger ---------')
  cozinha.fazSanduice(fishBuilder)
  fishBuilder.getSanduiche()
  const fishBurger = fishBuilder.getSanduiche()
  console.log(`
  Nome: ${fishBurger.getNome()}
  Fabricado em: ${fishBurger.getDataFabricao().toLocaleDateString()}
  Valido até: ${fishBurger.getDataValidade().toLocaleDateString()}
  `)

  console.log('---------- Hamburger ---------')
  cozinha.fazSanduice(hamburgerBuilder)
  const hamburger = hamburgerBuilder.getSanduiche()
  console.log(`
  Nome: ${hamburger.getNome()}
  Fabricado em: ${hamburger.getDataFabricao().toLocaleDateString()}
  Valido até: ${hamburger.getDataValidade().toLocaleDateString()}
  `)
}

console.log('\n\n============ Builder =============')
app()

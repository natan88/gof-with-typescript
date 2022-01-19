import EmpresaOnibusInterestadual from './empresaOnibusInterestadual'
import EmpresaOnibusUrbano from './empresaOnibusUrbano'

const app = () => {
  const viacaoAbcLocal = new EmpresaOnibusUrbano()
  const viacaoXyzInter = new EmpresaOnibusInterestadual()

  const passagemUrbana = viacaoAbcLocal.emitePassagem('Lago sul', 'Taguatinga', new Date('2022-01-15T07:30'))
  const passagemInterestadual = viacaoXyzInter.emitePassagem('Brasília', 'São Paulo', new Date('2022-01-29T13:15'))

  passagemUrbana.exibeDetalhes()
  console.log('')
  passagemInterestadual.exibeDetalhes()
}

console.log('\n\n============ Factory Method =============')
app()

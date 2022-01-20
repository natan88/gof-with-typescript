import {
  EmpresaOnibus,
  EmpresaOnibusConcreta,
  PassagemOnibusInterestadual,
  PassagemOnibusUrbano
} from './'

const app = () => {
  const viacaoXyz: EmpresaOnibus = new EmpresaOnibusConcreta()

  const passagemOnibusUrbano: PassagemOnibusUrbano = viacaoXyz.emitePassagemOnibusUrbano({
    origem: 'Lago sul',
    destino: 'Taguatinga',
    dataHoraPartida: new Date('2022-01-15T07:30')
  })
  const passagemOnibusInterestadual: PassagemOnibusInterestadual = viacaoXyz.emitePassagemOnibusInterestadual({
    origem: 'Brasília',
    destino: 'São Paulo',
    dataHoraPartida: new Date('2022-01-29T13:15')
  })

  passagemOnibusUrbano.exibeDetalhes()
  console.log('')
  passagemOnibusInterestadual.exibeDetalhes()
}

console.log('\n\n============ Abstract Factory =============')
app()

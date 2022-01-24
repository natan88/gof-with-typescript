export class Sanduiche {
  private ingredientes: Set<string>
  private nome: string
  private fabricadoEm: Date
  private validoAte: Date
  private pao: TipoPaoDeSanduiche
  private etapa: SanduicheEtapa

  constructor(nome: string, pao: TipoPaoDeSanduiche, prazoValidade: number) {
    this.nome = nome
    this.pao = pao
    this.fabricadoEm = new Date()
    this.validoAte = new Date(this.fabricadoEm.getFullYear(), this.fabricadoEm.getMonth(), this.fabricadoEm.getDate() + prazoValidade)
    this.ingredientes = new Set<string>()
  }

  public abrePao(): void {
    if (this.etapa) {
      throw new Error(this.etapa === SanduicheEtapa.PRONTO ? 'Sanduíche pronto' : 'O pão já está abrto')
    }
    this.etapa = SanduicheEtapa.PAO_ABERTO
  }

  public insereIngrediente(ingrediente: string): void {
    if (![SanduicheEtapa.PAO_ABERTO,SanduicheEtapa.COM_INGREDIENTES].includes(this.etapa)) {
      throw new Error(`O Sanduíche está com estado invalido (${this.etapa})`)
    }
    if (this.ingredientes.has(ingrediente)) {
      throw new Error('Ingrediente já adicionado anteriormente')
    }
    this.ingredientes.add(ingrediente)
    this.etapa = SanduicheEtapa.COM_INGREDIENTES
  }

  public fechaPao(): void {
    if (this.etapa !== SanduicheEtapa.COM_INGREDIENTES) {
      throw new Error('Não pode fechar o pão')
    }
    this.etapa = SanduicheEtapa.PRONTO
  }

  public getDataFabricao(): Date {
    return this.fabricadoEm
  }

  public getDataValidade(): Date {
    return this.validoAte
  }

  public getNome(): String {
    return this.nome
  }
}

export enum TipoPaoDeSanduiche {
  HAMBURGER = 'hamburger',
  FISHBURGUER = 'fishburguer'
}

enum SanduicheEtapa {
  PAO_ABERTO = 'paoAberto',
  COM_INGREDIENTES = 'comIngredientes',
  PRONTO = 'pronto'
}

// TOOLS
import DataType, { DataTypeEnum, DataValue, TokenInfo } from '../../utils/types'
import Instruction, { TAC } from '../abstract'
import Scope from '../../runtime/scope'
import Value from '../value'

class FunctionBlock extends Instruction {
  // GLOBALES
  private scope: Scope | undefined
  private isOnBreak = false

  // CONSTRUCTOR
  constructor(
    public token: TokenInfo,
    public props: {
      id: string
      type: DataType
      content: Instruction[]
      params: { type: DataType; id: string }[]
    },
  ) {
    super(token, 'Function')
    this.scope = undefined
    this.isOnBreak = false
  }

  // GENERAR 3D
  public to3AC(): TAC {
    return { label: '', code: '' }
  }

  // OBTENER TIPO DE FUNCION
  public getType(): DataType {
    return this.props.type
  }

  // ASIGNAR ENTORNO
  public setScope(scope: Scope): void {
    this.scope = new Scope('Function', this.props.id, scope)
    this.isOnBreak = false

    this.scope.addFunction(
      'return',
      { type: DataTypeEnum.VOID },
      new FunctionBlock(this.token, {
        id: 'return',
        type: { type: DataTypeEnum.VOID },
        content: [
          {
            token: this.token,
            name: 'FunctionCall',
            to3AC: () => ({ label: '', code: '' }),
            execute: () => {
              this.isOnBreak = true
              return true
            },
          },
        ],
        params: [],
      }),
    )
  }

  // OBTENER NOMBRE DE FUNCION
  public getId() {
    return this.props.id
  }

  // COMPILAR FUNCION
  public getValue(scope: Scope): DataValue | undefined {
    // ASIGNAR SCOPE
    let functionValue: Value | undefined
    if (!this.scope) this.setScope(scope)

    // COMPILAR CONTENIDO
    for (
      let instructionIndex = 0, length = this.props.content.length;
      instructionIndex < length;
      instructionIndex++
    ) {
      if (this.scope) {
        if (!this.isOnBreak)
          this.props.content[instructionIndex].execute(this.scope)
        else break
      }
    }

    // OBTENER VALOR DE RETORNO
    if (this.props.type.type !== DataTypeEnum.VOID) {
      if (this.scope && 'getVar' in this.scope)
        functionValue = this.scope.getVar('return')
    }

    // VALOR
    return functionValue?.getValue(this.scope)
  }

  // AGREGAR FUNCION
  public execute(scope: Scope): void {
    scope.addFunction(this.props.id, this.props.type, this)
  }

  // OBTENER ENTORNO DE FUNCION
  public getScope(): Scope | undefined {
    return this.scope
  }
}

export default FunctionBlock

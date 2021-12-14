import DataType, { DataValue, TokenInfo } from '../../../../utils/types'
import { getValueByType } from '../../../value/tools'
import Scope from '../../../../runtime/scope'
import Expression from '../../../expression'
import FunctionCall from '../../call'
import Value from '../../../value'

class ToInt extends FunctionCall {
  // CONSTRUCTOR
  constructor(
    public token: TokenInfo,
    public props: {
      params: Expression[]
      id: string
    },
  ) {
    super(token, { ...props, id: 'ToInt' }, true)
    this.props.id = 'ToInt'
  }

  // OBTENER VALOR REAL
  public getScopedValue(scope: Scope): Value {
    return getValueByType(this.token, DataType.INTEGER, this.getValue(scope))
  }

  // OBTENER VALOR
  public getValue(scope: Scope): DataValue {
    // PARAMETRO
    const paramValue = this.props.params[0].getValue(scope)
    const paramScopedValue = paramValue.getValue(scope)
    return parseInt(paramScopedValue?.toString() ?? '0', 10)
  }

  // OBTENER TIPO
  public getType(_scope: Scope): DataType {
    return DataType.INTEGER
  }

  // OBTENER TIPO
  public getGenType(scope: Scope): DataType {
    return this.getType(scope)
  }

  // COMPILAR
  public execute(_scope: Scope): void {}
}

export default ToInt
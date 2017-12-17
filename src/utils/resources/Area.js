import Resource from './Resource'
import endpoints from '../../config/endpoints'

class Area extends Resource{

  constructor () {
    super(endpoints.areas)
  }
}

export default new Area()

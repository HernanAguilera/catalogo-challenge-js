import Resource from './Resource'
import endpoints from '../../config/endpoints'

class Catalogo extends Resource{

  constructor () {
    super(endpoints.catalogos)
  }
}

export default new Catalogo()

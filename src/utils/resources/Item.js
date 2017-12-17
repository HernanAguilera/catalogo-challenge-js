import Resource from './Resource'
import endpoints from '../../config/endpoints'

class Item extends Resource{

  constructor () {
    super(endpoints.items)
  }
}

export default new Item()

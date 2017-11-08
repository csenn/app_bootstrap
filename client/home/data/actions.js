export const HOME_ADD_ITEM = 'HOME_ADD_ITEM'

export function addItem (item) {
  return {
    type: HOME_ADD_ITEM,
    payload: item
  }
}

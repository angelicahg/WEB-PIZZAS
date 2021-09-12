import * as actionTypes from './Shopping-types';
export const addToCart = (itemID,) => {
  return {
    type: actionTypes.ADD_TO_CART,
    payload: {
      id: itemID,

    }
  }
};

export const removeFromCart = (itemID, itemCategory) => {
  return {
    type: actionTypes.REMOVE_FROM_CART,
    payload: {
      id: itemID,

    }
  }
};
export const adjustItemQty = (itemID, value) => {
  return {
    type: actionTypes.ADJUST_ITEM_QTY,
    payload: {
      id: itemID,
      qty: value
    }
  }
};
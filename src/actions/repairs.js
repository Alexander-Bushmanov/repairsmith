import * as types from '../constants/types';

export const addRepairToCart = data => dispatch =>
  dispatch({ type: types.ADD_REPAIR_TO_CART, data });

export const removeRepairFromCart = data => dispatch =>
	dispatch({ type: types.REMOVE_REPAIR_FROM_CART, data });

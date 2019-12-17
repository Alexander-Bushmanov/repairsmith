import { createSelector } from 'reselect';
import { POPULAR_REPAIRS_CAPACITY } from '../constants/settings';

const repairsSelector = state => state.repairs;
const cartSelector = state => state.repairs.cart;
const popularRepairsIdsSelector = state => state.repairs.popularRepairsIds;

export const selectAllRepairs = createSelector(
	repairsSelector,
	repairs => repairs.allRepairs
);

export const selectSearchResults = createSelector(
	repairsSelector,
	repairs => repairs.searchResults
);

export const selectCart = createSelector(
	repairsSelector,
	repairs => repairs.cart
);

export const selectPopular = createSelector(
	popularRepairsIdsSelector,
	cartSelector,
	repairsSelector,
	(popularIds = [], cart = [], repairs = []) => popularIds
      .filter(id => !cart.find(el => el.id === id))
      .slice(0, POPULAR_REPAIRS_CAPACITY)
      .map(id => repairs.allRepairs.find(repair => repair.id === id))
)

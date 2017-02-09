var expect = require('expect');
var df = require('deep-freeze-strict');

var reducers = require('reducers');

describe('Reducers', () => {
  describe('searchTextReducers', () => {
      it('should set searchText', () => {
        var action = {
          type:'SET_SEARCH_TEXT',
          searchText:'dog'
        }

        var res = reducers.searchTextReducers(df(''),df(action));

        expect(res).toEqual(action.searchText);
      });
  });

  describe('showCompletedReducers', () => {
      it('should toggle show Completed', () => {
        var action = {
          type:'TOGGLE_SHOW_COMPLETED'
        }

        var res = reducers.showCompletedReducer(df(false),df(action));

        expect(res).toEqual(true);
      });
  });
});

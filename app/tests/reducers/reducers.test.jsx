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

  describe('todoReducer', () => {
      it('should add new todo', () => {
        var action = {
          type:'ADD_TODO',
          text:'Walk the dog'
        }

        var res = reducers.todoReducer(df([]),df(action));

        expect(res.length).toBe(1);
        expect(res[0].text).toEqual(action.text);
      });
      it('should toggle todo', () => {
        var todos=[{
          id:'123',
          text:'Something',
          completed:true,
          createdAt:123,
          completedAt:125
        }];

        var action = {
          type:'TOGGLE_TODO',
          id:'123'
        }

        var res = reducers.todoReducer(df(todos),df(action));

        expect(res[0].completed).toEqual(false);
        expect(res[0].completedAt).toEqual(undefined);
      });
  });
});

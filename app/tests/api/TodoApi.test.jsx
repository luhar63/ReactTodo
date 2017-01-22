var expect = require('expect');

var TodoAPI = require('TodoAPI');

describe('TodoAPI', ()=>{
  it('should exist', () => {
    expect(TodoAPI).toExist();
  });
});

describe('setTodos', () => {
  beforeEach(()=>{
    localStorage.removeItem('todos');
  });
  it('should set valid todos array', () => {
    var todos = [{
      id:23,
      text:'test all files',
      completed:false
    }];
    TodoAPI.setTodos(todos);

    var actualTodos = JSON.parse(localStorage.getItem('todos'));

    expect(actualTodos).toEqual(todos);
  });

  it('should set valid todos array', () => {
    var badTodos = {a:'b'};
    TodoAPI.setTodos(badTodos);

    expect(localStorage.getItem('todos')).toBe(null);

  });
});

describe('getTodos', () => {
  it('should return emppty array for bad localstorage data', () => {
    var actualTodos = TodoAPI.getTodos();
    expect(actualTodos).toEqual([]);
  });

  it('should return todos if valid array in localstorage', () => {
    var todos = [{
      id:23,
      text:'test all files',
      completed:false
    }];
    localStorage.setItem('todos',JSON.stringify(todos));
    var actualTodos = TodoAPI.getTodos();

    expect(actualTodos).toEqual(todos);
  });

  describe('filterTodos',()=>{
    var todos = [{
      id:1,
      text:'some test here',
      completed:true
    },
    {
      id:2,
      text:'some other test here',
      completed:false
    },{
      id:3,
      text:'test here',
      completed:true
    }];

    it('should return all item if show completed is true',()=>{
      var filterTodos = TodoAPI.filterTodos(todos,true,'');
      expect(filterTodos.length).toBe(3);
    });

    it('should return non-completed item if show completed is fase',()=>{
      var filterTodos = TodoAPI.filterTodos(todos,false,'');
      expect(filterTodos.length).toBe(1);
    });

    it('should sort by completed status', () => {
      var filterTodos = TodoAPI.filterTodos(todos,true,'');
      expect(filterTodos[0].completed).toBe(false);
    });

    it('should filter todos by searchText', () => {
      var filterTodos = TodoAPI.filterTodos(todos,true,'some');
      expect(filterTodos.length).toBe(2);
    });

    it('should return all todos if search text is empty', () => {
      var filterTodos = TodoAPI.filterTodos(todos,true,'');
      expect(filterTodos.length).toBe(3);
    });

  });


});

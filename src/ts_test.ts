// //NOTE: any: 모든 타입 가능 -> any로 먼저 설정해두고 하나씩 바꾸는게 좋음
// let todoItems: ITodo[];

// // NOTE: 인터페이스 사용 - 객체 및 함수
// interface ITodo {
//   id: number,
//   title: string,
//   done: boolean,
// }

// // api
// function fetchTodoItems(): ITodo[] {
//   return [
//     { id: 1, title: '안녕', done: false },
//     { id: 2, title: '타입', done: false },
//     { id: 3, title: '스크립트', done: false },
//   ];
// }

// //NOTE: void: 리턴 값이 없는 친구들
// function addTodo(todo: ITodo): void {
//   todoItems.push(todo);
// }

// let deleteTodo = (index: number): void => {
//   todoItems.splice(index, 1);
// }

// function completeTodo(index: number, todo: ITodo): void {
//   todo.done = true;
//   todoItems.splice(index, 1, todo);
// }

// // business logic
// function logFirstTodo(): ITodo {
//   return todoItems[0];
// }

// function showCompleted(): ITodo[] {
//   return todoItems.filter((item: ITodo) => item.done);
// }

// todoItems = fetchTodoItems();
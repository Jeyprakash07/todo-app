import { useAppDispatch, useAppSelector } from './store';
import { deleteTodo, toggleTodo } from './features/todoSlice';
import { useEffect } from 'react';

function List() {
  const todos = useAppSelector((state) => state.todos.items);
  const dispatch = useAppDispatch();

  useEffect(() => {
    console.log('Current todos:', todos);
  }, [todos]);

  return (
    <ul className="space-y-3">
      {todos.map((todo) => (
        <li
          key={todo.id}
          className={`flex items-center justify-between p-3 rounded-lg border ${
            todo.completed ? 'bg-slate-50 border-slate-200' : 'bg-white border-slate-200'
          }`}
        >
          <div className="flex items-center gap-3 overflow-hidden">
            <input
              type="checkbox"
              checked={todo.completed}
              onChange={() => dispatch(toggleTodo(todo.id))}
              className="w-5 h-5 text-blue-600 rounded focus:ring-blue-500"
            />
            <span
              className={`truncate ${
                todo.completed ? 'text-slate-400 line-through' : 'text-slate-700'
              }`}
            >
              {todo.text}
            </span>
          </div>
          <button
            onClick={() => dispatch(deleteTodo(todo.id))}
            className="text-red-500 hover:text-red-700 text-sm font-medium ml-2"
          >
            Delete
          </button>
        </li>
      ))}
      {todos.length === 0 && (
        <p className="text-center text-slate-400 mt-4">No tasks yet. Add one above!</p>
      )}
    </ul>
  );
}

export default List;

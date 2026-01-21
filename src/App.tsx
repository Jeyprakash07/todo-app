import Form from './Form';
import List from './List';

function App() {
  return (
    <div className="min-h-screen bg-slate-100 flex items-center justify-center py-10 px-4">
      <div className="bg-white p-8 rounded-xl shadow-lg w-full max-w-md">
        <h1 className="text-3xl font-bold text-slate-800 mb-6 text-center">My Tasks</h1>
        
        {/* Input Form Component */}
        <Form />

        {/* Todo List Component */}
        <List />
      </div>
    </div>
  );
}

export default App;

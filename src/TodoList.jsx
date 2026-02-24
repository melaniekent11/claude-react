import { useState } from 'react';

function TodoList() {
  const [tasks, setTasks] = useState([]);
  const [inputValue, setInputValue] = useState('');

  const handleAddTask = () => {
    if (inputValue.trim() !== '') {
      setTasks([...tasks, { id: Date.now(), text: inputValue, completed: false }]);
      setInputValue('');
    }
  };

  const handleToggleComplete = (id) => {
    setTasks(tasks.map(task =>
      task.id === id ? { ...task, completed: !task.completed } : task
    ));
  };

  const handleDeleteTask = (id) => {
    setTasks(tasks.filter(task => task.id !== id));
  };

  const handleKeyPress = (e) => {
    if (e.key === 'Enter') {
      handleAddTask();
    }
  };

  return (
    <div style={{
      minHeight: '100vh',
      display: 'flex',
      justifyContent: 'center',
      alignItems: 'center',
      backgroundColor: '#f5f5f5',
      padding: '20px'
    }}>
      <div style={{ maxWidth: '700px', width: '100%', padding: '40px' }}>
        <h1 style={{
          fontSize: '48px',
          textAlign: 'center',
          marginBottom: '40px',
          color: '#333'
        }}>
          Todo List
        </h1>

        <div style={{ display: 'flex', gap: '15px', marginBottom: '30px' }}>
          <input
            type="text"
            value={inputValue}
            onChange={(e) => setInputValue(e.target.value)}
            onKeyPress={handleKeyPress}
            placeholder="Enter a new task"
            style={{
              flex: 1,
              padding: '20px',
              fontSize: '20px',
              border: '2px solid #ccc',
              borderRadius: '8px',
              outline: 'none'
            }}
          />
          <button
            onClick={handleAddTask}
            style={{
              padding: '20px 40px',
              fontSize: '20px',
              backgroundColor: '#007bff',
              color: 'white',
              border: 'none',
              borderRadius: '8px',
              cursor: 'pointer',
              fontWeight: 'bold'
            }}
          >
            Add
          </button>
        </div>

        <ul style={{ listStyle: 'none', padding: 0 }}>
          {tasks.map(task => (
            <li
              key={task.id}
              style={{
                display: 'flex',
                justifyContent: 'space-between',
                alignItems: 'center',
                padding: '20px',
                marginBottom: '15px',
                backgroundColor: 'white',
                borderRadius: '8px',
                boxShadow: '0 2px 4px rgba(0,0,0,0.1)',
                opacity: task.completed ? 0.6 : 1,
                transition: 'opacity 0.3s ease'
              }}
            >
              <span
                onClick={() => handleToggleComplete(task.id)}
                style={{
                  fontSize: '20px',
                  color: '#333',
                  cursor: 'pointer',
                  textDecoration: task.completed ? 'line-through' : 'none',
                  flex: 1
                }}
              >
                {task.text}
              </span>
              <button
                onClick={() => handleDeleteTask(task.id)}
                style={{
                  padding: '12px 24px',
                  fontSize: '18px',
                  backgroundColor: '#dc3545',
                  color: 'white',
                  border: 'none',
                  borderRadius: '8px',
                  cursor: 'pointer',
                  fontWeight: 'bold'
                }}
              >
                Delete
              </button>
            </li>
          ))}
        </ul>

        {tasks.length === 0 && (
          <p style={{
            textAlign: 'center',
            color: '#6c757d',
            fontSize: '20px',
            marginTop: '40px'
          }}>
            No tasks yet. Add one to get started!
          </p>
        )}
      </div>
    </div>
  );
}

export default TodoList;

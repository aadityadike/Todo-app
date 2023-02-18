import { useState, useEffect } from "react";
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import AddTask from "./components/AddTask";
import Header from "./components/Header";
import Tasks from "./components/Tasks";
import About from "./components/About";
import Footer from "./components/Footer";


function App() {
  const [showAddTask, setShowAddTask] = useState(false)
  const [task, setTask] = useState([])

  useEffect(() => {
    const getTask = async () => {
      const taskFromServer = await fetchTask()
      setTask(taskFromServer)
    }
    getTask()
  }, [])


  // Fetch Task
  const fetchTask = async () => {
    const res = await fetch('http://localhost:5000/task')
    const data = res.json()
    console.log(data)
    return data
  }


  // FetchTask according to Id
  const fetchSingleTask = async (id) => {
    const res = await fetch(`http://localhost:5000/task/${id}`)
    const data = res.json()
    return data
  }


  // Add Task.
  const onAdd = async (t) => {
    /*const id = Math.floor(Math.random() * 1000) + 1
      const newTask = { ...t, id }
      setTask([...task, newTask]) */
    const res = await fetch('http://localhost:5000/task', {
      method: 'POST',
      headers: {
        "Content-type": 'application/json'
      },
      body: JSON.stringify(t)
    })

    const data = await res.json()

    setTask([...task, data])
  }


  // Delete Todo.
  const deleteTodo = async (id) => {
    const res = await fetch(`http://localhost:5000/task/${id}`, {
      method: 'DELETE'
    })
    // filter method creates new array.
    res.status === 200 ? setTask(task.filter((t) => t.id !== id)) : alert('Error Deleting the Task')
  }


  // Active the Task.
  const activeTask = async (id) => {
    const taskToActive = await fetchSingleTask(id)
    const updateTask = { ...taskToActive, active: !taskToActive.active }

    const res = await fetch(`http://localhost:5000/task/${id}`, {
      method: 'PUT',
      headers: {
        'Content-type': 'application/json'
      },
      body: JSON.stringify(updateTask)
    })

    const data = await res.json()

    setTask(task.map((t) => t.id === id ? { ...t, active: data.active } : t))
  }


  return (
    <Router>
      <div className="container">
        <Header hideForm={() => setShowAddTask(!showAddTask)} showAdd={showAddTask} />
        <Routes>
          <Route
            path='/'
            element={
              <>
                {showAddTask && <AddTask onAdd={onAdd} />}
                {task.length > 0 ? (<Tasks toDos={task} deleteTask={deleteTodo} activeTask={activeTask} />) : ("No Task Found.")}
              </>
            } />
          <Route path='/about' element={<About />} />
        </Routes>
        <Footer />
      </div>
    </Router>
  );
}

export default App;

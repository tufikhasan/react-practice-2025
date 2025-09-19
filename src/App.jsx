import Filter from "./components/Filter";
import AddForm from "./components/AddForm";
import Header from "./components/Header";
import TaskList from "./components/TaskList";
import data from "./data";
import { useState } from "react";
import NotFound from "./components/NotFound";

function App() {
  const [tasks, setTasks] = useState(data);
  const [allTasks] = useState(data); 
  const [editTask, setEditTask] = useState(null);
  const [showForm, setShowForm] = useState(false);

  const handleShowForm = () => {
    setShowForm(true);
  };
  const handleHideForm = () => {
      setShowForm(false);
      setEditTask(null);
  };
  const handleSaveOrUpdateTask = (task, isAdd) => {
    if (isAdd) {
      setTasks([...tasks, task]);
    } else {
      setTasks(tasks.map((item) => (item.id === task.id ? task : item)));
    }
    setShowForm(false);
    setEditTask(null);
  };
  const handleEditTask = (taskId) => {
    setEditTask(tasks.find((item) => item.id == taskId));
    setShowForm(true);
  };
  const handleDeleteTask = (taskId) => {
    setTasks(tasks.filter((item) => item.id != taskId));
  };
  const handleFavoriteTask = (taskId) => {
    setTasks(
      tasks.map((item) =>
        item.id === taskId ? { ...item, favorite: !item.favorite } : item
      )
    );
  };
  const handleSearchTasks = (keyword) => {
    if (!keyword.trim()) {
      setTasks(allTasks);
      return;
    }

    const filteredTasks = allTasks.filter(
      (item) =>
        item.title.toLowerCase().includes(keyword.toLowerCase()) ||
        item.description.toLowerCase().includes(keyword.toLowerCase())
    );
    setTasks(filteredTasks);

  };
  return (
    <>
      <div className="bg-gray-50 min-h-screen">
        <Header />
        <div className="max-w-7xl mx-auto px-4 py-6">
          <Filter onShowForm={handleShowForm} onSearch={handleSearchTasks} />
          {tasks.length > 0 ?
          
          <TaskList
            tasks={tasks}
            onEditTsk={handleEditTask}
            onFavoriteTsk={handleFavoriteTask}
            onDeleteTsk={handleDeleteTask}
          /> 
          : <NotFound/>
          }
        </div>
        {showForm && (
          <AddForm
            onHideForm={handleHideForm}
            editTask={editTask}
            onAddTask={handleSaveOrUpdateTask}
          />
        )}
      </div>
    </>
  );
}

export default App;

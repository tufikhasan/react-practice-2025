import { useState } from "react";
const AddForm = ({ onHideForm, onAddTask , editTask  }) => {
  const [task, setTask] = useState(editTask || {
    id: crypto.randomUUID(),
    title: "",
    description: "",
    tags: [],
    favorite: false,
    priority: "",
  });
  const [isAdd] = useState(Object.is(editTask, null));

  const handleOnChange = (event) =>{
    const name = event.target.name;
    let value = event.target.value;
    if (name === 'tags') {
      value = value.split(',')
    }
    setTask({
      ...task,
      [name]: value,
    })
  }
  return (
    <div className="fixed inset-0 bg-gray-600 bg-opacity-50 overflow-y-auto h-full w-full">
      <div className="relative top-20 mx-auto p-5 border w-96 shadow-lg rounded-md bg-white">
        <div className="mt-3">
          <div className="flex items-center justify-between mb-4">
            <h3 className="text-lg font-medium text-gray-900">
              {isAdd ? 'Create New Task' : 'Edit Task' }
            </h3>
            <button
              onClick={onHideForm}
              className="text-gray-400 hover:text-gray-600 cursor-pointer"
            >
              <svg
                className="h-6 w-6"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  stroke-width="2"
                  d="M6 18L18 6M6 6l12 12"
                ></path>
              </svg>
            </button>
          </div>

          <htmlForm className="space-y-4">
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">
                Title
              </label>
              <input
                type="text"
                className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-1 focus:ring-blue-500 focus:border-blue-500" value={task.title} name="title" onChange={handleOnChange}
                placeholder="Enter task title"
              />
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">
                Description
              </label>
              <textarea
                rows="3"
                className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-1 focus:ring-blue-500 focus:border-blue-500" value={task.description} name="description" onChange={handleOnChange}
                placeholder="Enter task description"
              ></textarea>
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">
                Tag
              </label>
              <input
                type="text"
                className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-1 focus:ring-blue-500 focus:border-blue-500" value={task.tags} name="tags" onChange={handleOnChange}
                placeholder="Enter tag (e.g., Development, Design)"
              />
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">
                Priority
              </label>
              <select className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-1 focus:ring-blue-500 focus:border-blue-500" name="priority" onChange={handleOnChange} value={task.priority.toLowerCase() || ""}>
                <option value="">Select Priority</option>
                <option value="low">Low</option>
                <option value="medium">
                  Medium
                </option>
                <option value="high">High</option>
              </select>
            </div>

            <div className="flex gap-3 pt-4">
              <button
                className="flex-1 bg-blue-600 text-white py-2 px-4 rounded-md hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500 cursor-pointer" onClick={()=> onAddTask(task,isAdd)}
              >
                {isAdd ? 'Save' : 'Update' }
              </button>
              <button
                onClick={onHideForm}
                type="button"
                className="flex-1 bg-gray-300 text-gray-700 py-2 px-4 rounded-md hover:bg-gray-400 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-gray-500 cursor-pointer"
              >
                Cancel
              </button>
            </div>
          </htmlForm>
        </div>
      </div>
    </div>
  );
};
export default AddForm;

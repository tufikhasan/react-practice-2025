import FavIcon from "./FavIcon";

const TaskList = ({ tasks, onEditTsk,onFavoriteTsk, onDeleteTsk}) => {
  return (
    <div className="bg-white rounded-lg shadow-sm overflow-hidden">
      {tasks.map((item) => {
        return (
          <div
            key={item.id}
            className="border-b border-gray-200 p-6 hover:bg-gray-50"
          >
            <div className="flex items-start justify-between">
              <div className="flex-1">
                <div className="flex items-center gap-3 mb-2">
                  <h3 className="text-lg font-medium text-gray-900">
                    {item.title}
                  </h3>
                  <FavIcon onFavoriteTsk={()=>onFavoriteTsk(item.id)} isFav={item.favorite} />
                </div>
                <p className="text-gray-600 mb-3">{item.description}</p>
                <div className="flex items-center gap-3">
                  <span className="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium bg-blue-100 text-blue-800">
                    {item.tags.join(", ")}
                  </span>
                  <span
                    className={`inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium ${
                      item.priority.toLowerCase() == "high"
                        ? "bg-red-100 text-red-800 border border-red-200"
                        : item.priority.toLowerCase() == "medium"
                        ? "bg-yellow-100 text-yellow-800 border border-yellow-200"
                        : "bg-green-100 text-green-800 border border-green-200"
                    }`}
                  >
                    {item.priority}
                  </span>
                </div>
              </div>
              <div className="flex items-center gap-2 ml-4">
                <button onClick={()=> onEditTsk(item.id)} className="p-2 text-gray-400 hover:text-blue-600 hover:bg-blue-50 rounded-full cursor-pointer">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    strokeWidth={1.5}
                    stroke="currentColor"
                    className="size-4"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="m16.862 4.487 1.687-1.688a1.875 1.875 0 1 1 2.652 2.652L10.582 16.07a4.5 4.5 0 0 1-1.897 1.13L6 18l.8-2.685a4.5 4.5 0 0 1 1.13-1.897l8.932-8.931Zm0 0L19.5 7.125M18 14v4.75A2.25 2.25 0 0 1 15.75 21H5.25A2.25 2.25 0 0 1 3 18.75V8.25A2.25 2.25 0 0 1 5.25 6H10"
                    />
                  </svg>
                </button>
                <button onClick={()=> onDeleteTsk(item.id)} className="p-2 text-gray-400 hover:text-red-600 hover:bg-red-50 rounded-full cursor-pointer">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    strokeWidth={1.5}
                    stroke="currentColor"
                    className="size-4"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="m14.74 9-.346 9m-4.788 0L9.26 9m9.968-3.21c.342.052.682.107 1.022.166m-1.022-.165L18.16 19.673a2.25 2.25 0 0 1-2.244 2.077H8.084a2.25 2.25 0 0 1-2.244-2.077L4.772 5.79m14.456 0a48.108 48.108 0 0 0-3.478-.397m-12 .562c.34-.059.68-.114 1.022-.165m0 0a48.11 48.11 0 0 1 3.478-.397m7.5 0v-.916c0-1.18-.91-2.164-2.09-2.201a51.964 51.964 0 0 0-3.32 0c-1.18.037-2.09 1.022-2.09 2.201v.916m7.5 0a48.667 48.667 0 0 0-7.5 0"
                    />
                  </svg>
                </button>
              </div>
            </div>
          </div>
        );
      })}
    </div>
  );
};

export default TaskList;

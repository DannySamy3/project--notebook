import Task from './Task';

const SelectedProject = ({
  project,
  handleDelete,
  handleAddTask,
  handleDeleteTask,
  tasks,
}) => {
  const formattedDate = new Date(project.date).toLocaleDateString('en-US', {
    year: 'numeric',
    month: 'short',
    day: 'numeric',
  });

  return (
    <div className=' w-4/5 my-44 flex flex-col items-center pr-8 '>
      <header
        className='pb-4  mb-4 border-b-2 border-gray-700
      '
      >
        <div className='flex items-center gap-96 '>
          <h1
            className='text-3xl font-bold text-gray-700
          mb-2'
          >
            {project.title}
          </h1>
          <button
            onClick={handleDelete}
            className='border-none btn btn-neutral hover:bg-gray-300
          hover:text-gray-900'
          >
            Delete
          </button>
        </div>
        <p className='mb-4 text-black'>{formattedDate}</p>
        <p className='text-black whitespace-pre-wrap'>{project.description}</p>
      </header>
      <Task deleter={handleDeleteTask} adder={handleAddTask} tasks={tasks} />
    </div>
  );
};

export default SelectedProject;

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
      <div className='w-9/12'>
        <header
          className='pb-4  mb-4 border-b-2 border-gray-700
        '
        >
          <div className='flex justify-between items-center mb-6'>
            <h1
              className='text-3xl font-bold text-gray-700
            mb-2'
            >
              {project.title}
            </h1>
            <button
              onClick={handleDelete}
              className='
            hover:text-red-500'
            >
              <svg
                xmlns='http://www.w3.org/2000/svg'
                viewBox='0 0 24 24'
                fill='currentColor'
                class='w-8 h-8 hover:stroke-red-500'
              >
                <path d='M3.375 3C2.339 3 1.5 3.84 1.5 4.875v.75c0 1.036.84 1.875 1.875 1.875h17.25c1.035 0 1.875-.84 1.875-1.875v-.75C22.5 3.839 21.66 3 20.625 3H3.375Z' />
                <path
                  fill-rule='evenodd'
                  d='m3.087 9 .54 9.176A3 3 0 0 0 6.62 21h10.757a3 3 0 0 0 2.995-2.824L20.913 9H3.087Zm6.133 2.845a.75.75 0 0 1 1.06 0l1.72 1.72 1.72-1.72a.75.75 0 1 1 1.06 1.06l-1.72 1.72 1.72 1.72a.75.75 0 1 1-1.06 1.06L12 15.685l-1.72 1.72a.75.75 0 1 1-1.06-1.06l1.72-1.72-1.72-1.72a.75.75 0 0 1 0-1.06Z'
                  clip-rule='evenodd'
                />
              </svg>
            </button>
          </div>
          <p className='mb-4 text-black'>{formattedDate}</p>
          <p className='text-black whitespace-pre-wrap'>
            {project.description}
          </p>
        </header>
        <Task
          deleter={handleDeleteTask}
          adder={handleAddTask}
          tasks={tasks}
          project={project}
        />
      </div>
    </div>
  );
};

export default SelectedProject;

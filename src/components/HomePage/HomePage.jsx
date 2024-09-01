import "./HomePage.scss";

const HomePage = () => {
  return (
    <main id="home">
      <div className="container">
        <h1>Welcome to the Todo App!</h1>
        <section className="intro">
          <h2>How to Use This Task Management App:</h2>
          <h3>Adding a New Task:</h3>
          <ol>
            <li>Click the <strong>"New Task"</strong> button at the top of the page.</li>
            <li>Fill in the fields: enter the task title and description.</li>
            <li>Click <strong>"Add Task"</strong> to save it to your list.</li>
          </ol>

          <h3>Editing a Task:</h3>
          <ol>
            <li>Find the task you want to edit and click the <strong>"Edit"</strong> button (pencil icon).</li>
            <li>Modify the task title or description in the form that appears.</li>
            <li>Click <strong>"Save"</strong> to save the changes.</li>
          </ol>

          <h3>Marking a Task as Completed:</h3>
          <ul>
            <li>Next to each task, there is a checkbox. Click it to mark the task as completed.</li>
          </ul>

          <h3>Marking a Task as Favorite:</h3>
          <ul>
            <li>Click the star icon next to the task to add it to your favorites list or remove it from it.</li>
          </ul>

          <h3>Deleting a Task:</h3>
          <ol>
            <li>Click the <strong>"Delete"</strong> button (trash can icon) next to the task you want to delete.</li>
            <li>Confirm the deletion in the pop-up window. The task will be moved to the <strong>"Trash Bin."</strong></li>
          </ol>

          <h3>Managing Tasks in the "Trash Bin":</h3>
          <ol>
            <li>Go to the <strong>"Trash Bin"</strong> page to view deleted tasks.</li>
            <li>You can either restore a task or delete it permanently.</li>
          </ol>
        </section>
      </div>
    </main>
  );
};

export default HomePage;


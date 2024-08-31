import "./HomePage.scss";

const HomePage = () => {
  return (
    <main id="home">
      <div className="container">
        <h1>Welcome to Todo App!</h1>
        <section className="intro">
          <h2>How to Use This App</h2>
          <p>
            This application helps you manage your tasks efficiently. Here's a quick guide on how to use it:
          </p>
          <ul>
            <li><strong>Add New Todos:</strong> Click the "New Todo" button to create a new task. Fill in the title and description, then save it.</li>
            <li><strong>View and Edit Todos:</strong> On the Todos page, you can see all your tasks. Click the "Edit" button to modify a task's details.</li>
            <li><strong>Mark as Favorite:</strong> Use the star icon to mark a task as favorite for easy access.</li>
            <li><strong>Delete Todos:</strong> Click the "Delete" button to move tasks to the Trash Bin. From there, you can restore or permanently delete tasks.</li>
            <li><strong>Manage Trash Bin:</strong> On the Trash Bin page, restore deleted tasks or permanently remove them from the bin.</li>
          </ul>
          <p>Enjoy organizing your tasks and staying productive!</p>
        </section>
      </div>
    </main>
  );
};

export default HomePage;

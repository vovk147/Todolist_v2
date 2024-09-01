import React, { useState, useEffect } from "react";
import "./TodoPage.scss";
import { getLocalStorage, setLocalStorage } from "../../service/localStorage";
import { FaStar, FaRegStar, FaTrashAlt, FaPen } from 'react-icons/fa';

const TODO_KEY = 'todos';
const TRASH_KEY = 'trashed-todos';

const TodoPage = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [todos, setTodos] = useState(getLocalStorage(TODO_KEY, []));
  const [newTodoTitle, setNewTodoTitle] = useState("");
  const [newTodoText, setNewTodoText] = useState("");
  const [isDeleteConfirmationOpen, setIsDeleteConfirmationOpen] = useState(false);
  const [todoToDelete, setTodoToDelete] = useState(null);
  const [isEditModalOpen, setIsEditModalOpen] = useState(false);
  const [todoToEdit, setTodoToEdit] = useState(null);

  useEffect(() => {
    setLocalStorage(TODO_KEY, todos);
  }, [todos]);

  const handleOpenModal = () => setIsModalOpen(true);
  const handleCloseModal = () => setIsModalOpen(false);

  const handleAddTodo = () => {
    if (newTodoTitle.trim() && newTodoText.trim()) {
      const newTodo = {
        id: Date.now(),
        title: newTodoTitle,
        text: newTodoText,
        completed: false,
        favorite: false,
        dateAdded: new Date().toLocaleDateString()
      };
      setTodos((prevTodos) => [...prevTodos, newTodo]);
      setNewTodoTitle("");
      setNewTodoText("");
      handleCloseModal();
    }
  };

  const handleOpenDeleteConfirmation = (todo) => {
    setTodoToDelete(todo);
    setIsDeleteConfirmationOpen(true);
  };

  const handleCloseDeleteConfirmation = () => {
    setIsDeleteConfirmationOpen(false);
    setTodoToDelete(null);
  };

  const handleDeleteTodo = () => {
    const updatedTodos = todos.filter((todo) => todo.id !== todoToDelete.id);
    setTodos(updatedTodos);

    const trashedTodos = getLocalStorage(TRASH_KEY, []);
    setLocalStorage(TRASH_KEY, [...trashedTodos, todoToDelete]);

    handleCloseDeleteConfirmation();
  };

  const handleOpenEditModal = (todo) => {
    setTodoToEdit(todo);
    setNewTodoTitle(todo.title);
    setNewTodoText(todo.text);
    setIsEditModalOpen(true);
  };

  const handleCloseEditModal = () => {
    setIsEditModalOpen(false);
    setTodoToEdit(null);
    setNewTodoTitle("");
    setNewTodoText("");
  };

  const handleSaveEdit = () => {
    const updatedTodos = todos.map(todo =>
      todo.id === todoToEdit.id
        ? { ...todo, title: newTodoTitle, text: newTodoText }
        : todo
    );
    setTodos(updatedTodos);
    handleCloseEditModal();
  };

  const handleToggleFavorite = (id) => {
    const updatedTodos = todos.map(todo =>
      todo.id === id ? { ...todo, favorite: !todo.favorite } : todo
    ).sort((a, b) => b.favorite - a.favorite); 
    setTodos(updatedTodos);
  };

  return (
    <main id="todo">
      <div className="container">
        <div className="wrapper">
          <h1>All Todos</h1>
          <button onClick={handleOpenModal}>New Todo</button>
        </div>
        <div className="todos">
          {todos.length === 0 ? (
            <p className="no-todos-message">No todos available</p>
          ) : (
            todos.map((todo) => (
              <div className="todo" key={todo.id}>
                <div className="top-txt">
                  <p>{todo.title}</p>
                  <input
                    type="checkbox"
                    checked={todo.completed}
                    onChange={() => setTodos(todos.map(t => t.id === todo.id ? { ...t, completed: !t.completed } : t))}
                    id={`checkbox-${todo.id}`}
                  />
                  <label htmlFor={`checkbox-${todo.id}`} className="custom-checkbox"></label>
                </div>
                <textarea readOnly value={todo.text}></textarea>
                <div className="bottom-txt">
                  <p className="date-added">{todo.dateAdded}</p>
                  <div className="buttons">
                    <button className="favorite" onClick={() => handleToggleFavorite(todo.id)}>
                      {todo.favorite ? <FaStar /> : <FaRegStar />}
                    </button>
                    <button className="edit" onClick={() => handleOpenEditModal(todo)}>
                      <FaPen />
                    </button>
                    <button className="delete" onClick={() => handleOpenDeleteConfirmation(todo)}>
                      <FaTrashAlt />
                    </button>
                  </div>
                </div>
              </div>
            ))
          )}
        </div>
      </div>

      {isModalOpen && (
        <div className="modal" onClick={handleCloseModal}>
          <div className="modal-content" onClick={(e) => e.stopPropagation()}>
            <button className="close-btn" onClick={handleCloseModal}>
              &times;
            </button>
            <h2>Add New Todo</h2>
            <input
              type="text"
              placeholder="Enter todo title"
              value={newTodoTitle}
              onChange={(e) => setNewTodoTitle(e.target.value)}
            />
            <textarea
              placeholder="Enter todo description"
              value={newTodoText}
              onChange={(e) => setNewTodoText(e.target.value)}
            ></textarea>
            <div className="modal-buttons">
              <button onClick={handleAddTodo}>Add Todo</button>
              <button className="cancel" onClick={handleCloseModal}>Cancel</button>
            </div>
          </div>
        </div>
      )}

      {isEditModalOpen && todoToEdit && (
        <div className="modal" onClick={handleCloseEditModal}>
          <div className="modal-content" onClick={(e) => e.stopPropagation()}>
            <button className="close-btn" onClick={handleCloseEditModal}>
              &times;
            </button>
            <h2>Edit Todo</h2>
            <input
              type="text"
              placeholder="Enter todo title"
              value={newTodoTitle}
              onChange={(e) => setNewTodoTitle(e.target.value)}
            />
            <textarea
              placeholder="Enter todo description"
              value={newTodoText}
              onChange={(e) => setNewTodoText(e.target.value)}
            ></textarea>
            <div className="modal-buttons">
              <button onClick={handleSaveEdit}>Save</button>
              <button className="cancel" onClick={handleCloseEditModal}>Cancel</button>
            </div>
          </div>
        </div>
      )}

      {isDeleteConfirmationOpen && (
        <div className="confirmation-modal" onClick={handleCloseDeleteConfirmation}>
          <div className="confirmation-content" onClick={(e) => e.stopPropagation()}>
            <button className="close-btn" onClick={handleCloseDeleteConfirmation}>
              &times;
            </button>
            <h2>Delete Todo</h2>
            <p>Are you sure you want to delete this todo?</p>
            <div className="confirmation-buttons">
              <button className="confirm" onClick={handleDeleteTodo}>Delete</button>
              <button className="cancel" onClick={handleCloseDeleteConfirmation}>Cancel</button>
            </div>
          </div>
        </div>
      )}
    </main>
  );
};

export default TodoPage;

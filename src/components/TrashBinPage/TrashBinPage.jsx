import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import "./TrashBinPage.scss";
import { getLocalStorage, setLocalStorage } from "../../service/localStorage";

const TRASH_KEY = 'trashed-todos';
const TODO_KEY = 'todos';

const TrashBinPage = () => {
  const [trashedTodos, setTrashedTodos] = useState(getLocalStorage(TRASH_KEY, []));
  const [isDeleteConfirmationOpen, setIsDeleteConfirmationOpen] = useState(false);
  const [isRestoreConfirmationOpen, setIsRestoreConfirmationOpen] = useState(false);
  const [isRemoveAllConfirmationOpen, setIsRemoveAllConfirmationOpen] = useState(false);
  const [todoToRestore, setTodoToRestore] = useState(null);
  const [todoToDelete, setTodoToDelete] = useState(null);
  const navigate = useNavigate();

  useEffect(() => {
    setLocalStorage(TRASH_KEY, trashedTodos);
  }, [trashedTodos]);

  const handleRestoreTodo = (todo) => {
    setTodoToRestore(todo);
    setIsRestoreConfirmationOpen(true);
  };

  const handleRestoreConfirmed = () => {
    const todos = getLocalStorage(TODO_KEY, []);
    setLocalStorage(TODO_KEY, [...todos, todoToRestore]);
    setTrashedTodos(trashedTodos.filter(t => t.id !== todoToRestore.id));
    setIsRestoreConfirmationOpen(false);
    setTodoToRestore(null);
  };

  const handleDeleteTodo = (todo) => {
    setTodoToDelete(todo);
    setIsDeleteConfirmationOpen(true);
  };

  const handleDeleteConfirmed = () => {
    setTrashedTodos(trashedTodos.filter(t => t.id !== todoToDelete.id));
    setIsDeleteConfirmationOpen(false);
    setTodoToDelete(null);
  };

  const handleRemoveAllTodos = () => {
    setIsRemoveAllConfirmationOpen(true);
  };

  const handleRemoveAllConfirmed = () => {
    setTrashedTodos([]);
    setIsRemoveAllConfirmationOpen(false);
  };

  const handleCloseConfirmations = () => {
    setIsDeleteConfirmationOpen(false);
    setIsRestoreConfirmationOpen(false);
    setIsRemoveAllConfirmationOpen(false);
    setTodoToRestore(null);
    setTodoToDelete(null);
  };

  return (
    <main id="trash-bin">
      <div className="container">
        <div className="wrapper">
          <h1>Trash Bin</h1>
          <button onClick={handleRemoveAllTodos}>Remove All</button>
        </div>
        <div className="todos">
          {trashedTodos.length === 0 ? (
            <p className="no-todos-message">No todos in trash</p>
          ) : (
            trashedTodos.map((todo) => (
              <div className="todo" key={todo.id}>
                <div className="top-txt">
                  <p>{todo.title}</p>
                </div>
                <textarea readOnly value={todo.text}></textarea>
                <div className="bottom-txt">
                  <p className="date-added">{todo.dateAdded}</p>
                  <div className="buttons">
                    <button className="restore" onClick={() => handleRestoreTodo(todo)}>Restore</button>
                    <button className="delete" onClick={() => handleDeleteTodo(todo)}>Delete Permanently</button>
                  </div>
                </div>
              </div>
            ))
          )}
        </div>
      </div>

      {/* Restore Confirmation Modal */}
      {isRestoreConfirmationOpen && (
        <div className="confirmation-modal" onClick={handleCloseConfirmations}>
          <div className="confirmation-content" onClick={(e) => e.stopPropagation()}>
            <button className="close-btn" onClick={handleCloseConfirmations}>
              &times;
            </button>
            <p>Are you sure you want to restore this todo?</p>
            <div className="confirmation-buttons">
              <button className="confirm" onClick={handleRestoreConfirmed}>Restore</button>
              <button className="cancel" onClick={handleCloseConfirmations}>Cancel</button>
            </div>
          </div>
        </div>
      )}

      {/* Delete Confirmation Modal */}
      {isDeleteConfirmationOpen && (
        <div className="confirmation-modal" onClick={handleCloseConfirmations}>
          <div className="confirmation-content" onClick={(e) => e.stopPropagation()}>
            <button className="close-btn" onClick={handleCloseConfirmations}>
              &times;
            </button>
            <p>Are you sure you want to permanently delete this todo?</p>
            <div className="confirmation-buttons">
              <button className="confirm" onClick={handleDeleteConfirmed}>Delete Permanently</button>
              <button className="cancel" onClick={handleCloseConfirmations}>Cancel</button>
            </div>
          </div>
        </div>
      )}

      {/* Remove All Confirmation Modal */}
      {isRemoveAllConfirmationOpen && (
        <div className="confirmation-modal" onClick={handleCloseConfirmations}>
          <div className="confirmation-content" onClick={(e) => e.stopPropagation()}>
            <button className="close-btn" onClick={handleCloseConfirmations}>
              &times;
            </button>
            {trashedTodos.length === 0 ? (
              <p>There is no todo to delete.</p>
            ) : (
              <>
                <p>Are you sure you want to remove all todos from trash?</p>
                <div className="confirmation-buttons">
                  <button className="confirm" onClick={handleRemoveAllConfirmed}>Remove All</button>
                  <button className="cancel" onClick={handleCloseConfirmations}>Cancel</button>
                </div>
              </>
            )}
          </div>
        </div>
      )}
    </main>
  );
};

export default TrashBinPage;

import Form from './Form';
import React, { useState } from 'react';
import { useCommentsStore } from './store/hooks';

const Comment = ({ id, comment }) => {
  const [isVisibleForm, setIsVisibleForm] = useState(false);
  const [idEditButton, setIdEditButton] = useState();

  const { removeComment } = useCommentsStore();

  const handleCancel = () => {
    setIsVisibleForm((prevValue) => !prevValue);
  };

  const handleDeleteComment = (event) => {
    const id = Number(event.target.dataset.id);
    removeComment(id);
  };

  const toggleElement = (event) => {
    setIdEditButton(Number(event.target.dataset.id));
    setIsVisibleForm((prevValue) => !prevValue);
  };

  const formButtonElement =
    isVisibleForm && Number(idEditButton) === Number(id) ? (
      <>
        <Form callback={toggleElement} id={id} comment={comment} />
        <button onClick={handleCancel}>Cancel</button>
      </>
    ) : (
      <div>
        <button onClick={toggleElement} data-id={id}>
          Edit comment
        </button>
        <button onClick={handleDeleteComment} data-id={id}>
          Delete comment
        </button>
      </div>
    );

  return (
    <li>
      {comment}
      {formButtonElement}
    </li>
  );
};

export default Comment;

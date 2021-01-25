import { useCommentsStore } from './store/hooks';
import { useState } from 'react';

const Form = ({ id, callback, comment = '' }) => {
  const { addComment, editComment } = useCommentsStore();
  const [inputData, setInputData] = useState(comment);

  const handleOnChange = (event) => {
    setInputData(event.target.value);
  };

  const handleOnSubmit = (event) => {
    event.preventDefault();
    const commentObject = {
      id,
      comment: inputData,
    };

    id ? editComment(commentObject) : addComment(commentObject);

    if (id) {
      callback(event);
    }

    setInputData('');
  };

  return (
    <form onSubmit={handleOnSubmit}>
      <label htmlFor="commentInput">
        Write comment:
        <input
          id="commentInput"
          type="text"
          value={inputData}
          onChange={handleOnChange}
        />
      </label>
    </form>
  );
};

export default Form;

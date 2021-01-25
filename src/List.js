import React from 'react';
import Comment from './Comment';
import { observer } from 'mobx-react';
import { useCommentsStore } from './store/hooks';

const List = () => {
  const { comments } = useCommentsStore();

  const commentsElements =
    comments.length === 0
      ? 'No comments'
      : comments.map((comment) => <Comment key={comment.id} {...comment} />);

  return <ul>{commentsElements}</ul>;
};

export default observer(List);

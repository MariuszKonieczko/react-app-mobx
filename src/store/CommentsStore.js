import { action, makeObservable, observable } from 'mobx';

export default class CommentsStore {
  comments = [
    {
      id: 1,
      comment: 'Good book',
    },
    {
      id: 2,
      comment: 'Bad book',
    },
  ];
  constructor(comments) {
    makeObservable(this, {
      comments: observable,
      addComment: action,
      removeComment: action,
      editComment: action,
    });
  }

  addComment = ({ comment }) => {
    const newComment = {
      id: Math.floor(Math.random() * 1234),
      comment,
    };
    this.comments.push(newComment);
  };

  removeComment = (id) => {
    this.comments = this.comments.filter((comment) => comment.id !== id);
  };

  editComment = ({ id, comment }) => {
    this.comments = this.comments.map((currentComment) => {
      if (currentComment.id !== id) return currentComment;

      return {
        id: currentComment.id,
        comment,
      };
    });
  };
}

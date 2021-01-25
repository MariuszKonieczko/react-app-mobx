import CommentsStore from '../store/CommentsStore';

export default class RootStore {
  constructor() {
    this.commentsStore = new CommentsStore();
  }
}

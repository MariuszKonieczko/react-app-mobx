import { useContext } from 'react';
import { StoreContext } from './StoreProvider';

export function useCommentsStore() {
  const rootStore = useContext(StoreContext);

  if (!rootStore) {
    throw new Error(
      'Not found rootStore, check you have got Provider which delivers it'
    );
  }

  return rootStore.commentsStore;
}

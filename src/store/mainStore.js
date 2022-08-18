import create from 'zustand';
import homeStore from './homeStore';

export default create((set, get) => ({
  ...homeStore(set, get),
}));

import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { Asset } from 'react-native-image-picker';

interface MediaState {
  selectedMedia: Asset[];
  currentMediaIndex: number;
}

const initialState: MediaState = {
  selectedMedia: [],
  currentMediaIndex: 0,
};

const mediaSlice = createSlice({
  name: 'media',
  initialState,
  reducers: {
    setSelectedMedia(state, action: PayloadAction<Asset[]>) {
      state.selectedMedia = action.payload;
    },
    addMedia(state, action: PayloadAction<Asset>) {
      const exists = state.selectedMedia.some(item => item.uri === action.payload.uri);
      if (!exists) {
        state.selectedMedia.push(action.payload);
      }
    },
    clearMedia(state) {
      state.selectedMedia = [];
    },
    setCurrentMediaIndex(state, action: PayloadAction<number>) {
      state.currentMediaIndex = action.payload; // ✅ update index
    },
  },
});

export const { setSelectedMedia, addMedia, clearMedia, setCurrentMediaIndex } = mediaSlice.actions;
export default mediaSlice.reducer;

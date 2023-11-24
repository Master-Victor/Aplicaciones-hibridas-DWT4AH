import { createSlice } from '@reduxjs/toolkit';
const counterSlice = createSlice({
  name: 'counter',
  initialState: { value: 0 },
  reducers: {                       //contador de acciones
    increment: state => {           //acciones
      state.value += 1;
    },
    decrement: state => {           //acciones
      state.value -= 1;
    },
  },
});

export const { increment, decrement } = counterSlice.actions; //acciones
export default counterSlice.reducer;
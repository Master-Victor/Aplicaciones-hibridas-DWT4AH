import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import { getProductos } from "../../services/productos.service";

export const fetchProductos = createAsyncThunk(
  "productos/fetchProductos",
  async () => {
    try {
      const response = await getProductos();
      return response;
    } catch (error) {
      return error;
    }
  }
);
export const productosSlice = createSlice({
  name: "productos",
  initialState: {
    items: [],
    loading: false,
    error: null,
  },
  reducers: {}, //los reducers son las acciones sincronicas
  extraReducers: {
    //los extraReducers son las acciones asincronicas
    [fetchProductos.pending]: (state) => {
      state.loading = true;
    },
    [fetchProductos.fulfilled]: (state, action) => {
        state.loading = false;
        state.items = action.payload;
    },
    [fetchProductos.rejected]: (state, action) => {
        state.loading = false;
        state.error = action.payload;
    },
  },
});

export default productosSlice.reducer;

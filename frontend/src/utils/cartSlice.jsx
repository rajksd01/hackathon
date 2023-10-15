import { createSlice } from "@reduxjs/toolkit";

const cartSlice = createSlice({
  name: "cart",
  initialState: {
    cartValue: [],
  },
  reducers: {
    addService: (state, action) => {
      state.cartValue.push(action.payload);
    },
  },
});

export const { addService } = cartSlice.actions;
export default cartSlice.reducer;

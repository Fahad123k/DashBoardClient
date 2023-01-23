import { createSlice } from "@reduxjs/toolkit";
const initialState = {
  data: [],
};

const Api_key=process.env.REACT_APP_API

console.log(Api_key)


const todosSlice = createSlice({
  name: "chartData",
  initialState,
  reducers: {
    storeChartData(state, action) {
      state.data = action.payload;
    },
  },
});

export const { storeChartData } = todosSlice.actions;
export default todosSlice.reducer;

export const fetchChartData = () => async (dispatch) => {
  let response = await fetch(Api_key);
  let data = await response.json();
  console.log("inside data", data.data);
  dispatch(storeChartData(data.data));
};

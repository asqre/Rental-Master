import { createSlice } from "@reduxjs/toolkit";
import { allCars } from "../../admin/data";

const initialState = {
  allCars: [...allCars],
  loading: false,
  error: null,
};

export const carSlice = createSlice({
  name: "car",
  initialState,
  reducers: {
    addCar: (state, action) => {
      state.allCars = [action.payload, ...state.allCars];
    },

    deleteCar: (state, action) => {
      state.allCars = state.allCars.filter(
        (currCar, index) => currCar.key !== action.payload
      );
    },

    updateCar: (state, action) => {
      const car = state.allCars.find((car) => car.id === action.payload.carId);
      if (car) {
        car.carName = action.payload.carName;
        car.carImage = action.payload.carImage;
      }
    },

    fetchCarDataStart: (state, action) => {
      state.loading = true;
      state.error = null;
    },

    fetchCarDataSuccess: (state, action) => {
      state.loading = false;
      state.allCars = action.payload;
    },

    fetchCarDataFailure: (state, action) => {
      state.loading = false;
      state.error = action.payload;
    },
  },
});

export const { addCar, deleteCar, updateCar } = carSlice.actions;
export default carSlice.reducer;

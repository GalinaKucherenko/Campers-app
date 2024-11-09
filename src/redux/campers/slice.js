import { createSlice } from "@reduxjs/toolkit";
import { fetchCampers, fetchCampersById } from "./operations.js";

const campersSlice = createSlice({
    name: 'campers',
    initialState: {
        items: [], //всі оголошення
        selectedCamper: null,  //деталі кемпера
        isLoading: false,
        error: null,
    },
    reducers: {
        clearSelectedCamper: (state) => {
            state.selectedCamper = null;
        }
    },
    extraReducers: (builder) => {
        builder
            //обробка запиту всіх кемперів
            .addCase(fetchCampers.pending, (state) => {
                state.isLoading = true;
                state.error = null;
            })
            .addCase(fetchCampers.fulfilled, (state, action) => {
                state.isLoading = false;
                state.items = action.payload;
            })
            .addCase(fetchCampers.rejected, (state, action) => {
                state.isLoading = false,
                    state.error = action.payload;
            })
            //обробка запиту кемперів за id
            .addCase(fetchCampersById.pending, (state) => {
                state.isLoading = true,
                    state.error = null;
            })
            .addCase(fetchCampersById.fulfilled, (state, action) => {
                state.isLoading = false,
                    state.selectedCamper = action.payload;
            })
            .addCase(fetchCampersById.rejected, (state, action) => {
                state.isLoading = false,
                    state.error = action.payload;
            });
    },
});

export const { clearSelectedCamper } = campersSlice.actions;
export default campersSlice.reducer;
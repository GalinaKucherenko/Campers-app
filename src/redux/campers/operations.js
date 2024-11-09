import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

const baseURL = 'https://66b1f8e71ca8ad33d4f5f63e.mockapi.io/campers';

// Отримуємо всі оголошення
export const fetchCampers = createAsyncThunk(
    'campers/fetchAll',
    async (params, { rejectWithValue }) => {
        try {
            const responce = await axios.get(baseURL, { params });
            return responce.data;
        } catch (error) {
            return rejectWithValue(error.responce.data);
        }
    }
);

// Отримуємо деталі по ID
export const fetchCampersById = createAsyncThunk(
    'campers/fetchById',
    async (id, { rejectWithValue }) => {
        try {
            const responce = await axios.get(`${baseURL}/${id}`);
            return responce.data;
        } catch (error) {
            return rejectWithValue(error.responce.data);            
        }
    }
)

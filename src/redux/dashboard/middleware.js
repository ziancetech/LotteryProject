import { createAsyncThunk } from "@reduxjs/toolkit";
import { fetchCardsAsync } from "./services";
import cardsData  from "../../mock-data/cards-data.json";
import {userData} from "../../mock-data/usercard"
import { hideLoader, showLoader } from "../lem/lemSlice";

export const fetchCardAction = createAsyncThunk(
  "auth/fetchCards",
  async (request, { rejectWithValue, dispatch }) => {
    try {
      dispatch(showLoader({ message: "Loading..........." }));
      const response = await fetchCardsAsync(request);
      if (response?.status === 200) {
        setTimeout(() => {
          dispatch(hideLoader());
        }, 2000);
        return cardsData;
      }
      return rejectWithValue(response);
    } catch (error) {
      setTimeout(() => {
        dispatch(hideLoader());
      }, 2000);
      return rejectWithValue(error);
    }
  }
);

export const cardListAction = createAsyncThunk(
  "auth/fetchdata",
  async (request, { rejectWithValue, dispatch }) => {
    try {
      dispatch(showLoader({ message: "Loading..........." }));
      const response = await fetchCardsAsync(request);
      if (response?.status === 200) {
        setTimeout(() => {
          dispatch(hideLoader());
        }, 2000);
        return userData;
      }
      return rejectWithValue(response);
    } catch (error) {
      setTimeout(() => {
        dispatch(hideLoader());
      }, 2000);
      return rejectWithValue(error);
    }
  }
);


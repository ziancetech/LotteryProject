import { createSlice } from "@reduxjs/toolkit"
import { userData } from "../../mock-data/usercard"
import {
  fetchCardAction,
  cardListAction
} from "./middleware"

const INITIAL_STATE = {
  cardsData: [],
  cardListData: [],
}

const authSlice = createSlice({
  name: "Dashboard",
  initialState: INITIAL_STATE,
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(fetchCardAction.fulfilled, (state, { payload }) => ({
      ...state,
      cardsData: payload
    })) 
    builder.addCase(cardListAction.fulfilled, (state, { payload }) => ({
      ...state,
      cardListData: payload
    })) 
  },
})

export const dashboardSelector = (state) => state?.Dashboard

export default authSlice.reducer
import { createSlice, PayloadAction } from '@reduxjs/toolkit';

import { PlaceLocation, ConsolidatedWeather } from '../../../models';

import WeatherUnits from '../../../models/weather-units';

interface WeatherState {
  unit: WeatherUnits;
  city: string;
  userCity: string;
  location: PlaceLocation;
  weatherToday: ConsolidatedWeather;
  weekWeather: ConsolidatedWeather[];
}

const initialState: WeatherState = {
  unit: WeatherUnits.Celsius,
  city: 'bogotá',
  userCity: '',
  location: null,
  weatherToday: null,
  weekWeather: [],
};

export const weatherSlice = createSlice({
  name: 'weather',
  initialState,
  reducers: {
    setCity: (state, action: PayloadAction<string>) => {
      state.city = action.payload;
    },
    setUserCity: (state, action: PayloadAction<string>) => {
      state.userCity = action.payload;
    },
    setLocation: (state, action: PayloadAction<PlaceLocation>) => {
      state.location = action.payload;
    },
    setTodayWeather: (state, action: PayloadAction<ConsolidatedWeather>) => {
      state.weatherToday = action.payload;
    },
    setWeekWeather: (state, action: PayloadAction<ConsolidatedWeather[]>) => {
      state.weekWeather = action.payload;
    },
    setUnit: (state, action: PayloadAction<WeatherUnits>) => {
      state.unit = action.payload;
    },
  },
});

// Action creators are generated for each case reducer function
export const {
  setCity,
  setUserCity,
  setLocation,
  setTodayWeather,
  setWeekWeather,
  setUnit,
} = weatherSlice.actions;

export default weatherSlice.reducer;

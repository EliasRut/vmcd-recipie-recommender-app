import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { RootState } from '../../app/store';

export interface Recipie {
  ingredients: Array<string>;
  description: string;
}

export interface RecipiesState {
  recipies: {[name: string]: Recipie};
  activeRecipie: string | undefined;
}

const initialState: RecipiesState = {
  recipies: {
    'Kaiserschmarrn': {
      ingredients: ['Eier', 'Mehl', 'Milch', 'Optional: Rosinen'],
      description: 'Alles zusammen mischen, in die Pfanne, anbraten, zerteilen.'
    },
    'Pizza': {
      ingredients: ['Mehl', 'Germ', 'Olivenöl', 'etwas Salz'],
      description: 'Alles zusammen mischen, eine Stunde stehen lassen, aufteilen, fertig.'
    }
  },
  activeRecipie: undefined
};

export const recipiesSlice = createSlice({
  name: 'recipes',
  initialState,
  reducers: {
    createOrUpdateRecipie: (state, action: PayloadAction<{name: string, recipie: Recipie}>) => {
      state.recipies[action.payload.name] = action.payload.recipie;
    },
    setActiveRecipie: (state, action: PayloadAction<string | undefined>) => {
      state.activeRecipie = action.payload;
    },
  },
});

export const { createOrUpdateRecipie, setActiveRecipie } = recipiesSlice.actions;

export const selectRecipies = (state: RootState) => state.recipies.recipies;
export const selectRecipieList = (state: RootState) => Object.keys(state.recipies.recipies);
export const selectActiveRecipieName = (state: RootState) => state.recipies.activeRecipie;
export const selectActiveRecipie = (state: RootState) => state.recipies.activeRecipie ?
  state.recipies.recipies[state.recipies.activeRecipie] :
  undefined;


export default recipiesSlice.reducer;

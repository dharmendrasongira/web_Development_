
import { createSlice } from '@reduxjs/toolkit';

const privacySlice = createSlice({
    name: 'privacy',
    initialState: { privacy: false },
    reducers: {
        togglePrivacy: (state) => { state.privacy = !state.privacy; } // Fix: Toggle `state.privacy`
    }
});
 export const privacyActions=privacySlice.actions;
 export default privacySlice.reducer;
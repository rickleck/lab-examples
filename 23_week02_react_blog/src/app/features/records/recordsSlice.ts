import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { addItem, deleteItem, getAll, updateItem } from './recordsThunks';
import { RecordsState, RecordData } from './recordsTypes';

/**
 *
 */
const initialState: RecordsState = {
    items: [],
    status: 'idle',
};

/**
 *
 */
const recordsSlice = createSlice({
    name: 'records',
    initialState,
    reducers: {},
    extraReducers: (builder) => {
        builder
            .addCase(getAll.pending, handlePending)
            .addCase(
                getAll.fulfilled,
                (state: RecordsState, action: PayloadAction<RecordData[]>) => {
                    state.items = action.payload;
                    state.status = 'idle';
                }
            )
            .addCase(getAll.rejected, handleError)

            /**
             *
             */
            .addCase(addItem.pending, handlePending)
            .addCase(
                addItem.fulfilled,
                (state: RecordsState, action: PayloadAction<RecordData | undefined>) => {
                    action.payload && state.items.push(action.payload);
                    state.items.sort((a: RecordData, b: RecordData) =>
                        a.addedDate > b.addedDate ? -1 : 1
                    );
                    state.status = 'idle';
                }
            )
            .addCase(addItem.rejected, handleError)

            /**
             *
             */
            .addCase(updateItem.pending, handlePending)
            .addCase(
                updateItem.fulfilled,
                (state: RecordsState, action: PayloadAction<RecordData | undefined>) => {
                    action.payload &&
                        (state.items = state.items.map((item: RecordData) =>
                            item.id === action.payload!.id ? action.payload! : item
                        ));
                    state.status = 'idle';
                }
            )
            .addCase(updateItem.rejected, handleError)

            /**
             *
             */
            .addCase(deleteItem.pending, handlePending)
            .addCase(deleteItem.fulfilled, (state: RecordsState, action: PayloadAction<string>) => {
                state.items = state.items.filter((item: RecordData) => item.id !== action.payload);
                state.status = 'idle';
            })
            .addCase(deleteItem.rejected, handleError);
    },
});

/**
 *
 */
function handlePending(state: RecordsState): void {
    state.status = 'loading';
}

/**
 *
 */
function handleError(state: RecordsState, action: PayloadAction<unknown>): void {
    const error: Error = (action as any).error;
    state.status = 'error';
    state.errorMsg = error.message;
}

export default recordsSlice.reducer;

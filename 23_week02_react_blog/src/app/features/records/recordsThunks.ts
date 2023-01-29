import { createAsyncThunk } from '@reduxjs/toolkit';
import { recordsFireStoreClient as client } from './recordsFirestoreClient';
import { RecordCreateData, RecordData, RecordUpdateData } from './recordsTypes';

/**
 *
 */
const getAll = createAsyncThunk('records/getAll', async (): Promise<RecordData[]> => {
    return await client().getAll();
});

/**
 *
 */
const addItem = createAsyncThunk(
    'records/addItem',
    async (itemData: RecordCreateData): Promise<RecordData | undefined> => {
        return await client().addItem(itemData);
    }
);

/**
 *
 */
const deleteItem = createAsyncThunk('records/deleteItem', async (id: string): Promise<string> => {
    return await client().deleteItem(id);
});

/**
 *
 */
const updateItem = createAsyncThunk(
    'records/updateItem',
    async ({
        id,
        itemData,
    }: {
        id: string;
        itemData: RecordUpdateData;
    }): Promise<RecordData | undefined> => {
        return await client().updateItem(id, itemData);
    }
);

export { getAll, addItem, deleteItem, updateItem };

import { USER_LOCAL_STORAGE_KEY } from 'shared/const/localStorage';
import { createAsyncThunk } from '@reduxjs/toolkit';
import { User, userActions } from 'entity/User';
import { ThunkConfig } from "app/providers/StoreProvider";

interface LoginByUsernameProp {
    username: string;
    password: string;
}

export const loginByUsername = createAsyncThunk<
    User,
    LoginByUsernameProp,
    ThunkConfig<string>
>('login/loginByUsername', async (authData, thunkAPI) => {
    const { dispatch, extra, rejectWithValue } = thunkAPI;

    try {
        const response = await extra.api.post<User>('/login', authData);
        if (!response.data) {
            throw new Error();
        }

        localStorage.setItem(USER_LOCAL_STORAGE_KEY, JSON.stringify(response.data));
        dispatch(userActions.setUserData(response.data));
        return response.data;
    } catch (e) {
        return rejectWithValue('error');
    }
});

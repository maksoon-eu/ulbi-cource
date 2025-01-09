import { DeepPartial } from '@reduxjs/toolkit';
import { StateSchema } from 'app/providers/StoreProvider';
import { getLoginPassword } from './getLoginPassword';

describe('getLoginPassword.test', () => {
    test('should return 1212323', () => {
        const state: DeepPartial<StateSchema> = {
            loginForm: {
                password: '1212323',
            },
        };

        expect(getLoginPassword(state as StateSchema)).toEqual('1212323');
    });

    test('should work with empty state', () => {
        const state: DeepPartial<StateSchema> = {};

        expect(getLoginPassword(state as StateSchema)).toEqual('');
    });
});

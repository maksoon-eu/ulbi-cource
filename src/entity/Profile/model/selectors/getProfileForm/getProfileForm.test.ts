import { StateSchema } from 'app/providers/StoreProvider';
import { getProfileForm } from './getProfileForm';
import { Country } from "entity/Country";
import { Currency } from "entity/Currency";

describe('getProfileForm.test', () => {
    test('should return data', () => {
        const data = {
            username: 'admin',
            age: 22,
            country: Country.Russia,
            lastname: 'admin',
            first: 'admin',
            city: 'Moscow',
            currency: Currency.RUB,
        }

        const state: DeepPartial<StateSchema> = {
            profile: {
                form: data
            },
        };

        expect(getProfileForm(state as StateSchema)).toEqual(data);
    });

    test('should work with empty state', () => {
        const state: DeepPartial<StateSchema> = {};

        expect(getProfileForm(state as StateSchema)).toEqual(undefined);
    });
});

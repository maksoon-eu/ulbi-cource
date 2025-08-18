import { StateSchema } from 'app/providers/StoreProvider';
import { getProfileData } from './getProfileData';
import { Country } from "entity/Country";
import { Currency } from "entity/Currency";

describe('getProfileData.test', () => {
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
                data
            },
        };

        expect(getProfileData(state as StateSchema)).toEqual(data);
    });

    test('should work with empty state', () => {
        const state: DeepPartial<StateSchema> = {};

        expect(getProfileData(state as StateSchema)).toEqual(undefined);
    });
});

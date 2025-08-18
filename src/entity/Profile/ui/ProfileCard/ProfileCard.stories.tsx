import type { Meta, StoryObj } from '@storybook/react';
import { Currency } from 'entity/Currency';
import { ProfileCard } from './ProfileCard';
import { Country } from 'entity/Country';
import avatar from 'shared/assets/test/storybook.jpg';

const meta: Meta<typeof ProfileCard> = {
    title: 'entities/ProfileCard',
    component: ProfileCard,
    parameters: {
        layout: 'centered',
    },
    tags: ['autodocs'],
};

export default meta;
type Story = StoryObj<typeof ProfileCard>;

export const Primary: Story = {
    args: {
        data: {
            username: 'admin',
            age: 22,
            country: Country.Russia,
            lastname: 'admin',
            first: 'admin',
            city: 'Moscow',
            currency: Currency.RUB,
            avatar: avatar,
        },
    },
};

export const withError: Story = {
    args: {
        error: 'error',
    },
};

export const Loading: Story = {
    args: {
        isLoading: true,
    },
};

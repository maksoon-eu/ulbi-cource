// .storybook/preview.js
import React from 'react';
import { StyleDecorator } from '../../src/shared/config/storybook/StyleDecorator/StyleDecorator';
import { ThemeDecorator } from '../../src/shared/config/storybook/ThemeDecorator/ThemeDecorator';
import { Theme } from '../../src/app/providers/ThemeProvider';
import { RouteDecorator } from '../../src/shared/config/storybook/RouteDecorator/RouteDecorator';
import { StoreProvider } from '../../src/app/providers/StoreProvider';

export const parameters = {
    actions: { argTypesRegex: '^on[A-Z].*' },
    controls: {
        matchers: {
            color: /(background|color)$/i,
            date: /Date$/,
        },
    },
};

const withStoreProvider = (Story) => (
    <StoreProvider>
        <Story />
    </StoreProvider>
);

export const decorators = [
    StyleDecorator,
    ThemeDecorator(Theme.LIGHT),
    RouteDecorator,
    withStoreProvider,
];

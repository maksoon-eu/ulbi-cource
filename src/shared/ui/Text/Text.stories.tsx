import type { Meta, StoryObj } from '@storybook/react';

import { Text, TextTheme } from './Text';
import { ThemeDecorator } from 'shared/config/storybook/ThemeDecorator/ThemeDecorator';
import { Theme } from 'app/providers/ThemeProvider';

const meta: Meta<typeof Text> = {
    title: 'shared/Text',
    component: Text,
    parameters: {
        layout: 'centered',
    },
    tags: ['autodocs'],
};

export default meta;
type Story = StoryObj<typeof Text>;

export const Primary: Story = {
    args: {
        title: 'Title lorem ipsum',
        text: 'Text lorem ipsum',
    },
};

export const Error: Story = {
    args: {
        title: 'Title error lorem ipsum',
        text: 'Text error lorem ipsum',
        theme: TextTheme.ERROR
    },
};

export const onlyTitle: Story = {
    args: {
        title: 'Title lorem ipsum',
    },
};

export const onlyText: Story = {
    args: {
        text: 'Text lorem ipsum',
    },
};

export const PrimaryDark: Story = {
    args: {
        title: 'Title lorem ipsum',
        text: 'Text lorem ipsum',
    },
    decorators: [ThemeDecorator(Theme.DARK)],
};

export const onlyTitleDark: Story = {
    args: {
        title: 'Title lorem ipsum',
    },
    decorators: [ThemeDecorator(Theme.DARK)],
};

export const onlyTextDark: Story = {
    args: {
        text: 'Text lorem ipsum',
    },
    decorators: [ThemeDecorator(Theme.DARK)],
};

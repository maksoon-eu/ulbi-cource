import { lazy } from 'react';

export const ProfilePageAsync = lazy(
    () =>
        new Promise((resolve) => {
            // @ts-expect-error: kdk
            // ТАК В РЕАЛЬНЫХ ПРОЕКТАХ НЕ ДЕЛАТЬ!!!!! ДЕЛАЕМ ДЛЯ КУРСА!
            setTimeout(() => resolve(import('./ProfilePage')), 1500);
        })
);

import { routeConfig } from 'shared/config/routeConfig/routeConfig';
import { PageLoader } from 'shared/ui/PageLoader/PageLoader';
import React, { memo, Suspense, useMemo } from 'react';
import { Route, Routes } from 'react-router-dom';
import { getUserAuthData } from 'entity/User';
import { useSelector } from 'react-redux';

const AppRouter = () => {
    const isAuth = useSelector(getUserAuthData);

    const routes = useMemo(() => {
        return Object.values(routeConfig).filter((route) => {
            if (route.authOnly && !isAuth) {
                return false;
            }
            return true;
        });
    }, [isAuth]);

    return (
        <Routes>
            {routes.map(({ element, path }) => (
                <Route
                    key={path}
                    path={path}
                    element={
                        <Suspense fallback={<PageLoader />}>
                            <div className="page-wrapper">{element}</div>
                        </Suspense>
                    }
                />
            ))}
        </Routes>
    );
};

export default memo(AppRouter);

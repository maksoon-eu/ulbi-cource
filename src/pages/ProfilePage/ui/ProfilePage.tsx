import DynamicModuleLoader, {
    ReducerList,
} from 'shared/lib/components/DynamicModuleLoader/DynamicModuleLoader';
import { useAppDispatch } from 'shared/lib/hooks/useAppDispatch/useAppDispatch';
import { fetchProfileData, ProfileCard, profileReducer } from 'entity/Profile';
import { useTranslation } from 'react-i18next';
import { useEffect } from 'react';

const reducers: ReducerList = {
    profile: profileReducer,
};

const ProfilePage = () => {
    const { t } = useTranslation();
    const dispatch = useAppDispatch();

    useEffect(() => {
        dispatch(fetchProfileData());
    }, [dispatch]);

    return (
        <DynamicModuleLoader reducers={reducers} removeAfterUnmount>
            <div>
                <ProfileCard />
            </div>
        </DynamicModuleLoader>
    );
};

export default ProfilePage;

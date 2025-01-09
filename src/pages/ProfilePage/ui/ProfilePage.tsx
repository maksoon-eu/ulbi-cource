import DynamicModuleLoader, {
    ReducerList,
} from 'shared/lib/components/DynamicModuleLoader/DynamicModuleLoader';
import { profileReducer } from 'entity/Profile';
import { useTranslation } from 'react-i18next';

const reducers: ReducerList = {
    profile: profileReducer,
};

const ProfilePage = () => {
    const { t } = useTranslation();

    return (
        <DynamicModuleLoader reducers={reducers} removeAfterUnmount>
            <div>{t('Профиль')}</div>
        </DynamicModuleLoader>
    );
};

export default ProfilePage;

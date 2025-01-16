import { getProfileIsLoading } from 'entity/Profile/model/selectors/getProfileIsLoading/getProfileIsLoading';
import { getProfileError } from 'entity/Profile/model/selectors/getProfileError/getProfileError';
import { getProfileData } from 'entity/Profile/model/selectors/getProfileData/getProfileData';
import { classNames } from 'shared/lib/classNames/classNames';
import { useSelector } from 'react-redux';

import { Button, ButtonTheme } from 'shared/ui/Button/Button';
import { useTranslation } from 'react-i18next';
import { Input } from 'shared/ui/Input/Input';
import cls from './ProfileCard.module.scss';
import { Text } from 'shared/ui/Text/Text';

interface ProfileCardProps {
    className?: string;
}

export const ProfileCard = ({ className }: ProfileCardProps) => {
    const data = useSelector(getProfileData);
    const isLoading = useSelector(getProfileIsLoading);
    const error = useSelector(getProfileError);

    const { t } = useTranslation();

    return (
        <div className={classNames(cls.ProfileCard, {}, [className])}>
            <div className={cls.header}>
                <Text title={t('Профиль')} />
                <Button className={cls.editBtn} theme={ButtonTheme.OUTLINE}>
                    {t('Редактировать')}
                </Button>
            </div>
            <div className={cls.data}>
                <Input value={data?.first} placeholder={t('Ваше имя')} className={cls.input} />
                <Input
                    value={data?.lastname}
                    placeholder={t('Ваша фамилия')}
                    className={cls.input}
                />
            </div>
        </div>
    );
};

import { classNames } from 'shared/lib/classNames/classNames';
import { Button } from 'shared/ui/Button/Button';
import { useTranslation } from 'react-i18next';
import { Input } from 'shared/ui/Input/Input';
import cls from './LoginForm.module.scss';

interface LoginFormProps {
    className?: string;
}

export const LoginForm = (props: LoginFormProps) => {
    const {
        className,
    } = props;

    const { t } = useTranslation();

    return (
        <div className={classNames(cls.LoginForm, {}, [className])}>
            <Input
                type="text"
                className={cls.input}
                placeholder={t('Введите текст')}
                autofocus
            />
            <Input
                type="text"
                className={cls.input}
                placeholder={t('Введите текст')}
            />
            <Button
                className={cls.loginBtn}
                placeholder={t('Введите текст')}
            >
                {t('Войти')}
            </Button>
        </div>
    );
};

import { classNames } from 'shared/lib/classNames/classNames';
import { Button, ButtonTheme } from 'shared/ui/Button/Button';
import { useTranslation } from 'react-i18next';
import { Input } from 'shared/ui/Input/Input';
import { useDispatch, useSelector } from 'react-redux';
import { memo, useCallback } from 'react';
import { loginByUsername } from '../../model/services/loginByUsername/loginByUsername';
import { loginActions, loginReducer } from '../../model/slice/loginSlice';
import { Text, TextTheme } from 'shared/ui/Text/Text';
import { getLoginUsername } from '../../model/selectors/getLoginUsername/getLoginUsername';
import { getLoginPassword } from '../../model/selectors/getLoginPassword/getLoginPassword';
import { getLoginIsLoading } from '../../model/selectors/getLoginIsLoading/getLoginIsLoading';
import { getLoginError } from '../../model/selectors/getLoginError/getLoginError';
import cls from './LoginForm.module.scss';
import DynamicModuleLoader, {
    ReducerList,
} from 'shared/lib/components/DynamicModuleLoader/DynamicModuleLoader';

export interface LoginFormProps {
    className?: string;
}

const initialReducers: ReducerList = {
    loginForm: loginReducer,
};

const LoginForm = memo((props: LoginFormProps) => {
    const { className } = props;

    const { t } = useTranslation();

    const dispatch = useDispatch();
    const username = useSelector(getLoginUsername);
    const password = useSelector(getLoginPassword);
    const isLoading = useSelector(getLoginIsLoading);
    const error = useSelector(getLoginError);

    const onChangeUsername = useCallback(
        (value: string) => {
            dispatch(loginActions.setUsername(value));
        },
        [dispatch]
    );

    const onChangePassword = useCallback(
        (value: string) => {
            dispatch(loginActions.setPassword(value));
        },
        [dispatch]
    );

    const onLoginClick = useCallback(() => {
        dispatch(loginByUsername({ username, password }));
    }, [dispatch, password, username]);

    return (
        <DynamicModuleLoader reducers={initialReducers} removeAfterUnmount>
            <div className={classNames(cls.LoginForm, {}, [className])}>
                <Text title={t('Форма авторизации')} />
                {error && (
                    <Text text={t('Вы ввели неверный логин или пароль')} theme={TextTheme.ERROR} />
                )}
                <Input
                    type="text"
                    className={cls.input}
                    placeholder={t('Введите логин')}
                    autofocus
                    onChange={onChangeUsername}
                    value={username}
                />
                <Input
                    type="text"
                    className={cls.input}
                    placeholder={t('Введите пароль')}
                    onChange={onChangePassword}
                    value={password}
                />
                <Button
                    theme={ButtonTheme.OUTLINE}
                    className={cls.loginBtn}
                    placeholder={t('Войти')}
                    onClick={onLoginClick}
                    disabled={isLoading}>
                    {t('Войти')}
                </Button>
            </div>
        </DynamicModuleLoader>
    );
});

export default LoginForm;

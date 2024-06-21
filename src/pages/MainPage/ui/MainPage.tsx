import { Counter } from 'entity/Counter';
import { useState } from 'react';
import { useTranslation } from 'react-i18next';
import { Input } from 'shared/ui/Input/Input';

const MainPage = () => {
    const { t } = useTranslation();

    const [value, setValue] = useState('');

    const onChange = (value: string) => {
        setValue(value);
    };

    return (
        <div>
            {t('Главная страница')}
            <Input placeholder="Введите текст" value={value} onChange={onChange} />
            <Counter />
        </div>
    );
};

export default MainPage;

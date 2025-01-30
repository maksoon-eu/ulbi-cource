import { classNames } from 'shared/lib/classNames/classNames';
import { Country } from '../../model/types/country';
import { Select } from 'shared/ui/Select/Select';
import { useTranslation } from 'react-i18next';
import { memo, useCallback } from "react";

interface CountrySelectProps {
    className?: string;
    value?: Country;
    readonly?: boolean;
    onChange?: (value: Country) => void;
}

const option = [
    { value: Country.Russia, content: Country.Russia },
    { value: Country.USA, content: Country.USA },
];

export const CountrySelect = memo((props: CountrySelectProps) => {
    const { className, value, onChange, readonly } = props;

    const { t } = useTranslation();

    const onChangeHandler = useCallback((value: string) => {
        onChange?.(value as Country)
    }, [onChange])

    return (
        <Select
            className={classNames('', {}, [className])}
            label={t('Укажите страну')}
            options={option}
            value={value}
            onChange={onChangeHandler}
            readonly={readonly}
        />
    );
});

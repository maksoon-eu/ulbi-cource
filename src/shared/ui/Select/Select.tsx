import { classNames, Mods } from 'shared/lib/classNames/classNames';
import { ChangeEvent, memo, useMemo } from 'react';

import cls from './Select.module.scss';

export interface SelectOption {
    value: string;
    content: string;
}

interface SelectProps {
    className?: string;
    label?: string;
    options?: SelectOption[];
    value?: string;
    readonly?: boolean;
    onChange?: (value: string) => void;
}

export const Select = memo((props: SelectProps) => {
    const { className, label, options, value, onChange, readonly } = props;

    const mods: Mods = {};

    const onChangeHandler = (e: ChangeEvent<HTMLSelectElement>) => {
        if (onChange) {
            onChange(e.target.value);
        }
    };

    const optionList = useMemo(() => {
        return options?.map((opt) => {
            return (
                <option className={cls.option} value={opt.value} key={opt.value}>
                    {opt.content}
                </option>
            );
        });
    }, [options]);

    return (
        <div className={classNames(cls.Wrapper, mods, [className])}>
            {label && <span className={cls.label}>{`${label}>`}</span>}
            <select disabled={readonly} className={cls.select} value={value} onChange={onChangeHandler}>
                {optionList}
            </select>
        </div>
    );
});

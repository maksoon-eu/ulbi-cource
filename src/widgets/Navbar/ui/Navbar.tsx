import AppLink, { AppLinkTheme } from "shared/ui/AppLink/AppLink";
import { classNames } from "shared/lib/classNames/classNames";
import cls from './Navbar.module.scss';

interface NavbarProps {
    className?: string;
}

export const Navbar = ({className}: NavbarProps) => {

    return (
        <div className={classNames(cls.navbar, {}, [className])}>
            <div className={cls.links}>
                <AppLink theme={AppLinkTheme.SECONDARY} to='/' className={cls.mainLink}>
                    MainPage
                </AppLink>
                <AppLink theme={AppLinkTheme.SECONDARY} to='/about' className={cls.mainLink}>
                    AboutPage
                </AppLink>
            </div>
        </div>
    )
}
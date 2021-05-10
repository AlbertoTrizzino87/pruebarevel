import { useEffect, useState } from 'react';
import Link from 'next/link';

const Header = (): JSX.Element => {
    const [isSticky, setSticky] = useState(false);
    
    const handleScroll = () => {
        const offset=window.scrollY;
        setSticky(offset > 5);
    };

    useEffect(() => {
        window.addEventListener('scroll', handleScroll);

        return () => {
            window.removeEventListener('scroll', () => handleScroll);
        };
    }, []);

    const headerClass = (isSticky) ? 'header header--sticky' : 'header';

    return(
        <header className={headerClass}>
            <Link href="/">
                <a className='header__logo'>CoolPics</a>
            </Link>
        </header>
    )
}

export default Header;
import { url } from 'inspector';
import React, { ReactNode } from 'react';
import Navbar from '../Navbar/Navbar';

interface IProps {
    backgroundImage?: string;
    type: 'lg' | 'md';
    ClassName?: string;
    children?: ReactNode;
}

const Header: React.FC<IProps> = ({
    backgroundImage = 'https://s3-alpha-sig.figma.com/img/b4fc/9aa5/b8fdade6f9ec44c609c97b08cea0b08d?Expires=1724630400&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=WdVWBjepX9Z4OhEDHorR3DcittVEIEBY~GQ-F8Hv5w77-o8ysD4M5Behvxh6UVMjJ-TXa6t-~P~8B57IWGv0rUrMArEcTrwdLsU4dFt0I45ri1jjq2aXEHAE-eXpCA~LmlAFmmeN3cPF7R~twSaHyU2m4TU~iEXytAkjGjdS0DBBGsyOlasBxFj~a5BIrY2pApq-C-hZagbDYCqGQOsuxgnNamEThdJgUA3PLo7YnGUwNVKIbMEzST7jtxddaEWfcTPxyBiz-PLA04OIRaXqTFow6Xv00qpK58uZLATEyEwudWBzM3BTQdk7Z9zmBjVgVn66UGYESm2eiDr8CkwEaQ__',
    type,
    ClassName,
    children,
}) => {
    return (
        <header
            className={` w-full 
            bg-cover bg-center bg-no-repeat ${ClassName}`}
            style={{
                background: `linear-gradient(rgba(0, 0, 0, 0.6),rgba(0, 0, 0, 0.6)), url(${backgroundImage})`,
                backgroundSize: 'cover',
                backgroundPosition: 'bottom',
                backgroundRepeat: 'no-repeat',
                height: type == 'lg' ? '100vh' : '55vh',
                backgroundAttachment: 'fixed',
            }}
        >
            {children}
        </header>
    );
};

export default Header;


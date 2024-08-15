type ButtonProps = {
    children: string;
    type?: 'outline' | 'primary';
    isLink?: boolean;
    href?: string;
    className?: string;
    onClick?: () => void;
} & ({ isLink: true; href: string } | { isLink?: false; href?: never });

export default ButtonProps;

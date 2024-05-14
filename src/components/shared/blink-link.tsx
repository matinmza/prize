import { FC, PropsWithChildren } from "react";
import { Link } from "react-router-dom";

const BlinkLink: FC<
    PropsWithChildren<{
        to: string;
        className?: string;
        disabled: boolean;
    }>
> = ({ to, children, className, disabled }) => {
    const local = to[0] === "/";

    if (disabled) return <div className={className}>{children}</div>;
    if (local)
        return (
            <Link className={className} to={to}>
                {children}
            </Link>
        );
    return (
        <a
            href={to}
            target="_blank"
            className={className}
            rel="noopener noreferrer"
        >
            {children}
        </a>
    );
};

export default BlinkLink;

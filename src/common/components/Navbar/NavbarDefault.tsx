
import React from 'react'
import {
    Navbar as MTNavbar,
    Collapse,
    Typography,
    Button,
    IconButton,
} from "@material-tailwind/react";
import { useIsMobileScreen } from '@/common/hooks/useIsMobile';

interface Props {
    NavList?: any
    NavButton?: any
}

export const NavbarDefault = ({ NavList, NavButton, ...props }: Props) => {
    const [openNav, setOpenNav] = React.useState(false);


    const handleWindowResize = () =>
        window.innerWidth >= 960 && setOpenNav(false);

    React.useEffect(() => {
        window.addEventListener("resize", handleWindowResize);

        return () => {
            window.removeEventListener("resize", handleWindowResize);
        };
    }, []);

    return (
        <MTNavbar className="sticky top-0 z-10 h-max max-w-full rounded-none px-4 py-2 lg:px-8 lg:py-4 bg-blue-500 shadow-md">
            <div className="flex items-center justify-between text-blue-gray-900">
                <Typography
                    as="a"
                    href="/"
                    className="mr-4 cursor-pointer py-1.5 font-medium text-white"
                >
                    DEMO Streaming
                </Typography>
                <div className="flex items-center gap-4">
                    <NavList />
                    {!useIsMobileScreen() && (
                        <NavButton />
                    )}
                    <IconButton
                        variant="text"
                        className="ml-auto h-6 w-6 text-inherit hover:bg-transparent focus:bg-transparent active:bg-transparent lg:hidden"
                        ripple={false}
                        onClick={() => setOpenNav(!openNav)}
                    >
                        {openNav ? (
                            <svg
                                xmlns="http://www.w3.org/2000/svg"
                                fill="none"
                                className="h-6 w-6"
                                viewBox="0 0 24 24"
                                stroke="currentColor"
                                strokeWidth={2}
                            >
                                <path
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                    d="M6 18L18 6M6 6l12 12"
                                />
                            </svg>
                        ) : (
                            <svg
                                xmlns="http://www.w3.org/2000/svg"
                                className="h-6 w-6"
                                fill="none"
                                stroke="currentColor"
                                strokeWidth={2}
                            >
                                <path
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                    d="M4 6h16M4 12h16M4 18h16"
                                />
                            </svg>
                        )}
                    </IconButton>
                </div>
            </div>
            <Collapse open={openNav}>
                <NavList />
                <NavButton />
            </Collapse>
        </MTNavbar>
    )
}

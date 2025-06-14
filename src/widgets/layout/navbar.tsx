import {
    Button,
} from "@material-tailwind/react";
import { NavbarDefault } from '@/common/components/Navbar/NavbarDefault';
import { ButtonDefault } from "@/common/components/Button/ButtonDefault";

interface Props {

}
function NavList() {
    return (
        <ul className="my-2 flex flex-col gap-2 lg:mb-0 lg:mt-0 lg:flex-row lg:items-center lg:gap-6">

        </ul>
    );
}
function NavButton() {
    return (
        <div className="flex items-center gap-x-1">
            <ButtonDefault
                variant="text"
                size="sm"
                type="submit"
                className="inline-block"
            ><span>Log In</span></ButtonDefault>
            <ButtonDefault
                variant="text"
                size="sm"
                type="submit"
                className="inline-block"
            ><span>Sign in</span></ButtonDefault>
        </div>
    );
}
export default function Navbar({ }: Props) {
    return (
        <div>
            <NavbarDefault NavList={NavList} NavButton={NavButton} />
        </div>
    )
}

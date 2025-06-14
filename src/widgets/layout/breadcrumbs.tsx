import { Breadcrumbs as MTBreadcrumbs } from "@material-tailwind/react";
import { ArrowLongRightIcon } from "@heroicons/react/24/outline";
interface Props {
  current_page?: string;
}
export default function Breadcrumbs({ current_page }: Props) {
  return (
    <div className="">
      <div className="container mx-auto">
        <MTBreadcrumbs
          separator="/"
          className="bg-transparent p-2 w-full"
        >
          <a href="/" className="opacity-60 white">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-4 w-4"
              viewBox="0 0 20 20"
              fill="currentColor"
            >
              <path d="M10.707 2.293a1 1 0 00-1.414 0l-7 7a1 1 0 001.414 1.414L4 10.414V17a1 1 0 001 1h2a1 1 0 001-1v-2a1 1 0 011-1h2a1 1 0 011 1v2a1 1 0 001 1h2a1 1 0 001-1v-6.586l.293.293a1 1 0 001.414-1.414l-7-7z" />
            </svg>
          </a>
          <a href="#" className="">{current_page}</a>
        </MTBreadcrumbs>
      </div>

    </div>

  );
}

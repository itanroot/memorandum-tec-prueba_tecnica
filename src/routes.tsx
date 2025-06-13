import {
  HiHome,
  HiCircleStack,
  HiClipboardDocumentList,
  HiMapPin,
  HiArchiveBox,
  HiSquare3Stack3D,
  HiArrowRightOnRectangle,
} from 'react-icons/hi2'
import {
  ArrowsRightLeftIcon,
  ClipboardDocumentListIcon,
  ClipboardDocumentCheckIcon,
  ViewColumnsIcon,
} from '@heroicons/react/24/solid'
import Dashboard from '@/pages/dashboard'
import Series from '@/pages/series'

const icon = {
  className: 'w-5 h-5',
}

export const routes = [
  {
    layout: 'home',
    name: 'Home',
    pages: [
      {
        isVisible: false,
        icon: <HiHome {...icon} />,
        name: 'home',
        path: '/',
        element: <Dashboard />,
        parent: 0,
        subPages: [],
      },
    ],
  },
  {
    layout: 'series',
    name: 'Series',
    pages: [
      {
        isVisible: false,
        icon: <HiHome {...icon} />,
        name: 'series',
        path: '/',
        element: <Series />,
        parent: 0,
        subPages: [],
      },
    ],
  },
]

export default routes

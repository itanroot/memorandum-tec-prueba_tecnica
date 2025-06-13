import Breadcrumbs from "@/widgets/layout/breadcrumbs"
import { Footer } from "@/widgets/layout/footer"
import Navbar from "@/widgets/layout/navbar"
import routes from '@/routes'
import { Routes, Route } from 'react-router-dom'
interface DashboardProps {
  layout?: string
}

export function Dashboard({ layout }: DashboardProps) {
  let _layout = layout

  return (
    <div className="min-h-screen bg-primary-50 ">
      <Navbar />
      <Breadcrumbs current_page={layout}/>
      <Routes>
        {routes.map(
          ({ layout, pages }) =>
            layout == _layout &&
            pages.map(({ path, element, subPages }) => {
              return <Route path={path} element={element} />
            })
        )}
      </Routes>
      <Footer />
    </div>
  )
}

export default Dashboard

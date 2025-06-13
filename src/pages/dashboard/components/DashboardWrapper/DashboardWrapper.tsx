import DashboardHeader from '../DashboardHeader'
import DashboardContainer from '../DashboardContainer'

interface DashboardWrapperProps {}

export default function DashboardWrapper({ ...props }: DashboardWrapperProps) {
  return (
    <>
      <DashboardHeader />
      <DashboardContainer />
    </>
  )
}

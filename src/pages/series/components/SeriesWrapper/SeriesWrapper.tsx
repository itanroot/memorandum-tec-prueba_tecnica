import SeriesHeader from '../SeriesHeader'
import SeriesContainer from '../SeriesContainer'

interface SeriesWrapperProps {}

export default function SeriesWrapper({ ...props }: SeriesWrapperProps) {
  return (
    <>
      <SeriesHeader />
      <SeriesContainer />
    </>
  )
}

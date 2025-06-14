import MoviesHeader from '../MoviesHeader'
import MoviesContainer from '../MoviesContainer'

interface MoviesWrapperProps {}

export default function MoviesWrapper({ ...props }: MoviesWrapperProps) {
  return (
    <>
      <MoviesHeader />
      <MoviesContainer />
    </>
  )
}

import { useEffect, useState } from 'react'
import { useAppDispatch, useAppSelector } from '@/store/hooks'
import { fetchContent } from '@services/contentSlice'
import CardDefault from '@/widgets/card/carddefault'
import Loading from '@/common/components/Loading/Loading'
import Error from '@/common/components/Error/Error'
import {
  Button,
  Dialog,
  DialogHeader,
  DialogBody,
  DialogFooter,
} from "@material-tailwind/react";
import { DialogDefault } from '@/widgets/modal/dialogdefault'


export default function SeriesContainer() {
  const dispatch = useAppDispatch()
  const { data, loading, error } = useAppSelector(state => state.content)
  const [selectedItem, setSelectedItem] = useState(null)
  const [showModal, setShowModal] = useState(false)

  useEffect(() => {
    dispatch(fetchContent())
  }, [dispatch])
  /* 
  Mostrar sólo si contienen el atributo releaseYear >= 2010
  Mostrar los primeros 20 resultados (entries). No es necesario paginar para ver más resultados.
  Para la página de "Series" usar resultados con programType igual a series
  */
  const filtered = data
    .filter((item: any) => item.programType === 'series' && item.releaseYear >= 2010)
    .slice(0, 20)

  if (loading) return <Loading />
  if (error) return <Error />


  const handleOpenModal = (item: any) => {
    setSelectedItem(item)
    setShowModal(true)
  }

  const handleCloseModal = () => {
    setShowModal(false)
    setSelectedItem(null)
  }


  return (
    <div className="container flex flex-col items-center justify-center mx-auto">
      <div className=" grid grid-cols-1 md:grid-cols-4 lg:grid-cols-4 xl:grid-cols-7 gap-4">

        {filtered.map((item: any) => (
          <CardDefault
            key={item?.title}
            title={item?.title}
            img={<img
              src={item?.images?.["Poster Art"]?.url ?? '/images/placeholder.png'}
              alt="card-image"
              className='object-contain w-full h-full rounded-lg'
            />}
            handleClick={() => handleOpenModal(item)}
          />
        ))}
      </div>
      <DialogDefault open={showModal} onClose={handleCloseModal} item={selectedItem} />
    </div>

  )
}

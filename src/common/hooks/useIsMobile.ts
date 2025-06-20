import { useEffect, useState } from 'react';
export const useIsMobileScreen = (maxWidth = 768) => {
  const [isMobile, setIsMobile] = useState<boolean>(window.innerWidth <= maxWidth)
  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth <= maxWidth)
    }
    window.addEventListener('resize', handleResize)
    return () => window.removeEventListener('resize', handleResize)
  }, [maxWidth])
  return isMobile
}

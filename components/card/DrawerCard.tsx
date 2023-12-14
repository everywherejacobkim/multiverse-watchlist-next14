import Image from 'next/image';
import { AnimeProp } from './AnimeCard';

const DrawerCard = (anime: AnimeProp) => {
  
  return (
      <div style={{ position: 'relative', width: '450px', height: '570px' }}>
        <Image
          src={`https://shikimori.one${anime?.anime?.image?.original}`}
          alt={anime?.name}
          layout="fill"
          objectFit="cover"
        />
      </div>
  )
}

export default DrawerCard
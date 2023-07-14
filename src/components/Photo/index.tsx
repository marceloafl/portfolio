import Image from 'next/image';
import * as S from './style';

export default function Photo(){
  return(
    <S.PhotoWrapper>
      <Image
        alt='Marcelo Lemes'
        src={'/images/marcelo.jpg'}
        fill={true}
      />
    </S.PhotoWrapper>
  )
}
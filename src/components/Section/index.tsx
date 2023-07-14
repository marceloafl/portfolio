import React from 'react';
import * as S from './styles';
import { kaiseiDecol, openSans } from '../../theme/styles/font';

interface PropsSection {
  children: React.ReactNode,
  title?: string,
}

export default function BaseSection({ children, title }: PropsSection){
  return (
    <S.Section>
      <S.Title style={openSans.style}>{title}</S.Title>
      {children}
    </S.Section>
  )
}
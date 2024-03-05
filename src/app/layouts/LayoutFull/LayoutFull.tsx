import React, { FC, PropsWithChildren } from 'react';
import { LayoutFullWrapper } from './LayoutFull.styled';
import LayoutBase from '../LayoutBase/LayoutBase';

interface LayoutFullProps extends PropsWithChildren{}

const LayoutFull: FC<LayoutFullProps> = ({children}) => (
 <LayoutBase>
   <LayoutFullWrapper>
      {children}
   </LayoutFullWrapper>
 </LayoutBase>
);

export default LayoutFull;

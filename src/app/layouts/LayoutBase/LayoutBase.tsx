import { FC, PropsWithChildren, memo } from 'react';
import { LayoutBaseWrapper } from './LayoutBase.styled';

import './LayoutBase.css';

/*
interface LayoutBaseProps {
   chidlren:ReactNode | undefined
} 
*/
interface LayoutBaseProps extends PropsWithChildren{}

const LayoutBase: FC<LayoutBaseProps> = ({children}) => (
 <LayoutBaseWrapper>
    { children }
 </LayoutBaseWrapper>
);

export default LayoutBase;

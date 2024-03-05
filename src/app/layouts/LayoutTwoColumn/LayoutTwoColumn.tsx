import { FC, PropsWithChildren } from 'react';
import { LayoutTwoColumnWrapper } from './LayoutTwoColumn.styled';
import LayoutBase from '../LayoutBase/LayoutBase';

interface LayoutTwoColumnProps extends PropsWithChildren { }

const LayoutTwoColumn: FC<LayoutTwoColumnProps> = ({ children }) => (
   <LayoutBase>
      <LayoutTwoColumnWrapper>
         <aside></aside>
         <main></main>
         {children}
      </LayoutTwoColumnWrapper>
   </LayoutBase>
);

export default LayoutTwoColumn;

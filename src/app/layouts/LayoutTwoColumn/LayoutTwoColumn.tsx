import { Children, FC, PropsWithChildren, ReactNode } from 'react';
import { LayoutTwoColumnWrapper } from './LayoutTwoColumn.styled';
import LayoutBase from '../LayoutBase/LayoutBase';

interface LayoutTwoColumnProps  extends PropsWithChildren{ 
   // children:typeof ContentAside | typeof ContentMain | Array<typeof ContentAside | typeof ContentMain >
   // children: FC<PropsWithChildren> |  FC<PropsWithChildren>[]
}

const LayoutTwoColumn: FC<LayoutTwoColumnProps> = ({ children }) => {

   const contentAside = Children.toArray(children).find( c => c.type === ContentAside)?.props.children
   const contentMain = Children.toArray(children).find( c => c.type === ContentMain)?.props.children
   return (
      <LayoutBase>
         <LayoutTwoColumnWrapper> 
            <aside>
               { contentAside }
            </aside>
            <main>
                { contentMain }
            </main>
            {/* children */}
         </LayoutTwoColumnWrapper>
      </LayoutBase>
   )
};

export const ContentAside: FC<PropsWithChildren> = () => false;
export const ContentMain: FC<PropsWithChildren> = () => false;

export default LayoutTwoColumn;

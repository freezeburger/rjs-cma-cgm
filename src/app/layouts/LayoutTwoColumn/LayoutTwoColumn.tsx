import { Children, FC, JSX} from 'react';
import { LayoutTwoColumnWrapper } from './LayoutTwoColumn.styled';
import LayoutBase from '../LayoutBase/LayoutBase';

interface SlotProps{}

interface LayoutTwoColumnProps{ 
   children:JSX.Element | JSX.Element[]
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

export const ContentAside: FC<SlotProps> = () => false;
export const ContentMain: FC<SlotProps> = () => false;

export default LayoutTwoColumn;

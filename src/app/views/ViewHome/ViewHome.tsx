import { FC } from 'react';
import { LayoutTwoColumn } from '../../layouts';

interface ViewHomeProps {}

const ViewHome: FC<ViewHomeProps> = () => (
  <div data-testid="ViewHome">
    <LayoutTwoColumn>
      ViewHome Component
    </LayoutTwoColumn>
  </div>
);

export default ViewHome;

import { FC } from 'react';
import { ContentAside, ContentMain, LayoutTwoColumn } from '../../layouts';
import FeatUser from '../../features/FeatUser/FeatUser.lazy';

interface ViewHomeProps {}


const ViewHome: FC<ViewHomeProps> = () => (
  <div data-testid="ViewHome">

    <LayoutTwoColumn>
      <ContentAside>
        <FeatUser />
      </ContentAside>
      <ContentMain>
        MAIN
      </ContentMain>
    </LayoutTwoColumn>

  </div>
);

export default ViewHome;

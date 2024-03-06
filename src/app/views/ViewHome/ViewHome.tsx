/**
 * This page
 */
import { FC } from 'react';
import { ContentAside, ContentMain, LayoutTwoColumn } from '../../layouts';
import FeatUser from '../../features/FeatUser/FeatUser.lazy';
import FeatUserCount from '../../features/FeatUser/FeatUserCount';

interface ViewHomeProps {}

const ViewHome: FC<ViewHomeProps> = () => (
  <div data-testid="ViewHome">

    <LayoutTwoColumn>
      <ContentAside>

        <FeatUser />

      </ContentAside>
      <ContentMain>

        <FeatUserCount></FeatUserCount>
        
        MAIN
      </ContentMain>
    </LayoutTwoColumn>

  </div>
);

export default ViewHome;

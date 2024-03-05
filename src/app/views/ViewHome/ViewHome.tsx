import { FC } from 'react';
import { ContentAside, ContentMain, LayoutTwoColumn } from '../../layouts';

interface ViewHomeProps {}


const ViewHome: FC<ViewHomeProps> = () => (
  <div data-testid="ViewHome">

    <LayoutTwoColumn>
      <ContentAside>
        ASIDE
      </ContentAside>
      <ContentMain>
        MAIN
      </ContentMain>
    </LayoutTwoColumn>

  </div>
);

export default ViewHome;

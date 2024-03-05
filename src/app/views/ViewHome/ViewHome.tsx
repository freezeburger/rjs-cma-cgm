import { FC } from 'react';
import { ContentAside, ContentMain, LayoutTwoColumn } from '../../layouts';
import { BaseButton, ButtonError, ButtonPrimary, ButtonSuccess } from '../../components';

interface ViewHomeProps {}

const ViewHome: FC<ViewHomeProps> = () => (
  <div data-testid="ViewHome">

    <LayoutTwoColumn>
      <ContentAside>ASIDE</ContentAside>
      <ContentMain>MAIN

        <BaseButton>CLICK</BaseButton>
        
        <ButtonError>CLICK</ButtonError>
        <ButtonSuccess>CLICK</ButtonSuccess>
        <ButtonPrimary>CLICK</ButtonPrimary>

      </ContentMain>
    </LayoutTwoColumn>

  </div>
);

export default ViewHome;

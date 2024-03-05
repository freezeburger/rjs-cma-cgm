import { memo } from 'react';
import styled from 'styled-components';

export const LayoutBaseWrapper = memo(styled.div`
    width:100%;
    height: 100vh;
    display: flex;
`);
LayoutBaseWrapper.displayName = 'LayoutBaseWrapper'

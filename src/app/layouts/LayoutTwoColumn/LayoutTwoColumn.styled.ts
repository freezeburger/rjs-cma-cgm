import styled from 'styled-components';

export const LayoutTwoColumnWrapper = styled.div`
    display: flex;
    flex-direction: row;
    height: 100vh;

    &>aside{
        display: block;
        border:1px blue solid;
        height: 100vh;
        width: 20vw;
    }

    &>main{
        display: block;
        border:3px green solid;
        height: 100vh;
        width: 80vw;
    }
`;

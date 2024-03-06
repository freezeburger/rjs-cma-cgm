import styled from 'styled-components';

export const LayoutTwoColumnWrapper = styled.div`
    display: flex;
    flex-direction: row;
    height: 100vh;

    &>aside{
        display: block;
        border:1px blue solid;
        height: 100vh;
        width: 30vw;
        padding:10px;
    }

    &>main{
        display: block;
        border:3px green solid;
        height: 100vh;
        width: 70vw;
        padding:10px;
    }
`;

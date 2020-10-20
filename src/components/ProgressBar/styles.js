import styled from 'styled-components';

export const Container = styled.div`
  margin-bottom: 24px;
  
`

export const TotalProgress = styled.div`
    width: 100%;
    height: 12px;
    background: rgba(0, 0, 0, 0.08);
    border-radius: 5px;
    display: block
`

export const NowProgress = styled.div`
    width: ${props => props.barWidth}%;
    height: 12px;
    border-radius: 5px 15px 15px 5px;
    background: #ff8822;
    display: flex;
    align-items: center;
    justify-content: center;
    text-transform: none;
`
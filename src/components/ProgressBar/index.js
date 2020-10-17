import React, {useState, useEffect} from 'react';

import { 
    Container,
    TotalProgress,
    NowProgress

 } from './styles';

function ProgressBar(props) {
  const [bar, setBar] = useState(0)  

  useEffect(()=> {
    setBar(props.passo)
  }, [])

  useEffect(()=>{
    switch(props.passo){
        case 1:  setBar(34); break;
        case 2:  setBar(66); break;
        case 3:  setBar(100); break;
        default: break;
    }
  }, [props.passo])

  return (
    <Container>
        <TotalProgress>
            <NowProgress 
                barWidth={bar}
            />
        </TotalProgress>
    </Container>
 );
}

export default ProgressBar;
import React from 'react'
import Icon1 from '../../images/programming.svg'
import Icon3 from '../../images/seo.svg'
import Icon2 from '../../images/webdesign.svg'
import {ServicesContainer,
  ServicesH1,
  ServicesWrapper,
  ServicesCard,
  ServicesIcon,
  ServicesH2,
  ServicesP,
} from './ServicesElements'

const Services = () => {
    return (
        <ServicesContainer id="services">
        <ServicesH1>Our Services</ServicesH1>
         <ServicesWrapper>
          <ServicesCard>
           <ServicesIcon src={Icon1}></ServicesIcon>
            <ServicesH2>Special Offers</ServicesH2>
             <ServicesP>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Doloribus et ipsam vero, vel similique delectus, inventore ad error ex, dolorem qui eius saepe odio ipsum. Est incidunt nemo similique nobis.
             </ServicesP>
          </ServicesCard>
          <ServicesCard>
           <ServicesIcon src={Icon2}></ServicesIcon>
            <ServicesH2>Our New Service</ServicesH2>
             <ServicesP>Ut sint obcaecati praesentium perspiciatis laborum deserunt. Ea vitae quia corporis mollitia. Est incidunt nemo similique nobis. Lorem ipsum dolor sit, amet consectetur adipisicing elit. 
             </ServicesP>
          </ServicesCard>
          <ServicesCard>
           <ServicesIcon src={Icon3}></ServicesIcon>
            <ServicesH2>Great Package</ServicesH2>
             <ServicesP>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Doloribus et ipsam vero, vel similique delectus, inventore ad error ex, dolorem qui eius saepe odio ipsum. Est incidunt nemo similique nobis.
             </ServicesP>
           </ServicesCard>
         </ServicesWrapper>
        </ServicesContainer>
    )
}

export default Services

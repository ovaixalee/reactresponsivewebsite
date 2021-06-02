import React, {useState} from 'react'
import Video from '../../videos/video.mp4'
import {Button} from '../ButtonElements'
import {HeroContainer, HeroBg, VideoBg, HeroContent, HeroH1, HeroP, HeroBtnWrapper, ArrowForward, ArrowRight} from './HeroElements'

const HeroSection = () => {
    const [hover, setHover] = useState(false)

    const onHover = () => {
        setHover(!hover)
    }
    return (
        <HeroContainer>
            <HeroBg>
            <VideoBg autoPlay muted loop src={Video} type='video.mp4' />
            </HeroBg>
            <HeroContent>
                <HeroH1>Create You Application Fast</HeroH1>
                <HeroP>
                It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout.
                </HeroP>
                <HeroBtnWrapper>
                    <Button to='signup' onMouseEnter={onHover}
                    onMouseLeave={onHover}
                    primary='true'
                    dark='true'>
                    Get Started {hover ? <ArrowForward/> : <ArrowRight/>}
                    </Button>
                </HeroBtnWrapper>
            </HeroContent>
        </HeroContainer>
    )
}

export default HeroSection

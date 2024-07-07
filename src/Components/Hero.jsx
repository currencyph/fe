import { useState, useEffect } from 'react';
import styled from 'styled-components';
import Lottie from 'lottie-react';
import cryptoAnim from '../assets/cryptoAnim.json'; // Replace with the path to your Lottie animation file

const Container = styled.div`
    background: linear-gradient(100deg, rgba(22,14,117,1) 0%, rgba(109,0,207,1) 100%);
    width: 100vw;
    height: 94vh;

    position: relative;
    overflow: hidden;
    padding-top: 60px; /* Adjust according to your navbar height */
    
    @media (min-width: 768px) {
        padding-top: 0; /* Reset padding for larger screens */
    }
`;

const Wrapper = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
height: 80%;
    padding: 20px;

    @media (min-width: 768px) {
        flex-direction: row;
        max-width: 76%;
        margin: 0 auto;
    }
`;

const Left = styled.div`
    flex: 1;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    text-align: center;
    padding: 20px;

    @media (min-width: 768px) {
        align-items: flex-start;
        text-align: left;
    }
`;

const Header = styled.h1`
  font-size: 50px;
  color: white;
  font-weight: bold;
  margin-bottom: 2px;
  line-height: 1.2;

  @media (max-width: 375px) {
    font-size: 30px;
    padding-top: 40px;
  }

  @media (min-width: 376px) and (max-width: 768px) {
    font-size: 39px;
  }

  @media (min-width: 769px) {
    font-size: 44px; /* Larger font size for larger screens */
  }
`;

const Desc = styled.p`
    color: white;
    font-size: 1rem;
    margin-bottom: 10px;

    @media (min-width: 768px) {
        font-size: 1.2rem;
        width: 70%;
            margin-bottom: 10px;
    }
`;

const TimerBox = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    background-color: #271287;
    border-radius: 10px;
    padding: 20px;
    color: white;
    margin-bottom: 5px;
    width: 100%;

    @media (min-width: 768px) {
        width: auto;
                    margin-bottom: 10px;
    }
    @media (min-width: 350px) and (max-width: 500px) {
        
                    margin-bottom: 20px;
    }
`;

const Timer = styled.div`
    font-size: 2rem;
    color: #f56354;
    margin: 5px 0;
    letter-spacing: 2px;
`;

const Button = styled.button`
    background-color: #f56354;
    color: white;
    border-radius: 20px;
    padding: 15px 20px;
    border: none;
    font-weight: bold;
    cursor: pointer;
    transition: background-color 0.3s;
    z-index: 100;

    &:hover {
        background-color: #d95247;
    }
`;

const Right = styled.div`
    flex: 1;
    display: flex;
    justify-content: center;
    align-items: center;
    padding: 20px;

    @media (min-width: 768px) {
        justify-content: flex-end;
    }
`;

const Image = styled(Lottie)`
    width: 100%;
    max-width: 500px;
    height: auto;
    object-fit: contain;
`;

const WaveSVG = styled.svg`
    position: absolute;
    bottom: 0;
    left: 0;
    width: 100%;
    fill: #e7008a;
`;

const Hero = () => {
    const calculateTimeLeft = () => {
        const difference = +new Date('2024-07-15T00:00:00') - +new Date();
        let timeLeft = {};

        if (difference > 0) {
            timeLeft = {
                days: Math.floor(difference / (1000 * 60 * 60 * 24)),
                hours: Math.floor((difference % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)),
                minutes: Math.floor((difference % (1000 * 60 * 60)) / (1000 * 60)),
                seconds: Math.floor((difference % (1000 * 60)) / 1000)
            };
        }

        return timeLeft;
    };

    const [timeLeft, setTimeLeft] = useState(calculateTimeLeft());

    useEffect(() => {
        const timer = setInterval(() => {
            setTimeLeft(calculateTimeLeft());
        }, 1000);

        return () => clearInterval(timer);
    }, []);

    return (
        <Container>
            <Wrapper>
                <Left>
                    <Header>
                        Discover a Billion Dollar Digital Asset Industry In The Philippines
                        <br />
                        Currency.ph
                    </Header>
                    <Desc>
                        {/* Uncomment this section if you want to include the description */}
                        {/* <p style={{ fontSize: '19px', fontWeight: 'bold', marginBottom: '10px' }}>Built on Base</p>
                        Base is built on Ethereum and offers a secure network for transferring digital assets on the blockchain. */}
                    </Desc>
                    <TimerBox>
                        <span style={{ fontSize: '1.25rem' }}>Token Sale Ends In...</span>
                        <Timer>
                            {timeLeft.days} :{timeLeft.hours}:{timeLeft.minutes}:{timeLeft.seconds}
                        </Timer>
                    </TimerBox>
                    <Button> <a target='_blank' style={{ color: 'white', textDecoration: 'none' }} href="https://app.uniswap.org/explore/tokens/base/0x3fa755a4843a6a0cde45809396009987f0f71216">Buy Our Token Sale On UniSwap</a></Button>

                </Left>
                <Right>
                    <Image animationData={cryptoAnim} loop={false} />
                </Right>
            </Wrapper>
            <WaveSVG xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320">
                <path fill="white" fillOpacity="1.5" d="M0,224L60,224C120,224,240,224,360,213.3C480,203,600,181,720,197.3C840,213,960,267,1080,240C1200,213,1320,107,1380,53.3L1440,0L1440,320L1380,320C1320,320,1200,320,1080,320C960,320,840,320,720,320C600,320,480,320,360,320C240,320,120,320,60,320L0,320Z"></path>
            </WaveSVG>
        </Container>
    );
};

export default Hero;

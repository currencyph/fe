import styled from 'styled-components';

const Container = styled.div`
  width: 100vw;
  height: auto;
  background-color: #fbf8ff;
`;

const Wrapper = styled.div`
  padding: 10px;
  display: flex;
  flex-wrap: wrap;
  flex-direction: column;
  margin: 0 auto;
  width: 100%;
  max-width: 75%;
  gap: 30px;
`;

const ImageWrapper = styled.div`
  padding: 10px;
  display: flex;
  flex-wrap: wrap;
  margin: 0 auto;
  width: 100%;
  max-width: 100%;
  gap: 30px;
  justify-content: center;

  @media (max-width: 768px) {
    gap: 20px;
  }

  @media (max-width: 480px) {
    gap: 15px;
    justify-content: center;
  }
`;

const Header = styled.h1`
  text-align: center;
  font-size: 40px;
  color: black;
  font-weight: bold;

  @media (max-width: 768px) {
    font-size: 32px;
  }

  @media (max-width: 480px) {
    font-size: 28px;
  }
`;

const Span = styled.span`
  color: #6a01cc;
  font-weight: bold;
`;

const ImageBox = styled.div`
  height: 150px;
  width: 250px;
  max-width: 500px;
  padding: 4px;
  border-radius: 15px;
  overflow: hidden;
  position: relative;
  display: flex;
  align-items: center;
  justify-content: center;
  background: #c587ff;

  @media (max-width: 768px) {
    width: 45%;
  }

  @media (max-width: 480px) {
    width: 100%;
  }
`;

const Image = styled.img`
  width: 100%;
  height: 100%;
  object-fit: cover;
`;
const NationwideBrands = () => {

    return (
        <Container>

            <Wrapper>
                <Header style={{ marginTop: '40px' }}>
                    Nationwide Brands That Accept<Span> Ethereum Philippines</Span>
                </Header>
                <ImageWrapper className='ImageWrapper'>
                    <ImageBox className='ImageBox'>
                        <Image className='Image' src='https://i.ibb.co/4SYvcBm/philips-news.jpg' />
                    </ImageBox>
                    <ImageBox className='ImageBox'>
                        <Image className='Image' src='https://i.ibb.co/mJ6KHvz/silyaus.jpg' />
                    </ImageBox>
                    <ImageBox className='ImageBox'>
                        <Image className='Image' src='https://i.ibb.co/Fmqr0Jb/birdsnew.jpg' />
                    </ImageBox>
                </ImageWrapper>





                <Header>
                    <Span>  International</Span>
                </Header>

                <ImageWrapper className='ImageWrapper'>
                    <ImageBox className='ImageBox'>
                        <Image className='Image' src='https://i.ibb.co/n0Tyjkc/healths.jpg' />
                    </ImageBox>




                </ImageWrapper>


                <Header>
                    <Span>Coming Soon</Span>
                </Header>
                <ImageWrapper className='ImageWrapper'>
                    <ImageBox className='ImageBox'>
                        <Image className='Image' src="https://i.ibb.co/s9tHKmK/christ.webp" style={{ filter: 'grayscale(100%)', backgroundColor: '#000' }} />
                    </ImageBox>
                    <ImageBox className='ImageBox'>
                        <Image className='Image' src="https://i.ibb.co/gy8sp74/solar.webp" style={{ filter: 'grayscale(100%)', backgroundColor: '#000' }} />
                    </ImageBox>
                    <ImageBox className='ImageBox'>
                        <Image src="https://i.ibb.co/hWszSBN/data.webp" style={{ filter: 'grayscale(100%)', backgroundColor: '#000' }} />
                    </ImageBox>
                    <ImageBox className='ImageBox'>
                        <Image className='Image' src="https://i.ibb.co/F7Kz928/spirit.webp" style={{ filter: 'grayscale(100%)', backgroundColor: '#000' }} />
                    </ImageBox  >
                    <ImageBox className='ImageBox'>
                        <Image className='Image' src="https://i.ibb.co/HYF0JCw/coffee.webp" style={{ filter: 'grayscale(100%)', backgroundColor: '#000' }} />
                    </ImageBox>
                    <ImageBox className='ImageBox'>
                        <Image className='Image' src="https://i.ibb.co/84pHSBS/coco.jpg" style={{ filter: 'grayscale(100%)', backgroundColor: '#000' }} />
                    </ImageBox>
                </ImageWrapper>

            </Wrapper>
        </Container >
    );
};

export default NationwideBrands;

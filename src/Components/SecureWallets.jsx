import styled from 'styled-components';
import ph from '../assets/ph.png';

const Container = styled.div`
  width: 100vw;
  height: 50vh;
  margin-top: 30px;
`;

const Wrapper = styled.div`
  padding: 10px;
  display: flex;
  flex-wrap: wrap;
  margin: 0 auto;
  width: 100%;
  max-width: 75%;
  gap: 30px;
  align-items: center;
  justify-content: center;
  height: 100%;

  @media (max-width: 768px) {
    flex-direction: column;
    gap: 20px;
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
    font-size: 29px;
    margin: 0 10px;
  }
`;

const Span = styled.span`
  color: #6a01cc;
  font-weight: bold;
`;

const ImageBox = styled.div`
  width: 400px;

  @media (max-width: 768px) {
    width: 300px;
  }

  @media (max-width: 480px) {
    width: 100%;
  }
`;

const Image = styled.img`
  width: 100%;
  object-fit: cover;
`;

const SecureWallets = () => {
  return (
    <Container>
      <Header>Download Trusted and <Span>Secure Wallets</Span></Header>
      <Wrapper>
        <ImageBox>
          <Image src='https://logosarchive.com/wp-content/uploads/2022/02/Metamask-logo.svg' />
        </ImageBox>
        <ImageBox>
          <Image src={ph} />
        </ImageBox>
      </Wrapper>
    </Container>
  );
};

export default SecureWallets;

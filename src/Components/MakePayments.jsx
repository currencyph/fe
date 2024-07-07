import styled from "styled-components";

import gcash from '../assets/gcash.png'
// import coins from '../assets/coins.png'
import coins from '../assets/coinsNew.webp'
import blob from '../assets/blob.svg'

const Container = styled.div`
  width: 100vw;
  height: auto;
  min-height: 120vh;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  padding-top: 10vh;

  @media (max-width: 768px) {
    padding-top: 10vh;
  }
`;

const Wrapper = styled.div`
  display: flex;
  margin: 0 auto;
  width: 100%;
  max-width: 75%;
  gap: 30px;

  @media (max-width: 768px) {
    flex-direction: column;
    align-items: center;
    gap: 50px;
    padding-top: 20px;
  }
`;

const Header = styled.h1`
  text-align: center;
  font-size: 40px;
  color: black;
  font-weight: bold;

    @media (max-width: 768px) {
     font-size: 24px;
  
  }
`;

const Span = styled.span`
  color: #6a01cc;
  font-weight: bold;
`;

const Left = styled.div`
  flex: 1;
  display: flex;
  flex-direction: column;
  align-items: center;
  
`;

const FormImg = styled.img`
  width: 70px;
  height: 70px;
  align-self: center;
  object-fit: cover;
  margin: 0 auto;
`;

const FormBoxImage = styled.img`
  width: 100%;
  animation: move 3s ease infinite alternate;

  @keyframes move {
    from {
      transform: translateY(-15px);
    }
    to {
      transform: translateY(0px) scale(1.03);
    }
  }
`;

const FormBox = styled.div`
  width: 100%;
  max-width: 400px;
  border: none;
  border-radius: 10px;
  margin: 0 auto;
  display: flex;
  flex-direction: column;
  align-items: center;
 
  background-size: cover;
`;

const Label = styled.label`
  font-size: 16px;
  margin-top: 10px;
`;

const StyledInput = styled.input`
  width: 80%;
  padding: 15px 8px;
  margin: 5px 0;
  background-color: transparent;
  border: 1px solid #d1a3fc;
  border-radius: 8px;
`;

const SubBtn = styled.button`
  background-color: #6a01cc;
  color: white;
  border: none;
  font-weight: bold;
  padding: 14px 20px;
  border-radius: 13px;
  align-self: center;
  margin-bottom: 10px;
`;

const Right = styled.div`
  flex: 1;
  display: flex;
  flex-direction: column;
  height: 100vh;

  @media (max-width: 768px) {
    height: auto;
  }
`;

const Image = styled.img`
  width: 100%;
  height: 600px;
  object-fit: contain;
  animation: move 3s ease infinite alternate;

  @keyframes move {
    from {
      transform: translateY(-15px);
    }
    to {
      transform: translateY(0px) scale(1.03);
    }
  }

  @media (max-width: 768px) {
    height: auto;
    max-height: 300px;
  }
`;

const MakePayments = () => {
  return (
    <Container>
      <div style={{ textAlign: 'center', margin: '20px 0' }}>
        <FormImg src={gcash} />
        <Header>Make Payments Using <Span>GCASH</Span> </Header>
      </div>

      <Wrapper>
        <Left>
          {/* <FormBoxImage src={blob} /> */}

          <FormBox>
            <Label style={{ alignSelf: 'flex-start', marginTop: '20px' }}>Full Name</Label>
            <StyledInput placeholder="First Name" />

            <Label style={{ alignSelf: 'flex-start' }}>Last Name</Label>
            <StyledInput placeholder="Last Name" />

            <Label style={{ alignSelf: 'flex-start' }}>Email</Label>
            <StyledInput placeholder="Email" />

            <Label style={{ alignSelf: 'flex-start' }}>Phone</Label>
            <StyledInput placeholder="Phone" />

            <Label style={{ alignSelf: 'flex-start' }}>Recipient Wallet Address</Label>
            <StyledInput placeholder="Wallet Address (ie. 0x5931d84905cfe25C2C8DEA3177dBf7A36a6355d)" />

            <Label style={{ alignSelf: 'flex-start' }}>Payment Amount (PHP)</Label>
            <StyledInput placeholder="0.00" />

            <p style={{ textAlign: 'center', marginTop: '20px' }}>Use our rate calculator to calculate estimated market prices.</p>

            <SubBtn style={{ width: '100%', marginTop: '20px' }}>Buy Ethereum Philippines</SubBtn>
          </FormBox>
        </Left>

        <Right>
          <Image src={coins} />
        </Right>
      </Wrapper>
    </Container>
  );
}

export default MakePayments;

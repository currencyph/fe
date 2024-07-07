import styled from "styled-components";
import blobred from '../assets/blobred.svg';
// import coinimage from '../assets/footer.png';
import coinimage from '../assets/newBtcCoin.svg';

import { useNavigate } from "react-router-dom";

const Container = styled.div`
  width: 100vw;
  height: auto;
`;

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  margin: 0 auto;
  width: 100%;
  height: auto;
  max-width: 75%;
  gap: 30px;
  
  @media (min-width: 768px) {
    flex-direction: row;
    height: 76vh;
  }
`;

const Header = styled.h1`
  text-align: center;
  font-size: 32px;
  color: black;
  font-weight: bold;
  margin-top: 20px;
  
  @media (min-width: 768px) {
    font-size: 40px;
    margin-top: 40px;
  }
`;

const Left = styled.div`
  flex: 1;
  display: flex;
  flex-direction: column;
  align-items: center;
  height: auto;
`;

const FormBoxImage = styled.img`
  position: relative;
  width: 100%;
  top: 0;
  left: 0;
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
    display: none;
  }
`;

const FormBox = styled.div`
  width: 100%;
  height: auto;
  border: none;
  border-radius: 10px;
  margin: 0 auto;
  display: flex;
  align-self: center;
  justify-content: center;
  background: url('../assets/blob.svg') no-repeat center center;
  background-size: cover;
  position: absolute;
  flex-direction: column;

  @media (max-width: 768px) {
    position: static;
    background: none;
  }
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
  border: 2px solid #fc322b67;
  border-radius: 8px;
`;

const SubBtn = styled.button`
  background-color: #fc322b;
  color: white;
  border: none;
  font-weight: bold;
  padding: 14px 20px;
  border-radius: 13px;
  align-self: center;
  margin-bottom: 10px;
  @media (max-width: 768px) {
margin-bottom: 82px;
  }
  &:hover {
    cursor: pointer;
  }
`;

const Right = styled.div`
  flex: 1;
  display: flex;
  flex-direction: column;
`;

const Image = styled.img`
  width: 100%;
  height: auto;
  object-fit: contain;
  position: relative;
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

const LowerFooterBox = styled.div`
padding-top: 20px;
  width: 100%;
  background-color: black;
  height: auto;
  display: flex;
  align-items: center;
`;

const LowerFooter = styled.div`
  display: flex;
  margin: 0 auto;
  flex-direction: column;
  max-width: 75%;
  gap: 30px;
  
  @media (max-width: 768px) {
    padding: 20px;
    max-width: 100%;
  }
`;

const FooterContent = styled.p`
  line-height: 30px;
  letter-spacing: 1px;
  font-size: 18px;
  color: white;
  padding: 20px;
  border-radius: 20px;
   @media (max-width: 768px) {
    font-size: 12px;
      line-height: 25px;
      padding: 10px;
  }
`;

const LastHeader = styled.h4`
padding-bottom: 40px;
@media (max-width: 768px) {
    font-size: 15px;
    padding-bottom: 20px;
  }
  &:hover {
    cursor: pointer;
  }
`;

const Footer = () => {
  const navigate = useNavigate();

  return (
    <Container>
      <div style={{ textAlign: 'center', margin: '20px 0' }}>
        <Header>Currency.ph</Header>
      </div>
      <Wrapper>
        <Right>
          <Image src={coinimage} />
        </Right>
        <Left>
          <FormBoxImage src={blobred} />
          <FormBox style={{ width: '100%', maxWidth: '400px', display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
            <Label style={{ alignSelf: 'flex-start', marginTop: '20px' }}>Full Name</Label>
            <StyledInput style={{ width: '100%' }} placeholder="Full Name" />
            <Label style={{ alignSelf: 'flex-start' }}>Email</Label>
            <StyledInput style={{ width: '100%' }} placeholder="Email*" />
            <Label style={{ alignSelf: 'flex-start' }}>Recipient Wallet Address (optional)</Label>
            <StyledInput style={{ width: '100%' }} placeholder="Wallet Address (ie. 0x5931d84905cfe25C2C8DEA3177dBf7A36a6355d)" />
            <p style={{ textAlign: 'center', marginTop: '20px', color: '#514eb6', fontWeight: 'bold' }}>
              Get 0.001 - 1 Ethereum Philippines token. Available for a short period of time. Payments are verified using Base network. www.basescan.org.
            </p>
            <SubBtn style={{ width: '100%', marginTop: '20px' }}>Subscribe To The Currency Community Newsletter</SubBtn>
          </FormBox>
        </Left>
      </Wrapper>
      <LowerFooterBox>
        <LowerFooter>
          <FooterContent>
            <span style={{ fontWeight: 'bold ' }}>Financial Advice Disclaimer</span><br />
            The Site does not provide tax, legal, or investment advice. Nothing on the Site constitutes professional and/or financial advice, nor does any information on the Site constitute a comprehensive or complete statement of the matters discussed or the law relating thereto. You should not rely on the information provided as a substitute for professional advice, including but not limited to financial, investment, tax, or legal advice. Always seek the advice of a qualified financial advisor or other professional with any questions you may have regarding your personal finances or investments. By using our website you must adhere to our terms and conditions and privacy policy.
          </FooterContent>
          <p style={{ textAlign: 'center', color: 'white' }}> &copy; Copyright. All rights reserved</p>
          <hr />
          <p style={{ color: 'white', textAlign: 'center' }}>noreply@currency.ph. This email is able to receive incoming messages.</p>
          <div style={{ display: 'flex', justifyContent: 'space-between', width: '50vw', color: 'white', alignSelf: 'center', fontSize: '30px' }}>
            <LastHeader onClick={() => navigate('/terms-and-conditions')}>Terms and Conditions</LastHeader>
            <LastHeader onClick={() => navigate('/privacy-policy')}>Privacy Policy</LastHeader>
          </div>
        </LowerFooter>
      </LowerFooterBox>
    </Container>
  );
};

export default Footer;

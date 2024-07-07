import styled, { keyframes } from "styled-components";

const Container = styled.div`
  width: 100vw;
  min-height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;

  padding: 5px;
  @media (max-width: 768px) {

  padding: 0;
   
  }
`;

const Wrapper = styled.div`
  display: flex;
  width: 100%;
  max-width: 1200px;
  gap: 20px; /* Adjusted gap for better spacing */
  background-color: white; /* Added background color for better contrast */
  border-radius: 10px;
  overflow: hidden; /* Ensure children don't overflow */
  box-shadow: 0 0 10px rgba(0, 0, 0, 0.1); /* Added a subtle box shadow */


  @media (max-width: 960px) {
    flex-direction: column; /* Stack columns vertically on smaller screens */
   
  }
`;

const Left = styled.div`
  flex: 1;
  padding: 20px;
   @media (min-width: 960px) {
    max-width: 35vw; /* Stack columns vertically on smaller screens */
  }
`;

const TextBox = styled.div`
gap: 20px;
display: flex;
flex-direction: column;
  padding: 20px;
  background: linear-gradient(100deg, rgba(22, 14, 117, 1) 0%, rgba(109, 0, 207, 1) 100%);
  color: white;
  border-radius: 20px;
  line-height: 1.5;
  word-wrap: break-word; /* Ensures long words or URLs break and wrap */
  overflow-wrap: break-word; /* Ensures long words or URLs break and wrap */
`;

const Right = styled.div`
  flex: 1;
  padding: 20px;
`;

const TextBox2 = styled.div`
  padding: 20px;
  background-color: #f5f5f5;
  border-radius: 10px;
  line-height: 1.5;
`;

const FormBox = styled.div`
  background-color: #ffffff;
  border-radius: 10px;
  padding: 20px;
  margin-top: 20px;
`;

const Label = styled.label`
  font-size: 12px;
  margin-bottom: 5px;
`;

const StyledInput = styled.input`
  width: 100%;
  padding: 10px;
  margin-bottom: 10px;
  border: 1px solid #ccc;
  border-radius: 5px;
`;

const SubBtn = styled.button`
  background-color: #f56354;
  color: white;
  border: none;
  padding: 10px 20px;
  border-radius: 13px;
  cursor: pointer;
  margin-top: 10px;

`;

const TokenSaleBtn = styled.a`
  display: block;
  background-color: white;
  color: rgba(22, 14, 117, 1);
  text-align: center;
  padding: 10px 30px;
  border-radius: 13px;
  cursor: pointer;
  margin-top: 10px;
  margin-bottom: 26px;
`;

const pulseAnimation = keyframes`
  0% {
    background-color: red;
    color: white;
  }
  50% {
    background-color: white;
    color: red;
  }
  100% {
    background-color: red;
        color: white;
    }
`;

const SpanLive = styled.span`
  padding: 3px 6px;
  border-radius: 4px;
  color: #c94d4d;
  background-color: black;
  animation: ${pulseAnimation} 2s ease infinite;
`;

const TokenSale = () => {
  return (
    <Container id="tokenSale">
      <Wrapper>
        <Left>
          <TextBox>
            <h2 style={{ textAlign: 'center', fontSize: '30px', fontWeight: 'bold', marginBottom: '20px' }}> Built on Base
            </h2>

            <p>Base is built on Ethereum and offers a secure network for transferring digital assets on the blockchain. </p>

            Uniswap Liquidity Pool:
            <i> <a style={{ color: 'lightblue', textDecoration: 'none' }} href="https://app.uniswap.org/explore/tokens/base/0x3fa755a4843a6a0cde45809396009987f0f71216?chain=base">
              https://app.uniswap.org/explore/tokens/base/0x3fa755a4843a6a0cde45809396009987f0f71216?chain=base
              Certificate Authority (CA):
              0x3fa755a4843a6a0cde45809396009987f0f71216
            </a>
            </i>
            <a style={{ alignSelf: 'center' }} target="_blank" href="https://app.uniswap.org/explore/tokens/base/0x3fa755a4843a6a0cde45809396009987f0f71216">   <TokenSaleBtn>BUY OUR TOKEN SALE ON UNISWAP</TokenSaleBtn></a>
            <div style={{ display: 'flex', flexDirection: 'column', textAlign: 'center', gap: '10px' }}>
              <span><strong>Name:</strong></span>
              <span> Ethereum Philippines</span>
              <span><strong>Symbol:</strong> </span>
              <span>ETHPH</span>
              <span><strong>Blockchain:</strong></span>
              <span> Ethereum, Base L2 Network, Open Source</span>
              <span><strong>Total Supply:</strong></span>
              <span> 10,000,000 / 100,000,000 ETHPH</span>
            </div>
          </TextBox>
        </Left>
        <Right>
          <h2 style={{ fontSize: '20px', fontWeight: 'bold', marginBottom: '20px', textAlign: 'center' }}>$10 Million USDT Token Sale Is <SpanLive> Live!</SpanLive></h2>
          <i><a style={{ color: 'purple', textDecoration: 'none' }} href="https://dexscreener.com/base/0xcf354f52e8ee3ff264ae23192775a20b95ec1d47">Find us on Dexscreener for network statistics.</a></i>
          <TextBox2 style={{ textAlign: 'center', marginBottom: '20px' }}>
            Ethereum Philippines has officially been added to Uniswap. Secure your (ETHPH) tokens as we create wealth based businesses in the Philippines through blockchain initiatives and technology. We&apos;re creating billion dollar industries and and giving earnings, ownership and control to token holders with decentralized technology.
            <i>This is a 1 USDT per token today, 500 USDT per token everywhere once in a lifetime opportunity that&apos;s available to anyone. </i>
          </TextBox2>
          <FormBox>
            <Label>Full Name</Label>
            <StyledInput placeholder="Full Name" />
            <Label>Email</Label>
            <StyledInput placeholder="Email" />
            <div style={{ display: 'flex', justifyContent: 'center', alignContent: 'center' }}> <SubBtn>Buy Ethereum Philippines For 1 USDT</SubBtn></div>

            <p style={{ textAlign: 'center', marginTop: '10px' }}>1 USDT On Uniswap Today, 500 USDT Everywhere Tomorrow</p>
          </FormBox>
        </Right>
      </Wrapper>
    </Container>
  );
};

export default TokenSale;

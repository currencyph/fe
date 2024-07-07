import { useState } from 'react';
import styled, { keyframes } from 'styled-components';

const fadeIn = keyframes`
  from {
    opacity: 0;
  }
  to {
    opacity: 1;
  }
`;

const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  height: 70vh;
  margin-bottom: 10vh;
  animation: ${fadeIn} 1s ease-in;

  @media (max-width: 768px) {
    padding: 20px;
    margin-bottom: 0vh;
  }
`;

const Title = styled.h1`
  color: #333;
  margin-bottom: 20px;
  font-size: 2.5rem;

  @media (max-width: 768px) {
    font-size: 2rem;
  }
`;

const Form = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  background: white;
  padding: 30px;
  border-radius: 10px;
  box-shadow: 0 10px 15px rgba(0, 0, 0, 0.1);
  width: 400px;

  @media (max-width: 768px) {
    width: 80%;
  }
`;

const Input = styled.input`
  width: 100%;
  padding: 15px;
  margin: 10px 0;
  border: 1px solid #ddd;
  border-radius: 5px;
  font-size: 1rem;

  &:focus {
    border-color: rgba(109, 0, 207, 1);
  }

  &:disabled {
    background-color: #f9f9f9;
    color: #999;
  }
`;

const Result = styled.div`
  margin-top: 20px;
  font-size: 1.5rem;
  color: #333;
`;

const FormDesc = styled.p`
  @media (max-width: 768px) {
    width: 80%;
    text-align: center;
    word-break: break-all;
  }
`;

const CurrencyConverter = () => {
  const [tokenValue, setTokenValue] = useState('');
  const [phpAmount, setPhpAmount] = useState('');
  const [usdAmount, setUsdAmount] = useState('');

  const tokenToPhpRate = 58.53;
  const phpToUsdRate = 0.018;
  // const usdToPhpRate = 1 / phpToUsdRate;

  const handleTokenChange = (e) => {
    const token = e.target.value;
    setTokenValue(token);
    if (token) {
      const php = token * tokenToPhpRate;
      const usd = php * phpToUsdRate;
      setPhpAmount(php.toFixed(2));
      setUsdAmount(usd.toFixed(2));
    } else {
      setPhpAmount('');
      setUsdAmount('');
    }
  };

  return (
    <Container id='converter'>
      <Title>Currency Converter</Title>
      <FormDesc>
        Base Blockchain:{' '}
        <a
          target="_blank"
          style={{ color: 'rgba(109,0,207)', textDecoration: 'none' }}
          href="https://basescan.org/token/0x3fa755a4843a6a0cde45809396009987f0f71216#code"
        >
          0x3fa755a4843a6a0cde45809396009987f0f71216
        </a>
      </FormDesc>
      <Form>
        <Input
          type="number"
          placeholder="Enter token amount"
          value={tokenValue}
          onChange={handleTokenChange}
        />
        <Input
          type="number"
          placeholder="Amount in PHP"
          value={phpAmount}
          disabled
        />
        <Input
          type="number"
          placeholder="Amount in USD"
          value={usdAmount}
          disabled
        />
        <Result>
          {tokenValue && (
            <div>
              {tokenValue} Token = {phpAmount} PHP = {usdAmount} USD
            </div>
          )}
        </Result>
      </Form>
    </Container>
  );
};

export default CurrencyConverter;

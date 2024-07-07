import styled from "styled-components";
import Footer from "../Components/Footer";
import { useEffect } from "react";

const Container = styled.div`
  width: 94vw;
  padding: 20px 10px;
  margin-top: 30px;
`;

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`;

const Header = styled.h1`
  text-align: center;
  font-size: 32px;
  color: black;
  font-weight: bold;
  margin-bottom: 20px;
`;

const DescBox = styled.div`
  width: 100%;
  max-width: 800px;
  padding: 20px;
  border-radius: 20px;
  background-color: #ede2f7;
  color: black;
  line-height: 1.6;
  @media (max-width: 768px) {
   width: 90%;
   font-size: 10px;
  }
`;

const DescHeading = styled.h4`
  font-weight: bold;
  margin-bottom: 8px;
  font-size: 18px;
`;

const Desc = styled.p`
  font-size: 16px;
  margin-bottom: 12px;
`;

const TermsAndConditions = () => {
  useEffect(() => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  }, []);

  return (
    <Container>
      <Header>Terms and Conditions</Header>
      <Wrapper>
        <DescBox>
          <Desc>
            <DescHeading>Last Updated: June 24, 2024</DescHeading>
            Welcome to Currency.ph ("we," "our," or "us"). These Terms and
            Conditions ("Terms") govern your use of our website currency.ph
            (the "Site") and our services. By accessing or using the Site, you
            agree to be bound by these Terms. If you do not agree with these
            Terms, please do not use the Site.
          </Desc>
          <DescHeading>1. Use of the Site</DescHeading>
          <Desc>
            <DescHeading>1.1 Eligibility</DescHeading>
            You must be at least 18 years old to use the Site. By using the
            Site, you represent and warrant that you meet this age requirement.
          </Desc>
          <Desc>
            <DescHeading>1.2 Account Registration</DescHeading>
            To access certain features of the Site, you may be required to
            register for an account. You agree to provide accurate, current,
            and complete information during the registration process and to
            update such information to keep it accurate, current, and complete.
            You are responsible for safeguarding your password and for all
            activities that occur under your account.
          </Desc>
          <Desc>
            <DescHeading>1.3 Prohibited Activities</DescHeading>
            You agree not to:
            <ul>
              <li>Use the Site for any unlawful purpose or in violation of any local, state, national, or international law.</li>
              <li>Engage in any activity that interferes with or disrupts the Site.</li>
              <li>Use the Site to distribute, transmit, or post any harmful, offensive, or illegal content.</li>
              <li>Impersonate any person or entity or falsely state or otherwise misrepresent your affiliation with a person or entity.</li>
            </ul>
          </Desc>
          <DescHeading>2. Intellectual Property</DescHeading>
          <Desc>
            The Site and its content, features, and functionality are and will
            remain the exclusive property of Currency.ph and its licensors. The
            Site is protected by copyright, trademark, and other laws of both
            the Philippines and foreign countries. Our trademarks and trade
            dress may not be used in connection with any product or service
            without our prior written consent.
          </Desc>
          <DescHeading>3. Financial Disclosure</DescHeading>
          <Desc>
            <DescHeading>3.1 No Financial Advice</DescHeading>
            The information provided on the Site is for general informational
            purposes only and does not constitute financial advice. Currency.ph
            is not a financial advisor, and the information should not be
            construed as professional financial advice. You should seek
            independent financial advice from a professional who is aware of
            your specific financial circumstances.
          </Desc>
          <Desc>
            <DescHeading>3.2 Risk Acknowledgement</DescHeading>
            The financial market, including the foreign exchange market,
            involves significant risks, and there is no guarantee of profit.
            You acknowledge that any financial transactions carry the risk of
            loss. Currency.ph does not guarantee any specific outcomes or
            profits.
          </Desc>
          <Desc>
            <DescHeading>3.3 Accuracy of Information</DescHeading>
            While we strive to provide accurate and up-to-date information, we
            do not warrant the completeness, reliability, or accuracy of the
            information provided on the Site. You acknowledge that reliance on
            any information provided on the Site is at your own risk.
          </Desc>
          <DescHeading>4. Limitation of Liability</DescHeading>
          <Desc>
            To the fullest extent permitted by law, Currency.ph and its
            affiliates, officers, directors, employees, agents, and licensors
            will not be liable for any indirect, incidental, special,
            consequential, or punitive damages, including but not limited to
            loss of profits, data, use, goodwill, or other intangible losses,
            resulting from your access to or use of or inability to access or
            use the Site.
          </Desc>
          <DescHeading>5. Indemnification</DescHeading>
          <Desc>
            You agree to indemnify, defend, and hold harmless Currency.ph and
            its affiliates, officers, directors, employees, agents, and
            licensors from and against any claims, liabilities, damages, losses,
            and expenses, including, without limitation, reasonable legal and
            accounting fees, arising out of or in any way connected with your
            access to or use of the Site or your violation of these Terms.
          </Desc>
          <DescHeading>6. Governing Law</DescHeading>
          <Desc>
            These Terms will be governed by and construed in accordance with the
            laws of the Philippines, without regard to its conflict of law
            principles.
          </Desc>
          <DescHeading>7. Changes to Terms</DescHeading>
          <Desc>
            We may revise these Terms from time to time at our sole discretion.
            We will notify you of any changes by posting the new Terms on the
            Site and updating the "Last Updated" date. By continuing to access
            or use the Site after those changes become effective, you agree to
            be bound by the revised Terms.
          </Desc>
          <DescHeading>8. Contact Us</DescHeading>
          <Desc>
            If you have any questions or concerns about these Terms, please
            contact us at noreply@currency.ph.
          </Desc>
          <Desc>
            By using the Site, you acknowledge that you have read, understood,
            and agreed to be bound by all the terms of these Terms and
            Conditions.
          </Desc>
        </DescBox>
        <Footer />
      </Wrapper>
    </Container>
  );
};

export default TermsAndConditions;

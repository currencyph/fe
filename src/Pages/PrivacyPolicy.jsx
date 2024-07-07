import styled from "styled-components";
import Footer from "../Components/Footer";
import { useEffect } from "react";

const Container = styled.div`
  width: auto;
  margin-top: 30px;
  padding: 0 20px; /* Added padding for better spacing on smaller screens */
`;

const Wrapper = styled.div`
  padding: 10px;
  display: flex;
  flex-direction: column; /* Changed to column for better stacking on mobile */
  align-items: center;
`;

const Header = styled.h1`
  text-align: center;
  font-size: 30px; /* Reduced font size for better readability on mobile */
  color: black;
  font-weight: bold;
`;

const DescBox = styled.div`
  width: 100%;
  padding: 20px;
  border-radius: 20px;
  background-color: #ede2f7;
  color: black;
`;

const DescHeading = styled.h4`
  font-weight: bold;
  margin-bottom: 8px;
  font-size: 18px; /* Reduced font size for better readability on mobile */
`;

const Desc = styled.p`
  font-size: 16px; /* Reduced font size for better readability on mobile */
  margin-bottom: 4px;
  line-height: 1.6;
`;

const PrivacyPolicy = () => {
    useEffect(() => {
        window.scrollTo({ top: 0, behavior: "smooth" });
    }, []);

    return (
        <Container>
            <Header>Privacy Policy</Header>
            <Wrapper>
                <DescBox>
                    <Desc>
                        <DescHeading>Last Updated: June 24, 2024</DescHeading>
                        ("we," "our," or "us") is committed to protecting your privacy.
                        This Privacy Policy explains how we collect, use, disclose, and
                        safeguard your information when you visit our website currency.ph
                        (the "Site") and use our services. Please read this Privacy Policy
                        carefully. If you do not agree with the terms of this Privacy
                        Policy, please do not access the Site.
                    </Desc>

                    <DescHeading>1. Information We Collect</DescHeading>
                    <DescHeading>1.1 Personal Information</DescHeading>
                    <Desc>
                        We may collect personally identifiable information ("Personal
                        Information").
                    </Desc>

                    <DescHeading>1.2 Non-Personal Information</DescHeading>
                    <Desc>
                        We may collect non-personally identifiable information
                        ("Non-Personal Information") such as:
                        <ul>
                            <li>Browser type</li>
                            <li>Operating system</li>
                            <li>IP address</li>
                            <li>Access times</li>
                            <li>
                                Pages viewed directly before and after accessing the Site
                            </li>
                        </ul>
                    </Desc>

                    <DescHeading>1.3 Cookies and Tracking Technologies</DescHeading>
                    <Desc>
                        We use cookies, web beacons, tracking pixels, and other tracking
                        technologies on the Site to help customize the Site and improve
                        your experience. For more information on how we use cookies,
                        please refer to our Cookie Policy.
                    </Desc>

                    <DescHeading>2. How We Use Your Information</DescHeading>
                    <Desc>
                        We use the information we collect in the following ways:
                        <ul>
                            <li>To provide and maintain our services</li>
                            <li>To improve, personalize, and expand our services</li>
                            <li>To process transactions</li>
                            <li>To send administrative information to you</li>
                            <li>
                                To communicate with you, including responding to your comments,
                                questions, and requests
                            </li>
                            <li>To send you marketing and promotional communications</li>
                            <li>
                                To prevent fraudulent transactions, monitor against theft, and
                                protect against criminal activity
                            </li>
                            <li>To comply with legal obligations</li>
                        </ul>
                    </Desc>

                    <DescHeading>3. Sharing Your Information</DescHeading>
                    <Desc>
                        We may share your information in the following situations:
                        <ul>
                            <li>
                                <strong>With Service Providers:</strong> We may share your
                                information with third-party vendors, service providers,
                                contractors, or agents who perform services for us or on our
                                behalf and require access to such information to do that work.
                            </li>
                            <li>
                                <strong>For Business Transfers:</strong> We may share or
                                transfer your information in connection with, or during
                                negotiations of, any merger, sale of company assets, financing,
                                or acquisition of all or a portion of our business to another
                                company.
                            </li>
                            <li>
                                <strong>With Affiliates:</strong> We may share your information
                                with our affiliates, in which case we will require those
                                affiliates to honor this Privacy Policy.
                            </li>
                            <li>
                                <strong>With Business Partners:</strong> We may share your
                                information with our business partners to offer you certain
                                products, services, or promotions.
                            </li>
                            <li>
                                <strong>For Legal and Compliance Reasons:</strong> We may
                                disclose your information to comply with legal obligations,
                                respond to legal requests, and protect our rights, privacy,
                                safety, or property, and/or that of our affiliates, you, or
                                others.
                            </li>
                        </ul>
                    </Desc>

                    <DescHeading>4. Your Rights and Choices</DescHeading>
                    <DescHeading>4.1 Access and Correction</DescHeading>
                    <Desc>
                        You have the right to access, correct, update, or delete your
                        Personal Information. You can do so by contacting us using the
                        contact information provided below.
                    </Desc>

                    <DescHeading>4.2 Opt-Out of Marketing Communications</DescHeading>
                    <Desc>
                        You may opt-out of receiving marketing emails from us by following
                        the unsubscribe instructions included in these emails or by
                        contacting us.
                    </Desc>

                    <DescHeading>4.3 Cookies and Tracking Technologies</DescHeading>
                    <Desc>
                        You can set your browser to refuse all or some browser cookies or
                        to alert you when cookies are being sent. If you disable or refuse
                        cookies, please note that some parts of the Site may become
                        inaccessible or not function properly.
                    </Desc>

                    <DescHeading>5. Security of Your Information</DescHeading>
                    <Desc>
                        We use administrative, technical, and physical security measures to
                        help protect your Personal Information. While we have taken
                        reasonable steps to secure the Personal Information you provide to
                        us, please be aware that despite our efforts, no security measures
                        are perfect or impenetrable, and no method of data transmission can
                        be guaranteed against any interception or other type of misuse.
                    </Desc>

                    <DescHeading>6. Children's Privacy</DescHeading>
                    <Desc>
                        Our services are not directed to children under 13, and we do not
                        knowingly collect Personal Information from children under 13. If we
                        become aware that we have inadvertently received Personal
                        Information from a child under the age of 13, we will delete such
                        information from our records.
                    </Desc>

                    <DescHeading>7. Changes to This Privacy Policy</DescHeading>
                    <Desc>
                        We may update this Privacy Policy from time to time in order to
                        reflect changes to our practices or for other operational, legal, or
                        regulatory reasons. We will notify you of any changes by posting
                        the new Privacy Policy on this page and updating the "Last Updated"
                        date.
                    </Desc>

                    <DescHeading>8. Contact Us</DescHeading>
                    <Desc>
                        If you have any questions or concerns about this Privacy Policy,
                        please contact us at noreply@currency.ph.
                    </Desc>

                    <Desc>
                        By using the Site, you acknowledge that you have read, understood,
                        and agreed to be bound by all the terms of this Privacy Policy.
                    </Desc>
                </DescBox>
                <Footer />
            </Wrapper>
        </Container>
    );
};

export default PrivacyPolicy;

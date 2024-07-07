import { useEffect, useState } from 'react';
import styled from 'styled-components';
import { useLocation, useNavigate } from 'react-router-dom';

import icon from '../assets/icon.webp';
import hamburgerIcon from '../assets/hamburger.png'; // Add your hamburger menu icon here
import cross from '../assets/cross.png'; // Add your hamburger menu icon here
import { ConnectKitButton } from "connectkit";


const Container = styled.div`
    height: 70px;
    width: 100vw;
    background: linear-gradient(100deg, rgba(22,14,117,1) 0%, rgba(109,0,207,1) 100%, rgba(109,0,207,1) 100%);
    color: white;
    
`;

const Wrapper = styled.div`
    margin: 0 auto;
    height: 100%;
    display: flex;
    align-items: center;
    justify-content: space-between;
    width: 70%;
    @media (max-width: 768px) {
        width: 90%;
    }
`;

const Left = styled.div`
    flex: 3;
    display: flex;
    align-items: center;
    gap: 30px;
    @media (max-width: 768px) {
        display: ${props => (props.isOpen ? 'flex' : 'none')};
        flex-direction: column;
        position: absolute;
        top: 70px;
        left: 0;
        background-color: rgba(22,14,117,0.9);
        width: 100%;
        padding: 10px 0;
        z-index: 1;
    }
`;

const Logo = styled.img`
margin-right: 20px;
    width: 40px;
    height: 40px;
    &:hover {
        cursor: pointer;
    }
`;

const Right = styled.div`
    flex: 1;
    display: flex;
    align-items: center;
    justify-content: flex-end;
    @media (max-width: 768px) {
        display: none;
    }
`;

const MenuItem = styled.div`
    margin-right: 5px;
    padding: 5px;
    position: relative;
    cursor: pointer;
    &:hover::after {
        width: 100%;
    }
    &::after {
        content: '';
        display: block;
        width: 0;
        height: 2px;
        background: #f56354;
        position: absolute;
        bottom: 0;
        left: 0;
        transition: width 0.3s ease-in-out;
    }
`;

const Button = styled.button`

    border: none;
    border-radius: 10px;
   
    font-size: 16px;
    color: black;
    &:hover {
        cursor: pointer;
    }
`;

const Hamburger = styled.img`
    width: 30px;
    height: 30px;
    display: none;
    cursor: pointer;
    @media (max-width: 768px) {
        display: block;
    }
`;

const Navbar = () => {
    const navigate = useNavigate();
    const [isOpen, setIsOpen] = useState(false);

    const toggleMenu = () => {
        setIsOpen(!isOpen);
    };

    const location = useLocation();
    const [scrollTarget, setScrollTarget] = useState(null);

    useEffect(() => {
        if (scrollTarget && location.pathname === '/') {
            const element = document.getElementById(scrollTarget);
            if (element) {
                element.scrollIntoView({ behavior: 'smooth' });
            }
            setScrollTarget(null); // Reset scroll target
        }
    }, [location, scrollTarget]);

    const handleScroll = (id) => {
        setScrollTarget(id);
        navigate('/');
    };
    return (
        <Container>
            <Wrapper>
                <Logo src={icon} onClick={() => navigate('/')} />


                <Hamburger src={!isOpen ? hamburgerIcon : cross} onClick={toggleMenu} />


                <Left isOpen={isOpen}>
                    <MenuItem onClick={() => handleScroll('converter')}>Converter</MenuItem>
                    <MenuItem onClick={() => handleScroll('tokenSale')}>Token Sale</MenuItem>
                    <MenuItem onClick={() => navigate('/swap')}>Exchanges</MenuItem>
                    <MenuItem onClick={() => navigate('/privacy-policy')}>Privacy Policy</MenuItem>
                    {isOpen && <ConnectKitButton />}
                </Left>
                <Right>
                    <ConnectKitButton />
                </Right>
            </Wrapper>
        </Container>
    );
};

export default Navbar;

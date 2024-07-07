import { useState } from 'react';
import styled from 'styled-components';

const Container = styled.div`
  width: 100vw;
  height: auto;
  margin-top: 30px;
  background-color: #f5f0fa;
`;

const Wrapper = styled.div`
  padding: 10px;
  display: flex;
  flex-wrap: wrap;
  margin: 0 auto;
  width: 100%;
  max-width: 75%;
  gap: 30px; /* Added gap to create space between columns */
`;

const Header = styled.h1`
  text-align: center;
  font-size: 40px;
  color: black;
  font-weight: bold;
   @media (max-width: 768px) {
   padding: 20px 40px;
   font-size: 29px;
   
  }
`;

const Span = styled.span`
  color: #6a01cc;
  font-weight: bold;
`;

const VideoContainer = styled.div`
  width: 100%;
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  gap: 20px;
  margin-bottom: 30px;
`;

const VideoBox = styled.div`
  height: 300px;
  width: 45%; /* Adjusted to fit two columns on larger screens */
  max-width: 500px;
  border-radius: 14px;
  overflow: hidden;
  position: relative;
  display: flex;
  align-items: center;
  justify-content: center;
  background: #dabff3;
  transition: all 0.3s ease-in-out;

  @media (max-width: 768px) {
    width: 80%;
    height: 200px;
  }

  @media (max-width: 480px) {
    width: 100%;
    height: 200px;
  }

  &:hover {
    transform: scale(1.02);
  }

  &:hover .overlay {
    opacity: 0;
    transform: translateX(-100%);
  }

  &:hover .video {
    opacity: 1;
    transform: translateX(0);
  }

  ${(props) => props.isPlaying && `
    transform: scale(1.02);

    .overlay {
      opacity: 0;
      transform: translateX(-100%);
    }

    .video {
      opacity: 1;
      transform: translateX(0);
    }
  `}
`;

const Video = styled.div`
  height: 100%;
  width: 100%;
  position: absolute;
  opacity: 0;
  transform: translateX(100%);
  transition: all 0.3s ease-in-out;

  iframe {
    width: 100%;
    height: 100%;
    background-size: cover;
    border: none;
  }
`;

const Text = styled.p`
  font-size: 25px;
  text-align: center;
  font-weight: bold;
  position: absolute;
  z-index: 2;
  color: #330261;
  transition: all 0.3s ease-in-out;
  opacity: 1;
  transform: translateX(0);
  margin-top: 0; /* Ensure text stays centered */
`;

const PlayButton = styled.button`
  position: absolute;
  z-index: 3;
  background: rgba(255, 133, 33, 0.6);
  color: white;
  border: none;
  border-radius: 50%;
  width: 50px;
  height: 50px;
  cursor: pointer;
  display: ${(props) => (props.isPlaying ? 'none' : 'block')};

  &:before {
    content: '▶';
    font-size: 25px;
  }
`;

const ProjectDevelopment = () => {
  const videoData = [
    {
      id: 1,
      title: "Philippines: Game Changing",
      url: "https://www.youtube.com/embed/cHDPsbLv5vI",
    },
    {
      id: 2,
      title: "A Limited Supply Available",
      url: "https://www.youtube.com/embed/Vx4uC6YeUYo",
    },
    {
      id: 3,
      title: "Coconut Joy",
      url: "https://www.youtube.com/embed/HRFr0-GXQtQ",
    },
    {
      id: 4,
      title: "The Holy Spirit Mining Farms",
      url: "https://www.youtube.com/embed/JyTmf23zxWA",
    },
    {
      id: 5,
      title: "Building Value Through Digital Assets",
      url: "https://www.youtube.com/embed/csZNQvgLtoY",
    },
    {
      id: 6,
      title: "Participate In a Revolution",
      url: "https://www.youtube.com/embed/VGz-K0zrnjI",
    },
  ];

  const [isPlaying, setIsPlaying] = useState(Array(videoData.length).fill(false));

  const handlePlay = index => {
    const newIsPlaying = [...isPlaying];
    newIsPlaying[index] = true;
    setIsPlaying(newIsPlaying);
  };

  return (
    <Container>
      <Header>
        Project Development Timeline and <Span>Media</Span>
      </Header>
      <Wrapper>
        <VideoContainer>
          {videoData.map((video, index) => (
            <VideoBox key={video.id} isPlaying={isPlaying[index]}>
              <Video className="video">
                <iframe
                  src={video.url}
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                  allowFullScreen
                ></iframe>
              </Video>
              <Text className="overlay">{video.title}</Text>
              <PlayButton isPlaying={isPlaying[index]} onClick={() => handlePlay(index)} />
            </VideoBox>
          ))}
        </VideoContainer>
      </Wrapper>
    </Container>
  );
};

export default ProjectDevelopment;

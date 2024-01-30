import {
  GetStared,
  HomeContainer,
  HomeImg,
  HomeInfo,
  MainTitle,
  Span,
} from './Pages.styled';
import defaultHomeImg from './default-home.png';

const Home = () => {
  const homeImg = defaultHomeImg;

  return (
    <HomeContainer>
      <HomeImg src={homeImg} alt="phonebook" />
      <HomeInfo>
        <MainTitle>
          Welcome to your <Span>Phonebook</Span>
        </MainTitle>

        <GetStared to="/login">Get Stared</GetStared>
      </HomeInfo>
    </HomeContainer>
  );
};

export default Home;

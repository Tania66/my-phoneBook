import {
  GetStared,
  HomeContainer,
  HomeInfo,
  MainTitle,
  Span,
} from './Pages.styled';
import defaultHomeImg from './default-home.png';

const Home = () => {
  const homeImg = defaultHomeImg;

  return (
    <HomeContainer>
      <HomeInfo>
        <MainTitle>
          Welcome to your <Span>Phonebook</Span>
        </MainTitle>
        <GetStared to="/login">Get Stared</GetStared>
      </HomeInfo>

      <img src={homeImg} width={425} alt="phonebook" />
    </HomeContainer>
  );
};

export default Home;

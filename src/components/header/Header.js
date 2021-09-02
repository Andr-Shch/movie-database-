import React from 'react';
import { Link } from 'react-router-dom';
import RMDBLogo  from '../../images/react-movie-logo.svg';
import TMDBLogo from '../../images/tmdb_logo.svg';
import { Content, LogoImg, TMDBLogoImg, Wrapper } from './Header.style';



const Header = () => {
    return (
      <Wrapper>
          <Content>
            <Link to='/'>
            <LogoImg src={RMDBLogo} alt="logo Mouvie" />
            </Link>
             <TMDBLogoImg src={TMDBLogo} alt="TMDB LOGO"/>
          </Content>
      </Wrapper>
    );
};

export default Header;
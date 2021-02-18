
import React from 'react';
import {Layout, Header, Navigation, Drawer, Content, Footer, FooterSection, FooterLinkList} from 'react-mdl';
import './App.css';
import Main from './components/main';
import {Link} from 'react-router-dom';

function App() {
  return (
    <div className="demo-big-content">
    <Layout className="layout-style">
        <Header className="Header-style" title="Movie APP Test" scroll>
            <Navigation>
              <Link to="/">Home</Link>
              <Link to="contact-us">Contact Us</Link>
            </Navigation>
        </Header>
        <Drawer title="Movie APP Test">
            <Navigation>
              <Link to="/">Home</Link>
              <Link to="contact-us">Contact Us</Link>
            </Navigation>
            
        </Drawer>
        <Content>

          <div className="page-content" />
          <Main />

        </Content>
        <Footer className="footer-style" size="mini">
    <FooterSection type="left" logo="Movie APP Test">
        <FooterLinkList>
            <a href="/">Help</a>
            <a href="/">Privacy & Terms</a>
        </FooterLinkList>
    </FooterSection>
</Footer>
    </Layout>
    
</div>
    
    
  );
}

export default App;

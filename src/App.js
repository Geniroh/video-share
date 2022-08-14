import styled, { ThemeProvider } from 'styled-components';
import { useState } from 'react';
import Menu from './components/Menu';
import Navbar from './components/Navbar';
import { darkTheme, lightTheme } from './utils/Theme';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Home from './screens/Home';
import Video from './screens/Video';
import Login from './screens/Login';
const Container = styled.div`
  display: flex;
  background-color: ${({theme}) => theme.bg2}
`;

const Main = styled.div`
  flex: 7;
`;

const Wrapper = styled.div`
  height: fit-content;
  overflow-y: auto;
`;

function App() {

  const [darkMode, setDarkMode] = useState(true);
  return (
    <ThemeProvider theme={darkMode ? darkTheme : lightTheme } >
      <Container>
        <BrowserRouter>
          <Menu mode={darkMode} setmode={setDarkMode} />
          <Main>
            <Navbar />
            <Wrapper>
              <Routes>
                <Route path="/" >
                  <Route index element={<Home />} />
                  <Route path="signin" element={<Login />} />
                  <Route path="video">
                    <Route path=":id" element={<Video />} />
                  </Route>
                </Route>
              </Routes>
            </Wrapper>
          </Main>
        </BrowserRouter>
      </Container>
    </ThemeProvider>
  );
}

export default App;

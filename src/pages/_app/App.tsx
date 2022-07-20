import '@fontsource/inconsolata/400.css';
import '@fontsource/inconsolata/700.css';
import '@fontsource/lato/400.css';
import '@fontsource/lato/700.css';

import { ThemeProvider } from 'styled-components';

import { Text } from '../../components/Common/Text';
import { Drinks } from '../../components/Drinks';
import { Settings } from '../../components/Settings';
import { useAppSelector } from '../../utils/hooks';
import { GlobalStyle, theme } from '../../utils/styled-settings';
import { Footer, Header, Wrapper } from './styles';

/**
 * App is the starting point of the whole application.
 *
 * @returns Application instance.
 */
function App() {
  const settings = useAppSelector((state) => state.settings);

  return (
    <ThemeProvider theme={theme(settings.theme, settings.font)}>
      <GlobalStyle />

      <Header>
        <Text $size="md" $visibleOnOverlay>
          水
        </Text>

        <Settings />
      </Header>

      <Wrapper>
        <Drinks />
      </Wrapper>

      <Footer>
        <Text $size="xs">
          &copy; {new Date().getFullYear()} &mdash; Nicholas
        </Text>
      </Footer>
    </ThemeProvider>
  );
}

export default App;

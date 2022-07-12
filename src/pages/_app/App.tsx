import '@fontsource/inconsolata/400.css';
import '@fontsource/inconsolata/700.css';
import '@fontsource/lato/400.css';
import '@fontsource/lato/700.css';

import { useContext, useEffect, useState } from 'react';
import { useTranslation } from 'react-i18next';
import { ThemeProvider } from 'styled-components';

import { DrinkButton } from '../../components/_shared/Button';
import { GlassIcon } from '../../components/_shared/Icon';
import { Text } from '../../components/_shared/Text';
import { Settings } from '../../components/Settings';
import { AppContext } from '../../utils/state';
import { GlobalStyle, theme } from '../../utils/styled-settings';
import {
  Buttons,
  Counter,
  Dynamic,
  Footer,
  Header,
  Information,
  Wrapper,
} from './styles';

/**
 * App is the starting point of the whole application.
 *
 * @returns Application instance.
 */
function App() {
  const { state, dispatch } = useContext(AppContext);
  const { t } = useTranslation();
  const [drinks, setDrinks] = useState(0);
  const [time, setTime] = useState('');

  const handleClick = () => {
    const date = new Date().toDateString();
    const drink = state.drinks.find((drink) => drink.time === date);
    if (drink) {
      dispatch({ type: 'INCREMENT_DRINK', payload: date });
      return;
    }

    dispatch({ type: 'ADD_DRINK', payload: { intake: 1, time: date } });
  };

  useEffect(() => {
    const date = new Date().toDateString();
    const drink = state.drinks.find((drink) => drink.time === date);
    if (drink) {
      setDrinks(drink.intake);
      return;
    }

    setDrinks(0);
  }, [state.drinks]);

  useEffect(() => {
    const timerUpdate = setInterval(() => {
      const now = new Date();
      const date = now.toLocaleDateString(state.config.language, {
        dateStyle: 'full',
      });
      const time = now.toLocaleTimeString(state.config.language, {
        timeStyle: 'full',
      });

      setTime(`${date} — ${time}`);
    }, 1000);

    return () => clearInterval(timerUpdate);
  }, [state.config.language]);

  return (
    <ThemeProvider theme={theme(state.config.theme, state.config.font)}>
      <GlobalStyle />

      <Header>
        <Text $size="md" $visibleOnOverlay>
          水
        </Text>

        <Settings />
      </Header>

      <Wrapper>
        <Information>
          <Counter>
            <Text $size="xxxl" data-testid="drinkCounter">
              {drinks <= 8 ? (drinks / 8) * 100 : '>100'}
            </Text>
            <Text $size="xl">%</Text>
          </Counter>

          <Dynamic>
            <Text $size="lg">{t('main.drink', { glasses: drinks })}</Text>
            <Text $size="xs" data-testid="clock">
              {time}
            </Text>
          </Dynamic>
        </Information>

        <Buttons>
          <DrinkButton onClick={handleClick} data-testid="drinkButton">
            <GlassIcon />
          </DrinkButton>
        </Buttons>
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

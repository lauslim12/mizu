import '@fontsource/inconsolata/400.css';
import '@fontsource/inconsolata/700.css';
import '@fontsource/lato/400.css';
import '@fontsource/lato/700.css';

import { useEffect, useState } from 'react';
import { useTranslation } from 'react-i18next';
import { ThemeProvider } from 'styled-components';

import { DrinkButton } from '../../components/Common/Button';
import { GlassIcon } from '../../components/Common/Icon';
import { Text } from '../../components/Common/Text';
import { Settings } from '../../components/Settings';
import { useAppDispatch, useAppSelector } from '../../utils/hooks';
import { GlobalStyle, theme } from '../../utils/styled-settings';
import { addDrink, incrementDrink } from './slice';
import {
  Buttons,
  Counter,
  Description,
  Dynamic,
  Footer,
  Header,
  Information,
  Number,
  Percentage,
  Wrapper,
} from './styles';

/**
 * App is the starting point of the whole application.
 *
 * @returns Application instance.
 */
function App() {
  const settings = useAppSelector((state) => state.settings);
  const drinks = useAppSelector((state) => state.drinks);
  const dispatch = useAppDispatch();

  const { t } = useTranslation();
  const [glasses, setGlasses] = useState(0);
  const [time, setTime] = useState('');

  const handleClick = () => {
    const time = new Date().toDateString();
    const drink = drinks.find((drink) => drink.time === time);
    if (drink) {
      dispatch(incrementDrink({ time }));
      return;
    }

    dispatch(addDrink({ intake: 1, time }));
  };

  useEffect(() => {
    const date = new Date().toDateString();
    const drink = drinks.find((drink) => drink.time === date);
    if (drink) {
      setGlasses(drink.intake);
      return;
    }

    setGlasses(0);
  }, [drinks]);

  useEffect(() => {
    const timerUpdate = setInterval(() => {
      const now = new Date();
      const date = now.toLocaleDateString(settings.language, {
        dateStyle: 'full',
      });
      const time = now.toLocaleTimeString(settings.language, {
        timeStyle: 'full',
      });

      setTime(`${date} — ${time}`);
    }, 1000);

    return () => clearInterval(timerUpdate);
  }, [settings.language]);

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
        <Information>
          <Counter>
            <Number data-testid="drinkCounter">
              {glasses <= 8 ? (glasses / 8) * 100 : '>100'}
            </Number>
            <Percentage>%</Percentage>
          </Counter>

          <Dynamic>
            <Description>{t('main.drink', { glasses })}</Description>
            <Text $size="xs" data-testid="clock">
              {time}
            </Text>
          </Dynamic>
        </Information>

        <Buttons>
          <DrinkButton
            aria-label="Drink"
            onClick={handleClick}
            data-testid="drinkButton"
          >
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

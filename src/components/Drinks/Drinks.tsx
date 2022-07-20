import '@fontsource/inconsolata/400.css';
import '@fontsource/inconsolata/700.css';
import '@fontsource/lato/400.css';
import '@fontsource/lato/700.css';

import { useEffect, useState } from 'react';
import { useTranslation } from 'react-i18next';

import { useAppDispatch, useAppSelector } from '../../utils/hooks';
import { DrinkButton } from '../Common/Button';
import { GlassIcon } from '../Common/Icon';
import { Text } from '../Common/Text';
import { addDrink, incrementDrink } from './slice';
import {
  Buttons,
  Counter,
  Description,
  Dynamic,
  Information,
  Number,
  Percentage,
} from './styles';

/**
 * Drinks (singular) is a component where users can increment their number of glasses.
 *
 * @returns Application instance.
 */
const Drinks = () => {
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
    <>
      <Information>
        <Counter>
          <Number>{glasses <= 8 ? (glasses / 8) * 100 : '>100'}</Number>
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
        <DrinkButton aria-label="Drink" onClick={handleClick}>
          <GlassIcon />
        </DrinkButton>
      </Buttons>
    </>
  );
};

export default Drinks;

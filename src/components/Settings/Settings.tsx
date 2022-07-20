import { useState } from 'react';
import { useTranslation } from 'react-i18next';

import { useAppDispatch, useAppSelector } from '../../utils/hooks';
import { SettingsButton } from '../Common/Button';
import { SettingsGearIcon } from '../Common/Icon';
import { resetDrinks } from '../Drinks/slice';
import {
  changeFont,
  changeLanguage,
  changeTheme,
  resetSettings,
} from './slice';
import { Item, ItemContainer, List, Overlay, Section } from './styles';

/**
 * Settings component is a place where the user can manipulate all of their personal
 * settings. This is needed in order to create customizable interfaces.
 *
 * @returns Settings component.
 */
const Settings = () => {
  const state = useAppSelector((state) => state.settings);
  const dispatch = useAppDispatch();
  const [overlayVisibility, setOverlayVisibility] = useState(false);
  const { t, i18n } = useTranslation();

  const handleThemeChange = () => {
    if (state.theme === 'original') {
      dispatch(changeTheme('dark'));
      return;
    }

    if (state.theme === 'dark') {
      dispatch(changeTheme('light'));
      return;
    }

    dispatch(changeTheme('original'));
  };

  const handleLanguageChange = () => {
    if (state.language === 'en') {
      i18n.changeLanguage('id');
      dispatch(changeLanguage('id'));
      return;
    }

    if (state.language === 'id') {
      i18n.changeLanguage('ja');
      dispatch(changeLanguage('ja'));
      return;
    }

    i18n.changeLanguage('en');
    dispatch(changeLanguage('en'));
  };

  const handleFontChange = () => {
    if (state.font === 'Lato') {
      dispatch(changeFont('Inconsolata'));
      return;
    }

    if (state.font === 'Inconsolata') {
      dispatch(changeFont('Noto Sans JP'));
      return;
    }

    dispatch(changeFont('Lato'));
  };

  const handleResetApp = () => {
    i18n.changeLanguage('en');
    dispatch(resetSettings());
    dispatch(resetDrinks());
  };

  return (
    <>
      <Overlay role="dialog" visible={overlayVisibility} />
      <Section visible={overlayVisibility}>
        <List>
          <ItemContainer>
            <Item aria-label="Change theme" onClick={handleThemeChange}>
              <span>01</span> {t('settings.theme', { theme: state.theme })}
            </Item>

            <Item aria-label="Change language" onClick={handleLanguageChange}>
              <span>02</span>{' '}
              {t('settings.language', { language: state.language })}
            </Item>

            <Item aria-label="Change font" onClick={handleFontChange}>
              <span>03</span> {t('settings.font', { font: state.font })}
            </Item>

            <Item
              as="a"
              href="https://github.com/lauslim12/mizu"
              rel="noopener noreferrer"
              target="_blank"
              aria-label="Access GitHub"
            >
              <span>04</span> {t('settings.github')}
            </Item>

            <Item aria-label="Reset settings" onClick={handleResetApp}>
              <span>05</span> {t('settings.reset')}
            </Item>
          </ItemContainer>
        </List>
      </Section>

      <SettingsButton
        aria-label="Settings"
        onClick={() => setOverlayVisibility(!overlayVisibility)}
      >
        <SettingsGearIcon />
      </SettingsButton>
    </>
  );
};

export default Settings;

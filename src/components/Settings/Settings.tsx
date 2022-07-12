import { useContext, useState } from 'react';
import { useTranslation } from 'react-i18next';

import { AppContext } from '../../utils/state';
import { SettingsGearIcon } from '../_shared/Icon';
import { SettingsButton } from './../_shared/Button';
import { Item, ItemContainer, List, Overlay, Section } from './styles';

/**
 * Settings component is a place where the user can manipulate all of their personal
 * settings. This is needed in order to create customizable interfaces.
 *
 * @returns Settings component.
 */
const Settings = () => {
  const { state, dispatch } = useContext(AppContext);
  const [overlayVisibility, setOverlayVisibility] = useState(false);
  const { t, i18n } = useTranslation();

  const handleThemeChange = () => {
    if (state.config.theme === 'original') {
      dispatch({ type: 'CHANGE_THEME', payload: 'dark' });
      return;
    }

    if (state.config.theme === 'dark') {
      dispatch({ type: 'CHANGE_THEME', payload: 'light' });
      return;
    }

    dispatch({ type: 'CHANGE_THEME', payload: 'original' });
  };

  const handleLanguageChange = () => {
    if (state.config.language === 'en') {
      i18n.changeLanguage('id');
      dispatch({ type: 'CHANGE_LANGUAGE', payload: 'id' });
      return;
    }

    if (state.config.language === 'id') {
      i18n.changeLanguage('ja');
      dispatch({ type: 'CHANGE_LANGUAGE', payload: 'ja' });
      return;
    }

    i18n.changeLanguage('en');
    dispatch({ type: 'CHANGE_LANGUAGE', payload: 'en' });
  };

  const handleFontChange = () => {
    if (state.config.font === 'Lato') {
      dispatch({ type: 'CHANGE_FONT', payload: 'Inconsolata' });
      return;
    }

    if (state.config.font === 'Inconsolata') {
      dispatch({ type: 'CHANGE_FONT', payload: 'Noto Sans JP' });
      return;
    }

    if (state.config.font === 'Noto Sans JP') {
      dispatch({ type: 'CHANGE_FONT', payload: 'Lato' });
      return;
    }
  };

  const handleResetApp = () => {
    dispatch({ type: 'RESET_STATE', payload: null });
  };

  return (
    <>
      <Overlay data-testid="overlay" visible={overlayVisibility} />
      <Section visible={overlayVisibility}>
        <List>
          <ItemContainer>
            <Item onClick={handleThemeChange}>
              <span>01</span>{' '}
              {t('settings.theme', { theme: state.config.theme })}
            </Item>

            <Item onClick={handleLanguageChange}>
              <span>02</span>{' '}
              {t('settings.language', { language: state.config.language })}
            </Item>

            <Item onClick={handleFontChange}>
              <span>03</span> {t('settings.font', { font: state.config.font })}
            </Item>

            <Item
              as="a"
              href="https://github.com/lauslim12/mizu"
              rel="noopener noreferrer"
              target="_blank"
            >
              <span>04</span> {t('settings.github')}
            </Item>

            <Item onClick={handleResetApp}>
              <span>05</span> {t('settings.reset')}
            </Item>
          </ItemContainer>
        </List>
      </Section>

      <SettingsButton onClick={() => setOverlayVisibility(!overlayVisibility)}>
        <SettingsGearIcon />
      </SettingsButton>
    </>
  );
};

export default Settings;

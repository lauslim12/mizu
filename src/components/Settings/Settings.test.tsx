import { fireEvent, render, screen } from '@testing-library/react';
import { ThemeProvider } from 'styled-components';

import { theme } from '../../utils/styled-settings';
import Settings from './Settings';

// Mock internationalization. This mock makes sure any components using the `useTranslate` hook can use it without a warning being shown.
jest.mock('react-i18next', () => ({
  useTranslation: () => {
    return {
      t: (str: string) => str,
      i18n: {
        changeLanguage: () => new Promise(() => {}),
      },
    };
  },
}));

describe('Settings component', () => {
  describe('smoke tests', () => {
    test('renders without crashing', () => {
      render(
        <ThemeProvider theme={theme()}>
          <Settings />
        </ThemeProvider>
      );
    });

    test('ensures all numbers are rendered', () => {
      render(
        <ThemeProvider theme={theme()}>
          <Settings />
        </ThemeProvider>
      );

      expect(screen.getByText('01')).toBeInTheDocument();
      expect(screen.getByText('02')).toBeInTheDocument();
      expect(screen.getByText('03')).toBeInTheDocument();
      expect(screen.getByText('04')).toBeInTheDocument();
      expect(screen.getByText('05')).toBeInTheDocument();
    });
  });

  describe('functionalities tests', () => {
    test('ensures settings page can be clicked', () => {
      render(
        <ThemeProvider theme={theme()}>
          <Settings />
        </ThemeProvider>
      );

      // Simulates button click.
      expect(screen.getByRole('button')).toBeInTheDocument();
      fireEvent.click(screen.getByRole('button'));

      // Ensures the 'radial' animation works.
      expect(screen.getByTestId('overlay')).toHaveStyle('transform: scale(80)');
    });
  });
});

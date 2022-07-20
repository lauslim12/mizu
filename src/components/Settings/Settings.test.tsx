import { fireEvent, screen } from '@testing-library/react';

import { renderWithProviders } from '../../utils/test-utils';
import Settings from './Settings';

describe('<Settings />', () => {
  describe('smoke tests', () => {
    test('renders without crashing', () => {
      renderWithProviders(<Settings />);
    });

    test('ensures all numbers and links are rendered', () => {
      renderWithProviders(<Settings />);

      expect(screen.getByText('01')).toBeInTheDocument();
      expect(screen.getByText('02')).toBeInTheDocument();
      expect(screen.getByText('03')).toBeInTheDocument();
      expect(screen.getByText('04')).toBeInTheDocument();
      expect(screen.getByText('05')).toBeInTheDocument();
    });
  });

  describe('functionalities tests', () => {
    test('ensures settings button can be clicked', () => {
      renderWithProviders(<Settings />);

      // Simulates button click in the 'gear' icon.
      expect(screen.getByRole('button')).toBeInTheDocument();
      fireEvent.click(screen.getByRole('button'));

      // Ensures the 'radial' animation works.
      expect(screen.getByRole('dialog')).toHaveStyle('transform: scale(80)');
    });

    test('ensures settings can be modified well', async () => {
      renderWithProviders(<Settings />);

      // Testing the first button: theme changes (original -> dark -> light).
      const themeButton = screen.getByLabelText('Change theme');
      fireEvent.click(themeButton);
      expect(await screen.findByText('Theme: dark')).toBeInTheDocument();
      fireEvent.click(themeButton);
      expect(await screen.findByText('Theme: light')).toBeInTheDocument();
      fireEvent.click(themeButton);
      expect(await screen.findByText('Theme: original')).toBeInTheDocument();

      // Testing the second button: language changes (en -> id -> ja).
      const languageButton = screen.getByLabelText('Change language');
      fireEvent.click(languageButton);
      expect(await screen.findByText('Bahasa: id')).toBeInTheDocument();
      fireEvent.click(languageButton);
      expect(await screen.findByText('言語: ja')).toBeInTheDocument();
      fireEvent.click(languageButton);
      expect(await screen.findByText('Language: en')).toBeInTheDocument();

      // Testing the third button: font changes (Lato -> Inconsolata -> Noto Sans JP).
      const fontButton = screen.getByLabelText('Change font');
      fireEvent.click(fontButton);
      expect(await screen.findByText('Font: Inconsolata')).toBeInTheDocument();
      fireEvent.click(fontButton);
      expect(await screen.findByText('Font: Noto Sans JP')).toBeInTheDocument();
      fireEvent.click(fontButton);
      expect(await screen.findByText('Font: Lato')).toBeInTheDocument();

      // Testing the fourth button: reset the whole app. We mock it by changing the
      // theme, and then resetting the whole state.
      const resetButton = screen.getByLabelText('Reset settings');
      fireEvent.click(themeButton);
      expect(await screen.findByText('Theme: dark')).toBeInTheDocument();
      fireEvent.click(resetButton);
      expect(await screen.findByText('Theme: original')).toBeInTheDocument();
    });
  });
});

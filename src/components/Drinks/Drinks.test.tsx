import { render, screen, waitFor } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import { act } from 'react-dom/test-utils';

import Drinks from './Drinks';

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

describe('App component', () => {
  describe('smoke tests', () => {
    test('renders without crashing', () => {
      render(<Drinks />);
    });

    test('renders the header properly', () => {
      render(<Drinks />);

      expect(screen.getByText('水')).toBeInTheDocument();
    });

    test('renders the main page properly', () => {
      render(<Drinks />);

      expect(screen.getByText('0')).toBeInTheDocument();
    });

    test('renders the footer properly', () => {
      render(<Drinks />);

      expect(screen.getByText(/nicholas/i)).toBeInTheDocument();
    });
  });

  describe('functionalities tests', () => {
    beforeAll(() => {
      jest.useFakeTimers();
      jest.setSystemTime(new Date('12 Jul 2022 13:00:00 GMT').getTime());
    });

    afterAll(() => {
      jest.useRealTimers();
    });

    // test('drink counter increments properly', async () => {
    //   const user = userEvent.setup();
    //   render(
    //     <AppContextProvider>
    //       <Drinks />
    //     </AppContextProvider>
    //   );

    //   expect(screen.getByTestId('drinkButton')).toBeInTheDocument();
    //   user.click(screen.getByTestId('drinkButton'));

    //   // Wait for the state to finish updating itself.
    //   await waitFor(() => {
    //     expect(screen.getByTestId('drinkCounter')).toHaveTextContent('1');
    //   });
    // });

    test('timer works properly', async () => {
      render(<Drinks />);

      // Ensures it renders properly and wait several seconds.
      expect(screen.getByTestId('clock')).toBeInTheDocument();

      // Because we're using timers, we have to use `act` instead of `waitFor`
      // and other alternatives.
      act(() => {
        jest.advanceTimersByTime(2000);
      });

      await waitFor(() => {
        expect(screen.getByTestId('clock')).toHaveTextContent('02');
      });
    });
  });
});

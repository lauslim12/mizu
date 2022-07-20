import { fireEvent, screen } from '@testing-library/react';
import { act } from 'react-dom/test-utils';

import { renderWithProviders } from '../../utils/test-utils';
import Drinks from './Drinks';

describe('<Drinks />', () => {
  describe('smoke tests', () => {
    test('renders without crashing', () => {
      renderWithProviders(<Drinks />);
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

    test('ensures drink counter increments properly', async () => {
      renderWithProviders(<Drinks />);

      // Expect that the button is in the document.
      expect(screen.getByRole('button')).toBeInTheDocument();
      fireEvent.click(screen.getByRole('button'));

      // Wait for the state to finish updating itself.
      expect(await screen.findByText('12.5')).toBeInTheDocument();

      // Try to click the button again, this time to ensure it increments properly.
      fireEvent.click(screen.getByRole('button'));

      // Wait for the state to finish updating itself.
      expect(await screen.findByText('25')).toBeInTheDocument();

      // Click it seven more times to check if it renders '>100'.
      fireEvent.click(screen.getByRole('button'));
      fireEvent.click(screen.getByRole('button'));
      fireEvent.click(screen.getByRole('button'));
      fireEvent.click(screen.getByRole('button'));
      fireEvent.click(screen.getByRole('button'));
      fireEvent.click(screen.getByRole('button'));
      fireEvent.click(screen.getByRole('button'));

      // Wait for the state to finish updating itself.
      expect(await screen.findByText('>100')).toBeInTheDocument();
    });

    test('ensures timer works properly', async () => {
      renderWithProviders(<Drinks />);

      // Ensures it renders properly and wait several seconds.
      expect(screen.getByTestId('clock')).toBeInTheDocument();

      // Because we're using timers, we have to use `act` instead of `waitFor`
      // and other alternatives.
      act(() => {
        jest.advanceTimersByTime(2000);
      });

      // Ensures timer has moved to '02'.
      expect(await screen.findByTestId('clock')).toHaveTextContent('02');
    });
  });
});

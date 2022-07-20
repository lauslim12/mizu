import { renderWithProviders } from '../../utils/test-utils';
import App from './App';

describe('<App />', () => {
  describe('smoke tests', () => {
    test('renders without crashing', () => {
      renderWithProviders(<App />);
    });
  });
});

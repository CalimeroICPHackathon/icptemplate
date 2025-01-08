import { render } from '@testing-library/react';

import App from './App';

describe('<App />', () => {
  it('should render the App', () => {
    const { container, getByText } = render(<App />);

    getByText('React(v18) , Typescript , Tailwind CSS , Vite');
    expect(container.firstChild).toBeInTheDocument();
  });
});

import { LoginComponent } from './login.component';
import { fireEvent, render, screen } from '@testing-library/react-native';

describe('Given the Login Component', () => {
  let mockFunction: jest.Mock;

  beforeEach(() => {
    mockFunction = jest.fn();
    render(<LoginComponent onSubmit={mockFunction} />);
  });

  describe('When the component are mounted', () => {
    test('Then should show email input container', () => {
      const inputContainer = screen.queryByTestId('email-input-container');

      expect(inputContainer).toBeTruthy();
    });

    test('Then should show password input container', () => {
      const inputContainer = screen.queryByTestId('password-input-container');

      expect(inputContainer).toBeTruthy();
    });

    test('Then should show login button', () => {
      const button = screen.queryByTestId('login-button');

      expect(button).toBeTruthy();
    });
  });

  describe('When the email are provided', () => {
    describe('And the password are not provided', () => {
      test('Then the provided function should not be called', () => {
        const emailInput = screen.queryByTestId('email-input');
        fireEvent.changeText(emailInput, 'teste@email.com');

        const button = screen.queryByTestId('login-button');
        fireEvent.press(button);

        expect(mockFunction).toHaveBeenCalledTimes(0);
      });
    });

    describe('And the password are provided', () => {
      test('Then the provided function should be called', () => {
        const emailInput = screen.queryByTestId('email-input');
        fireEvent.changeText(emailInput, 'teste@email.com');

        const passwordInput = screen.queryByTestId('password-input');
        fireEvent.changeText(passwordInput, '123');

        const button = screen.queryByTestId('login-button');
        fireEvent.press(button);

        expect(mockFunction).toHaveBeenCalledWith({
          email: 'teste@email.com',
          password: '123',
        });
      });
    });
  });
});

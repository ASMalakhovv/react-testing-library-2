import {fireEvent, render, screen} from '@testing-library/react';
import App from './App';
import userEvent from "@testing-library/user-event";

describe('App component', () => {
  test('renders learn react link', () => {
    render(<App />);
    const linkElement = screen.getByText(/learn react/i);
    const btn = screen.getByRole('button');
    const input = screen.getByPlaceholderText(/input value/i);
    expect(linkElement).toBeInTheDocument();
    expect(btn).toBeInTheDocument();
    expect(input).toBeInTheDocument();
  });

  test('проверка отсутствия элемента', () => {
    render(<App />);
    const nullElement = screen.queryByText(/hello world/i);
    console.log(nullElement)
    expect(nullElement).toBeNull();
  });

  test('проверка асинхронного элемента', async () => {
    render(<App />);
    const nullElement = await screen.findByText(/value/i);
    expect(nullElement).toBeInTheDocument();
  });

  test('появление элемента по клику fireEvent', () => {
    render(<App/>);
    const btn = screen.getByRole('button');
    expect(screen.queryByTestId('toggle-elem')).toBeNull();
    fireEvent.click(btn);
    expect(screen.getByTestId('toggle-elem')).toBeInTheDocument();
    fireEvent.click(btn);
    expect(screen.queryByTestId('toggle-elem')).toBeNull();
  });

  test('Input Event', () => {
    render(<App/>);
    const input = screen.getByPlaceholderText(/input value/);
    expect(screen.getByTestId('h1-value')).toContainHTML('');
    fireEvent.change(input, {
      target: {value: '1234'}
    });
    expect(screen.getByTestId('h1-value')).toContainHTML('1234');
  });

  test('Input Event with userEvent', () => {
    render(<App/>);
    const input = screen.getByPlaceholderText(/input value/);
    expect(screen.getByTestId('h1-value')).toContainHTML('');
    userEvent.type(input, '1234');
    expect(screen.getByTestId('h1-value')).toContainHTML('1234');
  });
});

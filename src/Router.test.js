import {fireEvent, render, screen} from "@testing-library/react";
import App from "./App";
import userEvent from "@testing-library/user-event";
import {MemoryRouter} from "react-router-dom";

describe('router', () => {
    test('Переход по ссылкам', () => {
        render(<MemoryRouter>
            <App/>
        </MemoryRouter>)

        const aboutLink = screen.getByTestId('about-link');
        const mainLink = screen.getByTestId('main-link');
        fireEvent.click(aboutLink);
        expect(screen.getByTestId('about-page')).toBeInTheDocument();
        fireEvent.click(mainLink);
        expect(screen.getByTestId('main-page')).toBeInTheDocument();
    })

    test('Страница не найдена', () => {
        render(<MemoryRouter initialEntries={['/dwadad']}>
            <App/>
        </MemoryRouter>)

        expect(screen.getByTestId('page-not-found')).toBeInTheDocument();
    })
});

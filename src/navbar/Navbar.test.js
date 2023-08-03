import axios from "axios";
import {screen} from "@testing-library/react";

import {Navbar} from "./Navbar";

import {renderWithRouter} from "../router/renderWithRouter";
import userEvent from "@testing-library/user-event";

describe('Navbar', () => {
    test('main link', async () => {
        renderWithRouter(<Navbar />)
        const mainLink = screen.getByTestId('main-link');
        expect(screen.getByTestId('main-link')).toBeInTheDocument();
        userEvent.click(mainLink);
        expect(screen.getByTestId('main-page')).toBeInTheDocument()
    });
    test('about link', async () => {
        renderWithRouter(<Navbar />)
        const aboutLink = screen.getByTestId('about-link');
        expect(aboutLink).toBeInTheDocument();
        await userEvent.click(aboutLink);
        expect(screen.getByTestId('about-page')).toBeInTheDocument()
    });
    test('users link', async () => {
        renderWithRouter(<Navbar />)
        const usersLink = screen.getByTestId('users-link');
        expect(usersLink).toBeInTheDocument();
        await userEvent.click(usersLink);
        expect(screen.getByTestId('users-page')).toBeInTheDocument()
    });
});

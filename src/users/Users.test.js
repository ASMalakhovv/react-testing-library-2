import axios from 'axios';
import {fireEvent, render, screen} from "@testing-library/react";
import {Users} from "./Users";
import {MemoryRouter, Route, Routes} from "react-router-dom";
import {User} from "./User";
import userEvent from "@testing-library/user-event";
import {AppRouter} from "../router/AppRouter";

jest.mock('axios');

describe('Users', () => {
    const data = {
        data: [
            {
                "id": 1,
                "name": "Leanne Graham",
            },
            {
                "id": 2,
                "name": "Ervin Howell",
            },
        ]
    }

    test('get Users', async () => {
        axios.get.mockReturnValue(data)
        render(<Users />);
        const users = await screen.findAllByTestId('user-item');
        expect(users.length).toBe(2);
        expect(axios.get).toBeCalledTimes(1)
    });

    test('Users details', async () => {
        axios.get.mockReturnValue(data)
        render(
            <MemoryRouter initialEntries={['/users']}>
                <AppRouter />
            </MemoryRouter>
        );
        const users = await screen.findAllByTestId('user-item');
        expect(users.length).toBe(2);
        expect(axios.get).toBeCalledTimes(1)
        await userEvent.click(users[1])
        expect(screen.getByTestId('user-details')).toBeInTheDocument();
    });
});

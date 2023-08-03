import {MemoryRouter} from "react-router-dom";
import {render} from "@testing-library/react";

import {AppRouter} from "./AppRouter";

export const renderWithRouter = (component, path= '/') => {
  return render(
      <MemoryRouter initialEntries={[path]}>
          <AppRouter />
          {component}
      </MemoryRouter>
  )
}

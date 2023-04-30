import {
    createBrowserRouter,
    createRoutesFromElements,
    Route,
    RouterProvider
} from "react-router-dom";

import { GamePage } from "./game";
import { Layout } from "./layout";
import { ShopPage } from "./shop";

const Router = () => {
    const router = createBrowserRouter(
        createRoutesFromElements(
            <Route>
                <Route element={<Layout />}>
                    <Route index element={<GamePage />} />
                    <Route path="shop">
                        <Route index element={<ShopPage />}/>
                        <Route path="test" element={"test"} />
                    </Route>
                </Route>
            </Route>
        )
    );
    return <RouterProvider router={router} />;
};

export { Router };

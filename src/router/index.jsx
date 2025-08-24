import { BrowserRouter, Route, Routes } from "react-router"
import { Register } from "../pages/Register"
import { Login } from "../pages/Login"
import { Logout } from "../pages/Logout"
import { ProtectedRoute } from "../components/ProtectedRoute"
import { Feed } from "../pages/Feed"
import { BlogPost } from "../pages/BlogPost"

export const AppRouter = () => {
    return (
        <BrowserRouter>
            <Routes>
                <Route path='/auth'>
                    <Route path='register' element={<Register />} />
                    <Route path='login' element={<Login />} />
                    <Route path='logout' element={<Logout />} />
                </Route>
                <Route path='/'>
                    <Route path='' element={
                        <ProtectedRoute>
                            <Feed />
                        </ProtectedRoute>
                    } />
                    <Route path='blog-post/:slug' element={
                        <ProtectedRoute>
                            <BlogPost />
                        </ProtectedRoute>
                    } />
                </Route>
            </Routes>
        </BrowserRouter>
    )
} 
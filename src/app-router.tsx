import { createBrowserRouter, createRoutesFromElements, Route } from "react-router-dom";
import MainLayout from "./layout/main.layout";
import { 
  HomePage,
  LoginPage,
  RegisterPage,
  JobsPage
} from "./pages";

const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path="/" element={<MainLayout />}>
      <Route index element={<HomePage />} />
      <Route path="jobs" element={<JobsPage />} />
      <Route path="login" element={<LoginPage />} />
      <Route path="register" element={<RegisterPage />} />
    </Route>
  )
)

export default router;
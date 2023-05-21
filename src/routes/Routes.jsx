import { lazy, Suspense } from "react";
import { createBrowserRouter } from "react-router-dom";
import Loader from "../pages/shared/Loader/Loader";

const MainLayout = lazy(() => import("../layouts/MainLayout"));
const ErrorPage = lazy(() => import("../pages/ErrorPage/ErrorPage"));
const Home = lazy(() => import("../pages/Home/Home"));
const AddAToy = lazy(() => import("../pages/AddAToy/AddAToy"));
const UpdateAToy = lazy(() => import("../pages/UpdateAToy/UpdateAToy"));
const ViewToy = lazy(() => import("../pages/ViewToy/ViewToy"));
const Blog = lazy(() => import("../pages/Blog/Blog"));
const Contact = lazy(() => import("../pages/Contact/Contact"));
const About = lazy(() => import("../pages/About/About"));
const AllToys = lazy(() => import("../pages/AllToys/AllToys"));
const MyToys = lazy(() => import("../pages/MyToys/MyToys"));
const PrivateRoute = lazy(() => import("./PrivateRoute"));
const Login = lazy(() => import("../pages/Authentication/Login/Login"));
const Registration = lazy(() => import("../pages/Authentication/Registration/Registration"));
const PasswordReset = lazy(() => import("../pages/Authentication/PasswordReset/PasswordReset"));
const Profile = lazy(() => import("../pages/Authentication/Profile/Profile"));

export const router = createBrowserRouter([
	{
		path: '/',
		element: <MainLayout></MainLayout>,
		errorElement: <ErrorPage></ErrorPage>,
		children: [
			{
				path: '/',
				element: <Suspense fallback={<Loader></Loader>}><Home></Home></Suspense>,
			},
			{
				path: "/all-toys",
				element: <Suspense fallback={<Loader></Loader>}><AllToys></AllToys></Suspense>,
				// loader: () => fetch("http://localhost:5000/toys")
			},
			{
				path: "/my-toys",
				element: <Suspense fallback={<Loader></Loader>}><PrivateRoute><MyToys></MyToys></PrivateRoute></Suspense>,
				loader: () => fetch("http://localhost:5000/my-toys")
			},
			{
				path: "/toy/:id",
				element: <Suspense fallback={<Loader></Loader>}><PrivateRoute><ViewToy></ViewToy></PrivateRoute></Suspense>,
				loader: ({ params }) => fetch(`http://localhost:5000/toy/${params.id}`)
			},
			{
				path: "/add-a-toy",
				element: <Suspense fallback={<Loader></Loader>}><PrivateRoute><AddAToy></AddAToy></PrivateRoute></Suspense>,
			},
			{
				path: "/update/:id",
				element: <Suspense fallback={<Loader></Loader>}><PrivateRoute><UpdateAToy></UpdateAToy></PrivateRoute></Suspense>,
				loader: ({ params }) => fetch(`http://localhost:5000/toy/${params.id}`)
			},
			{
				path: 'login',
				element: <Suspense fallback={<Loader></Loader>}><Login></Login></Suspense>
			},
			{
				path: 'registration',
				element: <Suspense fallback={<Loader></Loader>}><Registration></Registration></Suspense>
			},
			{
				path: 'password-reset',
				element: <Suspense fallback={<Loader></Loader>}><PasswordReset></PasswordReset></Suspense>
			},
			{
				path: 'profile',
				element: <Suspense fallback={<Loader></Loader>}><Profile></Profile></Suspense>
			},
			{
				path: 'blog',
				element: <Suspense fallback={<Loader></Loader>}><Blog></Blog></Suspense>
			},
			{
				path: 'contact',
				element: <Suspense fallback={<Loader></Loader>}><Contact></Contact></Suspense>
			},
			{
				path: 'about',
				element: <Suspense fallback={<Loader></Loader>}><About></About></Suspense>
			}
		]
	}
]);
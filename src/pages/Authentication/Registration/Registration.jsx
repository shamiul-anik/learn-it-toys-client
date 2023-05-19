import { useContext, useState } from 'react';
import { FaGoogle, FaRegEyeSlash, FaRegEye } from 'react-icons/fa';
import { Link, useNavigate } from 'react-router-dom';
import { AuthContext } from '../../../providers/AuthProvider';
import { toast } from 'react-toastify';
import { updateProfile } from 'firebase/auth';
import { useTitle } from '../../../hooks/useTitle';
import Terms from './Terms';

const Registration = () => {

	useTitle("Registration");

	const navigate = useNavigate();

	const { createUser, logOut, signInWithGoogle } = useContext(AuthContext);

	const [error, setError] = useState("");
	const [success, setSuccess] = useState("");
	const [emailError, setEmailError] = useState("");
	const [passwordError, setPasswordError] = useState("");
	const [showPassword, setShowPassword] = useState(false);
	const [acceptTerms, setAcceptTerms] = useState(false);

	const handleRegistration = (event) => {
		event.preventDefault();
		const form = event.target;
		const email = form.email.value;
		const password = form.password.value;
		const name = form.name.value;
		const photoURL = form.photoURL.value;
		console.log(name, photoURL, email, password)

		setSuccess("");
		setError("");
		setEmailError("");
		setPasswordError("");

		if (email.length < 1) {
			setEmailError("Email field can not be empty!");
			return;
		}
		
		if (password.length < 1) {
			setPasswordError("Password field can not be empty!");
			return;
		}
		
		if (password.length < 6) {
			setPasswordError("Password should be at least 6 characters long!");
			return;
		}

		createUser(email, password)
			.then(result => {
				const currentUser = result.user;
				console.log(currentUser);
				if (name || photoURL) {
					console.log("inside update condition");
					updateUserData(currentUser, name, photoURL);
				}
				setSuccess("Registration successful!");
				toast.success("Registration successful!");
				handleLogOut();
				form.reset();
				navigate("/login");
			})
			.catch(error => {
				setError(error.message);
			})
	};

	// Logout 
	const handleLogOut = () => {
		logOut()
			.then((result) => {
				console.log("Successfully logged out!");
			})
			.catch((error) => {
				console.log(error.message);
			})
	};

	// Update User Information
	const updateUserData = (currentUser, name, photoURL) => {
		updateProfile(currentUser, {
			displayName: name, 
			photoURL: photoURL
		}).then(() => {
			console.log("Profile updated!");
		}).catch((error) => {
			setError(error.message);
		});
	};

	// Google Login
	const handleGoogleRegistration = () => {
		signInWithGoogle()
			.then(result => {
				const loggedUser = result.user;
				console.log(loggedUser);
				toast.success("Successfully registered!");
				navigate("/");
			})
			.catch(error => {
				setError(error.message);
			})
	};

	// Show/Hide Password
	const handleShowPassword = (event) => {
		event.preventDefault();
		setShowPassword(!showPassword);
	};

	// Accept Terms 
	const handleAcceptTerms = (event) => {
		setAcceptTerms(event.target.checked);
	}

	return (
		<section className="max-w-lg mx-auto mt-4 lg:mt-20 p-4">
			<div className="flex card card-compact w-full bg-base-100 shadow-2xl">

				<div className="flex-1 p-6 md:p-8 pt-5 pb-1 md:pb-2">
					<h3 className='text-slate-700 text-2xl my-2 font-bold text-center'>Register your Account</h3>
				</div>

				<div className='border-t border-slate-300 my-4 mx-6 md:mx-8'></div>

				<p className="!px-6 md:!px-8 text-red-500 mt-2 text-center">{error}</p>
				<p className="!px-6 md:!px-8 text-green-600 mt-2 text-center">{success}</p>

				<form onSubmit={handleRegistration}>
					<div className="!px-6 md:!px-8 !pt-2 card-body">
						<div className="form-control">
							<label className="label pl-0" htmlFor="name">
								<span className="label-text text-lg">Name</span>
							</label>
							<input type="text" id="name" name="name" placeholder="Enter your name" className="input input-bordered" />
							<p className="text-red-500 mt-2"></p> {/* Error Message */}
						</div>
						
						<div className="form-control">
							<label className="label pl-0" htmlFor="email">
								<span className="label-text text-lg">Email</span>
							</label>
							<input type="email" id="email" name="email" placeholder="Enter your email address" className="input input-bordered" />
							<p className="text-red-500 mt-2">{emailError}</p> {/* Error Message */}
						</div>
						<div className="relative form-control">
							<label className="label pl-0" htmlFor="password">
								<span className="label-text text-lg">Password</span>
							</label>
							<input type={showPassword ? "text" : "password"} id="password" name="password" placeholder="Enter your password" className="input input-bordered" autoComplete='true' />
							<button onClick={handleShowPassword} className="btn btn-ghost absolute bottom-0 right-0 rounded-l-none">
								{
									showPassword ? <FaRegEyeSlash className='text-lg md:text-xl font-bold' /> : <FaRegEye className='text-lg md:text-xl font-bold' />
								}
							</button>
						</div>
						<p className="text-red-500">{passwordError}</p>

						<div className="form-control">
							<label className="label pl-0" htmlFor="photoURL">
								<span className="label-text text-lg">Photo URL</span>
							</label>
							<input type="text" id="photoURL" name="photoURL" placeholder="Enter your photo url" className="input input-bordered" />
							<p className="text-red-500 mt-2"></p> {/* Error Message */}
						</div>
						<div className="form-control mt-4">
							<label className="label !justify-start text-md gap-2 cursor-pointer">
								<input onChange={handleAcceptTerms} type="checkbox" className="checkbox checkbox-sm rounded-md border-gray-400 shadow-sm" id="terms" />
								<span htmlFor="terms" className="label-text ">Accept</span>
								{/* To Open Modal */}
								<label htmlFor="terms-modal" className=" link link-primary font-semibold transition-all hover:duration-200 text-blue-600 hover:text-blue-700"> Terms & Conditions.</label>
							</label>
						</div>
						<div className="form-control mt-1">
							{/* <button className="btn btn-primary text-lg" type="submit" disabled={!acceptTerms}>Register</button> */}
							<button type="submit" className="flex gap-3 mx-auto md:mx-0 w-full items-center justify-center text-white bg-gradient-to-br from-purple-600 to-blue-500 hover:bg-gradient-to-bl focus:ring-2 focus:outline-none focus:ring-blue-300 dark:focus:ring-blue-800 font-semibold rounded-lg text-lg px-8 py-2 text-center disabled:from-slate-300 disabled:to-slate-400 disabled:text-slate-600 tooltip tooltip-bottom" data-tip={!acceptTerms ? "Please Accept Terms & Conditions" : "Click to Register"} disabled={!acceptTerms}>Register</button>
						</div>
					</div>
				</form>
				<div className="p-6 md:p-8 !pb-1 pt-1 md:pt-2 text-center">
					Already have an account? &nbsp;
					<Link to="/login" className='link link-primary font-semibold transition-all hover:duration-200 text-blue-600 hover:text-blue-700'>Login</Link>
				</div>

				{/* <div className='border-t border-slate-300 my-4 mx-6 md:mx-8'></div> */}
				<div className="divider">OR</div>

				<div className="!px-6 md:!px-8 !pt-3 card-body">
					{/* <div className="form-control">
						<button onClick={handleGoogleRegistration} className="btn btn-outline btn-primary text-lg">
							<FaGoogle className="mr-2" /> Register with Google
						</button>
					</div>
					<div className="form-control mt-1 mb-5">
						<button onClick={handleGitHubRegistration} className="btn btn-outline btn-base text-lg">
							<FaGithub className="mr-2" /> Register with GitHub
						</button>
					</div> */}
					<div className="form-control mt-1 mb-5">
						<button onClick={handleGoogleRegistration} className="relative flex w-100 items-center justify-center p-0.5 overflow-hidden text-lg font-semibold text-blue-700 rounded-lg group bg-gradient-to-br from-blue-600 to-blue-500 group-hover:from-blue-600 group-hover:to-blue-500 hover:text-white dark:text-white focus:ring-2 focus:outline-none focus:ring-blue-300 dark:focus:ring-blue-800">
							<span className="flex items-center justify-center w-full px-5 py-2.5 transition-all ease-in duration-75 bg-white dark:bg-gray-900 rounded-md group-hover:bg-opacity-0">
								<FaGoogle className="mr-2 self-center" /> Register with Google
							</span>
						</button>
					</div>
				</div>
			</div>

			{/* Terms & Conditions Modal */}
			<Terms></Terms>
		</section>
	);
};

export default Registration;
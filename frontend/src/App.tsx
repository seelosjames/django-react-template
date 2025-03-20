import { BrowserRouter as Router, Route, Routes, Link } from "react-router-dom";
import { FaUserCircle } from "react-icons/fa";

function App() {
	return (
		<Router>
			{/* Header */}
			<header className="w-full bg-white shadow-md py-4 px-6 flex justify-between items-center">
				{/* Logo Section */}
				<div className="flex items-center space-x-4">
					<img src="src/react-logo.png" alt="React Logo" className="h-12 w-12 object-contain" />
					<span className="text-3xl font-bold text-gray-700">+</span>
					<img src="src/django-logo.png" alt="Django Logo" className="h-12 w-12 object-contain" />
				</div>

				{/* Authentication Section */}
				<div>
					{true ? (
						<div className="flex items-center space-x-4">
							<FaUserCircle className="text-gray-700 text-2xl" />
							<button onClick={() => console.log("Logout")} className="px-4 py-2 bg-red-500 text-white rounded-lg hover:bg-red-600 transition">
								Logout
							</button>
						</div>
					) : (
						<div className="space-x-4">
							<button className="px-4 py-2 bg-blue-500 text-white rounded-lg hover:bg-blue-600 transition">Sign Up</button>
							<button className="px-4 py-2 bg-gray-300 text-gray-800 rounded-lg hover:bg-gray-400 transition">Login</button>
						</div>
					)}
				</div>
			</header>

			{/* Main Content */}
			<div className="flex flex-col items-center justify-center min-h-screen bg-white text-gray-900 p-6">
				{/* Logo Section */}
				<div className="flex items-center space-x-8 mb-6">
					<img src="src/react-logo.png" alt="React Logo" className="h-64 w-64 object-contain" />
					<span className="text-6xl font-bold text-gray-700">+</span>
					<img src="src/django-logo.png" alt="Django Logo" className="h-64 w-64 object-contain" />
				</div>

				{/* Headline */}
				<h1 className="text-5xl font-extrabold text-center mb-4">Welcome to My Django/React Template</h1>

				{/* Subtitle */}
				<p className="text-lg text-gray-600 text-center max-w-2xl">
					A modern, scalable, and efficient starter template for building full-stack applications with Django and React.
				</p>
			</div>

			{/* Routes */}
			<Routes>
				<Route path="/signin" element={<div className="text-center text-2xl">Sign In Page</div>} />
				<Route path="/create-account" element={<div className="text-center text-2xl">Create Account Page</div>} />
				<Route path="/user-info" element={<div className="text-center text-2xl">User Information Page</div>} />
			</Routes>
		</Router>
	);
}

export default App;

import { BrowserRouter as Router, Route, Routes, Link } from "react-router-dom";

function App() {
	return (
		<Router>
			{/* Header */}
			<header className="w-full bg-white shadow-md fixed top-0 left-0 z-10">
				<div className="max-w-6xl mx-auto flex justify-between items-center p-4">
					<h1 className="text-2xl font-bold text-indigo-600">My Django/React App</h1>
					<nav className="flex space-x-4">
						<Link to="/signin">
							<button className="px-4 py-2 text-white bg-indigo-500 rounded-lg shadow-md hover:bg-indigo-600 transition duration-200">
								Sign In
							</button>
						</Link>
						<Link to="/create-account">
							<button className="px-4 py-2 text-white bg-green-500 rounded-lg shadow-md hover:bg-green-600 transition duration-200">
								Create Account
							</button>
						</Link>
						<button className="px-4 py-2 text-white bg-red-500 rounded-lg shadow-md hover:bg-red-600 transition duration-200">
							Logout
						</button>
					</nav>
				</div>
			</header>

			{/* Main Content */}
			<div className="flex flex-col items-center justify-center min-h-screen bg-gradient-to-r from-blue-400 via-indigo-500 to-purple-600 p-6 pt-20">
				<h1 className="text-4xl font-bold text-white mb-8 shadow-lg">Welcome to My Django/React Template</h1>
				<Link to="/user-info">
					<button className="px-6 py-3 text-lg font-semibold text-white bg-blue-500 rounded-lg shadow-md hover:bg-blue-600 transition duration-200 transform hover:scale-105">
						User Information
					</button>
				</Link>
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

import { BrowserRouter as Router, Route, Routes, Link } from "react-router-dom";

function App() {

  return (
		<Router>
			<div className="flex flex-col items-center justify-center min-h-screen bg-gray-100 p-4">
				<h1 className="text-4xl font-bold mb-6">Welcome to My Django/React Template</h1>
				<div className="flex flex-col gap-4">
					<Link to="/signin">
						<button className="w-48">Sign In</button>
					</Link>
					<Link to="/create-account">
						<button className="w-48">Create Account</button>
					</Link>
					<Link to="/user-info">
						<button className="w-48">User Information</button>
					</Link>
					<button className="w-48 bg-red-500 hover:bg-red-600">Logout</button>
				</div>
			</div>
			<Routes>
				<Route path="/signin" element={<div>Sign In Page</div>} />
				<Route path="/create-account" element={<div>Create Account Page</div>} />
				<Route path="/user-info" element={<div>User Information Page</div>} />
			</Routes>
		</Router>
	);
}

export default App

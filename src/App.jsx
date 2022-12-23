import { useState, createContext } from "react"
import { BrowserRouter, Routes, Route } from "react-router-dom"
import Input from "./input/Input"
import Animation from "./Animation"

export const AnimDataContext = createContext();
export const SetAnimDataContext = createContext();

export const SetShowNotAllValsAlertContext = createContext();
export const ShowNotAllValsAlertContext = createContext();

export const ShowInvalidValsAlertContext = createContext();
export const SetShowInvalidValsAlertContext = createContext();
export const SetInvalidValsAlertContent = createContext();

export default function App() {
	const palettes = [
		["#a1a2a6", "#024959", "#f2C12e", "#f2ae30", "#593e25"],
		["#8C1F28", "#591C21", "#044040", "#D92525", "#F2F2F2"],
		["#363432", "#196774", "#90A19D", "#F0941F", "#EF6024"],
		["#FF4858", "#1B7F79", "#00CCC0", "#72F2EB", "#747F7F"],
		["#BD2A2E", "#3B3936", "#B2BEBF", "#889C9B", "#486966"],
	]
	const randomPalette = palettes[Math.floor(Math.random() * palettes.length)];

	const defaultAnimData = {
		gravity: false,
		friction: 1.2,
		collisions: false,
		shapesAmount: 10,
		rectangles: {
				checked: true,
				width: 60,
				height: 40,
				cornerRadius: 5,
				filled: true,
				widthRand: true,
				widthRandRange: [50, 100],
				heightRand: true,
				heightRandRange: [50, 100],
		},
		circles: {
			checked: true,
			radius: 20,
			filled: true,
			radiusRand: true,
			radiusRandRange: [20, 40]
		},
		velocity: 1,
		palettes: palettes,
		strokeColor: "#000000",
		fillColors: randomPalette,
		bgColor: "#ffffff"
	}
	const localStorageAnimData = JSON.parse(localStorage.getItem("animData"));
	const [animData, setAnimData] = useState(
		localStorageAnimData || defaultAnimData
	)
	
	// show alert that some input fields are blank
	const [showNotAllValsAlert, setShowNotAllValsAlert] = useState(false);
	const [showInvalidValsAlert, setShowInvalidValsAlert] = useState(false);
	// would look like: "Invalid friction!" or "Invalid rectangle width!"
	const [invalidValsAlertContent, setInvalidValsAlertContent] = useState("");


	localStorage.setItem("animData", JSON.stringify(animData));


	return (
		<>
			<BrowserRouter>
				<AnimDataContext.Provider value={animData}>
				<SetAnimDataContext.Provider value={setAnimData}>
				<SetShowNotAllValsAlertContext.Provider value={setShowNotAllValsAlert}>
				<ShowNotAllValsAlertContext.Provider value={showNotAllValsAlert}>
				<ShowInvalidValsAlertContext.Provider value={showInvalidValsAlert}>
				<SetShowInvalidValsAlertContext.Provider value={setShowInvalidValsAlert}>
					<Routes>
						<Route
							path="/"
							element={
								<Input />
							} 
						/>

						<Route
							path="/animation"
							element={
								<Animation />
							}
						/>
					</Routes>
				</SetShowInvalidValsAlertContext.Provider>
				</ShowInvalidValsAlertContext.Provider>
				</ShowNotAllValsAlertContext.Provider>
				</SetShowNotAllValsAlertContext.Provider>						
				</SetAnimDataContext.Provider>
				</AnimDataContext.Provider>
			</BrowserRouter>
		</>
	)
}
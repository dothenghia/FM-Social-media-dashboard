import { useState } from "react";

import Header from "./components/Header/Header";
import Statistics from "./components/Statistics/Statistics";

const App = () => {
	const [darkTheme, setDarkTheme] = useState(false)

	const hanldeSetDarkTheme = () => {
		setDarkTheme(!darkTheme);
	}

	return (
		<div id="app" className={`${(darkTheme ? 'dark bg-DarkBG' : 'bg-LightBG')} pb-10`}>
			<div className="max-w-[1130px] mx-auto">
				<Header toggleTheme={hanldeSetDarkTheme}/>
				<Statistics/>
			</div>
		</div>
	);
};

export default App;

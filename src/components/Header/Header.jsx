
import './header.css'

const Header = ({ toggleTheme }) => {
	return (
		<div className="flex flex-col py-8 px-5 md:flex-row md:justify-between md:items-center
						dark:bg-DarkBG">
			<div className="">
				<h1 className="font-bold text-2xl text-LightBigText dark:text-DarkBigText">Social Media Dashboard</h1>
				<p className="font-bold text-LightText dark:text-DarkText">Total Followers: 23,004</p>
			</div>

			<div className="w-full h-[1px] my-5 bg-LightText dark:bg-DarkText md:hidden"></div>

			<div className="flex items-center justify-between">
				<span className="font-bold text-LightText dark:text-DarkBigText text-sm pr-2">Dark Mode</span>
				
				<input type="checkbox" className="header-checkbox" id="header-checkbox" />
				<label htmlFor="header-checkbox" className="header-label" onClick={toggleTheme}></label>
			</div>
		</div>
    );
};

export default Header;

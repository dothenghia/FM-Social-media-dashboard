
import './header.css'

const Header = () => {
	return (
		<div className="bg-LightCardBG flex flex-col py-8 px-5 md:flex-row md:justify-between md:items-center">
			<div className="">
				<h1 className="font-bold text-2xl text-LightBigText">Social Media Dashboard</h1>
				<p className="font-bold text-LightText">Total Followers: 23,004</p>
			</div>

			<div className="w-full h-[1px] my-5 bg-LightText md:hidden"></div>

			<div className="flex items-center justify-between">
				<span className="font-bold text-LightText text-sm pr-2">Dark Mode</span>
				
				<input type="checkbox" className="header-checkbox" id="header-checkbox" />
				<label htmlFor="header-checkbox" className="header-label"></label>
			</div>
		</div>
    );
};

export default Header;

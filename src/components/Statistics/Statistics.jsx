
import Card from "../Card/Card";
import OverviewCard from '../OverviewCard/OverviewCard'

import FBLogo from '../../assets/images/icon-facebook.svg'
import TWLogo from '../../assets/images/icon-twitter.svg'
import IGLogo from '../../assets/images/icon-instagram.svg'
import YTLogo from '../../assets/images/icon-youtube.svg'

const cardData = [
	{
		type: 'Facebook',
		logo: FBLogo,
		name: '@nathanf',
		number: '1987',
		upTrend: true,
		numTrend: 12,
	},
	{
		type: 'Twitter',
		logo: TWLogo,
		name: '@nathanf',
		number: '1044',
		upTrend: true,
		numTrend: 99,
	},
	{
		type: 'Instagram',
		logo: IGLogo,
		name: '@realnathanf',
		number: '11k',
		upTrend: true,
		numTrend: 1099,
	},
	{
		type: 'YouTube',
		logo: YTLogo,
		name: 'Nathan F.',
		number: '8239',
		upTrend: false,
		numTrend: 144,
	},
]

const overviewData = [
	{
		type: 'Facebook Views',
		name: 'Page Views',
		logo: FBLogo,
		number: '87',
		upTrend: true,
		numTrend: 3,
	},
	{
		type: 'Facebook Likes',
		name: 'Likes',
		logo: FBLogo,
		number: '52',
		upTrend: false,
		numTrend: 2,
	},
	{
		type: 'Instagram Likes',
		name: 'Likes',
		logo: IGLogo,
		number: '5462',
		upTrend: true,
		numTrend: 2257,
	},
	{
		type: 'Instagram Views',
		name: 'Profile Views',
		logo: IGLogo,
		number: '52k',
		upTrend: true,
		numTrend: 1375,
	},
	{
		type: 'Twitter Retweets',
		name: 'Retweets',
		logo: TWLogo,
		number: '117',
		upTrend: true,
		numTrend: 303,
	},
	{
		type: 'Twitter',
		name: 'Likes',
		logo: TWLogo,
		number: '507',
		upTrend: true,
		numTrend: 553,
	},
	{
		type: 'YouTube Likes',
		name: 'Likes',
		logo: YTLogo,
		number: '107',
		upTrend: false,
		numTrend: 19,
	},
	{
		type: 'YouTube Views',
		name: 'Total Views',
		logo: YTLogo,
		number: '1407',
		upTrend: false,
		numTrend: 12,
	},
]

const Statistics = () => {
	return (
		<div className="p-5 dark:bg-DarkBG">
			<div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-5">
				{cardData.map(card => (
					<Card 
						key={card.type} 
						card={card}
					/>
				))}
			</div>

			<h1 className="mt-10 mb-5 text-2xl font-bold text-LightText dark:text-DarkBigText">Overview - Today</h1>

			<div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-5">
				{overviewData.map(card => (
					<OverviewCard
						key={card.type}
						card={card}
					/>
				))}
			</div>
		</div>
	);
};

export default Statistics;
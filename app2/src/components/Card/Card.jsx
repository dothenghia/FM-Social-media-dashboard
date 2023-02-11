
import downIcon from '../../assets/images/icon-down.svg'
import upIcon from '../../assets/images/icon-up.svg'

const BACKGROUND_MAP = {
	'Facebook': 'bg-Facebook',
	'Twitter': 'bg-Twitter',
	'Instagram': 'bg-gradient-to-r from-[#fdc468] to-[#df4996]',
	'YouTube': 'bg-YouTube',
}

const Card = ({ card }) => {
	return (
		<div className="w-full h-[220px] bg-LightCardBG rounded-md overflow-hidden flex flex-col items-center
						hover:bg-LightCardBGHover cursor-pointer">
			<div className={`w-full h-1 ${BACKGROUND_MAP[card.type]}`}></div>

			<div className='mt-6'>
				<img src={card.logo} alt={card.type} className='inline-block'/>
				<p className='inline-block ml-2 text-sm font-bold text-LightText'>{card.name}</p>
			</div>

			<h1 className='mt-5 text-6xl font-bold text-LightBigText'>{card.number}</h1>

			<h2 className='mt-1 text-sm text-LightText tracking-[5px]'>
				{(card.type !== 'YouTube') ? 'FOLLOWERS' : 'SUBSCRIBERS'}
			</h2>

			<div className='mt-3'>
				<img src={(card.upTrend ? upIcon : downIcon)} alt="Up Icon" className='inline-block'/>
				<p className={`inline-block ml-2 text-xs font-bold 
					${card.upTrend ? 'text-LimeGreen' : 'text-BrightRed'}`}>{card.numTrend} Today
				</p>
			</div>
		</div>
	);
};

export default Card;

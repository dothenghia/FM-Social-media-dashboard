
import downIcon from '../../assets/images/icon-down.svg'
import upIcon from '../../assets/images/icon-up.svg'

const OverviewCard = ({ card }) => {
    return (
        <div className='w-full h-[124px] p-6 bg-LightCardBG rounded-md flex flex-col justify-between
                        hover:bg-LightCardBGHover cursor-pointer
                        dark:bg-DarkCardBG dark:hover:bg-DarkCardBGHover'>
            <div className="flex justify-between">
                <p className='font-bold text-LightText dark:text-DarkText text-sm'>{card.name}</p>
				<img src={card.logo} alt={card.type} className='w-6 h-6'/>
            </div>

            <div className="flex justify-between">
                <h1 className='text-4xl font-bold text-LightBigText dark:text-DarkBigText'>{card.number}</h1>

				<div className='flex items-center pt-4'>
                    <img src={card.upTrend ? upIcon : downIcon} alt="Icon Trend" className='inline-block'/>
                    <p className={`inline-block ml-2 text-xs font-bold 
                    ${card.upTrend ? 'text-LimeGreen' : 'text-BrightRed'}`}>{card.numTrend} %</p>
                </div>
            </div>
        </div>
    );
};

export default OverviewCard;

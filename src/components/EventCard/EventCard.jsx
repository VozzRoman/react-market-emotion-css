//Component EventCard
import PropType from 'prop-types';
import { FaMapMarkerAlt, FaFortAwesomeAlt, FaCalendarAlt, FaClock } from "react-icons/fa"; //либа иконки
// import { formatEventStar } from 'utils/formatEventStar';
// import { formatEventDuration } from 'utils/formatEventDuration';
import { formatEventStar, formatEventDuration } from 'utils';
// import css from './EventCard.module.css';
import { Card, Chip, Info, EventName} from './EventCard.styled';
export const EventCard = ({ name, location, type, speaker, start, end }) => {
	const formatedDate = formatEventStar(start);
	const formatDuration = formatEventDuration(start, end)
	return (
		<Card>
			<EventName>{name}</EventName>
			<Info>
				<FaMapMarkerAlt size={16} />
				
				{location}
			</Info>
			<Info>
				<FaFortAwesomeAlt size={16} />
				
				{speaker}
			</Info>
			<Info>
				<FaCalendarAlt size={16} />
				
				{formatedDate}
			</Info>
			<Info>
				<FaClock size={16} />
				
				{formatDuration}
			</Info>
			<Chip eventType={type}>{type}</Chip>
		</Card>
	);
};

EventCard.propTypes = {
	name: PropType.string.isRequired,
	location: PropType.string.isRequired,
	type: PropType.string.isRequired,
	speaker: PropType.string.isRequired,
	start: PropType.string.isRequired,
	end: PropType.string.isRequired
};


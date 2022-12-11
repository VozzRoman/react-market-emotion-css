//Component EventBoard
import PropTypes from 'prop-types';
import { EventCard } from 'components/EventCard/EventCard';
import css from './EventBoard.module.css';
export const EventBoard = ({ events }) => {
	console.log(events);
	return (
		<div>
			<div className={css.eventBoard}>
				{events.map(event => (
					<EventCard key={event.name}
						name={event.name}
						location={event.location}
						type={event.type}
						speaker={event.speaker}
						start={event.time.start}
						end={event.time.end}
					/>
				))}
			</div>
		</div>
	);
		
	
};

EventBoard.propTypes = {
	events: PropTypes.arrayOf(
		PropTypes.exact({
			name: PropTypes.string.isRequired,
			location: PropTypes.string.isRequired,
			type: PropTypes.string.isRequired,
			speaker: PropTypes.string.isRequired,
			time: PropTypes.exact( {
				start: PropTypes.string.isRequired,
				end: PropTypes.string.isRequired,
			}),
		}),
	),
};
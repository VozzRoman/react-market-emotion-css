
import { PageTitle } from "../components/PageTitle/PageTitle";
import { EventBoard } from "../components/EventBoard/EventBoard";
import eventsData from '../eventsData.json';
import { Container } from "./App.styled";
export const App = () => { // именованный экспорт
	return (
		<div>
			<Container>
			<PageTitle text="24th Core Worlds Coalition Conference" />
				<EventBoard events={eventsData} />
			</Container>
		</div>

	) 
};

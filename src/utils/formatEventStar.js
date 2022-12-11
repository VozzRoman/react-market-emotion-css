
import { format } from "date-fns";
export const formatEventStar = start => { // функция форматирования Даты
	
	return format(Date.parse(start), 'dd MMMM yyyy, HH:mm');
	
}
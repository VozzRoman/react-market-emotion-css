import styled from "@emotion/styled";

export const Card = styled.div`
	position: relative;
	border: 2px dashed;
	padding: 8px;
	border-radius: 4px;
`;
export const EventName = styled.h2`
	margin-top: 0;
	font-size: 14px;
	line-height: 24px;
	font-weight: 700;
	letter-spacing: 0.5px;
	text-transform: uppercase;
`;
export const Info = styled.p`
	display: flex;
	align-items: center;
	margin-top: 0;
	margin-bottom: 8px;
	color: gray;
	font-size: 16px;
	font-weight: 400;
	letter-spacing: 0.25px;
 svg {
	display: block;
	margin-right: 8px;
	color: #000;
 }
`;

export const Chip = styled.span`
position: absolute;
	top: 4px;
	right: 4px;
	padding: 4px 8px;
	border-radius: 4px;
	text-transform: uppercase;
	background-color: #000;
	color: #fff;

	background-color: ${props => {
	switch (props.eventType) {
		case 'free':
			return 'green';
		case 'paid':
			return 'blue';
		case 'vip':
			return 'red';
		default:
			return 'black';
	}
	}}
`;


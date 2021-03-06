import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import { Segment, List, Label, Item } from 'semantic-ui-react';

const EventSidebar = ({ attendees = [] }) => {
	return (
		<div>
			<Segment
				textAlign="center"
				style={{ border: 'none' }}
				attached="top"
				secondary
				inverted
				color="teal"
			>
				{attendees.length} {attendees.length > 1 ? 'People' : 'Person'} Going
			</Segment>
			<Segment attached>
				<List relaxed divided>
					{attendees.map(a => (
						<Item style={{ position: 'relative' }} key={a.id}>
							{a.isHost ? (
								<Label
									style={{ position: 'absolute' }}
									color="orange"
									ribbon="right"
								>
									Host
								</Label>
							) : null}
							<Item.Image size="tiny" src={a.photoURL} />
							<Item.Content verticalAlign="middle">
								<Item.Header as="h3">
									<Link to={`/profile/${a.id}`}>{a.displayName}</Link>
								</Item.Header>
							</Item.Content>
						</Item>
					))}
				</List>
			</Segment>
		</div>
	);
};

EventSidebar.propTypes = {
	attendees: PropTypes.arrayOf(PropTypes.shape({})),
};

export default EventSidebar;

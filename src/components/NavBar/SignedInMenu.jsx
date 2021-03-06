import React from 'react';
import PropTypes from 'prop-types';
import { Menu, Dropdown, Image } from 'semantic-ui-react';
import { NavLink } from 'react-router-dom';

const SignedInMenu = ({ signOut, profile, auth }) => (
	<Menu.Item position="right">
		<Image avatar spaced="right" src={profile.photoURL || '/assets/user.png'} />
		<Dropdown pointing="top left" text={profile.displayName}>
			<Dropdown.Menu>
				<Dropdown.Item text="Create Event" icon="plus" />
				<Dropdown.Item text="My Events" icon="calendar" />
				<Dropdown.Item text="My Network" icon="users" />
				<Dropdown.Item
					as={NavLink}
					to={`/profile/${auth.uid}`}
					text="My Profile"
					icon="user"
				/>
				<Dropdown.Item as={NavLink} to="/settings" text="Settings" icon="settings" />
				<Dropdown.Item onClick={signOut} text="Sign Out" icon="power" />
			</Dropdown.Menu>
		</Dropdown>
	</Menu.Item>
);

SignedInMenu.propTypes = {
	// currentUser: PropTypes.shape({}).isRequired,
	signOut: PropTypes.func.isRequired,
};

export default SignedInMenu;

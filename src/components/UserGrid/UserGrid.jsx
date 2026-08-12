import React from 'react';
import UserCard from '../UserCard/UserCard';
import './UserGrid.css';

const UserGrid = ({ users, onSelectUser }) => {
  return (
    <div className="user-grid" role="region" aria-label="User grid layout">
      {users.map((user) => (
        <UserCard key={user.login.uuid || user.email} user={user} onSelectUser={onSelectUser} />
      ))}
    </div>
  );
};

export default UserGrid;

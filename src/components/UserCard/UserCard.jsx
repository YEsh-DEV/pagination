import React from 'react';
import { Mail, MapPin, Phone, Calendar, ArrowRight } from 'lucide-react';
import './UserCard.css';

const UserCard = ({ user, onSelectUser }) => {
  const { name, email, picture, location, phone, dob, gender, nat } = user;
  const fullName = `${name.title} ${name.first} ${name.last}`;

  return (
    <article 
      className="user-card"
      onClick={() => onSelectUser(user)}
      role="button"
      tabIndex={0}
      onKeyDown={(e) => {
        if (e.key === 'Enter' || e.key === ' ') {
          e.preventDefault();
          onSelectUser(user);
        }
      }}
      aria-label={`View details for ${fullName}`}
    >
      <div className="card-header-badge">
        <span className={`gender-badge ${gender}`}>{gender}</span>
        <span className="nat-badge">{nat}</span>
      </div>

      <div className="avatar-wrapper">
        <img 
          src={picture.large || picture.medium} 
          alt={fullName} 
          className="user-avatar"
          loading="lazy"
        />
        <span className="online-indicator" title="Active Account"></span>
      </div>

      <div className="user-info">
        <h2 className="user-name" title={fullName}>{fullName}</h2>
        
        <div className="info-row email-row" title={email}>
          <Mail size={14} className="info-icon" />
          <span className="info-text">{email}</span>
        </div>

        <div className="info-row">
          <MapPin size={14} className="info-icon" />
          <span className="info-text">{location.city}, {location.country}</span>
        </div>

        <div className="card-extra-grid">
          <div className="extra-item">
            <Phone size={12} className="extra-icon" />
            <span>{phone}</span>
          </div>
          <div className="extra-item">
            <Calendar size={12} className="extra-icon" />
            <span>{dob.age} yrs</span>
          </div>
        </div>
      </div>

      <div className="card-footer-action">
        <span>View Details</span>
        <ArrowRight size={14} className="arrow-icon" />
      </div>
    </article>
  );
};

export default UserCard;

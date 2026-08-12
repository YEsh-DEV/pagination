import React, { useEffect } from 'react';
import { X, Mail, Phone, MapPin, Calendar } from 'lucide-react';
import './UserModal.css';

const UserModal = ({ user, onClose }) => {
  useEffect(() => {
    const handleKeyDown = (e) => {
      if (e.key === 'Escape') {
        onClose();
      }
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [onClose]);

  if (!user) return null;

  const { name, email, picture, location, phone, cell, dob, gender, nat } = user;
  const fullName = `${name.title} ${name.first} ${name.last}`;
  const dobFormatted = new Date(dob.date).toLocaleDateString('en-US', {
    year: 'numeric',
    month: 'long',
    day: 'numeric'
  });

  return (
    <div className="modal-overlay" onClick={onClose} role="dialog" aria-modal="true" aria-labelledby="modal-user-name">
      <div className="modal-content" onClick={(e) => e.stopPropagation()}>
        <button className="modal-close-btn" onClick={onClose} aria-label="Close user modal" title="Close">
          <X size={20} />
        </button>

        <div className="modal-header-banner">
          <div className="modal-avatar-container">
            <img src={picture.large} alt={fullName} className="modal-avatar" />
            <span className="modal-online-badge"></span>
          </div>
        </div>

        <div className="modal-body">
          <h2 id="modal-user-name" className="modal-title">{fullName}</h2>

          <div className="modal-tags">
            <span className={`modal-tag gender ${gender}`}>{gender}</span>
            <span className="modal-tag nat">Nationality: {nat}</span>
            <span className="modal-tag age">{dob.age} Years Old</span>
          </div>

          <div className="modal-section-grid">
            {/* Contact Information */}
            <div className="modal-info-card">
              <h3 className="card-section-title">
                <Mail size={16} /> Contact Details
              </h3>
              <div className="modal-detail-row">
                <span className="detail-label">Email:</span>
                <a href={`mailto:${email}`} className="detail-value link">{email}</a>
              </div>
              <div className="modal-detail-row">
                <span className="detail-label">Phone:</span>
                <span className="detail-value">{phone}</span>
              </div>
              <div className="modal-detail-row">
                <span className="detail-label">Cell:</span>
                <span className="detail-value">{cell}</span>
              </div>
            </div>

            {/* Location Information */}
            <div className="modal-info-card">
              <h3 className="card-section-title">
                <MapPin size={16} /> Location & Address
              </h3>
              <div className="modal-detail-row">
                <span className="detail-label">Street:</span>
                <span className="detail-value">{location.street.number} {location.street.name}</span>
              </div>
              <div className="modal-detail-row">
                <span className="detail-label">City/State:</span>
                <span className="detail-value">{location.city}, {location.state}</span>
              </div>
              <div className="modal-detail-row">
                <span className="detail-label">Country:</span>
                <span className="detail-value highlight">{location.country} ({location.postcode})</span>
              </div>
            </div>

            {/* Personal Info */}
            <div className="modal-info-card full-width">
              <h3 className="card-section-title">
                <Calendar size={16} /> Personal Information
              </h3>
              <div className="modal-detail-row">
                <span className="detail-label">Date of Birth:</span>
                <span className="detail-value">{dobFormatted}</span>
              </div>
              <div className="modal-detail-row">
                <span className="detail-label">Timezone:</span>
                <span className="detail-value">{location.timezone.offset} ({location.timezone.description})</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default UserModal;

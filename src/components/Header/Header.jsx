import React from 'react';
import { Users, Sparkles } from 'lucide-react';
import './Header.css';

const Header = ({ totalUsers, filteredCount, activePage, totalPages, theme, setTheme, fontStyle, setFontStyle }) => {
  return (
    <header className="app-header">
      <div className="header-container">
        <div className="brand-group">
          <div className="brand-icon">
            <Users size={24} />
          </div>
          <div className="brand-text">
            <h1 className="brand-title">
              User<span className="brand-highlight">Directory</span>
            </h1>
            <p className="brand-subtitle">
              <Sparkles size={13} className="sparkle-icon" />
              Random User Pagination & Search Dashboard
            </p>
          </div>
        </div>

        <div className="header-actions">
          <div className="theme-select-wrapper">
            <select
              className="theme-select"
              value={theme}
              onChange={(e) => setTheme(e.target.value)}
              aria-label="Select Theme Preset"
              title="Change Application Color Theme"
            >
              <option value="warm">✨ Classic Warm</option>
              <option value="dark">🌙 Midnight Dark</option>
              <option value="cyberpunk">⚡ Neon Cyberpunk</option>
            </select>
          </div>

          <div className="font-select-wrapper">
            <select
              className="font-select"
              value={fontStyle}
              onChange={(e) => setFontStyle(e.target.value)}
              aria-label="Select Font Style"
              title="Change Directory Typography Font"
            >
              <option value="serif">✍️ Elegant Serif</option>
              <option value="sans">📱 Modern Sans</option>
              <option value="mono">💻 Minimal Mono</option>
            </select>
          </div>

          <div className="header-stats">
            <div className="stat-badge">
              <span className="stat-label">Total Fetched</span>
              <span className="stat-value">{totalUsers} Users</span>
            </div>
            {filteredCount !== totalUsers && (
              <div className="stat-badge filtered">
                <span className="stat-label">Matching Search</span>
                <span className="stat-value">{filteredCount} Users</span>
              </div>
            )}
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;

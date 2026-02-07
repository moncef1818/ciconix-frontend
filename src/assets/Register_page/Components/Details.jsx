import React from 'react'
import './Details.css'

const Details = () => {
  return (
    <div>
        <section  className="details">
            <div className="container">
              <h2 className="section-title">CICONIX Details</h2>
              <p className="section-subtitle">Everything you need to know</p>
              <div className="details-grid">
                <div className="detail-card">
                    <div className="detail-icon">
                        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="rgba(113, 16, 22, 0.43)" strokeWidth="2">
                            <rect x="3" y="4" width="18" height="18" rx="2" ry="2"></rect>
                            <line x1="16" y1="2" x2="16" y2="6"></line>
                            <line x1="8" y1="2" x2="8" y2="6"></line>
                            <line x1="3" y1="10" x2="21" y2="10"></line>
                        </svg>
                    </div>
                    <div className="detail-content">
                        <h3>Date & Duration</h3>
                        <p className="detail-value">February 12-14, 2026</p>
                        <p className="detail-note">55 hours of continuous innovation</p>
                    </div>
                </div>
                <div className="detail-card">
                    <div className="detail-icon">
                        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="rgba(113, 16, 22, 0.43)" strokeWidth="2">
                            <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z"></path>
                            <circle cx="12" cy="10" r="3"></circle>
                        </svg>
                    </div>
                    <div className="detail-content">
                        <h3>Location</h3>
                        <p className="detail-value">National School of Cyber Security - Sidi Abdallah university poll</p>
                    </div>
                </div>
                <div className="detail-card">
                    <div className="detail-icon">
                        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="rgba(113, 16, 22, 0.43)" strokeWidth="2">
                            <path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2"></path>
                            <circle cx="9" cy="7" r="4"></circle>
                            <path d="M23 21v-2a4 4 0 0 0-3-3.87"></path>
                            <path d="M16 3.13a4 4 0 0 1 0 7.75"></path>
                        </svg>
                    </div>
                    <div className="detail-content">
                        <h3>Team Size</h3>
                        <p className="detail-value">4-5 members per team</p>
                        <p className="detail-note">Solo participants welcome</p>
                    </div>
                </div>
                <div className="detail-card">
                    <div className="detail-icon">
                        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="rgba(113, 16, 22, 0.43)" strokeWidth="2">
                            <circle cx="12" cy="12" r="10"></circle>
                            <polyline points="12 6 12 12 16 14"></polyline>
                        </svg>
                    </div>
                    <div className="detail-content">
                        <h3>Eligibility</h3>
                        <p className="detail-value">Open to all</p>
                        <p className="detail-note">Students, professionals, and enthusiasts</p>
                    </div>
                </div>
              </div>
            </div>
        </section>

        <section className="structure" >
            <div className="container">
              <h2 className="section-title">Event Structure</h2>
              <p className="section-subtitle">Choose your path</p>
              <div className="structure-grid">
                   <div className="structure-card">
                       <div className='card-name'>
                            <div className="structure-icon workshop">
                             <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="rgba(249, 228, 192, 1)" strokeWidth="2">
                                <path d="M2 3h6a4 4 0 0 1 4 4v14a3 3 0 0 0-3-3H2z"></path>
                                <path d="M22 3h-6a4 4 0 0 0-4 4v14a3 3 0 0 1 3-3h7z"></path>
                             </svg>
                            </div>
                            <h3>Workshop Pass</h3>
                       </div>
                        <p className="structure-desc">Perfect for those focused on learning and skill development</p>
                        <ul className="structure-features">
                           <li>Access to all workshops and training sessions</li>
                           <li>Hands-on labs and guided exercises</li>
                           <li>Learning materials and resources</li>
                           <li>Certificate of participation</li>
                           <li>Networking opportunities</li>
                      </ul>
                   </div>
                   <div className="structure-card ctfpass">
                        <span className="recommended-badge">Recommended</span>
                        <div className='card-name'>
                            <div className="structure-icon ctf">
                              <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="rgba(249, 228, 192, 1)" strokeWidth="2">
                                <polygon
                                  points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2">
                                </polygon>
                              </svg>
                            </div>
                            <h3>Project & CTF Pass</h3>
                        </div>
                       <p className="structure-desc">Complete hackathon experience with competitive elements</p>
                       <ul className="structure-features">
                          <li>Everything in Workshop Pass</li>
                          <li>Compete in Capture The Flag challenges</li>
                          <li>Build and submit security projects</li>
                          <li>Mentorship from industry experts</li>
                          <li>Eligibility for prizes and awards</li>
                          <li>Demo day presentation opportunity</li>
                       </ul>
                   </div>
              </div>
           </div>
        </section>

        {/* Updated Timeline Section based on Image Content */}
        <section className="timeline" >
            <div className="container">
                <h2 className="section-title">CICONIX TimeLine</h2>
                <p className="section-subtitle">Your journey through the quest</p>
                <div className="timeline-container">
                    <div className="timeline-line"></div>
                    
                    {/* Day 01: Start */}
                    <div className="timeline-item left">
                        <div className="timeline-dot"></div>
                        <div className="timeline-card">
                            <div className='card-title'>
                                <div className="timeline-icon">
                                    <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="rgba(255, 255, 255, 1)" strokeWidth="2">
                                        <path d="M18 8A6 6 0 0 0 6 8c0 7-3 9-3 9h18s-3-2-3-9"></path>
                                        <path d="M13.73 21a2 2 0 0 1-3.46 0"></path>
                                    </svg>
                                </div>
                                <h3 className="timeline-title">Day 01 - The Kickoff</h3>
                            </div>
                            <p className="timeline-date">02:00 PM - 05:00 PM</p>
                            <ul className="timeline-list-items" style={{color: '#aaa', fontSize: '0.9rem', listStyle: 'none', paddingLeft: 0}}>
                                <li>• Check-in & Registrations (02:00 PM)</li>
                                <li>• Opening Ceremony (03:00 PM)</li>
                                <li>• Challenge & Project Announcement (05:00 PM)</li>
                            </ul>
                        </div>
                    </div>

                    {/* Day 01 -> Day 02: Coding */}
                    <div className="timeline-item right">
                        <div className="timeline-dot"></div>
                        <div className="timeline-card">
                            <div className='card-title'>
                                <div className="timeline-icon">
                                    <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="rgba(255, 255, 255, 1)" strokeWidth="2">
                                        <polyline points="16 18 22 12 16 6"></polyline>
                                        <polyline points="8 6 2 12 8 18"></polyline>
                                    </svg>
                                </div>
                                <h3 className="timeline-title">Development Phase</h3>
                            </div>
                            <p className="timeline-date">Day 01 (05:00 PM) - Day 02 (05:00 PM)</p>
                            <p className="timeline-desc">Continuous Development & coding. The development phase continues overnight until 05:00 PM on Day 02.</p>
                        </div>
                    </div>

                    {/* Day 02: Evening */}
                    <div className="timeline-item left">
                        <div className="timeline-dot"></div>
                            <div className="timeline-card">
                                <div className='card-title'>
                                    <div className="timeline-icon">
                                        <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="2">
                                            <path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z"></path>
                                            <polyline points="14 2 14 8 20 8"></polyline>
                                        </svg>
                                    </div>
                                    <h3 className="timeline-title">Presentations & Networking</h3>
                                </div>
                                <p className="timeline-date">Day 02: 05:00 PM - 10:00 PM</p>
                                <ul className="timeline-list-items" style={{color: '#aaa', fontSize: '0.9rem', listStyle: 'none', paddingLeft: 0}}>
                                    <li>• Development Phase Ends (05:00 PM)</li>
                                    <li>• Project Presentations (05:00 PM - 08:00 PM)</li>
                                    <li>• Networking & Fun Activities (08:00 PM - 10:00 PM)</li>
                                </ul>
                            </div>
                        </div>

                        {/* Day 02 -> Day 03: CTF */}
                        <div className="timeline-item right">
                            <div className="timeline-dot"></div>
                            <div className="timeline-card">
                                <div className='card-title'>
                                    <div className="timeline-icon">
                                        <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="2">
                                            <circle cx="12" cy="12" r="10"></circle>
                                            <polyline points="12 6 12 12 16 14"></polyline>
                                        </svg>
                                    </div>
                                    <h3 className="timeline-title">CTF Competition</h3>
                                </div>
                                <p className="timeline-date">Day 02 (10:00 PM) - Day 03 (04:00 PM)</p>
                                <p className="timeline-desc">The 18-hour CTF Competition begins at 10:00 PM on Day 02 and continues through the night until 04:00 PM on Day 03.</p>
                            </div>
                        </div>

                        {/* Day 03: Closing */}
                        <div className="timeline-item left">
                            <div className="timeline-dot"></div>
                            <div className="timeline-card">
                                <div className='card-title'>
                                    <div className="timeline-icon">
                                        <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="2">
                                            <circle cx="12" cy="8" r="6"></circle>
                                            <path d="M15.477 12.89 17 22l-5-3-5 3 1.523-9.11"></path>
                                        </svg>
                                    </div>
                                    <h3 className="timeline-title">Grand Finale</h3>
                                </div>
                                <p className="timeline-date">Day 03 - 04:30 PM</p>
                                <p className="timeline-desc">CTF Competition ends at 04:00 PM, followed by the Closing Ceremony.</p>
                            </div>
                    </div>
                </div>
            </div>
        </section>
        
    </div>
  )
}

export default Details
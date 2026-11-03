/**
 * ==============================================================================
 * WEDDING CELEBRATIONS CONFIGURATION & SCRIPT
 * Ar. N. Bose Raj & Dr. H. Sree Babitha Sai
 * Mobile-First, Accessible, Bilingual (English & Tamil)
 * ==============================================================================
 */

const EVENT_CONFIG = {
  // ---------------------------------------------------------------------------
  // 1. COUPLE & DESIGNATIONS
  // ---------------------------------------------------------------------------
  groomPrefixEn: "Ar.",
  groomPrefixTa: "Ar.",
  groomNameEn: "N. Bose Raj",
  groomNameTa: "N. போஸ் ராஜ்",
  groomRoleEn: "The Architect",
  groomRoleTa: "கட்டடக் கலைஞர்",

  bridePrefixEn: "Dr.",
  bridePrefixTa: "Dr.",
  brideNameEn: "H. Sree Babitha Sai",
  brideNameTa: "H. ஸ்ரீ பபிதா சாய்",
  brideRoleEn: "The Doctor",
  brideRoleTa: "மருத்துவர்",

  coupleNamesEn: "Ar. N. Bose Raj & Dr. H. Sree Babitha Sai",
  coupleNamesTa: "Ar. N. போஸ் ராஜ் & Dr. H. ஸ்ரீ பபிதா சாய்",

  topMantraEn: "LOVE   ♥   FAMILY   ♥   FOREVER",
  topMantraTa: "அன்பு   ♥   குடும்பம்   ♥   என்றென்றும்",

  familyBlessingEn: "With the blessings of our families, we invite you to be a part of our special celebrations as we begin our journey together.",
  familyBlessingTa: "எங்கள் குடும்பத்தினரின் நல்லாசிகளுடன், நாங்கள் தொடங்கும் இந்த இனிய புதுப்பயணத்தில் தாங்கள் பங்கேற்று சிறப்பிக்க அன்புடன் அழைக்கிறோம்.",

  taglineLeftEn: "A New Beginning, A Lifetime Together ♥",
  taglineLeftTa: "ஒரு புதிய தொடக்கம், ஆயுள் முழுமைக்கும் இணைந்த பயணம் ♥",

  taglineRightEn: "With great joy, we invite you to share our happiness and make our wedding truly special with your gracious presence.",
  taglineRightTa: "மிக்க மகிழ்ச்சியுடன், எங்கள் ஆனந்தத்தைப் பகிர்ந்துகொண்டு, தங்கள் நல்வருகையால் எங்கள் திருமணத்தை சிறப்பிக்க வேண்டுகிறோம்.",

  inviteCallEn: "CORDIALLY INVITE YOU TO OUR",
  inviteCallTa: "நடைபெறும் மங்கள",
  celebrationTitleEn: "Wedding Celebrations",
  celebrationTitleTa: "திருமண விழா",

  heroDatesEn: "28th & 29th November 2026",
  heroDatesTa: "28 & 29 நவம்பர் 2026",
  heroCityEn: "Chennai",
  heroCityTa: "சென்னை",

  architectDoctorTaglineEn: "Together, they are building a forever home — one heartbeat at a time.",
  architectDoctorTaglineTa: "இருவரும் இணைந்து, ஒவ்வொரு இதயத் துடிப்பிலும் ஒரு நிலையான இல்லம் கட்டுகிறார்கள்.",

  // ---------------------------------------------------------------------------
  // 2. COUNTDOWN TARGET (Wedding Muhurtham: Sunday, 29 Nov 2026, 8:00 AM IST)
  // ---------------------------------------------------------------------------
  countdownTargetISO: "2026-11-29T08:00:00+05:30",
  muhurthamTargetISO: "2026-11-29T08:00:00+05:30",

  countdownNoteEn: "Subha Muhurtham: Sunday, 29 Nov 2026 • 8:00 AM – 9:00 AM",
  countdownNoteTa: "சுப முகூர்த்தம்: ஞாயிற்றுக்கிழமை, 29 நவம்பர் 2026 • காலை 8:00 – 9:00 மணி",

  // ---------------------------------------------------------------------------
  // 3. THE THREE CELEBRATIONS (EXACTLY FROM THE INVITATION CARD)
  // ---------------------------------------------------------------------------
  events: [
    {
      id: "reception",
      titleEn: "RECEPTION",
      titleTa: "மங்கள வரவேற்பு",
      iconSvg: `
        <svg viewBox="0 0 64 64" fill="none" stroke="currentColor" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round">
          <path d="M22 14l6 14h-12l6-14z" />
          <path d="M22 28v18M14 46h16" />
          <path d="M42 14l6 14h-12l6-14z" />
          <path d="M42 28v18M34 46h16" />
          <path d="M32 10c0-2 2-4 4-2s2 4 0 6-4 0-4-4z" fill="currentColor" stroke="none" />
        </svg>
      `,
      dateEn: "Saturday, 28th Nov 2026",
      dateTa: "சனிக்கிழமை, 28 நவம்பர் 2026",
      timeEn: "7:00 PM onwards",
      timeTa: "மாலை 7:00 மணி முதல்",
      venueNameEn: "Thangam Maaligai",
      venueNameTa: "தங்கம் மாளிகை",
      venueDetailsEn: "Near Tollgate Metro Station, Chennai - 600081",
      venueDetailsTa: "டோல்கேட் மெட்ரோ நிலையம் அருகில், சென்னை - 600081",
      isMetro: true,
      transitIcon: "🚇",
      transitEn: "Metro: Tollgate Metro Station (Walking Distance)",
      transitTa: "மெட்ரோ: டோல்கேட் மெட்ரோ நிலையம் (நடக்கும் தூரத்தில்)",
      mapsUrl: "https://www.google.com/maps/search/?api=1&query=Thangam+Maaligai+Tollgate+Chennai",
      icsEvent: {
        summary: "Reception: Ar. N. Bose Raj & Dr. H. Sree Babitha Sai",
        start: "20261128T133000Z",
        end: "20261128T173000Z",
        location: "Thangam Maaligai, Near Tollgate Metro, Chennai - 600081",
        description: "Wedding Reception of Ar. N. Bose Raj & Dr. H. Sree Babitha Sai."
      }
    },
    {
      id: "wedding",
      titleEn: "WEDDING (MUHURTHAM)",
      titleTa: "திருமணம் (சுப முகூர்த்தம்)",
      iconSvg: `
        <svg viewBox="0 0 64 64" fill="none" stroke="currentColor" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round">
          <path d="M12 48h40l-4-16H16l-4 16z" />
          <path d="M32 12c-4 6-8 12-4 18 4 6 12 0 8-8-2-4-2-8-4-10z" fill="currentColor" opacity="0.8" />
          <path d="M24 22c-2 4-4 8-2 11 2 3 6 0 4-5-1-3-1-5-2-6z" fill="currentColor" opacity="0.9" />
          <path d="M40 22c2 4 4 8 2 11-2 3-6 0-4-5 1-3 1-5 2-6z" fill="currentColor" opacity="0.9" />
          <line x1="8" y1="48" x2="56" y2="48" />
          <line x1="14" y1="54" x2="50" y2="54" />
        </svg>
      `,
      dateEn: "Sunday, 29th Nov 2026",
      dateTa: "ஞாயிற்றுக்கிழமை, 29 நவம்பர் 2026",
      timeEn: "8:00 AM – 9:00 AM",
      timeTa: "காலை 8:00 – 9:00 மணி",
      venueNameEn: "Thangam Maaligai",
      venueNameTa: "தங்கம் மாளிகை",
      venueDetailsEn: "Near Tollgate Metro Station, Chennai - 600081",
      venueDetailsTa: "டோல்கேட் மெட்ரோ நிலையம் அருகில், சென்னை - 600081",
      isMetro: true,
      transitIcon: "🚇",
      transitEn: "Metro: Tollgate Metro Station (Walking Distance)",
      transitTa: "மெட்ரோ: டோல்கேட் மெட்ரோ நிலையம் (நடக்கும் தூரத்தில்)",
      mapsUrl: "https://www.google.com/maps/search/?api=1&query=Thangam+Maaligai+Tollgate+Chennai",
      icsEvent: {
        summary: "Wedding Muhurtham: Ar. N. Bose Raj & Dr. H. Sree Babitha Sai",
        start: "20261129T023000Z",
        end: "20261129T043000Z",
        location: "Thangam Maaligai, Near Tollgate Metro, Chennai - 600081",
        description: "Auspicious Wedding Ceremony (Subha Muhurtham) of Ar. N. Bose Raj & Dr. H. Sree Babitha Sai."
      }
    },
    {
      id: "feast",
      titleEn: "FEAST ON US",
      titleTa: "கல்யாண கறி விருந்து",
      iconSvg: `
        <svg viewBox="0 0 64 64" fill="none" stroke="currentColor" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round">
          <ellipse cx="32" cy="38" rx="26" ry="14" />
          <path d="M10 38c8-16 36-16 44 0" />
          <circle cx="26" cy="36" r="4" fill="currentColor" />
          <circle cx="38" cy="36" r="4" fill="currentColor" />
          <circle cx="32" cy="30" r="5" fill="currentColor" />
        </svg>
      `,
      dateEn: "Sunday, 29th Nov 2026",
      dateTa: "ஞாயிற்றுக்கிழமை, 29 நவம்பர் 2026",
      timeEn: "12:30 PM – 3:00 PM",
      timeTa: "மதியம் 12:30 – 3:00 மணி",
      venueNameEn: "Virudhunagar Nadar Maaligai",
      venueNameTa: "விருதுநகர் நாடார் மாளிகை",
      venueDetailsEn: "27, Somu Chetty 5th St, Royapuram, Chennai - 600013",
      venueDetailsTa: "27, சோமு செட்டி 5வது தெரு, ராயபுரம், சென்னை - 600013",
      transitIcon: "✨",
      transitEn: "Traditional South Indian Kari virunthu served with love",
      transitTa: "அன்புடன் பரிமாறப்படும் பாரம்பரிய தென்னிந்திய கறி விருந்து",
      mapsUrl: "https://www.google.com/maps/search/?api=1&query=Virudhunagar+Nadar+Maaligai+Royapuram+Chennai",
      icsEvent: {
        summary: "Kari Virunthu: Ar. N. Bose Raj & Dr. H. Sree Babitha Sai",
        start: "20261129T070000Z",
        end: "20261129T093000Z",
        location: "Virudhunagar Nadar Maaligai, 27, Somu Chetty 5th St, Royapuram, Chennai - 600013",
        description: "Traditional South Indian Kari virunthu served with love for Ar. N. Bose Raj & Dr. H. Sree Babitha Sai."
      }
    }
  ],

  // ---------------------------------------------------------------------------
  // 4. CLOSING & FOOTER
  // ---------------------------------------------------------------------------
  closingQuoteEn: "“Some moments in life become truly special because they are shared with the people who have been part of our journey.”",
  closingQuoteTa: "“நம் வாழ்வில் சில தருணங்கள் மிகவும் சிறப்பானவையாக மாறுகின்றன; ஏனெனில் அவை நமது பயணத்தின் அங்கமாக இருந்த உறவுகளுடன் பகிரப்படுகின்றன.”",

  closingHeartEn: "We can't wait to celebrate with you! ♥",
  closingHeartTa: "தங்களுடன் இணைந்து கொண்டாட ஆவலுடன் காத்திருக்கிறோம்! ♥",

  footerFamilyEn: "Bose Raj & Sree Babitha Sai Families",
  footerFamilyTa: "போஸ் ராஜ் & ஸ்ரீ பபிதா சாய் குடும்பத்தினர்",

  footerHashtag: "#BoseWedsBabi • 2026",

  // ---------------------------------------------------------------------------
  // 5. RSVP WHATSAPP NUMBER
  // ---------------------------------------------------------------------------
  rsvpWhatsAppNumber: "919876543210"
};

// ==============================================================================
// APPLICATION STATE
// ==============================================================================
let currentLang = 'en'; // 'en' | 'ta'
let guestName = '';
let arePetalsActive = true;

// ==============================================================================
// 1. INITIALIZATION
// ==============================================================================
document.addEventListener('DOMContentLoaded', () => {
  parseGuestParameter();
  applyLanguage(currentLang);
  initEnvelopeIntro();
  initCountdown();
  initPetalsCanvas();
  initAudioPlayer();
  initModal();
  setupEventListeners();
  initReveal();
});

/**
 * Extracts and sanitizes the '?to=...' parameter from the URL.
 * Example: https://boseraj23.github.io/bose-weds-babi/?to=Ramesh%20Family
 */
function parseGuestParameter() {
  try {
    const urlParams = new URLSearchParams(window.location.search);
    const toParam = urlParams.get('to');
    if (toParam && toParam.trim() !== '') {
      guestName = toParam.trim().replace(/[<>]/g, '');
    }
  } catch (e) {
    console.warn('Could not parse URL query parameters', e);
  }
}

// ==============================================================================
// 2. BILINGUAL CONTENT HANDLER (ENGLISH / TAMIL)
// ==============================================================================
function applyLanguage(lang) {
  currentLang = lang;
  const isTa = lang === 'ta';
  document.documentElement.lang = isTa ? 'ta' : 'en';

  // Toggle button label
  const langLabel = document.getElementById('langLabel');
  const langToggleBtn = document.getElementById('langToggleBtn');
  if (langLabel && langToggleBtn) {
    langLabel.textContent = isTa ? 'English' : 'தமிழ்';
    langToggleBtn.setAttribute('aria-label', isTa ? 'Switch Language to English' : 'Switch Language to Tamil');
  }

  // Luxury Cinematic Title Sequence & Wedding Invitation Reveal Localization
  setText('enterBtnText', isTa ? 'திருமண அழைப்பிதழைத் திறக்க' : 'OPEN OUR WEDDING INVITATION');
  setText('enterMusicHint', isTa ? '🎵 எங்கு வேண்டுமானாலும் தட்டவும் • சிரிக்காதே ஒலிக்கும்' : '🎵 Tap anywhere to open • Sirikkadhey will play');
  setText('skipIntroLabel', isTa ? 'நேரடியாகப் பார்க்க ➔' : 'Skip Intro ➔');

  // Hero Section
  setText('topMantra', isTa ? EVENT_CONFIG.topMantraTa : EVENT_CONFIG.topMantraEn);
  setText('familyBlessing', isTa ? EVENT_CONFIG.familyBlessingTa : EVENT_CONFIG.familyBlessingEn);
  
  const personalizedGreeting = document.getElementById('personalizedGreeting');
  if (personalizedGreeting) {
    if (guestName) {
      personalizedGreeting.textContent = isTa ? `அன்பார்ந்த ${guestName},` : `Dear ${guestName},`;
    } else {
      personalizedGreeting.textContent = isTa ? 'அன்பார்ந்த சுற்றமும் நட்பும்,' : 'Dear Family & Friends,';
    }
  }

  setText('taglineLeft', isTa ? EVENT_CONFIG.taglineLeftTa : EVENT_CONFIG.taglineLeftEn);
  setText('taglineRight', isTa ? EVENT_CONFIG.taglineRightTa : EVENT_CONFIG.taglineRightEn);
  
  setText('groomName', isTa ? EVENT_CONFIG.groomNameTa : EVENT_CONFIG.groomNameEn);
  setText('groomRole', isTa ? EVENT_CONFIG.groomRoleTa : EVENT_CONFIG.groomRoleEn);
  setText('brideName', isTa ? EVENT_CONFIG.brideNameTa : EVENT_CONFIG.brideNameEn);
  setText('brideRole', isTa ? EVENT_CONFIG.brideRoleTa : EVENT_CONFIG.brideRoleEn);

  setText('inviteCall', isTa ? EVENT_CONFIG.inviteCallTa : EVENT_CONFIG.inviteCallEn);
  setText('celebrationTitle', isTa ? EVENT_CONFIG.celebrationTitleTa : EVENT_CONFIG.celebrationTitleEn);
  setText('heroDates', isTa ? EVENT_CONFIG.heroDatesTa : EVENT_CONFIG.heroDatesEn);
  setText('heroCity', isTa ? EVENT_CONFIG.heroCityTa : EVENT_CONFIG.heroCityEn);
  setText('architectDoctorTagline', isTa ? EVENT_CONFIG.architectDoctorTaglineTa : EVENT_CONFIG.architectDoctorTaglineEn);

  // Lifeline Caption
  const lifelineCaption = document.getElementById('lifelineCaption');
  if (lifelineCaption) {
    lifelineCaption.innerHTML = isTa
      ? '<span>🏛️ அவர் இடங்களை வடிவமைக்கிறார்</span> <span class="caption-dot">&bull;</span> <span>🩺 அவர் இதயங்களைக் குணமாக்குகிறார்</span>'
      : '<span>🏛️ He designs spaces</span> <span class="caption-dot">&bull;</span> <span>🩺 She heals hearts</span>';
  }

  // Countdown Section (Wedding Muhurtham)
  setText('countdownBadgeText', isTa ? 'சுப முகூர்த்த திருமண நன்னாள்' : 'AUSPICIOUS WEDDING MUHURTHAM');
  setText('countdownHeading', isTa ? 'புனித திருமண முகூர்த்தத்திற்கான கவுண்டவுன்' : 'Counting Down to the Wedding Muhurtham');
  setText('countdownNote', isTa ? EVENT_CONFIG.countdownNoteTa : EVENT_CONFIG.countdownNoteEn);
  setText('labelDays', isTa ? 'நாட்கள்' : 'Days');
  setText('labelHours', isTa ? 'மணி' : 'Hours');
  setText('labelMinutes', isTa ? 'நிமிடம்' : 'Mins');
  setText('labelSeconds', isTa ? 'விநாடி' : 'Secs');

  // Events Section
  setText('eventsHeading', isTa ? 'நிகழ்ச்சி நிரல்' : 'Programme of Celebrations');
  setText('eventsSubtitle', isTa ? 'மங்கள நிகழ்வுகள் மற்றும் விருந்தில் கலந்து சிறப்பிக்க வேண்டுகிறோம்' : 'Join us for every blessed ceremony and feast');
  renderCelebrationCards(isTa);

  // Project Brief
  setText('briefHeading', isTa ? 'நிரந்தர இல்லத்தின் வரைபடம்' : 'The Blueprint of Forever');
  setText('briefSubtitle', isTa ? 'திட்ட விவரங்கள் • அளவு 1 : ∞' : 'Project Specifications • Scale 1 : ∞');
  setText('specValProject', isTa ? 'நிரந்தர இல்லம்' : 'Forever Home');
  setText('specValArchitect', isTa ? 'Ar. N. போஸ் ராஜ்' : 'Ar. N. Bose Raj');
  setText('specValDoctor', isTa ? 'Dr. H. ஸ்ரீ பபிதா சாய்' : 'Dr. H. Sree Babitha Sai');
  setText('specValFoundation', isTa ? 'அன்பு, நம்பிக்கை & குடும்பத்தினர் ஆசி' : 'Love, Trust & Family Blessings');
  setText('specValVitals', isTa ? 'இரு இதயங்கள், ஒரே துடிப்பு' : 'Two hearts, one rhythm');
  setText('specValDates', isTa ? '28 & 29 நவம்பர் 2026' : '28 & 29 November 2026');

  // Footer Section
  setText('closingQuote', isTa ? EVENT_CONFIG.closingQuoteTa : EVENT_CONFIG.closingQuoteEn);
  setText('closingHeart', isTa ? EVENT_CONFIG.closingHeartTa : EVENT_CONFIG.closingHeartEn);
  setText('footerFamilyNames', isTa ? EVENT_CONFIG.footerFamilyTa : EVENT_CONFIG.footerFamilyEn);
  setText('footerHashtag', EVENT_CONFIG.footerHashtag);
}

function setText(elementId, text) {
  const el = document.getElementById(elementId);
  if (el) el.textContent = text;
}

// ==============================================================================
// 3. RENDER THREE CELEBRATION CARDS
// ==============================================================================
function renderCelebrationCards(isTa) {
  const container = document.getElementById('celebrationCardsContainer');
  if (!container) return;

  container.innerHTML = '';

  EVENT_CONFIG.events.forEach((ev, idx) => {
    const card = document.createElement('article');
    card.className = `event-card event-${ev.id}`;

    card.innerHTML = `
      <div class="event-card-header">
        <div class="event-icon-badge" aria-hidden="true">${ev.iconSvg}</div>
        <div>
          <h3 class="event-title">${isTa ? ev.titleTa : ev.titleEn}</h3>
          <p class="event-date-badge">📅 ${isTa ? ev.dateTa : ev.dateEn}</p>
        </div>
      </div>

      <div class="event-details-body">
        <div class="event-meta-row">
          <span class="meta-icon" aria-hidden="true">⏰</span>
          <div class="meta-content">
            <strong>${isTa ? 'நேரம்' : 'Time'}:</strong>
            <span>${isTa ? ev.timeTa : ev.timeEn}</span>
          </div>
        </div>

        <div class="event-meta-row">
          <span class="meta-icon" aria-hidden="true">📍</span>
          <div class="meta-content">
            <strong class="venue-name-highlight">${isTa ? ev.venueNameTa : ev.venueNameEn}</strong>
            <p class="venue-address">${isTa ? ev.venueDetailsTa : ev.venueDetailsEn}</p>
          </div>
        </div>

        <div class="event-meta-row transit-row ${ev.isMetro ? 'metro-highlight' : ''}">
          <span class="meta-icon" aria-hidden="true">${ev.transitIcon || '📍'}</span>
          <div class="meta-content">
            <p class="transit-info">${isTa ? ev.transitTa : ev.transitEn}</p>
          </div>
        </div>
      </div>

      <div class="event-card-actions">
        <a href="${ev.mapsUrl}" target="_blank" rel="noopener noreferrer" class="btn btn-event-map" aria-label="Open ${ev.venueNameEn} in Google Maps">
          <svg class="google-maps-icon" viewBox="0 0 24 24" width="18" height="18" fill="none" aria-hidden="true">
            <path d="M12 2C8.13 2 5 5.13 5 9c0 5.25 7 13 7 13s7-7.75 7-13c0-3.87-3.13-7-7-7z" fill="#EA4335"/>
            <path d="M12 2C8.13 2 5 5.13 5 9c0 2.38 1.19 5.37 2.87 8.5L12 22l4.13-4.5C17.81 14.37 19 11.38 19 9c0-3.87-3.13-7-7-7z" fill="#34A853"/>
            <circle cx="12" cy="9" r="3.2" fill="#FFFFFF"/>
            <circle cx="12" cy="9" r="1.8" fill="#4285F4"/>
          </svg>
          <span>${isTa ? 'கூகுள் மேப்' : 'Google Maps'}</span>
        </a>
        <button class="btn btn-event-cal" data-event-idx="${idx}" aria-label="Add ${ev.titleEn} to Calendar">
          <span>🗓️</span>
          <span>${isTa ? 'நாள்காட்டியில் சேர்' : 'Add to Calendar'}</span>
        </button>
      </div>
    `;

    container.appendChild(card);
  });

  // Attach calendar download listeners
  container.querySelectorAll('.btn-event-cal').forEach(btn => {
    btn.addEventListener('click', (e) => {
      const idx = parseInt(btn.getAttribute('data-event-idx'), 10);
      downloadSingleEventICS(EVENT_CONFIG.events[idx]);
    });
  });
}

// ==============================================================================
// 3.5. LUXURY CINEMATIC TITLE SEQUENCE & WEDDING INVITATION REVEAL
// ==============================================================================
// 12. LUXURY CINEMATIC START SCREEN & OPENING ANIMATION
// ==============================================================================
function initEnvelopeIntro() {
  const overlay = document.getElementById('envelopeOverlay');
  const stage = document.getElementById('cinematicStage');
  const btnOpen = document.getElementById('btnOpenInvitation');
  const btnSkip = document.getElementById('btnSkipIntro');
  const btnReplay = document.getElementById('introReplayBtn');
  const coverWrapper = document.getElementById('coverWrapper');
  const canvas = document.getElementById('cinematicCanvas');

  if (!overlay) return;

  let particleAnimId = null;
  let isOpeningInProgress = false;

  // ---------------------------------------------------------------------------
  // Canvas Particles: Champagne Floating Motes & Delicate Jasmine Petals
  // ---------------------------------------------------------------------------
  let particles = [];
  let isCanvasActive = true;

  function initCinematicCanvas() {
    if (!canvas) return;
    const ctx = canvas.getContext('2d');
    let width = (canvas.width = window.innerWidth);
    let height = (canvas.height = window.innerHeight);

    window.addEventListener('resize', () => {
      if (!canvas) return;
      width = canvas.width = window.innerWidth;
      height = canvas.height = window.innerHeight;
    });

    particles = [];
    // 25 subtle champagne gold motes
    for (let i = 0; i < 25; i++) {
      particles.push({
        x: Math.random() * width,
        y: Math.random() * height,
        r: Math.random() * 2.0 + 0.8,
        vx: (Math.random() - 0.5) * 0.3,
        vy: -(Math.random() * 0.4 + 0.15),
        alpha: Math.random() * 0.5 + 0.25,
        type: 'champagne'
      });
    }
    // 12 floating white jasmine petals
    for (let i = 0; i < 12; i++) {
      particles.push({
        x: Math.random() * width,
        y: Math.random() * height,
        r: Math.random() * 3.5 + 3,
        vx: (Math.random() - 0.5) * 0.35,
        vy: Math.random() * 0.55 + 0.3,
        rot: Math.random() * 360,
        vrot: (Math.random() - 0.5) * 1.2,
        alpha: Math.random() * 0.35 + 0.45,
        type: 'jasmine'
      });
    }

    function renderParticles() {
      if (!isCanvasActive) return;
      ctx.clearRect(0, 0, width, height);

      // Add occasional soft white jasmine petal
      if (particles.length < 35 && Math.random() < 0.05) {
        particles.push({
          x: Math.random() * width,
          y: -15,
          r: Math.random() * 3.5 + 3,
          vx: Math.sin(Date.now() * 0.001) * 0.5 + (Math.random() - 0.5) * 0.3,
          vy: Math.random() * 0.6 + 0.35,
          rot: Math.random() * 360,
          vrot: (Math.random() - 0.5) * 1.2,
          alpha: Math.random() * 0.35 + 0.45,
          type: 'jasmine'
        });
      }

      particles.forEach((p, idx) => {
        if (p.type === 'champagne') {
          p.x += p.vx;
          p.y += p.vy;
          if (p.y < -10) p.y = height + 10;
          if (p.x < -10) p.x = width + 10;
          if (p.x > width + 10) p.x = -10;

          ctx.beginPath();
          ctx.arc(p.x, p.y, p.r, 0, Math.PI * 2);
          ctx.fillStyle = `rgba(212, 175, 55, ${p.alpha})`;
          ctx.shadowColor = 'rgba(244, 219, 135, 0.6)';
          ctx.shadowBlur = 6;
          ctx.fill();
        } else if (p.type === 'jasmine') {
          p.x += p.vx + Math.sin(p.y * 0.02) * 0.35;
          p.y += p.vy;
          p.rot += p.vrot;

          ctx.save();
          ctx.translate(p.x, p.y);
          ctx.rotate((p.rot * Math.PI) / 180);
          ctx.beginPath();
          ctx.ellipse(0, 0, p.r, p.r * 1.8, 0, 0, Math.PI * 2);
          ctx.fillStyle = `rgba(255, 253, 245, ${p.alpha})`;
          ctx.shadowColor = 'rgba(212, 175, 55, 0.25)';
          ctx.shadowBlur = 4;
          ctx.fill();
          ctx.restore();

          if (p.y > height + 20) particles.splice(idx, 1);
        }
      });

      particleAnimId = requestAnimationFrame(renderParticles);
    }

    renderParticles();
  }

  // ---------------------------------------------------------------------------
  // Action Handlers: Luxury Opening Animation into Website
  // ---------------------------------------------------------------------------
  // ---------------------------------------------------------------------------
  // Action Handlers: Luxury Opening Animation into Website (Curtain Pull)
  // ---------------------------------------------------------------------------
  const curtainContainer = document.getElementById('curtainStrips');
  const coverImg = document.getElementById('coverImg');
  const NUM_STRIPS = 10; // 5 per side

  function buildCurtainStrips() {
    if (!curtainContainer || !stage) return;
    const stageWidth = stage.offsetWidth || 380;
    const stripWidth = stageWidth / NUM_STRIPS;
    const imgSrc = (coverImg && coverImg.currentSrc) ? coverImg.currentSrc : 'assets/invitation-cover.jpg';

    curtainContainer.innerHTML = '<div class="curtain-center-glow" aria-hidden="true"></div>';

    for (let i = 0; i < NUM_STRIPS; i++) {
      const isLeft = i < NUM_STRIPS / 2;
      const distFromCenter = isLeft ? (NUM_STRIPS / 2 - 1 - i) : (i - NUM_STRIPS / 2);
      const delay = distFromCenter * 0.06; // Center strips peel first

      const strip = document.createElement('div');
      strip.className = 'curtain-strip ' + (isLeft ? 'strip-left' : 'strip-right');
      strip.style.left = (i * stripWidth) + 'px';
      strip.style.width = (stripWidth + 0.5) + 'px'; // +0.5 to prevent subpixel seam

      if (i === 0) {
        strip.style.borderTopLeftRadius = '24px';
        strip.style.borderBottomLeftRadius = '24px';
      }
      if (i === NUM_STRIPS - 1) {
        strip.style.borderTopRightRadius = '24px';
        strip.style.borderBottomRightRadius = '24px';
      }

      const inner = document.createElement('div');
      inner.className = 'curtain-strip-inner';
      inner.style.left = (-i * stripWidth) + 'px';
      inner.style.width = stageWidth + 'px';

      const img = document.createElement('img');
      img.src = imgSrc;
      img.alt = '';
      img.style.width = stageWidth + 'px';
      inner.appendChild(img);
      strip.appendChild(inner);

      strip.style.transition = `transform 0.95s cubic-bezier(0.25, 1, 0.35, 1) ${delay}s, opacity 0.85s ease ${delay + 0.12}s`;
      curtainContainer.appendChild(strip);
    }
  }

  function triggerCurtainPull() {
    if (!curtainContainer || !stage) return;
    buildCurtainStrips();

    // Trigger frame for layout flush
    requestAnimationFrame(() => {
      const strips = curtainContainer.querySelectorAll('.curtain-strip');
      const stageWidth = stage.offsetWidth || 380;

      strips.forEach((strip, i) => {
        const isLeft = i < NUM_STRIPS / 2;
        const direction = isLeft ? -1 : 1;
        const distFromCenter = isLeft ? (NUM_STRIPS / 2 - 1 - i) : (i - NUM_STRIPS / 2);
        
        strip.style.transform = `perspective(1000px) rotateY(${direction * 65}deg) translateX(${direction * (stageWidth * 0.55 + distFromCenter * 20)}px) scale(0.92)`;
        strip.style.opacity = '0';
      });
    });
  }

  function enterWebsite() {
    if (isOpeningInProgress) return;
    isOpeningInProgress = true;

    // 1. Build and peel the curtain strips
    triggerCurtainPull();
    overlay.classList.add('is-opening');
    sessionStorage.setItem('weddingIntroOpened', 'true');

    // 2. Play celebratory music immediately
    if (!isMusicPlaying) {
      toggleMusic();
    }

    // 3. Trigger celebratory rose and gold petal shower
    if (typeof window.triggerPetalBurst === 'function') {
      window.triggerPetalBurst(window.innerWidth / 2, window.innerHeight * 0.4);
    }

    // 4. After strips have peeled away, fade the entire overlay
    setTimeout(() => {
      overlay.classList.add('is-card-opened');
    }, 1100);

    // 5. After overlay fully fades, hide it completely
    setTimeout(() => {
      overlay.classList.add('is-hidden');
    }, 1900);

    // 6. Cleanup canvas
    setTimeout(() => {
      isCanvasActive = false;
      if (particleAnimId) cancelAnimationFrame(particleAnimId);
      isOpeningInProgress = false;
    }, 2300);
  }

  function replayIntro() {
    isCanvasActive = true;
    isOpeningInProgress = false;

    // Reset overlay classes
    overlay.classList.remove('is-hidden', 'is-opening', 'is-card-opened');
    if (curtainContainer) curtainContainer.innerHTML = '';

    window.scrollTo({ top: 0, behavior: 'smooth' });
    initCinematicCanvas();
  }

  // Check if session previously opened
  if (sessionStorage.getItem('weddingIntroOpened') === 'true') {
    overlay.classList.add('is-hidden');
  } else {
    initCinematicCanvas();
  }

  // Click on open button
  if (btnOpen) btnOpen.addEventListener('click', (e) => {
    e.stopPropagation();
    enterWebsite();
  });

  // Click anywhere on card stage opens it!
  if (stage) {
    stage.addEventListener('click', () => {
      enterWebsite();
    });
    // Keyboard accessibility
    stage.addEventListener('keydown', (e) => {
      if (e.key === 'Enter' || e.key === ' ') {
        e.preventDefault();
        enterWebsite();
      }
    });

    // Desktop 3D Mouse Parallax
    if (window.matchMedia('(hover: hover)').matches) {
      window.addEventListener('mousemove', (e) => {
        if (overlay.classList.contains('is-hidden') || overlay.classList.contains('is-opening')) return;
        const rect = stage.getBoundingClientRect();
        const centerX = rect.left + rect.width / 2;
        const centerY = rect.top + rect.height / 2;
        const deltaX = (e.clientX - centerX) / (window.innerWidth / 2);
        const deltaY = (e.clientY - centerY) / (window.innerHeight / 2);
        stage.style.transform = `perspective(1200px) rotateY(${deltaX * 5}deg) rotateX(${-deltaY * 5}deg)`;
      });
      stage.addEventListener('mouseleave', () => {
        stage.style.transform = '';
      });
    }
  }

  if (btnSkip) btnSkip.addEventListener('click', enterWebsite);
  if (btnReplay) btnReplay.addEventListener('click', replayIntro);
}

// ==============================================================================
// 4. ACCURATE COUNTDOWN TIMER WITH TICK-PULSE ANIMATION
// ==============================================================================
function initCountdown() {
  const targetTime = new Date(EVENT_CONFIG.countdownTargetISO).getTime();

  function setNumberAnimated(el, num) {
    if (!el) return;
    const str = String(num).padStart(2, '0');
    if (el.textContent !== str) {
      el.textContent = str;
      el.classList.remove('tick-pulse');
      void el.offsetWidth; // Trigger DOM reflow to re-trigger CSS keyframe
      el.classList.add('tick-pulse');
    }
  }

  function update() {
    const now = new Date().getTime();
    const distance = targetTime - now;

    const daysEl = document.getElementById('timerDays');
    const hoursEl = document.getElementById('timerHours');
    const minsEl = document.getElementById('timerMinutes');
    const secsEl = document.getElementById('timerSeconds');
    const statusEl = document.getElementById('timerStatus');

    if (distance <= 0) {
      setNumberAnimated(daysEl, 0);
      setNumberAnimated(hoursEl, 0);
      setNumberAnimated(minsEl, 0);
      setNumberAnimated(secsEl, 0);
      if (statusEl) {
        statusEl.textContent = currentLang === 'ta'
          ? 'சுப முகூர்த்த திருமண வைபவம் இனிதே துவங்கியது! 🎉'
          : 'The Auspicious Wedding Muhurtham has arrived! 🎉';
      }
      return;
    }

    const days = Math.floor(distance / (1000 * 60 * 60 * 24));
    const hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    const minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
    const seconds = Math.floor((distance % (1000 * 60)) / 1000);

    setNumberAnimated(daysEl, days);
    setNumberAnimated(hoursEl, hours);
    setNumberAnimated(minsEl, minutes);
    setNumberAnimated(secsEl, seconds);
    if (statusEl) statusEl.textContent = '';
  }

  update();
  setInterval(update, 1000);
}

// ==============================================================================
// 6. DYNAMIC .ICS CALENDAR GENERATOR
// ==============================================================================
function downloadSingleEventICS(ev) {
  const dtStamp = new Date().toISOString().replace(/[-:]/g, '').split('.')[0] + 'Z';
  const icsData = ev.icsEvent;

  const icsContent = [
    'BEGIN:VCALENDAR',
    'VERSION:2.0',
    'PRODID:-//Bose & Babi Wedding//EN',
    'CALSCALE:GREGORIAN',
    'METHOD:PUBLISH',
    'BEGIN:VEVENT',
    `UID:${ev.id}-20261128@boseraj23.github.io`,
    `DTSTAMP:${dtStamp}`,
    `DTSTART:${icsData.start}`,
    `DTEND:${icsData.end}`,
    `SUMMARY:${icsData.summary}`,
    `DESCRIPTION:${icsData.description.replace(/\n/g, '\\n')}`,
    `LOCATION:${icsData.location}`,
    'STATUS:CONFIRMED',
    'END:VEVENT',
    'END:VCALENDAR'
  ].join('\r\n');

  const blob = new Blob([icsContent], { type: 'text/calendar;charset=utf-8' });
  const url = URL.createObjectURL(blob);
  const downloadLink = document.createElement('a');
  downloadLink.href = url;
  downloadLink.setAttribute('download', `${ev.id}-bose-and-babi.ics`);
  document.body.appendChild(downloadLink);
  downloadLink.click();
  document.body.removeChild(downloadLink);
  URL.revokeObjectURL(url);
}

// ==============================================================================
// 7. JOYFUL FALLING PETALS & GOLDEN SPARKLES CANVAS
// ==============================================================================
function initPetalsCanvas() {
  const canvas = document.getElementById('petalsCanvas');
  if (!canvas) return;
  const ctx = canvas.getContext('2d');

  let width = (canvas.width = window.innerWidth);
  let height = (canvas.height = window.innerHeight);

  window.addEventListener('resize', () => {
    width = canvas.width = window.innerWidth;
    height = canvas.height = window.innerHeight;
  });

  // Palette: Gold marigold petals, romantic rose petals & golden twinkle sparkles
  const petalColors = [
    'rgba(255, 185, 45, 0.88)',  // Golden marigold
    'rgba(255, 120, 30, 0.82)',  // Saffron orange marigold
    'rgba(235, 60, 95, 0.85)',   // Romantic crimson rose petal
    'rgba(255, 105, 140, 0.8)',  // Soft pink rose petal
    'rgba(255, 225, 130, 0.9)'   // Shimmering gold star
  ];

  const petalCount = window.innerWidth < 600 ? 28 : 50;
  const petals = [];
  const bursts = [];

  for (let i = 0; i < petalCount; i++) {
    petals.push({
      x: Math.random() * width,
      y: Math.random() * height - height,
      size: Math.random() * 8 + 5,
      speedX: Math.random() * 1.4 - 0.7,
      speedY: Math.random() * 1.5 + 0.8,
      rotation: Math.random() * 360,
      rotSpeed: (Math.random() - 0.5) * 2.2,
      color: petalColors[Math.floor(Math.random() * petalColors.length)],
      sway: Math.random() * 2 * Math.PI,
      swaySpeed: Math.random() * 0.03 + 0.012,
      isSparkle: Math.random() > 0.75
    });
  }

  // Draw 4-point golden star sparkle
  function drawSparkle(s) {
    ctx.save();
    ctx.translate(s.x, s.y);
    ctx.rotate((s.rotation * Math.PI) / 180);
    ctx.fillStyle = s.color;
    ctx.beginPath();
    const r = s.size * 0.8;
    ctx.moveTo(0, -r);
    ctx.quadraticCurveTo(0, 0, r, 0);
    ctx.quadraticCurveTo(0, 0, 0, r);
    ctx.quadraticCurveTo(0, 0, -r, 0);
    ctx.quadraticCurveTo(0, 0, 0, -r);
    ctx.fill();
    ctx.restore();
  }

  // Draw smooth organic petal
  function drawPetal(p) {
    ctx.save();
    ctx.translate(p.x, p.y);
    ctx.rotate((p.rotation * Math.PI) / 180);
    ctx.fillStyle = p.color;
    ctx.beginPath();
    ctx.ellipse(0, 0, p.size * 0.55, p.size, 0, 0, 2 * Math.PI);
    ctx.fill();
    ctx.restore();
  }

  // Celebratory Burst Generator
  window.triggerPetalBurst = function(cx, cy) {
    const burstCount = 40;
    for (let i = 0; i < burstCount; i++) {
      const angle = (Math.PI * 2 * i) / burstCount + (Math.random() - 0.5);
      const velocity = Math.random() * 7 + 4;
      bursts.push({
        x: cx,
        y: cy,
        vx: Math.cos(angle) * velocity,
        vy: Math.sin(angle) * velocity - 2,
        size: Math.random() * 9 + 5,
        rotation: Math.random() * 360,
        rotSpeed: (Math.random() - 0.5) * 5,
        color: petalColors[Math.floor(Math.random() * petalColors.length)],
        life: 1.0,
        decay: Math.random() * 0.015 + 0.01,
        isSparkle: Math.random() > 0.5
      });
    }
  };

  // Subtle wind response on mouse / touch interaction
  window.addEventListener('pointermove', (e) => {
    const wind = (e.movementX || 0) * 0.05;
    petals.forEach(p => {
      p.x += wind;
    });
  }, { passive: true });

  let animationFrameId;

  function animate() {
    if (!arePetalsActive) {
      ctx.clearRect(0, 0, width, height);
      return;
    }

    ctx.clearRect(0, 0, width, height);

    // 1. Regular falling petals and sparkles
    for (let i = 0; i < petals.length; i++) {
      const p = petals[i];
      p.sway += p.swaySpeed;
      p.x += Math.sin(p.sway) * 1.1 + p.speedX;
      p.y += p.speedY;
      p.rotation += p.rotSpeed;

      if (p.y > height + 20) {
        p.y = -20;
        p.x = Math.random() * width;
      }
      if (p.x > width + 20) p.x = -20;
      if (p.x < -20) p.x = width + 20;

      if (p.isSparkle) {
        drawSparkle(p);
      } else {
        drawPetal(p);
      }
    }

    // 2. Active burst particles
    for (let j = bursts.length - 1; j >= 0; j--) {
      const b = bursts[j];
      b.x += b.vx;
      b.y += b.vy;
      b.vy += 0.15; // Gravity
      b.vx *= 0.98; // Friction
      b.rotation += b.rotSpeed;
      b.life -= b.decay;

      if (b.life <= 0) {
        bursts.splice(j, 1);
        continue;
      }

      ctx.save();
      ctx.globalAlpha = Math.max(0, b.life);
      if (b.isSparkle) {
        drawSparkle(b);
      } else {
        drawPetal(b);
      }
      ctx.restore();
    }

    animationFrameId = requestAnimationFrame(animate);
  }

  animate();

  // Petals Toggle button
  const petalsToggleBtn = document.getElementById('petalsToggleBtn');
  const petalsLabel = document.getElementById('petalsLabel');
  if (petalsToggleBtn) {
    petalsToggleBtn.addEventListener('click', () => {
      arePetalsActive = !arePetalsActive;
      petalsToggleBtn.setAttribute('aria-pressed', arePetalsActive ? 'true' : 'false');
      if (petalsLabel) {
        petalsLabel.textContent = arePetalsActive ? 'Petals On' : 'Petals Off';
      }
      if (arePetalsActive) {
        animate();
      } else {
        cancelAnimationFrame(animationFrameId);
        ctx.clearRect(0, 0, width, height);
      }
    });
  }
}

// ==============================================================================
// 8. JOYFUL INDIAN WEDDING MUSIC (Web Audio Synthesizer + MP3 fallback)
// Plays a warm, celebratory Raga Shankarabharanam / Kalyani nadaswaram chime harmony
// ==============================================================================
let isMusicPlaying = false;
let audioPlayer = null;
let synthAudioContext = null;
let synthInterval = null;

function initAudioPlayer() {
  const musicBtn = document.getElementById('musicToggleBtn');
  if (!musicBtn) return;

  try {
    audioPlayer = new Audio('assets/Sirikkadhey.mp3');
    audioPlayer.loop = true;
    audioPlayer.volume = 0.6;
  } catch (e) {
    audioPlayer = null;
  }

  musicBtn.addEventListener('click', toggleMusic);
}

function toggleMusic() {
  const musicBtn = document.getElementById('musicToggleBtn');
  const musicLabel = document.getElementById('musicLabel');
  const musicIcon = document.getElementById('musicIcon');

  if (!isMusicPlaying) {
    let playedExternal = false;
    if (audioPlayer) {
      audioPlayer.play().then(() => {
        playedExternal = true;
      }).catch(() => {
        startSynthesizerMelody();
      });
    } else {
      startSynthesizerMelody();
    }

    isMusicPlaying = true;
    if (musicBtn) {
      musicBtn.setAttribute('aria-pressed', 'true');
      musicBtn.setAttribute('aria-label', 'Turn off wedding music');
    }
    if (musicLabel) musicLabel.textContent = 'Music On';
    if (musicIcon) {
      musicIcon.innerHTML = `
        <svg class="icon-svg" viewBox="0 0 24 24" width="18" height="18" fill="currentColor">
          <path d="M3 9v6h4l5 5V4L7 9H3zm13.5 3c0-1.77-1.02-3.29-2.5-4.03v8.05c1.48-.73 2.5-2.25 2.5-4.02zM14 3.23v2.06c2.89.86 5 3.54 5 6.71s-2.11 5.85-5 6.71v2.06c4.01-.91 7-4.49 7-8.77s-2.99-7.86-7-8.77z"/>
        </svg>
      `;
    }
  } else {
    if (audioPlayer) audioPlayer.pause();
    stopSynthesizerMelody();

    isMusicPlaying = false;
    if (musicBtn) {
      musicBtn.setAttribute('aria-pressed', 'false');
      musicBtn.setAttribute('aria-label', 'Turn on wedding music');
    }
    if (musicLabel) musicLabel.textContent = 'Music Off';
    if (musicIcon) {
      musicIcon.innerHTML = `
        <svg class="icon-svg" viewBox="0 0 24 24" width="18" height="18" fill="currentColor">
          <path d="M16.5 12c0-1.77-1.02-3.29-2.5-4.03v2.21l2.45 2.45c.03-.2.05-.41.05-.63zm2.5 0c0 .94-.2 1.82-.54 2.64l1.51 1.51C20.63 14.91 21 13.5 21 12c0-4.28-2.99-7.86-7-8.77v2.06c2.89.86 5 3.54 5 6.71zM4.27 3L3 4.27 7.73 9H3v6h4l5 5v-6.73l4.25 4.25c-.67.52-1.42.93-2.25 1.18v2.06c1.38-.31 2.63-.95 3.69-1.81L19.73 21 21 19.73l-9-9L4.27 3zM12 4L9.91 6.09 12 8.18V4z"/>
        </svg>
      `;
    }
  }
}

function startSynthesizerMelody() {
  try {
    const AudioCtx = window.AudioContext || window.webkitAudioContext;
    if (!AudioCtx) return;
    synthAudioContext = new AudioCtx();

    // Joyful traditional Indian wedding notes: Sa, Ri, Ga, Ma, Pa, Dha, Ni, Sa'
    const notes = [261.63, 293.66, 329.63, 392.00, 440.00, 523.25, 440.00, 392.00, 329.63];
    let noteIdx = 0;

    function playNote(freq) {
      if (!synthAudioContext || synthAudioContext.state === 'closed') return;
      const osc = synthAudioContext.createOscillator();
      const gain = synthAudioContext.createGain();

      osc.type = 'triangle'; // warm festive tone
      osc.frequency.setValueAtTime(freq, synthAudioContext.currentTime);

      gain.gain.setValueAtTime(0.001, synthAudioContext.currentTime);
      gain.gain.exponentialRampToValueAtTime(0.09, synthAudioContext.currentTime + 0.15);
      gain.gain.exponentialRampToValueAtTime(0.0001, synthAudioContext.currentTime + 1.8);

      osc.connect(gain);
      gain.connect(synthAudioContext.destination);

      osc.start();
      osc.stop(synthAudioContext.currentTime + 1.9);
    }

    playNote(notes[noteIdx]);
    noteIdx = (noteIdx + 1) % notes.length;

    synthInterval = setInterval(() => {
      playNote(notes[noteIdx]);
      noteIdx = (noteIdx + 1) % notes.length;
    }, 1800);

  } catch (e) {
    console.warn('Web Audio playback error', e);
  }
}

function stopSynthesizerMelody() {
  if (synthInterval) {
    clearInterval(synthInterval);
    synthInterval = null;
  }
  if (synthAudioContext && synthAudioContext.state !== 'closed') {
    synthAudioContext.close().catch(() => {});
    synthAudioContext = null;
  }
}

// ==============================================================================
// 9. ORIGINAL INVITATION CARD LIGHTBOX MODAL
// ==============================================================================
function initModal() {
  const modal = document.getElementById('cardModal');
  const btnOpen = document.getElementById('btnOpenCardModal');
  const btnClose = document.getElementById('btnCloseModal');

  if (!modal || !btnOpen) return;

  btnOpen.addEventListener('click', () => {
    modal.classList.add('is-open');
    modal.setAttribute('aria-hidden', 'false');
    document.body.style.overflow = 'hidden';
  });

  function closeModal() {
    modal.classList.remove('is-open');
    modal.setAttribute('aria-hidden', 'true');
    document.body.style.overflow = '';
  }

  if (btnClose) btnClose.addEventListener('click', closeModal);
  modal.addEventListener('click', (e) => {
    if (e.target === modal) closeModal();
  });
  document.addEventListener('keydown', (e) => {
    if (e.key === 'Escape' && modal.classList.contains('is-open')) {
      closeModal();
    }
  });
}

// ==============================================================================
// 10. SCROLL REVEAL & EVENT LISTENERS
// ==============================================================================
function setupEventListeners() {
  const langToggleBtn = document.getElementById('langToggleBtn');
  if (langToggleBtn) {
    langToggleBtn.addEventListener('click', () => {
      const nextLang = currentLang === 'en' ? 'ta' : 'en';
      applyLanguage(nextLang);
    });
  }
}

function initReveal() {
  const items = document.querySelectorAll('.reveal');
  if (!('IntersectionObserver' in window)) {
    items.forEach(el => el.classList.add('is-visible'));
    return;
  }

  const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add('is-visible');
        observer.unobserve(entry.target);
      }
    });
  }, { threshold: 0.08 });

  items.forEach(el => observer.observe(el));
}

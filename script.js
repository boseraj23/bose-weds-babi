/**
 * ==============================================================================
 * WEDDING E-INVITATION CONFIGURATION & SCRIPT
 * Plain Vanilla JavaScript - No build step, no external dependencies.
 * ==============================================================================
 * Edit the EVENT_CONFIG object below to personalize all event details,
 * timings, venue links, schedule, and RSVP phone number.
 * ==============================================================================
 */

const EVENT_CONFIG = {
  // ---------------------------------------------------------------------------
  // 1. COUPLE & HOST DETAILS
  // ---------------------------------------------------------------------------
  coupleNamesEn: "Bose & Babi",
  coupleNamesTa: "போஸ் & பேபி",

  hostsEn: "Mr. & Mrs. S. Sundaram & Mr. & Mrs. R. Natarajan",
  hostsTa: "திரு. & திருமதி. எஸ். சுந்தரம் & திரு. & திருமதி. ஆர். நடராஜன்",

  eventTitleEn: "Wedding Ceremony & Reception",
  eventTitleTa: "திருமண விழா மற்றும் வரவேற்பு",

  hostsIntroEn: "Together with their families",
  hostsIntroTa: "குடும்பத்தினர் மற்றும் உறவினர்கள் சூழ",

  inviteLineEn: "cordially invite you to celebrate the auspicious wedding of",
  inviteLineTa: "நடைபெறும் மங்கலத் திருமண விழாவிற்கு தங்களை அன்புடன் அழைக்கிறோம்",

  auspiciousMantraEn: "|| OM SHREE GANESHAYA NAMAHA ||",
  auspiciousMantraTa: "|| ஸ்ரீ கணேசாய நம: ||",

  // ---------------------------------------------------------------------------
  // 2. DATE, TIME & TIMEZONE (Asia/Kolkata)
  // Format: YYYY-MM-DDTHH:mm:ss+05:30
  // ---------------------------------------------------------------------------
  eventDateISO: "2027-02-14T09:00:00+05:30",
  eventEndDateISO: "2027-02-14T13:30:00+05:30",

  dateFormattedEn: "Sunday, 14 February 2027",
  dateFormattedTa: "ஞாயிற்றுக்கிழமை, 14 பிப்ரவரி 2027",

  timeRangeEn: "Muhurtham: 09:00 AM – 10:30 AM (IST)",
  timeRangeTa: "சுப முகூர்த்தம்: காலை 09:00 – 10:30 மணி",

  receptionTimeEn: "Reception: 06:30 PM onwards",
  receptionTimeTa: "வரவேற்பு: மாலை 06:30 மணி முதல்",

  // ---------------------------------------------------------------------------
  // 3. VENUE & LOCATION
  // ---------------------------------------------------------------------------
  venueNameEn: "Sri Krishna Grand Convention Hall",
  venueNameTa: "ஸ்ரீ கிருஷ்ணா கிராண்ட் கன்வென்ஷன் ஹால்",

  venueAddressEn: "No. 42, 100 Feet Bypass Road, Velachery, Chennai, Tamil Nadu 600042",
  venueAddressTa: "எண். 42, 100 அடி பைபாஸ் சாலை, வேளச்சேரி, சென்னை, தமிழ்நாடு 600042",

  cityEn: "Chennai, Tamil Nadu",
  cityTa: "சென்னை, தமிழ்நாடு",

  // Replace with your exact Google Maps link
  googleMapsUrl: "https://maps.google.com/?q=12.9784,80.2184",

  // ---------------------------------------------------------------------------
  // 4. DRESS CODE & SPECIAL NOTES
  // ---------------------------------------------------------------------------
  dressCodeEn: "Traditional Indian / Festive Ethnic Wear",
  dressCodeTa: "பாரம்பரிய பட்டு ஆடை / பண்டிகை உடை",

  specialNotesEn: "Your presence and blessings are our greatest gift.",
  specialNotesTa: "தங்கள் வருகையும் ஆசியுமே நாங்கள் நாடும் சிறந்த பரிசு.",

  // ---------------------------------------------------------------------------
  // 5. RSVP WHATSAPP NUMBER
  // Country code + Phone number (NO '+' sign, NO spaces, NO dashes)
  // Example for India (+91 98765 43210): "919876543210"
  // ---------------------------------------------------------------------------
  rsvpWhatsAppNumber: "919876543210",

  // ---------------------------------------------------------------------------
  // 6. PROGRAMME / SCHEDULE TIMELINE
  // ---------------------------------------------------------------------------
  schedule: [
    {
      timeEn: "07:30 AM",
      timeTa: "காலை 07:30",
      titleEn: "Mangala Vadyam & Ganapathi Pooja",
      titleTa: "மங்கள வாத்தியம் & கணபதி பூஜை",
      descEn: "Divine invocation, Nadhaswaram melodies, and sacred blessings.",
      descTa: "நாதஸ்வர மங்கள இசை மற்றும் விக்னேஸ்வர பூஜை."
    },
    {
      timeEn: "09:00 AM – 10:30 AM",
      timeTa: "காலை 09:00 – 10:30",
      titleEn: "Subha Muhurtham",
      titleTa: "சுப முகூர்த்தம் (மாங்கல்ய தாரணம்)",
      descEn: "Sacred tying of the Thali amidst chanting of Vedic mantras and akshata.",
      descTa: "வேத மந்திரங்கள் மற்றும் மங்கள வாத்தியங்கள் முழங்க மாங்கல்ய தாரணம்."
    },
    {
      timeEn: "11:30 AM onwards",
      timeTa: "காலை 11:30 முதல்",
      titleEn: "Traditional Wedding Feast (Virundhu)",
      titleTa: "கல்யாண விருந்து",
      descEn: "Sumptuous traditional South Indian feast served on fresh plantain leaf.",
      descTa: "அறுசுவை நிறைந்த பாரம்பரிய தலைவாழை இலைத் திருமண விருந்து உபசரிப்பு."
    },
    {
      timeEn: "06:30 PM onwards",
      timeTa: "மாலை 06:30 முதல்",
      titleEn: "Grand Reception & Musical Evening",
      titleTa: "மங்கல வரவேற்பு & இன்னிசை",
      descEn: "An evening of celebration, dining, and felicitating the newly wedded couple.",
      descTa: "மணமக்களை வாழ்த்தும் இனிய வரவேற்பு மற்றும் விருந்து உபசரிப்பு."
    }
  ],

  // ---------------------------------------------------------------------------
  // 7. FOOTER DETAILS
  // ---------------------------------------------------------------------------
  footerBlessingEn: "With the divine blessings of our elders and ancestors",
  footerBlessingTa: "பெரியோர்கள் மற்றும் முன்னோர்களின் நல்லாசிகளுடன்",

  footerFamilyEn: "Sundaram & Natarajan Families",
  footerFamilyTa: "சுந்தரம் & நடராஜன் குடும்பத்தினர்",

  footerThanksEn: "Thank you for gracing our joyous occasion with your presence and blessings!",
  footerThanksTa: "எங்கள் இல்லத் திருமண விழாவிற்கு வருகை தந்து ஆசீர்வதித்தமைக்கு மனமார்ந்த நன்றிகள்!",

  footerHashtag: "#BoseWedsBabi • 2027"
};

// ==============================================================================
// APPLICATION STATE
// ==============================================================================
let currentLang = 'en'; // 'en' | 'ta'
let guestName = '';

// ==============================================================================
// 1. INITIALIZATION & URL PARAMETER PARSING
// ==============================================================================
document.addEventListener('DOMContentLoaded', () => {
  parseGuestParameter();
  applyLanguage(currentLang);
  initCountdown();
  initCalendarGenerator();
  initAudioPlayer();
  setupEventListeners();
});

/**
 * Extracts and sanitizes the '?to=...' parameter from the URL.
 * Example: https://site.com/?to=Ramesh%20Family
 */
function parseGuestParameter() {
  try {
    const urlParams = new URLSearchParams(window.location.search);
    const toParam = urlParams.get('to');
    if (toParam && toParam.trim() !== '') {
      // Decode and sanitize: trim excess spaces, keep text safe
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

  // Toggle button label
  const langLabel = document.getElementById('langLabel');
  const langToggleBtn = document.getElementById('langToggleBtn');
  if (langLabel && langToggleBtn) {
    langLabel.textContent = isTa ? 'English' : 'தமிழ்';
    langToggleBtn.setAttribute('aria-label', isTa ? 'Switch Language to English' : 'Switch Language to Tamil');
  }

  // Hero Section
  setText('auspiciousMantra', isTa ? EVENT_CONFIG.auspiciousMantraTa : EVENT_CONFIG.auspiciousMantraEn);
  
  const personalizedGreeting = document.getElementById('personalizedGreeting');
  if (personalizedGreeting) {
    if (guestName) {
      personalizedGreeting.textContent = isTa ? `அன்பார்ந்த ${guestName},` : `Dear ${guestName},`;
    } else {
      personalizedGreeting.textContent = isTa ? 'அன்பார்ந்த சுற்றமும் நட்பும்,' : 'Dear Family & Friends,';
    }
  }

  setText('hostsIntro', isTa ? EVENT_CONFIG.hostsIntroTa : EVENT_CONFIG.hostsIntroEn);
  setText('hostsNames', isTa ? EVENT_CONFIG.hostsNamesTa : EVENT_CONFIG.hostsNamesEn);
  setText('inviteLine', isTa ? EVENT_CONFIG.inviteLineTa : EVENT_CONFIG.inviteLineEn);
  setText('coupleNames', isTa ? EVENT_CONFIG.coupleNamesTa : EVENT_CONFIG.coupleNamesEn);
  setText('heroEventTitle', isTa ? EVENT_CONFIG.eventTitleTa : EVENT_CONFIG.eventTitleEn);
  setText('heroDate', isTa ? EVENT_CONFIG.dateFormattedTa : EVENT_CONFIG.dateFormattedEn);
  setText('heroVenueCity', isTa ? EVENT_CONFIG.cityTa : EVENT_CONFIG.cityEn);

  // Countdown Labels
  setText('countdown-heading', isTa ? 'திருமண நன்னாளுக்கான காத்திருப்பு' : 'Counting Down to the Big Day');
  setText('labelDays', isTa ? 'நாட்கள்' : 'Days');
  setText('labelHours', isTa ? 'மணி' : 'Hours');
  setText('labelMinutes', isTa ? 'நிமிடம்' : 'Mins');
  setText('labelSeconds', isTa ? 'விநாடி' : 'Secs');

  // Details Card
  setText('details-heading', isTa ? 'நேரம் மற்றும் இடம்' : 'When & Where');
  setText('detailDateLabel', isTa ? 'திருமண நாள்' : 'Date');
  setText('detailDate', isTa ? EVENT_CONFIG.dateFormattedTa : EVENT_CONFIG.dateFormattedEn);

  setText('detailTimeLabel', isTa ? 'முகூர்த்தம் மற்றும் நேரங்கள்' : 'Muhurtham & Timings');
  const detailTimeEl = document.getElementById('detailTime');
  if (detailTimeEl) {
    const primaryTime = isTa ? EVENT_CONFIG.timeRangeTa : EVENT_CONFIG.timeRangeEn;
    const subTime = isTa ? EVENT_CONFIG.receptionTimeTa : EVENT_CONFIG.receptionTimeEn;
    detailTimeEl.innerHTML = `${primaryTime}<br><span class="detail-subval">${subTime}</span>`;
  }

  setText('detailVenueLabel', isTa ? 'திருமண மண்டபம்' : 'Venue');
  setText('detailVenueName', isTa ? EVENT_CONFIG.venueNameTa : EVENT_CONFIG.venueNameEn);
  setText('detailVenueAddress', isTa ? EVENT_CONFIG.venueAddressTa : EVENT_CONFIG.venueAddressEn);

  setText('detailDressLabel', isTa ? 'ஆடை நெறிமுறை & குறிப்பு' : 'Dress Code & Notes');
  setText('detailDress', isTa ? EVENT_CONFIG.dressCodeTa : EVENT_CONFIG.dressCodeEn);
  setText('detailNotes', isTa ? EVENT_CONFIG.specialNotesTa : EVENT_CONFIG.specialNotesEn);

  // Action Buttons
  setText('labelGoogleMaps', isTa ? 'கூகுள் மேப்பில் பார்க்க' : 'Open in Google Maps');
  setText('labelAddToCalendar', isTa ? 'நாள்காட்டியில் சேர்க்க (.ics)' : 'Add to Calendar (.ics)');

  const mapsBtn = document.getElementById('btnGoogleMaps');
  if (mapsBtn) {
    mapsBtn.href = EVENT_CONFIG.googleMapsUrl;
  }

  // Schedule Section
  setText('schedule-heading', isTa ? 'நிகழ்ச்சி நிரல்' : 'Programme Schedule');
  renderSchedule(isTa);

  // RSVP Section
  setText('rsvp-heading', isTa ? 'வருகையை உறுதிசெய்க' : 'RSVP');
  setText('rsvpIntro', isTa
    ? 'தங்கள் நல்வருகையை வாட்ஸ்அப் மூலம் உறுதிசெய்து எங்களை மகிழ்விக்க வேண்டுகிறோம்.'
    : 'Please confirm your gracious presence via WhatsApp to help us welcome you with warmth.');
  setText('labelRsvpYes', isTa ? 'மகிழ்ச்சியுடன் வருகிறோம்! 💐' : "Yes, I'll be there! 💐");
  setText('labelRsvpNo', isTa ? 'வர இயலவில்லை, வாழ்த்துகள் 💌' : "Sorry, can't make it 💌");
  setText('rsvpNote', isTa
    ? 'பட்டனை அழுத்தினால் வாட்ஸ்அப்பில் தானாக தட்டச்சு செய்யப்பட்ட செய்தி திறக்கும்.'
    : 'Clicking a button opens WhatsApp with a pre-filled confirmation message.');

  updateRsvpLinks(isTa);

  // Footer Section
  setText('footerBlessing', isTa ? EVENT_CONFIG.footerBlessingTa : EVENT_CONFIG.footerBlessingEn);
  setText('footerFamily', isTa ? EVENT_CONFIG.footerFamilyTa : EVENT_CONFIG.footerFamilyEn);
  setText('footerThanks', isTa ? EVENT_CONFIG.footerThanksTa : EVENT_CONFIG.footerThanksEn);
  setText('footerHashtag', EVENT_CONFIG.footerHashtag);
}

function setText(elementId, text) {
  const el = document.getElementById(elementId);
  if (el) el.textContent = text;
}

// ==============================================================================
// 3. SCHEDULE / PROGRAMME RENDERER
// ==============================================================================
function renderSchedule(isTa) {
  const container = document.getElementById('timelineList');
  if (!container || !EVENT_CONFIG.schedule) return;

  container.innerHTML = '';

  EVENT_CONFIG.schedule.forEach(item => {
    const itemEl = document.createElement('div');
    itemEl.className = 'timeline-item';
    itemEl.setAttribute('role', 'listitem');

    const timeBadge = document.createElement('div');
    timeBadge.className = 'timeline-time-badge';
    timeBadge.textContent = isTa ? item.timeTa : item.timeEn;

    const contentDiv = document.createElement('div');
    contentDiv.className = 'timeline-content';

    const titleH3 = document.createElement('h3');
    titleH3.className = 'timeline-title';
    titleH3.textContent = isTa ? item.titleTa : item.titleEn;

    const descP = document.createElement('p');
    descP.className = 'timeline-desc';
    descP.textContent = isTa ? item.descTa : item.descEn;

    contentDiv.appendChild(titleH3);
    contentDiv.appendChild(descP);

    itemEl.appendChild(timeBadge);
    itemEl.appendChild(contentDiv);

    container.appendChild(itemEl);
  });
}

// ==============================================================================
// 4. RSVP WHATSAPP LINK GENERATOR
// ==============================================================================
function updateRsvpLinks(isTa) {
  const btnYes = document.getElementById('btnRsvpYes');
  const btnNo = document.getElementById('btnRsvpNo');
  const phone = EVENT_CONFIG.rsvpWhatsAppNumber;

  let msgYes = '';
  let msgNo = '';

  if (isTa) {
    if (guestName) {
      msgYes = `வணக்கம்! ${guestName} சார்பாக மகிழ்ச்சியுடன் தெரிவிக்கிறோம்: பிரியா & கார்த்திக் திருமண விழாவிற்கு நாங்கள் தவறாமல் வருகை தருகிறோம். விழாவில் சந்திப்போம்! 🎉`;
      msgNo = `வணக்கம்! ${guestName} சார்பாக எங்கள் அன்பான வாழ்த்துகள். தவிர்க்க முடியாத காரணத்தால் எங்களால் பிரியா & கார்த்திக் திருமணத்திற்கு வர இயலவில்லை. மணமக்களுக்கு எங்களது உளமார்ந்த நல்வாழ்த்துகளும் ஆசிகளும்! 🙏`;
    } else {
      msgYes = `வணக்கம்! பிரியா & கார்த்திக் திருமண விழாவிற்கு நான்/நாங்கள் மகிழ்ச்சியுடன் வருகை தருகிறோம். விழாவில் சந்திப்போம்! 🎉`;
      msgNo = `வணக்கம்! தவிர்க்க முடியாத காரணத்தால் பிரியா & கார்த்திக் திருமண விழாவிற்கு வர இயலவில்லை. மணமக்களுக்கு எங்கள் உளமார்ந்த நல்வாழ்த்துகளும் ஆசிகளும்! 🙏`;
    }
  } else {
    if (guestName) {
      msgYes = `Namaste! ${guestName} will joyfully attend the wedding celebration of ${EVENT_CONFIG.coupleNamesEn}. Looking forward to celebrating with you! 🎉`;
      msgNo = `Namaste! ${guestName} sends heartfelt wishes. Unfortunately, we won't be able to attend the wedding of ${EVENT_CONFIG.coupleNamesEn}, but our warmest blessings are with the couple! 🙏`;
    } else {
      msgYes = `Namaste! I/We will joyfully attend the wedding celebration of ${EVENT_CONFIG.coupleNamesEn}. Looking forward to celebrating with you! 🎉`;
      msgNo = `Namaste! Sending my warmest wishes. Unfortunately, I won't be able to attend the wedding of ${EVENT_CONFIG.coupleNamesEn}, but my heartfelt blessings are with the couple! 🙏`;
    }
  }

  const urlYes = `https://wa.me/${phone}?text=${encodeURIComponent(msgYes)}`;
  const urlNo = `https://wa.me/${phone}?text=${encodeURIComponent(msgNo)}`;

  if (btnYes) btnYes.href = urlYes;
  if (btnNo) btnNo.href = urlNo;
}

// ==============================================================================
// 5. ACCURATE COUNTDOWN TIMER
// ==============================================================================
function initCountdown() {
  const targetTime = new Date(EVENT_CONFIG.eventDateISO).getTime();

  function update() {
    const now = new Date().getTime();
    const distance = targetTime - now;

    const daysEl = document.getElementById('timerDays');
    const hoursEl = document.getElementById('timerHours');
    const minsEl = document.getElementById('timerMinutes');
    const secsEl = document.getElementById('timerSeconds');
    const statusEl = document.getElementById('timerStatus');

    if (distance <= 0) {
      if (daysEl) daysEl.textContent = '00';
      if (hoursEl) hoursEl.textContent = '00';
      if (minsEl) minsEl.textContent = '00';
      if (secsEl) secsEl.textContent = '00';
      if (statusEl) {
        statusEl.textContent = currentLang === 'ta' 
          ? 'திருமண விழா இனிதே துவங்கி நடைபெறுகிறது! 🎉'
          : 'The celebration is underway! 🎉';
      }
      return;
    }

    const days = Math.floor(distance / (1000 * 60 * 60 * 24));
    const hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    const minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
    const seconds = Math.floor((distance % (1000 * 60)) / 1000);

    if (daysEl) daysEl.textContent = String(days).padStart(2, '0');
    if (hoursEl) hoursEl.textContent = String(hours).padStart(2, '0');
    if (minsEl) minsEl.textContent = String(minutes).padStart(2, '0');
    if (secsEl) secsEl.textContent = String(seconds).padStart(2, '0');
    if (statusEl) statusEl.textContent = '';
  }

  update();
  setInterval(update, 1000);
}

// ==============================================================================
// 6. DYNAMIC .ICS CALENDAR FILE GENERATOR
// ==============================================================================
function initCalendarGenerator() {
  const calBtn = document.getElementById('btnAddToCalendar');
  if (!calBtn) return;

  calBtn.addEventListener('click', () => {
    generateAndDownloadICS();
  });
}

function generateAndDownloadICS() {
  const startDate = new Date(EVENT_CONFIG.eventDateISO);
  const endDate = new Date(EVENT_CONFIG.eventEndDateISO);

  // Format to standard iCalendar UTC: YYYYMMDDTHHmmssZ
  const formatDateICS = (d) => {
    return d.toISOString().replace(/[-:]/g, '').split('.')[0] + 'Z';
  };

  const dtStart = formatDateICS(startDate);
  const dtEnd = formatDateICS(endDate);
  const dtStamp = formatDateICS(new Date());

  const summary = `Wedding: ${EVENT_CONFIG.coupleNamesEn}`;
  const description = `${EVENT_CONFIG.eventTitleEn} - ${EVENT_CONFIG.coupleNamesEn}. Venue: ${EVENT_CONFIG.venueNameEn}, ${EVENT_CONFIG.venueAddressEn}. Google Maps: ${EVENT_CONFIG.googleMapsUrl}`;
  const location = `${EVENT_CONFIG.venueNameEn}, ${EVENT_CONFIG.venueAddressEn}`;

  const icsContent = [
    'BEGIN:VCALENDAR',
    'VERSION:2.0',
    'PRODID:-//Our Wedding Invitation//EN',
    'CALSCALE:GREGORIAN',
    'METHOD:PUBLISH',
    'BEGIN:VEVENT',
    `UID:wedding-${startDate.getTime()}@ourwedding.invitation`,
    `DTSTAMP:${dtStamp}`,
    `DTSTART:${dtStart}`,
    `DTEND:${dtEnd}`,
    `SUMMARY:${summary}`,
    `DESCRIPTION:${description.replace(/\n/g, '\\n')}`,
    `LOCATION:${location}`,
    'STATUS:CONFIRMED',
    'END:VEVENT',
    'END:VCALENDAR'
  ].join('\r\n');

  const blob = new Blob([icsContent], { type: 'text/calendar;charset=utf-8' });
  const url = URL.createObjectURL(blob);
  const downloadLink = document.createElement('a');
  downloadLink.href = url;
  downloadLink.setAttribute('download', 'wedding-bose-babi.ics');
  document.body.appendChild(downloadLink);
  downloadLink.click();
  document.body.removeChild(downloadLink);
  URL.revokeObjectURL(url);
}

// ==============================================================================
// 7. BACKGROUND MUSIC (Muted by Default)
// Plays external assets/music.mp3 if present, or uses Web Audio API synthesizer
// for an elegant, serene traditional Indian drone / flute harmonic melody.
// ==============================================================================
let isMusicPlaying = false;
let audioPlayer = null;
let synthAudioContext = null;
let synthInterval = null;

function initAudioPlayer() {
  const musicBtn = document.getElementById('musicToggleBtn');
  if (!musicBtn) return;

  // Try creating an Audio element pointing to assets/music.mp3
  try {
    audioPlayer = new Audio('assets/music.mp3');
    audioPlayer.loop = true;
    audioPlayer.volume = 0.5;
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
    // Attempt playback of audio file
    let playedExternal = false;
    if (audioPlayer) {
      audioPlayer.play().then(() => {
        playedExternal = true;
      }).catch(() => {
        // Fallback to Web Audio Ambient Chime
        startSynthesizerMelody();
      });
    } else {
      startSynthesizerMelody();
    }

    isMusicPlaying = true;
    if (musicBtn) {
      musicBtn.setAttribute('aria-pressed', 'true');
      musicBtn.setAttribute('aria-label', 'Turn off background music');
    }
    if (musicLabel) musicLabel.textContent = 'Music On';
    if (musicIcon) {
      // Unmuted Speaker SVG
      musicIcon.innerHTML = `
        <svg class="icon-svg" viewBox="0 0 24 24" width="20" height="20" fill="currentColor">
          <path d="M3 9v6h4l5 5V4L7 9H3zm13.5 3c0-1.77-1.02-3.29-2.5-4.03v8.05c1.48-.73 2.5-2.25 2.5-4.02zM14 3.23v2.06c2.89.86 5 3.54 5 6.71s-2.11 5.85-5 6.71v2.06c4.01-.91 7-4.49 7-8.77s-2.99-7.86-7-8.77z"/>
        </svg>
      `;
    }
  } else {
    // Pause / Mute
    if (audioPlayer) {
      audioPlayer.pause();
    }
    stopSynthesizerMelody();

    isMusicPlaying = false;
    if (musicBtn) {
      musicBtn.setAttribute('aria-pressed', 'false');
      musicBtn.setAttribute('aria-label', 'Turn on background music');
    }
    if (musicLabel) musicLabel.textContent = 'Music Off';
    if (musicIcon) {
      // Muted Speaker SVG
      musicIcon.innerHTML = `
        <svg class="icon-svg" viewBox="0 0 24 24" width="20" height="20" fill="currentColor">
          <path d="M16.5 12c0-1.77-1.02-3.29-2.5-4.03v2.21l2.45 2.45c.03-.2.05-.41.05-.63zm2.5 0c0 .94-.2 1.82-.54 2.64l1.51 1.51C20.63 14.91 21 13.5 21 12c0-4.28-2.99-7.86-7-8.77v2.06c2.89.86 5 3.54 5 6.71zM4.27 3L3 4.27 7.73 9H3v6h4l5 5v-6.73l4.25 4.25c-.67.52-1.42.93-2.25 1.18v2.06c1.38-.31 2.63-.95 3.69-1.81L19.73 21 21 19.73l-9-9L4.27 3zM12 4L9.91 6.09 12 8.18V4z"/>
        </svg>
      `;
    }
  }
}

/**
 * Built-in Web Audio API synthesizer:
 * Generates warm, gentle tanpura drone + flute acoustic tones in Raga Yaman / Kalyani
 * completely client-side with 0 external network requests.
 */
function startSynthesizerMelody() {
  try {
    const AudioCtx = window.AudioContext || window.webkitAudioContext;
    if (!AudioCtx) return;
    synthAudioContext = new AudioCtx();

    // Raga Kalyani notes (Hz): Sa (C4 ~261.63), Ga (E4 ~329.63), Pa (G4 ~392.00), Ni (B4 ~493.88), Sa' (C5 ~523.25)
    const melodyNotes = [261.63, 329.63, 392.00, 493.88, 523.25, 392.00, 329.63, 261.63];
    let noteIdx = 0;

    function playBellTone(freq) {
      if (!synthAudioContext || synthAudioContext.state === 'closed') return;
      const osc = synthAudioContext.createOscillator();
      const gain = synthAudioContext.createGain();

      osc.type = 'sine';
      osc.frequency.setValueAtTime(freq, synthAudioContext.currentTime);

      // Soft envelope (gentle flute/bell chime)
      gain.gain.setValueAtTime(0.001, synthAudioContext.currentTime);
      gain.gain.exponentialRampToValueAtTime(0.08, synthAudioContext.currentTime + 0.3);
      gain.gain.exponentialRampToValueAtTime(0.0001, synthAudioContext.currentTime + 2.2);

      osc.connect(gain);
      gain.connect(synthAudioContext.destination);

      osc.start();
      osc.stop(synthAudioContext.currentTime + 2.3);
    }

    // Play first tone immediately
    playBellTone(melodyNotes[noteIdx]);
    noteIdx = (noteIdx + 1) % melodyNotes.length;

    // Play next note every 2.4 seconds
    synthInterval = setInterval(() => {
      playBellTone(melodyNotes[noteIdx]);
      noteIdx = (noteIdx + 1) % melodyNotes.length;
    }, 2400);

  } catch (e) {
    console.warn('Web Audio synthesis not supported or blocked', e);
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
// 8. EVENT LISTENERS
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

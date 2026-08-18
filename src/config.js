import regis from "./assets/regis.jpg";



const config = {
  // Background image shown behind the card
  backgroundUrl: "https://images.unsplash.com/photo-1582719471384-894fbb16e074?w=1600&q=80",

  // Circular logo at the top of Home
  logoUrl: "https://placehold.co/160x160/1a1a2e/ffffff?text=LAB+LOGO",

  // Poster image shown in the Announcement view
  announcementPosterUrl: regis,

  // ── Social Media Links ──────────────────────────────────
  social: {
    instagram: "https://www.instagram.com/your_account",
    line:      "https://line.me/ti/p/your_id",
    linkedin:  "https://www.linkedin.com/in/your_profile",
  },

  // ── Scores & Points external sheet links ───────────────
  sheets: {
    scores: "https://docs.google.com/spreadsheets/d/PLACEHOLDER_SCORES/edit",
    points: "https://docs.google.com/spreadsheets/d/PLACEHOLDER_POINTS/edit",
  },

  // ── Practical Needs ────────────────────────────────────
  // YouTube embed URL (use the /embed/ format)
  youtubeEmbedUrl: "https://www.youtube.com/embed/dQw4w9WgXcQ",

  // Google Drive PDF preview URLs (use the /preview suffix)
  documents: {
    practicalSchedules:    "https://drive.google.com/file/d/PLACEHOLDER_SCHEDULES/preview",
    reportProposalFormats: "https://drive.google.com/file/d/PLACEHOLDER_REPORT_FORMAT/preview",
    guidebook:             "https://drive.google.com/file/d/PLACEHOLDER_GUIDEBOOK/preview",
    workbook:              "https://drive.google.com/file/d/PLACEHOLDER_WORKBOOK/preview",
  },

  // Registration link shown in Announcement
  registrationUrl: "https://bit.ly/ReaktifBatch2BioprocessRegistration",
};

export default config;

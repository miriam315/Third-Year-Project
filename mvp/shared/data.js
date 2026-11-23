/* נתוני דמה משותפים לכל שלושת העיצובים — מדרגה ראשונה.
   נטען כ-<script src="../shared/data.js"> כדי לעבוד גם בפתיחה ישירה מהדיסק (file://).
   המבנה משקף את חוזה ה-API (‎/api/v1) כדי שיהיה קל להחליף בקריאות אמיתיות. */
window.MOCK = {
  today: "2026-11-23",

  /* GET /me */
  me: {
    id: "stu-1042",
    name: "נועה כהן",
    initials: "נכ",
    email: "noa.cohen@example.ac.il",
    institutionalId: "314-22-1042",
    cohort: "מחזור תשפ״ז",
    track: "פיתוח תוכנה",
    roles: ["תלמידה"],
  },

  staffUser: {
    name: "רחל לוי",
    initials: "רל",
    role: "רכזת לימודים",
    scope: "מחזור תשפ״ז — כל המסלולים",
  },

  /* GET /me/dashboard → הפעולה הבאה */
  nextAction: {
    title: "דיווח פרקטיקום הוחזר לתיקון",
    detail: "דיווח מ-17/11 — המלווה ביקשה לפרט את תיאור המשימה.",
    cta: "לתיקון הדיווח",
    screen: "practicum",
    urgency: "high",
  },

  announcements: [
    { date: "22/11", text: "המפגש ״ארכיטקטורת מערכות״ ביום ד׳ עבר מ-17:00 ל-18:00.", kind: "changed" },
    { date: "20/11", text: "חלון ההשלמות לסמסטר א׳ נפתח עד 15/12.", kind: "info" },
  ],

  /* GET /sessions */
  sessions: [
    { id: "s1", course: "ארכיטקטורת מערכות", day: "ב׳", date: "23/11", start: "17:00", end: "20:00", mode: "זום", lecturer: "ד״ר אבי מזרחי", location: "קישור זום", status: "published" },
    { id: "s2", course: "בדיקות תוכנה", day: "ג׳", date: "24/11", start: "09:00", end: "12:00", mode: "פרונטלי", lecturer: "מיכל שגיא", location: "בניין 2, חדר 204", status: "published" },
    { id: "s3", course: "ארכיטקטורת מערכות", day: "ד׳", date: "25/11", start: "18:00", end: "21:00", mode: "זום", lecturer: "ד״ר אבי מזרחי", location: "קישור זום", status: "updated", change: "שעה שונתה מ-17:00 ל-18:00" },
    { id: "s4", course: "ניהול פרויקטים", day: "ה׳", date: "26/11", start: "16:00", end: "18:00", mode: "פרונטלי", lecturer: "יעל ברק", location: "בניין 1, אולם 3", status: "cancelled", change: "בוטל — יוחלף במפגש ב-03/12" },
    { id: "s5", course: "בדיקות תוכנה", day: "א׳", date: "29/11", start: "17:00", end: "20:00", mode: "זום", lecturer: "מיכל שגיא", location: "קישור זום", status: "published" },
  ],

  /* GET /courses */
  courses: [
    { id: "c1", name: "ארכיטקטורת מערכות", lecturer: "ד״ר אבי מזרחי", attendance: 92, required: 80, status: "תקין" },
    { id: "c2", name: "בדיקות תוכנה", lecturer: "מיכל שגיא", attendance: 75, required: 80, status: "מתחת לרף" },
    { id: "c3", name: "ניהול פרויקטים", lecturer: "יעל ברק", attendance: null, required: 80, status: "טרם ניתן לחישוב" },
  ],

  /* GET /me/attendance — מצבים: present | partial | absent | unreported | review */
  attendance: {
    summaryPct: 84,
    basis: "לפי מפגשים שהתקיימו ודווחו. מפגש עתידי או מבוטל אינו נספר. ״טרם דווח״ אינו נספר כהיעדרות.",
    rows: [
      { date: "18/11", course: "ארכיטקטורת מערכות", mode: "זום", status: "present", minutes: 180 },
      { date: "17/11", course: "בדיקות תוכנה", mode: "פרונטלי", status: "partial", minutes: 95 },
      { date: "16/11", course: "ניהול פרויקטים", mode: "פרונטלי", status: "unreported", minutes: null },
      { date: "11/11", course: "ארכיטקטורת מערכות", mode: "זום", status: "present", minutes: 175 },
      { date: "10/11", course: "בדיקות תוכנה", mode: "זום", status: "absent", minutes: 0 },
      { date: "09/11", course: "בדיקות תוכנה", mode: "פרונטלי", status: "review", minutes: null, correction: "בקשת תיקון #AC-311 — ממתינה להחלטה" },
    ],
  },

  attendanceStatus: {
    present: "נוכחת",
    partial: "חלקית",
    absent: "נעדרת",
    unreported: "טרם דווח",
    review: "בבדיקה",
  },

  /* GET /me/requirements + GET /obligations */
  obligations: [
    { course: "בדיקות תוכנה", requirement: "מטלה 2 — תוכנית בדיקות", status: "חסר", grade: null, completion: "הגשה בחלון השלמה", due: "15/12", payment: "לא נדרש" },
    { course: "בדיקות תוכנה", requirement: "נוכחות 80%", status: "חסר", grade: null, completion: "השתתפות במפגש השלמה", due: "10/12", payment: "נדרש" },
    { course: "ארכיטקטורת מערכות", requirement: "מבחן אמצע", status: "הושלם", grade: 88, completion: "—", due: "—", payment: "לא נדרש" },
    { course: "ניהול פרויקטים", requirement: "מטלה 1 — תוכנית עבודה", status: "בבדיקה", grade: null, completion: "—", due: "—", payment: "לא נדרש" },
    { course: "ארכיטקטורת מערכות", requirement: "מטלה 1", status: "טרם נקלט", grade: null, completion: "—", due: "—", payment: "לא נדרש" },
  ],

  /* GET /practicum-summary + GET /practicum-reports */
  practicum: {
    place: "סטארט-אפ ״דאטה-ליין״",
    mentor: "שירה אלון",
    target: 120,
    approved: 64,
    pending: 12,
    reported: 81,
    reports: [
      { id: "PR-88", date: "20/11", hours: 5, task: "כתיבת בדיקות יחידה למודול התשלומים", status: "pending" },
      { id: "PR-85", date: "17/11", hours: 5, task: "פיתוח ממשק", status: "returned", feedback: "נא לפרט מה פותח ואילו כלים שימשו." },
      { id: "PR-82", date: "13/11", hours: 6, task: "אפיון מסך ניהול משתמשים", status: "approved" },
      { id: "PR-80", date: "10/11", hours: 4, task: "השתתפות בדיילי וסקירת קוד", status: "approved" },
      { id: "PR-79", date: "—", hours: 3, task: "טיוטה — הכנת סביבת עבודה", status: "draft" },
    ],
  },

  reportStatus: {
    draft: "טיוטה",
    pending: "ממתין לבדיקה",
    approved: "אושר",
    returned: "הוחזר לתיקון",
    rejected: "נדחה",
  },

  /* GET /projects/{id} */
  project: {
    name: "מערכת תורים למרפאה קהילתית",
    members: ["נועה כהן", "תמר רוזן", "אילה פרץ"],
    owner: "יעל ברק",
    stages: [
      { name: "הצעת פרויקט", status: "done" },
      { name: "אפיון", status: "done" },
      { name: "עיצוב ותכנון", status: "current", due: "05/12", deliverables: ["מסמך ארכיטקטורה", "מסכי Figma"] },
      { name: "פיתוח", status: "locked" },
      { name: "בדיקות והצגה", status: "locked" },
    ],
    blockers: ["מסמך ארכיטקטורה — גרסה 2 הוחזרה לתיקון"],
    submissions: [
      { version: 2, title: "מסמך ארכיטקטורה", submittedAt: "19/11 22:14", status: "returned", feedback: "חסר תרשים זרימת נתונים בין השירותים." },
      { version: 1, title: "מסמך ארכיטקטורה", submittedAt: "12/11 18:02", status: "superseded", feedback: "כיוון טוב, להרחיב על בחירת מסד הנתונים." },
    ],
  },

  /* GET /appointment-types + /appointment-eligibility + /availability-slots + /appointments */
  appointmentTypes: [
    { id: "t1", name: "אימון אישי", duration: 30, eligible: true, conditions: [{ text: "אין פגישה פתוחה מאותו סוג", ok: true }] },
    { id: "t2", name: "בדיקת מצגת", duration: 45, eligible: false, conditions: [{ text: "הגשת מצגת טיוטה בפרויקט", ok: false, fix: "להגיש טיוטה בשלב ״עיצוב ותכנון״" }, { text: "פרקטיקום מעל 50 שעות מאושרות", ok: true }] },
    { id: "t3", name: "הכנה לראיון", duration: 30, eligible: true, conditions: [{ text: "קורות חיים מעודכנים", ok: true }] },
  ],
  slots: [
    { id: "sl1", date: "25/11", day: "ד׳", time: "10:00", coach: "דנה פרידמן", free: 1 },
    { id: "sl2", date: "25/11", day: "ד׳", time: "10:30", coach: "דנה פרידמן", free: 0 },
    { id: "sl3", date: "26/11", day: "ה׳", time: "14:00", coach: "דנה פרידמן", free: 1 },
    { id: "sl4", date: "27/11", day: "ו׳", time: "09:00", coach: "אורית שמש", free: 1 },
  ],
  myAppointments: [
    { id: "AP-2207", type: "אימון אישי", date: "01/12", time: "11:00", coach: "דנה פרידמן", sync: "סונכרן ליומן" },
  ],

  /* GET /requests */
  requests: [
    { id: "RQ-1093", subject: "אישור לימודים למלגה", type: "מסמכים", opened: "21/11", status: "waiting_student", owner: "מזכירות", lastMsg: "נא לצרף את טופס המלגה החתום." },
    { id: "RQ-1071", subject: "תיקון נוכחות 09/11", type: "נוכחות", opened: "12/11", status: "in_progress", owner: "רחל לוי" },
    { id: "RQ-1040", subject: "שאלה על מועד הגשה", type: "לימודים", opened: "02/11", status: "closed", owner: "יעל ברק" },
  ],
  requestStatus: {
    new: "חדשה",
    in_progress: "בטיפול",
    waiting_student: "ממתינה לתשובתך",
    closed: "סגורה",
  },

  /* ===================== ניהול ===================== */

  /* GET /admin/dashboard (A01) */
  adminKpis: [
    { key: "obligations", label: "תלמידות עם חובות פתוחים", value: 23, trend: "+3 השבוע" },
    { key: "practicum", label: "דיווחי פרקטיקום לבדיקה", value: 17, trend: "5 מעל 3 ימים" },
    { key: "submissions", label: "הגשות חדשות", value: 8, trend: "היום: 2" },
    { key: "meetingsToday", label: "פגישות היום", value: 6, trend: "2 ללא תוצאה" },
    { key: "unassigned", label: "פניות ללא אחראית", value: 4, trend: "הוותיקה: 3 ימים" },
    { key: "payments", label: "תשלומים לאימות", value: 5, trend: "₪2,450" },
    { key: "failures", label: "כשלי דוא״ל / יומן", value: 2, trend: "דורש טיפול", alert: true },
  ],

  /* GET /students (A02) */
  students: [
    { id: "314-22-1042", name: "נועה כהן", email: "noa.cohen@…", cohort: "תשפ״ז", track: "פיתוח תוכנה", account: "פעיל", obligations: 2, attendance: 84 },
    { id: "205-19-0877", name: "תמר רוזן", email: "tamar.r@…", cohort: "תשפ״ז", track: "פיתוח תוכנה", account: "פעיל", obligations: 0, attendance: 96 },
    { id: "318-20-1120", name: "אילה פרץ", email: "ayala.p@…", cohort: "תשפ״ז", track: "פיתוח תוכנה", account: "פעיל", obligations: 1, attendance: 78 },
    { id: "209-11-0453", name: "שני מלכה", email: "shani.m@…", cohort: "תשפ״ז", track: "QA", account: "הוזמנה", obligations: 0, attendance: null },
    { id: "301-77-0918", name: "מוריה דוד", email: "moriya.d@…", cohort: "תשפ״ו", track: "פיתוח תוכנה", account: "בוגרת משלימה", obligations: 3, attendance: 71 },
    { id: "322-05-1301", name: "הדס גבאי", email: "hadas.g@…", cohort: "תשפ״ז", track: "QA", account: "מושבתת", obligations: 0, attendance: 88 },
  ],

  /* GET /sessions/{id}/attendance (A05) */
  attendanceSession: {
    id: "s0",
    course: "בדיקות תוכנה",
    date: "17/11",
    time: "09:00–12:00",
    approved: false,
    entries: [
      { name: "נועה כהן", status: "partial", minutes: 95 },
      { name: "תמר רוזן", status: "present", minutes: 180 },
      { name: "אילה פרץ", status: "absent", minutes: 0 },
      { name: "שני מלכה", status: "present", minutes: 172 },
      { name: "הדס גבאי", status: "unreported", minutes: null },
    ],
  },

  /* GET /attendance-corrections (A05) */
  corrections: [
    { id: "AC-311", student: "נועה כהן", session: "בדיקות תוכנה 09/11", requested: "נוכחת", reason: "התחברתי מטלפון בשם אחר בזום", attachment: true, opened: "12/11" },
    { id: "AC-309", student: "אילה פרץ", session: "ארכיטקטורת מערכות 11/11", requested: "חלקית", reason: "יצאתי שעה לפני הסוף באישור המרצה", attachment: false, opened: "11/11" },
  ],

  /* GET /practicum-reports (A07) */
  practicumQueue: [
    { id: "PR-88", student: "נועה כהן", date: "20/11", hours: 5, place: "דאטה-ליין", task: "כתיבת בדיקות יחידה למודול התשלומים", waitingDays: 3, flag: null },
    { id: "PR-91", student: "אילה פרץ", date: "21/11", hours: 11, place: "סייבר-גארד", task: "פיתוח דשבורד", waitingDays: 2, flag: "משך חריג" },
    { id: "PR-93", student: "תמר רוזן", date: "21/11", hours: 4, place: "דאטה-ליין", task: "תיקון באגים", waitingDays: 2, flag: "חפיפה עם PR-92" },
    { id: "PR-95", student: "מוריה דוד", date: "02/10", hours: 6, place: "ווב-סטודיו", task: "בניית דפי נחיתה", waitingDays: 1, flag: "דיווח מאוחר" },
  ],

  /* GET /appointments (A09) — היום */
  meetingsToday: [
    { time: "09:00", student: "שני מלכה", type: "אימון אישי", coach: "דנה פרידמן", outcome: "התקיימה", sync: "ok" },
    { time: "10:00", student: "תמר רוזן", type: "בדיקת מצגת", coach: "דנה פרידמן", outcome: "לא הגיעה", sync: "ok" },
    { time: "11:30", student: "אילה פרץ", type: "הכנה לראיון", coach: "אורית שמש", outcome: null, sync: "failed" },
    { time: "14:00", student: "נועה כהן", type: "אימון אישי", coach: "דנה פרידמן", outcome: null, sync: "ok" },
  ],

  /* GET /requests (A12) — תור צוות */
  requestQueue: [
    { id: "RQ-1101", student: "מוריה דוד", subject: "בקשת דיפלומה", type: "דיפלומה", priority: "רגילה", owner: null, status: "new", updated: "לפני שעה", source: "מערכת" },
    { id: "RQ-1098", student: "הדס גבאי", subject: "הפעלה מחדש של חשבון", type: "טכני", priority: "גבוהה", owner: null, status: "new", updated: "לפני 3 שעות", source: "טלפון" },
    { id: "RQ-1093", student: "נועה כהן", subject: "אישור לימודים למלגה", type: "מסמכים", priority: "רגילה", owner: "מזכירות", status: "waiting_student", updated: "אתמול", source: "מערכת" },
    { id: "RQ-1071", student: "נועה כהן", subject: "תיקון נוכחות 09/11", type: "נוכחות", priority: "רגילה", owner: "רחל לוי", status: "in_progress", updated: "לפני יומיים", source: "מערכת" },
    { id: "RQ-1066", student: "אילה פרץ", subject: "פנייה רגישה", type: "רגישה", priority: "גבוהה", owner: "צוות ייעודי", status: "in_progress", updated: "לפני 3 ימים", source: "דוא״ל", sensitive: true },
  ],

  /* GET /admin/delivery-failures */
  deliveryFailures: [
    { id: "DF-41", channel: "Google Calendar", target: "פגישה AP-2211 (אילה פרץ)", error: "הרשאת יומן פגה", at: "08:12" },
    { id: "DF-40", channel: "דוא״ל", target: "תזכורת מפגש — 3 נמענות", error: "תיבה מלאה (1), כתובת שגויה (2)", at: "אתמול 20:00" },
  ],
};

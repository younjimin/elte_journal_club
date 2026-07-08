/* ==============================================================
   ELTE Journal Club — content data
   ==============================================================
   To publish something new, add one object to the matching array
   below. Order doesn't matter — everything is sorted by date
   automatically. See the comment above each array for the field
   format.
   ============================================================== */

/* ---- ARTICLES ------------------------------------------------
   category: "tech" | "ai" | "policy" | "env"
   Fill in "url" to link out to an external article, OR leave it
   empty and fill "body" to let readers expand and read in place.
------------------------------------------------------------------
Example:
{
  id: "article-001",
  title: "Why AI Regulation Is Always One Step Behind",
  date: "2026-07-01",
  author: "Minjun Kim",
  category: "policy",
  summary: "Looking at the EU AI Act as a case study for the gap between the pace of technology and the pace of legislation.",
  url: "",
  body: "Full article text goes here..."
}
------------------------------------------------------------------ */
const ARTICLES = [

];

/* ---- TIPS ------------------------------------------------------
   category: free text (e.g. "Haskell Lab", "Writing", "GPA")
------------------------------------------------------------------
Example:
{
  id: "tip-001",
  title: "Write the type signature before the Haskell lab code",
  category: "Haskell Lab",
  body: "Writing the function signature first keeps you from wandering off mid-implementation..."
}
------------------------------------------------------------------ */
const TIPS = [

];

/* ---- PROJECTS ----------------------------------------------------
   status: "ongoing" | "done" | "paused"
------------------------------------------------------------------
Example:
{
  id: "project-001",
  title: "Campus Energy Usage Dashboard",
  status: "ongoing",
  date: "2026-06-15",
  description: "A visualization of per-building electricity use across ELTE campus.",
  link: ""
}
------------------------------------------------------------------ */
const PROJECTS = [

];

/* ---- ACTIVITIES --------------------------------------------------
   type: "meeting" | "social" | "workshop" | "talk", or anything else
   Items whose date is in the past are shown dimmed on the timeline.
------------------------------------------------------------------
Example:
{
  id: "activity-001",
  title: "Summer Picnic & Catch-up",
  date: "2026-07-20",
  type: "social",
  description: "Casual meetup at City Park to talk about next semester's reading list."
}
------------------------------------------------------------------ */
const ACTIVITIES = [

];

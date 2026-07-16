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
 {
    id: "article-001",
    title: "Why Learn Functional Programming When Nobody Uses Haskell at Work?",
    date: "2026-04-07",
    author: "Jimin Youn",
    category: "cs",
    summary: "Haskell rarely shows up in job postings, so it's tempting to write these courses off as GPA obstacles. Here's why the paradigm still matters more than the language.",
    url: "",
    body: `
      <p>During the first year of a Computer Science BSc program, we are introduced to various paradigms like Imperative, Functional, and Object-Oriented Programming. But why learn Functional Programming when C++ and Java dominate the industry? Since Haskell is rarely seen in job postings, it's easy to feel these subjects exist only to challenge our GPAs.</p>
      <p>However, if that were the case, I wouldn't be writing this. Let me share why acknowledging the differences between these paradigms is essential for our growth as computer science students.</p>

      <p><strong>1. Different Tools for Different Problems</strong></p>
      <p>Each paradigm evolved to address specific challenges. Imperative programming focused on managing CPU and memory with maximum efficiency. Object-Oriented Programming emerged to solve the "software crisis," making large-scale systems more maintainable. Today, we face a new set of real-world problems requiring diverse approaches. By remaining flexible, we can achieve the true goal of computing: finding the most efficient solution for the task.</p>

      <p><strong>2. University vs. Bootcamp: Learning the Way of Thinking</strong></p>
      <p>Why spend years in a degree program when bootcamps offer quicker, practical training? The answer lies in the subjects. Notice our courses aren't titled "Java" or "Haskell"; they are "Object-Oriented" and "Functional Programming." Language trends change every decade, but paradigms endure. Here, a programming language is merely a means to express logic, not the logic itself.</p>

      <p><strong>3. The Convergence of Paradigms</strong></p>
      <p>While pure functional languages like Haskell have a niche market, their influence is everywhere. Java, the industry staple, has been aggressively implementing functional features like Streams and Lambdas. If you understand the core concepts of the functional paradigm, you won't just "use" these features; you will understand why they exist and how to use them effectively.</p>

      <p>Studying the theory behind paradigms might be challenging, and it's hard to see immediate benefits while struggling. But stay patient. This depth of understanding is what separates a coder from an engineer. It will eventually pay off!</p>
    `
  },
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
  {
    id: "tip-001",
    title: "How to Become a Demonstrator",
    category: "Academic Life",
    summary: "Want to lead your own class, boost your CV, and get a bit of financial help along the way? Here's what it actually takes to become a demonstrator.",

    body: `
      <p>In our school, one of the nice experiences as a student is becoming a demonstrator. In general, becoming a demonstrator means that you get to lead a class. This role brings you many advantages, for instance, you can have better understanding, you can meet students in another year, a little financial help, and so on. So, how can we become a demonstrator?</p>
      <p><em>* Please be aware that many things might differ depending on your program, department, and course.</em></p>

      <p><strong>1. What does a demonstrator do?</strong></p>
      <ul>
        <li>Lead a class on your own</li>
        <li>Review and grade student work</li>
        <li>Invigilate during exams</li>
      </ul>

      <p><strong>2. Why is it a good opportunity for you?</strong></p>
      <ul>
        <li><strong>Boost your CV</strong> — it counts as official Teaching Assistant (TA) experience, which looks amazing on your resume for future internships or Master's applications.</li>
        <li><strong>Build relationships with professors</strong></li>
        <li><strong>Deepen your knowledge</strong> — as the saying goes, "the best way to learn is to teach." You will master the subject inside out.</li>
      </ul>

      <p><strong>3. Minimum criteria</strong></p>
      <ul>
        <li><strong>Obtained at least 55 credits</strong> — this usually means you can start from your 2nd year. If you completed 1–2 years of a bachelor's in your home country, you might be able to prove you already have 55 credits.</li>
        <li><strong>You must have taken the course</strong> you want to demonstrate for (a higher grade means a greater chance — 4+ is recommended).</li>
      </ul>

      <p><strong>4. Good things to know</strong></p>
      <ul>
        <li><strong>Talk to the professor first</strong> — it's important to reach out to the course professor before applying. As a first-year student it can feel intimidating to ask, but there's nothing to be afraid of. Don't be afraid of rejection.</li>
        <li><strong>Typical timeline</strong> — there's no fixed date, but this usually happens mid-to-late semester. Paperwork is processed before the semester starts, so make sure you're not too late.</li>
      </ul>
    `
  },

];

const PROJECTS = [
  {

    id: "project-001",

    title: "ELTE Journal Club Website",

    status: "ongoing",

    date: "2026-07-16",

    description: "The club's own website — built and maintained by members to host articles, tips, and activity updates. A living project that grows alongside everything else we do. If you're interested in, feel free to contact us!",

    link: "https://github.com/younjimin/elte_journal_club"

  },

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

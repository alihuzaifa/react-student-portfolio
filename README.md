# Student Portfolio — React and Vite

**Live demo: https://react-student-portfolio.vercel.app**

A single page portfolio built with React and Vite. Every section on the page is generated from
one file: `src/data.js`.

Free to use. Fork it, put your own details in `src/data.js`, and it is your portfolio.

## Running it

```bash
npm install
npm run dev
```

Then open the address Vite prints, usually http://localhost:5173.

To make the files you would upload to a host:

```bash
npm run build      # output lands in dist/
npm run preview    # check that build before you ship it
```

## Adding your own details

1. Open `src/data.js`.
2. Replace the sample values with your own. Each section is an array of objects.
3. Save. Vite refreshes the browser by itself.

### What lives in `src/data.js`

| Export | What it controls |
|---|---|
| `profile` | Name, role, tagline, email, phone, photo, CV |
| `navLinks` | The navigation menu at the top |
| `socialLinks` | GitHub, LinkedIn and other icon buttons |
| `aboutText`, `aboutFacts`, `stats` | The about section and the counting numbers |
| `skillGroups` | Skills grouped by category, each with a progress bar |
| `projects` | Project cards — the filter buttons build themselves |
| `timeline` | Education and work experience |
| `certificates` | Certificate cards |
| `services` | The kind of work you take on |
| `testimonials` | Quotes from people you have worked with |
| `contactInfo`, `contactNote` | Contact cards, plus the line and email button under them |
| `footerInfo` | The footer call to action, columns and bottom line |

### Adding a project

Add one more object to the `projects` array:

```js
{
    title: "My New Project",
    category: "React",          // a new category name creates a new filter button
    icon: "+",
    description: "One or two sentences about what this project does.",
    tech: ["React", "CSS"],
    demo: "#",
    code: "#",
    featured: true              // true adds a "Featured" tag to the card
}
```

Every other section works the same way: copy an object, change the values.

### Using your photo

Put the image in a `public` folder and point `profile` at it:

```js
photo: "/my-photo.jpg"
```

Leave it as an empty string and the circle shows your initials instead.

## The files

```
index.html              the page shell and the anti flash theme script
src/
  main.jsx              mounts the app
  App.jsx               puts the sections in order
  data.js               your content, the only file you need to edit
  index.css             layout, themes, animations, responsive rules
  components/           one file per section of the page
  hooks/                the small pieces of behaviour, reused by components
```

### The hooks

| Hook | What it does |
|---|---|
| `useTheme` | Dark and light theme, remembered in localStorage |
| `useReveal` | Tells a component when it has scrolled into view |
| `useScrollInfo` | Scroll progress, sticky navbar, active menu link |
| `useCountUp` | Counts a stat card from zero to its target |
| `useTypingText` | The typing effect in the hero |

## How it works

Components import only the data they need and render it with `.map()`:

```jsx
import { projects } from "../data";

{projects.map((item) => (
    <ProjectCard key={item.title} item={item} />
))}
```

So adding a project never means touching a component — you add an object, and the card, the
filter button and the footer link all appear on their own.

Two details worth knowing:

- React escapes text for you, which is why an icon like `</>` prints as text with no extra work.
- A four line script in `index.html` applies the saved theme before the page paints, so there is
  no flash of the wrong colours on load.

## What is included

Dark and light theme with a sliding switch, a typing effect in the hero, a scroll progress bar,
fade in animations, animated skill bars and counters, project filtering, an alternating
timeline, a mobile menu and a back to top button. No UI library and no CSS framework.

There is deliberately no message form. A form cannot deliver anything without a server behind
it, so the contact section links straight to a real email address and phone number.

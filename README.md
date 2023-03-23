## App start-up

```
npm run dev
```

## Project Structure

Inside of your Astro project, you'll see the following folders and files:

```
/
│   env.d.ts
│
├───components
│   │   index.ts
│   │   MaskedImage.tsx
│   │   PreviousBoardButton.tsx
│   │
│   ├───Base
│   │       ActionButton.tsx
│   │       AnchorArrow.tsx
│   │       Breadcrumbs.tsx
│   │       Drawer.tsx
│   │       Dropdown.tsx
│   │       Footer.tsx
│   │       Header.tsx
│   │       index.ts
│   │       NavLink.tsx
│   │       PageTitle.tsx
│   │
│   ├───Blocks
│   │       index.ts
│   │       TestimonialCarousel.tsx
│   │       WhatWeDoSection.tsx
│   │
│   ├───Cards
│   │       EventTypeCard.tsx
│   │       ImpactFlipCard.tsx
│   │       index.ts
│   │       NCMemberCard.tsx
│   │       PatronCard.tsx
│   │       SessionElementCard.tsx
│   │       TestimonialCard.tsx
│   │       TextCard.tsx
│   │       UpcomingEventCard.tsx
│   │       WhatWeDoCard.tsx
│   │
│   ├───Dividers
│   │       DividerBottom1.tsx
│   │       DividerTop1.tsx
│   │       index.ts
│   │       WaveDivider1.tsx
│   │       WaveDivider2.tsx
│   │
│   ├───SVGs
│   │       CaretLeft.tsx
│   │       CaretRight.tsx
│   │       ChevronDown.tsx
│   │       CloseIcon.tsx
│   │       FacebookIcon.tsx
│   │       index.ts
│   │       InstagramIcon.tsx
│   │       MenuIcon.tsx
│   │       Underline.tsx
│   │       WhiteStar.tsx
│   │
│   └───Waves
│           DiagonalWaves.tsx
│           FooterWaves.tsx
│           HorizontalWaves.tsx
│           index.ts
│           Wave.tsx
│
├───data
│       index.ts
│       wavePaths.ts
│
├───hooks
│       index.ts
│       useMediaQuery.ts
│
├───layouts
│       HomeLayout.astro
│       Layout.astro
│       TestLayout.astro
│
├───pages
│   │   index.astro
│   │
│   ├───about-us
│   │       index.astro
│   │
│   ├───events
│   │   │   index.astro
│   │   │
│   │   ├───days-of-eyp
│   │   │       index.astro
│   │   │
│   │   ├───national-session
│   │   │       index.astro
│   │   │
│   │   ├───pre-selection-days
│   │   │       index.astro
│   │   │
│   │   └───youth-summit
│   │           index.astro
│   │
│   ├───get-involved
│   │       index.astro
│   │
│   ├───impact
│   │       index.astro
│   │
│   ├───national-committee
│   │       index.astro
│   │
│   ├───patrons-and-partners
│   │       index.astro
│   │
│   ├───public-relations
│   │   │   index.astro
│   │   │
│   │   └───press-releases
│   │           index.astro
│   │
│   └───test
│           index.astro
│
├───React-pages
│       AboutUs.tsx
│       DaysOfEYP.tsx
│       Events.tsx
│       GetInvolved.tsx
│       Home.tsx
│       Impact.tsx
│       index.ts
│       NationalCommittee.tsx
│       NationalSession.tsx
│       PatronsAndPartners.tsx
│       PreSelectionDays.tsx
│       PressReleases.tsx
│       PublicRelations.tsx
│       YouthSummit.tsx
│
├───styles
│       Drawer.css
│       Dropdown.css
│       Header.css
│       Home.css
│       index.css
│
└───utils
        index.ts
        makePath.ts
        shufflePaths.ts
        stringToRoute.ts
```

## Commands

All commands are run from the root of the project, from a terminal:

| Command                | Action                                           |
| :--------------------- | :----------------------------------------------- |
| `npm install`          | Installs dependencies                            |
| `npm run dev`          | Starts local dev server at `localhost:3000`      |
| `npm run build`        | Build your production site to `./dist/`          |
| `npm run preview`      | Preview your build locally, before deploying     |
| `npm run astro ...`    | Run CLI commands like `astro add`, `astro check` |
| `npm run astro --help` | Get help using the Astro CLI                     |


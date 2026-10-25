# 01: App page live at /nudge-inator/

**What to build:** A visitor who opens `/nudge-inator/` sees the Nudge-inator app page, built to the mockup at `docs/mockups/nudge-inator/index.html`, which is the design spec. The page has the wordmark, the seven-screen carousel with its captions (swipe, arrows, dots and arrow keys), the app's one-line description from the glossary, and a line saying the app is coming to the App Store. This is the tracer bullet: it sets up the `/nudge-inator/` section's shared look (system font, colors, dark mode, soft-tray footer) so the privacy and support pages reuse it instead of copying it. See the spec's "Pages", "Typography" and "App page" sections, and stories 32 to 35, 56 to 59 and 60 to 65.

**Blocked by:** None (can start immediately).

**Status:** ready-for-agent

- [ ] `/nudge-inator/` serves the app page in the mockup's design: its system font stack, colors and dark-mode colors, with no web fonts, no third-party scripts and no trackers.
- [ ] The carousel shows the mockup's seven screens in the mockup's order, each with its caption, including caption 7 on Settings ("Your pace, your rules.").
- [ ] The page shows the glossary's one-line description: "An iPhone app that keeps nudging you about a reminder, the way an iOS Alarm keeps ringing, until you mark it done."
- [ ] The page says the app is coming to the App Store. It has no App Store link and no TestFlight link.
- [ ] With JavaScript turned off, the name, description, coming-soon line and links are still readable.
- [ ] The footer is the mockup's soft tray, with Privacy and Support linking to `/nudge-inator/privacy/` and `/nudge-inator/support/`, and "© 2026 New Reality Interactive LLC" on its own line below, linking to the main site's root page.
- [ ] The page shows a visible last-updated date that doesn't compete with the carousel.
- [ ] Weights are only Regular, Semibold and Bold, as in the spec's Typography section.
- [ ] Each of the seven screenshots is checked for personal reminder text, and the result for each is listed in the pull request for Brian to approve.
- [ ] The main site's homepage is unchanged and doesn't link to the Nudge-inator section.
- [ ] Checks 2, 3, 4 and 6 from the spec's Testing Decisions are run on the pull request's page and reported there. For check 4, the Privacy and Support links are expected to fail until tickets 02 and 03 land; every other link works.

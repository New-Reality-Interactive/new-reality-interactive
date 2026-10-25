# 03: Support placeholder live at /nudge-inator/support/

**What to build:** A visitor who opens `/nudge-inator/support/` sees a "Coming Soon" support page that tells them where to write in the meantime. Its design comes from the mockup's support page, `docs/mockups/nudge-inator/support/index.html`: the wordmark, the nav bar (Home, Privacy, Support, with Support marked as the current page) and the soft-tray footer. Its body follows the spec's placeholder rules, not the mockup: the mockup's FAQ and contact text are generated filler and aren't used. With this ticket, every link between the three Nudge-inator pages works. See the spec's "Placeholder pages" rules and stories 52 to 55.

**Blocked by:** 02 (Privacy placeholder live at /nudge-inator/privacy/).

**Status:** ready-for-agent

- [ ] `/nudge-inator/support/` serves the page in the mockup support page's layout, using the section's shared look from ticket 01.
- [ ] The heading is "Support", with a visible "Coming Soon" status and a line saying the page is being written and will be published on this address.
- [ ] The page has no FAQ text. None of the mockup's filler text appears.
- [ ] The page shows `support@newrealityinteractive.com` as an email link.
- [ ] The page shows "Last updated October 25, 2026".
- [ ] The wordmark and Home both link to the app page. The nav and the footer link to Privacy and Support, with Support marked as the current page.
- [ ] "© 2026 New Reality Interactive LLC" sits on its own line below the footer tray, linking to the main site's root page.
- [ ] The page works without JavaScript, loads no web fonts, and fits an iPhone-width screen with no sideways scrolling in light and dark mode.
- [ ] Every link on all three Nudge-inator pages now works, with no broken links left.
- [ ] Checks 2, 3, 4 and 6 from the spec's Testing Decisions are run on the pull request's pages and reported there.

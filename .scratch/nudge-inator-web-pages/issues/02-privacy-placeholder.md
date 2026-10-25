# 02: Privacy placeholder live at /nudge-inator/privacy/

**What to build:** A visitor who opens `/nudge-inator/privacy/` sees a "Coming Soon" privacy page, on the final address that goes into App Store Connect. Its design comes from the mockup's privacy page, `docs/mockups/nudge-inator/privacy/index.html`: the wordmark, the nav bar under it (Home, Privacy, Support, with Privacy marked as the current page) and the soft-tray footer. Its body follows the spec's placeholder rules, not the mockup: the mockup's policy text is generated filler and isn't used. It reuses the shared look from ticket 01. See the spec's "Placeholder pages" rules and stories 52 to 55.

**Blocked by:** 01 (App page live at /nudge-inator/).

**Status:** ready-for-agent

- [ ] `/nudge-inator/privacy/` serves the page in the mockup privacy page's layout, using the section's shared look from ticket 01.
- [ ] The heading is "Privacy Policy", with a visible "Coming Soon" status and a line saying the policy is being written and will be published on this address.
- [ ] The page has no policy text. None of the mockup's filler text appears.
- [ ] The page shows `privacy@newrealityinteractive.com` as an email link.
- [ ] The page shows "Last updated October 25, 2026".
- [ ] The wordmark and Home both link to the app page. The nav and the footer link to Privacy and Support, with Privacy marked as the current page.
- [ ] "© 2026 New Reality Interactive LLC" sits on its own line below the footer tray, linking to the main site's root page.
- [ ] The page works without JavaScript, loads no web fonts, and fits an iPhone-width screen with no sideways scrolling in light and dark mode.
- [ ] The app page's Privacy link now opens this page.
- [ ] Checks 2, 3, 4 and 6 from the spec's Testing Decisions are run on the pull request's page and reported there. For check 4, the Support link is expected to fail until ticket 03 lands; every other link works.

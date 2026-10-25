# 02: Privacy placeholder live at /nudge-inator/privacy/

**What to build:** A visitor who opens `/nudge-inator/privacy/` sees a "Coming Soon" privacy page, on the final address that goes into App Store Connect. Its design comes from the mockup's privacy page, `docs/mockups/nudge-inator/privacy/index.html`: the wordmark, the nav bar under it (Home, Privacy, Support, with Privacy marked as the current page) and the soft-tray footer. Its body follows the spec's placeholder rules, not the mockup: the mockup's policy text is generated filler and isn't used. It reuses the shared look from ticket 01. See the spec's "Placeholder pages" rules and stories 52 to 55.

**Blocked by:** 01 (App page live at /nudge-inator/).

**Status:** ready-for-agent

- [x] `/nudge-inator/privacy/` serves the page in the mockup privacy page's layout, using the section's shared look from ticket 01.
- [x] The heading is "Privacy Policy", with a visible "Coming Soon" status and a line saying the policy is being written and will be published on this address.
- [x] The page has no policy text. None of the mockup's filler text appears.
- [x] The page shows `privacy@newrealityinteractive.com` as an email link.
- [x] The page shows "Last updated October 25, 2026".
- [x] The wordmark and Home both link to the app page. The nav and the footer link to Privacy and Support, with Privacy marked as the current page.
- [x] "© 2026 New Reality Interactive LLC" sits on its own line below the footer tray, linking to the main site's root page.
- [x] The page works without JavaScript, loads no web fonts, and fits an iPhone-width screen with no sideways scrolling in light and dark mode.
- [x] The app page's Privacy link now opens this page.
- [ ] Checks 2, 3, 4 and 6 from the spec's Testing Decisions are run on the pull request's page and reported there. For check 4, the Support link is expected to fail until ticket 03 lands; every other link works.

## Implementation notes

Added after ticket 01 merged (PR #17).

**Recommended model:** Sonnet 5.5, medium effort. It's a small static page with an exact spec.

- The section's shared look is `nudge-inator/shared.css`: tokens, dark mode, body and the soft-tray footer. The mockup's text-page styles (masthead, wordmark, site-nav, main, h1, `.lede`, `.updated`) are only in `docs/mockups/nudge-inator/page.css`. Add them as a small `nudge-inator/text-page.css` that loads after `shared.css`. Don't copy the tokens or the footer again.
- Use relative paths so the page works from `file://` as well as when served, for example `../shared.css`. Brian reviews pages by opening them from disk. `href="../"` doesn't work from disk, so the wordmark and Home use `../index.html`. From `privacy/`, the footer's company link to the site root is `../../index.html`.
- The footer on this page holds Home, Privacy and Support, with Home being the app page and Privacy marked as the current page. The app page's own footer has only Privacy and Support.
- The mockup's body text is filler and isn't used. The body is only the spec's placeholder rules: the "Privacy Policy" heading, a visible "Coming Soon", a line saying the policy is being written and will be published on this address, the `privacy@` email link, and "Last updated October 25, 2026".
- The Support link stays dead until ticket 03.
- Check 2: the headless Chrome used for ticket 01 couldn't go below about 500px wide. Use devtools device emulation at iPhone width instead. Report any check that couldn't be run.
- Use the PR body from ticket 01 (PR #17) as the template, including the checks report.

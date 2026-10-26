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

## Implementation notes

Added after ticket 02 merged (PR #18).

**Recommended model:** Sonnet 5.5, medium effort. It's a small static page with an exact spec.

- Copy `nudge-inator/privacy/index.html` as the starting point. It already has the masthead, nav, footer and relative paths (`../shared.css`, `../text-page.css`, `../index.html`, `../../index.html`). Change the title, description, heading, `aria-current="page"` (move it from Privacy to Support in both navs), the `support/` links (Support's own link is `index.html`, Privacy's is `../privacy/index.html`) and the email (`support@newrealityinteractive.com`).
- Ticket 02 shipped the full privacy policy, not a placeholder, at Brian's request. The "Coming Soon" pill and its `.status` rule were removed from `nudge-inator/text-page.css`. This ticket needs them. Add `.status` back (an accent-outlined pill under the h1: `display: inline-block; margin: 1rem 0 0; padding: 0.2rem 0.75rem; border: 1px solid var(--accent); border-radius: 999px; color: var(--accent); font-size: 0.875rem; font-weight: 600;`). Use the markup `<p class="status">Coming Soon</p>`, then `<p class="lede">`, the email `<p>`, then `<p class="updated">`. The h2, list and `.contact` rules in that file are for the full text and aren't needed by the placeholder.
- The privacy page is now the real policy and says Settings › About links to the support page, so this page must exist at `support/index.html`.
- On the privacy page and app page, links to Support (`../support/index.html`, `support/index.html`) are the dead links this ticket fixes. Re-run the link check on all three pages.
- Check 2: headless Chrome can't go below about 500px wide, so the iPhone-width check was only done at 500px for tickets 01 and 02. Use devtools device emulation at 390px, or report it as not run.
- Use the PR body from ticket 02 (PR #18) as the template, including the checks report and its "not run" lines.

## Outcome

Changed scope (Brian, 2026-10-25): this page ships the mockup's support content (contact block, FAQ, privacy line), not a "Coming Soon" placeholder. The "Coming Soon", "line saying the page is being written", "no FAQ text" and "mockup filler isn't used" criteria above no longer apply, and the `.status` pill note was not followed. Everything else is met. The FAQ answers other than "How do I stop nudges?" still need Brian's confirmation. See the spec's "Scope change" note.

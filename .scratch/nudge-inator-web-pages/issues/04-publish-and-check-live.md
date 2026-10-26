# 04: Publish and check the live addresses

**What to build:** Brian publishes the three Nudge-inator pages and confirms they work at their public addresses, so the privacy policy, support and marketing URLs are safe to enter in App Store Connect. Entering them in App Store Connect is outside this ticket. See the spec's "Site and hosting" and "URL structure" sections and check 1 in Testing Decisions.

**Blocked by:** 03 (Support placeholder live at /nudge-inator/support/).

**Status:** ready-for-human

- [x] The pull requests for tickets 01 to 03 are reviewed and merged, and GitHub Pages has deployed them.
- [x] Check 1: `https://newrealityinteractive.com/nudge-inator/`, `https://newrealityinteractive.com/nudge-inator/privacy/` and `https://newrealityinteractive.com/nudge-inator/support/` each open over HTTPS in a logged-out browser, with no warning and no sign-in prompt.
- [x] GitHub Pages serves each trailing-slash address as its page, as the spec assumes.
- [x] On a real iPhone, each page fits the screen with no sideways scrolling, in light mode and in dark mode.
- [x] Every link on the three live pages works, and the main site's homepage still has no link to the Nudge-inator section.
- [x] The results are noted under a `## Comments` heading at the bottom of this file.

## Implementation notes

Added after ticket 03 merged (PR #19).

**Recommended model:** none needed. This ticket is Brian's (`ready-for-human`). An agent can run the curl checks for him.

- All three pull requests are merged: #17 (app page), #18 (privacy) and #19 (support). Brian merged each, so the first criterion depends only on GitHub Pages having deployed #19.
- Status right after the #19 merge: `/nudge-inator/` and `/nudge-inator/privacy/` returned 200 over HTTPS, and `/nudge-inator/support/` returned 404. That is probably the deploy still running. Re-check before ticking anything. If support still 404s after the Pages build finishes, that is the trailing-slash problem the spec warns about, so look at the Pages build and at whether `nudge-inator/support/index.html` is on main.
- Privacy and support ship full text, not placeholders (spec "Scope change" note). Before the URLs go into App Store Connect, Brian still needs to confirm the support FAQ: only "How do I stop nudges?" is recorded as confirmed, and its answer is shorter than the confirmed wording. "Relentless always breaks through Focus" wasn't verified against the app.
- Never run so far, on any of the three PRs: the iPhone-width check at 390px (headless Chrome stopped at about 500px), the network-panel font check, the fallback-font check, a screen reader pass, and check 5 (reading the privacy and support text against the spec's content rules). Ask Brian whether he wants these before the URLs go in.
- The privacy policy says Settings › About in the app links to the privacy and support pages. Confirm the app's links point at `https://newrealityinteractive.com/nudge-inator/privacy/` and `.../support/`.
- The homepage must still have no link to the Nudge-inator section (the spec puts this out of scope). Nothing in these PRs touched `index.html`, `css/` or `js/` at the repo root.

## Comments

2026-10-25, Brian: all checks pass.

- The pull requests for tickets 01 to 03 (#17, #18, #19) are merged and GitHub Pages has deployed them.
- Check 1: `/nudge-inator/`, `/nudge-inator/privacy/` and `/nudge-inator/support/` all open over HTTPS with no warning or sign-in prompt. Agent curl check: all three returned 200 (support returned 404 for a few minutes right after the #19 merge, while Pages deployed).
- Trailing-slash addresses are served as their pages by GitHub Pages.
- iPhone-width fit in light and dark mode, all links, and the homepage having no link to the section: reported as passing by Brian. The agent did not run these.
- Entering the URLs in App Store Connect is still to do and is outside this ticket.

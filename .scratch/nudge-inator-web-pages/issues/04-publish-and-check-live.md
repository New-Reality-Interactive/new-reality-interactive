# 04: Publish and check the live addresses

**What to build:** Brian publishes the three Nudge-inator pages and confirms they work at their public addresses, so the privacy policy, support and marketing URLs are safe to enter in App Store Connect. Entering them in App Store Connect is outside this ticket. See the spec's "Site and hosting" and "URL structure" sections and check 1 in Testing Decisions.

**Blocked by:** 03 (Support placeholder live at /nudge-inator/support/).

**Status:** ready-for-human

- [ ] The pull requests for tickets 01 to 03 are reviewed and merged, and GitHub Pages has deployed them.
- [ ] Check 1: `https://newrealityinteractive.com/nudge-inator/`, `https://newrealityinteractive.com/nudge-inator/privacy/` and `https://newrealityinteractive.com/nudge-inator/support/` each open over HTTPS in a logged-out browser, with no warning and no sign-in prompt.
- [ ] GitHub Pages serves each trailing-slash address as its page, as the spec assumes.
- [ ] On a real iPhone, each page fits the screen with no sideways scrolling, in light mode and in dark mode.
- [ ] Every link on the three live pages works, and the main site's homepage still has no link to the Nudge-inator section.
- [ ] The results are noted under a `## Comments` heading at the bottom of this file.

Status: ready-for-agent (every item in the "Ready for agent" checklist was checked on 2026-10-25)

# Nudge-inator web pages

Last updated: 2026-10-25

## Problem Statement

Nudge-inator is an iPhone reminders app (iOS 26.1 and later, Swift and SwiftUI). It ships first through TestFlight and then the App Store. Both need public web addresses:

- App Store Connect asks for a privacy policy URL, a support URL and a marketing URL.
- TestFlight shows testers the app's URLs and privacy policy.

New Reality Interactive's website has no pages for the app, so there is nothing to link to. Brian wants the pages on his own site, with stable addresses, in plain language that matches what the app actually does with data.

## Solution

Add three public pages for Nudge-inator to the existing New Reality Interactive website, under one `/nudge-inator/` section:

1. A privacy policy, which is needed first.
2. A support page with contact details and a short FAQ.
3. An app page, which provides the marketing URL. It is in scope now.

The English pages use addresses that never change. Later translations are added beside them. The pages are readable on an iPhone in light and dark mode.

Until the privacy policy and support text are written, their pages ship as "Coming Soon" placeholders on the same addresses. The full text is written outside this project and replaces the placeholders without changing those addresses. The app page follows the Nudge-inator mockup as its design spec, and the privacy and support pages share that design.

## User Stories

Each story says who does it. **(Agent)** stories change this repository and an agent can take them. **(Brian)** stories need publishing, App Store Connect, the live site, or Brian's decision. **(Agent drafts, Brian approves)** means the text is written first and Brian approves it before it's published. The full privacy policy and support text is written outside this project, so these stories describe what that text must do. The placeholders are covered by stories 52 to 55.

### Brian (founder and managing member)

1. As Brian, I want to choose the support contact method, so that customers know where to write and I control what the address is used for. (Brian, decided 2026-10-24)
2. As Brian, I want to choose the privacy contact, so that privacy questions reach me and not a generic inbox. (Brian, decided 2026-10-24)
3. As Brian, I want to decide whether the app page is in scope now, so that the marketing URL exists before the App Store release if I want it. (Brian, decided 2026-10-24)
4. As Brian, I want to approve the final URL paths before anything is published, so that the addresses I enter in App Store Connect are the ones I intend. (Brian, decided 2026-10-24)
5. As Brian, I want the privacy policy drafted from the facts the app actually supports, so that I'm not publishing claims I can't back up. (Agent)
6. As Brian, I want to edit and approve the privacy policy text before it goes live, so that it sounds like me and matches my legal position. The sequence: the full text arrives in a pull request (story 51), I edit and approve it, and only then is it merged and published. (Agent drafts, Brian approves and publishes)
7. As Brian, I want to confirm every FAQ answer on the support page, so that the answers are accurate for the app as shipped. The sequence: the full support text arrives in a pull request (story 51), I confirm or correct each FAQ answer and the rest of the text, and only then is it merged and published. (Agent drafts, Brian approves and publishes)
8. As Brian, I want the pages to use the app's glossary terms, so that the pages say what the app's own screens say. (Agent)
9. As Brian, I want the privacy policy to show a last-updated date, so that readers and reviewers can tell how current it is. (Agent)
10. As Brian, I want to be told when the app's data handling changes, so that I can update the pages in the same release. (Agent: any agent changing the app's data handling flags it to Brian)
11. As Brian, I want to check each address against the list in Implementation Decisions before I enter it in App Store Connect, so that a typo doesn't become a permanent URL. (Brian)
12. As Brian, I want to enter the URLs in App Store Connect myself, so that nothing is submitted on my behalf. (Brian)

### Privacy policy readers (App Review, TestFlight testers, App Store visitors)

13. As an App Review member, I want the privacy policy to state that the app has no account and no server, so that I can check it against the app's behavior. (Agent drafts, Brian approves)
14. As an App Review member, I want the privacy policy to say that the app makes no network requests and includes no analytics, advertising, tracking or third-party SDKs, so that I can verify the claim. (Agent drafts, Brian approves)
15. As an App Review member, I want the privacy policy to say that reminders are stored only on the iPhone, in the app's local database, with CloudKit sync turned off, so that I know where the data lives. (Agent drafts, Brian approves)
16. As an App Review member, I want the privacy policy to say that reminders are included in the person's own iPhone backups, so that I know backups are the only other copy. (Agent drafts, Brian approves)
17. As an App Review member, I want the privacy policy to say that nudges are local notifications and that the strongest reminders are AlarmKit alarms scheduled on the device, so that I know nothing is sent to a server. (Agent drafts, Brian approves)
18. As an App Review member, I want the privacy policy to name Settings › Delete All Data, so that I can see how a person removes their data. (Agent drafts, Brian approves)
19. As an App Review member, I want the privacy policy to say that deleting the app alone leaves its alarms scheduled, so that the instruction to use Delete All Data first is clearly justified. (Agent drafts, Brian approves)
20. As an App Review member, I want the privacy policy's privacy-label statement ("Data Not Collected") to match the privacy label in App Store Connect, so that the listing is consistent. (Agent drafts, Brian approves)
21. As an App Review member, I want the privacy policy's tracking statement to match the app's privacy manifest, so that the manifest and the page agree. The statement must be true for the app as shipped. (Agent drafts, Brian approves)
22. As a tester, I want to open the privacy policy from the TestFlight app, so that I can read it before I install. The privacy policy is public once its page is merged, so whether TestFlight requires the link is outside this spec (open question 5). (Brian)
23. As a visitor, I want a contact address for privacy questions on the privacy policy, so that I can ask about my data. (Agent drafts, Brian approves)
24. As a visitor, I want the privacy policy to say how Apple's optional diagnostics sharing relates to the app, so that I'm not confused by Apple's crash and analytics reports. Whether the policy covers this is decided when the full text is written (open question 6). (Agent drafts, Brian approves)

### Support page readers

25. As a user with a problem, I want a clear way to contact support, so that I can ask for help without an account. (Agent drafts, Brian approves)
26. As a user writing to support, I want a list of what to include (iPhone model, iOS version, app version), so that the first reply can answer my question. (Agent drafts, Brian approves)
27. As a user, I want a FAQ that answers why alarms ring through silent mode and Focus, so that I understand the behavior before I'm surprised by it. (Agent drafts, Brian approves)
28. As a user, I want a FAQ that explains how to stop nudges, so that I can turn them off without deleting reminders. (Agent drafts, Brian approves)
29. As a user, I want a FAQ that explains how to delete all my data, so that I know Delete All Data is the right step. (Agent drafts, Brian approves)
30. As a user, I want a FAQ that explains why alarms remain after I delete the app, so that I know to delete data first. (Agent drafts, Brian approves)
31. As a user, I want the support page to link to the privacy policy, so that I can find both from one place. (Agent)

### App page readers and App Store visitors

32. As a visitor from the App Store, I want the marketing page to say what Nudge-inator does in a few lines, so that I can decide whether to download it. (Agent drafts, Brian approves)
33. As a visitor before the app is on the App Store, I want the app page to say the app is coming, so that I'm not sent to a dead link. (Agent drafts, Brian approves)
34. As a visitor after launch, I want the app page to link to the App Store listing, so that I can install the app. (Agent, once Brian gives the App Store link after release)
35. As a visitor who wants to try the app early, I want the app page to say that testing is by invitation only, so that I don't look for a public beta link that doesn't exist. (Agent drafts, Brian approves)

### Everyone

36. As a reader on an iPhone, I want the pages to fit the screen with no sideways scrolling, so that I can read them in Safari. (Agent)
37. As a reader with a dark-mode phone, I want the pages to use a dark color scheme, so that they don't flash white or hurt my eyes at night. (Agent)
38. As a reader using a screen reader, I want headings, descriptive link text and labelled sections, so that I can move around the pages. (Agent)
39. As a reader with low vision, I want text that meets readable contrast and can be enlarged, so that I can read the pages. (Agent)
40. As a reader who opens a link from the App Store, I want HTTPS and no login, so that the link opens without a warning or a sign-in prompt. (Brian: the live site's hosting)
41. As a reader who uses another language later, I want a translated page at a language address, so that I can read the app's pages in my language. Only the address structure is in scope now. (Agent)
42. As an English reader, I want the English addresses to stay the same when translations are added, so that links I've shared keep working. (Agent)
43. As a reader who finds one Nudge-inator page, I want links to the other two, so that I can find the privacy policy, the support page and the app page from any of them. (Agent)

### Maintainers

45. As a maintainer, I want the change that alters the app's data handling to include an update to these pages, so that the pages never go stale. It goes in the Nudge-inator release checklist, which this spec doesn't change. (Brian)
46. As a maintainer, I want the new pages to ship with no build step or framework, so that the site stays as simple as it is now. (Agent)
47. As a maintainer, I want the new pages to go through a pull request on this repository, so that the change is reviewed before it goes live. (Agent opens it, Brian reviews and merges)
48. As a person using the app, I want a link to the privacy policy inside the app, so that I can read it without searching for it. Guideline 5.1.1(i) requires this. It's built in the Nudge-inator repository, not here. It's added in the Nudge-inator repository (open question 13). It blocks nothing in this spec, but the App Store release depends on it. (Not built in this repository)
49. As a person deleting my data, I want the privacy policy to say how long reminders are kept and how to delete them, so that I know what Delete All Data does before I use it. (Agent drafts, Brian approves)
50. As a beta tester, I want the privacy policy to say what TestFlight shares with the developer when I send feedback or a crash log, so that I know what I'm sending before I send it. (Agent drafts, Brian approves)
51. As Brian, I want the three pages built in the site's existing static HTML and CSS, so that I only need to approve and publish. The agent builds the app page as described in "Pages", and builds the privacy policy and support placeholders (stories 52 to 55). The full privacy policy and support text is written outside this project. All three pages follow the mockup's design, including its dark-mode colors. They work without JavaScript and link to each other. It runs the Testing Decisions checks that can run before publishing (iPhone width in light and dark mode, heading order, link text, contrast, no broken links, wording against the content rules in "Pages") on the pull request's pages and reports the results there. Brian approves the text (stories 6 and 7) and publishes by merging. (Agent builds; Brian approves and publishes)

### Placeholder pages

52. As Brian, I want placeholder privacy and support pages live on their final addresses now, so that the URLs I enter in App Store Connect point to pages that exist before the full text is written. (Agent builds; Brian approves and publishes)
53. As a visitor who opens the privacy policy or support page early, I want to see that the page is coming soon and where I can write in the meantime, so that I'm not sent to a dead end. (Agent)
54. As Brian, I want the full text to replace the placeholder body without changing the address, so that the URLs in App Store Connect stay valid. The full text is written outside this project. (Brian)
55. As a reader on a dark-mode phone, I want the placeholders to use the same dark color scheme as the full pages, so that they don't flash white. (Agent)

### App page

56. As Brian, I want the app page built to the design in the Nudge-inator mockup, so that the page matches the approved look and I only review the copy and the publishing. (Agent builds; Brian approves and publishes)
57. As a visitor on an iPhone, I want to swipe through the app's seven screens, each with a short line, so that I can see what the app does before I install it. (Agent)
58. As a visitor with JavaScript turned off, I want the app page's name, description and links to still be readable, so that the page isn't blank. (Agent)
59. As Brian, I want each screenshot checked for personal reminder text before the app page is published, so that nothing private goes public. (Agent checks, Brian approves)

### Typography

60. As a visitor on an iPhone, iPad or Mac, I want the pages' text in the same font as the app, so that the site and the app feel like one product. (Agent)
61. As a visitor on Windows, Android, ChromeOS or Linux, I want the pages' text in my device's own system font, so that the pages look native and stay readable where SF Pro isn't installed. (Agent)
62. As a visitor on a slow connection, I want the pages to load no web fonts, so that the text appears at once and no font request leaves my device. (Agent)
63. As Brian, I want the pages to use Apple's system font without hosting, embedding or linking the SF Pro files, so that the site stays within Apple's font license. (Agent)
64. As Brian, I want the pages to use only the app's font weights (Regular, Semibold, and Bold where the app uses it), so that headings and body text carry the same hierarchy as the app. (Agent)
65. As a visitor whose device falls back to another font, I want headings and captions to fit without crowding or reflowing the carousel, so that the page still looks deliberate. (Agent)

## Implementation Decisions

### Site and hosting

- The site is static HTML and CSS with no build step. The new pages follow that approach. No framework or host is proposed.
- The site is served by GitHub Pages from this repository, with the custom domain `newrealityinteractive.com`. Brian confirmed this on 2026-10-24. Trailing-slash addresses (for example `/nudge-inator/privacy/`) depend on the host serving a directory's index page. That behavior is assumed for GitHub Pages and needs checking after the first publish.
- The site has no existing app or product pages. The "Tommy's Voyage" tracker page used a sub-path (`/journey/`) and was removed in PR #15, so the new `/nudge-inator/` section is the first product section on the site.
- The homepage doesn't change in this spec. It gets no link to the Nudge-inator section (Brian, 2026-10-24).

### URL structure

- English pages live at addresses without a language segment:
  - App page: `/nudge-inator/`
  - Privacy policy: `/nudge-inator/privacy/`
  - Support: `/nudge-inator/support/`
- Brian approved these URL paths on 2026-10-24. They are the addresses to enter in App Store Connect. The privacy policy and support URLs can't be edited at any time, so changing either one later means a new version submission. Stable paths matter for that reason.
- Translations go under a language segment beside the English section, for example `/<locale>/nudge-inator/privacy/`. The locale code should use the same form Apple uses in App Store Connect. The English addresses never move. If the site later adds an explicit `/en-us/` path, the unprefixed English addresses stay as they are, and the English pages are not redirected.
- The App Store Connect fields take full HTTPS URLs on the custom domain: `https://newrealityinteractive.com/nudge-inator/privacy/` (privacy policy), `https://newrealityinteractive.com/nudge-inator/support/` (support URL), and `https://newrealityinteractive.com/nudge-inator/` (marketing URL).

### Contacts

- Support contact: `support@newrealityinteractive.com`, approved by Brian on 2026-10-24.
- Privacy contact: `privacy@newrealityinteractive.com`, approved by Brian on 2026-10-24.
- Both addresses are published on the pages. Brian is responsible for monitoring them.

### Age and testing

- The app has no age restriction (Brian, 2026-10-24). The privacy policy has no children's section, and the support page makes no age statement. Brian's age-rating answer in App Store Connect is outside this spec.
- Testing is by invitation only (Brian, 2026-10-24). The app page doesn't link to TestFlight, and no public beta link is published. Invited testers still see the privacy policy in the TestFlight app (see the Apple requirements section).

### Pages

- The Nudge-inator section uses the design in the mockup at `docs/mockups/nudge-inator`: its system font (see "Typography"), its colors and its dark-mode colors. This replaces the earlier rule that the pages use the homepage's type and colors. The homepage itself is unchanged.
- Each page is a standalone HTML page in that design, with the same footer across the three. The privacy and support pages also have a nav bar under the wordmark: Home (the app page), Privacy and Support, with the current page underlined in the accent color (Brian, 2026-10-25).
- The mockup includes the privacy and support pages as well as the app page. Their layout, header and footer are the design spec. Their body text is generated filler, not approved text: the placeholders follow the "Placeholder pages" rules below, and the full text comes from outside this project.
- The footer is a soft rounded tray, echoing the phone frames, below the carousel on the app page and below the content on the other two. It holds links to the other Nudge-inator pages, with the app page labelled Home, and below it, on its own line, "© <year> New Reality Interactive LLC" linking to the home page (chosen by Brian on 2026-10-25).
- The privacy policy and support pages work without JavaScript. The app page's screen carousel uses JavaScript, and the rest of that page doesn't depend on it. The pages use no third-party scripts, no web fonts and no trackers.
- **"Home" depends on where you are.** On the main site, Home is the site's root page. Inside the Nudge-inator section, Home is the app page at `/nudge-inator/`. The main site doesn't link to the Nudge-inator section, on purpose, for now (Brian, 2026-10-25).
- Each Nudge-inator page links to the other two Nudge-inator pages, with the app page labelled Home. The company name in the footer links to the main site's root page.
- Each page has a visible last-updated date.
- The privacy policy states the following:
  - No account and no server. Reminders are stored only on the iPhone, in the app's local database (SwiftData in the app's App Group container, with CloudKit sync turned off).
  - No network requests, and no analytics, advertising, tracking or third-party SDKs.
  - Reminders are included in the person's own iPhone backups (iCloud or computer), which is how iOS backs up app data.
  - Nudges are local notifications and, for the strongest reminders, AlarmKit alarms scheduled on the device. Nothing is sent to a server.
  - Settings › Delete All Data removes every reminder and cancels every nudge and alarm. Deleting the app alone leaves its alarms scheduled, so the page tells people to use Delete All Data first.
  - The App Store privacy label is planned as "Data Not Collected". The privacy manifest declares no tracking and no collected data. The app repository doesn't have that file yet, so the policy's statement must be true for the app as shipped (story 21).
  - Retention and deletion, as Guideline 5.1.1(i) requires: reminders stay on the iPhone until the person deletes them with Settings › Delete All Data. Backups keep copies for as long as the person keeps those backups. Deleting the app alone leaves its alarms scheduled, so use Delete All Data first.
  - The app sends no data anywhere, so no data is shared with any third party. The one exception is TestFlight, which isn't the app: the beta section above covers it. Guideline 5.1.1(i) asks the policy to confirm third-party protections, and with no third parties that statement is that none receive data.
  - A section on TestFlight beta testing, drafted from Apple's "Legal - TestFlight & Privacy" page, which says Apple shares this with the developer when a tester uses TestFlight:
    - Crash logs, usage information, and feedback (comments, screenshots, and device details such as the model, iOS version and free disk space). Testers can't opt out of Apple collecting crash logs and usage information.
    - The developer may use that data to improve the app and related products, and "is not permitted to share this information with a third party."
    - Requests to access or delete TestFlight data go to the developer, at the privacy contact.
    - A screenshot can show reminder text, so testers should send only what they're comfortable sharing.
  - The privacy contact, `privacy@newrealityinteractive.com`, and a last-updated date.
- The support page contains:
  - The contact address `support@newrealityinteractive.com`, and a list of what to include in a message: iPhone model, iOS version and app version.
  - A FAQ with the four questions from the brief, with the draft answers below. Brian confirms every answer.
  - A link to the privacy policy.
  - No "Installing a beta" section (open question 11).
- The app page is in scope now. It says the app is coming until it is on the App Store, then links to the App Store. It uses the app's one-line description from the glossary: "An iPhone app that keeps nudging you about a reminder, the way an iOS Alarm keeps ringing, until you mark it done."
- The app page's design, screens and captions come from the mockup, which is the design spec. Its seven screens are real app screens, and its captions are draft copy for Brian to approve (story 32). The mockup doesn't show the "coming soon" line or the App Store link, which the app page adds (stories 33 and 34).
- Caption 7, on the Settings screen, reads "Your pace, your rules. Choose how often new reminders nudge, and check that notifications and alarms are on." Brian chose it on 2026-10-25 to match the screen. It replaces the earlier alarms caption ("Loud when it matters."); the welcome screen on slide 1 still says urgent nudges ring as alarms.
- **Placeholder pages.** The privacy policy and support page ship first as placeholders on their final addresses. Each placeholder:
  - Has the page name as its heading, a visible "Coming Soon" status, and no policy or FAQ text.
  - Says the page is being written and will be published on this address.
  - Shows the approved contact address for that page: `privacy@newrealityinteractive.com` on the privacy placeholder, `support@newrealityinteractive.com` on the support placeholder.
  - Links to the app page (Home and the wordmark) and to the other placeholder, and to the main site's root page from the company name in the footer. The app page is built first, so these links work from the start.
  - Takes its layout, header, nav and footer from the matching mockup page. The mockup's body text is filler and isn't used.
  - Uses the same design as the app page and works without JavaScript. It shows the last-updated date October 25, 2026, which changes to the full text's date when that replaces the placeholder (Brian, 2026-10-25).
- The privacy policy and support content bullets below describe the full text, which is written outside this project.
- **Build order** (Brian, 2026-10-25): the app page first, since it sets up the section's shared design. Then the privacy placeholder, then the support placeholder.

### Typography

Decided on 2026-10-25, replacing the earlier decision to use the mockup's two Google Fonts.

- The app uses Apple's system font, SF Pro, through Apple's built-in text styles with Dynamic Type, at Regular, Medium, Semibold and Bold. The pages match it with the system font only.
- Every page uses one system font stack, held in a single CSS custom property: `-apple-system, system-ui, BlinkMacSystemFont, "Segoe UI", Roboto, "Helvetica Neue", Arial, sans-serif`. That gives SF Pro on Apple devices, Segoe UI on Windows, Roboto on Android and ChromeOS, and the desktop's sans-serif on Linux.
- The pages load no web fonts: no Google Fonts or other font links, no `@font-face` rules and no font files. SF Pro is never hosted, embedded or linked, because Apple's font license doesn't allow serving it from a public page.
- Weights follow the app: Regular (400) for body text, Semibold (600) for headings, captions, FAQ questions and inline emphasis, and Bold (700) for the page titles and the wordmark (confirmed by Brian, open question 18). No other weight is used. Semibold is Body's emphasized weight in Apple's tables, so inline emphasis is Semibold, not the browser's default bold.
- No page text imitates an iPhone screen. The app page's seven screens are screenshots, so Apple's text sizes (Body 17/22 pt, Title 2 22/28 pt and so on, at the default Large size) don't apply to the HTML text. If a later page draws an iPhone screen in HTML, it uses those sizes, taken from the Human Interface Guidelines typography tables.
- The headings keep their negative letter-spacing (−0.02 to −0.035 em). It doesn't copy SF Pro's tracking, which is positive above 24 pt; it was tuned for the earlier display font. It looked right in SF Pro and Helvetica Neue and slightly dense, but not cramped, in Roboto (checked 2026-10-25).

### Wording and glossary terms

Nudge-inator's glossary sets the words. The pages use these terms:

- **Reminder**, not "task". **Nudge**, not "ping" or "alert". **Done**, not "complete" or "dismiss". **Pause** and **Resume** for stopping and restarting a reminder without losing it. **Break through Focus** for the setting that lets nudges sound through silent mode and Focus.
- **Alarm** only for the system alarm that AlarmKit schedules. The glossary uses "alarm" for the system object, not for a reminder.

Draft FAQ answers, for Brian to confirm:

- **Why do alarms ring through silent mode and Focus?** Each reminder has a Break through Focus setting. When it's on, its nudges are sent as alarms, which sound through silent mode and Focus. When it's off, its nudges are ordinary notifications that a Focus can hold. A Relentless reminder always breaks through Focus.
- **How do I stop nudges?** Mark the reminder Done. Done closes the open occurrence. Stopping an alarm only silences that one ring, and the next nudge still comes on schedule. To stop a reminder from nudging without losing it, pause it. Resume brings it back at its next due time. Brian confirmed this answer on 2026-10-25. The glossary's line that Stop "is the only way to take a break from nudging" is fixed in the Nudge-inator repository, outside this spec.
- **How do I delete all my data?** Go to Settings › Delete All Data. It removes every reminder and cancels every nudge and alarm. Do this before you delete the app.
- **Why do alarms remain after I delete the app?** Deleting the app alone leaves its alarms scheduled on your iPhone. Use Settings › Delete All Data first, which cancels every nudge and alarm.

### Wording and consistency

- Brian owns the pages and keeps them in step with the app. Any change that alters what the app does with data updates the pages in the same release. This is a process requirement to add to the Nudge-inator release checklist. This spec doesn't change that repository (see Out of Scope).

### Publishing

- The pages are changed through a pull request on this repository, like the setup changes in PR #15. Merging to `main` publishes them.
- The placeholders go out first, in the first pull request, on their final addresses. They don't wait for the full text or any open question. The full text follows in a later pull request with the same addresses.
- The agent opens the pull request with the placeholders. Brian approves the full text (stories 6 and 7) when it arrives, and merges. If the app page and support page are ready first, they can go out in an earlier pull request without the privacy policy, with links to it added once it's live.
- App Store Connect is updated by Brian after the pages are live. The URLs are verified (see Testing Decisions) before they are entered.

### Apple requirements

Confirmed with apple-rag-mcp:

| Requirement | Apple source | What it confirms |
| --- | --- | --- |
| Privacy policy URL in each language's app information | App Info Localizations (App Store Connect API), `https://developer.apple.com/documentation/appstoreconnectapi/app-info-localizations` | The "Privacy policy URL" attribute exists per locale. |
| Support URL and marketing URL in each version's localized metadata | App Store Version Localizations, `https://developer.apple.com/documentation/appstoreconnectapi/app-store-version-localizations` | Both attributes exist per locale. |
| TestFlight shows testers URLs and privacy policies | Beta App Localizations, `https://developer.apple.com/documentation/appstoreconnectapi/beta-app-localizations` | Testers see "descriptions, URLs, and privacy policies" in the TestFlight app. |
| Apple's crash and analytics data comes only from people who opted in | App Crashes report, `https://developer.apple.com/documentation/analytics-reports/app-crashes` | Data comes "from users who have opted to share their data with Apple and developers." |

Confirmed from Apple pages Brian downloaded on 2026-10-24:

- **Privacy Policy URL is required for iOS and macOS apps.** "App information", App Store Connect Help: "Privacy Policy URL ... Required for iOS and macOS apps."
- **Privacy Policy on the product page is required.** "App Privacy Details", App Store: "Privacy Policy (Required): The URL to your publicly accessible privacy policy." Privacy Choices, which points to a page for requesting deletion, is optional.
- **"Collect" means transmitting data off the device.** The same page says "Data that is processed only on device is not 'collected' and does not need to be disclosed." This supports the "Data Not Collected" label.
- **Apple's own data isn't the developer's to disclose.** The same page says: "You are not responsible for disclosing data collected by Apple." This bears on Q6.
- **Name and subtitle limits.** App information: the name is 2 to 30 characters and the subtitle is at most 30 characters. Keyword limits aren't on this page.
- **TestFlight localization fields.** Apple's "BetaAppLocalizationUpdateRequest.Data.Attributes" page (App Store Connect API) says:
  - `marketingUrl` is "visible to testers in the TestFlight app."
  - `privacyPolicyUrl` is "recommended for all apps that collect user or device-related data or as otherwise required by law." It isn't called required.
  - "After you have added data to the fields for this object, you can change that data, but you cannot remove data." Once a TestFlight URL is set, it can be changed but not cleared.
  - A description is required before beta app review.
  - It has no support URL field.
- **TestFlight shares beta data with the developer.** Apple's "Legal - TestFlight & Privacy" page: "When you test a beta app, your crash logs and usage information will be automatically collected by Apple and shared with the Application Provider," and "you will not be able to opt out of this collection." Feedback "may be associated with your name and email address." The developer "is not permitted to share this information with a third party." "For requests to access or delete your TestFlight data, you should contact the Application Provider directly." The page doesn't say whether TestFlight's external testing needs a privacy policy URL, so open question 5 is still open.

Confirmed from "Required, localizable, and editable properties" (App Store Connect Help). The table marks were read from rendered pages, since the text extraction dropped them:

- **Privacy Policy URL:** required and localized. Not editable at any time, so changing it means a new version submission.
- **Support URL:** required and localized. Not editable at any time.
- **Marketing URL:** optional, and localized. Not editable at any time.

Still not confirmed:

- Whether TestFlight's external testing needs a privacy policy URL before external testers get the app. The Beta App Localizations page confirms the policy is shown to testers, not that it is mandatory. Brian decided on 2026-10-25 that this project doesn't need the answer (open question 5): the privacy policy is public once its page is merged.

### App Review Guidelines

Read from Apple's "App Review Guidelines" page, `https://developer.apple.com/app-store/review/guidelines/`, which Apple dates "Last Updated: October 16, 2026". Brian downloaded it on 2026-10-24, because apple-rag-mcp can't reach it.

- **5.1.1(i), privacy policy.** "All apps must include a link to their privacy policy in the App Store Connect metadata field and within the app in an easily accessible manner." The policy "must clearly and explicitly" identify what data is collected, how, and all uses; confirm that third parties give the same protection; and "explain its data retention/deletion policies and describe how a user can revoke consent and/or request deletion of the user's data." The privacy policy section above covers these. The in-app link is a separate requirement (see "In-app link to the privacy policy").
- **5.1.1(v), accounts.** "If your app doesn't include significant account-based features, let people use it without a login." Nudge-inator has no account, so the policy and support page don't need an account-deletion section.
- **5.1.4, kids.** Applies to kids-focused apps. Nudge-inator has no age restriction (Brian, 2026-10-24), so there's no children's section.
- **1.5, developer information.** "Make sure your app and its Support URL include an easy way to contact you." The support page's email address satisfies this.
- **2.3, accurate metadata.** The privacy information and the description must "accurately reflect the app's core experience." This is why the pages use the glossary wording and claim only what the app does.
- **2.3.1(a), review notes.** New features must be "described with specificity in the Notes for Review section of App Store Connect". This applies to the review notes for alarms through silent mode and Focus.

The guidelines don't say which App Store Connect URL fields are required. "Required, localizable, and editable properties", above, does.

### In-app link to the privacy policy

Guideline 5.1.1(i) requires the privacy policy "within the app in an easily accessible manner". Nudge-inator has no privacy link in the app yet. The link belongs in the app's own code, in the Nudge-inator repository, so this spec doesn't change it. It's added in the Nudge-inator repository (open question 13, answered 2026-10-25). It needs to ship before the App Store release.

## Testing Decisions

- **Approved by Brian on 2026-10-25.** The seam is the published page, checked by hand against the checklist below, with no automated test suite.
- The repository has no test framework, and this spec doesn't add one. The highest seam is the published page at its public address, so checks run against the live URLs. Checks 2 to 5 also run on the pull request's pages before publishing (story 51).
- Good tests check external behavior: what a visitor sees, whether the URL responds, and whether the words match the content rules in "Pages". They don't check how the HTML is built.
- Checks before the App Store Connect URLs are entered:
  1. Each of the three URLs returns a page over HTTPS when opened in a logged-out browser, with no login prompt.
  2. Each page is readable on an iPhone-sized screen with no sideways scrolling, in light mode and in dark mode.
  3. Headings are in order, each link has descriptive text, and text contrast meets WCAG AA. Checked with a browser accessibility tool or a screen reader.
  4. No link on the pages is broken.
  5. The privacy policy and support page are read line by line against the privacy policy and support content rules in "Pages". Every statement matches, and nothing extra is claimed.
  6. The pages load no web fonts: the browser's network panel shows no font requests. On a Mac or iPhone the text renders in SF Pro. With `-apple-system`, `system-ui` and `BlinkMacSystemFont` removed from the stack for the check only, the fallback font still fits at iPhone width and on desktop, and the carousel doesn't move.
- With JavaScript turned off, the app page's name, description and links must still be readable. Each screenshot is checked for personal reminder text before publishing (story 59).
- The placeholders must pass checks 1 to 4 and 6, which also cover light and dark mode. Check 5 applies to the full text once it arrives.
- Prior art: none in this repository. The existing pages have no tests.

## Out of Scope

- Writing the privacy policy and support text. That happens outside this project. This spec covers only their placeholders and the addresses the full text will use.
- Entering the URLs in App Store Connect. Brian does this himself after the pages are live.
- Any change to the Nudge-inator repository, including its code, its privacy manifest, its onboarding text and its release notes. This spec only lists what those must agree with.
- Translations. The structure allows them, but the English pages come first.
- Analytics or tracking on the website itself. If Brian adds site analytics later, the privacy policy must be checked, but this spec doesn't add any.
- Any change to the homepage, including a link to the Nudge-inator section.
- A public TestFlight link. Testing is by invitation only.
- A search engine, a blog or any other page beyond the three listed.
- The App Store age rating. The app has no age restriction, but the rating questions are answered in App Store Connect, not on this site.

## Further Notes

### Ready for agent

The status stays `needs-info` until every item is checked. Then Brian changes it to `ready-for-agent`.

- [x] Every blocking question answered: open questions 6, 7, 11 and 14 (2026-10-25).
- [x] Design questions 15 to 17 answered (2026-10-25).
- [x] Testing seam approved by Brian (2026-10-25).
- [x] Spec and mockup committed on the spec branch (2026-10-25).
- [x] Spec approved by Brian (2026-10-25). Tickets are created from it next.

### Open Questions for Brian

Answered on 2026-10-24:

- **Final URL paths:** `/nudge-inator/`, `/nudge-inator/privacy/` and `/nudge-inator/support/`.
- **Support contact:** `support@newrealityinteractive.com`.
- **Privacy contact:** `privacy@newrealityinteractive.com`.
- **App page in scope now:** yes, as the marketing URL, with "coming soon" text until the app is on the App Store.
- **Hosting:** GitHub Pages from this repository, custom domain `newrealityinteractive.com`.
- **Age restriction:** none on the app. No children's section.
- **Homepage link:** not yet. No change to the homepage.
- **Public TestFlight link:** no. Testing is invite-only.
- **Glossary:** `/Users/bpm/Work/repositories/nudge-inator/GLOSSARY.md`. Its wording is used above.

Answered on 2026-10-25:
- **Carousel:** it stays. The app page's screen carousel uses JavaScript.
- **Fonts:** the system font for the whole Nudge-inator section, matching the app's SF Pro, with no web fonts (see "Typography"). This replaces the earlier answer, the mockup's two Google Fonts. The homepage is unchanged.
- **Caption 7 (Settings):** "Your pace, your rules. Choose how often new reminders nudge, and check that notifications and alarms are on." It replaces the alarms caption approved on 2026-10-25. The other six captions stay as drafted in the mockup until Brian approves them (story 32).
- **Apple diagnostics wording (6):** decided when the full privacy text is written outside this project. The placeholders don't need it.
- **Pause and Stop wording (7):** the FAQ answers Done, then Pause and Resume, as drafted.
- **Clean-reinstall steps (11):** left out. The support page has no "Installing a beta" section.
- **Beta section in the privacy policy (14):** kept, as drafted.
- **Testing seam:** approved as written.
- **TestFlight external testing (5):** outside this project. The privacy policy is public once its page is merged, so it's available to TestFlight either way.
- **In-app privacy link (13):** added in the Nudge-inator repository, which handles the iOS app.
- **Title weight (18):** Bold for the page titles and the wordmark.

No questions are open.

### Checked against the app repository

Checked on 2026-10-24 by reading `/Users/bpm/Work/repositories/nudge-inator` (the working tree, which has uncommitted changes):

- **CloudKit is off, and the store uses the App Group container.** `App/Store/ReminderStore.swift` configures SwiftData with `cloudKitDatabase: .none` and the group `group.com.newrealityinteractive.nudgeinator`. This matches the brief.
- **No network calls found.** A search of the app's sources found no URL sessions, analytics or advertising SDKs, or tracking code. The search matched only the store's CloudKit configuration and test files.

### Things I couldn't verify

- **No privacy manifest yet.** As of 2026-10-25, Nudge-inator still has no `PrivacyInfo.xcprivacy`. The privacy policy's manifest statement has to match the app as shipped (story 21).

- **Segoe UI not checked.** The fallback check ran on a Mac, which has neither Segoe UI nor Roboto. Roboto was checked from Google's openly licensed file in a test copy; Segoe UI can't be downloaded and needs a check on Windows.

### Scope change (2026-10-25)

Placeholder privacy and support pages were added at Brian's request. The full privacy policy and support text is written outside this project, so the sections describing that text now set requirements for it rather than work for an agent under this spec. The app page is unchanged and still in scope.

### Tracking

- This spec is in `.scratch/nudge-inator-web-pages/spec.md`, on the branch `nudge-inator-web-pages-spec`, together with the mockup it names as its design spec.
- No GitHub issues or tickets are created for this spec.

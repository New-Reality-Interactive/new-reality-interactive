# Product

<!-- impeccable:product-schema 1 -->

This record covers the Nudge-inator website (`nudge-inator/`: home, privacy and support pages). The app itself is a native iPhone app built elsewhere. This site is a web surface that presents it.

## Platform

web

## Users

Primary: iPhone users who miss reminders because a single notification is too easy to dismiss or forget. They want something that keeps at it, the way an iOS Alarm keeps ringing, until they've actually done the thing.

Secondary: people who send reminders to someone they trust and want to see whether each one was delivered, done, paused or missed.

On the site, visitors come to understand how it nudges, decide to try the beta, or get support.

## Product Purpose

Nudge-inator is an iPhone app that keeps nudging you about a reminder until you tap Done. The site explains what it does, points people to the TestFlight beta (App Store release to come), hosts the privacy policy, and offers support and tutorials. Success means a visitor understands the mechanism and joins the beta, or a user gets their problem answered.

## Positioning

Its reminders don't let go. Only Done ends a reminder, and stopping an alarm only quiets it until the next nudge. Each reminder chooses how hard it pushes, and the strongest level rings as an alarm even on silent and through a Focus. Reminders can be sent to a trusted person, who gets their own copy at the strength the sender chose. There's no account and no server of ours.

## Operating Context

- Nudge strengths: Gentle (never rings as an alarm), Firm (rings as an alarm from nudge 4) and Relentless (every nudge rings). At the Consistent pace a reminder gets 20 nudges, 10 minutes apart. The user sets a Default Pace in Settings.
- Gentle and Firm reminders have a Break Through Focus switch. Relentless always breaks through.
- Alarm sounds: a Default Alarm Sound in Settings, which each reminder can override. There are six tones from Chime to Siren, plus iOS's Default Alarm.
- Views: Now (what's due), My Day (done, nudging, missed and left counts, then reminders in time order), Sent (grouped by person, with status when the recipient chooses to share it), and Tags (one-word labels for filtering, search, swipe to rename or delete).
- Sharing: invite a person through iCloud, then choose who gets a reminder. Sent reminders don't nudge the sender.
- In-app tutorials (Settings › Tutorials) are mirrored on the support page: How It Nudges, How Alarm Sounds Work and How Sharing Works.

## Capabilities and Constraints

- Static HTML, CSS and vanilla JS, served from the same GitHub Pages repo as the company site at newrealityinteractive.com/nudge-inator/. Merging to `main` publishes it.
- Status: in beta on TestFlight, coming to the App Store. Don't claim it's on the App Store until it is.
- Privacy facts: your own reminders stay on your iPhone, and shared reminders go through your iCloud. There's no account and no server of ours.
- Support is by email at support@newrealityinteractive.com. Ask for the iPhone model, iOS version, app version, and what was expected compared with what happened.
- The terms on the site must match the in-app names exactly (Done, Gentle, Firm, Relentless, Consistent, Break Through Focus, Default Alarm Sound, Now, My Day, Sent, Tags).

## Brand Commitments

- The name is written "Nudge-inator", and the publisher is New Reality Interactive LLC.
- The voice is plain, short and a little wry ("Meet the reminder that won't let it go."). It explains the mechanism precisely and never overstates.

## Evidence on Hand

- Real app screenshots: the carousel in `nudge-inator/shots/carousel-*.png` and the tutorial pages in `nudge-inator/shots/tutorial-*.png`. Versioned screenshot sets (`shots/1.4.0/`, `shots/1.5.0/`) are kept locally and gitignored.
- App icon: `nudge-inator/assets/nudge-inator-app-icon-1024.png` is the master, rendered from the app repo's `App/AppIcon.icon`. The 192 px and 64 px copies are what the site shows (the icon above the name, the wordmark on text pages, the browser-tab icon). Re-render from the app's icon file whenever it changes.
- Absent: no reviews, ratings, user counts, testimonials or press. Don't fabricate any of them.

## Product Principles

1. Explain the mechanism exactly. Trust comes from saying precisely what will ring, when, and why.
2. Respect privacy and be explicit about it: no account and no server of ours, stated plainly.
3. Keep the site and the app in step, with the same terms, behaviour and screenshots.
4. Be honest about status: it's a beta until it ships.

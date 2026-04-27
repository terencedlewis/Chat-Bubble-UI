
# Chat Bubble UI
<img width="491" height="654" alt="screenshot" src="https://github.com/user-attachments/assets/98bcf064-8eb4-4458-9dde-e84dc19a773a" />
## Product Description

Chat Bubble UI is a lightweight, fully client-side chat interface built with plain HTML, CSS, and vanilla JavaScript — no frameworks, no dependencies. It delivers a polished, dark-themed messaging experience with incoming and outgoing message bubbles, animated typing indicators, timestamps, and simulated bot replies. Designed as a reusable UI component, it can serve as a foundation for any messaging feature — from customer support widgets to AI chat assistants.

---

## Epic

**EP-01 — Real-Time Messaging Interface**
Build a responsive, accessible chat UI that supports two-way message rendering, simulated responses, and a smooth conversational experience across desktop and mobile devices.

---

## Features

| ID | Feature | Description |
|----|---------|-------------|
| F-01 | Message Bubbles | Render incoming (left) and outgoing (right) messages with distinct styles |
| F-02 | Timestamps | Display send time beneath every message bubble |
| F-03 | Typing Indicator | Animated three-dot indicator shown while a reply is being "composed" |
| F-04 | Simulated Bot Replies | Auto-respond with randomised replies after a realistic delay |
| F-05 | Auto-Scroll | Scroll to the latest message automatically after every send/receive |
| F-06 | Keyboard Support | Send messages with the Enter key, full tab-navigation support |
| F-07 | Dark Theme | Consistent dark colour system via CSS custom properties |
| F-08 | Responsive Layout | Adapts from 320 px mobile to full desktop widths |

---

## User Stories

### F-01 · Message Bubbles
> **As a user**, I want my sent messages to appear on the right in an accent colour and received messages on the left in a neutral colour, **so that** I can instantly tell who said what in the conversation.

### F-02 · Timestamps
> **As a user**, I want to see the time each message was sent displayed beneath the bubble, **so that** I can track when parts of the conversation happened.

### F-03 · Typing Indicator
> **As a user**, I want to see animated dots when the other person is composing a reply, **so that** I know a response is coming and the app feels live.

### F-04 · Simulated Bot Replies
> **As a developer evaluating the component**, I want the UI to simulate a bot response after I send a message, **so that** I can see the full two-way flow without needing a backend.

### F-05 · Auto-Scroll
> **As a user**, I want the message list to automatically scroll to the newest message after each send or receive, **so that** I never have to manually scroll down to see the latest content.

### F-06 · Keyboard Support
> **As a user**, I want to press Enter to send a message and navigate all controls with my keyboard, **so that** I can chat efficiently without reaching for the mouse.

### F-07 · Dark Theme
> **As a user**, I want the interface to use a dark colour scheme, **so that** it's comfortable to use in low-light environments and consistent with modern messaging apps.

### F-08 · Responsive Layout
> **As a user on mobile**, I want the chat interface to fill my screen and remain fully usable at any device width, **so that** I can have the same experience on my phone as on desktop.

---

## Demo Screenshot

> _Add a screenshot of the chat UI here._
>
> To add one: take a screenshot, save it as `<img width="491" height="654" alt="screenshot" src="https://github.com/user-attachments/assets/0a8a79f0-31b4-43da-be6e-a56b8975656d" />
` in the project root, then replace this block with:
>
> ```md
> 
> ```

---

## Getting Started

```bash
# Clone the repo
git clone https://github.com/terencedlewis/Chat-Bubble-UI.git
cd Chat-Bubble-UI

# Open in browser (no build step needed)
open index.html
```

---

## Tech Stack

- HTML5 — semantic structure
- CSS3 — custom properties, keyframe animations, flexbox layout
- Vanilla JavaScript — DOM rendering, event handling, simulated interactions

---

## License

MIT

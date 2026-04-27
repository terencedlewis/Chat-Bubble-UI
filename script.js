// ── State ──────────────────────────────────────────────────────────────────
const botReplies = [
  "That's interesting — tell me more!",
  "Got it, makes sense to me.",
  "Hmm, let me think about that…",
  "I totally agree with you on that.",
  "Nice! What else is on your mind?",
  "That's a great point, honestly.",
  "Ha, I was just thinking the same thing.",
  "Sure, sounds good to me!",
  "Could you elaborate a bit more?",
  "Noted. I'll keep that in mind.",
];

const seedMessages = [
  { text: "Hey! How's it going?",            type: "incoming" },
  { text: "Pretty good, thanks for asking!", type: "outgoing" },
  { text: "What have you been up to lately?", type: "incoming" },
  { text: "Just working on some new projects. Excited about this one!", type: "outgoing" },
  { text: "Sounds awesome — what kind of project?", type: "incoming" },
];

// ── DOM refs ───────────────────────────────────────────────────────────────
const messagesEl = document.getElementById("messages");
const typingEl   = document.getElementById("typing");
const inputEl    = document.getElementById("chat-input");
const sendBtn    = document.getElementById("send-btn");

// ── Helpers ────────────────────────────────────────────────────────────────
function getTime() {
  return new Date().toLocaleTimeString([], { hour: "2-digit", minute: "2-digit" });
}

function scrollToBottom() {
  messagesEl.scrollTop = messagesEl.scrollHeight;
}

function randomReply() {
  return botReplies[Math.floor(Math.random() * botReplies.length)];
}

// ── Render a single message bubble ────────────────────────────────────────
function renderMessage({ text, type, time = getTime() }) {
  const row = document.createElement("div");
  row.className = `msg-row ${type}`;

  const bubble = document.createElement("div");
  bubble.className = "bubble";
  bubble.textContent = text;

  const ts = document.createElement("span");
  ts.className = "timestamp";
  ts.textContent = time;

  row.appendChild(bubble);
  row.appendChild(ts);
  messagesEl.appendChild(row);
  scrollToBottom();
}

// ── Seed initial messages ──────────────────────────────────────────────────
(function seedInitial() {
  // Stagger seed messages slightly so they feel natural on load
  seedMessages.forEach(({ text, type }, i) => {
    setTimeout(() => renderMessage({ text, type }), i * 120);
  });
})();

// ── Send a message ─────────────────────────────────────────────────────────
function sendMessage() {
  const text = inputEl.value.trim();
  if (!text) return;

  renderMessage({ text, type: "outgoing" });
  inputEl.value = "";
  inputEl.focus();

  // Show typing indicator after a short pause
  setTimeout(() => {
    typingEl.classList.add("visible");
    scrollToBottom();
  }, 600);

  // Hide indicator and show bot reply
  setTimeout(() => {
    typingEl.classList.remove("visible");
    renderMessage({ text: randomReply(), type: "incoming" });
  }, 2200);
}

// ── Event listeners ────────────────────────────────────────────────────────
sendBtn.addEventListener("click", sendMessage);

inputEl.addEventListener("keydown", (e) => {
  if (e.key === "Enter" && !e.shiftKey) {
    e.preventDefault();
    sendMessage();
  }
});

const SCENARIOS = {
  waiting_review: {
    id: 'DRV-2026-8841',
    candidate: 'Alex Tan',
    role: 'Frontend Engineer — Trading Platforms',
    location: 'Cyberjaya, Malaysia (Hybrid)',
    pod: 'Multi-Asset Web Terminal Pod',
    receivedAt: 'Nov 10, 2026 · 14:22 MYT',
    daysElapsed: '4 days ago',
    slaBadge: 'Day 4 of 5-Day SLA · On Track',
    actionRequired: false,
    actionEyebrow: 'Candidate Action Status · No Action Required',
    actionTitle: 'Sit tight — nothing is needed from you right now.',
    actionDesc:
      "Your application was safely received and verified. You haven't missed any emails or calls — our engineering team is actively reviewing your profile.",
    etaLabel: 'Guaranteed Update By',
    etaValue: 'Tue, Nov 17 · 17:00 MYT',
    currentStageIndex: 1,
    stages: [
      { name: 'Received', date: 'Nov 10 · 14:22', status: 'completed' },
      { name: 'Team Review', date: 'In Progress (Day 4)', status: 'current' },
      { name: 'Technical Pairing', date: 'Up Next', status: 'upcoming' },
      { name: 'Values & Architecture', date: 'Stage 4', status: 'upcoming' },
      { name: 'Offer & Onboarding', date: 'Stage 5', status: 'upcoming' }
    ],
    behindTitle: 'Why have you waited 4 days? (Behind the scenes)',
    behindText:
      'Every engineering application at Deriv is reviewed by 2 senior engineers on the actual hiring pod — never auto-rejected by keyword filters. Two engineers are scoring your GitHub & TypeScript experience between market releases.',
    nextStepTitle: 'Next Step: 45-Min Live UI Pairing (Google Meet)',
    nextStepMeta: 'If shortlisted on Tuesday, you will receive a 1-click booking link — no take-home weekend assignment.',
    prepTips: [
      'Real-world state management & real-time WebSocket UI updates (e.g., live orderbook or tick feed rendering).',
      'Collaborative debugging of a small React/TypeScript component — no trick whiteboard puzzles.',
      '10 minutes reserved at the end for your questions about engineering culture & growth.'
    ],
    recruiterInitials: 'NR',
    recruiterName: 'Nadia Rahman',
    recruiterRole: 'Senior Tech Talent Partner · Cyberjaya Hub'
  },

  action_booking: {
    id: 'DRV-2026-8841',
    candidate: 'Alex Tan',
    role: 'Frontend Engineer — Trading Platforms',
    location: 'Cyberjaya, Malaysia (Hybrid)',
    pod: 'Multi-Asset Web Terminal Pod',
    receivedAt: 'Nov 10, 2026 · 14:22 MYT',
    daysElapsed: 'Shortlisted Today',
    slaBadge: 'Stage 3 Unlocked · Awaiting Your Slot',
    actionRequired: true,
    actionEyebrow: 'Action Required · Please Respond by Nov 18',
    actionTitle: '1 Step Needed: Pick your 45-min Technical Pairing time slot',
    actionDesc:
      'Great news! The Trading Platforms pod loved your portfolio. Choose a time below that works best for you — we will send the Google Meet link immediately.',
    etaLabel: 'Action Deadline',
    etaValue: 'Wed, Nov 18 · 23:59 MYT',
    slots: [
      { id: 's1', day: 'Thu, Nov 19', time: '10:30 – 11:15 MYT · with Farah (Staff FE)' },
      { id: 's2', day: 'Thu, Nov 19', time: '15:00 – 15:45 MYT · with Jason (Lead FE)' },
      { id: 's3', day: 'Fri, Nov 20', time: '11:00 – 11:45 MYT · with Farah (Staff FE)' }
    ],
    currentStageIndex: 2,
    stages: [
      { name: 'Received', date: 'Nov 10 · Done', status: 'completed' },
      { name: 'Team Review', date: 'Nov 14 · Passed', status: 'completed' },
      { name: 'Technical Pairing', date: 'Pick Your Slot', status: 'current' },
      { name: 'Values & Architecture', date: 'Stage 4', status: 'upcoming' },
      { name: 'Offer & Onboarding', date: 'Stage 5', status: 'upcoming' }
    ],
    behindTitle: 'What happens once you confirm a slot?',
    behindText:
      'An instant calendar invite with a browser-based CodeSandbox link is sent to your email. Need an evening slot outside work hours? Send Nadia a quick note on the right.',
    nextStepTitle: 'Your Upcoming Session: 45-Min Technical Pairing',
    nextStepMeta: 'Format: Browser IDE + Google Meet · Camera optional during coding if you prefer focus.',
    prepTips: [
      'Review handling high-frequency price stream updates cleanly without unnecessary DOM re-renders.',
      'Talk out loud through trade-offs — clarity of thought matters far more than syntax memorization.',
      'No preparation slides or local repo setup required beforehand.'
    ],
    recruiterInitials: 'NR',
    recruiterName: 'Nadia Rahman',
    recruiterRole: 'Senior Tech Talent Partner · Cyberjaya Hub'
  },

  just_applied: {
    id: 'DRV-2026-9104',
    candidate: 'Alex Tan',
    role: 'Product Designer — Fintech Onboarding',
    location: 'Kuala Lumpur / Remote-Friendly',
    pod: 'Global Client Payments & KYC Pod',
    receivedAt: 'Nov 14, 2026 · 11:48 MYT',
    daysElapsed: 'Just now',
    slaBadge: 'Day 1 of 5-Day SLA · Verified Receipt',
    actionRequired: false,
    actionEyebrow: 'Application Verified · Nothing Else Needed',
    actionTitle: 'We have your application and portfolio link!',
    actionDesc:
      'Your CV and Figma case studies passed file verification. Because today is Saturday, our Design Hiring Pod begins reviewing your submission on Monday morning.',
    etaLabel: 'First Human Review By',
    etaValue: 'Thu, Nov 19 · 17:00 MYT',
    currentStageIndex: 0,
    stages: [
      { name: 'Received', date: 'Nov 14 · Verified', status: 'current' },
      { name: 'Portfolio Review', date: 'Starts Mon, Nov 16', status: 'upcoming' },
      { name: 'Case Walkthrough', date: 'Stage 3', status: 'upcoming' },
      { name: 'Cross-Pod Chat', date: 'Stage 4', status: 'upcoming' },
      { name: 'Offer & Onboarding', date: 'Stage 5', status: 'upcoming' }
    ],
    behindTitle: 'Zero-Black-Hole Guarantee',
    behindText:
      'Your files were checked automatically so broken PDF or password-locked portfolio links never silently disqualify you. If our team needs a password, you will see an instant alert here.',
    nextStepTitle: 'Next Step: Async Portfolio Review by Design Lead',
    nextStepMeta: 'Duration: 3–5 business days · No action required from you during this stage.',
    prepTips: [
      'Make sure any Figma or Notion links stay publicly viewable over the next 7 days.',
      'If shortlisted, Stage 3 is a 30-min walkthrough of 1 existing project you already built (no free spec work).',
      'Toggle WhatsApp or Email notifications on the right so you never have to refresh this page.'
    ],
    recruiterInitials: 'KL',
    recruiterName: 'Kelvin Lim',
    recruiterRole: 'Design & Product Talent Lead · APAC'
  },

  final_stage: {
    id: 'DRV-2026-7920',
    candidate: 'Alex Tan',
    role: 'Risk & Fraud Systems Analyst',
    location: 'Cyberjaya, Malaysia',
    pod: 'Payment Integrity & Trust Engineering',
    receivedAt: 'Oct 29, 2026 · 09:15 MYT',
    daysElapsed: '16 days total',
    slaBadge: 'Final Stage · Offer Approval in Progress',
    actionRequired: false,
    actionEyebrow: 'Candidate Action Status · All Interviews Complete',
    actionTitle: 'Interviews complete — preparing your final decision & package.',
    actionDesc:
      'Thank you for meeting the Risk Engineering leadership team yesterday! Compensation & hiring committee sign-off takes 48 business hours. Nothing is needed from you right now.',
    etaLabel: 'Recruiter Call Scheduled By',
    etaValue: 'Mon, Nov 16 · 16:00 MYT',
    currentStageIndex: 4,
    stages: [
      { name: 'Received', date: 'Oct 29 · Done', status: 'completed' },
      { name: 'Team Review', date: 'Nov 02 · Passed', status: 'completed' },
      { name: 'Case Study Chat', date: 'Nov 07 · Passed', status: 'completed' },
      { name: 'Leadership Meet', date: 'Nov 13 · Completed', status: 'completed' },
      { name: 'Offer & Decision', date: 'Final Sign-Off', status: 'current' }
    ],
    behindTitle: 'What is happening right now?',
    behindText:
      'Nadia and the Head of Payment Integrity are finalizing role leveling and equity/bonus breakdown so we can walk through transparent numbers on Monday.',
    nextStepTitle: 'Next Step: 20-Min Offer & Q&A Call with Nadia',
    nextStepMeta: 'You will receive written offer details immediately after the call so you can review at your own pace.',
    prepTips: [
      'Jot down any questions on hybrid flexibility, relocation/commute perks, or medical coverage.',
      'Think about your preferred target start date (accounting for any notice period).',
      'We never do exploding 24-hour offers — you will have clear time to decide.'
    ],
    recruiterInitials: 'NR',
    recruiterName: 'Nadia Rahman',
    recruiterRole: 'Senior Tech Talent Partner · Cyberjaya Hub'
  }
};

let activeScenarioKey = 'waiting_review';
let selectedSlotId = 's1';
let bookedSlotText = null;
const activeChannels = new Set(['email', 'whatsapp']);

function render() {
  const data = SCENARIOS[activeScenarioKey];

  // Update scenario pill buttons
  document.querySelectorAll('.scenario-btn').forEach((btn) => {
    btn.classList.toggle('active', btn.dataset.scenario === activeScenarioKey);
  });

  // Candidate & Receipt Header
  document.getElementById('role-title').textContent = data.role;
  document.getElementById('candidate-name').textContent = data.candidate;
  document.getElementById('role-location').textContent = data.location;
  document.getElementById('role-pod').textContent = data.pod;
  document.getElementById('app-id').textContent = data.id;
  document.getElementById('received-at').textContent = data.receivedAt;
  document.getElementById('days-elapsed').textContent = data.daysElapsed;

  // Action Banner
  const banner = document.getElementById('action-banner');
  const isBooked = activeScenarioKey === 'action_booking' && bookedSlotText;
  const needsAction = data.actionRequired && !isBooked;

  banner.className = `action-banner ${needsAction ? 'urgent' : 'calm'}`;
  document.getElementById('action-icon').textContent = needsAction ? '!' : '✓';

  if (isBooked) {
    document.getElementById('action-eyebrow').textContent = 'Slot Confirmed · No Further Action Needed';
    document.getElementById('action-title').textContent = `Interview Confirmed: ${bookedSlotText}`;
    document.getElementById('action-desc').textContent =
      'Calendar invite & Google Meet link sent to alex.tan@email.com. You are all set — see prep notes below!';
    document.getElementById('eta-label').textContent = 'Session Status';
    document.getElementById('eta-value').textContent = 'Calendar Invite Sent ✓';
  } else {
    document.getElementById('action-eyebrow').textContent = data.actionEyebrow;
    document.getElementById('action-title').textContent = data.actionTitle;
    document.getElementById('action-desc').textContent = data.actionDesc;
    document.getElementById('eta-label').textContent = data.etaLabel;
    document.getElementById('eta-value').textContent = data.etaValue;
  }

  // Slot Picker (only when action required and not yet booked)
  const slotContainer = document.getElementById('slot-picker-container');
  if (needsAction && data.slots) {
    slotContainer.style.display = 'flex';
    const grid = document.getElementById('slot-grid');
    grid.innerHTML = data.slots
      .map(
        (s) => `
        <button type="button" class="slot-option ${selectedSlotId === s.id ? 'selected' : ''}" data-slot-id="${s.id}">
          <div class="slot-day">${s.day}</div>
          <div class="slot-time">${s.time}</div>
        </button>
      `
      )
      .join('');

    grid.querySelectorAll('.slot-option').forEach((btn) => {
      btn.addEventListener('click', () => {
        selectedSlotId = btn.dataset.slotId;
        render();
      });
    });
  } else {
    slotContainer.style.display = 'none';
  }

  // SLA Badge & Stepper
  document.getElementById('sla-badge').textContent = isBooked
    ? 'Stage 3 Confirmed · Scheduled'
    : data.slaBadge;

  const stepper = document.getElementById('stepper');
  stepper.innerHTML = data.stages
    .map((stage, idx) => {
      const stageDate =
        isBooked && idx === 2 ? 'Booked ✓' : stage.date;
      const badgeLabel =
        stage.status === 'completed'
          ? 'Done'
          : stage.status === 'current'
          ? 'Current'
          : 'Upcoming';
      const stepSymbol = stage.status === 'completed' ? '✓' : idx + 1;

      return `
        <div class="step-item ${stage.status}">
          <div class="step-top">
            <span class="step-num mono">${stepSymbol}</span>
            <span class="step-badge">${badgeLabel}</span>
          </div>
          <div class="step-name">${stage.name}</div>
          <div class="step-date">${stageDate}</div>
        </div>
      `;
    })
    .join('');

  // Behind the Scenes
  document.getElementById('behind-title').textContent = data.behindTitle;
  document.getElementById('behind-text').textContent = data.behindText;

  // Next Step & Prep Tips
  document.getElementById('next-step-title').textContent = data.nextStepTitle;
  document.getElementById('next-step-meta').textContent = data.nextStepMeta;
  document.getElementById('prep-list').innerHTML = data.prepTips
    .map(
      (tip) => `
      <li>
        <span class="prep-bullet">→</span>
        <span>${tip}</span>
      </li>
    `
    )
    .join('');

  // Recruiter Info
  document.getElementById('recruiter-avatar').textContent = data.recruiterInitials;
  document.getElementById('recruiter-name').textContent = data.recruiterName;
  document.getElementById('recruiter-role').textContent = data.recruiterRole;

  // Notification Pills
  document.querySelectorAll('.channel-pill').forEach((pill) => {
    const ch = pill.dataset.channel;
    const isOn = activeChannels.has(ch);
    pill.classList.toggle('active', isOn);
    pill.querySelector('.ch-state').textContent = isOn ? 'On' : 'Off';
  });
}

document.addEventListener('DOMContentLoaded', () => {
  // Scenario Switcher
  document.querySelectorAll('.scenario-btn').forEach((btn) => {
    btn.addEventListener('click', () => {
      activeScenarioKey = btn.dataset.scenario;
      if (activeScenarioKey !== 'action_booking') {
        bookedSlotText = null;
      }
      document.getElementById('toast-msg').textContent = '';
      render();
    });
  });

  // Confirm Interview Slot
  document.getElementById('confirm-slot-btn').addEventListener('click', () => {
    const data = SCENARIOS.action_booking;
    const chosen = data.slots.find((s) => s.id === selectedSlotId) || data.slots[0];
    bookedSlotText = `${chosen.day} (${chosen.time.split('·')[0].trim()})`;
    render();
  });

  // Notification Channel Toggles
  document.querySelectorAll('.channel-pill').forEach((pill) => {
    pill.addEventListener('click', () => {
      const ch = pill.dataset.channel;
      if (activeChannels.has(ch)) {
        activeChannels.delete(ch);
      } else {
        activeChannels.add(ch);
      }
      render();
      const toast = document.getElementById('toast-msg');
      toast.textContent = `Alert preferences saved (${Array.from(activeChannels).join(', ') || 'none'}).`;
    });
  });

  // Quick Candidate Note / Updated Link Form
  document.getElementById('note-form').addEventListener('submit', (e) => {
    e.preventDefault();
    const input = document.getElementById('note-input');
    const val = input.value.trim();
    if (!val) return;
    const recruiter = SCENARIOS[activeScenarioKey].recruiterName.split(' ')[0];
    document.getElementById('toast-msg').textContent = `Sent to ${recruiter}! Attached to your application file.`;
    input.value = '';
  });

  // Theme Toggle (Light / Dark Fintech Mode)
  const themeBtn = document.getElementById('theme-toggle');
  themeBtn.addEventListener('click', () => {
    const html = document.documentElement;
    const isDark = html.getAttribute('data-theme') === 'dark';
    html.setAttribute('data-theme', isDark ? 'light' : 'dark');
    themeBtn.textContent = isDark ? 'Dark Mode' : 'Light Mode';
  });

  render();
});

// ── Data ──────────────────────────────────────────────────────────────────
const SITE = {
  title: "Your Name",
  subtitle: "Personal Journal",
  description: "Writing about things I notice, remember, and find worth keeping.",
  about: {
    location: "New York, NY",
    links: [
      { label: "Instagram", url: "#" },
      { label: "Letterboxd", url: "#" },
      { label: "Email", url: "mailto:you@example.com" },
    ]
  }
};

// Posts data — add new posts here
const POSTS = [
  {
    id: "first-entry",
    title: "A Note on Starting",
    date: "2026-05-01",
    dateFormatted: "May 1, 2026",
    tags: ["reflection"],
    excerpt: "Every journal begins with an explanation of why it exists. Here is mine.",
    content: `
      <p>I have kept journals before — paper ones, mostly, the kind that sit on a shelf and accumulate meaning by proximity. There is something different about this, something more deliberate. Here, I am choosing the shape of the thing before filling it.</p>
      <p>What I want is a place to write slowly. Not the quick take, not the caption or the thread. Something longer and more considered, written for the pleasure of having written it rather than the anticipation of response.</p>
      <p>This is that place.</p>

      <h2>On the Form</h2>
      <p>The journal entry is an underrated form. It asks nothing of its structure — no argument to advance, no conclusion to arrive at. It can meander and double back. It can end abruptly. It can be about the light in a room at 4pm and nothing more.</p>
      <p>I find this freeing. Most writing I do is shaped around a reader's anticipated impatience. This is written for someone (me, mostly) who is willing to sit with the thing for a moment.</p>

      <h2>A Few Photos from This Week</h2>
      <p>I walked around the neighborhood with a camera for the first time in months. The light was doing something interesting.</p>
    `,
    photos: [
      {
        src: "https://images.unsplash.com/photo-1506905925346-21bda4d32df4?w=1200&q=80",
        alt: "Morning light on a quiet street",
        caption: "Somewhere near the park, early morning."
      },
      {
        src: "https://images.unsplash.com/photo-1448375240586-882707db888b?w=1200&q=80",
        alt: "Trees in late afternoon light",
        caption: "Late afternoon. The light goes gold quickly this time of year."
      },
      {
        src: "https://images.unsplash.com/photo-1493246507139-91e8fad9978e?w=1200&q=80",
        alt: "A quiet corner of the city",
        caption: null
      }
    ],
    photoLayout: "cols-3"
  },
  {
    id: "on-routine",
    title: "On Routine and Its Discontents",
    date: "2026-04-18",
    dateFormatted: "April 18, 2026",
    tags: ["routine", "reflection"],
    excerpt: "Routine is supposed to be the scaffold of a productive life. I keep building it and watching it fall.",
    content: `
      <p>I rebuilt my morning routine this week for what must be the sixth time this year. New time, new order of operations, new aspirations attached to each step. Coffee before screen. Writing before anything else. A walk before noon.</p>
      <p>By Wednesday, I had already abandoned it.</p>
      <p>I used to think the problem was discipline. Now I think the problem is that routine, to hold, needs to be <em>boring</em> in the right way — not exciting, not aspirational, just quietly inevitable. The ones I have managed to keep are not the meaningful ones. They are the forgettable ones: brushing teeth, checking the door lock, starting the kettle.</p>

      <h2>What Actually Stuck</h2>
      <p>The only practice that has survived more than two months without interruption is an evening walk. No phone, no podcast. Just out and back, twenty minutes, same general route. I started it for health reasons. It stayed for other ones.</p>
      <p>There is something clarifying about movement without destination. The mind tends to unknot.</p>
    `,
    photos: [
      {
        src: "https://images.unsplash.com/photo-1476231682828-37e571bc172f?w=1200&q=80",
        alt: "A path through trees",
        caption: "The usual route."
      },
      {
        src: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=800&q=80",
        alt: "Evening light on a city street",
        caption: null
      }
    ],
    photoLayout: "cols-2"
  },
  {
    id: "things-i-read",
    title: "Things I Read in April",
    date: "2026-04-05",
    dateFormatted: "April 5, 2026",
    tags: ["reading", "links"],
    excerpt: "A loose accounting of what passed through my attention this month.",
    content: `
      <p>I have been trying to read more slowly. Not fewer things — just slower through each one, allowing things to settle before moving on. This is harder than it sounds in an environment designed to accelerate everything.</p>
      <p>Some things that stayed with me this month:</p>
      <p><strong>A long essay</strong> about the way cities remember themselves — through street names, plaques, the small institutional insistences on certain versions of the past. The argument was that forgetting is as active as remembering; it requires maintenance.</p>
      <p><strong>A short story</strong> I will not name (I am always suspicious of writing that leans too heavily on its provenance) that managed to make grief feel geometrically strange rather than narratively inevitable. The best fiction does something to your sense of space.</p>
      <p><strong>A thread</strong> on the architecture of old department stores that sent me down a long path of looking at photographs of buildings that no longer exist. There is a specific melancholy to that kind of looking. I recommend it occasionally.</p>

      <h2>A Few Images from the Same Period</h2>
    `,
    photos: [
      {
        src: "https://images.unsplash.com/photo-1481627834876-b7833e8f5570?w=1200&q=80",
        alt: "Books on a shelf",
        caption: "The shelf in approximate current state."
      }
    ],
    photoLayout: "cols-1"
  }
];

// Timeline data — add/edit entries here
const TIMELINE = [
  {
    date: "January 2020",
    title: "The Beginning",
    description: "Everything starts somewhere. This is where mine did. A quiet decision made in a loud month.",
    photos: [
      { src: "https://images.unsplash.com/photo-1506905925346-21bda4d32df4?w=1200&q=80", alt: "Mountains at dawn" }
    ]
  },
  {
    date: "June 2020",
    title: "A Change of Place",
    description: "Moved to a new city with two bags and an overestimation of how ready I was. The adjustment took longer than expected. The neighborhood grew on me slowly, then all at once.",
    photos: []
  },
  {
    date: "March 2021",
    title: "Learning to Slow Down",
    description: "Started walking without a destination. Started reading without a goal. The year taught me that unhurried attention is its own kind of work.",
    photos: [
      { src: "https://images.unsplash.com/photo-1476231682828-37e571bc172f?w=1200&q=80", alt: "Path through trees" },
      { src: "https://images.unsplash.com/photo-1448375240586-882707db888b?w=1200&q=80", alt: "Forest light" }
    ]
  },
  {
    date: "September 2022",
    title: "First Real Trip",
    description: "Traveled alone for the first time. Kept a paper journal the whole way through. Lost the journal on the last day. Kept the trip.",
    photos: [
      { src: "https://images.unsplash.com/photo-1493246507139-91e8fad9978e?w=1200&q=80", alt: "City at dusk" }
    ]
  },
  {
    date: "February 2023",
    title: "Something New",
    description: "Started a project I had been putting off for two years. The delay was not procrastination — it was waiting until I had something worth saying.",
    photos: []
  },
  {
    date: "August 2024",
    title: "Returning",
    description: "Went back to a place I had left. It was different, or I was. Probably both. The visit lasted four days and answered more questions than I had brought.",
    photos: [
      { src: "https://images.unsplash.com/photo-1481627834876-b7833e8f5570?w=1200&q=80", alt: "Books on a shelf" }
    ]
  },
  {
    date: "Now",
    title: "Ongoing",
    description: "Still here. Still writing. The timeline continues in the journal, in smaller increments, with less certainty about where it is going.",
    photos: []
  }
];

// ── Helpers ──────────────────────────────────────────────────────────────
function formatDate(iso) {
  return new Date(iso + 'T00:00:00').toLocaleDateString('en-US', {
    year: 'numeric', month: 'long', day: 'numeric'
  });
}

function $(sel, ctx = document) { return ctx.querySelector(sel); }
function $$(sel, ctx = document) { return [...ctx.querySelectorAll(sel)]; }

// ── Router ────────────────────────────────────────────────────────────────
const router = {
  current: null,

  init() {
    this.navigate(location.hash || '#home', false);
    window.addEventListener('hashchange', () => this.navigate(location.hash));
    document.addEventListener('click', e => {
      const a = e.target.closest('[data-link]');
      if (a) {
        e.preventDefault();
        const href = a.getAttribute('href') || a.dataset.href;
        location.hash = href;
      }
    });
  },

  navigate(hash, push = true) {
    const [route, param] = hash.replace('#', '').split('/');
    this.current = route || 'home';

    // Update nav active state
    $$('.nav-links a').forEach(a => {
      a.classList.toggle('active',
        a.getAttribute('href') === `#${this.current}` ||
        (this.current === 'home' && a.getAttribute('href') === '#home')
      );
    });

    // Render
    const main = $('#main-content');
    if (this.current === 'home') render.home(main);
    else if (this.current === 'journal') render.journal(main);
    else if (this.current === 'post') render.post(main, param);
    else if (this.current === 'about') render.about(main);
    else if (this.current === 'timeline') render.timeline(main);
    else if (this.current === 'grid') render.grid(main);
    else render.home(main);

    // Scroll top
    main.scrollTop = 0;
    window.scrollTo(0, 0);
  }
};

// ── Renderers ─────────────────────────────────────────────────────────────
const render = {

  home(el) {
    const recent = POSTS.slice(0, 6);
    el.innerHTML = `
      <div class="page active">
        <img src="https://images.unsplash.com/photo-1544005313-94ddf0286df2?w=200&q=80"
             alt="Profile photo" class="home-avatar">

        <div class="home-intro">
          <p>👋 Hello. My name is <strong>${SITE.title}</strong>, and this is my personal journal and homepage.</p>
          <p>I write about things I notice, books I read, places I walk through, and whatever else earns a second thought. Posts here tend toward the reflective rather than the informational.</p>
          <p>I am based in New York. I take photographs when I remember to carry a camera.</p>
        </div>

        <div class="profile-rows">
          <div class="profile-row">
            <span class="profile-row-icon">📍</span>
            <span class="profile-row-text">New York, NY</span>
          </div>
          <div class="profile-row">
            <span class="profile-row-icon">📝</span>
            <span class="profile-row-text">I like to <a href="#journal" data-link>write</a>, take photographs, and read slowly.</span>
          </div>
          <div class="profile-row">
            <span class="profile-row-icon">📖</span>
            <span class="profile-row-text">I log films on <a href="#">Letterboxd</a> and books on <a href="#">Storygraph</a>.</span>
          </div>
          <div class="profile-row">
            <span class="profile-row-icon">✉️</span>
            <span class="profile-row-text">You can reach me at <a href="mailto:you@example.com">you@example.com</a>.</span>
          </div>
        </div>

        <p class="section-heading">Recent Posts</p>
        <div class="recent-posts">
          ${recent.map(p => `
            <div class="recent-post-item">
              <a href="#post/${p.id}" data-link class="recent-post-link">${p.title}</a>
              <span class="recent-post-date">${p.dateFormatted}</span>
            </div>
          `).join('')}
        </div>
      </div>
    `;
  },

  journal(el) {
    el.innerHTML = `
      <div class="page active">
        <div class="page-header">
          <p class="page-eyebrow">Archive</p>
          <h1 class="page-title">Journal</h1>
          <p class="page-description">${SITE.description}</p>
        </div>

        <div class="posts-list">
          ${POSTS.map(p => `
            <article class="post-card" onclick="location.hash='#post/${p.id}'">
              <div class="post-card-meta">${p.dateFormatted} &nbsp;·&nbsp; ${p.tags.join(', ')}</div>
              <h2 class="post-card-title">${p.title}</h2>
              <p class="post-card-excerpt">${p.excerpt}</p>
            </article>
          `).join('')}
        </div>
      </div>
    `;
  },

  post(el, id) {
    const post = POSTS.find(p => p.id === id);
    if (!post) { render.journal(el); return; }

    const idx = POSTS.indexOf(post);
    const prev = POSTS[idx + 1];
    const next = POSTS[idx - 1];

    // Build photo grid HTML
    let photoHTML = '';
    if (post.photos && post.photos.length > 0) {
      photoHTML = `
        <div class="photo-grid ${post.photoLayout || 'cols-1'}">
          ${post.photos.map(ph => `
            <figure class="photo-item" data-lightbox="${ph.src}">
              <img src="${ph.src}" alt="${ph.alt}" loading="lazy">
              ${ph.caption ? `<figcaption class="photo-caption">${ph.caption}</figcaption>` : ''}
            </figure>
          `).join('')}
        </div>
      `;
    }

    el.innerHTML = `
      <div class="page active">
        <a href="#journal" data-link class="back-link">← All Posts</a>

        <header class="post-header">
          <p class="post-date">${post.dateFormatted}</p>
          <h1 class="post-title">${post.title}</h1>
          <div class="post-tags">
            ${post.tags.map(t => `<span class="post-tag">${t}</span>`).join('')}
          </div>
        </header>

        <div class="post-body">
          ${post.content}
          ${photoHTML}
        </div>

        <nav class="post-nav">
          ${prev ? `
            <a href="#post/${prev.id}" data-link class="post-nav-link">
              ← Older
              <span>${prev.title}</span>
            </a>
          ` : '<span></span>'}
          ${next ? `
            <a href="#post/${next.id}" data-link class="post-nav-link right">
              Newer →
              <span>${next.title}</span>
            </a>
          ` : '<span></span>'}
        </nav>
      </div>
    `;

    // Bind lightbox
    $$('[data-lightbox]', el).forEach(item => {
      item.addEventListener('click', () => lightbox.open(item.dataset.lightbox, item.querySelector('img').alt));
    });
  },

  about(el) {
    el.innerHTML = `
      <div class="page active">
        <div class="page-header">
          <p class="page-eyebrow">About</p>
          <h1 class="page-title">${SITE.title}</h1>
        </div>
        <div class="about-section">
          <p>This is a personal journal. It has no particular theme beyond what earns my attention from week to week. I write here for the pleasure of writing, and because I find that putting something into sentences changes how I understand it.</p>
          <p>I am based in New York. I work in a field adjacent to design. I read more than I finish. I take photographs intermittently and walk most evenings.</p>
          <p>If something here was useful or interesting, or if you want to respond to something I wrote, email is the best way to reach me: <a href="mailto:you@example.com">you@example.com</a>.</p>
          <p>The site is built by hand — HTML, CSS, JavaScript. No framework, no CMS. I like the directness of it.</p>
        </div>
      </div>
    `;
  },

  timeline(el) {
    el.innerHTML = `
      <div class="page active">
        <div class="page-header">
          <p class="page-eyebrow">A Personal History</p>
          <h1 class="page-title">Timeline</h1>
          <p class="page-description">A loose chronology of things that happened and mattered.</p>
        </div>

        <div class="timeline-track-wrap">
          <div class="timeline-line"></div>
          <div class="timeline-dates">
            ${TIMELINE.map((item, i) => `
              <button class="timeline-node ${i === 0 ? 'active' : ''}" data-index="${i}" title="${item.date}">
                <div class="timeline-dot"></div>
                <span class="timeline-node-date">${item.date}</span>
              </button>
            `).join('')}
          </div>
        </div>

        <div class="timeline-entries">
          ${TIMELINE.map((item, i) => `
            <div class="timeline-entry ${i === 0 ? 'active' : ''}" id="tl-entry-${i}">
              <div class="timeline-entry-inner">
                <p class="timeline-entry-date">${item.date}</p>
                <h2 class="timeline-entry-title">${item.title}</h2>
                <p class="timeline-entry-desc">${item.description}</p>
                ${item.photos && item.photos.length > 0 ? `
                  <div class="timeline-photos photo-grid ${item.photos.length === 1 ? 'cols-1' : 'cols-2'}">
                    ${item.photos.map(ph => `
                      <figure class="photo-item" data-lightbox="${ph.src}">
                        <img src="${ph.src}" alt="${ph.alt}" loading="lazy">
                      </figure>
                    `).join('')}
                  </div>
                ` : ''}
              </div>
            </div>
          `).join('')}
        </div>
      </div>
    `;

    // Node click — switch active entry
    el.querySelectorAll('.timeline-node').forEach(node => {
      node.addEventListener('click', () => {
        const idx = parseInt(node.dataset.index);
        el.querySelectorAll('.timeline-node').forEach(n => n.classList.remove('active'));
        el.querySelectorAll('.timeline-entry').forEach(e => e.classList.remove('active'));
        node.classList.add('active');
        el.querySelector(`#tl-entry-${idx}`).classList.add('active');
      });
    });

    // Bind lightbox for timeline photos
    el.querySelectorAll('[data-lightbox]').forEach(item => {
      item.addEventListener('click', () => lightbox.open(item.dataset.lightbox, item.querySelector('img').alt));
    });
  },

  grid(el) {
    // 15 rows × 3 columns
    const ROWS = [
      { label: "Row 01", values: [14, 82, 37] },
      { label: "Row 02", values: [50, 23, 76] },
      { label: "Row 03", values: [68, 5, 49] },
      { label: "Row 04", values: [91, 61, 33] },
      { label: "Row 05", values: [27, 44, 88] },
      { label: "Row 06", values: [73, 19, 55] },
      { label: "Row 07", values: [38, 92, 11] },
      { label: "Row 08", values: [64, 47, 80] },
      { label: "Row 09", values: [7, 71, 29] },
      { label: "Row 10", values: [56, 13, 95] },
      { label: "Row 11", values: [83, 40, 62] },
      { label: "Row 12", values: [21, 78, 34] },
      { label: "Row 13", values: [46, 9, 67] },
      { label: "Row 14", values: [90, 53, 18] },
      { label: "Row 15", values: [35, 86, 42] }
    ];

    const COLS = ["Col A", "Col B", "Col C"];

    // Find min/max for heatmap shading
    const allVals = ROWS.flatMap(r => r.values);
    const min = Math.min(...allVals);
    const max = Math.max(...allVals);

    function heatOpacity(val) {
      return ((val - min) / (max - min));
    }

    // Row totals & col averages
    const rowTotals = ROWS.map(r => r.values.reduce((a, b) => a + b, 0));
    const colAvgs = COLS.map((_, ci) => {
      const sum = ROWS.reduce((a, r) => a + r.values[ci], 0);
      return (sum / ROWS.length).toFixed(1);
    });

    el.innerHTML = `
      <div class="page active">
        <div class="page-header">
          <p class="page-eyebrow">Data</p>
          <h1 class="page-title">Grid</h1>
          <p class="page-description">A table of values. Replace with whatever you need.</p>
        </div>

        <div class="grid-wrap">
          <div class="grid-scroll">
            <table class="data-grid">
              <thead>
                <tr>
                  <th class="grid-th grid-th-label"></th>
                  ${COLS.map(c => `<th class="grid-th">${c}</th>`).join('')}
                  <th class="grid-th grid-th-total">Total</th>
                </tr>
              </thead>
              <tbody>
                ${ROWS.map((row, ri) => `
                  <tr class="grid-row">
                    <td class="grid-td grid-td-label">${row.label}</td>
                    ${row.values.map(v => {
                      const op = heatOpacity(v);
                      return `<td class="grid-td grid-td-val" style="--heat:${op.toFixed(2)}">${v}</td>`;
                    }).join('')}
                    <td class="grid-td grid-td-total">${rowTotals[ri]}</td>
                  </tr>
                `).join('')}
              </tbody>
              <tfoot>
                <tr class="grid-row grid-foot">
                  <td class="grid-td grid-td-label">Avg</td>
                  ${colAvgs.map(a => `<td class="grid-td grid-td-avg">${a}</td>`).join('')}
                  <td class="grid-td grid-td-total">—</td>
                </tr>
              </tfoot>
            </table>
          </div>
          <p class="grid-hint">Scroll horizontally to see all columns. Cell shading reflects relative value.</p>
        </div>
      </div>
    `;
  }
};

// ── Lightbox ──────────────────────────────────────────────────────────────
const lightbox = {
  el: null,

  init() {
    this.el = document.createElement('div');
    this.el.className = 'lightbox';
    this.el.innerHTML = `
      <button class="lightbox-close">Close ✕</button>
      <img src="" alt="">
    `;
    document.body.appendChild(this.el);

    this.el.addEventListener('click', e => {
      if (e.target === this.el || e.target.classList.contains('lightbox-close')) {
        this.close();
      }
    });

    document.addEventListener('keydown', e => {
      if (e.key === 'Escape') this.close();
    });
  },

  open(src, alt = '') {
    const img = this.el.querySelector('img');
    img.src = src;
    img.alt = alt;
    this.el.classList.add('open');
    document.body.style.overflow = 'hidden';
  },

  close() {
    this.el.classList.remove('open');
    document.body.style.overflow = '';
  }
};

// ── Mobile nav ────────────────────────────────────────────────────────────
function initMobileNav() {
  const toggle = document.getElementById('nav-toggle');
  const nav = document.getElementById('site-nav');
  if (!toggle || !nav) return;

  toggle.addEventListener('click', () => {
    nav.classList.toggle('open');
  });

  // Close on link click
  nav.addEventListener('click', e => {
    if (e.target.tagName === 'A') nav.classList.remove('open');
  });
}

// ── Init ──────────────────────────────────────────────────────────────────
document.addEventListener('DOMContentLoaded', () => {
  lightbox.init();
  initMobileNav();
  router.init();
});
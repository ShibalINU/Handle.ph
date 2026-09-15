(function () {
  "use strict";

  const CATEGORIES = [
    "Plumbing", "Electrical", "Carpentry", "Cleaning", "Tutoring",
    "Beauty & Wellness", "Tech Support", "Events Staffing", "Automotive", "Gardening"
  ];

  const SEED_LISTINGS = [
    { id: "s1", workerId: "s1", name: "Renz Villanueva", category: "Plumbing", title: "Leak repair & pipe installation", desc: "10 years fixing residential leaks, water heaters, and pipe replacements. Same-day service in most cases.", rate: "₱500/hr", location: "Quezon City", contact: "0917 111 2233" },
    { id: "s2", workerId: "s2", name: "Maria Santos", category: "Tutoring", title: "Math tutor, Grade 7–10", desc: "Licensed teacher, 6 years tutoring high school algebra and geometry. Patient with struggling students.", rate: "₱350/hr", location: "Makati", contact: "0918 222 3344" },
    { id: "s3", workerId: "s3", name: "Jerome Cruz", category: "Electrical", title: "Home electrical repair & rewiring", desc: "Certified electrician handling outlet repairs, breaker issues, and full rewiring jobs.", rate: "₱600/hr", location: "Pasig", contact: "0919 333 4455" },
    { id: "s4", workerId: "s4", name: "Ana Reyes", category: "Cleaning", title: "Deep home & aircon cleaning", desc: "Team of 3, we handle full house deep cleans and aircon unit cleaning with our own equipment.", rate: "₱600/unit", location: "Quezon City", contact: "0920 444 5566" },
    { id: "s5", workerId: "s5", name: "Paolo Dizon", category: "Tech Support", title: "Laptop & PC repair", desc: "Hardware and software troubleshooting, virus removal, data recovery. Home visits available.", rate: "₱450/visit", location: "Taguig", contact: "0921 555 6677" },
    { id: "s6", workerId: "s6", name: "Liza Fernandez", category: "Beauty & Wellness", title: "Mobile hair & makeup artist", desc: "Bridal and event makeup, 8 years experience. I bring my own kit to your location.", rate: "₱2,500/booking", location: "Mandaluyong", contact: "0922 666 7788" },
    { id: "s7", workerId: "s7", name: "Carlo Mendoza", category: "Carpentry", title: "Custom furniture & repairs", desc: "Built-in cabinets, shelving, and furniture repair. Free estimates on larger jobs.", rate: "₱1,500/job", location: "Marikina", contact: "0923 777 8899" },
    { id: "s8", workerId: "s8", name: "Grace Aquino", category: "Events Staffing", title: "Event coordinator & host crew", desc: "Team available for birthdays, corporate events, and weddings — coordination, hosting, setup.", rate: "₱3,000/event", location: "Pasay", contact: "0924 888 9900" }
  ];

  const SEED_PROFILES_DATA = {
    s1: { name: "Renz Villanueva", tagline: "Licensed plumber for leaks, repiping, and water heaters", bio: "10 years fixing residential leaks, water heaters, and pipe replacements around Quezon City. I bring my own tools and can usually make it same-day.", location: "Quezon City", memberSince: "Mar 2022", rating: 4.8, jobsCompleted: 132, earnings: 18400,
      portfolio: [ { title: "Full repiping, 2-storey home", desc: "Replaced old galvanized pipes with PPR across 2 floors." }, { title: "Water heater install", desc: "Tankless unit installed for a condo unit in QC." } ],
      jobsLog: [ { title: "Leak repair - Fairview", amount: 600, date: "2026-08-27" }, { title: "Pipe replacement - Batasan", amount: 2200, date: "2026-08-19" }, { title: "Water heater checkup", amount: 500, date: "2026-08-05" } ] },
    s2: { name: "Maria Santos", tagline: "Licensed teacher tutoring Grade 7–10 math", bio: "6 years tutoring high school algebra and geometry. I focus on patience and building confidence with students who feel behind.", location: "Makati", memberSince: "Jun 2023", rating: 4.9, jobsCompleted: 88, earnings: 12250,
      portfolio: [ { title: "Algebra crash course", desc: "6-session program for a Grade 9 student before finals." }, { title: "Geometry tutoring group", desc: "Weekly small-group sessions for 3 students." } ],
      jobsLog: [ { title: "Algebra session - online", amount: 350, date: "2026-08-28" }, { title: "Geometry review", amount: 350, date: "2026-08-24" }, { title: "Grade 8 math tutoring", amount: 700, date: "2026-08-15" } ] },
    s3: { name: "Jerome Cruz", tagline: "Certified electrician for repairs and rewiring", bio: "Certified electrician handling outlet repairs, breaker issues, and full home rewiring jobs across Pasig and nearby areas.", location: "Pasig", memberSince: "Nov 2021", rating: 4.7, jobsCompleted: 156, earnings: 21000,
      portfolio: [ { title: "Full home rewiring", desc: "Rewired a 3-bedroom bungalow in Pasig." }, { title: "Breaker panel upgrade", desc: "Upgraded an outdated panel to code." } ],
      jobsLog: [ { title: "Outlet repair - Kapitolyo", amount: 600, date: "2026-08-29" }, { title: "Breaker fix - Ortigas", amount: 900, date: "2026-08-21" }, { title: "Rewiring consult", amount: 1200, date: "2026-08-10" } ] },
    s4: { name: "Ana Reyes", tagline: "Deep cleaning & aircon cleaning, team of 3", bio: "We handle full house deep cleans and aircon unit cleaning with our own equipment. Based in Quezon City, we travel across Metro Manila.", location: "Quezon City", memberSince: "Feb 2024", rating: 4.6, jobsCompleted: 64, earnings: 15600,
      portfolio: [ { title: "3-unit aircon cleaning", desc: "Full deep clean for a family home in QC." }, { title: "Move-out deep clean", desc: "Full apartment turnover clean before new tenants." } ],
      jobsLog: [ { title: "Aircon cleaning x2 units", amount: 1200, date: "2026-08-30" }, { title: "Home deep clean", amount: 2500, date: "2026-08-22" }, { title: "Aircon cleaning x1 unit", amount: 600, date: "2026-08-12" } ] },
    s5: { name: "Paolo Dizon", tagline: "Laptop & PC repair, home visits", bio: "Hardware and software troubleshooting, virus removal, and data recovery. I do home visits across Taguig and BGC.", location: "Taguig", memberSince: "Sep 2023", rating: 4.75, jobsCompleted: 71, earnings: 9800,
      portfolio: [ { title: "Data recovery job", desc: "Recovered files from a failing laptop drive." }, { title: "Office PC cleanup", desc: "Cleaned malware off 5 office machines." } ],
      jobsLog: [ { title: "Laptop repair - BGC", amount: 450, date: "2026-08-26" }, { title: "Virus removal", amount: 450, date: "2026-08-18" }, { title: "Data recovery", amount: 1500, date: "2026-08-04" } ] },
    s6: { name: "Liza Fernandez", tagline: "Mobile hair & makeup artist for events", bio: "Bridal and event makeup with 8 years of experience. I bring my own kit and travel to your venue.", location: "Mandaluyong", memberSince: "May 2022", rating: 4.9, jobsCompleted: 97, earnings: 34000,
      portfolio: [ { title: "Wedding day glam", desc: "Bridal party of 5 for a Tagaytay wedding." }, { title: "Debut makeup", desc: "Full glam for an 18th birthday event." } ],
      jobsLog: [ { title: "Bridal makeup - Tagaytay", amount: 2500, date: "2026-08-23" }, { title: "Debut glam", amount: 2500, date: "2026-08-09" }, { title: "Photoshoot makeup", amount: 1800, date: "2026-07-28" } ] },
    s7: { name: "Carlo Mendoza", tagline: "Custom furniture & carpentry repairs", bio: "Built-in cabinets, shelving, and furniture repair. I give free estimates for larger jobs across Marikina and nearby cities.", location: "Marikina", memberSince: "Jan 2023", rating: 4.65, jobsCompleted: 52, earnings: 26500,
      portfolio: [ { title: "Built-in closet", desc: "Custom closet build for a condo unit." }, { title: "Dining table repair", desc: "Restored a solid wood dining table." } ],
      jobsLog: [ { title: "Shelving install", amount: 1500, date: "2026-08-25" }, { title: "Cabinet repair", amount: 1200, date: "2026-08-13" }, { title: "Custom table build", amount: 4500, date: "2026-07-30" } ] },
    s8: { name: "Grace Aquino", tagline: "Event coordination & host crew", bio: "Team available for birthdays, corporate events, and weddings — coordination, hosting, and setup, based in Pasay.", location: "Pasay", memberSince: "Jul 2023", rating: 4.8, jobsCompleted: 39, earnings: 41000,
      portfolio: [ { title: "Corporate anniversary event", desc: "Full coordination for a 150-guest event." }, { title: "Wedding day hosting", desc: "Emcee and crew for a Pasay wedding reception." } ],
      jobsLog: [ { title: "Birthday event coordination", amount: 3000, date: "2026-08-22" }, { title: "Corporate event staffing", amount: 6000, date: "2026-08-08" }, { title: "Wedding hosting crew", amount: 5000, date: "2026-07-25" } ] }
  };
  function buildSeedProfiles() { return JSON.parse(JSON.stringify(SEED_PROFILES_DATA)); }

  // Some environments (e.g. sandboxed previews) block localStorage entirely.
  // Detect that once, and fall back to an in-memory store so the app still works —
  // it just won't persist across a page reload in that specific environment.
  const memoryFallback = { listings: null, chats: null, session: null, profiles: null, customCategories: null };
  let storageAvailable = true;
  try {
    const testKey = "__handleph_test__";
    window.localStorage.setItem(testKey, "1");
    window.localStorage.removeItem(testKey);
  } catch (e) {
    storageAvailable = false;
    console.warn("Handle.ph: localStorage unavailable, using in-memory storage for this session.");
  }

  const store = {
    getListings() {
      if (!storageAvailable) {
        if (!memoryFallback.listings) memoryFallback.listings = SEED_LISTINGS.slice();
        return memoryFallback.listings;
      }
      const raw = localStorage.getItem("handleph_listings");
      if (!raw) {
        localStorage.setItem("handleph_listings", JSON.stringify(SEED_LISTINGS));
        return SEED_LISTINGS.slice();
      }
      try { return JSON.parse(raw); } catch (e) { return SEED_LISTINGS.slice(); }
    },
    saveListings(list) {
      if (!storageAvailable) { memoryFallback.listings = list; return; }
      localStorage.setItem("handleph_listings", JSON.stringify(list));
    },
    getChats() {
      if (!storageAvailable) {
        if (!memoryFallback.chats) memoryFallback.chats = {};
        return memoryFallback.chats;
      }
      const raw = localStorage.getItem("handleph_chats");
      if (!raw) return {};
      try { return JSON.parse(raw); } catch (e) { return {}; }
    },
    saveChats(chats) {
      if (!storageAvailable) { memoryFallback.chats = chats; return; }
      localStorage.setItem("handleph_chats", JSON.stringify(chats));
    },
    getSession() {
      if (!storageAvailable) return memoryFallback.session || null;
      const raw = localStorage.getItem("handleph_session");
      if (!raw) return null;
      try { return JSON.parse(raw); } catch (e) { return null; }
    },
    saveSession(session) {
      if (!storageAvailable) { memoryFallback.session = session; return; }
      localStorage.setItem("handleph_session", JSON.stringify(session));
    },
    getProfiles() {
      if (!storageAvailable) {
        if (!memoryFallback.profiles) memoryFallback.profiles = buildSeedProfiles();
        return memoryFallback.profiles;
      }
      const raw = localStorage.getItem("handleph_profiles");
      if (!raw) {
        const seeded = buildSeedProfiles();
        localStorage.setItem("handleph_profiles", JSON.stringify(seeded));
        return seeded;
      }
      try { return JSON.parse(raw); } catch (e) { return buildSeedProfiles(); }
    },
    saveProfiles(profiles) {
      if (!storageAvailable) { memoryFallback.profiles = profiles; return; }
      localStorage.setItem("handleph_profiles", JSON.stringify(profiles));
    },
    getCustomCategories() {
      if (!storageAvailable) return memoryFallback.customCategories || [];
      const raw = localStorage.getItem("handleph_custom_categories");
      if (!raw) return [];
      try { return JSON.parse(raw); } catch (e) { return []; }
    },
    saveCustomCategories(list) {
      if (!storageAvailable) { memoryFallback.customCategories = list; return; }
      localStorage.setItem("handleph_custom_categories", JSON.stringify(list));
    }
  };

  function getAllCategories() {
    return CATEGORIES.concat(store.getCustomCategories());
  }

  function hashCode(str) {
    let hash = 0;
    for (let i = 0; i < str.length; i++) { hash = ((hash << 5) - hash) + str.charCodeAt(i); hash |= 0; }
    return hash;
  }

  function monthYearNow() {
    return new Date().toLocaleString("en-US", { month: "short", year: "numeric" });
  }

  let pendingWorkerSetup = false;

  // ---------- NAVIGATION ----------
  const views = ["login", "home", "browse", "post", "requests", "dashboard", "profile"];
  function showView(name) {
    views.forEach(v => {
      const el = document.getElementById("view-" + v);
      if (el) el.hidden = (v !== name);
    });
    window.scrollTo({ top: 0, behavior: "smooth" });
    if (name === "browse") renderListings();
    if (name === "requests") renderRequests();
    if (name === "dashboard") renderDashboard();
    if (name === "profile") renderProfile();
  }
  document.querySelectorAll("[data-nav]").forEach(el => {
    el.addEventListener("click", (e) => {
      e.preventDefault();
      showView(el.getAttribute("data-nav"));
    });
  });

  // ---------- SESSION / LOGIN ----------
  function updateNavForSession() {
    const session = store.getSession();
    const dashBtn = document.getElementById("nav-dashboard");
    const profBtn = document.getElementById("nav-profile");
    const label = document.getElementById("role-pill-label");
    if (session && session.role === "worker") {
      const profiles = store.getProfiles();
      const profile = profiles[session.workerId];
      dashBtn.hidden = false;
      profBtn.hidden = false;
      label.textContent = (profile ? profile.name : "Worker") + " · Worker";
    } else if (session && session.role === "customer") {
      dashBtn.hidden = true;
      profBtn.hidden = true;
      label.textContent = "Customer";
    } else {
      dashBtn.hidden = true;
      profBtn.hidden = true;
      label.textContent = "Log in";
    }
  }

  document.getElementById("login-customer").addEventListener("click", () => {
    store.saveSession({ role: "customer" });
    updateNavForSession();
    showView("home");
  });

  document.getElementById("login-worker").addEventListener("click", () => {
    const picker = document.getElementById("worker-picker");
    const select = document.getElementById("worker-picker-select");
    const profiles = store.getProfiles();
    const ids = Object.keys(profiles);
    select.innerHTML = "";
    if (ids.length === 0) {
      pendingWorkerSetup = true;
      document.getElementById("post-onboarding-note").hidden = false;
      showView("post");
      return;
    }
    ids.forEach(id => {
      const o = document.createElement("option");
      o.value = id;
      o.textContent = profiles[id].name + " — " + profiles[id].tagline;
      select.appendChild(o);
    });
    picker.hidden = false;
  });

  document.getElementById("worker-picker-continue").addEventListener("click", () => {
    const workerId = document.getElementById("worker-picker-select").value;
    if (!workerId) return;
    store.saveSession({ role: "worker", workerId });
    updateNavForSession();
    showView("dashboard");
  });

  document.getElementById("worker-picker-new").addEventListener("click", () => {
    pendingWorkerSetup = true;
    document.getElementById("post-onboarding-note").hidden = false;
    showView("post");
  });

  document.getElementById("role-pill").addEventListener("click", () => {
    document.getElementById("worker-picker").hidden = true;
    showView("login");
  });

  document.getElementById("nav-dashboard").addEventListener("click", () => showView("dashboard"));
  document.getElementById("nav-profile").addEventListener("click", () => {
    const session = store.getSession();
    if (session && session.role === "worker") openProfile(session.workerId);
  });
  document.getElementById("dash-view-profile").addEventListener("click", () => {
    const session = store.getSession();
    if (session && session.role === "worker") openProfile(session.workerId);
  });

  // ---------- HOME: chips + stats ----------
  function initHome() {
    const chipRow = document.getElementById("hero-chip-row");
    const featured = ["Plumbing", "Tutoring", "Cleaning", "Electrical", "Events Staffing"];
    featured.forEach(cat => {
      const b = document.createElement("button");
      b.type = "button";
      b.className = "chip";
      b.textContent = cat;
      b.addEventListener("click", () => {
        showView("browse");
        document.getElementById("browse-category").value = cat;
        renderListings();
      });
      chipRow.appendChild(b);
    });

    const listings = store.getListings();
    document.getElementById("stat-listings").textContent = listings.length;
    document.getElementById("stat-categories").textContent = getAllCategories().length;

    document.getElementById("hero-search-form").addEventListener("submit", (e) => {
      e.preventDefault();
      const term = document.getElementById("hero-search-input").value;
      showView("browse");
      document.getElementById("browse-search").value = term;
      renderListings();
    });
  }

  // ---------- BROWSE ----------
  function populateCategorySelects() {
    const catSelect = document.getElementById("browse-category");
    const postSelect = document.getElementById("f-category");
    const prevBrowse = catSelect.value;
    const prevPost = postSelect.value;
    catSelect.querySelectorAll("option").forEach((o, i) => { if (i > 0) o.remove(); });
    postSelect.querySelectorAll("option").forEach((o, i) => { if (i > 0) o.remove(); });

    getAllCategories().forEach(cat => {
      const o1 = document.createElement("option");
      o1.value = cat; o1.textContent = cat;
      catSelect.appendChild(o1);
      const o2 = document.createElement("option");
      o2.value = cat; o2.textContent = cat;
      postSelect.appendChild(o2);
    });

    const customOpt = document.createElement("option");
    customOpt.value = "__custom__";
    customOpt.textContent = "Other (add your own)";
    postSelect.appendChild(customOpt);

    if (prevBrowse) catSelect.value = prevBrowse;
    if (prevPost) postSelect.value = prevPost;
  }

  function populateLocationSelect() {
    const locSelect = document.getElementById("browse-location");
    const locations = [...new Set(store.getListings().map(l => l.location))].sort();
    locSelect.querySelectorAll("option").forEach((o, i) => { if (i > 0) o.remove(); });
    locations.forEach(loc => {
      const o = document.createElement("option");
      o.value = loc; o.textContent = loc;
      locSelect.appendChild(o);
    });
  }

  function renderListings() {
    const grid = document.getElementById("listing-grid");
    const empty = document.getElementById("empty-state");
    const countEl = document.getElementById("result-count");
    const term = document.getElementById("browse-search").value.trim().toLowerCase();
    const cat = document.getElementById("browse-category").value;
    const loc = document.getElementById("browse-location").value;

    let listings = store.getListings();
    listings = listings.filter(l => {
      const matchesTerm = !term || (l.title + l.desc + l.name + l.category).toLowerCase().includes(term);
      const matchesCat = !cat || l.category === cat;
      const matchesLoc = !loc || l.location === loc;
      return matchesTerm && matchesCat && matchesLoc;
    });

    grid.innerHTML = "";
    countEl.textContent = listings.length + (listings.length === 1 ? " listing found" : " listings found");
    empty.hidden = listings.length !== 0;

    listings.forEach(l => {
      const card = document.createElement("div");
      card.className = "listing-card";
      card.innerHTML = `
        <span class="listing-cat">${escapeHtml(l.category)}</span>
        <h3>${escapeHtml(l.title)}</h3>
        <p class="listing-meta">${escapeHtml(l.name)} · ${escapeHtml(l.location)}</p>
        <p class="listing-desc">${escapeHtml(l.desc)}</p>
        <button type="button" class="listing-name-link" data-profile="${escapeHtml(l.workerId || l.id)}" data-listing="${escapeHtml(l.id)}">View profile</button>
        <div class="listing-foot">
          <span class="listing-rate">${escapeHtml(l.rate)}</span>
          <button class="contact-btn" data-id="${l.id}">Chat now</button>
        </div>
      `;
      grid.appendChild(card);
    });

    grid.querySelectorAll(".contact-btn").forEach(btn => {
      btn.addEventListener("click", () => openChat(btn.getAttribute("data-id")));
    });
    grid.querySelectorAll(".listing-name-link").forEach(btn => {
      btn.addEventListener("click", () => openProfile(btn.getAttribute("data-profile"), btn.getAttribute("data-listing")));
    });
  }

  ["browse-search", "browse-category", "browse-location"].forEach(id => {
    document.getElementById(id).addEventListener("input", renderListings);
  });

  function escapeHtml(str) {
    const d = document.createElement("div");
    d.textContent = str;
    return d.innerHTML;
  }

  // ---------- POST FORM ----------
  document.getElementById("f-category").addEventListener("change", () => {
    const isCustom = document.getElementById("f-category").value === "__custom__";
    document.getElementById("f-category-custom-wrap").hidden = !isCustom;
    document.getElementById("f-category-custom").required = isCustom;
  });

  document.getElementById("post-form").addEventListener("submit", (e) => {
    e.preventDefault();

    let category = document.getElementById("f-category").value;
    if (category === "__custom__") {
      const customValue = document.getElementById("f-category-custom").value.trim();
      if (!customValue) return;
      category = customValue;
      if (!getAllCategories().includes(category)) {
        const customCats = store.getCustomCategories();
        customCats.push(category);
        store.saveCustomCategories(customCats);
        populateCategorySelects();
      }
    }

    const listings = store.getListings();
    const session = store.getSession();
    const isNewWorkerSetup = pendingWorkerSetup;
    const workerId = (session && session.role === "worker") ? session.workerId : ("w" + Date.now());

    const newListing = {
      id: "l" + Date.now(),
      workerId: workerId,
      name: document.getElementById("f-name").value.trim(),
      category: category,
      title: document.getElementById("f-title").value.trim(),
      desc: document.getElementById("f-desc").value.trim(),
      rate: document.getElementById("f-rate").value.trim(),
      location: document.getElementById("f-location").value.trim(),
      contact: document.getElementById("f-contact").value.trim()
    };
    listings.unshift(newListing);
    store.saveListings(listings);

    const profiles = store.getProfiles();
    if (!profiles[workerId]) {
      profiles[workerId] = {
        name: newListing.name,
        tagline: newListing.title,
        bio: newListing.desc,
        location: newListing.location,
        memberSince: monthYearNow(),
        rating: null,
        jobsCompleted: 0,
        earnings: 0,
        portfolio: [],
        jobsLog: []
      };
      store.saveProfiles(profiles);
    }

    document.getElementById("post-form").reset();
    document.getElementById("f-category-custom-wrap").hidden = true;
    document.getElementById("stat-listings").textContent = listings.length;

    const note = document.getElementById("post-confirmation");
    const onboardingNote = document.getElementById("post-onboarding-note");

    if (isNewWorkerSetup) {
      pendingWorkerSetup = false;
      store.saveSession({ role: "worker", workerId });
      updateNavForSession();
      onboardingNote.hidden = true;
      note.textContent = "Your worker profile is ready! Taking you to your dashboard...";
      note.hidden = false;
      setTimeout(() => { note.hidden = true; showView("dashboard"); }, 1400);
    } else {
      note.textContent = "Your skill is live. Check Browse skills to see it.";
      note.hidden = false;
      setTimeout(() => { note.hidden = true; }, 4000);
    }
  });

  // ---------- CHAT ----------
  const CANNED_GREETINGS = [
    "Hi! Thanks for reaching out — happy to help. What do you need done?",
    "Hello! I saw you're interested in this listing. What's the job you have in mind?",
    "Hi there! I'm available this week. Tell me more about what you need."
  ];
  const CANNED_REPLIES = [
    "Got it, that sounds doable. When were you hoping to get this done?",
    "Sure, I can take that on. What's the best area/address to meet you at?",
    "Noted! I'll need a bit more detail — can you share your location and preferred schedule?",
    "That works for me. I'll confirm the rate once I see the full scope on-site.",
    "Understood. I'm usually free on weekdays after 2pm — does that fit your schedule?",
    "Thanks for the details! I'll follow up shortly to lock in a time."
  ];

  function pickRandom(arr) { return arr[Math.floor(Math.random() * arr.length)]; }

  function initials(name) {
    return name.split(" ").map(p => p[0]).join("").slice(0, 2).toUpperCase();
  }

  let activeListingId = null;

  function openChat(listingId) {
    activeListingId = listingId;
    const listing = store.getListings().find(l => l.id === listingId);
    if (!listing) return;

    const chats = store.getChats();
    if (!chats[listingId]) {
      chats[listingId] = {
        listingTitle: listing.title,
        listingName: listing.name,
        listingContact: listing.contact,
        messages: [
          { from: "worker", text: pickRandom(CANNED_GREETINGS), time: new Date().toISOString() }
        ]
      };
      store.saveChats(chats);
    }

    document.getElementById("chat-avatar").textContent = initials(listing.name);
    document.getElementById("modal-title").textContent = listing.name;
    document.getElementById("modal-sub").textContent = listing.title + " · " + listing.rate;
    document.getElementById("modal-backdrop").hidden = false;
    renderChatMessages(listingId);
    document.getElementById("c-message").focus();
  }

  function closeModal() {
    document.getElementById("modal-backdrop").hidden = true;
    document.getElementById("contact-form").reset();
    activeListingId = null;
  }
  document.getElementById("modal-close").addEventListener("click", closeModal);
  document.getElementById("modal-backdrop").addEventListener("click", (e) => {
    if (e.target.id === "modal-backdrop") closeModal();
  });

  function formatTime(iso) {
    return new Date(iso).toLocaleTimeString([], { hour: "2-digit", minute: "2-digit" });
  }

  function renderChatMessages(listingId) {
    const container = document.getElementById("chat-messages");
    const chats = store.getChats();
    const thread = chats[listingId];
    if (!thread) return;
    container.innerHTML = "";
    thread.messages.forEach(m => {
      const bubble = document.createElement("div");
      bubble.className = "chat-bubble " + (m.from === "user" ? "from-user" : "from-worker");
      bubble.textContent = m.text;
      container.appendChild(bubble);

      const time = document.createElement("div");
      time.className = "chat-time" + (m.from === "worker" ? " from-worker-time" : "");
      time.textContent = formatTime(m.time);
      container.appendChild(time);
    });
    container.scrollTop = container.scrollHeight;
  }

  function showTypingIndicator() {
    const container = document.getElementById("chat-messages");
    const indicator = document.createElement("div");
    indicator.className = "typing-indicator";
    indicator.id = "typing-indicator";
    indicator.innerHTML = "<span></span><span></span><span></span>";
    container.appendChild(indicator);
    container.scrollTop = container.scrollHeight;
  }

  document.getElementById("contact-form").addEventListener("submit", (e) => {
    e.preventDefault();
    if (!activeListingId) return;
    const input = document.getElementById("c-message");
    const text = input.value.trim();
    if (!text) return;

    const chats = store.getChats();
    const thread = chats[activeListingId];
    if (!thread) return;

    thread.messages.push({ from: "user", text, time: new Date().toISOString() });
    store.saveChats(chats);
    renderChatMessages(activeListingId);
    input.value = "";

    showTypingIndicator();
    const listingIdAtSend = activeListingId;
    setTimeout(() => {
      const chatsNow = store.getChats();
      const threadNow = chatsNow[listingIdAtSend];
      if (!threadNow) return;
      threadNow.messages.push({ from: "worker", text: pickRandom(CANNED_REPLIES), time: new Date().toISOString() });
      store.saveChats(chatsNow);
      if (activeListingId === listingIdAtSend) {
        const indicator = document.getElementById("typing-indicator");
        if (indicator) indicator.remove();
        renderChatMessages(listingIdAtSend);
      }
    }, 1100 + Math.random() * 900);
  });

  // ---------- MY CHATS LIST ----------
  function renderRequests() {
    const list = document.getElementById("requests-list");
    const empty = document.getElementById("requests-empty");
    const chats = store.getChats();
    const ids = Object.keys(chats);
    list.innerHTML = "";
    empty.hidden = ids.length !== 0;

    ids
      .sort((a, b) => {
        const aLast = chats[a].messages[chats[a].messages.length - 1].time;
        const bLast = chats[b].messages[chats[b].messages.length - 1].time;
        return new Date(bLast) - new Date(aLast);
      })
      .forEach(id => {
        const thread = chats[id];
        const lastMsg = thread.messages[thread.messages.length - 1];
        const item = document.createElement("button");
        item.type = "button";
        item.className = "chat-list-item";
        item.innerHTML = `
          <div class="chat-list-avatar">${escapeHtml(initials(thread.listingName))}</div>
          <div class="chat-list-info">
            <h4>${escapeHtml(thread.listingName)} — ${escapeHtml(thread.listingTitle)}</h4>
            <p>${lastMsg.from === "user" ? "You: " : ""}${escapeHtml(lastMsg.text)}</p>
          </div>
          <div class="chat-list-time">${formatTime(lastMsg.time)}</div>
        `;
        item.addEventListener("click", () => openChat(id));
        list.appendChild(item);
      });
  }

  // ---------- WORKER DASHBOARD ----------
  function renderDashboard() {
    const session = store.getSession();
    if (!session || session.role !== "worker") { showView("login"); return; }
    const profiles = store.getProfiles();
    const profile = profiles[session.workerId];
    if (!profile) return;

    document.getElementById("dash-name").textContent = profile.name;
    document.getElementById("dash-sub").textContent = profile.tagline;

    const myListings = store.getListings().filter(l => l.workerId === session.workerId);
    const chats = store.getChats();
    const myChatIds = Object.keys(chats).filter(id => myListings.some(l => l.id === id));

    document.getElementById("dash-earnings").textContent = "₱" + Number(profile.earnings || 0).toLocaleString();
    document.getElementById("dash-jobs").textContent = profile.jobsCompleted || 0;
    document.getElementById("dash-rating").textContent = profile.rating ? profile.rating.toFixed(1) + " ★" : "New";
    document.getElementById("dash-chats").textContent = myChatIds.length;

    const listingsWrap = document.getElementById("dash-listings");
    listingsWrap.innerHTML = "";
    if (myListings.length === 0) {
      listingsWrap.innerHTML = '<p class="profile-empty-note">You haven\'t posted a skill yet.</p>';
    }
    myListings.forEach(l => {
      const item = document.createElement("div");
      item.className = "dash-listing-item";
      item.innerHTML = `
        <div>
          <p class="dash-listing-item-title">${escapeHtml(l.title)}</p>
          <p class="dash-listing-item-meta">${escapeHtml(l.location)} · ${escapeHtml(l.rate)}</p>
        </div>
        <span class="dash-listing-badge">${escapeHtml(l.category)}</span>
      `;
      listingsWrap.appendChild(item);
    });

    const logWrap = document.getElementById("dash-earnings-log");
    const logEmpty = document.getElementById("dash-log-empty");
    logWrap.innerHTML = "";
    const jobsLog = profile.jobsLog || [];
    logEmpty.hidden = jobsLog.length !== 0;
    jobsLog.forEach(entry => {
      const item = document.createElement("div");
      item.className = "dash-log-item";
      item.innerHTML = `
        <span>${escapeHtml(entry.title)}</span>
        <span class="dash-log-item-amount">₱${Number(entry.amount).toLocaleString()}</span>
        <span class="dash-log-item-date">${escapeHtml(entry.date)}</span>
      `;
      logWrap.appendChild(item);
    });

    const reqWrap = document.getElementById("dash-requests-list");
    const reqEmpty = document.getElementById("dash-requests-empty");
    reqWrap.innerHTML = "";
    reqEmpty.hidden = myChatIds.length !== 0;
    myChatIds
      .sort((a, b) => {
        const aLast = chats[a].messages[chats[a].messages.length - 1].time;
        const bLast = chats[b].messages[chats[b].messages.length - 1].time;
        return new Date(bLast) - new Date(aLast);
      })
      .forEach(id => {
        const thread = chats[id];
        const lastMsg = thread.messages[thread.messages.length - 1];
        const item = document.createElement("button");
        item.type = "button";
        item.className = "chat-list-item";
        item.innerHTML = `
          <div class="chat-list-avatar">C</div>
          <div class="chat-list-info">
            <h4>Inquiry: ${escapeHtml(thread.listingTitle)}</h4>
            <p>${lastMsg.from === "worker" ? "You: " : ""}${escapeHtml(lastMsg.text)}</p>
          </div>
          <div class="chat-list-time">${formatTime(lastMsg.time)}</div>
        `;
        item.addEventListener("click", () => openChat(id));
        reqWrap.appendChild(item);
      });
  }

  // ---------- WORKER PROFILE (public / portfolio) ----------
  let activeProfileWorkerId = null;
  let activeProfileSourceListingId = null;

  function openProfile(workerId, sourceListingId) {
    activeProfileWorkerId = workerId;
    activeProfileSourceListingId = sourceListingId || null;
    showView("profile");
  }

  function renderProfile() {
    if (!activeProfileWorkerId) return;
    const profiles = store.getProfiles();
    const profile = profiles[activeProfileWorkerId];
    if (!profile) return;
    const session = store.getSession();
    const isOwner = !!(session && session.role === "worker" && session.workerId === activeProfileWorkerId);

    const gradients = ["", "grad-2", "grad-3", "grad-4"];
    const gradIdx = Math.abs(hashCode(activeProfileWorkerId)) % gradients.length;
    const cover = document.getElementById("profile-cover");
    cover.className = "profile-cover " + gradients[gradIdx];

    document.getElementById("profile-avatar").textContent = initials(profile.name);
    document.getElementById("profile-name").textContent = profile.name;
    document.getElementById("profile-tagline").textContent = profile.tagline;
    document.getElementById("profile-meta").textContent = (profile.location ? profile.location + " · " : "") + "Member since " + profile.memberSince;

    const myListings = store.getListings().filter(l => l.workerId === activeProfileWorkerId);
    const statsRow = document.getElementById("profile-stats");
    statsRow.innerHTML = `
      <div class="profile-stat"><span class="profile-stat-value">${profile.jobsCompleted || 0}</span><span class="profile-stat-label">Jobs completed</span></div>
      <div class="profile-stat"><span class="profile-stat-value">${profile.rating ? profile.rating.toFixed(1) + " ★" : "New"}</span><span class="profile-stat-label">Rating</span></div>
      <div class="profile-stat"><span class="profile-stat-value">${myListings.length}</span><span class="profile-stat-label">Skills listed</span></div>
    `;

    document.getElementById("profile-bio").textContent = profile.bio || "";

    const actions = document.getElementById("profile-actions");
    actions.innerHTML = "";
    if (isOwner) {
      const editBtn = document.createElement("button");
      editBtn.type = "button"; editBtn.className = "nav-cta"; editBtn.textContent = "Edit profile";
      editBtn.addEventListener("click", openEditProfile);
      actions.appendChild(editBtn);
    } else {
      const msgBtn = document.createElement("button");
      msgBtn.type = "button"; msgBtn.className = "nav-cta"; msgBtn.textContent = "Message";
      msgBtn.addEventListener("click", () => {
        const target = activeProfileSourceListingId || (myListings[0] && myListings[0].id);
        if (target) openChat(target);
      });
      actions.appendChild(msgBtn);
    }

    const listingGrid = document.getElementById("profile-listings");
    listingGrid.innerHTML = "";
    myListings.forEach(l => {
      const card = document.createElement("div");
      card.className = "listing-card";
      card.innerHTML = `
        <span class="listing-cat">${escapeHtml(l.category)}</span>
        <h3>${escapeHtml(l.title)}</h3>
        <p class="listing-desc">${escapeHtml(l.desc)}</p>
        <div class="listing-foot">
          <span class="listing-rate">${escapeHtml(l.rate)}</span>
          <button class="contact-btn" data-id="${l.id}">Chat now</button>
        </div>
      `;
      listingGrid.appendChild(card);
    });
    listingGrid.querySelectorAll(".contact-btn").forEach(btn => {
      btn.addEventListener("click", () => openChat(btn.getAttribute("data-id")));
    });

    const portfolioGrid = document.getElementById("profile-portfolio");
    const portfolioEmpty = document.getElementById("profile-portfolio-empty");
    portfolioGrid.innerHTML = "";
    const items = profile.portfolio || [];
    portfolioEmpty.hidden = items.length !== 0;
    const visualGrads = ["", "grad-b", "grad-c"];
    items.forEach((item, i) => {
      const card = document.createElement("div");
      card.className = "portfolio-card";
      card.innerHTML = `
        <div class="portfolio-card-visual ${visualGrads[i % visualGrads.length]}"></div>
        <div class="portfolio-card-body">
          <p class="portfolio-card-title">${escapeHtml(item.title)}</p>
          <p class="portfolio-card-desc">${escapeHtml(item.desc)}</p>
        </div>
      `;
      portfolioGrid.appendChild(card);
    });
  }

  function openEditProfile() {
    const profiles = store.getProfiles();
    const profile = profiles[activeProfileWorkerId];
    if (!profile) return;
    document.getElementById("ep-tagline").value = profile.tagline || "";
    document.getElementById("ep-bio").value = profile.bio || "";
    const items = profile.portfolio || [];
    document.getElementById("ep-p1-title").value = (items[0] && items[0].title) || "";
    document.getElementById("ep-p1-desc").value = (items[0] && items[0].desc) || "";
    document.getElementById("ep-p2-title").value = (items[1] && items[1].title) || "";
    document.getElementById("ep-p2-desc").value = (items[1] && items[1].desc) || "";
    document.getElementById("ep-p3-title").value = (items[2] && items[2].title) || "";
    document.getElementById("ep-p3-desc").value = (items[2] && items[2].desc) || "";
    document.getElementById("edit-profile-backdrop").hidden = false;
  }
  function closeEditProfile() {
    document.getElementById("edit-profile-backdrop").hidden = true;
  }
  document.getElementById("edit-profile-close").addEventListener("click", closeEditProfile);
  document.getElementById("edit-profile-backdrop").addEventListener("click", (e) => {
    if (e.target.id === "edit-profile-backdrop") closeEditProfile();
  });
  document.getElementById("edit-profile-form").addEventListener("submit", (e) => {
    e.preventDefault();
    const profiles = store.getProfiles();
    const profile = profiles[activeProfileWorkerId];
    if (!profile) return;
    profile.tagline = document.getElementById("ep-tagline").value.trim();
    profile.bio = document.getElementById("ep-bio").value.trim();
    const portfolio = [];
    [1, 2, 3].forEach(n => {
      const title = document.getElementById("ep-p" + n + "-title").value.trim();
      const desc = document.getElementById("ep-p" + n + "-desc").value.trim();
      if (title) portfolio.push({ title, desc });
    });
    profile.portfolio = portfolio;
    store.saveProfiles(profiles);
    closeEditProfile();
    renderProfile();
  });

  // ---------- INIT ----------
  populateCategorySelects();
  populateLocationSelect();
  initHome();
  updateNavForSession();
  const initialSession = store.getSession();
  showView(initialSession ? "home" : "login");
})();

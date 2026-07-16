<template>
  <div class="bg-surface-950 text-slate-100 min-h-screen font-sans antialiased selection:bg-brand-500/30 selection:text-white overflow-x-hidden w-full">
    <!-- Header -->
    <header ref="siteHeaderEl" class="fixed inset-x-0 top-0 z-50 isolate w-full border-b border-white/[0.08] bg-surface-950/85 shadow-lg shadow-black/20 backdrop-blur-xl supports-[backdrop-filter]:bg-surface-950/70 transition-shadow duration-300">
      <div class="flex justify-between items-center px-8 py-5 max-w-7xl mx-auto">
        <a href="#" class="group">
          <div class="font-display text-2xl sm:text-3xl font-semibold tracking-tight text-white transform transition-transform duration-300 group-hover:scale-[1.02]">
            Alvin.
          </div>
        </a>
      
        <!-- Desktop Navigation -->
        <nav class="hidden md:flex items-center gap-14">
          <div class="flex items-center gap-8 lg:gap-10 text-sm font-medium tracking-wide">
            <a 
              href="#about" 
              class="relative py-2 text-slate-300 hover:text-white transition-all duration-300"
              :class="{ 'text-white': activeSection === 'about' }"
            >
              About
              <span 
                class="absolute bottom-0 left-0 w-full h-0.5 bg-gradient-to-r from-brand-600 to-fuchsia-500 transform scale-x-0 transition-transform duration-300"
                :class="{ '!scale-x-100': activeSection === 'about' }"
              ></span>
            </a>
            <a 
              href="#skills" 
              class="relative py-2 text-slate-300 hover:text-white transition-all duration-300"
              :class="{ 'text-white': activeSection === 'skills' }"
            >
              Skills
              <span 
                class="absolute bottom-0 left-0 w-full h-0.5 bg-gradient-to-r from-brand-600 to-fuchsia-500 transform scale-x-0 transition-transform duration-300"
                :class="{ '!scale-x-100': activeSection === 'skills' }"
              ></span>
            </a>
            <a
              href="#portfolio"
              class="relative py-2 text-slate-300 hover:text-white transition-all duration-300"
              :class="{ 'text-white': activeSection === 'portfolio' }"
            >
              Work
              <span 
                class="absolute bottom-0 left-0 w-full h-0.5 bg-gradient-to-r from-brand-600 to-fuchsia-500 transform scale-x-0 transition-transform duration-300"
                :class="{ '!scale-x-100': activeSection === 'portfolio' }"
              ></span>
            </a>
            <a 
              href="#process" 
              class="relative py-2 text-slate-300 hover:text-white transition-all duration-300"
              :class="{ 'text-white': activeSection === 'process' }"
            >
              Process
              <span 
                class="absolute bottom-0 left-0 w-full h-0.5 bg-gradient-to-r from-brand-600 to-fuchsia-500 transform scale-x-0 transition-transform duration-300"
                :class="{ '!scale-x-100': activeSection === 'process' }"
              ></span>
            </a>
            <a
              href="#contact"
              class="relative py-2 text-slate-300 hover:text-white transition-all duration-300"
              :class="{ 'text-white': activeSection === 'contact' }"
            >
              Contact
              <span 
                class="absolute bottom-0 left-0 w-full h-0.5 bg-gradient-to-r from-brand-600 to-fuchsia-500 transform scale-x-0 transition-transform duration-300"
                :class="{ '!scale-x-100': activeSection === 'contact' }"
              ></span>
            </a>
          </div>
          
          <a
            href="#contact"
            class="bg-gradient-to-r from-brand-600 to-fuchsia-500 px-7 py-2.5 rounded-full text-sm font-semibold shadow-md text-white hover:opacity-90 transition-all duration-300 hover:shadow-xl hover:scale-[1.02] active:scale-[0.98]"
          >
            Get in Touch
          </a>
      </nav>

        <!-- Mobile Navigation Button -->
        <div class="flex items-center gap-3 md:hidden">
          <a
            href="#contact"
            class="bg-gradient-to-r from-brand-600 to-fuchsia-500 px-4 py-2 rounded-full text-sm font-semibold shadow-md text-white hover:opacity-90 transition-all duration-300 active:scale-[0.98]"
          >
            Get in Touch
          </a>
          <button 
            @click="toggleMenu"
            class="w-10 h-10 flex items-center justify-center rounded-lg bg-white/5 border border-white/10 hover:bg-white/10 transition-all"
            aria-label="Toggle menu"
          >
            <svg 
              class="w-6 h-6 transition-transform duration-300"
              :class="{ 'rotate-90': isMenuOpen }"
              fill="none" 
              stroke="currentColor" 
              viewBox="0 0 24 24"
            >
              <path 
                v-if="!isMenuOpen"
                stroke-linecap="round" 
                stroke-linejoin="round" 
                stroke-width="2" 
                d="M4 6h16M4 12h16M4 18h16"
              />
              <path 
                v-else
                stroke-linecap="round" 
                stroke-linejoin="round" 
                stroke-width="2" 
                d="M6 18L18 6M6 6l12 12"
              />
            </svg>
          </button>
        </div>
      </div>

      <!-- Mobile Menu -->
      <div 
        v-if="isMenuOpen" 
        class="fixed inset-0 bg-surface-950 z-40 md:hidden"
        @click="closeMenu"
      >
        <div 
          class="flex flex-col items-center justify-center min-h-screen p-8 space-y-8 bg-surface-950"
          @click.stop
        >
          <a 
            v-for="item in mobileNavItems"
            :key="item.id"
            :href="'#' + item.id"
            @click="closeMenu"
            class="relative text-xl font-medium hover:text-fuchsia-400 transition-all duration-300 hover:scale-[1.02] py-2"
            :class="{ 'text-fuchsia-400': activeSection === item.id }"
          >
            {{ item.label }}
            <span 
              class="absolute -bottom-1 left-0 w-full h-0.5 bg-gradient-to-r from-brand-600 to-fuchsia-500 transform scale-x-0 transition-transform duration-300"
              :class="{ '!scale-x-100': activeSection === item.id }"
            ></span>
          </a>
          <div class="w-full h-px bg-white/10 my-4"></div>
          <div class="flex items-center gap-4">
            <a
              href="https://www.linkedin.com/in/al-villamero/"
              target="_blank"
              rel="noopener noreferrer"
              class="w-10 h-10 flex items-center justify-center rounded-lg bg-white/5 border border-white/10 hover:bg-white/10 transition-all"
              aria-label="LinkedIn"
            >
              <svg class="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                <path d="M19 3H5C3.895 3 3 3.895 3 5V19C3 20.105 3.895 21 5 21H19C20.105 21 21 20.105 21 19V5C21 3.895 20.105 3 19 3ZM9 17H6.477V9H9V17ZM7.694 7.717C6.923 7.717 6.408 7.203 6.408 6.517C6.408 5.831 6.922 5.317 7.779 5.317C8.55 5.317 9.065 5.831 9.065 6.517C9.065 7.203 8.551 7.717 7.694 7.717ZM18 17H15.558V12.577C15.558 11.432 14.767 11.077 14.362 11.077C13.957 11.077 13.014 11.315 13.014 12.577C13.014 12.815 13.014 17 13.014 17H10.477V9H13.014V10.017C13.419 9.305 14.249 9 15.478 9C16.707 9 18 9.871 18 12.577V17Z"/>
              </svg>
            </a>
            <a
              href="https://github.com/alvinvillamero"
              target="_blank"
              rel="noopener noreferrer"
              class="w-10 h-10 flex items-center justify-center rounded-lg bg-white/5 border border-white/10 hover:bg-white/10 transition-all"
              aria-label="GitHub"
            >
              <svg class="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                <path d="M12 2C6.475 2 2 6.475 2 12C2 16.425 4.8625 20.1625 8.8375 21.4875C9.3375 21.575 9.525 21.275 9.525 21.0125C9.525 20.775 9.5125 19.9875 9.5125 19.15C7 19.6125 6.35 18.5375 6.15 17.975C6.0375 17.6875 5.55 16.8 5.125 16.5625C4.775 16.375 4.275 15.9125 5.1125 15.9C5.9 15.8875 6.4625 16.625 6.65 16.925C7.55 18.4375 8.9875 18.0125 9.5625 17.75C9.65 17.1 9.9125 16.6625 10.2 16.4125C7.975 16.1625 5.65 15.3 5.65 11.475C5.65 10.3875 6.0375 9.4875 6.675 8.7875C6.575 8.5375 6.225 7.5125 6.775 6.1375C6.775 6.1375 7.6125 5.875 9.525 7.1625C10.325 6.9375 11.175 6.825 12.025 6.825C12.875 6.825 13.725 6.9375 14.525 7.1625C16.4375 5.8625 17.275 6.1375 17.275 6.1375C17.825 7.5125 17.475 8.5375 17.375 8.7875C18.0125 9.4875 18.4 10.375 18.4 11.475C18.4 15.3125 16.0625 16.1625 13.8375 16.4125C14.2 16.725 14.5125 17.325 14.5125 18.2625C14.5125 19.6 14.5 20.675 14.5 21.0125C14.5 21.275 14.6875 21.5875 15.1875 21.4875C19.1375 20.1625 22 16.4125 22 12C22 6.475 17.525 2 12 2Z"/>
              </svg>
            </a>
          </div>
        </div>
      </div>
    </header>

    <div class="h-[82px] md:h-[90px]" aria-hidden="true"></div>

    <!-- Hero -->
    <section ref="heroSectionEl" class="relative isolate overflow-hidden">
      <div class="pointer-events-none absolute inset-0 -z-10">
        <div ref="heroBlobAEl" class="absolute -top-24 right-0 h-[420px] w-[420px] rounded-full bg-brand-600/20 blur-[100px]"></div>
        <div ref="heroBlobBEl" class="absolute top-32 -left-20 h-[320px] w-[320px] rounded-full bg-cyan-500/12 blur-[90px]"></div>
        <div class="absolute inset-0 bg-[linear-gradient(to_right,rgba(255,255,255,0.03)_1px,transparent_1px),linear-gradient(to_bottom,rgba(255,255,255,0.03)_1px,transparent_1px)] bg-[size:56px_56px] [mask-image:linear-gradient(to_bottom,transparent,black_12%,black_88%,transparent)] opacity-60"></div>
      </div>
      <div class="flex flex-col lg:flex-row items-start lg:items-center justify-between max-w-7xl mx-auto px-4 sm:px-8 pt-16 pb-14 md:pt-24 md:pb-20 gap-14 lg:gap-16">
      <div class="max-w-xl lg:max-w-2xl space-y-7 relative z-10">
        <p ref="heroKickerEl" class="text-xs sm:text-sm font-medium tracking-[0.2em] uppercase text-brand-300/90">Full-stack developer · Next.js/React/Vue · Node · PostgreSQL</p>
        <h1 ref="heroHeadlineEl" class="font-display text-3xl sm:text-4xl lg:text-5xl font-bold tracking-tight text-white leading-[1.08]">
          <span class="text-slate-100">Full-stack developer building</span>
          <span class="bg-gradient-to-r from-brand-400 via-fuchsia-400 to-cyan-300 bg-clip-text text-transparent"> complete, working applications</span>
          <span class="text-slate-100">, end to end.</span>
        </h1>
        <p ref="heroSubtextEl" class="text-slate-400 text-base md:text-lg leading-relaxed max-w-xl">
          I design and ship real web applications — frontend, backend, databases, and auth — not just polished demos. Open to full-time full-stack roles, and available for freelance/contract work.
        </p>
        <div ref="heroCtasEl" class="flex flex-col sm:flex-row gap-3 sm:gap-4 pt-1">
          <a
            ref="heroPrimaryCtaEl"
            href="#portfolio"
            class="inline-flex items-center justify-center gap-2 px-7 py-3.5 rounded-xl bg-gradient-to-r from-brand-600 to-violet-600 text-white text-sm font-semibold hover:opacity-95 transition-all shadow-lg shadow-indigo-950/30 ring-1 ring-white/10"
          >
            View Projects
          </a>
          <a
            href="https://drive.google.com/file/d/1caOzNy7nxAuExabEMaDAtaSQzdzwG5W9"
            target="_blank"
            rel="noopener noreferrer"
            class="inline-flex items-center justify-center gap-2 px-7 py-3.5 rounded-xl border border-white/14 text-white text-sm font-medium hover:bg-white/[0.07] hover:border-white/25 transition-colors"
          >
            Download Resume
          </a>
          <a
            href="#contact"
            class="inline-flex items-center justify-center gap-2 px-7 py-3.5 rounded-xl border border-white/14 text-white text-sm font-medium hover:bg-white/[0.07] hover:border-white/25 transition-colors"
          >
            Get in Touch
          </a>
        </div>
        <p ref="heroFooterEl" class="text-sm text-slate-500">Remote · Philippines · <a href="#contact" class="text-slate-400 hover:text-brand-400 transition-colors">Get in touch</a></p>
      </div>

      <!-- System / dashboard mockup (no portrait) -->
      <div class="relative w-full max-w-lg lg:max-w-[min(100%,440px)] mx-auto lg:mx-0 shrink-0 select-none" aria-hidden="true">
        <div class="absolute -inset-4 bg-gradient-to-br from-violet-600/20 via-transparent to-cyan-500/10 rounded-[2rem] blur-2xl"></div>
        <!-- Back stack -->
        <div ref="heroBackStack1El" class="absolute top-6 right-2 w-[88%] h-48 rounded-xl border border-white/[0.07] bg-[#0c1f35] shadow-lg opacity-80"></div>
        <div ref="heroBackStack2El" class="absolute top-3 right-6 w-[82%] h-44 rounded-xl border border-white/[0.08] bg-[#0e2438] shadow-md opacity-90"></div>
        <!-- Main dashboard -->
        <div class="relative rounded-xl border border-white/10 bg-[#0d2137] shadow-2xl overflow-hidden">
          <div class="flex items-center justify-between px-4 py-3 border-b border-white/[0.06] bg-black/30">
            <div class="flex items-center gap-2">
              <span class="w-2.5 h-2.5 rounded-full bg-emerald-500/90"></span>
              <span class="text-[11px] font-medium text-slate-400 tracking-wide">Operations console</span>
            </div>
            <div class="flex gap-1">
              <span class="w-8 h-2 rounded bg-white/10"></span>
              <span class="w-8 h-2 rounded bg-white/10"></span>
            </div>
          </div>
          <div class="p-4 grid grid-cols-3 gap-3">
            <div class="col-span-2 space-y-2">
              <div class="h-24 rounded-lg bg-gradient-to-br from-violet-500/20 to-fuchsia-500/10 border border-white/[0.06] p-3">
                <div class="flex justify-between items-end h-full gap-1">
                  <span v-for="h in [40,65,35,80,50,90,45]" :key="h" class="flex-1 rounded-sm bg-violet-400/50" :style="{ height: h + '%' }"></span>
                </div>
              </div>
              <div class="flex gap-2">
                <div class="flex-1 h-10 rounded-md bg-white/[0.06] border border-white/[0.05]"></div>
                <div class="flex-1 h-10 rounded-md bg-white/[0.06] border border-white/[0.05]"></div>
              </div>
            </div>
            <div class="rounded-lg border border-white/[0.08] bg-surface-950 p-2.5 flex flex-col">
              <span class="text-[10px] text-slate-500 uppercase tracking-wider mb-2">Flow</span>
              <div class="space-y-1.5 flex-1">
                <div class="h-2 w-full rounded bg-violet-500/40"></div>
                <div class="h-2 w-[80%] rounded bg-white/10"></div>
                <div class="h-2 w-full rounded bg-cyan-500/30"></div>
                <div class="h-2 w-[60%] rounded bg-white/10"></div>
              </div>
            </div>
          </div>
        </div>
        <!-- Chatbot panel -->
        <div class="absolute -bottom-2 -right-1 sm:right-0 w-[min(100%,260px)] rounded-xl border border-violet-500/25 bg-[#0f2844] shadow-xl p-3 z-10">
          <div class="flex items-center gap-2 mb-2 pb-2 border-b border-white/[0.06]">
            <span class="text-[10px] font-semibold text-brand-300 uppercase tracking-wider">Assistant</span>
            <span class="ml-auto w-2 h-2 rounded-full bg-emerald-400 animate-pulse"></span>
          </div>
          <div class="space-y-2 text-[11px]">
            <div class="rounded-lg bg-white/[0.06] px-2.5 py-2 text-slate-400">How can we route this lead?</div>
            <div class="rounded-lg bg-violet-500/15 border border-violet-500/20 px-2.5 py-2 text-slate-300">→ Intake → routing → team handoff</div>
          </div>
        </div>
      </div>
      </div>
    </section>

    <!-- Trust -->
    <section id="trust" class="border-y border-white/[0.06] bg-black/20">
      <div class="max-w-5xl mx-auto px-6 sm:px-8 py-8 sm:py-10">
        <ul data-reveal-stagger class="grid sm:grid-cols-3 gap-6 sm:gap-8 text-base text-slate-300 leading-snug">
          <li class="text-center sm:text-left border-l-0 sm:border-l border-brand-500/25 sm:pl-6 first:sm:border-l-0 first:sm:pl-0">
            Real backends: auth, databases, and reporting — not just frontend demos
          </li>
          <li class="text-center sm:text-left border-l-0 sm:border-l border-brand-500/25 sm:pl-6">
            End-to-end execution: frontend, backend, and deployment
          </li>
          <li class="text-center sm:text-left border-l-0 sm:border-l border-brand-500/25 sm:pl-6">
            Open to full-time roles and freelance/contract work
          </li>
        </ul>
      </div>
    </section>

    <!-- About -->
    <section id="about" class="py-20 md:py-28 px-6 sm:px-8 max-w-6xl mx-auto relative scroll-mt-28" data-reveal>
      <div class="grid lg:grid-cols-[minmax(0,1fr)_minmax(0,1.15fr)] gap-10 lg:gap-16 items-center">
        <div class="relative mx-auto w-full max-w-[340px] lg:max-w-none lg:mx-0">
          <div class="absolute -inset-3 rounded-[1.75rem] bg-gradient-to-br from-violet-600/40 via-fuchsia-500/15 to-cyan-500/20 blur-xl opacity-80"></div>
          <div class="relative aspect-[4/5] rounded-2xl overflow-hidden border border-white/10 shadow-2xl shadow-black/40 ring-1 ring-white/10 bg-[#0f2744]">
            <img
              src="@/assets/img/pic.jpg"
              alt="Alvin Villamero"
              class="w-full h-full object-cover object-top"
              loading="lazy"
              width="400"
              height="500"
            />
            <div class="absolute inset-x-0 bottom-0 h-1/3 bg-gradient-to-t from-surface-950 via-surface-950/70 to-transparent pointer-events-none"></div>
          </div>
        </div>
        <div class="space-y-5">
          <p class="text-xs font-semibold uppercase tracking-[0.2em] text-brand-300/80">About me</p>
          <h2 class="font-display text-2xl sm:text-3xl md:text-4xl font-bold text-white tracking-tight leading-tight">
            Full-stack developer building <span class="bg-gradient-to-r from-brand-400 to-fuchsia-400 bg-clip-text text-transparent">complete, working systems</span>
          </h2>
          <p class="text-slate-400 text-base leading-relaxed">
            I&apos;m Alvin, a full-stack developer from Davao City. I build with TypeScript/JavaScript across Next.js, React, and Vue on the frontend, Node.js/Express on the backend, and PostgreSQL (via Prisma or Supabase) or Firebase for data and auth — shipping applications with real user roles, databases, and reporting, not just UI.
          </p>
          <p class="text-slate-500 text-sm leading-relaxed">
            I also work across no-code platforms and CMS builds (WordPress, Elementor) when that's the right tool for the job — but my core focus is building and maintaining real, secure, production-ready applications.
          </p>
          <div class="flex flex-wrap gap-3 pt-2">
            <a
              href="#contact"
              class="inline-flex items-center justify-center px-6 py-3 rounded-xl bg-gradient-to-r from-brand-600 to-violet-600 text-white text-sm font-semibold hover:opacity-95 transition-opacity shadow-lg shadow-indigo-950/20"
            >
              Get in Touch
            </a>
            <a
              href="#portfolio"
              class="inline-flex items-center justify-center px-6 py-3 rounded-xl border border-white/14 text-slate-200 text-sm font-medium hover:bg-white/[0.06] transition-colors"
            >
              See selected work
            </a>
          </div>
        </div>
      </div>
    </section>

    <!-- Skills -->
    <section id="skills" class="relative pt-24 pb-12 md:pt-32 md:pb-16 px-6 sm:px-8 max-w-6xl mx-auto border-t border-white/[0.06] overflow-visible">
      <div data-reveal class="max-w-3xl mb-10 md:mb-12">
        <p class="text-xs font-semibold uppercase tracking-[0.2em] text-brand-300/80 mb-3">Tools & proficiency</p>
        <h2 class="font-display text-2xl sm:text-3xl md:text-4xl font-bold text-white tracking-tight mb-5">Platforms, tools, and technical stack</h2>
        <p class="text-slate-400 text-base leading-relaxed">
          Select a category to see the platforms I work with and the level of proficiency behind each tool.
        </p>
      </div>

      <div class="grid lg:grid-cols-[330px_minmax(0,1fr)] gap-5 md:gap-6 items-start">
        <div class="min-w-0 rounded-2xl border border-white/[0.10] bg-white/[0.055] p-3 shadow-2xl shadow-black/20 ring-1 ring-white/[0.03] backdrop-blur-xl">
          <button
            v-for="category in skillCategories"
            :key="category.id"
            type="button"
            @click="activeSkillCategory = category.id"
            class="w-full rounded-xl p-4 text-left transition-all duration-200"
            :class="activeSkillCategory === category.id ? 'bg-brand-500/12 ring-1 ring-brand-400/25' : 'hover:bg-white/[0.04]'"
          >
            <span class="block text-[11px] font-semibold uppercase tracking-[0.18em]" :class="activeSkillCategory === category.id ? 'text-brand-300' : 'text-slate-500'">{{ category.kicker }}</span>
            <span class="mt-1 flex items-center justify-between gap-3">
              <span class="text-sm font-semibold" :class="activeSkillCategory === category.id ? 'text-white' : 'text-slate-300'">{{ category.title }}</span>
              <span class="rounded-full bg-slate-950/80 px-2 py-1 text-[11px] font-semibold text-slate-400">{{ category.tools.length }}</span>
            </span>
          </button>
        </div>

        <article class="min-w-0 rounded-2xl border border-white/[0.10] bg-white/[0.055] p-6 md:p-8 shadow-2xl shadow-black/20 ring-1 ring-white/[0.03] backdrop-blur-xl">
          <div class="mb-8">
            <div class="max-w-2xl">
              <p class="text-[11px] font-semibold uppercase tracking-[0.18em] text-brand-300/70 mb-3">{{ activeSkillCategoryData.kicker }}</p>
              <h3 class="text-xl md:text-2xl font-semibold text-white leading-tight">{{ activeSkillCategoryData.title }}</h3>
              <p class="mt-2 text-sm text-slate-400 leading-relaxed">{{ activeSkillCategoryData.description }}</p>
            </div>
            <div class="mt-6 grid sm:grid-cols-2 gap-4 w-full">
              <div class="rounded-xl border border-white/[0.10] bg-slate-950/55 px-5 py-4 shadow-lg shadow-black/10 backdrop-blur-md md:px-6 md:py-5">
                <p class="text-[11px] font-semibold uppercase tracking-[0.16em] text-slate-500">Tools</p>
                <p class="mt-2 text-3xl font-semibold text-white">{{ Math.round(statCounters.tools) }}</p>
              </div>
              <div class="rounded-xl border border-white/[0.10] bg-slate-950/55 px-5 py-4 shadow-lg shadow-black/10 backdrop-blur-md md:px-6 md:py-5">
                <p class="text-[11px] font-semibold uppercase tracking-[0.16em] text-slate-500">Average</p>
                <p class="mt-2 text-3xl font-semibold text-white">{{ Math.round(statCounters.average) }}%</p>
              </div>
            </div>
          </div>

          <div ref="skillsToolGridEl" data-reveal-stagger class="grid sm:grid-cols-2 gap-4 md:gap-5">
            <div
              v-for="tool in activeSkillCategoryData.tools"
              :key="tool.name"
              class="rounded-xl border border-white/[0.10] bg-slate-950/50 p-4 shadow-lg shadow-black/10 backdrop-blur-md md:p-5"
            >
              <div class="flex items-center justify-between gap-4 mb-3">
                <span class="text-sm font-medium text-slate-200">{{ tool.name }}</span>
                <span class="text-sm font-semibold text-brand-300">{{ tool.percentage }}%</span>
              </div>
              <div class="h-2.5 rounded-full bg-slate-800 overflow-hidden">
                <div
                  :ref="(el) => setSkillBarRef(el, tool.name, tool.percentage)"
                  class="h-full w-full origin-left scale-x-0 rounded-full bg-gradient-to-r from-brand-500 to-fuchsia-500"
                ></div>
              </div>
            </div>
          </div>
        </article>
      </div>
    </section>

    <!-- Portfolio / sample works -->
    <section id="portfolio" class="pt-12 pb-24 md:pt-16 md:pb-32 px-6 sm:px-8 max-w-6xl mx-auto relative">
      <div class="relative">
        <div data-reveal class="flex flex-col gap-6 mb-10 md:mb-12">
          <div class="flex flex-col sm:flex-row sm:items-end sm:justify-between gap-4">
            <h2 class="font-display text-2xl sm:text-3xl md:text-4xl font-bold text-white tracking-tight">Sample Works</h2>
            <a
              href="https://drive.google.com/drive/folders/1WaEBY9yw_RxpQrTHA3QmRkfUxh44b0Wg"
              target="_blank"
              rel="noopener noreferrer"
              class="group inline-flex items-center justify-center gap-3 px-5 py-2.5 bg-white/5 border border-white/10 rounded-xl text-sm font-medium text-white hover:bg-white/10 hover:border-fuchsia-500/25 transition-all duration-300 sm:self-auto"
            >
              <span>View More Projects</span>
              <svg
                class="w-4 h-4 text-fuchsia-400 group-hover:translate-x-1 transition-transform"
                fill="currentColor"
                viewBox="0 0 20 20"
              >
                <path fill-rule="evenodd" d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z" clip-rule="evenodd"/>
              </svg>
            </a>
          </div>

          <div class="flex flex-wrap gap-3">
            <button 
              v-for="category in projectCategories" 
              :key="category.id"
              @click="setActiveCategory(category.id)"
              :class="[
                'px-6 py-2 rounded-lg text-sm font-medium transition-all duration-300',
                activeProjectCategory === category.id
                  ? 'bg-gradient-to-r from-brand-600 to-fuchsia-500 text-white hover:opacity-90'
                  : 'bg-white/5 border border-white/10 text-slate-400 hover:text-white hover:border-fuchsia-500/25'
              ]"
            >
              {{ category.label }}
            </button>
          </div>
        </div>

        <!-- Projects Grid -->
        <div ref="portfolioGridEl" class="grid sm:grid-cols-2 gap-4 sm:gap-6 md:gap-8 max-w-full">
          <div
            v-for="project in filteredProjects"
            :key="project.id"
            :ref="(el) => setProjectCardRef(el, project.id)"
            class="project-card group relative bg-white/5 rounded-xl border border-white/10 overflow-hidden hover:border-fuchsia-500/25 transition-colors duration-500 transform-gpu"
          >
            <div class="pointer-events-none absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500 bg-[radial-gradient(130%_90%_at_50%_0%,rgba(192,132,252,0.16),transparent_62%)]"></div>
            <div class="relative p-2">
              <div 
                class="aspect-[16/10] overflow-hidden cursor-pointer rounded-lg"
                @click="openImageModal(getProjectPreviewSrc(project))"
              >
                <img 
                  :src="getProjectPreviewSrc(project)"
                  :alt="project.title" 
                  loading="lazy"
                  class="w-full h-full object-contain bg-black/20 group-hover:scale-[1.08] group-hover:brightness-105 transition-all duration-700 ease-out"
                />
              </div>
            </div>
            <div class="relative p-4 sm:p-6">
              <div class="flex flex-wrap items-center gap-2 sm:gap-3 mb-3">
                <span 
                  v-for="tag in project.tags" 
                  :key="tag"
                  class="px-2 sm:px-3 py-1 bg-white/5 rounded-full text-xs font-medium text-fuchsia-400"
                >
                  {{ tag }}
                </span>
              </div>
              <h3 class="text-base sm:text-lg font-semibold text-white mb-2 group-hover:text-brand-300 transition-colors">{{ project.title }}</h3>
              <div v-if="project.problem" class="space-y-2 mb-4 text-xs sm:text-sm">
                <p class="text-slate-500"><span class="text-slate-400 font-medium">What was needed:</span> {{ project.problem }}</p>
                <p class="text-slate-500"><span class="text-slate-400 font-medium">What I built:</span> {{ project.solution }}</p>
                <p v-if="project.outcome" class="text-slate-500"><span class="text-slate-400 font-medium">Outcome:</span> {{ project.outcome }}</p>
              </div>
              <p v-else class="text-sm text-slate-400 mb-4 line-clamp-2 sm:line-clamp-none">{{ project.description }}</p>
              <p class="text-xs sm:text-sm text-slate-500 mb-4">
                <span class="text-slate-400 font-medium">Tech stack:</span> {{ getProjectTechStack(project) }}
              </p>
              <div class="flex items-center gap-3 sm:gap-4">
                <a
                  v-if="project.url"
                  :href="project.url"
                  target="_blank"
                  rel="noopener noreferrer"
                  class="text-sm font-medium text-white hover:text-fuchsia-400 transition-colors inline-flex items-center gap-1"
                >
                  Visit live site
                  <svg class="w-4 h-4 text-fuchsia-400" fill="currentColor" viewBox="0 0 20 20">
                    <path fill-rule="evenodd" d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z" clip-rule="evenodd" />
                  </svg>
                </a>
                <span v-else-if="!isWordPressProject(project)" class="text-sm text-slate-500">Live link coming soon</span>
              </div>
            </div>
          </div>
        </div>




      </div>
    </section>

    <!-- Process -->
    <section id="process" class="py-24 md:py-32 px-6 sm:px-8 max-w-6xl mx-auto border-t border-white/[0.06]">
      <div data-reveal class="max-w-3xl mb-12">
        <h2 class="font-display text-2xl sm:text-3xl md:text-4xl font-bold text-white mb-4 tracking-tight">How I Work</h2>
      </div>
      <ol data-reveal-stagger class="grid sm:grid-cols-2 lg:grid-cols-5 gap-4 md:gap-5 list-none p-0 m-0">
        <li v-for="(step, i) in processSteps" :key="step.title" class="rounded-2xl border border-white/[0.08] bg-white/[0.02] p-5 md:p-6 flex flex-col gap-3">
          <span class="text-xl font-bold text-brand-500/90 tabular-nums">{{ padStep(i) }}</span>
          <div>
            <h3 class="text-base font-semibold text-white mb-1.5">{{ step.title }}</h3>
            <p class="text-sm text-slate-400 leading-relaxed">{{ step.body }}</p>
          </div>
        </li>
      </ol>
    </section>

    <!-- Why work with me -->
    <section id="why" class="py-20 md:py-24 px-6 sm:px-8 max-w-6xl mx-auto border-t border-white/[0.06]">
      <div data-reveal class="max-w-3xl mb-8">
        <h2 class="font-display text-2xl sm:text-3xl md:text-4xl font-bold text-white mb-2 tracking-tight">Why Clients Work With Me</h2>
      </div>
      <ul data-reveal-stagger class="space-y-3 max-w-2xl">
        <li v-for="line in whyClients" :key="line" class="flex gap-3 text-sm md:text-base text-slate-300 leading-relaxed">
          <span class="text-brand-400 shrink-0 mt-1">·</span>
          <span>{{ line }}</span>
        </li>
      </ul>
    </section>

    <!-- Testimonials -->
    <section id="testimonials" class="py-20 px-6 sm:px-8 max-w-6xl mx-auto border-t border-white/[0.06]" data-reveal>
      <div class="max-w-4xl mx-auto">
        <div class="mb-8">
          <p class="text-xs font-semibold uppercase tracking-[0.2em] text-brand-300/80 mb-3">What clients say</p>
          <h2 class="font-display text-2xl sm:text-3xl md:text-4xl font-bold text-white">Client feedback</h2>
        </div>

        <div class="rounded-3xl overflow-hidden border border-white/[0.08] bg-black/70">
          <div class="relative aspect-video bg-slate-950">
            <iframe
              :src="testimonialVideoEmbedUrl"
              title="Client feedback — Ben Traub"
              class="absolute inset-0 h-full w-full"
              frameborder="0"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowfullscreen
            ></iframe>
          </div>
          <div class="px-6 py-5 border-t border-white/[0.08] bg-black/80">
            <p class="text-sm text-slate-200 font-semibold">Ben Traub — CEO, Student Marketing Academy</p>
            <p class="text-xs text-slate-500 mt-2">Reliability and follow-through on a long-running working relationship, Feb 2024 to Nov 2025.</p>
          </div>
        </div>
      </div>
    </section>

    <!-- Final CTA -->
    <section class="py-16 md:py-20 px-6 sm:px-8 max-w-6xl mx-auto" data-reveal>
      <div class="rounded-3xl border border-brand-500/25 bg-gradient-to-br from-brand-950/40 to-surface-950 px-8 py-12 md:px-12 md:py-14 text-center">
        <h2 class="font-display text-2xl sm:text-3xl md:text-4xl font-bold text-white mb-4 max-w-2xl mx-auto leading-snug">Need a full-stack web application built for your business?</h2>
        <p class="text-slate-400 max-w-xl mx-auto mb-8 text-sm md:text-base">Let's map out what you actually need and turn it into something real.</p>
        <div class="flex flex-col sm:flex-row items-center justify-center gap-3 sm:gap-4">
          <a ref="finalCtaEl" href="#contact" class="inline-flex items-center justify-center px-8 py-3.5 rounded-lg bg-gradient-to-r from-brand-600 to-violet-600 text-white text-sm font-semibold hover:opacity-95 transition-opacity">Get in Touch</a>
          <a href="https://www.linkedin.com/in/al-villamero/" target="_blank" rel="noopener noreferrer" class="inline-flex items-center justify-center px-8 py-3.5 rounded-lg border border-white/15 text-white text-sm font-medium hover:bg-white/[0.06] transition-colors">Connect on LinkedIn</a>
        </div>
      </div>
    </section>

    <!-- Background -->
    <section id="background" class="py-20 md:py-28 px-6 sm:px-8 max-w-6xl mx-auto border-t border-white/[0.06]" data-reveal>
      <div class="grid md:grid-cols-2 gap-12 md:gap-16">
        <div>
          <h2 class="font-display text-2xl sm:text-3xl font-bold text-white mb-4">Background</h2>
          <p class="text-slate-400 text-sm leading-relaxed mb-6">
            BS Information Technology (University of Mindanao, 2020). Prior roles across IT infrastructure, support, and digital delivery for international teams—experience that informs how I scope secure, maintainable systems today.
          </p>
          <a href="https://drive.google.com/file/d/1caOzNy7nxAuExabEMaDAtaSQzdzwG5W9" target="_blank" rel="noopener noreferrer" class="text-sm font-medium text-brand-300 hover:text-brand-200">Download CV →</a>
        </div>
        <div>
          <h3 class="text-sm font-semibold uppercase tracking-widest text-slate-500 mb-4">Typical stack</h3>
          <p class="text-sm text-slate-400 leading-relaxed mb-4">
            TypeScript/JavaScript across Next.js, React, and Vue on the frontend, Node.js/Express on the backend, PostgreSQL (via Prisma or Supabase) and Firebase for data and auth, Git/GitHub for version control, and cloud hosting for deployment — with no-code/CMS tools brought in when that's the better fit for the project.
          </p>
        </div>
      </div>
    </section>


    <!-- Contact -->
    <section id="contact" class="py-16 sm:py-24 md:py-32 px-4 sm:px-8 max-w-6xl mx-auto relative scroll-mt-28">
      <div class="absolute inset-0 bg-gradient-to-b from-transparent via-[#8000FF]/5 to-transparent pointer-events-none"></div>
      
      <div class="relative">
        <div class="flex flex-col items-center text-center mb-10 sm:mb-14">
          <h2 class="font-display text-2xl sm:text-3xl md:text-4xl font-bold text-slate-100 mb-3 sm:mb-4">Start a project conversation</h2>
          <p class="text-slate-400 max-w-2xl text-base leading-relaxed">Fill out the form below, or reach me via the contact options underneath, for a fast next step.</p>
        </div>

        <div class="max-w-3xl mx-auto">
          <!-- Contact Info -->
          <div class="grid sm:grid-cols-2 gap-4 mb-8">
            <!-- Location Card -->
            <div class="group bg-white/5 p-6 rounded-xl border border-white/10 hover:border-fuchsia-500/25 transition-all duration-300">
              <div class="flex items-start gap-6">
                <div class="bg-gradient-to-br from-brand-600 to-fuchsia-500 px-2 py-1.5 rounded-lg group-hover:scale-110 transition-transform">
                  <svg class="w-5 h-5 text-white" fill="currentColor" viewBox="0 0 20 20">
                    <path fill-rule="evenodd" d="M5.05 4.05a7 7 0 119.9 9.9L10 18.9l-4.95-4.95a7 7 0 010-9.9zM10 11a2 2 0 100-4 2 2 0 000 4z" clip-rule="evenodd"/>
                  </svg>
                </div>
                <div>
                  <h3 class="text-lg font-semibold text-white mb-2 group-hover:text-fuchsia-400 transition-colors">Location</h3>
                  <p class="text-slate-400">Davao City, Philippines</p>
                  <p class="text-sm text-slate-500 mt-1">Available for remote work worldwide</p>
                </div>
              </div>
            </div>

            <!-- Social Links -->
            <div class="group bg-white/5 p-6 rounded-xl border border-white/10 hover:border-fuchsia-500/25 transition-all duration-300">
              <div class="flex items-start gap-6">
                <div class="bg-gradient-to-br from-brand-600 to-fuchsia-500 px-2 py-1.5 rounded-lg group-hover:scale-110 transition-transform">
                  <svg class="w-5 h-5 text-white" fill="currentColor" viewBox="0 0 20 20">
                    <path d="M13 6a3 3 0 11-6 0 3 3 0 016 0zM18 8a2 2 0 11-4 0 2 2 0 014 0zM14 15a4 4 0 00-8 0v3h8v-3zM6 8a2 2 0 11-4 0 2 2 0 014 0zM16 18v-3a5.972 5.972 0 00-.75-2.906A3.005 3.005 0 0119 15v3h-3zM4.75 12.094A5.973 5.973 0 004 15v3H1v-3a3 3 0 013.75-2.906z"/>
                  </svg>
                </div>
                <div>
                  <h3 class="text-lg font-semibold text-white mb-2 group-hover:text-fuchsia-400 transition-colors">GitHub &amp; LinkedIn</h3>
                  <div class="flex items-center gap-4">
                    <a href="https://www.linkedin.com/in/al-villamero/" target="_blank" rel="noopener noreferrer" aria-label="LinkedIn" class="text-slate-400 hover:text-fuchsia-400 transition-colors">
                      <svg class="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                        <path d="M19 3H5C3.895 3 3 3.895 3 5V19C3 20.105 3.895 21 5 21H19C20.105 21 21 20.105 21 19V5C21 3.895 20.105 3 19 3ZM9 17H6.477V9H9V17ZM7.694 7.717C6.923 7.717 6.408 7.203 6.408 6.517C6.408 5.831 6.922 5.317 7.779 5.317C8.55 5.317 9.065 5.831 9.065 6.517C9.065 7.203 8.551 7.717 7.694 7.717ZM18 17H15.558V12.577C15.558 11.432 14.767 11.077 14.362 11.077C13.957 11.077 13.014 11.315 13.014 12.577C13.014 12.815 13.014 17 13.014 17H10.477V9H13.014V10.017C13.419 9.305 14.249 9 15.478 9C16.707 9 18 9.871 18 12.577V17Z"/>
                      </svg>
                    </a>
                    <a href="https://github.com/alvinvillamero" target="_blank" rel="noopener noreferrer" aria-label="GitHub" class="text-slate-400 hover:text-fuchsia-400 transition-colors">
                      <svg class="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                        <path d="M12 2C6.475 2 2 6.475 2 12C2 16.425 4.8625 20.1625 8.8375 21.4875C9.3375 21.575 9.525 21.275 9.525 21.0125C9.525 20.775 9.5125 19.9875 9.5125 19.15C7 19.6125 6.35 18.5375 6.15 17.975C6.0375 17.6875 5.55 16.8 5.125 16.5625C4.775 16.375 4.275 15.9125 5.1125 15.9C5.9 15.8875 6.4625 16.625 6.65 16.925C7.55 18.4375 8.9875 18.0125 9.5625 17.75C9.65 17.1 9.9125 16.6625 10.2 16.4125C7.975 16.1625 5.65 15.3 5.65 11.475C5.65 10.3875 6.0375 9.4875 6.675 8.7875C6.575 8.5375 6.225 7.5125 6.775 6.1375C6.775 6.1375 7.6125 5.875 9.525 7.1625C10.325 6.9375 11.175 6.825 12.025 6.825C12.875 6.825 13.725 6.9375 14.525 7.1625C16.4375 5.8625 17.275 6.1375 17.275 6.1375C17.825 7.5125 17.475 8.5375 17.375 8.7875C18.0125 9.4875 18.4 10.375 18.4 11.475C18.4 15.3125 16.0625 16.1625 13.8375 16.4125C14.2 16.725 14.5125 17.325 14.5125 18.2625C14.5125 19.6 14.5 20.675 14.5 21.0125C14.5 21.275 14.6875 21.5875 15.1875 21.4875C19.1375 20.1625 22 16.4125 22 12C22 6.475 17.525 2 12 2Z"/>
                      </svg>
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <!-- Contact Form -->
          <div class="bg-white/5 p-6 sm:p-8 rounded-2xl border border-white/10">
            <form v-if="contactStatus !== 'success'" @submit.prevent="submitContactForm" class="space-y-6">
              <!-- Honeypot: hidden from real users, bots tend to fill every field -->
              <div class="absolute -left-[9999px] w-px h-px overflow-hidden" aria-hidden="true">
                <label for="company_website">Leave this field empty</label>
                <input id="company_website" v-model="honeypot" type="text" tabindex="-1" autocomplete="off" />
              </div>

              <div class="grid sm:grid-cols-2 gap-5">
                <div>
                  <label class="block text-sm font-medium text-slate-300 mb-1.5">Your Name <span class="text-fuchsia-400">*</span></label>
                  <input v-model="contactForm.name" type="text" required autocomplete="name" class="w-full rounded-lg bg-slate-950/60 border border-white/10 px-4 py-2.5 text-sm text-slate-100 placeholder-slate-600 focus:outline-none focus:ring-2 focus:ring-brand-500/50" />
                </div>
                <div>
                  <label class="block text-sm font-medium text-slate-300 mb-1.5">Email <span class="text-fuchsia-400">*</span></label>
                  <input v-model="contactForm.email" type="email" required autocomplete="email" class="w-full rounded-lg bg-slate-950/60 border border-white/10 px-4 py-2.5 text-sm text-slate-100 placeholder-slate-600 focus:outline-none focus:ring-2 focus:ring-brand-500/50" />
                </div>
                <div>
                  <label class="block text-sm font-medium text-slate-300 mb-1.5">Phone Number <span class="text-fuchsia-400">*</span></label>
                  <div class="flex gap-2">
                    <select v-model="contactPhoneCountry" class="shrink-0 rounded-lg bg-slate-950/60 border border-white/10 px-2 py-2.5 text-sm text-slate-100 focus:outline-none focus:ring-2 focus:ring-brand-500/50">
                      <option v-for="c in countryCodes" :key="c.code" :value="c.code">{{ c.label }}</option>
                    </select>
                    <input
                      :value="contactForm.phone"
                      @input="onPhoneInput"
                      type="tel"
                      inputmode="numeric"
                      required
                      autocomplete="tel-national"
                      placeholder="931 200 4316"
                      class="flex-1 min-w-0 rounded-lg bg-slate-950/60 border border-white/10 px-4 py-2.5 text-sm text-slate-100 placeholder-slate-600 focus:outline-none focus:ring-2 focus:ring-brand-500/50"
                    />
                  </div>
                </div>
                <div>
                  <label class="block text-sm font-medium text-slate-300 mb-1.5">Current Website Address <span class="text-slate-600">(if applicable)</span></label>
                  <input v-model="contactForm.website" type="url" placeholder="https://" autocomplete="url" class="w-full rounded-lg bg-slate-950/60 border border-white/10 px-4 py-2.5 text-sm text-slate-100 placeholder-slate-600 focus:outline-none focus:ring-2 focus:ring-brand-500/50" />
                </div>
              </div>

              <div>
                <label class="block text-sm font-medium text-slate-300 mb-1.5">Tell me about what you need <span class="text-fuchsia-400">*</span></label>
                <textarea v-model="contactForm.about" required rows="4" class="w-full rounded-lg bg-slate-950/60 border border-white/10 px-4 py-2.5 text-sm text-slate-100 placeholder-slate-600 focus:outline-none focus:ring-2 focus:ring-brand-500/50"></textarea>
              </div>

              <div>
                <label class="block text-sm font-medium text-slate-300 mb-2">I am interested in <span class="text-slate-500 font-normal">(choose all that apply)</span> <span class="text-fuchsia-400">*</span></label>
                <div class="grid sm:grid-cols-2 gap-2.5">
                  <label v-for="option in interestOptions" :key="option" class="flex items-start gap-2.5 text-sm text-slate-300">
                    <input type="checkbox" :value="option" v-model="contactForm.interests" class="mt-0.5 rounded border-white/20 bg-slate-950/60 text-brand-500 focus:ring-brand-500/50" />
                    {{ option }}
                  </label>
                </div>
              </div>

              <div>
                <label class="block text-sm font-medium text-slate-300 mb-2">Estimated budget for this project <span class="text-fuchsia-400">*</span></label>
                <p class="text-xs text-slate-500 mb-2">Reaching out about a full-time role instead of a project? Choose "Not applicable."</p>
                <div class="grid sm:grid-cols-2 gap-2">
                  <label v-for="option in budgetOptions" :key="option" class="flex items-center gap-2.5 text-sm text-slate-300">
                    <input type="radio" name="budget" :value="option" v-model="contactForm.budget" required class="border-white/20 bg-slate-950/60 text-brand-500 focus:ring-brand-500/50" />
                    {{ option }}
                  </label>
                </div>
              </div>

              <div class="grid sm:grid-cols-2 gap-5">
                <div>
                  <label class="block text-sm font-medium text-slate-300 mb-1.5">When does this need to be complete? <span class="text-fuchsia-400">*</span></label>
                  <input v-model="contactForm.timeline" type="text" required placeholder="e.g. ASAP, within a month, flexible" class="w-full rounded-lg bg-slate-950/60 border border-white/10 px-4 py-2.5 text-sm text-slate-100 placeholder-slate-600 focus:outline-none focus:ring-2 focus:ring-brand-500/50" />
                </div>
                <div>
                  <label class="block text-sm font-medium text-slate-300 mb-1.5">How did you find my site? <span class="text-fuchsia-400">*</span></label>
                  <input v-model="contactForm.referral" type="text" required class="w-full rounded-lg bg-slate-950/60 border border-white/10 px-4 py-2.5 text-sm text-slate-100 placeholder-slate-600 focus:outline-none focus:ring-2 focus:ring-brand-500/50" />
                </div>
              </div>

              <div>
                <label class="block text-sm font-medium text-slate-300 mb-1.5">Additional Comments</label>
                <textarea v-model="contactForm.comments" rows="3" class="w-full rounded-lg bg-slate-950/60 border border-white/10 px-4 py-2.5 text-sm text-slate-100 placeholder-slate-600 focus:outline-none focus:ring-2 focus:ring-brand-500/50"></textarea>
              </div>

              <label class="flex items-start gap-3 text-xs text-slate-500 leading-relaxed">
                <input v-model="contactConsent" type="checkbox" required class="mt-0.5 rounded border-white/20 bg-slate-950/60 text-brand-500 focus:ring-brand-500/50" />
                I agree to be contacted about this inquiry, and consent to my name and contact details being stored only to respond to my message — never sold or shared with third parties.
              </label>

              <p v-if="contactStatus === 'error'" class="text-sm text-red-400">{{ contactError }}</p>

              <button
                type="submit"
                :disabled="contactStatus === 'sending'"
                class="inline-flex items-center justify-center px-8 py-3.5 rounded-lg bg-gradient-to-r from-brand-600 to-violet-600 text-white text-sm font-semibold hover:opacity-95 transition-opacity disabled:opacity-60"
              >
                {{ contactStatus === 'sending' ? 'Sending…' : 'Send Message' }}
              </button>
            </form>

            <div v-else class="text-center py-8">
              <h3 class="text-xl font-semibold text-white mb-2">Thanks — message sent.</h3>
              <p class="text-slate-400 text-sm">I'll get back to you as soon as I can.</p>
            </div>
          </div>
        </div>
      </div>
    </section>

    <!-- Footer -->
    <footer class="py-10 border-t border-white/10 opacity-0 animate-fadeIn">
      <div class="max-w-6xl mx-auto px-6 sm:px-8 flex flex-col sm:flex-row sm:items-center sm:justify-between gap-6 text-sm text-slate-500">
        <p><span class="text-slate-400">© 2026 Alvin Villamero</span></p>
        <div class="flex flex-wrap items-center gap-x-6 gap-y-2">
          <a href="#contact" class="hover:text-brand-300 transition-colors">Contact</a>
        </div>
        <nav class="flex flex-wrap gap-x-5 gap-y-2" aria-label="Footer">
          <a href="#about" class="hover:text-slate-300 transition-colors">About</a>
          <a href="#skills" class="hover:text-slate-300 transition-colors">Skills</a>
          <a href="#portfolio" class="hover:text-slate-300 transition-colors">Work</a>
          <a href="#process" class="hover:text-slate-300 transition-colors">Process</a>
        </nav>
      </div>
    </footer>
    <!-- Image Modal -->
    <div v-if="isModalOpen" class="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/95" @click="closeImageModal">
      <div class="relative max-w-7xl w-full max-h-[90vh] bg-surface-950 rounded-xl overflow-hidden">
        <button 
          @click="closeImageModal" 
          class="absolute top-4 right-4 text-white/80 hover:text-white bg-black/20 hover:bg-black/40 rounded-full p-2 transition-colors z-10"
        >
          <svg class="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M6 18L18 6M6 6l12 12"/>
          </svg>
        </button>
        <div class="w-full h-full flex items-center justify-center bg-black/20">
          <img 
            :src="selectedImage" 
            :alt="selectedImage?.split('/').pop() || 'Project Image'" 
            class="max-w-full max-h-[85vh] object-contain"
            @click.stop
          />
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
import emailjs from '@emailjs/browser'
import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
import { onMounted, onUnmounted, ref, reactive, computed, nextTick, watch } from 'vue'

gsap.registerPlugin(ScrollTrigger)

const contactForm = ref({
  name: '',
  email: '',
  phone: '',
  website: '',
  about: '',
  interests: [],
  budget: '',
  timeline: '',
  referral: '',
  comments: ''
})
const honeypot = ref('')
const contactFormLoadedAt = Date.now()
const MIN_SUBMIT_MS = 3000
const contactConsent = ref(false)
const contactStatus = ref('idle')
const contactError = ref('')

const countryCodes = [
  { code: '+63', label: 'PH +63' },
  { code: '+1', label: 'US/CA +1' },
  { code: '+44', label: 'UK +44' },
  { code: '+61', label: 'AU +61' },
  { code: '+65', label: 'SG +65' },
  { code: '+91', label: 'IN +91' },
  { code: '+81', label: 'JP +81' },
  { code: '+49', label: 'DE +49' },
  { code: '+33', label: 'FR +33' },
  { code: '+971', label: 'AE +971' }
]
const contactPhoneCountry = ref('+63')

const onPhoneInput = (event) => {
  const digits = event.target.value.replace(/\D/g, '').slice(0, 14)
  contactForm.value.phone = digits.replace(/(\d{3})(?=\d)/g, '$1 ').trim()
  event.target.value = contactForm.value.phone
}

const interestOptions = [
  'Full-time / permanent full-stack role',
  'Freelance or contract project',
  'Web application development (frontend + backend)',
  'API integration or backend work',
  'Website redesign or migration',
  'Technical consulting / code review',
  'Other (explain in comments)'
]

const budgetOptions = [
  'Not applicable — job inquiry',
  '$10,000 or more',
  '$5,000 to $10,000',
  '$3,000 to $5,000',
  '$2,000 to $3,000',
  '$1,000 to $2,000',
  '$500 to $1,000',
  '$500 or less'
]

const submitContactForm = async () => {
  // Honeypot / timing checks catch most bots — fail "successfully" so
  // scripted spam doesn't learn to adapt, without wasting EmailJS quota.
  if (honeypot.value || Date.now() - contactFormLoadedAt < MIN_SUBMIT_MS) {
    contactStatus.value = 'success'
    return
  }

  contactStatus.value = 'sending'
  contactError.value = ''
  try {
    const serviceId = import.meta.env.VITE_EMAILJS_SERVICE_ID
    const templateId = import.meta.env.VITE_EMAILJS_TEMPLATE_ID
    const publicKey = import.meta.env.VITE_EMAILJS_PUBLIC_KEY
    if (!serviceId || !templateId || !publicKey) {
      throw new Error('EmailJS is not configured yet.')
    }
    await emailjs.send(
      serviceId,
      templateId,
      {
        name: contactForm.value.name,
        email: contactForm.value.email,
        phone: `${contactPhoneCountry.value} ${contactForm.value.phone}`,
        website: contactForm.value.website || 'N/A',
        about: contactForm.value.about,
        interests: contactForm.value.interests.join(', '),
        budget: contactForm.value.budget,
        timeline: contactForm.value.timeline,
        referral: contactForm.value.referral,
        comments: contactForm.value.comments || 'N/A'
      },
      publicKey
    )
    contactStatus.value = 'success'
  } catch (err) {
    console.error('Contact form submission failed:', err)
    contactStatus.value = 'error'
    contactError.value = 'Something went wrong sending your message. Please try again in a moment, or reach out via LinkedIn/GitHub above.'
  }
}

const isMenuOpen = ref(false)
const activeSection = ref('home')
const selectedImage = ref(null)
const isModalOpen = ref(false)

const sections =['trust', 'about', 'skills', 'portfolio', 'process', 'why', 'contact', 'background']

const mobileNavItems = [
  { id: 'about', label: 'About' },
  { id: 'skills', label: 'Skills' },
  { id: 'portfolio', label: 'Work' },
  { id: 'process', label: 'Process' },
  { id: 'contact', label: 'Contact' }
]

const processSteps = [
  { title: 'Audit', body: 'Understand your workflows, problems, and opportunities' },
  { title: 'Map', body: 'Design system logic, flows, and structure' },
  { title: 'Build', body: 'Develop the application: frontend, backend, database, and deployment' },
  { title: 'Refine', body: 'Improve usability and automation logic' },
  { title: 'Support', body: 'Optional ongoing maintenance and support' }
]

const whyClients = [
  'Full-stack: frontend, backend, database, and deployment',
  'Focus on execution — not just ideas',
  'From concept to working, production-ready application',
  'Builds systems that actually reduce workload',
  'Can bring in trusted collaborators for content, design, or admin support if a project needs it'
]

const padStep = (i) => String(i + 1).padStart(2, '0')

const testimonialVideoId = ref('9avGINGorzU')
const testimonialVideoEmbedUrl = computed(() => {
  if (!testimonialVideoId.value) return ''
  return `https://www.youtube.com/embed/${testimonialVideoId.value}?rel=0&modestbranding=1&controls=1&disablekb=1&fs=0`
})

const skillCategories = [
  {
    id: 'full-stack-dev',
    kicker: 'Core stack',
    title: 'Full-Stack Development',
    description: 'The languages, frameworks, and databases I use to build and ship complete applications.',
    tools: [
      { name: 'TypeScript', percentage: 80 },
      { name: 'JavaScript', percentage: 90 },
      { name: 'React / Next.js', percentage: 80 },
      { name: 'Vue', percentage: 90 },
      { name: 'Node.js / Express', percentage: 80 },
      { name: 'PostgreSQL / Prisma', percentage: 75 },
      { name: 'Tailwind CSS', percentage: 90 },
      { name: 'Supabase / Firebase', percentage: 75 }
    ]
  },
  {
    id: 'web-platforms',
    kicker: 'No-code / CMS',
    title: 'Web & Platforms (No-Code)',
    description: 'CMS, funnels, ecommerce, and page builders for fast, maintainable client websites.',
    tools: [
      { name: 'WordPress', percentage: 100 },
      { name: 'Divi', percentage: 100 },
      { name: 'Elementor', percentage: 100 },
      { name: 'Thrive', percentage: 100 },
      { name: 'Shopify', percentage: 80 },
      { name: 'Wix', percentage: 80 },
      { name: 'Squarespace', percentage: 80 },
      { name: 'GoHighLevel', percentage: 80 },
      { name: 'ClickFunnels', percentage: 80 },
      { name: 'Kajabi', percentage: 90 },
      { name: 'Skool', percentage: 80 },
      { name: 'Mailchimp', percentage: 80 }
    ]
  },
  {
    id: 'automation-crm',
    kicker: 'Systems & workflows',
    title: 'Automation & CRM',
    description: 'Workflow tools for lead handling, content operations, and client process automation.',
    tools: [
      { name: 'Make.com', percentage: 80 },
      { name: 'Airtable', percentage: 80 },
      { name: 'Metricool', percentage: 80 },
      { name: 'Meta Business Suite', percentage: 60 }
    ]
  },
  {
    id: 'design-creative',
    kicker: 'Creative production',
    title: 'Design & Creative Tools',
    description: 'Design, video, and content tools for assets that support launches and campaigns.',
    tools: [
      { name: 'Canva', percentage: 100 },
      { name: 'Photoshop', percentage: 80 },
      { name: 'Illustrator', percentage: 80 },
      { name: 'CapCut', percentage: 80 },
      { name: 'Premiere Pro', percentage: 80 }
    ]
  },
  {
    id: 'hosting-management',
    kicker: 'Domains & hosting',
    title: 'Hosting & Management',
    description: 'Hosting, domains, DNS, panels, and site management tools used in real deployments.',
    tools: [
      { name: 'GoDaddy', percentage: 100 },
      { name: 'Namecheap', percentage: 100 },
      { name: 'OVH', percentage: 100 },
      { name: 'cPanel', percentage: 100 },
      { name: 'BlueHost', percentage: 100 }
    ]
  },
  {
    id: 'ai-productivity',
    kicker: 'AI & operations',
    title: 'AI & Productivity',
    description: 'AI and productivity platforms used for planning, drafting, building, and execution.',
    tools: [
      { name: 'ChatGPT', percentage: 100 },
      { name: 'Claude AI', percentage: 100 },
      { name: 'Cursor AI', percentage: 100 },
      { name: 'Google Workspace', percentage: 80 },
      { name: 'Microsoft 365', percentage: 80 }
    ]
  }
]

const activeSkillCategory = ref('full-stack-dev')

const activeSkillCategoryData = computed(() => {
  return skillCategories.find((category) => category.id === activeSkillCategory.value) || skillCategories[0]
})

const activeSkillAverage = computed(() => {
  const tools = activeSkillCategoryData.value.tools
  if (!tools.length) return 0
  const total = tools.reduce((sum, tool) => sum + tool.percentage, 0)
  return Math.round(total / tools.length)
})

const activeProjectCategory = ref('full-stack-apps')

const projectCategories = [
  { id: 'full-stack-apps', label: 'Full-Stack Apps' },
  { id: 'web-development', label: 'Frontend / Web Development' },
  { id: 'wordpress-development', label: 'WordPress Development' }
]

const projects = [
  {
    id: 'ccdi-usa',
    title: 'CCDI USA Website',
    description: 'Full business website migration and rebuild from Showit to Elementor WordPress for a construction consulting firm.',
    categories: ['wordpress-development'],
    images: ['CCDI USA Website.png'],
    tags: ['WordPress Development', 'Elementor', 'Website Migration', 'Responsive Design'],
    url: 'https://ccdiusa.com/',
    techStack: 'Role: WordPress Developer. Rebuilt pages, navigation, and optimized sections in Elementor for a responsive, scalable WordPress website.'
  },
  {
    id: 'joseph-elisha-md',
    title: 'Joseph Elisha MD Website',
    description: 'Figma to Elementor WordPress website for a personal brand focused on podcasting, speaking, and book promotion.',
    categories: ['wordpress-development'],
    images: ['Joseph Elisha MD Website.png'],
    tags: ['WordPress', 'Elementor', 'Responsive Design'],
    url: 'https://josephelishamd.com/',
    techStack: 'WordPress and Elementor website build with responsive UI, fast performance, and scalable content management.'
  },
  {
    id: 'zuqon-dashboard',
    title: 'Zuqon AI',
    description: 'AI-powered content pipeline: scrape topics, rewrite into articles, publish to WordPress, and repurpose for social media.',
    categories: ['full-stack-apps'],
    images: ['zuqon-dashboard.png'],
    tags: ['Full-Stack', 'TypeScript', 'Python', 'AI'],
    url: 'https://zuqon-dashboard.vercel.app/',
    problem: 'Content teams spend hours manually researching topics, writing articles, creating images, publishing to WordPress, and then repurposing everything again for social media.',
    solution: 'Built an end-to-end AI content pipeline: the user inputs a topic, the system scrapes relevant sources from the web, rewrites them into an original article with an AI-generated thumbnail, and schedules/publishes it straight to the user\'s WordPress site. Once posted, it repurposes the article into platform-fit posts for Facebook, Twitter/X, and Instagram — with AI-generated images for the social posts too.',
    outcome: 'One topic input becomes a published article plus ready-to-post social content, cutting a multi-hour manual workflow down to minutes.',
    techStack: 'TypeScript, Python (scraping + AI pipeline), PostgreSQL, WordPress publishing integration, AI article rewriting, AI image generation, social media repurposing'
  },
  {
    id: 'upc-vot-mintal',
    title: 'UPC VOT Mintal',
    description: 'Full-stack church membership management system with role-based access, QR attendance, and reporting.',
    categories: ['full-stack-apps'],
    images: [],
    tags: ['Full-Stack', 'Next.js', 'TypeScript'],
    url: 'https://www.upcvotmintal.com/',
    preview: 'https://s.wordpress.com/mshots/v1/https%3A%2F%2Fwww.upcvotmintal.com%2F?w=1200',
    problem: 'The church had no system to track membership records, attendance, or leadership structure — everything was manual and scattered.',
    solution: 'Next.js 14 (App Router, TypeScript) frontend with Tailwind CSS and shadcn/ui, React Hook Form + Zod for validated forms, and Zustand/Context for state. A Node.js/Express API backed by PostgreSQL via Prisma handles 3 role types (admin, caregroup leader, member) and 3 membership tiers (visitor, transient, bonafide), with JWT auth and NextAuth.js. Attendance is tracked through unique per-member QR codes (generated with QRCode.js, scanned with html5-qrcode), node-cron automates attendance status updates, admins can post a daily Bible verse, and the system generates multiple report types for leadership.',
    outcome: 'Church leadership can now track attendance and membership status accurately and pull reports without manual record-keeping.',
    techStack: 'Next.js 14, TypeScript, Tailwind CSS, shadcn/ui, Node.js/Express, PostgreSQL + Prisma, JWT/NextAuth.js, node-cron, QR generation & scanning'
  },
  {
    id: 'asia-realty',
    title: 'Asia Realty',
    description: 'Property listing concept for discovering high-return real estate opportunities in Asia.',
    categories: ['web-development'],
    images: [],
    tags: ['Frontend Concept', 'Real Estate'],
    url: 'https://realty-property-listing.vercel.app/',
    preview: 'https://s.wordpress.com/mshots/v1/https%3A%2F%2Frealty-property-listing.vercel.app%2F?w=1200',
    techStack: 'Frontend UI concept — listing-focused page architecture, Vercel deployment, no backend.'
  },
  {
    id: 'pawly',
    title: 'Pawly',
    description: 'Pet wellness and clinic website concept with services, team, and trust-focused storytelling.',
    categories: ['web-development'],
    images: [],
    tags: ['Frontend Concept', 'Pet Care'],
    url: 'https://pawly-gold.vercel.app/',
    preview: 'https://s.wordpress.com/mshots/v1/https%3A%2F%2Fpawly-gold.vercel.app%2F?w=1200',
    techStack: 'Frontend UI concept — service-first content blocks, Vercel deployment, no backend.'
  },
  {
    id: 'clarimed',
    title: 'ClariMed',
    description: 'Private medical clinic concept website focused on trust, clarity, and patient-first care.',
    categories: ['web-development'],
    images: [],
    tags: ['Frontend Concept', 'Healthcare'],
    url: 'https://clari-med-kohl.vercel.app/',
    preview: 'https://s.wordpress.com/mshots/v1/https%3A%2F%2Fclari-med-kohl.vercel.app%2F?w=1200',
    techStack: 'Frontend UI concept — reusable section components, Vercel deployment, no backend.'
  },
  {
    id: 'invoice-tracker',
    title: 'Invoice Tracker',
    description: 'Full-stack invoice tracking and generation app for freelancers, with client-facing progress sharing.',
    categories: ['full-stack-apps'],
    images: ['invoice-tracker.png'],
    tags: ['Full-Stack', 'Next.js', 'TypeScript'],
    url: 'https://tracker-invoice-generator.vercel.app/',
    problem: 'Freelancers needed a simple, no-fuss way to track work and generate invoices without juggling spreadsheets or heavyweight billing tools.',
    solution: 'Built with Next.js (App Router, TypeScript) and Prisma against a hosted PostgreSQL database, with hosted email sign-in for auth. Invoices generate automatically from tracked tasks, and work-in-progress tasks can be shared with the client mid-project for transparency.',
    outcome: 'Freelancers go from tracked hours to a sent invoice without leaving one tool.',
    techStack: 'Next.js (App Router), TypeScript, Prisma, hosted PostgreSQL, email sign-in, automatic invoice generation'
  },
  {
    id: 'castbridge',
    title: 'CastBridge',
    description: 'Android phone to Android TV casting app site with direct playback and mirroring fallback.',
    categories: ['web-development'],
    images: [],
    tags: ['Frontend Concept', 'Android'],
    url: 'https://screencast-tau.vercel.app/',
    preview: 'https://s.wordpress.com/mshots/v1/https%3A%2F%2Fscreencast-tau.vercel.app%2F?w=1200',
    techStack: 'Frontend UI concept — responsive layouts, Vercel deployment, no backend.'
  },
  {
    id: 'teeveefy',
    title: 'Teeveefy',
    description: 'Full-stack M3U IPTV playlist player with a leanback-first UI for Android TV.',
    categories: ['full-stack-apps'],
    images: [],
    tags: ['Full-Stack', 'Firebase', 'Android TV'],
    url: 'https://teeveefy-app.vercel.app/',
    preview: 'https://s.wordpress.com/mshots/v1/https%3A%2F%2Fteeveefy-app.vercel.app%2F?w=1200',
    problem: 'Existing M3U IPTV players are clunky for browsing and managing channel lists, especially on TV-first, remote-controlled interfaces.',
    solution: 'Built a Firebase-backed playlist player that saves and syncs channel/playlist data, with a leanback-first UI designed for Android TV navigation and live channel playback.',
    outcome: 'Simple, remote-friendly access to saved IPTV playlists without re-entering M3U URLs every session.',
    techStack: 'Firebase, M3U playlist parsing, leanback UI for Android TV'
  },
  {
    id: 'trading-financial',
    title: 'Trading Financial Markets',
    description: 'Education hub focused on trading strategies for forex, crypto, and global equities.',
    categories: ['wordpress-development'],
    images: ['tradingfinancialmarkets.jpg'],
    tags: ['Education', 'Trading']
  },
  {
    id: 'tomasz-rozmus',
    title: 'Tomasz Rozmus',
    description: 'Expert in stock and crypto markets; advisor on Asian opportunities.',
    categories: ['wordpress-development'],
    images: ['tomaszrozmus.jpg'],
    tags: ['Trading', 'Advisory']
  },
  {
    id: 'nieruchomosci',
    title: 'Nieruchomości w Kambodży',
    description: 'Polish-language platform dedicated to real estate investment opportunities in Cambodia.',
    categories: ['wordpress-development'],
    images: ['nieruchomosciwkambodzy.jpg'],
    tags: ['Real Estate', 'Investment']
  },
  {
    id: 'jv-holdings',
    title: 'JV Holdings Corp',
    description: 'A visionary holding company driving growth through strategic acquisitions.',
    categories: ['wordpress-development'],
    images: ['jvholdingscorp.jpg'],
    tags: ['Holdings', 'Investment']
  },
  {
    id: 'adv-rangers',
    title: 'ADV Rangers',
    description: 'Organizes guided dirt bike tour packages across Cambodia\'s trails and countryside.',
    categories: ['wordpress-development'],
    images: ['advrangers.jpg'],
    tags: ['Adventure Tours', 'Dirt Bikes']
  },
  {
    id: 'asia-offshore',
    title: 'Asia Offshore Banking',
    description: 'Assists with setting up offshore and private bank accounts across Asia.',
    categories: ['wordpress-development'],
    images: ['asiaoffshorebanking.jpg'],
    tags: ['Offshore Banking', 'Financial Services']
  },
  {
    id: 'global-grid',
    title: 'Global Grid Solutions',
    description: 'Delivers digital outsourcing services specializing in BPO and virtual assistance.',
    categories: ['wordpress-development'],
    images: ['globalgridsolutions.jpg'],
    tags: ['BPO', 'Virtual Assistance']
  },
  {
    id: 'kopii-ai',
    title: 'Kopii AI',
    description: 'AI-driven trading platform born in Asia, blending hedge fund expertise with deep learning.',
    categories: ['wordpress-development'],
    images: ['kopii ai.jpg'],
    tags: ['AI Trading', 'Deep Learning'],
    problem: 'Position an AI-assisted trading product with credibility and a clear product story in a crowded market.',
    solution: 'Product-facing site and flows that explain the AI value proposition and drive qualified interest.',
    outcome: 'Tighter narrative from first visit to sign-up for a complex fintech offer.'
  },
  {
    id: 'volume-day-trader-funnel',
    title: 'Volume Day Trader - Sales Funnel',
    description: 'Sales funnel for the Volume Day Trader platform.',
    categories: ['wordpress-development'],
    images: ['volumedaytrader-funnel.jpg'],
    tags: ['Sales Funnel', 'Marketing']
  },
  {
    id: 'volume-day-trader-main',
    title: 'Volume Day Trader',
    description: 'Offers Wyckoff method–based indicators and a community of active day traders.',
    categories: ['wordpress-development'],
    images: ['volumedaytrader.jpg'],
    tags: ['Wyckoff Method', 'Day Trading']
  },
  {
    id: 'trading-signals-old',
    title: 'Trading Signals - Previous Version',
    description: 'Previous version of the Trading Signals platform.',
    categories: ['wordpress-development'],
    images: ['tradingsignals-old.jpg'],
    tags: ['Legacy', 'Trading']
  },
  {
    id: 'trading-signals-funnel',
    title: 'Trading Signals - Sales Funnel',
    description: 'High-converting sales funnel for the Trading Signals platform.',
    categories: ['wordpress-development'],
    images: ['tradingsignals-funnel.jpg'],
    tags: ['Sales Funnel', 'Marketing']
  },
  {
    id: 'trading-signals-main',
    title: 'Trading Signals',
    description: 'Provides trading signals and automated bots for forex, crypto, and stocks markets.',
    categories: ['wordpress-development'],
    images: ['tradingsignals.jpg'],
    tags: ['Forex', 'Crypto', 'Stocks'],
    problem: 'Traders needed one reliable place for signals and market coverage without constant manual follow-up.',
    solution: 'Web platform with structured content, signal delivery flows, and account areas aligned to how users trade.',
    outcome: 'Clearer path from signup to active use of trading content and tools.'
  }
]

const filteredProjects = computed(() => {
  return projects.filter((project) => project.categories?.includes(activeProjectCategory.value))
})

const setActiveCategory = (category) => {
  activeProjectCategory.value = category
}

const getProjectPreviewSrc = (project) => {
  if (project.preview) return project.preview
  return `/img/projects/websites/${project.images[0]}`
}

const getProjectTechStack = (project) => {
  if (project.techStack) return project.techStack
  return 'WordPress CMS, custom theme/page structure, and Elementor-designed sections.'
}

const isWordPressProject = (project) => project.categories?.includes('wordpress-development')

// ---- Animations (GSAP) ----
const heroSectionEl = ref(null)
const heroBlobAEl = ref(null)
const heroBlobBEl = ref(null)
const heroKickerEl = ref(null)
const heroHeadlineEl = ref(null)
const heroSubtextEl = ref(null)
const heroCtasEl = ref(null)
const heroPrimaryCtaEl = ref(null)
const heroFooterEl = ref(null)
const heroBackStack1El = ref(null)
const heroBackStack2El = ref(null)
const skillsToolGridEl = ref(null)
const portfolioGridEl = ref(null)
const siteHeaderEl = ref(null)
const finalCtaEl = ref(null)

const statCounters = reactive({ tools: 0, average: 0 })

const prefersReducedMotion = () =>
  window.matchMedia('(prefers-reduced-motion: reduce)').matches

let gsapMM = null
const cardHoverCleanups = new Map()
const magneticCleanups = []
const projectCardMap = new Map()
const skillBarMap = new Map()

const bindCardHover = (card) => {
  if (!card || cardHoverCleanups.has(card)) return
  const enter = () => gsap.to(card, { y: -6, scale: 1.02, boxShadow: '0 16px 32px -12px rgba(139,92,246,0.35)', duration: 0.25, ease: 'power2.out' })
  const leave = () => gsap.to(card, { y: 0, scale: 1, boxShadow: '0 0px 0px rgba(0,0,0,0)', duration: 0.25, ease: 'power2.out' })
  card.addEventListener('mouseenter', enter)
  card.addEventListener('mouseleave', leave)
  cardHoverCleanups.set(card, () => {
    card.removeEventListener('mouseenter', enter)
    card.removeEventListener('mouseleave', leave)
  })
}

const unbindCardHover = (card) => {
  const cleanup = cardHoverCleanups.get(card)
  if (cleanup) {
    cleanup()
    cardHoverCleanups.delete(card)
  }
}

const setProjectCardRef = (el, id) => {
  if (el) {
    projectCardMap.set(id, el)
    bindCardHover(el)
  } else {
    const existing = projectCardMap.get(id)
    if (existing) unbindCardHover(existing)
    projectCardMap.delete(id)
  }
}

const setSkillBarRef = (el, name, target) => {
  if (el) skillBarMap.set(name, { el, target })
  else skillBarMap.delete(name)
}

const bindMagnetic = (el) => {
  if (!el) return
  const xTo = gsap.quickTo(el, 'x', { duration: 0.4, ease: 'elastic.out(1,0.4)' })
  const yTo = gsap.quickTo(el, 'y', { duration: 0.4, ease: 'elastic.out(1,0.4)' })
  const move = (e) => {
    const r = el.getBoundingClientRect()
    xTo((e.clientX - r.left - r.width / 2) * 0.3)
    yTo((e.clientY - r.top - r.height / 2) * 0.3)
  }
  const reset = () => { xTo(0); yTo(0) }
  el.addEventListener('mousemove', move)
  el.addEventListener('mouseleave', reset)
  magneticCleanups.push(() => {
    el.removeEventListener('mousemove', move)
    el.removeEventListener('mouseleave', reset)
  })
}

const animateSkillBars = () => {
  const instant = prefersReducedMotion()
  skillBarMap.forEach(({ el, target }) => {
    if (instant) gsap.set(el, { scaleX: target / 100 })
    else gsap.to(el, { scaleX: target / 100, duration: 0.9, ease: 'power2.out' })
  })
}

const animateStatCounters = () => {
  const target = { tools: activeSkillCategoryData.value.tools.length, average: activeSkillAverage.value }
  if (prefersReducedMotion()) {
    statCounters.tools = target.tools
    statCounters.average = target.average
    return
  }
  gsap.to(statCounters, { ...target, duration: 0.8, ease: 'power1.out', overwrite: true })
}

const revealPortfolioGrid = () => {
  if (!portfolioGridEl.value) return
  if (prefersReducedMotion()) {
    gsap.set(portfolioGridEl.value.children, { opacity: 1, y: 0 })
    return
  }
  gsap.from(portfolioGridEl.value.children, { opacity: 0, y: 20, duration: 0.5, stagger: 0.06, ease: 'power2.out', overwrite: true })
}

const revealSkillsGrid = () => {
  if (!skillsToolGridEl.value) return
  if (prefersReducedMotion()) {
    gsap.set(skillsToolGridEl.value.children, { opacity: 1, y: 0 })
    return
  }
  gsap.from(skillsToolGridEl.value.children, { opacity: 0, y: 20, duration: 0.5, stagger: 0.05, ease: 'power2.out', overwrite: true })
}

watch(activeProjectCategory, () => {
  nextTick(() => revealPortfolioGrid())
})

watch(activeSkillCategory, () => {
  nextTick(() => {
    revealSkillsGrid()
    animateSkillBars()
    animateStatCounters()
  })
})

const openImageModal = (imagePath) => {
  selectedImage.value = imagePath
  isModalOpen.value = true
}

const closeImageModal = () => {
  selectedImage.value = null
  isModalOpen.value = false
}

const toggleMenu = () => {
  isMenuOpen.value = !isMenuOpen.value
  if (isMenuOpen.value) {
    document.body.style.overflow = 'hidden'
  } else {
    document.body.style.overflow = ''
  }
}

const closeMenu = () => {
  isMenuOpen.value = false
  document.body.style.overflow = ''
}

const checkActiveSection = () => {
  const scrollPosition = window.scrollY + 300 // Offset for better trigger point

  sections.forEach(section => {
    const element = document.getElementById(section)
    if (element) {
      const { top, bottom } = element.getBoundingClientRect()
      if (top <= 300 && bottom >= 300) {
        activeSection.value = section
      }
    }
  })

  if (siteHeaderEl.value) {
    siteHeaderEl.value.classList.toggle('shadow-2xl', window.scrollY > 80)
  }
}

onMounted(() => {
  const mm = gsap.matchMedia()
  gsapMM = mm

  mm.add(
    {
      reduceMotion: '(prefers-reduced-motion: reduce)',
      fullMotion: '(prefers-reduced-motion: no-preference)'
    },
    (context) => {
      const { reduceMotion } = context.conditions

      if (reduceMotion) {
        gsap.set('[data-reveal]', { opacity: 1, y: 0 })
        gsap.utils.toArray('[data-reveal-stagger]').forEach((c) => gsap.set(c.children, { opacity: 1, y: 0 }))
        animateSkillBars()
        animateStatCounters()
        return
      }

      // Generic scroll-reveal system (replaces AOS)
      gsap.utils.toArray('[data-reveal]').forEach((el) => {
        gsap.from(el, {
          opacity: 0, y: 24, duration: 0.6, ease: 'power2.out',
          scrollTrigger: { trigger: el, start: 'top 85%', toggleActions: 'play none none reverse' }
        })
      })
      gsap.utils.toArray('[data-reveal-stagger]').forEach((container) => {
        gsap.from(container.children, {
          opacity: 0, y: 24, duration: 0.5, stagger: 0.06, ease: 'power2.out',
          scrollTrigger: { trigger: container, start: 'top 85%' }
        })
      })

      // Hero entrance
      // Note: the headline contains a bg-clip-text gradient span — SplitText's char-splitting
      // flattens that nested structure and breaks the gradient clip, so it gets a plain
      // fade+y reveal instead of character-stagger (per the documented fallback for this case).
      const tl = gsap.timeline({ defaults: { ease: 'power2.out' } })
      if (heroKickerEl.value) tl.from(heroKickerEl.value, { opacity: 0, y: 12, duration: 0.5 })
      if (heroHeadlineEl.value) {
        tl.from(heroHeadlineEl.value, { opacity: 0, y: 24, duration: 0.7 }, '-=0.2')
      }
      const heroRest = [heroSubtextEl.value, heroCtasEl.value, heroFooterEl.value].filter(Boolean)
      if (heroRest.length) tl.from(heroRest, { opacity: 0, y: 16, duration: 0.6, stagger: 0.12 }, '-=0.2')

      // Ambient background blobs
      ;[heroBlobAEl.value, heroBlobBEl.value].forEach((blob, i) => {
        if (!blob) return
        gsap.to(blob, {
          x: i === 0 ? -20 : 20, y: i === 0 ? 15 : -15, scale: 1.08,
          duration: 6 + i, ease: 'sine.inOut', yoyo: true, repeat: -1
        })
      })

      // Hero mockup parallax
      if (heroSectionEl.value) {
        ;[heroBackStack1El.value, heroBackStack2El.value].filter(Boolean).forEach((layer, i) => {
          gsap.to(layer, {
            yPercent: (i + 1) * -10, ease: 'none',
            scrollTrigger: { trigger: heroSectionEl.value, scrub: 0.5 }
          })
        })
      }

      // Skill bars + stat counters fill once Skills section is scrolled into view
      ScrollTrigger.create({
        trigger: '#skills',
        start: 'top 80%',
        once: true,
        onEnter: () => {
          animateSkillBars()
          animateStatCounters()
        }
      })
    }
  )

  // Magnetic hover works the same regardless of reduced-motion (user-triggered, not autoplay)
  bindMagnetic(heroPrimaryCtaEl.value)
  bindMagnetic(finalCtaEl.value)

  window.addEventListener('scroll', checkActiveSection)
  checkActiveSection() // Initial check
})

onUnmounted(() => {
  window.removeEventListener('scroll', checkActiveSection)
  if (gsapMM) gsapMM.revert()
  cardHoverCleanups.forEach((cleanup) => cleanup())
  cardHoverCleanups.clear()
  magneticCleanups.forEach((cleanup) => cleanup())
  magneticCleanups.length = 0
})

</script>


<style>
/* Global styles — fonts loaded in index.html (Outfit + Plus Jakarta Sans) */
:root {
  scroll-behavior: smooth;
  /* Type scale reference: body 16px · sm 14px · lg 18px · h2 clamp 2xl→4xl · h1 3xl→5xl */
}

html {
  scroll-padding-top: 100px; /* Offset for fixed header */
}

body {
  font-family: 'Plus Jakarta Sans', system-ui, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  overflow-x: hidden;
  width: 100%;
  position: relative;
}

#app {
  overflow-x: hidden;
  width: 100%;
  position: relative;
}

/* Smooth scrolling for browsers that support it */
@media (prefers-reduced-motion: no-preference) {
  :root {
  scroll-behavior: smooth;
  }
}

/* Optional GPU hint */
[data-reveal],
[data-reveal-stagger] > * {
  will-change: transform, opacity;
  backface-visibility: hidden;
  -webkit-font-smoothing: antialiased;
}

/* Grid containers */
.grid {
  max-width: 100%;
  margin-left: auto;
  margin-right: auto;
  width: 100%;
}

/* Prevent text overflow */
p, h1, h2, h3, h4, h5, h6, span {
  max-width: 100%;
  overflow-wrap: break-word;
  word-wrap: break-word;
  word-break: break-word;
}

@keyframes fadeIn {
  from { opacity: 0; transform: translateY(20px); }
  to { opacity: 1; transform: translateY(0); }
}

@keyframes pulse-slow {
  0%, 100% { transform: scale(1); opacity: 1; }
  50% { transform: scale(1.01); opacity: 0.9; }
}

.animate-fadeIn {
  animation: fadeIn 1s ease-in-out forwards;
}

.animate-pulse-slow {
  animation: pulse-slow 4s ease-in-out infinite;
}
</style>


<template>
  <div class="bg-surface-950 text-slate-100 min-h-screen font-sans antialiased selection:bg-brand-500/30 selection:text-white overflow-x-hidden w-full">
    <!-- Header -->
    <header class="sticky top-0 z-50 w-full bg-surface-950/90 border-b border-white/[0.07] backdrop-blur-md" data-aos="fade-down">
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
              href="#services" 
              class="relative py-2 text-slate-300 hover:text-white transition-all duration-300"
              :class="{ 'text-white': activeSection === 'services' }"
            >
              What we build
              <span 
                class="absolute bottom-0 left-0 w-full h-0.5 bg-gradient-to-r from-brand-600 to-fuchsia-500 transform scale-x-0 transition-transform duration-300"
                :class="{ '!scale-x-100': activeSection === 'services' }"
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
              href="#team" 
              class="relative py-2 text-slate-300 hover:text-white transition-all duration-300"
              :class="{ 'text-white': activeSection === 'team' }"
            >
              Team
              <span 
                class="absolute bottom-0 left-0 w-full h-0.5 bg-gradient-to-r from-brand-600 to-fuchsia-500 transform scale-x-0 transition-transform duration-300"
                :class="{ '!scale-x-100': activeSection === 'team' }"
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
            href="#booking"
            class="bg-gradient-to-r from-brand-600 to-fuchsia-500 px-7 py-2.5 rounded-full text-sm font-semibold shadow-md text-white hover:opacity-90 transition-all duration-300 hover:shadow-xl hover:scale-[1.02] active:scale-[0.98]"
          >
            Book a Discovery Call
          </a>
      </nav>

        <!-- Mobile Navigation Button -->
        <div class="flex items-center gap-3 md:hidden">
          <a 
            href="#booking"
            class="bg-gradient-to-r from-brand-600 to-fuchsia-500 px-4 py-2 rounded-full text-sm font-semibold shadow-md text-white hover:opacity-90 transition-all duration-300 active:scale-[0.98]"
          >
            Book a Discovery Call
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
              href="#" 
              class="w-10 h-10 flex items-center justify-center rounded-lg bg-white/5 border border-white/10 hover:bg-white/10 transition-all"
            >
              <svg class="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                <path d="M19 3H5C3.895 3 3 3.895 3 5V19C3 20.105 3.895 21 5 21H19C20.105 21 21 20.105 21 19V5C21 3.895 20.105 3 19 3ZM9 17H6.477V9H9V17ZM7.694 7.717C6.923 7.717 6.408 7.203 6.408 6.517C6.408 5.831 6.922 5.317 7.779 5.317C8.55 5.317 9.065 5.831 9.065 6.517C9.065 7.203 8.551 7.717 7.694 7.717ZM18 17H15.558V12.577C15.558 11.432 14.767 11.077 14.362 11.077C13.957 11.077 13.014 11.315 13.014 12.577C13.014 12.815 13.014 17 13.014 17H10.477V9H13.014V10.017C13.419 9.305 14.249 9 15.478 9C16.707 9 18 9.871 18 12.577V17Z"/>
              </svg>
            </a>
            <a 
              href="#" 
              class="w-10 h-10 flex items-center justify-center rounded-lg bg-white/5 border border-white/10 hover:bg-white/10 transition-all"
            >
              <svg class="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                <path d="M12 2C6.475 2 2 6.475 2 12C2 16.425 4.8625 20.1625 8.8375 21.4875C9.3375 21.575 9.525 21.275 9.525 21.0125C9.525 20.775 9.5125 19.9875 9.5125 19.15C7 19.6125 6.35 18.5375 6.15 17.975C6.0375 17.6875 5.55 16.8 5.125 16.5625C4.775 16.375 4.275 15.9125 5.1125 15.9C5.9 15.8875 6.4625 16.625 6.65 16.925C7.55 18.4375 8.9875 18.0125 9.5625 17.75C9.65 17.1 9.9125 16.6625 10.2 16.4125C7.975 16.1625 5.65 15.3 5.65 11.475C5.65 10.3875 6.0375 9.4875 6.675 8.7875C6.575 8.5375 6.225 7.5125 6.775 6.1375C6.775 6.1375 7.6125 5.875 9.525 7.1625C10.325 6.9375 11.175 6.825 12.025 6.825C12.875 6.825 13.725 6.9375 14.525 7.1625C16.4375 5.8625 17.275 6.1375 17.275 6.1375C17.825 7.5125 17.475 8.5375 17.375 8.7875C18.0125 9.4875 18.4 10.375 18.4 11.475C18.4 15.3125 16.0625 16.1625 13.8375 16.4125C14.2 16.725 14.5125 17.325 14.5125 18.2625C14.5125 19.6 14.5 20.675 14.5 21.0125C14.5 21.275 14.6875 21.5875 15.1875 21.4875C19.1375 20.1625 22 16.4125 22 12C22 6.475 17.525 2 12 2Z"/>
              </svg>
            </a>
          </div>
        </div>
      </div>
    </header>

    <!-- Hero -->
    <section class="relative isolate overflow-hidden">
      <div class="pointer-events-none absolute inset-0 -z-10">
        <div class="absolute -top-24 right-0 h-[420px] w-[420px] rounded-full bg-brand-600/20 blur-[100px]"></div>
        <div class="absolute top-32 -left-20 h-[320px] w-[320px] rounded-full bg-cyan-500/12 blur-[90px]"></div>
        <div class="absolute inset-0 bg-[linear-gradient(to_right,rgba(255,255,255,0.03)_1px,transparent_1px),linear-gradient(to_bottom,rgba(255,255,255,0.03)_1px,transparent_1px)] bg-[size:56px_56px] [mask-image:linear-gradient(to_bottom,transparent,black_12%,black_88%,transparent)] opacity-60"></div>
      </div>
      <div class="flex flex-col lg:flex-row items-start lg:items-center justify-between max-w-7xl mx-auto px-4 sm:px-8 pt-16 pb-14 md:pt-24 md:pb-20 gap-14 lg:gap-16" data-aos="fade-up">
      <div class="max-w-xl lg:max-w-2xl space-y-7 relative z-10">
        <p class="text-xs sm:text-sm font-medium tracking-[0.2em] uppercase text-brand-300/90">AI systems · automation · product implementation</p>
        <h1 class="font-display text-3xl sm:text-4xl lg:text-5xl font-bold tracking-tight text-white leading-[1.08]">
          <span class="text-slate-100">Web development and automation that</span>
          <span class="bg-gradient-to-r from-brand-400 via-fuchsia-400 to-cyan-300 bg-clip-text text-transparent"> move your business forward</span>
          <span class="text-slate-100"> with less friction.</span>
        </h1>
        <p class="text-slate-400 text-base md:text-lg leading-relaxed max-w-xl">
          I help businesses launch high-converting websites, funnels, and workflow systems that turn leads into clients, speed up delivery, and reduce manual work across marketing and operations.
        </p>
        <div class="flex flex-col sm:flex-row gap-3 sm:gap-4 pt-1">
          <a
            href="#booking"
            class="inline-flex items-center justify-center gap-2 px-7 py-3.5 rounded-xl bg-gradient-to-r from-brand-600 to-violet-600 text-white text-sm font-semibold hover:opacity-95 transition-all shadow-lg shadow-indigo-950/30 ring-1 ring-white/10"
          >
            Book a Discovery Call
          </a>
          <a
            href="#portfolio"
            class="inline-flex items-center justify-center gap-2 px-7 py-3.5 rounded-xl border border-white/14 text-white text-sm font-medium hover:bg-white/[0.07] hover:border-white/25 transition-colors"
          >
            View Case Studies
          </a>
        </div>
        <p class="text-sm text-slate-500">Remote · Philippines · <a href="mailto:al.villamero@gmail.com" class="text-slate-400 hover:text-brand-400 transition-colors">al.villamero@gmail.com</a></p>
      </div>

      <!-- System / dashboard mockup (no portrait) -->
      <div class="relative w-full max-w-lg lg:max-w-[min(100%,440px)] mx-auto lg:mx-0 shrink-0 select-none" aria-hidden="true">
        <div class="absolute -inset-4 bg-gradient-to-br from-violet-600/20 via-transparent to-cyan-500/10 rounded-[2rem] blur-2xl"></div>
        <!-- Back stack -->
        <div class="absolute top-6 right-2 w-[88%] h-48 rounded-xl border border-white/[0.07] bg-[#0c1f35] shadow-lg opacity-80"></div>
        <div class="absolute top-3 right-6 w-[82%] h-44 rounded-xl border border-white/[0.08] bg-[#0e2438] shadow-md opacity-90"></div>
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
        <ul class="grid sm:grid-cols-3 gap-6 sm:gap-8 text-base text-slate-300 leading-snug">
          <li class="text-center sm:text-left border-l-0 sm:border-l border-brand-500/25 sm:pl-6 first:sm:border-l-0 first:sm:pl-0">
            Built systems across websites, operations, and automation workflows
          </li>
          <li class="text-center sm:text-left border-l-0 sm:border-l border-brand-500/25 sm:pl-6">
            End-to-end execution from idea to implementation
          </li>
          <li class="text-center sm:text-left border-l-0 sm:border-l border-brand-500/25 sm:pl-6">
            Supporting founders, teams, and growing businesses
          </li>
        </ul>
      </div>
    </section>

    <!-- About -->
    <section id="about" class="py-20 md:py-28 px-6 sm:px-8 max-w-6xl mx-auto relative scroll-mt-28" data-aos="fade-up">
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
            Web developer and growth partner for businesses that need <span class="bg-gradient-to-r from-brand-400 to-fuchsia-400 bg-clip-text text-transparent">repeatable execution</span>
          </h2>
          <p class="text-slate-400 text-base leading-relaxed">
            I&apos;m Alvin, a web developer from Davao City who works with founders, coaches, and teams worldwide. I combine modern web builds, no-code platforms, automation, and AI tools to turn your digital ideas into systems that actually drive results.
          </p>
          <p class="text-slate-500 text-sm leading-relaxed">
            I deliver websites, funnels, dashboards, and automation stacks that are secure, easy to maintain, and built for real usage — not just polished demos. This means faster launches, smoother operations, and more predictable growth.
          </p>
          <div class="flex flex-wrap gap-3 pt-2">
            <a
              href="#booking"
              class="inline-flex items-center justify-center px-6 py-3 rounded-xl bg-gradient-to-r from-brand-600 to-violet-600 text-white text-sm font-semibold hover:opacity-95 transition-opacity shadow-lg shadow-indigo-950/20"
            >
              Book a Discovery Call
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
    <section id="skills" class="relative py-24 md:py-32 px-6 sm:px-8 max-w-6xl mx-auto border-t border-white/[0.06] overflow-visible" data-aos="fade-up">
      <div class="max-w-3xl mb-10 md:mb-12">
        <p class="text-xs font-semibold uppercase tracking-[0.2em] text-brand-300/80 mb-3">Tools & proficiency</p>
        <h2 class="font-display text-2xl sm:text-3xl md:text-4xl font-bold text-white tracking-tight mb-5">Platforms, tools, and technical stack</h2>
        <p class="text-slate-400 text-base leading-relaxed">
          A practical view of the tools I use to build websites, funnels, automations, content systems, and custom web products.
        </p>
      </div>

      <div class="grid lg:grid-cols-3 gap-5 md:gap-6">
        <article
          v-for="category in skillCategories"
          :key="category.id"
          class="rounded-2xl border border-white/[0.08] bg-white/[0.03] p-6 md:p-7"
          :class="{ 'lg:col-span-2': category.id === 'web-platforms' }"
        >
          <div class="flex flex-col gap-3 mb-5">
            <p class="text-[11px] font-semibold uppercase tracking-[0.18em] text-brand-300/70">{{ category.kicker }}</p>
            <div>
              <h3 class="text-lg md:text-xl font-semibold text-white leading-tight">{{ category.title }}</h3>
              <p class="mt-2 text-sm text-slate-400 leading-relaxed">{{ category.description }}</p>
            </div>
          </div>

          <div class="flex flex-wrap gap-2.5">
            <span
              v-for="tool in category.tools"
              :key="tool.name"
              class="inline-flex items-center gap-2 rounded-lg border px-3 py-2 text-sm"
              :class="tool.percentage === 100 ? 'border-brand-400/25 bg-brand-500/10 text-slate-100' : 'border-white/[0.08] bg-slate-950/70 text-slate-300'"
            >
              <span>{{ tool.name }}</span>
              <span
                class="text-[10px] font-semibold uppercase tracking-wide"
                :class="tool.percentage === 100 ? 'text-brand-300' : 'text-slate-500'"
              >
                {{ tool.percentage === 100 ? 'Primary' : 'Strong' }}
              </span>
            </span>
          </div>
        </article>

        <article class="rounded-2xl border border-white/[0.08] bg-white/[0.03] p-6 md:p-7 lg:col-span-3">
          <div class="grid lg:grid-cols-[0.8fr_2fr] gap-6 lg:gap-10">
            <div>
              <p class="text-[11px] font-semibold uppercase tracking-[0.18em] text-brand-300/70 mb-3">Tech stack</p>
              <h3 class="text-lg md:text-xl font-semibold text-white leading-tight">Development stack</h3>
              <p class="mt-2 text-sm text-slate-400 leading-relaxed">Core technologies I use for product, web app, and system builds.</p>
            </div>

            <div class="grid md:grid-cols-3 gap-5">
              <div v-for="group in developmentStack" :key="group.title">
                <p class="text-xs font-semibold text-slate-300 mb-3">{{ group.title }}</p>
                <div class="flex flex-wrap gap-2">
                  <span
                    v-for="tool in group.tools"
                    :key="tool"
                    class="rounded-lg bg-slate-950/80 border border-white/[0.08] px-3 py-2 text-xs text-slate-200"
                  >
                    {{ tool }}
                  </span>
                </div>
              </div>
            </div>
          </div>
        </article>
      </div>
    </section>

    <!-- Services -->
    <section id="services" class="py-24 md:py-32 px-6 sm:px-8 max-w-6xl mx-auto relative" data-aos="fade-up">
      <div class="relative">
        <div class="max-w-3xl mb-12 md:mb-14">
          <h2 class="font-display text-2xl sm:text-3xl md:text-4xl font-bold text-white mb-4 tracking-tight">What I Help Businesses Build</h2>
        </div>

        <div class="grid md:grid-cols-3 gap-5 md:gap-6">
          <div class="rounded-2xl border border-white/[0.08] bg-white/[0.03] p-6 md:p-8 flex flex-col">
            <h3 class="text-lg md:text-xl font-semibold text-white mb-3">AI-Powered Systems</h3>
            <p class="text-sm text-slate-400 leading-relaxed flex-grow">Custom workflows, internal tools, dashboards, and automation systems designed around how your business actually operates.</p>
          </div>
          <div class="rounded-2xl border border-white/[0.08] bg-white/[0.03] p-6 md:p-8 flex flex-col">
            <h3 class="text-lg md:text-xl font-semibold text-white mb-3">AI Chatbots</h3>
            <p class="text-sm text-slate-400 leading-relaxed flex-grow">Smart conversational systems for lead capture, support, inquiries, and internal assistance — connected to your business logic.</p>
          </div>
          <div class="rounded-2xl border border-white/[0.08] bg-white/[0.03] p-6 md:p-8 flex flex-col">
            <h3 class="text-lg md:text-xl font-semibold text-white mb-3">AI Concepts → Product</h3>
            <p class="text-sm text-slate-400 leading-relaxed flex-grow">From raw idea to structured product, interface, and working MVP — built with an AI-first approach.</p>
          </div>
        </div>
      </div>
    </section>

    <!-- Problems / conversion -->
    <section id="problems" class="py-20 md:py-28 px-6 sm:px-8 max-w-6xl mx-auto border-t border-white/[0.06]" data-aos="fade-up">
      <div class="max-w-3xl mb-10 md:mb-12">
        <h2 class="font-display text-2xl sm:text-3xl md:text-4xl font-bold text-white mb-3 tracking-tight">Where Most Businesses Get Stuck</h2>
      </div>
      <div class="grid sm:grid-cols-2 gap-5 md:gap-6">
        <article
          v-for="item in businessStuck"
          :key="item.title"
          class="rounded-2xl border border-white/[0.08] bg-black/20 p-6 md:p-7 flex flex-col gap-4"
        >
          <h3 class="text-base font-semibold text-white leading-snug">{{ item.title }}</h3>
          <p class="text-sm text-slate-500 leading-relaxed">{{ item.pain }}</p>
          <p class="text-sm text-slate-300 leading-relaxed pt-2 border-t border-white/[0.06]">
            <span class="text-brand-400/90 mr-1.5">→</span>{{ item.fix }}
          </p>
        </article>
      </div>
    </section>

    <!-- Portfolio / case studies -->
    <section id="portfolio" class="py-24 md:py-32 px-6 sm:px-8 max-w-6xl mx-auto relative" data-aos="fade-up">
      <div class="relative">
        <div class="max-w-3xl mb-12 md:mb-14">
          <h2 class="font-display text-2xl sm:text-3xl md:text-4xl font-bold text-white mb-4 tracking-tight">Selected Work</h2>
          <p class="text-slate-400 text-base md:text-lg leading-relaxed">
            Case-style snapshots with what was needed, what shipped, and the outcome—plus repos and live demos. Replace placeholders with your finalized client stories.
          </p>
        </div>

        <!-- Example case format (replace with a real project when ready) -->
        <div class="mb-14 md:mb-16 rounded-2xl border border-dashed border-brand-500/25 bg-brand-950/10 p-6 md:p-8">
          <p class="text-[11px] font-semibold uppercase tracking-[0.18em] text-brand-300/70 mb-4">Sample case structure</p>
          <h3 class="text-lg md:text-xl font-semibold text-white mb-5">AI Lead Handling System for Service Business</h3>
          <dl class="space-y-3 text-sm">
            <div>
              <dt class="text-slate-500 font-medium mb-0.5">What was needed</dt>
              <dd class="text-slate-300">Faster response and structured inquiry handling</dd>
            </div>
            <div>
              <dt class="text-slate-500 font-medium mb-0.5">What I built</dt>
              <dd class="text-slate-300">Chatbot + intake flow + admin routing system</dd>
            </div>
            <div>
              <dt class="text-slate-500 font-medium mb-0.5">Outcome</dt>
              <dd class="text-slate-300">Clearer lead flow and reduced manual handling</dd>
            </div>
          </dl>
        </div>

        <!-- Recent code -->
        <div class="mb-16 md:mb-20">
          <div class="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4 mb-8">
            <div>
              <h3 class="text-lg md:text-xl font-semibold text-white mb-1">Recent code</h3>
              <p class="text-sm text-slate-400 max-w-xl">Public source and live demos—updated as new work ships.</p>
            </div>
            <a
              href="https://github.com/alvinvillamero"
              target="_blank"
              rel="noopener noreferrer"
              class="inline-flex items-center justify-center gap-2 px-5 py-2.5 rounded-lg bg-white/5 border border-white/10 text-sm font-medium text-white hover:bg-white/10 hover:border-fuchsia-500/25 transition-all shrink-0"
            >
              <svg class="w-5 h-5" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                <path fill-rule="evenodd" d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.203 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.942.359.31.678.921.678 1.856 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z" clip-rule="evenodd"/>
              </svg>
              View profile
            </a>
          </div>
          <div class="grid sm:grid-cols-2 gap-4 sm:gap-6">
            <div
              v-for="repo in githubProjects"
              :key="repo.id"
              class="group relative bg-white/5 rounded-xl border border-white/10 p-5 sm:p-6 hover:border-fuchsia-500/25 transition-all duration-300 flex flex-col"
            >
              <div class="flex items-start justify-between gap-3 mb-3">
                <h4 class="text-base md:text-lg font-semibold text-white group-hover:text-fuchsia-400 transition-colors pr-2">{{ repo.title }}</h4>
              </div>
              <p class="text-sm text-slate-400 mb-5 flex-grow">{{ repo.description }}</p>
              <div class="flex flex-wrap gap-3">
                <a
                  :href="repo.githubUrl"
                  target="_blank"
                  rel="noopener noreferrer"
                  class="inline-flex items-center gap-1.5 text-sm font-medium text-fuchsia-400 hover:text-fuchsia-300 transition-colors"
                >
                  View source
                  <svg class="w-4 h-4" fill="currentColor" viewBox="0 0 20 20"><path fill-rule="evenodd" d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z" clip-rule="evenodd"/></svg>
                </a>
                <a
                  v-if="repo.homepage"
                  :href="repo.homepage"
                  target="_blank"
                  rel="noopener noreferrer"
                  class="inline-flex items-center gap-1.5 text-sm font-medium text-white hover:text-fuchsia-400 transition-colors"
                >
                  Live demo
                  <svg class="w-4 h-4 text-fuchsia-400/80" fill="currentColor" viewBox="0 0 20 20"><path fill-rule="evenodd" d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z" clip-rule="evenodd"/></svg>
                </a>
              </div>
            </div>
          </div>
        </div>

        <h3 class="text-lg md:text-xl font-semibold text-slate-200 text-left mb-6">Client &amp; product builds</h3>

        <!-- Project Categories -->
        <div class="flex flex-col items-center gap-6 mb-12">
          <div class="flex flex-wrap justify-center gap-3">
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
          
          <a 
            href="https://drive.google.com/drive/folders/1WaEBY9yw_RxpQrTHA3QmRkfUxh44b0Wg" 
            target="_blank" 
            rel="noopener noreferrer" 
            class="group flex items-center gap-3 px-6 py-3 bg-white/5 border border-white/10 rounded-xl text-base font-medium text-white hover:bg-white/10 hover:border-fuchsia-500/25 transition-all duration-300"
          >
            <span>View More Projects</span>
            <svg 
              class="w-5 h-5 text-fuchsia-400 group-hover:translate-x-1 transition-transform" 
              fill="currentColor" 
              viewBox="0 0 20 20"
            >
              <path fill-rule="evenodd" d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z" clip-rule="evenodd"/>
            </svg>
          </a>
        </div>

        <!-- Projects Grid -->
        <div class="grid sm:grid-cols-2 gap-4 sm:gap-6 md:gap-8 max-w-full">
          <div
            v-for="(project, index) in filteredProjects"
            :key="project.id"
            data-aos="fade-up"
            :data-aos-delay="80 + ((index % 4) * 80)"
            data-aos-duration="700"
            class="group relative bg-white/5 rounded-xl border border-white/10 overflow-hidden hover:border-fuchsia-500/25 transition-all duration-500 transform-gpu hover:-translate-y-1.5 hover:shadow-[0_16px_40px_-20px_rgba(217,70,239,0.45)]"
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
    <section id="process" class="py-24 md:py-32 px-6 sm:px-8 max-w-6xl mx-auto border-t border-white/[0.06]" data-aos="fade-up">
      <div class="max-w-3xl mb-12">
        <h2 class="font-display text-2xl sm:text-3xl md:text-4xl font-bold text-white mb-4 tracking-tight">How I Work</h2>
      </div>
      <ol class="grid sm:grid-cols-2 lg:grid-cols-5 gap-4 md:gap-5 list-none p-0 m-0">
        <li v-for="(step, i) in processSteps" :key="step.title" class="rounded-2xl border border-white/[0.08] bg-white/[0.02] p-5 md:p-6 flex flex-col gap-3">
          <span class="text-xl font-bold text-brand-500/90 tabular-nums">{{ padStep(i) }}</span>
          <div>
            <h3 class="text-base font-semibold text-white mb-1.5">{{ step.title }}</h3>
            <p class="text-sm text-slate-400 leading-relaxed">{{ step.body }}</p>
          </div>
        </li>
      </ol>
    </section>

    <!-- Team -->
    <section id="team" class="py-24 md:py-32 px-6 sm:px-8 max-w-6xl mx-auto" data-aos="fade-up">
      <div class="max-w-3xl mb-10">
        <h2 class="font-display text-2xl sm:text-3xl md:text-4xl font-bold text-white mb-4 tracking-tight">When You Need More Than Systems</h2>
        <p class="text-slate-400 text-base md:text-lg leading-relaxed">
          For projects that require ongoing execution beyond AI systems, I also work with a team that supports content, design, editing, and admin operations.
        </p>
        <p class="text-xs text-slate-600 mt-4 uppercase tracking-wider">Support layer — not the main offer</p>
      </div>
      <div class="flex flex-wrap gap-3">
        <span v-for="t in executionTeamTags" :key="t" class="px-4 py-2 rounded-full text-sm border border-white/10 text-slate-300 bg-black/20">{{ t }}</span>
      </div>
    </section>

    <!-- Why work with me -->
    <section id="why" class="py-20 md:py-24 px-6 sm:px-8 max-w-6xl mx-auto border-t border-white/[0.06]" data-aos="fade-up">
      <div class="max-w-3xl mb-8">
        <h2 class="font-display text-2xl sm:text-3xl md:text-4xl font-bold text-white mb-2 tracking-tight">Why Clients Work With Me</h2>
      </div>
      <ul class="space-y-3 max-w-2xl">
        <li v-for="line in whyClients" :key="line" class="flex gap-3 text-sm md:text-base text-slate-300 leading-relaxed">
          <span class="text-brand-400 shrink-0 mt-1">·</span>
          <span>{{ line }}</span>
        </li>
      </ul>
    </section>

    <!-- Testimonials -->
    <section id="testimonials" class="py-20 px-6 sm:px-8 max-w-6xl mx-auto border-t border-white/[0.06]" data-aos="fade-up">
      <div class="max-w-4xl mx-auto">
        <div class="mb-8">
          <p class="text-xs font-semibold uppercase tracking-[0.2em] text-brand-300/80 mb-3">Client stories</p>
          <h2 class="font-display text-2xl sm:text-3xl md:text-4xl font-bold text-white">Video testimonial</h2>
        </div>

        <div class="rounded-3xl overflow-hidden border border-white/[0.08] bg-black/70">
          <div class="relative aspect-video bg-slate-950">
            <iframe
              :src="testimonialVideoEmbedUrl"
              title="Testimonial video — Ben Traub"
              class="absolute inset-0 h-full w-full"
              frameborder="0"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowfullscreen
            ></iframe>
          </div>
          <div class="px-6 py-5 border-t border-white/[0.08] bg-black/80">
            <p class="text-sm text-slate-200 font-semibold">Ben Traub — CEO, Student Marketing Academy</p>
            <p class="text-xs text-slate-500 mt-2">Social media manager for content calendar, captions, and graphics — Feb 2024 to Nov 2025.</p>
          </div>
        </div>
      </div>
    </section>

    <!-- Final CTA -->
    <section class="py-16 md:py-20 px-6 sm:px-8 max-w-6xl mx-auto" data-aos="fade-up">
      <div class="rounded-3xl border border-brand-500/25 bg-gradient-to-br from-brand-950/40 to-surface-950 px-8 py-12 md:px-12 md:py-14 text-center">
        <h2 class="font-display text-2xl sm:text-3xl md:text-4xl font-bold text-white mb-4 max-w-2xl mx-auto leading-snug">Need an AI system, chatbot, or product built for your business?</h2>
        <p class="text-slate-400 max-w-xl mx-auto mb-8 text-sm md:text-base">Let's map out what you actually need and turn it into something real.</p>
        <div class="flex flex-col sm:flex-row items-center justify-center gap-3 sm:gap-4">
          <a href="#booking" class="inline-flex items-center justify-center px-8 py-3.5 rounded-lg bg-gradient-to-r from-brand-600 to-violet-600 text-white text-sm font-semibold hover:opacity-95 transition-opacity">Book a Discovery Call</a>
          <a href="#contact" class="inline-flex items-center justify-center px-8 py-3.5 rounded-lg border border-white/15 text-white text-sm font-medium hover:bg-white/[0.06] transition-colors">Contact Details</a>
        </div>
      </div>
    </section>

    <!-- Background -->
    <section id="background" class="py-20 md:py-28 px-6 sm:px-8 max-w-6xl mx-auto border-t border-white/[0.06]" data-aos="fade-up">
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
            Modern front-end and back-end stacks, APIs and integrations, cloud hosting, workflow automation, and AI-assisted delivery—plus creative and marketing support when the extended team is involved.
          </p>
          <p class="text-xs text-slate-600">Tune this list as your positioning and case studies mature.</p>
        </div>
      </div>
    </section>


    <!-- Contact -->
    <section id="contact" class="py-16 sm:py-24 md:py-32 px-4 sm:px-8 max-w-6xl mx-auto relative scroll-mt-28">
      <div class="absolute inset-0 bg-gradient-to-b from-transparent via-[#8000FF]/5 to-transparent pointer-events-none"></div>
      
      <div class="relative">
        <!-- Booking -->
        <div id="booking" class="scroll-mt-28 mb-16 md:mb-24">
          <div class="text-center max-w-2xl mx-auto mb-8 sm:mb-10">
            <h2 class="font-display text-2xl sm:text-3xl md:text-4xl font-bold text-white mb-3">Book a discovery call</h2>
            <p class="text-slate-400 text-base leading-relaxed">Choose a 30-minute slot. You&apos;ll receive a calendar invite after you book—the same link as the header &quot;Book a Discovery Call&quot; button.</p>
          </div>
          <div
            ref="calendlyEl"
            class="calendly-widget-host w-full min-w-[320px] rounded-2xl overflow-hidden border border-white/10 bg-white shadow-xl shadow-black/20"
            style="height: 700px; min-height: 700px;"
          ></div>
        </div>

        <div class="flex flex-col items-center text-center mb-10 sm:mb-14 pt-4 border-t border-white/[0.06]">
          <h2 class="font-display text-2xl sm:text-3xl md:text-4xl font-bold text-slate-100 mb-3 sm:mb-4">Start a project conversation</h2>
          <p class="text-slate-400 max-w-2xl text-base leading-relaxed">Book directly through Calendly or reach me via the contact options below for a fast next step.</p>
        </div>

        <div class="max-w-3xl mx-auto">
          <!-- Contact Info -->
          <div class="space-y-6">
            <!-- Email Card -->
            <div class="group bg-white/5 p-6 rounded-xl border border-white/10 hover:border-fuchsia-500/25 transition-all duration-300">
              <div class="flex items-start gap-6">
                <div class="bg-gradient-to-br from-brand-600 to-fuchsia-500 px-2 py-1.5 rounded-lg group-hover:scale-110 transition-transform">
                  <svg class="w-5 h-5 text-white" fill="currentColor" viewBox="0 0 20 20">
                    <path d="M2.003 5.884L10 9.882l7.997-3.998A2 2 0 0016 4H4a2 2 0 00-1.997 1.884z"/>
                    <path d="M18 8.118l-8 4-8-4V14a2 2 0 002 2h12a2 2 0 002-2V8.118z"/>
                  </svg>
                </div>
                <div>
                  <h3 class="text-lg font-semibold text-white mb-2 group-hover:text-fuchsia-400 transition-colors">Email</h3>
                  <a href="mailto:al.villamero@gmail.com" class="text-slate-400 hover:text-fuchsia-400 transition-colors flex items-center gap-2">
                    al.villamero@gmail.com
                    <svg class="w-4 h-4 text-fuchsia-400 group-hover:translate-x-1 transition-transform" fill="currentColor" viewBox="0 0 20 20">
                      <path fill-rule="evenodd" d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z" clip-rule="evenodd"/>
                    </svg>
                  </a>
                </div>
              </div>
            </div>

            <!-- Phone Card -->
            <div class="group bg-white/5 p-6 rounded-xl border border-white/10 hover:border-fuchsia-500/25 transition-all duration-300">
              <div class="flex items-start gap-6">
                <div class="bg-gradient-to-br from-brand-600 to-fuchsia-500 px-2 py-1.5 rounded-lg group-hover:scale-110 transition-transform">
                  <svg class="w-5 h-5 text-white" fill="currentColor" viewBox="0 0 20 20">
                    <path d="M2 3a1 1 0 011-1h2.153a1 1 0 01.986.836l.74 4.435a1 1 0 01-.54 1.06l-1.548.773a11.037 11.037 0 006.105 6.105l.774-1.548a1 1 0 011.059-.54l4.435.74a1 1 0 01.836.986V17a1 1 0 01-1 1h-2C7.82 18 2 12.18 2 5V3z"/>
                  </svg>
                </div>
                <div>
                  <h3 class="text-lg font-semibold text-white mb-2 group-hover:text-fuchsia-400 transition-colors">Phone</h3>
                  <a href="tel:+639312004316" class="text-slate-400 hover:text-fuchsia-400 transition-colors flex items-center gap-2">
                    +63 931 200 4316
                    <svg class="w-4 h-4 text-fuchsia-400 group-hover:translate-x-1 transition-transform" fill="currentColor" viewBox="0 0 20 20">
                      <path fill-rule="evenodd" d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z" clip-rule="evenodd"/>
                    </svg>
                  </a>
                </div>
              </div>
            </div>

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
                  <h3 class="text-lg font-semibold text-white mb-2 group-hover:text-fuchsia-400 transition-colors">Social Media</h3>
                  <div class="flex items-center gap-4">
                    <a href="#" class="text-slate-400 hover:text-fuchsia-400 transition-colors">
                      <svg class="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                        <path d="M19 3H5C3.895 3 3 3.895 3 5V19C3 20.105 3.895 21 5 21H19C20.105 21 21 20.105 21 19V5C21 3.895 20.105 3 19 3ZM9 17H6.477V9H9V17ZM7.694 7.717C6.923 7.717 6.408 7.203 6.408 6.517C6.408 5.831 6.922 5.317 7.779 5.317C8.55 5.317 9.065 5.831 9.065 6.517C9.065 7.203 8.551 7.717 7.694 7.717ZM18 17H15.558V12.577C15.558 11.432 14.767 11.077 14.362 11.077C13.957 11.077 13.014 11.315 13.014 12.577C13.014 12.815 13.014 17 13.014 17H10.477V9H13.014V10.017C13.419 9.305 14.249 9 15.478 9C16.707 9 18 9.871 18 12.577V17Z"/>
                      </svg>
                    </a>
                    <a href="#" class="text-slate-400 hover:text-fuchsia-400 transition-colors">
                      <svg class="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                        <path d="M12 2C6.475 2 2 6.475 2 12C2 16.425 4.8625 20.1625 8.8375 21.4875C9.3375 21.575 9.525 21.275 9.525 21.0125C9.525 20.775 9.5125 19.9875 9.5125 19.15C7 19.6125 6.35 18.5375 6.15 17.975C6.0375 17.6875 5.55 16.8 5.125 16.5625C4.775 16.375 4.275 15.9125 5.1125 15.9C5.9 15.8875 6.4625 16.625 6.65 16.925C7.55 18.4375 8.9875 18.0125 9.5625 17.75C9.65 17.1 9.9125 16.6625 10.2 16.4125C7.975 16.1625 5.65 15.3 5.65 11.475C5.65 10.3875 6.0375 9.4875 6.675 8.7875C6.575 8.5375 6.225 7.5125 6.775 6.1375C6.775 6.1375 7.6125 5.875 9.525 7.1625C10.325 6.9375 11.175 6.825 12.025 6.825C12.875 6.825 13.725 6.9375 14.525 7.1625C16.4375 5.8625 17.275 6.1375 17.275 6.1375C17.825 7.5125 17.475 8.5375 17.375 8.7875C18.0125 9.4875 18.4 10.375 18.4 11.475C18.4 15.3125 16.0625 16.1625 13.8375 16.4125C14.2 16.725 14.5125 17.325 14.5125 18.2625C14.5125 19.6 14.5 20.675 14.5 21.0125C14.5 21.275 14.6875 21.5875 15.1875 21.4875C19.1375 20.1625 22 16.4125 22 12C22 6.475 17.525 2 12 2Z"/>
                      </svg>
                    </a>
                  </div>
                </div>
              </div>
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
          <a href="mailto:al.villamero@gmail.com" class="hover:text-brand-300 transition-colors">al.villamero@gmail.com</a>
          <a href="#contact" class="hover:text-brand-300 transition-colors">Contact</a>
          <a href="#booking" class="hover:text-brand-300 transition-colors">Book a call</a>
        </div>
        <nav class="flex flex-wrap gap-x-5 gap-y-2" aria-label="Footer">
          <a href="#about" class="hover:text-slate-300 transition-colors">About</a>
          <a href="#services" class="hover:text-slate-300 transition-colors">What we build</a>
          <a href="#portfolio" class="hover:text-slate-300 transition-colors">Work</a>
          <a href="#process" class="hover:text-slate-300 transition-colors">Process</a>
          <a href="#team" class="hover:text-slate-300 transition-colors">Team</a>
          <a href="#booking" class="hover:text-slate-300 transition-colors">Calendar</a>
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
import AOS from 'aos'
import 'aos/dist/aos.css'
import { onMounted, onUnmounted, ref, computed, nextTick } from 'vue'

const CALENDLY_URL = 'https://calendly.com/al-villamero/30min'

const isMenuOpen = ref(false)
const activeSection = ref('home')
const selectedImage = ref(null)
const isModalOpen = ref(false)
const calendlyEl = ref(null)
const calendlyReady = ref(false)

const sections = ['trust', 'about', 'skills', 'services', 'problems', 'portfolio', 'process', 'team', 'why', 'contact', 'background']

const mobileNavItems = [
  { id: 'about', label: 'About' },
  { id: 'skills', label: 'Skills' },
  { id: 'services', label: 'What we build' },
  { id: 'portfolio', label: 'Work' },
  { id: 'process', label: 'Process' },
  { id: 'team', label: 'Team' },
  { id: 'contact', label: 'Contact' }
]

const businessStuck = [
  {
    title: 'Too many repetitive tasks',
    pain: 'Manual processes slow everything down and waste time.',
    fix: 'I build automation systems that remove repetitive work.'
  },
  {
    title: 'Leads and inquiries are messy',
    pain: 'No structure, slow response, missed opportunities.',
    fix: 'I design chatbot + workflow systems to handle and route leads properly.'
  },
  {
    title: 'You have an AI idea but no execution',
    pain: 'Concepts stay ideas without a system behind them.',
    fix: 'I turn ideas into working tools, products, and systems.'
  },
  {
    title: 'Your tools don\'t connect',
    pain: 'Everything is scattered across platforms.',
    fix: 'I create structured systems that connect workflows and simplify operations.'
  }
]

const processSteps = [
  { title: 'Audit', body: 'Understand your workflows, problems, and opportunities' },
  { title: 'Map', body: 'Design system logic, flows, and structure' },
  { title: 'Build', body: 'Develop chatbot, system, or product' },
  { title: 'Refine', body: 'Improve usability and automation logic' },
  { title: 'Support', body: 'Optional ongoing execution and team support' }
]

const whyClients = [
  'Combines AI, systems, and real business operations',
  'Focus on execution — not just ideas',
  'From concept to working solution',
  'Builds systems that actually reduce workload',
  'Supported by a team when needed'
]

const padStep = (i) => String(i + 1).padStart(2, '0')

const executionTeamTags = [
  'Social media management',
  'Video editing',
  'Graphic design',
  'Admin & operations support'
]

const testimonialVideoId = ref('9avGINGorzU')
const testimonialVideoEmbedUrl = computed(() => {
  if (!testimonialVideoId.value) return ''
  return `https://www.youtube.com/embed/${testimonialVideoId.value}?rel=0&modestbranding=1&controls=1&disablekb=1&fs=0`
})

const skillCategories = [
  {
    id: 'web-platforms',
    kicker: 'Website builders',
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

const developmentStack = [
  {
    title: 'Frontend',
    tools: ['Vue', 'React', 'JavaScript', 'Tailwind CSS', 'HTML', 'CSS']
  },
  {
    title: 'Backend',
    tools: ['Node.js', 'Java', 'PHP', 'C#']
  },
  {
    title: 'Database & APIs',
    tools: ['PostgreSQL', 'MySQL', 'Firebase', 'Supabase']
  }
]

const activeProjectCategory = ref('featured-projects')

const projectCategories = [
  { id: 'featured-projects', label: 'Featured Projects' },
  { id: 'web-development', label: 'Web Development' },
  { id: 'wordpress-development', label: 'WordPress Development' }
]

const githubProjects = [
  {
    id: 'church-management-portfolio',
    title: 'Church Management System (showcase)',
    description: 'Showcase site for a church management system—source and live deployment in the repository.',
    githubUrl: 'https://github.com/alvinvillamero/church-management-portfolio',
    homepage: 'https://church-management-portfolio.vercel.app'
  },
  {
    id: 'alvin-portfolio',
    title: 'This portfolio',
    description: 'This marketing site—full source and deployment configuration in the repository.',
    githubUrl: 'https://github.com/alvinvillamero/alvin-portfolio',
    homepage: 'https://my-portfolio-liart-iota-44.vercel.app'
  }
]

const projects = [
  {
    id: 'ccdi-usa',
    title: 'CCDI USA Website',
    description: 'Full business website migration and rebuild from Showit to Elementor WordPress for a construction consulting firm.',
    categories: ['featured-projects', 'wordpress-development'],
    images: ['CCDI USA Website.png'],
    tags: ['WordPress Development', 'Elementor', 'Website Migration', 'Responsive Design'],
    url: 'https://ccdiusa.com/',
    techStack: 'Role: WordPress Developer. Rebuilt pages, navigation, and optimized sections in Elementor for a responsive, scalable WordPress website.'
  },
  {
    id: 'joseph-elisha-md',
    title: 'Joseph Elisha MD Website',
    description: 'Figma to Elementor WordPress website for a personal brand focused on podcasting, speaking, and book promotion.',
    categories: ['featured-projects', 'wordpress-development'],
    images: ['Joseph Elisha MD Website.png'],
    tags: ['WordPress', 'Elementor', 'Responsive Design'],
    url: 'https://josephelishamd.com/',
    techStack: 'WordPress and Elementor website build with responsive UI, fast performance, and scalable content management.'
  },
  {
    id: 'upc-vot-mintal',
    title: 'UPC VOT Mintal',
    description: 'Church membership QR code system landing page and login entrypoint.',
    categories: ['featured-projects', 'web-development'],
    images: [],
    tags: ['Featured Project', 'Web Development', 'Church'],
    url: 'https://www.upcvotmintal.com/',
    preview: 'https://s.wordpress.com/mshots/v1/https%3A%2F%2Fwww.upcvotmintal.com%2F?w=1200',
    techStack: 'Frontend web UI, membership-system landing architecture, and production hosting.'
  },
  {
    id: 'asia-realty',
    title: 'Asia Realty',
    description: 'Property listing concept for discovering high-return real estate opportunities in Asia.',
    categories: ['featured-projects', 'web-development'],
    images: [],
    tags: ['Featured Project', 'Web Development', 'Real Estate'],
    url: 'https://realty-property-listing.vercel.app/',
    preview: 'https://s.wordpress.com/mshots/v1/https%3A%2F%2Frealty-property-listing.vercel.app%2F?w=1200',
    techStack: 'Frontend web UI, listing-focused page architecture, and Vercel deployment.'
  },
  {
    id: 'pawly',
    title: 'Pawly',
    description: 'Pet wellness and clinic website concept with services, team, and trust-focused storytelling.',
    categories: ['featured-projects', 'web-development'],
    images: [],
    tags: ['Featured Project', 'Web Development', 'Pet Care'],
    url: 'https://pawly-gold.vercel.app/',
    preview: 'https://s.wordpress.com/mshots/v1/https%3A%2F%2Fpawly-gold.vercel.app%2F?w=1200',
    techStack: 'Frontend web UI, service-first content blocks, and Vercel deployment.'
  },
  {
    id: 'clarimed',
    title: 'ClariMed',
    description: 'Private medical clinic concept website focused on trust, clarity, and patient-first care.',
    categories: ['featured-projects', 'web-development'],
    images: [],
    tags: ['Featured Project', 'Web Development', 'Healthcare'],
    url: 'https://clari-med-kohl.vercel.app/',
    preview: 'https://s.wordpress.com/mshots/v1/https%3A%2F%2Fclari-med-kohl.vercel.app%2F?w=1200',
    techStack: 'Frontend web UI, reusable section components, and Vercel deployment.'
  },
  {
    id: 'invoice-tracker',
    title: 'Invoice Tracker',
    description: 'Invoice generation and tracking web app for freelancers managing billing workflows.',
    categories: ['featured-projects', 'web-development'],
    images: [],
    tags: ['Featured Project', 'Web Development', 'Freelance'],
    url: 'https://tracker-invoice-generator.vercel.app/',
    preview: 'https://s.wordpress.com/mshots/v1/https%3A%2F%2Ftracker-invoice-generator.vercel.app%2F?w=1200',
    techStack: 'Frontend web app interface, invoice-tracking workflow logic, and Vercel deployment.'
  },
  {
    id: 'castbridge',
    title: 'CastBridge',
    description: 'Android phone to Android TV casting app site with direct playback and mirroring fallback.',
    categories: ['featured-projects', 'web-development'],
    images: [],
    tags: ['Featured Project', 'Web Development', 'Android'],
    url: 'https://screencast-tau.vercel.app/',
    preview: 'https://s.wordpress.com/mshots/v1/https%3A%2F%2Fscreencast-tau.vercel.app%2F?w=1200',
    techStack: 'Frontend web UI, responsive layouts, and Vercel deployment.'
  },
  {
    id: 'teeveefy',
    title: 'Teeveefy',
    description: 'Android TV live channel app showcase with playlist support and leanback-first UI.',
    categories: ['featured-projects', 'web-development'],
    images: [],
    tags: ['Featured Project', 'Web Development', 'Android TV'],
    url: 'https://teeveefy-app.vercel.app/',
    preview: 'https://s.wordpress.com/mshots/v1/https%3A%2F%2Fteeveefy-app.vercel.app%2F?w=1200',
    techStack: 'Frontend web UI, responsive content sections, and Vercel deployment.'
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
}

const fixCalendlyIframeSize = () => {
  const el = calendlyEl.value
  if (!el) return
  const apply = () => {
    el.style.height = '700px'
    el.style.minHeight = '700px'
    el.querySelectorAll('div').forEach((node) => {
      if (node.querySelector?.('iframe')) {
        node.style.height = '700px'
        node.style.minHeight = '700px'
      }
    })
    el.querySelectorAll('iframe').forEach((iframe) => {
      iframe.setAttribute('height', '700')
      iframe.style.height = '700px'
      iframe.style.minHeight = '700px'
      iframe.style.width = '100%'
    })
  }
  apply()
  requestAnimationFrame(apply)
  ;[100, 400, 1000].forEach((ms) => setTimeout(apply, ms))
}

const initCalendlyWidget = () => {
  const el = calendlyEl.value
  if (!el || calendlyReady.value) return
  const Calendly = window.Calendly
  if (!Calendly?.initInlineWidget) return
  el.innerHTML = ''
  Calendly.initInlineWidget({
    url: CALENDLY_URL,
    parentElement: el,
  })
  calendlyReady.value = true
  fixCalendlyIframeSize()
}

const loadCalendlyScript = () => {
  if (window.Calendly?.initInlineWidget) {
    initCalendlyWidget()
    return
  }
  const existing = document.querySelector('script[src*="calendly.com/assets/external/widget.js"]')
  if (existing) {
    if (window.Calendly?.initInlineWidget) {
      initCalendlyWidget()
    } else {
      existing.addEventListener('load', initCalendlyWidget, { once: true })
    }
    return
  }
  const script = document.createElement('script')
  script.src = 'https://assets.calendly.com/assets/external/widget.js'
  script.async = true
  script.onload = () => initCalendlyWidget()
  document.body.appendChild(script)
}

onMounted(() => {
  AOS.init({
    duration: 1000,
    easing: 'ease-out',
    once: false,
    offset: 100,
    mirror: true,
    anchorPlacement: 'top-bottom',
    delay: 100,
  })

  window.addEventListener('scroll', checkActiveSection)
  checkActiveSection() // Initial check

  nextTick(() => {
    loadCalendlyScript()
  })
})

onUnmounted(() => {
  window.removeEventListener('scroll', checkActiveSection)
  if (calendlyEl.value) {
    calendlyEl.value.innerHTML = ''
  }
  calendlyReady.value = false
})

</script>


<style>
@import 'aos/dist/aos.css';

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
[data-aos] {
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

/* Calendly: explicit height — min-height alone lets the iframe collapse */
.calendly-widget-host {
  height: 700px;
  min-height: 700px;
  min-width: 320px;
}

.calendly-widget-host iframe {
  width: 100% !important;
  height: 700px !important;
  min-height: 700px !important;
  border: 0 !important;
}

.calendly-widget-host .calendly-inline-widget,
.calendly-widget-host .calendly-inline-widget iframe {
  min-height: 700px !important;
}

</style>


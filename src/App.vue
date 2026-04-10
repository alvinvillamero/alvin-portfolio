<template>
  <link href="https://fonts.googleapis.com/css2?family=Poppins:wght@400;600;700&display=swap" rel="stylesheet">

  <div class="bg-[#0a1628] text-white min-h-screen font-poppins selection:bg-violet-500/25 overflow-x-hidden w-full">
    <!-- Header -->
    <header class="sticky top-0 z-50 w-full bg-[#0a1628]/90 border-b border-white/[0.06] backdrop-blur-md" data-aos="fade-down">
      <div class="flex justify-between items-center px-8 py-5 max-w-7xl mx-auto">
        <a href="#" class="group">
          <div class="text-3xl font-bold tracking-tight text-white transform transition-transform duration-300 group-hover:scale-[1.02]">
            Alvin.
          </div>
        </a>
      
        <!-- Desktop Navigation -->
        <nav class="hidden md:flex items-center gap-14">
          <div class="flex items-center gap-8 lg:gap-10 text-sm font-medium tracking-wide">
            <a 
              href="#services" 
              class="relative py-2 text-gray-300 hover:text-white transition-all duration-300"
              :class="{ 'text-white': activeSection === 'services' }"
            >
              What we build
              <span 
                class="absolute bottom-0 left-0 w-full h-0.5 bg-gradient-to-r from-[#5300A6] to-[#BA24FF] transform scale-x-0 transition-transform duration-300"
                :class="{ '!scale-x-100': activeSection === 'services' }"
              ></span>
            </a>
            <a 
              href="#portfolio" 
              class="relative py-2 text-gray-300 hover:text-white transition-all duration-300"
              :class="{ 'text-white': activeSection === 'portfolio' }"
            >
              Work
              <span 
                class="absolute bottom-0 left-0 w-full h-0.5 bg-gradient-to-r from-[#5300A6] to-[#BA24FF] transform scale-x-0 transition-transform duration-300"
                :class="{ '!scale-x-100': activeSection === 'portfolio' }"
              ></span>
            </a>
            <a 
              href="#process" 
              class="relative py-2 text-gray-300 hover:text-white transition-all duration-300"
              :class="{ 'text-white': activeSection === 'process' }"
            >
              Process
              <span 
                class="absolute bottom-0 left-0 w-full h-0.5 bg-gradient-to-r from-[#5300A6] to-[#BA24FF] transform scale-x-0 transition-transform duration-300"
                :class="{ '!scale-x-100': activeSection === 'process' }"
              ></span>
            </a>
            <a 
              href="#team" 
              class="relative py-2 text-gray-300 hover:text-white transition-all duration-300"
              :class="{ 'text-white': activeSection === 'team' }"
            >
              Team
              <span 
                class="absolute bottom-0 left-0 w-full h-0.5 bg-gradient-to-r from-[#5300A6] to-[#BA24FF] transform scale-x-0 transition-transform duration-300"
                :class="{ '!scale-x-100': activeSection === 'team' }"
              ></span>
            </a>
            <a 
              href="#contact" 
              class="relative py-2 text-gray-300 hover:text-white transition-all duration-300"
              :class="{ 'text-white': activeSection === 'contact' }"
            >
              Contact
              <span 
                class="absolute bottom-0 left-0 w-full h-0.5 bg-gradient-to-r from-[#5300A6] to-[#BA24FF] transform scale-x-0 transition-transform duration-300"
                :class="{ '!scale-x-100': activeSection === 'contact' }"
              ></span>
            </a>
          </div>
          
          <a 
            href="#contact"
            class="bg-gradient-to-r from-[#5300A6] to-[#BA24FF] px-7 py-2.5 rounded-full text-base font-semibold shadow-md text-white hover:opacity-90 transition-all duration-300 hover:shadow-xl hover:scale-[1.02] active:scale-[0.98]"
          >
            Book a Call
          </a>
      </nav>

        <!-- Mobile Navigation Button -->
        <div class="flex items-center gap-3 md:hidden">
          <a 
            href="#contact"
            class="bg-gradient-to-r from-[#5300A6] to-[#BA24FF] px-4 py-2 rounded-full text-sm font-semibold shadow-md text-white hover:opacity-90 transition-all duration-300 active:scale-[0.98]"
          >
            Book a Call
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
        class="fixed inset-0 bg-[#0a1628] z-40 md:hidden"
        @click="closeMenu"
      >
        <div 
          class="flex flex-col items-center justify-center min-h-screen p-8 space-y-8 bg-[#0a1628]"
          @click.stop
        >
          <a 
            v-for="item in mobileNavItems"
            :key="item.id"
            :href="'#' + item.id"
            @click="closeMenu"
            class="relative text-2xl font-medium hover:text-pink-400 transition-all duration-300 hover:scale-[1.02] py-2"
            :class="{ 'text-pink-400': activeSection === item.id }"
          >
            {{ item.label }}
            <span 
              class="absolute -bottom-1 left-0 w-full h-0.5 bg-gradient-to-r from-[#5300A6] to-[#BA24FF] transform scale-x-0 transition-transform duration-300"
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
    <section class="flex flex-col lg:flex-row items-center justify-between max-w-7xl mx-auto px-4 sm:px-8 pt-16 pb-12 md:pt-24 md:pb-16 gap-12 lg:gap-16" data-aos="fade-up">
      <div class="max-w-2xl space-y-8">
        <p class="text-xs sm:text-sm font-medium tracking-[0.2em] uppercase text-violet-300/90">AI systems · automation · implementation</p>
        <h1 class="text-[1.75rem] sm:text-4xl md:text-5xl lg:text-[3.25rem] font-bold tracking-tight text-white leading-[1.12]">
          AI-powered systems for businesses that want
          <span class="bg-gradient-to-r from-violet-400 to-fuchsia-400 bg-clip-text text-transparent"> less manual work</span>
          and better execution
        </h1>
        <p class="text-gray-400 text-base sm:text-lg leading-relaxed max-w-xl">
          I help companies design and implement AI-powered systems, internal tools, chatbots, and automations that cut repetitive work, speed up response times, and simplify operations—then bring in execution support when you need more than engineering.
        </p>
        <div class="flex flex-col sm:flex-row gap-3 sm:gap-4">
          <a
            href="#contact"
            class="inline-flex items-center justify-center gap-2 px-7 py-3.5 rounded-lg bg-gradient-to-r from-[#5300A6] to-[#7c3aed] text-white text-sm font-semibold hover:opacity-95 transition-opacity shadow-lg shadow-violet-900/30"
          >
            Book a discovery call
          </a>
          <a
            href="#portfolio"
            class="inline-flex items-center justify-center gap-2 px-7 py-3.5 rounded-lg border border-white/15 text-white text-sm font-medium hover:bg-white/5 transition-colors"
          >
            See selected work
          </a>
        </div>
        <div class="flex flex-wrap items-center gap-x-6 gap-y-2 text-sm text-gray-500">
          <span class="flex items-center gap-2">
            <span class="w-1.5 h-1.5 rounded-full bg-emerald-400/80"></span>
            Remote · Philippines
          </span>
          <a href="mailto:al.villamero@gmail.com" class="hover:text-violet-300 transition-colors">al.villamero@gmail.com</a>
        </div>
      </div>
      <div class="relative w-full max-w-[min(100%,380px)] aspect-square shrink-0">
        <div class="absolute inset-0 bg-gradient-to-br from-violet-600/30 to-fuchsia-600/20 rounded-3xl blur-3xl opacity-70"></div>
        <div class="relative w-full h-full rounded-3xl border border-white/10 overflow-hidden bg-[#0f2744]/80">
          <img
            src="@/assets/img/pic.jpg"
            alt="Alvin Villamero"
            class="w-full h-full object-cover object-top scale-[1.02]"
          />
          <div class="absolute inset-0 bg-gradient-to-t from-[#0a1628] via-transparent to-transparent opacity-90"></div>
          <div class="absolute bottom-0 left-0 right-0 p-5 border-t border-white/5">
            <p class="text-xs font-medium text-violet-200/90 uppercase tracking-wider">Focus</p>
            <p class="text-sm text-white font-medium mt-1">Operations-first AI systems &amp; product implementation</p>
          </div>
        </div>
      </div>
    </section>

    <!-- Trust -->
    <section id="trust" class="border-y border-white/[0.06] bg-black/20">
      <div class="max-w-6xl mx-auto px-6 sm:px-8 py-10 sm:py-12">
        <div class="grid grid-cols-3 gap-6 sm:gap-10 text-center">
          <div>
            <p class="text-2xl sm:text-3xl font-bold text-white tabular-nums">5+</p>
            <p class="text-xs sm:text-sm text-gray-500 mt-1">Years shipping systems</p>
          </div>
          <div>
            <p class="text-2xl sm:text-3xl font-bold text-white tabular-nums">40+</p>
            <p class="text-xs sm:text-sm text-gray-500 mt-1">Builds &amp; integrations</p>
          </div>
          <div>
            <p class="text-2xl sm:text-3xl font-bold text-white tabular-nums">18+</p>
            <p class="text-xs sm:text-sm text-gray-500 mt-1">Teams &amp; clients served</p>
          </div>
        </div>
      </div>
    </section>


    <!-- Services -->
    <section id="services" class="py-24 md:py-32 px-6 sm:px-8 max-w-6xl mx-auto relative" data-aos="fade-up">
      <div class="relative">
        <div class="max-w-3xl mb-12 md:mb-16">
          <h2 class="text-3xl md:text-4xl font-bold text-white mb-4 tracking-tight">What I build</h2>
          <p class="text-gray-400 text-lg leading-relaxed">
            I help businesses turn messy workflows and ideas into <span class="text-gray-300">AI-powered systems, automations, and digital products</span>—with clear ownership from concept to working implementation.
          </p>
        </div>

        <div class="grid md:grid-cols-3 gap-5 md:gap-6 mb-14 md:mb-16">
          <div class="rounded-2xl border border-white/[0.08] bg-white/[0.03] p-6 md:p-8 flex flex-col">
            <h3 class="text-lg font-semibold text-white mb-3">AI-powered systems</h3>
            <p class="text-sm text-gray-400 leading-relaxed flex-grow">Internal tools, automations, dashboards, workflow systems, and admin surfaces that reduce manual work and keep operations consistent.</p>
          </div>
          <div class="rounded-2xl border border-white/[0.08] bg-white/[0.03] p-6 md:p-8 flex flex-col">
            <h3 class="text-lg font-semibold text-white mb-3">AI chatbots</h3>
            <p class="text-sm text-gray-400 leading-relaxed flex-grow">Lead capture, support, FAQ, and internal assistant bots—scoped for real conversations, escalation paths, and your brand voice.</p>
          </div>
          <div class="rounded-2xl border border-white/[0.08] bg-white/[0.03] p-6 md:p-8 flex flex-col">
            <h3 class="text-lg font-semibold text-white mb-3">Concept to product</h3>
            <p class="text-sm text-gray-400 leading-relaxed flex-grow">From raw ideas to product plans, MVPs, interfaces, and working builds—so ideas become operational systems, not slide decks.</p>
          </div>
        </div>

        <div class="mb-14">
          <h3 class="text-xl font-semibold text-white mb-6">Problems this addresses</h3>
          <ul class="grid sm:grid-cols-2 gap-3">
            <li
              v-for="p in problemsSolved"
              :key="p"
              class="flex gap-3 text-sm text-gray-300 border border-white/[0.06] rounded-xl px-4 py-3 bg-black/25"
            >
              <span class="text-violet-400 shrink-0 mt-0.5">→</span>
              <span>{{ p }}</span>
            </li>
          </ul>
        </div>

        <div class="rounded-2xl border border-dashed border-white/15 bg-white/[0.02] p-6 md:p-8">
          <p class="text-[11px] font-semibold uppercase tracking-[0.2em] text-gray-500 mb-2">Secondary — execution support</p>
          <h3 class="text-xl font-semibold text-white mb-3">When you need more than systems work</h3>
          <p class="text-sm text-gray-400 max-w-2xl leading-relaxed">
            Social media management, video editing, graphic design, and admin support—available through our team as <span class="text-gray-300">additional delivery capacity</span>, not the core offer. The main engagement stays systems, automation, and product implementation.
          </p>
        </div>
      </div>
    </section>

    <!-- Portfolio / case studies -->
    <section id="portfolio" class="py-24 md:py-32 px-6 sm:px-8 max-w-6xl mx-auto relative" data-aos="fade-up">
      <div class="relative">
        <div class="max-w-3xl mb-12 md:mb-14">
          <h2 class="text-3xl md:text-4xl font-bold text-white mb-4 tracking-tight">Selected work</h2>
          <p class="text-gray-400 text-lg leading-relaxed">
            Case-style snapshots: problem, build, and tools—plus repos and live demos where available. Deeper case write-ups can be added as we document outcomes with clients.
          </p>
        </div>

        <!-- Recent on GitHub -->
        <div class="mb-16 md:mb-20">
          <div class="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4 mb-8">
            <div>
              <h3 class="text-xl font-semibold text-white mb-1">Recent on GitHub</h3>
              <p class="text-sm text-gray-400 max-w-xl">Public repositories—source on GitHub, live demo when a deployment URL is set.</p>
            </div>
            <a
              href="https://github.com/alvinvillamero"
              target="_blank"
              rel="noopener noreferrer"
              class="inline-flex items-center justify-center gap-2 px-5 py-2.5 rounded-lg bg-white/5 border border-white/10 text-sm font-medium text-white hover:bg-white/10 hover:border-pink-400/20 transition-all shrink-0"
            >
              <svg class="w-5 h-5" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                <path fill-rule="evenodd" d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.203 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.942.359.31.678.921.678 1.856 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z" clip-rule="evenodd"/>
              </svg>
              github.com/alvinvillamero
            </a>
          </div>
          <div class="grid sm:grid-cols-2 gap-4 sm:gap-6">
            <div
              v-for="repo in githubProjects"
              :key="repo.id"
              class="group relative bg-white/5 rounded-xl border border-white/10 p-5 sm:p-6 hover:border-pink-400/20 transition-all duration-300 flex flex-col"
            >
              <div class="flex items-start justify-between gap-3 mb-3">
                <h4 class="text-base sm:text-lg font-semibold text-white group-hover:text-pink-400 transition-colors pr-2">{{ repo.title }}</h4>
                <span v-if="repo.language" class="shrink-0 px-2 py-0.5 rounded text-xs font-medium bg-white/10 text-gray-300">{{ repo.language }}</span>
              </div>
              <p class="text-sm text-gray-400 mb-5 flex-grow">{{ repo.description }}</p>
              <div class="flex flex-wrap gap-3">
                <a
                  :href="repo.githubUrl"
                  target="_blank"
                  rel="noopener noreferrer"
                  class="inline-flex items-center gap-1.5 text-sm font-medium text-pink-400 hover:text-pink-300 transition-colors"
                >
                  View repo
                  <svg class="w-4 h-4" fill="currentColor" viewBox="0 0 20 20"><path fill-rule="evenodd" d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z" clip-rule="evenodd"/></svg>
                </a>
                <a
                  v-if="repo.homepage"
                  :href="repo.homepage"
                  target="_blank"
                  rel="noopener noreferrer"
                  class="inline-flex items-center gap-1.5 text-sm font-medium text-white hover:text-pink-400 transition-colors"
                >
                  Live demo
                  <svg class="w-4 h-4 text-pink-400/80" fill="currentColor" viewBox="0 0 20 20"><path fill-rule="evenodd" d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z" clip-rule="evenodd"/></svg>
                </a>
              </div>
            </div>
          </div>
        </div>

        <h3 class="text-lg font-semibold text-gray-200 text-left mb-6">Client &amp; product builds</h3>

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
                  ? 'bg-gradient-to-r from-[#5300A6] to-[#BA24FF] text-white hover:opacity-90'
                  : 'bg-white/5 border border-white/10 text-gray-400 hover:text-white hover:border-pink-400/20'
              ]"
            >
              {{ category.label }}
            </button>
          </div>
          
          <a 
            href="https://drive.google.com/drive/folders/1WaEBY9yw_RxpQrTHA3QmRkfUxh44b0Wg" 
            target="_blank" 
            rel="noopener noreferrer" 
            class="group flex items-center gap-3 px-6 py-3 bg-white/5 border border-white/10 rounded-xl text-base font-medium text-white hover:bg-white/10 hover:border-pink-400/20 transition-all duration-300"
          >
            <span>View More Projects</span>
            <svg 
              class="w-5 h-5 text-pink-400 group-hover:translate-x-1 transition-transform" 
              fill="currentColor" 
              viewBox="0 0 20 20"
            >
              <path fill-rule="evenodd" d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z" clip-rule="evenodd"/>
            </svg>
          </a>
        </div>

        <!-- Projects Grid -->
        <div class="grid sm:grid-cols-2 gap-4 sm:gap-6 md:gap-8 max-w-full">
          <div v-for="project in filteredProjects" :key="project.id" class="group relative bg-white/5 rounded-xl border border-white/10 overflow-hidden hover:border-pink-400/20 transition-all duration-300">
            <div class="p-2">
              <div 
                class="aspect-[16/10] overflow-hidden cursor-pointer rounded-lg"
                @click="openImageModal(`/img/projects/websites/${project.images[0]}`)"
              >
                <img 
                  :src="`/img/projects/websites/${project.images[0]}`" 
                  :alt="project.title" 
                  loading="lazy"
                  class="w-full h-full object-contain bg-black/20 group-hover:scale-105 transition-transform duration-500"
                />
              </div>
            </div>
            <div class="p-4 sm:p-6">
              <div class="flex flex-wrap items-center gap-2 sm:gap-3 mb-3">
                <span 
                  v-for="tag in project.tags" 
                  :key="tag"
                  class="px-2 sm:px-3 py-1 bg-white/5 rounded-full text-xs font-medium text-pink-400"
                >
                  {{ tag }}
                </span>
              </div>
              <h3 class="text-base sm:text-lg font-semibold text-white mb-2 group-hover:text-violet-300 transition-colors">{{ project.title }}</h3>
              <div v-if="project.problem" class="space-y-2 mb-4 text-xs sm:text-sm">
                <p class="text-gray-500"><span class="text-gray-400 font-medium">Problem:</span> {{ project.problem }}</p>
                <p class="text-gray-500"><span class="text-gray-400 font-medium">Solution:</span> {{ project.solution }}</p>
                <p v-if="project.outcome" class="text-gray-500"><span class="text-gray-400 font-medium">Outcome:</span> {{ project.outcome }}</p>
              </div>
              <p v-else class="text-sm text-gray-400 mb-4 line-clamp-2 sm:line-clamp-none">{{ project.description }}</p>
              <div class="flex items-center gap-3 sm:gap-4">
                <a
                  v-if="project.url"
                  :href="project.url"
                  target="_blank"
                  rel="noopener noreferrer"
                  class="text-sm font-medium text-white hover:text-pink-400 transition-colors inline-flex items-center gap-1"
                >
                  Visit live site
                  <svg class="w-4 h-4 text-pink-400" fill="currentColor" viewBox="0 0 20 20">
                    <path fill-rule="evenodd" d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z" clip-rule="evenodd" />
                  </svg>
                </a>
                <span v-else class="text-sm text-gray-500">Live link coming soon</span>
              </div>
            </div>
          </div>
        </div>




      </div>
    </section>

    <!-- Process -->
    <section id="process" class="py-24 md:py-32 px-6 sm:px-8 max-w-6xl mx-auto border-t border-white/[0.06]" data-aos="fade-up">
      <div class="max-w-3xl mb-12">
        <h2 class="text-3xl md:text-4xl font-bold text-white mb-4 tracking-tight">How engagements run</h2>
        <p class="text-gray-400 text-lg">A clear path from messy reality to a working system—no mystery phases.</p>
      </div>
      <ol class="grid md:grid-cols-2 gap-6 list-none p-0 m-0">
        <li v-for="(step, i) in processSteps" :key="step.title" class="rounded-2xl border border-white/[0.08] bg-white/[0.02] p-6 flex gap-4">
          <span class="text-2xl font-bold text-violet-500/90 tabular-nums shrink-0">{{ padStep(i) }}</span>
          <div>
            <h3 class="text-lg font-semibold text-white mb-2">{{ step.title }}</h3>
            <p class="text-sm text-gray-400 leading-relaxed">{{ step.body }}</p>
          </div>
        </li>
      </ol>
    </section>

    <!-- Team -->
    <section id="team" class="py-24 md:py-32 px-6 sm:px-8 max-w-6xl mx-auto" data-aos="fade-up">
      <div class="max-w-3xl mb-10">
        <h2 class="text-3xl md:text-4xl font-bold text-white mb-4 tracking-tight">Execution support</h2>
        <p class="text-gray-400 text-lg leading-relaxed">
          When clients need more than systems and product work, our extended team covers social, video, design, and admin—so delivery can scale without you hiring a separate agency for every channel.
        </p>
      </div>
      <div class="flex flex-wrap gap-3">
        <span v-for="t in executionTeamTags" :key="t" class="px-4 py-2 rounded-full text-sm border border-white/10 text-gray-300 bg-black/20">{{ t }}</span>
      </div>
    </section>

    <!-- Testimonials -->
    <section class="py-20 px-6 sm:px-8 max-w-6xl mx-auto border-t border-white/[0.06]" data-aos="fade-up">
      <h2 class="text-2xl md:text-3xl font-bold text-white mb-10">What clients say</h2>
      <div class="grid md:grid-cols-2 gap-6">
        <blockquote v-for="q in testimonials" :key="q.quote" class="rounded-2xl border border-white/[0.08] bg-white/[0.02] p-6 md:p-8">
          <p class="text-gray-300 text-sm md:text-base leading-relaxed mb-4">"{{ q.quote }}"</p>
          <footer class="text-xs text-gray-500">{{ q.attribution }}</footer>
        </blockquote>
      </div>
    </section>

    <!-- Final CTA -->
    <section class="py-16 md:py-20 px-6 sm:px-8 max-w-6xl mx-auto" data-aos="fade-up">
      <div class="rounded-3xl border border-violet-500/30 bg-gradient-to-br from-violet-950/50 to-[#0a1628] px-8 py-12 md:px-12 md:py-14 text-center">
        <h2 class="text-2xl md:text-3xl font-bold text-white mb-4">Ready to reduce manual work?</h2>
        <p class="text-gray-400 max-w-xl mx-auto mb-8 text-sm md:text-base">Tell me what is breaking in your operations or what you want to automate. We will map systems, chatbots, or product work—and add execution support only if you need it.</p>
        <a href="#contact" class="inline-flex items-center justify-center px-8 py-3.5 rounded-lg bg-gradient-to-r from-[#5300A6] to-[#7c3aed] text-white text-sm font-semibold hover:opacity-95 transition-opacity">Start a conversation</a>
      </div>
    </section>

    <!-- Background -->
    <section id="background" class="py-20 md:py-28 px-6 sm:px-8 max-w-6xl mx-auto border-t border-white/[0.06]" data-aos="fade-up">
      <div class="grid md:grid-cols-2 gap-12 md:gap-16">
        <div>
          <h2 class="text-2xl font-bold text-white mb-4">Background</h2>
          <p class="text-gray-400 text-sm leading-relaxed mb-6">
            BS Information Technology (University of Mindanao, 2020). Prior roles across IT infrastructure, support, and digital delivery for international teams—experience that informs how I scope secure, maintainable systems today.
          </p>
          <a href="https://drive.google.com/file/d/1caOzNy7nxAuExabEMaDAtaSQzdzwG5W9" target="_blank" rel="noopener noreferrer" class="text-sm font-medium text-violet-300 hover:text-violet-200">Download CV →</a>
        </div>
        <div>
          <h3 class="text-sm font-semibold uppercase tracking-widest text-gray-500 mb-4">Typical stack</h3>
          <p class="text-sm text-gray-400 leading-relaxed mb-4">
            Vue and React, Node ecosystems, APIs and integrations, cloud hosting (Vercel and traditional), automation (Make and similar), AI-assisted delivery (LLM APIs, Cursor), plus creative and marketing tools when our execution team is involved.
          </p>
          <p class="text-xs text-gray-600">Tune this list as your positioning and case studies mature.</p>
        </div>
      </div>
    </section>


    <!-- Contact -->
    <section id="contact" class="py-16 sm:py-24 md:py-32 px-4 sm:px-8 max-w-6xl mx-auto relative" data-aos="fade-up">
      <!-- Background Gradient -->
      <div class="absolute inset-0 bg-gradient-to-b from-transparent via-[#8000FF]/5 to-transparent"></div>
      
      <div class="relative">
        <div class="flex flex-col items-center text-center mb-10 sm:mb-16">
          <h2 class="text-2xl sm:text-3xl font-bold mb-3 sm:mb-4">Start a project conversation</h2>
          <p class="text-gray-400 max-w-2xl text-sm sm:text-base">Describe the workflow pain, the product idea, or the automation you want. I will reply with a sensible next step—systems and AI implementation first; execution support from our team only if it fits.</p>
        </div>

        <div class="grid lg:grid-cols-2 gap-6 sm:gap-8 items-start">
          <!-- Contact Info -->
          <div class="space-y-6">
            <!-- Email Card -->
            <div class="group bg-white/5 p-6 rounded-xl border border-white/10 hover:border-pink-400/20 transition-all duration-300">
              <div class="flex items-start gap-6">
                <div class="bg-gradient-to-br from-[#5300A6] to-[#BA24FF] px-2 py-1.5 rounded-lg group-hover:scale-110 transition-transform">
                  <svg class="w-5 h-5 text-white" fill="currentColor" viewBox="0 0 20 20">
                    <path d="M2.003 5.884L10 9.882l7.997-3.998A2 2 0 0016 4H4a2 2 0 00-1.997 1.884z"/>
                    <path d="M18 8.118l-8 4-8-4V14a2 2 0 002 2h12a2 2 0 002-2V8.118z"/>
                  </svg>
                </div>
                <div>
                  <h3 class="text-lg font-semibold text-white mb-2 group-hover:text-pink-400 transition-colors">Email</h3>
                  <a href="mailto:al.villamero@gmail.com" class="text-gray-400 hover:text-pink-400 transition-colors flex items-center gap-2">
                    al.villamero@gmail.com
                    <svg class="w-4 h-4 text-pink-400 group-hover:translate-x-1 transition-transform" fill="currentColor" viewBox="0 0 20 20">
                      <path fill-rule="evenodd" d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z" clip-rule="evenodd"/>
                    </svg>
                  </a>
                </div>
              </div>
            </div>

            <!-- Phone Card -->
            <div class="group bg-white/5 p-6 rounded-xl border border-white/10 hover:border-pink-400/20 transition-all duration-300">
              <div class="flex items-start gap-6">
                <div class="bg-gradient-to-br from-[#5300A6] to-[#BA24FF] px-2 py-1.5 rounded-lg group-hover:scale-110 transition-transform">
                  <svg class="w-5 h-5 text-white" fill="currentColor" viewBox="0 0 20 20">
                    <path d="M2 3a1 1 0 011-1h2.153a1 1 0 01.986.836l.74 4.435a1 1 0 01-.54 1.06l-1.548.773a11.037 11.037 0 006.105 6.105l.774-1.548a1 1 0 011.059-.54l4.435.74a1 1 0 01.836.986V17a1 1 0 01-1 1h-2C7.82 18 2 12.18 2 5V3z"/>
                  </svg>
                </div>
                <div>
                  <h3 class="text-lg font-semibold text-white mb-2 group-hover:text-pink-400 transition-colors">Phone</h3>
                  <a href="tel:+639312004316" class="text-gray-400 hover:text-pink-400 transition-colors flex items-center gap-2">
                    +63 931 200 4316
                    <svg class="w-4 h-4 text-pink-400 group-hover:translate-x-1 transition-transform" fill="currentColor" viewBox="0 0 20 20">
                      <path fill-rule="evenodd" d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z" clip-rule="evenodd"/>
                    </svg>
                  </a>
                </div>
              </div>
            </div>

            <!-- Location Card -->
            <div class="group bg-white/5 p-6 rounded-xl border border-white/10 hover:border-pink-400/20 transition-all duration-300">
              <div class="flex items-start gap-6">
                <div class="bg-gradient-to-br from-[#5300A6] to-[#BA24FF] px-2 py-1.5 rounded-lg group-hover:scale-110 transition-transform">
                  <svg class="w-5 h-5 text-white" fill="currentColor" viewBox="0 0 20 20">
                    <path fill-rule="evenodd" d="M5.05 4.05a7 7 0 119.9 9.9L10 18.9l-4.95-4.95a7 7 0 010-9.9zM10 11a2 2 0 100-4 2 2 0 000 4z" clip-rule="evenodd"/>
                  </svg>
                </div>
                <div>
                  <h3 class="text-lg font-semibold text-white mb-2 group-hover:text-pink-400 transition-colors">Location</h3>
                  <p class="text-gray-400">Davao City, Philippines</p>
                  <p class="text-sm text-gray-500 mt-1">Available for remote work worldwide</p>
                </div>
              </div>
            </div>

            <!-- Social Links -->
            <div class="group bg-white/5 p-6 rounded-xl border border-white/10 hover:border-pink-400/20 transition-all duration-300">
              <div class="flex items-start gap-6">
                <div class="bg-gradient-to-br from-[#5300A6] to-[#BA24FF] px-2 py-1.5 rounded-lg group-hover:scale-110 transition-transform">
                  <svg class="w-5 h-5 text-white" fill="currentColor" viewBox="0 0 20 20">
                    <path d="M13 6a3 3 0 11-6 0 3 3 0 016 0zM18 8a2 2 0 11-4 0 2 2 0 014 0zM14 15a4 4 0 00-8 0v3h8v-3zM6 8a2 2 0 11-4 0 2 2 0 014 0zM16 18v-3a5.972 5.972 0 00-.75-2.906A3.005 3.005 0 0119 15v3h-3zM4.75 12.094A5.973 5.973 0 004 15v3H1v-3a3 3 0 013.75-2.906z"/>
                  </svg>
      </div>
      <div>
                  <h3 class="text-lg font-semibold text-white mb-2 group-hover:text-pink-400 transition-colors">Social Media</h3>
                  <div class="flex items-center gap-4">
                    <a href="#" class="text-gray-400 hover:text-pink-400 transition-colors">
                      <svg class="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                        <path d="M19 3H5C3.895 3 3 3.895 3 5V19C3 20.105 3.895 21 5 21H19C20.105 21 21 20.105 21 19V5C21 3.895 20.105 3 19 3ZM9 17H6.477V9H9V17ZM7.694 7.717C6.923 7.717 6.408 7.203 6.408 6.517C6.408 5.831 6.922 5.317 7.779 5.317C8.55 5.317 9.065 5.831 9.065 6.517C9.065 7.203 8.551 7.717 7.694 7.717ZM18 17H15.558V12.577C15.558 11.432 14.767 11.077 14.362 11.077C13.957 11.077 13.014 11.315 13.014 12.577C13.014 12.815 13.014 17 13.014 17H10.477V9H13.014V10.017C13.419 9.305 14.249 9 15.478 9C16.707 9 18 9.871 18 12.577V17Z"/>
                      </svg>
                    </a>
                    <a href="#" class="text-gray-400 hover:text-pink-400 transition-colors">
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
          <div class="bg-white/5 p-8 rounded-xl border border-white/10">
            <h3 class="text-lg font-semibold text-white mb-6">Send a Message</h3>
            <form class="space-y-6" @submit.prevent="sendEmail">
              <div>
                <label class="block text-sm font-medium text-gray-400 mb-2">Name</label>
                <input 
                  v-model="formData.name"
                  type="text" 
                  class="w-full bg-white/5 border border-white/10 rounded-lg px-4 py-3 text-white placeholder-gray-500 focus:outline-none focus:border-pink-400/40 transition-colors" 
                  placeholder="Your name"
                  required
                >
              </div>
              <div>
                <label class="block text-sm font-medium text-gray-400 mb-2">Email</label>
                <input 
                  v-model="formData.email"
                  type="email" 
                  class="w-full bg-white/5 border border-white/10 rounded-lg px-4 py-3 text-white placeholder-gray-500 focus:outline-none focus:border-pink-400/40 transition-colors" 
                  placeholder="your@email.com"
                  required
                >
              </div>
              <div>
                <label class="block text-sm font-medium text-gray-400 mb-2">Message</label>
                <textarea 
                  v-model="formData.message"
                  rows="4" 
                  class="w-full bg-white/5 border border-white/10 rounded-lg px-4 py-3 text-white placeholder-gray-500 focus:outline-none focus:border-pink-400/40 transition-colors" 
                  placeholder="Your message"
                  required
                ></textarea>
              </div>
              
              <!-- Form Status Message -->
              <div v-if="formStatus.message" :class="[
                'text-sm p-3 rounded-lg',
                formStatus.type === 'success' ? 'bg-green-500/10 text-green-400' : 'bg-red-500/10 text-red-400'
              ]">
                {{ formStatus.message }}
              </div>

              <button 
                type="submit" 
                class="w-full bg-gradient-to-r from-[#5300A6] to-[#BA24FF] text-white font-medium py-3 px-6 rounded-lg hover:opacity-90 transition-all disabled:opacity-50"
                :disabled="isSubmitting"
              >
                <span v-if="!isSubmitting">Send Message</span>
                <span v-else>Sending...</span>
              </button>
            </form>
          </div>
        </div>
      </div>
    </section>

    <!-- Footer -->
  <footer class="text-center py-8 border-t border-white/10 opacity-0 animate-fadeIn">
      <div class="max-w-7xl mx-auto px-8">
        <div class="flex flex-col md:flex-row items-center justify-between gap-6">
          <div class="text-center md:text-left">
            <p class="text-[15px] text-gray-400"><span class="font-medium text-white">© 2026 Alvin Villamero.</span> AI systems &amp; implementation partner—automation, internal tools, and chatbots; extended execution support when you need it.</p>
            <p class="text-xs text-gray-500 mt-1">All rights reserved.</p>
          </div>
          <div class="flex items-center gap-6">
            <a href="#" class="text-gray-400 hover:text-white transition-colors">
              <svg class="w-6 h-6 social-icon" viewBox="0 0 24 24" fill="currentColor">
                <path d="M19 3H5C3.895 3 3 3.895 3 5V19C3 20.105 3.895 21 5 21H19C20.105 21 21 20.105 21 19V5C21 3.895 20.105 3 19 3ZM9 17H6.477V9H9V17ZM7.694 7.717C6.923 7.717 6.408 7.203 6.408 6.517C6.408 5.831 6.922 5.317 7.779 5.317C8.55 5.317 9.065 5.831 9.065 6.517C9.065 7.203 8.551 7.717 7.694 7.717ZM18 17H15.558V12.577C15.558 11.432 14.767 11.077 14.362 11.077C13.957 11.077 13.014 11.315 13.014 12.577C13.014 12.815 13.014 17 13.014 17H10.477V9H13.014V10.017C13.419 9.305 14.249 9 15.478 9C16.707 9 18 9.871 18 12.577V17Z"/>
              </svg>
            </a>
            <a href="#" class="text-gray-400 hover:text-white transition-colors">
              <svg class="w-6 h-6 social-icon" viewBox="0 0 24 24" fill="currentColor">
                <path d="M12 2C6.475 2 2 6.475 2 12C2 16.425 4.8625 20.1625 8.8375 21.4875C9.3375 21.575 9.525 21.275 9.525 21.0125C9.525 20.775 9.5125 19.9875 9.5125 19.15C7 19.6125 6.35 18.5375 6.15 17.975C6.0375 17.6875 5.55 16.8 5.125 16.5625C4.775 16.375 4.275 15.9125 5.1125 15.9C5.9 15.8875 6.4625 16.625 6.65 16.925C7.55 18.4375 8.9875 18.0125 9.5625 17.75C9.65 17.1 9.9125 16.6625 10.2 16.4125C7.975 16.1625 5.65 15.3 5.65 11.475C5.65 10.3875 6.0375 9.4875 6.675 8.7875C6.575 8.5375 6.225 7.5125 6.775 6.1375C6.775 6.1375 7.6125 5.875 9.525 7.1625C10.325 6.9375 11.175 6.825 12.025 6.825C12.875 6.825 13.725 6.9375 14.525 7.1625C16.4375 5.8625 17.275 6.1375 17.275 6.1375C17.825 7.5125 17.475 8.5375 17.375 8.7875C18.0125 9.4875 18.4 10.375 18.4 11.475C18.4 15.3125 16.0625 16.1625 13.8375 16.4125C14.2 16.725 14.5125 17.325 14.5125 18.2625C14.5125 19.6 14.5 20.675 14.5 21.0125C14.5 21.275 14.6875 21.5875 15.1875 21.4875C19.1375 20.1625 22 16.4125 22 12C22 6.475 17.525 2 12 2Z"/>
              </svg>
            </a>
            <a href="#" class="text-gray-400 hover:text-white transition-colors">
              <svg class="w-6 h-6 social-icon" viewBox="0 0 24 24" fill="currentColor">
                <path d="M12 2C6.48 2 2 6.48 2 12C2 17.52 6.48 22 12 22C17.52 22 22 17.52 22 12C22 6.48 17.52 2 12 2ZM4 12C4 11.39 4.08 10.79 4.21 10.22L8 14V15C8 16.1 8.9 17 10 17V19.93C6.55 19.2 4 15.91 4 12ZM17.9 17.39C17.64 16.58 16.9 16 16 16H15V13C15 12.45 14.55 12 14 12H8V10H10C10.55 10 11 9.55 11 9V7H13C14.1 7 15 6.1 15 5V4.59C17.93 5.78 20 8.65 20 12C20 14.08 19.2 15.97 17.9 17.39Z"/>
              </svg>
            </a>
          </div>
        </div>
      </div>
    </footer>
    <!-- Image Modal -->
    <div v-if="isModalOpen" class="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/95" @click="closeImageModal">
      <div class="relative max-w-7xl w-full max-h-[90vh] bg-[#0a1628] rounded-xl overflow-hidden">
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
import { onMounted, onUnmounted, ref, computed } from 'vue'
import emailjs from '@emailjs/browser'

const isMenuOpen = ref(false)
const activeSection = ref('home')
const selectedImage = ref(null)
const isModalOpen = ref(false)

const sections = ['trust', 'services', 'portfolio', 'process', 'team', 'contact', 'background']

const mobileNavItems = [
  { id: 'services', label: 'What we build' },
  { id: 'portfolio', label: 'Work' },
  { id: 'process', label: 'Process' },
  { id: 'team', label: 'Team' },
  { id: 'contact', label: 'Contact' }
]

const problemsSolved = [
  'Too much manual follow-up between tools, inboxes, and spreadsheets',
  'Slow response to leads and customers because workflows are fragmented',
  'Ideas stall after workshops—no clear path to an MVP or internal tool',
  'Teams outgrow ad hoc automations and need maintainable systems',
  'Chatbots that read like demos instead of handling real intents and handoffs',
  'Operations leaders need execution help without hiring five different vendors'
]

const processSteps = [
  { title: 'Discover & map', body: 'We clarify outcomes, constraints, and how work really flows today—then define what “working” means in your tools.' },
  { title: 'Design the system', body: 'Architecture, integrations, bot flows, and data handoffs—so the solution fits how your team operates.' },
  { title: 'Build & integrate', body: 'Implementation with AI-assisted speed where it is safe: APIs, automations, dashboards, and assistants with proper review.' },
  { title: 'Launch & iterate', body: 'Rollout, monitoring, and improvements based on real usage—plus optional execution support from our team when you need scale.' }
]

const padStep = (i) => String(i + 1).padStart(2, '0')

const executionTeamTags = [
  'Social media management',
  'Video editing',
  'Graphic design',
  'Admin & operations support'
]

const testimonials = [
  {
    quote: 'Placeholder—replace with a short client quote about systems, automation, or delivery once you have approval.',
    attribution: 'Role, company (optional)'
  },
  {
    quote: 'Second testimonial slot. Strong quotes here turn this from a portfolio into proof.',
    attribution: 'Role, company (optional)'
  }
]
const activeProjectCategory = ref('all')

const projectCategories = [
  { id: 'all', label: 'All Projects' },
  { id: 'web', label: 'Web Development' },
  { id: 'social', label: 'Social Media' },
  { id: 'video', label: 'Video Editing' }
]

/** Public repos from https://api.github.com/users/alvinvillamero/repos — update when you add repositories. */
const githubProjects = [
  {
    id: 'church-management-portfolio',
    title: 'Church Management System (showcase)',
    description: 'Portfolio site for the UPC VOT MINTAL church management system—TypeScript stack, deployed on Vercel.',
    githubUrl: 'https://github.com/alvinvillamero/church-management-portfolio',
    homepage: 'https://church-management-portfolio.vercel.app',
    language: 'TypeScript'
  },
  {
    id: 'alvin-portfolio',
    title: 'This portfolio',
    description: 'This site: Vue 3, Vite, Tailwind, EmailJS—source and deployment config in the repo.',
    githubUrl: 'https://github.com/alvinvillamero/alvin-portfolio',
    homepage: 'https://my-portfolio-liart-iota-44.vercel.app',
    language: 'Vue'
  }
]

const projects = [
  {
    id: 'trading-signals-main',
    title: 'Trading Signals',
    description: 'Provides trading signals and automated bots for forex, crypto, and stocks markets.',
    category: 'web',
    images: ['tradingsignals.jpg'],
    tags: ['Forex', 'Crypto', 'Stocks'],
    problem: 'Traders needed one reliable place for signals and market coverage without constant manual follow-up.',
    solution: 'Web platform with structured content, signal delivery flows, and account areas aligned to how users trade.',
    outcome: 'Clearer path from signup to active use of trading content and tools.'
  },
  {
    id: 'trading-signals-funnel',
    title: 'Trading Signals - Sales Funnel',
    description: 'High-converting sales funnel for the Trading Signals platform.',
    category: 'web',
    images: ['tradingsignals-funnel.jpg'],
    tags: ['Sales Funnel', 'Marketing']
  },
  {
    id: 'trading-signals-old',
    title: 'Trading Signals - Previous Version',
    description: 'Previous version of the Trading Signals platform.',
    category: 'web',
    images: ['tradingsignals-old.jpg'],
    tags: ['Legacy', 'Trading']
  },
  {
    id: 'volume-day-trader-main',
    title: 'Volume Day Trader',
    description: 'Offers Wyckoff method–based indicators and a community of active day traders.',
    category: 'web',
    images: ['volumedaytrader.jpg'],
    tags: ['Wyckoff Method', 'Day Trading']
  },
  {
    id: 'volume-day-trader-funnel',
    title: 'Volume Day Trader - Sales Funnel',
    description: 'Sales funnel for the Volume Day Trader platform.',
    category: 'web',
    images: ['volumedaytrader-funnel.jpg'],
    tags: ['Sales Funnel', 'Marketing']
  },
  {
    id: 'kopii-ai',
    title: 'Kopii AI',
    description: 'AI-driven trading platform born in Asia, blending hedge fund expertise with deep learning.',
    category: 'web',
    images: ['kopii ai.jpg'],
    tags: ['AI Trading', 'Deep Learning'],
    problem: 'Position an AI-assisted trading product with credibility and a clear product story in a crowded market.',
    solution: 'Product-facing site and flows that explain the AI value proposition and drive qualified interest.',
    outcome: 'Tighter narrative from first visit to sign-up for a complex fintech offer.'
  },
  {
    id: 'global-grid',
    title: 'Global Grid Solutions',
    description: 'Delivers digital outsourcing services specializing in BPO and virtual assistance.',
    category: 'web',
    images: ['globalgridsolutions.jpg'],
    tags: ['BPO', 'Virtual Assistance']
  },
  {
    id: 'asia-offshore',
    title: 'Asia Offshore Banking',
    description: 'Assists with setting up offshore and private bank accounts across Asia.',
    category: 'web',
    images: ['asiaoffshorebanking.jpg'],
    tags: ['Offshore Banking', 'Financial Services']
  },
  {
    id: 'adv-rangers',
    title: 'ADV Rangers',
      description: 'Organizes guided dirt bike tour packages across Cambodia\'s trails and countryside.',
    category: 'web',
    images: ['advrangers.jpg'],
    tags: ['Adventure Tours', 'Dirt Bikes']
  },
  {
    id: 'jv-holdings',
    title: 'JV Holdings Corp',
    description: 'A visionary holding company driving growth through strategic acquisitions.',
    category: 'web',
    images: ['jvholdingscorp.jpg'],
    tags: ['Holdings', 'Investment']
  },
  {
    id: 'nieruchomosci',
    title: 'Nieruchomości w Kambodży',
    description: 'Polish-language platform dedicated to real estate investment opportunities in Cambodia.',
    category: 'web',
    images: ['nieruchomosciwkambodzy.jpg'],
    tags: ['Real Estate', 'Investment']
  },
  {
    id: 'tomasz-rozmus',
    title: 'Tomasz Rozmus',
    description: 'Expert in stock and crypto markets; advisor on Asian opportunities.',
    category: 'web',
    images: ['tomaszrozmus.jpg'],
    tags: ['Trading', 'Advisory']
  },
  {
    id: 'trading-financial',
    title: 'Trading Financial Markets',
    description: 'Education hub focused on trading strategies for forex, crypto, and global equities.',
    category: 'web',
    images: ['tradingfinancialmarkets.jpg'],
    tags: ['Education', 'Trading']
  }
]

const filteredProjects = computed(() => {
  if (activeProjectCategory.value === 'all') {
    return projects
  }
  return projects.filter(project => project.category === activeProjectCategory.value)
})

const setActiveCategory = (category) => {
  activeProjectCategory.value = category
}

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
})

onUnmounted(() => {
  window.removeEventListener('scroll', checkActiveSection)
})

// Contact form
const formData = ref({
  name: '',
  email: '',
  message: ''
})
const isSubmitting = ref(false)
const formStatus = ref({ type: '', message: '' })

const sendEmail = async () => {
  if (!formData.value.name || !formData.value.email || !formData.value.message) {
    formStatus.value = { type: 'error', message: 'Please fill in all fields.' }
    return
  }

  isSubmitting.value = true
  formStatus.value = { type: '', message: '' }

  try {
    await emailjs.send(
      'service_YOUR_SERVICE_ID', // Replace with your EmailJS service ID
      'template_YOUR_TEMPLATE_ID', // Replace with your EmailJS template ID
      {
        from_name: formData.value.name,
        from_email: formData.value.email,
        message: formData.value.message,
        to_email: 'al.villamero@gmail.com'
      },
      'YOUR_PUBLIC_KEY' // Replace with your EmailJS public key
    )

    formStatus.value = { type: 'success', message: 'Message sent successfully!' }
    formData.value = { name: '', email: '', message: '' }
  } catch (error) {
    formStatus.value = { type: 'error', message: 'Failed to send message. Please try again.' }
  } finally {
    isSubmitting.value = false
  }
}
</script>


<style>
/* Font import fix */
@import url('https://fonts.googleapis.com/css2?family=Poppins:wght@400;600;700&display=swap');
@import 'aos/dist/aos.css';

/* Global styles */
:root {
  scroll-behavior: smooth;
}

html {
  scroll-padding-top: 100px; /* Offset for fixed header */
}

body {
  font-family: 'Poppins', sans-serif;
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


</style>

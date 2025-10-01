<template>
  <link href="https://fonts.googleapis.com/css2?family=Poppins:wght@400;600;700&display=swap" rel="stylesheet">

  <div class="bg-[#0B0B13] text-white min-h-screen font-poppins selection:bg-pink-500/30">
    <!-- Header -->
    <header class="sticky top-0 z-50 w-full bg-[#0B0B13]/80 border-b border-white/10 backdrop-blur-md" data-aos="fade-down">
      <div class="flex justify-between items-center px-8 py-5 max-w-7xl mx-auto">
        <a href="#" class="group">
          <div class="text-3xl font-bold tracking-tight text-white transform transition-transform duration-300 group-hover:scale-[1.02]">
            Alvin.
          </div>
        </a>
      
        <!-- Desktop Navigation -->
        <nav class="hidden md:flex items-center gap-14">
          <div class="flex items-center gap-10 text-base font-medium">
            <a 
              href="#experience" 
              class="relative py-2 hover:text-pink-400 transition-all duration-300 hover:scale-[1.02]"
              :class="{ 'text-pink-400': activeSection === 'experience' }"
            >
              Experience
              <span 
                class="absolute bottom-0 left-0 w-full h-0.5 bg-gradient-to-r from-[#5300A6] to-[#BA24FF] transform scale-x-0 transition-transform duration-300"
                :class="{ '!scale-x-100': activeSection === 'experience' }"
              ></span>
            </a>
            <a 
              href="#services" 
              class="relative py-2 hover:text-pink-400 transition-all duration-300 hover:scale-[1.02]"
              :class="{ 'text-pink-400': activeSection === 'services' }"
            >
              Services
              <span 
                class="absolute bottom-0 left-0 w-full h-0.5 bg-gradient-to-r from-[#5300A6] to-[#BA24FF] transform scale-x-0 transition-transform duration-300"
                :class="{ '!scale-x-100': activeSection === 'services' }"
              ></span>
            </a>
            <a 
              href="#skills" 
              class="relative py-2 hover:text-pink-400 transition-all duration-300 hover:scale-[1.02]"
              :class="{ 'text-pink-400': activeSection === 'skills' }"
            >
              Skills
              <span 
                class="absolute bottom-0 left-0 w-full h-0.5 bg-gradient-to-r from-[#5300A6] to-[#BA24FF] transform scale-x-0 transition-transform duration-300"
                :class="{ '!scale-x-100': activeSection === 'skills' }"
              ></span>
            </a>
            <a 
              href="#contact" 
              class="relative py-2 hover:text-pink-400 transition-all duration-300 hover:scale-[1.02]"
              :class="{ 'text-pink-400': activeSection === 'contact' }"
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
        <div class="flex items-center gap-4 md:hidden">
          <a 
            href="#contact"
            class="bg-gradient-to-r from-[#5300A6] to-[#BA24FF] px-5 py-2 rounded-full text-sm font-semibold shadow-md text-white hover:opacity-90 transition-all duration-300 active:scale-[0.98]"
          >
  Book a Call
          </a>
          <button 
            @click="isMenuOpen = !isMenuOpen" 
            class="text-2xl w-10 h-10 flex items-center justify-center rounded-full hover:bg-white/5 transition-colors"
          >
            <span v-if="!isMenuOpen">☰</span>
            <span v-else>✕</span>
</button>
        </div>
      </div>

      <!-- Mobile Menu -->
      <div v-if="isMenuOpen" class="fixed inset-0 bg-[#0B0B13]/95 backdrop-blur-md z-40 md:hidden">
        <div class="flex flex-col items-center justify-center h-full space-y-12">
          <a 
            @click="isMenuOpen = false" 
            href="#experience" 
            class="relative text-3xl hover:text-pink-400 transition-all duration-300 hover:scale-[1.02]"
            :class="{ 'text-pink-400': activeSection === 'experience' }"
          >
            Experience
            <span 
              class="absolute -bottom-3 left-0 w-full h-0.5 bg-gradient-to-r from-[#5300A6] to-[#BA24FF] transform scale-x-0 transition-transform duration-300"
              :class="{ '!scale-x-100': activeSection === 'experience' }"
            ></span>
          </a>
          <a 
            @click="isMenuOpen = false" 
            href="#services" 
            class="relative text-3xl hover:text-pink-400 transition-all duration-300 hover:scale-[1.02]"
            :class="{ 'text-pink-400': activeSection === 'services' }"
          >
            Services
            <span 
              class="absolute -bottom-3 left-0 w-full h-0.5 bg-gradient-to-r from-[#5300A6] to-[#BA24FF] transform scale-x-0 transition-transform duration-300"
              :class="{ '!scale-x-100': activeSection === 'services' }"
            ></span>
          </a>
          <a 
            @click="isMenuOpen = false" 
            href="#skills" 
            class="relative text-3xl hover:text-pink-400 transition-all duration-300 hover:scale-[1.02]"
            :class="{ 'text-pink-400': activeSection === 'skills' }"
          >
            Skills
            <span 
              class="absolute -bottom-3 left-0 w-full h-0.5 bg-gradient-to-r from-[#5300A6] to-[#BA24FF] transform scale-x-0 transition-transform duration-300"
              :class="{ '!scale-x-100': activeSection === 'skills' }"
            ></span>
          </a>
          <a 
            @click="isMenuOpen = false" 
            href="#contact" 
            class="relative text-3xl hover:text-pink-400 transition-all duration-300 hover:scale-[1.02]"
            :class="{ 'text-pink-400': activeSection === 'contact' }"
          >
            Contact
            <span 
              class="absolute -bottom-3 left-0 w-full h-0.5 bg-gradient-to-r from-[#5300A6] to-[#BA24FF] transform scale-x-0 transition-transform duration-300"
              :class="{ '!scale-x-100': activeSection === 'contact' }"
            ></span>
          </a>
        </div>
      </div>
    </header>

  <!-- Hero Section -->
<section class="flex flex-col md:flex-row items-center justify-between max-w-7xl mx-auto px-8 py-24 space-y-10 md:space-y-0" data-aos="fade-up">
  <div class="max-w-2xl space-y-8">
    <div class="flex flex-wrap gap-3">
      <div class="inline-flex items-center px-4 py-2 rounded-full bg-white/5 border border-white/10 text-sm">
        <span class="text-pink-400 font-medium">Web Developer</span>
      </div>
      <div class="inline-flex items-center px-4 py-2 rounded-full bg-white/5 border border-white/10 text-sm">
        <span class="text-pink-400 font-medium">Digital Marketing Specialist</span>
      </div>
    </div>
    <div>
      <h1 class="text-4xl md:text-5xl lg:text-7xl font-bold tracking-tight mb-6">
        <span class="text-white">Web </span><span class="bg-gradient-to-r from-[#5300A6] to-[#BA24FF] bg-clip-text text-transparent">Developer</span>
    </h1>
      <p class="text-gray-400 text-lg leading-relaxed max-w-xl">
        Experienced web developer specializing in full-stack development and digital marketing. Building modern, user-focused websites and applications that deliver measurable results.
      </p>
    </div>
    <div class="space-y-6">
      <div class="flex flex-wrap gap-4">
        <div class="flex items-center gap-2 text-sm text-gray-400">
          <span class="w-1.5 h-1.5 rounded-full bg-pink-400/40"></span>
          <span>Modern Web Development</span>
        </div>
        <div class="flex items-center gap-2 text-sm text-gray-400">
          <span class="w-1.5 h-1.5 rounded-full bg-pink-400/40"></span>
          <span>No-Code Solutions</span>
        </div>
        <div class="flex items-center gap-2 text-sm text-gray-400">
          <span class="w-1.5 h-1.5 rounded-full bg-pink-400/40"></span>
          <span>Digital Marketing</span>
        </div>
        <div class="flex items-center gap-2 text-sm text-gray-400">
          <span class="w-1.5 h-1.5 rounded-full bg-pink-400/40"></span>
          <span>Creative Design</span>
        </div>
      </div>
      <div class="flex flex-col sm:flex-row gap-4">
        <a 
          href="https://drive.google.com/file/d/1caOzNy7nxAuExabEMaDAtaSQzdzwG5W9" 
          target="_blank" 
          rel="noopener noreferrer"
          class="inline-flex items-center justify-center gap-2 px-6 py-3 rounded-lg bg-gradient-to-r from-[#5300A6] to-[#BA24FF] text-white font-medium hover:opacity-90 transition-opacity"
        >
          <span>Download CV</span>
          <svg class="w-4 h-4" fill="currentColor" viewBox="0 0 20 20">
            <path d="M10 12.586L7.707 10.293a1 1 0 10-1.414 1.414l4 4a1 1 0 001.414 0l4-4a1 1 0 00-1.414-1.414L12 12.586V4a1 1 0 00-2 0v8.586z"/>
          </svg>
        </a>
        <a href="#portfolio" class="inline-flex items-center justify-center gap-2 px-6 py-3 rounded-lg bg-white/5 text-white font-medium border border-white/10 hover:bg-white/10 transition-colors group">
          View Portfolio
          <svg class="w-4 h-4 text-pink-400 group-hover:translate-x-1 transition-transform" fill="currentColor" viewBox="0 0 20 20">
            <path fill-rule="evenodd" d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z" clip-rule="evenodd"/>
          </svg>
        </a>
      </div>
    </div>
    <div class="flex flex-col sm:flex-row items-start sm:items-center gap-4 sm:gap-8 pt-4">
      <div class="flex items-center gap-2 text-gray-400">
        <svg class="w-4 h-4" fill="currentColor" viewBox="0 0 20 20">
          <path d="M10 0C4.48 0 0 4.48 0 10C0 15.52 4.48 20 10 20C15.52 20 20 15.52 20 10C20 4.48 15.52 0 10 0ZM10 18C5.59 18 2 14.41 2 10C2 5.59 5.59 2 10 2C14.41 2 18 5.59 18 10C18 14.41 14.41 18 10 18ZM10 5C8.9 5 8 5.9 8 7C8 8.1 8.9 9 10 9C11.1 9 12 8.1 12 7C12 5.9 11.1 5 10 5ZM10 15.3C12.33 15.3 14.3 14.33 15 13C15 11.67 11.67 11 10 11C8.33 11 5 11.67 5 13C5.7 14.33 7.67 15.3 10 15.3Z"/>
        </svg>
        <span>Davao City, Philippines</span>
        <span class="text-pink-400/40">•</span>
        <span class="text-sm">Remote Available</span>
      </div>
      <a href="mailto:al.villamero@gmail.com" class="flex items-center gap-2 text-gray-400 hover:text-pink-400 transition-colors">
        <svg class="w-4 h-4" fill="currentColor" viewBox="0 0 20 20">
          <path d="M17.3333 2.5H2.66667C1.75 2.5 1 3.25 1 4.16667V15.8333C1 16.75 1.75 17.5 2.66667 17.5H17.3333C18.25 17.5 19 16.75 19 15.8333V4.16667C19 3.25 18.25 2.5 17.3333 2.5ZM17.3333 15.8333H2.66667V4.16667L10 10L17.3333 4.16667V15.8333ZM10 8.33333L2.66667 2.5H17.3333L10 8.33333Z"/>
        </svg>
        <span>al.villamero@gmail.com</span>
      </a>
    </div>
    <div class="flex items-center space-x-4">
      <div class="flex space-x-4">
        <a href="#" class="text-gray-400 hover:text-white transition-colors">
          <svg class="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
            <path d="M19 3H5C3.895 3 3 3.895 3 5V19C3 20.105 3.895 21 5 21H19C20.105 21 21 20.105 21 19V5C21 3.895 20.105 3 19 3ZM9 17H6.477V9H9V17ZM7.694 7.717C6.923 7.717 6.408 7.203 6.408 6.517C6.408 5.831 6.922 5.317 7.779 5.317C8.55 5.317 9.065 5.831 9.065 6.517C9.065 7.203 8.551 7.717 7.694 7.717ZM18 17H15.558V12.577C15.558 11.432 14.767 11.077 14.362 11.077C13.957 11.077 13.014 11.315 13.014 12.577C13.014 12.815 13.014 17 13.014 17H10.477V9H13.014V10.017C13.419 9.305 14.249 9 15.478 9C16.707 9 18 9.871 18 12.577V17Z"/>
          </svg>
        </a>
        <a href="#" class="text-gray-400 hover:text-white transition-colors">
          <svg class="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
            <path d="M12 2C6.475 2 2 6.475 2 12C2 16.425 4.8625 20.1625 8.8375 21.4875C9.3375 21.575 9.525 21.275 9.525 21.0125C9.525 20.775 9.5125 19.9875 9.5125 19.15C7 19.6125 6.35 18.5375 6.15 17.975C6.0375 17.6875 5.55 16.8 5.125 16.5625C4.775 16.375 4.275 15.9125 5.1125 15.9C5.9 15.8875 6.4625 16.625 6.65 16.925C7.55 18.4375 8.9875 18.0125 9.5625 17.75C9.65 17.1 9.9125 16.6625 10.2 16.4125C7.975 16.1625 5.65 15.3 5.65 11.475C5.65 10.3875 6.0375 9.4875 6.675 8.7875C6.575 8.5375 6.225 7.5125 6.775 6.1375C6.775 6.1375 7.6125 5.875 9.525 7.1625C10.325 6.9375 11.175 6.825 12.025 6.825C12.875 6.825 13.725 6.9375 14.525 7.1625C16.4375 5.8625 17.275 6.1375 17.275 6.1375C17.825 7.5125 17.475 8.5375 17.375 8.7875C18.0125 9.4875 18.4 10.375 18.4 11.475C18.4 15.3125 16.0625 16.1625 13.8375 16.4125C14.2 16.725 14.5125 17.325 14.5125 18.2625C14.5125 19.6 14.5 20.675 14.5 21.0125C14.5 21.275 14.6875 21.5875 15.1875 21.4875C19.1375 20.1625 22 16.4125 22 12C22 6.475 17.525 2 12 2Z"/>
          </svg>
        </a>
        <a href="#" class="text-gray-400 hover:text-white transition-colors">
          <svg class="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
            <path d="M12 2C6.48 2 2 6.48 2 12C2 17.52 6.48 22 12 22C17.52 22 22 17.52 22 12C22 6.48 17.52 2 12 2ZM4 12C4 11.39 4.08 10.79 4.21 10.22L8 14V15C8 16.1 8.9 17 10 17V19.93C6.55 19.2 4 15.91 4 12ZM17.9 17.39C17.64 16.58 16.9 16 16 16H15V13C15 12.45 14.55 12 14 12H8V10H10C10.55 10 11 9.55 11 9V7H13C14.1 7 15 6.1 15 5V4.59C17.93 5.78 20 8.65 20 12C20 14.08 19.2 15.97 17.9 17.39Z"/>
          </svg>
        </a>
      </div>
    </div>
    <div class="flex space-x-10 pt-10">
      <div>
        <p class="text-3xl font-bold text-white">5+</p>
        <p class="text-sm text-gray-400">Years Experience</p>
      </div>
      <div>
        <p class="text-3xl font-bold text-white">40+</p>
        <p class="text-sm text-gray-400">Projects Completed</p>
      </div>
      <div>
        <p class="text-3xl font-bold text-white">18+</p>
        <p class="text-sm text-gray-400">Happy Clients</p>
      </div>
    </div>
  </div>
  <div class="relative w-[400px] h-[400px] animate-pulse-slow">
    <!-- Glow Effects -->
    <div class="absolute -inset-4 bg-[#BA24FF] opacity-20 blur-2xl rounded-full"></div>
    <div class="absolute -inset-4 bg-[#5300A6] opacity-20 blur-2xl rounded-full"></div>
    
    <!-- Main Container -->
    <div class="relative w-full h-full">
      <!-- Decorative Corner Elements -->
      <div class="absolute -top-2 -right-2 w-24 h-24 border-t-2 border-r-2 border-[#BA24FF] rounded-tr-3xl opacity-60"></div>
      <div class="absolute -bottom-2 -left-2 w-24 h-24 border-b-2 border-l-2 border-[#5300A6] rounded-bl-3xl opacity-60"></div>
      
      <!-- Image Container -->
      <div class="relative w-full h-full p-[2px] bg-gradient-to-br from-[#5300A6] to-[#BA24FF] rounded-[2rem] shadow-[0_0_30px_rgba(138,43,226,0.2)] backdrop-blur-sm overflow-hidden">
        <div class="w-full h-full rounded-[1.95rem] bg-black overflow-hidden">
          <img
            src="@/assets/img/pic.jpg"
    alt="Profile"
            class="w-full h-[120%] object-cover object-top -translate-y-[10%]"
          />
        </div>
        
        <!-- Overlay Effects -->
        <div class="absolute inset-0 rounded-[2rem] bg-gradient-to-t from-black/70 via-black/10 to-transparent"></div>
      </div>
    </div>
</div>

</section>



    <!-- Experience -->
    <section id="experience" class="py-32 px-8 max-w-6xl mx-auto relative" data-aos="fade-up">
      <!-- Background Gradient -->
      <div class="absolute inset-0 bg-gradient-to-b from-transparent via-[#8000FF]/5 to-transparent"></div>
      
      <div class="relative">
        <div class="flex flex-col items-center text-center mb-16">
          <h2 class="text-3xl font-bold mb-4">Professional Experience</h2>
          <p class="text-gray-400 max-w-2xl">A track record of success in IT infrastructure, digital marketing, and technical support across international organizations.</p>
        </div>
        
        <div class="space-y-12">
          <!-- Red Jasper Studio -->
          <div class="bg-white/5 p-8 rounded-xl border border-white/10 hover:border-pink-400/20 transition-all duration-300">
            <div class="flex flex-col md:flex-row justify-between mb-6">
              <div>
                <h3 class="text-xl font-semibold text-white mb-2">Digital Marketing Associate</h3>
                <div class="flex flex-col sm:flex-row gap-2 sm:gap-4 text-sm">
                  <span class="text-pink-400 font-medium">Red Jasper Studio, LLC</span>
                  <span class="text-gray-500 hidden sm:inline">•</span>
                  <span class="text-gray-400">Delaware, US (Remote)</span>
                </div>
              </div>
              <p class="text-gray-400 text-sm mt-2 md:mt-0 font-medium">March 2023 - July 2025</p>
            </div>
            <ul class="space-y-3 text-gray-300 text-sm">
              <li class="flex gap-3">
                <span class="text-pink-400/40 mt-1.5">
                  <svg class="w-2 h-2" fill="currentColor" viewBox="0 0 8 8">
                    <circle cx="4" cy="4" r="3"/>
                  </svg>
                </span>
                <span>Developed and executed comprehensive social media strategies, resulting in 40% increase in engagement</span>
              </li>
              <li class="flex gap-3">
                <span class="text-pink-400/40 mt-1.5">
                  <svg class="w-2 h-2" fill="currentColor" viewBox="0 0 8 8">
                    <circle cx="4" cy="4" r="3"/>
                  </svg>
                </span>
                <span>Created and optimized video content for multiple platforms, improving view retention by 25%</span>
              </li>
              <li class="flex gap-3">
                <span class="text-pink-400/40 mt-1.5">
                  <svg class="w-2 h-2" fill="currentColor" viewBox="0 0 8 8">
                    <circle cx="4" cy="4" r="3"/>
                  </svg>
                </span>
                <span>Managed website maintenance and updates, ensuring 99.9% uptime and optimal performance</span>
              </li>
              <li class="flex gap-3">
                <span class="text-pink-400/40 mt-1.5">
                  <svg class="w-2 h-2" fill="currentColor" viewBox="0 0 8 8">
                    <circle cx="4" cy="4" r="3"/>
                  </svg>
                </span>
                <span>Implemented email marketing campaigns with 28% average open rate and 12% click-through rate</span>
              </li>
              <li class="flex gap-3">
                <span class="text-pink-400/40 mt-1.5">
                  <svg class="w-2 h-2" fill="currentColor" viewBox="0 0 8 8">
                    <circle cx="4" cy="4" r="3"/>
                  </svg>
                </span>
                <span>Designed and developed responsive websites using modern frameworks and best practices</span>
              </li>
            </ul>
          </div>

          <!-- Sheikh Ahmed -->
          <div class="bg-white/5 p-8 rounded-xl border border-white/10 hover:border-pink-400/20 transition-all duration-300">
            <div class="flex flex-col md:flex-row justify-between mb-6">
              <div>
                <h3 class="text-xl font-semibold text-white mb-2">IT Support Specialist</h3>
                <div class="flex flex-col sm:flex-row gap-2 sm:gap-4 text-sm">
                  <span class="text-pink-400 font-medium">Sheikh Ahmed Bin Faisal Al Qassimi</span>
                  <span class="text-gray-500 hidden sm:inline">•</span>
                  <span class="text-gray-400">Dubai, UAE</span>
                </div>
              </div>
              <p class="text-gray-400 text-sm mt-2 md:mt-0 font-medium">August 2022 - February 2023</p>
            </div>
            <ul class="space-y-3 text-gray-300 text-sm">
              <li class="flex gap-3">
                <span class="text-pink-400/40 mt-1.5">
                  <svg class="w-2 h-2" fill="currentColor" viewBox="0 0 8 8">
                    <circle cx="4" cy="4" r="3"/>
                  </svg>
                </span>
                <span>Led IT support operations, achieving 95% first-contact resolution rate for user requests</span>
              </li>
              <li class="flex gap-3">
                <span class="text-pink-400/40 mt-1.5">
                  <svg class="w-2 h-2" fill="currentColor" viewBox="0 0 8 8">
                    <circle cx="4" cy="4" r="3"/>
                  </svg>
                </span>
                <span>Implemented new IT policies and security measures, reducing security incidents by 40%</span>
              </li>
              <li class="flex gap-3">
                <span class="text-pink-400/40 mt-1.5">
                  <svg class="w-2 h-2" fill="currentColor" viewBox="0 0 8 8">
                    <circle cx="4" cy="4" r="3"/>
                  </svg>
                </span>
                <span>Managed user access and authentication systems for 200+ employees</span>
              </li>
              <li class="flex gap-3">
                <span class="text-pink-400/40 mt-1.5">
                  <svg class="w-2 h-2" fill="currentColor" viewBox="0 0 8 8">
                    <circle cx="4" cy="4" r="3"/>
                  </svg>
                </span>
                <span>Developed comprehensive technical documentation and user guides</span>
              </li>
            </ul>
          </div>

          <!-- Pullman Hotels -->
          <div class="bg-white/5 p-8 rounded-xl border border-white/10 hover:border-pink-400/20 transition-all duration-300">
            <div class="flex flex-col md:flex-row justify-between mb-6">
              <div>
                <h3 class="text-xl font-semibold text-white mb-2">IT Solution Officer</h3>
                <div class="flex flex-col sm:flex-row gap-2 sm:gap-4 text-sm">
                  <span class="text-pink-400 font-medium">Pullman Hotels and Resorts</span>
                  <span class="text-gray-500 hidden sm:inline">•</span>
                  <span class="text-gray-400">Dubai, UAE</span>
                </div>
              </div>
              <p class="text-gray-400 text-sm mt-2 md:mt-0 font-medium">October 2021 - July 2022</p>
            </div>
            <ul class="space-y-3 text-gray-300 text-sm">
              <li class="flex gap-3">
                <span class="text-pink-400/40 mt-1.5">
                  <svg class="w-2 h-2" fill="currentColor" viewBox="0 0 8 8">
                    <circle cx="4" cy="4" r="3"/>
                  </svg>
                </span>
                <span>Managed and optimized hotel-wide IT infrastructure, including PABX and network systems</span>
              </li>
              <li class="flex gap-3">
                <span class="text-pink-400/40 mt-1.5">
                  <svg class="w-2 h-2" fill="currentColor" viewBox="0 0 8 8">
                    <circle cx="4" cy="4" r="3"/>
                  </svg>
                </span>
                <span>Implemented and maintained IPTV and Chromecast systems across 250+ rooms</span>
              </li>
              <li class="flex gap-3">
                <span class="text-pink-400/40 mt-1.5">
                  <svg class="w-2 h-2" fill="currentColor" viewBox="0 0 8 8">
                    <circle cx="4" cy="4" r="3"/>
                  </svg>
                </span>
                <span>Coordinated AV setups for high-profile corporate events and conferences</span>
              </li>
              <li class="flex gap-3">
                <span class="text-pink-400/40 mt-1.5">
                  <svg class="w-2 h-2" fill="currentColor" viewBox="0 0 8 8">
                    <circle cx="4" cy="4" r="3"/>
                  </svg>
                </span>
                <span>Provided technical support to guests and staff, maintaining 98% satisfaction rate</span>
              </li>
            </ul>
          </div>

          <!-- Shepherd My Lambs -->
          <div class="bg-white/5 p-8 rounded-xl border border-white/10 hover:border-pink-400/20 transition-all duration-300">
            <div class="flex flex-col md:flex-row justify-between mb-6">
              <div>
                <h3 class="text-xl font-semibold text-white mb-2">IT Specialist</h3>
                <div class="flex flex-col sm:flex-row gap-2 sm:gap-4 text-sm">
                  <span class="text-pink-400 font-medium">Shepherd My Lambs Christian College</span>
                  <span class="text-gray-500 hidden sm:inline">•</span>
                  <span class="text-gray-400">Philippines</span>
                </div>
              </div>
              <p class="text-gray-400 text-sm mt-2 md:mt-0 font-medium">July 2020 - April 2021</p>
            </div>
            <ul class="space-y-3 text-gray-300 text-sm">
              <li class="flex gap-3">
                <span class="text-pink-400/40 mt-1.5">
                  <svg class="w-2 h-2" fill="currentColor" viewBox="0 0 8 8">
                    <circle cx="4" cy="4" r="3"/>
                  </svg>
                </span>
                <span>Established comprehensive security system with CCTV and access control integration</span>
              </li>
              <li class="flex gap-3">
                <span class="text-pink-400/40 mt-1.5">
                  <svg class="w-2 h-2" fill="currentColor" viewBox="0 0 8 8">
                    <circle cx="4" cy="4" r="3"/>
                  </svg>
                </span>
                <span>Managed Office 365 deployment and administration for 50+ staff members</span>
              </li>
              <li class="flex gap-3">
                <span class="text-pink-400/40 mt-1.5">
                  <svg class="w-2 h-2" fill="currentColor" viewBox="0 0 8 8">
                    <circle cx="4" cy="4" r="3"/>
                  </svg>
                </span>
                <span>Created and maintained digital marketing materials, increasing online engagement by 35%</span>
              </li>
              <li class="flex gap-3">
                <span class="text-pink-400/40 mt-1.5">
                  <svg class="w-2 h-2" fill="currentColor" viewBox="0 0 8 8">
                    <circle cx="4" cy="4" r="3"/>
                  </svg>
                </span>
                <span>Provided technical support and training to faculty and administrative staff</span>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </section>

    <!-- Services -->
    <section id="services" class="py-32 px-8 max-w-6xl mx-auto relative" data-aos="fade-up">
      <!-- Background Gradient -->
      <div class="absolute inset-0 bg-gradient-to-b from-transparent via-[#8000FF]/5 to-transparent"></div>
      
      <div class="relative">
        <div class="flex flex-col items-center text-center mb-16">
          <h2 class="text-3xl font-bold mb-4">Professional Services</h2>
          <p class="text-gray-400 max-w-2xl">Delivering innovative solutions that combine technical expertise with creative excellence to help businesses thrive in the digital age.</p>
        </div>
        
        <div class="grid md:grid-cols-2 gap-8">
          <!-- UI/UX Design -->
          <div class="group bg-white/5 p-8 rounded-xl border border-white/10 hover:border-pink-400/20 transition-all duration-300">
            <div class="flex items-start gap-6">
              <div class="bg-gradient-to-br from-[#5300A6] to-[#BA24FF] px-2 py-1.5 rounded-lg group-hover:scale-110 transition-transform">
                <svg class="w-5 h-5 text-white" fill="currentColor" viewBox="0 0 20 20">
                  <path d="M10 12a2 2 0 100-4 2 2 0 000 4z"/>
                  <path fill-rule="evenodd" d="M.458 10C1.732 5.943 5.522 3 10 3s8.268 2.943 9.542 7c-1.274 4.057-5.064 7-9.542 7S1.732 14.057.458 10zM14 10a4 4 0 11-8 0 4 4 0 018 0z" clip-rule="evenodd"/>
                </svg>
        </div>
              <div>
                <h3 class="text-lg font-semibold text-white mb-3 group-hover:text-pink-400 transition-colors">UI/UX Design</h3>
                <p class="text-sm text-gray-400 mb-4">Creating intuitive and engaging user experiences that drive results.</p>
                <ul class="space-y-2">
                  <li class="flex items-center gap-2 text-sm text-gray-400">
                    <span class="w-1 h-1 rounded-full bg-pink-400/40"></span>
                    <span>User-Centered Design</span>
                  </li>
                  <li class="flex items-center gap-2 text-sm text-gray-400">
                    <span class="w-1 h-1 rounded-full bg-pink-400/40"></span>
                    <span>Interface Prototyping</span>
                  </li>
                  <li class="flex items-center gap-2 text-sm text-gray-400">
                    <span class="w-1 h-1 rounded-full bg-pink-400/40"></span>
                    <span>Responsive Layouts</span>
                  </li>
                </ul>
        </div>
            </div>
          </div>
          
          <!-- Web Development -->
          <div class="group bg-white/5 p-8 rounded-xl border border-white/10 hover:border-pink-400/20 transition-all duration-300">
            <div class="flex items-start gap-6">
              <div class="bg-gradient-to-br from-[#5300A6] to-[#BA24FF] px-2 py-1.5 rounded-lg group-hover:scale-110 transition-transform">
                <svg class="w-5 h-5 text-white" fill="currentColor" viewBox="0 0 20 20">
                  <path fill-rule="evenodd" d="M12.316 3.051a1 1 0 01.633 1.265l-4 12a1 1 0 11-1.898-.632l4-12a1 1 0 011.265-.633zM5.707 6.293a1 1 0 010 1.414L3.414 10l2.293 2.293a1 1 0 11-1.414 1.414l-3-3a1 1 0 010-1.414l3-3a1 1 0 011.414 0zm8.586 0a1 1 0 011.414 0l3 3a1 1 0 010 1.414l-3 3a1 1 0 11-1.414-1.414L16.586 10l-2.293-2.293a1 1 0 010-1.414z" clip-rule="evenodd"/>
                </svg>
              </div>
              <div>
                <h3 class="text-lg font-semibold text-white mb-3 group-hover:text-pink-400 transition-colors">Web Development</h3>
                <p class="text-sm text-gray-400 mb-4">Building modern, high-performance web applications.</p>
                <ul class="space-y-2">
                  <li class="flex items-center gap-2 text-sm text-gray-400">
                    <span class="w-1 h-1 rounded-full bg-pink-400/40"></span>
                    <span>Custom Web Applications</span>
                  </li>
                  <li class="flex items-center gap-2 text-sm text-gray-400">
                    <span class="w-1 h-1 rounded-full bg-pink-400/40"></span>
                    <span>Frontend & Backend Development</span>
                  </li>
                  <li class="flex items-center gap-2 text-sm text-gray-400">
                    <span class="w-1 h-1 rounded-full bg-pink-400/40"></span>
                    <span>Performance Optimization</span>
                  </li>
                </ul>
              </div>
            </div>
          </div>
          
          <!-- Video Production -->
          <div class="group bg-white/5 p-8 rounded-xl border border-white/10 hover:border-pink-400/20 transition-all duration-300">
            <div class="flex items-start gap-6">
              <div class="bg-gradient-to-br from-[#5300A6] to-[#BA24FF] px-2 py-1.5 rounded-lg group-hover:scale-110 transition-transform">
                <svg class="w-5 h-5 text-white" fill="currentColor" viewBox="0 0 20 20">
                  <path d="M2 6a2 2 0 012-2h6a2 2 0 012 2v8a2 2 0 01-2 2H4a2 2 0 01-2-2V6zM14.553 7.106A1 1 0 0014 8v4a1 1 0 00.553.894l2 1A1 1 0 0018 13V7a1 1 0 00-1.447-.894l-2 1z"/>
                </svg>
              </div>
              <div>
                <h3 class="text-lg font-semibold text-white mb-3 group-hover:text-pink-400 transition-colors">Video Production</h3>
                <p class="text-sm text-gray-400 mb-4">Creating engaging video content for multiple platforms.</p>
                <ul class="space-y-2">
                  <li class="flex items-center gap-2 text-sm text-gray-400">
                    <span class="w-1 h-1 rounded-full bg-pink-400/40"></span>
                    <span>Professional Video Editing</span>
                  </li>
                  <li class="flex items-center gap-2 text-sm text-gray-400">
                    <span class="w-1 h-1 rounded-full bg-pink-400/40"></span>
                    <span>Motion Graphics</span>
                  </li>
                  <li class="flex items-center gap-2 text-sm text-gray-400">
                    <span class="w-1 h-1 rounded-full bg-pink-400/40"></span>
                    <span>Social Media Content</span>
                  </li>
                </ul>
              </div>
            </div>
          </div>
          
          <!-- Digital Marketing -->
          <div class="group bg-white/5 p-8 rounded-xl border border-white/10 hover:border-pink-400/20 transition-all duration-300">
            <div class="flex items-start gap-6">
              <div class="bg-gradient-to-br from-[#5300A6] to-[#BA24FF] px-2 py-1.5 rounded-lg group-hover:scale-110 transition-transform">
                <svg class="w-5 h-5 text-white" fill="currentColor" viewBox="0 0 20 20">
                  <path d="M2 11a1 1 0 011-1h2a1 1 0 011 1v5a1 1 0 01-1 1H3a1 1 0 01-1-1v-5zM8 7a1 1 0 011-1h2a1 1 0 011 1v9a1 1 0 01-1 1H9a1 1 0 01-1-1V7zM14 4a1 1 0 011-1h2a1 1 0 011 1v12a1 1 0 01-1 1h-2a1 1 0 01-1-1V4z"/>
                </svg>
              </div>
              <div>
                <h3 class="text-lg font-semibold text-white mb-3 group-hover:text-pink-400 transition-colors">Digital Marketing</h3>
                <p class="text-sm text-gray-400 mb-4">Driving growth through strategic digital marketing.</p>
                <ul class="space-y-2">
                  <li class="flex items-center gap-2 text-sm text-gray-400">
                    <span class="w-1 h-1 rounded-full bg-pink-400/40"></span>
                    <span>Social Media Strategy</span>
                  </li>
                  <li class="flex items-center gap-2 text-sm text-gray-400">
                    <span class="w-1 h-1 rounded-full bg-pink-400/40"></span>
                    <span>Content Marketing</span>
                  </li>
                  <li class="flex items-center gap-2 text-sm text-gray-400">
                    <span class="w-1 h-1 rounded-full bg-pink-400/40"></span>
                    <span>Analytics & Optimization</span>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>

    <!-- Portfolio -->
    <section id="portfolio" class="py-32 px-8 max-w-6xl mx-auto relative" data-aos="fade-up">
      <!-- Background Gradient -->
      <div class="absolute inset-0 bg-gradient-to-b from-transparent via-[#8000FF]/5 to-transparent"></div>
      
      <div class="relative">
        <div class="flex flex-col items-center text-center mb-16">
          <h2 class="text-3xl font-bold mb-4">Featured Projects</h2>
          <p class="text-gray-400 max-w-2xl">A selection of my recent work showcasing web development, design, and digital solutions.</p>
      </div>

        <!-- Project Categories -->
        <div class="flex flex-col items-center gap-6 mb-12">
          <div class="flex flex-wrap justify-center gap-3">
            <button class="px-6 py-2 bg-gradient-to-r from-[#5300A6] to-[#BA24FF] rounded-lg text-sm font-medium text-white hover:opacity-90 transition-opacity">
              All Projects
            </button>
            <button class="px-6 py-2 bg-white/5 border border-white/10 rounded-lg text-sm font-medium text-gray-400 hover:text-white hover:border-pink-400/20 transition-colors">
              Web Development
            </button>
            <button class="px-6 py-2 bg-white/5 border border-white/10 rounded-lg text-sm font-medium text-gray-400 hover:text-white hover:border-pink-400/20 transition-colors">
              UI/UX Design
            </button>
            <button class="px-6 py-2 bg-white/5 border border-white/10 rounded-lg text-sm font-medium text-gray-400 hover:text-white hover:border-pink-400/20 transition-colors">
              Digital Marketing
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
        <div class="grid md:grid-cols-2 gap-8">
          <!-- Trading Signals -->
          <div class="group relative bg-white/5 rounded-xl border border-white/10 overflow-hidden hover:border-pink-400/20 transition-all duration-300">
            <div class="grid grid-cols-3 gap-2 p-2">
              <div class="aspect-[16/10] overflow-hidden cursor-pointer rounded-lg" @click="openImageModal('/src/assets/img/my projects/websites/tradingsignals.jpg')">
                <img src="/src/assets/img/my projects/websites/tradingsignals.jpg" alt="Trading Signals Platform" class="w-full h-full object-contain bg-black/20 group-hover:scale-105 transition-transform duration-500" />
              </div>
              <div class="aspect-[16/10] overflow-hidden cursor-pointer rounded-lg" @click="openImageModal('/src/assets/img/my projects/websites/tradingsignals-funnel.jpg')">
                <img src="/src/assets/img/my projects/websites/tradingsignals-funnel.jpg" alt="Trading Signals Funnel" class="w-full h-full object-contain bg-black/20 group-hover:scale-105 transition-transform duration-500" />
              </div>
              <div class="aspect-[16/10] overflow-hidden cursor-pointer rounded-lg" @click="openImageModal('/src/assets/img/my projects/websites/tradingsignals-old.jpg')">
                <img src="/src/assets/img/my projects/websites/tradingsignals-old.jpg" alt="Trading Signals Old Version" class="w-full h-full object-contain bg-black/20 group-hover:scale-105 transition-transform duration-500" />
              </div>
            </div>
            <div class="p-6">
              <div class="flex items-center gap-3 mb-3">
                <span class="px-3 py-1 bg-white/5 rounded-full text-xs font-medium text-pink-400">Forex</span>
                <span class="px-3 py-1 bg-white/5 rounded-full text-xs font-medium text-pink-400">Crypto</span>
                <span class="px-3 py-1 bg-white/5 rounded-full text-xs font-medium text-pink-400">Stocks</span>
              </div>
              <h3 class="text-lg font-semibold text-white mb-2 group-hover:text-pink-400 transition-colors">Trading Signals</h3>
              <p class="text-sm text-gray-400 mb-4">Provides trading signals and automated bots for forex, crypto, and stocks markets, delivering actionable insights for traders.</p>
              <div class="flex items-center gap-4">
                <a href="#" class="text-sm font-medium text-white hover:text-pink-400 transition-colors">View Project</a>
                <svg class="w-4 h-4 text-pink-400 group-hover:translate-x-1 transition-transform" fill="currentColor" viewBox="0 0 20 20">
                  <path fill-rule="evenodd" d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z" clip-rule="evenodd" />
                </svg>
              </div>
            </div>
          </div>

          <!-- Volume Day Trader -->
          <div class="group relative bg-white/5 rounded-xl border border-white/10 overflow-hidden hover:border-pink-400/20 transition-all duration-300">
            <div class="grid grid-cols-2 gap-2 p-2">
              <div class="aspect-[16/10] overflow-hidden cursor-pointer rounded-lg" @click="openImageModal('/src/assets/img/my projects/websites/volumedaytrader.jpg')">
                <img src="/src/assets/img/my projects/websites/volumedaytrader.jpg" alt="Volume Day Trader" class="w-full h-full object-contain bg-black/20 group-hover:scale-105 transition-transform duration-500" />
              </div>
              <div class="aspect-[16/10] overflow-hidden cursor-pointer rounded-lg" @click="openImageModal('/src/assets/img/my projects/websites/volumedaytrader-funnel.jpg')">
                <img src="/src/assets/img/my projects/websites/volumedaytrader-funnel.jpg" alt="Volume Day Trader Funnel" class="w-full h-full object-contain bg-black/20 group-hover:scale-105 transition-transform duration-500" />
              </div>
            </div>
            <div class="p-6">
              <div class="flex items-center gap-3 mb-3">
                <span class="px-3 py-1 bg-white/5 rounded-full text-xs font-medium text-pink-400">Wyckoff Method</span>
                <span class="px-3 py-1 bg-white/5 rounded-full text-xs font-medium text-pink-400">Day Trading</span>
              </div>
              <h3 class="text-lg font-semibold text-white mb-2 group-hover:text-pink-400 transition-colors">Volume Day Trader</h3>
              <p class="text-sm text-gray-400 mb-4">Offers Wyckoff method–based indicators and a community of active day traders, providing specialized tools for volume analysis.</p>
              <div class="flex items-center gap-4">
                <a href="#" class="text-sm font-medium text-white hover:text-pink-400 transition-colors">View Project</a>
                <svg class="w-4 h-4 text-pink-400 group-hover:translate-x-1 transition-transform" fill="currentColor" viewBox="0 0 20 20">
                  <path fill-rule="evenodd" d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z" clip-rule="evenodd" />
                </svg>
              </div>
            </div>
          </div>

          <!-- Kopii AI -->
          <div class="group relative bg-white/5 rounded-xl border border-white/10 overflow-hidden hover:border-pink-400/20 transition-all duration-300">
            <div class="aspect-[16/10] overflow-hidden cursor-pointer" @click="openImageModal('/src/assets/img/my projects/websites/' + $event.target.src.split('/').pop())">
              <img src="/src/assets/img/my projects/websites/kopii%20ai.jpg" alt="Kopii AI" class="w-full h-full object-contain bg-black/20 group-hover:scale-105 transition-transform duration-500" />
            </div>
            <div class="p-6">
              <div class="flex items-center gap-3 mb-3">
                <span class="px-3 py-1 bg-white/5 rounded-full text-xs font-medium text-pink-400">AI Trading</span>
                <span class="px-3 py-1 bg-white/5 rounded-full text-xs font-medium text-pink-400">Deep Learning</span>
              </div>
              <h3 class="text-lg font-semibold text-white mb-2 group-hover:text-pink-400 transition-colors">Kopii AI</h3>
              <p class="text-sm text-gray-400 mb-4">AI-driven trading platform born in Asia, blending hedge fund expertise with deep learning for consistent, automated trading performance.</p>
              <div class="flex items-center gap-4">
                <a href="#" class="text-sm font-medium text-white hover:text-pink-400 transition-colors">View Project</a>
                <svg class="w-4 h-4 text-pink-400 group-hover:translate-x-1 transition-transform" fill="currentColor" viewBox="0 0 20 20">
                  <path fill-rule="evenodd" d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z" clip-rule="evenodd" />
                </svg>
              </div>
            </div>
          </div>

          <!-- Global Grid Solutions -->
          <div class="group relative bg-white/5 rounded-xl border border-white/10 overflow-hidden hover:border-pink-400/20 transition-all duration-300">
            <div class="aspect-[16/10] overflow-hidden cursor-pointer" @click="openImageModal('/src/assets/img/my projects/websites/' + $event.target.src.split('/').pop())">
              <img src="/src/assets/img/my projects/websites/globalgridsolutions.jpg" alt="Global Grid Solutions" class="w-full h-full object-contain bg-black/20 group-hover:scale-105 transition-transform duration-500" />
            </div>
            <div class="p-6">
              <div class="flex items-center gap-3 mb-3">
                <span class="px-3 py-1 bg-white/5 rounded-full text-xs font-medium text-pink-400">BPO</span>
                <span class="px-3 py-1 bg-white/5 rounded-full text-xs font-medium text-pink-400">Virtual Assistance</span>
              </div>
              <h3 class="text-lg font-semibold text-white mb-2 group-hover:text-pink-400 transition-colors">Global Grid Solutions</h3>
              <p class="text-sm text-gray-400 mb-4">Delivers digital outsourcing services specializing in BPO and virtual assistance, providing comprehensive business support solutions.</p>
              <div class="flex items-center gap-4">
                <a href="#" class="text-sm font-medium text-white hover:text-pink-400 transition-colors">View Project</a>
                <svg class="w-4 h-4 text-pink-400 group-hover:translate-x-1 transition-transform" fill="currentColor" viewBox="0 0 20 20">
                  <path fill-rule="evenodd" d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z" clip-rule="evenodd" />
                </svg>
              </div>
            </div>
          </div>

          <!-- Asia Offshore Banking -->
          <div class="group relative bg-white/5 rounded-xl border border-white/10 overflow-hidden hover:border-pink-400/20 transition-all duration-300">
            <div class="aspect-[16/10] overflow-hidden cursor-pointer bg-black/20" @click="openImageModal('/src/assets/img/my projects/websites/asiaoffshorebanking.jpg')">
              <img src="/src/assets/img/my projects/websites/asiaoffshorebanking.jpg" alt="Asia Offshore Banking" class="w-full h-full object-contain group-hover:scale-105 transition-transform duration-500" />
            </div>
            <div class="p-6">
              <div class="flex items-center gap-3 mb-3">
                <span class="px-3 py-1 bg-white/5 rounded-full text-xs font-medium text-pink-400">Offshore Banking</span>
                <span class="px-3 py-1 bg-white/5 rounded-full text-xs font-medium text-pink-400">Financial Services</span>
              </div>
              <h3 class="text-lg font-semibold text-white mb-2 group-hover:text-pink-400 transition-colors">Asia Offshore Banking</h3>
              <p class="text-sm text-gray-400 mb-4">Assists with setting up offshore and private bank accounts across Asia, providing comprehensive banking solutions and guidance.</p>
              <div class="flex items-center gap-4">
                <a href="#" class="text-sm font-medium text-white hover:text-pink-400 transition-colors">View Project</a>
                <svg class="w-4 h-4 text-pink-400 group-hover:translate-x-1 transition-transform" fill="currentColor" viewBox="0 0 20 20">
                  <path fill-rule="evenodd" d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z" clip-rule="evenodd" />
                </svg>
              </div>
            </div>
          </div>

          <!-- ADV Rangers -->
          <div class="group relative bg-white/5 rounded-xl border border-white/10 overflow-hidden hover:border-pink-400/20 transition-all duration-300">
            <div class="aspect-[16/10] overflow-hidden cursor-pointer" @click="openImageModal('/src/assets/img/my projects/websites/' + $event.target.src.split('/').pop())">
              <img src="/src/assets/img/my projects/websites/advrangers.jpg" alt="ADV Rangers" class="w-full h-full object-contain bg-black/20 group-hover:scale-105 transition-transform duration-500" />
            </div>
            <div class="p-6">
              <div class="flex items-center gap-3 mb-3">
                <span class="px-3 py-1 bg-white/5 rounded-full text-xs font-medium text-pink-400">Adventure Tours</span>
                <span class="px-3 py-1 bg-white/5 rounded-full text-xs font-medium text-pink-400">Dirt Bikes</span>
              </div>
              <h3 class="text-lg font-semibold text-white mb-2 group-hover:text-pink-400 transition-colors">ADV Rangers</h3>
              <p class="text-sm text-gray-400 mb-4">Organizes guided dirt bike tour packages across Cambodia's trails and countryside, offering unique adventure experiences.</p>
              <div class="flex items-center gap-4">
                <a href="#" class="text-sm font-medium text-white hover:text-pink-400 transition-colors">View Project</a>
                <svg class="w-4 h-4 text-pink-400 group-hover:translate-x-1 transition-transform" fill="currentColor" viewBox="0 0 20 20">
                  <path fill-rule="evenodd" d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z" clip-rule="evenodd" />
                </svg>
              </div>
            </div>
          </div>

          <!-- JV Holdings Corp -->
          <div class="group relative bg-white/5 rounded-xl border border-white/10 overflow-hidden hover:border-pink-400/20 transition-all duration-300">
            <div class="aspect-[16/10] overflow-hidden cursor-pointer" @click="openImageModal('/src/assets/img/my projects/websites/' + $event.target.src.split('/').pop())">
              <img src="/src/assets/img/my projects/websites/jvholdingscorp.jpg" alt="JV Holdings Corp" class="w-full h-full object-contain bg-black/20 group-hover:scale-105 transition-transform duration-500" />
            </div>
            <div class="p-6">
              <div class="flex items-center gap-3 mb-3">
                <span class="px-3 py-1 bg-white/5 rounded-full text-xs font-medium text-pink-400">Holdings</span>
                <span class="px-3 py-1 bg-white/5 rounded-full text-xs font-medium text-pink-400">Investment</span>
              </div>
              <h3 class="text-lg font-semibold text-white mb-2 group-hover:text-pink-400 transition-colors">JV Holdings Corp</h3>
              <p class="text-sm text-gray-400 mb-4">A visionary holding company driving growth through strategic acquisitions and innovative subsidiaries.</p>
              <div class="flex items-center gap-4">
                <a href="#" class="text-sm font-medium text-white hover:text-pink-400 transition-colors">View Project</a>
                <svg class="w-4 h-4 text-pink-400 group-hover:translate-x-1 transition-transform" fill="currentColor" viewBox="0 0 20 20">
                  <path fill-rule="evenodd" d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z" clip-rule="evenodd" />
                </svg>
              </div>
            </div>
          </div>

          <!-- Nieruchomości w Kambodży -->
          <div class="group relative bg-white/5 rounded-xl border border-white/10 overflow-hidden hover:border-pink-400/20 transition-all duration-300">
            <div class="aspect-[16/10] overflow-hidden cursor-pointer" @click="openImageModal('/src/assets/img/my projects/websites/' + $event.target.src.split('/').pop())">
              <img src="/src/assets/img/my projects/websites/nieruchomosciwkambodzy.jpg" alt="Nieruchomości w Kambodży" class="w-full h-full object-contain bg-black/20 group-hover:scale-105 transition-transform duration-500" />
            </div>
            <div class="p-6">
              <div class="flex items-center gap-3 mb-3">
                <span class="px-3 py-1 bg-white/5 rounded-full text-xs font-medium text-pink-400">Real Estate</span>
                <span class="px-3 py-1 bg-white/5 rounded-full text-xs font-medium text-pink-400">Investment</span>
              </div>
              <h3 class="text-lg font-semibold text-white mb-2 group-hover:text-pink-400 transition-colors">Nieruchomości w Kambodży</h3>
              <p class="text-sm text-gray-400 mb-4">Polish-language platform dedicated to real estate investment opportunities in Cambodia.</p>
              <div class="flex items-center gap-4">
                <a href="#" class="text-sm font-medium text-white hover:text-pink-400 transition-colors">View Project</a>
                <svg class="w-4 h-4 text-pink-400 group-hover:translate-x-1 transition-transform" fill="currentColor" viewBox="0 0 20 20">
                  <path fill-rule="evenodd" d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z" clip-rule="evenodd" />
                </svg>
              </div>
            </div>
          </div>

          <!-- Tomasz Rozmus -->
          <div class="group relative bg-white/5 rounded-xl border border-white/10 overflow-hidden hover:border-pink-400/20 transition-all duration-300">
            <div class="aspect-[16/10] overflow-hidden cursor-pointer" @click="openImageModal('/src/assets/img/my projects/websites/' + $event.target.src.split('/').pop())">
              <img src="/src/assets/img/my projects/websites/tomaszrozmus.jpg" alt="Tomasz Rozmus" class="w-full h-full object-contain bg-black/20 group-hover:scale-105 transition-transform duration-500" />
            </div>
            <div class="p-6">
              <div class="flex items-center gap-3 mb-3">
                <span class="px-3 py-1 bg-white/5 rounded-full text-xs font-medium text-pink-400">Trading</span>
                <span class="px-3 py-1 bg-white/5 rounded-full text-xs font-medium text-pink-400">Advisory</span>
              </div>
              <h3 class="text-lg font-semibold text-white mb-2 group-hover:text-pink-400 transition-colors">Tomasz Rozmus</h3>
              <p class="text-sm text-gray-400 mb-4">Expert in stock and crypto markets; advisor on Asian opportunities including real estate, crypto/fiat transfers, and private banking solutions.</p>
              <div class="flex items-center gap-4">
                <a href="#" class="text-sm font-medium text-white hover:text-pink-400 transition-colors">View Project</a>
                <svg class="w-4 h-4 text-pink-400 group-hover:translate-x-1 transition-transform" fill="currentColor" viewBox="0 0 20 20">
                  <path fill-rule="evenodd" d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z" clip-rule="evenodd" />
                </svg>
              </div>
            </div>
          </div>

          <!-- Trading Financial Markets -->
          <div class="group relative bg-white/5 rounded-xl border border-white/10 overflow-hidden hover:border-pink-400/20 transition-all duration-300">
            <div class="aspect-[16/10] overflow-hidden cursor-pointer" @click="openImageModal('/src/assets/img/my projects/websites/' + $event.target.src.split('/').pop())">
              <img src="/src/assets/img/my projects/websites/tradingfinancialmarkets.jpg" alt="Trading Financial Markets" class="w-full h-full object-contain bg-black/20 group-hover:scale-105 transition-transform duration-500" />
            </div>
            <div class="p-6">
              <div class="flex items-center gap-3 mb-3">
                <span class="px-3 py-1 bg-white/5 rounded-full text-xs font-medium text-pink-400">Education</span>
                <span class="px-3 py-1 bg-white/5 rounded-full text-xs font-medium text-pink-400">Trading</span>
              </div>
              <h3 class="text-lg font-semibold text-white mb-2 group-hover:text-pink-400 transition-colors">Trading Financial Markets</h3>
              <p class="text-sm text-gray-400 mb-4">Education hub focused on trading strategies for forex, crypto, and global equities markets.</p>
              <div class="flex items-center gap-4">
                <a href="#" class="text-sm font-medium text-white hover:text-pink-400 transition-colors">View Project</a>
                <svg class="w-4 h-4 text-pink-400 group-hover:translate-x-1 transition-transform" fill="currentColor" viewBox="0 0 20 20">
                  <path fill-rule="evenodd" d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z" clip-rule="evenodd" />
                </svg>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>

    <!-- Skills -->
    <section id="skills" class="py-32 px-8 max-w-6xl mx-auto" data-aos="fade-up">
      <div class="relative">
        <div class="flex flex-col items-center text-center mb-16">
          <h2 class="text-3xl font-bold mb-4">Core Expertise</h2>
          <p class="text-gray-400 max-w-2xl">Full-stack web developer and digital marketing specialist with a proven track record in creating engaging digital experiences and driving online growth.</p>
        </div>
        
        <div class="grid md:grid-cols-2 gap-8">
          <!-- Web Development -->
          <div class="group bg-white/5 p-8 rounded-xl border border-white/10 hover:border-pink-400/20 transition-all duration-300">
            <div class="flex items-start gap-6">
              <div class="bg-gradient-to-br from-[#5300A6] to-[#BA24FF] px-2 py-1.5 rounded-lg group-hover:scale-110 transition-transform">
                <svg class="w-5 h-5 text-white" fill="currentColor" viewBox="0 0 20 20">
                  <path fill-rule="evenodd" d="M12.316 3.051a1 1 0 01.633 1.265l-4 12a1 1 0 11-1.898-.632l4-12a1 1 0 011.265-.633zM5.707 6.293a1 1 0 010 1.414L3.414 10l2.293 2.293a1 1 0 11-1.414 1.414l-3-3a1 1 0 010-1.414l3-3a1 1 0 011.414 0zm8.586 0a1 1 0 011.414 0l3 3a1 1 0 010 1.414l-3 3a1 1 0 11-1.414-1.414L16.586 10l-2.293-2.293a1 1 0 010-1.414z" clip-rule="evenodd"/>
                </svg>
        </div>
              <div>
                <h3 class="text-lg font-semibold text-white mb-4 group-hover:text-pink-400 transition-colors">Web Development</h3>
                <div class="space-y-3">
                  <div class="flex items-center gap-2">
                    <div class="h-1 w-full bg-white/5 rounded">
                      <div class="h-1 w-[95%] bg-gradient-to-r from-[#5300A6] to-[#BA24FF] rounded"></div>
        </div>
                    <span class="text-xs font-medium text-gray-400 w-12">95%</span>
                  </div>
                  <div class="grid grid-cols-2 gap-3">
                    <div class="space-y-2">
                      <p class="text-sm font-medium text-white">Frontend</p>
                      <ul class="space-y-2.5 text-sm text-gray-400">
                        <li class="flex items-center gap-3">
                          <span class="w-1.5 h-1.5 rounded-full bg-purple-500/40"></span>
                          <span>React.js</span>
                        </li>
                        <li class="flex items-center gap-3">
                          <span class="w-1.5 h-1.5 rounded-full bg-purple-500/40"></span>
                          <span>Vue.js</span>
                        </li>
                        <li class="flex items-center gap-3">
                          <span class="w-1.5 h-1.5 rounded-full bg-purple-500/40"></span>
                          <span>TailwindCSS</span>
                        </li>
                      </ul>
                    </div>
                    <div class="space-y-2">
                      <p class="text-sm font-medium text-white">No-Code</p>
                      <ul class="space-y-2.5 text-sm text-gray-400">
                        <li class="flex items-center gap-3">
                          <span class="w-1.5 h-1.5 rounded-full bg-purple-500/40"></span>
                          <span>WordPress</span>
                        </li>
                        <li class="flex items-center gap-3">
                          <span class="w-1.5 h-1.5 rounded-full bg-purple-500/40"></span>
                          <span>Webflow</span>
                        </li>
                        <li class="flex items-center gap-3">
                          <span class="w-1.5 h-1.5 rounded-full bg-purple-500/40"></span>
                          <span>Shopify</span>
                        </li>
                      </ul>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <!-- Digital Marketing & Creative -->
          <div class="group bg-white/5 p-8 rounded-xl border border-white/10 hover:border-pink-400/20 transition-all duration-300">
            <div class="flex items-start gap-6">
              <div class="bg-gradient-to-br from-[#5300A6] to-[#BA24FF] px-2 py-1.5 rounded-lg group-hover:scale-110 transition-transform">
                <svg class="w-5 h-5 text-white" fill="currentColor" viewBox="0 0 20 20">
                  <path d="M2 11a1 1 0 011-1h2a1 1 0 011 1v5a1 1 0 01-1 1H3a1 1 0 01-1-1v-5zM8 7a1 1 0 011-1h2a1 1 0 011 1v9a1 1 0 01-1 1H9a1 1 0 01-1-1V7zM14 4a1 1 0 011-1h2a1 1 0 011 1v12a1 1 0 01-1 1h-2a1 1 0 01-1-1V4z"/>
                </svg>
              </div>
              <div>
                <h3 class="text-lg font-semibold text-white mb-4 group-hover:text-pink-400 transition-colors">Digital Marketing & Creative</h3>
                <div class="space-y-3">
                  <div class="flex items-center gap-2">
                    <div class="h-1 w-full bg-white/5 rounded">
                      <div class="h-1 w-[90%] bg-gradient-to-r from-[#5300A6] to-[#BA24FF] rounded"></div>
                    </div>
                    <span class="text-xs font-medium text-gray-400 w-12">90%</span>
                  </div>
                  <div class="grid grid-cols-2 gap-3">
                    <div class="space-y-2">
                      <p class="text-sm font-medium text-white">Marketing</p>
                      <ul class="space-y-2.5 text-sm text-gray-400">
                        <li class="flex items-center gap-3">
                          <span class="w-1.5 h-1.5 rounded-full bg-purple-500/40"></span>
                          <span>Social Media</span>
                        </li>
                        <li class="flex items-center gap-3">
                          <span class="w-1.5 h-1.5 rounded-full bg-purple-500/40"></span>
                          <span>Content Strategy</span>
                        </li>
                        <li class="flex items-center gap-3">
                          <span class="w-1.5 h-1.5 rounded-full bg-purple-500/40"></span>
                          <span>Email Marketing</span>
                        </li>
                      </ul>
                    </div>
                    <div class="space-y-2">
                      <p class="text-sm font-medium text-white">Design</p>
                      <ul class="space-y-2.5 text-sm text-gray-400">
                        <li class="flex items-center gap-3">
                          <span class="w-1.5 h-1.5 rounded-full bg-purple-500/40"></span>
                          <span>Adobe Creative</span>
                        </li>
                        <li class="flex items-center gap-3">
                          <span class="w-1.5 h-1.5 rounded-full bg-purple-500/40"></span>
                          <span>UI/UX Design</span>
                        </li>
                        <li class="flex items-center gap-3">
                          <span class="w-1.5 h-1.5 rounded-full bg-purple-500/40"></span>
                          <span>Video Editing</span>
                        </li>
                      </ul>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <!-- Support & Service -->
          <div class="group bg-white/5 p-8 rounded-xl border border-white/10 hover:border-pink-400/20 transition-all duration-300">
            <div class="flex items-start gap-6">
              <div class="bg-gradient-to-br from-[#5300A6] to-[#BA24FF] px-2 py-1.5 rounded-lg group-hover:scale-110 transition-transform">
                <svg class="w-5 h-5 text-white" fill="currentColor" viewBox="0 0 20 20">
                  <path fill-rule="evenodd" d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-2 0c0 .993-.241 1.929-.668 2.754l-1.524-1.525a3.997 3.997 0 00.078-2.183l1.562-1.562C15.802 8.249 16 9.1 16 10zm-5.165 3.913l1.58 1.58A5.98 5.98 0 0110 16a5.976 5.976 0 01-2.516-.552l1.562-1.562a4.006 4.006 0 001.789.027zm-4.677-2.796a4.002 4.002 0 01-.041-2.08l-.08.08-1.53-1.533A5.98 5.98 0 004 10c0 .954.223 1.856.619 2.657l1.54-1.54zm1.088-6.45A5.974 5.974 0 0110 4c.954 0 1.856.223 2.657.619l-1.54 1.54a4.002 4.002 0 00-2.346.033L7.246 4.668zM12 10a2 2 0 11-4 0 2 2 0 014 0z" clip-rule="evenodd"/>
                </svg>
              </div>
              <div>
                <h3 class="text-lg font-semibold text-white mb-4 group-hover:text-pink-400 transition-colors">Technical Support</h3>
                <div class="space-y-3">
                  <div class="flex items-center gap-2">
                    <div class="h-1 w-full bg-white/5 rounded">
                      <div class="h-1 w-[92%] bg-gradient-to-r from-[#5300A6] to-[#BA24FF] rounded"></div>
                    </div>
                    <span class="text-xs font-medium text-gray-400 w-12">92%</span>
                  </div>
                  <ul class="space-y-2.5 text-sm text-gray-400">
                    <li class="flex items-center gap-3">
                      <span class="w-1.5 h-1.5 rounded-full bg-purple-500/40"></span>
                      <span>L1/L2 Technical Support</span>
                    </li>
                    <li class="flex items-center gap-3">
                      <span class="w-1.5 h-1.5 rounded-full bg-purple-500/40"></span>
                      <span>Remote System Administration</span>
                    </li>
                    <li class="flex items-center gap-3">
                      <span class="w-1.5 h-1.5 rounded-full bg-purple-500/40"></span>
                      <span>Technical Documentation</span>
                    </li>
                    <li class="flex items-center gap-3">
                      <span class="w-1.5 h-1.5 rounded-full bg-purple-500/40"></span>
                      <span>User Training & Support</span>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>

          <!-- AV & Media -->
          <div class="group bg-white/5 p-8 rounded-xl border border-white/10 hover:border-pink-400/20 transition-all duration-300">
            <div class="flex items-start gap-6">
              <div class="bg-gradient-to-br from-[#5300A6] to-[#BA24FF] px-2 py-1.5 rounded-lg group-hover:scale-110 transition-transform">
                <svg class="w-5 h-5 text-white" fill="currentColor" viewBox="0 0 20 20">
                  <path d="M2 6a2 2 0 012-2h6a2 2 0 012 2v8a2 2 0 01-2 2H4a2 2 0 01-2-2V6zM14.553 7.106A1 1 0 0014 8v4a1 1 0 00.553.894l2 1A1 1 0 0018 13V7a1 1 0 00-1.447-.894l-2 1z"/>
                </svg>
              </div>
              <div>
                <h3 class="text-lg font-semibold text-white mb-4 group-hover:text-pink-400 transition-colors">AV & Media Systems</h3>
                <div class="space-y-3">
                  <div class="flex items-center gap-2">
                    <div class="h-1 w-full bg-white/5 rounded">
                      <div class="h-1 w-[88%] bg-gradient-to-r from-[#5300A6] to-[#BA24FF] rounded"></div>
                    </div>
                    <span class="text-xs font-medium text-gray-400 w-12">88%</span>
                  </div>
                  <ul class="space-y-2.5 text-sm text-gray-400">
                    <li class="flex items-center gap-3">
                      <span class="w-1.5 h-1.5 rounded-full bg-purple-500/40"></span>
                      <span>Professional AV Setup</span>
                    </li>
                    <li class="flex items-center gap-3">
                      <span class="w-1.5 h-1.5 rounded-full bg-purple-500/40"></span>
                      <span>Digital Signage Systems</span>
                    </li>
                    <li class="flex items-center gap-3">
                      <span class="w-1.5 h-1.5 rounded-full bg-purple-500/40"></span>
                      <span>IPTV Implementation</span>
                    </li>
                    <li class="flex items-center gap-3">
                      <span class="w-1.5 h-1.5 rounded-full bg-purple-500/40"></span>
                      <span>Event Technical Direction</span>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>

          <!-- Tools & Software -->
          <div class="group bg-white/5 p-8 rounded-xl border border-white/10 hover:border-pink-400/20 transition-all duration-300">
            <div class="flex items-start gap-6">
              <div class="bg-gradient-to-br from-[#5300A6] to-[#BA24FF] px-2 py-1.5 rounded-lg group-hover:scale-110 transition-transform">
                <svg class="w-5 h-5 text-white" fill="currentColor" viewBox="0 0 20 20">
                  <path fill-rule="evenodd" d="M6 2a2 2 0 00-2 2v12a2 2 0 002 2h8a2 2 0 002-2V7.414A2 2 0 0015.414 6L12 2.586A2 2 0 0010.586 2H6zm5 6a1 1 0 10-2 0v3.586l-1.293-1.293a1 1 0 10-1.414 1.414l3 3a1 1 0 001.414 0l3-3a1 1 0 00-1.414-1.414L11 11.586V8z" clip-rule="evenodd"/>
                </svg>
              </div>
              <div>
                <h3 class="text-lg font-semibold text-white mb-4 group-hover:text-pink-400 transition-colors">Professional Tools</h3>
                <div class="space-y-3">
                  <div class="flex items-center gap-2">
                    <div class="h-1 w-full bg-white/5 rounded">
                      <div class="h-1 w-[94%] bg-gradient-to-r from-[#5300A6] to-[#BA24FF] rounded"></div>
                    </div>
                    <span class="text-xs font-medium text-gray-400 w-12">94%</span>
                  </div>
                  <ul class="space-y-2.5 text-sm text-gray-400">
                    <li class="flex items-center gap-3">
                      <span class="w-1.5 h-1.5 rounded-full bg-purple-500/40"></span>
                      <span>Microsoft 365 Suite</span>
                    </li>
                    <li class="flex items-center gap-3">
                      <span class="w-1.5 h-1.5 rounded-full bg-purple-500/40"></span>
                      <span>Adobe Creative Cloud</span>
                    </li>
                    <li class="flex items-center gap-3">
                      <span class="w-1.5 h-1.5 rounded-full bg-purple-500/40"></span>
                      <span>Project Management Software</span>
                    </li>
                    <li class="flex items-center gap-3">
                      <span class="w-1.5 h-1.5 rounded-full bg-purple-500/40"></span>
                      <span>Network Monitoring Tools</span>
                    </li>
                  </ul>
                </div>
              </div>
        </div>
        </div>
        </div>
      </div>
    </section>

    <!-- Education & Training -->
    <section class="py-32 px-8 max-w-6xl mx-auto relative" data-aos="fade-up">
      <!-- Background Gradient -->
      <div class="absolute inset-0 bg-gradient-to-b from-transparent via-[#8000FF]/5 to-transparent"></div>
      
      <div class="relative">
        <div class="flex flex-col items-center text-center mb-16">
          <h2 class="text-3xl font-bold mb-4">Education & Experience</h2>
          <p class="text-gray-400 max-w-2xl">A foundation of formal education combined with hands-on experience and continuous learning.</p>
        </div>
        
        <div class="grid md:grid-cols-2 gap-12">
          <!-- Education -->
          <div class="space-y-6">
            <h3 class="text-2xl font-semibold text-white">Education</h3>
            <div class="group bg-white/5 p-6 rounded-xl border border-white/10 hover:border-pink-400/20 transition-all duration-300">
              <div class="flex items-start gap-6">
                <div class="bg-gradient-to-br from-[#5300A6] to-[#BA24FF] px-2 py-1.5 rounded-lg group-hover:scale-110 transition-transform">
                  <svg class="w-5 h-5 text-white" fill="currentColor" viewBox="0 0 20 20">
                    <path d="M10.394 2.08a1 1 0 00-.788 0l-7 3a1 1 0 000 1.84L5.25 8.051a.999.999 0 01.356-.257l4-1.714a1 1 0 11.788 1.838L7.667 9.088l1.94.831a1 1 0 00.787 0l7-3a1 1 0 000-1.838l-7-3z"/>
                    <path d="M3.31 9.397L5 10.12v4.102a8.969 8.969 0 00-1.05-.174 1 1 0 01-.89-.89 11.115 11.115 0 01.25-3.762zM9.3 16.573A9.026 9.026 0 007 14.935v-3.957l1.818.78a3 3 0 002.364 0l5.508-2.361a11.026 11.026 0 01.25 3.762 1 1 0 01-.89.89 8.968 8.968 0 00-5.35 2.524 1 1 0 01-1.4 0zM6 18a1 1 0 001-1v-2.065a8.935 8.935 0 00-2-.712V17a1 1 0 001 1z"/>
                  </svg>
                </div>
      <div>
                  <h4 class="text-lg font-semibold text-white group-hover:text-pink-400 transition-colors">Bachelor of Science in Information Technology</h4>
                  <p class="text-pink-400 mt-1">University of Mindanao</p>
                  <p class="text-gray-400 mt-1">Graduated 2020</p>
          </div>
        </div>
            </div>

            <!-- Early Experience -->
            <div class="group bg-white/5 p-6 rounded-xl border border-white/10 hover:border-pink-400/20 transition-all duration-300">
              <div class="flex items-start gap-6">
                <div class="bg-gradient-to-br from-[#5300A6] to-[#BA24FF] px-2 py-1.5 rounded-lg group-hover:scale-110 transition-transform">
                  <svg class="w-5 h-5 text-white" fill="currentColor" viewBox="0 0 20 20">
                    <path d="M10.394 2.08a1 1 0 00-.788 0l-7 3a1 1 0 000 1.84L5.25 8.051a.999.999 0 01.356-.257l4-1.714a1 1 0 11.788 1.838L7.667 9.088l1.94.831a1 1 0 00.787 0l7-3a1 1 0 000-1.838l-7-3z"/>
                  </svg>
      </div>
      <div>
                  <h4 class="text-lg font-semibold text-white group-hover:text-pink-400 transition-colors">Mobile Developer</h4>
                  <p class="text-pink-400 mt-1">Paglaum Startup at UMASENSO HUB</p>
                  <p class="text-gray-400 mt-1">December 2019 - June 2020</p>
                  <p class="text-sm text-gray-400 mt-2">Led mobile development for PaglaUM App, gaining valuable hands-on experience in app development.</p>
                </div>
              </div>
            </div>
          </div>

          <!-- Trainings & Certifications -->
          <div class="space-y-6">
            <h3 class="text-2xl font-semibold text-white">Eligibility & Certifications</h3>
        <div class="space-y-4">
              <!-- Technical Certifications -->
              <div class="group bg-white/5 p-6 rounded-xl border border-white/10 hover:border-pink-400/20 transition-all duration-300">
                <h4 class="text-lg font-semibold text-white mb-4 group-hover:text-pink-400 transition-colors">Technical Certifications</h4>
                <ul class="space-y-3">
                  <li class="flex items-center gap-3">
                    <span class="text-pink-400/40">
                      <svg class="w-5 h-5" fill="currentColor" viewBox="0 0 20 20">
                        <path d="M10 2a2 2 0 012 2v2h4a2 2 0 012 2v8a2 2 0 01-2 2H4a2 2 0 01-2-2v-8a2 2 0 012-2h4V4a2 2 0 012-2zm0 2v2h4v8H6V6h4V4z"/>
                      </svg>
                    </span>
                    <div>
                      <p class="text-white font-medium">NCII: Computer Systems Servicing</p>
                      <p class="text-sm text-gray-400">Technical Education and Skills Development Authority</p>
          </div>
                  </li>
                  <li class="flex items-center gap-3">
                    <span class="text-pink-400/40">
                      <svg class="w-5 h-5" fill="currentColor" viewBox="0 0 20 20">
                        <path d="M10 2a2 2 0 012 2v2h4a2 2 0 012 2v8a2 2 0 01-2 2H4a2 2 0 01-2-2v-8a2 2 0 012-2h4V4a2 2 0 012-2zm0 2v2h4v8H6V6h4V4z"/>
                      </svg>
                    </span>
                    <div>
                      <p class="text-white font-medium">Microsoft: Networking Fundamentals</p>
                      <p class="text-sm text-gray-400">Microsoft Certification</p>
          </div>
                  </li>
                  <li class="flex items-center gap-3">
                    <span class="text-pink-400/40">
                      <svg class="w-5 h-5" fill="currentColor" viewBox="0 0 20 20">
                        <path d="M10 2a2 2 0 012 2v2h4a2 2 0 012 2v8a2 2 0 01-2 2H4a2 2 0 01-2-2v-8a2 2 0 012-2h4V4a2 2 0 012-2zm0 2v2h4v8H6V6h4V4z"/>
                      </svg>
                    </span>
                    <div>
                      <p class="text-white font-medium">Microsoft: Database Administration Fundamentals</p>
                      <p class="text-sm text-gray-400">Microsoft Certification</p>
                    </div>
                  </li>
                </ul>
              </div>

              <!-- Design Certifications -->
              <div class="group bg-white/5 p-6 rounded-xl border border-white/10 hover:border-pink-400/20 transition-all duration-300">
                <h4 class="text-lg font-semibold text-white mb-4 group-hover:text-pink-400 transition-colors">Design & Creative</h4>
                <ul class="space-y-3">
                  <li class="flex items-center gap-3">
                    <span class="text-pink-400/40">
                      <svg class="w-5 h-5" fill="currentColor" viewBox="0 0 20 20">
                        <path d="M10 2a2 2 0 012 2v2h4a2 2 0 012 2v8a2 2 0 01-2 2H4a2 2 0 01-2-2v-8a2 2 0 012-2h4V4a2 2 0 012-2zm0 2v2h4v8H6V6h4V4z"/>
                      </svg>
                    </span>
                    <div>
                      <p class="text-white font-medium">Adobe Photoshop</p>
                      <p class="text-sm text-gray-400">Eduonix Certification</p>
                    </div>
                  </li>
                  <li class="flex items-center gap-3">
                    <span class="text-pink-400/40">
                      <svg class="w-5 h-5" fill="currentColor" viewBox="0 0 20 20">
                        <path d="M10 2a2 2 0 012 2v2h4a2 2 0 012 2v8a2 2 0 01-2 2H4a2 2 0 01-2-2v-8a2 2 0 012-2h4V4a2 2 0 012-2zm0 2v2h4v8H6V6h4V4z"/>
                      </svg>
                    </span>
                    <div>
                      <p class="text-white font-medium">Adobe Illustrator</p>
                      <p class="text-sm text-gray-400">Eduonix Certification</p>
                    </div>
                  </li>
                </ul>
              </div>

              <!-- Additional Training -->
              <div class="group bg-white/5 p-6 rounded-xl border border-white/10 hover:border-pink-400/20 transition-all duration-300">
                <h4 class="text-lg font-semibold text-white mb-4 group-hover:text-pink-400 transition-colors">Additional Training</h4>
                <ul class="space-y-3">
                  <li class="flex items-center gap-3">
                    <span class="text-pink-400/40">
                      <svg class="w-5 h-5" fill="currentColor" viewBox="0 0 20 20">
                        <path d="M10 2a2 2 0 012 2v2h4a2 2 0 012 2v8a2 2 0 01-2 2H4a2 2 0 01-2-2v-8a2 2 0 012-2h4V4a2 2 0 012-2zm0 2v2h4v8H6V6h4V4z"/>
                      </svg>
                    </span>
                    <div>
                      <p class="text-white font-medium">UMerge Startup Challenge Bootcamp</p>
                      <p class="text-sm text-gray-400">Entrepreneurship and Innovation Training</p>
                    </div>
                  </li>
                  <li class="flex items-center gap-3">
                    <span class="text-pink-400/40">
                      <svg class="w-5 h-5" fill="currentColor" viewBox="0 0 20 20">
                        <path d="M10 2a2 2 0 012 2v2h4a2 2 0 012 2v8a2 2 0 01-2 2H4a2 2 0 01-2-2v-8a2 2 0 012-2h4V4a2 2 0 012-2zm0 2v2h4v8H6V6h4V4z"/>
                      </svg>
                    </span>
                    <div>
                      <p class="text-white font-medium">Google Business Group Bizfest 2019</p>
                      <p class="text-sm text-gray-400">Digital Business Solutions and Strategy</p>
                    </div>
                  </li>
                  <li class="flex items-center gap-3">
                    <span class="text-pink-400/40">
                      <svg class="w-5 h-5" fill="currentColor" viewBox="0 0 20 20">
                        <path d="M10 2a2 2 0 012 2v2h4a2 2 0 012 2v8a2 2 0 01-2 2H4a2 2 0 01-2-2v-8a2 2 0 012-2h4V4a2 2 0 012-2zm0 2v2h4v8H6V6h4V4z"/>
                      </svg>
                    </span>
                    <div>
                      <p class="text-white font-medium">Introduction to React.js</p>
                      <p class="text-sm text-gray-400">University of the Immaculate Conception, 2021</p>
                    </div>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>

    <!-- List of Tools -->
    <section class="py-32 px-8 max-w-6xl mx-auto relative" data-aos="fade-up">
      <!-- Background Gradient -->
      <div class="absolute inset-0 bg-gradient-to-b from-transparent via-[#8000FF]/5 to-transparent"></div>
      
      <div class="relative">
        <div class="flex flex-col items-center text-center mb-16">
          <h2 class="text-3xl font-bold mb-4">List of Tools</h2>
          <p class="text-gray-400 max-w-2xl">Comprehensive suite of professional tools and platforms I work with to deliver exceptional results.</p>
        </div>

        <div class="grid gap-12">
          <!-- Hosting & Infrastructure -->
          <div class="space-y-6">
            <h3 class="text-2xl font-semibold text-white text-center">Hosting & Infrastructure</h3>
            <div class="grid grid-cols-2 sm:grid-cols-3 gap-6 max-w-3xl mx-auto">
              <a href="#" class="group flex flex-col items-center justify-center gap-3 p-4 rounded-xl bg-white/5 border border-white/10 hover:border-pink-400/20 hover:bg-white/10 transition-all duration-300">
                <div class="w-16 h-16 flex items-center justify-center bg-white rounded-lg p-2">
                  <img src="@/assets/img/portfolio-logos/OVH.png" alt="OVH" class="w-full h-full object-contain" />
                </div>
                <span class="text-sm font-medium text-gray-400 group-hover:text-white transition-colors">OVH</span>
              </a>
              <a href="#" class="group flex flex-col items-center justify-center gap-3 p-4 rounded-xl bg-white/5 border border-white/10 hover:border-pink-400/20 hover:bg-white/10 transition-all duration-300">
                <div class="w-16 h-16 flex items-center justify-center bg-white rounded-lg p-2">
                  <img src="@/assets/img/portfolio-logos/godaddy.png" alt="GoDaddy" class="w-full h-full object-contain" />
                </div>
                <span class="text-sm font-medium text-gray-400 group-hover:text-white transition-colors">GoDaddy</span>
              </a>
              <a href="#" class="group flex flex-col items-center justify-center gap-3 p-4 rounded-xl bg-white/5 border border-white/10 hover:border-pink-400/20 hover:bg-white/10 transition-all duration-300">
                <div class="w-16 h-16 flex items-center justify-center bg-white rounded-lg p-2">
                  <img src="@/assets/img/portfolio-logos/namecheap.png" alt="Namecheap" class="w-full h-full object-contain" />
                </div>
                <span class="text-sm font-medium text-gray-400 group-hover:text-white transition-colors">Namecheap</span>
              </a>
              <a href="#" class="group flex flex-col items-center justify-center gap-3 p-4 rounded-xl bg-white/5 border border-white/10 hover:border-pink-400/20 hover:bg-white/10 transition-all duration-300">
                <div class="w-16 h-16 flex items-center justify-center bg-white rounded-lg p-2">
                  <img src="@/assets/img/portfolio-logos/bluehost.png" alt="BlueHost" class="w-full h-full object-contain" />
                </div>
                <span class="text-sm font-medium text-gray-400 group-hover:text-white transition-colors">BlueHost</span>
              </a>
              <a href="#" class="group flex flex-col items-center justify-center gap-3 p-4 rounded-xl bg-white/5 border border-white/10 hover:border-pink-400/20 hover:bg-white/10 transition-all duration-300">
                <div class="w-16 h-16 flex items-center justify-center bg-white rounded-lg p-2">
                  <img src="@/assets/img/portfolio-logos/cpanel.png" alt="cPanel" class="w-full h-full object-contain" />
                </div>
                <span class="text-sm font-medium text-gray-400 group-hover:text-white transition-colors">cPanel</span>
              </a>
              <a href="#" class="group flex flex-col items-center justify-center gap-3 p-4 rounded-xl bg-white/5 border border-white/10 hover:border-pink-400/20 hover:bg-white/10 transition-all duration-300">
                <div class="w-16 h-16 flex items-center justify-center bg-white rounded-lg p-2">
                  <img src="@/assets/img/portfolio-logos/hostgator.png" alt="HostGator" class="w-full h-full object-contain" />
                </div>
                <span class="text-sm font-medium text-gray-400 group-hover:text-white transition-colors">HostGator</span>
              </a>
            </div>
          </div>

          <!-- Web & Platforms -->
          <div class="space-y-6">
            <h3 class="text-2xl font-semibold text-white text-center">Web & Platforms</h3>
            <div class="grid grid-cols-2 sm:grid-cols-3 gap-6 max-w-3xl mx-auto">
              <a href="#" class="group flex flex-col items-center justify-center gap-3 p-4 rounded-xl bg-white/5 border border-white/10 hover:border-pink-400/20 hover:bg-white/10 transition-all duration-300">
                <div class="w-16 h-16 flex items-center justify-center bg-white rounded-lg p-2">
                  <img src="@/assets/img/portfolio-logos/wordpress.png" alt="WordPress" class="w-full h-full object-contain" />
                </div>
                <span class="text-sm font-medium text-gray-400 group-hover:text-white transition-colors">WordPress</span>
              </a>
              <a href="#" class="group flex flex-col items-center justify-center gap-3 p-4 rounded-xl bg-white/5 border border-white/10 hover:border-pink-400/20 hover:bg-white/10 transition-all duration-300">
                <div class="w-16 h-16 flex items-center justify-center bg-white rounded-lg p-2">
                  <img src="@/assets/img/portfolio-logos/kajabi.png" alt="Kajabi" class="w-full h-full object-contain" />
                </div>
                <span class="text-sm font-medium text-gray-400 group-hover:text-white transition-colors">Kajabi</span>
              </a>
              <a href="#" class="group flex flex-col items-center justify-center gap-3 p-4 rounded-xl bg-white/5 border border-white/10 hover:border-pink-400/20 hover:bg-white/10 transition-all duration-300">
                <div class="w-16 h-16 flex items-center justify-center bg-white rounded-lg p-2">
                  <img src="@/assets/img/portfolio-logos/gohighlevel.png" alt="GoHighLevel" class="w-full h-full object-contain" />
                </div>
                <span class="text-sm font-medium text-gray-400 group-hover:text-white transition-colors">GoHighLevel</span>
              </a>
              <a href="#" class="group flex flex-col items-center justify-center gap-3 p-4 rounded-xl bg-white/5 border border-white/10 hover:border-pink-400/20 hover:bg-white/10 transition-all duration-300">
                <div class="w-16 h-16 flex items-center justify-center bg-white rounded-lg p-2">
                  <img src="@/assets/img/portfolio-logos/clickfunnels.png" alt="ClickFunnels" class="w-full h-full object-contain" />
                </div>
                <span class="text-sm font-medium text-gray-400 group-hover:text-white transition-colors">ClickFunnels</span>
              </a>
              <a href="#" class="group flex flex-col items-center justify-center gap-3 p-4 rounded-xl bg-white/5 border border-white/10 hover:border-pink-400/20 hover:bg-white/10 transition-all duration-300">
                <div class="w-16 h-16 flex items-center justify-center bg-white rounded-lg p-2">
                  <img src="@/assets/img/portfolio-logos/firebase.png" alt="Firebase" class="w-full h-full object-contain" />
                </div>
                <span class="text-sm font-medium text-gray-400 group-hover:text-white transition-colors">Firebase</span>
              </a>
              <a href="#" class="group flex flex-col items-center justify-center gap-3 p-4 rounded-xl bg-white/5 border border-white/10 hover:border-pink-400/20 hover:bg-white/10 transition-all duration-300">
                <div class="w-16 h-16 flex items-center justify-center bg-white rounded-lg p-2">
                  <img src="@/assets/img/portfolio-logos/mysql.png" alt="MySQL" class="w-full h-full object-contain" />
                </div>
                <span class="text-sm font-medium text-gray-400 group-hover:text-white transition-colors">MySQL</span>
              </a>
              <a href="#" class="group flex flex-col items-center justify-center gap-3 p-4 rounded-xl bg-white/5 border border-white/10 hover:border-pink-400/20 hover:bg-white/10 transition-all duration-300">
                <div class="w-16 h-16 flex items-center justify-center bg-white rounded-lg p-2">
                  <img src="@/assets/img/portfolio-logos/meta.png" alt="Meta" class="w-full h-full object-contain" />
                </div>
                <span class="text-sm font-medium text-gray-400 group-hover:text-white transition-colors">Meta</span>
              </a>
            </div>
          </div>

          <!-- Marketing & Communication -->
          <div class="space-y-6">
            <h3 class="text-2xl font-semibold text-white text-center">Marketing & Communication</h3>
            <div class="grid grid-cols-2 sm:grid-cols-3 gap-6 max-w-3xl mx-auto">
              <a href="#" class="group flex flex-col items-center justify-center gap-3 p-4 rounded-xl bg-white/5 border border-white/10 hover:border-pink-400/20 hover:bg-white/10 transition-all duration-300">
                <div class="w-16 h-16 flex items-center justify-center bg-white rounded-lg p-2">
                  <img src="@/assets/img/portfolio-logos/mailchimp.png" alt="Mailchimp" class="w-full h-full object-contain" />
                </div>
                <span class="text-sm font-medium text-gray-400 group-hover:text-white transition-colors">Mailchimp</span>
              </a>
              <a href="#" class="group flex flex-col items-center justify-center gap-3 p-4 rounded-xl bg-white/5 border border-white/10 hover:border-pink-400/20 hover:bg-white/10 transition-all duration-300">
                <div class="w-16 h-16 flex items-center justify-center bg-white rounded-lg p-2">
                  <img src="@/assets/img/portfolio-logos/active campaign.png" alt="Active Campaign" class="w-full h-full object-contain" />
                </div>
                <span class="text-sm font-medium text-gray-400 group-hover:text-white transition-colors">Active Campaign</span>
              </a>
            </div>
          </div>

          <!-- Design & Creative -->
          <div class="space-y-6">
            <h3 class="text-2xl font-semibold text-white text-center">Design & Creative</h3>
            <div class="grid grid-cols-2 sm:grid-cols-3 gap-6 max-w-3xl mx-auto">
              <a href="#" class="group flex flex-col items-center justify-center gap-3 p-4 rounded-xl bg-white/5 border border-white/10 hover:border-pink-400/20 hover:bg-white/10 transition-all duration-300">
                <div class="w-16 h-16 flex items-center justify-center bg-white rounded-lg p-2">
                  <img src="@/assets/img/portfolio-logos/canva.png" alt="Canva" class="w-full h-full object-contain" />
                </div>
                <span class="text-sm font-medium text-gray-400 group-hover:text-white transition-colors">Canva</span>
              </a>
              <a href="#" class="group flex flex-col items-center justify-center gap-3 p-4 rounded-xl bg-white/5 border border-white/10 hover:border-pink-400/20 hover:bg-white/10 transition-all duration-300">
                <div class="w-16 h-16 flex items-center justify-center bg-white rounded-lg p-2">
                  <img src="@/assets/img/portfolio-logos/illustrator.png" alt="Illustrator" class="w-full h-full object-contain" />
                </div>
                <span class="text-sm font-medium text-gray-400 group-hover:text-white transition-colors">Illustrator</span>
              </a>
              <a href="#" class="group flex flex-col items-center justify-center gap-3 p-4 rounded-xl bg-white/5 border border-white/10 hover:border-pink-400/20 hover:bg-white/10 transition-all duration-300">
                <div class="w-16 h-16 flex items-center justify-center bg-white rounded-lg p-2">
                  <img src="@/assets/img/portfolio-logos/photoshop.png" alt="Photoshop" class="w-full h-full object-contain" />
                </div>
                <span class="text-sm font-medium text-gray-400 group-hover:text-white transition-colors">Photoshop</span>
              </a>
              <a href="#" class="group flex flex-col items-center justify-center gap-3 p-4 rounded-xl bg-white/5 border border-white/10 hover:border-pink-400/20 hover:bg-white/10 transition-all duration-300">
                <div class="w-16 h-16 flex items-center justify-center bg-white rounded-lg p-2">
                  <img src="@/assets/img/portfolio-logos/premiere pro.png" alt="Premiere Pro" class="w-full h-full object-contain" />
                </div>
                <span class="text-sm font-medium text-gray-400 group-hover:text-white transition-colors">Premiere Pro</span>
              </a>
              <a href="#" class="group flex flex-col items-center justify-center gap-3 p-4 rounded-xl bg-white/5 border border-white/10 hover:border-pink-400/20 hover:bg-white/10 transition-all duration-300">
                <div class="w-16 h-16 flex items-center justify-center bg-white rounded-lg p-2">
                  <img src="@/assets/img/portfolio-logos/capcut.png" alt="CapCut" class="w-full h-full object-contain" />
                </div>
                <span class="text-sm font-medium text-gray-400 group-hover:text-white transition-colors">CapCut</span>
              </a>
            </div>
          </div>

        </div>
      </div>
    </section>

    <!-- Contact -->
    <section id="contact" class="py-32 px-8 max-w-6xl mx-auto relative" data-aos="fade-up">
      <!-- Background Gradient -->
      <div class="absolute inset-0 bg-gradient-to-b from-transparent via-[#8000FF]/5 to-transparent"></div>
      
      <div class="relative">
        <div class="flex flex-col items-center text-center mb-16">
          <h2 class="text-3xl font-bold mb-4">Let's Connect</h2>
          <p class="text-gray-400 max-w-2xl">Ready to bring your digital vision to life? Let's discuss how we can work together to create something extraordinary.</p>
        </div>

        <div class="grid lg:grid-cols-2 gap-8 items-start">
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
            <form class="space-y-6">
              <div>
                <label class="block text-sm font-medium text-gray-400 mb-2">Name</label>
                <input type="text" class="w-full bg-white/5 border border-white/10 rounded-lg px-4 py-3 text-white placeholder-gray-500 focus:outline-none focus:border-pink-400/40 transition-colors" placeholder="Your name">
              </div>
              <div>
                <label class="block text-sm font-medium text-gray-400 mb-2">Email</label>
                <input type="email" class="w-full bg-white/5 border border-white/10 rounded-lg px-4 py-3 text-white placeholder-gray-500 focus:outline-none focus:border-pink-400/40 transition-colors" placeholder="your@email.com">
              </div>
              <div>
                <label class="block text-sm font-medium text-gray-400 mb-2">Message</label>
                <textarea rows="4" class="w-full bg-white/5 border border-white/10 rounded-lg px-4 py-3 text-white placeholder-gray-500 focus:outline-none focus:border-pink-400/40 transition-colors" placeholder="Your message"></textarea>
              </div>
              <button type="submit" class="w-full bg-gradient-to-r from-[#5300A6] to-[#BA24FF] text-white font-medium py-3 px-6 rounded-lg hover:opacity-90 transition-opacity">
                Send Message
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
          <p class="text-[15px] text-gray-400">© 2025 <span class="font-medium text-white">Alvin Villamero</span> – All rights reserved.</p>
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
      <div class="relative max-w-7xl w-full max-h-[90vh] bg-[#0B0B13] rounded-xl overflow-hidden">
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
import { onMounted, onUnmounted, ref } from 'vue'

const isMenuOpen = ref(false)
const activeSection = ref('home')
const selectedImage = ref(null)
const isModalOpen = ref(false)

const sections = ['experience', 'skills', 'services', 'portfolio', 'contact']

const openImageModal = (imagePath) => {
  selectedImage.value = imagePath
  isModalOpen.value = true
}

const closeImageModal = () => {
  selectedImage.value = null
  isModalOpen.value = false
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

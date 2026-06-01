# sharmkosh.
> **ab Mardo ki maari jaayegi Gaan*** 

<div class="sharmkosh-logo-container">
  <!-- Raw SVG Icon with a custom embedded CSS animation pulse -->
  <svg xmlns="http://www.w3.org/2000/svg" width="64" height="64" viewBox="0 0 24 24" fill="none" stroke="#34d399" stroke-width="2.5" stroke-linecap="round" stroke-linejoin='round' class="animated-logo">
    <style>
      .animated-logo {
        animation: sharm-pulse 2s infinite ease-in-out;
        filter: drop-shadow(0 0 8px rgba(52, 211, 153, 0.2));
      }
      @keyframes sharm-pulse {
        0%, 100% { transform: scale(1); filter: drop-shadow(0 0 8px rgba(52, 211, 153, 0.2)); }
        50% { transform: scale(1.05); filter: drop-shadow(0 0 20px rgba(52, 211, 153, 0.6)); }
      }
    </style>
    <path d="M4 19.5v-15A2.5 2.5 0 0 1 6.5 2H20v20H6.5a2.5 2.5 0 0 1-2.5-2.5Z"/>
    <path d="M6 6h10"/>
    <path d="M6 10h10"/>
  </svg>
  <p><i>for the fellas ;)</i></p>
</div>

---

## Repository Architecture

```text
.
├── DB.sql                # SQL Schema blueprint for D1 initialization
├── functions/
│   └── api/
│       └── slangs.js     # Edge Worker handling database operations[cite: 1, 3]
└── index.html            # Main dashboard UI & Client-side search engine[cite: 1]

# sharmkosh.
> **ab Mardo ki maari jaayegi Gaan*** 

<div align="center">
  <img src="data:image/svg+xml;utf8,<svg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 24 24' fill='none' stroke='%2334d399' stroke-width='2.5' stroke-linecap='round' stroke-linejoin='round'><style>@keyframes pulse {0%, 100% { transform: scale(1); opacity: 0.8; } 50% { transform: scale(1.1); opacity: 1; }} svg { animation: pulse 2s infinite ease-in-out; transform-origin: center; }</style><path d='M4 19.5v-15A2.5 2.5 0 0 1 6.5 2H20v20H6.5a2.5 2.5 0 0 1-2.5-2.5Z'/><path d='M6 6h10'/><path d='M6 10h10'/></svg>" width="80" height="80" alt="sharmkosh logo" />
  <p><i>Kitabfor the fellas ;)</i></p>
</div>

---

## Repository Architecture

```text
.
├── DB.sql                # SQL Schema blueprint for D1 initialization[cite: 1]
├── functions/
│   └── api/
│       └── slangs.js     # Edge Worker handling database operations[cite: 1, 3]
└── index.html            # Main dashboard UI & Client-side search engine[cite: 1]

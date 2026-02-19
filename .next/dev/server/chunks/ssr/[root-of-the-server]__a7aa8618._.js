module.exports = [
"[externals]/next/dist/compiled/next-server/app-page-turbo.runtime.dev.js [external] (next/dist/compiled/next-server/app-page-turbo.runtime.dev.js, cjs)", ((__turbopack_context__, module, exports) => {

const mod = __turbopack_context__.x("next/dist/compiled/next-server/app-page-turbo.runtime.dev.js", () => require("next/dist/compiled/next-server/app-page-turbo.runtime.dev.js"));

module.exports = mod;
}),
"[externals]/next/dist/server/app-render/action-async-storage.external.js [external] (next/dist/server/app-render/action-async-storage.external.js, cjs)", ((__turbopack_context__, module, exports) => {

const mod = __turbopack_context__.x("next/dist/server/app-render/action-async-storage.external.js", () => require("next/dist/server/app-render/action-async-storage.external.js"));

module.exports = mod;
}),
"[externals]/next/dist/server/app-render/work-unit-async-storage.external.js [external] (next/dist/server/app-render/work-unit-async-storage.external.js, cjs)", ((__turbopack_context__, module, exports) => {

const mod = __turbopack_context__.x("next/dist/server/app-render/work-unit-async-storage.external.js", () => require("next/dist/server/app-render/work-unit-async-storage.external.js"));

module.exports = mod;
}),
"[externals]/next/dist/server/app-render/work-async-storage.external.js [external] (next/dist/server/app-render/work-async-storage.external.js, cjs)", ((__turbopack_context__, module, exports) => {

const mod = __turbopack_context__.x("next/dist/server/app-render/work-async-storage.external.js", () => require("next/dist/server/app-render/work-async-storage.external.js"));

module.exports = mod;
}),
"[project]/components/shared/vibeTheme.jsx [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "C",
    ()=>C,
    "GLOBAL_CSS",
    ()=>GLOBAL_CSS,
    "PAGE_TO_PATH",
    ()=>PAGE_TO_PATH,
    "PATH_TO_PAGE",
    ()=>PATH_TO_PAGE,
    "SOCIALS",
    ()=>SOCIALS
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react-jsx-dev-runtime.js [app-ssr] (ecmascript)");
"use client";
;
const GLOBAL_CSS = `
  @import url('https://fonts.googleapis.com/css2?family=Bebas+Neue&family=DM+Sans:ital,opsz,wght@0,9..40,300;0,9..40,400;0,9..40,600;1,9..40,400&display=swap');
  *, *::before, *::after { box-sizing:border-box; margin:0; padding:0; }
  html { scroll-behavior:smooth; }
  body { background:#05050A; overflow-x:hidden; }
  ::selection { background:rgba(255,107,0,0.3); }
  ::-webkit-scrollbar { width:3px; }
  ::-webkit-scrollbar-track { background:#05050A; }
  ::-webkit-scrollbar-thumb { background:#FF6B00; border-radius:2px; }
  input::placeholder, textarea::placeholder { color:rgba(255,255,255,0.2); }
  select option { background:#0C0C18; color:#fff; }

  @keyframes fadeUp    { from{opacity:0;transform:translateY(36px);}  to{opacity:1;transform:translateY(0);} }
  @keyframes fadeIn    { from{opacity:0;} to{opacity:1;} }
  @keyframes fadeOut   { from{opacity:1;} to{opacity:0;} }
  @keyframes orbFloat  { 0%,100%{transform:scale(1) translateY(0);opacity:.6;} 50%{transform:scale(1.12) translateY(-12px);opacity:1;} }
  @keyframes lineGrow  { from{transform:scaleX(0);} to{transform:scaleX(1);} }
  @keyframes shimmer   { 0%{background-position:-200% center;} 100%{background-position:200% center;} }
  @keyframes marquee   { from{transform:translateX(0);} to{transform:translateX(-50%);} }
  @keyframes menuSlide { from{opacity:0;transform:translateX(100%);} to{opacity:1;transform:translateX(0);} }
  @keyframes dotPulse  { 0%,100%{box-shadow:0 0 0 0 rgba(255,107,0,.5);} 50%{box-shadow:0 0 0 10px rgba(255,107,0,0);} }
  @keyframes toastIn   { from{opacity:0;transform:translateX(120%);} to{opacity:1;transform:translateX(0);} }
  @keyframes toastOut  { from{opacity:1;transform:translateX(0);} to{opacity:0;transform:translateX(120%);} }
  @keyframes pageEnter { from{opacity:0;transform:translateY(12px);} to{opacity:1;transform:translateY(0);} }
  @keyframes cookieUp  { from{opacity:0;transform:translateY(100%);} to{opacity:1;transform:translateY(0);} }
  @keyframes spin      { from{transform:rotate(0deg);} to{transform:rotate(360deg);} }
  @keyframes confetti  { 0%{transform:translateY(0) rotate(0deg);opacity:1;} 100%{transform:translateY(-80px) rotate(720deg);opacity:0;} }
  @keyframes checkPop  { 0%{transform:scale(0) rotate(-10deg);} 70%{transform:scale(1.2) rotate(5deg);} 100%{transform:scale(1) rotate(0deg);} }

  .page-enter { animation:pageEnter .35s ease forwards; }
  .grid-2  { display:grid; grid-template-columns:1fr 1fr; gap:60px; }
  .grid-3  { display:grid; grid-template-columns:repeat(3,1fr); gap:24px; }
  .grid-4  { display:grid; grid-template-columns:repeat(4,1fr); gap:20px; }
  .grid-auto { display:grid; grid-template-columns:repeat(auto-fit,minmax(280px,1fr)); gap:20px; }
  .sec-pad   { padding:100px 64px; }
  .sec-pad-sm{ padding:64px 64px; }

  @media(max-width:960px){
    .grid-2{grid-template-columns:1fr;gap:40px;}
    .grid-3{grid-template-columns:1fr 1fr;}
    .grid-4{grid-template-columns:1fr 1fr;}
    .sec-pad{padding:72px 28px;}
    .sec-pad-sm{padding:48px 28px;}
  }
  @media(max-width:600px){
    .grid-3{grid-template-columns:1fr;}
    .grid-4{grid-template-columns:1fr;}
    .sec-pad{padding:56px 20px;}
    .sec-pad-sm{padding:36px 20px;}
  }
`;
const C = {
    bg: "#05050A",
    bg2: "#080812",
    bg3: "#0B0B18",
    orange: "#FF6B00",
    pink: "#FF2D78",
    blue: "#00D4FF",
    purple: "#9B59FF",
    gold: "#FFD700",
    white: "#FFFFFF",
    dim: "rgba(255,255,255,0.45)",
    dimmer: "rgba(255,255,255,0.2)",
    border: "rgba(255,107,0,0.12)"
};
const SOCIALS = [
    {
        icon: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("svg", {
            viewBox: "0 0 24 24",
            "aria-hidden": "true",
            width: "14",
            height: "14",
            fill: "currentColor",
            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
                d: "M18.9 2H22l-6.8 7.8L22.9 22h-6.1l-4.8-6.3L6.7 22H3.6l7.3-8.4L1.5 2h6.2l4.3 5.7L18.9 2zm-1.1 18h1.7L7.3 4H5.5l12.3 16z"
            }, void 0, false, {
                fileName: "[project]/components/shared/vibeTheme.jsx",
                lineNumber: 74,
                columnNumber: 9
            }, ("TURBOPACK compile-time value", void 0))
        }, void 0, false, {
            fileName: "[project]/components/shared/vibeTheme.jsx",
            lineNumber: 73,
            columnNumber: 7
        }, ("TURBOPACK compile-time value", void 0)),
        href: "https://x.com/vibecircle",
        label: "Twitter/X"
    },
    {
        icon: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("svg", {
            viewBox: "0 0 24 24",
            "aria-hidden": "true",
            width: "14",
            height: "14",
            fill: "currentColor",
            children: [
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
                    d: "M12 7.3a4.7 4.7 0 1 0 0 9.4 4.7 4.7 0 0 0 0-9.4zm0 7.7a3 3 0 1 1 0-6 3 3 0 0 1 0 6zm6-7.9a1.1 1.1 0 1 1-2.2 0 1.1 1.1 0 0 1 2.2 0z"
                }, void 0, false, {
                    fileName: "[project]/components/shared/vibeTheme.jsx",
                    lineNumber: 83,
                    columnNumber: 9
                }, ("TURBOPACK compile-time value", void 0)),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
                    d: "M16.8 3H7.2A4.2 4.2 0 0 0 3 7.2v9.6A4.2 4.2 0 0 0 7.2 21h9.6a4.2 4.2 0 0 0 4.2-4.2V7.2A4.2 4.2 0 0 0 16.8 3zm2.5 13.8a2.5 2.5 0 0 1-2.5 2.5H7.2a2.5 2.5 0 0 1-2.5-2.5V7.2a2.5 2.5 0 0 1 2.5-2.5h9.6a2.5 2.5 0 0 1 2.5 2.5v9.6z"
                }, void 0, false, {
                    fileName: "[project]/components/shared/vibeTheme.jsx",
                    lineNumber: 84,
                    columnNumber: 9
                }, ("TURBOPACK compile-time value", void 0))
            ]
        }, void 0, true, {
            fileName: "[project]/components/shared/vibeTheme.jsx",
            lineNumber: 82,
            columnNumber: 7
        }, ("TURBOPACK compile-time value", void 0)),
        href: "https://instagram.com/vibecircle",
        label: "Instagram"
    },
    {
        icon: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("svg", {
            viewBox: "0 0 24 24",
            "aria-hidden": "true",
            width: "14",
            height: "14",
            fill: "currentColor",
            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
                d: "M21 8.2a5.3 5.3 0 0 0-3.7-3.7C15.9 4 12 4 12 4s-3.9 0-5.3.5A5.3 5.3 0 0 0 3 8.2C2.5 9.6 2.5 12 2.5 12s0 2.4.5 3.8a5.3 5.3 0 0 0 3.7 3.7c1.4.5 5.3.5 5.3.5s3.9 0 5.3-.5a5.3 5.3 0 0 0 3.7-3.7c.5-1.4.5-3.8.5-3.8s0-2.4-.5-3.8zM10 15.2V8.8L15.5 12 10 15.2z"
            }, void 0, false, {
                fileName: "[project]/components/shared/vibeTheme.jsx",
                lineNumber: 93,
                columnNumber: 9
            }, ("TURBOPACK compile-time value", void 0))
        }, void 0, false, {
            fileName: "[project]/components/shared/vibeTheme.jsx",
            lineNumber: 92,
            columnNumber: 7
        }, ("TURBOPACK compile-time value", void 0)),
        href: "https://tiktok.com/@vibecircle",
        label: "TikTok"
    },
    {
        icon: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("svg", {
            viewBox: "0 0 24 24",
            "aria-hidden": "true",
            width: "14",
            height: "14",
            fill: "currentColor",
            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
                d: "M4 3.5C4 2.7 4.7 2 5.5 2S7 2.7 7 3.5 6.3 5 5.5 5 4 4.3 4 3.5zM4 7h3v13H4V7zm6 0h2.9v1.8h.1c.4-.8 1.5-2 3.3-2 3.5 0 4.1 2.3 4.1 5.2V20h-3v-6.4c0-1.5 0-3.5-2.1-3.5-2.1 0-2.4 1.7-2.4 3.4V20h-3V7z"
            }, void 0, false, {
                fileName: "[project]/components/shared/vibeTheme.jsx",
                lineNumber: 102,
                columnNumber: 9
            }, ("TURBOPACK compile-time value", void 0))
        }, void 0, false, {
            fileName: "[project]/components/shared/vibeTheme.jsx",
            lineNumber: 101,
            columnNumber: 7
        }, ("TURBOPACK compile-time value", void 0)),
        href: "https://linkedin.com/company/vibecircle",
        label: "LinkedIn"
    },
    {
        icon: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("svg", {
            viewBox: "0 0 24 24",
            "aria-hidden": "true",
            width: "14",
            height: "14",
            fill: "currentColor",
            children: [
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
                    d: "M13.7 10.6h-1.6V9.4c0-.5.3-.6.6-.6h1v-2h-1.4c-1.6 0-2.6 1.1-2.6 2.6v1.2H8v2.2h1.7V20h2.4v-7.2h1.6l.2-2.2z"
                }, void 0, false, {
                    fileName: "[project]/components/shared/vibeTheme.jsx",
                    lineNumber: 111,
                    columnNumber: 9
                }, ("TURBOPACK compile-time value", void 0)),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
                    d: "M12 2C6.5 2 2 6.5 2 12s4.5 10 10 10 10-4.5 10-10S17.5 2 12 2zm0 18.2A8.2 8.2 0 1 1 12 3.8a8.2 8.2 0 0 1 0 16.4z"
                }, void 0, false, {
                    fileName: "[project]/components/shared/vibeTheme.jsx",
                    lineNumber: 112,
                    columnNumber: 9
                }, ("TURBOPACK compile-time value", void 0))
            ]
        }, void 0, true, {
            fileName: "[project]/components/shared/vibeTheme.jsx",
            lineNumber: 110,
            columnNumber: 7
        }, ("TURBOPACK compile-time value", void 0)),
        href: "https://facebook.com/vibecircle",
        label: "Facebook"
    },
    {
        icon: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("svg", {
            viewBox: "0 0 24 24",
            "aria-hidden": "true",
            width: "14",
            height: "14",
            fill: "currentColor",
            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
                d: "M21 7.6a3 3 0 0 0-2.1-2.1C17 5 12 5 12 5s-5 0-6.9.5A3 3 0 0 0 3 7.6C2.5 9.5 2.5 12 2.5 12s0 2.5.5 4.4a3 3 0 0 0 2.1 2.1C7 19 12 19 12 19s5 0 6.9-.5a3 3 0 0 0 2.1-2.1c.5-1.9.5-4.4.5-4.4s0-2.5-.5-4.4zM10 15.5V8.5L16 12l-6 3.5z"
            }, void 0, false, {
                fileName: "[project]/components/shared/vibeTheme.jsx",
                lineNumber: 121,
                columnNumber: 9
            }, ("TURBOPACK compile-time value", void 0))
        }, void 0, false, {
            fileName: "[project]/components/shared/vibeTheme.jsx",
            lineNumber: 120,
            columnNumber: 7
        }, ("TURBOPACK compile-time value", void 0)),
        href: "https://youtube.com/@vibecircle",
        label: "YouTube"
    }
];
const PAGE_TO_PATH = {
    home: "/",
    About: "/about",
    Team: "/team",
    Creators: "/creators",
    Advertise: "/advertise",
    Business: "/business",
    Jobs: "/jobs",
    Marketplace: "/marketplace",
    Contact: "/contact",
    Pricing: "/pricing",
    Privacy: "/privacy",
    Terms: "/terms",
    Cookies: "/cookies"
};
const PATH_TO_PAGE = Object.fromEntries(Object.entries(PAGE_TO_PATH).map(([k, v])=>[
        v,
        k
    ]));
}),
"[project]/components/shared/hooks.jsx [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "useCounter",
    ()=>useCounter,
    "useInView",
    ()=>useInView,
    "useWindowWidth",
    ()=>useWindowWidth
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react.js [app-ssr] (ecmascript)");
"use client";
;
function useInView(t = 0.1) {
    const ref = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useRef"])(null);
    const [v, setV] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])(false);
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useEffect"])(()=>{
        const obs = new IntersectionObserver(([e])=>{
            if (e.isIntersecting) setV(true);
        }, {
            threshold: t
        });
        if (ref.current) obs.observe(ref.current);
        return ()=>obs.disconnect();
    }, [
        t
    ]);
    return [
        ref,
        v
    ];
}
function useCounter(target, dur = 1800, active = false) {
    const [v, setV] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])(0);
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useEffect"])(()=>{
        if (!active) return undefined;
        const steps = 60;
        const inc = target / steps;
        let cur = 0;
        const id = setInterval(()=>{
            cur = Math.min(cur + inc, target);
            setV(Math.floor(cur));
            if (cur >= target) clearInterval(id);
        }, dur / steps);
        return ()=>clearInterval(id);
    }, [
        active,
        target,
        dur
    ]);
    return v;
}
function useWindowWidth() {
    const [w, setW] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])(("TURBOPACK compile-time falsy", 0) ? "TURBOPACK unreachable" : 1200);
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useEffect"])(()=>{
        const h = ()=>setW(window.innerWidth);
        window.addEventListener("resize", h);
        return ()=>window.removeEventListener("resize", h);
    }, []);
    return w;
}
}),
"[project]/components/shared/layout.jsx [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "Footer",
    ()=>Footer,
    "Nav",
    ()=>Nav
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react-jsx-dev-runtime.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$components$2f$shared$2f$vibeTheme$2e$jsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/components/shared/vibeTheme.jsx [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$components$2f$shared$2f$hooks$2e$jsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/components/shared/hooks.jsx [app-ssr] (ecmascript)");
"use client";
;
;
;
;
const ALL_PAGES = [
    "About",
    "Team",
    "Creators",
    "Advertise",
    "Business",
    "Jobs",
    "Marketplace",
    "Pricing",
    "Contact"
];
const PRIMARY_NAV = [
    "About",
    "Creators",
    "Marketplace",
    "Business",
    "Jobs",
    "Pricing"
];
const MORE_NAV = [
    "Team",
    "Advertise",
    "Contact"
];
function Nav({ current, setPage, openWaitlist }) {
    const [scrolled, setScrolled] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])(false);
    const [menuOpen, setMenuOpen] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])(false);
    const w = (0, __TURBOPACK__imported__module__$5b$project$5d2f$components$2f$shared$2f$hooks$2e$jsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useWindowWidth"])();
    const isMobile = w < 1060;
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useEffect"])(()=>{
        const h = ()=>setScrolled(window.scrollY > 40);
        window.addEventListener("scroll", h);
        return ()=>window.removeEventListener("scroll", h);
    }, []);
    const go = (p)=>{
        setPage(p);
        window.scrollTo(0, 0);
        setMenuOpen(false);
    };
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Fragment"], {
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("nav", {
                style: {
                    position: "fixed",
                    top: 0,
                    left: 0,
                    right: 0,
                    zIndex: 200,
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "space-between",
                    padding: "0 clamp(20px,4vw,48px)",
                    height: "68px",
                    background: scrolled || menuOpen ? "rgba(5,5,10,0.96)" : "rgba(5,5,10,0.5)",
                    backdropFilter: "blur(20px)",
                    borderBottom: `1px solid ${scrolled ? __TURBOPACK__imported__module__$5b$project$5d2f$components$2f$shared$2f$vibeTheme$2e$jsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["C"].border : "transparent"}`,
                    transition: "all .35s ease"
                },
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                        onClick: ()=>go("home"),
                        style: {
                            fontFamily: "'Bebas Neue',sans-serif",
                            fontSize: "24px",
                            letterSpacing: "3px",
                            color: __TURBOPACK__imported__module__$5b$project$5d2f$components$2f$shared$2f$vibeTheme$2e$jsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["C"].orange,
                            background: "none",
                            border: "none",
                            cursor: "pointer",
                            padding: 0,
                            flexShrink: 0
                        },
                        children: "VIBECIRCLE"
                    }, void 0, false, {
                        fileName: "[project]/components/shared/layout.jsx",
                        lineNumber: 46,
                        columnNumber: 9
                    }, this),
                    !isMobile && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        style: {
                            display: "flex",
                            gap: "3px",
                            alignItems: "center"
                        },
                        children: [
                            PRIMARY_NAV.map((p)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                    onClick: ()=>go(p),
                                    style: {
                                        fontFamily: "'DM Sans',sans-serif",
                                        fontSize: "12px",
                                        letterSpacing: "1px",
                                        textTransform: "uppercase",
                                        color: current === p ? __TURBOPACK__imported__module__$5b$project$5d2f$components$2f$shared$2f$vibeTheme$2e$jsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["C"].orange : __TURBOPACK__imported__module__$5b$project$5d2f$components$2f$shared$2f$vibeTheme$2e$jsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["C"].dim,
                                        background: current === p ? `${__TURBOPACK__imported__module__$5b$project$5d2f$components$2f$shared$2f$vibeTheme$2e$jsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["C"].orange}12` : "transparent",
                                        border: current === p ? `1px solid ${__TURBOPACK__imported__module__$5b$project$5d2f$components$2f$shared$2f$vibeTheme$2e$jsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["C"].orange}30` : "1px solid transparent",
                                        borderRadius: "2px",
                                        padding: "7px 12px",
                                        cursor: "pointer",
                                        transition: "all .2s"
                                    },
                                    onMouseEnter: (e)=>{
                                        if (current !== p) {
                                            e.currentTarget.style.color = __TURBOPACK__imported__module__$5b$project$5d2f$components$2f$shared$2f$vibeTheme$2e$jsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["C"].white;
                                            e.currentTarget.style.borderColor = "rgba(255,255,255,0.1)";
                                        }
                                    },
                                    onMouseLeave: (e)=>{
                                        if (current !== p) {
                                            e.currentTarget.style.color = __TURBOPACK__imported__module__$5b$project$5d2f$components$2f$shared$2f$vibeTheme$2e$jsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["C"].dim;
                                            e.currentTarget.style.borderColor = "transparent";
                                        }
                                    },
                                    children: p
                                }, p, false, {
                                    fileName: "[project]/components/shared/layout.jsx",
                                    lineNumber: 65,
                                    columnNumber: 15
                                }, this)),
                            MORE_NAV.map((p)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                    onClick: ()=>go(p),
                                    style: {
                                        fontFamily: "'DM Sans',sans-serif",
                                        fontSize: "12px",
                                        letterSpacing: "1px",
                                        textTransform: "uppercase",
                                        color: current === p ? __TURBOPACK__imported__module__$5b$project$5d2f$components$2f$shared$2f$vibeTheme$2e$jsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["C"].orange : "rgba(255,255,255,0.28)",
                                        background: "transparent",
                                        border: "1px solid transparent",
                                        borderRadius: "2px",
                                        padding: "7px 10px",
                                        cursor: "pointer",
                                        transition: "all .2s"
                                    },
                                    onMouseEnter: (e)=>e.currentTarget.style.color = __TURBOPACK__imported__module__$5b$project$5d2f$components$2f$shared$2f$vibeTheme$2e$jsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["C"].white,
                                    onMouseLeave: (e)=>{
                                        e.currentTarget.style.color = current === p ? __TURBOPACK__imported__module__$5b$project$5d2f$components$2f$shared$2f$vibeTheme$2e$jsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["C"].orange : "rgba(255,255,255,0.28)";
                                    },
                                    children: p
                                }, p, false, {
                                    fileName: "[project]/components/shared/layout.jsx",
                                    lineNumber: 98,
                                    columnNumber: 15
                                }, this))
                        ]
                    }, void 0, true, {
                        fileName: "[project]/components/shared/layout.jsx",
                        lineNumber: 63,
                        columnNumber: 11
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        style: {
                            display: "flex",
                            gap: "10px",
                            alignItems: "center"
                        },
                        children: [
                            !isMobile && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                onClick: ()=>openWaitlist("Early Access"),
                                style: {
                                    fontFamily: "'Bebas Neue',sans-serif",
                                    fontSize: "13px",
                                    letterSpacing: "3px",
                                    padding: "9px 22px",
                                    background: __TURBOPACK__imported__module__$5b$project$5d2f$components$2f$shared$2f$vibeTheme$2e$jsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["C"].orange,
                                    color: __TURBOPACK__imported__module__$5b$project$5d2f$components$2f$shared$2f$vibeTheme$2e$jsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["C"].bg,
                                    border: "none",
                                    borderRadius: "2px",
                                    cursor: "pointer",
                                    transition: "box-shadow .2s"
                                },
                                onMouseEnter: (e)=>e.target.style.boxShadow = `0 6px 20px ${__TURBOPACK__imported__module__$5b$project$5d2f$components$2f$shared$2f$vibeTheme$2e$jsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["C"].orange}40`,
                                onMouseLeave: (e)=>e.target.style.boxShadow = "",
                                children: "Join Now"
                            }, void 0, false, {
                                fileName: "[project]/components/shared/layout.jsx",
                                lineNumber: 126,
                                columnNumber: 13
                            }, this),
                            isMobile && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                onClick: ()=>setMenuOpen(!menuOpen),
                                style: {
                                    background: "none",
                                    border: "none",
                                    cursor: "pointer",
                                    padding: "6px",
                                    display: "flex",
                                    flexDirection: "column",
                                    gap: "5px"
                                },
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                        style: {
                                            display: "block",
                                            width: "22px",
                                            height: "2px",
                                            background: menuOpen ? __TURBOPACK__imported__module__$5b$project$5d2f$components$2f$shared$2f$vibeTheme$2e$jsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["C"].orange : __TURBOPACK__imported__module__$5b$project$5d2f$components$2f$shared$2f$vibeTheme$2e$jsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["C"].white,
                                            transition: "all .3s",
                                            transform: menuOpen ? "rotate(45deg) translate(5px,5px)" : ""
                                        }
                                    }, void 0, false, {
                                        fileName: "[project]/components/shared/layout.jsx",
                                        lineNumber: 151,
                                        columnNumber: 15
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                        style: {
                                            display: "block",
                                            width: "22px",
                                            height: "2px",
                                            background: menuOpen ? __TURBOPACK__imported__module__$5b$project$5d2f$components$2f$shared$2f$vibeTheme$2e$jsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["C"].orange : __TURBOPACK__imported__module__$5b$project$5d2f$components$2f$shared$2f$vibeTheme$2e$jsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["C"].white,
                                            transition: "all .3s",
                                            opacity: menuOpen ? 0 : 1
                                        }
                                    }, void 0, false, {
                                        fileName: "[project]/components/shared/layout.jsx",
                                        lineNumber: 161,
                                        columnNumber: 15
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                        style: {
                                            display: "block",
                                            width: "22px",
                                            height: "2px",
                                            background: menuOpen ? __TURBOPACK__imported__module__$5b$project$5d2f$components$2f$shared$2f$vibeTheme$2e$jsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["C"].orange : __TURBOPACK__imported__module__$5b$project$5d2f$components$2f$shared$2f$vibeTheme$2e$jsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["C"].white,
                                            transition: "all .3s",
                                            transform: menuOpen ? "rotate(-45deg) translate(5px,-5px)" : ""
                                        }
                                    }, void 0, false, {
                                        fileName: "[project]/components/shared/layout.jsx",
                                        lineNumber: 171,
                                        columnNumber: 15
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/components/shared/layout.jsx",
                                lineNumber: 147,
                                columnNumber: 13
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/components/shared/layout.jsx",
                        lineNumber: 124,
                        columnNumber: 9
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/components/shared/layout.jsx",
                lineNumber: 28,
                columnNumber: 7
            }, this),
            isMobile && menuOpen && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                style: {
                    position: "fixed",
                    top: "68px",
                    left: 0,
                    right: 0,
                    bottom: 0,
                    zIndex: 199,
                    background: "rgba(5,5,10,0.99)",
                    backdropFilter: "blur(20px)",
                    animation: "menuSlide .3s ease",
                    overflowY: "auto",
                    padding: "32px 28px 80px"
                },
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        style: {
                            display: "flex",
                            flexDirection: "column",
                            gap: "2px",
                            marginBottom: "32px"
                        },
                        children: ALL_PAGES.map((p, i)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                onClick: ()=>go(p),
                                style: {
                                    fontFamily: "'Bebas Neue',sans-serif",
                                    fontSize: "clamp(28px,6vw,40px)",
                                    letterSpacing: "2px",
                                    textAlign: "left",
                                    color: current === p ? __TURBOPACK__imported__module__$5b$project$5d2f$components$2f$shared$2f$vibeTheme$2e$jsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["C"].orange : __TURBOPACK__imported__module__$5b$project$5d2f$components$2f$shared$2f$vibeTheme$2e$jsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["C"].white,
                                    background: "none",
                                    border: "none",
                                    cursor: "pointer",
                                    padding: "11px 0",
                                    borderBottom: "1px solid rgba(255,255,255,0.05)",
                                    animation: `fadeUp .4s ease ${i * 0.04}s both`
                                },
                                children: p
                            }, p, false, {
                                fileName: "[project]/components/shared/layout.jsx",
                                lineNumber: 203,
                                columnNumber: 15
                            }, this))
                    }, void 0, false, {
                        fileName: "[project]/components/shared/layout.jsx",
                        lineNumber: 201,
                        columnNumber: 11
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                        onClick: ()=>{
                            openWaitlist("Mobile Nav");
                            setMenuOpen(false);
                        },
                        style: {
                            width: "100%",
                            fontFamily: "'Bebas Neue',sans-serif",
                            fontSize: "18px",
                            letterSpacing: "3px",
                            padding: "16px",
                            background: __TURBOPACK__imported__module__$5b$project$5d2f$components$2f$shared$2f$vibeTheme$2e$jsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["C"].orange,
                            color: __TURBOPACK__imported__module__$5b$project$5d2f$components$2f$shared$2f$vibeTheme$2e$jsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["C"].bg,
                            border: "none",
                            borderRadius: "2px",
                            cursor: "pointer"
                        },
                        children: "Join Now"
                    }, void 0, false, {
                        fileName: "[project]/components/shared/layout.jsx",
                        lineNumber: 224,
                        columnNumber: 11
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/components/shared/layout.jsx",
                lineNumber: 186,
                columnNumber: 9
            }, this)
        ]
    }, void 0, true);
}
function Footer({ setPage }) {
    const w = (0, __TURBOPACK__imported__module__$5b$project$5d2f$components$2f$shared$2f$hooks$2e$jsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useWindowWidth"])();
    const go = (p)=>{
        setPage(p);
        window.scrollTo(0, 0);
    };
    const cols = [
        {
            title: "Platform",
            links: [
                "About",
                "Team",
                "Creators",
                "Marketplace",
                "Pricing"
            ]
        },
        {
            title: "Business",
            links: [
                "Advertise",
                "Business",
                "Contact"
            ]
        },
        {
            title: "Company",
            links: [
                "Jobs",
                "Team",
                "Contact"
            ]
        },
        {
            title: "Legal",
            links: [
                "Privacy",
                "Terms",
                "Cookies"
            ]
        }
    ];
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("footer", {
        style: {
            background: "#02020A",
            borderTop: `1px solid ${__TURBOPACK__imported__module__$5b$project$5d2f$components$2f$shared$2f$vibeTheme$2e$jsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["C"].border}`
        },
        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            style: {
                maxWidth: "1100px",
                margin: "0 auto",
                padding: w < 600 ? "48px 20px" : "56px 64px"
            },
            children: [
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    style: {
                        display: "grid",
                        gridTemplateColumns: w < 600 ? "1fr 1fr" : w < 960 ? "1fr 1fr 1fr" : "1fr 1fr 1fr 1fr 1fr",
                        gap: "36px",
                        marginBottom: "52px"
                    },
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                    onClick: ()=>go("home"),
                                    style: {
                                        fontFamily: "'Bebas Neue',sans-serif",
                                        fontSize: "22px",
                                        letterSpacing: "3px",
                                        color: __TURBOPACK__imported__module__$5b$project$5d2f$components$2f$shared$2f$vibeTheme$2e$jsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["C"].orange,
                                        background: "none",
                                        border: "none",
                                        cursor: "pointer",
                                        marginBottom: "14px",
                                        display: "block"
                                    },
                                    children: "VIBECIRCLE"
                                }, void 0, false, {
                                    fileName: "[project]/components/shared/layout.jsx",
                                    lineNumber: 274,
                                    columnNumber: 13
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                    style: {
                                        fontFamily: "'DM Sans',sans-serif",
                                        fontSize: "12px",
                                        color: __TURBOPACK__imported__module__$5b$project$5d2f$components$2f$shared$2f$vibeTheme$2e$jsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["C"].dimmer,
                                        lineHeight: 1.7,
                                        maxWidth: "180px",
                                        marginBottom: "18px"
                                    },
                                    children: "Where creators, cities, events, and businesses collide in real life."
                                }, void 0, false, {
                                    fileName: "[project]/components/shared/layout.jsx",
                                    lineNumber: 290,
                                    columnNumber: 13
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    style: {
                                        display: "flex",
                                        gap: "8px"
                                    },
                                    children: __TURBOPACK__imported__module__$5b$project$5d2f$components$2f$shared$2f$vibeTheme$2e$jsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["SOCIALS"].map((s, i)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("a", {
                                            href: s.href,
                                            target: "_blank",
                                            rel: "noopener noreferrer",
                                            "aria-label": s.label,
                                            style: {
                                                width: "30px",
                                                height: "30px",
                                                border: "1px solid rgba(255,255,255,0.1)",
                                                borderRadius: "2px",
                                                display: "flex",
                                                alignItems: "center",
                                                justifyContent: "center",
                                                cursor: "pointer",
                                                transition: "border-color .2s,background .2s,color .2s",
                                                textDecoration: "none",
                                                color: "rgba(255,255,255,0.8)"
                                            },
                                            onMouseEnter: (e)=>{
                                                e.currentTarget.style.borderColor = __TURBOPACK__imported__module__$5b$project$5d2f$components$2f$shared$2f$vibeTheme$2e$jsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["C"].orange;
                                                e.currentTarget.style.background = "rgba(255,107,0,0.1)";
                                            },
                                            onMouseLeave: (e)=>{
                                                e.currentTarget.style.borderColor = "rgba(255,255,255,0.1)";
                                                e.currentTarget.style.background = "transparent";
                                            },
                                            children: s.icon
                                        }, i, false, {
                                            fileName: "[project]/components/shared/layout.jsx",
                                            lineNumber: 295,
                                            columnNumber: 17
                                        }, this))
                                }, void 0, false, {
                                    fileName: "[project]/components/shared/layout.jsx",
                                    lineNumber: 293,
                                    columnNumber: 13
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "[project]/components/shared/layout.jsx",
                            lineNumber: 273,
                            columnNumber: 11
                        }, this),
                        cols.map((col)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        style: {
                                            fontFamily: "'Bebas Neue',sans-serif",
                                            fontSize: "12px",
                                            letterSpacing: "3px",
                                            color: __TURBOPACK__imported__module__$5b$project$5d2f$components$2f$shared$2f$vibeTheme$2e$jsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["C"].orange,
                                            marginBottom: "14px"
                                        },
                                        children: col.title
                                    }, void 0, false, {
                                        fileName: "[project]/components/shared/layout.jsx",
                                        lineNumber: 330,
                                        columnNumber: 15
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        style: {
                                            display: "flex",
                                            flexDirection: "column",
                                            gap: "9px"
                                        },
                                        children: col.links.map((l)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                                onClick: ()=>go(l),
                                                style: {
                                                    fontFamily: "'DM Sans',sans-serif",
                                                    fontSize: "12px",
                                                    color: __TURBOPACK__imported__module__$5b$project$5d2f$components$2f$shared$2f$vibeTheme$2e$jsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["C"].dimmer,
                                                    background: "none",
                                                    border: "none",
                                                    cursor: "pointer",
                                                    textAlign: "left",
                                                    transition: "color .2s",
                                                    padding: 0
                                                },
                                                onMouseEnter: (e)=>e.target.style.color = __TURBOPACK__imported__module__$5b$project$5d2f$components$2f$shared$2f$vibeTheme$2e$jsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["C"].white,
                                                onMouseLeave: (e)=>e.target.style.color = __TURBOPACK__imported__module__$5b$project$5d2f$components$2f$shared$2f$vibeTheme$2e$jsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["C"].dimmer,
                                                children: l
                                            }, l, false, {
                                                fileName: "[project]/components/shared/layout.jsx",
                                                lineNumber: 335,
                                                columnNumber: 19
                                            }, this))
                                    }, void 0, false, {
                                        fileName: "[project]/components/shared/layout.jsx",
                                        lineNumber: 333,
                                        columnNumber: 15
                                    }, this)
                                ]
                            }, col.title, true, {
                                fileName: "[project]/components/shared/layout.jsx",
                                lineNumber: 329,
                                columnNumber: 13
                            }, this))
                    ]
                }, void 0, true, {
                    fileName: "[project]/components/shared/layout.jsx",
                    lineNumber: 265,
                    columnNumber: 9
                }, this),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    style: {
                        height: "1px",
                        background: "rgba(255,255,255,0.05)",
                        marginBottom: "22px"
                    }
                }, void 0, false, {
                    fileName: "[project]/components/shared/layout.jsx",
                    lineNumber: 359,
                    columnNumber: 9
                }, this),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    style: {
                        display: "flex",
                        justifyContent: "space-between",
                        alignItems: "center",
                        flexWrap: "wrap",
                        gap: "12px"
                    },
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                            style: {
                                fontFamily: "'DM Sans',sans-serif",
                                fontSize: "11px",
                                color: "rgba(255,255,255,0.18)"
                            },
                            children: "(c) 2026 VibeCircle (Pty) Ltd - Making energy visible."
                        }, void 0, false, {
                            fileName: "[project]/components/shared/layout.jsx",
                            lineNumber: 361,
                            columnNumber: 11
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            style: {
                                display: "flex",
                                gap: "20px"
                            },
                            children: [
                                "Privacy",
                                "Terms",
                                "Cookies"
                            ].map((l)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                    onClick: ()=>go(l),
                                    style: {
                                        fontFamily: "'DM Sans',sans-serif",
                                        fontSize: "11px",
                                        color: "rgba(255,255,255,0.18)",
                                        cursor: "pointer",
                                        background: "none",
                                        border: "none",
                                        padding: 0,
                                        transition: "color .2s"
                                    },
                                    onMouseEnter: (e)=>e.target.style.color = __TURBOPACK__imported__module__$5b$project$5d2f$components$2f$shared$2f$vibeTheme$2e$jsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["C"].orange,
                                    onMouseLeave: (e)=>e.target.style.color = "rgba(255,255,255,0.18)",
                                    children: l
                                }, l, false, {
                                    fileName: "[project]/components/shared/layout.jsx",
                                    lineNumber: 366,
                                    columnNumber: 15
                                }, this))
                        }, void 0, false, {
                            fileName: "[project]/components/shared/layout.jsx",
                            lineNumber: 364,
                            columnNumber: 11
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "[project]/components/shared/layout.jsx",
                    lineNumber: 360,
                    columnNumber: 9
                }, this)
            ]
        }, void 0, true, {
            fileName: "[project]/components/shared/layout.jsx",
            lineNumber: 264,
            columnNumber: 7
        }, this)
    }, void 0, false, {
        fileName: "[project]/components/shared/layout.jsx",
        lineNumber: 263,
        columnNumber: 5
    }, this);
}
}),
"[project]/components/shared/overlays.jsx [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "BackToTop",
    ()=>BackToTop,
    "CookieBanner",
    ()=>CookieBanner,
    "ToastContainer",
    ()=>ToastContainer,
    "WaitlistModal",
    ()=>WaitlistModal
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react-jsx-dev-runtime.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$components$2f$shared$2f$vibeTheme$2e$jsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/components/shared/vibeTheme.jsx [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$components$2f$shared$2f$hooks$2e$jsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/components/shared/hooks.jsx [app-ssr] (ecmascript)");
"use client";
;
;
;
;
function Toast({ toast, onRemove }) {
    const [exit, setExit] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])(false);
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useEffect"])(()=>{
        const t = setTimeout(()=>{
            setExit(true);
            setTimeout(()=>onRemove(toast.id), 400);
        }, toast.duration || 4000);
        return ()=>clearTimeout(t);
    }, [
        toast,
        onRemove
    ]);
    const colors = {
        success: __TURBOPACK__imported__module__$5b$project$5d2f$components$2f$shared$2f$vibeTheme$2e$jsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["C"].orange,
        error: __TURBOPACK__imported__module__$5b$project$5d2f$components$2f$shared$2f$vibeTheme$2e$jsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["C"].pink,
        info: __TURBOPACK__imported__module__$5b$project$5d2f$components$2f$shared$2f$vibeTheme$2e$jsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["C"].blue
    };
    const icons = {
        success: "---",
        error: "---",
        info: "i"
    };
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        style: {
            display: "flex",
            alignItems: "flex-start",
            gap: "12px",
            padding: "16px 20px",
            background: "#0F0F1E",
            border: `1px solid ${colors[toast.type] || __TURBOPACK__imported__module__$5b$project$5d2f$components$2f$shared$2f$vibeTheme$2e$jsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["C"].orange}40`,
            borderLeft: `3px solid ${colors[toast.type] || __TURBOPACK__imported__module__$5b$project$5d2f$components$2f$shared$2f$vibeTheme$2e$jsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["C"].orange}`,
            borderRadius: "4px",
            maxWidth: "340px",
            boxShadow: "0 8px 32px rgba(0,0,0,0.6)",
            animation: exit ? "toastOut .4s ease forwards" : "toastIn .4s ease forwards"
        },
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                style: {
                    width: "22px",
                    height: "22px",
                    borderRadius: "50%",
                    background: `${colors[toast.type] || __TURBOPACK__imported__module__$5b$project$5d2f$components$2f$shared$2f$vibeTheme$2e$jsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["C"].orange}20`,
                    border: `1px solid ${colors[toast.type] || __TURBOPACK__imported__module__$5b$project$5d2f$components$2f$shared$2f$vibeTheme$2e$jsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["C"].orange}`,
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    fontSize: "11px",
                    color: colors[toast.type] || __TURBOPACK__imported__module__$5b$project$5d2f$components$2f$shared$2f$vibeTheme$2e$jsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["C"].orange,
                    flexShrink: 0,
                    fontWeight: "bold"
                },
                children: icons[toast.type] || "i"
            }, void 0, false, {
                fileName: "[project]/components/shared/overlays.jsx",
                lineNumber: 34,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                style: {
                    flex: 1
                },
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        style: {
                            fontFamily: "'Bebas Neue',sans-serif",
                            fontSize: "14px",
                            letterSpacing: "1px",
                            color: __TURBOPACK__imported__module__$5b$project$5d2f$components$2f$shared$2f$vibeTheme$2e$jsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["C"].white,
                            marginBottom: "3px"
                        },
                        children: toast.title
                    }, void 0, false, {
                        fileName: "[project]/components/shared/overlays.jsx",
                        lineNumber: 53,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        style: {
                            fontFamily: "'DM Sans',sans-serif",
                            fontSize: "12px",
                            color: __TURBOPACK__imported__module__$5b$project$5d2f$components$2f$shared$2f$vibeTheme$2e$jsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["C"].dim,
                            lineHeight: 1.5
                        },
                        children: toast.message
                    }, void 0, false, {
                        fileName: "[project]/components/shared/overlays.jsx",
                        lineNumber: 56,
                        columnNumber: 9
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/components/shared/overlays.jsx",
                lineNumber: 52,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                onClick: ()=>{
                    setExit(true);
                    setTimeout(()=>onRemove(toast.id), 400);
                },
                style: {
                    background: "none",
                    border: "none",
                    color: __TURBOPACK__imported__module__$5b$project$5d2f$components$2f$shared$2f$vibeTheme$2e$jsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["C"].dimmer,
                    cursor: "pointer",
                    fontSize: "16px",
                    lineHeight: 1,
                    padding: "0",
                    flexShrink: 0
                },
                children: "--"
            }, void 0, false, {
                fileName: "[project]/components/shared/overlays.jsx",
                lineNumber: 58,
                columnNumber: 7
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/components/shared/overlays.jsx",
        lineNumber: 19,
        columnNumber: 5
    }, this);
}
function ToastContainer({ toasts, removeToast }) {
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        style: {
            position: "fixed",
            bottom: "80px",
            right: "24px",
            zIndex: 9999,
            display: "flex",
            flexDirection: "column",
            gap: "10px",
            alignItems: "flex-end"
        },
        children: toasts.map((t)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(Toast, {
                toast: t,
                onRemove: removeToast
            }, t.id, false, {
                fileName: "[project]/components/shared/overlays.jsx",
                lineNumber: 75,
                columnNumber: 9
            }, this))
    }, void 0, false, {
        fileName: "[project]/components/shared/overlays.jsx",
        lineNumber: 73,
        columnNumber: 5
    }, this);
}
function WaitlistModal({ open, onClose, context, addToast }) {
    const [step, setStep] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])(1);
    const [loading, setLoading] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])(false);
    const [role, setRole] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])("");
    const [form, setForm] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])({
        name: "",
        email: "",
        city: "",
        role: ""
    });
    const roles = [
        "Creator",
        "Business Owner",
        "Brand / Agency",
        "Just Curious"
    ];
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useEffect"])(()=>{
        if (!open) {
            setTimeout(()=>{
                setStep(1);
                setRole("");
                setForm({
                    name: "",
                    email: "",
                    city: "",
                    role: ""
                });
            }, 300);
        }
    }, [
        open
    ]);
    const submit = async ()=>{
        if (!form.name || !form.email || !role) return;
        setLoading(true);
        try {
            await fetch("https://formsubmit.co/ajax/info@vibecircle.com", {
                method: "POST",
                headers: {
                    "Content-Type": "application/json",
                    Accept: "application/json"
                },
                body: JSON.stringify({
                    _subject: `New Waitlist Signup --- ${role}`,
                    name: form.name,
                    email: form.email,
                    city: form.city,
                    role,
                    context: context || "Website",
                    _template: "table"
                })
            });
        } catch (e) {
        // ignore
        }
        setLoading(false);
        setStep(2);
        addToast({
            type: "success",
            title: "You're on the list!",
            message: `We'll be in touch at ${form.email} soon.`
        });
    };
    if (!open) return null;
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        style: {
            position: "fixed",
            inset: 0,
            zIndex: 600,
            background: "rgba(0,0,0,0.88)",
            backdropFilter: "blur(16px)",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            padding: "24px",
            animation: "fadeIn .2s ease"
        },
        onClick: (e)=>{
            if (e.target === e.currentTarget) onClose();
        },
        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            style: {
                background: "#0A0A16",
                border: `1px solid ${__TURBOPACK__imported__module__$5b$project$5d2f$components$2f$shared$2f$vibeTheme$2e$jsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["C"].orange}35`,
                borderRadius: "6px",
                padding: "48px",
                maxWidth: "480px",
                width: "100%",
                position: "relative",
                animation: "fadeUp .3s ease",
                maxHeight: "90vh",
                overflowY: "auto"
            },
            children: [
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                    onClick: onClose,
                    style: {
                        position: "absolute",
                        top: "18px",
                        right: "20px",
                        background: "none",
                        border: "none",
                        color: __TURBOPACK__imported__module__$5b$project$5d2f$components$2f$shared$2f$vibeTheme$2e$jsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["C"].dim,
                        fontSize: "22px",
                        cursor: "pointer",
                        lineHeight: 1
                    },
                    children: "--"
                }, void 0, false, {
                    fileName: "[project]/components/shared/overlays.jsx",
                    lineNumber: 156,
                    columnNumber: 9
                }, this),
                step === 1 ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Fragment"], {
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            style: {
                                fontFamily: "'Bebas Neue',sans-serif",
                                fontSize: "clamp(28px,4vw,40px)",
                                color: __TURBOPACK__imported__module__$5b$project$5d2f$components$2f$shared$2f$vibeTheme$2e$jsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["C"].white,
                                lineHeight: 1,
                                marginBottom: "8px"
                            },
                            children: [
                                "Join the ",
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                    style: {
                                        color: __TURBOPACK__imported__module__$5b$project$5d2f$components$2f$shared$2f$vibeTheme$2e$jsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["C"].orange
                                    },
                                    children: "Movement."
                                }, void 0, false, {
                                    fileName: "[project]/components/shared/overlays.jsx",
                                    lineNumber: 162,
                                    columnNumber: 24
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "[project]/components/shared/overlays.jsx",
                            lineNumber: 161,
                            columnNumber: 13
                        }, this),
                        context && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            style: {
                                fontFamily: "'DM Sans',sans-serif",
                                fontSize: "12px",
                                letterSpacing: "1px",
                                color: __TURBOPACK__imported__module__$5b$project$5d2f$components$2f$shared$2f$vibeTheme$2e$jsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["C"].orange,
                                textTransform: "uppercase",
                                marginBottom: "16px"
                            },
                            children: context
                        }, void 0, false, {
                            fileName: "[project]/components/shared/overlays.jsx",
                            lineNumber: 164,
                            columnNumber: 25
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                            style: {
                                fontFamily: "'DM Sans',sans-serif",
                                fontSize: "14px",
                                color: __TURBOPACK__imported__module__$5b$project$5d2f$components$2f$shared$2f$vibeTheme$2e$jsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["C"].dim,
                                lineHeight: 1.7,
                                marginBottom: "28px"
                            },
                            children: "VibeCircle is launching city by city. Be first in your city when we open access."
                        }, void 0, false, {
                            fileName: "[project]/components/shared/overlays.jsx",
                            lineNumber: 165,
                            columnNumber: 13
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            style: {
                                marginBottom: "20px"
                            },
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    style: {
                                        fontFamily: "'DM Sans',sans-serif",
                                        fontSize: "11px",
                                        letterSpacing: "2px",
                                        textTransform: "uppercase",
                                        color: __TURBOPACK__imported__module__$5b$project$5d2f$components$2f$shared$2f$vibeTheme$2e$jsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["C"].dimmer,
                                        marginBottom: "10px"
                                    },
                                    children: "I am a..."
                                }, void 0, false, {
                                    fileName: "[project]/components/shared/overlays.jsx",
                                    lineNumber: 169,
                                    columnNumber: 15
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    style: {
                                        display: "grid",
                                        gridTemplateColumns: "1fr 1fr",
                                        gap: "8px"
                                    },
                                    children: roles.map((r)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                            onClick: ()=>{
                                                setRole(r);
                                                setForm((f)=>({
                                                        ...f,
                                                        role: r
                                                    }));
                                            },
                                            style: {
                                                padding: "12px 10px",
                                                fontFamily: "'DM Sans',sans-serif",
                                                fontSize: "13px",
                                                background: role === r ? `${__TURBOPACK__imported__module__$5b$project$5d2f$components$2f$shared$2f$vibeTheme$2e$jsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["C"].orange}18` : "rgba(255,255,255,0.03)",
                                                border: `1px solid ${role === r ? __TURBOPACK__imported__module__$5b$project$5d2f$components$2f$shared$2f$vibeTheme$2e$jsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["C"].orange + "60" : "rgba(255,255,255,0.1)"}`,
                                                borderRadius: "3px",
                                                color: role === r ? __TURBOPACK__imported__module__$5b$project$5d2f$components$2f$shared$2f$vibeTheme$2e$jsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["C"].white : __TURBOPACK__imported__module__$5b$project$5d2f$components$2f$shared$2f$vibeTheme$2e$jsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["C"].dim,
                                                cursor: "pointer",
                                                transition: "all .2s",
                                                textAlign: "left"
                                            },
                                            children: [
                                                r === roles[0] && "--- ",
                                                r === roles[1] && "---- ",
                                                r === roles[2] && "------- ",
                                                r === roles[3] && "---- ",
                                                r
                                            ]
                                        }, r, true, {
                                            fileName: "[project]/components/shared/overlays.jsx",
                                            lineNumber: 172,
                                            columnNumber: 19
                                        }, this))
                                }, void 0, false, {
                                    fileName: "[project]/components/shared/overlays.jsx",
                                    lineNumber: 170,
                                    columnNumber: 15
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "[project]/components/shared/overlays.jsx",
                            lineNumber: 168,
                            columnNumber: 13
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            style: {
                                display: "flex",
                                flexDirection: "column",
                                gap: "12px",
                                marginBottom: "20px"
                            },
                            children: [
                                [
                                    "name",
                                    "Your Name",
                                    "----"
                                ],
                                [
                                    "email",
                                    "Email Address",
                                    "------"
                                ],
                                [
                                    "city",
                                    "Your City (optional)",
                                    "----"
                                ]
                            ].map(([k, ph, ic])=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    style: {
                                        position: "relative"
                                    },
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                            style: {
                                                position: "absolute",
                                                left: "14px",
                                                top: "50%",
                                                transform: "translateY(-50%)",
                                                fontSize: "14px",
                                                opacity: 0.4
                                            },
                                            children: ic
                                        }, void 0, false, {
                                            fileName: "[project]/components/shared/overlays.jsx",
                                            lineNumber: 207,
                                            columnNumber: 19
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
                                            placeholder: ph,
                                            value: form[k],
                                            onChange: (e)=>setForm((f)=>({
                                                        ...f,
                                                        [k]: e.target.value
                                                    })),
                                            style: {
                                                width: "100%",
                                                background: "rgba(255,255,255,0.04)",
                                                border: "1px solid rgba(255,255,255,0.1)",
                                                borderRadius: "3px",
                                                padding: "13px 14px 13px 40px",
                                                fontFamily: "'DM Sans',sans-serif",
                                                fontSize: "14px",
                                                color: __TURBOPACK__imported__module__$5b$project$5d2f$components$2f$shared$2f$vibeTheme$2e$jsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["C"].white,
                                                outline: "none",
                                                transition: "border-color .2s"
                                            },
                                            onFocus: (e)=>e.target.style.borderColor = __TURBOPACK__imported__module__$5b$project$5d2f$components$2f$shared$2f$vibeTheme$2e$jsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["C"].orange,
                                            onBlur: (e)=>e.target.style.borderColor = "rgba(255,255,255,0.1)"
                                        }, void 0, false, {
                                            fileName: "[project]/components/shared/overlays.jsx",
                                            lineNumber: 208,
                                            columnNumber: 19
                                        }, this)
                                    ]
                                }, k, true, {
                                    fileName: "[project]/components/shared/overlays.jsx",
                                    lineNumber: 206,
                                    columnNumber: 17
                                }, this))
                        }, void 0, false, {
                            fileName: "[project]/components/shared/overlays.jsx",
                            lineNumber: 200,
                            columnNumber: 13
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                            onClick: submit,
                            disabled: loading || !form.name || !form.email || !role,
                            style: {
                                width: "100%",
                                fontFamily: "'Bebas Neue',sans-serif",
                                fontSize: "16px",
                                letterSpacing: "3px",
                                padding: "16px",
                                background: !form.name || !form.email || !role ? "rgba(255,107,0,0.3)" : __TURBOPACK__imported__module__$5b$project$5d2f$components$2f$shared$2f$vibeTheme$2e$jsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["C"].orange,
                                color: __TURBOPACK__imported__module__$5b$project$5d2f$components$2f$shared$2f$vibeTheme$2e$jsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["C"].bg,
                                border: "none",
                                borderRadius: "3px",
                                cursor: !form.name || !form.email || !role ? "not-allowed" : "pointer",
                                transition: "box-shadow .2s",
                                display: "flex",
                                alignItems: "center",
                                justifyContent: "center",
                                gap: "10px"
                            },
                            onMouseEnter: (e)=>{
                                if (!loading && form.name && form.email && role) e.target.style.boxShadow = `0 10px 32px ${__TURBOPACK__imported__module__$5b$project$5d2f$components$2f$shared$2f$vibeTheme$2e$jsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["C"].orange}45`;
                            },
                            onMouseLeave: (e)=>e.target.style.boxShadow = "",
                            children: [
                                loading ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                    style: {
                                        display: "inline-block",
                                        width: "16px",
                                        height: "16px",
                                        border: "2px solid rgba(5,5,10,0.4)",
                                        borderTopColor: "#05050A",
                                        borderRadius: "50%",
                                        animation: "spin 0.6s linear infinite"
                                    }
                                }, void 0, false, {
                                    fileName: "[project]/components/shared/overlays.jsx",
                                    lineNumber: 245,
                                    columnNumber: 17
                                }, this) : "",
                                loading ? "Joining..." : "Secure My Spot ---"
                            ]
                        }, void 0, true, {
                            fileName: "[project]/components/shared/overlays.jsx",
                            lineNumber: 219,
                            columnNumber: 13
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                            style: {
                                fontFamily: "'DM Sans',sans-serif",
                                fontSize: "11px",
                                color: "rgba(255,255,255,0.2)",
                                textAlign: "center",
                                marginTop: "12px"
                            },
                            children: "No spam. Unsubscribe anytime."
                        }, void 0, false, {
                            fileName: "[project]/components/shared/overlays.jsx",
                            lineNumber: 253,
                            columnNumber: 13
                        }, this)
                    ]
                }, void 0, true) : /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    style: {
                        textAlign: "center",
                        padding: "20px 0"
                    },
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            style: {
                                fontSize: "56px",
                                marginBottom: "20px",
                                animation: "checkPop .5s ease"
                            },
                            children: "----"
                        }, void 0, false, {
                            fileName: "[project]/components/shared/overlays.jsx",
                            lineNumber: 257,
                            columnNumber: 13
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            style: {
                                fontFamily: "'Bebas Neue',sans-serif",
                                fontSize: "36px",
                                color: __TURBOPACK__imported__module__$5b$project$5d2f$components$2f$shared$2f$vibeTheme$2e$jsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["C"].orange,
                                lineHeight: 1,
                                marginBottom: "12px"
                            },
                            children: "You're on the list."
                        }, void 0, false, {
                            fileName: "[project]/components/shared/overlays.jsx",
                            lineNumber: 258,
                            columnNumber: 13
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                            style: {
                                fontFamily: "'DM Sans',sans-serif",
                                fontSize: "15px",
                                color: __TURBOPACK__imported__module__$5b$project$5d2f$components$2f$shared$2f$vibeTheme$2e$jsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["C"].dim,
                                lineHeight: 1.7,
                                marginBottom: "8px"
                            },
                            children: [
                                "Welcome to VibeCircle, ",
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                    style: {
                                        color: __TURBOPACK__imported__module__$5b$project$5d2f$components$2f$shared$2f$vibeTheme$2e$jsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["C"].white,
                                        fontWeight: 600
                                    },
                                    children: form.name
                                }, void 0, false, {
                                    fileName: "[project]/components/shared/overlays.jsx",
                                    lineNumber: 260,
                                    columnNumber: 38
                                }, this),
                                "."
                            ]
                        }, void 0, true, {
                            fileName: "[project]/components/shared/overlays.jsx",
                            lineNumber: 259,
                            columnNumber: 13
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                            style: {
                                fontFamily: "'DM Sans',sans-serif",
                                fontSize: "14px",
                                color: __TURBOPACK__imported__module__$5b$project$5d2f$components$2f$shared$2f$vibeTheme$2e$jsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["C"].dimmer,
                                lineHeight: 1.7,
                                marginBottom: "32px"
                            },
                            children: [
                                "We'll email you at ",
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                    style: {
                                        color: __TURBOPACK__imported__module__$5b$project$5d2f$components$2f$shared$2f$vibeTheme$2e$jsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["C"].orange
                                    },
                                    children: form.email
                                }, void 0, false, {
                                    fileName: "[project]/components/shared/overlays.jsx",
                                    lineNumber: 263,
                                    columnNumber: 34
                                }, this),
                                " the moment we launch in your city."
                            ]
                        }, void 0, true, {
                            fileName: "[project]/components/shared/overlays.jsx",
                            lineNumber: 262,
                            columnNumber: 13
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                            onClick: onClose,
                            style: {
                                fontFamily: "'Bebas Neue',sans-serif",
                                fontSize: "14px",
                                letterSpacing: "3px",
                                padding: "13px 36px",
                                background: __TURBOPACK__imported__module__$5b$project$5d2f$components$2f$shared$2f$vibeTheme$2e$jsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["C"].orange,
                                color: __TURBOPACK__imported__module__$5b$project$5d2f$components$2f$shared$2f$vibeTheme$2e$jsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["C"].bg,
                                border: "none",
                                borderRadius: "3px",
                                cursor: "pointer"
                            },
                            children: "Close"
                        }, void 0, false, {
                            fileName: "[project]/components/shared/overlays.jsx",
                            lineNumber: 265,
                            columnNumber: 13
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "[project]/components/shared/overlays.jsx",
                    lineNumber: 256,
                    columnNumber: 11
                }, this)
            ]
        }, void 0, true, {
            fileName: "[project]/components/shared/overlays.jsx",
            lineNumber: 142,
            columnNumber: 7
        }, this)
    }, void 0, false, {
        fileName: "[project]/components/shared/overlays.jsx",
        lineNumber: 125,
        columnNumber: 5
    }, this);
}
function CookieBanner({ onAccept, onDecline, setPage }) {
    const w = (0, __TURBOPACK__imported__module__$5b$project$5d2f$components$2f$shared$2f$hooks$2e$jsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useWindowWidth"])();
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        style: {
            position: "fixed",
            bottom: 0,
            left: 0,
            right: 0,
            zIndex: 500,
            background: "rgba(8,8,18,0.98)",
            backdropFilter: "blur(20px)",
            borderTop: `1px solid ${__TURBOPACK__imported__module__$5b$project$5d2f$components$2f$shared$2f$vibeTheme$2e$jsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["C"].border}`,
            padding: w < 600 ? "20px" : "20px 48px",
            display: "flex",
            alignItems: "center",
            justifyContent: "space-between",
            gap: "20px",
            flexWrap: "wrap",
            animation: "cookieUp .4s ease"
        },
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                style: {
                    fontFamily: "'DM Sans',sans-serif",
                    fontSize: "13px",
                    color: __TURBOPACK__imported__module__$5b$project$5d2f$components$2f$shared$2f$vibeTheme$2e$jsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["C"].dim,
                    flex: 1,
                    minWidth: "240px",
                    lineHeight: 1.6
                },
                children: [
                    "We use cookies to improve your experience, personalise content, and analyse site traffic.",
                    " ",
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                        onClick: ()=>setPage("Privacy"),
                        style: {
                            background: "none",
                            border: "none",
                            color: __TURBOPACK__imported__module__$5b$project$5d2f$components$2f$shared$2f$vibeTheme$2e$jsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["C"].orange,
                            cursor: "pointer",
                            fontFamily: "'DM Sans',sans-serif",
                            fontSize: "13px",
                            padding: 0,
                            textDecoration: "underline"
                        },
                        children: "Learn more"
                    }, void 0, false, {
                        fileName: "[project]/components/shared/overlays.jsx",
                        lineNumber: 299,
                        columnNumber: 9
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/components/shared/overlays.jsx",
                lineNumber: 297,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                style: {
                    display: "flex",
                    gap: "10px",
                    flexShrink: 0
                },
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                        onClick: onDecline,
                        style: {
                            fontFamily: "'Bebas Neue',sans-serif",
                            fontSize: "13px",
                            letterSpacing: "2px",
                            padding: "10px 22px",
                            background: "transparent",
                            color: __TURBOPACK__imported__module__$5b$project$5d2f$components$2f$shared$2f$vibeTheme$2e$jsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["C"].dimmer,
                            border: "1px solid rgba(255,255,255,0.12)",
                            borderRadius: "2px",
                            cursor: "pointer",
                            transition: "all .2s"
                        },
                        onMouseEnter: (e)=>{
                            e.currentTarget.style.color = __TURBOPACK__imported__module__$5b$project$5d2f$components$2f$shared$2f$vibeTheme$2e$jsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["C"].white;
                            e.currentTarget.style.borderColor = "rgba(255,255,255,0.3)";
                        },
                        onMouseLeave: (e)=>{
                            e.currentTarget.style.color = __TURBOPACK__imported__module__$5b$project$5d2f$components$2f$shared$2f$vibeTheme$2e$jsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["C"].dimmer;
                            e.currentTarget.style.borderColor = "rgba(255,255,255,0.12)";
                        },
                        children: "Decline"
                    }, void 0, false, {
                        fileName: "[project]/components/shared/overlays.jsx",
                        lineNumber: 304,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                        onClick: onAccept,
                        style: {
                            fontFamily: "'Bebas Neue',sans-serif",
                            fontSize: "13px",
                            letterSpacing: "2px",
                            padding: "10px 22px",
                            background: __TURBOPACK__imported__module__$5b$project$5d2f$components$2f$shared$2f$vibeTheme$2e$jsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["C"].orange,
                            color: __TURBOPACK__imported__module__$5b$project$5d2f$components$2f$shared$2f$vibeTheme$2e$jsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["C"].bg,
                            border: "none",
                            borderRadius: "2px",
                            cursor: "pointer",
                            transition: "box-shadow .2s"
                        },
                        onMouseEnter: (e)=>e.target.style.boxShadow = `0 4px 16px ${__TURBOPACK__imported__module__$5b$project$5d2f$components$2f$shared$2f$vibeTheme$2e$jsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["C"].orange}40`,
                        onMouseLeave: (e)=>e.target.style.boxShadow = "",
                        children: "Accept All"
                    }, void 0, false, {
                        fileName: "[project]/components/shared/overlays.jsx",
                        lineNumber: 318,
                        columnNumber: 9
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/components/shared/overlays.jsx",
                lineNumber: 303,
                columnNumber: 7
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/components/shared/overlays.jsx",
        lineNumber: 278,
        columnNumber: 5
    }, this);
}
function BackToTop() {
    const [show, setShow] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])(false);
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useEffect"])(()=>{
        const h = ()=>setShow(window.scrollY > 400);
        window.addEventListener("scroll", h);
        return ()=>window.removeEventListener("scroll", h);
    }, []);
    if (!show) return null;
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
        onClick: ()=>window.scrollTo({
                top: 0,
                behavior: "smooth"
            }),
        style: {
            position: "fixed",
            bottom: "80px",
            right: "24px",
            zIndex: 400,
            width: "44px",
            height: "44px",
            borderRadius: "50%",
            background: __TURBOPACK__imported__module__$5b$project$5d2f$components$2f$shared$2f$vibeTheme$2e$jsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["C"].orange,
            color: __TURBOPACK__imported__module__$5b$project$5d2f$components$2f$shared$2f$vibeTheme$2e$jsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["C"].bg,
            border: "none",
            cursor: "pointer",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            fontSize: "18px",
            boxShadow: `0 4px 20px ${__TURBOPACK__imported__module__$5b$project$5d2f$components$2f$shared$2f$vibeTheme$2e$jsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["C"].orange}50`,
            transition: "transform .2s,box-shadow .2s",
            animation: "fadeIn .3s ease"
        },
        onMouseEnter: (e)=>{
            e.target.style.transform = "translateY(-3px)";
            e.target.style.boxShadow = `0 8px 28px ${__TURBOPACK__imported__module__$5b$project$5d2f$components$2f$shared$2f$vibeTheme$2e$jsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["C"].orange}60`;
        },
        onMouseLeave: (e)=>{
            e.target.style.transform = "";
            e.target.style.boxShadow = `0 4px 20px ${__TURBOPACK__imported__module__$5b$project$5d2f$components$2f$shared$2f$vibeTheme$2e$jsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["C"].orange}50`;
        },
        children: "---"
    }, void 0, false, {
        fileName: "[project]/components/shared/overlays.jsx",
        lineNumber: 340,
        columnNumber: 5
    }, this);
}
}),
"[project]/components/AppShell.jsx [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>AppShell
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react-jsx-dev-runtime.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$navigation$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/navigation.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$components$2f$shared$2f$vibeTheme$2e$jsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/components/shared/vibeTheme.jsx [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$components$2f$shared$2f$layout$2e$jsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/components/shared/layout.jsx [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$components$2f$shared$2f$overlays$2e$jsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/components/shared/overlays.jsx [app-ssr] (ecmascript)");
"use client";
;
;
;
;
;
;
function AppShell({ children }) {
    const router = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$navigation$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useRouter"])();
    const pathname = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$navigation$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["usePathname"])();
    const [mounted, setMounted] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])(false);
    const [waitlistOpen, setWaitlistOpen] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])(false);
    const [waitlistContext, setWaitlistContext] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])("");
    const [toasts, setToasts] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])([]);
    const [cookieState, setCookieState] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])("pending");
    const [transitionKey, setTransitionKey] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])(0);
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useEffect"])(()=>{
        setMounted(true);
    }, []);
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useEffect"])(()=>{
        window.storage?.get("vc_cookie_consent").then((r)=>{
            if (r) setCookieState(r.value);
        }).catch(()=>{});
    }, []);
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useEffect"])(()=>{
        setTransitionKey((k)=>k + 1);
    }, [
        pathname
    ]);
    const openWaitlist = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useCallback"])((ctx = "")=>{
        setWaitlistContext(ctx);
        setWaitlistOpen(true);
    }, []);
    const addToast = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useCallback"])((t)=>setToasts((prev)=>[
                ...prev,
                {
                    ...t,
                    id: Date.now() + Math.random()
                }
            ]), []);
    const removeToast = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useCallback"])((id)=>setToasts((prev)=>prev.filter((t)=>t.id !== id)), []);
    const goPage = (p)=>{
        const nextPath = __TURBOPACK__imported__module__$5b$project$5d2f$components$2f$shared$2f$vibeTheme$2e$jsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["PAGE_TO_PATH"][p] || "/";
        if (pathname !== nextPath) router.push(nextPath);
        window.scrollTo(0, 0);
    };
    const acceptCookies = ()=>{
        setCookieState("accepted");
        window.storage?.set("vc_cookie_consent", "accepted").catch(()=>{});
        addToast({
            type: "info",
            title: "Cookies accepted",
            message: "Your preferences have been saved."
        });
    };
    const declineCookies = ()=>{
        setCookieState("declined");
        window.storage?.set("vc_cookie_consent", "declined").catch(()=>{});
    };
    const sharedProps = {
        setPage: goPage,
        openWaitlist,
        addToast
    };
    const content = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Children"].map(children, (child)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["isValidElement"])(child) ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["cloneElement"])(child, sharedProps) : child);
    const currentPage = __TURBOPACK__imported__module__$5b$project$5d2f$components$2f$shared$2f$vibeTheme$2e$jsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["PATH_TO_PAGE"][pathname] || "home";
    if (!mounted) return null;
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Fragment"], {
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("style", {
                children: __TURBOPACK__imported__module__$5b$project$5d2f$components$2f$shared$2f$vibeTheme$2e$jsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["GLOBAL_CSS"]
            }, void 0, false, {
                fileName: "[project]/components/AppShell.jsx",
                lineNumber: 67,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$components$2f$shared$2f$layout$2e$jsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Nav"], {
                current: currentPage,
                setPage: goPage,
                openWaitlist: openWaitlist
            }, void 0, false, {
                fileName: "[project]/components/AppShell.jsx",
                lineNumber: 68,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("main", {
                className: "page-enter",
                children: content
            }, transitionKey, false, {
                fileName: "[project]/components/AppShell.jsx",
                lineNumber: 69,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$components$2f$shared$2f$layout$2e$jsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Footer"], {
                setPage: goPage,
                openWaitlist: openWaitlist
            }, void 0, false, {
                fileName: "[project]/components/AppShell.jsx",
                lineNumber: 72,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$components$2f$shared$2f$overlays$2e$jsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["WaitlistModal"], {
                open: waitlistOpen,
                onClose: ()=>setWaitlistOpen(false),
                context: waitlistContext,
                addToast: addToast
            }, void 0, false, {
                fileName: "[project]/components/AppShell.jsx",
                lineNumber: 73,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$components$2f$shared$2f$overlays$2e$jsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["ToastContainer"], {
                toasts: toasts,
                removeToast: removeToast
            }, void 0, false, {
                fileName: "[project]/components/AppShell.jsx",
                lineNumber: 79,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$components$2f$shared$2f$overlays$2e$jsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["BackToTop"], {}, void 0, false, {
                fileName: "[project]/components/AppShell.jsx",
                lineNumber: 80,
                columnNumber: 7
            }, this),
            cookieState === "pending" && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$components$2f$shared$2f$overlays$2e$jsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["CookieBanner"], {
                onAccept: acceptCookies,
                onDecline: declineCookies,
                setPage: goPage
            }, void 0, false, {
                fileName: "[project]/components/AppShell.jsx",
                lineNumber: 81,
                columnNumber: 37
            }, this)
        ]
    }, void 0, true);
}
}),
"[project]/components/shared/ui.jsx [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "Divider",
    ()=>Divider,
    "FAQ",
    ()=>FAQ,
    "Orb",
    ()=>Orb,
    "PageHero",
    ()=>PageHero,
    "PricingCard",
    ()=>PricingCard,
    "Reveal",
    ()=>Reveal,
    "Tag",
    ()=>Tag,
    "TestimonialCard",
    ()=>TestimonialCard
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react-jsx-dev-runtime.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$components$2f$shared$2f$vibeTheme$2e$jsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/components/shared/vibeTheme.jsx [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$components$2f$shared$2f$hooks$2e$jsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/components/shared/hooks.jsx [app-ssr] (ecmascript)");
"use client";
;
;
;
;
function Reveal({ children, delay = 0, style = {} }) {
    const [ref, v] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$components$2f$shared$2f$hooks$2e$jsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useInView"])();
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        ref: ref,
        style: {
            opacity: v ? 1 : 0,
            transform: v ? "translateY(0)" : "translateY(32px)",
            transition: `opacity .75s ease ${delay}s,transform .75s ease ${delay}s`,
            ...style
        },
        children: children
    }, void 0, false, {
        fileName: "[project]/components/shared/ui.jsx",
        lineNumber: 10,
        columnNumber: 5
    }, this);
}
function Orb({ top, left, right, bottom, size = 500, color = __TURBOPACK__imported__module__$5b$project$5d2f$components$2f$shared$2f$vibeTheme$2e$jsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["C"].orange, opacity = 0.12, delay = "0s" }) {
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        style: {
            position: "absolute",
            borderRadius: "50%",
            width: size,
            height: size,
            top,
            left,
            right,
            bottom,
            background: `radial-gradient(circle,${color}${Math.round(opacity * 255).toString(16).padStart(2, "0")} 0%,transparent 70%)`,
            animation: `orbFloat 8s ease-in-out ${delay} infinite`,
            pointerEvents: "none"
        }
    }, void 0, false, {
        fileName: "[project]/components/shared/ui.jsx",
        lineNumber: 35,
        columnNumber: 5
    }, this);
}
function Tag({ children, color = __TURBOPACK__imported__module__$5b$project$5d2f$components$2f$shared$2f$vibeTheme$2e$jsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["C"].orange }) {
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
        style: {
            fontFamily: "'Bebas Neue',sans-serif",
            fontSize: "11px",
            letterSpacing: "4px",
            color,
            textTransform: "uppercase",
            border: `1px solid ${color}40`,
            padding: "6px 14px",
            borderRadius: "2px",
            display: "inline-block"
        },
        children: children
    }, void 0, false, {
        fileName: "[project]/components/shared/ui.jsx",
        lineNumber: 59,
        columnNumber: 5
    }, this);
}
function Divider() {
    const w = (0, __TURBOPACK__imported__module__$5b$project$5d2f$components$2f$shared$2f$hooks$2e$jsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useWindowWidth"])();
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        style: {
            height: "1px",
            background: `linear-gradient(90deg,${__TURBOPACK__imported__module__$5b$project$5d2f$components$2f$shared$2f$vibeTheme$2e$jsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["C"].orange}40,transparent)`,
            margin: `0 ${w < 600 ? "20px" : "64px"}`
        }
    }, void 0, false, {
        fileName: "[project]/components/shared/ui.jsx",
        lineNumber: 80,
        columnNumber: 5
    }, this);
}
function PageHero({ tag, title, accent, sub, children }) {
    const w = (0, __TURBOPACK__imported__module__$5b$project$5d2f$components$2f$shared$2f$hooks$2e$jsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useWindowWidth"])();
    const p = w < 600 ? "100px 20px 60px" : w < 960 ? "120px 28px 64px" : "140px 64px 80px";
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("section", {
        style: {
            minHeight: "52vh",
            display: "flex",
            flexDirection: "column",
            justifyContent: "flex-end",
            padding: p,
            position: "relative",
            overflow: "hidden",
            background: __TURBOPACK__imported__module__$5b$project$5d2f$components$2f$shared$2f$vibeTheme$2e$jsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["C"].bg
        },
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                style: {
                    position: "absolute",
                    inset: 0,
                    backgroundImage: `linear-gradient(${__TURBOPACK__imported__module__$5b$project$5d2f$components$2f$shared$2f$vibeTheme$2e$jsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["C"].orange}06 1px,transparent 1px),linear-gradient(90deg,${__TURBOPACK__imported__module__$5b$project$5d2f$components$2f$shared$2f$vibeTheme$2e$jsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["C"].orange}06 1px,transparent 1px)`,
                    backgroundSize: "60px 60px"
                }
            }, void 0, false, {
                fileName: "[project]/components/shared/ui.jsx",
                lineNumber: 111,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(Orb, {
                top: "-10%",
                right: "-5%",
                size: 500
            }, void 0, false, {
                fileName: "[project]/components/shared/ui.jsx",
                lineNumber: 119,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(Orb, {
                bottom: "-20%",
                left: "30%",
                size: 400,
                color: __TURBOPACK__imported__module__$5b$project$5d2f$components$2f$shared$2f$vibeTheme$2e$jsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["C"].pink,
                opacity: 0.07,
                delay: "3s"
            }, void 0, false, {
                fileName: "[project]/components/shared/ui.jsx",
                lineNumber: 120,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                style: {
                    position: "relative",
                    zIndex: 2,
                    maxWidth: "1100px",
                    margin: "0 auto",
                    width: "100%"
                },
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        style: {
                            animation: "fadeUp .6s ease forwards",
                            opacity: 0,
                            marginBottom: "20px"
                        },
                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(Tag, {
                            children: tag
                        }, void 0, false, {
                            fileName: "[project]/components/shared/ui.jsx",
                            lineNumber: 133,
                            columnNumber: 11
                        }, this)
                    }, void 0, false, {
                        fileName: "[project]/components/shared/ui.jsx",
                        lineNumber: 130,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("h1", {
                        style: {
                            fontFamily: "'Bebas Neue',sans-serif",
                            fontSize: "clamp(44px,8vw,96px)",
                            lineHeight: 0.95,
                            color: __TURBOPACK__imported__module__$5b$project$5d2f$components$2f$shared$2f$vibeTheme$2e$jsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["C"].white,
                            animation: "fadeUp .6s .1s ease forwards",
                            opacity: 0,
                            marginBottom: "24px"
                        },
                        children: [
                            title,
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("br", {}, void 0, false, {
                                fileName: "[project]/components/shared/ui.jsx",
                                lineNumber: 147,
                                columnNumber: 11
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                style: {
                                    color: __TURBOPACK__imported__module__$5b$project$5d2f$components$2f$shared$2f$vibeTheme$2e$jsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["C"].orange
                                },
                                children: accent
                            }, void 0, false, {
                                fileName: "[project]/components/shared/ui.jsx",
                                lineNumber: 148,
                                columnNumber: 11
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/components/shared/ui.jsx",
                        lineNumber: 135,
                        columnNumber: 9
                    }, this),
                    sub && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                        style: {
                            fontFamily: "'DM Sans',sans-serif",
                            fontSize: "clamp(15px,2vw,19px)",
                            color: __TURBOPACK__imported__module__$5b$project$5d2f$components$2f$shared$2f$vibeTheme$2e$jsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["C"].dim,
                            maxWidth: "560px",
                            lineHeight: 1.75,
                            animation: "fadeUp .6s .2s ease forwards",
                            opacity: 0
                        },
                        children: sub
                    }, void 0, false, {
                        fileName: "[project]/components/shared/ui.jsx",
                        lineNumber: 151,
                        columnNumber: 11
                    }, this),
                    children
                ]
            }, void 0, true, {
                fileName: "[project]/components/shared/ui.jsx",
                lineNumber: 121,
                columnNumber: 7
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/components/shared/ui.jsx",
        lineNumber: 99,
        columnNumber: 5
    }, this);
}
function FAQ({ items, accentColor = __TURBOPACK__imported__module__$5b$project$5d2f$components$2f$shared$2f$vibeTheme$2e$jsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["C"].orange }) {
    const [open, setOpen] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])(null);
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        style: {
            display: "flex",
            flexDirection: "column",
            gap: "8px"
        },
        children: items.map((item, i)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(Reveal, {
                delay: i * 0.06,
                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    style: {
                        background: open === i ? `${accentColor}08` : "rgba(255,255,255,0.02)",
                        border: `1px solid ${open === i ? accentColor + "40" : "rgba(255,255,255,0.07)"}`,
                        borderRadius: "4px",
                        overflow: "hidden",
                        transition: "all .3s"
                    },
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                            onClick: ()=>setOpen(open === i ? null : i),
                            style: {
                                width: "100%",
                                display: "flex",
                                justifyContent: "space-between",
                                alignItems: "center",
                                padding: "20px 28px",
                                background: "none",
                                border: "none",
                                cursor: "pointer",
                                textAlign: "left",
                                gap: "16px"
                            },
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                    style: {
                                        fontFamily: "'DM Sans',sans-serif",
                                        fontSize: "15px",
                                        fontWeight: 600,
                                        color: __TURBOPACK__imported__module__$5b$project$5d2f$components$2f$shared$2f$vibeTheme$2e$jsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["C"].white
                                    },
                                    children: item.q
                                }, void 0, false, {
                                    fileName: "[project]/components/shared/ui.jsx",
                                    lineNumber: 201,
                                    columnNumber: 15
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                    style: {
                                        color: open === i ? accentColor : __TURBOPACK__imported__module__$5b$project$5d2f$components$2f$shared$2f$vibeTheme$2e$jsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["C"].dimmer,
                                        fontSize: "22px",
                                        transition: "transform .3s",
                                        transform: open === i ? "rotate(45deg)" : "none",
                                        flexShrink: 0,
                                        fontWeight: 300
                                    },
                                    children: "+"
                                }, void 0, false, {
                                    fileName: "[project]/components/shared/ui.jsx",
                                    lineNumber: 211,
                                    columnNumber: 15
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "[project]/components/shared/ui.jsx",
                            lineNumber: 186,
                            columnNumber: 13
                        }, this),
                        open === i && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            style: {
                                padding: "0 28px 22px",
                                animation: "fadeIn .25s ease"
                            },
                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                style: {
                                    fontFamily: "'DM Sans',sans-serif",
                                    fontSize: "14px",
                                    color: __TURBOPACK__imported__module__$5b$project$5d2f$components$2f$shared$2f$vibeTheme$2e$jsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["C"].dim,
                                    lineHeight: 1.8
                                },
                                children: item.a
                            }, void 0, false, {
                                fileName: "[project]/components/shared/ui.jsx",
                                lineNumber: 226,
                                columnNumber: 17
                            }, this)
                        }, void 0, false, {
                            fileName: "[project]/components/shared/ui.jsx",
                            lineNumber: 225,
                            columnNumber: 15
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "[project]/components/shared/ui.jsx",
                    lineNumber: 177,
                    columnNumber: 11
                }, this)
            }, i, false, {
                fileName: "[project]/components/shared/ui.jsx",
                lineNumber: 176,
                columnNumber: 9
            }, this))
    }, void 0, false, {
        fileName: "[project]/components/shared/ui.jsx",
        lineNumber: 174,
        columnNumber: 5
    }, this);
}
function PricingCard({ plan, price, period = "/mo", desc, features, cta, highlight = false, color = __TURBOPACK__imported__module__$5b$project$5d2f$components$2f$shared$2f$vibeTheme$2e$jsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["C"].orange, onCta, annual = false, annualPrice }) {
    const displayPrice = annual && annualPrice ? annualPrice : price;
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(Reveal, {
        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            style: {
                padding: "40px 32px",
                background: highlight ? `linear-gradient(160deg,${color}14,transparent)` : "rgba(255,255,255,0.02)",
                border: `1px solid ${highlight ? color + "50" : "rgba(255,255,255,0.08)"}`,
                borderRadius: "4px",
                height: "100%",
                display: "flex",
                flexDirection: "column",
                position: "relative",
                transition: "transform .3s"
            },
            onMouseEnter: (e)=>{
                e.currentTarget.style.transform = "translateY(-4px)";
            },
            onMouseLeave: (e)=>{
                e.currentTarget.style.transform = "";
            },
            children: [
                highlight && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    style: {
                        position: "absolute",
                        top: "-1px",
                        left: "50%",
                        transform: "translateX(-50%)",
                        background: color,
                        color: __TURBOPACK__imported__module__$5b$project$5d2f$components$2f$shared$2f$vibeTheme$2e$jsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["C"].bg,
                        fontFamily: "'Bebas Neue',sans-serif",
                        fontSize: "11px",
                        letterSpacing: "3px",
                        padding: "4px 16px",
                        borderRadius: "0 0 4px 4px"
                    },
                    children: "MOST POPULAR"
                }, void 0, false, {
                    fileName: "[project]/components/shared/ui.jsx",
                    lineNumber: 281,
                    columnNumber: 11
                }, this),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    style: {
                        fontFamily: "'Bebas Neue',sans-serif",
                        fontSize: "14px",
                        letterSpacing: "3px",
                        color,
                        marginBottom: "16px"
                    },
                    children: plan
                }, void 0, false, {
                    fileName: "[project]/components/shared/ui.jsx",
                    lineNumber: 299,
                    columnNumber: 9
                }, this),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    style: {
                        display: "flex",
                        alignItems: "baseline",
                        gap: "4px",
                        marginBottom: "6px"
                    },
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                            style: {
                                fontFamily: "'Bebas Neue',sans-serif",
                                fontSize: "clamp(40px,5vw,56px)",
                                color: __TURBOPACK__imported__module__$5b$project$5d2f$components$2f$shared$2f$vibeTheme$2e$jsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["C"].white,
                                lineHeight: 1
                            },
                            children: displayPrice
                        }, void 0, false, {
                            fileName: "[project]/components/shared/ui.jsx",
                            lineNumber: 311,
                            columnNumber: 11
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                            style: {
                                fontFamily: "'DM Sans',sans-serif",
                                fontSize: "14px",
                                color: __TURBOPACK__imported__module__$5b$project$5d2f$components$2f$shared$2f$vibeTheme$2e$jsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["C"].dim
                            },
                            children: displayPrice === "Free" || displayPrice === "Custom" ? "" : period
                        }, void 0, false, {
                            fileName: "[project]/components/shared/ui.jsx",
                            lineNumber: 321,
                            columnNumber: 11
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "[project]/components/shared/ui.jsx",
                    lineNumber: 310,
                    columnNumber: 9
                }, this),
                annual && annualPrice && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                    style: {
                        fontFamily: "'DM Sans',sans-serif",
                        fontSize: "11px",
                        color,
                        marginBottom: "8px"
                    },
                    children: "Save 20% -- billed annually"
                }, void 0, false, {
                    fileName: "[project]/components/shared/ui.jsx",
                    lineNumber: 326,
                    columnNumber: 11
                }, this),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                    style: {
                        fontFamily: "'DM Sans',sans-serif",
                        fontSize: "14px",
                        color: __TURBOPACK__imported__module__$5b$project$5d2f$components$2f$shared$2f$vibeTheme$2e$jsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["C"].dim,
                        lineHeight: 1.7,
                        marginBottom: "28px"
                    },
                    children: desc
                }, void 0, false, {
                    fileName: "[project]/components/shared/ui.jsx",
                    lineNumber: 330,
                    columnNumber: 9
                }, this),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    style: {
                        display: "flex",
                        flexDirection: "column",
                        gap: "10px",
                        flex: 1,
                        marginBottom: "32px"
                    },
                    children: features.map((f, i)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            style: {
                                display: "flex",
                                gap: "10px",
                                alignItems: "flex-start"
                            },
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                    style: {
                                        color,
                                        fontSize: "14px",
                                        marginTop: "1px",
                                        flexShrink: 0
                                    },
                                    children: "---"
                                }, void 0, false, {
                                    fileName: "[project]/components/shared/ui.jsx",
                                    lineNumber: 336,
                                    columnNumber: 15
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                    style: {
                                        fontFamily: "'DM Sans',sans-serif",
                                        fontSize: "14px",
                                        color: "rgba(255,255,255,.7)"
                                    },
                                    children: f
                                }, void 0, false, {
                                    fileName: "[project]/components/shared/ui.jsx",
                                    lineNumber: 337,
                                    columnNumber: 15
                                }, this)
                            ]
                        }, i, true, {
                            fileName: "[project]/components/shared/ui.jsx",
                            lineNumber: 335,
                            columnNumber: 13
                        }, this))
                }, void 0, false, {
                    fileName: "[project]/components/shared/ui.jsx",
                    lineNumber: 333,
                    columnNumber: 9
                }, this),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                    onClick: onCta,
                    style: {
                        fontFamily: "'Bebas Neue',sans-serif",
                        fontSize: "15px",
                        letterSpacing: "3px",
                        padding: "14px",
                        background: highlight ? color : "transparent",
                        color: highlight ? __TURBOPACK__imported__module__$5b$project$5d2f$components$2f$shared$2f$vibeTheme$2e$jsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["C"].bg : __TURBOPACK__imported__module__$5b$project$5d2f$components$2f$shared$2f$vibeTheme$2e$jsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["C"].white,
                        border: `1px solid ${highlight ? color : "rgba(255,255,255,0.2)"}`,
                        borderRadius: "2px",
                        cursor: "pointer",
                        transition: "all .2s",
                        width: "100%"
                    },
                    onMouseEnter: (e)=>{
                        if (!highlight) {
                            e.currentTarget.style.borderColor = color;
                            e.currentTarget.style.color = color;
                        } else {
                            e.currentTarget.style.boxShadow = `0 8px 28px ${color}45`;
                        }
                    },
                    onMouseLeave: (e)=>{
                        if (!highlight) {
                            e.currentTarget.style.borderColor = "rgba(255,255,255,0.2)";
                            e.currentTarget.style.color = __TURBOPACK__imported__module__$5b$project$5d2f$components$2f$shared$2f$vibeTheme$2e$jsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["C"].white;
                        } else {
                            e.currentTarget.style.boxShadow = "";
                        }
                    },
                    children: cta
                }, void 0, false, {
                    fileName: "[project]/components/shared/ui.jsx",
                    lineNumber: 341,
                    columnNumber: 9
                }, this)
            ]
        }, void 0, true, {
            fileName: "[project]/components/shared/ui.jsx",
            lineNumber: 261,
            columnNumber: 7
        }, this)
    }, void 0, false, {
        fileName: "[project]/components/shared/ui.jsx",
        lineNumber: 260,
        columnNumber: 5
    }, this);
}
function TestimonialCard({ quote, name, role, avatar, color = __TURBOPACK__imported__module__$5b$project$5d2f$components$2f$shared$2f$vibeTheme$2e$jsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["C"].orange }) {
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        style: {
            padding: "30px 26px",
            background: "rgba(255,255,255,0.02)",
            border: "1px solid rgba(255,255,255,0.07)",
            borderRadius: "4px",
            display: "flex",
            flexDirection: "column",
            gap: "18px",
            height: "100%",
            transition: "all .3s"
        },
        onMouseEnter: (e)=>{
            e.currentTarget.style.borderColor = color + "50";
            e.currentTarget.style.background = `${color}08`;
        },
        onMouseLeave: (e)=>{
            e.currentTarget.style.borderColor = "rgba(255,255,255,0.07)";
            e.currentTarget.style.background = "rgba(255,255,255,0.02)";
        },
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                style: {
                    fontFamily: "'Bebas Neue',sans-serif",
                    fontSize: "28px",
                    color,
                    lineHeight: 1,
                    opacity: 0.5
                },
                children: '"'
            }, void 0, false, {
                fileName: "[project]/components/shared/ui.jsx",
                lineNumber: 403,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                style: {
                    fontFamily: "'DM Sans',sans-serif",
                    fontSize: "14px",
                    color: "rgba(255,255,255,.75)",
                    lineHeight: 1.8,
                    flex: 1
                },
                children: quote
            }, void 0, false, {
                fileName: "[project]/components/shared/ui.jsx",
                lineNumber: 406,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                style: {
                    display: "flex",
                    alignItems: "center",
                    gap: "12px"
                },
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        style: {
                            width: "38px",
                            height: "38px",
                            borderRadius: "50%",
                            background: `${color}20`,
                            border: `1px solid ${color}40`,
                            display: "flex",
                            alignItems: "center",
                            justifyContent: "center",
                            fontSize: "17px",
                            flexShrink: 0
                        },
                        children: avatar
                    }, void 0, false, {
                        fileName: "[project]/components/shared/ui.jsx",
                        lineNumber: 410,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                style: {
                                    fontFamily: "'DM Sans',sans-serif",
                                    fontSize: "14px",
                                    fontWeight: 600,
                                    color: __TURBOPACK__imported__module__$5b$project$5d2f$components$2f$shared$2f$vibeTheme$2e$jsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["C"].white
                                },
                                children: name
                            }, void 0, false, {
                                fileName: "[project]/components/shared/ui.jsx",
                                lineNumber: 427,
                                columnNumber: 11
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                style: {
                                    fontFamily: "'DM Sans',sans-serif",
                                    fontSize: "11px",
                                    color: __TURBOPACK__imported__module__$5b$project$5d2f$components$2f$shared$2f$vibeTheme$2e$jsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["C"].dimmer,
                                    marginTop: "2px"
                                },
                                children: role
                            }, void 0, false, {
                                fileName: "[project]/components/shared/ui.jsx",
                                lineNumber: 428,
                                columnNumber: 11
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/components/shared/ui.jsx",
                        lineNumber: 426,
                        columnNumber: 9
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/components/shared/ui.jsx",
                lineNumber: 409,
                columnNumber: 7
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/components/shared/ui.jsx",
        lineNumber: 382,
        columnNumber: 5
    }, this);
}
}),
"[project]/components/pages/MarketplacePage.jsx [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>MarketplacePage
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react-jsx-dev-runtime.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$components$2f$shared$2f$vibeTheme$2e$jsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/components/shared/vibeTheme.jsx [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$components$2f$shared$2f$hooks$2e$jsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/components/shared/hooks.jsx [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$components$2f$shared$2f$ui$2e$jsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/components/shared/ui.jsx [app-ssr] (ecmascript)");
"use client";
;
;
;
;
;
const MARKETPLACE_BRANDS = [
    {
        id: 1,
        name: "NEON BREW CO.",
        category: "Food & Drink",
        budget: "R8K-R35K",
        type: "Sponsored Post",
        location: "Nationwide (South Africa)",
        badge: "HOT",
        desc: "Indie craft energy drink built for the late-night creator. Looking for authentic city-based creators to showcase our cans in real environments.",
        tags: [
            "Nightlife",
            "Creators",
            "Urban"
        ],
        color: __TURBOPACK__imported__module__$5b$project$5d2f$components$2f$shared$2f$vibeTheme$2e$jsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["C"].orange,
        slots: 12,
        filled: 8,
        logo: "JUICE"
    },
    {
        id: 2,
        name: "APEX STREETWEAR",
        category: "Fashion",
        budget: "R15K-R75K",
        type: "Event Collab",
        location: "Johannesburg, Cape Town, Durban",
        badge: "FEATURED",
        desc: "Premium streetwear brand launching new drops via pop-up events. Looking for city-embedded creators and venue partners.",
        tags: [
            "Fashion",
            "Events",
            "Pop-up"
        ],
        color: __TURBOPACK__imported__module__$5b$project$5d2f$components$2f$shared$2f$vibeTheme$2e$jsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["C"].pink,
        slots: 5,
        filled: 2,
        logo: "SNEAKER"
    },
    {
        id: 3,
        name: "PULSE FITNESS",
        category: "Health & Wellness",
        budget: "R5K-R25K",
        type: "Campus Campaign",
        location: "Top 30 SA Campuses",
        badge: "NEW",
        desc: "Need campus ambassadors and micro-influencers who can bring the energy to gyms, quads, and dorm halls.",
        tags: [
            "Campus",
            "Fitness",
            "Micro-Influencer"
        ],
        color: __TURBOPACK__imported__module__$5b$project$5d2f$components$2f$shared$2f$vibeTheme$2e$jsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["C"].blue,
        slots: 40,
        filled: 14,
        logo: "BOLT"
    },
    {
        id: 4,
        name: "MIRAGE NIGHTCLUB GROUP",
        category: "Entertainment",
        budget: "R25K-R120K",
        type: "Live Coverage",
        location: "Johannesburg, Cape Town, Durban",
        badge: "PREMIUM",
        desc: "3 of the hottest venues in South Africa need creators to capture the night in real time. Full creative freedom.",
        tags: [
            "Nightlife",
            "Live",
            "Premium"
        ],
        color: __TURBOPACK__imported__module__$5b$project$5d2f$components$2f$shared$2f$vibeTheme$2e$jsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["C"].purple,
        slots: 6,
        filled: 6,
        logo: "PARTY"
    },
    {
        id: 5,
        name: "URBAN EATS COLLECTIVE",
        category: "Food & Drink",
        budget: "R3K-R12K",
        type: "Food Review",
        location: "All Cities",
        badge: null,
        desc: "Independent restaurants looking for food creators to authentically review new menus and build local buzz.",
        tags: [
            "Food",
            "Local",
            "Review"
        ],
        color: __TURBOPACK__imported__module__$5b$project$5d2f$components$2f$shared$2f$vibeTheme$2e$jsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["C"].gold,
        slots: 30,
        filled: 11,
        logo: "NOODLE"
    },
    {
        id: 6,
        name: "CTRL AUDIO",
        category: "Tech",
        budget: "R12K-R45K",
        type: "Creator Kit",
        location: "Remote + Events",
        badge: "NEW",
        desc: "Next-gen wireless earbuds for creators on the move. We send free gear kits and pay for authentic in-the-wild content.",
        tags: [
            "Tech",
            "Gear",
            "Creator"
        ],
        color: __TURBOPACK__imported__module__$5b$project$5d2f$components$2f$shared$2f$vibeTheme$2e$jsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["C"].blue,
        slots: 20,
        filled: 7,
        logo: "AUDIO"
    },
    {
        id: 7,
        name: "NXXT LEVEL BARBERSHOP",
        category: "Beauty & Grooming",
        budget: "R4K-R16K",
        type: "Local Partnership",
        location: "Johannesburg, Pretoria, Durban",
        badge: null,
        desc: "Culture-forward barbershop chain looking for city creators to showcase the shop's vibe and craft.",
        tags: [
            "Local",
            "Culture",
            "Beauty"
        ],
        color: __TURBOPACK__imported__module__$5b$project$5d2f$components$2f$shared$2f$vibeTheme$2e$jsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["C"].orange,
        slots: 15,
        filled: 5,
        logo: "SCISSORS"
    },
    {
        id: 8,
        name: "SOLSTICE FESTIVAL",
        category: "Events",
        budget: "R40K-R180K",
        type: "Festival Coverage",
        location: "Cape Town, Western Cape",
        badge: "FEATURED",
        desc: "50,000 person music and culture festival needs a creator army. Full creative freedom. Full access passes.",
        tags: [
            "Festival",
            "Music",
            "Events"
        ],
        color: __TURBOPACK__imported__module__$5b$project$5d2f$components$2f$shared$2f$vibeTheme$2e$jsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["C"].pink,
        slots: 25,
        filled: 18,
        logo: "MUSIC"
    }
];
const MKT_CATS = [
    "All",
    "Food & Drink",
    "Fashion",
    "Health & Wellness",
    "Entertainment",
    "Tech",
    "Beauty & Grooming",
    "Events"
];
const BADGE_COLORS = {
    "HOT": __TURBOPACK__imported__module__$5b$project$5d2f$components$2f$shared$2f$vibeTheme$2e$jsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["C"].orange,
    "FEATURED": __TURBOPACK__imported__module__$5b$project$5d2f$components$2f$shared$2f$vibeTheme$2e$jsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["C"].pink,
    "NEW": __TURBOPACK__imported__module__$5b$project$5d2f$components$2f$shared$2f$vibeTheme$2e$jsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["C"].blue,
    "PREMIUM": __TURBOPACK__imported__module__$5b$project$5d2f$components$2f$shared$2f$vibeTheme$2e$jsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["C"].purple
};
const MKT_FAQS = [
    {
        q: "How do creators get paid?",
        a: "Payments go through VibeCircle's secure escrow. Once a brand approves your content, payment is released within 3---5 business days via bank transfer, PayPal, or Venmo."
    },
    {
        q: "Is there a follower minimum?",
        a: "No follower minimum. Brands care about city presence, authenticity, and engagement quality --- not just counts."
    },
    {
        q: "What if a brand doesn't respond?",
        a: "Brands must respond within 72 hours. If they don't, we re-open the slot and follow up on your behalf."
    },
    {
        q: "Can brands contact me directly?",
        a: "Yes. Growth or Enterprise plan brands can send you a direct collaboration proposal based on your creator profile."
    },
    {
        q: "How do I post a deal as a brand?",
        a: "Switch to the 'I'm a Brand' tab, fill out the deal form, and submit for review. Deals go live within 24 hours."
    }
];
function ProgressBar({ filled, slots, color }) {
    const pct = Math.round(filled / slots * 100);
    const full = filled >= slots;
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        style: {
            marginTop: "10px"
        },
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                style: {
                    display: "flex",
                    justifyContent: "space-between",
                    marginBottom: "4px"
                },
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                        style: {
                            fontFamily: "'DM Sans',sans-serif",
                            fontSize: "10px",
                            color: "rgba(255,255,255,0.28)"
                        },
                        children: [
                            filled,
                            "/",
                            slots,
                            " slots"
                        ]
                    }, void 0, true, {
                        fileName: "[project]/components/pages/MarketplacePage.jsx",
                        lineNumber: 23,
                        columnNumber: 122
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                        style: {
                            fontFamily: "'Bebas Neue',sans-serif",
                            fontSize: "10px",
                            letterSpacing: "2px",
                            color: full ? __TURBOPACK__imported__module__$5b$project$5d2f$components$2f$shared$2f$vibeTheme$2e$jsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["C"].pink : color
                        },
                        children: full ? "FULL" : `${slots - filled} LEFT`
                    }, void 0, false, {
                        fileName: "[project]/components/pages/MarketplacePage.jsx",
                        lineNumber: 23,
                        columnNumber: 248
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/components/pages/MarketplacePage.jsx",
                lineNumber: 23,
                columnNumber: 42
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                style: {
                    height: "3px",
                    background: "rgba(255,255,255,0.07)",
                    borderRadius: "2px",
                    overflow: "hidden"
                },
                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    style: {
                        height: "100%",
                        width: `${pct}%`,
                        background: full ? __TURBOPACK__imported__module__$5b$project$5d2f$components$2f$shared$2f$vibeTheme$2e$jsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["C"].pink : color,
                        borderRadius: "2px",
                        transition: "width .6s ease"
                    }
                }, void 0, false, {
                    fileName: "[project]/components/pages/MarketplacePage.jsx",
                    lineNumber: 23,
                    columnNumber: 511
                }, this)
            }, void 0, false, {
                fileName: "[project]/components/pages/MarketplacePage.jsx",
                lineNumber: 23,
                columnNumber: 410
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/components/pages/MarketplacePage.jsx",
        lineNumber: 23,
        columnNumber: 10
    }, this);
}
function BrandCard({ brand, onApply }) {
    const [h, setH] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])(false);
    const full = brand.filled >= brand.slots;
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        onMouseEnter: ()=>setH(true),
        onMouseLeave: ()=>setH(false),
        style: {
            background: h ? `${brand.color}08` : "rgba(255,255,255,0.02)",
            border: `1px solid ${h ? brand.color + "50" : "rgba(255,255,255,0.07)"}`,
            borderRadius: "4px",
            padding: "24px",
            transition: "all .3s",
            transform: h ? "translateY(-4px)" : "none",
            display: "flex",
            flexDirection: "column",
            height: "100%",
            position: "relative",
            overflow: "hidden"
        },
        children: [
            h && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                style: {
                    position: "absolute",
                    top: 0,
                    right: 0,
                    width: 90,
                    height: 90,
                    background: `radial-gradient(circle at top right,${brand.color}14,transparent 70%)`,
                    pointerEvents: "none"
                }
            }, void 0, false, {
                fileName: "[project]/components/pages/MarketplacePage.jsx",
                lineNumber: 28,
                columnNumber: 9
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                style: {
                    display: "flex",
                    alignItems: "flex-start",
                    justifyContent: "space-between",
                    marginBottom: "12px"
                },
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        style: {
                            display: "flex",
                            alignItems: "center",
                            gap: "10px"
                        },
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                style: {
                                    width: "38px",
                                    height: "38px",
                                    borderRadius: "4px",
                                    background: `${brand.color}18`,
                                    border: `1px solid ${brand.color}30`,
                                    display: "flex",
                                    alignItems: "center",
                                    justifyContent: "center",
                                    fontSize: "17px"
                                },
                                children: brand.logo
                            }, void 0, false, {
                                fileName: "[project]/components/pages/MarketplacePage.jsx",
                                lineNumber: 29,
                                columnNumber: 171
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        style: {
                                            fontFamily: "'Bebas Neue',sans-serif",
                                            fontSize: "14px",
                                            color: __TURBOPACK__imported__module__$5b$project$5d2f$components$2f$shared$2f$vibeTheme$2e$jsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["C"].white,
                                            letterSpacing: ".5px"
                                        },
                                        children: brand.name
                                    }, void 0, false, {
                                        fileName: "[project]/components/pages/MarketplacePage.jsx",
                                        lineNumber: 29,
                                        columnNumber: 396
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        style: {
                                            fontFamily: "'DM Sans',sans-serif",
                                            fontSize: "10px",
                                            color: "rgba(255,255,255,0.28)",
                                            letterSpacing: "1px",
                                            textTransform: "uppercase",
                                            marginTop: "1px"
                                        },
                                        children: brand.category
                                    }, void 0, false, {
                                        fileName: "[project]/components/pages/MarketplacePage.jsx",
                                        lineNumber: 29,
                                        columnNumber: 517
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/components/pages/MarketplacePage.jsx",
                                lineNumber: 29,
                                columnNumber: 391
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/components/pages/MarketplacePage.jsx",
                        lineNumber: 29,
                        columnNumber: 110
                    }, this),
                    brand.badge && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                        style: {
                            fontFamily: "'Bebas Neue',sans-serif",
                            fontSize: "9px",
                            letterSpacing: "2px",
                            padding: "3px 8px",
                            borderRadius: "2px",
                            background: `${BADGE_COLORS[brand.badge]}22`,
                            border: `1px solid ${BADGE_COLORS[brand.badge]}60`,
                            color: BADGE_COLORS[brand.badge],
                            flexShrink: 0
                        },
                        children: brand.badge
                    }, void 0, false, {
                        fileName: "[project]/components/pages/MarketplacePage.jsx",
                        lineNumber: 29,
                        columnNumber: 723
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/components/pages/MarketplacePage.jsx",
                lineNumber: 29,
                columnNumber: 5
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                style: {
                    fontFamily: "'DM Sans',sans-serif",
                    fontSize: "13px",
                    color: __TURBOPACK__imported__module__$5b$project$5d2f$components$2f$shared$2f$vibeTheme$2e$jsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["C"].dim,
                    lineHeight: 1.7,
                    flex: 1,
                    marginBottom: "12px"
                },
                children: brand.desc
            }, void 0, false, {
                fileName: "[project]/components/pages/MarketplacePage.jsx",
                lineNumber: 30,
                columnNumber: 5
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                style: {
                    display: "flex",
                    gap: "5px",
                    flexWrap: "wrap",
                    marginBottom: "12px"
                },
                children: brand.tags.map((t)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                        style: {
                            fontFamily: "'DM Sans',sans-serif",
                            fontSize: "10px",
                            color: "rgba(255,255,255,0.32)",
                            padding: "2px 8px",
                            background: "rgba(255,255,255,0.05)",
                            borderRadius: "2px"
                        },
                        children: [
                            "#",
                            t
                        ]
                    }, t, true, {
                        fileName: "[project]/components/pages/MarketplacePage.jsx",
                        lineNumber: 31,
                        columnNumber: 100
                    }, this))
            }, void 0, false, {
                fileName: "[project]/components/pages/MarketplacePage.jsx",
                lineNumber: 31,
                columnNumber: 5
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                style: {
                    display: "flex",
                    justifyContent: "space-between",
                    alignItems: "center",
                    gap: "8px",
                    flexWrap: "wrap"
                },
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        style: {
                            display: "flex",
                            gap: "12px"
                        },
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        style: {
                                            fontFamily: "'Bebas Neue',sans-serif",
                                            fontSize: "13px",
                                            color: brand.color
                                        },
                                        children: brand.budget
                                    }, void 0, false, {
                                        fileName: "[project]/components/pages/MarketplacePage.jsx",
                                        lineNumber: 32,
                                        columnNumber: 158
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        style: {
                                            fontFamily: "'DM Sans',sans-serif",
                                            fontSize: "9px",
                                            color: "rgba(255,255,255,0.22)",
                                            textTransform: "uppercase",
                                            letterSpacing: "1px"
                                        },
                                        children: "Budget"
                                    }, void 0, false, {
                                        fileName: "[project]/components/pages/MarketplacePage.jsx",
                                        lineNumber: 32,
                                        columnNumber: 264
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/components/pages/MarketplacePage.jsx",
                                lineNumber: 32,
                                columnNumber: 153
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        style: {
                                            fontFamily: "'Bebas Neue',sans-serif",
                                            fontSize: "13px",
                                            color: __TURBOPACK__imported__module__$5b$project$5d2f$components$2f$shared$2f$vibeTheme$2e$jsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["C"].white
                                        },
                                        children: brand.type
                                    }, void 0, false, {
                                        fileName: "[project]/components/pages/MarketplacePage.jsx",
                                        lineNumber: 32,
                                        columnNumber: 428
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        style: {
                                            fontFamily: "'DM Sans',sans-serif",
                                            fontSize: "9px",
                                            color: "rgba(255,255,255,0.22)",
                                            textTransform: "uppercase",
                                            letterSpacing: "1px"
                                        },
                                        children: "Type"
                                    }, void 0, false, {
                                        fileName: "[project]/components/pages/MarketplacePage.jsx",
                                        lineNumber: 32,
                                        columnNumber: 528
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/components/pages/MarketplacePage.jsx",
                                lineNumber: 32,
                                columnNumber: 423
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/components/pages/MarketplacePage.jsx",
                        lineNumber: 32,
                        columnNumber: 112
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                        onClick: ()=>!full && onApply(brand),
                        style: {
                            fontFamily: "'Bebas Neue',sans-serif",
                            fontSize: "11px",
                            letterSpacing: "2px",
                            padding: "7px 14px",
                            background: full ? "transparent" : brand.color,
                            color: full ? "rgba(255,255,255,0.2)" : __TURBOPACK__imported__module__$5b$project$5d2f$components$2f$shared$2f$vibeTheme$2e$jsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["C"].bg,
                            border: full ? "1px solid rgba(255,255,255,0.08)" : "none",
                            borderRadius: "2px",
                            cursor: full ? "not-allowed" : "pointer",
                            transition: "all .2s",
                            flexShrink: 0
                        },
                        children: full ? "Full" : "Apply"
                    }, void 0, false, {
                        fileName: "[project]/components/pages/MarketplacePage.jsx",
                        lineNumber: 32,
                        columnNumber: 691
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/components/pages/MarketplacePage.jsx",
                lineNumber: 32,
                columnNumber: 5
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(ProgressBar, {
                filled: brand.filled,
                slots: brand.slots,
                color: brand.color
            }, void 0, false, {
                fileName: "[project]/components/pages/MarketplacePage.jsx",
                lineNumber: 33,
                columnNumber: 5
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                style: {
                    display: "flex",
                    alignItems: "center",
                    gap: "5px",
                    marginTop: "9px"
                },
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                        style: {
                            fontSize: "10px"
                        },
                        children: "----"
                    }, void 0, false, {
                        fileName: "[project]/components/pages/MarketplacePage.jsx",
                        lineNumber: 34,
                        columnNumber: 81
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                        style: {
                            fontFamily: "'DM Sans',sans-serif",
                            fontSize: "10px",
                            color: "rgba(255,255,255,0.24)"
                        },
                        children: brand.location
                    }, void 0, false, {
                        fileName: "[project]/components/pages/MarketplacePage.jsx",
                        lineNumber: 34,
                        columnNumber: 124
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/components/pages/MarketplacePage.jsx",
                lineNumber: 34,
                columnNumber: 5
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/components/pages/MarketplacePage.jsx",
        lineNumber: 27,
        columnNumber: 10
    }, this);
}
function ApplyModal({ brand, onClose, addToast }) {
    const [step, setStep] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])(1);
    const [loading, setLoading] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])(false);
    const [form, setForm] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])({
        name: "",
        handle: "",
        city: "",
        audience: "",
        why: ""
    });
    if (!brand) return null;
    const submit = async ()=>{
        if (!form.name || !form.handle) return;
        setLoading(true);
        try {
            await fetch("https://formsubmit.co/ajax/info@vibecircle.com", {
                method: "POST",
                headers: {
                    "Content-Type": "application/json",
                    "Accept": "application/json"
                },
                body: JSON.stringify({
                    _subject: `Brand Deal Application --- ${brand.name}`,
                    _template: "table",
                    ...form,
                    brand: brand.name,
                    deal: brand.type,
                    budget: brand.budget
                })
            });
        } catch (e) {}
        setLoading(false);
        setStep(2);
        addToast({
            type: "success",
            title: "Application sent!",
            message: `${brand.name} will respond within 48 hours.`
        });
    };
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        style: {
            position: "fixed",
            inset: 0,
            zIndex: 500,
            background: "rgba(0,0,0,0.87)",
            backdropFilter: "blur(14px)",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            padding: "24px",
            animation: "fadeIn .2s ease"
        },
        onClick: (e)=>{
            if (e.target === e.currentTarget) onClose();
        },
        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            style: {
                background: "#0C0C18",
                border: `1px solid ${brand.color}40`,
                borderRadius: "4px",
                padding: "40px",
                maxWidth: "480px",
                width: "100%",
                position: "relative",
                animation: "fadeUp .3s ease",
                maxHeight: "90vh",
                overflowY: "auto"
            },
            children: [
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                    onClick: onClose,
                    style: {
                        position: "absolute",
                        top: "16px",
                        right: "18px",
                        background: "none",
                        border: "none",
                        color: __TURBOPACK__imported__module__$5b$project$5d2f$components$2f$shared$2f$vibeTheme$2e$jsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["C"].dim,
                        fontSize: "20px",
                        cursor: "pointer",
                        lineHeight: 1
                    },
                    children: "--"
                }, void 0, false, {
                    fileName: "[project]/components/pages/MarketplacePage.jsx",
                    lineNumber: 50,
                    columnNumber: 7
                }, this),
                step === 1 ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Fragment"], {
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            style: {
                                display: "flex",
                                alignItems: "center",
                                gap: "12px",
                                marginBottom: "22px"
                            },
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    style: {
                                        width: "42px",
                                        height: "42px",
                                        borderRadius: "4px",
                                        background: `${brand.color}18`,
                                        display: "flex",
                                        alignItems: "center",
                                        justifyContent: "center",
                                        fontSize: "19px"
                                    },
                                    children: brand.logo
                                }, void 0, false, {
                                    fileName: "[project]/components/pages/MarketplacePage.jsx",
                                    lineNumber: 51,
                                    columnNumber: 101
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            style: {
                                                fontFamily: "'Bebas Neue',sans-serif",
                                                fontSize: "17px",
                                                color: __TURBOPACK__imported__module__$5b$project$5d2f$components$2f$shared$2f$vibeTheme$2e$jsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["C"].white
                                            },
                                            children: brand.name
                                        }, void 0, false, {
                                            fileName: "[project]/components/pages/MarketplacePage.jsx",
                                            lineNumber: 51,
                                            columnNumber: 290
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            style: {
                                                fontFamily: "'DM Sans',sans-serif",
                                                fontSize: "11px",
                                                color: brand.color,
                                                letterSpacing: "1px"
                                            },
                                            children: [
                                                brand.type,
                                                " -- ",
                                                brand.budget
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/components/pages/MarketplacePage.jsx",
                                            lineNumber: 51,
                                            columnNumber: 390
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/components/pages/MarketplacePage.jsx",
                                    lineNumber: 51,
                                    columnNumber: 285
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "[project]/components/pages/MarketplacePage.jsx",
                            lineNumber: 51,
                            columnNumber: 20
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("h3", {
                            style: {
                                fontFamily: "'Bebas Neue',sans-serif",
                                fontSize: "24px",
                                color: __TURBOPACK__imported__module__$5b$project$5d2f$components$2f$shared$2f$vibeTheme$2e$jsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["C"].white,
                                marginBottom: "5px"
                            },
                            children: "Apply for this deal"
                        }, void 0, false, {
                            fileName: "[project]/components/pages/MarketplacePage.jsx",
                            lineNumber: 52,
                            columnNumber: 7
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                            style: {
                                fontFamily: "'DM Sans',sans-serif",
                                fontSize: "13px",
                                color: __TURBOPACK__imported__module__$5b$project$5d2f$components$2f$shared$2f$vibeTheme$2e$jsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["C"].dim,
                                lineHeight: 1.7,
                                marginBottom: "20px"
                            },
                            children: "Brands typically respond within 48 hours."
                        }, void 0, false, {
                            fileName: "[project]/components/pages/MarketplacePage.jsx",
                            lineNumber: 52,
                            columnNumber: 131
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            style: {
                                display: "flex",
                                flexDirection: "column",
                                gap: "10px"
                            },
                            children: [
                                [
                                    [
                                        "name",
                                        "Your Name"
                                    ],
                                    [
                                        "handle",
                                        "VibeCircle Handle (@...)"
                                    ],
                                    [
                                        "city",
                                        "Your City"
                                    ],
                                    [
                                        "audience",
                                        "Audience Size (e.g. 5K)"
                                    ]
                                ].map(([k, ph])=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
                                        placeholder: ph,
                                        value: form[k],
                                        onChange: (e)=>setForm((f)=>({
                                                    ...f,
                                                    [k]: e.target.value
                                                })),
                                        style: {
                                            background: "rgba(255,255,255,0.04)",
                                            border: "1px solid rgba(255,255,255,0.1)",
                                            borderRadius: "2px",
                                            padding: "12px 14px",
                                            fontFamily: "'DM Sans',sans-serif",
                                            fontSize: "14px",
                                            color: __TURBOPACK__imported__module__$5b$project$5d2f$components$2f$shared$2f$vibeTheme$2e$jsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["C"].white,
                                            outline: "none",
                                            transition: "border-color .2s"
                                        },
                                        onFocus: (e)=>e.target.style.borderColor = brand.color,
                                        onBlur: (e)=>e.target.style.borderColor = "rgba(255,255,255,0.1)"
                                    }, k, false, {
                                        fileName: "[project]/components/pages/MarketplacePage.jsx",
                                        lineNumber: 53,
                                        columnNumber: 207
                                    }, this)),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("textarea", {
                                    placeholder: "Why are you right for this brand?",
                                    rows: 3,
                                    value: form.why,
                                    onChange: (e)=>setForm((f)=>({
                                                ...f,
                                                why: e.target.value
                                            })),
                                    style: {
                                        background: "rgba(255,255,255,0.04)",
                                        border: "1px solid rgba(255,255,255,0.1)",
                                        borderRadius: "2px",
                                        padding: "12px 14px",
                                        fontFamily: "'DM Sans',sans-serif",
                                        fontSize: "14px",
                                        color: __TURBOPACK__imported__module__$5b$project$5d2f$components$2f$shared$2f$vibeTheme$2e$jsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["C"].white,
                                        outline: "none",
                                        resize: "vertical",
                                        transition: "border-color .2s"
                                    },
                                    onFocus: (e)=>e.target.style.borderColor = brand.color,
                                    onBlur: (e)=>e.target.style.borderColor = "rgba(255,255,255,0.1)"
                                }, void 0, false, {
                                    fileName: "[project]/components/pages/MarketplacePage.jsx",
                                    lineNumber: 54,
                                    columnNumber: 7
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                    onClick: submit,
                                    disabled: loading || !form.name || !form.handle,
                                    style: {
                                        fontFamily: "'Bebas Neue',sans-serif",
                                        fontSize: "14px",
                                        letterSpacing: "3px",
                                        padding: "14px",
                                        background: brand.color,
                                        color: __TURBOPACK__imported__module__$5b$project$5d2f$components$2f$shared$2f$vibeTheme$2e$jsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["C"].bg,
                                        border: "none",
                                        borderRadius: "2px",
                                        cursor: "pointer",
                                        display: "flex",
                                        alignItems: "center",
                                        justifyContent: "center",
                                        gap: "8px"
                                    },
                                    children: [
                                        loading && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                            style: {
                                                width: "14px",
                                                height: "14px",
                                                border: `2px solid ${__TURBOPACK__imported__module__$5b$project$5d2f$components$2f$shared$2f$vibeTheme$2e$jsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["C"].bg}40`,
                                                borderTopColor: __TURBOPACK__imported__module__$5b$project$5d2f$components$2f$shared$2f$vibeTheme$2e$jsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["C"].bg,
                                                borderRadius: "50%",
                                                animation: "spin .6s linear infinite",
                                                display: "inline-block"
                                            }
                                        }, void 0, false, {
                                            fileName: "[project]/components/pages/MarketplacePage.jsx",
                                            lineNumber: 55,
                                            columnNumber: 338
                                        }, this),
                                        loading ? "Submitting..." : "Submit Application"
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/components/pages/MarketplacePage.jsx",
                                    lineNumber: 55,
                                    columnNumber: 7
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "[project]/components/pages/MarketplacePage.jsx",
                            lineNumber: 53,
                            columnNumber: 7
                        }, this)
                    ]
                }, void 0, true) : /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    style: {
                        textAlign: "center",
                        padding: "20px 0"
                    },
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            style: {
                                fontSize: "48px",
                                marginBottom: "16px",
                                animation: "checkPop .5s ease"
                            },
                            children: "----"
                        }, void 0, false, {
                            fileName: "[project]/components/pages/MarketplacePage.jsx",
                            lineNumber: 56,
                            columnNumber: 60
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            style: {
                                fontFamily: "'Bebas Neue',sans-serif",
                                fontSize: "32px",
                                color: brand.color,
                                marginBottom: "10px"
                            },
                            children: "Application Sent!"
                        }, void 0, false, {
                            fileName: "[project]/components/pages/MarketplacePage.jsx",
                            lineNumber: 56,
                            columnNumber: 151
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                            style: {
                                fontFamily: "'DM Sans',sans-serif",
                                fontSize: "14px",
                                color: __TURBOPACK__imported__module__$5b$project$5d2f$components$2f$shared$2f$vibeTheme$2e$jsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["C"].dim,
                                lineHeight: 1.7,
                                marginBottom: "24px"
                            },
                            children: [
                                brand.name,
                                " will review your profile and respond within 48 hours."
                            ]
                        }, void 0, true, {
                            fileName: "[project]/components/pages/MarketplacePage.jsx",
                            lineNumber: 56,
                            columnNumber: 280
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                            onClick: onClose,
                            style: {
                                fontFamily: "'Bebas Neue',sans-serif",
                                fontSize: "13px",
                                letterSpacing: "3px",
                                padding: "12px 28px",
                                background: brand.color,
                                color: __TURBOPACK__imported__module__$5b$project$5d2f$components$2f$shared$2f$vibeTheme$2e$jsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["C"].bg,
                                border: "none",
                                borderRadius: "2px",
                                cursor: "pointer"
                            },
                            children: "Back to Marketplace"
                        }, void 0, false, {
                            fileName: "[project]/components/pages/MarketplacePage.jsx",
                            lineNumber: 56,
                            columnNumber: 460
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "[project]/components/pages/MarketplacePage.jsx",
                    lineNumber: 56,
                    columnNumber: 9
                }, this)
            ]
        }, void 0, true, {
            fileName: "[project]/components/pages/MarketplacePage.jsx",
            lineNumber: 49,
            columnNumber: 5
        }, this)
    }, void 0, false, {
        fileName: "[project]/components/pages/MarketplacePage.jsx",
        lineNumber: 48,
        columnNumber: 10
    }, this);
}
function MarketplacePage({ openWaitlist, addToast }) {
    const [catFilter, setCatFilter] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])("All");
    const [search, setSearch] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])("");
    const [sortBy, setSortBy] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])("Featured");
    const [activeTab, setActiveTab] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])("Creator");
    const [applyBrand, setApplyBrand] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])(null);
    const [postForm, setPostForm] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])({
        brand: "",
        budget: "",
        location: "",
        desc: ""
    });
    const [postSent, setPostSent] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])(false);
    const [postLoading, setPostLoading] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])(false);
    const w = (0, __TURBOPACK__imported__module__$5b$project$5d2f$components$2f$shared$2f$hooks$2e$jsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useWindowWidth"])();
    const filtered = MARKETPLACE_BRANDS.filter((b)=>{
        const mc = catFilter === "All" || b.category === catFilter;
        const ms = !search || b.name.toLowerCase().includes(search.toLowerCase()) || b.tags.some((t)=>t.toLowerCase().includes(search.toLowerCase()));
        return mc && ms;
    }).sort((a, b)=>sortBy === "Featured" ? (b.badge ? 1 : 0) - (a.badge ? 1 : 0) : a.slots - a.filled - (b.slots - b.filled));
    const submitPost = async ()=>{
        if (!postForm.brand || !postForm.budget) return;
        setPostLoading(true);
        try {
            await fetch("https://formsubmit.co/ajax/partners@vibecircle.com", {
                method: "POST",
                headers: {
                    "Content-Type": "application/json",
                    "Accept": "application/json"
                },
                body: JSON.stringify({
                    _subject: `New Brand Deal Submission --- ${postForm.brand}`,
                    _template: "table",
                    ...postForm
                })
            });
        } catch (e) {}
        setPostLoading(false);
        setPostSent(true);
        addToast({
            type: "success",
            title: "Deal Submitted!",
            message: "Your campaign goes live within 24 hours."
        });
    };
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        style: {
            background: __TURBOPACK__imported__module__$5b$project$5d2f$components$2f$shared$2f$vibeTheme$2e$jsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["C"].bg,
            color: __TURBOPACK__imported__module__$5b$project$5d2f$components$2f$shared$2f$vibeTheme$2e$jsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["C"].white
        },
        children: [
            applyBrand && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(ApplyModal, {
                brand: applyBrand,
                onClose: ()=>setApplyBrand(null),
                addToast: addToast
            }, void 0, false, {
                fileName: "[project]/components/pages/MarketplacePage.jsx",
                lineNumber: 81,
                columnNumber: 20
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("section", {
                style: {
                    minHeight: "50vh",
                    display: "flex",
                    flexDirection: "column",
                    justifyContent: "flex-end",
                    padding: w < 600 ? "100px 20px 60px" : "138px 64px 68px",
                    position: "relative",
                    overflow: "hidden",
                    background: __TURBOPACK__imported__module__$5b$project$5d2f$components$2f$shared$2f$vibeTheme$2e$jsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["C"].bg
                },
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        style: {
                            position: "absolute",
                            inset: 0,
                            backgroundImage: `linear-gradient(${__TURBOPACK__imported__module__$5b$project$5d2f$components$2f$shared$2f$vibeTheme$2e$jsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["C"].orange}06 1px,transparent 1px),linear-gradient(90deg,${__TURBOPACK__imported__module__$5b$project$5d2f$components$2f$shared$2f$vibeTheme$2e$jsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["C"].orange}06 1px,transparent 1px)`,
                            backgroundSize: "60px 60px"
                        }
                    }, void 0, false, {
                        fileName: "[project]/components/pages/MarketplacePage.jsx",
                        lineNumber: 83,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$components$2f$shared$2f$ui$2e$jsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Orb"], {
                        top: "-5%",
                        right: "5%",
                        size: 550,
                        opacity: 0.13
                    }, void 0, false, {
                        fileName: "[project]/components/pages/MarketplacePage.jsx",
                        lineNumber: 83,
                        columnNumber: 206
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$components$2f$shared$2f$ui$2e$jsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Orb"], {
                        bottom: "-15%",
                        left: "25%",
                        size: 400,
                        color: __TURBOPACK__imported__module__$5b$project$5d2f$components$2f$shared$2f$vibeTheme$2e$jsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["C"].pink,
                        opacity: 0.08,
                        delay: "2s"
                    }, void 0, false, {
                        fileName: "[project]/components/pages/MarketplacePage.jsx",
                        lineNumber: 83,
                        columnNumber: 259
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        style: {
                            position: "relative",
                            zIndex: 2,
                            maxWidth: "1100px",
                            margin: "0 auto",
                            width: "100%"
                        },
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                style: {
                                    animation: "fadeUp .5s ease forwards",
                                    opacity: 0,
                                    marginBottom: "16px"
                                },
                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$components$2f$shared$2f$ui$2e$jsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Tag"], {
                                    children: "Brand Marketplace"
                                }, void 0, false, {
                                    fileName: "[project]/components/pages/MarketplacePage.jsx",
                                    lineNumber: 85,
                                    columnNumber: 93
                                }, this)
                            }, void 0, false, {
                                fileName: "[project]/components/pages/MarketplacePage.jsx",
                                lineNumber: 85,
                                columnNumber: 11
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("h1", {
                                style: {
                                    fontFamily: "'Bebas Neue',sans-serif",
                                    fontSize: "clamp(44px,8vw,92px)",
                                    lineHeight: .92,
                                    color: __TURBOPACK__imported__module__$5b$project$5d2f$components$2f$shared$2f$vibeTheme$2e$jsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["C"].white,
                                    animation: "fadeUp .55s .08s ease forwards",
                                    opacity: 0,
                                    marginBottom: "18px"
                                },
                                children: [
                                    "Where brands meet",
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("br", {}, void 0, false, {
                                        fileName: "[project]/components/pages/MarketplacePage.jsx",
                                        lineNumber: 86,
                                        columnNumber: 213
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                        style: {
                                            color: __TURBOPACK__imported__module__$5b$project$5d2f$components$2f$shared$2f$vibeTheme$2e$jsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["C"].orange
                                        },
                                        children: "creators who live it."
                                    }, void 0, false, {
                                        fileName: "[project]/components/pages/MarketplacePage.jsx",
                                        lineNumber: 86,
                                        columnNumber: 218
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/components/pages/MarketplacePage.jsx",
                                lineNumber: 86,
                                columnNumber: 11
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                style: {
                                    fontFamily: "'DM Sans',sans-serif",
                                    fontSize: "clamp(14px,1.8vw,18px)",
                                    color: __TURBOPACK__imported__module__$5b$project$5d2f$components$2f$shared$2f$vibeTheme$2e$jsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["C"].dim,
                                    maxWidth: "520px",
                                    lineHeight: 1.75,
                                    animation: "fadeUp .55s .16s ease forwards",
                                    opacity: 0
                                },
                                children: "Browse live brand deals, apply in seconds, and turn your city presence into paid partnerships."
                            }, void 0, false, {
                                fileName: "[project]/components/pages/MarketplacePage.jsx",
                                lineNumber: 87,
                                columnNumber: 11
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                style: {
                                    display: "flex",
                                    gap: "24px",
                                    marginTop: "32px",
                                    flexWrap: "wrap",
                                    animation: "fadeUp .55s .24s ease forwards",
                                    opacity: 0
                                },
                                children: [
                                    [
                                        "140+",
                                        "Active Deals"
                                    ],
                                    [
                                        "3,200+",
                                        "Creators Matched"
                                    ],
                                    [
                                        "R38M+",
                                        "Paid Out"
                                    ],
                                    [
                                        "48hrs",
                                        "Avg Response"
                                    ]
                                ].map(([v, l])=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                style: {
                                                    fontFamily: "'Bebas Neue',sans-serif",
                                                    fontSize: "clamp(18px,2.5vw,26px)",
                                                    color: __TURBOPACK__imported__module__$5b$project$5d2f$components$2f$shared$2f$vibeTheme$2e$jsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["C"].orange,
                                                    lineHeight: 1
                                                },
                                                children: v
                                            }, void 0, false, {
                                                fileName: "[project]/components/pages/MarketplacePage.jsx",
                                                lineNumber: 89,
                                                columnNumber: 142
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                style: {
                                                    fontFamily: "'DM Sans',sans-serif",
                                                    fontSize: "10px",
                                                    letterSpacing: "1.5px",
                                                    color: __TURBOPACK__imported__module__$5b$project$5d2f$components$2f$shared$2f$vibeTheme$2e$jsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["C"].dimmer,
                                                    textTransform: "uppercase",
                                                    marginTop: "3px"
                                                },
                                                children: l
                                            }, void 0, false, {
                                                fileName: "[project]/components/pages/MarketplacePage.jsx",
                                                lineNumber: 89,
                                                columnNumber: 265
                                            }, this)
                                        ]
                                    }, l, true, {
                                        fileName: "[project]/components/pages/MarketplacePage.jsx",
                                        lineNumber: 89,
                                        columnNumber: 129
                                    }, this))
                            }, void 0, false, {
                                fileName: "[project]/components/pages/MarketplacePage.jsx",
                                lineNumber: 88,
                                columnNumber: 11
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/components/pages/MarketplacePage.jsx",
                        lineNumber: 84,
                        columnNumber: 9
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/components/pages/MarketplacePage.jsx",
                lineNumber: 82,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                style: {
                    background: __TURBOPACK__imported__module__$5b$project$5d2f$components$2f$shared$2f$vibeTheme$2e$jsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["C"].bg2,
                    borderTop: `1px solid ${__TURBOPACK__imported__module__$5b$project$5d2f$components$2f$shared$2f$vibeTheme$2e$jsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["C"].border}`,
                    borderBottom: `1px solid ${__TURBOPACK__imported__module__$5b$project$5d2f$components$2f$shared$2f$vibeTheme$2e$jsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["C"].border}`
                },
                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    style: {
                        maxWidth: "1100px",
                        margin: "0 auto",
                        padding: `0 ${w < 600 ? "20px" : "64px"}`,
                        display: "flex"
                    },
                    children: [
                        "Creator",
                        "Brand"
                    ].map((tab)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                            onClick: ()=>setActiveTab(tab),
                            style: {
                                fontFamily: "'Bebas Neue',sans-serif",
                                fontSize: "13px",
                                letterSpacing: "3px",
                                padding: "17px 26px",
                                background: "none",
                                color: activeTab === tab ? __TURBOPACK__imported__module__$5b$project$5d2f$components$2f$shared$2f$vibeTheme$2e$jsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["C"].orange : __TURBOPACK__imported__module__$5b$project$5d2f$components$2f$shared$2f$vibeTheme$2e$jsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["C"].dimmer,
                                border: "none",
                                borderBottom: `2px solid ${activeTab === tab ? __TURBOPACK__imported__module__$5b$project$5d2f$components$2f$shared$2f$vibeTheme$2e$jsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["C"].orange : "transparent"}`,
                                cursor: "pointer",
                                transition: "all .2s"
                            },
                            children: tab === "Creator" ? "I'm a Creator" : "I'm a Brand"
                        }, tab, false, {
                            fileName: "[project]/components/pages/MarketplacePage.jsx",
                            lineNumber: 93,
                            columnNumber: 239
                        }, this))
                }, void 0, false, {
                    fileName: "[project]/components/pages/MarketplacePage.jsx",
                    lineNumber: 93,
                    columnNumber: 110
                }, this)
            }, void 0, false, {
                fileName: "[project]/components/pages/MarketplacePage.jsx",
                lineNumber: 93,
                columnNumber: 7
            }, this),
            activeTab === "Creator" ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Fragment"], {
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("section", {
                        style: {
                            padding: `36px ${w < 600 ? "20px" : "64px"} 0`,
                            background: __TURBOPACK__imported__module__$5b$project$5d2f$components$2f$shared$2f$vibeTheme$2e$jsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["C"].bg2
                        },
                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            style: {
                                maxWidth: "1100px",
                                margin: "0 auto"
                            },
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    style: {
                                        position: "relative",
                                        marginBottom: "20px"
                                    },
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                            style: {
                                                position: "absolute",
                                                left: "14px",
                                                top: "50%",
                                                transform: "translateY(-50%)",
                                                fontSize: "14px",
                                                opacity: .35
                                            },
                                            children: "----"
                                        }, void 0, false, {
                                            fileName: "[project]/components/pages/MarketplacePage.jsx",
                                            lineNumber: 97,
                                            columnNumber: 68
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
                                            placeholder: "Search brand name or vibe tag...",
                                            value: search,
                                            onChange: (e)=>setSearch(e.target.value),
                                            style: {
                                                width: "100%",
                                                background: "rgba(255,255,255,0.04)",
                                                border: "1px solid rgba(255,255,255,0.1)",
                                                borderRadius: "2px",
                                                padding: "13px 16px 13px 42px",
                                                fontFamily: "'DM Sans',sans-serif",
                                                fontSize: "14px",
                                                color: __TURBOPACK__imported__module__$5b$project$5d2f$components$2f$shared$2f$vibeTheme$2e$jsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["C"].white,
                                                outline: "none",
                                                transition: "border-color .2s"
                                            },
                                            onFocus: (e)=>e.target.style.borderColor = __TURBOPACK__imported__module__$5b$project$5d2f$components$2f$shared$2f$vibeTheme$2e$jsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["C"].orange,
                                            onBlur: (e)=>e.target.style.borderColor = "rgba(255,255,255,0.1)"
                                        }, void 0, false, {
                                            fileName: "[project]/components/pages/MarketplacePage.jsx",
                                            lineNumber: 97,
                                            columnNumber: 194
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/components/pages/MarketplacePage.jsx",
                                    lineNumber: 97,
                                    columnNumber: 13
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    style: {
                                        display: "flex",
                                        gap: "7px",
                                        flexWrap: "wrap",
                                        alignItems: "center",
                                        paddingBottom: "22px"
                                    },
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            style: {
                                                display: "flex",
                                                gap: "5px",
                                                flexWrap: "wrap",
                                                flex: 1
                                            },
                                            children: MKT_CATS.map((c)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                                    onClick: ()=>setCatFilter(c),
                                                    style: {
                                                        fontFamily: "'DM Sans',sans-serif",
                                                        fontSize: "11px",
                                                        padding: "6px 11px",
                                                        borderRadius: "2px",
                                                        cursor: "pointer",
                                                        background: catFilter === c ? __TURBOPACK__imported__module__$5b$project$5d2f$components$2f$shared$2f$vibeTheme$2e$jsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["C"].orange : "rgba(255,255,255,0.04)",
                                                        color: catFilter === c ? __TURBOPACK__imported__module__$5b$project$5d2f$components$2f$shared$2f$vibeTheme$2e$jsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["C"].bg : __TURBOPACK__imported__module__$5b$project$5d2f$components$2f$shared$2f$vibeTheme$2e$jsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["C"].dim,
                                                        border: catFilter === c ? "none" : "1px solid rgba(255,255,255,0.1)",
                                                        transition: "all .2s"
                                                    },
                                                    children: c
                                                }, c, false, {
                                                    fileName: "[project]/components/pages/MarketplacePage.jsx",
                                                    lineNumber: 98,
                                                    columnNumber: 190
                                                }, this))
                                        }, void 0, false, {
                                            fileName: "[project]/components/pages/MarketplacePage.jsx",
                                            lineNumber: 98,
                                            columnNumber: 110
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("select", {
                                            value: sortBy,
                                            onChange: (e)=>setSortBy(e.target.value),
                                            style: {
                                                background: "rgba(255,255,255,0.04)",
                                                border: "1px solid rgba(255,255,255,0.1)",
                                                color: __TURBOPACK__imported__module__$5b$project$5d2f$components$2f$shared$2f$vibeTheme$2e$jsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["C"].dim,
                                                padding: "7px 12px",
                                                borderRadius: "2px",
                                                fontFamily: "'DM Sans',sans-serif",
                                                fontSize: "12px",
                                                outline: "none",
                                                cursor: "pointer"
                                            },
                                            children: [
                                                "Featured",
                                                "Slots Left"
                                            ].map((s)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("option", {
                                                    value: s,
                                                    children: s
                                                }, s, false, {
                                                    fileName: "[project]/components/pages/MarketplacePage.jsx",
                                                    lineNumber: 98,
                                                    columnNumber: 860
                                                }, this))
                                        }, void 0, false, {
                                            fileName: "[project]/components/pages/MarketplacePage.jsx",
                                            lineNumber: 98,
                                            columnNumber: 544
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/components/pages/MarketplacePage.jsx",
                                    lineNumber: 98,
                                    columnNumber: 13
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "[project]/components/pages/MarketplacePage.jsx",
                            lineNumber: 96,
                            columnNumber: 87
                        }, this)
                    }, void 0, false, {
                        fileName: "[project]/components/pages/MarketplacePage.jsx",
                        lineNumber: 96,
                        columnNumber: 11
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("section", {
                        style: {
                            padding: `20px ${w < 600 ? "20px" : "64px"} 80px`,
                            background: __TURBOPACK__imported__module__$5b$project$5d2f$components$2f$shared$2f$vibeTheme$2e$jsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["C"].bg2
                        },
                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            style: {
                                maxWidth: "1100px",
                                margin: "0 auto"
                            },
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                    style: {
                                        fontFamily: "'DM Sans',sans-serif",
                                        fontSize: "12px",
                                        color: __TURBOPACK__imported__module__$5b$project$5d2f$components$2f$shared$2f$vibeTheme$2e$jsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["C"].dimmer,
                                        marginBottom: "20px"
                                    },
                                    children: [
                                        "Showing ",
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                            style: {
                                                color: __TURBOPACK__imported__module__$5b$project$5d2f$components$2f$shared$2f$vibeTheme$2e$jsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["C"].orange
                                            },
                                            children: filtered.length
                                        }, void 0, false, {
                                            fileName: "[project]/components/pages/MarketplacePage.jsx",
                                            lineNumber: 101,
                                            columnNumber: 119
                                        }, this),
                                        " deals"
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/components/pages/MarketplacePage.jsx",
                                    lineNumber: 101,
                                    columnNumber: 13
                                }, this),
                                filtered.length > 0 ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "grid-auto",
                                    children: filtered.map((brand, i)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$components$2f$shared$2f$ui$2e$jsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Reveal"], {
                                            delay: i * .05,
                                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(BrandCard, {
                                                brand: brand,
                                                onApply: setApplyBrand
                                            }, void 0, false, {
                                                fileName: "[project]/components/pages/MarketplacePage.jsx",
                                                lineNumber: 102,
                                                columnNumber: 121
                                            }, this)
                                        }, brand.id, false, {
                                            fileName: "[project]/components/pages/MarketplacePage.jsx",
                                            lineNumber: 102,
                                            columnNumber: 84
                                        }, this))
                                }, void 0, false, {
                                    fileName: "[project]/components/pages/MarketplacePage.jsx",
                                    lineNumber: 102,
                                    columnNumber: 32
                                }, this) : /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    style: {
                                        textAlign: "center",
                                        padding: "64px",
                                        color: __TURBOPACK__imported__module__$5b$project$5d2f$components$2f$shared$2f$vibeTheme$2e$jsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["C"].dimmer
                                    },
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            style: {
                                                fontSize: "32px",
                                                marginBottom: "12px"
                                            },
                                            children: "----"
                                        }, void 0, false, {
                                            fileName: "[project]/components/pages/MarketplacePage.jsx",
                                            lineNumber: 102,
                                            columnNumber: 253
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            style: {
                                                fontFamily: "'Bebas Neue',sans-serif",
                                                fontSize: "20px",
                                                color: __TURBOPACK__imported__module__$5b$project$5d2f$components$2f$shared$2f$vibeTheme$2e$jsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["C"].white,
                                                marginBottom: "6px"
                                            },
                                            children: "No deals found"
                                        }, void 0, false, {
                                            fileName: "[project]/components/pages/MarketplacePage.jsx",
                                            lineNumber: 102,
                                            columnNumber: 314
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                            style: {
                                                fontFamily: "'DM Sans',sans-serif",
                                                fontSize: "13px"
                                            },
                                            children: "Try adjusting your filters."
                                        }, void 0, false, {
                                            fileName: "[project]/components/pages/MarketplacePage.jsx",
                                            lineNumber: 102,
                                            columnNumber: 435
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/components/pages/MarketplacePage.jsx",
                                    lineNumber: 102,
                                    columnNumber: 189
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "[project]/components/pages/MarketplacePage.jsx",
                            lineNumber: 100,
                            columnNumber: 90
                        }, this)
                    }, void 0, false, {
                        fileName: "[project]/components/pages/MarketplacePage.jsx",
                        lineNumber: 100,
                        columnNumber: 11
                    }, this)
                ]
            }, void 0, true) : /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("section", {
                className: "sec-pad",
                style: {
                    background: __TURBOPACK__imported__module__$5b$project$5d2f$components$2f$shared$2f$vibeTheme$2e$jsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["C"].bg2
                },
                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    style: {
                        maxWidth: "1100px",
                        margin: "0 auto"
                    },
                    className: "grid-2",
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$components$2f$shared$2f$ui$2e$jsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Reveal"], {
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$components$2f$shared$2f$ui$2e$jsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Tag"], {
                                            children: "For Brands"
                                        }, void 0, false, {
                                            fileName: "[project]/components/pages/MarketplacePage.jsx",
                                            lineNumber: 107,
                                            columnNumber: 24
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("h2", {
                                            style: {
                                                fontFamily: "'Bebas Neue',sans-serif",
                                                fontSize: "clamp(30px,5vw,54px)",
                                                color: __TURBOPACK__imported__module__$5b$project$5d2f$components$2f$shared$2f$vibeTheme$2e$jsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["C"].white,
                                                lineHeight: 1,
                                                margin: "16px 0 18px"
                                            },
                                            children: [
                                                "Post a deal.",
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("br", {}, void 0, false, {
                                                    fileName: "[project]/components/pages/MarketplacePage.jsx",
                                                    lineNumber: 107,
                                                    columnNumber: 188
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                    style: {
                                                        color: __TURBOPACK__imported__module__$5b$project$5d2f$components$2f$shared$2f$vibeTheme$2e$jsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["C"].orange
                                                    },
                                                    children: "Find your creators."
                                                }, void 0, false, {
                                                    fileName: "[project]/components/pages/MarketplacePage.jsx",
                                                    lineNumber: 107,
                                                    columnNumber: 193
                                                }, this)
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/components/pages/MarketplacePage.jsx",
                                            lineNumber: 107,
                                            columnNumber: 45
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                            style: {
                                                fontFamily: "'DM Sans',sans-serif",
                                                fontSize: "16px",
                                                color: __TURBOPACK__imported__module__$5b$project$5d2f$components$2f$shared$2f$vibeTheme$2e$jsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["C"].dim,
                                                lineHeight: 1.8,
                                                marginBottom: "28px"
                                            },
                                            children: "Access thousands of verified city creators. No agencies, no overhead --- direct creative partnerships."
                                        }, void 0, false, {
                                            fileName: "[project]/components/pages/MarketplacePage.jsx",
                                            lineNumber: 107,
                                            columnNumber: 255
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/components/pages/MarketplacePage.jsx",
                                    lineNumber: 107,
                                    columnNumber: 16
                                }, this),
                                [
                                    [
                                        "01",
                                        "-------",
                                        "Post a Deal",
                                        "Describe your campaign, set budget, define your ideal creator."
                                    ],
                                    [
                                        "02",
                                        "----",
                                        "Get Discovered",
                                        "Your deal surfaces to matching creators in your target cities."
                                    ],
                                    [
                                        "03",
                                        "---",
                                        "Review & Accept",
                                        "Browse applicants and pick creators who match your brand."
                                    ],
                                    [
                                        "04",
                                        "----",
                                        "Track Results",
                                        "Monitor campaign performance in real time."
                                    ]
                                ].map(([n, i, t, d], idx)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$components$2f$shared$2f$ui$2e$jsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Reveal"], {
                                        delay: idx * .08,
                                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            style: {
                                                display: "flex",
                                                gap: "12px",
                                                alignItems: "flex-start",
                                                marginBottom: "16px"
                                            },
                                            children: [
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                    style: {
                                                        width: "30px",
                                                        height: "30px",
                                                        borderRadius: "2px",
                                                        flexShrink: 0,
                                                        background: "rgba(255,107,0,0.12)",
                                                        border: `1px solid ${__TURBOPACK__imported__module__$5b$project$5d2f$components$2f$shared$2f$vibeTheme$2e$jsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["C"].orange}30`,
                                                        display: "flex",
                                                        alignItems: "center",
                                                        justifyContent: "center",
                                                        fontFamily: "'Bebas Neue',sans-serif",
                                                        fontSize: "12px",
                                                        color: __TURBOPACK__imported__module__$5b$project$5d2f$components$2f$shared$2f$vibeTheme$2e$jsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["C"].orange
                                                    },
                                                    children: n
                                                }, void 0, false, {
                                                    fileName: "[project]/components/pages/MarketplacePage.jsx",
                                                    lineNumber: 108,
                                                    columnNumber: 512
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                    children: [
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                            style: {
                                                                fontFamily: "'Bebas Neue',sans-serif",
                                                                fontSize: "16px",
                                                                color: __TURBOPACK__imported__module__$5b$project$5d2f$components$2f$shared$2f$vibeTheme$2e$jsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["C"].white,
                                                                marginBottom: "2px"
                                                            },
                                                            children: [
                                                                i,
                                                                " ",
                                                                t
                                                            ]
                                                        }, void 0, true, {
                                                            fileName: "[project]/components/pages/MarketplacePage.jsx",
                                                            lineNumber: 108,
                                                            columnNumber: 794
                                                        }, this),
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                            style: {
                                                                fontFamily: "'DM Sans',sans-serif",
                                                                fontSize: "13px",
                                                                color: __TURBOPACK__imported__module__$5b$project$5d2f$components$2f$shared$2f$vibeTheme$2e$jsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["C"].dim,
                                                                lineHeight: 1.6
                                                            },
                                                            children: d
                                                        }, void 0, false, {
                                                            fileName: "[project]/components/pages/MarketplacePage.jsx",
                                                            lineNumber: 108,
                                                            columnNumber: 908
                                                        }, this)
                                                    ]
                                                }, void 0, true, {
                                                    fileName: "[project]/components/pages/MarketplacePage.jsx",
                                                    lineNumber: 108,
                                                    columnNumber: 789
                                                }, this)
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/components/pages/MarketplacePage.jsx",
                                            lineNumber: 108,
                                            columnNumber: 427
                                        }, this)
                                    }, idx, false, {
                                        fileName: "[project]/components/pages/MarketplacePage.jsx",
                                        lineNumber: 108,
                                        columnNumber: 393
                                    }, this))
                            ]
                        }, void 0, true, {
                            fileName: "[project]/components/pages/MarketplacePage.jsx",
                            lineNumber: 107,
                            columnNumber: 11
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$components$2f$shared$2f$ui$2e$jsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Reveal"], {
                            delay: .1,
                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                style: {
                                    padding: "36px",
                                    background: "rgba(255,255,255,0.02)",
                                    border: `1px solid ${__TURBOPACK__imported__module__$5b$project$5d2f$components$2f$shared$2f$vibeTheme$2e$jsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["C"].border}`,
                                    borderRadius: "4px",
                                    position: "sticky",
                                    top: "80px"
                                },
                                children: postSent ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    style: {
                                        textAlign: "center",
                                        padding: "28px 0"
                                    },
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            style: {
                                                fontSize: "44px",
                                                marginBottom: "14px",
                                                animation: "checkPop .5s ease"
                                            },
                                            children: "----"
                                        }, void 0, false, {
                                            fileName: "[project]/components/pages/MarketplacePage.jsx",
                                            lineNumber: 110,
                                            columnNumber: 75
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            style: {
                                                fontFamily: "'Bebas Neue',sans-serif",
                                                fontSize: "28px",
                                                color: __TURBOPACK__imported__module__$5b$project$5d2f$components$2f$shared$2f$vibeTheme$2e$jsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["C"].orange,
                                                marginBottom: "10px"
                                            },
                                            children: "Deal Posted!"
                                        }, void 0, false, {
                                            fileName: "[project]/components/pages/MarketplacePage.jsx",
                                            lineNumber: 110,
                                            columnNumber: 166
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                            style: {
                                                fontFamily: "'DM Sans',sans-serif",
                                                fontSize: "14px",
                                                color: __TURBOPACK__imported__module__$5b$project$5d2f$components$2f$shared$2f$vibeTheme$2e$jsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["C"].dim,
                                                lineHeight: 1.7
                                            },
                                            children: "Your campaign goes live within 24 hours."
                                        }, void 0, false, {
                                            fileName: "[project]/components/pages/MarketplacePage.jsx",
                                            lineNumber: 110,
                                            columnNumber: 287
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                            onClick: ()=>{
                                                setPostSent(false);
                                                setPostForm({
                                                    brand: "",
                                                    budget: "",
                                                    location: "",
                                                    desc: ""
                                                });
                                            },
                                            style: {
                                                fontFamily: "'Bebas Neue',sans-serif",
                                                fontSize: "12px",
                                                letterSpacing: "2px",
                                                padding: "10px 24px",
                                                background: __TURBOPACK__imported__module__$5b$project$5d2f$components$2f$shared$2f$vibeTheme$2e$jsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["C"].orange,
                                                color: __TURBOPACK__imported__module__$5b$project$5d2f$components$2f$shared$2f$vibeTheme$2e$jsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["C"].bg,
                                                border: "none",
                                                borderRadius: "2px",
                                                cursor: "pointer",
                                                marginTop: "20px"
                                            },
                                            children: "Post Another Deal"
                                        }, void 0, false, {
                                            fileName: "[project]/components/pages/MarketplacePage.jsx",
                                            lineNumber: 110,
                                            columnNumber: 421
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/components/pages/MarketplacePage.jsx",
                                    lineNumber: 110,
                                    columnNumber: 24
                                }, this) : /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Fragment"], {
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            style: {
                                                fontFamily: "'Bebas Neue',sans-serif",
                                                fontSize: "20px",
                                                color: __TURBOPACK__imported__module__$5b$project$5d2f$components$2f$shared$2f$vibeTheme$2e$jsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["C"].white,
                                                marginBottom: "20px"
                                            },
                                            children: "Post a Campaign Deal"
                                        }, void 0, false, {
                                            fileName: "[project]/components/pages/MarketplacePage.jsx",
                                            lineNumber: 111,
                                            columnNumber: 17
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            style: {
                                                display: "flex",
                                                flexDirection: "column",
                                                gap: "11px"
                                            },
                                            children: [
                                                [
                                                    [
                                                        "brand",
                                                        "Brand Name"
                                                    ],
                                                    [
                                                        "budget",
                                                        "Budget Range"
                                                    ],
                                                    [
                                                        "location",
                                                        "Target Location(s)"
                                                    ]
                                                ].map(([k, ph])=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
                                                        placeholder: ph,
                                                        value: postForm[k],
                                                        onChange: (e)=>setPostForm((f)=>({
                                                                    ...f,
                                                                    [k]: e.target.value
                                                                })),
                                                        style: {
                                                            background: "rgba(255,255,255,0.04)",
                                                            border: "1px solid rgba(255,255,255,0.1)",
                                                            borderRadius: "2px",
                                                            padding: "12px 14px",
                                                            fontFamily: "'DM Sans',sans-serif",
                                                            fontSize: "14px",
                                                            color: __TURBOPACK__imported__module__$5b$project$5d2f$components$2f$shared$2f$vibeTheme$2e$jsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["C"].white,
                                                            outline: "none",
                                                            transition: "border-color .2s"
                                                        },
                                                        onFocus: (e)=>e.target.style.borderColor = __TURBOPACK__imported__module__$5b$project$5d2f$components$2f$shared$2f$vibeTheme$2e$jsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["C"].orange,
                                                        onBlur: (e)=>e.target.style.borderColor = "rgba(255,255,255,0.1)"
                                                    }, k, false, {
                                                        fileName: "[project]/components/pages/MarketplacePage.jsx",
                                                        lineNumber: 112,
                                                        columnNumber: 115
                                                    }, this)),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("textarea", {
                                                    placeholder: "Describe your campaign...",
                                                    rows: 3,
                                                    value: postForm.desc,
                                                    onChange: (e)=>setPostForm((f)=>({
                                                                ...f,
                                                                desc: e.target.value
                                                            })),
                                                    style: {
                                                        background: "rgba(255,255,255,0.04)",
                                                        border: "1px solid rgba(255,255,255,0.1)",
                                                        borderRadius: "2px",
                                                        padding: "12px 14px",
                                                        fontFamily: "'DM Sans',sans-serif",
                                                        fontSize: "14px",
                                                        color: __TURBOPACK__imported__module__$5b$project$5d2f$components$2f$shared$2f$vibeTheme$2e$jsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["C"].white,
                                                        outline: "none",
                                                        resize: "vertical",
                                                        transition: "border-color .2s"
                                                    },
                                                    onFocus: (e)=>e.target.style.borderColor = __TURBOPACK__imported__module__$5b$project$5d2f$components$2f$shared$2f$vibeTheme$2e$jsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["C"].orange,
                                                    onBlur: (e)=>e.target.style.borderColor = "rgba(255,255,255,0.1)"
                                                }, void 0, false, {
                                                    fileName: "[project]/components/pages/MarketplacePage.jsx",
                                                    lineNumber: 113,
                                                    columnNumber: 15
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                                    onClick: submitPost,
                                                    disabled: postLoading,
                                                    style: {
                                                        fontFamily: "'Bebas Neue',sans-serif",
                                                        fontSize: "14px",
                                                        letterSpacing: "3px",
                                                        padding: "14px",
                                                        background: __TURBOPACK__imported__module__$5b$project$5d2f$components$2f$shared$2f$vibeTheme$2e$jsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["C"].orange,
                                                        color: __TURBOPACK__imported__module__$5b$project$5d2f$components$2f$shared$2f$vibeTheme$2e$jsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["C"].bg,
                                                        border: "none",
                                                        borderRadius: "2px",
                                                        cursor: "pointer",
                                                        display: "flex",
                                                        alignItems: "center",
                                                        justifyContent: "center",
                                                        gap: "8px"
                                                    },
                                                    children: [
                                                        postLoading && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                            style: {
                                                                width: "14px",
                                                                height: "14px",
                                                                border: `2px solid ${__TURBOPACK__imported__module__$5b$project$5d2f$components$2f$shared$2f$vibeTheme$2e$jsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["C"].bg}40`,
                                                                borderTopColor: __TURBOPACK__imported__module__$5b$project$5d2f$components$2f$shared$2f$vibeTheme$2e$jsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["C"].bg,
                                                                borderRadius: "50%",
                                                                animation: "spin .6s linear infinite",
                                                                display: "inline-block"
                                                            }
                                                        }, void 0, false, {
                                                            fileName: "[project]/components/pages/MarketplacePage.jsx",
                                                            lineNumber: 114,
                                                            columnNumber: 329
                                                        }, this),
                                                        postLoading ? "Submitting..." : "Post My Deal"
                                                    ]
                                                }, void 0, true, {
                                                    fileName: "[project]/components/pages/MarketplacePage.jsx",
                                                    lineNumber: 114,
                                                    columnNumber: 15
                                                }, this)
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/components/pages/MarketplacePage.jsx",
                                            lineNumber: 111,
                                            columnNumber: 145
                                        }, this)
                                    ]
                                }, void 0, true)
                            }, void 0, false, {
                                fileName: "[project]/components/pages/MarketplacePage.jsx",
                                lineNumber: 109,
                                columnNumber: 30
                            }, this)
                        }, void 0, false, {
                            fileName: "[project]/components/pages/MarketplacePage.jsx",
                            lineNumber: 109,
                            columnNumber: 11
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "[project]/components/pages/MarketplacePage.jsx",
                    lineNumber: 106,
                    columnNumber: 65
                }, this)
            }, void 0, false, {
                fileName: "[project]/components/pages/MarketplacePage.jsx",
                lineNumber: 106,
                columnNumber: 9
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$components$2f$shared$2f$ui$2e$jsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Divider"], {}, void 0, false, {
                fileName: "[project]/components/pages/MarketplacePage.jsx",
                lineNumber: 119,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("section", {
                className: "sec-pad",
                style: {
                    background: __TURBOPACK__imported__module__$5b$project$5d2f$components$2f$shared$2f$vibeTheme$2e$jsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["C"].bg
                },
                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    style: {
                        maxWidth: "800px",
                        margin: "0 auto"
                    },
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$components$2f$shared$2f$ui$2e$jsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Reveal"], {
                            style: {
                                marginBottom: "44px"
                            },
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$components$2f$shared$2f$ui$2e$jsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Tag"], {
                                    children: "Marketplace FAQ"
                                }, void 0, false, {
                                    fileName: "[project]/components/pages/MarketplacePage.jsx",
                                    lineNumber: 120,
                                    columnNumber: 148
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("h2", {
                                    style: {
                                        fontFamily: "'Bebas Neue',sans-serif",
                                        fontSize: "clamp(26px,4vw,44px)",
                                        color: __TURBOPACK__imported__module__$5b$project$5d2f$components$2f$shared$2f$vibeTheme$2e$jsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["C"].white,
                                        lineHeight: 1,
                                        marginTop: "16px"
                                    },
                                    children: [
                                        "How the marketplace ",
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                            style: {
                                                color: __TURBOPACK__imported__module__$5b$project$5d2f$components$2f$shared$2f$vibeTheme$2e$jsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["C"].orange
                                            },
                                            children: "works."
                                        }, void 0, false, {
                                            fileName: "[project]/components/pages/MarketplacePage.jsx",
                                            lineNumber: 120,
                                            columnNumber: 321
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/components/pages/MarketplacePage.jsx",
                                    lineNumber: 120,
                                    columnNumber: 174
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "[project]/components/pages/MarketplacePage.jsx",
                            lineNumber: 120,
                            columnNumber: 110
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$components$2f$shared$2f$ui$2e$jsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["FAQ"], {
                            items: MKT_FAQS
                        }, void 0, false, {
                            fileName: "[project]/components/pages/MarketplacePage.jsx",
                            lineNumber: 120,
                            columnNumber: 379
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "[project]/components/pages/MarketplacePage.jsx",
                    lineNumber: 120,
                    columnNumber: 62
                }, this)
            }, void 0, false, {
                fileName: "[project]/components/pages/MarketplacePage.jsx",
                lineNumber: 120,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                style: {
                    background: __TURBOPACK__imported__module__$5b$project$5d2f$components$2f$shared$2f$vibeTheme$2e$jsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["C"].orange,
                    padding: "20px 0",
                    overflow: "hidden"
                },
                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    style: {
                        display: "flex",
                        animation: "marquee 22s linear infinite",
                        whiteSpace: "nowrap"
                    },
                    children: [
                        ...Array(4)
                    ].map((_, x)=>[
                            "Brand Deals",
                            "--",
                            "Creator Matching",
                            "--",
                            "Real Payments",
                            "--",
                            "City Culture",
                            "--",
                            "Authentic Collabs",
                            "--"
                        ].map((wd, i)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                style: {
                                    fontFamily: "'Bebas Neue',sans-serif",
                                    fontSize: "14px",
                                    letterSpacing: "3px",
                                    color: "rgba(5,5,10,0.65)",
                                    marginRight: "26px"
                                },
                                children: wd
                            }, `${x}-${i}`, false, {
                                fileName: "[project]/components/pages/MarketplacePage.jsx",
                                lineNumber: 121,
                                columnNumber: 316
                            }, this)))
                }, void 0, false, {
                    fileName: "[project]/components/pages/MarketplacePage.jsx",
                    lineNumber: 121,
                    columnNumber: 77
                }, this)
            }, void 0, false, {
                fileName: "[project]/components/pages/MarketplacePage.jsx",
                lineNumber: 121,
                columnNumber: 7
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/components/pages/MarketplacePage.jsx",
        lineNumber: 80,
        columnNumber: 5
    }, this);
}
}),
];

//# sourceMappingURL=%5Broot-of-the-server%5D__a7aa8618._.js.map
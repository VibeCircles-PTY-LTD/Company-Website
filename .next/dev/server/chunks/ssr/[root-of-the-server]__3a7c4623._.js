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
"[project]/components/VibeCirclePages.jsx [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>VibeCircleApp
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react-jsx-dev-runtime.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$navigation$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/navigation.js [app-ssr] (ecmascript)");
"use client";
;
;
;
// --------- GLOBAL CSS ---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------
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
                fileName: "[project]/components/VibeCirclePages.jsx",
                lineNumber: 70,
                columnNumber: 9
            }, ("TURBOPACK compile-time value", void 0))
        }, void 0, false, {
            fileName: "[project]/components/VibeCirclePages.jsx",
            lineNumber: 69,
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
                    fileName: "[project]/components/VibeCirclePages.jsx",
                    lineNumber: 75,
                    columnNumber: 9
                }, ("TURBOPACK compile-time value", void 0)),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
                    d: "M16.8 3H7.2A4.2 4.2 0 0 0 3 7.2v9.6A4.2 4.2 0 0 0 7.2 21h9.6a4.2 4.2 0 0 0 4.2-4.2V7.2A4.2 4.2 0 0 0 16.8 3zm2.5 13.8a2.5 2.5 0 0 1-2.5 2.5H7.2a2.5 2.5 0 0 1-2.5-2.5V7.2a2.5 2.5 0 0 1 2.5-2.5h9.6a2.5 2.5 0 0 1 2.5 2.5v9.6z"
                }, void 0, false, {
                    fileName: "[project]/components/VibeCirclePages.jsx",
                    lineNumber: 76,
                    columnNumber: 9
                }, ("TURBOPACK compile-time value", void 0))
            ]
        }, void 0, true, {
            fileName: "[project]/components/VibeCirclePages.jsx",
            lineNumber: 74,
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
                fileName: "[project]/components/VibeCirclePages.jsx",
                lineNumber: 81,
                columnNumber: 9
            }, ("TURBOPACK compile-time value", void 0))
        }, void 0, false, {
            fileName: "[project]/components/VibeCirclePages.jsx",
            lineNumber: 80,
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
                fileName: "[project]/components/VibeCirclePages.jsx",
                lineNumber: 86,
                columnNumber: 9
            }, ("TURBOPACK compile-time value", void 0))
        }, void 0, false, {
            fileName: "[project]/components/VibeCirclePages.jsx",
            lineNumber: 85,
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
                    fileName: "[project]/components/VibeCirclePages.jsx",
                    lineNumber: 91,
                    columnNumber: 9
                }, ("TURBOPACK compile-time value", void 0)),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
                    d: "M12 2C6.5 2 2 6.5 2 12s4.5 10 10 10 10-4.5 10-10S17.5 2 12 2zm0 18.2A8.2 8.2 0 1 1 12 3.8a8.2 8.2 0 0 1 0 16.4z"
                }, void 0, false, {
                    fileName: "[project]/components/VibeCirclePages.jsx",
                    lineNumber: 92,
                    columnNumber: 9
                }, ("TURBOPACK compile-time value", void 0))
            ]
        }, void 0, true, {
            fileName: "[project]/components/VibeCirclePages.jsx",
            lineNumber: 90,
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
                fileName: "[project]/components/VibeCirclePages.jsx",
                lineNumber: 97,
                columnNumber: 9
            }, ("TURBOPACK compile-time value", void 0))
        }, void 0, false, {
            fileName: "[project]/components/VibeCirclePages.jsx",
            lineNumber: 96,
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
// --------- HOOKS ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------
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
    }, []);
    return [
        ref,
        v
    ];
}
function useCounter(target, dur = 1800, active = false) {
    const [v, setV] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])(0);
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useEffect"])(()=>{
        if (!active) return;
        const steps = 60, inc = target / steps;
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
// --------- SHARED UI COMPONENTS ---------------------------------------------------------------------------------------------------------------------------------------------------------------
function Reveal({ children, delay = 0, style = {} }) {
    const [ref, v] = useInView();
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
        fileName: "[project]/components/VibeCirclePages.jsx",
        lineNumber: 150,
        columnNumber: 9
    }, this);
}
function Orb({ top, left, right, bottom, size = 500, color = C.orange, opacity = 0.12, delay = "0s" }) {
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
        fileName: "[project]/components/VibeCirclePages.jsx",
        lineNumber: 153,
        columnNumber: 9
    }, this);
}
function Tag({ children, color = C.orange }) {
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
        fileName: "[project]/components/VibeCirclePages.jsx",
        lineNumber: 156,
        columnNumber: 9
    }, this);
}
function Divider() {
    const w = useWindowWidth();
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        style: {
            height: "1px",
            background: `linear-gradient(90deg,${C.orange}40,transparent)`,
            margin: `0 ${w < 600 ? "20px" : "64px"}`
        }
    }, void 0, false, {
        fileName: "[project]/components/VibeCirclePages.jsx",
        lineNumber: 160,
        columnNumber: 9
    }, this);
}
function PageHero({ tag, title, accent, sub, children }) {
    const w = useWindowWidth();
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
            background: C.bg
        },
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                style: {
                    position: "absolute",
                    inset: 0,
                    backgroundImage: `linear-gradient(${C.orange}06 1px,transparent 1px),linear-gradient(90deg,${C.orange}06 1px,transparent 1px)`,
                    backgroundSize: "60px 60px"
                }
            }, void 0, false, {
                fileName: "[project]/components/VibeCirclePages.jsx",
                lineNumber: 167,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(Orb, {
                top: "-10%",
                right: "-5%",
                size: 500
            }, void 0, false, {
                fileName: "[project]/components/VibeCirclePages.jsx",
                lineNumber: 168,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(Orb, {
                bottom: "-20%",
                left: "30%",
                size: 400,
                color: C.pink,
                opacity: 0.07,
                delay: "3s"
            }, void 0, false, {
                fileName: "[project]/components/VibeCirclePages.jsx",
                lineNumber: 168,
                columnNumber: 47
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
                            fileName: "[project]/components/VibeCirclePages.jsx",
                            lineNumber: 170,
                            columnNumber: 91
                        }, this)
                    }, void 0, false, {
                        fileName: "[project]/components/VibeCirclePages.jsx",
                        lineNumber: 170,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("h1", {
                        style: {
                            fontFamily: "'Bebas Neue',sans-serif",
                            fontSize: "clamp(44px,8vw,96px)",
                            lineHeight: .95,
                            color: C.white,
                            animation: "fadeUp .6s .1s ease forwards",
                            opacity: 0,
                            marginBottom: "24px"
                        },
                        children: [
                            title,
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("br", {}, void 0, false, {
                                fileName: "[project]/components/VibeCirclePages.jsx",
                                lineNumber: 172,
                                columnNumber: 18
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                style: {
                                    color: C.orange
                                },
                                children: accent
                            }, void 0, false, {
                                fileName: "[project]/components/VibeCirclePages.jsx",
                                lineNumber: 172,
                                columnNumber: 23
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/components/VibeCirclePages.jsx",
                        lineNumber: 171,
                        columnNumber: 9
                    }, this),
                    sub && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                        style: {
                            fontFamily: "'DM Sans',sans-serif",
                            fontSize: "clamp(15px,2vw,19px)",
                            color: C.dim,
                            maxWidth: "560px",
                            lineHeight: 1.75,
                            animation: "fadeUp .6s .2s ease forwards",
                            opacity: 0
                        },
                        children: sub
                    }, void 0, false, {
                        fileName: "[project]/components/VibeCirclePages.jsx",
                        lineNumber: 174,
                        columnNumber: 15
                    }, this),
                    children
                ]
            }, void 0, true, {
                fileName: "[project]/components/VibeCirclePages.jsx",
                lineNumber: 169,
                columnNumber: 7
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/components/VibeCirclePages.jsx",
        lineNumber: 166,
        columnNumber: 5
    }, this);
}
function FAQ({ items, accentColor = C.orange }) {
    const [open, setOpen] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])(null);
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        style: {
            display: "flex",
            flexDirection: "column",
            gap: "8px"
        },
        children: items.map((item, i)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(Reveal, {
                delay: i * .06,
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
                                        color: C.white
                                    },
                                    children: item.q
                                }, void 0, false, {
                                    fileName: "[project]/components/VibeCirclePages.jsx",
                                    lineNumber: 188,
                                    columnNumber: 15
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                    style: {
                                        color: open === i ? accentColor : C.dimmer,
                                        fontSize: "22px",
                                        transition: "transform .3s",
                                        transform: open === i ? "rotate(45deg)" : "none",
                                        flexShrink: 0,
                                        fontWeight: 300
                                    },
                                    children: "+"
                                }, void 0, false, {
                                    fileName: "[project]/components/VibeCirclePages.jsx",
                                    lineNumber: 189,
                                    columnNumber: 15
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "[project]/components/VibeCirclePages.jsx",
                            lineNumber: 187,
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
                                    color: C.dim,
                                    lineHeight: 1.8
                                },
                                children: item.a
                            }, void 0, false, {
                                fileName: "[project]/components/VibeCirclePages.jsx",
                                lineNumber: 191,
                                columnNumber: 90
                            }, this)
                        }, void 0, false, {
                            fileName: "[project]/components/VibeCirclePages.jsx",
                            lineNumber: 191,
                            columnNumber: 24
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "[project]/components/VibeCirclePages.jsx",
                    lineNumber: 186,
                    columnNumber: 11
                }, this)
            }, i, false, {
                fileName: "[project]/components/VibeCirclePages.jsx",
                lineNumber: 185,
                columnNumber: 9
            }, this))
    }, void 0, false, {
        fileName: "[project]/components/VibeCirclePages.jsx",
        lineNumber: 183,
        columnNumber: 5
    }, this);
}
function PricingCard({ plan, price, period = "/mo", desc, features, cta, highlight = false, color = C.orange, onCta, annual = false, annualPrice }) {
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
            onMouseEnter: (e)=>e.currentTarget.style.transform = "translateY(-4px)",
            onMouseLeave: (e)=>e.currentTarget.style.transform = "",
            children: [
                highlight && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    style: {
                        position: "absolute",
                        top: "-1px",
                        left: "50%",
                        transform: "translateX(-50%)",
                        background: color,
                        color: C.bg,
                        fontFamily: "'Bebas Neue',sans-serif",
                        fontSize: "11px",
                        letterSpacing: "3px",
                        padding: "4px 16px",
                        borderRadius: "0 0 4px 4px"
                    },
                    children: "MOST POPULAR"
                }, void 0, false, {
                    fileName: "[project]/components/VibeCirclePages.jsx",
                    lineNumber: 206,
                    columnNumber: 21
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
                    fileName: "[project]/components/VibeCirclePages.jsx",
                    lineNumber: 207,
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
                                color: C.white,
                                lineHeight: 1
                            },
                            children: displayPrice
                        }, void 0, false, {
                            fileName: "[project]/components/VibeCirclePages.jsx",
                            lineNumber: 209,
                            columnNumber: 11
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                            style: {
                                fontFamily: "'DM Sans',sans-serif",
                                fontSize: "14px",
                                color: C.dim
                            },
                            children: displayPrice === "Free" || displayPrice === "Custom" ? "" : period
                        }, void 0, false, {
                            fileName: "[project]/components/VibeCirclePages.jsx",
                            lineNumber: 210,
                            columnNumber: 11
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "[project]/components/VibeCirclePages.jsx",
                    lineNumber: 208,
                    columnNumber: 9
                }, this),
                annual && annualPrice && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                    style: {
                        fontFamily: "'DM Sans',sans-serif",
                        fontSize: "11px",
                        color: color,
                        marginBottom: "8px"
                    },
                    children: "Save 20% -- billed annually"
                }, void 0, false, {
                    fileName: "[project]/components/VibeCirclePages.jsx",
                    lineNumber: 212,
                    columnNumber: 31
                }, this),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                    style: {
                        fontFamily: "'DM Sans',sans-serif",
                        fontSize: "14px",
                        color: C.dim,
                        lineHeight: 1.7,
                        marginBottom: "28px"
                    },
                    children: desc
                }, void 0, false, {
                    fileName: "[project]/components/VibeCirclePages.jsx",
                    lineNumber: 213,
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
                                    fileName: "[project]/components/VibeCirclePages.jsx",
                                    lineNumber: 217,
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
                                    fileName: "[project]/components/VibeCirclePages.jsx",
                                    lineNumber: 218,
                                    columnNumber: 15
                                }, this)
                            ]
                        }, i, true, {
                            fileName: "[project]/components/VibeCirclePages.jsx",
                            lineNumber: 216,
                            columnNumber: 13
                        }, this))
                }, void 0, false, {
                    fileName: "[project]/components/VibeCirclePages.jsx",
                    lineNumber: 214,
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
                        color: highlight ? C.bg : C.white,
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
                            e.currentTarget.style.color = C.white;
                        } else {
                            e.currentTarget.style.boxShadow = "";
                        }
                    },
                    children: cta
                }, void 0, false, {
                    fileName: "[project]/components/VibeCirclePages.jsx",
                    lineNumber: 222,
                    columnNumber: 9
                }, this)
            ]
        }, void 0, true, {
            fileName: "[project]/components/VibeCirclePages.jsx",
            lineNumber: 202,
            columnNumber: 7
        }, this)
    }, void 0, false, {
        fileName: "[project]/components/VibeCirclePages.jsx",
        lineNumber: 201,
        columnNumber: 5
    }, this);
}
function TestimonialCard({ quote, name, role, avatar, color = C.orange }) {
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
                    opacity: .5
                },
                children: '"'
            }, void 0, false, {
                fileName: "[project]/components/VibeCirclePages.jsx",
                lineNumber: 236,
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
                fileName: "[project]/components/VibeCirclePages.jsx",
                lineNumber: 237,
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
                        fileName: "[project]/components/VibeCirclePages.jsx",
                        lineNumber: 239,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                style: {
                                    fontFamily: "'DM Sans',sans-serif",
                                    fontSize: "14px",
                                    fontWeight: 600,
                                    color: C.white
                                },
                                children: name
                            }, void 0, false, {
                                fileName: "[project]/components/VibeCirclePages.jsx",
                                lineNumber: 240,
                                columnNumber: 14
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                style: {
                                    fontFamily: "'DM Sans',sans-serif",
                                    fontSize: "11px",
                                    color: C.dimmer,
                                    marginTop: "2px"
                                },
                                children: role
                            }, void 0, false, {
                                fileName: "[project]/components/VibeCirclePages.jsx",
                                lineNumber: 240,
                                columnNumber: 120
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/components/VibeCirclePages.jsx",
                        lineNumber: 240,
                        columnNumber: 9
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/components/VibeCirclePages.jsx",
                lineNumber: 238,
                columnNumber: 7
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/components/VibeCirclePages.jsx",
        lineNumber: 232,
        columnNumber: 5
    }, this);
}
// --------- TOAST SYSTEM ---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------
function Toast({ toast, onRemove }) {
    const [exit, setExit] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])(false);
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useEffect"])(()=>{
        const t = setTimeout(()=>{
            setExit(true);
            setTimeout(()=>onRemove(toast.id), 400);
        }, toast.duration || 4000);
        return ()=>clearTimeout(t);
    }, []);
    const colors = {
        success: C.orange,
        error: C.pink,
        info: C.blue
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
            border: `1px solid ${colors[toast.type] || C.orange}40`,
            borderLeft: `3px solid ${colors[toast.type] || C.orange}`,
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
                    background: `${colors[toast.type] || C.orange}20`,
                    border: `1px solid ${colors[toast.type] || C.orange}`,
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    fontSize: "11px",
                    color: colors[toast.type] || C.orange,
                    flexShrink: 0,
                    fontWeight: "bold"
                },
                children: icons[toast.type] || "i"
            }, void 0, false, {
                fileName: "[project]/components/VibeCirclePages.jsx",
                lineNumber: 254,
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
                            color: C.white,
                            marginBottom: "3px"
                        },
                        children: toast.title
                    }, void 0, false, {
                        fileName: "[project]/components/VibeCirclePages.jsx",
                        lineNumber: 255,
                        columnNumber: 29
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        style: {
                            fontFamily: "'DM Sans',sans-serif",
                            fontSize: "12px",
                            color: C.dim,
                            lineHeight: 1.5
                        },
                        children: toast.message
                    }, void 0, false, {
                        fileName: "[project]/components/VibeCirclePages.jsx",
                        lineNumber: 255,
                        columnNumber: 169
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/components/VibeCirclePages.jsx",
                lineNumber: 255,
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
                    color: C.dimmer,
                    cursor: "pointer",
                    fontSize: "16px",
                    lineHeight: 1,
                    padding: "0",
                    flexShrink: 0
                },
                children: "--"
            }, void 0, false, {
                fileName: "[project]/components/VibeCirclePages.jsx",
                lineNumber: 256,
                columnNumber: 7
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/components/VibeCirclePages.jsx",
        lineNumber: 253,
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
                fileName: "[project]/components/VibeCirclePages.jsx",
                lineNumber: 263,
                columnNumber: 22
            }, this))
    }, void 0, false, {
        fileName: "[project]/components/VibeCirclePages.jsx",
        lineNumber: 262,
        columnNumber: 5
    }, this);
}
// --------- WAITLIST MODAL ---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------
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
    });
    const submit = async ()=>{
        if (!form.name || !form.email || !role) return;
        setLoading(true);
        try {
            await fetch("https://formsubmit.co/ajax/info@vibecircle.com", {
                method: "POST",
                headers: {
                    "Content-Type": "application/json",
                    "Accept": "application/json"
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
        } catch (e) {}
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
                border: `1px solid ${C.orange}35`,
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
                        color: C.dim,
                        fontSize: "22px",
                        cursor: "pointer",
                        lineHeight: 1
                    },
                    children: "--"
                }, void 0, false, {
                    fileName: "[project]/components/VibeCirclePages.jsx",
                    lineNumber: 296,
                    columnNumber: 9
                }, this),
                step === 1 ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Fragment"], {
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            style: {
                                fontFamily: "'Bebas Neue',sans-serif",
                                fontSize: "clamp(28px,4vw,40px)",
                                color: C.white,
                                lineHeight: 1,
                                marginBottom: "8px"
                            },
                            children: [
                                "Join the ",
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                    style: {
                                        color: C.orange
                                    },
                                    children: "Movement."
                                }, void 0, false, {
                                    fileName: "[project]/components/VibeCirclePages.jsx",
                                    lineNumber: 300,
                                    columnNumber: 24
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "[project]/components/VibeCirclePages.jsx",
                            lineNumber: 299,
                            columnNumber: 13
                        }, this),
                        context && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            style: {
                                fontFamily: "'DM Sans',sans-serif",
                                fontSize: "12px",
                                letterSpacing: "1px",
                                color: C.orange,
                                textTransform: "uppercase",
                                marginBottom: "16px"
                            },
                            children: context
                        }, void 0, false, {
                            fileName: "[project]/components/VibeCirclePages.jsx",
                            lineNumber: 302,
                            columnNumber: 23
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                            style: {
                                fontFamily: "'DM Sans',sans-serif",
                                fontSize: "14px",
                                color: C.dim,
                                lineHeight: 1.7,
                                marginBottom: "28px"
                            },
                            children: "VibeCircle is launching city by city. Be first in your city when we open access."
                        }, void 0, false, {
                            fileName: "[project]/components/VibeCirclePages.jsx",
                            lineNumber: 303,
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
                                        color: C.dimmer,
                                        marginBottom: "10px"
                                    },
                                    children: "I am a..."
                                }, void 0, false, {
                                    fileName: "[project]/components/VibeCirclePages.jsx",
                                    lineNumber: 306,
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
                                                background: role === r ? `${C.orange}18` : "rgba(255,255,255,0.03)",
                                                border: `1px solid ${role === r ? C.orange + "60" : "rgba(255,255,255,0.1)"}`,
                                                borderRadius: "3px",
                                                color: role === r ? C.white : C.dim,
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
                                            fileName: "[project]/components/VibeCirclePages.jsx",
                                            lineNumber: 309,
                                            columnNumber: 19
                                        }, this))
                                }, void 0, false, {
                                    fileName: "[project]/components/VibeCirclePages.jsx",
                                    lineNumber: 307,
                                    columnNumber: 15
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "[project]/components/VibeCirclePages.jsx",
                            lineNumber: 305,
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
                                                opacity: .4
                                            },
                                            children: ic
                                        }, void 0, false, {
                                            fileName: "[project]/components/VibeCirclePages.jsx",
                                            lineNumber: 318,
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
                                                color: C.white,
                                                outline: "none",
                                                transition: "border-color .2s"
                                            },
                                            onFocus: (e)=>e.target.style.borderColor = C.orange,
                                            onBlur: (e)=>e.target.style.borderColor = "rgba(255,255,255,0.1)"
                                        }, void 0, false, {
                                            fileName: "[project]/components/VibeCirclePages.jsx",
                                            lineNumber: 319,
                                            columnNumber: 19
                                        }, this)
                                    ]
                                }, k, true, {
                                    fileName: "[project]/components/VibeCirclePages.jsx",
                                    lineNumber: 317,
                                    columnNumber: 17
                                }, this))
                        }, void 0, false, {
                            fileName: "[project]/components/VibeCirclePages.jsx",
                            lineNumber: 315,
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
                                background: !form.name || !form.email || !role ? "rgba(255,107,0,0.3)" : C.orange,
                                color: C.bg,
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
                                if (!loading && form.name && form.email && role) e.target.style.boxShadow = `0 10px 32px ${C.orange}45`;
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
                                    fileName: "[project]/components/VibeCirclePages.jsx",
                                    lineNumber: 327,
                                    columnNumber: 24
                                }, this) : "",
                                loading ? "Joining..." : "Secure My Spot ---"
                            ]
                        }, void 0, true, {
                            fileName: "[project]/components/VibeCirclePages.jsx",
                            lineNumber: 323,
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
                            fileName: "[project]/components/VibeCirclePages.jsx",
                            lineNumber: 330,
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
                            fileName: "[project]/components/VibeCirclePages.jsx",
                            lineNumber: 334,
                            columnNumber: 13
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            style: {
                                fontFamily: "'Bebas Neue',sans-serif",
                                fontSize: "36px",
                                color: C.orange,
                                lineHeight: 1,
                                marginBottom: "12px"
                            },
                            children: "You're on the list."
                        }, void 0, false, {
                            fileName: "[project]/components/VibeCirclePages.jsx",
                            lineNumber: 335,
                            columnNumber: 13
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                            style: {
                                fontFamily: "'DM Sans',sans-serif",
                                fontSize: "15px",
                                color: C.dim,
                                lineHeight: 1.7,
                                marginBottom: "8px"
                            },
                            children: [
                                "Welcome to VibeCircle, ",
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                    style: {
                                        color: C.white,
                                        fontWeight: 600
                                    },
                                    children: form.name
                                }, void 0, false, {
                                    fileName: "[project]/components/VibeCirclePages.jsx",
                                    lineNumber: 337,
                                    columnNumber: 38
                                }, this),
                                "."
                            ]
                        }, void 0, true, {
                            fileName: "[project]/components/VibeCirclePages.jsx",
                            lineNumber: 336,
                            columnNumber: 13
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                            style: {
                                fontFamily: "'DM Sans',sans-serif",
                                fontSize: "14px",
                                color: C.dimmer,
                                lineHeight: 1.7,
                                marginBottom: "32px"
                            },
                            children: [
                                "We'll email you at ",
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                    style: {
                                        color: C.orange
                                    },
                                    children: form.email
                                }, void 0, false, {
                                    fileName: "[project]/components/VibeCirclePages.jsx",
                                    lineNumber: 340,
                                    columnNumber: 34
                                }, this),
                                " the moment we launch in your city."
                            ]
                        }, void 0, true, {
                            fileName: "[project]/components/VibeCirclePages.jsx",
                            lineNumber: 339,
                            columnNumber: 13
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                            onClick: onClose,
                            style: {
                                fontFamily: "'Bebas Neue',sans-serif",
                                fontSize: "14px",
                                letterSpacing: "3px",
                                padding: "13px 36px",
                                background: C.orange,
                                color: C.bg,
                                border: "none",
                                borderRadius: "3px",
                                cursor: "pointer"
                            },
                            children: "Close"
                        }, void 0, false, {
                            fileName: "[project]/components/VibeCirclePages.jsx",
                            lineNumber: 342,
                            columnNumber: 13
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "[project]/components/VibeCirclePages.jsx",
                    lineNumber: 333,
                    columnNumber: 11
                }, this)
            ]
        }, void 0, true, {
            fileName: "[project]/components/VibeCirclePages.jsx",
            lineNumber: 295,
            columnNumber: 7
        }, this)
    }, void 0, false, {
        fileName: "[project]/components/VibeCirclePages.jsx",
        lineNumber: 294,
        columnNumber: 5
    }, this);
}
// --------- COOKIE BANNER ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------
function CookieBanner({ onAccept, onDecline, setPage }) {
    const w = useWindowWidth();
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        style: {
            position: "fixed",
            bottom: 0,
            left: 0,
            right: 0,
            zIndex: 500,
            background: "rgba(8,8,18,0.98)",
            backdropFilter: "blur(20px)",
            borderTop: `1px solid ${C.border}`,
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
                    color: C.dim,
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
                            color: C.orange,
                            cursor: "pointer",
                            fontFamily: "'DM Sans',sans-serif",
                            fontSize: "13px",
                            padding: 0,
                            textDecoration: "underline"
                        },
                        children: "Learn more"
                    }, void 0, false, {
                        fileName: "[project]/components/VibeCirclePages.jsx",
                        lineNumber: 357,
                        columnNumber: 9
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/components/VibeCirclePages.jsx",
                lineNumber: 355,
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
                            color: C.dimmer,
                            border: "1px solid rgba(255,255,255,0.12)",
                            borderRadius: "2px",
                            cursor: "pointer",
                            transition: "all .2s"
                        },
                        onMouseEnter: (e)=>{
                            e.currentTarget.style.color = C.white;
                            e.currentTarget.style.borderColor = "rgba(255,255,255,0.3)";
                        },
                        onMouseLeave: (e)=>{
                            e.currentTarget.style.color = C.dimmer;
                            e.currentTarget.style.borderColor = "rgba(255,255,255,0.12)";
                        },
                        children: "Decline"
                    }, void 0, false, {
                        fileName: "[project]/components/VibeCirclePages.jsx",
                        lineNumber: 360,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                        onClick: onAccept,
                        style: {
                            fontFamily: "'Bebas Neue',sans-serif",
                            fontSize: "13px",
                            letterSpacing: "2px",
                            padding: "10px 22px",
                            background: C.orange,
                            color: C.bg,
                            border: "none",
                            borderRadius: "2px",
                            cursor: "pointer",
                            transition: "box-shadow .2s"
                        },
                        onMouseEnter: (e)=>e.target.style.boxShadow = `0 4px 16px ${C.orange}40`,
                        onMouseLeave: (e)=>e.target.style.boxShadow = "",
                        children: "Accept All"
                    }, void 0, false, {
                        fileName: "[project]/components/VibeCirclePages.jsx",
                        lineNumber: 361,
                        columnNumber: 9
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/components/VibeCirclePages.jsx",
                lineNumber: 359,
                columnNumber: 7
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/components/VibeCirclePages.jsx",
        lineNumber: 354,
        columnNumber: 5
    }, this);
}
// --------- BACK TO TOP ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------
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
            background: C.orange,
            color: C.bg,
            border: "none",
            cursor: "pointer",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            fontSize: "18px",
            boxShadow: `0 4px 20px ${C.orange}50`,
            transition: "transform .2s,box-shadow .2s",
            animation: "fadeIn .3s ease"
        },
        onMouseEnter: (e)=>{
            e.target.style.transform = "translateY(-3px)";
            e.target.style.boxShadow = `0 8px 28px ${C.orange}60`;
        },
        onMouseLeave: (e)=>{
            e.target.style.transform = "";
            e.target.style.boxShadow = `0 4px 20px ${C.orange}50`;
        },
        children: "---"
    }, void 0, false, {
        fileName: "[project]/components/VibeCirclePages.jsx",
        lineNumber: 373,
        columnNumber: 5
    }, this);
}
// --------- NAV ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------
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
    const w = useWindowWidth();
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
                    borderBottom: `1px solid ${scrolled ? C.border : "transparent"}`,
                    transition: "all .35s ease"
                },
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                        onClick: ()=>go("home"),
                        style: {
                            fontFamily: "'Bebas Neue',sans-serif",
                            fontSize: "24px",
                            letterSpacing: "3px",
                            color: C.orange,
                            background: "none",
                            border: "none",
                            cursor: "pointer",
                            padding: 0,
                            flexShrink: 0
                        },
                        children: "VIBECIRCLE"
                    }, void 0, false, {
                        fileName: "[project]/components/VibeCirclePages.jsx",
                        lineNumber: 392,
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
                                        color: current === p ? C.orange : C.dim,
                                        background: current === p ? `${C.orange}12` : "transparent",
                                        border: current === p ? `1px solid ${C.orange}30` : "1px solid transparent",
                                        borderRadius: "2px",
                                        padding: "7px 12px",
                                        cursor: "pointer",
                                        transition: "all .2s"
                                    },
                                    onMouseEnter: (e)=>{
                                        if (current !== p) {
                                            e.currentTarget.style.color = C.white;
                                            e.currentTarget.style.borderColor = "rgba(255,255,255,0.1)";
                                        }
                                    },
                                    onMouseLeave: (e)=>{
                                        if (current !== p) {
                                            e.currentTarget.style.color = C.dim;
                                            e.currentTarget.style.borderColor = "transparent";
                                        }
                                    },
                                    children: p
                                }, p, false, {
                                    fileName: "[project]/components/VibeCirclePages.jsx",
                                    lineNumber: 396,
                                    columnNumber: 15
                                }, this)),
                            MORE_NAV.map((p)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                    onClick: ()=>go(p),
                                    style: {
                                        fontFamily: "'DM Sans',sans-serif",
                                        fontSize: "12px",
                                        letterSpacing: "1px",
                                        textTransform: "uppercase",
                                        color: current === p ? C.orange : "rgba(255,255,255,0.28)",
                                        background: "transparent",
                                        border: "1px solid transparent",
                                        borderRadius: "2px",
                                        padding: "7px 10px",
                                        cursor: "pointer",
                                        transition: "all .2s"
                                    },
                                    onMouseEnter: (e)=>e.currentTarget.style.color = C.white,
                                    onMouseLeave: (e)=>e.currentTarget.style.color = current === p ? C.orange : "rgba(255,255,255,0.28)",
                                    children: p
                                }, p, false, {
                                    fileName: "[project]/components/VibeCirclePages.jsx",
                                    lineNumber: 402,
                                    columnNumber: 15
                                }, this))
                        ]
                    }, void 0, true, {
                        fileName: "[project]/components/VibeCirclePages.jsx",
                        lineNumber: 394,
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
                                    background: C.orange,
                                    color: C.bg,
                                    border: "none",
                                    borderRadius: "2px",
                                    cursor: "pointer",
                                    transition: "box-shadow .2s"
                                },
                                onMouseEnter: (e)=>e.target.style.boxShadow = `0 6px 20px ${C.orange}40`,
                                onMouseLeave: (e)=>e.target.style.boxShadow = "",
                                children: "Join Now"
                            }, void 0, false, {
                                fileName: "[project]/components/VibeCirclePages.jsx",
                                lineNumber: 410,
                                columnNumber: 23
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
                                            background: menuOpen ? C.orange : C.white,
                                            transition: "all .3s",
                                            transform: menuOpen ? "rotate(45deg) translate(5px,5px)" : ""
                                        }
                                    }, void 0, false, {
                                        fileName: "[project]/components/VibeCirclePages.jsx",
                                        lineNumber: 413,
                                        columnNumber: 15
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                        style: {
                                            display: "block",
                                            width: "22px",
                                            height: "2px",
                                            background: menuOpen ? C.orange : C.white,
                                            transition: "all .3s",
                                            opacity: menuOpen ? 0 : 1
                                        }
                                    }, void 0, false, {
                                        fileName: "[project]/components/VibeCirclePages.jsx",
                                        lineNumber: 414,
                                        columnNumber: 15
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                        style: {
                                            display: "block",
                                            width: "22px",
                                            height: "2px",
                                            background: menuOpen ? C.orange : C.white,
                                            transition: "all .3s",
                                            transform: menuOpen ? "rotate(-45deg) translate(5px,-5px)" : ""
                                        }
                                    }, void 0, false, {
                                        fileName: "[project]/components/VibeCirclePages.jsx",
                                        lineNumber: 415,
                                        columnNumber: 15
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/components/VibeCirclePages.jsx",
                                lineNumber: 412,
                                columnNumber: 13
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/components/VibeCirclePages.jsx",
                        lineNumber: 409,
                        columnNumber: 9
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/components/VibeCirclePages.jsx",
                lineNumber: 391,
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
                                    color: current === p ? C.orange : C.white,
                                    background: "none",
                                    border: "none",
                                    cursor: "pointer",
                                    padding: "11px 0",
                                    borderBottom: "1px solid rgba(255,255,255,0.05)",
                                    animation: `fadeUp .4s ease ${i * .04}s both`
                                },
                                children: p
                            }, p, false, {
                                fileName: "[project]/components/VibeCirclePages.jsx",
                                lineNumber: 424,
                                columnNumber: 15
                            }, this))
                    }, void 0, false, {
                        fileName: "[project]/components/VibeCirclePages.jsx",
                        lineNumber: 422,
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
                            background: C.orange,
                            color: C.bg,
                            border: "none",
                            borderRadius: "2px",
                            cursor: "pointer"
                        },
                        children: "Join Now"
                    }, void 0, false, {
                        fileName: "[project]/components/VibeCirclePages.jsx",
                        lineNumber: 427,
                        columnNumber: 11
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/components/VibeCirclePages.jsx",
                lineNumber: 421,
                columnNumber: 9
            }, this)
        ]
    }, void 0, true);
}
// --------- FOOTER ---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------
function Footer({ setPage, openWaitlist }) {
    const w = useWindowWidth();
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
            borderTop: `1px solid ${C.border}`
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
                                        color: C.orange,
                                        background: "none",
                                        border: "none",
                                        cursor: "pointer",
                                        marginBottom: "14px",
                                        display: "block"
                                    },
                                    children: "VIBECIRCLE"
                                }, void 0, false, {
                                    fileName: "[project]/components/VibeCirclePages.jsx",
                                    lineNumber: 449,
                                    columnNumber: 13
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                    style: {
                                        fontFamily: "'DM Sans',sans-serif",
                                        fontSize: "12px",
                                        color: C.dimmer,
                                        lineHeight: 1.7,
                                        maxWidth: "180px",
                                        marginBottom: "18px"
                                    },
                                    children: "Where creators, cities, events, and businesses collide in real life."
                                }, void 0, false, {
                                    fileName: "[project]/components/VibeCirclePages.jsx",
                                    lineNumber: 450,
                                    columnNumber: 13
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    style: {
                                        display: "flex",
                                        gap: "8px"
                                    },
                                    children: SOCIALS.map((s, i)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("a", {
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
                                                e.currentTarget.style.borderColor = C.orange;
                                                e.currentTarget.style.background = "rgba(255,107,0,0.1)";
                                            },
                                            onMouseLeave: (e)=>{
                                                e.currentTarget.style.borderColor = "rgba(255,255,255,0.1)";
                                                e.currentTarget.style.background = "transparent";
                                            },
                                            children: s.icon
                                        }, i, false, {
                                            fileName: "[project]/components/VibeCirclePages.jsx",
                                            lineNumber: 453,
                                            columnNumber: 17
                                        }, this))
                                }, void 0, false, {
                                    fileName: "[project]/components/VibeCirclePages.jsx",
                                    lineNumber: 451,
                                    columnNumber: 13
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "[project]/components/VibeCirclePages.jsx",
                            lineNumber: 448,
                            columnNumber: 11
                        }, this),
                        cols.map((col)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        style: {
                                            fontFamily: "'Bebas Neue',sans-serif",
                                            fontSize: "12px",
                                            letterSpacing: "3px",
                                            color: C.orange,
                                            marginBottom: "14px"
                                        },
                                        children: col.title
                                    }, void 0, false, {
                                        fileName: "[project]/components/VibeCirclePages.jsx",
                                        lineNumber: 462,
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
                                                    color: C.dimmer,
                                                    background: "none",
                                                    border: "none",
                                                    cursor: "pointer",
                                                    textAlign: "left",
                                                    transition: "color .2s",
                                                    padding: 0
                                                },
                                                onMouseEnter: (e)=>e.target.style.color = C.white,
                                                onMouseLeave: (e)=>e.target.style.color = C.dimmer,
                                                children: l
                                            }, l, false, {
                                                fileName: "[project]/components/VibeCirclePages.jsx",
                                                lineNumber: 465,
                                                columnNumber: 19
                                            }, this))
                                    }, void 0, false, {
                                        fileName: "[project]/components/VibeCirclePages.jsx",
                                        lineNumber: 463,
                                        columnNumber: 15
                                    }, this)
                                ]
                            }, col.title, true, {
                                fileName: "[project]/components/VibeCirclePages.jsx",
                                lineNumber: 461,
                                columnNumber: 13
                            }, this))
                    ]
                }, void 0, true, {
                    fileName: "[project]/components/VibeCirclePages.jsx",
                    lineNumber: 447,
                    columnNumber: 9
                }, this),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    style: {
                        height: "1px",
                        background: "rgba(255,255,255,0.05)",
                        marginBottom: "22px"
                    }
                }, void 0, false, {
                    fileName: "[project]/components/VibeCirclePages.jsx",
                    lineNumber: 474,
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
                            fileName: "[project]/components/VibeCirclePages.jsx",
                            lineNumber: 476,
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
                                    onMouseEnter: (e)=>e.target.style.color = C.orange,
                                    onMouseLeave: (e)=>e.target.style.color = "rgba(255,255,255,0.18)",
                                    children: l
                                }, l, false, {
                                    fileName: "[project]/components/VibeCirclePages.jsx",
                                    lineNumber: 479,
                                    columnNumber: 15
                                }, this))
                        }, void 0, false, {
                            fileName: "[project]/components/VibeCirclePages.jsx",
                            lineNumber: 477,
                            columnNumber: 11
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "[project]/components/VibeCirclePages.jsx",
                    lineNumber: 475,
                    columnNumber: 9
                }, this)
            ]
        }, void 0, true, {
            fileName: "[project]/components/VibeCirclePages.jsx",
            lineNumber: 446,
            columnNumber: 7
        }, this)
    }, void 0, false, {
        fileName: "[project]/components/VibeCirclePages.jsx",
        lineNumber: 445,
        columnNumber: 5
    }, this);
}
// ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------
// HOME PAGE
// ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------
const TESTIMONIALS = [
    {
        quote: "VibeCircle changed how I grow as a creator. I booked my first brand deal in 3 days and my local following tripled in a month.",
        name: "Jordan Lee",
        role: "Music Creator - Johannesburg",
        avatar: "MIC",
        color: C.orange
    },
    {
        quote: "We ran a geo-targeted campaign for our pop-up and got 800% more foot traffic than our Instagram ads. The map placement is unreal.",
        name: "NEON BREW CO.",
        role: "F&B Brand - South Africa",
        avatar: "DRINK",
        color: C.pink
    },
    {
        quote: "Campus Ambassadors actually show up. Our gym promo hit 14 campuses in 3 weeks - students were genuinely hyped.",
        name: "Pulse Fitness",
        role: "Health Brand - SA Campuses",
        avatar: "BOLT",
        color: C.blue
    },
    {
        quote: "Nothing has ever connected me to real people in my city like VibeCircle. It's the only platform where I feel seen.",
        name: "Mia Torres",
        role: "Visual Artist - Cape Town",
        avatar: "ART",
        color: C.purple
    }
];
function HomePage({ setPage, openWaitlist }) {
    const words = [
        "Pulse",
        "Gravity",
        "Energy",
        "Discovery",
        "Movement",
        "Culture",
        "Alive"
    ];
    const [wi, setWi] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])(0);
    const w = useWindowWidth();
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useEffect"])(()=>{
        const id = setInterval(()=>setWi((x)=>x + 1), 2200);
        return ()=>clearInterval(id);
    }, []);
    const go = (p)=>{
        setPage(p);
        window.scrollTo(0, 0);
    };
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        style: {
            background: C.bg
        },
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("section", {
                style: {
                    minHeight: "100vh",
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    background: C.bg,
                    position: "relative",
                    overflow: "hidden",
                    padding: `120px ${w < 600 ? "20px" : "48px"} 80px`
                },
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        style: {
                            position: "absolute",
                            inset: 0,
                            backgroundImage: `linear-gradient(${C.orange}05 1px,transparent 1px),linear-gradient(90deg,${C.orange}05 1px,transparent 1px)`,
                            backgroundSize: "60px 60px"
                        }
                    }, void 0, false, {
                        fileName: "[project]/components/VibeCirclePages.jsx",
                        lineNumber: 510,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(Orb, {
                        top: "5%",
                        left: "-8%",
                        size: 600,
                        opacity: 0.12
                    }, void 0, false, {
                        fileName: "[project]/components/VibeCirclePages.jsx",
                        lineNumber: 511,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(Orb, {
                        bottom: "0%",
                        right: "-5%",
                        size: 500,
                        color: C.pink,
                        opacity: 0.08,
                        delay: "3s"
                    }, void 0, false, {
                        fileName: "[project]/components/VibeCirclePages.jsx",
                        lineNumber: 511,
                        columnNumber: 61
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        style: {
                            position: "relative",
                            zIndex: 2,
                            textAlign: "center",
                            maxWidth: "950px"
                        },
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                style: {
                                    fontFamily: "'Bebas Neue',sans-serif",
                                    fontSize: "13px",
                                    letterSpacing: "6px",
                                    color: C.orange,
                                    marginBottom: "28px",
                                    display: "flex",
                                    alignItems: "center",
                                    justifyContent: "center",
                                    gap: "16px"
                                },
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                        style: {
                                            width: 40,
                                            height: 1,
                                            background: C.orange,
                                            display: "inline-block"
                                        }
                                    }, void 0, false, {
                                        fileName: "[project]/components/VibeCirclePages.jsx",
                                        lineNumber: 514,
                                        columnNumber: 13
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                        style: {
                                            display: "inline-block",
                                            animation: "fadeUp .4s ease forwards",
                                            opacity: 0
                                        },
                                        children: words[wi % words.length]
                                    }, wi, false, {
                                        fileName: "[project]/components/VibeCirclePages.jsx",
                                        lineNumber: 515,
                                        columnNumber: 13
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                        style: {
                                            width: 40,
                                            height: 1,
                                            background: C.orange,
                                            display: "inline-block"
                                        }
                                    }, void 0, false, {
                                        fileName: "[project]/components/VibeCirclePages.jsx",
                                        lineNumber: 516,
                                        columnNumber: 13
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/components/VibeCirclePages.jsx",
                                lineNumber: 513,
                                columnNumber: 11
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("h1", {
                                style: {
                                    fontFamily: "'Bebas Neue',sans-serif",
                                    fontSize: "clamp(52px,10vw,118px)",
                                    lineHeight: .9,
                                    color: C.white,
                                    marginBottom: "16px"
                                },
                                children: [
                                    "IT'S NOT",
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("br", {}, void 0, false, {
                                        fileName: "[project]/components/VibeCirclePages.jsx",
                                        lineNumber: 519,
                                        columnNumber: 21
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                        style: {
                                            WebkitTextStroke: "2px #FF6B00",
                                            color: "transparent"
                                        },
                                        children: "SOCIAL MEDIA."
                                    }, void 0, false, {
                                        fileName: "[project]/components/VibeCirclePages.jsx",
                                        lineNumber: 519,
                                        columnNumber: 26
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("br", {}, void 0, false, {
                                        fileName: "[project]/components/VibeCirclePages.jsx",
                                        lineNumber: 519,
                                        columnNumber: 113
                                    }, this),
                                    "IT'S SOCIAL",
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("br", {}, void 0, false, {
                                        fileName: "[project]/components/VibeCirclePages.jsx",
                                        lineNumber: 519,
                                        columnNumber: 129
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                        style: {
                                            color: C.orange
                                        },
                                        children: "GRAVITY."
                                    }, void 0, false, {
                                        fileName: "[project]/components/VibeCirclePages.jsx",
                                        lineNumber: 519,
                                        columnNumber: 134
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/components/VibeCirclePages.jsx",
                                lineNumber: 518,
                                columnNumber: 11
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                style: {
                                    fontFamily: "'DM Sans',sans-serif",
                                    fontSize: "clamp(15px,2vw,19px)",
                                    color: C.dim,
                                    margin: "32px auto 48px",
                                    maxWidth: "520px",
                                    lineHeight: 1.75
                                },
                                children: "Where creators, cities, events, and businesses connect in real time."
                            }, void 0, false, {
                                fileName: "[project]/components/VibeCirclePages.jsx",
                                lineNumber: 521,
                                columnNumber: 11
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                style: {
                                    display: "flex",
                                    gap: "14px",
                                    justifyContent: "center",
                                    flexWrap: "wrap",
                                    marginBottom: "56px"
                                },
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                        onClick: ()=>openWaitlist("Creator Waitlist"),
                                        style: {
                                            fontFamily: "'Bebas Neue',sans-serif",
                                            fontSize: "16px",
                                            letterSpacing: "3px",
                                            padding: "16px 44px",
                                            background: C.orange,
                                            color: C.bg,
                                            border: "none",
                                            borderRadius: "2px",
                                            cursor: "pointer",
                                            transition: "transform .2s,box-shadow .2s"
                                        },
                                        onMouseEnter: (e)=>{
                                            e.target.style.transform = "translateY(-2px)";
                                            e.target.style.boxShadow = `0 16px 40px ${C.orange}45`;
                                        },
                                        onMouseLeave: (e)=>{
                                            e.target.style.transform = "";
                                            e.target.style.boxShadow = "";
                                        },
                                        children: "Join the Movement"
                                    }, void 0, false, {
                                        fileName: "[project]/components/VibeCirclePages.jsx",
                                        lineNumber: 523,
                                        columnNumber: 13
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                        onClick: ()=>go("Marketplace"),
                                        style: {
                                            fontFamily: "'Bebas Neue',sans-serif",
                                            fontSize: "16px",
                                            letterSpacing: "3px",
                                            padding: "16px 44px",
                                            background: "transparent",
                                            color: C.white,
                                            border: "1px solid rgba(255,255,255,0.22)",
                                            borderRadius: "2px",
                                            cursor: "pointer",
                                            transition: "all .2s"
                                        },
                                        onMouseEnter: (e)=>{
                                            e.currentTarget.style.borderColor = C.orange;
                                            e.currentTarget.style.color = C.orange;
                                        },
                                        onMouseLeave: (e)=>{
                                            e.currentTarget.style.borderColor = "rgba(255,255,255,0.22)";
                                            e.currentTarget.style.color = C.white;
                                        },
                                        children: "Explore Marketplace"
                                    }, void 0, false, {
                                        fileName: "[project]/components/VibeCirclePages.jsx",
                                        lineNumber: 524,
                                        columnNumber: 13
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/components/VibeCirclePages.jsx",
                                lineNumber: 522,
                                columnNumber: 11
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                style: {
                                    display: "flex",
                                    gap: "10px",
                                    justifyContent: "center",
                                    flexWrap: "wrap"
                                },
                                children: [
                                    {
                                        l: "About",
                                        p: "About",
                                        i: "----"
                                    },
                                    {
                                        l: "Creators",
                                        p: "Creators",
                                        i: "---"
                                    },
                                    {
                                        l: "Marketplace",
                                        p: "Marketplace",
                                        i: "----"
                                    },
                                    {
                                        l: "For Business",
                                        p: "Business",
                                        i: "----"
                                    },
                                    {
                                        l: "Pricing",
                                        p: "Pricing",
                                        i: "----"
                                    },
                                    {
                                        l: "Contact",
                                        p: "Contact",
                                        i: "------"
                                    }
                                ].map(({ l, p, i })=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                        onClick: ()=>go(p),
                                        style: {
                                            fontFamily: "'DM Sans',sans-serif",
                                            fontSize: "13px",
                                            padding: "10px 18px",
                                            background: "rgba(255,255,255,0.04)",
                                            border: "1px solid rgba(255,255,255,0.1)",
                                            borderRadius: "2px",
                                            color: C.dim,
                                            cursor: "pointer",
                                            display: "flex",
                                            alignItems: "center",
                                            gap: "7px",
                                            transition: "all .25s"
                                        },
                                        onMouseEnter: (e)=>{
                                            e.currentTarget.style.borderColor = C.orange;
                                            e.currentTarget.style.color = C.white;
                                            e.currentTarget.style.background = "rgba(255,107,0,0.08)";
                                        },
                                        onMouseLeave: (e)=>{
                                            e.currentTarget.style.borderColor = "rgba(255,255,255,0.1)";
                                            e.currentTarget.style.color = C.dim;
                                            e.currentTarget.style.background = "rgba(255,255,255,0.04)";
                                        },
                                        children: [
                                            i,
                                            " ",
                                            l
                                        ]
                                    }, p, true, {
                                        fileName: "[project]/components/VibeCirclePages.jsx",
                                        lineNumber: 528,
                                        columnNumber: 15
                                    }, this))
                            }, void 0, false, {
                                fileName: "[project]/components/VibeCirclePages.jsx",
                                lineNumber: 526,
                                columnNumber: 11
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/components/VibeCirclePages.jsx",
                        lineNumber: 512,
                        columnNumber: 9
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/components/VibeCirclePages.jsx",
                lineNumber: 509,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("section", {
                className: "sec-pad",
                style: {
                    background: C.bg2
                },
                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    style: {
                        maxWidth: "1100px",
                        margin: "0 auto"
                    },
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(Reveal, {
                            style: {
                                marginBottom: "52px"
                            },
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(Tag, {
                                    children: "What people say"
                                }, void 0, false, {
                                    fileName: "[project]/components/VibeCirclePages.jsx",
                                    lineNumber: 539,
                                    columnNumber: 49
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("h2", {
                                    style: {
                                        fontFamily: "'Bebas Neue',sans-serif",
                                        fontSize: "clamp(32px,5vw,56px)",
                                        color: C.white,
                                        lineHeight: 1,
                                        marginTop: "16px"
                                    },
                                    children: [
                                        "The vibe is ",
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                            style: {
                                                color: C.orange
                                            },
                                            children: "real."
                                        }, void 0, false, {
                                            fileName: "[project]/components/VibeCirclePages.jsx",
                                            lineNumber: 539,
                                            columnNumber: 214
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/components/VibeCirclePages.jsx",
                                    lineNumber: 539,
                                    columnNumber: 75
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "[project]/components/VibeCirclePages.jsx",
                            lineNumber: 539,
                            columnNumber: 11
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "grid-4",
                            children: TESTIMONIALS.map((t, i)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(Reveal, {
                                    delay: i * .1,
                                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(TestimonialCard, {
                                        ...t
                                    }, void 0, false, {
                                        fileName: "[project]/components/VibeCirclePages.jsx",
                                        lineNumber: 540,
                                        columnNumber: 89
                                    }, this)
                                }, i, false, {
                                    fileName: "[project]/components/VibeCirclePages.jsx",
                                    lineNumber: 540,
                                    columnNumber: 60
                                }, this))
                        }, void 0, false, {
                            fileName: "[project]/components/VibeCirclePages.jsx",
                            lineNumber: 540,
                            columnNumber: 11
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "[project]/components/VibeCirclePages.jsx",
                    lineNumber: 538,
                    columnNumber: 9
                }, this)
            }, void 0, false, {
                fileName: "[project]/components/VibeCirclePages.jsx",
                lineNumber: 537,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                style: {
                    background: C.bg,
                    borderTop: `1px solid ${C.border}`,
                    borderBottom: `1px solid ${C.border}`,
                    padding: "18px 0",
                    overflow: "hidden"
                },
                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    style: {
                        display: "flex",
                        animation: "marquee 20s linear infinite",
                        whiteSpace: "nowrap"
                    },
                    children: [
                        ...Array(3)
                    ].map((_, x)=>[
                            "NEON BREW CO.",
                            "--",
                            "APEX STREETWEAR",
                            "--",
                            "SOLSTICE FESTIVAL",
                            "--",
                            "PULSE FITNESS",
                            "--",
                            "URBAN EATS",
                            "--",
                            "CTRL AUDIO",
                            "--",
                            "MIRAGE CLUB GROUP",
                            "--"
                        ].map((wd, i)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                style: {
                                    fontFamily: "'Bebas Neue',sans-serif",
                                    fontSize: "13px",
                                    letterSpacing: "3px",
                                    color: wd === "--" ? C.orange : "rgba(255,255,255,0.22)",
                                    marginRight: "28px"
                                },
                                children: wd
                            }, `${x}-${i}`, false, {
                                fileName: "[project]/components/VibeCirclePages.jsx",
                                lineNumber: 547,
                                columnNumber: 13
                            }, this)))
                }, void 0, false, {
                    fileName: "[project]/components/VibeCirclePages.jsx",
                    lineNumber: 545,
                    columnNumber: 9
                }, this)
            }, void 0, false, {
                fileName: "[project]/components/VibeCirclePages.jsx",
                lineNumber: 544,
                columnNumber: 7
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/components/VibeCirclePages.jsx",
        lineNumber: 508,
        columnNumber: 5
    }, this);
}
// ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------
// ABOUT PAGE
// ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------
const STATS = [
    {
        val: 50,
        suffix: "K+",
        label: "Creators"
    },
    {
        val: 120,
        suffix: "+",
        label: "Cities"
    },
    {
        val: 2,
        suffix: "M+",
        label: "Events Hosted"
    },
    {
        val: 98,
        suffix: "%",
        label: "Energy"
    }
];
const MANIFESTO = [
    "Culture should be visible.",
    "Creators deserve gravity.",
    "Businesses should feel human.",
    "Maps are more powerful than feeds.",
    "Real life matters."
];
function StatCard({ val, suffix, label, active }) {
    const count = useCounter(val, 1800, active);
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        style: {
            padding: "36px 28px",
            background: "rgba(255,107,0,0.04)",
            border: `1px solid ${C.border}`,
            borderRadius: "4px",
            textAlign: "center"
        },
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                style: {
                    fontFamily: "'Bebas Neue',sans-serif",
                    fontSize: "clamp(40px,5vw,60px)",
                    lineHeight: 1,
                    background: "linear-gradient(90deg,#FF6B00,#FF2D78,#FF6B00)",
                    backgroundSize: "200% auto",
                    WebkitBackgroundClip: "text",
                    WebkitTextFillColor: "transparent",
                    animation: "shimmer 3s linear infinite"
                },
                children: [
                    count,
                    suffix
                ]
            }, void 0, true, {
                fileName: "[project]/components/VibeCirclePages.jsx",
                lineNumber: 564,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                style: {
                    fontFamily: "'DM Sans',sans-serif",
                    fontSize: "11px",
                    letterSpacing: "2px",
                    textTransform: "uppercase",
                    color: C.dim,
                    marginTop: "8px"
                },
                children: label
            }, void 0, false, {
                fileName: "[project]/components/VibeCirclePages.jsx",
                lineNumber: 565,
                columnNumber: 7
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/components/VibeCirclePages.jsx",
        lineNumber: 563,
        columnNumber: 5
    }, this);
}
function AboutPage({ openWaitlist }) {
    const [sRef, sInView] = useInView(.3);
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        style: {
            background: C.bg,
            color: C.white
        },
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(PageHero, {
                tag: "About VibeCircle",
                title: "We build infrastructure",
                accent: "for modern city culture.",
                sub: "Not just online conversations --- offline moments. From campus pop-ups to club nights."
            }, void 0, false, {
                fileName: "[project]/components/VibeCirclePages.jsx",
                lineNumber: 573,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(Divider, {}, void 0, false, {
                fileName: "[project]/components/VibeCirclePages.jsx",
                lineNumber: 574,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("section", {
                className: "sec-pad",
                style: {
                    background: C.bg2
                },
                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    style: {
                        maxWidth: "1100px",
                        margin: "0 auto"
                    },
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(Reveal, {
                            style: {
                                marginBottom: "52px"
                            },
                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(Tag, {
                                children: "By the numbers"
                            }, void 0, false, {
                                fileName: "[project]/components/VibeCirclePages.jsx",
                                lineNumber: 575,
                                columnNumber: 150
                            }, this)
                        }, void 0, false, {
                            fileName: "[project]/components/VibeCirclePages.jsx",
                            lineNumber: 575,
                            columnNumber: 112
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            ref: sRef,
                            className: "grid-4",
                            children: STATS.map((s, i)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(StatCard, {
                                    ...s,
                                    active: sInView
                                }, i, false, {
                                    fileName: "[project]/components/VibeCirclePages.jsx",
                                    lineNumber: 575,
                                    columnNumber: 237
                                }, this))
                        }, void 0, false, {
                            fileName: "[project]/components/VibeCirclePages.jsx",
                            lineNumber: 575,
                            columnNumber: 184
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "[project]/components/VibeCirclePages.jsx",
                    lineNumber: 575,
                    columnNumber: 63
                }, this)
            }, void 0, false, {
                fileName: "[project]/components/VibeCirclePages.jsx",
                lineNumber: 575,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(Divider, {}, void 0, false, {
                fileName: "[project]/components/VibeCirclePages.jsx",
                lineNumber: 576,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("section", {
                className: "sec-pad",
                style: {
                    position: "relative",
                    overflow: "hidden"
                },
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(Orb, {
                        top: "20%",
                        left: "-8%",
                        size: 400,
                        opacity: 0.09
                    }, void 0, false, {
                        fileName: "[project]/components/VibeCirclePages.jsx",
                        lineNumber: 577,
                        columnNumber: 84
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        style: {
                            maxWidth: "1100px",
                            margin: "0 auto"
                        },
                        className: "grid-2",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(Reveal, {
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(Tag, {
                                            children: "Mission"
                                        }, void 0, false, {
                                            fileName: "[project]/components/VibeCirclePages.jsx",
                                            lineNumber: 577,
                                            columnNumber: 218
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("h2", {
                                            style: {
                                                fontFamily: "'Bebas Neue',sans-serif",
                                                fontSize: "clamp(30px,4vw,48px)",
                                                color: C.white,
                                                lineHeight: 1.05,
                                                margin: "16px 0 18px"
                                            },
                                            children: [
                                                "Turn digital energy into",
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("br", {}, void 0, false, {
                                                    fileName: "[project]/components/VibeCirclePages.jsx",
                                                    lineNumber: 577,
                                                    columnNumber: 394
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                    style: {
                                                        color: C.orange
                                                    },
                                                    children: "real-world connection."
                                                }, void 0, false, {
                                                    fileName: "[project]/components/VibeCirclePages.jsx",
                                                    lineNumber: 577,
                                                    columnNumber: 399
                                                }, this)
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/components/VibeCirclePages.jsx",
                                            lineNumber: 577,
                                            columnNumber: 236
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                            style: {
                                                fontFamily: "'DM Sans',sans-serif",
                                                fontSize: "16px",
                                                color: C.dim,
                                                lineHeight: 1.8
                                            },
                                            children: "VibeCircle connects people not just by what they post --- but by where they are, what they love, and what's happening right now."
                                        }, void 0, false, {
                                            fileName: "[project]/components/VibeCirclePages.jsx",
                                            lineNumber: 577,
                                            columnNumber: 464
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/components/VibeCirclePages.jsx",
                                    lineNumber: 577,
                                    columnNumber: 210
                                }, this)
                            }, void 0, false, {
                                fileName: "[project]/components/VibeCirclePages.jsx",
                                lineNumber: 577,
                                columnNumber: 205
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(Reveal, {
                                    delay: .15,
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(Tag, {
                                            children: "Vision"
                                        }, void 0, false, {
                                            fileName: "[project]/components/VibeCirclePages.jsx",
                                            lineNumber: 577,
                                            columnNumber: 726
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("h2", {
                                            style: {
                                                fontFamily: "'Bebas Neue',sans-serif",
                                                fontSize: "clamp(30px,4vw,48px)",
                                                color: C.white,
                                                lineHeight: 1.05,
                                                margin: "16px 0 18px"
                                            },
                                            children: [
                                                "A world where every city has",
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("br", {}, void 0, false, {
                                                    fileName: "[project]/components/VibeCirclePages.jsx",
                                                    lineNumber: 577,
                                                    columnNumber: 905
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                    style: {
                                                        color: C.orange
                                                    },
                                                    children: "a visible heartbeat."
                                                }, void 0, false, {
                                                    fileName: "[project]/components/VibeCirclePages.jsx",
                                                    lineNumber: 577,
                                                    columnNumber: 910
                                                }, this)
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/components/VibeCirclePages.jsx",
                                            lineNumber: 577,
                                            columnNumber: 743
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                            style: {
                                                fontFamily: "'DM Sans',sans-serif",
                                                fontSize: "16px",
                                                color: C.dim,
                                                lineHeight: 1.8
                                            },
                                            children: "We're building the living map of culture --- the layer on top of the city that shows you where energy actually lives."
                                        }, void 0, false, {
                                            fileName: "[project]/components/VibeCirclePages.jsx",
                                            lineNumber: 577,
                                            columnNumber: 973
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/components/VibeCirclePages.jsx",
                                    lineNumber: 577,
                                    columnNumber: 706
                                }, this)
                            }, void 0, false, {
                                fileName: "[project]/components/VibeCirclePages.jsx",
                                lineNumber: 577,
                                columnNumber: 701
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/components/VibeCirclePages.jsx",
                        lineNumber: 577,
                        columnNumber: 137
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/components/VibeCirclePages.jsx",
                lineNumber: 577,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(Divider, {}, void 0, false, {
                fileName: "[project]/components/VibeCirclePages.jsx",
                lineNumber: 578,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("section", {
                className: "sec-pad",
                style: {
                    background: C.bg2
                },
                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    style: {
                        maxWidth: "1000px",
                        margin: "0 auto"
                    },
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(Reveal, {
                            style: {
                                marginBottom: "44px"
                            },
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(Tag, {
                                    children: "Manifesto"
                                }, void 0, false, {
                                    fileName: "[project]/components/VibeCirclePages.jsx",
                                    lineNumber: 579,
                                    columnNumber: 150
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("h2", {
                                    style: {
                                        fontFamily: "'Bebas Neue',sans-serif",
                                        fontSize: "clamp(30px,5vw,56px)",
                                        color: C.white,
                                        marginTop: "16px",
                                        lineHeight: 1
                                    },
                                    children: [
                                        "We ",
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                            style: {
                                                color: C.orange
                                            },
                                            children: "believe"
                                        }, void 0, false, {
                                            fileName: "[project]/components/VibeCirclePages.jsx",
                                            lineNumber: 579,
                                            columnNumber: 300
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/components/VibeCirclePages.jsx",
                                    lineNumber: 579,
                                    columnNumber: 170
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "[project]/components/VibeCirclePages.jsx",
                            lineNumber: 579,
                            columnNumber: 112
                        }, this),
                        MANIFESTO.map((line, i)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(Reveal, {
                                delay: i * .09,
                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    style: {
                                        display: "flex",
                                        alignItems: "center",
                                        gap: "24px",
                                        padding: "22px 0",
                                        borderBottom: "1px solid rgba(255,255,255,0.06)"
                                    },
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            style: {
                                                fontFamily: "'Bebas Neue',sans-serif",
                                                fontSize: "clamp(22px,3.5vw,42px)",
                                                color: C.white,
                                                flex: 1
                                            },
                                            children: line
                                        }, void 0, false, {
                                            fileName: "[project]/components/VibeCirclePages.jsx",
                                            lineNumber: 579,
                                            columnNumber: 540
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            style: {
                                                fontFamily: "'Bebas Neue',sans-serif",
                                                fontSize: "11px",
                                                letterSpacing: "3px",
                                                color: C.orange,
                                                opacity: .6
                                            },
                                            children: [
                                                "0",
                                                i + 1
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/components/VibeCirclePages.jsx",
                                            lineNumber: 579,
                                            columnNumber: 659
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/components/VibeCirclePages.jsx",
                                    lineNumber: 579,
                                    columnNumber: 414
                                }, this)
                            }, i, false, {
                                fileName: "[project]/components/VibeCirclePages.jsx",
                                lineNumber: 579,
                                columnNumber: 384
                            }, this))
                    ]
                }, void 0, true, {
                    fileName: "[project]/components/VibeCirclePages.jsx",
                    lineNumber: 579,
                    columnNumber: 63
                }, this)
            }, void 0, false, {
                fileName: "[project]/components/VibeCirclePages.jsx",
                lineNumber: 579,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(Divider, {}, void 0, false, {
                fileName: "[project]/components/VibeCirclePages.jsx",
                lineNumber: 580,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("section", {
                className: "sec-pad",
                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    style: {
                        maxWidth: "1100px",
                        margin: "0 auto"
                    },
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(Reveal, {
                            style: {
                                marginBottom: "48px"
                            },
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(Tag, {
                                    children: "Community voices"
                                }, void 0, false, {
                                    fileName: "[project]/components/VibeCirclePages.jsx",
                                    lineNumber: 581,
                                    columnNumber: 123
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("h2", {
                                    style: {
                                        fontFamily: "'Bebas Neue',sans-serif",
                                        fontSize: "clamp(28px,4vw,52px)",
                                        color: C.white,
                                        lineHeight: 1,
                                        marginTop: "16px"
                                    },
                                    children: [
                                        "Don't take our word ",
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                            style: {
                                                color: C.orange
                                            },
                                            children: "for it."
                                        }, void 0, false, {
                                            fileName: "[project]/components/VibeCirclePages.jsx",
                                            lineNumber: 581,
                                            columnNumber: 297
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/components/VibeCirclePages.jsx",
                                    lineNumber: 581,
                                    columnNumber: 150
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "[project]/components/VibeCirclePages.jsx",
                            lineNumber: 581,
                            columnNumber: 85
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "grid-4",
                            children: TESTIMONIALS.map((t, i)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(Reveal, {
                                    delay: i * .1,
                                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(TestimonialCard, {
                                        ...t
                                    }, void 0, false, {
                                        fileName: "[project]/components/VibeCirclePages.jsx",
                                        lineNumber: 581,
                                        columnNumber: 434
                                    }, this)
                                }, i, false, {
                                    fileName: "[project]/components/VibeCirclePages.jsx",
                                    lineNumber: 581,
                                    columnNumber: 405
                                }, this))
                        }, void 0, false, {
                            fileName: "[project]/components/VibeCirclePages.jsx",
                            lineNumber: 581,
                            columnNumber: 356
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "[project]/components/VibeCirclePages.jsx",
                    lineNumber: 581,
                    columnNumber: 36
                }, this)
            }, void 0, false, {
                fileName: "[project]/components/VibeCirclePages.jsx",
                lineNumber: 581,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(Divider, {}, void 0, false, {
                fileName: "[project]/components/VibeCirclePages.jsx",
                lineNumber: 582,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("section", {
                className: "sec-pad",
                style: {
                    background: C.bg2,
                    position: "relative",
                    overflow: "hidden"
                },
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(Orb, {
                        bottom: "-20%",
                        right: "-5%",
                        size: 500,
                        color: C.pink,
                        opacity: 0.08,
                        delay: "2s"
                    }, void 0, false, {
                        fileName: "[project]/components/VibeCirclePages.jsx",
                        lineNumber: 583,
                        columnNumber: 101
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        style: {
                            maxWidth: "780px",
                            margin: "0 auto",
                            position: "relative"
                        },
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(Reveal, {
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(Tag, {
                                        children: "Founder's Story"
                                    }, void 0, false, {
                                        fileName: "[project]/components/VibeCirclePages.jsx",
                                        lineNumber: 583,
                                        columnNumber: 261
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("h2", {
                                        style: {
                                            fontFamily: "'Bebas Neue',sans-serif",
                                            fontSize: "clamp(30px,5vw,56px)",
                                            color: C.white,
                                            lineHeight: 1,
                                            margin: "16px 0 36px"
                                        },
                                        children: [
                                            "What if maps",
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("br", {}, void 0, false, {
                                                fileName: "[project]/components/VibeCirclePages.jsx",
                                                lineNumber: 583,
                                                columnNumber: 430
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                style: {
                                                    color: C.orange
                                                },
                                                children: "were alive?"
                                            }, void 0, false, {
                                                fileName: "[project]/components/VibeCirclePages.jsx",
                                                lineNumber: 583,
                                                columnNumber: 435
                                            }, this)
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/components/VibeCirclePages.jsx",
                                        lineNumber: 583,
                                        columnNumber: 287
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/components/VibeCirclePages.jsx",
                                lineNumber: 583,
                                columnNumber: 253
                            }, this),
                            [
                                "VibeCircle started with a simple realization: social media shows opinions --- but not what's happening around you.",
                                "Scrolling felt endless. Cities felt invisible. Events felt disconnected.",
                                "So we imagined something different. What if social media had a pulse? What if creators could light up a city?",
                                "VibeCircle was built to connect digital expression to physical reality. We're not chasing trends. We're building infrastructure for culture."
                            ].map((p, i)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(Reveal, {
                                    delay: i * .1,
                                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                        style: {
                                            fontFamily: "'DM Sans',sans-serif",
                                            fontSize: i === 1 ? "20px" : "17px",
                                            fontStyle: i === 1 ? "italic" : "normal",
                                            color: i === 0 ? "rgba(255,255,255,0.8)" : C.dim,
                                            lineHeight: 1.8,
                                            marginBottom: "18px"
                                        },
                                        children: p
                                    }, void 0, false, {
                                        fileName: "[project]/components/VibeCirclePages.jsx",
                                        lineNumber: 583,
                                        columnNumber: 988
                                    }, this)
                                }, i, false, {
                                    fileName: "[project]/components/VibeCirclePages.jsx",
                                    lineNumber: 583,
                                    columnNumber: 959
                                }, this))
                        ]
                    }, void 0, true, {
                        fileName: "[project]/components/VibeCirclePages.jsx",
                        lineNumber: 583,
                        columnNumber: 185
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/components/VibeCirclePages.jsx",
                lineNumber: 583,
                columnNumber: 7
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/components/VibeCirclePages.jsx",
        lineNumber: 572,
        columnNumber: 5
    }, this);
}
// ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------
// TEAM PAGE
// ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------
const TEAM = [
    {
        name: "Marcus Webb",
        role: "CEO & Co-Founder",
        dept: "Leadership",
        emoji: "----",
        quote: "We're not building an app. We're building the infrastructure for how cities feel alive.",
        bio: "Former urban planner turned tech founder. Marcus spent 8 years mapping city culture before deciding maps should move in real time.",
        color: C.orange
    },
    {
        name: "Layla Chen",
        role: "CTO & Co-Founder",
        dept: "Engineering",
        emoji: "------",
        quote: "The hardest technical problems are always the most human ones.",
        bio: "Ex-Google Maps engineer. Layla designed the real-time geo-layer that powers VibeCircle's living map system.",
        color: C.blue
    },
    {
        name: "Devon Price",
        role: "Head of Design",
        dept: "Design",
        emoji: "----",
        quote: "If the design doesn't make you feel something, we start over.",
        bio: "Previously led design at Spotify and Snap. Devon's philosophy: every pixel should have a pulse.",
        color: C.pink
    },
    {
        name: "Amara Osei",
        role: "Head of Creator Partnerships",
        dept: "Creators",
        emoji: "---",
        quote: "Creators aren't users. They're the energy source. Treat them like it.",
        bio: "Built creator programs at TikTok and YouTube. Amara signed VibeCircle's first 10,000 creators in 90 days.",
        color: C.gold
    },
    {
        name: "Rishi Kapoor",
        role: "Head of Growth",
        dept: "Growth",
        emoji: "----",
        quote: "Growth that doesn't compound isn't growth. It's just noise.",
        bio: "3x YC startup growth lead. Rishi built the ambassador network that took VibeCircle to 50 cities in one semester.",
        color: C.purple
    },
    {
        name: "Sofia Reyes",
        role: "Head of Business Dev",
        dept: "Business",
        emoji: "----",
        quote: "Every brand has a vibe. Our job is to help them find it and amplify it.",
        bio: "Ex-Salesforce enterprise sales, now building the business ecosystem that funds VibeCircle's creator economy.",
        color: C.orange
    }
];
function TeamPage({ openWaitlist, setPage }) {
    const [active, setActive] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])(null);
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        style: {
            background: C.bg,
            color: C.white
        },
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(PageHero, {
                tag: "The Team",
                title: "Meet the builders",
                accent: "of the vibe.",
                sub: "Developers, designers, strategists, creatives --- building a living ecosystem, not just an app."
            }, void 0, false, {
                fileName: "[project]/components/VibeCirclePages.jsx",
                lineNumber: 603,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(Divider, {}, void 0, false, {
                fileName: "[project]/components/VibeCirclePages.jsx",
                lineNumber: 604,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("section", {
                className: "sec-pad",
                style: {
                    background: C.bg2
                },
                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    style: {
                        maxWidth: "1100px",
                        margin: "0 auto"
                    },
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(Reveal, {
                            style: {
                                marginBottom: "52px"
                            },
                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(Tag, {
                                children: "Core Team"
                            }, void 0, false, {
                                fileName: "[project]/components/VibeCirclePages.jsx",
                                lineNumber: 605,
                                columnNumber: 150
                            }, this)
                        }, void 0, false, {
                            fileName: "[project]/components/VibeCirclePages.jsx",
                            lineNumber: 605,
                            columnNumber: 112
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "grid-3",
                            style: {
                                gap: "18px"
                            },
                            children: TEAM.map((m, i)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(Reveal, {
                                    delay: i * .08,
                                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        onClick: ()=>setActive(active === i ? null : i),
                                        style: {
                                            padding: "30px 26px",
                                            background: active === i ? `${m.color}0A` : "rgba(255,255,255,0.02)",
                                            border: `1px solid ${active === i ? m.color + "50" : "rgba(255,255,255,0.07)"}`,
                                            borderRadius: "4px",
                                            cursor: "pointer",
                                            transition: "all .3s",
                                            height: "100%"
                                        },
                                        onMouseEnter: (e)=>{
                                            if (active !== i) {
                                                e.currentTarget.style.borderColor = m.color + "30";
                                                e.currentTarget.style.background = `${m.color}05`;
                                            }
                                        },
                                        onMouseLeave: (e)=>{
                                            if (active !== i) {
                                                e.currentTarget.style.borderColor = "rgba(255,255,255,0.07)";
                                                e.currentTarget.style.background = "rgba(255,255,255,0.02)";
                                            }
                                        },
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                style: {
                                                    display: "flex",
                                                    alignItems: "center",
                                                    gap: "14px",
                                                    marginBottom: "14px"
                                                },
                                                children: [
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                        style: {
                                                            width: "48px",
                                                            height: "48px",
                                                            borderRadius: "50%",
                                                            background: `${m.color}20`,
                                                            border: `2px solid ${m.color}40`,
                                                            display: "flex",
                                                            alignItems: "center",
                                                            justifyContent: "center",
                                                            fontSize: "21px",
                                                            flexShrink: 0
                                                        },
                                                        children: m.emoji
                                                    }, void 0, false, {
                                                        fileName: "[project]/components/VibeCirclePages.jsx",
                                                        lineNumber: 605,
                                                        columnNumber: 920
                                                    }, this),
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                        children: [
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                                style: {
                                                                    fontFamily: "'DM Sans',sans-serif",
                                                                    fontSize: "15px",
                                                                    fontWeight: 600,
                                                                    color: C.white
                                                                },
                                                                children: m.name
                                                            }, void 0, false, {
                                                                fileName: "[project]/components/VibeCirclePages.jsx",
                                                                lineNumber: 605,
                                                                columnNumber: 1147
                                                            }, this),
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                                style: {
                                                                    fontFamily: "'DM Sans',sans-serif",
                                                                    fontSize: "11px",
                                                                    color: m.color,
                                                                    marginTop: "2px"
                                                                },
                                                                children: m.role
                                                            }, void 0, false, {
                                                                fileName: "[project]/components/VibeCirclePages.jsx",
                                                                lineNumber: 605,
                                                                columnNumber: 1255
                                                            }, this)
                                                        ]
                                                    }, void 0, true, {
                                                        fileName: "[project]/components/VibeCirclePages.jsx",
                                                        lineNumber: 605,
                                                        columnNumber: 1142
                                                    }, this)
                                                ]
                                            }, void 0, true, {
                                                fileName: "[project]/components/VibeCirclePages.jsx",
                                                lineNumber: 605,
                                                columnNumber: 839
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                style: {
                                                    fontFamily: "'DM Sans',sans-serif",
                                                    fontSize: "13px",
                                                    fontStyle: "italic",
                                                    color: "rgba(255,255,255,.5)",
                                                    lineHeight: 1.7,
                                                    marginBottom: active === i ? "14px" : "0"
                                                },
                                                children: [
                                                    '"',
                                                    m.quote,
                                                    '"'
                                                ]
                                            }, void 0, true, {
                                                fileName: "[project]/components/VibeCirclePages.jsx",
                                                lineNumber: 605,
                                                columnNumber: 1376
                                            }, this),
                                            active === i && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                style: {
                                                    animation: "fadeUp .3s ease"
                                                },
                                                children: [
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                        style: {
                                                            height: "1px",
                                                            background: `${m.color}30`,
                                                            margin: "14px 0"
                                                        }
                                                    }, void 0, false, {
                                                        fileName: "[project]/components/VibeCirclePages.jsx",
                                                        lineNumber: 605,
                                                        columnNumber: 1608
                                                    }, this),
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                        style: {
                                                            fontFamily: "'DM Sans',sans-serif",
                                                            fontSize: "13px",
                                                            color: C.dim,
                                                            lineHeight: 1.7
                                                        },
                                                        children: m.bio
                                                    }, void 0, false, {
                                                        fileName: "[project]/components/VibeCirclePages.jsx",
                                                        lineNumber: 605,
                                                        columnNumber: 1679
                                                    }, this)
                                                ]
                                            }, void 0, true, {
                                                fileName: "[project]/components/VibeCirclePages.jsx",
                                                lineNumber: 605,
                                                columnNumber: 1565
                                            }, this)
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/components/VibeCirclePages.jsx",
                                        lineNumber: 605,
                                        columnNumber: 271
                                    }, this)
                                }, i, false, {
                                    fileName: "[project]/components/VibeCirclePages.jsx",
                                    lineNumber: 605,
                                    columnNumber: 241
                                }, this))
                        }, void 0, false, {
                            fileName: "[project]/components/VibeCirclePages.jsx",
                            lineNumber: 605,
                            columnNumber: 179
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "[project]/components/VibeCirclePages.jsx",
                    lineNumber: 605,
                    columnNumber: 63
                }, this)
            }, void 0, false, {
                fileName: "[project]/components/VibeCirclePages.jsx",
                lineNumber: 605,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(Divider, {}, void 0, false, {
                fileName: "[project]/components/VibeCirclePages.jsx",
                lineNumber: 606,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("section", {
                className: "sec-pad",
                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    style: {
                        maxWidth: "1100px",
                        margin: "0 auto"
                    },
                    className: "grid-2",
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(Reveal, {
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(Tag, {
                                        children: "How we work"
                                    }, void 0, false, {
                                        fileName: "[project]/components/VibeCirclePages.jsx",
                                        lineNumber: 607,
                                        columnNumber: 117
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("h2", {
                                        style: {
                                            fontFamily: "'Bebas Neue',sans-serif",
                                            fontSize: "clamp(30px,5vw,52px)",
                                            color: C.white,
                                            lineHeight: 1,
                                            margin: "16px 0 20px"
                                        },
                                        children: [
                                            "Culture isn't built in",
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("br", {}, void 0, false, {
                                                fileName: "[project]/components/VibeCirclePages.jsx",
                                                lineNumber: 607,
                                                columnNumber: 292
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                style: {
                                                    color: C.orange
                                                },
                                                children: "conference rooms."
                                            }, void 0, false, {
                                                fileName: "[project]/components/VibeCirclePages.jsx",
                                                lineNumber: 607,
                                                columnNumber: 297
                                            }, this)
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/components/VibeCirclePages.jsx",
                                        lineNumber: 607,
                                        columnNumber: 139
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                        style: {
                                            fontFamily: "'DM Sans',sans-serif",
                                            fontSize: "16px",
                                            color: C.dim,
                                            lineHeight: 1.8
                                        },
                                        children: "We work embedded in cities. We ship fast. We talk to creators and businesses every day. We build what we'd actually want to use."
                                    }, void 0, false, {
                                        fileName: "[project]/components/VibeCirclePages.jsx",
                                        lineNumber: 607,
                                        columnNumber: 357
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/components/VibeCirclePages.jsx",
                                lineNumber: 607,
                                columnNumber: 109
                            }, this)
                        }, void 0, false, {
                            fileName: "[project]/components/VibeCirclePages.jsx",
                            lineNumber: 607,
                            columnNumber: 104
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            style: {
                                display: "flex",
                                flexDirection: "column",
                                gap: "10px"
                            },
                            children: [
                                [
                                    "----",
                                    "Remote-first",
                                    "Work from the cities you're building for."
                                ],
                                [
                                    "---",
                                    "Ship weekly",
                                    "Real output, real feedback, real iteration."
                                ],
                                [
                                    "----",
                                    "Direct impact",
                                    "No layers. Your work ships to 50K+ users."
                                ],
                                [
                                    "----",
                                    "Equity for all",
                                    "Every full-time employee is an owner."
                                ]
                            ].map(([ic, t, d], i)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(Reveal, {
                                    delay: i * .08,
                                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        style: {
                                            display: "flex",
                                            gap: "14px",
                                            alignItems: "flex-start",
                                            padding: "18px 22px",
                                            background: "rgba(255,255,255,0.02)",
                                            border: "1px solid rgba(255,255,255,0.07)",
                                            borderRadius: "4px",
                                            transition: "all .3s"
                                        },
                                        onMouseEnter: (e)=>{
                                            e.currentTarget.style.borderColor = C.orange;
                                            e.currentTarget.style.background = "rgba(255,107,0,0.06)";
                                        },
                                        onMouseLeave: (e)=>{
                                            e.currentTarget.style.borderColor = "rgba(255,255,255,0.07)";
                                            e.currentTarget.style.background = "rgba(255,255,255,0.02)";
                                        },
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                style: {
                                                    fontSize: "18px"
                                                },
                                                children: ic
                                            }, void 0, false, {
                                                fileName: "[project]/components/VibeCirclePages.jsx",
                                                lineNumber: 607,
                                                columnNumber: 1441
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                children: [
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                        style: {
                                                            fontFamily: "'Bebas Neue',sans-serif",
                                                            fontSize: "16px",
                                                            color: C.white
                                                        },
                                                        children: t
                                                    }, void 0, false, {
                                                        fileName: "[project]/components/VibeCirclePages.jsx",
                                                        lineNumber: 607,
                                                        columnNumber: 1489
                                                    }, this),
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                        style: {
                                                            fontFamily: "'DM Sans',sans-serif",
                                                            fontSize: "12px",
                                                            color: C.dim,
                                                            marginTop: "3px"
                                                        },
                                                        children: d
                                                    }, void 0, false, {
                                                        fileName: "[project]/components/VibeCirclePages.jsx",
                                                        lineNumber: 607,
                                                        columnNumber: 1580
                                                    }, this)
                                                ]
                                            }, void 0, true, {
                                                fileName: "[project]/components/VibeCirclePages.jsx",
                                                lineNumber: 607,
                                                columnNumber: 1484
                                            }, this)
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/components/VibeCirclePages.jsx",
                                        lineNumber: 607,
                                        columnNumber: 980
                                    }, this)
                                }, i, false, {
                                    fileName: "[project]/components/VibeCirclePages.jsx",
                                    lineNumber: 607,
                                    columnNumber: 950
                                }, this))
                        }, void 0, false, {
                            fileName: "[project]/components/VibeCirclePages.jsx",
                            lineNumber: 607,
                            columnNumber: 594
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "[project]/components/VibeCirclePages.jsx",
                    lineNumber: 607,
                    columnNumber: 36
                }, this)
            }, void 0, false, {
                fileName: "[project]/components/VibeCirclePages.jsx",
                lineNumber: 607,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(Divider, {}, void 0, false, {
                fileName: "[project]/components/VibeCirclePages.jsx",
                lineNumber: 608,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("section", {
                className: "sec-pad-sm",
                style: {
                    background: C.bg2,
                    textAlign: "center"
                },
                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(Reveal, {
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(Tag, {
                            children: "Join us"
                        }, void 0, false, {
                            fileName: "[project]/components/VibeCirclePages.jsx",
                            lineNumber: 609,
                            columnNumber: 93
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("h2", {
                            style: {
                                fontFamily: "'Bebas Neue',sans-serif",
                                fontSize: "clamp(28px,5vw,52px)",
                                color: C.white,
                                lineHeight: 1,
                                margin: "16px auto 20px",
                                maxWidth: "500px"
                            },
                            children: [
                                "Want to be on this page?",
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("br", {}, void 0, false, {
                                    fileName: "[project]/components/VibeCirclePages.jsx",
                                    lineNumber: 609,
                                    columnNumber: 286
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                    style: {
                                        color: C.orange
                                    },
                                    children: "We're hiring."
                                }, void 0, false, {
                                    fileName: "[project]/components/VibeCirclePages.jsx",
                                    lineNumber: 609,
                                    columnNumber: 291
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "[project]/components/VibeCirclePages.jsx",
                            lineNumber: 609,
                            columnNumber: 111
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            style: {
                                display: "flex",
                                gap: "12px",
                                justifyContent: "center",
                                flexWrap: "wrap"
                            },
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                    onClick: ()=>{
                                        setPage("Jobs");
                                        window.scrollTo(0, 0);
                                    },
                                    style: {
                                        fontFamily: "'Bebas Neue',sans-serif",
                                        fontSize: "14px",
                                        letterSpacing: "3px",
                                        padding: "13px 32px",
                                        background: C.orange,
                                        color: C.bg,
                                        border: "none",
                                        borderRadius: "2px",
                                        cursor: "pointer"
                                    },
                                    children: "See Open Roles"
                                }, void 0, false, {
                                    fileName: "[project]/components/VibeCirclePages.jsx",
                                    lineNumber: 609,
                                    columnNumber: 428
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                    onClick: ()=>openWaitlist("Team Interest"),
                                    style: {
                                        fontFamily: "'Bebas Neue',sans-serif",
                                        fontSize: "14px",
                                        letterSpacing: "3px",
                                        padding: "13px 32px",
                                        background: "transparent",
                                        color: C.white,
                                        border: "1px solid rgba(255,255,255,0.2)",
                                        borderRadius: "2px",
                                        cursor: "pointer",
                                        transition: "all .2s"
                                    },
                                    onMouseEnter: (e)=>{
                                        e.currentTarget.style.borderColor = C.orange;
                                        e.currentTarget.style.color = C.orange;
                                    },
                                    onMouseLeave: (e)=>{
                                        e.currentTarget.style.borderColor = "rgba(255,255,255,0.2)";
                                        e.currentTarget.style.color = C.white;
                                    },
                                    children: "Join Waitlist"
                                }, void 0, false, {
                                    fileName: "[project]/components/VibeCirclePages.jsx",
                                    lineNumber: 609,
                                    columnNumber: 697
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "[project]/components/VibeCirclePages.jsx",
                            lineNumber: 609,
                            columnNumber: 347
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "[project]/components/VibeCirclePages.jsx",
                    lineNumber: 609,
                    columnNumber: 85
                }, this)
            }, void 0, false, {
                fileName: "[project]/components/VibeCirclePages.jsx",
                lineNumber: 609,
                columnNumber: 7
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/components/VibeCirclePages.jsx",
        lineNumber: 602,
        columnNumber: 5
    }, this);
}
// ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------
// CREATORS PAGE
// ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------
const CREATOR_TOOLS = [
    {
        icon: "-------",
        title: "Live City Map",
        desc: "Your content appears on the real-time map of your city. People discover you by location, not algorithm."
    },
    {
        icon: "---",
        title: "Creator Feed",
        desc: "A social feed that prioritizes creators in your city and culture niche. Built for discovery, not addiction."
    },
    {
        icon: "-------",
        title: "Go Live Anywhere",
        desc: "Stream from any location. Your live appears on the map for nearby users to join in real time."
    },
    {
        icon: "----",
        title: "Brand Marketplace",
        desc: "Browse and apply to paid brand deals directly. No middlemen, no agencies."
    },
    {
        icon: "----",
        title: "Creator Analytics",
        desc: "Real metrics: map views, discovery impressions, location reach, and audience growth over time."
    },
    {
        icon: "----",
        title: "Community Spaces",
        desc: "Create invite-only groups around your city scene, niche, or next event."
    }
];
const CREATOR_TIERS = [
    {
        plan: "SPARK",
        price: "Free",
        period: "",
        desc: "Get on the map and start building your local following.",
        features: [
            "Live city map presence",
            "Basic creator profile",
            "Up to 3 posts/day",
            "Community access",
            "Basic analytics"
        ],
        cta: "Start Free",
        highlight: false,
        color: C.orange
    },
    {
        plan: "PULSE",
        price: "R99",
        annualPrice: "R79",
        desc: "The full creator toolkit for creators ready to grow and earn.",
        features: [
            "Everything in Spark",
            "Unlimited posting",
            "Priority map placement",
            "Brand Marketplace access",
            "Advanced analytics",
            "Go Live feature",
            "Verified creator badge"
        ],
        cta: "Start Free Trial",
        highlight: true,
        color: C.orange
    },
    {
        plan: "ORBIT",
        price: "R249",
        annualPrice: "R199",
        desc: "For creators turning VibeCircle into a primary income stream.",
        features: [
            "Everything in Pulse",
            "Featured map spotlight (3x/month)",
            "Direct brand deal inbox",
            "Creator fund eligibility",
            "Collab invite tools",
            "Early feature access",
            "Dedicated creator support"
        ],
        cta: "Apply for Orbit",
        highlight: false,
        color: C.pink
    }
];
const CREATOR_FAQS = [
    {
        q: "How does the city map placement work?",
        a: "When you post content tagged to a location, it appears as a live pin on the VibeCircle map for users in that area. The map is real-time --- people nearby can discover you while they're actually in your city."
    },
    {
        q: "How do I get my first brand deal?",
        a: "On Pulse or Orbit, you gain access to the Brand Marketplace to browse live deals and apply directly. Brands typically respond within 48 hours. No follower minimum --- brands care about authenticity and city presence."
    },
    {
        q: "Is there a follower minimum to join?",
        a: "None. VibeCircle isn't about follower counts --- it's about city presence and energy. We've seen creators with 500 followers land brand deals because they own their local scene."
    },
    {
        q: "How does the Creator Fund work?",
        a: "Orbit creators are eligible for VibeCircle's Creator Fund, which pays based on verified map impressions, discovery reach, and engagement from real-world posts. Payouts are monthly."
    },
    {
        q: "Can I use VibeCircle alongside Instagram or TikTok?",
        a: "Absolutely. VibeCircle is complementary, not competitive. Most creators cross-post content and use VC for local discovery and brand deals."
    }
];
function CreatorsPage({ openWaitlist }) {
    const [annual, setAnnual] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])(false);
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        style: {
            background: C.bg,
            color: C.white
        },
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(PageHero, {
                tag: "For Creators",
                title: "Your city is your",
                accent: "stage. Own it.",
                sub: "VibeCircle gives creators tools to build a real local following, get discovered on the live city map, and earn from brand partnerships."
            }, void 0, false, {
                fileName: "[project]/components/VibeCirclePages.jsx",
                lineNumber: 634,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(Divider, {}, void 0, false, {
                fileName: "[project]/components/VibeCirclePages.jsx",
                lineNumber: 635,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("section", {
                className: "sec-pad-sm",
                style: {
                    background: C.bg2
                },
                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    style: {
                        maxWidth: "1100px",
                        margin: "0 auto"
                    },
                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "grid-4",
                        children: [
                            [
                                "50K+",
                                "Active Creators"
                            ],
                            [
                                "R38M+",
                                "Creator Earnings"
                            ],
                            [
                                "3,200+",
                                "Brand Deals"
                            ],
                            [
                                "48hrs",
                                "Avg Deal Response"
                            ]
                        ].map(([v, l], i)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(Reveal, {
                                delay: i * .1,
                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    style: {
                                        padding: "26px",
                                        background: "rgba(255,107,0,0.04)",
                                        border: `1px solid ${C.border}`,
                                        borderRadius: "4px",
                                        textAlign: "center"
                                    },
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            style: {
                                                fontFamily: "'Bebas Neue',sans-serif",
                                                fontSize: "clamp(30px,4vw,46px)",
                                                color: C.orange,
                                                lineHeight: 1
                                            },
                                            children: v
                                        }, void 0, false, {
                                            fileName: "[project]/components/VibeCirclePages.jsx",
                                            lineNumber: 636,
                                            columnNumber: 430
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            style: {
                                                fontFamily: "'DM Sans',sans-serif",
                                                fontSize: "11px",
                                                letterSpacing: "1.5px",
                                                textTransform: "uppercase",
                                                color: C.dim,
                                                marginTop: "5px"
                                            },
                                            children: l
                                        }, void 0, false, {
                                            fileName: "[project]/components/VibeCirclePages.jsx",
                                            lineNumber: 636,
                                            columnNumber: 551
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/components/VibeCirclePages.jsx",
                                    lineNumber: 636,
                                    columnNumber: 297
                                }, this)
                            }, i, false, {
                                fileName: "[project]/components/VibeCirclePages.jsx",
                                lineNumber: 636,
                                columnNumber: 268
                            }, this))
                    }, void 0, false, {
                        fileName: "[project]/components/VibeCirclePages.jsx",
                        lineNumber: 636,
                        columnNumber: 115
                    }, this)
                }, void 0, false, {
                    fileName: "[project]/components/VibeCirclePages.jsx",
                    lineNumber: 636,
                    columnNumber: 66
                }, this)
            }, void 0, false, {
                fileName: "[project]/components/VibeCirclePages.jsx",
                lineNumber: 636,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(Divider, {}, void 0, false, {
                fileName: "[project]/components/VibeCirclePages.jsx",
                lineNumber: 637,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("section", {
                className: "sec-pad",
                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    style: {
                        maxWidth: "1100px",
                        margin: "0 auto"
                    },
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(Reveal, {
                            style: {
                                marginBottom: "52px"
                            },
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(Tag, {
                                    children: "Creator Tools"
                                }, void 0, false, {
                                    fileName: "[project]/components/VibeCirclePages.jsx",
                                    lineNumber: 638,
                                    columnNumber: 123
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("h2", {
                                    style: {
                                        fontFamily: "'Bebas Neue',sans-serif",
                                        fontSize: "clamp(30px,5vw,56px)",
                                        color: C.white,
                                        lineHeight: 1,
                                        marginTop: "16px"
                                    },
                                    children: [
                                        "Everything you need to",
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("br", {}, void 0, false, {
                                            fileName: "[project]/components/VibeCirclePages.jsx",
                                            lineNumber: 638,
                                            columnNumber: 296
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                            style: {
                                                color: C.orange
                                            },
                                            children: "light up your city."
                                        }, void 0, false, {
                                            fileName: "[project]/components/VibeCirclePages.jsx",
                                            lineNumber: 638,
                                            columnNumber: 301
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/components/VibeCirclePages.jsx",
                                    lineNumber: 638,
                                    columnNumber: 147
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "[project]/components/VibeCirclePages.jsx",
                            lineNumber: 638,
                            columnNumber: 85
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "grid-3",
                            children: CREATOR_TOOLS.map((t, i)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(Reveal, {
                                    delay: i * .08,
                                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        style: {
                                            padding: "30px 26px",
                                            background: "rgba(255,255,255,0.02)",
                                            border: "1px solid rgba(255,255,255,0.07)",
                                            borderRadius: "4px",
                                            height: "100%",
                                            transition: "all .3s"
                                        },
                                        onMouseEnter: (e)=>{
                                            e.currentTarget.style.borderColor = C.orange;
                                            e.currentTarget.style.background = "rgba(255,107,0,0.06)";
                                            e.currentTarget.style.transform = "translateY(-4px)";
                                        },
                                        onMouseLeave: (e)=>{
                                            e.currentTarget.style.borderColor = "rgba(255,255,255,0.07)";
                                            e.currentTarget.style.background = "rgba(255,255,255,0.02)";
                                            e.currentTarget.style.transform = "";
                                        },
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                style: {
                                                    fontSize: "24px",
                                                    marginBottom: "14px"
                                                },
                                                children: t.icon
                                            }, void 0, false, {
                                                fileName: "[project]/components/VibeCirclePages.jsx",
                                                lineNumber: 638,
                                                columnNumber: 963
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                style: {
                                                    fontFamily: "'Bebas Neue',sans-serif",
                                                    fontSize: "19px",
                                                    color: C.white,
                                                    marginBottom: "9px"
                                                },
                                                children: t.title
                                            }, void 0, false, {
                                                fileName: "[project]/components/VibeCirclePages.jsx",
                                                lineNumber: 638,
                                                columnNumber: 1028
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                style: {
                                                    fontFamily: "'DM Sans',sans-serif",
                                                    fontSize: "13px",
                                                    color: C.dim,
                                                    lineHeight: 1.7
                                                },
                                                children: t.desc
                                            }, void 0, false, {
                                                fileName: "[project]/components/VibeCirclePages.jsx",
                                                lineNumber: 638,
                                                columnNumber: 1144
                                            }, this)
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/components/VibeCirclePages.jsx",
                                        lineNumber: 638,
                                        columnNumber: 452
                                    }, this)
                                }, i, false, {
                                    fileName: "[project]/components/VibeCirclePages.jsx",
                                    lineNumber: 638,
                                    columnNumber: 422
                                }, this))
                        }, void 0, false, {
                            fileName: "[project]/components/VibeCirclePages.jsx",
                            lineNumber: 638,
                            columnNumber: 372
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "[project]/components/VibeCirclePages.jsx",
                    lineNumber: 638,
                    columnNumber: 36
                }, this)
            }, void 0, false, {
                fileName: "[project]/components/VibeCirclePages.jsx",
                lineNumber: 638,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(Divider, {}, void 0, false, {
                fileName: "[project]/components/VibeCirclePages.jsx",
                lineNumber: 639,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("section", {
                className: "sec-pad",
                style: {
                    background: C.bg2
                },
                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    style: {
                        maxWidth: "1100px",
                        margin: "0 auto"
                    },
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(Reveal, {
                            style: {
                                marginBottom: "16px",
                                textAlign: "center"
                            },
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(Tag, {
                                    children: "Creator Plans"
                                }, void 0, false, {
                                    fileName: "[project]/components/VibeCirclePages.jsx",
                                    lineNumber: 642,
                                    columnNumber: 68
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("h2", {
                                    style: {
                                        fontFamily: "'Bebas Neue',sans-serif",
                                        fontSize: "clamp(30px,5vw,56px)",
                                        color: C.white,
                                        lineHeight: 1,
                                        marginTop: "16px",
                                        marginBottom: "28px"
                                    },
                                    children: [
                                        "Start free. Scale ",
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                            style: {
                                                color: C.orange
                                            },
                                            children: "when ready."
                                        }, void 0, false, {
                                            fileName: "[project]/components/VibeCirclePages.jsx",
                                            lineNumber: 642,
                                            columnNumber: 257
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/components/VibeCirclePages.jsx",
                                    lineNumber: 642,
                                    columnNumber: 92
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "[project]/components/VibeCirclePages.jsx",
                            lineNumber: 642,
                            columnNumber: 11
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(Reveal, {
                            style: {
                                textAlign: "center",
                                marginBottom: "40px"
                            },
                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                style: {
                                    display: "inline-flex",
                                    background: "rgba(255,255,255,0.04)",
                                    border: "1px solid rgba(255,255,255,0.1)",
                                    borderRadius: "3px",
                                    padding: "4px"
                                },
                                children: [
                                    "Monthly",
                                    "Annual"
                                ].map((t)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                        onClick: ()=>setAnnual(t === "Annual"),
                                        style: {
                                            fontFamily: "'Bebas Neue',sans-serif",
                                            fontSize: "13px",
                                            letterSpacing: "2px",
                                            padding: "9px 24px",
                                            background: t === "Annual" === annual ? C.orange : "transparent",
                                            color: t === "Annual" === annual ? C.bg : C.dim,
                                            border: "none",
                                            borderRadius: "2px",
                                            cursor: "pointer",
                                            transition: "all .2s"
                                        },
                                        children: [
                                            t,
                                            t === "Annual" && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                style: {
                                                    fontSize: "10px",
                                                    marginLeft: "6px",
                                                    background: C.orange + "30",
                                                    color: C.orange,
                                                    padding: "2px 6px",
                                                    borderRadius: "2px"
                                                },
                                                children: "-20%"
                                            }, void 0, false, {
                                                fileName: "[project]/components/VibeCirclePages.jsx",
                                                lineNumber: 645,
                                                columnNumber: 396
                                            }, this)
                                        ]
                                    }, t, true, {
                                        fileName: "[project]/components/VibeCirclePages.jsx",
                                        lineNumber: 645,
                                        columnNumber: 44
                                    }, this))
                            }, void 0, false, {
                                fileName: "[project]/components/VibeCirclePages.jsx",
                                lineNumber: 644,
                                columnNumber: 13
                            }, this)
                        }, void 0, false, {
                            fileName: "[project]/components/VibeCirclePages.jsx",
                            lineNumber: 643,
                            columnNumber: 11
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "grid-3",
                            children: CREATOR_TIERS.map((t, i)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(PricingCard, {
                                    ...t,
                                    annual: annual,
                                    onCta: ()=>openWaitlist(`Creator ${t.plan} Plan`)
                                }, i, false, {
                                    fileName: "[project]/components/VibeCirclePages.jsx",
                                    lineNumber: 648,
                                    columnNumber: 61
                                }, this))
                        }, void 0, false, {
                            fileName: "[project]/components/VibeCirclePages.jsx",
                            lineNumber: 648,
                            columnNumber: 11
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(Reveal, {
                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                style: {
                                    fontFamily: "'DM Sans',sans-serif",
                                    fontSize: "12px",
                                    color: C.dimmer,
                                    textAlign: "center",
                                    marginTop: "24px"
                                },
                                children: "All plans include a 14-day free trial. No credit card required for Spark."
                            }, void 0, false, {
                                fileName: "[project]/components/VibeCirclePages.jsx",
                                lineNumber: 649,
                                columnNumber: 19
                            }, this)
                        }, void 0, false, {
                            fileName: "[project]/components/VibeCirclePages.jsx",
                            lineNumber: 649,
                            columnNumber: 11
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "[project]/components/VibeCirclePages.jsx",
                    lineNumber: 641,
                    columnNumber: 9
                }, this)
            }, void 0, false, {
                fileName: "[project]/components/VibeCirclePages.jsx",
                lineNumber: 640,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(Divider, {}, void 0, false, {
                fileName: "[project]/components/VibeCirclePages.jsx",
                lineNumber: 652,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("section", {
                className: "sec-pad",
                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    style: {
                        maxWidth: "800px",
                        margin: "0 auto"
                    },
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(Reveal, {
                            style: {
                                marginBottom: "44px"
                            },
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(Tag, {
                                    children: "Creator FAQ"
                                }, void 0, false, {
                                    fileName: "[project]/components/VibeCirclePages.jsx",
                                    lineNumber: 653,
                                    columnNumber: 122
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("h2", {
                                    style: {
                                        fontFamily: "'Bebas Neue',sans-serif",
                                        fontSize: "clamp(26px,4vw,46px)",
                                        color: C.white,
                                        lineHeight: 1,
                                        marginTop: "16px"
                                    },
                                    children: [
                                        "Questions, ",
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                            style: {
                                                color: C.orange
                                            },
                                            children: "answered."
                                        }, void 0, false, {
                                            fileName: "[project]/components/VibeCirclePages.jsx",
                                            lineNumber: 653,
                                            columnNumber: 282
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/components/VibeCirclePages.jsx",
                                    lineNumber: 653,
                                    columnNumber: 144
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "[project]/components/VibeCirclePages.jsx",
                            lineNumber: 653,
                            columnNumber: 84
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(FAQ, {
                            items: CREATOR_FAQS
                        }, void 0, false, {
                            fileName: "[project]/components/VibeCirclePages.jsx",
                            lineNumber: 653,
                            columnNumber: 343
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "[project]/components/VibeCirclePages.jsx",
                    lineNumber: 653,
                    columnNumber: 36
                }, this)
            }, void 0, false, {
                fileName: "[project]/components/VibeCirclePages.jsx",
                lineNumber: 653,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                style: {
                    background: C.orange,
                    padding: "22px 64px",
                    overflow: "hidden"
                },
                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    style: {
                        display: "flex",
                        animation: "marquee 18s linear infinite",
                        whiteSpace: "nowrap"
                    },
                    children: [
                        ...Array(4)
                    ].map((_, x)=>[
                            "City Map",
                            "--",
                            "Brand Deals",
                            "--",
                            "Go Live",
                            "--",
                            "Creator Fund",
                            "--",
                            "Real Discovery",
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
                                fileName: "[project]/components/VibeCirclePages.jsx",
                                lineNumber: 654,
                                columnNumber: 302
                            }, this)))
                }, void 0, false, {
                    fileName: "[project]/components/VibeCirclePages.jsx",
                    lineNumber: 654,
                    columnNumber: 80
                }, this)
            }, void 0, false, {
                fileName: "[project]/components/VibeCirclePages.jsx",
                lineNumber: 654,
                columnNumber: 7
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/components/VibeCirclePages.jsx",
        lineNumber: 633,
        columnNumber: 5
    }, this);
}
// ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------
// ADVERTISE PAGE  (condensed, same as before but wired)
// ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------
const AD_FEATURES = [
    {
        icon: "----",
        title: "Geo-Targeted Campaigns",
        desc: "Reach people physically near your location. Pinpoint precision, zero waste.",
        color: C.orange
    },
    {
        icon: "---",
        title: "Sponsor Creator Moments",
        desc: "Embed your brand inside cultural moments --- not beside them.",
        color: C.pink
    },
    {
        icon: "-------",
        title: "Event Promotion",
        desc: "Put your event on the live map. Watch RSVPs grow as your pin pulses.",
        color: C.blue
    },
    {
        icon: "----",
        title: "Boost Local Visibility",
        desc: "Climb the discovery feed for your neighborhood. Be impossible to miss.",
        color: C.orange
    },
    {
        icon: "----",
        title: "Live Experience Ads",
        desc: "Promote while the experience is happening. Capture FOMO at its peak.",
        color: C.pink
    },
    {
        icon: "----",
        title: "Real-Time Analytics",
        desc: "Track impressions, foot traffic, and engagement as they happen.",
        color: C.blue
    }
];
const AD_PRICING = [
    {
        plan: "LOCAL",
        price: "R2,999",
        desc: "For single-location businesses starting their VibeCircle presence.",
        features: [
            "1 active geo-campaign",
            "Up to 5,000 daily impressions",
            "City map pin placement",
            "Event promotion (2/month)",
            "Basic analytics"
        ],
        cta: "Start Local",
        highlight: false,
        color: C.orange
    },
    {
        plan: "GROWTH",
        price: "R7,999",
        desc: "For businesses ready to own their neighborhood.",
        features: [
            "5 simultaneous campaigns",
            "Up to 25,000 daily impressions",
            "Priority map placement",
            "Creator sponsorship tools",
            "Unlimited events",
            "Advanced analytics + heat maps",
            "A/B creative testing"
        ],
        cta: "Start Free Trial",
        highlight: true,
        color: C.orange
    },
    {
        plan: "CITY",
        price: "R24,999",
        desc: "Full-city dominance for brands and agencies at scale.",
        features: [
            "Unlimited campaigns",
            "Unlimited impressions",
            "Citywide spotlight",
            "Dedicated campaign manager",
            "Creator marketplace access",
            "White-label reporting",
            "API access"
        ],
        cta: "Contact Sales",
        highlight: false,
        color: C.pink
    }
];
const AD_FAQS = [
    {
        q: "How does geo-targeting work?",
        a: "VibeCircle uses precise real-time location data to serve your ad to users within your defined radius --- a block, neighborhood, or whole city."
    },
    {
        q: "What's the minimum budget?",
        a: "The Local plan starts at R2,999/month. No minimum ad spend commitment. Cancel anytime."
    },
    {
        q: "Can I sponsor a specific creator?",
        a: "Yes. On Growth and City plans, you can browse the creator marketplace and propose direct sponsorships. Creators typically respond within 48 hours."
    },
    {
        q: "What analytics do I get?",
        a: "All plans include impression counts and engagement metrics. Growth and City add heat maps, audience demographics, and foot-traffic correlation data."
    },
    {
        q: "Is there a contract?",
        a: "No contracts. All plans are month-to-month. City plan clients can opt into annual billing for a 20% discount."
    }
];
function AdvertisePage({ openWaitlist }) {
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        style: {
            background: C.bg,
            color: C.white
        },
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(PageHero, {
                tag: "Advertise",
                title: "Ads that integrate,",
                accent: "not interrupt.",
                sub: "Traditional ads interrupt. VibeCircle ads integrate. We power discovery, not distraction."
            }, void 0, false, {
                fileName: "[project]/components/VibeCirclePages.jsx",
                lineNumber: 678,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(Divider, {}, void 0, false, {
                fileName: "[project]/components/VibeCirclePages.jsx",
                lineNumber: 679,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("section", {
                className: "sec-pad",
                style: {
                    background: C.bg2
                },
                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    style: {
                        maxWidth: "1100px",
                        margin: "0 auto"
                    },
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(Reveal, {
                            style: {
                                marginBottom: "52px"
                            },
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(Tag, {
                                    children: "Ad Products"
                                }, void 0, false, {
                                    fileName: "[project]/components/VibeCirclePages.jsx",
                                    lineNumber: 680,
                                    columnNumber: 150
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("h2", {
                                    style: {
                                        fontFamily: "'Bebas Neue',sans-serif",
                                        fontSize: "clamp(30px,5vw,56px)",
                                        color: C.white,
                                        lineHeight: 1,
                                        marginTop: "16px"
                                    },
                                    children: [
                                        "Every tool to make your",
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("br", {}, void 0, false, {
                                            fileName: "[project]/components/VibeCirclePages.jsx",
                                            lineNumber: 680,
                                            columnNumber: 322
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                            style: {
                                                color: C.orange
                                            },
                                            children: "energy visible."
                                        }, void 0, false, {
                                            fileName: "[project]/components/VibeCirclePages.jsx",
                                            lineNumber: 680,
                                            columnNumber: 327
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/components/VibeCirclePages.jsx",
                                    lineNumber: 680,
                                    columnNumber: 172
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "[project]/components/VibeCirclePages.jsx",
                            lineNumber: 680,
                            columnNumber: 112
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "grid-3",
                            children: AD_FEATURES.map((f, i)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(Reveal, {
                                    delay: i * .08,
                                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        style: {
                                            padding: "30px 26px",
                                            borderRadius: "4px",
                                            background: "rgba(255,255,255,0.02)",
                                            border: "1px solid rgba(255,255,255,0.07)",
                                            height: "100%",
                                            transition: "all .3s"
                                        },
                                        onMouseEnter: (e)=>{
                                            e.currentTarget.style.borderColor = f.color;
                                            e.currentTarget.style.background = `${f.color}0D`;
                                            e.currentTarget.style.transform = "translateY(-4px)";
                                        },
                                        onMouseLeave: (e)=>{
                                            e.currentTarget.style.borderColor = "rgba(255,255,255,0.07)";
                                            e.currentTarget.style.background = "rgba(255,255,255,0.02)";
                                            e.currentTarget.style.transform = "";
                                        },
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                style: {
                                                    fontSize: "24px",
                                                    marginBottom: "13px"
                                                },
                                                children: f.icon
                                            }, void 0, false, {
                                                fileName: "[project]/components/VibeCirclePages.jsx",
                                                lineNumber: 680,
                                                columnNumber: 974
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                style: {
                                                    fontFamily: "'Bebas Neue',sans-serif",
                                                    fontSize: "19px",
                                                    color: f.color,
                                                    marginBottom: "9px"
                                                },
                                                children: f.title
                                            }, void 0, false, {
                                                fileName: "[project]/components/VibeCirclePages.jsx",
                                                lineNumber: 680,
                                                columnNumber: 1039
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                style: {
                                                    fontFamily: "'DM Sans',sans-serif",
                                                    fontSize: "13px",
                                                    color: C.dim,
                                                    lineHeight: 1.7
                                                },
                                                children: f.desc
                                            }, void 0, false, {
                                                fileName: "[project]/components/VibeCirclePages.jsx",
                                                lineNumber: 680,
                                                columnNumber: 1155
                                            }, this)
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/components/VibeCirclePages.jsx",
                                        lineNumber: 680,
                                        columnNumber: 472
                                    }, this)
                                }, i, false, {
                                    fileName: "[project]/components/VibeCirclePages.jsx",
                                    lineNumber: 680,
                                    columnNumber: 442
                                }, this))
                        }, void 0, false, {
                            fileName: "[project]/components/VibeCirclePages.jsx",
                            lineNumber: 680,
                            columnNumber: 394
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "[project]/components/VibeCirclePages.jsx",
                    lineNumber: 680,
                    columnNumber: 63
                }, this)
            }, void 0, false, {
                fileName: "[project]/components/VibeCirclePages.jsx",
                lineNumber: 680,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(Divider, {}, void 0, false, {
                fileName: "[project]/components/VibeCirclePages.jsx",
                lineNumber: 681,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("section", {
                className: "sec-pad",
                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    style: {
                        maxWidth: "1100px",
                        margin: "0 auto"
                    },
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(Reveal, {
                            style: {
                                marginBottom: "52px",
                                textAlign: "center"
                            },
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(Tag, {
                                    children: "Advertising Plans"
                                }, void 0, false, {
                                    fileName: "[project]/components/VibeCirclePages.jsx",
                                    lineNumber: 682,
                                    columnNumber: 142
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("h2", {
                                    style: {
                                        fontFamily: "'Bebas Neue',sans-serif",
                                        fontSize: "clamp(30px,5vw,56px)",
                                        color: C.white,
                                        lineHeight: 1,
                                        marginTop: "16px"
                                    },
                                    children: [
                                        "Pick your level of ",
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                            style: {
                                                color: C.orange
                                            },
                                            children: "dominance."
                                        }, void 0, false, {
                                            fileName: "[project]/components/VibeCirclePages.jsx",
                                            lineNumber: 682,
                                            columnNumber: 316
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/components/VibeCirclePages.jsx",
                                    lineNumber: 682,
                                    columnNumber: 170
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "[project]/components/VibeCirclePages.jsx",
                            lineNumber: 682,
                            columnNumber: 85
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "grid-3",
                            children: AD_PRICING.map((p, i)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(PricingCard, {
                                    ...p,
                                    onCta: ()=>openWaitlist(`Advertise ${p.plan} Plan`)
                                }, i, false, {
                                    fileName: "[project]/components/VibeCirclePages.jsx",
                                    lineNumber: 682,
                                    columnNumber: 425
                                }, this))
                        }, void 0, false, {
                            fileName: "[project]/components/VibeCirclePages.jsx",
                            lineNumber: 682,
                            columnNumber: 378
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "[project]/components/VibeCirclePages.jsx",
                    lineNumber: 682,
                    columnNumber: 36
                }, this)
            }, void 0, false, {
                fileName: "[project]/components/VibeCirclePages.jsx",
                lineNumber: 682,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(Divider, {}, void 0, false, {
                fileName: "[project]/components/VibeCirclePages.jsx",
                lineNumber: 683,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("section", {
                className: "sec-pad",
                style: {
                    background: C.bg2
                },
                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    style: {
                        maxWidth: "800px",
                        margin: "0 auto"
                    },
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(Reveal, {
                            style: {
                                marginBottom: "44px"
                            },
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(Tag, {
                                    children: "Advertiser FAQ"
                                }, void 0, false, {
                                    fileName: "[project]/components/VibeCirclePages.jsx",
                                    lineNumber: 684,
                                    columnNumber: 149
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("h2", {
                                    style: {
                                        fontFamily: "'Bebas Neue',sans-serif",
                                        fontSize: "clamp(26px,4vw,44px)",
                                        color: C.white,
                                        lineHeight: 1,
                                        marginTop: "16px"
                                    },
                                    children: [
                                        "Your questions, ",
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                            style: {
                                                color: C.orange
                                            },
                                            children: "answered."
                                        }, void 0, false, {
                                            fileName: "[project]/components/VibeCirclePages.jsx",
                                            lineNumber: 684,
                                            columnNumber: 317
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/components/VibeCirclePages.jsx",
                                    lineNumber: 684,
                                    columnNumber: 174
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "[project]/components/VibeCirclePages.jsx",
                            lineNumber: 684,
                            columnNumber: 111
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(FAQ, {
                            items: AD_FAQS
                        }, void 0, false, {
                            fileName: "[project]/components/VibeCirclePages.jsx",
                            lineNumber: 684,
                            columnNumber: 378
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "[project]/components/VibeCirclePages.jsx",
                    lineNumber: 684,
                    columnNumber: 63
                }, this)
            }, void 0, false, {
                fileName: "[project]/components/VibeCirclePages.jsx",
                lineNumber: 684,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                style: {
                    background: C.orange,
                    padding: "20px 0",
                    overflow: "hidden"
                },
                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    style: {
                        display: "flex",
                        animation: "marquee 18s linear infinite",
                        whiteSpace: "nowrap"
                    },
                    children: [
                        ...Array(3)
                    ].map((_, x)=>[
                            "Geo-Targeted",
                            "--",
                            "Creator Moments",
                            "--",
                            "Event Promotion",
                            "--",
                            "Live Ads",
                            "--",
                            "Real Analytics",
                            "--"
                        ].map((wd, i)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                style: {
                                    fontFamily: "'Bebas Neue',sans-serif",
                                    fontSize: "15px",
                                    letterSpacing: "3px",
                                    color: "rgba(5,5,10,0.7)",
                                    marginRight: "30px"
                                },
                                children: wd
                            }, `${x}-${i}`, false, {
                                fileName: "[project]/components/VibeCirclePages.jsx",
                                lineNumber: 685,
                                columnNumber: 311
                            }, this)))
                }, void 0, false, {
                    fileName: "[project]/components/VibeCirclePages.jsx",
                    lineNumber: 685,
                    columnNumber: 77
                }, this)
            }, void 0, false, {
                fileName: "[project]/components/VibeCirclePages.jsx",
                lineNumber: 685,
                columnNumber: 7
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/components/VibeCirclePages.jsx",
        lineNumber: 677,
        columnNumber: 5
    }, this);
}
// ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------
// BUSINESS PAGE
// ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------
const BIZ_TOOLS = [
    {
        num: "01",
        title: "Claim Your Location",
        desc: "Take ownership of your spot on the VibeCircle map. Your location becomes a living destination.",
        icon: "----"
    },
    {
        num: "02",
        title: "Run Promotions",
        desc: "Launch time-limited offers that pulse to nearby users. Create urgency. Drive traffic.",
        icon: "----"
    },
    {
        num: "03",
        title: "Host Events",
        desc: "Create events that appear on the live map. Tap into VibeCircle's discovery engine.",
        icon: "----"
    },
    {
        num: "04",
        title: "Go Live",
        desc: "Stream directly from your location. Let people see the energy before they arrive.",
        icon: "----"
    },
    {
        num: "05",
        title: "Track Engagement",
        desc: "See who's viewing, saving, and visiting your location in real time.",
        icon: "----"
    },
    {
        num: "06",
        title: "Launch Campaigns",
        desc: "Combine all tools into targeted campaigns that grow with your business.",
        icon: "----"
    }
];
const BIZ_PRICING = [
    {
        plan: "STARTER",
        price: "R399",
        desc: "Get your business on the map and build a local following.",
        features: [
            "Claimed location profile",
            "Basic event hosting (2/month)",
            "Location analytics",
            "Promotion posts (4/month)",
            "Discovery map pin"
        ],
        cta: "Get Started",
        highlight: false,
        color: C.orange
    },
    {
        plan: "GROWTH",
        price: "R1,199",
        desc: "The full suite for businesses serious about owning their neighborhood.",
        features: [
            "Everything in Starter",
            "Unlimited events",
            "Go Live feature",
            "Advanced engagement analytics",
            "Creator collaboration tools",
            "Priority map visibility",
            "Promotional boost (3/month)"
        ],
        cta: "Start Free Trial",
        highlight: true,
        color: C.orange
    },
    {
        plan: "ENTERPRISE",
        price: "Custom",
        period: "",
        desc: "For multi-location brands, chains, and franchise groups.",
        features: [
            "Everything in Growth",
            "Multi-location management",
            "Dedicated account manager",
            "Custom analytics reporting",
            "API & POS integrations",
            "White-label options",
            "SLA support"
        ],
        cta: "Contact Sales",
        highlight: false,
        color: C.pink
    }
];
const BIZ_FAQS = [
    {
        q: "What does 'claiming a location' mean?",
        a: "Claiming your location creates an official business profile linked to your real-world address. It appears as a branded pin on the map, and users can check in, leave reviews, and share content tagged to your venue."
    },
    {
        q: "Can I manage multiple locations?",
        a: "Yes. The Enterprise plan supports multi-location management through a unified dashboard --- ideal for chains, franchises, and multi-venue operators."
    },
    {
        q: "How does Go Live work for businesses?",
        a: "When you go live, your stream appears as a pulsing pin on the map for nearby users. Perfect for previewing tonight's event, showcasing a new menu item, or capturing a special moment."
    },
    {
        q: "Is there a setup fee?",
        a: "No setup fees. Claim your location and go live the same day you sign up."
    },
    {
        q: "Can I try it before committing?",
        a: "Growth plan comes with a 14-day free trial, no credit card required. Starter is month-to-month with no lock-in."
    }
];
function BusinessPage({ openWaitlist }) {
    const [active, setActive] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])(0);
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        style: {
            background: C.bg,
            color: C.white
        },
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(PageHero, {
                tag: "VibeCircle for Business",
                title: "Turn foot traffic into",
                accent: "digital gravity.",
                sub: "When your location pulses on the map, people don't just see you --- they find you."
            }, void 0, false, {
                fileName: "[project]/components/VibeCirclePages.jsx",
                lineNumber: 704,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(Divider, {}, void 0, false, {
                fileName: "[project]/components/VibeCirclePages.jsx",
                lineNumber: 705,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("section", {
                className: "sec-pad",
                style: {
                    background: C.bg2
                },
                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    style: {
                        maxWidth: "1100px",
                        margin: "0 auto"
                    },
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(Reveal, {
                            style: {
                                marginBottom: "52px"
                            },
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(Tag, {
                                    children: "Business Tools"
                                }, void 0, false, {
                                    fileName: "[project]/components/VibeCirclePages.jsx",
                                    lineNumber: 706,
                                    columnNumber: 150
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("h2", {
                                    style: {
                                        fontFamily: "'Bebas Neue',sans-serif",
                                        fontSize: "clamp(30px,5vw,54px)",
                                        color: C.white,
                                        lineHeight: 1,
                                        marginTop: "16px"
                                    },
                                    children: [
                                        "Everything you need",
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("br", {}, void 0, false, {
                                            fileName: "[project]/components/VibeCirclePages.jsx",
                                            lineNumber: 706,
                                            columnNumber: 321
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                            style: {
                                                color: C.orange
                                            },
                                            children: "in one place."
                                        }, void 0, false, {
                                            fileName: "[project]/components/VibeCirclePages.jsx",
                                            lineNumber: 706,
                                            columnNumber: 326
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/components/VibeCirclePages.jsx",
                                    lineNumber: 706,
                                    columnNumber: 175
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "[project]/components/VibeCirclePages.jsx",
                            lineNumber: 706,
                            columnNumber: 112
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            style: {
                                display: "grid",
                                gridTemplateColumns: "1fr 1.4fr",
                                gap: "24px"
                            },
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    style: {
                                        display: "flex",
                                        flexDirection: "column",
                                        gap: "8px"
                                    },
                                    children: BIZ_TOOLS.map((t, i)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            onClick: ()=>setActive(i),
                                            style: {
                                                padding: "16px 20px",
                                                background: active === i ? "rgba(255,107,0,0.1)" : "rgba(255,255,255,0.02)",
                                                border: `1px solid ${active === i ? C.orange + "60" : "rgba(255,255,255,0.06)"}`,
                                                borderRadius: "4px",
                                                display: "flex",
                                                alignItems: "center",
                                                gap: "12px",
                                                cursor: "pointer",
                                                transition: "all .25s"
                                            },
                                            onMouseEnter: (e)=>{
                                                if (active !== i) {
                                                    e.currentTarget.style.background = "rgba(255,255,255,0.04)";
                                                    e.currentTarget.style.borderColor = "rgba(255,255,255,0.12)";
                                                }
                                            },
                                            onMouseLeave: (e)=>{
                                                if (active !== i) {
                                                    e.currentTarget.style.background = "rgba(255,255,255,0.02)";
                                                    e.currentTarget.style.borderColor = "rgba(255,255,255,0.06)";
                                                }
                                            },
                                            children: [
                                                "  ",
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                    style: {
                                                        fontSize: "16px"
                                                    },
                                                    children: t.icon
                                                }, void 0, false, {
                                                    fileName: "[project]/components/VibeCirclePages.jsx",
                                                    lineNumber: 706,
                                                    columnNumber: 1174
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                    style: {
                                                        flex: 1
                                                    },
                                                    children: [
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                            style: {
                                                                fontFamily: "'Bebas Neue',sans-serif",
                                                                fontSize: "15px",
                                                                color: active === i ? C.orange : C.white
                                                            },
                                                            children: t.title
                                                        }, void 0, false, {
                                                            fileName: "[project]/components/VibeCirclePages.jsx",
                                                            lineNumber: 706,
                                                            columnNumber: 1243
                                                        }, this),
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                            style: {
                                                                fontFamily: "'DM Sans',sans-serif",
                                                                fontSize: "10px",
                                                                letterSpacing: "2px",
                                                                color: C.dimmer,
                                                                textTransform: "uppercase",
                                                                marginTop: "1px"
                                                            },
                                                            children: t.num
                                                        }, void 0, false, {
                                                            fileName: "[project]/components/VibeCirclePages.jsx",
                                                            lineNumber: 706,
                                                            columnNumber: 1360
                                                        }, this)
                                                    ]
                                                }, void 0, true, {
                                                    fileName: "[project]/components/VibeCirclePages.jsx",
                                                    lineNumber: 706,
                                                    columnNumber: 1221
                                                }, this),
                                                active === i && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                    style: {
                                                        color: C.orange,
                                                        fontSize: "13px"
                                                    },
                                                    children: "---"
                                                }, void 0, false, {
                                                    fileName: "[project]/components/VibeCirclePages.jsx",
                                                    lineNumber: 706,
                                                    columnNumber: 1534
                                                }, this)
                                            ]
                                        }, i, true, {
                                            fileName: "[project]/components/VibeCirclePages.jsx",
                                            lineNumber: 706,
                                            columnNumber: 549
                                        }, this))
                                }, void 0, false, {
                                    fileName: "[project]/components/VibeCirclePages.jsx",
                                    lineNumber: 706,
                                    columnNumber: 464
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    style: {
                                        padding: "40px",
                                        background: "rgba(255,255,255,0.02)",
                                        border: `1px solid ${C.border}`,
                                        borderRadius: "4px",
                                        animation: "fadeIn .3s ease",
                                        position: "relative",
                                        overflow: "hidden"
                                    },
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(Orb, {
                                            top: "-30%",
                                            right: "-20%",
                                            size: 280,
                                            opacity: 0.15
                                        }, void 0, false, {
                                            fileName: "[project]/components/VibeCirclePages.jsx",
                                            lineNumber: 706,
                                            columnNumber: 1799
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            style: {
                                                fontSize: "40px",
                                                marginBottom: "18px"
                                            },
                                            children: BIZ_TOOLS[active].icon
                                        }, void 0, false, {
                                            fileName: "[project]/components/VibeCirclePages.jsx",
                                            lineNumber: 706,
                                            columnNumber: 1855
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            style: {
                                                fontFamily: "'Bebas Neue',sans-serif",
                                                fontSize: "clamp(22px,3vw,38px)",
                                                color: C.orange,
                                                lineHeight: 1,
                                                marginBottom: "14px"
                                            },
                                            children: BIZ_TOOLS[active].title
                                        }, void 0, false, {
                                            fileName: "[project]/components/VibeCirclePages.jsx",
                                            lineNumber: 706,
                                            columnNumber: 1936
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                            style: {
                                                fontFamily: "'DM Sans',sans-serif",
                                                fontSize: "16px",
                                                color: C.dim,
                                                lineHeight: 1.8,
                                                marginBottom: "24px"
                                            },
                                            children: BIZ_TOOLS[active].desc
                                        }, void 0, false, {
                                            fileName: "[project]/components/VibeCirclePages.jsx",
                                            lineNumber: 706,
                                            columnNumber: 2099
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            style: {
                                                width: "100%",
                                                height: "2px",
                                                background: `linear-gradient(90deg,${C.orange},${C.pink})`,
                                                borderRadius: "1px",
                                                transformOrigin: "left",
                                                animation: "lineGrow .4s ease forwards"
                                            }
                                        }, void 0, false, {
                                            fileName: "[project]/components/VibeCirclePages.jsx",
                                            lineNumber: 706,
                                            columnNumber: 2237
                                        }, this)
                                    ]
                                }, active, true, {
                                    fileName: "[project]/components/VibeCirclePages.jsx",
                                    lineNumber: 706,
                                    columnNumber: 1604
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "[project]/components/VibeCirclePages.jsx",
                            lineNumber: 706,
                            columnNumber: 391
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "[project]/components/VibeCirclePages.jsx",
                    lineNumber: 706,
                    columnNumber: 63
                }, this)
            }, void 0, false, {
                fileName: "[project]/components/VibeCirclePages.jsx",
                lineNumber: 706,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(Divider, {}, void 0, false, {
                fileName: "[project]/components/VibeCirclePages.jsx",
                lineNumber: 707,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("section", {
                className: "sec-pad",
                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    style: {
                        maxWidth: "1100px",
                        margin: "0 auto"
                    },
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(Reveal, {
                            style: {
                                marginBottom: "52px",
                                textAlign: "center"
                            },
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(Tag, {
                                    children: "Business Plans"
                                }, void 0, false, {
                                    fileName: "[project]/components/VibeCirclePages.jsx",
                                    lineNumber: 708,
                                    columnNumber: 142
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("h2", {
                                    style: {
                                        fontFamily: "'Bebas Neue',sans-serif",
                                        fontSize: "clamp(30px,5vw,54px)",
                                        color: C.white,
                                        lineHeight: 1,
                                        marginTop: "16px"
                                    },
                                    children: [
                                        "Choose your level of ",
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                            style: {
                                                color: C.orange
                                            },
                                            children: "gravity."
                                        }, void 0, false, {
                                            fileName: "[project]/components/VibeCirclePages.jsx",
                                            lineNumber: 708,
                                            columnNumber: 315
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/components/VibeCirclePages.jsx",
                                    lineNumber: 708,
                                    columnNumber: 167
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "[project]/components/VibeCirclePages.jsx",
                            lineNumber: 708,
                            columnNumber: 85
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "grid-3",
                            children: BIZ_PRICING.map((p, i)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(PricingCard, {
                                    ...p,
                                    onCta: ()=>openWaitlist(`Business ${p.plan} Plan`)
                                }, i, false, {
                                    fileName: "[project]/components/VibeCirclePages.jsx",
                                    lineNumber: 708,
                                    columnNumber: 423
                                }, this))
                        }, void 0, false, {
                            fileName: "[project]/components/VibeCirclePages.jsx",
                            lineNumber: 708,
                            columnNumber: 375
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "[project]/components/VibeCirclePages.jsx",
                    lineNumber: 708,
                    columnNumber: 36
                }, this)
            }, void 0, false, {
                fileName: "[project]/components/VibeCirclePages.jsx",
                lineNumber: 708,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(Divider, {}, void 0, false, {
                fileName: "[project]/components/VibeCirclePages.jsx",
                lineNumber: 709,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("section", {
                className: "sec-pad",
                style: {
                    background: C.bg2
                },
                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    style: {
                        maxWidth: "800px",
                        margin: "0 auto"
                    },
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(Reveal, {
                            style: {
                                marginBottom: "44px"
                            },
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(Tag, {
                                    children: "Business FAQ"
                                }, void 0, false, {
                                    fileName: "[project]/components/VibeCirclePages.jsx",
                                    lineNumber: 710,
                                    columnNumber: 149
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("h2", {
                                    style: {
                                        fontFamily: "'Bebas Neue',sans-serif",
                                        fontSize: "clamp(26px,4vw,44px)",
                                        color: C.white,
                                        lineHeight: 1,
                                        marginTop: "16px"
                                    },
                                    children: [
                                        "Everything you need ",
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                            style: {
                                                color: C.orange
                                            },
                                            children: "to know."
                                        }, void 0, false, {
                                            fileName: "[project]/components/VibeCirclePages.jsx",
                                            lineNumber: 710,
                                            columnNumber: 319
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/components/VibeCirclePages.jsx",
                                    lineNumber: 710,
                                    columnNumber: 172
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "[project]/components/VibeCirclePages.jsx",
                            lineNumber: 710,
                            columnNumber: 111
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(FAQ, {
                            items: BIZ_FAQS
                        }, void 0, false, {
                            fileName: "[project]/components/VibeCirclePages.jsx",
                            lineNumber: 710,
                            columnNumber: 379
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "[project]/components/VibeCirclePages.jsx",
                    lineNumber: 710,
                    columnNumber: 63
                }, this)
            }, void 0, false, {
                fileName: "[project]/components/VibeCirclePages.jsx",
                lineNumber: 710,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("section", {
                className: "sec-pad-sm",
                style: {
                    background: C.bg3
                },
                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(Reveal, {
                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        style: {
                            maxWidth: "1100px",
                            margin: "0 auto",
                            padding: "48px 52px",
                            background: `linear-gradient(135deg,rgba(255,107,0,0.12) 0%,rgba(255,45,120,0.06) 100%)`,
                            border: `1px solid ${C.orange}25`,
                            borderRadius: "4px",
                            display: "flex",
                            alignItems: "center",
                            justifyContent: "space-between",
                            gap: "24px",
                            flexWrap: "wrap"
                        },
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                style: {
                                    fontFamily: "'Bebas Neue',sans-serif",
                                    fontSize: "clamp(24px,4vw,44px)",
                                    color: C.white,
                                    lineHeight: 1
                                },
                                children: [
                                    "Ready to make your",
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("br", {}, void 0, false, {
                                        fileName: "[project]/components/VibeCirclePages.jsx",
                                        lineNumber: 711,
                                        columnNumber: 505
                                    }, this),
                                    "location ",
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                        style: {
                                            color: C.orange
                                        },
                                        children: "pulse?"
                                    }, void 0, false, {
                                        fileName: "[project]/components/VibeCirclePages.jsx",
                                        lineNumber: 711,
                                        columnNumber: 519
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/components/VibeCirclePages.jsx",
                                lineNumber: 711,
                                columnNumber: 376
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                style: {
                                    display: "flex",
                                    gap: "12px",
                                    flexWrap: "wrap"
                                },
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                        onClick: ()=>openWaitlist("Business Get Started"),
                                        style: {
                                            fontFamily: "'Bebas Neue',sans-serif",
                                            fontSize: "14px",
                                            letterSpacing: "3px",
                                            padding: "13px 32px",
                                            background: C.orange,
                                            color: C.bg,
                                            border: "none",
                                            borderRadius: "2px",
                                            cursor: "pointer",
                                            transition: "box-shadow .2s"
                                        },
                                        onMouseEnter: (e)=>e.target.style.boxShadow = `0 10px 32px ${C.orange}40`,
                                        onMouseLeave: (e)=>e.target.style.boxShadow = "",
                                        children: "Get Started Free"
                                    }, void 0, false, {
                                        fileName: "[project]/components/VibeCirclePages.jsx",
                                        lineNumber: 711,
                                        columnNumber: 626
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                        onClick: ()=>openWaitlist("Business Demo"),
                                        style: {
                                            fontFamily: "'Bebas Neue',sans-serif",
                                            fontSize: "14px",
                                            letterSpacing: "3px",
                                            padding: "13px 32px",
                                            background: "transparent",
                                            color: C.white,
                                            border: "1px solid rgba(255,255,255,0.2)",
                                            borderRadius: "2px",
                                            cursor: "pointer",
                                            transition: "all .2s"
                                        },
                                        onMouseEnter: (e)=>{
                                            e.currentTarget.style.borderColor = C.orange;
                                            e.currentTarget.style.color = C.orange;
                                        },
                                        onMouseLeave: (e)=>{
                                            e.currentTarget.style.borderColor = "rgba(255,255,255,0.2)";
                                            e.currentTarget.style.color = C.white;
                                        },
                                        children: "Book a Demo"
                                    }, void 0, false, {
                                        fileName: "[project]/components/VibeCirclePages.jsx",
                                        lineNumber: 711,
                                        columnNumber: 1039
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/components/VibeCirclePages.jsx",
                                lineNumber: 711,
                                columnNumber: 569
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/components/VibeCirclePages.jsx",
                        lineNumber: 711,
                        columnNumber: 74
                    }, this)
                }, void 0, false, {
                    fileName: "[project]/components/VibeCirclePages.jsx",
                    lineNumber: 711,
                    columnNumber: 66
                }, this)
            }, void 0, false, {
                fileName: "[project]/components/VibeCirclePages.jsx",
                lineNumber: 711,
                columnNumber: 7
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/components/VibeCirclePages.jsx",
        lineNumber: 703,
        columnNumber: 5
    }, this);
}
// ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------
// JOBS PAGE --- RICH ROLES
// ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------
const ROLES = [
    {
        title: "Frontend Engineer",
        dept: "Engineering",
        type: "Full-Time",
        level: "Mid---Senior",
        location: "Remote (South Africa)",
        salary: " equity",
        summary: "Build the interfaces that make cities feel alive. You'll own the core consumer product --- the living map, creator feeds, real-time streams, and brand marketplace --- from design system to shipped pixel.",
        responsibilities: [
            "Architect and build complex React/TypeScript components for the live city map and creator tools",
            "Own the geo-visualization layer using Mapbox GL and WebGL",
            "Collaborate with Design to implement pixel-perfect motion and micro-interactions",
            "Drive performance optimization --- the map must feel instant at city scale",
            "Lead code reviews and raise engineering quality standards across the frontend team",
            "Contribute to our design system and component library",
            "Work directly with users: join creator calls, watch sessions, ship fast based on real feedback"
        ],
        requirements: [
            "4+ years of React and TypeScript production experience",
            "Deep knowledge of browser performance, layout, and rendering pipelines",
            "Experience with mapping libraries (Mapbox GL, Leaflet, or similar)",
            "Strong CSS fundamentals --- you know why it works, not just that it works",
            "Experience with WebSockets or real-time data (we move fast)",
            "Portfolio with shipped consumer products you're proud of"
        ],
        niceToHave: [
            "WebGL or canvas rendering experience",
            "React Native / cross-platform experience",
            "Experience building at scale (1M+ DAU products)"
        ],
        techStack: [
            "React 18",
            "TypeScript",
            "Mapbox GL",
            "WebGL",
            "Framer Motion",
            "TanStack Query",
            "Vite",
            "Vitest"
        ],
        deadline: "Rolling"
    },
    {
        title: "Backend Engineer",
        dept: "Engineering",
        type: "Full-Time",
        level: "Mid---Senior",
        location: "Remote (South Africa)",
        salary: "R1.0m---R1.5m + equity",
        summary: "Power the infrastructure that makes cities discoverable in real time. You'll build the APIs, real-time event systems, and data pipelines that serve 50K+ creators and millions of map interactions per day.",
        responsibilities: [
            "Design and build high-throughput APIs for the map, feeds, events, and creator tools",
            "Architect real-time systems using WebSockets and pub/sub for live map updates",
            "Build and optimize the geo-spatial query layer (PostGIS) powering location-based discovery",
            "Own database design, query performance, and data integrity at scale",
            "Collaborate on the brand marketplace matching algorithm",
            "Implement robust authentication, permissions, and creator/business role systems",
            "Set up and maintain observability, alerting, and incident runbooks"
        ],
        requirements: [
            "4+ years of backend engineering in Python, Go, or Node.js",
            "Deep knowledge of PostgreSQL with PostGIS or equivalent spatial databases",
            "Experience designing RESTful and/or GraphQL APIs consumed by millions",
            "Solid understanding of caching (Redis), queuing (BullMQ/Kafka), and async architecture",
            "Experience with cloud infrastructure (AWS or GCP)",
            "You've debugged a production outage at 2am and shipped a postmortem by 10am"
        ],
        niceToHave: [
            "Geospatial data experience at scale",
            "Experience with real-time event streaming (Kafka, Kinesis)",
            "Machine learning pipeline exposure"
        ],
        techStack: [
            "Node.js / Python",
            "PostgreSQL + PostGIS",
            "Redis",
            "AWS",
            "Docker / Kubernetes",
            "Kafka"
        ],
        deadline: "Rolling"
    },
    {
        title: "UX Designer",
        dept: "Design",
        type: "Full-Time",
        level: "Mid",
        location: "Remote (South Africa)",
        salary: "R750k---R1.05m + equity",
        summary: "Design experiences that feel as alive as the cities we're mapping. Every flow you design will be used by creators building their livelihoods and businesses turning their neighborhoods into digital gravity.",
        responsibilities: [
            "Own end-to-end design for creator tools --- from concept to shipped product",
            "Run user research: creator interviews, usability sessions, synthesis",
            "Design the VibeCircle mobile and web experience across map, feeds, and marketplace",
            "Build and maintain a living design system in Figma",
            "Partner with engineers to ship interactions that actually match your intent",
            "Define motion principles and microinteraction standards",
            "Present work clearly and defend decisions with user data --- not just aesthetics"
        ],
        requirements: [
            "3+ years of UX/product design at a consumer app or marketplace",
            "Strong portfolio demonstrating complex interaction design and systems thinking",
            "Expert-level Figma (components, variants, auto-layout, prototyping)",
            "Experience running your own user research",
            "Ability to work in a fast-moving environment where designs ship in days, not months",
            "Strong written communication --- most design critiques happen async"
        ],
        niceToHave: [
            "Experience with map-based UI or location products",
            "Motion design skills (After Effects, Rive, or Framer)",
            "Basic HTML/CSS knowledge"
        ],
        techStack: [
            "Figma",
            "Maze",
            "Hotjar",
            "Notion",
            "Loom"
        ],
        deadline: "Rolling"
    },
    {
        title: "Growth Marketer",
        dept: "Marketing",
        type: "Full-Time",
        level: "Mid",
        location: "Remote (South Africa)",
        salary: "R600k---R900k + equity",
        summary: "Own the growth engine that brings creators, businesses, and cities onto VibeCircle. You'll identify and scale the acquisition channels that compound --- not just ones that spike.",
        responsibilities: [
            "Build and optimize paid and organic acquisition funnels across creator and business verticals",
            "Own SEO strategy and content marketing pipeline from briefs to distribution",
            "Design and run A/B tests on landing pages, emails, and in-app messaging",
            "Manage the campus ambassador program across 50+ universities",
            "Analyze cohort data to identify and fix retention leaks",
            "Collaborate with creators on co-marketing and city launch campaigns",
            "Build weekly growth dashboards and present findings to the leadership team"
        ],
        requirements: [
            "3+ years in growth or performance marketing at a consumer or marketplace startup",
            "Strong analytical skills --- comfortable with SQL and attribution modeling",
            "Experience managing paid channels (Meta, TikTok, Google) with real budgets",
            "Track record of growing a user base, not just traffic",
            "Exceptional written communication and copywriting instincts"
        ],
        niceToHave: [
            "Experience marketing to Gen Z creators or college students",
            "Influencer / creator marketing background",
            "City-based launch playbook experience"
        ],
        techStack: [
            "Google Analytics 4",
            "Mixpanel",
            "Segment",
            "Meta Ads",
            "HubSpot",
            "Notion"
        ],
        deadline: "Rolling"
    },
    {
        title: "Campus Ambassador",
        dept: "Community",
        type: "Part-Time",
        level: "Entry",
        location: "On-campus (South African Universities)",
        salary: "R150---R220/hr + performance bonuses",
        summary: "Be the pulse of VibeCircle on your campus. You're not promoting an app --- you're launching a movement. Campus Ambassadors are VibeCircle's most powerful distribution channel.",
        responsibilities: [
            "Drive creator signups and map adoption among students on your campus",
            "Organize and host VibeCircle-branded events and activations",
            "Build relationships with student organizations, campus media, and event planners",
            "Create authentic content from campus life and post to VibeCircle",
            "Submit weekly reports: signups, events, content engagement",
            "Identify and onboard local businesses and venues near campus",
            "Be the face of VibeCircle in your city"
        ],
        requirements: [
            "Currently enrolled at a South African university (junior or senior preferred)",
            "Genuine social presence and credibility on your campus",
            "Organized, self-motivated, and able to hit weekly targets independently",
            "Strong communication skills --- you'll represent the brand publicly",
            "Prior event planning or brand ambassador experience is a plus, not required"
        ],
        niceToHave: [
            "Greek life, student government, or sports organization involvement",
            "Content creation background",
            "Prior startup or community-building experience"
        ],
        techStack: [
            "VibeCircle app",
            "Notion (reporting)",
            "Canva (content)"
        ],
        deadline: "Rolling --- cohort starts each semester"
    },
    {
        title: "Creator Partnership Intern",
        dept: "Creators",
        type: "Internship",
        level: "Entry",
        location: "Remote (South Africa)",
        salary: "R150---R180/hr",
        summary: "Help onboard, support, and scale the creator ecosystem that is the lifeblood of VibeCircle. You'll work directly with the Head of Creator Partnerships to find, activate, and retain the creators who make cities come alive.",
        responsibilities: [
            "Source and outreach to creators in our priority cities",
            "Manage the creator onboarding pipeline from application to first post",
            "Build and maintain creator relationships --- you're their primary point of contact",
            "Assist with brand marketplace matching between creators and brand deals",
            "Track creator performance metrics and surface insights to the team",
            "Help create creator-facing documentation, guides, and onboarding flows",
            "Support the planning and execution of creator events and activations"
        ],
        requirements: [
            "Currently enrolled or recently graduated (within 12 months)",
            "Passionate about creator culture, city life, and social media",
            "Excellent written communication and relationship-building instincts",
            "Organized and detail-oriented --- you'll manage multiple creators at once",
            "Familiar with Instagram, TikTok, and content creation workflows"
        ],
        niceToHave: [
            "Personal experience as a content creator or community builder",
            "Talent management or influencer marketing internship experience",
            "Familiarity with creator economy tools and platforms"
        ],
        techStack: [
            "VibeCircle app",
            "Notion",
            "Airtable",
            "Slack"
        ],
        deadline: "Rolling --- 3-month paid internship with potential to extend"
    },
    {
        title: "Data Engineer",
        dept: "Engineering",
        type: "Full-Time",
        level: "Senior",
        location: "Remote (South Africa)",
        salary: "R1.1m---R1.7m + equity",
        summary: "Build the data infrastructure that tells us how cities move. Your pipelines will power creator analytics, business dashboards, map discovery algorithms, and real-time engagement metrics at scale.",
        responsibilities: [
            "Design and maintain scalable data pipelines from event ingestion to analytical tables",
            "Build the real-time analytics infrastructure behind creator and business dashboards",
            "Own the data warehouse (Snowflake/BigQuery) --- schema design, quality, governance",
            "Partner with product and engineering to instrument new features with correct event tracking",
            "Build geo-spatial analytics capabilities --- city heatmaps, movement patterns, discovery funnels",
            "Create internal BI dashboards for leadership, growth, and creator partnerships teams",
            "Define data quality standards and lead the build-out of our monitoring layer"
        ],
        requirements: [
            "5+ years of data engineering experience",
            "Expert SQL and proficiency in Python for data pipelines",
            "Experience with a modern data warehouse (Snowflake, BigQuery, or Redshift)",
            "Strong understanding of streaming vs batch processing trade-offs",
            "Experience with dbt, Airflow, or similar orchestration tools",
            "Track record of building data products used by non-technical stakeholders"
        ],
        niceToHave: [
            "Geo-spatial analytics or PostGIS experience",
            "Real-time streaming with Kafka or Kinesis",
            "ML feature engineering experience"
        ],
        techStack: [
            "dbt",
            "Snowflake",
            "Airflow",
            "Python",
            "Kafka",
            "Looker",
            "PostGIS"
        ],
        deadline: "Rolling"
    },
    {
        title: "Brand Partnerships Manager",
        dept: "Business",
        type: "Full-Time",
        level: "Mid---Senior",
        location: "Johannesburg or Cape Town (Hybrid)",
        salary: "R750k---R1.1m + commission + equity",
        summary: "Close and grow the brand relationships that fund VibeCircle's creator economy. You'll own the full sales cycle --- from initial outreach to signed deal to campaign success --- across restaurants, venues, fashion brands, and event companies.",
        responsibilities: [
            "Own a pipeline of 50+ brand opportunities across your assigned verticals",
            "Run end-to-end sales cycles: outreach, demos, proposals, negotiation, close",
            "Build long-term relationships with brand and agency partners --- not transactional deals",
            "Partner with the creator team to structure brand-creator match campaigns",
            "Collaborate with product to shape brand marketplace features based on partner feedback",
            "Hit and exceed quarterly revenue targets",
            "Represent VibeCircle at industry events, trade shows, and creator economy conferences"
        ],
        requirements: [
            "3+ years in brand partnerships, media sales, or sponsorship sales",
            "Proven track record of closing deals above R900k",
            "Strong existing relationships in fashion, F&B, entertainment, or tech",
            "Excellent written and verbal communication --- you close with confidence",
            "Comfort operating in an early-stage startup with limited process"
        ],
        niceToHave: [
            "Creator economy or influencer marketing sales experience",
            "Experience selling geo-targeted or experiential marketing products",
            "Existing relationships with CMOs or brand managers at mid-market brands"
        ],
        techStack: [
            "Salesforce",
            "HubSpot",
            "Notion",
            "Looker",
            "Slack"
        ],
        deadline: "Rolling"
    }
];
const DEPT_COLORS = {
    Engineering: C.orange,
    Design: C.blue,
    Marketing: C.pink,
    Community: C.purple,
    Creators: C.gold,
    Business: C.orange
};
const JOBS_FAQS = [
    {
        q: "Where is VibeCircle based?",
        a: "Remote-first with hubs in Johannesburg and Cape Town."
    },
    {
        q: "Do you offer visa sponsorship?",
        a: "Case-by-case for senior roles in South Africa. Contact careers@vibecircle.com."
    },
    {
        q: "What does the interview process look like?",
        a: "Intro call (30 min) ? skills review ? take-home project (2---4 hours) ? final team interview. We complete the process within 2 weeks."
    },
    {
        q: "Are internships paid?",
        a: "Yes. All internships are paid R150---R180/hr."
    },
    {
        q: "I don't see a role that fits. Can I still apply?",
        a: "Absolutely. Send your story to careers@vibecircle.com. We've created roles for exceptional people who didn't fit existing job descriptions."
    }
];
function JobsPage({ openWaitlist, addToast }) {
    const [filter, setFilter] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])("All");
    const [expanded, setExpanded] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])(null);
    const [jobTab, setJobTab] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])({});
    const [applyOpen, setApplyOpen] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])(null);
    const depts = [
        "All",
        ...Object.keys(DEPT_COLORS)
    ];
    const filtered = filter === "All" ? ROLES : ROLES.filter((r)=>r.dept === filter);
    const getTab = (i)=>jobTab[i] || "Overview";
    const setTab = (i, t)=>setJobTab((p)=>({
                ...p,
                [i]: t
            }));
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        style: {
            background: C.bg,
            color: C.white
        },
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(PageHero, {
                tag: "Careers",
                title: "We don't hire for roles.",
                accent: "We hire builders.",
                sub: "Ambitious, fast-moving, impact-driven. Join the team building infrastructure for modern city culture."
            }, void 0, false, {
                fileName: "[project]/components/VibeCirclePages.jsx",
                lineNumber: 821,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(Divider, {}, void 0, false, {
                fileName: "[project]/components/VibeCirclePages.jsx",
                lineNumber: 822,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("section", {
                className: "sec-pad",
                style: {
                    background: C.bg2
                },
                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    style: {
                        maxWidth: "1100px",
                        margin: "0 auto"
                    },
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(Reveal, {
                            style: {
                                marginBottom: "44px"
                            },
                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(Tag, {
                                children: "What You Get"
                            }, void 0, false, {
                                fileName: "[project]/components/VibeCirclePages.jsx",
                                lineNumber: 824,
                                columnNumber: 150
                            }, this)
                        }, void 0, false, {
                            fileName: "[project]/components/VibeCirclePages.jsx",
                            lineNumber: 824,
                            columnNumber: 112
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "grid-4",
                            children: [
                                {
                                    icon: "-------",
                                    t: "Real Ownership",
                                    d: "Every role carries real responsibility. No busywork, no hand-holding."
                                },
                                {
                                    icon: "----",
                                    t: "Equity Opportunities",
                                    d: "Build something you co-own. Equity offered across all full-time roles."
                                },
                                {
                                    icon: "----",
                                    t: "Meaningful Impact",
                                    d: "Your work shapes how cities move. Every line of code matters."
                                },
                                {
                                    icon: "---",
                                    t: "Move Fast",
                                    d: "We ship, learn, iterate. No corporate slowdown."
                                }
                            ].map((p, i)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(Reveal, {
                                    delay: i * .1,
                                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        style: {
                                            padding: "28px 22px",
                                            background: "rgba(255,255,255,0.02)",
                                            border: "1px solid rgba(255,255,255,0.07)",
                                            borderRadius: "4px",
                                            height: "100%",
                                            transition: "all .3s"
                                        },
                                        onMouseEnter: (e)=>{
                                            e.currentTarget.style.borderColor = C.orange;
                                            e.currentTarget.style.background = "rgba(255,107,0,0.06)";
                                            e.currentTarget.style.transform = "translateY(-4px)";
                                        },
                                        onMouseLeave: (e)=>{
                                            e.currentTarget.style.borderColor = "rgba(255,255,255,0.07)";
                                            e.currentTarget.style.background = "rgba(255,255,255,0.02)";
                                            e.currentTarget.style.transform = "";
                                        },
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                style: {
                                                    fontSize: "24px",
                                                    marginBottom: "12px"
                                                },
                                                children: p.icon
                                            }, void 0, false, {
                                                fileName: "[project]/components/VibeCirclePages.jsx",
                                                lineNumber: 824,
                                                columnNumber: 1165
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                style: {
                                                    fontFamily: "'Bebas Neue',sans-serif",
                                                    fontSize: "18px",
                                                    color: C.white,
                                                    marginBottom: "8px"
                                                },
                                                children: p.t
                                            }, void 0, false, {
                                                fileName: "[project]/components/VibeCirclePages.jsx",
                                                lineNumber: 824,
                                                columnNumber: 1230
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                style: {
                                                    fontFamily: "'DM Sans',sans-serif",
                                                    fontSize: "13px",
                                                    color: C.dim,
                                                    lineHeight: 1.7
                                                },
                                                children: p.d
                                            }, void 0, false, {
                                                fileName: "[project]/components/VibeCirclePages.jsx",
                                                lineNumber: 824,
                                                columnNumber: 1342
                                            }, this)
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/components/VibeCirclePages.jsx",
                                        lineNumber: 824,
                                        columnNumber: 654
                                    }, this)
                                }, i, false, {
                                    fileName: "[project]/components/VibeCirclePages.jsx",
                                    lineNumber: 824,
                                    columnNumber: 625
                                }, this))
                        }, void 0, false, {
                            fileName: "[project]/components/VibeCirclePages.jsx",
                            lineNumber: 824,
                            columnNumber: 182
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "[project]/components/VibeCirclePages.jsx",
                    lineNumber: 824,
                    columnNumber: 63
                }, this)
            }, void 0, false, {
                fileName: "[project]/components/VibeCirclePages.jsx",
                lineNumber: 824,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(Divider, {}, void 0, false, {
                fileName: "[project]/components/VibeCirclePages.jsx",
                lineNumber: 825,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("section", {
                className: "sec-pad",
                style: {
                    position: "relative",
                    overflow: "hidden"
                },
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(Orb, {
                        top: "0%",
                        right: "-5%",
                        size: 450,
                        opacity: 0.08
                    }, void 0, false, {
                        fileName: "[project]/components/VibeCirclePages.jsx",
                        lineNumber: 828,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        style: {
                            maxWidth: "1100px",
                            margin: "0 auto"
                        },
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(Reveal, {
                                style: {
                                    marginBottom: "36px"
                                },
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(Tag, {
                                        children: "Open Roles"
                                    }, void 0, false, {
                                        fileName: "[project]/components/VibeCirclePages.jsx",
                                        lineNumber: 830,
                                        columnNumber: 49
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("h2", {
                                        style: {
                                            fontFamily: "'Bebas Neue',sans-serif",
                                            fontSize: "clamp(30px,5vw,54px)",
                                            color: C.white,
                                            lineHeight: 1,
                                            marginTop: "16px"
                                        },
                                        children: [
                                            "Find your position",
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("br", {}, void 0, false, {
                                                fileName: "[project]/components/VibeCirclePages.jsx",
                                                lineNumber: 830,
                                                columnNumber: 215
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                style: {
                                                    color: C.orange
                                                },
                                                children: "in the vibe."
                                            }, void 0, false, {
                                                fileName: "[project]/components/VibeCirclePages.jsx",
                                                lineNumber: 830,
                                                columnNumber: 220
                                            }, this)
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/components/VibeCirclePages.jsx",
                                        lineNumber: 830,
                                        columnNumber: 70
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/components/VibeCirclePages.jsx",
                                lineNumber: 830,
                                columnNumber: 11
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                style: {
                                    display: "flex",
                                    gap: "7px",
                                    flexWrap: "wrap",
                                    marginBottom: "32px"
                                },
                                children: depts.map((d)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                        onClick: ()=>{
                                            setFilter(d);
                                            setExpanded(null);
                                        },
                                        style: {
                                            fontFamily: "'Bebas Neue',sans-serif",
                                            fontSize: "12px",
                                            letterSpacing: "2px",
                                            padding: "8px 16px",
                                            background: filter === d ? DEPT_COLORS[d] || C.orange : "transparent",
                                            color: filter === d ? C.bg : C.dim,
                                            border: `1px solid ${filter === d ? DEPT_COLORS[d] || C.orange : "rgba(255,255,255,0.12)"}`,
                                            borderRadius: "2px",
                                            cursor: "pointer",
                                            transition: "all .2s"
                                        },
                                        children: d
                                    }, d, false, {
                                        fileName: "[project]/components/VibeCirclePages.jsx",
                                        lineNumber: 832,
                                        columnNumber: 27
                                    }, this))
                            }, void 0, false, {
                                fileName: "[project]/components/VibeCirclePages.jsx",
                                lineNumber: 831,
                                columnNumber: 11
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                style: {
                                    display: "flex",
                                    flexDirection: "column",
                                    gap: "10px"
                                },
                                children: filtered.map((role, i)=>{
                                    const isOpen = expanded === i;
                                    const dc = DEPT_COLORS[role.dept] || C.orange;
                                    const tab = getTab(i);
                                    const TABS = [
                                        "Overview",
                                        "Responsibilities",
                                        "Requirements",
                                        "Stack & Perks"
                                    ];
                                    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(Reveal, {
                                        delay: i * .05,
                                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            style: {
                                                background: isOpen ? `${dc}07` : "rgba(255,255,255,0.02)",
                                                border: `1px solid ${isOpen ? dc + "50" : "rgba(255,255,255,0.07)"}`,
                                                borderRadius: "4px",
                                                overflow: "hidden",
                                                transition: "all .3s"
                                            },
                                            children: [
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                    onClick: ()=>setExpanded(isOpen ? null : i),
                                                    style: {
                                                        padding: "20px 26px",
                                                        display: "flex",
                                                        alignItems: "center",
                                                        gap: "16px",
                                                        cursor: "pointer"
                                                    },
                                                    children: [
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                            style: {
                                                                flex: 1
                                                            },
                                                            children: [
                                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                                    style: {
                                                                        fontFamily: "'DM Sans',sans-serif",
                                                                        fontSize: "16px",
                                                                        fontWeight: 600,
                                                                        color: C.white,
                                                                        marginBottom: "6px"
                                                                    },
                                                                    children: role.title
                                                                }, void 0, false, {
                                                                    fileName: "[project]/components/VibeCirclePages.jsx",
                                                                    lineNumber: 846,
                                                                    columnNumber: 25
                                                                }, this),
                                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                                    style: {
                                                                        display: "flex",
                                                                        gap: "8px",
                                                                        flexWrap: "wrap",
                                                                        alignItems: "center"
                                                                    },
                                                                    children: [
                                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                                            style: {
                                                                                fontFamily: "'Bebas Neue',sans-serif",
                                                                                fontSize: "10px",
                                                                                letterSpacing: "2px",
                                                                                color: dc,
                                                                                background: `${dc}18`,
                                                                                padding: "3px 9px",
                                                                                borderRadius: "2px"
                                                                            },
                                                                            children: role.dept
                                                                        }, void 0, false, {
                                                                            fileName: "[project]/components/VibeCirclePages.jsx",
                                                                            lineNumber: 848,
                                                                            columnNumber: 27
                                                                        }, this),
                                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                                            style: {
                                                                                fontFamily: "'DM Sans',sans-serif",
                                                                                fontSize: "11px",
                                                                                color: C.dimmer
                                                                            },
                                                                            children: "--"
                                                                        }, void 0, false, {
                                                                            fileName: "[project]/components/VibeCirclePages.jsx",
                                                                            lineNumber: 849,
                                                                            columnNumber: 27
                                                                        }, this),
                                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                                            style: {
                                                                                fontFamily: "'DM Sans',sans-serif",
                                                                                fontSize: "12px",
                                                                                color: C.dimmer
                                                                            },
                                                                            children: role.type
                                                                        }, void 0, false, {
                                                                            fileName: "[project]/components/VibeCirclePages.jsx",
                                                                            lineNumber: 850,
                                                                            columnNumber: 27
                                                                        }, this),
                                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                                            style: {
                                                                                fontFamily: "'DM Sans',sans-serif",
                                                                                fontSize: "11px",
                                                                                color: C.dimmer
                                                                            },
                                                                            children: "--"
                                                                        }, void 0, false, {
                                                                            fileName: "[project]/components/VibeCirclePages.jsx",
                                                                            lineNumber: 851,
                                                                            columnNumber: 27
                                                                        }, this),
                                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                                            style: {
                                                                                fontFamily: "'DM Sans',sans-serif",
                                                                                fontSize: "12px",
                                                                                color: C.dimmer
                                                                            },
                                                                            children: role.location
                                                                        }, void 0, false, {
                                                                            fileName: "[project]/components/VibeCirclePages.jsx",
                                                                            lineNumber: 852,
                                                                            columnNumber: 27
                                                                        }, this),
                                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                                            style: {
                                                                                fontFamily: "'DM Sans',sans-serif",
                                                                                fontSize: "11px",
                                                                                color: C.dimmer
                                                                            },
                                                                            children: "--"
                                                                        }, void 0, false, {
                                                                            fileName: "[project]/components/VibeCirclePages.jsx",
                                                                            lineNumber: 853,
                                                                            columnNumber: 27
                                                                        }, this),
                                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                                            style: {
                                                                                fontFamily: "'Bebas Neue',sans-serif",
                                                                                fontSize: "12px",
                                                                                letterSpacing: "1px",
                                                                                color: C.orange
                                                                            },
                                                                            children: role.salary
                                                                        }, void 0, false, {
                                                                            fileName: "[project]/components/VibeCirclePages.jsx",
                                                                            lineNumber: 854,
                                                                            columnNumber: 27
                                                                        }, this)
                                                                    ]
                                                                }, void 0, true, {
                                                                    fileName: "[project]/components/VibeCirclePages.jsx",
                                                                    lineNumber: 847,
                                                                    columnNumber: 25
                                                                }, this)
                                                            ]
                                                        }, void 0, true, {
                                                            fileName: "[project]/components/VibeCirclePages.jsx",
                                                            lineNumber: 845,
                                                            columnNumber: 23
                                                        }, this),
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                            style: {
                                                                width: "26px",
                                                                height: "26px",
                                                                border: `1px solid ${isOpen ? dc : "rgba(255,255,255,0.12)"}`,
                                                                borderRadius: "50%",
                                                                display: "flex",
                                                                alignItems: "center",
                                                                justifyContent: "center",
                                                                color: isOpen ? dc : C.dimmer,
                                                                fontSize: "16px",
                                                                transition: "all .3s",
                                                                transform: isOpen ? "rotate(45deg)" : "none",
                                                                flexShrink: 0,
                                                                fontWeight: 300
                                                            },
                                                            children: "+"
                                                        }, void 0, false, {
                                                            fileName: "[project]/components/VibeCirclePages.jsx",
                                                            lineNumber: 857,
                                                            columnNumber: 23
                                                        }, this)
                                                    ]
                                                }, void 0, true, {
                                                    fileName: "[project]/components/VibeCirclePages.jsx",
                                                    lineNumber: 844,
                                                    columnNumber: 21
                                                }, this),
                                                isOpen && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                    style: {
                                                        padding: "0 26px 28px",
                                                        animation: "fadeUp .3s ease"
                                                    },
                                                    children: [
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                            style: {
                                                                height: "1px",
                                                                background: `${dc}25`,
                                                                marginBottom: "24px"
                                                            }
                                                        }, void 0, false, {
                                                            fileName: "[project]/components/VibeCirclePages.jsx",
                                                            lineNumber: 862,
                                                            columnNumber: 25
                                                        }, this),
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                            style: {
                                                                display: "flex",
                                                                gap: "4px",
                                                                marginBottom: "24px",
                                                                flexWrap: "wrap"
                                                            },
                                                            children: TABS.map((t)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                                                    onClick: ()=>setTab(i, t),
                                                                    style: {
                                                                        fontFamily: "'DM Sans',sans-serif",
                                                                        fontSize: "12px",
                                                                        letterSpacing: ".5px",
                                                                        padding: "7px 14px",
                                                                        background: tab === t ? dc : "rgba(255,255,255,0.04)",
                                                                        color: tab === t ? C.bg : C.dim,
                                                                        border: `1px solid ${tab === t ? dc : "rgba(255,255,255,0.08)"}`,
                                                                        borderRadius: "2px",
                                                                        cursor: "pointer",
                                                                        transition: "all .2s"
                                                                    },
                                                                    children: t
                                                                }, t, false, {
                                                                    fileName: "[project]/components/VibeCirclePages.jsx",
                                                                    lineNumber: 866,
                                                                    columnNumber: 29
                                                                }, this))
                                                        }, void 0, false, {
                                                            fileName: "[project]/components/VibeCirclePages.jsx",
                                                            lineNumber: 864,
                                                            columnNumber: 25
                                                        }, this),
                                                        tab === "Overview" && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                            children: [
                                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                                    style: {
                                                                        fontFamily: "'DM Sans',sans-serif",
                                                                        fontSize: "15px",
                                                                        color: "rgba(255,255,255,0.8)",
                                                                        lineHeight: 1.8,
                                                                        marginBottom: "20px"
                                                                    },
                                                                    children: role.summary
                                                                }, void 0, false, {
                                                                    fileName: "[project]/components/VibeCirclePages.jsx",
                                                                    lineNumber: 872,
                                                                    columnNumber: 29
                                                                }, this),
                                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                                    style: {
                                                                        display: "flex",
                                                                        gap: "10px",
                                                                        flexWrap: "wrap",
                                                                        marginBottom: "20px"
                                                                    },
                                                                    children: [
                                                                        {
                                                                            l: "---- Location",
                                                                            v: role.location
                                                                        },
                                                                        {
                                                                            l: "--- Type",
                                                                            v: role.type
                                                                        },
                                                                        {
                                                                            l: "---- Level",
                                                                            v: role.level
                                                                        },
                                                                        {
                                                                            l: "---- Deadline",
                                                                            v: role.deadline
                                                                        }
                                                                    ].map(({ l, v })=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                                            style: {
                                                                                padding: "10px 16px",
                                                                                background: "rgba(255,255,255,0.03)",
                                                                                border: "1px solid rgba(255,255,255,0.08)",
                                                                                borderRadius: "3px"
                                                                            },
                                                                            children: [
                                                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                                                    style: {
                                                                                        fontFamily: "'DM Sans',sans-serif",
                                                                                        fontSize: "10px",
                                                                                        color: C.dimmer,
                                                                                        letterSpacing: "1px",
                                                                                        textTransform: "uppercase"
                                                                                    },
                                                                                    children: l
                                                                                }, void 0, false, {
                                                                                    fileName: "[project]/components/VibeCirclePages.jsx",
                                                                                    lineNumber: 876,
                                                                                    columnNumber: 35
                                                                                }, this),
                                                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                                                    style: {
                                                                                        fontFamily: "'DM Sans',sans-serif",
                                                                                        fontSize: "13px",
                                                                                        color: C.white,
                                                                                        marginTop: "3px",
                                                                                        fontWeight: 600
                                                                                    },
                                                                                    children: v
                                                                                }, void 0, false, {
                                                                                    fileName: "[project]/components/VibeCirclePages.jsx",
                                                                                    lineNumber: 877,
                                                                                    columnNumber: 35
                                                                                }, this)
                                                                            ]
                                                                        }, l, true, {
                                                                            fileName: "[project]/components/VibeCirclePages.jsx",
                                                                            lineNumber: 875,
                                                                            columnNumber: 33
                                                                        }, this))
                                                                }, void 0, false, {
                                                                    fileName: "[project]/components/VibeCirclePages.jsx",
                                                                    lineNumber: 873,
                                                                    columnNumber: 29
                                                                }, this)
                                                            ]
                                                        }, void 0, true, {
                                                            fileName: "[project]/components/VibeCirclePages.jsx",
                                                            lineNumber: 871,
                                                            columnNumber: 27
                                                        }, this),
                                                        tab === "Responsibilities" && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                            style: {
                                                                display: "flex",
                                                                flexDirection: "column",
                                                                gap: "10px"
                                                            },
                                                            children: role.responsibilities.map((r, idx)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                                    style: {
                                                                        display: "flex",
                                                                        gap: "12px",
                                                                        alignItems: "flex-start",
                                                                        padding: "12px 16px",
                                                                        background: "rgba(255,255,255,0.02)",
                                                                        borderRadius: "3px",
                                                                        border: "1px solid rgba(255,255,255,0.06)"
                                                                    },
                                                                    children: [
                                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                                            style: {
                                                                                color: dc,
                                                                                fontSize: "14px",
                                                                                marginTop: "1px",
                                                                                flexShrink: 0
                                                                            },
                                                                            children: "---"
                                                                        }, void 0, false, {
                                                                            fileName: "[project]/components/VibeCirclePages.jsx",
                                                                            lineNumber: 887,
                                                                            columnNumber: 33
                                                                        }, this),
                                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                                            style: {
                                                                                fontFamily: "'DM Sans',sans-serif",
                                                                                fontSize: "14px",
                                                                                color: "rgba(255,255,255,0.75)",
                                                                                lineHeight: 1.6
                                                                            },
                                                                            children: r
                                                                        }, void 0, false, {
                                                                            fileName: "[project]/components/VibeCirclePages.jsx",
                                                                            lineNumber: 888,
                                                                            columnNumber: 33
                                                                        }, this)
                                                                    ]
                                                                }, idx, true, {
                                                                    fileName: "[project]/components/VibeCirclePages.jsx",
                                                                    lineNumber: 886,
                                                                    columnNumber: 31
                                                                }, this))
                                                        }, void 0, false, {
                                                            fileName: "[project]/components/VibeCirclePages.jsx",
                                                            lineNumber: 884,
                                                            columnNumber: 27
                                                        }, this),
                                                        tab === "Requirements" && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                            children: [
                                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                                    style: {
                                                                        marginBottom: "20px"
                                                                    },
                                                                    children: [
                                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                                            style: {
                                                                                fontFamily: "'Bebas Neue',sans-serif",
                                                                                fontSize: "13px",
                                                                                letterSpacing: "2px",
                                                                                color: dc,
                                                                                marginBottom: "12px"
                                                                            },
                                                                            children: "Requirements"
                                                                        }, void 0, false, {
                                                                            fileName: "[project]/components/VibeCirclePages.jsx",
                                                                            lineNumber: 896,
                                                                            columnNumber: 31
                                                                        }, this),
                                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                                            style: {
                                                                                display: "flex",
                                                                                flexDirection: "column",
                                                                                gap: "8px"
                                                                            },
                                                                            children: role.requirements.map((r, idx)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                                                    style: {
                                                                                        display: "flex",
                                                                                        gap: "10px",
                                                                                        alignItems: "flex-start"
                                                                                    },
                                                                                    children: [
                                                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                                                            style: {
                                                                                                color: dc,
                                                                                                fontSize: "14px",
                                                                                                flexShrink: 0,
                                                                                                marginTop: "1px"
                                                                                            },
                                                                                            children: "---"
                                                                                        }, void 0, false, {
                                                                                            fileName: "[project]/components/VibeCirclePages.jsx",
                                                                                            lineNumber: 900,
                                                                                            columnNumber: 37
                                                                                        }, this),
                                                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                                                            style: {
                                                                                                fontFamily: "'DM Sans',sans-serif",
                                                                                                fontSize: "14px",
                                                                                                color: "rgba(255,255,255,0.75)",
                                                                                                lineHeight: 1.6
                                                                                            },
                                                                                            children: r
                                                                                        }, void 0, false, {
                                                                                            fileName: "[project]/components/VibeCirclePages.jsx",
                                                                                            lineNumber: 901,
                                                                                            columnNumber: 37
                                                                                        }, this)
                                                                                    ]
                                                                                }, idx, true, {
                                                                                    fileName: "[project]/components/VibeCirclePages.jsx",
                                                                                    lineNumber: 899,
                                                                                    columnNumber: 35
                                                                                }, this))
                                                                        }, void 0, false, {
                                                                            fileName: "[project]/components/VibeCirclePages.jsx",
                                                                            lineNumber: 897,
                                                                            columnNumber: 31
                                                                        }, this)
                                                                    ]
                                                                }, void 0, true, {
                                                                    fileName: "[project]/components/VibeCirclePages.jsx",
                                                                    lineNumber: 895,
                                                                    columnNumber: 29
                                                                }, this),
                                                                role.niceToHave && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                                    children: [
                                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                                            style: {
                                                                                fontFamily: "'Bebas Neue',sans-serif",
                                                                                fontSize: "13px",
                                                                                letterSpacing: "2px",
                                                                                color: C.dimmer,
                                                                                marginBottom: "12px"
                                                                            },
                                                                            children: "Nice to Have"
                                                                        }, void 0, false, {
                                                                            fileName: "[project]/components/VibeCirclePages.jsx",
                                                                            lineNumber: 906,
                                                                            columnNumber: 52
                                                                        }, this),
                                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                                            style: {
                                                                                display: "flex",
                                                                                flexDirection: "column",
                                                                                gap: "8px"
                                                                            },
                                                                            children: role.niceToHave.map((r, idx)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                                                    style: {
                                                                                        display: "flex",
                                                                                        gap: "10px",
                                                                                        alignItems: "flex-start"
                                                                                    },
                                                                                    children: [
                                                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                                                            style: {
                                                                                                color: C.dimmer,
                                                                                                fontSize: "14px",
                                                                                                flexShrink: 0,
                                                                                                marginTop: "1px"
                                                                                            },
                                                                                            children: "---"
                                                                                        }, void 0, false, {
                                                                                            fileName: "[project]/components/VibeCirclePages.jsx",
                                                                                            lineNumber: 906,
                                                                                            columnNumber: 361
                                                                                        }, this),
                                                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                                                            style: {
                                                                                                fontFamily: "'DM Sans',sans-serif",
                                                                                                fontSize: "14px",
                                                                                                color: C.dim,
                                                                                                lineHeight: 1.6
                                                                                            },
                                                                                            children: r
                                                                                        }, void 0, false, {
                                                                                            fileName: "[project]/components/VibeCirclePages.jsx",
                                                                                            lineNumber: 906,
                                                                                            columnNumber: 447
                                                                                        }, this)
                                                                                    ]
                                                                                }, idx, true, {
                                                                                    fileName: "[project]/components/VibeCirclePages.jsx",
                                                                                    lineNumber: 906,
                                                                                    columnNumber: 286
                                                                                }, this))
                                                                        }, void 0, false, {
                                                                            fileName: "[project]/components/VibeCirclePages.jsx",
                                                                            lineNumber: 906,
                                                                            columnNumber: 193
                                                                        }, this)
                                                                    ]
                                                                }, void 0, true, {
                                                                    fileName: "[project]/components/VibeCirclePages.jsx",
                                                                    lineNumber: 906,
                                                                    columnNumber: 47
                                                                }, this)
                                                            ]
                                                        }, void 0, true, {
                                                            fileName: "[project]/components/VibeCirclePages.jsx",
                                                            lineNumber: 894,
                                                            columnNumber: 27
                                                        }, this),
                                                        tab === "Stack & Perks" && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                            children: [
                                                                role.techStack && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                                    style: {
                                                                        marginBottom: "24px"
                                                                    },
                                                                    children: [
                                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                                            style: {
                                                                                fontFamily: "'Bebas Neue',sans-serif",
                                                                                fontSize: "13px",
                                                                                letterSpacing: "2px",
                                                                                color: dc,
                                                                                marginBottom: "12px"
                                                                            },
                                                                            children: "Tech Stack"
                                                                        }, void 0, false, {
                                                                            fileName: "[project]/components/VibeCirclePages.jsx",
                                                                            lineNumber: 911,
                                                                            columnNumber: 81
                                                                        }, this),
                                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                                            style: {
                                                                                display: "flex",
                                                                                gap: "8px",
                                                                                flexWrap: "wrap"
                                                                            },
                                                                            children: role.techStack.map((t)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                                                    style: {
                                                                                        fontFamily: "'DM Sans',sans-serif",
                                                                                        fontSize: "12px",
                                                                                        color: C.white,
                                                                                        padding: "6px 14px",
                                                                                        background: `${dc}15`,
                                                                                        border: `1px solid ${dc}30`,
                                                                                        borderRadius: "2px"
                                                                                    },
                                                                                    children: t
                                                                                }, t, false, {
                                                                                    fileName: "[project]/components/VibeCirclePages.jsx",
                                                                                    lineNumber: 911,
                                                                                    columnNumber: 293
                                                                                }, this))
                                                                        }, void 0, false, {
                                                                            fileName: "[project]/components/VibeCirclePages.jsx",
                                                                            lineNumber: 911,
                                                                            columnNumber: 214
                                                                        }, this)
                                                                    ]
                                                                }, void 0, true, {
                                                                    fileName: "[project]/components/VibeCirclePages.jsx",
                                                                    lineNumber: 911,
                                                                    columnNumber: 46
                                                                }, this),
                                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                                    children: [
                                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                                            style: {
                                                                                fontFamily: "'Bebas Neue',sans-serif",
                                                                                fontSize: "13px",
                                                                                letterSpacing: "2px",
                                                                                color: dc,
                                                                                marginBottom: "12px"
                                                                            },
                                                                            children: "Benefits"
                                                                        }, void 0, false, {
                                                                            fileName: "[project]/components/VibeCirclePages.jsx",
                                                                            lineNumber: 912,
                                                                            columnNumber: 34
                                                                        }, this),
                                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                                            style: {
                                                                                display: "grid",
                                                                                gridTemplateColumns: "1fr 1fr",
                                                                                gap: "8px"
                                                                            },
                                                                            children: [
                                                                                "Equity for all full-time roles",
                                                                                "Remote-first & flexible hours",
                                                                                "R30,000/yr learning budget",
                                                                                "Medical aid stipend",
                                                                                "Home office stipend (R7,500)",
                                                                                "Quarterly team retreats",
                                                                                "Unlimited PTO (we mean it)",
                                                                                "Free VibeCircle Orbit plan"
                                                                            ].map((b)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                                                    style: {
                                                                                        display: "flex",
                                                                                        gap: "8px",
                                                                                        alignItems: "center",
                                                                                        padding: "10px 14px",
                                                                                        background: "rgba(255,255,255,0.02)",
                                                                                        border: "1px solid rgba(255,255,255,0.06)",
                                                                                        borderRadius: "3px"
                                                                                    },
                                                                                    children: [
                                                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                                                            style: {
                                                                                                color: dc,
                                                                                                fontSize: "12px",
                                                                                                flexShrink: 0
                                                                                            },
                                                                                            children: "---"
                                                                                        }, void 0, false, {
                                                                                            fileName: "[project]/components/VibeCirclePages.jsx",
                                                                                            lineNumber: 912,
                                                                                            columnNumber: 661
                                                                                        }, this),
                                                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                                                            style: {
                                                                                                fontFamily: "'DM Sans',sans-serif",
                                                                                                fontSize: "12px",
                                                                                                color: "rgba(255,255,255,0.7)"
                                                                                            },
                                                                                            children: b
                                                                                        }, void 0, false, {
                                                                                            fileName: "[project]/components/VibeCirclePages.jsx",
                                                                                            lineNumber: 912,
                                                                                            columnNumber: 725
                                                                                        }, this)
                                                                                    ]
                                                                                }, b, true, {
                                                                                    fileName: "[project]/components/VibeCirclePages.jsx",
                                                                                    lineNumber: 912,
                                                                                    columnNumber: 476
                                                                                }, this))
                                                                        }, void 0, false, {
                                                                            fileName: "[project]/components/VibeCirclePages.jsx",
                                                                            lineNumber: 912,
                                                                            columnNumber: 165
                                                                        }, this)
                                                                    ]
                                                                }, void 0, true, {
                                                                    fileName: "[project]/components/VibeCirclePages.jsx",
                                                                    lineNumber: 912,
                                                                    columnNumber: 29
                                                                }, this)
                                                            ]
                                                        }, void 0, true, {
                                                            fileName: "[project]/components/VibeCirclePages.jsx",
                                                            lineNumber: 910,
                                                            columnNumber: 27
                                                        }, this),
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                            style: {
                                                                marginTop: "24px"
                                                            },
                                                            children: [
                                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                                                    onClick: ()=>setApplyOpen(applyOpen === i ? null : i),
                                                                    style: {
                                                                        fontFamily: "'Bebas Neue',sans-serif",
                                                                        fontSize: "13px",
                                                                        letterSpacing: "3px",
                                                                        padding: "12px 28px",
                                                                        background: dc,
                                                                        color: C.bg,
                                                                        border: "none",
                                                                        borderRadius: "2px",
                                                                        cursor: "pointer",
                                                                        transition: "box-shadow .2s,transform .2s",
                                                                        marginRight: "10px"
                                                                    },
                                                                    onMouseEnter: (e)=>{
                                                                        e.target.style.boxShadow = `0 8px 24px ${dc}45`;
                                                                        e.target.style.transform = "translateY(-2px)";
                                                                    },
                                                                    onMouseLeave: (e)=>{
                                                                        e.target.style.boxShadow = "";
                                                                        e.target.style.transform = "";
                                                                    },
                                                                    children: applyOpen === i ? "Close Form" : "Apply Now"
                                                                }, void 0, false, {
                                                                    fileName: "[project]/components/VibeCirclePages.jsx",
                                                                    lineNumber: 916,
                                                                    columnNumber: 27
                                                                }, this),
                                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                                    style: {
                                                                        fontFamily: "'DM Sans',sans-serif",
                                                                        fontSize: "11px",
                                                                        color: C.dimmer
                                                                    },
                                                                    children: [
                                                                        "or email ",
                                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("a", {
                                                                            href: "mailto:careers@vibecircle.com",
                                                                            style: {
                                                                                color: dc,
                                                                                textDecoration: "none"
                                                                            },
                                                                            children: "careers@vibecircle.com"
                                                                        }, void 0, false, {
                                                                            fileName: "[project]/components/VibeCirclePages.jsx",
                                                                            lineNumber: 922,
                                                                            columnNumber: 117
                                                                        }, this)
                                                                    ]
                                                                }, void 0, true, {
                                                                    fileName: "[project]/components/VibeCirclePages.jsx",
                                                                    lineNumber: 922,
                                                                    columnNumber: 27
                                                                }, this)
                                                            ]
                                                        }, void 0, true, {
                                                            fileName: "[project]/components/VibeCirclePages.jsx",
                                                            lineNumber: 915,
                                                            columnNumber: 25
                                                        }, this),
                                                        applyOpen === i && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                            style: {
                                                                marginTop: "20px",
                                                                padding: "20px",
                                                                background: "rgba(255,255,255,0.02)",
                                                                border: `1px solid ${dc}30`,
                                                                borderRadius: "4px",
                                                                animation: "fadeUp .3s ease"
                                                            },
                                                            children: [
                                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                                    style: {
                                                                        display: "grid",
                                                                        gridTemplateColumns: "repeat(auto-fit,minmax(220px,1fr))",
                                                                        gap: "12px",
                                                                        marginBottom: "12px"
                                                                    },
                                                                    children: [
                                                                        {
                                                                            label: "Full Name",
                                                                            type: "text",
                                                                            placeholder: "Alex Rivera"
                                                                        },
                                                                        {
                                                                            label: "Email",
                                                                            type: "email",
                                                                            placeholder: "alex@email.com"
                                                                        },
                                                                        {
                                                                            label: "Location",
                                                                            type: "text",
                                                                            placeholder: "City, Country"
                                                                        },
                                                                        {
                                                                            label: "Portfolio / LinkedIn",
                                                                            type: "url",
                                                                            placeholder: "https://"
                                                                        }
                                                                    ].map((f)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("label", {
                                                                            style: {
                                                                                display: "flex",
                                                                                flexDirection: "column",
                                                                                gap: "8px"
                                                                            },
                                                                            children: [
                                                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                                                    style: {
                                                                                        fontFamily: "'DM Sans',sans-serif",
                                                                                        fontSize: "11px",
                                                                                        color: C.dimmer,
                                                                                        letterSpacing: "1px",
                                                                                        textTransform: "uppercase"
                                                                                    },
                                                                                    children: f.label
                                                                                }, void 0, false, {
                                                                                    fileName: "[project]/components/VibeCirclePages.jsx",
                                                                                    lineNumber: 934,
                                                                                    columnNumber: 35
                                                                                }, this),
                                                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
                                                                                    type: f.type,
                                                                                    placeholder: f.placeholder,
                                                                                    style: {
                                                                                        height: "42px",
                                                                                        padding: "0 12px",
                                                                                        background: "#0C0C18",
                                                                                        border: `1px solid rgba(255,255,255,0.12)`,
                                                                                        color: C.white,
                                                                                        borderRadius: "3px",
                                                                                        fontFamily: "'DM Sans',sans-serif",
                                                                                        fontSize: "13px",
                                                                                        outline: "none"
                                                                                    }
                                                                                }, void 0, false, {
                                                                                    fileName: "[project]/components/VibeCirclePages.jsx",
                                                                                    lineNumber: 935,
                                                                                    columnNumber: 35
                                                                                }, this)
                                                                            ]
                                                                        }, f.label, true, {
                                                                            fileName: "[project]/components/VibeCirclePages.jsx",
                                                                            lineNumber: 933,
                                                                            columnNumber: 33
                                                                        }, this))
                                                                }, void 0, false, {
                                                                    fileName: "[project]/components/VibeCirclePages.jsx",
                                                                    lineNumber: 926,
                                                                    columnNumber: 29
                                                                }, this),
                                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("label", {
                                                                    style: {
                                                                        display: "flex",
                                                                        flexDirection: "column",
                                                                        gap: "8px",
                                                                        marginBottom: "12px"
                                                                    },
                                                                    children: [
                                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                                            style: {
                                                                                fontFamily: "'DM Sans',sans-serif",
                                                                                fontSize: "11px",
                                                                                color: C.dimmer,
                                                                                letterSpacing: "1px",
                                                                                textTransform: "uppercase"
                                                                            },
                                                                            children: "Why VibeCircle?"
                                                                        }, void 0, false, {
                                                                            fileName: "[project]/components/VibeCirclePages.jsx",
                                                                            lineNumber: 940,
                                                                            columnNumber: 31
                                                                        }, this),
                                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("textarea", {
                                                                            rows: 4,
                                                                            placeholder: "Tell us what you want to build.",
                                                                            style: {
                                                                                padding: "10px 12px",
                                                                                background: "#0C0C18",
                                                                                border: `1px solid rgba(255,255,255,0.12)`,
                                                                                color: C.white,
                                                                                borderRadius: "3px",
                                                                                fontFamily: "'DM Sans',sans-serif",
                                                                                fontSize: "13px",
                                                                                outline: "none",
                                                                                resize: "vertical"
                                                                            }
                                                                        }, void 0, false, {
                                                                            fileName: "[project]/components/VibeCirclePages.jsx",
                                                                            lineNumber: 941,
                                                                            columnNumber: 31
                                                                        }, this)
                                                                    ]
                                                                }, void 0, true, {
                                                                    fileName: "[project]/components/VibeCirclePages.jsx",
                                                                    lineNumber: 939,
                                                                    columnNumber: 29
                                                                }, this),
                                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("label", {
                                                                    style: {
                                                                        display: "flex",
                                                                        alignItems: "center",
                                                                        justifyContent: "space-between",
                                                                        gap: "16px",
                                                                        padding: "14px 16px",
                                                                        background: "rgba(255,255,255,0.02)",
                                                                        border: `1px dashed ${dc}55`,
                                                                        borderRadius: "4px",
                                                                        cursor: "pointer",
                                                                        transition: "all .2s"
                                                                    },
                                                                    onMouseEnter: (e)=>{
                                                                        e.currentTarget.style.background = `${dc}10`;
                                                                        e.currentTarget.style.borderColor = dc;
                                                                    },
                                                                    onMouseLeave: (e)=>{
                                                                        e.currentTarget.style.background = "rgba(255,255,255,0.02)";
                                                                        e.currentTarget.style.borderColor = `${dc}55`;
                                                                    },
                                                                    children: [
                                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                                            children: [
                                                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                                                    style: {
                                                                                        fontFamily: "'Bebas Neue',sans-serif",
                                                                                        fontSize: "14px",
                                                                                        letterSpacing: "3px",
                                                                                        color: dc
                                                                                    },
                                                                                    children: "Upload CV"
                                                                                }, void 0, false, {
                                                                                    fileName: "[project]/components/VibeCirclePages.jsx",
                                                                                    lineNumber: 949,
                                                                                    columnNumber: 33
                                                                                }, this),
                                                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                                                    style: {
                                                                                        fontFamily: "'DM Sans',sans-serif",
                                                                                        fontSize: "12px",
                                                                                        color: C.dimmer,
                                                                                        marginTop: "4px"
                                                                                    },
                                                                                    children: "PDF or DOCX -- up to 10MB"
                                                                                }, void 0, false, {
                                                                                    fileName: "[project]/components/VibeCirclePages.jsx",
                                                                                    lineNumber: 950,
                                                                                    columnNumber: 33
                                                                                }, this)
                                                                            ]
                                                                        }, void 0, true, {
                                                                            fileName: "[project]/components/VibeCirclePages.jsx",
                                                                            lineNumber: 948,
                                                                            columnNumber: 31
                                                                        }, this),
                                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                                            style: {
                                                                                fontFamily: "'DM Sans',sans-serif",
                                                                                fontSize: "12px",
                                                                                color: C.white,
                                                                                background: `${dc}18`,
                                                                                border: `1px solid ${dc}40`,
                                                                                padding: "6px 12px",
                                                                                borderRadius: "3px"
                                                                            },
                                                                            children: "Choose File"
                                                                        }, void 0, false, {
                                                                            fileName: "[project]/components/VibeCirclePages.jsx",
                                                                            lineNumber: 952,
                                                                            columnNumber: 31
                                                                        }, this),
                                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
                                                                            type: "file",
                                                                            accept: ".pdf,.doc,.docx",
                                                                            style: {
                                                                                display: "none"
                                                                            }
                                                                        }, void 0, false, {
                                                                            fileName: "[project]/components/VibeCirclePages.jsx",
                                                                            lineNumber: 953,
                                                                            columnNumber: 31
                                                                        }, this)
                                                                    ]
                                                                }, void 0, true, {
                                                                    fileName: "[project]/components/VibeCirclePages.jsx",
                                                                    lineNumber: 943,
                                                                    columnNumber: 29
                                                                }, this),
                                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                                    style: {
                                                                        display: "flex",
                                                                        gap: "10px",
                                                                        alignItems: "center",
                                                                        marginTop: "16px",
                                                                        flexWrap: "wrap"
                                                                    },
                                                                    children: [
                                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                                                            onClick: ()=>{
                                                                                addToast({
                                                                                    type: "success",
                                                                                    title: "Application Received!",
                                                                                    message: `We'll review your application for ${role.title} within 5 business days.`
                                                                                });
                                                                                setApplyOpen(null);
                                                                            },
                                                                            style: {
                                                                                fontFamily: "'Bebas Neue',sans-serif",
                                                                                fontSize: "13px",
                                                                                letterSpacing: "3px",
                                                                                padding: "12px 26px",
                                                                                background: dc,
                                                                                color: C.bg,
                                                                                border: "none",
                                                                                borderRadius: "2px",
                                                                                cursor: "pointer",
                                                                                transition: "box-shadow .2s"
                                                                            },
                                                                            onMouseEnter: (e)=>e.target.style.boxShadow = `0 8px 24px ${dc}45`,
                                                                            onMouseLeave: (e)=>e.target.style.boxShadow = "",
                                                                            children: "Submit Application"
                                                                        }, void 0, false, {
                                                                            fileName: "[project]/components/VibeCirclePages.jsx",
                                                                            lineNumber: 956,
                                                                            columnNumber: 31
                                                                        }, this),
                                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                                            style: {
                                                                                fontFamily: "'DM Sans',sans-serif",
                                                                                fontSize: "11px",
                                                                                color: C.dimmer
                                                                            },
                                                                            children: "We respond within 5 business days."
                                                                        }, void 0, false, {
                                                                            fileName: "[project]/components/VibeCirclePages.jsx",
                                                                            lineNumber: 962,
                                                                            columnNumber: 31
                                                                        }, this)
                                                                    ]
                                                                }, void 0, true, {
                                                                    fileName: "[project]/components/VibeCirclePages.jsx",
                                                                    lineNumber: 955,
                                                                    columnNumber: 29
                                                                }, this)
                                                            ]
                                                        }, void 0, true, {
                                                            fileName: "[project]/components/VibeCirclePages.jsx",
                                                            lineNumber: 925,
                                                            columnNumber: 27
                                                        }, this)
                                                    ]
                                                }, void 0, true, {
                                                    fileName: "[project]/components/VibeCirclePages.jsx",
                                                    lineNumber: 861,
                                                    columnNumber: 23
                                                }, this)
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/components/VibeCirclePages.jsx",
                                            lineNumber: 842,
                                            columnNumber: 19
                                        }, this)
                                    }, role.title + filter, false, {
                                        fileName: "[project]/components/VibeCirclePages.jsx",
                                        lineNumber: 841,
                                        columnNumber: 17
                                    }, this);
                                })
                            }, void 0, false, {
                                fileName: "[project]/components/VibeCirclePages.jsx",
                                lineNumber: 834,
                                columnNumber: 11
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/components/VibeCirclePages.jsx",
                        lineNumber: 829,
                        columnNumber: 9
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/components/VibeCirclePages.jsx",
                lineNumber: 827,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(Divider, {}, void 0, false, {
                fileName: "[project]/components/VibeCirclePages.jsx",
                lineNumber: 975,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("section", {
                className: "sec-pad",
                style: {
                    background: C.bg2
                },
                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    style: {
                        maxWidth: "800px",
                        margin: "0 auto"
                    },
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(Reveal, {
                            style: {
                                marginBottom: "44px"
                            },
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(Tag, {
                                    children: "Hiring FAQ"
                                }, void 0, false, {
                                    fileName: "[project]/components/VibeCirclePages.jsx",
                                    lineNumber: 976,
                                    columnNumber: 149
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("h2", {
                                    style: {
                                        fontFamily: "'Bebas Neue',sans-serif",
                                        fontSize: "clamp(26px,4vw,44px)",
                                        color: C.white,
                                        lineHeight: 1,
                                        marginTop: "16px"
                                    },
                                    children: [
                                        "About joining ",
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                            style: {
                                                color: C.orange
                                            },
                                            children: "VibeCircle."
                                        }, void 0, false, {
                                            fileName: "[project]/components/VibeCirclePages.jsx",
                                            lineNumber: 976,
                                            columnNumber: 311
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/components/VibeCirclePages.jsx",
                                    lineNumber: 976,
                                    columnNumber: 170
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "[project]/components/VibeCirclePages.jsx",
                            lineNumber: 976,
                            columnNumber: 111
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(FAQ, {
                            items: JOBS_FAQS
                        }, void 0, false, {
                            fileName: "[project]/components/VibeCirclePages.jsx",
                            lineNumber: 976,
                            columnNumber: 374
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "[project]/components/VibeCirclePages.jsx",
                    lineNumber: 976,
                    columnNumber: 63
                }, this)
            }, void 0, false, {
                fileName: "[project]/components/VibeCirclePages.jsx",
                lineNumber: 976,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("section", {
                style: {
                    background: C.orange,
                    padding: "64px clamp(20px,6vw,64px)"
                },
                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    style: {
                        maxWidth: "1100px",
                        margin: "0 auto",
                        display: "flex",
                        alignItems: "center",
                        justifyContent: "space-between",
                        flexWrap: "wrap",
                        gap: "24px"
                    },
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    style: {
                                        fontFamily: "'Bebas Neue',sans-serif",
                                        fontSize: "clamp(24px,4vw,44px)",
                                        color: C.bg,
                                        lineHeight: 1
                                    },
                                    children: [
                                        "Don't see your role?",
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("br", {}, void 0, false, {
                                            fileName: "[project]/components/VibeCirclePages.jsx",
                                            lineNumber: 977,
                                            columnNumber: 357
                                        }, this),
                                        "Build your own."
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/components/VibeCirclePages.jsx",
                                    lineNumber: 977,
                                    columnNumber: 229
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                    style: {
                                        fontFamily: "'DM Sans',sans-serif",
                                        fontSize: "14px",
                                        color: "rgba(5,5,10,0.6)",
                                        marginTop: "8px"
                                    },
                                    children: "careers@vibecircle.com"
                                }, void 0, false, {
                                    fileName: "[project]/components/VibeCirclePages.jsx",
                                    lineNumber: 977,
                                    columnNumber: 383
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "[project]/components/VibeCirclePages.jsx",
                            lineNumber: 977,
                            columnNumber: 224
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                            onClick: ()=>openWaitlist("Custom Role"),
                            style: {
                                fontFamily: "'Bebas Neue',sans-serif",
                                fontSize: "14px",
                                letterSpacing: "3px",
                                padding: "14px 36px",
                                background: C.bg,
                                color: C.orange,
                                border: "none",
                                borderRadius: "2px",
                                cursor: "pointer",
                                transition: "transform .2s"
                            },
                            onMouseEnter: (e)=>e.target.style.transform = "translateY(-2px)",
                            onMouseLeave: (e)=>e.target.style.transform = "",
                            children: "Get in Touch"
                        }, void 0, false, {
                            fileName: "[project]/components/VibeCirclePages.jsx",
                            lineNumber: 977,
                            columnNumber: 519
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "[project]/components/VibeCirclePages.jsx",
                    lineNumber: 977,
                    columnNumber: 82
                }, this)
            }, void 0, false, {
                fileName: "[project]/components/VibeCirclePages.jsx",
                lineNumber: 977,
                columnNumber: 7
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/components/VibeCirclePages.jsx",
        lineNumber: 820,
        columnNumber: 5
    }, this);
}
// ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------
// MARKETPLACE PAGE
// ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------
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
        color: C.orange,
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
        color: C.pink,
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
        color: C.blue,
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
        color: C.purple,
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
        color: C.gold,
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
        color: C.blue,
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
        color: C.orange,
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
        color: C.pink,
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
    "HOT": C.orange,
    "FEATURED": C.pink,
    "NEW": C.blue,
    "PREMIUM": C.purple
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
                        fileName: "[project]/components/VibeCirclePages.jsx",
                        lineNumber: 1000,
                        columnNumber: 122
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                        style: {
                            fontFamily: "'Bebas Neue',sans-serif",
                            fontSize: "10px",
                            letterSpacing: "2px",
                            color: full ? C.pink : color
                        },
                        children: full ? "FULL" : `${slots - filled} LEFT`
                    }, void 0, false, {
                        fileName: "[project]/components/VibeCirclePages.jsx",
                        lineNumber: 1000,
                        columnNumber: 248
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/components/VibeCirclePages.jsx",
                lineNumber: 1000,
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
                        background: full ? C.pink : color,
                        borderRadius: "2px",
                        transition: "width .6s ease"
                    }
                }, void 0, false, {
                    fileName: "[project]/components/VibeCirclePages.jsx",
                    lineNumber: 1000,
                    columnNumber: 511
                }, this)
            }, void 0, false, {
                fileName: "[project]/components/VibeCirclePages.jsx",
                lineNumber: 1000,
                columnNumber: 410
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/components/VibeCirclePages.jsx",
        lineNumber: 1000,
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
                fileName: "[project]/components/VibeCirclePages.jsx",
                lineNumber: 1005,
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
                                fileName: "[project]/components/VibeCirclePages.jsx",
                                lineNumber: 1006,
                                columnNumber: 171
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        style: {
                                            fontFamily: "'Bebas Neue',sans-serif",
                                            fontSize: "14px",
                                            color: C.white,
                                            letterSpacing: ".5px"
                                        },
                                        children: brand.name
                                    }, void 0, false, {
                                        fileName: "[project]/components/VibeCirclePages.jsx",
                                        lineNumber: 1006,
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
                                        fileName: "[project]/components/VibeCirclePages.jsx",
                                        lineNumber: 1006,
                                        columnNumber: 517
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/components/VibeCirclePages.jsx",
                                lineNumber: 1006,
                                columnNumber: 391
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/components/VibeCirclePages.jsx",
                        lineNumber: 1006,
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
                        fileName: "[project]/components/VibeCirclePages.jsx",
                        lineNumber: 1006,
                        columnNumber: 723
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/components/VibeCirclePages.jsx",
                lineNumber: 1006,
                columnNumber: 5
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                style: {
                    fontFamily: "'DM Sans',sans-serif",
                    fontSize: "13px",
                    color: C.dim,
                    lineHeight: 1.7,
                    flex: 1,
                    marginBottom: "12px"
                },
                children: brand.desc
            }, void 0, false, {
                fileName: "[project]/components/VibeCirclePages.jsx",
                lineNumber: 1007,
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
                        fileName: "[project]/components/VibeCirclePages.jsx",
                        lineNumber: 1008,
                        columnNumber: 100
                    }, this))
            }, void 0, false, {
                fileName: "[project]/components/VibeCirclePages.jsx",
                lineNumber: 1008,
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
                                        fileName: "[project]/components/VibeCirclePages.jsx",
                                        lineNumber: 1009,
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
                                        fileName: "[project]/components/VibeCirclePages.jsx",
                                        lineNumber: 1009,
                                        columnNumber: 264
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/components/VibeCirclePages.jsx",
                                lineNumber: 1009,
                                columnNumber: 153
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        style: {
                                            fontFamily: "'Bebas Neue',sans-serif",
                                            fontSize: "13px",
                                            color: C.white
                                        },
                                        children: brand.type
                                    }, void 0, false, {
                                        fileName: "[project]/components/VibeCirclePages.jsx",
                                        lineNumber: 1009,
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
                                        fileName: "[project]/components/VibeCirclePages.jsx",
                                        lineNumber: 1009,
                                        columnNumber: 528
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/components/VibeCirclePages.jsx",
                                lineNumber: 1009,
                                columnNumber: 423
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/components/VibeCirclePages.jsx",
                        lineNumber: 1009,
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
                            color: full ? "rgba(255,255,255,0.2)" : C.bg,
                            border: full ? "1px solid rgba(255,255,255,0.08)" : "none",
                            borderRadius: "2px",
                            cursor: full ? "not-allowed" : "pointer",
                            transition: "all .2s",
                            flexShrink: 0
                        },
                        children: full ? "Full" : "Apply"
                    }, void 0, false, {
                        fileName: "[project]/components/VibeCirclePages.jsx",
                        lineNumber: 1009,
                        columnNumber: 691
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/components/VibeCirclePages.jsx",
                lineNumber: 1009,
                columnNumber: 5
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(ProgressBar, {
                filled: brand.filled,
                slots: brand.slots,
                color: brand.color
            }, void 0, false, {
                fileName: "[project]/components/VibeCirclePages.jsx",
                lineNumber: 1010,
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
                        fileName: "[project]/components/VibeCirclePages.jsx",
                        lineNumber: 1011,
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
                        fileName: "[project]/components/VibeCirclePages.jsx",
                        lineNumber: 1011,
                        columnNumber: 124
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/components/VibeCirclePages.jsx",
                lineNumber: 1011,
                columnNumber: 5
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/components/VibeCirclePages.jsx",
        lineNumber: 1004,
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
                        color: C.dim,
                        fontSize: "20px",
                        cursor: "pointer",
                        lineHeight: 1
                    },
                    children: "--"
                }, void 0, false, {
                    fileName: "[project]/components/VibeCirclePages.jsx",
                    lineNumber: 1027,
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
                                    fileName: "[project]/components/VibeCirclePages.jsx",
                                    lineNumber: 1028,
                                    columnNumber: 101
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            style: {
                                                fontFamily: "'Bebas Neue',sans-serif",
                                                fontSize: "17px",
                                                color: C.white
                                            },
                                            children: brand.name
                                        }, void 0, false, {
                                            fileName: "[project]/components/VibeCirclePages.jsx",
                                            lineNumber: 1028,
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
                                            fileName: "[project]/components/VibeCirclePages.jsx",
                                            lineNumber: 1028,
                                            columnNumber: 390
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/components/VibeCirclePages.jsx",
                                    lineNumber: 1028,
                                    columnNumber: 285
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "[project]/components/VibeCirclePages.jsx",
                            lineNumber: 1028,
                            columnNumber: 20
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("h3", {
                            style: {
                                fontFamily: "'Bebas Neue',sans-serif",
                                fontSize: "24px",
                                color: C.white,
                                marginBottom: "5px"
                            },
                            children: "Apply for this deal"
                        }, void 0, false, {
                            fileName: "[project]/components/VibeCirclePages.jsx",
                            lineNumber: 1029,
                            columnNumber: 7
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                            style: {
                                fontFamily: "'DM Sans',sans-serif",
                                fontSize: "13px",
                                color: C.dim,
                                lineHeight: 1.7,
                                marginBottom: "20px"
                            },
                            children: "Brands typically respond within 48 hours."
                        }, void 0, false, {
                            fileName: "[project]/components/VibeCirclePages.jsx",
                            lineNumber: 1029,
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
                                            color: C.white,
                                            outline: "none",
                                            transition: "border-color .2s"
                                        },
                                        onFocus: (e)=>e.target.style.borderColor = brand.color,
                                        onBlur: (e)=>e.target.style.borderColor = "rgba(255,255,255,0.1)"
                                    }, k, false, {
                                        fileName: "[project]/components/VibeCirclePages.jsx",
                                        lineNumber: 1030,
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
                                        color: C.white,
                                        outline: "none",
                                        resize: "vertical",
                                        transition: "border-color .2s"
                                    },
                                    onFocus: (e)=>e.target.style.borderColor = brand.color,
                                    onBlur: (e)=>e.target.style.borderColor = "rgba(255,255,255,0.1)"
                                }, void 0, false, {
                                    fileName: "[project]/components/VibeCirclePages.jsx",
                                    lineNumber: 1031,
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
                                        color: C.bg,
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
                                                border: `2px solid ${C.bg}40`,
                                                borderTopColor: C.bg,
                                                borderRadius: "50%",
                                                animation: "spin .6s linear infinite",
                                                display: "inline-block"
                                            }
                                        }, void 0, false, {
                                            fileName: "[project]/components/VibeCirclePages.jsx",
                                            lineNumber: 1032,
                                            columnNumber: 338
                                        }, this),
                                        loading ? "Submitting..." : "Submit Application"
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/components/VibeCirclePages.jsx",
                                    lineNumber: 1032,
                                    columnNumber: 7
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "[project]/components/VibeCirclePages.jsx",
                            lineNumber: 1030,
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
                            fileName: "[project]/components/VibeCirclePages.jsx",
                            lineNumber: 1033,
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
                            fileName: "[project]/components/VibeCirclePages.jsx",
                            lineNumber: 1033,
                            columnNumber: 151
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                            style: {
                                fontFamily: "'DM Sans',sans-serif",
                                fontSize: "14px",
                                color: C.dim,
                                lineHeight: 1.7,
                                marginBottom: "24px"
                            },
                            children: [
                                brand.name,
                                " will review your profile and respond within 48 hours."
                            ]
                        }, void 0, true, {
                            fileName: "[project]/components/VibeCirclePages.jsx",
                            lineNumber: 1033,
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
                                color: C.bg,
                                border: "none",
                                borderRadius: "2px",
                                cursor: "pointer"
                            },
                            children: "Back to Marketplace"
                        }, void 0, false, {
                            fileName: "[project]/components/VibeCirclePages.jsx",
                            lineNumber: 1033,
                            columnNumber: 460
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "[project]/components/VibeCirclePages.jsx",
                    lineNumber: 1033,
                    columnNumber: 9
                }, this)
            ]
        }, void 0, true, {
            fileName: "[project]/components/VibeCirclePages.jsx",
            lineNumber: 1026,
            columnNumber: 5
        }, this)
    }, void 0, false, {
        fileName: "[project]/components/VibeCirclePages.jsx",
        lineNumber: 1025,
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
    const w = useWindowWidth();
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
            background: C.bg,
            color: C.white
        },
        children: [
            applyBrand && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(ApplyModal, {
                brand: applyBrand,
                onClose: ()=>setApplyBrand(null),
                addToast: addToast
            }, void 0, false, {
                fileName: "[project]/components/VibeCirclePages.jsx",
                lineNumber: 1058,
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
                    background: C.bg
                },
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        style: {
                            position: "absolute",
                            inset: 0,
                            backgroundImage: `linear-gradient(${C.orange}06 1px,transparent 1px),linear-gradient(90deg,${C.orange}06 1px,transparent 1px)`,
                            backgroundSize: "60px 60px"
                        }
                    }, void 0, false, {
                        fileName: "[project]/components/VibeCirclePages.jsx",
                        lineNumber: 1060,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(Orb, {
                        top: "-5%",
                        right: "5%",
                        size: 550,
                        opacity: 0.13
                    }, void 0, false, {
                        fileName: "[project]/components/VibeCirclePages.jsx",
                        lineNumber: 1060,
                        columnNumber: 206
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(Orb, {
                        bottom: "-15%",
                        left: "25%",
                        size: 400,
                        color: C.pink,
                        opacity: 0.08,
                        delay: "2s"
                    }, void 0, false, {
                        fileName: "[project]/components/VibeCirclePages.jsx",
                        lineNumber: 1060,
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
                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(Tag, {
                                    children: "Brand Marketplace"
                                }, void 0, false, {
                                    fileName: "[project]/components/VibeCirclePages.jsx",
                                    lineNumber: 1062,
                                    columnNumber: 93
                                }, this)
                            }, void 0, false, {
                                fileName: "[project]/components/VibeCirclePages.jsx",
                                lineNumber: 1062,
                                columnNumber: 11
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("h1", {
                                style: {
                                    fontFamily: "'Bebas Neue',sans-serif",
                                    fontSize: "clamp(44px,8vw,92px)",
                                    lineHeight: .92,
                                    color: C.white,
                                    animation: "fadeUp .55s .08s ease forwards",
                                    opacity: 0,
                                    marginBottom: "18px"
                                },
                                children: [
                                    "Where brands meet",
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("br", {}, void 0, false, {
                                        fileName: "[project]/components/VibeCirclePages.jsx",
                                        lineNumber: 1063,
                                        columnNumber: 213
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                        style: {
                                            color: C.orange
                                        },
                                        children: "creators who live it."
                                    }, void 0, false, {
                                        fileName: "[project]/components/VibeCirclePages.jsx",
                                        lineNumber: 1063,
                                        columnNumber: 218
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/components/VibeCirclePages.jsx",
                                lineNumber: 1063,
                                columnNumber: 11
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                style: {
                                    fontFamily: "'DM Sans',sans-serif",
                                    fontSize: "clamp(14px,1.8vw,18px)",
                                    color: C.dim,
                                    maxWidth: "520px",
                                    lineHeight: 1.75,
                                    animation: "fadeUp .55s .16s ease forwards",
                                    opacity: 0
                                },
                                children: "Browse live brand deals, apply in seconds, and turn your city presence into paid partnerships."
                            }, void 0, false, {
                                fileName: "[project]/components/VibeCirclePages.jsx",
                                lineNumber: 1064,
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
                                                    color: C.orange,
                                                    lineHeight: 1
                                                },
                                                children: v
                                            }, void 0, false, {
                                                fileName: "[project]/components/VibeCirclePages.jsx",
                                                lineNumber: 1066,
                                                columnNumber: 142
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                style: {
                                                    fontFamily: "'DM Sans',sans-serif",
                                                    fontSize: "10px",
                                                    letterSpacing: "1.5px",
                                                    color: C.dimmer,
                                                    textTransform: "uppercase",
                                                    marginTop: "3px"
                                                },
                                                children: l
                                            }, void 0, false, {
                                                fileName: "[project]/components/VibeCirclePages.jsx",
                                                lineNumber: 1066,
                                                columnNumber: 265
                                            }, this)
                                        ]
                                    }, l, true, {
                                        fileName: "[project]/components/VibeCirclePages.jsx",
                                        lineNumber: 1066,
                                        columnNumber: 129
                                    }, this))
                            }, void 0, false, {
                                fileName: "[project]/components/VibeCirclePages.jsx",
                                lineNumber: 1065,
                                columnNumber: 11
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/components/VibeCirclePages.jsx",
                        lineNumber: 1061,
                        columnNumber: 9
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/components/VibeCirclePages.jsx",
                lineNumber: 1059,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                style: {
                    background: C.bg2,
                    borderTop: `1px solid ${C.border}`,
                    borderBottom: `1px solid ${C.border}`
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
                                color: activeTab === tab ? C.orange : C.dimmer,
                                border: "none",
                                borderBottom: `2px solid ${activeTab === tab ? C.orange : "transparent"}`,
                                cursor: "pointer",
                                transition: "all .2s"
                            },
                            children: tab === "Creator" ? "I'm a Creator" : "I'm a Brand"
                        }, tab, false, {
                            fileName: "[project]/components/VibeCirclePages.jsx",
                            lineNumber: 1070,
                            columnNumber: 239
                        }, this))
                }, void 0, false, {
                    fileName: "[project]/components/VibeCirclePages.jsx",
                    lineNumber: 1070,
                    columnNumber: 110
                }, this)
            }, void 0, false, {
                fileName: "[project]/components/VibeCirclePages.jsx",
                lineNumber: 1070,
                columnNumber: 7
            }, this),
            activeTab === "Creator" ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Fragment"], {
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("section", {
                        style: {
                            padding: `36px ${w < 600 ? "20px" : "64px"} 0`,
                            background: C.bg2
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
                                            fileName: "[project]/components/VibeCirclePages.jsx",
                                            lineNumber: 1074,
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
                                                color: C.white,
                                                outline: "none",
                                                transition: "border-color .2s"
                                            },
                                            onFocus: (e)=>e.target.style.borderColor = C.orange,
                                            onBlur: (e)=>e.target.style.borderColor = "rgba(255,255,255,0.1)"
                                        }, void 0, false, {
                                            fileName: "[project]/components/VibeCirclePages.jsx",
                                            lineNumber: 1074,
                                            columnNumber: 194
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/components/VibeCirclePages.jsx",
                                    lineNumber: 1074,
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
                                                        background: catFilter === c ? C.orange : "rgba(255,255,255,0.04)",
                                                        color: catFilter === c ? C.bg : C.dim,
                                                        border: catFilter === c ? "none" : "1px solid rgba(255,255,255,0.1)",
                                                        transition: "all .2s"
                                                    },
                                                    children: c
                                                }, c, false, {
                                                    fileName: "[project]/components/VibeCirclePages.jsx",
                                                    lineNumber: 1075,
                                                    columnNumber: 190
                                                }, this))
                                        }, void 0, false, {
                                            fileName: "[project]/components/VibeCirclePages.jsx",
                                            lineNumber: 1075,
                                            columnNumber: 110
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("select", {
                                            value: sortBy,
                                            onChange: (e)=>setSortBy(e.target.value),
                                            style: {
                                                background: "rgba(255,255,255,0.04)",
                                                border: "1px solid rgba(255,255,255,0.1)",
                                                color: C.dim,
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
                                                    fileName: "[project]/components/VibeCirclePages.jsx",
                                                    lineNumber: 1075,
                                                    columnNumber: 860
                                                }, this))
                                        }, void 0, false, {
                                            fileName: "[project]/components/VibeCirclePages.jsx",
                                            lineNumber: 1075,
                                            columnNumber: 544
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/components/VibeCirclePages.jsx",
                                    lineNumber: 1075,
                                    columnNumber: 13
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "[project]/components/VibeCirclePages.jsx",
                            lineNumber: 1073,
                            columnNumber: 87
                        }, this)
                    }, void 0, false, {
                        fileName: "[project]/components/VibeCirclePages.jsx",
                        lineNumber: 1073,
                        columnNumber: 11
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("section", {
                        style: {
                            padding: `20px ${w < 600 ? "20px" : "64px"} 80px`,
                            background: C.bg2
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
                                        color: C.dimmer,
                                        marginBottom: "20px"
                                    },
                                    children: [
                                        "Showing ",
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                            style: {
                                                color: C.orange
                                            },
                                            children: filtered.length
                                        }, void 0, false, {
                                            fileName: "[project]/components/VibeCirclePages.jsx",
                                            lineNumber: 1078,
                                            columnNumber: 119
                                        }, this),
                                        " deals"
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/components/VibeCirclePages.jsx",
                                    lineNumber: 1078,
                                    columnNumber: 13
                                }, this),
                                filtered.length > 0 ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "grid-auto",
                                    children: filtered.map((brand, i)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(Reveal, {
                                            delay: i * .05,
                                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(BrandCard, {
                                                brand: brand,
                                                onApply: setApplyBrand
                                            }, void 0, false, {
                                                fileName: "[project]/components/VibeCirclePages.jsx",
                                                lineNumber: 1079,
                                                columnNumber: 121
                                            }, this)
                                        }, brand.id, false, {
                                            fileName: "[project]/components/VibeCirclePages.jsx",
                                            lineNumber: 1079,
                                            columnNumber: 84
                                        }, this))
                                }, void 0, false, {
                                    fileName: "[project]/components/VibeCirclePages.jsx",
                                    lineNumber: 1079,
                                    columnNumber: 32
                                }, this) : /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    style: {
                                        textAlign: "center",
                                        padding: "64px",
                                        color: C.dimmer
                                    },
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            style: {
                                                fontSize: "32px",
                                                marginBottom: "12px"
                                            },
                                            children: "----"
                                        }, void 0, false, {
                                            fileName: "[project]/components/VibeCirclePages.jsx",
                                            lineNumber: 1079,
                                            columnNumber: 253
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            style: {
                                                fontFamily: "'Bebas Neue',sans-serif",
                                                fontSize: "20px",
                                                color: C.white,
                                                marginBottom: "6px"
                                            },
                                            children: "No deals found"
                                        }, void 0, false, {
                                            fileName: "[project]/components/VibeCirclePages.jsx",
                                            lineNumber: 1079,
                                            columnNumber: 314
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                            style: {
                                                fontFamily: "'DM Sans',sans-serif",
                                                fontSize: "13px"
                                            },
                                            children: "Try adjusting your filters."
                                        }, void 0, false, {
                                            fileName: "[project]/components/VibeCirclePages.jsx",
                                            lineNumber: 1079,
                                            columnNumber: 435
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/components/VibeCirclePages.jsx",
                                    lineNumber: 1079,
                                    columnNumber: 189
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "[project]/components/VibeCirclePages.jsx",
                            lineNumber: 1077,
                            columnNumber: 90
                        }, this)
                    }, void 0, false, {
                        fileName: "[project]/components/VibeCirclePages.jsx",
                        lineNumber: 1077,
                        columnNumber: 11
                    }, this)
                ]
            }, void 0, true) : /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("section", {
                className: "sec-pad",
                style: {
                    background: C.bg2
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
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(Reveal, {
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(Tag, {
                                            children: "For Brands"
                                        }, void 0, false, {
                                            fileName: "[project]/components/VibeCirclePages.jsx",
                                            lineNumber: 1084,
                                            columnNumber: 24
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("h2", {
                                            style: {
                                                fontFamily: "'Bebas Neue',sans-serif",
                                                fontSize: "clamp(30px,5vw,54px)",
                                                color: C.white,
                                                lineHeight: 1,
                                                margin: "16px 0 18px"
                                            },
                                            children: [
                                                "Post a deal.",
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("br", {}, void 0, false, {
                                                    fileName: "[project]/components/VibeCirclePages.jsx",
                                                    lineNumber: 1084,
                                                    columnNumber: 188
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                    style: {
                                                        color: C.orange
                                                    },
                                                    children: "Find your creators."
                                                }, void 0, false, {
                                                    fileName: "[project]/components/VibeCirclePages.jsx",
                                                    lineNumber: 1084,
                                                    columnNumber: 193
                                                }, this)
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/components/VibeCirclePages.jsx",
                                            lineNumber: 1084,
                                            columnNumber: 45
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                            style: {
                                                fontFamily: "'DM Sans',sans-serif",
                                                fontSize: "16px",
                                                color: C.dim,
                                                lineHeight: 1.8,
                                                marginBottom: "28px"
                                            },
                                            children: "Access thousands of verified city creators. No agencies, no overhead --- direct creative partnerships."
                                        }, void 0, false, {
                                            fileName: "[project]/components/VibeCirclePages.jsx",
                                            lineNumber: 1084,
                                            columnNumber: 255
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/components/VibeCirclePages.jsx",
                                    lineNumber: 1084,
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
                                ].map(([n, i, t, d], idx)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(Reveal, {
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
                                                        border: `1px solid ${C.orange}30`,
                                                        display: "flex",
                                                        alignItems: "center",
                                                        justifyContent: "center",
                                                        fontFamily: "'Bebas Neue',sans-serif",
                                                        fontSize: "12px",
                                                        color: C.orange
                                                    },
                                                    children: n
                                                }, void 0, false, {
                                                    fileName: "[project]/components/VibeCirclePages.jsx",
                                                    lineNumber: 1085,
                                                    columnNumber: 512
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                    children: [
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                            style: {
                                                                fontFamily: "'Bebas Neue',sans-serif",
                                                                fontSize: "16px",
                                                                color: C.white,
                                                                marginBottom: "2px"
                                                            },
                                                            children: [
                                                                i,
                                                                " ",
                                                                t
                                                            ]
                                                        }, void 0, true, {
                                                            fileName: "[project]/components/VibeCirclePages.jsx",
                                                            lineNumber: 1085,
                                                            columnNumber: 794
                                                        }, this),
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                            style: {
                                                                fontFamily: "'DM Sans',sans-serif",
                                                                fontSize: "13px",
                                                                color: C.dim,
                                                                lineHeight: 1.6
                                                            },
                                                            children: d
                                                        }, void 0, false, {
                                                            fileName: "[project]/components/VibeCirclePages.jsx",
                                                            lineNumber: 1085,
                                                            columnNumber: 908
                                                        }, this)
                                                    ]
                                                }, void 0, true, {
                                                    fileName: "[project]/components/VibeCirclePages.jsx",
                                                    lineNumber: 1085,
                                                    columnNumber: 789
                                                }, this)
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/components/VibeCirclePages.jsx",
                                            lineNumber: 1085,
                                            columnNumber: 427
                                        }, this)
                                    }, idx, false, {
                                        fileName: "[project]/components/VibeCirclePages.jsx",
                                        lineNumber: 1085,
                                        columnNumber: 393
                                    }, this))
                            ]
                        }, void 0, true, {
                            fileName: "[project]/components/VibeCirclePages.jsx",
                            lineNumber: 1084,
                            columnNumber: 11
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(Reveal, {
                            delay: .1,
                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                style: {
                                    padding: "36px",
                                    background: "rgba(255,255,255,0.02)",
                                    border: `1px solid ${C.border}`,
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
                                            fileName: "[project]/components/VibeCirclePages.jsx",
                                            lineNumber: 1087,
                                            columnNumber: 75
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            style: {
                                                fontFamily: "'Bebas Neue',sans-serif",
                                                fontSize: "28px",
                                                color: C.orange,
                                                marginBottom: "10px"
                                            },
                                            children: "Deal Posted!"
                                        }, void 0, false, {
                                            fileName: "[project]/components/VibeCirclePages.jsx",
                                            lineNumber: 1087,
                                            columnNumber: 166
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                            style: {
                                                fontFamily: "'DM Sans',sans-serif",
                                                fontSize: "14px",
                                                color: C.dim,
                                                lineHeight: 1.7
                                            },
                                            children: "Your campaign goes live within 24 hours."
                                        }, void 0, false, {
                                            fileName: "[project]/components/VibeCirclePages.jsx",
                                            lineNumber: 1087,
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
                                                background: C.orange,
                                                color: C.bg,
                                                border: "none",
                                                borderRadius: "2px",
                                                cursor: "pointer",
                                                marginTop: "20px"
                                            },
                                            children: "Post Another Deal"
                                        }, void 0, false, {
                                            fileName: "[project]/components/VibeCirclePages.jsx",
                                            lineNumber: 1087,
                                            columnNumber: 421
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/components/VibeCirclePages.jsx",
                                    lineNumber: 1087,
                                    columnNumber: 24
                                }, this) : /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Fragment"], {
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            style: {
                                                fontFamily: "'Bebas Neue',sans-serif",
                                                fontSize: "20px",
                                                color: C.white,
                                                marginBottom: "20px"
                                            },
                                            children: "Post a Campaign Deal"
                                        }, void 0, false, {
                                            fileName: "[project]/components/VibeCirclePages.jsx",
                                            lineNumber: 1088,
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
                                                            color: C.white,
                                                            outline: "none",
                                                            transition: "border-color .2s"
                                                        },
                                                        onFocus: (e)=>e.target.style.borderColor = C.orange,
                                                        onBlur: (e)=>e.target.style.borderColor = "rgba(255,255,255,0.1)"
                                                    }, k, false, {
                                                        fileName: "[project]/components/VibeCirclePages.jsx",
                                                        lineNumber: 1089,
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
                                                        color: C.white,
                                                        outline: "none",
                                                        resize: "vertical",
                                                        transition: "border-color .2s"
                                                    },
                                                    onFocus: (e)=>e.target.style.borderColor = C.orange,
                                                    onBlur: (e)=>e.target.style.borderColor = "rgba(255,255,255,0.1)"
                                                }, void 0, false, {
                                                    fileName: "[project]/components/VibeCirclePages.jsx",
                                                    lineNumber: 1090,
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
                                                        background: C.orange,
                                                        color: C.bg,
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
                                                                border: `2px solid ${C.bg}40`,
                                                                borderTopColor: C.bg,
                                                                borderRadius: "50%",
                                                                animation: "spin .6s linear infinite",
                                                                display: "inline-block"
                                                            }
                                                        }, void 0, false, {
                                                            fileName: "[project]/components/VibeCirclePages.jsx",
                                                            lineNumber: 1091,
                                                            columnNumber: 329
                                                        }, this),
                                                        postLoading ? "Submitting..." : "Post My Deal"
                                                    ]
                                                }, void 0, true, {
                                                    fileName: "[project]/components/VibeCirclePages.jsx",
                                                    lineNumber: 1091,
                                                    columnNumber: 15
                                                }, this)
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/components/VibeCirclePages.jsx",
                                            lineNumber: 1088,
                                            columnNumber: 145
                                        }, this)
                                    ]
                                }, void 0, true)
                            }, void 0, false, {
                                fileName: "[project]/components/VibeCirclePages.jsx",
                                lineNumber: 1086,
                                columnNumber: 30
                            }, this)
                        }, void 0, false, {
                            fileName: "[project]/components/VibeCirclePages.jsx",
                            lineNumber: 1086,
                            columnNumber: 11
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "[project]/components/VibeCirclePages.jsx",
                    lineNumber: 1083,
                    columnNumber: 65
                }, this)
            }, void 0, false, {
                fileName: "[project]/components/VibeCirclePages.jsx",
                lineNumber: 1083,
                columnNumber: 9
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(Divider, {}, void 0, false, {
                fileName: "[project]/components/VibeCirclePages.jsx",
                lineNumber: 1096,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("section", {
                className: "sec-pad",
                style: {
                    background: C.bg
                },
                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    style: {
                        maxWidth: "800px",
                        margin: "0 auto"
                    },
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(Reveal, {
                            style: {
                                marginBottom: "44px"
                            },
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(Tag, {
                                    children: "Marketplace FAQ"
                                }, void 0, false, {
                                    fileName: "[project]/components/VibeCirclePages.jsx",
                                    lineNumber: 1097,
                                    columnNumber: 148
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("h2", {
                                    style: {
                                        fontFamily: "'Bebas Neue',sans-serif",
                                        fontSize: "clamp(26px,4vw,44px)",
                                        color: C.white,
                                        lineHeight: 1,
                                        marginTop: "16px"
                                    },
                                    children: [
                                        "How the marketplace ",
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                            style: {
                                                color: C.orange
                                            },
                                            children: "works."
                                        }, void 0, false, {
                                            fileName: "[project]/components/VibeCirclePages.jsx",
                                            lineNumber: 1097,
                                            columnNumber: 321
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/components/VibeCirclePages.jsx",
                                    lineNumber: 1097,
                                    columnNumber: 174
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "[project]/components/VibeCirclePages.jsx",
                            lineNumber: 1097,
                            columnNumber: 110
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(FAQ, {
                            items: MKT_FAQS
                        }, void 0, false, {
                            fileName: "[project]/components/VibeCirclePages.jsx",
                            lineNumber: 1097,
                            columnNumber: 379
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "[project]/components/VibeCirclePages.jsx",
                    lineNumber: 1097,
                    columnNumber: 62
                }, this)
            }, void 0, false, {
                fileName: "[project]/components/VibeCirclePages.jsx",
                lineNumber: 1097,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                style: {
                    background: C.orange,
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
                                fileName: "[project]/components/VibeCirclePages.jsx",
                                lineNumber: 1098,
                                columnNumber: 316
                            }, this)))
                }, void 0, false, {
                    fileName: "[project]/components/VibeCirclePages.jsx",
                    lineNumber: 1098,
                    columnNumber: 77
                }, this)
            }, void 0, false, {
                fileName: "[project]/components/VibeCirclePages.jsx",
                lineNumber: 1098,
                columnNumber: 7
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/components/VibeCirclePages.jsx",
        lineNumber: 1057,
        columnNumber: 5
    }, this);
}
// ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------
// CONTACT PAGE --- with real FormSubmit integration
// ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------
const CONTACT_DEPTS = [
    {
        key: "general",
        label: "General Inquiry",
        email: "info@vibecircle.com",
        icon: "----",
        desc: "Questions about VibeCircle, the platform, or anything else."
    },
    {
        key: "partnerships",
        label: "Partnerships",
        email: "partners@vibecircle.com",
        icon: "----",
        desc: "Brand deals, platform integrations, and strategic alliances."
    },
    {
        key: "careers",
        label: "Careers",
        email: "careers@vibecircle.com",
        icon: "----",
        desc: "Job applications, internship inquiries, and hiring questions."
    },
    {
        key: "support",
        label: "Support",
        email: "support@vibecircle.com",
        icon: "-------",
        desc: "Technical issues, account help, and bug reports."
    },
    {
        key: "press",
        label: "Press & Media",
        email: "press@vibecircle.com",
        icon: "----",
        desc: "Media inquiries, press kits, and interview requests."
    }
];
function ContactPage({ addToast }) {
    const [dept, setDept] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])("general");
    const [form, setForm] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])({
        name: "",
        email: "",
        subject: "",
        message: ""
    });
    const [loading, setLoading] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])(false);
    const [sent, setSent] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])(false);
    const selectedDept = CONTACT_DEPTS.find((d)=>d.key === dept);
    const w = useWindowWidth();
    const submit = async ()=>{
        if (!form.name || !form.email || !form.message) return;
        setLoading(true);
        try {
            await fetch("https://formsubmit.co/ajax/info@vibecircle.com", {
                method: "POST",
                headers: {
                    "Content-Type": "application/json",
                    "Accept": "application/json"
                },
                body: JSON.stringify({
                    _subject: `[${selectedDept?.label}] ${form.subject || "New Message"}`,
                    _template: "table",
                    name: form.name,
                    email: form.email,
                    subject: form.subject,
                    message: form.message,
                    department: selectedDept?.label,
                    replyTo: selectedDept?.email
                })
            });
        } catch (e) {}
        setLoading(false);
        setSent(true);
        addToast({
            type: "success",
            title: "Message sent!",
            message: `The ${selectedDept?.label} team will respond within 24---48 hours.`
        });
    };
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        style: {
            background: C.bg,
            color: C.white
        },
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(PageHero, {
                tag: "Contact",
                title: "Let's build",
                accent: "something real.",
                sub: "Whether you're a creator, a business, or a curious human --- we're here."
            }, void 0, false, {
                fileName: "[project]/components/VibeCirclePages.jsx",
                lineNumber: 1134,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(Divider, {}, void 0, false, {
                fileName: "[project]/components/VibeCirclePages.jsx",
                lineNumber: 1135,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("section", {
                className: "sec-pad",
                style: {
                    background: C.bg2
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
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(Reveal, {
                                    style: {
                                        marginBottom: "28px"
                                    },
                                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(Tag, {
                                        children: "Choose Department"
                                    }, void 0, false, {
                                        fileName: "[project]/components/VibeCirclePages.jsx",
                                        lineNumber: 1138,
                                        columnNumber: 49
                                    }, this)
                                }, void 0, false, {
                                    fileName: "[project]/components/VibeCirclePages.jsx",
                                    lineNumber: 1138,
                                    columnNumber: 11
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    style: {
                                        display: "flex",
                                        flexDirection: "column",
                                        gap: "8px",
                                        marginBottom: "40px"
                                    },
                                    children: CONTACT_DEPTS.map((d, i)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(Reveal, {
                                            delay: i * .07,
                                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                onClick: ()=>setDept(d.key),
                                                style: {
                                                    padding: "16px 20px",
                                                    background: dept === d.key ? "rgba(255,107,0,0.1)" : "rgba(255,255,255,0.02)",
                                                    border: `1px solid ${dept === d.key ? C.orange + "50" : "rgba(255,255,255,0.07)"}`,
                                                    borderRadius: "4px",
                                                    cursor: "pointer",
                                                    transition: "all .25s",
                                                    display: "flex",
                                                    alignItems: "flex-start",
                                                    gap: "12px"
                                                },
                                                onMouseEnter: (e)=>{
                                                    if (dept !== d.key) {
                                                        e.currentTarget.style.background = "rgba(255,255,255,0.04)";
                                                        e.currentTarget.style.borderColor = "rgba(255,255,255,0.14)";
                                                    }
                                                },
                                                onMouseLeave: (e)=>{
                                                    if (dept !== d.key) {
                                                        e.currentTarget.style.background = "rgba(255,255,255,0.02)";
                                                        e.currentTarget.style.borderColor = "rgba(255,255,255,0.07)";
                                                    }
                                                },
                                                children: [
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                        style: {
                                                            fontSize: "18px",
                                                            flexShrink: 0
                                                        },
                                                        children: d.icon
                                                    }, void 0, false, {
                                                        fileName: "[project]/components/VibeCirclePages.jsx",
                                                        lineNumber: 1141,
                                                        columnNumber: 15
                                                    }, this),
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                        style: {
                                                            flex: 1
                                                        },
                                                        children: [
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                                style: {
                                                                    fontFamily: "'Bebas Neue',sans-serif",
                                                                    fontSize: "15px",
                                                                    color: dept === d.key ? C.orange : C.white,
                                                                    letterSpacing: ".5px"
                                                                },
                                                                children: d.label
                                                            }, void 0, false, {
                                                                fileName: "[project]/components/VibeCirclePages.jsx",
                                                                lineNumber: 1141,
                                                                columnNumber: 97
                                                            }, this),
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                                style: {
                                                                    fontFamily: "'DM Sans',sans-serif",
                                                                    fontSize: "11px",
                                                                    color: C.dimmer,
                                                                    marginTop: "2px"
                                                                },
                                                                children: d.desc
                                                            }, void 0, false, {
                                                                fileName: "[project]/components/VibeCirclePages.jsx",
                                                                lineNumber: 1141,
                                                                columnNumber: 237
                                                            }, this)
                                                        ]
                                                    }, void 0, true, {
                                                        fileName: "[project]/components/VibeCirclePages.jsx",
                                                        lineNumber: 1141,
                                                        columnNumber: 75
                                                    }, this),
                                                    dept === d.key && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                        style: {
                                                            color: C.orange,
                                                            fontSize: "13px",
                                                            flexShrink: 0
                                                        },
                                                        children: "---"
                                                    }, void 0, false, {
                                                        fileName: "[project]/components/VibeCirclePages.jsx",
                                                        lineNumber: 1141,
                                                        columnNumber: 368
                                                    }, this)
                                                ]
                                            }, void 0, true, {
                                                fileName: "[project]/components/VibeCirclePages.jsx",
                                                lineNumber: 1140,
                                                columnNumber: 73
                                            }, this)
                                        }, d.key, false, {
                                            fileName: "[project]/components/VibeCirclePages.jsx",
                                            lineNumber: 1140,
                                            columnNumber: 39
                                        }, this))
                                }, void 0, false, {
                                    fileName: "[project]/components/VibeCirclePages.jsx",
                                    lineNumber: 1139,
                                    columnNumber: 11
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(Reveal, {
                                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        style: {
                                            padding: "24px",
                                            background: "rgba(255,255,255,0.02)",
                                            border: `1px solid ${C.border}`,
                                            borderRadius: "4px"
                                        },
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                style: {
                                                    fontFamily: "'Bebas Neue',sans-serif",
                                                    fontSize: "12px",
                                                    letterSpacing: "3px",
                                                    color: C.orange,
                                                    marginBottom: "10px"
                                                },
                                                children: "All contacts"
                                            }, void 0, false, {
                                                fileName: "[project]/components/VibeCirclePages.jsx",
                                                lineNumber: 1145,
                                                columnNumber: 13
                                            }, this),
                                            CONTACT_DEPTS.map((d)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                    style: {
                                                        display: "flex",
                                                        justifyContent: "space-between",
                                                        padding: "7px 0",
                                                        borderBottom: "1px solid rgba(255,255,255,0.05)"
                                                    },
                                                    children: [
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                            style: {
                                                                fontFamily: "'DM Sans',sans-serif",
                                                                fontSize: "11px",
                                                                color: C.dimmer
                                                            },
                                                            children: d.label
                                                        }, void 0, false, {
                                                            fileName: "[project]/components/VibeCirclePages.jsx",
                                                            lineNumber: 1146,
                                                            columnNumber: 172
                                                        }, this),
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("a", {
                                                            href: `mailto:${d.email}`,
                                                            style: {
                                                                fontFamily: "'DM Sans',sans-serif",
                                                                fontSize: "11px",
                                                                color: C.dim,
                                                                textDecoration: "none",
                                                                transition: "color .2s"
                                                            },
                                                            onMouseEnter: (e)=>e.target.style.color = C.orange,
                                                            onMouseLeave: (e)=>e.target.style.color = C.dim,
                                                            children: d.email
                                                        }, void 0, false, {
                                                            fileName: "[project]/components/VibeCirclePages.jsx",
                                                            lineNumber: 1146,
                                                            columnNumber: 269
                                                        }, this)
                                                    ]
                                                }, d.key, true, {
                                                    fileName: "[project]/components/VibeCirclePages.jsx",
                                                    lineNumber: 1146,
                                                    columnNumber: 35
                                                }, this))
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/components/VibeCirclePages.jsx",
                                        lineNumber: 1144,
                                        columnNumber: 19
                                    }, this)
                                }, void 0, false, {
                                    fileName: "[project]/components/VibeCirclePages.jsx",
                                    lineNumber: 1144,
                                    columnNumber: 11
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "[project]/components/VibeCirclePages.jsx",
                            lineNumber: 1137,
                            columnNumber: 9
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(Reveal, {
                            delay: .1,
                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                style: {
                                    padding: "40px",
                                    background: "rgba(255,255,255,0.02)",
                                    border: `1px solid ${C.border}`,
                                    borderRadius: "4px",
                                    position: "sticky",
                                    top: "80px"
                                },
                                children: sent ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    style: {
                                        textAlign: "center",
                                        padding: "36px 0"
                                    },
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            style: {
                                                fontSize: "48px",
                                                marginBottom: "16px",
                                                animation: "checkPop .5s ease"
                                            },
                                            children: "------"
                                        }, void 0, false, {
                                            fileName: "[project]/components/VibeCirclePages.jsx",
                                            lineNumber: 1151,
                                            columnNumber: 13
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            style: {
                                                fontFamily: "'Bebas Neue',sans-serif",
                                                fontSize: "30px",
                                                color: C.orange,
                                                marginBottom: "10px"
                                            },
                                            children: "Message Sent."
                                        }, void 0, false, {
                                            fileName: "[project]/components/VibeCirclePages.jsx",
                                            lineNumber: 1152,
                                            columnNumber: 13
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                            style: {
                                                fontFamily: "'DM Sans',sans-serif",
                                                fontSize: "14px",
                                                color: C.dim,
                                                lineHeight: 1.7,
                                                marginBottom: "24px"
                                            },
                                            children: [
                                                "The ",
                                                selectedDept?.label,
                                                " team will get back to you at ",
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                    style: {
                                                        color: C.orange
                                                    },
                                                    children: form.email
                                                }, void 0, false, {
                                                    fileName: "[project]/components/VibeCirclePages.jsx",
                                                    lineNumber: 1153,
                                                    columnNumber: 178
                                                }, this),
                                                " within 24---48 hours."
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/components/VibeCirclePages.jsx",
                                            lineNumber: 1153,
                                            columnNumber: 13
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                            onClick: ()=>{
                                                setSent(false);
                                                setForm({
                                                    name: "",
                                                    email: "",
                                                    subject: "",
                                                    message: ""
                                                });
                                            },
                                            style: {
                                                fontFamily: "'Bebas Neue',sans-serif",
                                                fontSize: "12px",
                                                letterSpacing: "2px",
                                                padding: "11px 24px",
                                                background: C.orange,
                                                color: C.bg,
                                                border: "none",
                                                borderRadius: "2px",
                                                cursor: "pointer"
                                            },
                                            children: "Send Another"
                                        }, void 0, false, {
                                            fileName: "[project]/components/VibeCirclePages.jsx",
                                            lineNumber: 1154,
                                            columnNumber: 13
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/components/VibeCirclePages.jsx",
                                    lineNumber: 1150,
                                    columnNumber: 18
                                }, this) : /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Fragment"], {
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            style: {
                                                display: "flex",
                                                alignItems: "center",
                                                gap: "10px",
                                                marginBottom: "24px"
                                            },
                                            children: [
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                    style: {
                                                        fontSize: "20px"
                                                    },
                                                    children: selectedDept?.icon
                                                }, void 0, false, {
                                                    fileName: "[project]/components/VibeCirclePages.jsx",
                                                    lineNumber: 1156,
                                                    columnNumber: 94
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                    children: [
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                            style: {
                                                                fontFamily: "'Bebas Neue',sans-serif",
                                                                fontSize: "18px",
                                                                color: C.orange
                                                            },
                                                            children: selectedDept?.label
                                                        }, void 0, false, {
                                                            fileName: "[project]/components/VibeCirclePages.jsx",
                                                            lineNumber: 1156,
                                                            columnNumber: 158
                                                        }, this),
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                            style: {
                                                                fontFamily: "'DM Sans',sans-serif",
                                                                fontSize: "11px",
                                                                color: C.dimmer
                                                            },
                                                            children: selectedDept?.email
                                                        }, void 0, false, {
                                                            fileName: "[project]/components/VibeCirclePages.jsx",
                                                            lineNumber: 1156,
                                                            columnNumber: 268
                                                        }, this)
                                                    ]
                                                }, void 0, true, {
                                                    fileName: "[project]/components/VibeCirclePages.jsx",
                                                    lineNumber: 1156,
                                                    columnNumber: 153
                                                }, this)
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/components/VibeCirclePages.jsx",
                                            lineNumber: 1156,
                                            columnNumber: 13
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            style: {
                                                display: "flex",
                                                flexDirection: "column",
                                                gap: "12px"
                                            },
                                            children: [
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                    style: {
                                                        display: "grid",
                                                        gridTemplateColumns: "1fr 1fr",
                                                        gap: "10px"
                                                    },
                                                    children: [
                                                        [
                                                            "name",
                                                            "Your Name"
                                                        ],
                                                        [
                                                            "email",
                                                            "Email Address"
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
                                                                fontSize: "13px",
                                                                color: C.white,
                                                                outline: "none",
                                                                transition: "border-color .2s"
                                                            },
                                                            onFocus: (e)=>e.target.style.borderColor = C.orange,
                                                            onBlur: (e)=>e.target.style.borderColor = "rgba(255,255,255,0.1)"
                                                        }, k, false, {
                                                            fileName: "[project]/components/VibeCirclePages.jsx",
                                                            lineNumber: 1159,
                                                            columnNumber: 81
                                                        }, this))
                                                }, void 0, false, {
                                                    fileName: "[project]/components/VibeCirclePages.jsx",
                                                    lineNumber: 1158,
                                                    columnNumber: 15
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
                                                    placeholder: "Subject",
                                                    value: form.subject,
                                                    onChange: (e)=>setForm((f)=>({
                                                                ...f,
                                                                subject: e.target.value
                                                            })),
                                                    style: {
                                                        background: "rgba(255,255,255,0.04)",
                                                        border: "1px solid rgba(255,255,255,0.1)",
                                                        borderRadius: "2px",
                                                        padding: "12px 14px",
                                                        fontFamily: "'DM Sans',sans-serif",
                                                        fontSize: "13px",
                                                        color: C.white,
                                                        outline: "none",
                                                        transition: "border-color .2s"
                                                    },
                                                    onFocus: (e)=>e.target.style.borderColor = C.orange,
                                                    onBlur: (e)=>e.target.style.borderColor = "rgba(255,255,255,0.1)"
                                                }, void 0, false, {
                                                    fileName: "[project]/components/VibeCirclePages.jsx",
                                                    lineNumber: 1161,
                                                    columnNumber: 15
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("textarea", {
                                                    placeholder: "Your message...",
                                                    rows: 5,
                                                    value: form.message,
                                                    onChange: (e)=>setForm((f)=>({
                                                                ...f,
                                                                message: e.target.value
                                                            })),
                                                    style: {
                                                        background: "rgba(255,255,255,0.04)",
                                                        border: "1px solid rgba(255,255,255,0.1)",
                                                        borderRadius: "2px",
                                                        padding: "12px 14px",
                                                        fontFamily: "'DM Sans',sans-serif",
                                                        fontSize: "13px",
                                                        color: C.white,
                                                        outline: "none",
                                                        resize: "vertical",
                                                        transition: "border-color .2s"
                                                    },
                                                    onFocus: (e)=>e.target.style.borderColor = C.orange,
                                                    onBlur: (e)=>e.target.style.borderColor = "rgba(255,255,255,0.1)"
                                                }, void 0, false, {
                                                    fileName: "[project]/components/VibeCirclePages.jsx",
                                                    lineNumber: 1162,
                                                    columnNumber: 15
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                                    onClick: submit,
                                                    disabled: loading || !form.name || !form.email || !form.message,
                                                    style: {
                                                        fontFamily: "'Bebas Neue',sans-serif",
                                                        fontSize: "15px",
                                                        letterSpacing: "3px",
                                                        padding: "15px",
                                                        background: !form.name || !form.email || !form.message ? "rgba(255,107,0,0.3)" : C.orange,
                                                        color: C.bg,
                                                        border: "none",
                                                        borderRadius: "2px",
                                                        cursor: !form.name || !form.email || !form.message ? "not-allowed" : "pointer",
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
                                                                border: `2px solid ${C.bg}40`,
                                                                borderTopColor: C.bg,
                                                                borderRadius: "50%",
                                                                animation: "spin .6s linear infinite",
                                                                display: "inline-block"
                                                            }
                                                        }, void 0, false, {
                                                            fileName: "[project]/components/VibeCirclePages.jsx",
                                                            lineNumber: 1163,
                                                            columnNumber: 475
                                                        }, this),
                                                        loading ? "Sending..." : "Send Message ---"
                                                    ]
                                                }, void 0, true, {
                                                    fileName: "[project]/components/VibeCirclePages.jsx",
                                                    lineNumber: 1163,
                                                    columnNumber: 15
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                    style: {
                                                        fontFamily: "'DM Sans',sans-serif",
                                                        fontSize: "11px",
                                                        color: C.dimmer,
                                                        textAlign: "center"
                                                    },
                                                    children: "Typical response: 24---48 hours"
                                                }, void 0, false, {
                                                    fileName: "[project]/components/VibeCirclePages.jsx",
                                                    lineNumber: 1164,
                                                    columnNumber: 15
                                                }, this)
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/components/VibeCirclePages.jsx",
                                            lineNumber: 1157,
                                            columnNumber: 13
                                        }, this)
                                    ]
                                }, void 0, true)
                            }, void 0, false, {
                                fileName: "[project]/components/VibeCirclePages.jsx",
                                lineNumber: 1149,
                                columnNumber: 28
                            }, this)
                        }, void 0, false, {
                            fileName: "[project]/components/VibeCirclePages.jsx",
                            lineNumber: 1149,
                            columnNumber: 9
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "[project]/components/VibeCirclePages.jsx",
                    lineNumber: 1136,
                    columnNumber: 63
                }, this)
            }, void 0, false, {
                fileName: "[project]/components/VibeCirclePages.jsx",
                lineNumber: 1136,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(Divider, {}, void 0, false, {
                fileName: "[project]/components/VibeCirclePages.jsx",
                lineNumber: 1169,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("section", {
                className: "sec-pad",
                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    style: {
                        maxWidth: "1100px",
                        margin: "0 auto"
                    },
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(Reveal, {
                            style: {
                                marginBottom: "44px"
                            },
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(Tag, {
                                    children: "Find Us"
                                }, void 0, false, {
                                    fileName: "[project]/components/VibeCirclePages.jsx",
                                    lineNumber: 1171,
                                    columnNumber: 47
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("h2", {
                                    style: {
                                        fontFamily: "'Bebas Neue',sans-serif",
                                        fontSize: "clamp(26px,4vw,46px)",
                                        color: C.white,
                                        lineHeight: 1,
                                        marginTop: "16px"
                                    },
                                    children: [
                                        "We're in the ",
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                            style: {
                                                color: C.orange
                                            },
                                            children: "cities we're building for."
                                        }, void 0, false, {
                                            fileName: "[project]/components/VibeCirclePages.jsx",
                                            lineNumber: 1171,
                                            columnNumber: 205
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/components/VibeCirclePages.jsx",
                                    lineNumber: 1171,
                                    columnNumber: 65
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "[project]/components/VibeCirclePages.jsx",
                            lineNumber: 1171,
                            columnNumber: 9
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "grid-4",
                            children: [
                                {
                                    city: "Johannesburg",
                                    addr: "HQ - Sandton",
                                    emoji: "HQ",
                                    status: "Main Office"
                                },
                                {
                                    city: "Cape Town",
                                    addr: "Woodstock Creative Hub",
                                    emoji: "COAST",
                                    status: "Western Cape"
                                },
                                {
                                    city: "Durban",
                                    addr: "Umhlanga Ridge",
                                    emoji: "COAST",
                                    status: "KwaZulu-Natal"
                                },
                                {
                                    city: "Pretoria",
                                    addr: "Menlyn Maine",
                                    emoji: "CAPITOL",
                                    status: "Gauteng North"
                                }
                            ].map((o, i)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(Reveal, {
                                    delay: i * .1,
                                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        style: {
                                            padding: "26px 22px",
                                            background: "rgba(255,255,255,0.02)",
                                            border: "1px solid rgba(255,255,255,0.07)",
                                            borderRadius: "4px",
                                            transition: "all .3s"
                                        },
                                        onMouseEnter: (e)=>{
                                            e.currentTarget.style.borderColor = C.orange;
                                            e.currentTarget.style.background = "rgba(255,107,0,0.06)";
                                        },
                                        onMouseLeave: (e)=>{
                                            e.currentTarget.style.borderColor = "rgba(255,255,255,0.07)";
                                            e.currentTarget.style.background = "rgba(255,255,255,0.02)";
                                        },
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                style: {
                                                    fontSize: "26px",
                                                    marginBottom: "10px"
                                                },
                                                children: o.emoji
                                            }, void 0, false, {
                                                fileName: "[project]/components/VibeCirclePages.jsx",
                                                lineNumber: 1175,
                                                columnNumber: 15
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                style: {
                                                    fontFamily: "'Bebas Neue',sans-serif",
                                                    fontSize: "19px",
                                                    color: C.white,
                                                    marginBottom: "3px"
                                                },
                                                children: o.city
                                            }, void 0, false, {
                                                fileName: "[project]/components/VibeCirclePages.jsx",
                                                lineNumber: 1176,
                                                columnNumber: 15
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                style: {
                                                    fontFamily: "'DM Sans',sans-serif",
                                                    fontSize: "11px",
                                                    color: C.dim,
                                                    marginBottom: "10px"
                                                },
                                                children: o.addr
                                            }, void 0, false, {
                                                fileName: "[project]/components/VibeCirclePages.jsx",
                                                lineNumber: 1177,
                                                columnNumber: 15
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                style: {
                                                    display: "inline-flex",
                                                    alignItems: "center",
                                                    gap: "6px"
                                                },
                                                children: [
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                        style: {
                                                            width: 6,
                                                            height: 6,
                                                            borderRadius: "50%",
                                                            background: C.orange,
                                                            animation: "dotPulse 2s infinite"
                                                        }
                                                    }, void 0, false, {
                                                        fileName: "[project]/components/VibeCirclePages.jsx",
                                                        lineNumber: 1178,
                                                        columnNumber: 82
                                                    }, this),
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                        style: {
                                                            fontFamily: "'DM Sans',sans-serif",
                                                            fontSize: "10px",
                                                            letterSpacing: "1px",
                                                            color: C.orange,
                                                            textTransform: "uppercase"
                                                        },
                                                        children: o.status
                                                    }, void 0, false, {
                                                        fileName: "[project]/components/VibeCirclePages.jsx",
                                                        lineNumber: 1178,
                                                        columnNumber: 187
                                                    }, this)
                                                ]
                                            }, void 0, true, {
                                                fileName: "[project]/components/VibeCirclePages.jsx",
                                                lineNumber: 1178,
                                                columnNumber: 15
                                            }, this)
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/components/VibeCirclePages.jsx",
                                        lineNumber: 1174,
                                        columnNumber: 13
                                    }, this)
                                }, i, false, {
                                    fileName: "[project]/components/VibeCirclePages.jsx",
                                    lineNumber: 1173,
                                    columnNumber: 336
                                }, this))
                        }, void 0, false, {
                            fileName: "[project]/components/VibeCirclePages.jsx",
                            lineNumber: 1172,
                            columnNumber: 9
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "[project]/components/VibeCirclePages.jsx",
                    lineNumber: 1170,
                    columnNumber: 36
                }, this)
            }, void 0, false, {
                fileName: "[project]/components/VibeCirclePages.jsx",
                lineNumber: 1170,
                columnNumber: 7
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/components/VibeCirclePages.jsx",
        lineNumber: 1133,
        columnNumber: 5
    }, this);
}
// ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------
// PRICING PAGE (standalone)
// ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------
function PricingPage({ openWaitlist }) {
    const [activeProduct, setActiveProduct] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])("Creators");
    const [annual, setAnnual] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])(false);
    const products = {
        Creators: {
            icon: "---",
            tiers: CREATOR_TIERS,
            tagline: "Plans for creators at every stage.",
            color: C.orange
        },
        Business: {
            icon: "----",
            tiers: BIZ_PRICING,
            tagline: "Plans for businesses of every size.",
            color: C.orange
        },
        Advertise: {
            icon: "----",
            tiers: AD_PRICING,
            tagline: "Plans for brands that mean business.",
            color: C.pink
        }
    };
    const current = products[activeProduct];
    const faqItems = [
        {
            q: "Can I switch plans at any time?",
            a: "Yes. Upgrade, downgrade, or cancel anytime from your account settings. Changes take effect at the start of your next billing period."
        },
        {
            q: "Is there a free trial?",
            a: "Creator Spark is free forever. Creator Pulse and all Business plans include a 14-day free trial. No credit card required to start."
        },
        {
            q: "What happens when my trial ends?",
            a: "You'll be prompted to add payment details. If you don't, your account automatically downgrades to the free Spark tier --- you never lose your data."
        },
        {
            q: "Do you offer annual billing?",
            a: "Yes. Annual billing saves 20% across all paid plans. Toggle above to see annual pricing."
        },
        {
            q: "Do you offer nonprofit or student discounts?",
            a: "Yes. Verified nonprofits and enrolled students get 50% off Creator Pulse. Email info@vibecircle.com with proof of status."
        }
    ];
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        style: {
            background: C.bg,
            color: C.white
        },
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("section", {
                style: {
                    minHeight: "42vh",
                    display: "flex",
                    flexDirection: "column",
                    justifyContent: "flex-end",
                    padding: "130px 64px 72px",
                    position: "relative",
                    overflow: "hidden",
                    background: C.bg
                },
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        style: {
                            position: "absolute",
                            inset: 0,
                            backgroundImage: `linear-gradient(${C.orange}06 1px,transparent 1px),linear-gradient(90deg,${C.orange}06 1px,transparent 1px)`,
                            backgroundSize: "60px 60px"
                        }
                    }, void 0, false, {
                        fileName: "[project]/components/VibeCirclePages.jsx",
                        lineNumber: 1203,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(Orb, {
                        top: "-10%",
                        right: "-5%",
                        size: 500
                    }, void 0, false, {
                        fileName: "[project]/components/VibeCirclePages.jsx",
                        lineNumber: 1203,
                        columnNumber: 206
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(Orb, {
                        bottom: "-20%",
                        left: "30%",
                        size: 400,
                        color: C.pink,
                        opacity: 0.07,
                        delay: "3s"
                    }, void 0, false, {
                        fileName: "[project]/components/VibeCirclePages.jsx",
                        lineNumber: 1203,
                        columnNumber: 246
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        style: {
                            position: "relative",
                            zIndex: 2,
                            maxWidth: "1100px",
                            margin: "0 auto",
                            width: "100%",
                            textAlign: "center"
                        },
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                style: {
                                    animation: "fadeUp .5s ease forwards",
                                    opacity: 0,
                                    marginBottom: "18px"
                                },
                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(Tag, {
                                    children: "Pricing"
                                }, void 0, false, {
                                    fileName: "[project]/components/VibeCirclePages.jsx",
                                    lineNumber: 1205,
                                    columnNumber: 93
                                }, this)
                            }, void 0, false, {
                                fileName: "[project]/components/VibeCirclePages.jsx",
                                lineNumber: 1205,
                                columnNumber: 11
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("h1", {
                                style: {
                                    fontFamily: "'Bebas Neue',sans-serif",
                                    fontSize: "clamp(44px,8vw,92px)",
                                    lineHeight: .93,
                                    color: C.white,
                                    animation: "fadeUp .55s .08s ease forwards",
                                    opacity: 0,
                                    marginBottom: "18px"
                                },
                                children: [
                                    "Simple pricing.",
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("br", {}, void 0, false, {
                                        fileName: "[project]/components/VibeCirclePages.jsx",
                                        lineNumber: 1206,
                                        columnNumber: 211
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                        style: {
                                            color: C.orange
                                        },
                                        children: "Real value."
                                    }, void 0, false, {
                                        fileName: "[project]/components/VibeCirclePages.jsx",
                                        lineNumber: 1206,
                                        columnNumber: 216
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/components/VibeCirclePages.jsx",
                                lineNumber: 1206,
                                columnNumber: 11
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                style: {
                                    fontFamily: "'DM Sans',sans-serif",
                                    fontSize: "clamp(14px,1.8vw,18px)",
                                    color: C.dim,
                                    maxWidth: "480px",
                                    lineHeight: 1.75,
                                    animation: "fadeUp .55s .16s ease forwards",
                                    opacity: 0,
                                    margin: "0 auto"
                                },
                                children: "Start free. Scale when you're ready. No lock-ins, no hidden fees."
                            }, void 0, false, {
                                fileName: "[project]/components/VibeCirclePages.jsx",
                                lineNumber: 1207,
                                columnNumber: 11
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/components/VibeCirclePages.jsx",
                        lineNumber: 1204,
                        columnNumber: 9
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/components/VibeCirclePages.jsx",
                lineNumber: 1202,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(Divider, {}, void 0, false, {
                fileName: "[project]/components/VibeCirclePages.jsx",
                lineNumber: 1210,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("section", {
                className: "sec-pad",
                style: {
                    background: C.bg2
                },
                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    style: {
                        maxWidth: "1100px",
                        margin: "0 auto"
                    },
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            style: {
                                display: "flex",
                                justifyContent: "center",
                                gap: "8px",
                                marginBottom: "32px",
                                flexWrap: "wrap"
                            },
                            children: Object.entries(products).map(([k, v])=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                    onClick: ()=>setActiveProduct(k),
                                    style: {
                                        fontFamily: "'Bebas Neue',sans-serif",
                                        fontSize: "14px",
                                        letterSpacing: "2px",
                                        padding: "12px 28px",
                                        background: activeProduct === k ? v.color : "transparent",
                                        color: activeProduct === k ? C.bg : C.dim,
                                        border: `1px solid ${activeProduct === k ? v.color : "rgba(255,255,255,0.12)"}`,
                                        borderRadius: "2px",
                                        cursor: "pointer",
                                        transition: "all .2s",
                                        display: "flex",
                                        alignItems: "center",
                                        gap: "8px"
                                    },
                                    children: [
                                        v.icon,
                                        " ",
                                        k
                                    ]
                                }, k, true, {
                                    fileName: "[project]/components/VibeCirclePages.jsx",
                                    lineNumber: 1215,
                                    columnNumber: 52
                                }, this))
                        }, void 0, false, {
                            fileName: "[project]/components/VibeCirclePages.jsx",
                            lineNumber: 1214,
                            columnNumber: 11
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            style: {
                                display: "flex",
                                justifyContent: "center",
                                marginBottom: "44px"
                            },
                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                style: {
                                    display: "inline-flex",
                                    background: "rgba(255,255,255,0.04)",
                                    border: "1px solid rgba(255,255,255,0.1)",
                                    borderRadius: "3px",
                                    padding: "4px"
                                },
                                children: [
                                    "Monthly",
                                    "Annual"
                                ].map((t)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                        onClick: ()=>setAnnual(t === "Annual"),
                                        style: {
                                            fontFamily: "'Bebas Neue',sans-serif",
                                            fontSize: "13px",
                                            letterSpacing: "2px",
                                            padding: "8px 22px",
                                            background: t === "Annual" === annual ? C.orange : "transparent",
                                            color: t === "Annual" === annual ? C.bg : C.dim,
                                            border: "none",
                                            borderRadius: "2px",
                                            cursor: "pointer",
                                            transition: "all .2s"
                                        },
                                        children: [
                                            t,
                                            t === "Annual" && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                style: {
                                                    fontSize: "10px",
                                                    marginLeft: "6px",
                                                    opacity: .8
                                                },
                                                children: "-20%"
                                            }, void 0, false, {
                                                fileName: "[project]/components/VibeCirclePages.jsx",
                                                lineNumber: 1220,
                                                columnNumber: 388
                                            }, this)
                                        ]
                                    }, t, true, {
                                        fileName: "[project]/components/VibeCirclePages.jsx",
                                        lineNumber: 1220,
                                        columnNumber: 44
                                    }, this))
                            }, void 0, false, {
                                fileName: "[project]/components/VibeCirclePages.jsx",
                                lineNumber: 1219,
                                columnNumber: 13
                            }, this)
                        }, void 0, false, {
                            fileName: "[project]/components/VibeCirclePages.jsx",
                            lineNumber: 1218,
                            columnNumber: 11
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                            style: {
                                fontFamily: "'DM Sans',sans-serif",
                                fontSize: "14px",
                                color: C.dim,
                                textAlign: "center",
                                marginBottom: "36px"
                            },
                            children: current.tagline
                        }, void 0, false, {
                            fileName: "[project]/components/VibeCirclePages.jsx",
                            lineNumber: 1223,
                            columnNumber: 11
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "grid-3",
                            children: current.tiers.map((t, i)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(PricingCard, {
                                    ...t,
                                    annual: annual,
                                    color: current.color,
                                    onCta: ()=>openWaitlist(`${activeProduct} ${t.plan}`)
                                }, i, false, {
                                    fileName: "[project]/components/VibeCirclePages.jsx",
                                    lineNumber: 1224,
                                    columnNumber: 61
                                }, this))
                        }, void 0, false, {
                            fileName: "[project]/components/VibeCirclePages.jsx",
                            lineNumber: 1224,
                            columnNumber: 11
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(Reveal, {
                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                style: {
                                    fontFamily: "'DM Sans',sans-serif",
                                    fontSize: "12px",
                                    color: C.dimmer,
                                    textAlign: "center",
                                    marginTop: "24px"
                                },
                                children: "All paid plans include a 14-day free trial. No credit card required for free tiers."
                            }, void 0, false, {
                                fileName: "[project]/components/VibeCirclePages.jsx",
                                lineNumber: 1225,
                                columnNumber: 19
                            }, this)
                        }, void 0, false, {
                            fileName: "[project]/components/VibeCirclePages.jsx",
                            lineNumber: 1225,
                            columnNumber: 11
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "[project]/components/VibeCirclePages.jsx",
                    lineNumber: 1212,
                    columnNumber: 9
                }, this)
            }, void 0, false, {
                fileName: "[project]/components/VibeCirclePages.jsx",
                lineNumber: 1211,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(Divider, {}, void 0, false, {
                fileName: "[project]/components/VibeCirclePages.jsx",
                lineNumber: 1228,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("section", {
                className: "sec-pad-sm",
                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    style: {
                        maxWidth: "900px",
                        margin: "0 auto",
                        textAlign: "center"
                    },
                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(Reveal, {
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(Tag, {
                                children: "All plans include"
                            }, void 0, false, {
                                fileName: "[project]/components/VibeCirclePages.jsx",
                                lineNumber: 1232,
                                columnNumber: 19
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                style: {
                                    display: "flex",
                                    gap: "12px",
                                    flexWrap: "wrap",
                                    justifyContent: "center",
                                    marginTop: "24px"
                                },
                                children: [
                                    "City map presence",
                                    "Community access",
                                    "In-app support",
                                    "VibeCircle app (iOS + Android)",
                                    "99.9% uptime SLA",
                                    "POPIA compliance",
                                    "SSL & data encryption"
                                ].map((f)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        style: {
                                            display: "flex",
                                            gap: "7px",
                                            alignItems: "center",
                                            padding: "10px 18px",
                                            background: "rgba(255,107,0,0.04)",
                                            border: `1px solid ${C.border}`,
                                            borderRadius: "2px"
                                        },
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                style: {
                                                    color: C.orange,
                                                    fontSize: "12px"
                                                },
                                                children: "---"
                                            }, void 0, false, {
                                                fileName: "[project]/components/VibeCirclePages.jsx",
                                                lineNumber: 1233,
                                                columnNumber: 346
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                style: {
                                                    fontFamily: "'DM Sans',sans-serif",
                                                    fontSize: "13px",
                                                    color: "rgba(255,255,255,0.75)"
                                                },
                                                children: f
                                            }, void 0, false, {
                                                fileName: "[project]/components/VibeCirclePages.jsx",
                                                lineNumber: 1233,
                                                columnNumber: 403
                                            }, this)
                                        ]
                                    }, f, true, {
                                        fileName: "[project]/components/VibeCirclePages.jsx",
                                        lineNumber: 1233,
                                        columnNumber: 174
                                    }, this))
                            }, void 0, false, {
                                fileName: "[project]/components/VibeCirclePages.jsx",
                                lineNumber: 1232,
                                columnNumber: 47
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/components/VibeCirclePages.jsx",
                        lineNumber: 1232,
                        columnNumber: 11
                    }, this)
                }, void 0, false, {
                    fileName: "[project]/components/VibeCirclePages.jsx",
                    lineNumber: 1231,
                    columnNumber: 9
                }, this)
            }, void 0, false, {
                fileName: "[project]/components/VibeCirclePages.jsx",
                lineNumber: 1230,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(Divider, {}, void 0, false, {
                fileName: "[project]/components/VibeCirclePages.jsx",
                lineNumber: 1237,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("section", {
                className: "sec-pad",
                style: {
                    background: C.bg2
                },
                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    style: {
                        maxWidth: "800px",
                        margin: "0 auto"
                    },
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(Reveal, {
                            style: {
                                marginBottom: "44px"
                            },
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(Tag, {
                                    children: "Pricing FAQ"
                                }, void 0, false, {
                                    fileName: "[project]/components/VibeCirclePages.jsx",
                                    lineNumber: 1238,
                                    columnNumber: 149
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("h2", {
                                    style: {
                                        fontFamily: "'Bebas Neue',sans-serif",
                                        fontSize: "clamp(26px,4vw,44px)",
                                        color: C.white,
                                        lineHeight: 1,
                                        marginTop: "16px"
                                    },
                                    children: [
                                        "Questions about ",
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                            style: {
                                                color: C.orange
                                            },
                                            children: "pricing."
                                        }, void 0, false, {
                                            fileName: "[project]/components/VibeCirclePages.jsx",
                                            lineNumber: 1238,
                                            columnNumber: 314
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/components/VibeCirclePages.jsx",
                                    lineNumber: 1238,
                                    columnNumber: 171
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "[project]/components/VibeCirclePages.jsx",
                            lineNumber: 1238,
                            columnNumber: 111
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(FAQ, {
                            items: faqItems
                        }, void 0, false, {
                            fileName: "[project]/components/VibeCirclePages.jsx",
                            lineNumber: 1238,
                            columnNumber: 374
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "[project]/components/VibeCirclePages.jsx",
                    lineNumber: 1238,
                    columnNumber: 63
                }, this)
            }, void 0, false, {
                fileName: "[project]/components/VibeCirclePages.jsx",
                lineNumber: 1238,
                columnNumber: 7
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/components/VibeCirclePages.jsx",
        lineNumber: 1201,
        columnNumber: 5
    }, this);
}
// ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------
// PRIVACY POLICY PAGE
// ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------
function LegalPage({ title, tag, lastUpdated, sections }) {
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        style: {
            background: C.bg,
            color: C.white
        },
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("section", {
                style: {
                    padding: "130px 64px 60px",
                    position: "relative",
                    overflow: "hidden",
                    background: C.bg
                },
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        style: {
                            position: "absolute",
                            inset: 0,
                            backgroundImage: `linear-gradient(${C.orange}04 1px,transparent 1px),linear-gradient(90deg,${C.orange}04 1px,transparent 1px)`,
                            backgroundSize: "60px 60px"
                        }
                    }, void 0, false, {
                        fileName: "[project]/components/VibeCirclePages.jsx",
                        lineNumber: 1250,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(Orb, {
                        top: "-10%",
                        right: "-5%",
                        size: 400,
                        opacity: 0.08
                    }, void 0, false, {
                        fileName: "[project]/components/VibeCirclePages.jsx",
                        lineNumber: 1250,
                        columnNumber: 206
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        style: {
                            position: "relative",
                            zIndex: 2,
                            maxWidth: "800px",
                            margin: "0 auto"
                        },
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                style: {
                                    animation: "fadeUp .5s ease forwards",
                                    opacity: 0,
                                    marginBottom: "16px"
                                },
                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(Tag, {
                                    children: tag
                                }, void 0, false, {
                                    fileName: "[project]/components/VibeCirclePages.jsx",
                                    lineNumber: 1252,
                                    columnNumber: 93
                                }, this)
                            }, void 0, false, {
                                fileName: "[project]/components/VibeCirclePages.jsx",
                                lineNumber: 1252,
                                columnNumber: 11
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("h1", {
                                style: {
                                    fontFamily: "'Bebas Neue',sans-serif",
                                    fontSize: "clamp(40px,6vw,72px)",
                                    lineHeight: .95,
                                    color: C.white,
                                    animation: "fadeUp .55s .08s ease forwards",
                                    opacity: 0,
                                    marginBottom: "16px"
                                },
                                children: title
                            }, void 0, false, {
                                fileName: "[project]/components/VibeCirclePages.jsx",
                                lineNumber: 1253,
                                columnNumber: 11
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                style: {
                                    fontFamily: "'DM Sans',sans-serif",
                                    fontSize: "13px",
                                    color: C.dimmer,
                                    animation: "fadeUp .55s .16s ease forwards",
                                    opacity: 0
                                },
                                children: [
                                    "Last updated: ",
                                    lastUpdated
                                ]
                            }, void 0, true, {
                                fileName: "[project]/components/VibeCirclePages.jsx",
                                lineNumber: 1254,
                                columnNumber: 11
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/components/VibeCirclePages.jsx",
                        lineNumber: 1251,
                        columnNumber: 9
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/components/VibeCirclePages.jsx",
                lineNumber: 1249,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(Divider, {}, void 0, false, {
                fileName: "[project]/components/VibeCirclePages.jsx",
                lineNumber: 1257,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("section", {
                style: {
                    padding: "72px 64px 100px"
                },
                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    style: {
                        maxWidth: "800px",
                        margin: "0 auto"
                    },
                    children: sections.map((s, i)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(Reveal, {
                            delay: i * .05,
                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                style: {
                                    marginBottom: "44px"
                                },
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("h2", {
                                        style: {
                                            fontFamily: "'Bebas Neue',sans-serif",
                                            fontSize: "clamp(18px,2.5vw,26px)",
                                            color: C.orange,
                                            letterSpacing: "1px",
                                            marginBottom: "14px"
                                        },
                                        children: s.h
                                    }, void 0, false, {
                                        fileName: "[project]/components/VibeCirclePages.jsx",
                                        lineNumber: 1261,
                                        columnNumber: 13
                                    }, this),
                                    (Array.isArray(s.body) ? s.body : [
                                        s.body
                                    ]).map((p, j)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                            style: {
                                                fontFamily: "'DM Sans',sans-serif",
                                                fontSize: "15px",
                                                color: C.dim,
                                                lineHeight: 1.85,
                                                marginBottom: "12px"
                                            },
                                            children: p
                                        }, j, false, {
                                            fileName: "[project]/components/VibeCirclePages.jsx",
                                            lineNumber: 1262,
                                            columnNumber: 65
                                        }, this))
                                ]
                            }, void 0, true, {
                                fileName: "[project]/components/VibeCirclePages.jsx",
                                lineNumber: 1260,
                                columnNumber: 11
                            }, this)
                        }, i, false, {
                            fileName: "[project]/components/VibeCirclePages.jsx",
                            lineNumber: 1259,
                            columnNumber: 30
                        }, this))
                }, void 0, false, {
                    fileName: "[project]/components/VibeCirclePages.jsx",
                    lineNumber: 1258,
                    columnNumber: 52
                }, this)
            }, void 0, false, {
                fileName: "[project]/components/VibeCirclePages.jsx",
                lineNumber: 1258,
                columnNumber: 7
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/components/VibeCirclePages.jsx",
        lineNumber: 1248,
        columnNumber: 5
    }, this);
}
const PRIVACY_SECTIONS = [
    {
        h: "1. Information We Collect",
        body: [
            "We collect information you provide directly: name, email address, city, profile data, content you post, and payment information when you subscribe to a paid plan.",
            "We automatically collect usage data including pages viewed, features used, time spent, device type, browser, IP address, and general location data for city-based discovery features.",
            "When you connect third-party accounts (Instagram, TikTok, etc.) we receive limited profile data as permitted by those platforms."
        ]
    },
    {
        h: "2. How We Use Your Information",
        body: [
            "To operate and improve the VibeCircle platform, including the live city map, creator tools, and brand marketplace.",
            "To personalise your experience --- showing you relevant content, creators, events, and brands based on your city and interests.",
            "To process payments, send transaction confirmations, and manage subscriptions.",
            "To send product updates, newsletters, and promotional offers (you can opt out at any time).",
            "To comply with legal obligations and protect the rights and safety of our users."
        ]
    },
    {
        h: "3. Sharing Your Information",
        body: [
            "We do not sell your personal information to third parties. We do not allow advertisers to pay to have their products promoted in private conversations.",
            "We share data with service providers who help us operate the platform (payment processors, cloud infrastructure, analytics tools) under strict confidentiality agreements.",
            "Your public profile, posts, and location-tagged content are visible to other VibeCircle users as part of the platform's core functionality.",
            "Creators who apply to brand deals share their profile data with the relevant brand as part of the application process."
        ]
    },
    {
        h: "4. Location Data",
        body: [
            "Location data is central to VibeCircle's functionality. Precise location is used to place your content on the city map, show you nearby events and businesses, and power geo-targeted discovery.",
            "You can control location permissions through your device settings. Disabling location will limit your ability to use map-based features.",
            "We do not share precise real-time location data with third parties without your explicit consent."
        ]
    },
    {
        h: "5. Data Retention",
        body: "We retain your account data for as long as your account is active. If you delete your account, we delete or anonymize your personal data within 30 days, except where required by law or legitimate business interest."
    },
    {
        h: "6. Your Rights (POPIA)",
        body: [
            "You have the right to access, correct, or delete your personal data. You have the right to data portability and to restrict or object to certain processing.",
            "South African users have rights under POPIA, including access, correction, deletion, and objection to processing.",
            "To exercise these rights, email privacy@vibecircle.com. We'll respond within 30 days."
        ]
    },
    {
        h: "7. Cookies",
        body: [
            "We use cookies and similar tracking technologies to keep you logged in, remember your preferences, and understand how people use VibeCircle.",
            "You can control cookies through your browser settings or through our cookie consent manager. Refusing non-essential cookies will not prevent you from using the platform but may limit personalisation."
        ]
    },
    {
        h: "8. Security",
        body: "We use industry-standard encryption (TLS 1.3) for data in transit, AES-256 for data at rest, and undergo regular security audits. No system is 100% secure --- please use a strong password and enable two-factor authentication when available."
    },
    {
        h: "9. Children's Privacy",
        body: "VibeCircle is not directed to children under 13. We do not knowingly collect personal information from children under 13. If we learn we have done so, we will delete the information promptly."
    },
    {
        h: "10. Contact",
        body: "Questions about this policy? Email privacy@vibecircle.com or write to VibeCircle (Pty) Ltd, Attn: Privacy Team, 5th Floor, 67 Rivonia Rd, Sandton, Johannesburg 2196, South Africa."
    }
];
const TERMS_SECTIONS = [
    {
        h: "1. Acceptance of Terms",
        body: "By accessing or using VibeCircle, you agree to these Terms of Service. If you don't agree, please don't use the platform. We may update these terms and will notify you of material changes."
    },
    {
        h: "2. Your Account",
        body: [
            "You must be 13 or older to use VibeCircle. By creating an account, you confirm you meet this requirement.",
            "You are responsible for all activity under your account. Use a strong, unique password and don't share your credentials.",
            "We reserve the right to suspend or terminate accounts that violate these terms."
        ]
    },
    {
        h: "3. Content You Post",
        body: [
            "You retain ownership of content you post. By posting, you grant VibeCircle a non-exclusive, worldwide, royalty-free license to display, distribute, and use your content to operate the platform.",
            "You are responsible for your content. Don't post content that is illegal, harmful, harassing, defamatory, or that infringes others' rights.",
            "We may remove content that violates our Community Guidelines without prior notice."
        ]
    },
    {
        h: "4. Brand Marketplace",
        body: [
            "VibeCircle facilitates connections between creators and brands but is not a party to deals made through the Marketplace.",
            "We do not guarantee the quality, legality, or completion of any deal. You enter deals at your own risk.",
            "VibeCircle charges a 10% platform fee on successfully completed marketplace transactions."
        ]
    },
    {
        h: "5. Subscriptions & Billing",
        body: [
            "Paid plans are billed monthly or annually. All payments are processed securely through our payment processor.",
            "You can cancel at any time. Cancellation takes effect at the end of your current billing period --- you will not receive a prorated refund.",
            "We offer a 14-day free trial on paid plans. You won't be charged until the trial ends."
        ]
    },
    {
        h: "6. Prohibited Conduct",
        body: [
            "You agree not to: scrape or crawl the platform, reverse engineer our technology, create fake accounts, spam other users, or use VibeCircle for illegal purposes.",
            "You agree not to interfere with the platform's operation or circumvent security features.",
            "Violations may result in immediate account termination."
        ]
    },
    {
        h: "7. Intellectual Property",
        body: "VibeCircle and its design, logos, and technology are owned by VibeCircle (Pty) Ltd and protected by intellectual property laws. You may not use our marks without written permission."
    },
    {
        h: "8. Disclaimers & Limitation of Liability",
        body: [
            "VibeCircle is provided 'as is' without warranties of any kind. We don't guarantee uninterrupted service or that the platform will be error-free.",
            "To the maximum extent permitted by law, VibeCircle's liability for any claim is limited to the amount you paid us in the 12 months preceding the claim."
        ]
    },
    {
        h: "9. Governing Law",
        body: "These terms are governed by the laws of the Republic of South Africa. Any disputes will be resolved in the courts of Gauteng, Johannesburg."
    },
    {
        h: "10. Contact",
        body: "Legal questions? Email legal@vibecircle.com or write to VibeCircle (Pty) Ltd, Attn: Legal Team, 5th Floor, 67 Rivonia Rd, Sandton, Johannesburg 2196, South Africa."
    }
];
const COOKIES_SECTIONS = [
    {
        h: "What Are Cookies?",
        body: "Cookies are small text files stored on your device when you visit a website. They help us remember your preferences, keep you logged in, and understand how you use VibeCircle."
    },
    {
        h: "Cookies We Use",
        body: [
            "Essential Cookies: Required for the platform to function. These keep you logged in and secure. Cannot be disabled.",
            "Analytics Cookies: Help us understand how you navigate VibeCircle --- which features you use, how long you spend, and where you encounter issues. We use this to improve the product.",
            "Preference Cookies: Remember your settings --- city, language, notification preferences, and display options.",
            "Marketing Cookies: Used to show you relevant ads and measure campaign effectiveness. Only active if you've accepted marketing cookies."
        ]
    },
    {
        h: "Third-Party Cookies",
        body: "Some third-party services we use (analytics, payment processing, maps) may set their own cookies. These are governed by their own privacy policies."
    },
    {
        h: "Managing Cookies",
        body: [
            "You can control or delete cookies through your browser settings. Disabling essential cookies will prevent you from using VibeCircle.",
            "You can update your cookie preferences at any time by clicking 'Cookie Preferences' in the footer.",
            "We follow South Africa's POPIA and ECTA requirements for consent and cookie management."
        ]
    },
    {
        h: "Contact",
        body: "Cookie questions? Email privacy@vibecircle.com."
    }
];
// ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------
// 404 PAGE
// ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------
function NotFoundPage({ setPage }) {
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        style: {
            background: C.bg,
            color: C.white,
            minHeight: "100vh",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            position: "relative",
            overflow: "hidden",
            padding: "120px 24px"
        },
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(Orb, {
                top: "10%",
                left: "-5%",
                size: 500,
                opacity: 0.1
            }, void 0, false, {
                fileName: "[project]/components/VibeCirclePages.jsx",
                lineNumber: 1310,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(Orb, {
                bottom: "10%",
                right: "-5%",
                size: 400,
                color: C.pink,
                opacity: 0.08,
                delay: "2s"
            }, void 0, false, {
                fileName: "[project]/components/VibeCirclePages.jsx",
                lineNumber: 1310,
                columnNumber: 59
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                style: {
                    position: "relative",
                    zIndex: 2,
                    textAlign: "center",
                    maxWidth: "600px"
                },
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        style: {
                            fontFamily: "'Bebas Neue',sans-serif",
                            fontSize: "clamp(80px,15vw,160px)",
                            lineHeight: 1,
                            WebkitTextStroke: "2px rgba(255,107,0,0.25)",
                            color: "rgba(255,107,0,0.08)",
                            marginBottom: "-20px"
                        },
                        children: "404"
                    }, void 0, false, {
                        fileName: "[project]/components/VibeCirclePages.jsx",
                        lineNumber: 1312,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("h1", {
                        style: {
                            fontFamily: "'Bebas Neue',sans-serif",
                            fontSize: "clamp(32px,5vw,56px)",
                            color: C.white,
                            lineHeight: 1,
                            marginBottom: "18px"
                        },
                        children: [
                            "This vibe",
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("br", {}, void 0, false, {
                                fileName: "[project]/components/VibeCirclePages.jsx",
                                lineNumber: 1313,
                                columnNumber: 148
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                style: {
                                    color: C.orange
                                },
                                children: "doesn't exist."
                            }, void 0, false, {
                                fileName: "[project]/components/VibeCirclePages.jsx",
                                lineNumber: 1313,
                                columnNumber: 153
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/components/VibeCirclePages.jsx",
                        lineNumber: 1313,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                        style: {
                            fontFamily: "'DM Sans',sans-serif",
                            fontSize: "16px",
                            color: C.dim,
                            lineHeight: 1.7,
                            marginBottom: "36px"
                        },
                        children: "The page you're looking for has either moved or never existed."
                    }, void 0, false, {
                        fileName: "[project]/components/VibeCirclePages.jsx",
                        lineNumber: 1314,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        style: {
                            display: "flex",
                            gap: "12px",
                            justifyContent: "center",
                            flexWrap: "wrap"
                        },
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                onClick: ()=>{
                                    setPage("home");
                                    window.scrollTo(0, 0);
                                },
                                style: {
                                    fontFamily: "'Bebas Neue',sans-serif",
                                    fontSize: "14px",
                                    letterSpacing: "3px",
                                    padding: "13px 32px",
                                    background: C.orange,
                                    color: C.bg,
                                    border: "none",
                                    borderRadius: "2px",
                                    cursor: "pointer",
                                    transition: "transform .2s,box-shadow .2s"
                                },
                                onMouseEnter: (e)=>{
                                    e.target.style.transform = "translateY(-2px)";
                                    e.target.style.boxShadow = `0 12px 32px ${C.orange}40`;
                                },
                                onMouseLeave: (e)=>{
                                    e.target.style.transform = "";
                                    e.target.style.boxShadow = "";
                                },
                                children: "Back to Home"
                            }, void 0, false, {
                                fileName: "[project]/components/VibeCirclePages.jsx",
                                lineNumber: 1316,
                                columnNumber: 11
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                onClick: ()=>{
                                    setPage("Contact");
                                    window.scrollTo(0, 0);
                                },
                                style: {
                                    fontFamily: "'Bebas Neue',sans-serif",
                                    fontSize: "14px",
                                    letterSpacing: "3px",
                                    padding: "13px 32px",
                                    background: "transparent",
                                    color: C.white,
                                    border: "1px solid rgba(255,255,255,0.2)",
                                    borderRadius: "2px",
                                    cursor: "pointer",
                                    transition: "all .2s"
                                },
                                onMouseEnter: (e)=>{
                                    e.currentTarget.style.borderColor = C.orange;
                                    e.currentTarget.style.color = C.orange;
                                },
                                onMouseLeave: (e)=>{
                                    e.currentTarget.style.borderColor = "rgba(255,255,255,0.2)";
                                    e.currentTarget.style.color = C.white;
                                },
                                children: "Report an Issue"
                            }, void 0, false, {
                                fileName: "[project]/components/VibeCirclePages.jsx",
                                lineNumber: 1317,
                                columnNumber: 11
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/components/VibeCirclePages.jsx",
                        lineNumber: 1315,
                        columnNumber: 9
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/components/VibeCirclePages.jsx",
                lineNumber: 1311,
                columnNumber: 7
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/components/VibeCirclePages.jsx",
        lineNumber: 1309,
        columnNumber: 5
    }, this);
}
function VibeCircleApp({ initialPage = "home" }) {
    const router = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$navigation$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useRouter"])();
    const pathname = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$navigation$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["usePathname"])();
    const [page, setPage] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])(initialPage);
    const [prevPage, setPrevPage] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])(null);
    const [waitlistOpen, setWaitlistOpen] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])(false);
    const [waitlistContext, setWaitlistContext] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])("");
    const [toasts, setToasts] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])([]);
    const [cookieState, setCookieState] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])("pending"); // pending | accepted | declined
    const [transitionKey, setTransitionKey] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])(0);
    // Check cookie state from storage
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useEffect"])(()=>{
        window.storage?.get("vc_cookie_consent").then((r)=>{
            if (r) setCookieState(r.value);
        }).catch(()=>{});
    }, []);
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
        setPrevPage(page);
        setPage(p);
        setTransitionKey((k)=>k + 1);
        const nextPath = PAGE_TO_PATH[p] || "/";
        if (pathname !== nextPath) router.push(nextPath);
        window.scrollTo(0, 0);
    };
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useEffect"])(()=>{
        const mapped = PATH_TO_PAGE[pathname] || "home";
        if (mapped !== page) setPage(mapped);
    }, [
        pathname,
        page
    ]);
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
    const PageMap = {
        home: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(HomePage, {
            ...sharedProps
        }, void 0, false, {
            fileName: "[project]/components/VibeCirclePages.jsx",
            lineNumber: 1369,
            columnNumber: 16
        }, this),
        About: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(AboutPage, {
            ...sharedProps
        }, void 0, false, {
            fileName: "[project]/components/VibeCirclePages.jsx",
            lineNumber: 1370,
            columnNumber: 16
        }, this),
        Team: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(TeamPage, {
            ...sharedProps
        }, void 0, false, {
            fileName: "[project]/components/VibeCirclePages.jsx",
            lineNumber: 1371,
            columnNumber: 16
        }, this),
        Creators: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(CreatorsPage, {
            ...sharedProps
        }, void 0, false, {
            fileName: "[project]/components/VibeCirclePages.jsx",
            lineNumber: 1372,
            columnNumber: 16
        }, this),
        Advertise: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(AdvertisePage, {
            ...sharedProps
        }, void 0, false, {
            fileName: "[project]/components/VibeCirclePages.jsx",
            lineNumber: 1373,
            columnNumber: 16
        }, this),
        Business: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(BusinessPage, {
            ...sharedProps
        }, void 0, false, {
            fileName: "[project]/components/VibeCirclePages.jsx",
            lineNumber: 1374,
            columnNumber: 16
        }, this),
        Jobs: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(JobsPage, {
            ...sharedProps
        }, void 0, false, {
            fileName: "[project]/components/VibeCirclePages.jsx",
            lineNumber: 1375,
            columnNumber: 16
        }, this),
        Marketplace: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(MarketplacePage, {
            ...sharedProps
        }, void 0, false, {
            fileName: "[project]/components/VibeCirclePages.jsx",
            lineNumber: 1376,
            columnNumber: 17
        }, this),
        Contact: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(ContactPage, {
            ...sharedProps
        }, void 0, false, {
            fileName: "[project]/components/VibeCirclePages.jsx",
            lineNumber: 1377,
            columnNumber: 16
        }, this),
        Pricing: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(PricingPage, {
            ...sharedProps
        }, void 0, false, {
            fileName: "[project]/components/VibeCirclePages.jsx",
            lineNumber: 1378,
            columnNumber: 16
        }, this),
        Privacy: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(LegalPage, {
            title: "Privacy Policy",
            tag: "Legal",
            lastUpdated: "February 18, 2026",
            sections: PRIVACY_SECTIONS
        }, void 0, false, {
            fileName: "[project]/components/VibeCirclePages.jsx",
            lineNumber: 1379,
            columnNumber: 16
        }, this),
        Terms: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(LegalPage, {
            title: "Terms of Service",
            tag: "Legal",
            lastUpdated: "February 18, 2026",
            sections: TERMS_SECTIONS
        }, void 0, false, {
            fileName: "[project]/components/VibeCirclePages.jsx",
            lineNumber: 1380,
            columnNumber: 16
        }, this),
        Cookies: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(LegalPage, {
            title: "Cookie Policy",
            tag: "Legal",
            lastUpdated: "February 18, 2026",
            sections: COOKIES_SECTIONS
        }, void 0, false, {
            fileName: "[project]/components/VibeCirclePages.jsx",
            lineNumber: 1381,
            columnNumber: 16
        }, this)
    };
    const content = PageMap[page] || /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(NotFoundPage, {
        setPage: goPage
    }, void 0, false, {
        fileName: "[project]/components/VibeCirclePages.jsx",
        lineNumber: 1383,
        columnNumber: 32
    }, this);
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Fragment"], {
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("style", {
                children: GLOBAL_CSS
            }, void 0, false, {
                fileName: "[project]/components/VibeCirclePages.jsx",
                lineNumber: 1387,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(Nav, {
                current: page,
                setPage: goPage,
                openWaitlist: openWaitlist
            }, void 0, false, {
                fileName: "[project]/components/VibeCirclePages.jsx",
                lineNumber: 1388,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("main", {
                className: "page-enter",
                children: content
            }, transitionKey, false, {
                fileName: "[project]/components/VibeCirclePages.jsx",
                lineNumber: 1389,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(Footer, {
                setPage: goPage,
                openWaitlist: openWaitlist
            }, void 0, false, {
                fileName: "[project]/components/VibeCirclePages.jsx",
                lineNumber: 1390,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(WaitlistModal, {
                open: waitlistOpen,
                onClose: ()=>setWaitlistOpen(false),
                context: waitlistContext,
                addToast: addToast
            }, void 0, false, {
                fileName: "[project]/components/VibeCirclePages.jsx",
                lineNumber: 1392,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(ToastContainer, {
                toasts: toasts,
                removeToast: removeToast
            }, void 0, false, {
                fileName: "[project]/components/VibeCirclePages.jsx",
                lineNumber: 1393,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(BackToTop, {}, void 0, false, {
                fileName: "[project]/components/VibeCirclePages.jsx",
                lineNumber: 1394,
                columnNumber: 7
            }, this),
            cookieState === "pending" && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(CookieBanner, {
                onAccept: acceptCookies,
                onDecline: declineCookies,
                setPage: goPage
            }, void 0, false, {
                fileName: "[project]/components/VibeCirclePages.jsx",
                lineNumber: 1395,
                columnNumber: 33
            }, this)
        ]
    }, void 0, true);
}
}),
];

//# sourceMappingURL=%5Broot-of-the-server%5D__3a7c4623._.js.map
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
    "Contact"
];
const PRIMARY_NAV = [
    "About",
    "Creators",
    "Marketplace",
    "Business",
    "Jobs"
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
                "Marketplace"
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
"[project]/components/data/pricing.js [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "AD_PRICING",
    ()=>AD_PRICING,
    "BIZ_PRICING",
    ()=>BIZ_PRICING,
    "CREATOR_TIERS",
    ()=>CREATOR_TIERS
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$components$2f$shared$2f$vibeTheme$2e$jsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/components/shared/vibeTheme.jsx [app-ssr] (ecmascript)");
"use client";
;
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
        color: __TURBOPACK__imported__module__$5b$project$5d2f$components$2f$shared$2f$vibeTheme$2e$jsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["C"].orange
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
        color: __TURBOPACK__imported__module__$5b$project$5d2f$components$2f$shared$2f$vibeTheme$2e$jsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["C"].orange
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
        color: __TURBOPACK__imported__module__$5b$project$5d2f$components$2f$shared$2f$vibeTheme$2e$jsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["C"].pink
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
        color: __TURBOPACK__imported__module__$5b$project$5d2f$components$2f$shared$2f$vibeTheme$2e$jsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["C"].orange
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
        color: __TURBOPACK__imported__module__$5b$project$5d2f$components$2f$shared$2f$vibeTheme$2e$jsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["C"].orange
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
        color: __TURBOPACK__imported__module__$5b$project$5d2f$components$2f$shared$2f$vibeTheme$2e$jsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["C"].pink
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
        color: __TURBOPACK__imported__module__$5b$project$5d2f$components$2f$shared$2f$vibeTheme$2e$jsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["C"].orange
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
        color: __TURBOPACK__imported__module__$5b$project$5d2f$components$2f$shared$2f$vibeTheme$2e$jsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["C"].orange
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
        color: __TURBOPACK__imported__module__$5b$project$5d2f$components$2f$shared$2f$vibeTheme$2e$jsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["C"].pink
    }
];
}),
"[project]/components/pages/PricingPage.jsx [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>PricingPage
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react-jsx-dev-runtime.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$components$2f$shared$2f$vibeTheme$2e$jsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/components/shared/vibeTheme.jsx [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$components$2f$shared$2f$ui$2e$jsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/components/shared/ui.jsx [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$components$2f$data$2f$pricing$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/components/data/pricing.js [app-ssr] (ecmascript)");
"use client";
;
;
;
;
;
function PricingPage({ openWaitlist }) {
    const [activeProduct, setActiveProduct] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])("Creators");
    const [annual, setAnnual] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])(false);
    const products = {
        Creators: {
            icon: "---",
            tiers: __TURBOPACK__imported__module__$5b$project$5d2f$components$2f$data$2f$pricing$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["CREATOR_TIERS"],
            tagline: "Plans for creators at every stage.",
            color: __TURBOPACK__imported__module__$5b$project$5d2f$components$2f$shared$2f$vibeTheme$2e$jsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["C"].orange
        },
        Business: {
            icon: "----",
            tiers: __TURBOPACK__imported__module__$5b$project$5d2f$components$2f$data$2f$pricing$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["BIZ_PRICING"],
            tagline: "Plans for businesses of every size.",
            color: __TURBOPACK__imported__module__$5b$project$5d2f$components$2f$shared$2f$vibeTheme$2e$jsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["C"].orange
        },
        Advertise: {
            icon: "----",
            tiers: __TURBOPACK__imported__module__$5b$project$5d2f$components$2f$data$2f$pricing$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["AD_PRICING"],
            tagline: "Plans for brands that mean business.",
            color: __TURBOPACK__imported__module__$5b$project$5d2f$components$2f$shared$2f$vibeTheme$2e$jsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["C"].pink
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
            background: __TURBOPACK__imported__module__$5b$project$5d2f$components$2f$shared$2f$vibeTheme$2e$jsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["C"].bg,
            color: __TURBOPACK__imported__module__$5b$project$5d2f$components$2f$shared$2f$vibeTheme$2e$jsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["C"].white
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
                        fileName: "[project]/components/pages/PricingPage.jsx",
                        lineNumber: 21,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$components$2f$shared$2f$ui$2e$jsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Orb"], {
                        top: "-10%",
                        right: "-5%",
                        size: 500
                    }, void 0, false, {
                        fileName: "[project]/components/pages/PricingPage.jsx",
                        lineNumber: 21,
                        columnNumber: 206
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$components$2f$shared$2f$ui$2e$jsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Orb"], {
                        bottom: "-20%",
                        left: "30%",
                        size: 400,
                        color: __TURBOPACK__imported__module__$5b$project$5d2f$components$2f$shared$2f$vibeTheme$2e$jsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["C"].pink,
                        opacity: 0.07,
                        delay: "3s"
                    }, void 0, false, {
                        fileName: "[project]/components/pages/PricingPage.jsx",
                        lineNumber: 21,
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
                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$components$2f$shared$2f$ui$2e$jsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Tag"], {
                                    children: "Pricing"
                                }, void 0, false, {
                                    fileName: "[project]/components/pages/PricingPage.jsx",
                                    lineNumber: 23,
                                    columnNumber: 93
                                }, this)
                            }, void 0, false, {
                                fileName: "[project]/components/pages/PricingPage.jsx",
                                lineNumber: 23,
                                columnNumber: 11
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("h1", {
                                style: {
                                    fontFamily: "'Bebas Neue',sans-serif",
                                    fontSize: "clamp(44px,8vw,92px)",
                                    lineHeight: .93,
                                    color: __TURBOPACK__imported__module__$5b$project$5d2f$components$2f$shared$2f$vibeTheme$2e$jsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["C"].white,
                                    animation: "fadeUp .55s .08s ease forwards",
                                    opacity: 0,
                                    marginBottom: "18px"
                                },
                                children: [
                                    "Simple pricing.",
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("br", {}, void 0, false, {
                                        fileName: "[project]/components/pages/PricingPage.jsx",
                                        lineNumber: 24,
                                        columnNumber: 211
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                        style: {
                                            color: __TURBOPACK__imported__module__$5b$project$5d2f$components$2f$shared$2f$vibeTheme$2e$jsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["C"].orange
                                        },
                                        children: "Real value."
                                    }, void 0, false, {
                                        fileName: "[project]/components/pages/PricingPage.jsx",
                                        lineNumber: 24,
                                        columnNumber: 216
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/components/pages/PricingPage.jsx",
                                lineNumber: 24,
                                columnNumber: 11
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                style: {
                                    fontFamily: "'DM Sans',sans-serif",
                                    fontSize: "clamp(14px,1.8vw,18px)",
                                    color: __TURBOPACK__imported__module__$5b$project$5d2f$components$2f$shared$2f$vibeTheme$2e$jsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["C"].dim,
                                    maxWidth: "480px",
                                    lineHeight: 1.75,
                                    animation: "fadeUp .55s .16s ease forwards",
                                    opacity: 0,
                                    margin: "0 auto"
                                },
                                children: "Start free. Scale when you're ready. No lock-ins, no hidden fees."
                            }, void 0, false, {
                                fileName: "[project]/components/pages/PricingPage.jsx",
                                lineNumber: 25,
                                columnNumber: 11
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/components/pages/PricingPage.jsx",
                        lineNumber: 22,
                        columnNumber: 9
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/components/pages/PricingPage.jsx",
                lineNumber: 20,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$components$2f$shared$2f$ui$2e$jsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Divider"], {}, void 0, false, {
                fileName: "[project]/components/pages/PricingPage.jsx",
                lineNumber: 28,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("section", {
                className: "sec-pad",
                style: {
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
                                        color: activeProduct === k ? __TURBOPACK__imported__module__$5b$project$5d2f$components$2f$shared$2f$vibeTheme$2e$jsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["C"].bg : __TURBOPACK__imported__module__$5b$project$5d2f$components$2f$shared$2f$vibeTheme$2e$jsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["C"].dim,
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
                                    fileName: "[project]/components/pages/PricingPage.jsx",
                                    lineNumber: 33,
                                    columnNumber: 52
                                }, this))
                        }, void 0, false, {
                            fileName: "[project]/components/pages/PricingPage.jsx",
                            lineNumber: 32,
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
                                            background: t === "Annual" === annual ? __TURBOPACK__imported__module__$5b$project$5d2f$components$2f$shared$2f$vibeTheme$2e$jsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["C"].orange : "transparent",
                                            color: t === "Annual" === annual ? __TURBOPACK__imported__module__$5b$project$5d2f$components$2f$shared$2f$vibeTheme$2e$jsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["C"].bg : __TURBOPACK__imported__module__$5b$project$5d2f$components$2f$shared$2f$vibeTheme$2e$jsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["C"].dim,
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
                                                fileName: "[project]/components/pages/PricingPage.jsx",
                                                lineNumber: 38,
                                                columnNumber: 388
                                            }, this)
                                        ]
                                    }, t, true, {
                                        fileName: "[project]/components/pages/PricingPage.jsx",
                                        lineNumber: 38,
                                        columnNumber: 44
                                    }, this))
                            }, void 0, false, {
                                fileName: "[project]/components/pages/PricingPage.jsx",
                                lineNumber: 37,
                                columnNumber: 13
                            }, this)
                        }, void 0, false, {
                            fileName: "[project]/components/pages/PricingPage.jsx",
                            lineNumber: 36,
                            columnNumber: 11
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                            style: {
                                fontFamily: "'DM Sans',sans-serif",
                                fontSize: "14px",
                                color: __TURBOPACK__imported__module__$5b$project$5d2f$components$2f$shared$2f$vibeTheme$2e$jsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["C"].dim,
                                textAlign: "center",
                                marginBottom: "36px"
                            },
                            children: current.tagline
                        }, void 0, false, {
                            fileName: "[project]/components/pages/PricingPage.jsx",
                            lineNumber: 41,
                            columnNumber: 11
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "grid-3",
                            children: current.tiers.map((t, i)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$components$2f$shared$2f$ui$2e$jsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["PricingCard"], {
                                    ...t,
                                    annual: annual,
                                    color: current.color,
                                    onCta: ()=>openWaitlist(`${activeProduct} ${t.plan}`)
                                }, i, false, {
                                    fileName: "[project]/components/pages/PricingPage.jsx",
                                    lineNumber: 42,
                                    columnNumber: 61
                                }, this))
                        }, void 0, false, {
                            fileName: "[project]/components/pages/PricingPage.jsx",
                            lineNumber: 42,
                            columnNumber: 11
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$components$2f$shared$2f$ui$2e$jsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Reveal"], {
                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                style: {
                                    fontFamily: "'DM Sans',sans-serif",
                                    fontSize: "12px",
                                    color: __TURBOPACK__imported__module__$5b$project$5d2f$components$2f$shared$2f$vibeTheme$2e$jsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["C"].dimmer,
                                    textAlign: "center",
                                    marginTop: "24px"
                                },
                                children: "All paid plans include a 14-day free trial. No credit card required for free tiers."
                            }, void 0, false, {
                                fileName: "[project]/components/pages/PricingPage.jsx",
                                lineNumber: 43,
                                columnNumber: 19
                            }, this)
                        }, void 0, false, {
                            fileName: "[project]/components/pages/PricingPage.jsx",
                            lineNumber: 43,
                            columnNumber: 11
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "[project]/components/pages/PricingPage.jsx",
                    lineNumber: 30,
                    columnNumber: 9
                }, this)
            }, void 0, false, {
                fileName: "[project]/components/pages/PricingPage.jsx",
                lineNumber: 29,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$components$2f$shared$2f$ui$2e$jsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Divider"], {}, void 0, false, {
                fileName: "[project]/components/pages/PricingPage.jsx",
                lineNumber: 46,
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
                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$components$2f$shared$2f$ui$2e$jsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Reveal"], {
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$components$2f$shared$2f$ui$2e$jsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Tag"], {
                                children: "All plans include"
                            }, void 0, false, {
                                fileName: "[project]/components/pages/PricingPage.jsx",
                                lineNumber: 50,
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
                                            border: `1px solid ${__TURBOPACK__imported__module__$5b$project$5d2f$components$2f$shared$2f$vibeTheme$2e$jsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["C"].border}`,
                                            borderRadius: "2px"
                                        },
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                style: {
                                                    color: __TURBOPACK__imported__module__$5b$project$5d2f$components$2f$shared$2f$vibeTheme$2e$jsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["C"].orange,
                                                    fontSize: "12px"
                                                },
                                                children: "---"
                                            }, void 0, false, {
                                                fileName: "[project]/components/pages/PricingPage.jsx",
                                                lineNumber: 51,
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
                                                fileName: "[project]/components/pages/PricingPage.jsx",
                                                lineNumber: 51,
                                                columnNumber: 403
                                            }, this)
                                        ]
                                    }, f, true, {
                                        fileName: "[project]/components/pages/PricingPage.jsx",
                                        lineNumber: 51,
                                        columnNumber: 174
                                    }, this))
                            }, void 0, false, {
                                fileName: "[project]/components/pages/PricingPage.jsx",
                                lineNumber: 50,
                                columnNumber: 47
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/components/pages/PricingPage.jsx",
                        lineNumber: 50,
                        columnNumber: 11
                    }, this)
                }, void 0, false, {
                    fileName: "[project]/components/pages/PricingPage.jsx",
                    lineNumber: 49,
                    columnNumber: 9
                }, this)
            }, void 0, false, {
                fileName: "[project]/components/pages/PricingPage.jsx",
                lineNumber: 48,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$components$2f$shared$2f$ui$2e$jsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Divider"], {}, void 0, false, {
                fileName: "[project]/components/pages/PricingPage.jsx",
                lineNumber: 55,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("section", {
                className: "sec-pad",
                style: {
                    background: __TURBOPACK__imported__module__$5b$project$5d2f$components$2f$shared$2f$vibeTheme$2e$jsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["C"].bg2
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
                                    children: "Pricing FAQ"
                                }, void 0, false, {
                                    fileName: "[project]/components/pages/PricingPage.jsx",
                                    lineNumber: 56,
                                    columnNumber: 149
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
                                        "Questions about ",
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                            style: {
                                                color: __TURBOPACK__imported__module__$5b$project$5d2f$components$2f$shared$2f$vibeTheme$2e$jsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["C"].orange
                                            },
                                            children: "pricing."
                                        }, void 0, false, {
                                            fileName: "[project]/components/pages/PricingPage.jsx",
                                            lineNumber: 56,
                                            columnNumber: 314
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/components/pages/PricingPage.jsx",
                                    lineNumber: 56,
                                    columnNumber: 171
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "[project]/components/pages/PricingPage.jsx",
                            lineNumber: 56,
                            columnNumber: 111
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(FAQ, {
                            items: faqItems
                        }, void 0, false, {
                            fileName: "[project]/components/pages/PricingPage.jsx",
                            lineNumber: 56,
                            columnNumber: 374
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "[project]/components/pages/PricingPage.jsx",
                    lineNumber: 56,
                    columnNumber: 63
                }, this)
            }, void 0, false, {
                fileName: "[project]/components/pages/PricingPage.jsx",
                lineNumber: 56,
                columnNumber: 7
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/components/pages/PricingPage.jsx",
        lineNumber: 19,
        columnNumber: 5
    }, this);
}
}),
];

//# sourceMappingURL=%5Broot-of-the-server%5D__178a4da9._.js.map
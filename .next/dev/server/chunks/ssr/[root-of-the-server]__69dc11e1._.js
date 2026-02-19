module.exports = [
"[externals]/next/dist/compiled/next-server/app-page-turbo.runtime.dev.js [external] (next/dist/compiled/next-server/app-page-turbo.runtime.dev.js, cjs)", ((__turbopack_context__, module, exports) => {

const mod = __turbopack_context__.x("next/dist/compiled/next-server/app-page-turbo.runtime.dev.js", () => require("next/dist/compiled/next-server/app-page-turbo.runtime.dev.js"));

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
"[project]/components/pages/JobsPage.jsx [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>JobsPage
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react-jsx-dev-runtime.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$components$2f$shared$2f$vibeTheme$2e$jsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/components/shared/vibeTheme.jsx [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$components$2f$shared$2f$ui$2e$jsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/components/shared/ui.jsx [app-ssr] (ecmascript)");
"use client";
;
;
;
;
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
    Engineering: __TURBOPACK__imported__module__$5b$project$5d2f$components$2f$shared$2f$vibeTheme$2e$jsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["C"].orange,
    Design: __TURBOPACK__imported__module__$5b$project$5d2f$components$2f$shared$2f$vibeTheme$2e$jsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["C"].blue,
    Marketing: __TURBOPACK__imported__module__$5b$project$5d2f$components$2f$shared$2f$vibeTheme$2e$jsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["C"].pink,
    Community: __TURBOPACK__imported__module__$5b$project$5d2f$components$2f$shared$2f$vibeTheme$2e$jsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["C"].purple,
    Creators: __TURBOPACK__imported__module__$5b$project$5d2f$components$2f$shared$2f$vibeTheme$2e$jsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["C"].gold,
    Business: __TURBOPACK__imported__module__$5b$project$5d2f$components$2f$shared$2f$vibeTheme$2e$jsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["C"].orange
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
            background: __TURBOPACK__imported__module__$5b$project$5d2f$components$2f$shared$2f$vibeTheme$2e$jsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["C"].bg,
            color: __TURBOPACK__imported__module__$5b$project$5d2f$components$2f$shared$2f$vibeTheme$2e$jsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["C"].white
        },
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$components$2f$shared$2f$ui$2e$jsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["PageHero"], {
                tag: "Careers",
                title: "We don't hire for roles.",
                accent: "We hire builders.",
                sub: "Ambitious, fast-moving, impact-driven. Join the team building infrastructure for modern city culture."
            }, void 0, false, {
                fileName: "[project]/components/pages/JobsPage.jsx",
                lineNumber: 109,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$components$2f$shared$2f$ui$2e$jsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Divider"], {}, void 0, false, {
                fileName: "[project]/components/pages/JobsPage.jsx",
                lineNumber: 110,
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
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$components$2f$shared$2f$ui$2e$jsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Reveal"], {
                            style: {
                                marginBottom: "44px"
                            },
                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$components$2f$shared$2f$ui$2e$jsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Tag"], {
                                children: "What You Get"
                            }, void 0, false, {
                                fileName: "[project]/components/pages/JobsPage.jsx",
                                lineNumber: 112,
                                columnNumber: 150
                            }, this)
                        }, void 0, false, {
                            fileName: "[project]/components/pages/JobsPage.jsx",
                            lineNumber: 112,
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
                            ].map((p, i)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$components$2f$shared$2f$ui$2e$jsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Reveal"], {
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
                                            e.currentTarget.style.borderColor = __TURBOPACK__imported__module__$5b$project$5d2f$components$2f$shared$2f$vibeTheme$2e$jsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["C"].orange;
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
                                                fileName: "[project]/components/pages/JobsPage.jsx",
                                                lineNumber: 112,
                                                columnNumber: 1165
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                style: {
                                                    fontFamily: "'Bebas Neue',sans-serif",
                                                    fontSize: "18px",
                                                    color: __TURBOPACK__imported__module__$5b$project$5d2f$components$2f$shared$2f$vibeTheme$2e$jsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["C"].white,
                                                    marginBottom: "8px"
                                                },
                                                children: p.t
                                            }, void 0, false, {
                                                fileName: "[project]/components/pages/JobsPage.jsx",
                                                lineNumber: 112,
                                                columnNumber: 1230
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                style: {
                                                    fontFamily: "'DM Sans',sans-serif",
                                                    fontSize: "13px",
                                                    color: __TURBOPACK__imported__module__$5b$project$5d2f$components$2f$shared$2f$vibeTheme$2e$jsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["C"].dim,
                                                    lineHeight: 1.7
                                                },
                                                children: p.d
                                            }, void 0, false, {
                                                fileName: "[project]/components/pages/JobsPage.jsx",
                                                lineNumber: 112,
                                                columnNumber: 1342
                                            }, this)
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/components/pages/JobsPage.jsx",
                                        lineNumber: 112,
                                        columnNumber: 654
                                    }, this)
                                }, i, false, {
                                    fileName: "[project]/components/pages/JobsPage.jsx",
                                    lineNumber: 112,
                                    columnNumber: 625
                                }, this))
                        }, void 0, false, {
                            fileName: "[project]/components/pages/JobsPage.jsx",
                            lineNumber: 112,
                            columnNumber: 182
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "[project]/components/pages/JobsPage.jsx",
                    lineNumber: 112,
                    columnNumber: 63
                }, this)
            }, void 0, false, {
                fileName: "[project]/components/pages/JobsPage.jsx",
                lineNumber: 112,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$components$2f$shared$2f$ui$2e$jsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Divider"], {}, void 0, false, {
                fileName: "[project]/components/pages/JobsPage.jsx",
                lineNumber: 113,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("section", {
                className: "sec-pad",
                style: {
                    position: "relative",
                    overflow: "hidden"
                },
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$components$2f$shared$2f$ui$2e$jsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Orb"], {
                        top: "0%",
                        right: "-5%",
                        size: 450,
                        opacity: 0.08
                    }, void 0, false, {
                        fileName: "[project]/components/pages/JobsPage.jsx",
                        lineNumber: 116,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        style: {
                            maxWidth: "1100px",
                            margin: "0 auto"
                        },
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$components$2f$shared$2f$ui$2e$jsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Reveal"], {
                                style: {
                                    marginBottom: "36px"
                                },
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$components$2f$shared$2f$ui$2e$jsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Tag"], {
                                        children: "Open Roles"
                                    }, void 0, false, {
                                        fileName: "[project]/components/pages/JobsPage.jsx",
                                        lineNumber: 118,
                                        columnNumber: 49
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("h2", {
                                        style: {
                                            fontFamily: "'Bebas Neue',sans-serif",
                                            fontSize: "clamp(30px,5vw,54px)",
                                            color: __TURBOPACK__imported__module__$5b$project$5d2f$components$2f$shared$2f$vibeTheme$2e$jsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["C"].white,
                                            lineHeight: 1,
                                            marginTop: "16px"
                                        },
                                        children: [
                                            "Find your position",
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("br", {}, void 0, false, {
                                                fileName: "[project]/components/pages/JobsPage.jsx",
                                                lineNumber: 118,
                                                columnNumber: 215
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                style: {
                                                    color: __TURBOPACK__imported__module__$5b$project$5d2f$components$2f$shared$2f$vibeTheme$2e$jsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["C"].orange
                                                },
                                                children: "in the vibe."
                                            }, void 0, false, {
                                                fileName: "[project]/components/pages/JobsPage.jsx",
                                                lineNumber: 118,
                                                columnNumber: 220
                                            }, this)
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/components/pages/JobsPage.jsx",
                                        lineNumber: 118,
                                        columnNumber: 70
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/components/pages/JobsPage.jsx",
                                lineNumber: 118,
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
                                            background: filter === d ? DEPT_COLORS[d] || __TURBOPACK__imported__module__$5b$project$5d2f$components$2f$shared$2f$vibeTheme$2e$jsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["C"].orange : "transparent",
                                            color: filter === d ? __TURBOPACK__imported__module__$5b$project$5d2f$components$2f$shared$2f$vibeTheme$2e$jsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["C"].bg : __TURBOPACK__imported__module__$5b$project$5d2f$components$2f$shared$2f$vibeTheme$2e$jsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["C"].dim,
                                            border: `1px solid ${filter === d ? DEPT_COLORS[d] || __TURBOPACK__imported__module__$5b$project$5d2f$components$2f$shared$2f$vibeTheme$2e$jsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["C"].orange : "rgba(255,255,255,0.12)"}`,
                                            borderRadius: "2px",
                                            cursor: "pointer",
                                            transition: "all .2s"
                                        },
                                        children: d
                                    }, d, false, {
                                        fileName: "[project]/components/pages/JobsPage.jsx",
                                        lineNumber: 120,
                                        columnNumber: 27
                                    }, this))
                            }, void 0, false, {
                                fileName: "[project]/components/pages/JobsPage.jsx",
                                lineNumber: 119,
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
                                    const dc = DEPT_COLORS[role.dept] || __TURBOPACK__imported__module__$5b$project$5d2f$components$2f$shared$2f$vibeTheme$2e$jsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["C"].orange;
                                    const tab = getTab(i);
                                    const TABS = [
                                        "Overview",
                                        "Responsibilities",
                                        "Requirements",
                                        "Stack & Perks"
                                    ];
                                    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$components$2f$shared$2f$ui$2e$jsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Reveal"], {
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
                                                                        color: __TURBOPACK__imported__module__$5b$project$5d2f$components$2f$shared$2f$vibeTheme$2e$jsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["C"].white,
                                                                        marginBottom: "6px"
                                                                    },
                                                                    children: role.title
                                                                }, void 0, false, {
                                                                    fileName: "[project]/components/pages/JobsPage.jsx",
                                                                    lineNumber: 134,
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
                                                                            fileName: "[project]/components/pages/JobsPage.jsx",
                                                                            lineNumber: 136,
                                                                            columnNumber: 27
                                                                        }, this),
                                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                                            style: {
                                                                                fontFamily: "'DM Sans',sans-serif",
                                                                                fontSize: "11px",
                                                                                color: __TURBOPACK__imported__module__$5b$project$5d2f$components$2f$shared$2f$vibeTheme$2e$jsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["C"].dimmer
                                                                            },
                                                                            children: "--"
                                                                        }, void 0, false, {
                                                                            fileName: "[project]/components/pages/JobsPage.jsx",
                                                                            lineNumber: 137,
                                                                            columnNumber: 27
                                                                        }, this),
                                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                                            style: {
                                                                                fontFamily: "'DM Sans',sans-serif",
                                                                                fontSize: "12px",
                                                                                color: __TURBOPACK__imported__module__$5b$project$5d2f$components$2f$shared$2f$vibeTheme$2e$jsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["C"].dimmer
                                                                            },
                                                                            children: role.type
                                                                        }, void 0, false, {
                                                                            fileName: "[project]/components/pages/JobsPage.jsx",
                                                                            lineNumber: 138,
                                                                            columnNumber: 27
                                                                        }, this),
                                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                                            style: {
                                                                                fontFamily: "'DM Sans',sans-serif",
                                                                                fontSize: "11px",
                                                                                color: __TURBOPACK__imported__module__$5b$project$5d2f$components$2f$shared$2f$vibeTheme$2e$jsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["C"].dimmer
                                                                            },
                                                                            children: "--"
                                                                        }, void 0, false, {
                                                                            fileName: "[project]/components/pages/JobsPage.jsx",
                                                                            lineNumber: 139,
                                                                            columnNumber: 27
                                                                        }, this),
                                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                                            style: {
                                                                                fontFamily: "'DM Sans',sans-serif",
                                                                                fontSize: "12px",
                                                                                color: __TURBOPACK__imported__module__$5b$project$5d2f$components$2f$shared$2f$vibeTheme$2e$jsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["C"].dimmer
                                                                            },
                                                                            children: role.location
                                                                        }, void 0, false, {
                                                                            fileName: "[project]/components/pages/JobsPage.jsx",
                                                                            lineNumber: 140,
                                                                            columnNumber: 27
                                                                        }, this),
                                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                                            style: {
                                                                                fontFamily: "'DM Sans',sans-serif",
                                                                                fontSize: "11px",
                                                                                color: __TURBOPACK__imported__module__$5b$project$5d2f$components$2f$shared$2f$vibeTheme$2e$jsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["C"].dimmer
                                                                            },
                                                                            children: "--"
                                                                        }, void 0, false, {
                                                                            fileName: "[project]/components/pages/JobsPage.jsx",
                                                                            lineNumber: 141,
                                                                            columnNumber: 27
                                                                        }, this),
                                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                                            style: {
                                                                                fontFamily: "'Bebas Neue',sans-serif",
                                                                                fontSize: "12px",
                                                                                letterSpacing: "1px",
                                                                                color: __TURBOPACK__imported__module__$5b$project$5d2f$components$2f$shared$2f$vibeTheme$2e$jsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["C"].orange
                                                                            },
                                                                            children: role.salary
                                                                        }, void 0, false, {
                                                                            fileName: "[project]/components/pages/JobsPage.jsx",
                                                                            lineNumber: 142,
                                                                            columnNumber: 27
                                                                        }, this)
                                                                    ]
                                                                }, void 0, true, {
                                                                    fileName: "[project]/components/pages/JobsPage.jsx",
                                                                    lineNumber: 135,
                                                                    columnNumber: 25
                                                                }, this)
                                                            ]
                                                        }, void 0, true, {
                                                            fileName: "[project]/components/pages/JobsPage.jsx",
                                                            lineNumber: 133,
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
                                                                color: isOpen ? dc : __TURBOPACK__imported__module__$5b$project$5d2f$components$2f$shared$2f$vibeTheme$2e$jsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["C"].dimmer,
                                                                fontSize: "16px",
                                                                transition: "all .3s",
                                                                transform: isOpen ? "rotate(45deg)" : "none",
                                                                flexShrink: 0,
                                                                fontWeight: 300
                                                            },
                                                            children: "+"
                                                        }, void 0, false, {
                                                            fileName: "[project]/components/pages/JobsPage.jsx",
                                                            lineNumber: 145,
                                                            columnNumber: 23
                                                        }, this)
                                                    ]
                                                }, void 0, true, {
                                                    fileName: "[project]/components/pages/JobsPage.jsx",
                                                    lineNumber: 132,
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
                                                            fileName: "[project]/components/pages/JobsPage.jsx",
                                                            lineNumber: 150,
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
                                                                        color: tab === t ? __TURBOPACK__imported__module__$5b$project$5d2f$components$2f$shared$2f$vibeTheme$2e$jsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["C"].bg : __TURBOPACK__imported__module__$5b$project$5d2f$components$2f$shared$2f$vibeTheme$2e$jsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["C"].dim,
                                                                        border: `1px solid ${tab === t ? dc : "rgba(255,255,255,0.08)"}`,
                                                                        borderRadius: "2px",
                                                                        cursor: "pointer",
                                                                        transition: "all .2s"
                                                                    },
                                                                    children: t
                                                                }, t, false, {
                                                                    fileName: "[project]/components/pages/JobsPage.jsx",
                                                                    lineNumber: 154,
                                                                    columnNumber: 29
                                                                }, this))
                                                        }, void 0, false, {
                                                            fileName: "[project]/components/pages/JobsPage.jsx",
                                                            lineNumber: 152,
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
                                                                    fileName: "[project]/components/pages/JobsPage.jsx",
                                                                    lineNumber: 160,
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
                                                                                        color: __TURBOPACK__imported__module__$5b$project$5d2f$components$2f$shared$2f$vibeTheme$2e$jsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["C"].dimmer,
                                                                                        letterSpacing: "1px",
                                                                                        textTransform: "uppercase"
                                                                                    },
                                                                                    children: l
                                                                                }, void 0, false, {
                                                                                    fileName: "[project]/components/pages/JobsPage.jsx",
                                                                                    lineNumber: 164,
                                                                                    columnNumber: 35
                                                                                }, this),
                                                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                                                    style: {
                                                                                        fontFamily: "'DM Sans',sans-serif",
                                                                                        fontSize: "13px",
                                                                                        color: __TURBOPACK__imported__module__$5b$project$5d2f$components$2f$shared$2f$vibeTheme$2e$jsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["C"].white,
                                                                                        marginTop: "3px",
                                                                                        fontWeight: 600
                                                                                    },
                                                                                    children: v
                                                                                }, void 0, false, {
                                                                                    fileName: "[project]/components/pages/JobsPage.jsx",
                                                                                    lineNumber: 165,
                                                                                    columnNumber: 35
                                                                                }, this)
                                                                            ]
                                                                        }, l, true, {
                                                                            fileName: "[project]/components/pages/JobsPage.jsx",
                                                                            lineNumber: 163,
                                                                            columnNumber: 33
                                                                        }, this))
                                                                }, void 0, false, {
                                                                    fileName: "[project]/components/pages/JobsPage.jsx",
                                                                    lineNumber: 161,
                                                                    columnNumber: 29
                                                                }, this)
                                                            ]
                                                        }, void 0, true, {
                                                            fileName: "[project]/components/pages/JobsPage.jsx",
                                                            lineNumber: 159,
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
                                                                            fileName: "[project]/components/pages/JobsPage.jsx",
                                                                            lineNumber: 175,
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
                                                                            fileName: "[project]/components/pages/JobsPage.jsx",
                                                                            lineNumber: 176,
                                                                            columnNumber: 33
                                                                        }, this)
                                                                    ]
                                                                }, idx, true, {
                                                                    fileName: "[project]/components/pages/JobsPage.jsx",
                                                                    lineNumber: 174,
                                                                    columnNumber: 31
                                                                }, this))
                                                        }, void 0, false, {
                                                            fileName: "[project]/components/pages/JobsPage.jsx",
                                                            lineNumber: 172,
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
                                                                            fileName: "[project]/components/pages/JobsPage.jsx",
                                                                            lineNumber: 184,
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
                                                                                            fileName: "[project]/components/pages/JobsPage.jsx",
                                                                                            lineNumber: 188,
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
                                                                                            fileName: "[project]/components/pages/JobsPage.jsx",
                                                                                            lineNumber: 189,
                                                                                            columnNumber: 37
                                                                                        }, this)
                                                                                    ]
                                                                                }, idx, true, {
                                                                                    fileName: "[project]/components/pages/JobsPage.jsx",
                                                                                    lineNumber: 187,
                                                                                    columnNumber: 35
                                                                                }, this))
                                                                        }, void 0, false, {
                                                                            fileName: "[project]/components/pages/JobsPage.jsx",
                                                                            lineNumber: 185,
                                                                            columnNumber: 31
                                                                        }, this)
                                                                    ]
                                                                }, void 0, true, {
                                                                    fileName: "[project]/components/pages/JobsPage.jsx",
                                                                    lineNumber: 183,
                                                                    columnNumber: 29
                                                                }, this),
                                                                role.niceToHave && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                                    children: [
                                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                                            style: {
                                                                                fontFamily: "'Bebas Neue',sans-serif",
                                                                                fontSize: "13px",
                                                                                letterSpacing: "2px",
                                                                                color: __TURBOPACK__imported__module__$5b$project$5d2f$components$2f$shared$2f$vibeTheme$2e$jsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["C"].dimmer,
                                                                                marginBottom: "12px"
                                                                            },
                                                                            children: "Nice to Have"
                                                                        }, void 0, false, {
                                                                            fileName: "[project]/components/pages/JobsPage.jsx",
                                                                            lineNumber: 194,
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
                                                                                                color: __TURBOPACK__imported__module__$5b$project$5d2f$components$2f$shared$2f$vibeTheme$2e$jsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["C"].dimmer,
                                                                                                fontSize: "14px",
                                                                                                flexShrink: 0,
                                                                                                marginTop: "1px"
                                                                                            },
                                                                                            children: "---"
                                                                                        }, void 0, false, {
                                                                                            fileName: "[project]/components/pages/JobsPage.jsx",
                                                                                            lineNumber: 194,
                                                                                            columnNumber: 361
                                                                                        }, this),
                                                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                                                            style: {
                                                                                                fontFamily: "'DM Sans',sans-serif",
                                                                                                fontSize: "14px",
                                                                                                color: __TURBOPACK__imported__module__$5b$project$5d2f$components$2f$shared$2f$vibeTheme$2e$jsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["C"].dim,
                                                                                                lineHeight: 1.6
                                                                                            },
                                                                                            children: r
                                                                                        }, void 0, false, {
                                                                                            fileName: "[project]/components/pages/JobsPage.jsx",
                                                                                            lineNumber: 194,
                                                                                            columnNumber: 447
                                                                                        }, this)
                                                                                    ]
                                                                                }, idx, true, {
                                                                                    fileName: "[project]/components/pages/JobsPage.jsx",
                                                                                    lineNumber: 194,
                                                                                    columnNumber: 286
                                                                                }, this))
                                                                        }, void 0, false, {
                                                                            fileName: "[project]/components/pages/JobsPage.jsx",
                                                                            lineNumber: 194,
                                                                            columnNumber: 193
                                                                        }, this)
                                                                    ]
                                                                }, void 0, true, {
                                                                    fileName: "[project]/components/pages/JobsPage.jsx",
                                                                    lineNumber: 194,
                                                                    columnNumber: 47
                                                                }, this)
                                                            ]
                                                        }, void 0, true, {
                                                            fileName: "[project]/components/pages/JobsPage.jsx",
                                                            lineNumber: 182,
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
                                                                            fileName: "[project]/components/pages/JobsPage.jsx",
                                                                            lineNumber: 199,
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
                                                                                        color: __TURBOPACK__imported__module__$5b$project$5d2f$components$2f$shared$2f$vibeTheme$2e$jsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["C"].white,
                                                                                        padding: "6px 14px",
                                                                                        background: `${dc}15`,
                                                                                        border: `1px solid ${dc}30`,
                                                                                        borderRadius: "2px"
                                                                                    },
                                                                                    children: t
                                                                                }, t, false, {
                                                                                    fileName: "[project]/components/pages/JobsPage.jsx",
                                                                                    lineNumber: 199,
                                                                                    columnNumber: 293
                                                                                }, this))
                                                                        }, void 0, false, {
                                                                            fileName: "[project]/components/pages/JobsPage.jsx",
                                                                            lineNumber: 199,
                                                                            columnNumber: 214
                                                                        }, this)
                                                                    ]
                                                                }, void 0, true, {
                                                                    fileName: "[project]/components/pages/JobsPage.jsx",
                                                                    lineNumber: 199,
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
                                                                            fileName: "[project]/components/pages/JobsPage.jsx",
                                                                            lineNumber: 200,
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
                                                                                            fileName: "[project]/components/pages/JobsPage.jsx",
                                                                                            lineNumber: 200,
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
                                                                                            fileName: "[project]/components/pages/JobsPage.jsx",
                                                                                            lineNumber: 200,
                                                                                            columnNumber: 725
                                                                                        }, this)
                                                                                    ]
                                                                                }, b, true, {
                                                                                    fileName: "[project]/components/pages/JobsPage.jsx",
                                                                                    lineNumber: 200,
                                                                                    columnNumber: 476
                                                                                }, this))
                                                                        }, void 0, false, {
                                                                            fileName: "[project]/components/pages/JobsPage.jsx",
                                                                            lineNumber: 200,
                                                                            columnNumber: 165
                                                                        }, this)
                                                                    ]
                                                                }, void 0, true, {
                                                                    fileName: "[project]/components/pages/JobsPage.jsx",
                                                                    lineNumber: 200,
                                                                    columnNumber: 29
                                                                }, this)
                                                            ]
                                                        }, void 0, true, {
                                                            fileName: "[project]/components/pages/JobsPage.jsx",
                                                            lineNumber: 198,
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
                                                                        color: __TURBOPACK__imported__module__$5b$project$5d2f$components$2f$shared$2f$vibeTheme$2e$jsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["C"].bg,
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
                                                                    fileName: "[project]/components/pages/JobsPage.jsx",
                                                                    lineNumber: 204,
                                                                    columnNumber: 27
                                                                }, this),
                                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                                    style: {
                                                                        fontFamily: "'DM Sans',sans-serif",
                                                                        fontSize: "11px",
                                                                        color: __TURBOPACK__imported__module__$5b$project$5d2f$components$2f$shared$2f$vibeTheme$2e$jsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["C"].dimmer
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
                                                                            fileName: "[project]/components/pages/JobsPage.jsx",
                                                                            lineNumber: 210,
                                                                            columnNumber: 117
                                                                        }, this)
                                                                    ]
                                                                }, void 0, true, {
                                                                    fileName: "[project]/components/pages/JobsPage.jsx",
                                                                    lineNumber: 210,
                                                                    columnNumber: 27
                                                                }, this)
                                                            ]
                                                        }, void 0, true, {
                                                            fileName: "[project]/components/pages/JobsPage.jsx",
                                                            lineNumber: 203,
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
                                                                                        color: __TURBOPACK__imported__module__$5b$project$5d2f$components$2f$shared$2f$vibeTheme$2e$jsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["C"].dimmer,
                                                                                        letterSpacing: "1px",
                                                                                        textTransform: "uppercase"
                                                                                    },
                                                                                    children: f.label
                                                                                }, void 0, false, {
                                                                                    fileName: "[project]/components/pages/JobsPage.jsx",
                                                                                    lineNumber: 222,
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
                                                                                        color: __TURBOPACK__imported__module__$5b$project$5d2f$components$2f$shared$2f$vibeTheme$2e$jsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["C"].white,
                                                                                        borderRadius: "3px",
                                                                                        fontFamily: "'DM Sans',sans-serif",
                                                                                        fontSize: "13px",
                                                                                        outline: "none"
                                                                                    }
                                                                                }, void 0, false, {
                                                                                    fileName: "[project]/components/pages/JobsPage.jsx",
                                                                                    lineNumber: 223,
                                                                                    columnNumber: 35
                                                                                }, this)
                                                                            ]
                                                                        }, f.label, true, {
                                                                            fileName: "[project]/components/pages/JobsPage.jsx",
                                                                            lineNumber: 221,
                                                                            columnNumber: 33
                                                                        }, this))
                                                                }, void 0, false, {
                                                                    fileName: "[project]/components/pages/JobsPage.jsx",
                                                                    lineNumber: 214,
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
                                                                                color: __TURBOPACK__imported__module__$5b$project$5d2f$components$2f$shared$2f$vibeTheme$2e$jsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["C"].dimmer,
                                                                                letterSpacing: "1px",
                                                                                textTransform: "uppercase"
                                                                            },
                                                                            children: "Why VibeCircle?"
                                                                        }, void 0, false, {
                                                                            fileName: "[project]/components/pages/JobsPage.jsx",
                                                                            lineNumber: 228,
                                                                            columnNumber: 31
                                                                        }, this),
                                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("textarea", {
                                                                            rows: 4,
                                                                            placeholder: "Tell us what you want to build.",
                                                                            style: {
                                                                                padding: "10px 12px",
                                                                                background: "#0C0C18",
                                                                                border: `1px solid rgba(255,255,255,0.12)`,
                                                                                color: __TURBOPACK__imported__module__$5b$project$5d2f$components$2f$shared$2f$vibeTheme$2e$jsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["C"].white,
                                                                                borderRadius: "3px",
                                                                                fontFamily: "'DM Sans',sans-serif",
                                                                                fontSize: "13px",
                                                                                outline: "none",
                                                                                resize: "vertical"
                                                                            }
                                                                        }, void 0, false, {
                                                                            fileName: "[project]/components/pages/JobsPage.jsx",
                                                                            lineNumber: 229,
                                                                            columnNumber: 31
                                                                        }, this)
                                                                    ]
                                                                }, void 0, true, {
                                                                    fileName: "[project]/components/pages/JobsPage.jsx",
                                                                    lineNumber: 227,
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
                                                                                    fileName: "[project]/components/pages/JobsPage.jsx",
                                                                                    lineNumber: 237,
                                                                                    columnNumber: 33
                                                                                }, this),
                                                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                                                    style: {
                                                                                        fontFamily: "'DM Sans',sans-serif",
                                                                                        fontSize: "12px",
                                                                                        color: __TURBOPACK__imported__module__$5b$project$5d2f$components$2f$shared$2f$vibeTheme$2e$jsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["C"].dimmer,
                                                                                        marginTop: "4px"
                                                                                    },
                                                                                    children: "PDF or DOCX -- up to 10MB"
                                                                                }, void 0, false, {
                                                                                    fileName: "[project]/components/pages/JobsPage.jsx",
                                                                                    lineNumber: 238,
                                                                                    columnNumber: 33
                                                                                }, this)
                                                                            ]
                                                                        }, void 0, true, {
                                                                            fileName: "[project]/components/pages/JobsPage.jsx",
                                                                            lineNumber: 236,
                                                                            columnNumber: 31
                                                                        }, this),
                                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                                            style: {
                                                                                fontFamily: "'DM Sans',sans-serif",
                                                                                fontSize: "12px",
                                                                                color: __TURBOPACK__imported__module__$5b$project$5d2f$components$2f$shared$2f$vibeTheme$2e$jsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["C"].white,
                                                                                background: `${dc}18`,
                                                                                border: `1px solid ${dc}40`,
                                                                                padding: "6px 12px",
                                                                                borderRadius: "3px"
                                                                            },
                                                                            children: "Choose File"
                                                                        }, void 0, false, {
                                                                            fileName: "[project]/components/pages/JobsPage.jsx",
                                                                            lineNumber: 240,
                                                                            columnNumber: 31
                                                                        }, this),
                                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
                                                                            type: "file",
                                                                            accept: ".pdf,.doc,.docx",
                                                                            style: {
                                                                                display: "none"
                                                                            }
                                                                        }, void 0, false, {
                                                                            fileName: "[project]/components/pages/JobsPage.jsx",
                                                                            lineNumber: 241,
                                                                            columnNumber: 31
                                                                        }, this)
                                                                    ]
                                                                }, void 0, true, {
                                                                    fileName: "[project]/components/pages/JobsPage.jsx",
                                                                    lineNumber: 231,
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
                                                                                color: __TURBOPACK__imported__module__$5b$project$5d2f$components$2f$shared$2f$vibeTheme$2e$jsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["C"].bg,
                                                                                border: "none",
                                                                                borderRadius: "2px",
                                                                                cursor: "pointer",
                                                                                transition: "box-shadow .2s"
                                                                            },
                                                                            onMouseEnter: (e)=>e.target.style.boxShadow = `0 8px 24px ${dc}45`,
                                                                            onMouseLeave: (e)=>e.target.style.boxShadow = "",
                                                                            children: "Submit Application"
                                                                        }, void 0, false, {
                                                                            fileName: "[project]/components/pages/JobsPage.jsx",
                                                                            lineNumber: 244,
                                                                            columnNumber: 31
                                                                        }, this),
                                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                                            style: {
                                                                                fontFamily: "'DM Sans',sans-serif",
                                                                                fontSize: "11px",
                                                                                color: __TURBOPACK__imported__module__$5b$project$5d2f$components$2f$shared$2f$vibeTheme$2e$jsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["C"].dimmer
                                                                            },
                                                                            children: "We respond within 5 business days."
                                                                        }, void 0, false, {
                                                                            fileName: "[project]/components/pages/JobsPage.jsx",
                                                                            lineNumber: 250,
                                                                            columnNumber: 31
                                                                        }, this)
                                                                    ]
                                                                }, void 0, true, {
                                                                    fileName: "[project]/components/pages/JobsPage.jsx",
                                                                    lineNumber: 243,
                                                                    columnNumber: 29
                                                                }, this)
                                                            ]
                                                        }, void 0, true, {
                                                            fileName: "[project]/components/pages/JobsPage.jsx",
                                                            lineNumber: 213,
                                                            columnNumber: 27
                                                        }, this)
                                                    ]
                                                }, void 0, true, {
                                                    fileName: "[project]/components/pages/JobsPage.jsx",
                                                    lineNumber: 149,
                                                    columnNumber: 23
                                                }, this)
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/components/pages/JobsPage.jsx",
                                            lineNumber: 130,
                                            columnNumber: 19
                                        }, this)
                                    }, role.title + filter, false, {
                                        fileName: "[project]/components/pages/JobsPage.jsx",
                                        lineNumber: 129,
                                        columnNumber: 17
                                    }, this);
                                })
                            }, void 0, false, {
                                fileName: "[project]/components/pages/JobsPage.jsx",
                                lineNumber: 122,
                                columnNumber: 11
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/components/pages/JobsPage.jsx",
                        lineNumber: 117,
                        columnNumber: 9
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/components/pages/JobsPage.jsx",
                lineNumber: 115,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$components$2f$shared$2f$ui$2e$jsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Divider"], {}, void 0, false, {
                fileName: "[project]/components/pages/JobsPage.jsx",
                lineNumber: 263,
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
                                    children: "Hiring FAQ"
                                }, void 0, false, {
                                    fileName: "[project]/components/pages/JobsPage.jsx",
                                    lineNumber: 264,
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
                                        "About joining ",
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                            style: {
                                                color: __TURBOPACK__imported__module__$5b$project$5d2f$components$2f$shared$2f$vibeTheme$2e$jsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["C"].orange
                                            },
                                            children: "VibeCircle."
                                        }, void 0, false, {
                                            fileName: "[project]/components/pages/JobsPage.jsx",
                                            lineNumber: 264,
                                            columnNumber: 311
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/components/pages/JobsPage.jsx",
                                    lineNumber: 264,
                                    columnNumber: 170
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "[project]/components/pages/JobsPage.jsx",
                            lineNumber: 264,
                            columnNumber: 111
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$components$2f$shared$2f$ui$2e$jsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["FAQ"], {
                            items: JOBS_FAQS
                        }, void 0, false, {
                            fileName: "[project]/components/pages/JobsPage.jsx",
                            lineNumber: 264,
                            columnNumber: 374
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "[project]/components/pages/JobsPage.jsx",
                    lineNumber: 264,
                    columnNumber: 63
                }, this)
            }, void 0, false, {
                fileName: "[project]/components/pages/JobsPage.jsx",
                lineNumber: 264,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("section", {
                style: {
                    background: __TURBOPACK__imported__module__$5b$project$5d2f$components$2f$shared$2f$vibeTheme$2e$jsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["C"].orange,
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
                                        color: __TURBOPACK__imported__module__$5b$project$5d2f$components$2f$shared$2f$vibeTheme$2e$jsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["C"].bg,
                                        lineHeight: 1
                                    },
                                    children: [
                                        "Don't see your role?",
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("br", {}, void 0, false, {
                                            fileName: "[project]/components/pages/JobsPage.jsx",
                                            lineNumber: 265,
                                            columnNumber: 357
                                        }, this),
                                        "Build your own."
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/components/pages/JobsPage.jsx",
                                    lineNumber: 265,
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
                                    fileName: "[project]/components/pages/JobsPage.jsx",
                                    lineNumber: 265,
                                    columnNumber: 383
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "[project]/components/pages/JobsPage.jsx",
                            lineNumber: 265,
                            columnNumber: 224
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                            onClick: ()=>openWaitlist("Custom Role"),
                            style: {
                                fontFamily: "'Bebas Neue',sans-serif",
                                fontSize: "14px",
                                letterSpacing: "3px",
                                padding: "14px 36px",
                                background: __TURBOPACK__imported__module__$5b$project$5d2f$components$2f$shared$2f$vibeTheme$2e$jsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["C"].bg,
                                color: __TURBOPACK__imported__module__$5b$project$5d2f$components$2f$shared$2f$vibeTheme$2e$jsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["C"].orange,
                                border: "none",
                                borderRadius: "2px",
                                cursor: "pointer",
                                transition: "transform .2s"
                            },
                            onMouseEnter: (e)=>e.target.style.transform = "translateY(-2px)",
                            onMouseLeave: (e)=>e.target.style.transform = "",
                            children: "Get in Touch"
                        }, void 0, false, {
                            fileName: "[project]/components/pages/JobsPage.jsx",
                            lineNumber: 265,
                            columnNumber: 519
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "[project]/components/pages/JobsPage.jsx",
                    lineNumber: 265,
                    columnNumber: 82
                }, this)
            }, void 0, false, {
                fileName: "[project]/components/pages/JobsPage.jsx",
                lineNumber: 265,
                columnNumber: 7
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/components/pages/JobsPage.jsx",
        lineNumber: 108,
        columnNumber: 5
    }, this);
}
}),
];

//# sourceMappingURL=%5Broot-of-the-server%5D__69dc11e1._.js.map
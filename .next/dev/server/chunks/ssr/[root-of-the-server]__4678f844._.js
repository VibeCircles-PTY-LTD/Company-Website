module.exports = [
"[externals]/next/dist/compiled/next-server/app-page-turbo.runtime.dev.js [external] (next/dist/compiled/next-server/app-page-turbo.runtime.dev.js, cjs)", ((__turbopack_context__, module, exports) => {

const mod = __turbopack_context__.x("next/dist/compiled/next-server/app-page-turbo.runtime.dev.js", () => require("next/dist/compiled/next-server/app-page-turbo.runtime.dev.js"));

module.exports = mod;
}),
"[project]/components/VibeCirclePages.jsx [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "AboutPage",
    ()=>AboutPage,
    "AdvertisePage",
    ()=>AdvertisePage,
    "BusinessPage",
    ()=>BusinessPage,
    "ContactPage",
    ()=>ContactPage,
    "CreatorsPage",
    ()=>CreatorsPage,
    "HomePage",
    ()=>HomePage,
    "JobsPage",
    ()=>JobsPage,
    "MarketplacePage",
    ()=>MarketplacePage,
    "TeamPage",
    ()=>TeamPage
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react-jsx-dev-runtime.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$client$2f$app$2d$dir$2f$link$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/client/app-dir/link.js [app-ssr] (ecmascript)");
"use client";
;
;
;
// ─── GLOBAL CSS ───────────────────────────────────────────────────────────────
const GLOBAL_CSS = `
  @import url('https://fonts.googleapis.com/css2?family=Bebas+Neue&family=DM+Sans:ital,opsz,wght@0,9..40,300;0,9..40,400;0,9..40,600;1,9..40,400&display=swap');
  *, *::before, *::after { box-sizing: border-box; margin: 0; padding: 0; }
  html { scroll-behavior: smooth; }
  body { background: #05050A; overflow-x: hidden; }
  ::selection { background: rgba(255,107,0,0.3); }
  ::-webkit-scrollbar { width: 3px; }
  ::-webkit-scrollbar-track { background: #05050A; }
  ::-webkit-scrollbar-thumb { background: #FF6B00; border-radius: 2px; }
  input::placeholder, textarea::placeholder { color: rgba(255,255,255,0.2); }
  select option { background: #0C0C18; color: #fff; }

  @keyframes fadeUp   { from { opacity:0; transform:translateY(36px); } to { opacity:1; transform:translateY(0); } }
  @keyframes fadeIn   { from { opacity:0; } to { opacity:1; } }
  @keyframes orbFloat { 0%,100% { transform:scale(1) translateY(0); opacity:0.6; } 50% { transform:scale(1.12) translateY(-12px); opacity:1; } }
  @keyframes lineGrow { from { transform:scaleX(0); } to { transform:scaleX(1); } }
  @keyframes shimmer  { 0% { background-position:-200% center; } 100% { background-position:200% center; } }
  @keyframes marquee  { from { transform:translateX(0); } to { transform:translateX(-50%); } }
  @keyframes menuSlide { from { opacity:0; transform:translateX(100%); } to { opacity:1; transform:translateX(0); } }
  @keyframes spin     { from { transform:rotate(0deg); } to { transform:rotate(360deg); } }
  @keyframes dotPulse { 0%,100% { box-shadow:0 0 0 0 rgba(255,107,0,0.5); } 50% { box-shadow:0 0 0 10px rgba(255,107,0,0); } }

  /* ── RESPONSIVE HELPERS ── */
  .grid-2 { display:grid; grid-template-columns:1fr 1fr; gap:60px; }
  .grid-3 { display:grid; grid-template-columns:repeat(3,1fr); gap:24px; }
  .grid-4 { display:grid; grid-template-columns:repeat(4,1fr); gap:20px; }
  .grid-auto { display:grid; grid-template-columns:repeat(auto-fit,minmax(280px,1fr)); gap:20px; }
  .sec-pad { padding:100px 64px; }
  .sec-pad-sm { padding:64px 64px; }

  @media (max-width: 900px) {
    .grid-2  { grid-template-columns:1fr; gap:40px; }
    .grid-3  { grid-template-columns:1fr 1fr; }
    .grid-4  { grid-template-columns:1fr 1fr; }
    .sec-pad { padding:72px 28px; }
    .sec-pad-sm { padding:48px 28px; }
  }
  @media (max-width: 600px) {
    .grid-3  { grid-template-columns:1fr; }
    .grid-4  { grid-template-columns:1fr; }
    .sec-pad { padding:56px 20px; }
    .sec-pad-sm { padding:36px 20px; }
  }
`;
const C = {
    bg: "#05050A",
    bg2: "#080812",
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
// ─── HOOKS ────────────────────────────────────────────────────────────────────
function useInView(threshold = 0.1) {
    const ref = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useRef"])(null);
    const [v, setV] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])(false);
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useEffect"])(()=>{
        const obs = new IntersectionObserver(([e])=>{
            if (e.isIntersecting) setV(true);
        }, {
            threshold
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
// ─── SHARED COMPONENTS ────────────────────────────────────────────────────────
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
        lineNumber: 90,
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
        lineNumber: 93,
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
        lineNumber: 96,
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
        lineNumber: 100,
        columnNumber: 9
    }, this);
}
function PageHero({ tag, title, accent, sub, children }) {
    const w = useWindowWidth();
    const p = w < 600 ? "100px 20px 60px" : w < 900 ? "120px 28px 64px" : "140px 64px 80px";
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
                lineNumber: 107,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(Orb, {
                top: "-10%",
                right: "-5%",
                size: 500
            }, void 0, false, {
                fileName: "[project]/components/VibeCirclePages.jsx",
                lineNumber: 108,
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
                lineNumber: 109,
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
                            fileName: "[project]/components/VibeCirclePages.jsx",
                            lineNumber: 111,
                            columnNumber: 91
                        }, this)
                    }, void 0, false, {
                        fileName: "[project]/components/VibeCirclePages.jsx",
                        lineNumber: 111,
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
                                lineNumber: 113,
                                columnNumber: 18
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                style: {
                                    color: C.orange
                                },
                                children: accent
                            }, void 0, false, {
                                fileName: "[project]/components/VibeCirclePages.jsx",
                                lineNumber: 113,
                                columnNumber: 23
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/components/VibeCirclePages.jsx",
                        lineNumber: 112,
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
                        lineNumber: 115,
                        columnNumber: 15
                    }, this),
                    children
                ]
            }, void 0, true, {
                fileName: "[project]/components/VibeCirclePages.jsx",
                lineNumber: 110,
                columnNumber: 7
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/components/VibeCirclePages.jsx",
        lineNumber: 106,
        columnNumber: 5
    }, this);
}
// ─── FAQ ACCORDION ────────────────────────────────────────────────────────────
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
                                padding: "22px 28px",
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
                                        fontSize: "16px",
                                        fontWeight: 600,
                                        color: C.white
                                    },
                                    children: item.q
                                }, void 0, false, {
                                    fileName: "[project]/components/VibeCirclePages.jsx",
                                    lineNumber: 131,
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
                                    lineNumber: 132,
                                    columnNumber: 15
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "[project]/components/VibeCirclePages.jsx",
                            lineNumber: 130,
                            columnNumber: 13
                        }, this),
                        open === i && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            style: {
                                padding: "0 28px 24px",
                                animation: "fadeIn .25s ease"
                            },
                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                style: {
                                    fontFamily: "'DM Sans',sans-serif",
                                    fontSize: "15px",
                                    color: C.dim,
                                    lineHeight: 1.8
                                },
                                children: item.a
                            }, void 0, false, {
                                fileName: "[project]/components/VibeCirclePages.jsx",
                                lineNumber: 136,
                                columnNumber: 17
                            }, this)
                        }, void 0, false, {
                            fileName: "[project]/components/VibeCirclePages.jsx",
                            lineNumber: 135,
                            columnNumber: 15
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "[project]/components/VibeCirclePages.jsx",
                    lineNumber: 129,
                    columnNumber: 11
                }, this)
            }, i, false, {
                fileName: "[project]/components/VibeCirclePages.jsx",
                lineNumber: 128,
                columnNumber: 9
            }, this))
    }, void 0, false, {
        fileName: "[project]/components/VibeCirclePages.jsx",
        lineNumber: 126,
        columnNumber: 5
    }, this);
}
// ─── PRICING CARD ─────────────────────────────────────────────────────────────
function PricingCard({ plan, price, period = "/mo", desc, features, cta, highlight = false, color = C.orange, onCta }) {
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
                    lineNumber: 154,
                    columnNumber: 21
                }, this),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    style: {
                        fontFamily: "'Bebas Neue',sans-serif",
                        fontSize: "14px",
                        letterSpacing: "3px",
                        color: color,
                        marginBottom: "16px"
                    },
                    children: plan
                }, void 0, false, {
                    fileName: "[project]/components/VibeCirclePages.jsx",
                    lineNumber: 155,
                    columnNumber: 9
                }, this),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    style: {
                        display: "flex",
                        alignItems: "baseline",
                        gap: "4px",
                        marginBottom: "12px"
                    },
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                            style: {
                                fontFamily: "'Bebas Neue',sans-serif",
                                fontSize: "clamp(40px,5vw,56px)",
                                color: C.white,
                                lineHeight: 1
                            },
                            children: price
                        }, void 0, false, {
                            fileName: "[project]/components/VibeCirclePages.jsx",
                            lineNumber: 157,
                            columnNumber: 11
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                            style: {
                                fontFamily: "'DM Sans',sans-serif",
                                fontSize: "14px",
                                color: C.dim
                            },
                            children: period
                        }, void 0, false, {
                            fileName: "[project]/components/VibeCirclePages.jsx",
                            lineNumber: 158,
                            columnNumber: 11
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "[project]/components/VibeCirclePages.jsx",
                    lineNumber: 156,
                    columnNumber: 9
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
                    lineNumber: 160,
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
                                        color: color,
                                        fontSize: "14px",
                                        marginTop: "1px",
                                        flexShrink: 0
                                    },
                                    children: "✓"
                                }, void 0, false, {
                                    fileName: "[project]/components/VibeCirclePages.jsx",
                                    lineNumber: 164,
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
                                    lineNumber: 165,
                                    columnNumber: 15
                                }, this)
                            ]
                        }, i, true, {
                            fileName: "[project]/components/VibeCirclePages.jsx",
                            lineNumber: 163,
                            columnNumber: 13
                        }, this))
                }, void 0, false, {
                    fileName: "[project]/components/VibeCirclePages.jsx",
                    lineNumber: 161,
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
                        }
                    },
                    onMouseLeave: (e)=>{
                        if (!highlight) {
                            e.currentTarget.style.borderColor = "rgba(255,255,255,0.2)";
                            e.currentTarget.style.color = C.white;
                        }
                    },
                    children: cta
                }, void 0, false, {
                    fileName: "[project]/components/VibeCirclePages.jsx",
                    lineNumber: 169,
                    columnNumber: 9
                }, this)
            ]
        }, void 0, true, {
            fileName: "[project]/components/VibeCirclePages.jsx",
            lineNumber: 150,
            columnNumber: 7
        }, this)
    }, void 0, false, {
        fileName: "[project]/components/VibeCirclePages.jsx",
        lineNumber: 149,
        columnNumber: 5
    }, this);
}
// ─── TESTIMONIAL CARD ─────────────────────────────────────────────────────────
function TestimonialCard({ quote, name, role, avatar, color = C.orange }) {
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        style: {
            padding: "32px 28px",
            background: "rgba(255,255,255,0.02)",
            border: "1px solid rgba(255,255,255,0.07)",
            borderRadius: "4px",
            display: "flex",
            flexDirection: "column",
            gap: "20px",
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
                    color: color,
                    lineHeight: 1,
                    opacity: .6
                },
                children: '"'
            }, void 0, false, {
                fileName: "[project]/components/VibeCirclePages.jsx",
                lineNumber: 185,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                style: {
                    fontFamily: "'DM Sans',sans-serif",
                    fontSize: "15px",
                    color: "rgba(255,255,255,.75)",
                    lineHeight: 1.8,
                    flex: 1
                },
                children: quote
            }, void 0, false, {
                fileName: "[project]/components/VibeCirclePages.jsx",
                lineNumber: 186,
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
                            width: "40px",
                            height: "40px",
                            borderRadius: "50%",
                            background: `${color}20`,
                            border: `1px solid ${color}40`,
                            display: "flex",
                            alignItems: "center",
                            justifyContent: "center",
                            fontSize: "18px",
                            flexShrink: 0
                        },
                        children: avatar
                    }, void 0, false, {
                        fileName: "[project]/components/VibeCirclePages.jsx",
                        lineNumber: 188,
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
                                lineNumber: 190,
                                columnNumber: 11
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                style: {
                                    fontFamily: "'DM Sans',sans-serif",
                                    fontSize: "12px",
                                    color: C.dimmer,
                                    marginTop: "2px"
                                },
                                children: role
                            }, void 0, false, {
                                fileName: "[project]/components/VibeCirclePages.jsx",
                                lineNumber: 191,
                                columnNumber: 11
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/components/VibeCirclePages.jsx",
                        lineNumber: 189,
                        columnNumber: 9
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/components/VibeCirclePages.jsx",
                lineNumber: 187,
                columnNumber: 7
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/components/VibeCirclePages.jsx",
        lineNumber: 181,
        columnNumber: 5
    }, this);
}
// ─── NAV ──────────────────────────────────────────────────────────────────────
const NAV_ITEMS = [
    {
        label: "About",
        href: "/about"
    },
    {
        label: "Team",
        href: "/team"
    },
    {
        label: "Creators",
        href: "/creators"
    },
    {
        label: "Advertise",
        href: "/advertise"
    },
    {
        label: "Business",
        href: "/business"
    },
    {
        label: "Jobs",
        href: "/jobs"
    },
    {
        label: "Marketplace",
        href: "/marketplace"
    },
    {
        label: "Contact",
        href: "/contact"
    }
];
function Nav({ current }) {
    const [scrolled, setScrolled] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])(false);
    const [menuOpen, setMenuOpen] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])(false);
    const w = useWindowWidth();
    const isMobile = w < 960;
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useEffect"])(()=>{
        const h = ()=>setScrolled(window.scrollY > 40);
        window.addEventListener("scroll", h);
        return ()=>window.removeEventListener("scroll", h);
    }, []);
    const PRIMARY = [
        "About",
        "Creators",
        "Marketplace",
        "Business",
        "Jobs"
    ];
    const MORE = [
        "Team",
        "Advertise",
        "Contact"
    ];
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
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$client$2f$app$2d$dir$2f$link$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"], {
                        href: "/",
                        onClick: ()=>setMenuOpen(false),
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
                        lineNumber: 228,
                        columnNumber: 9
                    }, this),
                    !isMobile && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        style: {
                            display: "flex",
                            gap: "4px",
                            alignItems: "center"
                        },
                        children: [
                            PRIMARY.map((p)=>{
                                const item = NAV_ITEMS.find((i)=>i.label === p);
                                const isActive = current === p;
                                return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$client$2f$app$2d$dir$2f$link$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"], {
                                    href: item?.href || "/",
                                    onClick: ()=>setMenuOpen(false),
                                    style: {
                                        fontFamily: "'DM Sans',sans-serif",
                                        fontSize: "12px",
                                        letterSpacing: "1px",
                                        textTransform: "uppercase",
                                        color: isActive ? C.orange : C.dim,
                                        background: isActive ? `${C.orange}12` : "transparent",
                                        border: isActive ? `1px solid ${C.orange}30` : "1px solid transparent",
                                        borderRadius: "2px",
                                        padding: "7px 14px",
                                        cursor: "pointer",
                                        transition: "all .2s"
                                    },
                                    onMouseEnter: (e)=>{
                                        if (current !== p) {
                                            e.currentTarget.style.color = C.white;
                                            e.currentTarget.style.borderColor = "rgba(255,255,255,0.12)";
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
                                    lineNumber: 236,
                                    columnNumber: 17
                                }, this);
                            }),
                            MORE.map((p)=>{
                                const item = NAV_ITEMS.find((i)=>i.label === p);
                                const isActive = current === p;
                                return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$client$2f$app$2d$dir$2f$link$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"], {
                                    href: item?.href || "/",
                                    onClick: ()=>setMenuOpen(false),
                                    style: {
                                        fontFamily: "'DM Sans',sans-serif",
                                        fontSize: "12px",
                                        letterSpacing: "1px",
                                        textTransform: "uppercase",
                                        color: isActive ? C.orange : "rgba(255,255,255,0.3)",
                                        background: "transparent",
                                        border: "1px solid transparent",
                                        borderRadius: "2px",
                                        padding: "7px 12px",
                                        cursor: "pointer",
                                        transition: "all .2s"
                                    },
                                    onMouseEnter: (e)=>{
                                        e.currentTarget.style.color = C.white;
                                    },
                                    onMouseLeave: (e)=>{
                                        e.currentTarget.style.color = isActive ? C.orange : "rgba(255,255,255,0.3)";
                                    },
                                    children: p
                                }, p, false, {
                                    fileName: "[project]/components/VibeCirclePages.jsx",
                                    lineNumber: 246,
                                    columnNumber: 17
                                }, this);
                            })
                        ]
                    }, void 0, true, {
                        fileName: "[project]/components/VibeCirclePages.jsx",
                        lineNumber: 231,
                        columnNumber: 11
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        style: {
                            display: "flex",
                            gap: "12px",
                            alignItems: "center"
                        },
                        children: [
                            !isMobile && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$client$2f$app$2d$dir$2f$link$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"], {
                                href: "/contact",
                                onClick: ()=>setMenuOpen(false),
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
                                onMouseEnter: (e)=>e.target.style.boxShadow = `0 8px 24px ${C.orange}40`,
                                onMouseLeave: (e)=>e.target.style.boxShadow = "none",
                                children: "Join Now"
                            }, void 0, false, {
                                fileName: "[project]/components/VibeCirclePages.jsx",
                                lineNumber: 257,
                                columnNumber: 13
                            }, this),
                            isMobile && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                onClick: ()=>setMenuOpen(!menuOpen),
                                style: {
                                    background: "none",
                                    border: "none",
                                    cursor: "pointer",
                                    color: C.white,
                                    fontSize: "22px",
                                    display: "flex",
                                    flexDirection: "column",
                                    gap: "5px",
                                    padding: "4px"
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
                                        lineNumber: 264,
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
                                        lineNumber: 265,
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
                                        lineNumber: 266,
                                        columnNumber: 15
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/components/VibeCirclePages.jsx",
                                lineNumber: 263,
                                columnNumber: 13
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/components/VibeCirclePages.jsx",
                        lineNumber: 255,
                        columnNumber: 9
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/components/VibeCirclePages.jsx",
                lineNumber: 227,
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
                    background: "rgba(5,5,10,0.98)",
                    backdropFilter: "blur(20px)",
                    animation: "menuSlide .3s ease",
                    overflowY: "auto",
                    padding: "40px 28px"
                },
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        style: {
                            display: "flex",
                            flexDirection: "column",
                            gap: "4px"
                        },
                        children: NAV_ITEMS.map((item, i)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$client$2f$app$2d$dir$2f$link$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"], {
                                href: item.href,
                                onClick: ()=>setMenuOpen(false),
                                style: {
                                    fontFamily: "'Bebas Neue',sans-serif",
                                    fontSize: "clamp(28px,6vw,40px)",
                                    letterSpacing: "2px",
                                    textAlign: "left",
                                    color: current === item.label ? C.orange : C.white,
                                    background: "none",
                                    border: "none",
                                    cursor: "pointer",
                                    padding: "12px 0",
                                    borderBottom: "1px solid rgba(255,255,255,0.06)",
                                    transition: "color .2s",
                                    animation: `fadeUp .4s ease ${i * .04}s both`
                                },
                                children: item.label
                            }, item.label, false, {
                                fileName: "[project]/components/VibeCirclePages.jsx",
                                lineNumber: 277,
                                columnNumber: 15
                            }, this))
                    }, void 0, false, {
                        fileName: "[project]/components/VibeCirclePages.jsx",
                        lineNumber: 275,
                        columnNumber: 11
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        style: {
                            marginTop: "40px",
                            display: "flex",
                            flexDirection: "column",
                            gap: "8px"
                        },
                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$client$2f$app$2d$dir$2f$link$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"], {
                            href: "/contact",
                            onClick: ()=>setMenuOpen(false),
                            style: {
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
                            lineNumber: 281,
                            columnNumber: 13
                        }, this)
                    }, void 0, false, {
                        fileName: "[project]/components/VibeCirclePages.jsx",
                        lineNumber: 280,
                        columnNumber: 11
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/components/VibeCirclePages.jsx",
                lineNumber: 274,
                columnNumber: 9
            }, this)
        ]
    }, void 0, true);
}
// ─── FOOTER ───────────────────────────────────────────────────────────────────
function Footer() {
    const w = useWindowWidth();
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
                "Marketplace",
                "Contact"
            ]
        },
        {
            title: "Company",
            links: [
                "Jobs",
                "Contact",
                "About"
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
                padding: w < 600 ? "48px 20px" : "64px 64px"
            },
            children: [
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    style: {
                        display: "grid",
                        gridTemplateColumns: w < 600 ? "1fr" : "1fr 1fr 1fr 1fr",
                        gap: "40px",
                        marginBottom: "56px"
                    },
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$client$2f$app$2d$dir$2f$link$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"], {
                                    href: "/",
                                    style: {
                                        fontFamily: "'Bebas Neue',sans-serif",
                                        fontSize: "22px",
                                        letterSpacing: "3px",
                                        color: C.orange,
                                        background: "none",
                                        border: "none",
                                        cursor: "pointer",
                                        marginBottom: "16px",
                                        display: "block"
                                    },
                                    children: "VIBECIRCLE"
                                }, void 0, false, {
                                    fileName: "[project]/components/VibeCirclePages.jsx",
                                    lineNumber: 302,
                                    columnNumber: 13
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                    style: {
                                        fontFamily: "'DM Sans',sans-serif",
                                        fontSize: "13px",
                                        color: C.dimmer,
                                        lineHeight: 1.7,
                                        maxWidth: "200px"
                                    },
                                    children: "Where creators, cities, events, and businesses collide in real life."
                                }, void 0, false, {
                                    fileName: "[project]/components/VibeCirclePages.jsx",
                                    lineNumber: 303,
                                    columnNumber: 13
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    style: {
                                        display: "flex",
                                        gap: "12px",
                                        marginTop: "20px"
                                    },
                                    children: [
                                        "𝕏",
                                        "📷",
                                        "🎵",
                                        "💼"
                                    ].map((s, i)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            style: {
                                                width: "32px",
                                                height: "32px",
                                                border: "1px solid rgba(255,255,255,0.1)",
                                                borderRadius: "2px",
                                                display: "flex",
                                                alignItems: "center",
                                                justifyContent: "center",
                                                fontSize: "14px",
                                                cursor: "pointer",
                                                transition: "border-color .2s"
                                            },
                                            onMouseEnter: (e)=>e.currentTarget.style.borderColor = C.orange,
                                            onMouseLeave: (e)=>e.currentTarget.style.borderColor = "rgba(255,255,255,0.1)",
                                            children: s
                                        }, i, false, {
                                            fileName: "[project]/components/VibeCirclePages.jsx",
                                            lineNumber: 306,
                                            columnNumber: 17
                                        }, this))
                                }, void 0, false, {
                                    fileName: "[project]/components/VibeCirclePages.jsx",
                                    lineNumber: 304,
                                    columnNumber: 13
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "[project]/components/VibeCirclePages.jsx",
                            lineNumber: 301,
                            columnNumber: 11
                        }, this),
                        cols.map((col)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        style: {
                                            fontFamily: "'Bebas Neue',sans-serif",
                                            fontSize: "13px",
                                            letterSpacing: "3px",
                                            color: C.orange,
                                            marginBottom: "16px"
                                        },
                                        children: col.title
                                    }, void 0, false, {
                                        fileName: "[project]/components/VibeCirclePages.jsx",
                                        lineNumber: 315,
                                        columnNumber: 15
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        style: {
                                            display: "flex",
                                            flexDirection: "column",
                                            gap: "10px"
                                        },
                                        children: col.links.map((l)=>{
                                            const item = NAV_ITEMS.find((i)=>i.label === l);
                                            if (!item) return null;
                                            return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$client$2f$app$2d$dir$2f$link$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"], {
                                                href: item.href,
                                                style: {
                                                    fontFamily: "'DM Sans',sans-serif",
                                                    fontSize: "13px",
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
                                                lineNumber: 321,
                                                columnNumber: 21
                                            }, this);
                                        })
                                    }, void 0, false, {
                                        fileName: "[project]/components/VibeCirclePages.jsx",
                                        lineNumber: 316,
                                        columnNumber: 15
                                    }, this)
                                ]
                            }, col.title, true, {
                                fileName: "[project]/components/VibeCirclePages.jsx",
                                lineNumber: 314,
                                columnNumber: 13
                            }, this))
                    ]
                }, void 0, true, {
                    fileName: "[project]/components/VibeCirclePages.jsx",
                    lineNumber: 300,
                    columnNumber: 9
                }, this),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    style: {
                        height: "1px",
                        background: "rgba(255,255,255,0.06)",
                        marginBottom: "24px"
                    }
                }, void 0, false, {
                    fileName: "[project]/components/VibeCirclePages.jsx",
                    lineNumber: 331,
                    columnNumber: 9
                }, this),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    style: {
                        display: "flex",
                        justifyContent: "space-between",
                        alignItems: "center",
                        flexWrap: "wrap",
                        gap: "16px"
                    },
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                            style: {
                                fontFamily: "'DM Sans',sans-serif",
                                fontSize: "12px",
                                color: "rgba(255,255,255,0.2)"
                            },
                            children: "© 2025 VibeCircle — Making energy visible."
                        }, void 0, false, {
                            fileName: "[project]/components/VibeCirclePages.jsx",
                            lineNumber: 333,
                            columnNumber: 11
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            style: {
                                display: "flex",
                                gap: "24px"
                            },
                            children: [
                                "Privacy",
                                "Terms",
                                "Cookies"
                            ].map((l)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                    style: {
                                        fontFamily: "'DM Sans',sans-serif",
                                        fontSize: "12px",
                                        color: "rgba(255,255,255,0.2)",
                                        cursor: "pointer",
                                        transition: "color .2s"
                                    },
                                    onMouseEnter: (e)=>e.target.style.color = C.orange,
                                    onMouseLeave: (e)=>e.target.style.color = "rgba(255,255,255,0.2)",
                                    children: l
                                }, l, false, {
                                    fileName: "[project]/components/VibeCirclePages.jsx",
                                    lineNumber: 336,
                                    columnNumber: 15
                                }, this))
                        }, void 0, false, {
                            fileName: "[project]/components/VibeCirclePages.jsx",
                            lineNumber: 334,
                            columnNumber: 11
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "[project]/components/VibeCirclePages.jsx",
                    lineNumber: 332,
                    columnNumber: 9
                }, this)
            ]
        }, void 0, true, {
            fileName: "[project]/components/VibeCirclePages.jsx",
            lineNumber: 299,
            columnNumber: 7
        }, this)
    }, void 0, false, {
        fileName: "[project]/components/VibeCirclePages.jsx",
        lineNumber: 298,
        columnNumber: 5
    }, this);
}
function PageShell({ current, children }) {
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        style: {
            background: C.bg,
            color: C.white,
            minHeight: "100vh"
        },
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("style", {
                children: GLOBAL_CSS
            }, void 0, false, {
                fileName: "[project]/components/VibeCirclePages.jsx",
                lineNumber: 351,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(Nav, {
                current: current
            }, void 0, false, {
                fileName: "[project]/components/VibeCirclePages.jsx",
                lineNumber: 352,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("main", {
                children: children
            }, void 0, false, {
                fileName: "[project]/components/VibeCirclePages.jsx",
                lineNumber: 353,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(Footer, {}, void 0, false, {
                fileName: "[project]/components/VibeCirclePages.jsx",
                lineNumber: 354,
                columnNumber: 7
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/components/VibeCirclePages.jsx",
        lineNumber: 350,
        columnNumber: 5
    }, this);
}
// ══════════════════════════════════════════════════════════════════════════════
// HOME PAGE
// ══════════════════════════════════════════════════════════════════════════════
const TESTIMONIALS = [
    {
        quote: "VibeCircle changed how I grow as a creator. I booked my first brand deal in 3 days of joining and my local following tripled in a month.",
        name: "Jordan Lee",
        role: "Music Creator · Atlanta",
        avatar: "🎤",
        color: C.orange
    },
    {
        quote: "We ran a geo-targeted campaign for our pop-up and got 800% more foot traffic than our Instagram ads. The map placement is unreal.",
        name: "NEON BREW CO.",
        role: "F&B Brand · Nationwide",
        avatar: "🧃",
        color: C.pink
    },
    {
        quote: "Campus Ambassadors actually show up. Our gym promo hit 14 campuses in 3 weeks — and students were genuinely hyped about it.",
        name: "Pulse Fitness",
        role: "Health Brand · US Campuses",
        avatar: "⚡",
        color: C.blue
    },
    {
        quote: "I've been creating for 4 years. Nothing has ever connected me to real people in my city like VibeCircle. It's the only platform where I feel seen.",
        name: "Mia Torres",
        role: "Visual Artist · Chicago",
        avatar: "🎨",
        color: C.purple
    }
];
function HomePage() {
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
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(PageShell, {
        current: "home",
        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
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
                            lineNumber: 380,
                            columnNumber: 9
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(Orb, {
                            top: "5%",
                            left: "-8%",
                            size: 600,
                            opacity: 0.12
                        }, void 0, false, {
                            fileName: "[project]/components/VibeCirclePages.jsx",
                            lineNumber: 381,
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
                            lineNumber: 382,
                            columnNumber: 9
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
                                            lineNumber: 385,
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
                                            lineNumber: 386,
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
                                            lineNumber: 387,
                                            columnNumber: 13
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/components/VibeCirclePages.jsx",
                                    lineNumber: 384,
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
                                            lineNumber: 390,
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
                                            lineNumber: 391,
                                            columnNumber: 13
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("br", {}, void 0, false, {
                                            fileName: "[project]/components/VibeCirclePages.jsx",
                                            lineNumber: 391,
                                            columnNumber: 100
                                        }, this),
                                        "IT'S SOCIAL",
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("br", {}, void 0, false, {
                                            fileName: "[project]/components/VibeCirclePages.jsx",
                                            lineNumber: 392,
                                            columnNumber: 24
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                            style: {
                                                color: C.orange
                                            },
                                            children: "GRAVITY."
                                        }, void 0, false, {
                                            fileName: "[project]/components/VibeCirclePages.jsx",
                                            lineNumber: 393,
                                            columnNumber: 13
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/components/VibeCirclePages.jsx",
                                    lineNumber: 389,
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
                                    lineNumber: 395,
                                    columnNumber: 11
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    style: {
                                        display: "flex",
                                        gap: "14px",
                                        justifyContent: "center",
                                        flexWrap: "wrap",
                                        marginBottom: "60px"
                                    },
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$client$2f$app$2d$dir$2f$link$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"], {
                                            href: "/creators",
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
                                            children: "Join as Creator"
                                        }, void 0, false, {
                                            fileName: "[project]/components/VibeCirclePages.jsx",
                                            lineNumber: 399,
                                            columnNumber: 13
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$client$2f$app$2d$dir$2f$link$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"], {
                                            href: "/business",
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
                                            children: "For Business"
                                        }, void 0, false, {
                                            fileName: "[project]/components/VibeCirclePages.jsx",
                                            lineNumber: 403,
                                            columnNumber: 13
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/components/VibeCirclePages.jsx",
                                    lineNumber: 398,
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
                                            h: "/about",
                                            i: "🧠"
                                        },
                                        {
                                            l: "Creators",
                                            h: "/creators",
                                            i: "⚡"
                                        },
                                        {
                                            l: "Marketplace",
                                            h: "/marketplace",
                                            i: "🏪"
                                        },
                                        {
                                            l: "For Business",
                                            h: "/business",
                                            i: "🏢"
                                        },
                                        {
                                            l: "The Team",
                                            h: "/team",
                                            i: "👥"
                                        },
                                        {
                                            l: "Contact",
                                            h: "/contact",
                                            i: "✉️"
                                        }
                                    ].map(({ l, h, i })=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$client$2f$app$2d$dir$2f$link$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"], {
                                            href: h,
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
                                        }, h, true, {
                                            fileName: "[project]/components/VibeCirclePages.jsx",
                                            lineNumber: 410,
                                            columnNumber: 15
                                        }, this))
                                }, void 0, false, {
                                    fileName: "[project]/components/VibeCirclePages.jsx",
                                    lineNumber: 408,
                                    columnNumber: 11
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "[project]/components/VibeCirclePages.jsx",
                            lineNumber: 383,
                            columnNumber: 9
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "[project]/components/VibeCirclePages.jsx",
                    lineNumber: 379,
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
                                    marginBottom: "56px"
                                },
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(Tag, {
                                        children: "What people say"
                                    }, void 0, false, {
                                        fileName: "[project]/components/VibeCirclePages.jsx",
                                        lineNumber: 423,
                                        columnNumber: 13
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
                                                lineNumber: 424,
                                                columnNumber: 152
                                            }, this)
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/components/VibeCirclePages.jsx",
                                        lineNumber: 424,
                                        columnNumber: 13
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/components/VibeCirclePages.jsx",
                                lineNumber: 422,
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
                                            lineNumber: 428,
                                            columnNumber: 44
                                        }, this)
                                    }, i, false, {
                                        fileName: "[project]/components/VibeCirclePages.jsx",
                                        lineNumber: 428,
                                        columnNumber: 15
                                    }, this))
                            }, void 0, false, {
                                fileName: "[project]/components/VibeCirclePages.jsx",
                                lineNumber: 426,
                                columnNumber: 11
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/components/VibeCirclePages.jsx",
                        lineNumber: 421,
                        columnNumber: 9
                    }, this)
                }, void 0, false, {
                    fileName: "[project]/components/VibeCirclePages.jsx",
                    lineNumber: 420,
                    columnNumber: 7
                }, this),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    style: {
                        background: C.bg,
                        borderTop: `1px solid ${C.border}`,
                        borderBottom: `1px solid ${C.border}`,
                        padding: "20px 0",
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
                                "·",
                                "APEX STREETWEAR",
                                "·",
                                "SOLSTICE FESTIVAL",
                                "·",
                                "PULSE FITNESS",
                                "·",
                                "URBAN EATS",
                                "·",
                                "CTRL AUDIO",
                                "·",
                                "MIRAGE CLUB GROUP",
                                "·"
                            ].map((w, i)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                    style: {
                                        fontFamily: "'Bebas Neue',sans-serif",
                                        fontSize: "13px",
                                        letterSpacing: "3px",
                                        color: w === "·" ? C.orange : "rgba(255,255,255,0.25)",
                                        marginRight: "28px"
                                    },
                                    children: w
                                }, `${x}-${i}`, false, {
                                    fileName: "[project]/components/VibeCirclePages.jsx",
                                    lineNumber: 439,
                                    columnNumber: 15
                                }, this)))
                    }, void 0, false, {
                        fileName: "[project]/components/VibeCirclePages.jsx",
                        lineNumber: 436,
                        columnNumber: 9
                    }, this)
                }, void 0, false, {
                    fileName: "[project]/components/VibeCirclePages.jsx",
                    lineNumber: 435,
                    columnNumber: 7
                }, this)
            ]
        }, void 0, true, {
            fileName: "[project]/components/VibeCirclePages.jsx",
            lineNumber: 377,
            columnNumber: 7
        }, this)
    }, void 0, false, {
        fileName: "[project]/components/VibeCirclePages.jsx",
        lineNumber: 376,
        columnNumber: 5
    }, this);
}
// ══════════════════════════════════════════════════════════════════════════════
// ABOUT PAGE
// ══════════════════════════════════════════════════════════════════════════════
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
            padding: "40px 32px",
            background: "rgba(255,107,0,0.04)",
            border: `1px solid ${C.border}`,
            borderRadius: "4px",
            textAlign: "center"
        },
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                style: {
                    fontFamily: "'Bebas Neue',sans-serif",
                    fontSize: "clamp(44px,5vw,62px)",
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
                lineNumber: 464,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                style: {
                    fontFamily: "'DM Sans',sans-serif",
                    fontSize: "12px",
                    letterSpacing: "2px",
                    textTransform: "uppercase",
                    color: C.dim,
                    marginTop: "8px"
                },
                children: label
            }, void 0, false, {
                fileName: "[project]/components/VibeCirclePages.jsx",
                lineNumber: 465,
                columnNumber: 7
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/components/VibeCirclePages.jsx",
        lineNumber: 463,
        columnNumber: 5
    }, this);
}
function AboutPage() {
    const [sRef, sInView] = useInView(.3);
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(PageShell, {
        current: "About",
        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            style: {
                background: C.bg,
                color: C.white
            },
            children: [
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(PageHero, {
                    tag: "About VibeCircle",
                    title: "We build infrastructure",
                    accent: "for modern city culture.",
                    sub: "Not just online conversations — offline moments. From campus pop-ups to club nights."
                }, void 0, false, {
                    fileName: "[project]/components/VibeCirclePages.jsx",
                    lineNumber: 475,
                    columnNumber: 7
                }, this),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(Divider, {}, void 0, false, {
                    fileName: "[project]/components/VibeCirclePages.jsx",
                    lineNumber: 476,
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
                                    marginBottom: "56px"
                                },
                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(Tag, {
                                    children: "By the numbers"
                                }, void 0, false, {
                                    fileName: "[project]/components/VibeCirclePages.jsx",
                                    lineNumber: 480,
                                    columnNumber: 49
                                }, this)
                            }, void 0, false, {
                                fileName: "[project]/components/VibeCirclePages.jsx",
                                lineNumber: 480,
                                columnNumber: 11
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                ref: sRef,
                                className: "grid-4",
                                children: STATS.map((s, i)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(StatCard, {
                                        ...s,
                                        active: sInView
                                    }, i, false, {
                                        fileName: "[project]/components/VibeCirclePages.jsx",
                                        lineNumber: 481,
                                        columnNumber: 64
                                    }, this))
                            }, void 0, false, {
                                fileName: "[project]/components/VibeCirclePages.jsx",
                                lineNumber: 481,
                                columnNumber: 11
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/components/VibeCirclePages.jsx",
                        lineNumber: 479,
                        columnNumber: 9
                    }, this)
                }, void 0, false, {
                    fileName: "[project]/components/VibeCirclePages.jsx",
                    lineNumber: 478,
                    columnNumber: 7
                }, this),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(Divider, {}, void 0, false, {
                    fileName: "[project]/components/VibeCirclePages.jsx",
                    lineNumber: 484,
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
                            lineNumber: 487,
                            columnNumber: 9
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
                                                lineNumber: 489,
                                                columnNumber: 24
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("h2", {
                                                style: {
                                                    fontFamily: "'Bebas Neue',sans-serif",
                                                    fontSize: "clamp(32px,4vw,50px)",
                                                    color: C.white,
                                                    lineHeight: 1.05,
                                                    margin: "16px 0 20px"
                                                },
                                                children: [
                                                    "Turn digital energy into",
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("br", {}, void 0, false, {
                                                        fileName: "[project]/components/VibeCirclePages.jsx",
                                                        lineNumber: 489,
                                                        columnNumber: 200
                                                    }, this),
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                        style: {
                                                            color: C.orange
                                                        },
                                                        children: "real-world connection."
                                                    }, void 0, false, {
                                                        fileName: "[project]/components/VibeCirclePages.jsx",
                                                        lineNumber: 489,
                                                        columnNumber: 205
                                                    }, this)
                                                ]
                                            }, void 0, true, {
                                                fileName: "[project]/components/VibeCirclePages.jsx",
                                                lineNumber: 489,
                                                columnNumber: 42
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                style: {
                                                    fontFamily: "'DM Sans',sans-serif",
                                                    fontSize: "16px",
                                                    color: C.dim,
                                                    lineHeight: 1.8
                                                },
                                                children: "VibeCircle connects people not just by what they post — but by where they are, what they love, and what's happening right now. This is not scrolling. This is discovering."
                                            }, void 0, false, {
                                                fileName: "[project]/components/VibeCirclePages.jsx",
                                                lineNumber: 489,
                                                columnNumber: 270
                                            }, this)
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/components/VibeCirclePages.jsx",
                                        lineNumber: 489,
                                        columnNumber: 16
                                    }, this)
                                }, void 0, false, {
                                    fileName: "[project]/components/VibeCirclePages.jsx",
                                    lineNumber: 489,
                                    columnNumber: 11
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(Reveal, {
                                        delay: .15,
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(Tag, {
                                                children: "Vision"
                                            }, void 0, false, {
                                                fileName: "[project]/components/VibeCirclePages.jsx",
                                                lineNumber: 490,
                                                columnNumber: 36
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("h2", {
                                                style: {
                                                    fontFamily: "'Bebas Neue',sans-serif",
                                                    fontSize: "clamp(32px,4vw,50px)",
                                                    color: C.white,
                                                    lineHeight: 1.05,
                                                    margin: "16px 0 20px"
                                                },
                                                children: [
                                                    "A world where every city has",
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("br", {}, void 0, false, {
                                                        fileName: "[project]/components/VibeCirclePages.jsx",
                                                        lineNumber: 490,
                                                        columnNumber: 215
                                                    }, this),
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                        style: {
                                                            color: C.orange
                                                        },
                                                        children: "a visible heartbeat."
                                                    }, void 0, false, {
                                                        fileName: "[project]/components/VibeCirclePages.jsx",
                                                        lineNumber: 490,
                                                        columnNumber: 220
                                                    }, this)
                                                ]
                                            }, void 0, true, {
                                                fileName: "[project]/components/VibeCirclePages.jsx",
                                                lineNumber: 490,
                                                columnNumber: 53
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                style: {
                                                    fontFamily: "'DM Sans',sans-serif",
                                                    fontSize: "16px",
                                                    color: C.dim,
                                                    lineHeight: 1.8
                                                },
                                                children: "We're building the living map of culture — the layer on top of the city that shows you where energy actually lives."
                                            }, void 0, false, {
                                                fileName: "[project]/components/VibeCirclePages.jsx",
                                                lineNumber: 490,
                                                columnNumber: 283
                                            }, this)
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/components/VibeCirclePages.jsx",
                                        lineNumber: 490,
                                        columnNumber: 16
                                    }, this)
                                }, void 0, false, {
                                    fileName: "[project]/components/VibeCirclePages.jsx",
                                    lineNumber: 490,
                                    columnNumber: 11
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "[project]/components/VibeCirclePages.jsx",
                            lineNumber: 488,
                            columnNumber: 9
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "[project]/components/VibeCirclePages.jsx",
                    lineNumber: 486,
                    columnNumber: 7
                }, this),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(Divider, {}, void 0, false, {
                    fileName: "[project]/components/VibeCirclePages.jsx",
                    lineNumber: 493,
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
                                    marginBottom: "48px"
                                },
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(Tag, {
                                        children: "Manifesto"
                                    }, void 0, false, {
                                        fileName: "[project]/components/VibeCirclePages.jsx",
                                        lineNumber: 497,
                                        columnNumber: 49
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("h2", {
                                        style: {
                                            fontFamily: "'Bebas Neue',sans-serif",
                                            fontSize: "clamp(32px,5vw,58px)",
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
                                                lineNumber: 497,
                                                columnNumber: 199
                                            }, this)
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/components/VibeCirclePages.jsx",
                                        lineNumber: 497,
                                        columnNumber: 69
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/components/VibeCirclePages.jsx",
                                lineNumber: 497,
                                columnNumber: 11
                            }, this),
                            MANIFESTO.map((line, i)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(Reveal, {
                                    delay: i * .09,
                                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        style: {
                                            display: "flex",
                                            alignItems: "center",
                                            gap: "24px",
                                            padding: "24px 0",
                                            borderBottom: "1px solid rgba(255,255,255,0.06)"
                                        },
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                style: {
                                                    fontFamily: "'Bebas Neue',sans-serif",
                                                    fontSize: "clamp(24px,3.5vw,44px)",
                                                    color: C.white,
                                                    flex: 1
                                                },
                                                children: line
                                            }, void 0, false, {
                                                fileName: "[project]/components/VibeCirclePages.jsx",
                                                lineNumber: 501,
                                                columnNumber: 17
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                style: {
                                                    fontFamily: "'Bebas Neue',sans-serif",
                                                    fontSize: "11px",
                                                    letterSpacing: "3px",
                                                    color: C.orange,
                                                    opacity: .6,
                                                    minWidth: "24px"
                                                },
                                                children: [
                                                    "0",
                                                    i + 1
                                                ]
                                            }, void 0, true, {
                                                fileName: "[project]/components/VibeCirclePages.jsx",
                                                lineNumber: 502,
                                                columnNumber: 17
                                            }, this)
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/components/VibeCirclePages.jsx",
                                        lineNumber: 500,
                                        columnNumber: 15
                                    }, this)
                                }, i, false, {
                                    fileName: "[project]/components/VibeCirclePages.jsx",
                                    lineNumber: 499,
                                    columnNumber: 13
                                }, this))
                        ]
                    }, void 0, true, {
                        fileName: "[project]/components/VibeCirclePages.jsx",
                        lineNumber: 496,
                        columnNumber: 9
                    }, this)
                }, void 0, false, {
                    fileName: "[project]/components/VibeCirclePages.jsx",
                    lineNumber: 495,
                    columnNumber: 7
                }, this),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(Divider, {}, void 0, false, {
                    fileName: "[project]/components/VibeCirclePages.jsx",
                    lineNumber: 508,
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
                                    marginBottom: "56px"
                                },
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(Tag, {
                                        children: "Community voices"
                                    }, void 0, false, {
                                        fileName: "[project]/components/VibeCirclePages.jsx",
                                        lineNumber: 512,
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
                                            "Don't take our word ",
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                style: {
                                                    color: C.orange
                                                },
                                                children: "for it."
                                            }, void 0, false, {
                                                fileName: "[project]/components/VibeCirclePages.jsx",
                                                lineNumber: 512,
                                                columnNumber: 223
                                            }, this)
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/components/VibeCirclePages.jsx",
                                        lineNumber: 512,
                                        columnNumber: 76
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/components/VibeCirclePages.jsx",
                                lineNumber: 512,
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
                                            lineNumber: 513,
                                            columnNumber: 89
                                        }, this)
                                    }, i, false, {
                                        fileName: "[project]/components/VibeCirclePages.jsx",
                                        lineNumber: 513,
                                        columnNumber: 60
                                    }, this))
                            }, void 0, false, {
                                fileName: "[project]/components/VibeCirclePages.jsx",
                                lineNumber: 513,
                                columnNumber: 11
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/components/VibeCirclePages.jsx",
                        lineNumber: 511,
                        columnNumber: 9
                    }, this)
                }, void 0, false, {
                    fileName: "[project]/components/VibeCirclePages.jsx",
                    lineNumber: 510,
                    columnNumber: 7
                }, this),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(Divider, {}, void 0, false, {
                    fileName: "[project]/components/VibeCirclePages.jsx",
                    lineNumber: 516,
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
                            lineNumber: 519,
                            columnNumber: 9
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
                                            lineNumber: 521,
                                            columnNumber: 19
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("h2", {
                                            style: {
                                                fontFamily: "'Bebas Neue',sans-serif",
                                                fontSize: "clamp(32px,5vw,58px)",
                                                color: C.white,
                                                lineHeight: 1,
                                                margin: "16px 0 40px"
                                            },
                                            children: [
                                                "What if maps",
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("br", {}, void 0, false, {
                                                    fileName: "[project]/components/VibeCirclePages.jsx",
                                                    lineNumber: 521,
                                                    columnNumber: 188
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                    style: {
                                                        color: C.orange
                                                    },
                                                    children: "were alive?"
                                                }, void 0, false, {
                                                    fileName: "[project]/components/VibeCirclePages.jsx",
                                                    lineNumber: 521,
                                                    columnNumber: 193
                                                }, this)
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/components/VibeCirclePages.jsx",
                                            lineNumber: 521,
                                            columnNumber: 45
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/components/VibeCirclePages.jsx",
                                    lineNumber: 521,
                                    columnNumber: 11
                                }, this),
                                [
                                    "VibeCircle started with a simple realization: social media shows opinions — but not what's happening around you.",
                                    "Scrolling felt endless. Cities felt invisible. Events felt disconnected.",
                                    "So we imagined something different. What if social media had a pulse? What if creators could light up a city?",
                                    "VibeCircle was built to connect digital expression to physical reality. We're not chasing trends. We're building infrastructure for culture."
                                ].map((p, i)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(Reveal, {
                                        delay: i * .1,
                                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                            style: {
                                                fontFamily: "'DM Sans',sans-serif",
                                                fontSize: i === 1 ? "21px" : "17px",
                                                fontStyle: i === 1 ? "italic" : "normal",
                                                color: i === 0 ? "rgba(255,255,255,0.8)" : C.dim,
                                                lineHeight: 1.8,
                                                marginBottom: "20px"
                                            },
                                            children: p
                                        }, void 0, false, {
                                            fileName: "[project]/components/VibeCirclePages.jsx",
                                            lineNumber: 523,
                                            columnNumber: 42
                                        }, this)
                                    }, i, false, {
                                        fileName: "[project]/components/VibeCirclePages.jsx",
                                        lineNumber: 523,
                                        columnNumber: 13
                                    }, this))
                            ]
                        }, void 0, true, {
                            fileName: "[project]/components/VibeCirclePages.jsx",
                            lineNumber: 520,
                            columnNumber: 9
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "[project]/components/VibeCirclePages.jsx",
                    lineNumber: 518,
                    columnNumber: 7
                }, this)
            ]
        }, void 0, true, {
            fileName: "[project]/components/VibeCirclePages.jsx",
            lineNumber: 474,
            columnNumber: 7
        }, this)
    }, void 0, false, {
        fileName: "[project]/components/VibeCirclePages.jsx",
        lineNumber: 473,
        columnNumber: 5
    }, this);
}
// ══════════════════════════════════════════════════════════════════════════════
// TEAM PAGE
// ══════════════════════════════════════════════════════════════════════════════
const TEAM = [
    {
        name: "Marcus Webb",
        role: "CEO & Co-Founder",
        dept: "Leadership",
        emoji: "🚀",
        quote: "We're not building an app. We're building the infrastructure for how cities feel alive.",
        bio: "Former urban planner turned tech founder. Marcus spent 8 years mapping city culture before deciding maps should move in real time.",
        color: C.orange
    },
    {
        name: "Layla Chen",
        role: "CTO & Co-Founder",
        dept: "Engineering",
        emoji: "⚙️",
        quote: "The hardest technical problems are always the most human ones.",
        bio: "Ex-Google Maps engineer. Layla designed the real-time geo-layer that powers VibeCircle's living map system.",
        color: C.blue
    },
    {
        name: "Devon Price",
        role: "Head of Design",
        dept: "Design",
        emoji: "🎨",
        quote: "If the design doesn't make you feel something, we start over.",
        bio: "Previously led design at Spotify and Snap. Devon's philosophy: every pixel should have a pulse.",
        color: C.pink
    },
    {
        name: "Amara Osei",
        role: "Head of Creator Partnerships",
        dept: "Creators",
        emoji: "⚡",
        quote: "Creators aren't users. They're the energy source. Treat them like it.",
        bio: "Built creator programs at TikTok and YouTube. Amara signed VibeCircle's first 10,000 creators in 90 days.",
        color: C.gold
    },
    {
        name: "Rishi Kapoor",
        role: "Head of Growth",
        dept: "Growth",
        emoji: "📈",
        quote: "Growth that doesn't compound isn't growth. It's just noise.",
        bio: "3x YC startup growth lead. Rishi built the ambassador network that took VibeCircle to 50 cities in one semester.",
        color: C.purple
    },
    {
        name: "Sofia Reyes",
        role: "Head of Business Dev",
        dept: "Business",
        emoji: "🤝",
        quote: "Every brand has a vibe. Our job is to help them find it and amplify it.",
        bio: "Ex-Salesforce enterprise sales, now building the business ecosystem that funds VibeCircle's creator economy.",
        color: C.orange
    }
];
const DEPT_COLORS_TEAM = {
    Leadership: C.orange,
    Engineering: C.blue,
    Design: C.pink,
    Creators: C.gold,
    Growth: C.purple,
    Business: C.orange
};
function TeamPage() {
    const [active, setActive] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])(null);
    const w = useWindowWidth();
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(PageShell, {
        current: "Team",
        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            style: {
                background: C.bg,
                color: C.white
            },
            children: [
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(PageHero, {
                    tag: "The Team",
                    title: "Meet the builders",
                    accent: "of the vibe.",
                    sub: "Developers, designers, strategists, creatives, and systems thinkers. We build a living ecosystem — not just an app."
                }, void 0, false, {
                    fileName: "[project]/components/VibeCirclePages.jsx",
                    lineNumber: 551,
                    columnNumber: 7
                }, this),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(Divider, {}, void 0, false, {
                    fileName: "[project]/components/VibeCirclePages.jsx",
                    lineNumber: 552,
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
                                    marginBottom: "56px"
                                },
                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(Tag, {
                                    children: "Core Team"
                                }, void 0, false, {
                                    fileName: "[project]/components/VibeCirclePages.jsx",
                                    lineNumber: 556,
                                    columnNumber: 49
                                }, this)
                            }, void 0, false, {
                                fileName: "[project]/components/VibeCirclePages.jsx",
                                lineNumber: 556,
                                columnNumber: 11
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "grid-3",
                                style: {
                                    gap: "20px"
                                },
                                children: TEAM.map((m, i)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(Reveal, {
                                        delay: i * .08,
                                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            onClick: ()=>setActive(active === i ? null : i),
                                            style: {
                                                padding: "32px 28px",
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
                                                        gap: "16px",
                                                        marginBottom: "16px"
                                                    },
                                                    children: [
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                            style: {
                                                                width: "52px",
                                                                height: "52px",
                                                                borderRadius: "50%",
                                                                background: `${m.color}20`,
                                                                border: `2px solid ${m.color}40`,
                                                                display: "flex",
                                                                alignItems: "center",
                                                                justifyContent: "center",
                                                                fontSize: "22px",
                                                                flexShrink: 0,
                                                                animation: active === i ? "dotPulse 2s infinite" : ""
                                                            },
                                                            children: m.emoji
                                                        }, void 0, false, {
                                                            fileName: "[project]/components/VibeCirclePages.jsx",
                                                            lineNumber: 565,
                                                            columnNumber: 21
                                                        }, this),
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                            children: [
                                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                                    style: {
                                                                        fontFamily: "'DM Sans',sans-serif",
                                                                        fontSize: "16px",
                                                                        fontWeight: 600,
                                                                        color: C.white
                                                                    },
                                                                    children: m.name
                                                                }, void 0, false, {
                                                                    fileName: "[project]/components/VibeCirclePages.jsx",
                                                                    lineNumber: 567,
                                                                    columnNumber: 23
                                                                }, this),
                                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                                    style: {
                                                                        fontFamily: "'DM Sans',sans-serif",
                                                                        fontSize: "12px",
                                                                        color: m.color,
                                                                        marginTop: "2px",
                                                                        letterSpacing: ".5px"
                                                                    },
                                                                    children: m.role
                                                                }, void 0, false, {
                                                                    fileName: "[project]/components/VibeCirclePages.jsx",
                                                                    lineNumber: 568,
                                                                    columnNumber: 23
                                                                }, this)
                                                            ]
                                                        }, void 0, true, {
                                                            fileName: "[project]/components/VibeCirclePages.jsx",
                                                            lineNumber: 566,
                                                            columnNumber: 21
                                                        }, this)
                                                    ]
                                                }, void 0, true, {
                                                    fileName: "[project]/components/VibeCirclePages.jsx",
                                                    lineNumber: 564,
                                                    columnNumber: 19
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                    style: {
                                                        fontFamily: "'Bebas Neue',sans-serif",
                                                        fontSize: "11px",
                                                        letterSpacing: "2px",
                                                        color: m.color,
                                                        marginBottom: "10px",
                                                        opacity: .7
                                                    },
                                                    children: m.dept
                                                }, void 0, false, {
                                                    fileName: "[project]/components/VibeCirclePages.jsx",
                                                    lineNumber: 571,
                                                    columnNumber: 19
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                    style: {
                                                        fontFamily: "'DM Sans',sans-serif",
                                                        fontSize: "14px",
                                                        fontStyle: "italic",
                                                        color: "rgba(255,255,255,.55)",
                                                        lineHeight: 1.7,
                                                        marginBottom: active === i ? "16px" : "0"
                                                    },
                                                    children: [
                                                        '"',
                                                        m.quote,
                                                        '"'
                                                    ]
                                                }, void 0, true, {
                                                    fileName: "[project]/components/VibeCirclePages.jsx",
                                                    lineNumber: 572,
                                                    columnNumber: 19
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
                                                                margin: "16px 0"
                                                            }
                                                        }, void 0, false, {
                                                            fileName: "[project]/components/VibeCirclePages.jsx",
                                                            lineNumber: 575,
                                                            columnNumber: 23
                                                        }, this),
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                            style: {
                                                                fontFamily: "'DM Sans',sans-serif",
                                                                fontSize: "14px",
                                                                color: C.dim,
                                                                lineHeight: 1.7
                                                            },
                                                            children: m.bio
                                                        }, void 0, false, {
                                                            fileName: "[project]/components/VibeCirclePages.jsx",
                                                            lineNumber: 576,
                                                            columnNumber: 23
                                                        }, this)
                                                    ]
                                                }, void 0, true, {
                                                    fileName: "[project]/components/VibeCirclePages.jsx",
                                                    lineNumber: 574,
                                                    columnNumber: 21
                                                }, this)
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/components/VibeCirclePages.jsx",
                                            lineNumber: 560,
                                            columnNumber: 17
                                        }, this)
                                    }, i, false, {
                                        fileName: "[project]/components/VibeCirclePages.jsx",
                                        lineNumber: 559,
                                        columnNumber: 15
                                    }, this))
                            }, void 0, false, {
                                fileName: "[project]/components/VibeCirclePages.jsx",
                                lineNumber: 557,
                                columnNumber: 11
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/components/VibeCirclePages.jsx",
                        lineNumber: 555,
                        columnNumber: 9
                    }, this)
                }, void 0, false, {
                    fileName: "[project]/components/VibeCirclePages.jsx",
                    lineNumber: 554,
                    columnNumber: 7
                }, this),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(Divider, {}, void 0, false, {
                    fileName: "[project]/components/VibeCirclePages.jsx",
                    lineNumber: 585,
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
                                            lineNumber: 590,
                                            columnNumber: 21
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("h2", {
                                            style: {
                                                fontFamily: "'Bebas Neue',sans-serif",
                                                fontSize: "clamp(32px,5vw,56px)",
                                                color: C.white,
                                                lineHeight: 1,
                                                margin: "16px 0 24px"
                                            },
                                            children: [
                                                "Culture isn't built in",
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("br", {}, void 0, false, {
                                                    fileName: "[project]/components/VibeCirclePages.jsx",
                                                    lineNumber: 590,
                                                    columnNumber: 196
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                    style: {
                                                        color: C.orange
                                                    },
                                                    children: "conference rooms."
                                                }, void 0, false, {
                                                    fileName: "[project]/components/VibeCirclePages.jsx",
                                                    lineNumber: 590,
                                                    columnNumber: 201
                                                }, this)
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/components/VibeCirclePages.jsx",
                                            lineNumber: 590,
                                            columnNumber: 43
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                            style: {
                                                fontFamily: "'DM Sans',sans-serif",
                                                fontSize: "16px",
                                                color: C.dim,
                                                lineHeight: 1.8
                                            },
                                            children: "We work embedded in cities. We ship fast. We talk to creators and businesses every single day. We build what we'd actually want to use."
                                        }, void 0, false, {
                                            fileName: "[project]/components/VibeCirclePages.jsx",
                                            lineNumber: 590,
                                            columnNumber: 261
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/components/VibeCirclePages.jsx",
                                    lineNumber: 590,
                                    columnNumber: 13
                                }, this)
                            }, void 0, false, {
                                fileName: "[project]/components/VibeCirclePages.jsx",
                                lineNumber: 589,
                                columnNumber: 11
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                style: {
                                    display: "flex",
                                    flexDirection: "column",
                                    gap: "12px"
                                },
                                children: [
                                    [
                                        "🌍",
                                        "Remote-first",
                                        "Work from the cities you're building for."
                                    ],
                                    [
                                        "⚡",
                                        "Ship weekly",
                                        "Real output, real feedback, real iteration."
                                    ],
                                    [
                                        "🎯",
                                        "Direct impact",
                                        "No layers. Your work ships to 50K+ users."
                                    ],
                                    [
                                        "💎",
                                        "Equity for all",
                                        "Every employee is an owner."
                                    ]
                                ].map(([icon, title, desc], i)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(Reveal, {
                                        delay: i * .08,
                                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            style: {
                                                display: "flex",
                                                gap: "16px",
                                                alignItems: "flex-start",
                                                padding: "20px 24px",
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
                                                        fontSize: "20px"
                                                    },
                                                    children: icon
                                                }, void 0, false, {
                                                    fileName: "[project]/components/VibeCirclePages.jsx",
                                                    lineNumber: 599,
                                                    columnNumber: 19
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                    children: [
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                            style: {
                                                                fontFamily: "'Bebas Neue',sans-serif",
                                                                fontSize: "17px",
                                                                color: C.white,
                                                                letterSpacing: ".5px"
                                                            },
                                                            children: title
                                                        }, void 0, false, {
                                                            fileName: "[project]/components/VibeCirclePages.jsx",
                                                            lineNumber: 600,
                                                            columnNumber: 24
                                                        }, this),
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                            style: {
                                                                fontFamily: "'DM Sans',sans-serif",
                                                                fontSize: "13px",
                                                                color: C.dim,
                                                                marginTop: "4px"
                                                            },
                                                            children: desc
                                                        }, void 0, false, {
                                                            fileName: "[project]/components/VibeCirclePages.jsx",
                                                            lineNumber: 600,
                                                            columnNumber: 140
                                                        }, this)
                                                    ]
                                                }, void 0, true, {
                                                    fileName: "[project]/components/VibeCirclePages.jsx",
                                                    lineNumber: 600,
                                                    columnNumber: 19
                                                }, this)
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/components/VibeCirclePages.jsx",
                                            lineNumber: 595,
                                            columnNumber: 17
                                        }, this)
                                    }, i, false, {
                                        fileName: "[project]/components/VibeCirclePages.jsx",
                                        lineNumber: 594,
                                        columnNumber: 15
                                    }, this))
                            }, void 0, false, {
                                fileName: "[project]/components/VibeCirclePages.jsx",
                                lineNumber: 592,
                                columnNumber: 11
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/components/VibeCirclePages.jsx",
                        lineNumber: 588,
                        columnNumber: 9
                    }, this)
                }, void 0, false, {
                    fileName: "[project]/components/VibeCirclePages.jsx",
                    lineNumber: 587,
                    columnNumber: 7
                }, this),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(Divider, {}, void 0, false, {
                    fileName: "[project]/components/VibeCirclePages.jsx",
                    lineNumber: 607,
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
                                lineNumber: 610,
                                columnNumber: 17
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("h2", {
                                style: {
                                    fontFamily: "'Bebas Neue',sans-serif",
                                    fontSize: "clamp(32px,5vw,56px)",
                                    color: C.white,
                                    lineHeight: 1,
                                    margin: "16px auto 24px",
                                    maxWidth: "600px"
                                },
                                children: [
                                    "Want to be on this page?",
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("br", {}, void 0, false, {
                                        fileName: "[project]/components/VibeCirclePages.jsx",
                                        lineNumber: 610,
                                        columnNumber: 210
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                        style: {
                                            color: C.orange
                                        },
                                        children: "We're hiring."
                                    }, void 0, false, {
                                        fileName: "[project]/components/VibeCirclePages.jsx",
                                        lineNumber: 610,
                                        columnNumber: 215
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/components/VibeCirclePages.jsx",
                                lineNumber: 610,
                                columnNumber: 35
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                style: {
                                    fontFamily: "'DM Sans',sans-serif",
                                    fontSize: "16px",
                                    color: C.dim,
                                    margin: "0 auto 36px",
                                    maxWidth: "400px"
                                },
                                children: "Open roles across engineering, design, growth, and creator partnerships."
                            }, void 0, false, {
                                fileName: "[project]/components/VibeCirclePages.jsx",
                                lineNumber: 610,
                                columnNumber: 271
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/components/VibeCirclePages.jsx",
                        lineNumber: 610,
                        columnNumber: 9
                    }, this)
                }, void 0, false, {
                    fileName: "[project]/components/VibeCirclePages.jsx",
                    lineNumber: 609,
                    columnNumber: 7
                }, this)
            ]
        }, void 0, true, {
            fileName: "[project]/components/VibeCirclePages.jsx",
            lineNumber: 550,
            columnNumber: 7
        }, this)
    }, void 0, false, {
        fileName: "[project]/components/VibeCirclePages.jsx",
        lineNumber: 549,
        columnNumber: 5
    }, this);
}
// ══════════════════════════════════════════════════════════════════════════════
// CREATORS PAGE
// ══════════════════════════════════════════════════════════════════════════════
const CREATOR_TOOLS = [
    {
        icon: "🗺️",
        title: "Live City Map",
        desc: "Your content appears on the real-time map of your city. People discover you by location, not algorithm."
    },
    {
        icon: "⚡",
        title: "Creator Feed",
        desc: "A social feed that prioritizes creators in your city and culture niche. Built for discovery, not addiction."
    },
    {
        icon: "🎙️",
        title: "Go Live Anywhere",
        desc: "Stream from any location. Your live appears on the map for nearby users to join in real time."
    },
    {
        icon: "🏪",
        title: "Brand Marketplace",
        desc: "Browse and apply to paid brand deals directly through the platform. No middlemen, no agencies."
    },
    {
        icon: "📊",
        title: "Creator Analytics",
        desc: "Real metrics: map views, discovery impressions, location reach, and audience growth over time."
    },
    {
        icon: "👥",
        title: "Community Spaces",
        desc: "Create invite-only groups around your city scene, niche, or next event. Build your inner circle."
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
        price: "$12",
        desc: "The full creator toolkit. Built for creators ready to grow and earn.",
        features: [
            "Everything in Spark",
            "Unlimited posting",
            "Priority map placement",
            "Brand Marketplace access",
            "Advanced analytics dashboard",
            "Go Live feature",
            "Verified creator badge"
        ],
        cta: "Start Free Trial",
        highlight: true,
        color: C.orange
    },
    {
        plan: "ORBIT",
        price: "$29",
        desc: "For creators ready to turn VibeCircle into a primary income stream.",
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
        a: "When you post content tagged to a location, it appears as a live pin on the VibeCircle map for users in that area. The map is real-time, so people nearby can discover you while they're actually in your city."
    },
    {
        q: "How do I get my first brand deal?",
        a: "Once you're on the Pulse or Orbit plan, you gain access to the Brand Marketplace where you can browse live deals and apply directly. Brands typically respond within 48 hours. No follower minimum — brands look for authenticity and city presence."
    },
    {
        q: "Is there a follower minimum to join?",
        a: "None. VibeCircle isn't about follower counts — it's about your city presence and energy. We've seen creators with 500 followers land brand deals because they own their local scene."
    },
    {
        q: "How does the Creator Fund work?",
        a: "Orbit creators are eligible for VibeCircle's Creator Fund, which pays based on verified map impressions, discovery reach, and engagement from real-world posts. Payouts are monthly."
    },
    {
        q: "Can I use VibeCircle alongside Instagram or TikTok?",
        a: "Absolutely. VibeCircle is complementary, not competitive. Most creators cross-post their best VibeCircle content to other platforms and use VC for local discovery and brand deals."
    }
];
function CreatorsPage() {
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(PageShell, {
        current: "Creators",
        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            style: {
                background: C.bg,
                color: C.white
            },
            children: [
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(PageHero, {
                    tag: "For Creators",
                    title: "Your city is your",
                    accent: "stage. Own it.",
                    sub: "VibeCircle gives creators the tools to build a real local following, get discovered on the live city map, and earn from brand partnerships."
                }, void 0, false, {
                    fileName: "[project]/components/VibeCirclePages.jsx",
                    lineNumber: 645,
                    columnNumber: 7
                }, this),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(Divider, {}, void 0, false, {
                    fileName: "[project]/components/VibeCirclePages.jsx",
                    lineNumber: 646,
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
                                    "$2.4M+",
                                    "Creator Earnings"
                                ],
                                [
                                    "3,200+",
                                    "Brand Deals Closed"
                                ],
                                [
                                    "48hrs",
                                    "Avg Deal Response"
                                ]
                            ].map(([v, l], i)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(Reveal, {
                                    delay: i * .1,
                                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        style: {
                                            padding: "28px",
                                            background: "rgba(255,107,0,0.04)",
                                            border: `1px solid ${C.border}`,
                                            borderRadius: "4px",
                                            textAlign: "center"
                                        },
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                style: {
                                                    fontFamily: "'Bebas Neue',sans-serif",
                                                    fontSize: "clamp(32px,4vw,48px)",
                                                    color: C.orange,
                                                    lineHeight: 1
                                                },
                                                children: v
                                            }, void 0, false, {
                                                fileName: "[project]/components/VibeCirclePages.jsx",
                                                lineNumber: 654,
                                                columnNumber: 19
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                style: {
                                                    fontFamily: "'DM Sans',sans-serif",
                                                    fontSize: "12px",
                                                    letterSpacing: "1.5px",
                                                    textTransform: "uppercase",
                                                    color: C.dim,
                                                    marginTop: "6px"
                                                },
                                                children: l
                                            }, void 0, false, {
                                                fileName: "[project]/components/VibeCirclePages.jsx",
                                                lineNumber: 655,
                                                columnNumber: 19
                                            }, this)
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/components/VibeCirclePages.jsx",
                                        lineNumber: 653,
                                        columnNumber: 17
                                    }, this)
                                }, i, false, {
                                    fileName: "[project]/components/VibeCirclePages.jsx",
                                    lineNumber: 652,
                                    columnNumber: 15
                                }, this))
                        }, void 0, false, {
                            fileName: "[project]/components/VibeCirclePages.jsx",
                            lineNumber: 650,
                            columnNumber: 11
                        }, this)
                    }, void 0, false, {
                        fileName: "[project]/components/VibeCirclePages.jsx",
                        lineNumber: 649,
                        columnNumber: 9
                    }, this)
                }, void 0, false, {
                    fileName: "[project]/components/VibeCirclePages.jsx",
                    lineNumber: 648,
                    columnNumber: 7
                }, this),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(Divider, {}, void 0, false, {
                    fileName: "[project]/components/VibeCirclePages.jsx",
                    lineNumber: 662,
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
                                    marginBottom: "56px"
                                },
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(Tag, {
                                        children: "Creator Tools"
                                    }, void 0, false, {
                                        fileName: "[project]/components/VibeCirclePages.jsx",
                                        lineNumber: 666,
                                        columnNumber: 49
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("h2", {
                                        style: {
                                            fontFamily: "'Bebas Neue',sans-serif",
                                            fontSize: "clamp(32px,5vw,58px)",
                                            color: C.white,
                                            lineHeight: 1,
                                            marginTop: "16px"
                                        },
                                        children: [
                                            "Everything you need to",
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("br", {}, void 0, false, {
                                                fileName: "[project]/components/VibeCirclePages.jsx",
                                                lineNumber: 666,
                                                columnNumber: 222
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                style: {
                                                    color: C.orange
                                                },
                                                children: "light up your city."
                                            }, void 0, false, {
                                                fileName: "[project]/components/VibeCirclePages.jsx",
                                                lineNumber: 666,
                                                columnNumber: 227
                                            }, this)
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/components/VibeCirclePages.jsx",
                                        lineNumber: 666,
                                        columnNumber: 73
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/components/VibeCirclePages.jsx",
                                lineNumber: 666,
                                columnNumber: 11
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "grid-3",
                                children: CREATOR_TOOLS.map((t, i)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(Reveal, {
                                        delay: i * .08,
                                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            style: {
                                                padding: "32px 28px",
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
                                                        fontSize: "26px",
                                                        marginBottom: "16px"
                                                    },
                                                    children: t.icon
                                                }, void 0, false, {
                                                    fileName: "[project]/components/VibeCirclePages.jsx",
                                                    lineNumber: 674,
                                                    columnNumber: 19
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                    style: {
                                                        fontFamily: "'Bebas Neue',sans-serif",
                                                        fontSize: "20px",
                                                        color: C.white,
                                                        marginBottom: "10px"
                                                    },
                                                    children: t.title
                                                }, void 0, false, {
                                                    fileName: "[project]/components/VibeCirclePages.jsx",
                                                    lineNumber: 675,
                                                    columnNumber: 19
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                    style: {
                                                        fontFamily: "'DM Sans',sans-serif",
                                                        fontSize: "14px",
                                                        color: C.dim,
                                                        lineHeight: 1.7
                                                    },
                                                    children: t.desc
                                                }, void 0, false, {
                                                    fileName: "[project]/components/VibeCirclePages.jsx",
                                                    lineNumber: 676,
                                                    columnNumber: 19
                                                }, this)
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/components/VibeCirclePages.jsx",
                                            lineNumber: 670,
                                            columnNumber: 17
                                        }, this)
                                    }, i, false, {
                                        fileName: "[project]/components/VibeCirclePages.jsx",
                                        lineNumber: 669,
                                        columnNumber: 15
                                    }, this))
                            }, void 0, false, {
                                fileName: "[project]/components/VibeCirclePages.jsx",
                                lineNumber: 667,
                                columnNumber: 11
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/components/VibeCirclePages.jsx",
                        lineNumber: 665,
                        columnNumber: 9
                    }, this)
                }, void 0, false, {
                    fileName: "[project]/components/VibeCirclePages.jsx",
                    lineNumber: 664,
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
                            maxWidth: "1100px",
                            margin: "0 auto"
                        },
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(Reveal, {
                                style: {
                                    marginBottom: "56px",
                                    textAlign: "center"
                                },
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(Tag, {
                                        children: "Creator Plans"
                                    }, void 0, false, {
                                        fileName: "[project]/components/VibeCirclePages.jsx",
                                        lineNumber: 687,
                                        columnNumber: 68
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("h2", {
                                        style: {
                                            fontFamily: "'Bebas Neue',sans-serif",
                                            fontSize: "clamp(32px,5vw,58px)",
                                            color: C.white,
                                            lineHeight: 1,
                                            marginTop: "16px"
                                        },
                                        children: [
                                            "Start free. Scale ",
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                style: {
                                                    color: C.orange
                                                },
                                                children: "when you're ready."
                                            }, void 0, false, {
                                                fileName: "[project]/components/VibeCirclePages.jsx",
                                                lineNumber: 687,
                                                columnNumber: 237
                                            }, this)
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/components/VibeCirclePages.jsx",
                                        lineNumber: 687,
                                        columnNumber: 92
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/components/VibeCirclePages.jsx",
                                lineNumber: 687,
                                columnNumber: 11
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "grid-3",
                                children: CREATOR_TIERS.map((t, i)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(PricingCard, {
                                        ...t
                                    }, i, false, {
                                        fileName: "[project]/components/VibeCirclePages.jsx",
                                        lineNumber: 688,
                                        columnNumber: 61
                                    }, this))
                            }, void 0, false, {
                                fileName: "[project]/components/VibeCirclePages.jsx",
                                lineNumber: 688,
                                columnNumber: 11
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(Reveal, {
                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                    style: {
                                        fontFamily: "'DM Sans',sans-serif",
                                        fontSize: "13px",
                                        color: C.dimmer,
                                        textAlign: "center",
                                        marginTop: "28px"
                                    },
                                    children: "All plans include a 14-day free trial. No credit card required for Spark."
                                }, void 0, false, {
                                    fileName: "[project]/components/VibeCirclePages.jsx",
                                    lineNumber: 689,
                                    columnNumber: 19
                                }, this)
                            }, void 0, false, {
                                fileName: "[project]/components/VibeCirclePages.jsx",
                                lineNumber: 689,
                                columnNumber: 11
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/components/VibeCirclePages.jsx",
                        lineNumber: 686,
                        columnNumber: 9
                    }, this)
                }, void 0, false, {
                    fileName: "[project]/components/VibeCirclePages.jsx",
                    lineNumber: 685,
                    columnNumber: 7
                }, this),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(Divider, {}, void 0, false, {
                    fileName: "[project]/components/VibeCirclePages.jsx",
                    lineNumber: 692,
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
                            top: "10%",
                            right: "-5%",
                            size: 400,
                            opacity: 0.1
                        }, void 0, false, {
                            fileName: "[project]/components/VibeCirclePages.jsx",
                            lineNumber: 695,
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
                                        marginBottom: "56px"
                                    },
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(Tag, {
                                            children: "Getting Started"
                                        }, void 0, false, {
                                            fileName: "[project]/components/VibeCirclePages.jsx",
                                            lineNumber: 697,
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
                                                "Go from zero to",
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("br", {}, void 0, false, {
                                                    fileName: "[project]/components/VibeCirclePages.jsx",
                                                    lineNumber: 697,
                                                    columnNumber: 217
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                    style: {
                                                        color: C.orange
                                                    },
                                                    children: "city creator in 4 steps."
                                                }, void 0, false, {
                                                    fileName: "[project]/components/VibeCirclePages.jsx",
                                                    lineNumber: 697,
                                                    columnNumber: 222
                                                }, this)
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/components/VibeCirclePages.jsx",
                                            lineNumber: 697,
                                            columnNumber: 75
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/components/VibeCirclePages.jsx",
                                    lineNumber: 697,
                                    columnNumber: 11
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "grid-4",
                                    children: [
                                        [
                                            "01",
                                            "📍",
                                            "Claim Your City",
                                            "Set your home city and the neighborhoods you create in. This is your territory."
                                        ],
                                        [
                                            "02",
                                            "🎬",
                                            "Post Your First Vibe",
                                            "Share a moment from your city — a venue, a street, an event. Watch it appear live on the map."
                                        ],
                                        [
                                            "03",
                                            "🤝",
                                            "Build Your Circle",
                                            "Connect with other creators in your city. Collaborate, co-host, and amplify each other."
                                        ],
                                        [
                                            "04",
                                            "💸",
                                            "Land Your First Deal",
                                            "Browse the Brand Marketplace and apply. Brands are actively looking for city-embedded creators like you."
                                        ]
                                    ].map(([n, icon, title, desc], i)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(Reveal, {
                                            delay: i * .1,
                                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                style: {
                                                    padding: "32px 24px",
                                                    background: i % 2 === 0 ? "rgba(255,107,0,0.04)" : "rgba(255,255,255,0.02)",
                                                    border: `1px solid ${i % 2 === 0 ? C.orange + "20" : "rgba(255,255,255,0.07)"}`,
                                                    borderRadius: "4px",
                                                    height: "100%"
                                                },
                                                children: [
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                        style: {
                                                            fontFamily: "'Bebas Neue',sans-serif",
                                                            fontSize: "11px",
                                                            letterSpacing: "3px",
                                                            color: C.orange,
                                                            marginBottom: "12px"
                                                        },
                                                        children: n
                                                    }, void 0, false, {
                                                        fileName: "[project]/components/VibeCirclePages.jsx",
                                                        lineNumber: 702,
                                                        columnNumber: 19
                                                    }, this),
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                        style: {
                                                            fontSize: "26px",
                                                            marginBottom: "14px"
                                                        },
                                                        children: icon
                                                    }, void 0, false, {
                                                        fileName: "[project]/components/VibeCirclePages.jsx",
                                                        lineNumber: 703,
                                                        columnNumber: 19
                                                    }, this),
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                        style: {
                                                            fontFamily: "'Bebas Neue',sans-serif",
                                                            fontSize: "19px",
                                                            color: C.white,
                                                            marginBottom: "10px"
                                                        },
                                                        children: title
                                                    }, void 0, false, {
                                                        fileName: "[project]/components/VibeCirclePages.jsx",
                                                        lineNumber: 704,
                                                        columnNumber: 19
                                                    }, this),
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                        style: {
                                                            fontFamily: "'DM Sans',sans-serif",
                                                            fontSize: "13px",
                                                            color: C.dim,
                                                            lineHeight: 1.7
                                                        },
                                                        children: desc
                                                    }, void 0, false, {
                                                        fileName: "[project]/components/VibeCirclePages.jsx",
                                                        lineNumber: 705,
                                                        columnNumber: 19
                                                    }, this)
                                                ]
                                            }, void 0, true, {
                                                fileName: "[project]/components/VibeCirclePages.jsx",
                                                lineNumber: 701,
                                                columnNumber: 17
                                            }, this)
                                        }, i, false, {
                                            fileName: "[project]/components/VibeCirclePages.jsx",
                                            lineNumber: 700,
                                            columnNumber: 15
                                        }, this))
                                }, void 0, false, {
                                    fileName: "[project]/components/VibeCirclePages.jsx",
                                    lineNumber: 698,
                                    columnNumber: 11
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "[project]/components/VibeCirclePages.jsx",
                            lineNumber: 696,
                            columnNumber: 9
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "[project]/components/VibeCirclePages.jsx",
                    lineNumber: 694,
                    columnNumber: 7
                }, this),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(Divider, {}, void 0, false, {
                    fileName: "[project]/components/VibeCirclePages.jsx",
                    lineNumber: 712,
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
                                    marginBottom: "48px"
                                },
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(Tag, {
                                        children: "Creator Stories"
                                    }, void 0, false, {
                                        fileName: "[project]/components/VibeCirclePages.jsx",
                                        lineNumber: 716,
                                        columnNumber: 49
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("h2", {
                                        style: {
                                            fontFamily: "'Bebas Neue',sans-serif",
                                            fontSize: "clamp(28px,4vw,48px)",
                                            color: C.white,
                                            lineHeight: 1,
                                            marginTop: "16px"
                                        },
                                        children: [
                                            "Real creators. ",
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                style: {
                                                    color: C.orange
                                                },
                                                children: "Real results."
                                            }, void 0, false, {
                                                fileName: "[project]/components/VibeCirclePages.jsx",
                                                lineNumber: 716,
                                                columnNumber: 217
                                            }, this)
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/components/VibeCirclePages.jsx",
                                        lineNumber: 716,
                                        columnNumber: 75
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/components/VibeCirclePages.jsx",
                                lineNumber: 716,
                                columnNumber: 11
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "grid-4",
                                children: TESTIMONIALS.filter((t)=>t.role.includes("Creator") || t.role.includes("Artist")).concat(TESTIMONIALS.filter((t)=>!t.role.includes("Creator") && !t.role.includes("Artist"))).slice(0, 4).map((t, i)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(Reveal, {
                                        delay: i * .1,
                                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(TestimonialCard, {
                                            ...t
                                        }, void 0, false, {
                                            fileName: "[project]/components/VibeCirclePages.jsx",
                                            lineNumber: 717,
                                            columnNumber: 253
                                        }, this)
                                    }, i, false, {
                                        fileName: "[project]/components/VibeCirclePages.jsx",
                                        lineNumber: 717,
                                        columnNumber: 224
                                    }, this))
                            }, void 0, false, {
                                fileName: "[project]/components/VibeCirclePages.jsx",
                                lineNumber: 717,
                                columnNumber: 11
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/components/VibeCirclePages.jsx",
                        lineNumber: 715,
                        columnNumber: 9
                    }, this)
                }, void 0, false, {
                    fileName: "[project]/components/VibeCirclePages.jsx",
                    lineNumber: 714,
                    columnNumber: 7
                }, this),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(Divider, {}, void 0, false, {
                    fileName: "[project]/components/VibeCirclePages.jsx",
                    lineNumber: 720,
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
                                    marginBottom: "48px"
                                },
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(Tag, {
                                        children: "Creator FAQ"
                                    }, void 0, false, {
                                        fileName: "[project]/components/VibeCirclePages.jsx",
                                        lineNumber: 724,
                                        columnNumber: 49
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("h2", {
                                        style: {
                                            fontFamily: "'Bebas Neue',sans-serif",
                                            fontSize: "clamp(28px,4vw,48px)",
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
                                                lineNumber: 724,
                                                columnNumber: 209
                                            }, this)
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/components/VibeCirclePages.jsx",
                                        lineNumber: 724,
                                        columnNumber: 71
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/components/VibeCirclePages.jsx",
                                lineNumber: 724,
                                columnNumber: 11
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(FAQ, {
                                items: CREATOR_FAQS
                            }, void 0, false, {
                                fileName: "[project]/components/VibeCirclePages.jsx",
                                lineNumber: 725,
                                columnNumber: 11
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/components/VibeCirclePages.jsx",
                        lineNumber: 723,
                        columnNumber: 9
                    }, this)
                }, void 0, false, {
                    fileName: "[project]/components/VibeCirclePages.jsx",
                    lineNumber: 722,
                    columnNumber: 7
                }, this),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    style: {
                        background: C.orange,
                        padding: "24px 64px",
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
                                "·",
                                "Brand Deals",
                                "·",
                                "Go Live",
                                "·",
                                "Creator Fund",
                                "·",
                                "Real Discovery",
                                "·"
                            ].map((w, i)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                    style: {
                                        fontFamily: "'Bebas Neue',sans-serif",
                                        fontSize: "15px",
                                        letterSpacing: "3px",
                                        color: "rgba(5,5,10,0.65)",
                                        marginRight: "28px"
                                    },
                                    children: w
                                }, `${x}-${i}`, false, {
                                    fileName: "[project]/components/VibeCirclePages.jsx",
                                    lineNumber: 732,
                                    columnNumber: 13
                                }, this)))
                    }, void 0, false, {
                        fileName: "[project]/components/VibeCirclePages.jsx",
                        lineNumber: 730,
                        columnNumber: 9
                    }, this)
                }, void 0, false, {
                    fileName: "[project]/components/VibeCirclePages.jsx",
                    lineNumber: 729,
                    columnNumber: 7
                }, this)
            ]
        }, void 0, true, {
            fileName: "[project]/components/VibeCirclePages.jsx",
            lineNumber: 644,
            columnNumber: 7
        }, this)
    }, void 0, false, {
        fileName: "[project]/components/VibeCirclePages.jsx",
        lineNumber: 643,
        columnNumber: 5
    }, this);
}
// ══════════════════════════════════════════════════════════════════════════════
// ADVERTISE PAGE
// ══════════════════════════════════════════════════════════════════════════════
const AD_FEATURES = [
    {
        icon: "📍",
        title: "Geo-Targeted Campaigns",
        desc: "Reach people physically near your location in real time. Pinpoint precision, zero waste.",
        color: C.orange
    },
    {
        icon: "⚡",
        title: "Sponsor Creator Moments",
        desc: "Embed your brand inside cultural moments — not beside them.",
        color: C.pink
    },
    {
        icon: "🗺️",
        title: "Event Promotion",
        desc: "Put your event on the live map. Watch RSVPs grow as your pin pulses across the city.",
        color: C.blue
    },
    {
        icon: "🔥",
        title: "Boost Local Visibility",
        desc: "Climb the discovery feed for your neighborhood. Be impossible to miss.",
        color: C.orange
    },
    {
        icon: "🎪",
        title: "Live Experience Ads",
        desc: "Promote while the experience is happening. Capture FOMO at its peak.",
        color: C.pink
    },
    {
        icon: "📊",
        title: "Real-Time Analytics",
        desc: "Track impressions, foot traffic, and engagement as they happen.",
        color: C.blue
    }
];
const AD_PRICING = [
    {
        plan: "LOCAL",
        price: "$299",
        desc: "Perfect for single-location businesses starting their VibeCircle presence.",
        features: [
            "1 active geo-campaign",
            "Up to 5,000 daily impressions",
            "City map pin placement",
            "Event promotion (2/month)",
            "Basic analytics report"
        ],
        cta: "Start Local",
        highlight: false,
        color: C.orange
    },
    {
        plan: "GROWTH",
        price: "$799",
        desc: "For businesses ready to own their neighborhood and expand across the city.",
        features: [
            "5 simultaneous campaigns",
            "Up to 25,000 daily impressions",
            "Priority map placement",
            "Creator sponsorship tools",
            "Event promotion (unlimited)",
            "Advanced analytics + heat maps",
            "A/B testing for ad creatives"
        ],
        cta: "Start Free Trial",
        highlight: true,
        color: C.orange
    },
    {
        plan: "CITY",
        price: "$2,499",
        desc: "Full-city dominance. Built for brands and agencies running at scale.",
        features: [
            "Unlimited campaigns",
            "Unlimited impressions",
            "Citywide spotlight placement",
            "Dedicated campaign manager",
            "Creator marketplace access",
            "White-label reporting",
            "Custom geo-zones",
            "API access"
        ],
        cta: "Contact Sales",
        highlight: false,
        color: C.pink
    }
];
const AD_FAQS = [
    {
        q: "How does geo-targeting work on VibeCircle?",
        a: "VibeCircle uses precise real-time location data to serve your ad to users who are physically within your defined radius. You set the zone — a block, a neighborhood, a whole city — and we deliver."
    },
    {
        q: "What's the minimum budget to start advertising?",
        a: "The Local plan starts at $299/month with no minimum ad spend commitment. You can cancel anytime."
    },
    {
        q: "Can I sponsor a specific creator?",
        a: "Yes. On Growth and City plans, you can browse the creator marketplace and propose direct sponsorships to creators whose audience matches your brand. Creators typically respond within 48 hours."
    },
    {
        q: "What analytics will I get?",
        a: "All plans include impression counts, map view rates, and engagement metrics. Growth and City plans add heat maps showing where your ad performed, audience demographics, and foot-traffic correlation data."
    },
    {
        q: "Is there a contract or commitment?",
        a: "No contracts. All plans are month-to-month. City plan clients can opt into annual billing for a 20% discount."
    }
];
function AdvertisePage() {
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(PageShell, {
        current: "Advertise",
        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
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
                    lineNumber: 769,
                    columnNumber: 7
                }, this),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(Divider, {}, void 0, false, {
                    fileName: "[project]/components/VibeCirclePages.jsx",
                    lineNumber: 770,
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
                                    marginBottom: "56px"
                                },
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(Tag, {
                                        children: "Ad Products"
                                    }, void 0, false, {
                                        fileName: "[project]/components/VibeCirclePages.jsx",
                                        lineNumber: 774,
                                        columnNumber: 49
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("h2", {
                                        style: {
                                            fontFamily: "'Bebas Neue',sans-serif",
                                            fontSize: "clamp(32px,5vw,58px)",
                                            color: C.white,
                                            lineHeight: 1,
                                            marginTop: "16px"
                                        },
                                        children: [
                                            "Every tool to make your",
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("br", {}, void 0, false, {
                                                fileName: "[project]/components/VibeCirclePages.jsx",
                                                lineNumber: 774,
                                                columnNumber: 221
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                style: {
                                                    color: C.orange
                                                },
                                                children: "energy visible."
                                            }, void 0, false, {
                                                fileName: "[project]/components/VibeCirclePages.jsx",
                                                lineNumber: 774,
                                                columnNumber: 226
                                            }, this)
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/components/VibeCirclePages.jsx",
                                        lineNumber: 774,
                                        columnNumber: 71
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/components/VibeCirclePages.jsx",
                                lineNumber: 774,
                                columnNumber: 11
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "grid-3",
                                children: AD_FEATURES.map((f, i)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(Reveal, {
                                        delay: i * .08,
                                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            style: {
                                                padding: "32px 28px",
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
                                                        fontSize: "26px",
                                                        marginBottom: "14px"
                                                    },
                                                    children: f.icon
                                                }, void 0, false, {
                                                    fileName: "[project]/components/VibeCirclePages.jsx",
                                                    lineNumber: 782,
                                                    columnNumber: 19
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                    style: {
                                                        fontFamily: "'Bebas Neue',sans-serif",
                                                        fontSize: "20px",
                                                        color: f.color,
                                                        marginBottom: "10px"
                                                    },
                                                    children: f.title
                                                }, void 0, false, {
                                                    fileName: "[project]/components/VibeCirclePages.jsx",
                                                    lineNumber: 783,
                                                    columnNumber: 19
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                    style: {
                                                        fontFamily: "'DM Sans',sans-serif",
                                                        fontSize: "14px",
                                                        color: C.dim,
                                                        lineHeight: 1.7
                                                    },
                                                    children: f.desc
                                                }, void 0, false, {
                                                    fileName: "[project]/components/VibeCirclePages.jsx",
                                                    lineNumber: 784,
                                                    columnNumber: 19
                                                }, this)
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/components/VibeCirclePages.jsx",
                                            lineNumber: 778,
                                            columnNumber: 17
                                        }, this)
                                    }, i, false, {
                                        fileName: "[project]/components/VibeCirclePages.jsx",
                                        lineNumber: 777,
                                        columnNumber: 15
                                    }, this))
                            }, void 0, false, {
                                fileName: "[project]/components/VibeCirclePages.jsx",
                                lineNumber: 775,
                                columnNumber: 11
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/components/VibeCirclePages.jsx",
                        lineNumber: 773,
                        columnNumber: 9
                    }, this)
                }, void 0, false, {
                    fileName: "[project]/components/VibeCirclePages.jsx",
                    lineNumber: 772,
                    columnNumber: 7
                }, this),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(Divider, {}, void 0, false, {
                    fileName: "[project]/components/VibeCirclePages.jsx",
                    lineNumber: 791,
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
                                    marginBottom: "56px",
                                    textAlign: "center"
                                },
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(Tag, {
                                        children: "Advertising Plans"
                                    }, void 0, false, {
                                        fileName: "[project]/components/VibeCirclePages.jsx",
                                        lineNumber: 795,
                                        columnNumber: 68
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("h2", {
                                        style: {
                                            fontFamily: "'Bebas Neue',sans-serif",
                                            fontSize: "clamp(32px,5vw,58px)",
                                            color: C.white,
                                            lineHeight: 1,
                                            marginTop: "16px"
                                        },
                                        children: [
                                            "Pick your level of",
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("br", {}, void 0, false, {
                                                fileName: "[project]/components/VibeCirclePages.jsx",
                                                lineNumber: 795,
                                                columnNumber: 241
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                style: {
                                                    color: C.orange
                                                },
                                                children: "dominance."
                                            }, void 0, false, {
                                                fileName: "[project]/components/VibeCirclePages.jsx",
                                                lineNumber: 795,
                                                columnNumber: 246
                                            }, this)
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/components/VibeCirclePages.jsx",
                                        lineNumber: 795,
                                        columnNumber: 96
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/components/VibeCirclePages.jsx",
                                lineNumber: 795,
                                columnNumber: 11
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "grid-3",
                                children: AD_PRICING.map((p, i)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(PricingCard, {
                                        ...p
                                    }, i, false, {
                                        fileName: "[project]/components/VibeCirclePages.jsx",
                                        lineNumber: 796,
                                        columnNumber: 58
                                    }, this))
                            }, void 0, false, {
                                fileName: "[project]/components/VibeCirclePages.jsx",
                                lineNumber: 796,
                                columnNumber: 11
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/components/VibeCirclePages.jsx",
                        lineNumber: 794,
                        columnNumber: 9
                    }, this)
                }, void 0, false, {
                    fileName: "[project]/components/VibeCirclePages.jsx",
                    lineNumber: 793,
                    columnNumber: 7
                }, this),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(Divider, {}, void 0, false, {
                    fileName: "[project]/components/VibeCirclePages.jsx",
                    lineNumber: 799,
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
                            margin: "0 auto",
                            textAlign: "center"
                        },
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(Reveal, {
                                style: {
                                    marginBottom: "32px"
                                },
                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(Tag, {
                                    children: "Ideal For"
                                }, void 0, false, {
                                    fileName: "[project]/components/VibeCirclePages.jsx",
                                    lineNumber: 803,
                                    columnNumber: 49
                                }, this)
                            }, void 0, false, {
                                fileName: "[project]/components/VibeCirclePages.jsx",
                                lineNumber: 803,
                                columnNumber: 11
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                style: {
                                    display: "flex",
                                    flexWrap: "wrap",
                                    gap: "12px",
                                    justifyContent: "center"
                                },
                                children: [
                                    "Restaurants",
                                    "Clubs & Venues",
                                    "Campuses",
                                    "Retail",
                                    "Event Organizers",
                                    "Creators",
                                    "Gyms",
                                    "Hotels",
                                    "Barbershops",
                                    "Music Venues"
                                ].map((item, i)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(Reveal, {
                                        delay: i * .04,
                                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            style: {
                                                fontFamily: "'DM Sans',sans-serif",
                                                fontSize: "14px",
                                                color: "rgba(255,255,255,0.7)",
                                                padding: "10px 20px",
                                                border: `1px solid ${C.border}`,
                                                borderRadius: "2px",
                                                transition: "all .25s",
                                                cursor: "default"
                                            },
                                            onMouseEnter: (e)=>{
                                                e.currentTarget.style.borderColor = C.orange;
                                                e.currentTarget.style.color = C.white;
                                                e.currentTarget.style.background = "rgba(255,107,0,0.08)";
                                            },
                                            onMouseLeave: (e)=>{
                                                e.currentTarget.style.borderColor = C.border;
                                                e.currentTarget.style.color = "rgba(255,255,255,0.7)";
                                                e.currentTarget.style.background = "transparent";
                                            },
                                            children: item
                                        }, void 0, false, {
                                            fileName: "[project]/components/VibeCirclePages.jsx",
                                            lineNumber: 807,
                                            columnNumber: 17
                                        }, this)
                                    }, i, false, {
                                        fileName: "[project]/components/VibeCirclePages.jsx",
                                        lineNumber: 806,
                                        columnNumber: 15
                                    }, this))
                            }, void 0, false, {
                                fileName: "[project]/components/VibeCirclePages.jsx",
                                lineNumber: 804,
                                columnNumber: 11
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/components/VibeCirclePages.jsx",
                        lineNumber: 802,
                        columnNumber: 9
                    }, this)
                }, void 0, false, {
                    fileName: "[project]/components/VibeCirclePages.jsx",
                    lineNumber: 801,
                    columnNumber: 7
                }, this),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(Divider, {}, void 0, false, {
                    fileName: "[project]/components/VibeCirclePages.jsx",
                    lineNumber: 816,
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
                                        children: "Brand Results"
                                    }, void 0, false, {
                                        fileName: "[project]/components/VibeCirclePages.jsx",
                                        lineNumber: 820,
                                        columnNumber: 49
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("h2", {
                                        style: {
                                            fontFamily: "'Bebas Neue',sans-serif",
                                            fontSize: "clamp(28px,4vw,48px)",
                                            color: C.white,
                                            lineHeight: 1,
                                            marginTop: "16px"
                                        },
                                        children: [
                                            "Brands that already ",
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                style: {
                                                    color: C.orange
                                                },
                                                children: "pulse."
                                            }, void 0, false, {
                                                fileName: "[project]/components/VibeCirclePages.jsx",
                                                lineNumber: 820,
                                                columnNumber: 220
                                            }, this)
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/components/VibeCirclePages.jsx",
                                        lineNumber: 820,
                                        columnNumber: 73
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/components/VibeCirclePages.jsx",
                                lineNumber: 820,
                                columnNumber: 11
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "grid-3",
                                children: TESTIMONIALS.filter((t)=>!t.role.includes("Creator") && !t.role.includes("Artist")).concat(TESTIMONIALS).slice(0, 3).map((t, i)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(Reveal, {
                                        delay: i * .1,
                                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(TestimonialCard, {
                                            ...t
                                        }, void 0, false, {
                                            fileName: "[project]/components/VibeCirclePages.jsx",
                                            lineNumber: 821,
                                            columnNumber: 188
                                        }, this)
                                    }, i, false, {
                                        fileName: "[project]/components/VibeCirclePages.jsx",
                                        lineNumber: 821,
                                        columnNumber: 159
                                    }, this))
                            }, void 0, false, {
                                fileName: "[project]/components/VibeCirclePages.jsx",
                                lineNumber: 821,
                                columnNumber: 11
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/components/VibeCirclePages.jsx",
                        lineNumber: 819,
                        columnNumber: 9
                    }, this)
                }, void 0, false, {
                    fileName: "[project]/components/VibeCirclePages.jsx",
                    lineNumber: 818,
                    columnNumber: 7
                }, this),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(Divider, {}, void 0, false, {
                    fileName: "[project]/components/VibeCirclePages.jsx",
                    lineNumber: 824,
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
                                    marginBottom: "48px"
                                },
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(Tag, {
                                        children: "Advertiser FAQ"
                                    }, void 0, false, {
                                        fileName: "[project]/components/VibeCirclePages.jsx",
                                        lineNumber: 828,
                                        columnNumber: 49
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("h2", {
                                        style: {
                                            fontFamily: "'Bebas Neue',sans-serif",
                                            fontSize: "clamp(28px,4vw,48px)",
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
                                                lineNumber: 828,
                                                columnNumber: 217
                                            }, this)
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/components/VibeCirclePages.jsx",
                                        lineNumber: 828,
                                        columnNumber: 74
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/components/VibeCirclePages.jsx",
                                lineNumber: 828,
                                columnNumber: 11
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(FAQ, {
                                items: AD_FAQS
                            }, void 0, false, {
                                fileName: "[project]/components/VibeCirclePages.jsx",
                                lineNumber: 829,
                                columnNumber: 11
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/components/VibeCirclePages.jsx",
                        lineNumber: 827,
                        columnNumber: 9
                    }, this)
                }, void 0, false, {
                    fileName: "[project]/components/VibeCirclePages.jsx",
                    lineNumber: 826,
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
                                "·",
                                "Creator Moments",
                                "·",
                                "Event Promotion",
                                "·",
                                "Live Ads",
                                "·",
                                "Real Analytics",
                                "·"
                            ].map((w, i)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                    style: {
                                        fontFamily: "'Bebas Neue',sans-serif",
                                        fontSize: "16px",
                                        letterSpacing: "3px",
                                        color: "rgba(5,5,10,0.7)",
                                        marginRight: "32px"
                                    },
                                    children: w
                                }, `${x}-${i}`, false, {
                                    fileName: "[project]/components/VibeCirclePages.jsx",
                                    lineNumber: 836,
                                    columnNumber: 13
                                }, this)))
                    }, void 0, false, {
                        fileName: "[project]/components/VibeCirclePages.jsx",
                        lineNumber: 834,
                        columnNumber: 9
                    }, this)
                }, void 0, false, {
                    fileName: "[project]/components/VibeCirclePages.jsx",
                    lineNumber: 833,
                    columnNumber: 7
                }, this)
            ]
        }, void 0, true, {
            fileName: "[project]/components/VibeCirclePages.jsx",
            lineNumber: 768,
            columnNumber: 7
        }, this)
    }, void 0, false, {
        fileName: "[project]/components/VibeCirclePages.jsx",
        lineNumber: 767,
        columnNumber: 5
    }, this);
}
// ══════════════════════════════════════════════════════════════════════════════
// BUSINESS PAGE
// ══════════════════════════════════════════════════════════════════════════════
const BIZ_TOOLS = [
    {
        num: "01",
        title: "Claim Your Location",
        desc: "Take ownership of your spot on the VibeCircle map. Your location becomes a living destination.",
        icon: "📍"
    },
    {
        num: "02",
        title: "Run Promotions",
        desc: "Launch time-limited offers that pulse to nearby users. Create urgency. Drive traffic.",
        icon: "🎯"
    },
    {
        num: "03",
        title: "Host Events",
        desc: "Create events that appear on the live map. Tap into VibeCircle's discovery engine.",
        icon: "🎪"
    },
    {
        num: "04",
        title: "Go Live",
        desc: "Stream directly from your location. Let people see the energy before they arrive.",
        icon: "🔴"
    },
    {
        num: "05",
        title: "Track Engagement",
        desc: "See who's viewing, saving, and visiting your location in real time.",
        icon: "📊"
    },
    {
        num: "06",
        title: "Launch Campaigns",
        desc: "Combine all tools into targeted campaigns that grow with your business.",
        icon: "🚀"
    }
];
const BIZ_PRICING = [
    {
        plan: "STARTER",
        price: "$49",
        desc: "Get your business on the map and start building a local following.",
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
        price: "$149",
        desc: "The full suite for businesses serious about owning their neighborhood.",
        features: [
            "Everything in Starter",
            "Unlimited events",
            "Go Live feature",
            "Advanced engagement analytics",
            "Creator collaboration tools",
            "Priority map visibility",
            "Promotional boost (3/month)",
            "Review & rating management"
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
            "Branded city campaign tools",
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
        a: "Claiming your location means creating an official business profile linked to your real-world address. It appears as a branded pin on the VibeCircle map, and users can check in, leave reviews, and share content tagged to your venue."
    },
    {
        q: "Can I manage multiple locations?",
        a: "Yes. The Enterprise plan supports multi-location management through a unified dashboard. Ideal for chains, franchises, and multi-venue operators."
    },
    {
        q: "How does the Go Live feature work for businesses?",
        a: "When you go live, your stream appears as a pulsing pin on the map for nearby users. It's perfect for previewing tonight's event, showcasing a new menu item, or capturing a special moment in your venue."
    },
    {
        q: "How do I collaborate with creators?",
        a: "On Growth and Enterprise plans, you can browse creators who have checked in to your location or tagged you in their content. You can then invite them to official partnerships or send them collaboration proposals directly."
    },
    {
        q: "Is there a setup fee?",
        a: "No setup fees. You can claim your location and go live the same day you sign up."
    },
    {
        q: "Can I try it before committing?",
        a: "Growth plan comes with a 14-day free trial, no credit card required. The Starter plan is available month-to-month with no lock-in."
    }
];
function BusinessPage() {
    const [active, setActive] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])(0);
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(PageShell, {
        current: "Business",
        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            style: {
                background: C.bg,
                color: C.white
            },
            children: [
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(PageHero, {
                    tag: "VibeCircle for Business",
                    title: "Turn foot traffic into",
                    accent: "digital gravity.",
                    sub: "When your location pulses on the map, people don't just see you — they find you."
                }, void 0, false, {
                    fileName: "[project]/components/VibeCirclePages.jsx",
                    lineNumber: 875,
                    columnNumber: 7
                }, this),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(Divider, {}, void 0, false, {
                    fileName: "[project]/components/VibeCirclePages.jsx",
                    lineNumber: 876,
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
                                    marginBottom: "56px"
                                },
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(Tag, {
                                        children: "Business Tools"
                                    }, void 0, false, {
                                        fileName: "[project]/components/VibeCirclePages.jsx",
                                        lineNumber: 880,
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
                                            "Everything you need",
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("br", {}, void 0, false, {
                                                fileName: "[project]/components/VibeCirclePages.jsx",
                                                lineNumber: 880,
                                                columnNumber: 220
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                style: {
                                                    color: C.orange
                                                },
                                                children: "in one place."
                                            }, void 0, false, {
                                                fileName: "[project]/components/VibeCirclePages.jsx",
                                                lineNumber: 880,
                                                columnNumber: 225
                                            }, this)
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/components/VibeCirclePages.jsx",
                                        lineNumber: 880,
                                        columnNumber: 74
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/components/VibeCirclePages.jsx",
                                lineNumber: 880,
                                columnNumber: 11
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                style: {
                                    display: "grid",
                                    gridTemplateColumns: "1fr 1.4fr",
                                    gap: "28px"
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
                                                    padding: "18px 22px",
                                                    background: active === i ? "rgba(255,107,0,0.1)" : "rgba(255,255,255,0.02)",
                                                    border: `1px solid ${active === i ? C.orange + "60" : "rgba(255,255,255,0.06)"}`,
                                                    borderRadius: "4px",
                                                    display: "flex",
                                                    alignItems: "center",
                                                    gap: "14px",
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
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                        style: {
                                                            fontSize: "17px"
                                                        },
                                                        children: t.icon
                                                    }, void 0, false, {
                                                        fileName: "[project]/components/VibeCirclePages.jsx",
                                                        lineNumber: 888,
                                                        columnNumber: 19
                                                    }, this),
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                        style: {
                                                            flex: 1
                                                        },
                                                        children: [
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                                style: {
                                                                    fontFamily: "'Bebas Neue',sans-serif",
                                                                    fontSize: "16px",
                                                                    color: active === i ? C.orange : C.white,
                                                                    letterSpacing: ".5px"
                                                                },
                                                                children: t.title
                                                            }, void 0, false, {
                                                                fileName: "[project]/components/VibeCirclePages.jsx",
                                                                lineNumber: 890,
                                                                columnNumber: 21
                                                            }, this),
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                                style: {
                                                                    fontFamily: "'DM Sans',sans-serif",
                                                                    fontSize: "10px",
                                                                    letterSpacing: "2px",
                                                                    color: C.dimmer,
                                                                    textTransform: "uppercase",
                                                                    marginTop: "2px"
                                                                },
                                                                children: t.num
                                                            }, void 0, false, {
                                                                fileName: "[project]/components/VibeCirclePages.jsx",
                                                                lineNumber: 891,
                                                                columnNumber: 21
                                                            }, this)
                                                        ]
                                                    }, void 0, true, {
                                                        fileName: "[project]/components/VibeCirclePages.jsx",
                                                        lineNumber: 889,
                                                        columnNumber: 19
                                                    }, this),
                                                    active === i && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                        style: {
                                                            color: C.orange,
                                                            fontSize: "14px"
                                                        },
                                                        children: "→"
                                                    }, void 0, false, {
                                                        fileName: "[project]/components/VibeCirclePages.jsx",
                                                        lineNumber: 893,
                                                        columnNumber: 32
                                                    }, this)
                                                ]
                                            }, i, true, {
                                                fileName: "[project]/components/VibeCirclePages.jsx",
                                                lineNumber: 884,
                                                columnNumber: 17
                                            }, this))
                                    }, void 0, false, {
                                        fileName: "[project]/components/VibeCirclePages.jsx",
                                        lineNumber: 882,
                                        columnNumber: 13
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        style: {
                                            padding: "44px",
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
                                                lineNumber: 898,
                                                columnNumber: 15
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                style: {
                                                    fontSize: "44px",
                                                    marginBottom: "20px"
                                                },
                                                children: BIZ_TOOLS[active].icon
                                            }, void 0, false, {
                                                fileName: "[project]/components/VibeCirclePages.jsx",
                                                lineNumber: 899,
                                                columnNumber: 15
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                style: {
                                                    fontFamily: "'Bebas Neue',sans-serif",
                                                    fontSize: "clamp(24px,3vw,40px)",
                                                    color: C.orange,
                                                    lineHeight: 1,
                                                    marginBottom: "16px"
                                                },
                                                children: BIZ_TOOLS[active].title
                                            }, void 0, false, {
                                                fileName: "[project]/components/VibeCirclePages.jsx",
                                                lineNumber: 900,
                                                columnNumber: 15
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                style: {
                                                    fontFamily: "'DM Sans',sans-serif",
                                                    fontSize: "17px",
                                                    color: C.dim,
                                                    lineHeight: 1.8,
                                                    marginBottom: "28px"
                                                },
                                                children: BIZ_TOOLS[active].desc
                                            }, void 0, false, {
                                                fileName: "[project]/components/VibeCirclePages.jsx",
                                                lineNumber: 901,
                                                columnNumber: 15
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
                                                lineNumber: 902,
                                                columnNumber: 15
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                style: {
                                                    fontFamily: "'DM Sans',sans-serif",
                                                    fontSize: "12px",
                                                    color: C.dimmer,
                                                    marginTop: "18px"
                                                },
                                                children: [
                                                    "Tool ",
                                                    BIZ_TOOLS[active].num,
                                                    " of 06"
                                                ]
                                            }, void 0, true, {
                                                fileName: "[project]/components/VibeCirclePages.jsx",
                                                lineNumber: 903,
                                                columnNumber: 15
                                            }, this)
                                        ]
                                    }, active, true, {
                                        fileName: "[project]/components/VibeCirclePages.jsx",
                                        lineNumber: 897,
                                        columnNumber: 13
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/components/VibeCirclePages.jsx",
                                lineNumber: 881,
                                columnNumber: 11
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/components/VibeCirclePages.jsx",
                        lineNumber: 879,
                        columnNumber: 9
                    }, this)
                }, void 0, false, {
                    fileName: "[project]/components/VibeCirclePages.jsx",
                    lineNumber: 878,
                    columnNumber: 7
                }, this),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(Divider, {}, void 0, false, {
                    fileName: "[project]/components/VibeCirclePages.jsx",
                    lineNumber: 908,
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
                                    marginBottom: "56px",
                                    textAlign: "center"
                                },
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(Tag, {
                                        children: "Business Plans"
                                    }, void 0, false, {
                                        fileName: "[project]/components/VibeCirclePages.jsx",
                                        lineNumber: 912,
                                        columnNumber: 68
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
                                            "Choose your level of",
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("br", {}, void 0, false, {
                                                fileName: "[project]/components/VibeCirclePages.jsx",
                                                lineNumber: 912,
                                                columnNumber: 240
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                style: {
                                                    color: C.orange
                                                },
                                                children: "gravity."
                                            }, void 0, false, {
                                                fileName: "[project]/components/VibeCirclePages.jsx",
                                                lineNumber: 912,
                                                columnNumber: 245
                                            }, this)
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/components/VibeCirclePages.jsx",
                                        lineNumber: 912,
                                        columnNumber: 93
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/components/VibeCirclePages.jsx",
                                lineNumber: 912,
                                columnNumber: 11
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "grid-3",
                                children: BIZ_PRICING.map((p, i)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(PricingCard, {
                                        ...p
                                    }, i, false, {
                                        fileName: "[project]/components/VibeCirclePages.jsx",
                                        lineNumber: 913,
                                        columnNumber: 59
                                    }, this))
                            }, void 0, false, {
                                fileName: "[project]/components/VibeCirclePages.jsx",
                                lineNumber: 913,
                                columnNumber: 11
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/components/VibeCirclePages.jsx",
                        lineNumber: 911,
                        columnNumber: 9
                    }, this)
                }, void 0, false, {
                    fileName: "[project]/components/VibeCirclePages.jsx",
                    lineNumber: 910,
                    columnNumber: 7
                }, this),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(Divider, {}, void 0, false, {
                    fileName: "[project]/components/VibeCirclePages.jsx",
                    lineNumber: 916,
                    columnNumber: 7
                }, this),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("section", {
                    className: "sec-pad",
                    style: {
                        background: C.bg2,
                        overflow: "hidden",
                        position: "relative"
                    },
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(Orb, {
                            bottom: "-10%",
                            left: "30%",
                            size: 500,
                            color: C.pink,
                            opacity: 0.07,
                            delay: "1s"
                        }, void 0, false, {
                            fileName: "[project]/components/VibeCirclePages.jsx",
                            lineNumber: 919,
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
                                        marginBottom: "56px"
                                    },
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(Tag, {
                                            children: "How It Works"
                                        }, void 0, false, {
                                            fileName: "[project]/components/VibeCirclePages.jsx",
                                            lineNumber: 921,
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
                                                "Three steps to",
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("br", {}, void 0, false, {
                                                    fileName: "[project]/components/VibeCirclePages.jsx",
                                                    lineNumber: 921,
                                                    columnNumber: 213
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                    style: {
                                                        color: C.orange
                                                    },
                                                    children: "becoming a vibe."
                                                }, void 0, false, {
                                                    fileName: "[project]/components/VibeCirclePages.jsx",
                                                    lineNumber: 921,
                                                    columnNumber: 218
                                                }, this)
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/components/VibeCirclePages.jsx",
                                            lineNumber: 921,
                                            columnNumber: 72
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/components/VibeCirclePages.jsx",
                                    lineNumber: 921,
                                    columnNumber: 11
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "grid-3",
                                    style: {
                                        gap: "2px"
                                    },
                                    children: [
                                        [
                                            "1",
                                            "Claim & Set Up",
                                            "Register your business, claim your location on the map, and customize your profile to reflect your brand's energy."
                                        ],
                                        [
                                            "2",
                                            "Activate & Broadcast",
                                            "Launch promotions, create events, go live, and start sending your energy out into the city ecosystem."
                                        ],
                                        [
                                            "3",
                                            "Grow & Measure",
                                            "Watch engagement climb. Track real-world foot traffic. Iterate with real-time data and keep your vibe growing."
                                        ]
                                    ].map((s, i)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(Reveal, {
                                            delay: i * .15,
                                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                style: {
                                                    padding: "44px 32px",
                                                    background: i === 1 ? "rgba(255,107,0,0.06)" : "rgba(255,255,255,0.02)",
                                                    border: i === 1 ? `1px solid ${C.orange}40` : "1px solid rgba(255,255,255,0.06)",
                                                    height: "100%"
                                                },
                                                children: [
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                        style: {
                                                            fontFamily: "'Bebas Neue',sans-serif",
                                                            fontSize: "60px",
                                                            color: i === 1 ? C.orange : "rgba(255,255,255,0.08)",
                                                            lineHeight: 1,
                                                            marginBottom: "18px"
                                                        },
                                                        children: s[0]
                                                    }, void 0, false, {
                                                        fileName: "[project]/components/VibeCirclePages.jsx",
                                                        lineNumber: 926,
                                                        columnNumber: 19
                                                    }, this),
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                        style: {
                                                            fontFamily: "'Bebas Neue',sans-serif",
                                                            fontSize: "22px",
                                                            color: C.white,
                                                            marginBottom: "14px"
                                                        },
                                                        children: s[1]
                                                    }, void 0, false, {
                                                        fileName: "[project]/components/VibeCirclePages.jsx",
                                                        lineNumber: 927,
                                                        columnNumber: 19
                                                    }, this),
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                        style: {
                                                            fontFamily: "'DM Sans',sans-serif",
                                                            fontSize: "14px",
                                                            color: C.dim,
                                                            lineHeight: 1.7
                                                        },
                                                        children: s[2]
                                                    }, void 0, false, {
                                                        fileName: "[project]/components/VibeCirclePages.jsx",
                                                        lineNumber: 928,
                                                        columnNumber: 19
                                                    }, this)
                                                ]
                                            }, void 0, true, {
                                                fileName: "[project]/components/VibeCirclePages.jsx",
                                                lineNumber: 925,
                                                columnNumber: 17
                                            }, this)
                                        }, i, false, {
                                            fileName: "[project]/components/VibeCirclePages.jsx",
                                            lineNumber: 924,
                                            columnNumber: 15
                                        }, this))
                                }, void 0, false, {
                                    fileName: "[project]/components/VibeCirclePages.jsx",
                                    lineNumber: 922,
                                    columnNumber: 11
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "[project]/components/VibeCirclePages.jsx",
                            lineNumber: 920,
                            columnNumber: 9
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "[project]/components/VibeCirclePages.jsx",
                    lineNumber: 918,
                    columnNumber: 7
                }, this),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(Divider, {}, void 0, false, {
                    fileName: "[project]/components/VibeCirclePages.jsx",
                    lineNumber: 935,
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
                                    marginBottom: "48px"
                                },
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(Tag, {
                                        children: "Business FAQ"
                                    }, void 0, false, {
                                        fileName: "[project]/components/VibeCirclePages.jsx",
                                        lineNumber: 939,
                                        columnNumber: 49
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("h2", {
                                        style: {
                                            fontFamily: "'Bebas Neue',sans-serif",
                                            fontSize: "clamp(28px,4vw,48px)",
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
                                                lineNumber: 939,
                                                columnNumber: 219
                                            }, this)
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/components/VibeCirclePages.jsx",
                                        lineNumber: 939,
                                        columnNumber: 72
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/components/VibeCirclePages.jsx",
                                lineNumber: 939,
                                columnNumber: 11
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(FAQ, {
                                items: BIZ_FAQS
                            }, void 0, false, {
                                fileName: "[project]/components/VibeCirclePages.jsx",
                                lineNumber: 940,
                                columnNumber: 11
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/components/VibeCirclePages.jsx",
                        lineNumber: 938,
                        columnNumber: 9
                    }, this)
                }, void 0, false, {
                    fileName: "[project]/components/VibeCirclePages.jsx",
                    lineNumber: 937,
                    columnNumber: 7
                }, this),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("section", {
                    className: "sec-pad-sm",
                    style: {
                        background: C.bg2
                    },
                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(Reveal, {
                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            style: {
                                maxWidth: "1100px",
                                margin: "0 auto",
                                padding: "52px 56px",
                                background: `linear-gradient(135deg,rgba(255,107,0,0.12) 0%,rgba(255,45,120,0.06) 100%)`,
                                border: `1px solid ${C.orange}25`,
                                borderRadius: "4px",
                                display: "flex",
                                alignItems: "center",
                                justifyContent: "space-between",
                                gap: "28px",
                                flexWrap: "wrap"
                            },
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    style: {
                                        fontFamily: "'Bebas Neue',sans-serif",
                                        fontSize: "clamp(26px,4vw,46px)",
                                        color: C.white,
                                        lineHeight: 1
                                    },
                                    children: [
                                        "Ready to make your",
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("br", {}, void 0, false, {
                                            fileName: "[project]/components/VibeCirclePages.jsx",
                                            lineNumber: 947,
                                            columnNumber: 142
                                        }, this),
                                        "location ",
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                            style: {
                                                color: C.orange
                                            },
                                            children: "pulse?"
                                        }, void 0, false, {
                                            fileName: "[project]/components/VibeCirclePages.jsx",
                                            lineNumber: 947,
                                            columnNumber: 156
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/components/VibeCirclePages.jsx",
                                    lineNumber: 947,
                                    columnNumber: 13
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    style: {
                                        display: "flex",
                                        gap: "14px",
                                        flexWrap: "wrap"
                                    },
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                            style: {
                                                fontFamily: "'Bebas Neue',sans-serif",
                                                fontSize: "14px",
                                                letterSpacing: "3px",
                                                padding: "14px 36px",
                                                background: C.orange,
                                                color: C.bg,
                                                border: "none",
                                                borderRadius: "2px",
                                                cursor: "pointer",
                                                transition: "box-shadow .2s"
                                            },
                                            onMouseEnter: (e)=>e.target.style.boxShadow = `0 12px 40px ${C.orange}40`,
                                            onMouseLeave: (e)=>e.target.style.boxShadow = "none",
                                            children: "Get Started Free"
                                        }, void 0, false, {
                                            fileName: "[project]/components/VibeCirclePages.jsx",
                                            lineNumber: 949,
                                            columnNumber: 15
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                            style: {
                                                fontFamily: "'Bebas Neue',sans-serif",
                                                fontSize: "14px",
                                                letterSpacing: "3px",
                                                padding: "14px 36px",
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
                                            lineNumber: 950,
                                            columnNumber: 15
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/components/VibeCirclePages.jsx",
                                    lineNumber: 948,
                                    columnNumber: 13
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "[project]/components/VibeCirclePages.jsx",
                            lineNumber: 946,
                            columnNumber: 11
                        }, this)
                    }, void 0, false, {
                        fileName: "[project]/components/VibeCirclePages.jsx",
                        lineNumber: 945,
                        columnNumber: 9
                    }, this)
                }, void 0, false, {
                    fileName: "[project]/components/VibeCirclePages.jsx",
                    lineNumber: 944,
                    columnNumber: 7
                }, this)
            ]
        }, void 0, true, {
            fileName: "[project]/components/VibeCirclePages.jsx",
            lineNumber: 874,
            columnNumber: 7
        }, this)
    }, void 0, false, {
        fileName: "[project]/components/VibeCirclePages.jsx",
        lineNumber: 873,
        columnNumber: 5
    }, this);
}
// ══════════════════════════════════════════════════════════════════════════════
// JOBS PAGE
// ══════════════════════════════════════════════════════════════════════════════
const ROLES = [
    {
        title: "Frontend Engineer",
        dept: "Engineering",
        type: "Full-Time",
        level: "Mid–Senior",
        desc: "Build the interfaces that make cities feel alive. React, TypeScript, WebGL, Maps APIs."
    },
    {
        title: "Backend Engineer",
        dept: "Engineering",
        type: "Full-Time",
        level: "Mid–Senior",
        desc: "Power the infrastructure for real-time social discovery at city scale."
    },
    {
        title: "UX Designer",
        dept: "Design",
        type: "Full-Time",
        level: "Mid",
        desc: "Design experiences that feel as alive as the cities we're mapping."
    },
    {
        title: "Growth Marketer",
        dept: "Marketing",
        type: "Full-Time",
        level: "Mid",
        desc: "Own the growth loops that bring creators, cities, and businesses onto the platform."
    },
    {
        title: "Campus Ambassador",
        dept: "Community",
        type: "Part-Time",
        level: "Entry",
        desc: "Be the pulse of VibeCircle on your campus. Drive organic growth from the ground up."
    },
    {
        title: "Creator Partnership Intern",
        dept: "Creators",
        type: "Internship",
        level: "Entry",
        desc: "Help onboard and support the creator ecosystem that powers VibeCircle's energy."
    },
    {
        title: "Data Engineer",
        dept: "Engineering",
        type: "Full-Time",
        level: "Senior",
        desc: "Build the data pipelines and real-time analytics infrastructure behind the living city map."
    },
    {
        title: "Brand Partnerships Manager",
        dept: "Business",
        type: "Full-Time",
        level: "Mid–Senior",
        desc: "Grow VibeCircle's brand marketplace by signing and managing top-tier brand deals."
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
const PERKS = [
    {
        icon: "🏛️",
        title: "Real Ownership",
        desc: "Every role carries real responsibility. No busywork, no hand-holding."
    },
    {
        icon: "💎",
        title: "Equity Opportunities",
        desc: "Build something you co-own. Equity offered across all full-time roles."
    },
    {
        icon: "🌍",
        title: "Meaningful Impact",
        desc: "Your work shapes how cities move. Every line of code matters."
    },
    {
        icon: "⚡",
        title: "Move Fast",
        desc: "We ship, we learn, we iterate. No corporate slowdown."
    }
];
const JOBS_FAQS = [
    {
        q: "Where is VibeCircle based?",
        a: "We're remote-first with team members in New York, Atlanta, Los Angeles, Chicago, and London. We believe you should work from the cities you're building for."
    },
    {
        q: "Do you offer visa sponsorship?",
        a: "Currently we can sponsor H-1B visas for qualifying senior engineering and design roles in the US. Contact careers@vibecircle.com for details."
    },
    {
        q: "What does the interview process look like?",
        a: "Typically 4 stages: intro call (30 min), portfolio/skills review, take-home project (2–4 hours), and a final team interview. We aim to complete the process within 2 weeks."
    },
    {
        q: "Are internships paid?",
        a: "Yes. All internships are paid. Creator Partnership and Marketing interns receive $20–25/hr depending on location."
    },
    {
        q: "I don't see a role that fits. Can I still apply?",
        a: "Absolutely. Send your story, a few lines on what you'd build, and your portfolio to careers@vibecircle.com. We've created roles for exceptional people who didn't fit any existing job description."
    }
];
function JobsPage() {
    const [filter, setFilter] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])("All");
    const [expanded, setExpanded] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])(null);
    const depts = [
        "All",
        ...Object.keys(DEPT_COLORS)
    ];
    const filtered = filter === "All" ? ROLES : ROLES.filter((r)=>r.dept === filter);
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(PageShell, {
        current: "Jobs",
        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            style: {
                background: C.bg,
                color: C.white
            },
            children: [
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(PageHero, {
                    tag: "Careers",
                    title: "We don't hire for roles.",
                    accent: "We hire builders.",
                    sub: "Ambitious, fast-moving, impact-driven. Join a team building infrastructure for modern city culture."
                }, void 0, false, {
                    fileName: "[project]/components/VibeCirclePages.jsx",
                    lineNumber: 996,
                    columnNumber: 7
                }, this),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(Divider, {}, void 0, false, {
                    fileName: "[project]/components/VibeCirclePages.jsx",
                    lineNumber: 997,
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
                                    marginBottom: "48px"
                                },
                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(Tag, {
                                    children: "What You Get"
                                }, void 0, false, {
                                    fileName: "[project]/components/VibeCirclePages.jsx",
                                    lineNumber: 1001,
                                    columnNumber: 49
                                }, this)
                            }, void 0, false, {
                                fileName: "[project]/components/VibeCirclePages.jsx",
                                lineNumber: 1001,
                                columnNumber: 11
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "grid-4",
                                children: PERKS.map((p, i)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(Reveal, {
                                        delay: i * .1,
                                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            style: {
                                                padding: "32px 24px",
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
                                                        fontSize: "26px",
                                                        marginBottom: "14px"
                                                    },
                                                    children: p.icon
                                                }, void 0, false, {
                                                    fileName: "[project]/components/VibeCirclePages.jsx",
                                                    lineNumber: 1009,
                                                    columnNumber: 19
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                    style: {
                                                        fontFamily: "'Bebas Neue',sans-serif",
                                                        fontSize: "19px",
                                                        color: C.white,
                                                        marginBottom: "10px"
                                                    },
                                                    children: p.title
                                                }, void 0, false, {
                                                    fileName: "[project]/components/VibeCirclePages.jsx",
                                                    lineNumber: 1010,
                                                    columnNumber: 19
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                    style: {
                                                        fontFamily: "'DM Sans',sans-serif",
                                                        fontSize: "13px",
                                                        color: C.dim,
                                                        lineHeight: 1.7
                                                    },
                                                    children: p.desc
                                                }, void 0, false, {
                                                    fileName: "[project]/components/VibeCirclePages.jsx",
                                                    lineNumber: 1011,
                                                    columnNumber: 19
                                                }, this)
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/components/VibeCirclePages.jsx",
                                            lineNumber: 1005,
                                            columnNumber: 17
                                        }, this)
                                    }, i, false, {
                                        fileName: "[project]/components/VibeCirclePages.jsx",
                                        lineNumber: 1004,
                                        columnNumber: 15
                                    }, this))
                            }, void 0, false, {
                                fileName: "[project]/components/VibeCirclePages.jsx",
                                lineNumber: 1002,
                                columnNumber: 11
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/components/VibeCirclePages.jsx",
                        lineNumber: 1000,
                        columnNumber: 9
                    }, this)
                }, void 0, false, {
                    fileName: "[project]/components/VibeCirclePages.jsx",
                    lineNumber: 999,
                    columnNumber: 7
                }, this),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(Divider, {}, void 0, false, {
                    fileName: "[project]/components/VibeCirclePages.jsx",
                    lineNumber: 1018,
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
                            lineNumber: 1021,
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
                                        marginBottom: "40px"
                                    },
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(Tag, {
                                            children: "Open Roles"
                                        }, void 0, false, {
                                            fileName: "[project]/components/VibeCirclePages.jsx",
                                            lineNumber: 1023,
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
                                                "Find your position",
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("br", {}, void 0, false, {
                                                    fileName: "[project]/components/VibeCirclePages.jsx",
                                                    lineNumber: 1023,
                                                    columnNumber: 215
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                    style: {
                                                        color: C.orange
                                                    },
                                                    children: "in the vibe."
                                                }, void 0, false, {
                                                    fileName: "[project]/components/VibeCirclePages.jsx",
                                                    lineNumber: 1023,
                                                    columnNumber: 220
                                                }, this)
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/components/VibeCirclePages.jsx",
                                            lineNumber: 1023,
                                            columnNumber: 70
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/components/VibeCirclePages.jsx",
                                    lineNumber: 1023,
                                    columnNumber: 11
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    style: {
                                        display: "flex",
                                        gap: "8px",
                                        flexWrap: "wrap",
                                        marginBottom: "36px"
                                    },
                                    children: depts.map((d)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                            onClick: ()=>setFilter(d),
                                            style: {
                                                fontFamily: "'Bebas Neue',sans-serif",
                                                fontSize: "12px",
                                                letterSpacing: "2px",
                                                padding: "8px 18px",
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
                                            lineNumber: 1026,
                                            columnNumber: 15
                                        }, this))
                                }, void 0, false, {
                                    fileName: "[project]/components/VibeCirclePages.jsx",
                                    lineNumber: 1024,
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
                                        return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(Reveal, {
                                            delay: i * .06,
                                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                style: {
                                                    background: isOpen ? `${dc}0A` : "rgba(255,255,255,0.02)",
                                                    border: `1px solid ${isOpen ? dc + "50" : "rgba(255,255,255,0.07)"}`,
                                                    borderRadius: "4px",
                                                    overflow: "hidden",
                                                    transition: "all .3s"
                                                },
                                                children: [
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                        onClick: ()=>setExpanded(isOpen ? null : i),
                                                        style: {
                                                            padding: "22px 28px",
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
                                                                            color: C.white
                                                                        },
                                                                        children: role.title
                                                                    }, void 0, false, {
                                                                        fileName: "[project]/components/VibeCirclePages.jsx",
                                                                        lineNumber: 1038,
                                                                        columnNumber: 25
                                                                    }, this),
                                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                                        style: {
                                                                            display: "flex",
                                                                            gap: "10px",
                                                                            marginTop: "4px",
                                                                            flexWrap: "wrap",
                                                                            alignItems: "center"
                                                                        },
                                                                        children: [
                                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                                                style: {
                                                                                    fontFamily: "'Bebas Neue',sans-serif",
                                                                                    fontSize: "10px",
                                                                                    letterSpacing: "2px",
                                                                                    color: dc
                                                                                },
                                                                                children: role.dept
                                                                            }, void 0, false, {
                                                                                fileName: "[project]/components/VibeCirclePages.jsx",
                                                                                lineNumber: 1040,
                                                                                columnNumber: 27
                                                                            }, this),
                                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                                                style: {
                                                                                    fontFamily: "'DM Sans',sans-serif",
                                                                                    fontSize: "11px",
                                                                                    color: C.dimmer
                                                                                },
                                                                                children: [
                                                                                    "· ",
                                                                                    role.type,
                                                                                    " · ",
                                                                                    role.level
                                                                                ]
                                                                            }, void 0, true, {
                                                                                fileName: "[project]/components/VibeCirclePages.jsx",
                                                                                lineNumber: 1041,
                                                                                columnNumber: 27
                                                                            }, this)
                                                                        ]
                                                                    }, void 0, true, {
                                                                        fileName: "[project]/components/VibeCirclePages.jsx",
                                                                        lineNumber: 1039,
                                                                        columnNumber: 25
                                                                    }, this)
                                                                ]
                                                            }, void 0, true, {
                                                                fileName: "[project]/components/VibeCirclePages.jsx",
                                                                lineNumber: 1037,
                                                                columnNumber: 23
                                                            }, this),
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                                style: {
                                                                    width: "28px",
                                                                    height: "28px",
                                                                    border: `1px solid ${isOpen ? dc : "rgba(255,255,255,0.12)"}`,
                                                                    borderRadius: "50%",
                                                                    display: "flex",
                                                                    alignItems: "center",
                                                                    justifyContent: "center",
                                                                    color: isOpen ? dc : C.dimmer,
                                                                    fontSize: "16px",
                                                                    transition: "all .3s",
                                                                    transform: isOpen ? "rotate(45deg)" : "none",
                                                                    flexShrink: 0
                                                                },
                                                                children: "+"
                                                            }, void 0, false, {
                                                                fileName: "[project]/components/VibeCirclePages.jsx",
                                                                lineNumber: 1044,
                                                                columnNumber: 23
                                                            }, this)
                                                        ]
                                                    }, void 0, true, {
                                                        fileName: "[project]/components/VibeCirclePages.jsx",
                                                        lineNumber: 1036,
                                                        columnNumber: 21
                                                    }, this),
                                                    isOpen && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                        style: {
                                                            padding: "0 28px 28px",
                                                            animation: "fadeUp .3s ease"
                                                        },
                                                        children: [
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                                style: {
                                                                    height: "1px",
                                                                    background: `${dc}30`,
                                                                    marginBottom: "20px"
                                                                }
                                                            }, void 0, false, {
                                                                fileName: "[project]/components/VibeCirclePages.jsx",
                                                                lineNumber: 1048,
                                                                columnNumber: 25
                                                            }, this),
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                                style: {
                                                                    fontFamily: "'DM Sans',sans-serif",
                                                                    fontSize: "15px",
                                                                    color: C.dim,
                                                                    lineHeight: 1.8,
                                                                    marginBottom: "24px"
                                                                },
                                                                children: role.desc
                                                            }, void 0, false, {
                                                                fileName: "[project]/components/VibeCirclePages.jsx",
                                                                lineNumber: 1049,
                                                                columnNumber: 25
                                                            }, this),
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                                                style: {
                                                                    fontFamily: "'Bebas Neue',sans-serif",
                                                                    fontSize: "13px",
                                                                    letterSpacing: "3px",
                                                                    padding: "12px 28px",
                                                                    background: dc,
                                                                    color: C.bg,
                                                                    border: "none",
                                                                    borderRadius: "2px",
                                                                    cursor: "pointer"
                                                                },
                                                                children: "Apply for This Role"
                                                            }, void 0, false, {
                                                                fileName: "[project]/components/VibeCirclePages.jsx",
                                                                lineNumber: 1050,
                                                                columnNumber: 25
                                                            }, this)
                                                        ]
                                                    }, void 0, true, {
                                                        fileName: "[project]/components/VibeCirclePages.jsx",
                                                        lineNumber: 1047,
                                                        columnNumber: 23
                                                    }, this)
                                                ]
                                            }, void 0, true, {
                                                fileName: "[project]/components/VibeCirclePages.jsx",
                                                lineNumber: 1035,
                                                columnNumber: 19
                                            }, this)
                                        }, role.title, false, {
                                            fileName: "[project]/components/VibeCirclePages.jsx",
                                            lineNumber: 1034,
                                            columnNumber: 17
                                        }, this);
                                    })
                                }, void 0, false, {
                                    fileName: "[project]/components/VibeCirclePages.jsx",
                                    lineNumber: 1029,
                                    columnNumber: 11
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "[project]/components/VibeCirclePages.jsx",
                            lineNumber: 1022,
                            columnNumber: 9
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "[project]/components/VibeCirclePages.jsx",
                    lineNumber: 1020,
                    columnNumber: 7
                }, this),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(Divider, {}, void 0, false, {
                    fileName: "[project]/components/VibeCirclePages.jsx",
                    lineNumber: 1060,
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
                                    marginBottom: "48px"
                                },
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(Tag, {
                                        children: "Hiring FAQ"
                                    }, void 0, false, {
                                        fileName: "[project]/components/VibeCirclePages.jsx",
                                        lineNumber: 1064,
                                        columnNumber: 49
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("h2", {
                                        style: {
                                            fontFamily: "'Bebas Neue',sans-serif",
                                            fontSize: "clamp(28px,4vw,46px)",
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
                                                lineNumber: 1064,
                                                columnNumber: 211
                                            }, this)
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/components/VibeCirclePages.jsx",
                                        lineNumber: 1064,
                                        columnNumber: 70
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/components/VibeCirclePages.jsx",
                                lineNumber: 1064,
                                columnNumber: 11
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(FAQ, {
                                items: JOBS_FAQS
                            }, void 0, false, {
                                fileName: "[project]/components/VibeCirclePages.jsx",
                                lineNumber: 1065,
                                columnNumber: 11
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/components/VibeCirclePages.jsx",
                        lineNumber: 1063,
                        columnNumber: 9
                    }, this)
                }, void 0, false, {
                    fileName: "[project]/components/VibeCirclePages.jsx",
                    lineNumber: 1062,
                    columnNumber: 7
                }, this),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("section", {
                    style: {
                        background: C.orange,
                        padding: "72px 64px"
                    },
                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        style: {
                            maxWidth: "1100px",
                            margin: "0 auto",
                            display: "flex",
                            alignItems: "center",
                            justifyContent: "space-between",
                            flexWrap: "wrap",
                            gap: "28px"
                        },
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        style: {
                                            fontFamily: "'Bebas Neue',sans-serif",
                                            fontSize: "clamp(26px,4vw,46px)",
                                            color: C.bg,
                                            lineHeight: 1
                                        },
                                        children: [
                                            "Don't see your role?",
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("br", {}, void 0, false, {
                                                fileName: "[project]/components/VibeCirclePages.jsx",
                                                lineNumber: 1071,
                                                columnNumber: 144
                                            }, this),
                                            "Build your own."
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/components/VibeCirclePages.jsx",
                                        lineNumber: 1071,
                                        columnNumber: 16
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                        style: {
                                            fontFamily: "'DM Sans',sans-serif",
                                            fontSize: "15px",
                                            color: "rgba(5,5,10,0.6)",
                                            marginTop: "10px"
                                        },
                                        children: "careers@vibecircle.com"
                                    }, void 0, false, {
                                        fileName: "[project]/components/VibeCirclePages.jsx",
                                        lineNumber: 1071,
                                        columnNumber: 170
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/components/VibeCirclePages.jsx",
                                lineNumber: 1071,
                                columnNumber: 11
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                style: {
                                    fontFamily: "'Bebas Neue',sans-serif",
                                    fontSize: "15px",
                                    letterSpacing: "3px",
                                    padding: "16px 40px",
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
                                lineNumber: 1072,
                                columnNumber: 11
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/components/VibeCirclePages.jsx",
                        lineNumber: 1070,
                        columnNumber: 9
                    }, this)
                }, void 0, false, {
                    fileName: "[project]/components/VibeCirclePages.jsx",
                    lineNumber: 1069,
                    columnNumber: 7
                }, this)
            ]
        }, void 0, true, {
            fileName: "[project]/components/VibeCirclePages.jsx",
            lineNumber: 995,
            columnNumber: 7
        }, this)
    }, void 0, false, {
        fileName: "[project]/components/VibeCirclePages.jsx",
        lineNumber: 994,
        columnNumber: 5
    }, this);
}
// ══════════════════════════════════════════════════════════════════════════════
// MARKETPLACE PAGE
// ══════════════════════════════════════════════════════════════════════════════
const MARKETPLACE_BRANDS = [
    {
        id: 1,
        name: "NEON BREW CO.",
        category: "Food & Drink",
        budget: "$500–$2K",
        type: "Sponsored Post",
        location: "Nationwide",
        badge: "HOT",
        desc: "Indie craft energy drink brand built for the late-night creator. Looking for authentic city-based creators to showcase our cans in real environments.",
        tags: [
            "Nightlife",
            "Creators",
            "Urban"
        ],
        color: C.orange,
        slots: 12,
        filled: 8,
        logo: "🧃"
    },
    {
        id: 2,
        name: "APEX STREETWEAR",
        category: "Fashion",
        budget: "$1K–$5K",
        type: "Event Collab",
        location: "New York, LA, Chicago",
        badge: "FEATURED",
        desc: "Premium streetwear brand launching new drops via pop-up events. Looking for city-embedded creators and venue partners for co-branded experiences.",
        tags: [
            "Fashion",
            "Events",
            "Pop-up"
        ],
        color: C.pink,
        slots: 5,
        filled: 2,
        logo: "👟"
    },
    {
        id: 3,
        name: "PULSE FITNESS",
        category: "Health & Wellness",
        budget: "$300–$1.5K",
        type: "Campus Campaign",
        location: "Top 50 US Campuses",
        badge: "NEW",
        desc: "We're hitting campuses hard this semester. Need campus ambassadors and micro-influencers who can bring the energy to gyms, quads, and dorm halls.",
        tags: [
            "Campus",
            "Fitness",
            "Micro-Influencer"
        ],
        color: C.blue,
        slots: 40,
        filled: 14,
        logo: "⚡"
    },
    {
        id: 4,
        name: "MIRAGE NIGHTCLUB GROUP",
        category: "Entertainment",
        budget: "$2K–$10K",
        type: "Live Coverage",
        location: "Miami, Las Vegas, NYC",
        badge: "PREMIUM",
        desc: "3 of the hottest venues in the US need creators to capture the night in real time. Go live, post stories, and make the world FOMO from home.",
        tags: [
            "Nightlife",
            "Live",
            "Premium"
        ],
        color: C.purple,
        slots: 6,
        filled: 6,
        logo: "🎉"
    },
    {
        id: 5,
        name: "URBAN EATS COLLECTIVE",
        category: "Food & Drink",
        budget: "$200–$800",
        type: "Food Review",
        location: "All Cities",
        badge: null,
        desc: "A collective of independent restaurants looking for food creators to authentically review new menus and build local buzz on the VibeCircle map.",
        tags: [
            "Food",
            "Local",
            "Review"
        ],
        color: C.gold,
        slots: 30,
        filled: 11,
        logo: "🍜"
    },
    {
        id: 6,
        name: "CTRL AUDIO",
        category: "Tech",
        budget: "$800–$3K",
        type: "Creator Kit",
        location: "Remote + Events",
        badge: "NEW",
        desc: "Next-gen wireless earbuds for creators on the move. We send free gear kits and pay for authentic in-the-wild content — concerts, streets, studios.",
        tags: [
            "Tech",
            "Gear",
            "Creator"
        ],
        color: C.blue,
        slots: 20,
        filled: 7,
        logo: "🎧"
    },
    {
        id: 7,
        name: "NXXT LEVEL BARBERSHOP",
        category: "Beauty & Grooming",
        budget: "$150–$600",
        type: "Local Partnership",
        location: "Atlanta, Houston, Chicago",
        badge: null,
        desc: "Culture-forward barbershop chain looking for local city creators to showcase the shop's vibe and craft to their neighborhoods.",
        tags: [
            "Local",
            "Culture",
            "Beauty"
        ],
        color: C.orange,
        slots: 15,
        filled: 5,
        logo: "✂️"
    },
    {
        id: 8,
        name: "SOLSTICE FESTIVAL",
        category: "Events",
        budget: "$3K–$15K",
        type: "Festival Coverage",
        location: "Austin, TX",
        badge: "FEATURED",
        desc: "50,000 person music and culture festival needs a creator army. Full creative freedom. Apply for full access passes.",
        tags: [
            "Festival",
            "Music",
            "Events"
        ],
        color: C.pink,
        slots: 25,
        filled: 18,
        logo: "🎵"
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
        a: "Payments are processed through VibeCircle's secure escrow system. Once a brand approves your delivered content, payment is released within 3–5 business days. We support bank transfer, PayPal, and Venmo."
    },
    {
        q: "Is there a follower minimum to apply for deals?",
        a: "No follower minimum. Brands on VibeCircle care about city presence, authenticity, and engagement quality — not just follower counts. Micro-creators with 500 genuine local followers regularly land deals."
    },
    {
        q: "What happens if a brand ghosts me after I apply?",
        a: "Brands are contractually required to respond within 72 hours. If they don't, we automatically re-open the slot and follow up on your behalf. Repeated non-response can result in brand account suspension."
    },
    {
        q: "Can brands contact me directly?",
        a: "Yes. If a brand is on a Growth or Enterprise plan, they can send you a direct collaboration proposal based on your creator profile, even if you haven't applied to their deal."
    },
    {
        q: "How do I post a brand deal as a business?",
        a: "Switch to the 'I'm a Brand' tab, fill out the deal form, and submit for review. Deals typically go live within 24 hours after our team approves the campaign details."
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
                    marginBottom: "5px"
                },
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                        style: {
                            fontFamily: "'DM Sans',sans-serif",
                            fontSize: "11px",
                            color: "rgba(255,255,255,0.3)"
                        },
                        children: [
                            filled,
                            "/",
                            slots,
                            " slots"
                        ]
                    }, void 0, true, {
                        fileName: "[project]/components/VibeCirclePages.jsx",
                        lineNumber: 1109,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                        style: {
                            fontFamily: "'Bebas Neue',sans-serif",
                            fontSize: "11px",
                            letterSpacing: "2px",
                            color: full ? C.pink : color
                        },
                        children: full ? "FULL" : `${slots - filled} LEFT`
                    }, void 0, false, {
                        fileName: "[project]/components/VibeCirclePages.jsx",
                        lineNumber: 1110,
                        columnNumber: 9
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/components/VibeCirclePages.jsx",
                lineNumber: 1108,
                columnNumber: 7
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
                    lineNumber: 1113,
                    columnNumber: 9
                }, this)
            }, void 0, false, {
                fileName: "[project]/components/VibeCirclePages.jsx",
                lineNumber: 1112,
                columnNumber: 7
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/components/VibeCirclePages.jsx",
        lineNumber: 1107,
        columnNumber: 5
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
            padding: "26px",
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
                    width: 100,
                    height: 100,
                    background: `radial-gradient(circle at top right,${brand.color}15,transparent 70%)`,
                    pointerEvents: "none"
                }
            }, void 0, false, {
                fileName: "[project]/components/VibeCirclePages.jsx",
                lineNumber: 1123,
                columnNumber: 11
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                style: {
                    display: "flex",
                    alignItems: "flex-start",
                    justifyContent: "space-between",
                    marginBottom: "14px"
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
                                    width: "40px",
                                    height: "40px",
                                    borderRadius: "4px",
                                    background: `${brand.color}18`,
                                    border: `1px solid ${brand.color}30`,
                                    display: "flex",
                                    alignItems: "center",
                                    justifyContent: "center",
                                    fontSize: "18px"
                                },
                                children: brand.logo
                            }, void 0, false, {
                                fileName: "[project]/components/VibeCirclePages.jsx",
                                lineNumber: 1126,
                                columnNumber: 11
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        style: {
                                            fontFamily: "'Bebas Neue',sans-serif",
                                            fontSize: "15px",
                                            color: C.white,
                                            letterSpacing: ".5px"
                                        },
                                        children: brand.name
                                    }, void 0, false, {
                                        fileName: "[project]/components/VibeCirclePages.jsx",
                                        lineNumber: 1128,
                                        columnNumber: 13
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        style: {
                                            fontFamily: "'DM Sans',sans-serif",
                                            fontSize: "10px",
                                            color: "rgba(255,255,255,0.3)",
                                            letterSpacing: "1px",
                                            textTransform: "uppercase",
                                            marginTop: "1px"
                                        },
                                        children: brand.category
                                    }, void 0, false, {
                                        fileName: "[project]/components/VibeCirclePages.jsx",
                                        lineNumber: 1129,
                                        columnNumber: 13
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/components/VibeCirclePages.jsx",
                                lineNumber: 1127,
                                columnNumber: 11
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/components/VibeCirclePages.jsx",
                        lineNumber: 1125,
                        columnNumber: 9
                    }, this),
                    brand.badge && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                        style: {
                            fontFamily: "'Bebas Neue',sans-serif",
                            fontSize: "10px",
                            letterSpacing: "2px",
                            padding: "3px 9px",
                            borderRadius: "2px",
                            background: `${BADGE_COLORS[brand.badge]}22`,
                            border: `1px solid ${BADGE_COLORS[brand.badge]}60`,
                            color: BADGE_COLORS[brand.badge],
                            flexShrink: 0
                        },
                        children: brand.badge
                    }, void 0, false, {
                        fileName: "[project]/components/VibeCirclePages.jsx",
                        lineNumber: 1132,
                        columnNumber: 23
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/components/VibeCirclePages.jsx",
                lineNumber: 1124,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                style: {
                    fontFamily: "'DM Sans',sans-serif",
                    fontSize: "13px",
                    color: C.dim,
                    lineHeight: 1.7,
                    flex: 1,
                    marginBottom: "14px"
                },
                children: brand.desc
            }, void 0, false, {
                fileName: "[project]/components/VibeCirclePages.jsx",
                lineNumber: 1134,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                style: {
                    display: "flex",
                    gap: "5px",
                    flexWrap: "wrap",
                    marginBottom: "14px"
                },
                children: brand.tags.map((t)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                        style: {
                            fontFamily: "'DM Sans',sans-serif",
                            fontSize: "10px",
                            color: "rgba(255,255,255,0.35)",
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
                        lineNumber: 1136,
                        columnNumber: 28
                    }, this))
            }, void 0, false, {
                fileName: "[project]/components/VibeCirclePages.jsx",
                lineNumber: 1135,
                columnNumber: 7
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
                            gap: "14px"
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
                                        lineNumber: 1140,
                                        columnNumber: 16
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        style: {
                                            fontFamily: "'DM Sans',sans-serif",
                                            fontSize: "9px",
                                            color: "rgba(255,255,255,0.25)",
                                            textTransform: "uppercase",
                                            letterSpacing: "1px"
                                        },
                                        children: "Budget"
                                    }, void 0, false, {
                                        fileName: "[project]/components/VibeCirclePages.jsx",
                                        lineNumber: 1140,
                                        columnNumber: 122
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/components/VibeCirclePages.jsx",
                                lineNumber: 1140,
                                columnNumber: 11
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
                                        lineNumber: 1141,
                                        columnNumber: 16
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        style: {
                                            fontFamily: "'DM Sans',sans-serif",
                                            fontSize: "9px",
                                            color: "rgba(255,255,255,0.25)",
                                            textTransform: "uppercase",
                                            letterSpacing: "1px"
                                        },
                                        children: "Type"
                                    }, void 0, false, {
                                        fileName: "[project]/components/VibeCirclePages.jsx",
                                        lineNumber: 1141,
                                        columnNumber: 116
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/components/VibeCirclePages.jsx",
                                lineNumber: 1141,
                                columnNumber: 11
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/components/VibeCirclePages.jsx",
                        lineNumber: 1139,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                        onClick: ()=>!full && onApply(brand),
                        style: {
                            fontFamily: "'Bebas Neue',sans-serif",
                            fontSize: "11px",
                            letterSpacing: "2px",
                            padding: "8px 16px",
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
                        lineNumber: 1143,
                        columnNumber: 9
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/components/VibeCirclePages.jsx",
                lineNumber: 1138,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(ProgressBar, {
                filled: brand.filled,
                slots: brand.slots,
                color: brand.color
            }, void 0, false, {
                fileName: "[project]/components/VibeCirclePages.jsx",
                lineNumber: 1145,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                style: {
                    display: "flex",
                    alignItems: "center",
                    gap: "5px",
                    marginTop: "10px"
                },
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                        style: {
                            fontSize: "10px"
                        },
                        children: "📍"
                    }, void 0, false, {
                        fileName: "[project]/components/VibeCirclePages.jsx",
                        lineNumber: 1147,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                        style: {
                            fontFamily: "'DM Sans',sans-serif",
                            fontSize: "10px",
                            color: "rgba(255,255,255,0.25)"
                        },
                        children: brand.location
                    }, void 0, false, {
                        fileName: "[project]/components/VibeCirclePages.jsx",
                        lineNumber: 1148,
                        columnNumber: 9
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/components/VibeCirclePages.jsx",
                lineNumber: 1146,
                columnNumber: 7
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/components/VibeCirclePages.jsx",
        lineNumber: 1122,
        columnNumber: 5
    }, this);
}
function ApplyModal({ brand, onClose }) {
    const [step, setStep] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])(1);
    const [form, setForm] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])({
        name: "",
        handle: "",
        city: "",
        audience: "",
        why: ""
    });
    if (!brand) return null;
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
                padding: "44px",
                maxWidth: "500px",
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
                        right: "20px",
                        background: "none",
                        border: "none",
                        color: C.dim,
                        fontSize: "20px",
                        cursor: "pointer"
                    },
                    children: "×"
                }, void 0, false, {
                    fileName: "[project]/components/VibeCirclePages.jsx",
                    lineNumber: 1160,
                    columnNumber: 9
                }, this),
                step === 1 ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Fragment"], {
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            style: {
                                display: "flex",
                                alignItems: "center",
                                gap: "12px",
                                marginBottom: "24px"
                            },
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    style: {
                                        width: "44px",
                                        height: "44px",
                                        borderRadius: "4px",
                                        background: `${brand.color}18`,
                                        display: "flex",
                                        alignItems: "center",
                                        justifyContent: "center",
                                        fontSize: "20px"
                                    },
                                    children: brand.logo
                                }, void 0, false, {
                                    fileName: "[project]/components/VibeCirclePages.jsx",
                                    lineNumber: 1164,
                                    columnNumber: 15
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            style: {
                                                fontFamily: "'Bebas Neue',sans-serif",
                                                fontSize: "18px",
                                                color: C.white
                                            },
                                            children: brand.name
                                        }, void 0, false, {
                                            fileName: "[project]/components/VibeCirclePages.jsx",
                                            lineNumber: 1165,
                                            columnNumber: 20
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
                                                " · ",
                                                brand.budget
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/components/VibeCirclePages.jsx",
                                            lineNumber: 1165,
                                            columnNumber: 120
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/components/VibeCirclePages.jsx",
                                    lineNumber: 1165,
                                    columnNumber: 15
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "[project]/components/VibeCirclePages.jsx",
                            lineNumber: 1163,
                            columnNumber: 13
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("h3", {
                            style: {
                                fontFamily: "'Bebas Neue',sans-serif",
                                fontSize: "26px",
                                color: C.white,
                                marginBottom: "6px"
                            },
                            children: "Apply for this deal"
                        }, void 0, false, {
                            fileName: "[project]/components/VibeCirclePages.jsx",
                            lineNumber: 1167,
                            columnNumber: 13
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                            style: {
                                fontFamily: "'DM Sans',sans-serif",
                                fontSize: "13px",
                                color: C.dim,
                                lineHeight: 1.7,
                                marginBottom: "24px"
                            },
                            children: "Fill in your creator details. Brands typically respond within 48 hours."
                        }, void 0, false, {
                            fileName: "[project]/components/VibeCirclePages.jsx",
                            lineNumber: 1168,
                            columnNumber: 13
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            style: {
                                display: "flex",
                                flexDirection: "column",
                                gap: "12px"
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
                                        onChange: (e)=>setForm({
                                                ...form,
                                                [k]: e.target.value
                                            }),
                                        style: {
                                            background: "rgba(255,255,255,0.04)",
                                            border: "1px solid rgba(255,255,255,0.1)",
                                            borderRadius: "2px",
                                            padding: "13px 15px",
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
                                        lineNumber: 1171,
                                        columnNumber: 17
                                    }, this)),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("textarea", {
                                    placeholder: "Why are you right for this brand? (2–3 sentences)",
                                    rows: 3,
                                    value: form.why,
                                    onChange: (e)=>setForm({
                                            ...form,
                                            why: e.target.value
                                        }),
                                    style: {
                                        background: "rgba(255,255,255,0.04)",
                                        border: "1px solid rgba(255,255,255,0.1)",
                                        borderRadius: "2px",
                                        padding: "13px 15px",
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
                                    lineNumber: 1173,
                                    columnNumber: 15
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                    onClick: ()=>form.name && form.handle ? setStep(2) : null,
                                    style: {
                                        fontFamily: "'Bebas Neue',sans-serif",
                                        fontSize: "15px",
                                        letterSpacing: "3px",
                                        padding: "15px",
                                        background: brand.color,
                                        color: C.bg,
                                        border: "none",
                                        borderRadius: "2px",
                                        cursor: "pointer",
                                        transition: "box-shadow .2s"
                                    },
                                    onMouseEnter: (e)=>e.target.style.boxShadow = `0 10px 28px ${brand.color}40`,
                                    onMouseLeave: (e)=>e.target.style.boxShadow = "none",
                                    children: "Submit Application"
                                }, void 0, false, {
                                    fileName: "[project]/components/VibeCirclePages.jsx",
                                    lineNumber: 1174,
                                    columnNumber: 15
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "[project]/components/VibeCirclePages.jsx",
                            lineNumber: 1169,
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
                                fontSize: "50px",
                                marginBottom: "18px"
                            },
                            children: "🚀"
                        }, void 0, false, {
                            fileName: "[project]/components/VibeCirclePages.jsx",
                            lineNumber: 1179,
                            columnNumber: 13
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            style: {
                                fontFamily: "'Bebas Neue',sans-serif",
                                fontSize: "34px",
                                color: brand.color,
                                marginBottom: "12px"
                            },
                            children: "Application Sent!"
                        }, void 0, false, {
                            fileName: "[project]/components/VibeCirclePages.jsx",
                            lineNumber: 1180,
                            columnNumber: 13
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                            style: {
                                fontFamily: "'DM Sans',sans-serif",
                                fontSize: "15px",
                                color: C.dim,
                                lineHeight: 1.7,
                                marginBottom: "28px"
                            },
                            children: [
                                brand.name,
                                " will review your profile and respond within 48 hours. Keep creating."
                            ]
                        }, void 0, true, {
                            fileName: "[project]/components/VibeCirclePages.jsx",
                            lineNumber: 1181,
                            columnNumber: 13
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                            onClick: onClose,
                            style: {
                                fontFamily: "'Bebas Neue',sans-serif",
                                fontSize: "13px",
                                letterSpacing: "3px",
                                padding: "13px 32px",
                                background: brand.color,
                                color: C.bg,
                                border: "none",
                                borderRadius: "2px",
                                cursor: "pointer"
                            },
                            children: "Back to Marketplace"
                        }, void 0, false, {
                            fileName: "[project]/components/VibeCirclePages.jsx",
                            lineNumber: 1182,
                            columnNumber: 13
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "[project]/components/VibeCirclePages.jsx",
                    lineNumber: 1178,
                    columnNumber: 11
                }, this)
            ]
        }, void 0, true, {
            fileName: "[project]/components/VibeCirclePages.jsx",
            lineNumber: 1159,
            columnNumber: 7
        }, this)
    }, void 0, false, {
        fileName: "[project]/components/VibeCirclePages.jsx",
        lineNumber: 1158,
        columnNumber: 5
    }, this);
}
function MarketplacePage() {
    const [catFilter, setCatFilter] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])("All");
    const [search, setSearch] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])("");
    const [sortBy, setSortBy] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])("Featured");
    const [activeTab, setActiveTab] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])("Creator");
    const [applyBrand, setApplyBrand] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])(null);
    const [postForm, setPostForm] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])({
        brand: "",
        category: "",
        budget: "",
        type: "",
        location: "",
        desc: ""
    });
    const [postSent, setPostSent] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])(false);
    const w = useWindowWidth();
    const filtered = MARKETPLACE_BRANDS.filter((b)=>{
        const mc = catFilter === "All" || b.category === catFilter;
        const ms = !search || b.name.toLowerCase().includes(search.toLowerCase()) || b.tags.some((t)=>t.toLowerCase().includes(search.toLowerCase()));
        return mc && ms;
    }).sort((a, b)=>sortBy === "Featured" ? (b.badge ? 1 : 0) - (a.badge ? 1 : 0) : sortBy === "Slots Left" ? a.slots - a.filled - (b.slots - b.filled) : 0);
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(PageShell, {
        current: "Marketplace",
        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            style: {
                background: C.bg,
                color: C.white
            },
            children: [
                applyBrand && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(ApplyModal, {
                    brand: applyBrand,
                    onClose: ()=>setApplyBrand(null)
                }, void 0, false, {
                    fileName: "[project]/components/VibeCirclePages.jsx",
                    lineNumber: 1209,
                    columnNumber: 20
                }, this),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("section", {
                    style: {
                        minHeight: "52vh",
                        display: "flex",
                        flexDirection: "column",
                        justifyContent: "flex-end",
                        padding: w < 600 ? "100px 20px 60px" : "140px 64px 72px",
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
                            lineNumber: 1212,
                            columnNumber: 9
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(Orb, {
                            top: "-5%",
                            right: "5%",
                            size: 550,
                            opacity: 0.13
                        }, void 0, false, {
                            fileName: "[project]/components/VibeCirclePages.jsx",
                            lineNumber: 1213,
                            columnNumber: 9
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
                            lineNumber: 1214,
                            columnNumber: 9
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
                                        marginBottom: "18px"
                                    },
                                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(Tag, {
                                        children: "Brand Marketplace"
                                    }, void 0, false, {
                                        fileName: "[project]/components/VibeCirclePages.jsx",
                                        lineNumber: 1216,
                                        columnNumber: 93
                                    }, this)
                                }, void 0, false, {
                                    fileName: "[project]/components/VibeCirclePages.jsx",
                                    lineNumber: 1216,
                                    columnNumber: 11
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("h1", {
                                    style: {
                                        fontFamily: "'Bebas Neue',sans-serif",
                                        fontSize: "clamp(48px,8vw,96px)",
                                        lineHeight: .92,
                                        color: C.white,
                                        animation: "fadeUp .55s .08s ease forwards",
                                        opacity: 0,
                                        marginBottom: "20px"
                                    },
                                    children: [
                                        "Where brands meet",
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("br", {}, void 0, false, {
                                            fileName: "[project]/components/VibeCirclePages.jsx",
                                            lineNumber: 1218,
                                            columnNumber: 30
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                            style: {
                                                color: C.orange
                                            },
                                            children: "creators who live it."
                                        }, void 0, false, {
                                            fileName: "[project]/components/VibeCirclePages.jsx",
                                            lineNumber: 1218,
                                            columnNumber: 35
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/components/VibeCirclePages.jsx",
                                    lineNumber: 1217,
                                    columnNumber: 11
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                    style: {
                                        fontFamily: "'DM Sans',sans-serif",
                                        fontSize: "clamp(15px,1.8vw,19px)",
                                        color: C.dim,
                                        maxWidth: "540px",
                                        lineHeight: 1.75,
                                        animation: "fadeUp .55s .16s ease forwards",
                                        opacity: 0
                                    },
                                    children: "Browse live brand deals, apply in seconds, and turn your city presence into paid partnerships."
                                }, void 0, false, {
                                    fileName: "[project]/components/VibeCirclePages.jsx",
                                    lineNumber: 1220,
                                    columnNumber: 11
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    style: {
                                        display: "flex",
                                        gap: "28px",
                                        marginTop: "36px",
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
                                            "$2.4M+",
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
                                                        fontSize: "clamp(20px,2.5vw,28px)",
                                                        color: C.orange,
                                                        lineHeight: 1
                                                    },
                                                    children: v
                                                }, void 0, false, {
                                                    fileName: "[project]/components/VibeCirclePages.jsx",
                                                    lineNumber: 1226,
                                                    columnNumber: 17
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
                                                    lineNumber: 1227,
                                                    columnNumber: 17
                                                }, this)
                                            ]
                                        }, l, true, {
                                            fileName: "[project]/components/VibeCirclePages.jsx",
                                            lineNumber: 1225,
                                            columnNumber: 15
                                        }, this))
                                }, void 0, false, {
                                    fileName: "[project]/components/VibeCirclePages.jsx",
                                    lineNumber: 1223,
                                    columnNumber: 11
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "[project]/components/VibeCirclePages.jsx",
                            lineNumber: 1215,
                            columnNumber: 9
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "[project]/components/VibeCirclePages.jsx",
                    lineNumber: 1211,
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
                            display: "flex",
                            gap: 0
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
                                    padding: "18px 28px",
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
                                lineNumber: 1237,
                                columnNumber: 13
                            }, this))
                    }, void 0, false, {
                        fileName: "[project]/components/VibeCirclePages.jsx",
                        lineNumber: 1235,
                        columnNumber: 9
                    }, this)
                }, void 0, false, {
                    fileName: "[project]/components/VibeCirclePages.jsx",
                    lineNumber: 1234,
                    columnNumber: 7
                }, this),
                activeTab === "Creator" ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Fragment"], {
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("section", {
                            style: {
                                padding: `40px ${w < 600 ? "20px" : "64px"} 0`,
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
                                            marginBottom: "24px"
                                        },
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                style: {
                                                    position: "absolute",
                                                    left: "16px",
                                                    top: "50%",
                                                    transform: "translateY(-50%)",
                                                    color: "rgba(255,255,255,0.2)",
                                                    fontSize: "15px"
                                                },
                                                children: "🔍"
                                            }, void 0, false, {
                                                fileName: "[project]/components/VibeCirclePages.jsx",
                                                lineNumber: 1247,
                                                columnNumber: 17
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
                                                placeholder: "Search by brand name or vibe tag...",
                                                value: search,
                                                onChange: (e)=>setSearch(e.target.value),
                                                style: {
                                                    width: "100%",
                                                    background: "rgba(255,255,255,0.04)",
                                                    border: "1px solid rgba(255,255,255,0.1)",
                                                    borderRadius: "2px",
                                                    padding: "14px 18px 14px 44px",
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
                                                lineNumber: 1248,
                                                columnNumber: 17
                                            }, this)
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/components/VibeCirclePages.jsx",
                                        lineNumber: 1246,
                                        columnNumber: 15
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        style: {
                                            display: "flex",
                                            gap: "8px",
                                            flexWrap: "wrap",
                                            alignItems: "center",
                                            paddingBottom: "24px"
                                        },
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                style: {
                                                    display: "flex",
                                                    gap: "6px",
                                                    flexWrap: "wrap",
                                                    flex: 1
                                                },
                                                children: MKT_CATS.map((c)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                                        onClick: ()=>setCatFilter(c),
                                                        style: {
                                                            fontFamily: "'DM Sans',sans-serif",
                                                            fontSize: "12px",
                                                            padding: "6px 12px",
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
                                                        lineNumber: 1253,
                                                        columnNumber: 21
                                                    }, this))
                                            }, void 0, false, {
                                                fileName: "[project]/components/VibeCirclePages.jsx",
                                                lineNumber: 1251,
                                                columnNumber: 17
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
                                                        lineNumber: 1257,
                                                        columnNumber: 53
                                                    }, this))
                                            }, void 0, false, {
                                                fileName: "[project]/components/VibeCirclePages.jsx",
                                                lineNumber: 1256,
                                                columnNumber: 17
                                            }, this)
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/components/VibeCirclePages.jsx",
                                        lineNumber: 1250,
                                        columnNumber: 15
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/components/VibeCirclePages.jsx",
                                lineNumber: 1245,
                                columnNumber: 13
                            }, this)
                        }, void 0, false, {
                            fileName: "[project]/components/VibeCirclePages.jsx",
                            lineNumber: 1244,
                            columnNumber: 11
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("section", {
                            style: {
                                padding: `24px ${w < 600 ? "20px" : "64px"} 80px`,
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
                                            fontSize: "13px",
                                            color: C.dimmer,
                                            marginBottom: "24px"
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
                                                lineNumber: 1264,
                                                columnNumber: 121
                                            }, this),
                                            " deals"
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/components/VibeCirclePages.jsx",
                                        lineNumber: 1264,
                                        columnNumber: 15
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
                                                    lineNumber: 1266,
                                                    columnNumber: 106
                                                }, this)
                                            }, brand.id, false, {
                                                fileName: "[project]/components/VibeCirclePages.jsx",
                                                lineNumber: 1266,
                                                columnNumber: 69
                                            }, this))
                                    }, void 0, false, {
                                        fileName: "[project]/components/VibeCirclePages.jsx",
                                        lineNumber: 1266,
                                        columnNumber: 17
                                    }, this) : /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        style: {
                                            textAlign: "center",
                                            padding: "72px",
                                            color: C.dimmer
                                        },
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                style: {
                                                    fontSize: "36px",
                                                    marginBottom: "14px"
                                                },
                                                children: "🔍"
                                            }, void 0, false, {
                                                fileName: "[project]/components/VibeCirclePages.jsx",
                                                lineNumber: 1269,
                                                columnNumber: 19
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                style: {
                                                    fontFamily: "'Bebas Neue',sans-serif",
                                                    fontSize: "22px",
                                                    color: C.white,
                                                    marginBottom: "8px"
                                                },
                                                children: "No deals found"
                                            }, void 0, false, {
                                                fileName: "[project]/components/VibeCirclePages.jsx",
                                                lineNumber: 1270,
                                                columnNumber: 19
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                style: {
                                                    fontFamily: "'DM Sans',sans-serif",
                                                    fontSize: "13px"
                                                },
                                                children: "Try adjusting your filters."
                                            }, void 0, false, {
                                                fileName: "[project]/components/VibeCirclePages.jsx",
                                                lineNumber: 1271,
                                                columnNumber: 19
                                            }, this)
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/components/VibeCirclePages.jsx",
                                        lineNumber: 1268,
                                        columnNumber: 17
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/components/VibeCirclePages.jsx",
                                lineNumber: 1263,
                                columnNumber: 13
                            }, this)
                        }, void 0, false, {
                            fileName: "[project]/components/VibeCirclePages.jsx",
                            lineNumber: 1262,
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
                                                lineNumber: 1281,
                                                columnNumber: 23
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("h2", {
                                                style: {
                                                    fontFamily: "'Bebas Neue',sans-serif",
                                                    fontSize: "clamp(32px,5vw,56px)",
                                                    color: C.white,
                                                    lineHeight: 1,
                                                    margin: "16px 0 20px"
                                                },
                                                children: [
                                                    "Post a deal.",
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("br", {}, void 0, false, {
                                                        fileName: "[project]/components/VibeCirclePages.jsx",
                                                        lineNumber: 1281,
                                                        columnNumber: 187
                                                    }, this),
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                        style: {
                                                            color: C.orange
                                                        },
                                                        children: "Find your creators."
                                                    }, void 0, false, {
                                                        fileName: "[project]/components/VibeCirclePages.jsx",
                                                        lineNumber: 1281,
                                                        columnNumber: 192
                                                    }, this)
                                                ]
                                            }, void 0, true, {
                                                fileName: "[project]/components/VibeCirclePages.jsx",
                                                lineNumber: 1281,
                                                columnNumber: 44
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                style: {
                                                    fontFamily: "'DM Sans',sans-serif",
                                                    fontSize: "16px",
                                                    color: C.dim,
                                                    lineHeight: 1.8,
                                                    marginBottom: "32px"
                                                },
                                                children: "Access thousands of verified creators already embedded in your target cities. No agencies, no overhead — direct creative partnerships."
                                            }, void 0, false, {
                                                fileName: "[project]/components/VibeCirclePages.jsx",
                                                lineNumber: 1281,
                                                columnNumber: 254
                                            }, this)
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/components/VibeCirclePages.jsx",
                                        lineNumber: 1281,
                                        columnNumber: 15
                                    }, this),
                                    [
                                        [
                                            "01",
                                            "🏷️",
                                            "Post a Deal",
                                            "Describe your campaign, set budget, and define the creator you're looking for."
                                        ],
                                        [
                                            "02",
                                            "📡",
                                            "Get Discovered",
                                            "Your deal surfaces to matching creators in your target cities."
                                        ],
                                        [
                                            "03",
                                            "✅",
                                            "Review & Accept",
                                            "Browse applicants and pick the creators who match your brand's energy."
                                        ],
                                        [
                                            "04",
                                            "📊",
                                            "Track Results",
                                            "Monitor campaign performance in real time."
                                        ]
                                    ].map(([n, i, t, d], idx)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(Reveal, {
                                            delay: idx * .08,
                                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                style: {
                                                    display: "flex",
                                                    gap: "14px",
                                                    alignItems: "flex-start",
                                                    marginBottom: "18px"
                                                },
                                                children: [
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                        style: {
                                                            width: "32px",
                                                            height: "32px",
                                                            borderRadius: "2px",
                                                            flexShrink: 0,
                                                            background: "rgba(255,107,0,0.12)",
                                                            border: `1px solid ${C.orange}30`,
                                                            display: "flex",
                                                            alignItems: "center",
                                                            justifyContent: "center",
                                                            fontFamily: "'Bebas Neue',sans-serif",
                                                            fontSize: "13px",
                                                            color: C.orange
                                                        },
                                                        children: n
                                                    }, void 0, false, {
                                                        fileName: "[project]/components/VibeCirclePages.jsx",
                                                        lineNumber: 1283,
                                                        columnNumber: 136
                                                    }, this),
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                        children: [
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                                style: {
                                                                    fontFamily: "'Bebas Neue',sans-serif",
                                                                    fontSize: "17px",
                                                                    color: C.white,
                                                                    marginBottom: "3px"
                                                                },
                                                                children: [
                                                                    i,
                                                                    " ",
                                                                    t
                                                                ]
                                                            }, void 0, true, {
                                                                fileName: "[project]/components/VibeCirclePages.jsx",
                                                                lineNumber: 1283,
                                                                columnNumber: 418
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
                                                                lineNumber: 1283,
                                                                columnNumber: 532
                                                            }, this)
                                                        ]
                                                    }, void 0, true, {
                                                        fileName: "[project]/components/VibeCirclePages.jsx",
                                                        lineNumber: 1283,
                                                        columnNumber: 413
                                                    }, this)
                                                ]
                                            }, void 0, true, {
                                                fileName: "[project]/components/VibeCirclePages.jsx",
                                                lineNumber: 1283,
                                                columnNumber: 51
                                            }, this)
                                        }, idx, false, {
                                            fileName: "[project]/components/VibeCirclePages.jsx",
                                            lineNumber: 1283,
                                            columnNumber: 17
                                        }, this))
                                ]
                            }, void 0, true, {
                                fileName: "[project]/components/VibeCirclePages.jsx",
                                lineNumber: 1280,
                                columnNumber: 13
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
                                    children: postSent ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        style: {
                                            textAlign: "center",
                                            padding: "32px 0"
                                        },
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                style: {
                                                    fontSize: "44px",
                                                    marginBottom: "14px"
                                                },
                                                children: "🎯"
                                            }, void 0, false, {
                                                fileName: "[project]/components/VibeCirclePages.jsx",
                                                lineNumber: 1290,
                                                columnNumber: 21
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                style: {
                                                    fontFamily: "'Bebas Neue',sans-serif",
                                                    fontSize: "30px",
                                                    color: C.orange,
                                                    marginBottom: "10px"
                                                },
                                                children: "Deal Posted!"
                                            }, void 0, false, {
                                                fileName: "[project]/components/VibeCirclePages.jsx",
                                                lineNumber: 1291,
                                                columnNumber: 21
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                style: {
                                                    fontFamily: "'DM Sans',sans-serif",
                                                    fontSize: "14px",
                                                    color: C.dim,
                                                    lineHeight: 1.7
                                                },
                                                children: "Your campaign goes live within 24 hours. Creators will start applying soon."
                                            }, void 0, false, {
                                                fileName: "[project]/components/VibeCirclePages.jsx",
                                                lineNumber: 1292,
                                                columnNumber: 21
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                                onClick: ()=>{
                                                    setPostSent(false);
                                                    setPostForm({
                                                        brand: "",
                                                        category: "",
                                                        budget: "",
                                                        type: "",
                                                        location: "",
                                                        desc: ""
                                                    });
                                                },
                                                style: {
                                                    fontFamily: "'Bebas Neue',sans-serif",
                                                    fontSize: "13px",
                                                    letterSpacing: "2px",
                                                    padding: "11px 24px",
                                                    background: C.orange,
                                                    color: C.bg,
                                                    border: "none",
                                                    borderRadius: "2px",
                                                    cursor: "pointer",
                                                    marginTop: "24px"
                                                },
                                                children: "Post Another Deal"
                                            }, void 0, false, {
                                                fileName: "[project]/components/VibeCirclePages.jsx",
                                                lineNumber: 1293,
                                                columnNumber: 21
                                            }, this)
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/components/VibeCirclePages.jsx",
                                        lineNumber: 1289,
                                        columnNumber: 19
                                    }, this) : /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Fragment"], {
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                style: {
                                                    fontFamily: "'Bebas Neue',sans-serif",
                                                    fontSize: "22px",
                                                    color: C.white,
                                                    marginBottom: "24px"
                                                },
                                                children: "Post a Campaign Deal"
                                            }, void 0, false, {
                                                fileName: "[project]/components/VibeCirclePages.jsx",
                                                lineNumber: 1297,
                                                columnNumber: 21
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                style: {
                                                    display: "flex",
                                                    flexDirection: "column",
                                                    gap: "12px"
                                                },
                                                children: [
                                                    [
                                                        [
                                                            "brand",
                                                            "Brand Name"
                                                        ],
                                                        [
                                                            "budget",
                                                            "Budget Range (e.g. $500–$2K)"
                                                        ],
                                                        [
                                                            "location",
                                                            "Target Location(s)"
                                                        ]
                                                    ].map(([k, ph])=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
                                                            placeholder: ph,
                                                            value: postForm[k],
                                                            onChange: (e)=>setPostForm({
                                                                    ...postForm,
                                                                    [k]: e.target.value
                                                                }),
                                                            style: {
                                                                background: "rgba(255,255,255,0.04)",
                                                                border: "1px solid rgba(255,255,255,0.1)",
                                                                borderRadius: "2px",
                                                                padding: "13px 15px",
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
                                                            lineNumber: 1300,
                                                            columnNumber: 25
                                                        }, this)),
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("textarea", {
                                                        placeholder: "Describe your campaign...",
                                                        rows: 3,
                                                        value: postForm.desc,
                                                        onChange: (e)=>setPostForm({
                                                                ...postForm,
                                                                desc: e.target.value
                                                            }),
                                                        style: {
                                                            background: "rgba(255,255,255,0.04)",
                                                            border: "1px solid rgba(255,255,255,0.1)",
                                                            borderRadius: "2px",
                                                            padding: "13px 15px",
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
                                                        lineNumber: 1302,
                                                        columnNumber: 23
                                                    }, this),
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                                        onClick: ()=>postForm.brand && postForm.budget ? setPostSent(true) : null,
                                                        style: {
                                                            fontFamily: "'Bebas Neue',sans-serif",
                                                            fontSize: "14px",
                                                            letterSpacing: "3px",
                                                            padding: "15px",
                                                            background: C.orange,
                                                            color: C.bg,
                                                            border: "none",
                                                            borderRadius: "2px",
                                                            cursor: "pointer",
                                                            transition: "box-shadow .2s"
                                                        },
                                                        onMouseEnter: (e)=>e.target.style.boxShadow = `0 10px 28px ${C.orange}40`,
                                                        onMouseLeave: (e)=>e.target.style.boxShadow = "none",
                                                        children: "Post My Deal"
                                                    }, void 0, false, {
                                                        fileName: "[project]/components/VibeCirclePages.jsx",
                                                        lineNumber: 1303,
                                                        columnNumber: 23
                                                    }, this)
                                                ]
                                            }, void 0, true, {
                                                fileName: "[project]/components/VibeCirclePages.jsx",
                                                lineNumber: 1298,
                                                columnNumber: 21
                                            }, this)
                                        ]
                                    }, void 0, true)
                                }, void 0, false, {
                                    fileName: "[project]/components/VibeCirclePages.jsx",
                                    lineNumber: 1287,
                                    columnNumber: 15
                                }, this)
                            }, void 0, false, {
                                fileName: "[project]/components/VibeCirclePages.jsx",
                                lineNumber: 1286,
                                columnNumber: 13
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/components/VibeCirclePages.jsx",
                        lineNumber: 1279,
                        columnNumber: 11
                    }, this)
                }, void 0, false, {
                    fileName: "[project]/components/VibeCirclePages.jsx",
                    lineNumber: 1278,
                    columnNumber: 9
                }, this),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(Divider, {}, void 0, false, {
                    fileName: "[project]/components/VibeCirclePages.jsx",
                    lineNumber: 1312,
                    columnNumber: 7
                }, this),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("section", {
                    className: "sec-pad",
                    style: {
                        background: activeTab === "Creator" ? C.bg : C.bg2
                    },
                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        style: {
                            maxWidth: "800px",
                            margin: "0 auto"
                        },
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(Reveal, {
                                style: {
                                    marginBottom: "48px"
                                },
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(Tag, {
                                        children: "Marketplace FAQ"
                                    }, void 0, false, {
                                        fileName: "[project]/components/VibeCirclePages.jsx",
                                        lineNumber: 1316,
                                        columnNumber: 49
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("h2", {
                                        style: {
                                            fontFamily: "'Bebas Neue',sans-serif",
                                            fontSize: "clamp(28px,4vw,46px)",
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
                                                lineNumber: 1316,
                                                columnNumber: 222
                                            }, this)
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/components/VibeCirclePages.jsx",
                                        lineNumber: 1316,
                                        columnNumber: 75
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/components/VibeCirclePages.jsx",
                                lineNumber: 1316,
                                columnNumber: 11
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(FAQ, {
                                items: MKT_FAQS
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
                }, void 0, false, {
                    fileName: "[project]/components/VibeCirclePages.jsx",
                    lineNumber: 1314,
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
                            animation: "marquee 22s linear infinite",
                            whiteSpace: "nowrap"
                        },
                        children: [
                            ...Array(4)
                        ].map((_, x)=>[
                                "Brand Deals",
                                "·",
                                "Creator Matching",
                                "·",
                                "Real Payments",
                                "·",
                                "City Culture",
                                "·",
                                "Authentic Collabs",
                                "·"
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
                                    lineNumber: 1323,
                                    columnNumber: 13
                                }, this)))
                    }, void 0, false, {
                        fileName: "[project]/components/VibeCirclePages.jsx",
                        lineNumber: 1321,
                        columnNumber: 9
                    }, this)
                }, void 0, false, {
                    fileName: "[project]/components/VibeCirclePages.jsx",
                    lineNumber: 1320,
                    columnNumber: 7
                }, this)
            ]
        }, void 0, true, {
            fileName: "[project]/components/VibeCirclePages.jsx",
            lineNumber: 1208,
            columnNumber: 7
        }, this)
    }, void 0, false, {
        fileName: "[project]/components/VibeCirclePages.jsx",
        lineNumber: 1207,
        columnNumber: 5
    }, this);
}
// ══════════════════════════════════════════════════════════════════════════════
// CONTACT PAGE
// ══════════════════════════════════════════════════════════════════════════════
const CONTACT_DEPTS = [
    {
        key: "general",
        label: "General Inquiry",
        email: "info@vibecircle.com",
        icon: "💬",
        desc: "Questions about VibeCircle, the platform, or anything else."
    },
    {
        key: "partnerships",
        label: "Partnerships",
        email: "partners@vibecircle.com",
        icon: "🤝",
        desc: "Brand deals, platform integrations, and strategic alliances."
    },
    {
        key: "careers",
        label: "Careers",
        email: "careers@vibecircle.com",
        icon: "💼",
        desc: "Job applications, internship inquiries, and hiring questions."
    },
    {
        key: "support",
        label: "Support",
        email: "support@vibecircle.com",
        icon: "🛠️",
        desc: "Technical issues, account help, and bug reports."
    },
    {
        key: "press",
        label: "Press & Media",
        email: "press@vibecircle.com",
        icon: "📰",
        desc: "Media inquiries, press kits, and interview requests."
    }
];
function ContactPage() {
    const [dept, setDept] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])("general");
    const [form, setForm] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])({
        name: "",
        email: "",
        subject: "",
        message: ""
    });
    const [sent, setSent] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])(false);
    const selectedDept = CONTACT_DEPTS.find((d)=>d.key === dept);
    const w = useWindowWidth();
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(PageShell, {
        current: "Contact",
        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            style: {
                background: C.bg,
                color: C.white
            },
            children: [
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(PageHero, {
                    tag: "Contact",
                    title: "Let's build",
                    accent: "something real.",
                    sub: "Whether you're a creator, a business, or a curious human — we're here."
                }, void 0, false, {
                    fileName: "[project]/components/VibeCirclePages.jsx",
                    lineNumber: 1353,
                    columnNumber: 7
                }, this),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(Divider, {}, void 0, false, {
                    fileName: "[project]/components/VibeCirclePages.jsx",
                    lineNumber: 1354,
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
                                            marginBottom: "32px"
                                        },
                                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(Tag, {
                                            children: "Choose Department"
                                        }, void 0, false, {
                                            fileName: "[project]/components/VibeCirclePages.jsx",
                                            lineNumber: 1360,
                                            columnNumber: 51
                                        }, this)
                                    }, void 0, false, {
                                        fileName: "[project]/components/VibeCirclePages.jsx",
                                        lineNumber: 1360,
                                        columnNumber: 13
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        style: {
                                            display: "flex",
                                            flexDirection: "column",
                                            gap: "10px",
                                            marginBottom: "48px"
                                        },
                                        children: CONTACT_DEPTS.map((d, i)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(Reveal, {
                                                delay: i * .07,
                                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                    onClick: ()=>setDept(d.key),
                                                    style: {
                                                        padding: "18px 22px",
                                                        background: dept === d.key ? "rgba(255,107,0,0.1)" : "rgba(255,255,255,0.02)",
                                                        border: `1px solid ${dept === d.key ? C.orange + "50" : "rgba(255,255,255,0.07)"}`,
                                                        borderRadius: "4px",
                                                        cursor: "pointer",
                                                        transition: "all .25s",
                                                        display: "flex",
                                                        alignItems: "flex-start",
                                                        gap: "14px"
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
                                                                fontSize: "19px",
                                                                flexShrink: 0
                                                            },
                                                            children: d.icon
                                                        }, void 0, false, {
                                                            fileName: "[project]/components/VibeCirclePages.jsx",
                                                            lineNumber: 1368,
                                                            columnNumber: 21
                                                        }, this),
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                            style: {
                                                                flex: 1
                                                            },
                                                            children: [
                                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                                    style: {
                                                                        fontFamily: "'Bebas Neue',sans-serif",
                                                                        fontSize: "16px",
                                                                        color: dept === d.key ? C.orange : C.white,
                                                                        letterSpacing: ".5px"
                                                                    },
                                                                    children: d.label
                                                                }, void 0, false, {
                                                                    fileName: "[project]/components/VibeCirclePages.jsx",
                                                                    lineNumber: 1370,
                                                                    columnNumber: 23
                                                                }, this),
                                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                                    style: {
                                                                        fontFamily: "'DM Sans',sans-serif",
                                                                        fontSize: "12px",
                                                                        color: C.dimmer,
                                                                        marginTop: "3px"
                                                                    },
                                                                    children: d.desc
                                                                }, void 0, false, {
                                                                    fileName: "[project]/components/VibeCirclePages.jsx",
                                                                    lineNumber: 1371,
                                                                    columnNumber: 23
                                                                }, this)
                                                            ]
                                                        }, void 0, true, {
                                                            fileName: "[project]/components/VibeCirclePages.jsx",
                                                            lineNumber: 1369,
                                                            columnNumber: 21
                                                        }, this),
                                                        dept === d.key && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                            style: {
                                                                color: C.orange,
                                                                fontSize: "14px",
                                                                flexShrink: 0,
                                                                marginTop: "2px"
                                                            },
                                                            children: "→"
                                                        }, void 0, false, {
                                                            fileName: "[project]/components/VibeCirclePages.jsx",
                                                            lineNumber: 1373,
                                                            columnNumber: 36
                                                        }, this)
                                                    ]
                                                }, void 0, true, {
                                                    fileName: "[project]/components/VibeCirclePages.jsx",
                                                    lineNumber: 1364,
                                                    columnNumber: 19
                                                }, this)
                                            }, d.key, false, {
                                                fileName: "[project]/components/VibeCirclePages.jsx",
                                                lineNumber: 1363,
                                                columnNumber: 17
                                            }, this))
                                    }, void 0, false, {
                                        fileName: "[project]/components/VibeCirclePages.jsx",
                                        lineNumber: 1361,
                                        columnNumber: 13
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(Reveal, {
                                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            style: {
                                                padding: "28px",
                                                background: "rgba(255,255,255,0.02)",
                                                border: `1px solid ${C.border}`,
                                                borderRadius: "4px"
                                            },
                                            children: [
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                    style: {
                                                        fontFamily: "'Bebas Neue',sans-serif",
                                                        fontSize: "13px",
                                                        letterSpacing: "3px",
                                                        color: C.orange,
                                                        marginBottom: "12px"
                                                    },
                                                    children: "Also reach us at"
                                                }, void 0, false, {
                                                    fileName: "[project]/components/VibeCirclePages.jsx",
                                                    lineNumber: 1380,
                                                    columnNumber: 17
                                                }, this),
                                                CONTACT_DEPTS.map((d)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                        style: {
                                                            display: "flex",
                                                            justifyContent: "space-between",
                                                            padding: "8px 0",
                                                            borderBottom: "1px solid rgba(255,255,255,0.05)"
                                                        },
                                                        children: [
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                                style: {
                                                                    fontFamily: "'DM Sans',sans-serif",
                                                                    fontSize: "12px",
                                                                    color: C.dimmer
                                                                },
                                                                children: d.label
                                                            }, void 0, false, {
                                                                fileName: "[project]/components/VibeCirclePages.jsx",
                                                                lineNumber: 1383,
                                                                columnNumber: 21
                                                            }, this),
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("a", {
                                                                href: `mailto:${d.email}`,
                                                                style: {
                                                                    fontFamily: "'DM Sans',sans-serif",
                                                                    fontSize: "12px",
                                                                    color: C.dim,
                                                                    textDecoration: "none",
                                                                    transition: "color .2s"
                                                                },
                                                                onMouseEnter: (e)=>e.target.style.color = C.orange,
                                                                onMouseLeave: (e)=>e.target.style.color = C.dim,
                                                                children: d.email
                                                            }, void 0, false, {
                                                                fileName: "[project]/components/VibeCirclePages.jsx",
                                                                lineNumber: 1384,
                                                                columnNumber: 21
                                                            }, this)
                                                        ]
                                                    }, d.key, true, {
                                                        fileName: "[project]/components/VibeCirclePages.jsx",
                                                        lineNumber: 1382,
                                                        columnNumber: 19
                                                    }, this))
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/components/VibeCirclePages.jsx",
                                            lineNumber: 1379,
                                            columnNumber: 15
                                        }, this)
                                    }, void 0, false, {
                                        fileName: "[project]/components/VibeCirclePages.jsx",
                                        lineNumber: 1378,
                                        columnNumber: 13
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/components/VibeCirclePages.jsx",
                                lineNumber: 1359,
                                columnNumber: 11
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(Reveal, {
                                delay: .1,
                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    style: {
                                        padding: "44px",
                                        background: "rgba(255,255,255,0.02)",
                                        border: `1px solid ${C.border}`,
                                        borderRadius: "4px",
                                        position: "sticky",
                                        top: "80px"
                                    },
                                    children: sent ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        style: {
                                            textAlign: "center",
                                            padding: "40px 0"
                                        },
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                style: {
                                                    fontSize: "52px",
                                                    marginBottom: "18px"
                                                },
                                                children: "✉️"
                                            }, void 0, false, {
                                                fileName: "[project]/components/VibeCirclePages.jsx",
                                                lineNumber: 1396,
                                                columnNumber: 19
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                style: {
                                                    fontFamily: "'Bebas Neue',sans-serif",
                                                    fontSize: "32px",
                                                    color: C.orange,
                                                    marginBottom: "12px"
                                                },
                                                children: "Message Sent."
                                            }, void 0, false, {
                                                fileName: "[project]/components/VibeCirclePages.jsx",
                                                lineNumber: 1397,
                                                columnNumber: 19
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                style: {
                                                    fontFamily: "'DM Sans',sans-serif",
                                                    fontSize: "15px",
                                                    color: C.dim,
                                                    lineHeight: 1.7,
                                                    marginBottom: "28px"
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
                                                        lineNumber: 1398,
                                                        columnNumber: 184
                                                    }, this),
                                                    " within 24–48 hours."
                                                ]
                                            }, void 0, true, {
                                                fileName: "[project]/components/VibeCirclePages.jsx",
                                                lineNumber: 1398,
                                                columnNumber: 19
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
                                                    fontSize: "13px",
                                                    letterSpacing: "2px",
                                                    padding: "12px 28px",
                                                    background: C.orange,
                                                    color: C.bg,
                                                    border: "none",
                                                    borderRadius: "2px",
                                                    cursor: "pointer"
                                                },
                                                children: "Send Another"
                                            }, void 0, false, {
                                                fileName: "[project]/components/VibeCirclePages.jsx",
                                                lineNumber: 1399,
                                                columnNumber: 19
                                            }, this)
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/components/VibeCirclePages.jsx",
                                        lineNumber: 1395,
                                        columnNumber: 17
                                    }, this) : /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Fragment"], {
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                style: {
                                                    display: "flex",
                                                    alignItems: "center",
                                                    gap: "10px",
                                                    marginBottom: "28px"
                                                },
                                                children: [
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                        style: {
                                                            fontSize: "22px"
                                                        },
                                                        children: selectedDept?.icon
                                                    }, void 0, false, {
                                                        fileName: "[project]/components/VibeCirclePages.jsx",
                                                        lineNumber: 1404,
                                                        columnNumber: 21
                                                    }, this),
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                        children: [
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                                style: {
                                                                    fontFamily: "'Bebas Neue',sans-serif",
                                                                    fontSize: "20px",
                                                                    color: C.orange
                                                                },
                                                                children: selectedDept?.label
                                                            }, void 0, false, {
                                                                fileName: "[project]/components/VibeCirclePages.jsx",
                                                                lineNumber: 1406,
                                                                columnNumber: 23
                                                            }, this),
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                                style: {
                                                                    fontFamily: "'DM Sans',sans-serif",
                                                                    fontSize: "12px",
                                                                    color: C.dimmer
                                                                },
                                                                children: selectedDept?.email
                                                            }, void 0, false, {
                                                                fileName: "[project]/components/VibeCirclePages.jsx",
                                                                lineNumber: 1407,
                                                                columnNumber: 23
                                                            }, this)
                                                        ]
                                                    }, void 0, true, {
                                                        fileName: "[project]/components/VibeCirclePages.jsx",
                                                        lineNumber: 1405,
                                                        columnNumber: 21
                                                    }, this)
                                                ]
                                            }, void 0, true, {
                                                fileName: "[project]/components/VibeCirclePages.jsx",
                                                lineNumber: 1403,
                                                columnNumber: 19
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                style: {
                                                    display: "flex",
                                                    flexDirection: "column",
                                                    gap: "14px"
                                                },
                                                children: [
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                        style: {
                                                            display: "grid",
                                                            gridTemplateColumns: "1fr 1fr",
                                                            gap: "12px"
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
                                                                onChange: (e)=>setForm({
                                                                        ...form,
                                                                        [k]: e.target.value
                                                                    }),
                                                                style: {
                                                                    background: "rgba(255,255,255,0.04)",
                                                                    border: "1px solid rgba(255,255,255,0.1)",
                                                                    borderRadius: "2px",
                                                                    padding: "13px 15px",
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
                                                                lineNumber: 1413,
                                                                columnNumber: 25
                                                            }, this))
                                                    }, void 0, false, {
                                                        fileName: "[project]/components/VibeCirclePages.jsx",
                                                        lineNumber: 1411,
                                                        columnNumber: 21
                                                    }, this),
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
                                                        placeholder: "Subject",
                                                        value: form.subject,
                                                        onChange: (e)=>setForm({
                                                                ...form,
                                                                subject: e.target.value
                                                            }),
                                                        style: {
                                                            background: "rgba(255,255,255,0.04)",
                                                            border: "1px solid rgba(255,255,255,0.1)",
                                                            borderRadius: "2px",
                                                            padding: "13px 15px",
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
                                                        lineNumber: 1416,
                                                        columnNumber: 21
                                                    }, this),
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("textarea", {
                                                        placeholder: "Your message...",
                                                        rows: 5,
                                                        value: form.message,
                                                        onChange: (e)=>setForm({
                                                                ...form,
                                                                message: e.target.value
                                                            }),
                                                        style: {
                                                            background: "rgba(255,255,255,0.04)",
                                                            border: "1px solid rgba(255,255,255,0.1)",
                                                            borderRadius: "2px",
                                                            padding: "13px 15px",
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
                                                        lineNumber: 1417,
                                                        columnNumber: 21
                                                    }, this),
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                                        onClick: ()=>form.name && form.email && form.message ? setSent(true) : null,
                                                        style: {
                                                            fontFamily: "'Bebas Neue',sans-serif",
                                                            fontSize: "15px",
                                                            letterSpacing: "3px",
                                                            padding: "16px",
                                                            background: C.orange,
                                                            color: C.bg,
                                                            border: "none",
                                                            borderRadius: "2px",
                                                            cursor: "pointer",
                                                            transition: "box-shadow .2s"
                                                        },
                                                        onMouseEnter: (e)=>e.target.style.boxShadow = `0 10px 28px ${C.orange}40`,
                                                        onMouseLeave: (e)=>e.target.style.boxShadow = "none",
                                                        children: "Send Message →"
                                                    }, void 0, false, {
                                                        fileName: "[project]/components/VibeCirclePages.jsx",
                                                        lineNumber: 1418,
                                                        columnNumber: 21
                                                    }, this),
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                        style: {
                                                            fontFamily: "'DM Sans',sans-serif",
                                                            fontSize: "11px",
                                                            color: C.dimmer,
                                                            textAlign: "center"
                                                        },
                                                        children: "Typical response time: 24–48 hours"
                                                    }, void 0, false, {
                                                        fileName: "[project]/components/VibeCirclePages.jsx",
                                                        lineNumber: 1419,
                                                        columnNumber: 21
                                                    }, this)
                                                ]
                                            }, void 0, true, {
                                                fileName: "[project]/components/VibeCirclePages.jsx",
                                                lineNumber: 1410,
                                                columnNumber: 19
                                            }, this)
                                        ]
                                    }, void 0, true)
                                }, void 0, false, {
                                    fileName: "[project]/components/VibeCirclePages.jsx",
                                    lineNumber: 1393,
                                    columnNumber: 13
                                }, this)
                            }, void 0, false, {
                                fileName: "[project]/components/VibeCirclePages.jsx",
                                lineNumber: 1392,
                                columnNumber: 11
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/components/VibeCirclePages.jsx",
                        lineNumber: 1357,
                        columnNumber: 9
                    }, this)
                }, void 0, false, {
                    fileName: "[project]/components/VibeCirclePages.jsx",
                    lineNumber: 1356,
                    columnNumber: 7
                }, this),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(Divider, {}, void 0, false, {
                    fileName: "[project]/components/VibeCirclePages.jsx",
                    lineNumber: 1427,
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
                                        children: "Find Us"
                                    }, void 0, false, {
                                        fileName: "[project]/components/VibeCirclePages.jsx",
                                        lineNumber: 1431,
                                        columnNumber: 49
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("h2", {
                                        style: {
                                            fontFamily: "'Bebas Neue',sans-serif",
                                            fontSize: "clamp(28px,4vw,48px)",
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
                                                lineNumber: 1431,
                                                columnNumber: 207
                                            }, this)
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/components/VibeCirclePages.jsx",
                                        lineNumber: 1431,
                                        columnNumber: 67
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/components/VibeCirclePages.jsx",
                                lineNumber: 1431,
                                columnNumber: 11
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "grid-4",
                                children: [
                                    {
                                        city: "New York",
                                        addr: "HQ · Flatiron District",
                                        emoji: "🗽",
                                        status: "Main Office"
                                    },
                                    {
                                        city: "Los Angeles",
                                        addr: "Venice Beach Creative Hub",
                                        emoji: "🌴",
                                        status: "West Coast"
                                    },
                                    {
                                        city: "Atlanta",
                                        addr: "Ponce City Market",
                                        emoji: "🍑",
                                        status: "Southeast"
                                    },
                                    {
                                        city: "London",
                                        addr: "Shoreditch, EC2A",
                                        emoji: "🎡",
                                        status: "Europe"
                                    }
                                ].map((o, i)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(Reveal, {
                                        delay: i * .1,
                                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            style: {
                                                padding: "28px 24px",
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
                                                        fontSize: "28px",
                                                        marginBottom: "12px"
                                                    },
                                                    children: o.emoji
                                                }, void 0, false, {
                                                    fileName: "[project]/components/VibeCirclePages.jsx",
                                                    lineNumber: 1440,
                                                    columnNumber: 19
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                    style: {
                                                        fontFamily: "'Bebas Neue',sans-serif",
                                                        fontSize: "20px",
                                                        color: C.white,
                                                        marginBottom: "4px"
                                                    },
                                                    children: o.city
                                                }, void 0, false, {
                                                    fileName: "[project]/components/VibeCirclePages.jsx",
                                                    lineNumber: 1441,
                                                    columnNumber: 19
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                    style: {
                                                        fontFamily: "'DM Sans',sans-serif",
                                                        fontSize: "12px",
                                                        color: C.dim,
                                                        marginBottom: "8px"
                                                    },
                                                    children: o.addr
                                                }, void 0, false, {
                                                    fileName: "[project]/components/VibeCirclePages.jsx",
                                                    lineNumber: 1442,
                                                    columnNumber: 19
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
                                                            lineNumber: 1444,
                                                            columnNumber: 21
                                                        }, this),
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                            style: {
                                                                fontFamily: "'DM Sans',sans-serif",
                                                                fontSize: "11px",
                                                                letterSpacing: "1px",
                                                                color: C.orange,
                                                                textTransform: "uppercase"
                                                            },
                                                            children: o.status
                                                        }, void 0, false, {
                                                            fileName: "[project]/components/VibeCirclePages.jsx",
                                                            lineNumber: 1445,
                                                            columnNumber: 21
                                                        }, this)
                                                    ]
                                                }, void 0, true, {
                                                    fileName: "[project]/components/VibeCirclePages.jsx",
                                                    lineNumber: 1443,
                                                    columnNumber: 19
                                                }, this)
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/components/VibeCirclePages.jsx",
                                            lineNumber: 1436,
                                            columnNumber: 17
                                        }, this)
                                    }, i, false, {
                                        fileName: "[project]/components/VibeCirclePages.jsx",
                                        lineNumber: 1435,
                                        columnNumber: 15
                                    }, this))
                            }, void 0, false, {
                                fileName: "[project]/components/VibeCirclePages.jsx",
                                lineNumber: 1432,
                                columnNumber: 11
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/components/VibeCirclePages.jsx",
                        lineNumber: 1430,
                        columnNumber: 9
                    }, this)
                }, void 0, false, {
                    fileName: "[project]/components/VibeCirclePages.jsx",
                    lineNumber: 1429,
                    columnNumber: 7
                }, this)
            ]
        }, void 0, true, {
            fileName: "[project]/components/VibeCirclePages.jsx",
            lineNumber: 1352,
            columnNumber: 7
        }, this)
    }, void 0, false, {
        fileName: "[project]/components/VibeCirclePages.jsx",
        lineNumber: 1351,
        columnNumber: 5
    }, this);
}
// ══════════════════════════════════════════════════════════════════════════════
// 404 PAGE
// ══════════════════════════════════════════════════════════════════════════════
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
                lineNumber: 1464,
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
                lineNumber: 1465,
                columnNumber: 7
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
                            color: "rgba(255,107,0,0.12)",
                            marginBottom: "-20px",
                            WebkitTextStroke: "2px rgba(255,107,0,0.3)"
                        },
                        children: "404"
                    }, void 0, false, {
                        fileName: "[project]/components/VibeCirclePages.jsx",
                        lineNumber: 1467,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("h1", {
                        style: {
                            fontFamily: "'Bebas Neue',sans-serif",
                            fontSize: "clamp(32px,5vw,56px)",
                            color: C.white,
                            lineHeight: 1,
                            marginBottom: "20px"
                        },
                        children: [
                            "This vibe",
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("br", {}, void 0, false, {
                                fileName: "[project]/components/VibeCirclePages.jsx",
                                lineNumber: 1468,
                                columnNumber: 148
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                style: {
                                    color: C.orange
                                },
                                children: "doesn't exist."
                            }, void 0, false, {
                                fileName: "[project]/components/VibeCirclePages.jsx",
                                lineNumber: 1468,
                                columnNumber: 153
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/components/VibeCirclePages.jsx",
                        lineNumber: 1468,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                        style: {
                            fontFamily: "'DM Sans',sans-serif",
                            fontSize: "17px",
                            color: C.dim,
                            lineHeight: 1.7,
                            marginBottom: "40px"
                        },
                        children: "The page you're looking for has either moved, been deleted, or never existed in the first place."
                    }, void 0, false, {
                        fileName: "[project]/components/VibeCirclePages.jsx",
                        lineNumber: 1469,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        style: {
                            display: "flex",
                            gap: "14px",
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
                                    fontSize: "15px",
                                    letterSpacing: "3px",
                                    padding: "14px 36px",
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
                                lineNumber: 1471,
                                columnNumber: 11
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                onClick: ()=>{
                                    setPage("Contact");
                                    window.scrollTo(0, 0);
                                },
                                style: {
                                    fontFamily: "'Bebas Neue',sans-serif",
                                    fontSize: "15px",
                                    letterSpacing: "3px",
                                    padding: "14px 36px",
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
                                lineNumber: 1472,
                                columnNumber: 11
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/components/VibeCirclePages.jsx",
                        lineNumber: 1470,
                        columnNumber: 9
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/components/VibeCirclePages.jsx",
                lineNumber: 1466,
                columnNumber: 7
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/components/VibeCirclePages.jsx",
        lineNumber: 1463,
        columnNumber: 5
    }, this);
} // ══════════════════════════════════════════════════════════════════════════════
 // ROOT APP
 // ══════════════════════════════════════════════════════════════════════════════
}),
];

//# sourceMappingURL=%5Broot-of-the-server%5D__4678f844._.js.map
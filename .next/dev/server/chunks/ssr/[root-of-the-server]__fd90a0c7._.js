module.exports = [
"[externals]/next/dist/shared/lib/no-fallback-error.external.js [external] (next/dist/shared/lib/no-fallback-error.external.js, cjs)", ((__turbopack_context__, module, exports) => {

const mod = __turbopack_context__.x("next/dist/shared/lib/no-fallback-error.external.js", () => require("next/dist/shared/lib/no-fallback-error.external.js"));

module.exports = mod;
}),
"[project]/app/layout.jsx [app-rsc] (ecmascript, Next.js Server Component)", ((__turbopack_context__) => {

__turbopack_context__.n(__turbopack_context__.i("[project]/app/layout.jsx [app-rsc] (ecmascript)"));
}),
"[project]/components/VibeCirclePages.jsx [app-rsc] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>App
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/server/route-modules/app-page/vendored/rsc/react-jsx-dev-runtime.js [app-rsc] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/server/route-modules/app-page/vendored/rsc/react.js [app-rsc] (ecmascript)");
;
;
// ─── SHARED STYLES & GLOBALS ──────────────────────────────────────────────────
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

  @keyframes fadeUp {
    from { opacity: 0; transform: translateY(36px); }
    to   { opacity: 1; transform: translateY(0); }
  }
  @keyframes fadeIn {
    from { opacity: 0; }
    to   { opacity: 1; }
  }
  @keyframes orbFloat {
    0%,100% { transform: scale(1) translateY(0); opacity: 0.6; }
    50%      { transform: scale(1.12) translateY(-12px); opacity: 1; }
  }
  @keyframes lineGrow {
    from { transform: scaleX(0); }
    to   { transform: scaleX(1); }
  }
  @keyframes counterUp {
    from { opacity: 0; transform: translateY(20px); }
    to   { opacity: 1; transform: translateY(0); }
  }
  @keyframes shimmer {
    0%   { background-position: -200% center; }
    100% { background-position: 200% center; }
  }
  @keyframes pulse {
    0%,100% { box-shadow: 0 0 0 0 rgba(255,107,0,0.4); }
    50%      { box-shadow: 0 0 0 12px rgba(255,107,0,0); }
  }
  @keyframes marquee {
    from { transform: translateX(0); }
    to   { transform: translateX(-50%); }
  }
  @keyframes spin {
    from { transform: rotate(0deg); }
    to   { transform: rotate(360deg); }
  }
`;
const C = {
    bg: "#05050A",
    bg2: "#080812",
    orange: "#FF6B00",
    pink: "#FF2D78",
    white: "#FFFFFF",
    dim: "rgba(255,255,255,0.45)",
    dimmer: "rgba(255,255,255,0.2)",
    border: "rgba(255,107,0,0.12)"
};
// ─── SHARED HOOKS ─────────────────────────────────────────────────────────────
function useInView(threshold = 0.1) {
    const ref = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["useRef"])(null);
    const [inView, setInView] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["useState"])(false);
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["useEffect"])(()=>{
        const obs = new IntersectionObserver(([e])=>{
            if (e.isIntersecting) setInView(true);
        }, {
            threshold
        });
        if (ref.current) obs.observe(ref.current);
        return ()=>obs.disconnect();
    }, []);
    return [
        ref,
        inView
    ];
}
function useCounter(target, duration = 1800, active = false) {
    const [val, setVal] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["useState"])(0);
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["useEffect"])(()=>{
        if (!active) return;
        const steps = 60;
        const inc = target / steps;
        let cur = 0;
        const id = setInterval(()=>{
            cur = Math.min(cur + inc, target);
            setVal(Math.floor(cur));
            if (cur >= target) clearInterval(id);
        }, duration / steps);
        return ()=>clearInterval(id);
    }, [
        active,
        target,
        duration
    ]);
    return val;
}
// ─── SHARED COMPONENTS ────────────────────────────────────────────────────────
function Reveal({ children, delay = 0, style = {} }) {
    const [ref, inView] = useInView();
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        ref: ref,
        style: {
            opacity: inView ? 1 : 0,
            transform: inView ? "translateY(0)" : "translateY(32px)",
            transition: `opacity 0.75s ease ${delay}s, transform 0.75s ease ${delay}s`,
            ...style
        },
        children: children
    }, void 0, false, {
        fileName: "[project]/components/VibeCirclePages.jsx",
        lineNumber: 97,
        columnNumber: 5
    }, this);
}
function Orb({ top, left, right, bottom, size = 500, color = C.orange, opacity = 0.12, delay = "0s" }) {
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        style: {
            position: "absolute",
            borderRadius: "50%",
            width: size,
            height: size,
            top,
            left,
            right,
            bottom,
            background: `radial-gradient(circle, ${color}${Math.round(opacity * 255).toString(16).padStart(2, "0")} 0%, transparent 70%)`,
            animation: `orbFloat 8s ease-in-out ${delay} infinite`,
            pointerEvents: "none"
        }
    }, void 0, false, {
        fileName: "[project]/components/VibeCirclePages.jsx",
        lineNumber: 110,
        columnNumber: 5
    }, this);
}
function Tag({ children, color = C.orange }) {
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
        style: {
            fontFamily: "'Bebas Neue', sans-serif",
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
        lineNumber: 123,
        columnNumber: 5
    }, this);
}
function PageHero({ tag, title, accent, sub, children }) {
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("section", {
        style: {
            minHeight: "55vh",
            display: "flex",
            flexDirection: "column",
            justifyContent: "flex-end",
            padding: "140px 64px 80px",
            position: "relative",
            overflow: "hidden",
            background: C.bg
        },
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                style: {
                    position: "absolute",
                    inset: 0,
                    backgroundImage: `linear-gradient(${C.orange}06 1px, transparent 1px),
                          linear-gradient(90deg, ${C.orange}06 1px, transparent 1px)`,
                    backgroundSize: "60px 60px"
                }
            }, void 0, false, {
                fileName: "[project]/components/VibeCirclePages.jsx",
                lineNumber: 143,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])(Orb, {
                top: "-10%",
                right: "-5%",
                size: 500
            }, void 0, false, {
                fileName: "[project]/components/VibeCirclePages.jsx",
                lineNumber: 149,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])(Orb, {
                bottom: "-20%",
                left: "30%",
                size: 400,
                color: C.pink,
                opacity: 0.07,
                delay: "3s"
            }, void 0, false, {
                fileName: "[project]/components/VibeCirclePages.jsx",
                lineNumber: 150,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                style: {
                    position: "relative",
                    zIndex: 2,
                    maxWidth: "1100px",
                    margin: "0 auto",
                    width: "100%"
                },
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        style: {
                            animation: "fadeUp 0.6s ease forwards",
                            opacity: 0,
                            marginBottom: "20px"
                        },
                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])(Tag, {
                            children: tag
                        }, void 0, false, {
                            fileName: "[project]/components/VibeCirclePages.jsx",
                            lineNumber: 153,
                            columnNumber: 11
                        }, this)
                    }, void 0, false, {
                        fileName: "[project]/components/VibeCirclePages.jsx",
                        lineNumber: 152,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("h1", {
                        style: {
                            fontFamily: "'Bebas Neue', sans-serif",
                            fontSize: "clamp(52px,8vw,100px)",
                            lineHeight: 0.95,
                            color: C.white,
                            animation: "fadeUp 0.6s 0.1s ease forwards",
                            opacity: 0,
                            marginBottom: "28px"
                        },
                        children: [
                            title,
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("br", {}, void 0, false, {
                                fileName: "[project]/components/VibeCirclePages.jsx",
                                lineNumber: 162,
                                columnNumber: 18
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                style: {
                                    color: C.orange
                                },
                                children: accent
                            }, void 0, false, {
                                fileName: "[project]/components/VibeCirclePages.jsx",
                                lineNumber: 163,
                                columnNumber: 11
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/components/VibeCirclePages.jsx",
                        lineNumber: 155,
                        columnNumber: 9
                    }, this),
                    sub && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                        style: {
                            fontFamily: "'DM Sans', sans-serif",
                            fontSize: "clamp(16px,2vw,20px)",
                            color: C.dim,
                            maxWidth: "560px",
                            lineHeight: 1.75,
                            animation: "fadeUp 0.6s 0.2s ease forwards",
                            opacity: 0
                        },
                        children: sub
                    }, void 0, false, {
                        fileName: "[project]/components/VibeCirclePages.jsx",
                        lineNumber: 166,
                        columnNumber: 11
                    }, this),
                    children
                ]
            }, void 0, true, {
                fileName: "[project]/components/VibeCirclePages.jsx",
                lineNumber: 151,
                columnNumber: 7
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/components/VibeCirclePages.jsx",
        lineNumber: 136,
        columnNumber: 5
    }, this);
}
function Divider() {
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        style: {
            height: "1px",
            background: `linear-gradient(90deg, ${C.orange}40, transparent)`,
            margin: "0 64px"
        }
    }, void 0, false, {
        fileName: "[project]/components/VibeCirclePages.jsx",
        lineNumber: 180,
        columnNumber: 10
    }, this);
}
// ─── NAV ──────────────────────────────────────────────────────────────────────
const PAGES = [
    "About",
    "Advertise",
    "Business",
    "Jobs",
    "Marketplace"
];
function Nav({ current, setPage }) {
    const [scrolled, setScrolled] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["useState"])(false);
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["useEffect"])(()=>{
        const h = ()=>setScrolled(window.scrollY > 40);
        window.addEventListener("scroll", h);
        return ()=>window.removeEventListener("scroll", h);
    }, []);
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("nav", {
        style: {
            position: "fixed",
            top: 0,
            left: 0,
            right: 0,
            zIndex: 200,
            display: "flex",
            alignItems: "center",
            justifyContent: "space-between",
            padding: "0 48px",
            height: "68px",
            background: scrolled ? "rgba(5,5,10,0.94)" : "rgba(5,5,10,0.5)",
            backdropFilter: "blur(20px)",
            borderBottom: `1px solid ${scrolled ? C.border : "transparent"}`,
            transition: "all 0.35s ease"
        },
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                onClick: ()=>setPage("home"),
                style: {
                    fontFamily: "'Bebas Neue', sans-serif",
                    fontSize: "24px",
                    letterSpacing: "3px",
                    color: C.orange,
                    background: "none",
                    border: "none",
                    cursor: "pointer",
                    padding: 0
                },
                children: "VIBECIRCLE"
            }, void 0, false, {
                fileName: "[project]/components/VibeCirclePages.jsx",
                lineNumber: 204,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                style: {
                    display: "flex",
                    gap: "8px"
                },
                children: PAGES.map((p)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                        onClick: ()=>{
                            setPage(p);
                            window.scrollTo(0, 0);
                        },
                        style: {
                            fontFamily: "'DM Sans', sans-serif",
                            fontSize: "13px",
                            letterSpacing: "1.5px",
                            textTransform: "uppercase",
                            color: current === p ? C.orange : C.dim,
                            background: current === p ? `${C.orange}12` : "transparent",
                            border: current === p ? `1px solid ${C.orange}30` : "1px solid transparent",
                            borderRadius: "2px",
                            padding: "7px 16px",
                            cursor: "pointer",
                            transition: "all 0.2s"
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
                        lineNumber: 213,
                        columnNumber: 11
                    }, this))
            }, void 0, false, {
                fileName: "[project]/components/VibeCirclePages.jsx",
                lineNumber: 211,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                style: {
                    fontFamily: "'Bebas Neue', sans-serif",
                    fontSize: "13px",
                    letterSpacing: "3px",
                    padding: "9px 22px",
                    background: C.orange,
                    color: C.bg,
                    border: "none",
                    borderRadius: "2px",
                    cursor: "pointer"
                },
                children: "Join Now"
            }, void 0, false, {
                fileName: "[project]/components/VibeCirclePages.jsx",
                lineNumber: 229,
                columnNumber: 7
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/components/VibeCirclePages.jsx",
        lineNumber: 195,
        columnNumber: 5
    }, this);
}
// ══════════════════════════════════════════════════════════════════════════════
// PAGE: ABOUT
// ══════════════════════════════════════════════════════════════════════════════
const TEAM_BELIEFS = [
    {
        icon: "⚙️",
        text: "Technology should empower culture"
    },
    {
        icon: "🎨",
        text: "Design should feel alive"
    },
    {
        icon: "📊",
        text: "Data should drive discovery"
    },
    {
        icon: "🌐",
        text: "Community should drive growth"
    }
];
const MANIFESTO = [
    "Culture should be visible.",
    "Creators deserve gravity.",
    "Businesses should feel human.",
    "Maps are more powerful than feeds.",
    "Real life matters."
];
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
function StatCard({ val, suffix, label, active }) {
    const count = useCounter(val, 1800, active);
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        style: {
            padding: "40px 32px",
            background: "rgba(255,107,0,0.04)",
            border: `1px solid ${C.border}`,
            borderRadius: "4px",
            textAlign: "center",
            animation: active ? "counterUp 0.6s ease forwards" : "none"
        },
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                style: {
                    fontFamily: "'Bebas Neue', sans-serif",
                    fontSize: "clamp(48px,5vw,64px)",
                    color: C.orange,
                    lineHeight: 1,
                    background: "linear-gradient(90deg, #FF6B00, #FF2D78, #FF6B00)",
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
                lineNumber: 277,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                style: {
                    fontFamily: "'DM Sans', sans-serif",
                    fontSize: "13px",
                    letterSpacing: "2px",
                    textTransform: "uppercase",
                    color: C.dim,
                    marginTop: "8px"
                },
                children: label
            }, void 0, false, {
                fileName: "[project]/components/VibeCirclePages.jsx",
                lineNumber: 287,
                columnNumber: 7
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/components/VibeCirclePages.jsx",
        lineNumber: 269,
        columnNumber: 5
    }, this);
}
function AboutPage() {
    const [statsRef, statsInView] = useInView(0.3);
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        style: {
            background: C.bg,
            color: C.white
        },
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])(PageHero, {
                tag: "About VibeCircle",
                title: "We build infrastructure",
                accent: "for modern city culture.",
                sub: "Not just online conversations — offline moments. From campus pop-ups to club nights, from digital livestreams to street markets."
            }, void 0, false, {
                fileName: "[project]/components/VibeCirclePages.jsx",
                lineNumber: 303,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])(Divider, {}, void 0, false, {
                fileName: "[project]/components/VibeCirclePages.jsx",
                lineNumber: 310,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("section", {
                style: {
                    padding: "100px 64px",
                    background: C.bg2
                },
                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    style: {
                        maxWidth: "1100px",
                        margin: "0 auto"
                    },
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])(Reveal, {
                            style: {
                                marginBottom: "64px"
                            },
                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])(Tag, {
                                children: "By the numbers"
                            }, void 0, false, {
                                fileName: "[project]/components/VibeCirclePages.jsx",
                                lineNumber: 316,
                                columnNumber: 13
                            }, this)
                        }, void 0, false, {
                            fileName: "[project]/components/VibeCirclePages.jsx",
                            lineNumber: 315,
                            columnNumber: 11
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            ref: statsRef,
                            style: {
                                display: "grid",
                                gridTemplateColumns: "repeat(auto-fit, minmax(200px,1fr))",
                                gap: "20px"
                            },
                            children: STATS.map((s, i)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])(StatCard, {
                                    ...s,
                                    active: statsInView
                                }, i, false, {
                                    fileName: "[project]/components/VibeCirclePages.jsx",
                                    lineNumber: 319,
                                    columnNumber: 34
                                }, this))
                        }, void 0, false, {
                            fileName: "[project]/components/VibeCirclePages.jsx",
                            lineNumber: 318,
                            columnNumber: 11
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "[project]/components/VibeCirclePages.jsx",
                    lineNumber: 314,
                    columnNumber: 9
                }, this)
            }, void 0, false, {
                fileName: "[project]/components/VibeCirclePages.jsx",
                lineNumber: 313,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])(Divider, {}, void 0, false, {
                fileName: "[project]/components/VibeCirclePages.jsx",
                lineNumber: 324,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("section", {
                style: {
                    padding: "100px 64px",
                    position: "relative",
                    overflow: "hidden"
                },
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])(Orb, {
                        top: "20%",
                        left: "-8%",
                        size: 400,
                        opacity: 0.09
                    }, void 0, false, {
                        fileName: "[project]/components/VibeCirclePages.jsx",
                        lineNumber: 328,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        style: {
                            maxWidth: "1100px",
                            margin: "0 auto",
                            display: "grid",
                            gridTemplateColumns: "1fr 1fr",
                            gap: "80px"
                        },
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])(Reveal, {
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])(Tag, {
                                            children: "Mission"
                                        }, void 0, false, {
                                            fileName: "[project]/components/VibeCirclePages.jsx",
                                            lineNumber: 332,
                                            columnNumber: 15
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("h2", {
                                            style: {
                                                fontFamily: "'Bebas Neue', sans-serif",
                                                fontSize: "clamp(36px,4vw,52px)",
                                                color: C.white,
                                                lineHeight: 1.05,
                                                margin: "20px 0 24px"
                                            },
                                            children: [
                                                "Turn digital energy into",
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("br", {}, void 0, false, {
                                                    fileName: "[project]/components/VibeCirclePages.jsx",
                                                    lineNumber: 334,
                                                    columnNumber: 41
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                    style: {
                                                        color: C.orange
                                                    },
                                                    children: "real-world connection."
                                                }, void 0, false, {
                                                    fileName: "[project]/components/VibeCirclePages.jsx",
                                                    lineNumber: 334,
                                                    columnNumber: 47
                                                }, this)
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/components/VibeCirclePages.jsx",
                                            lineNumber: 333,
                                            columnNumber: 15
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                            style: {
                                                fontFamily: "'DM Sans', sans-serif",
                                                fontSize: "17px",
                                                color: C.dim,
                                                lineHeight: 1.8
                                            },
                                            children: "VibeCircle connects people not just by what they post — but by where they are, what they love, and what's happening right now. This is not scrolling. This is discovering."
                                        }, void 0, false, {
                                            fileName: "[project]/components/VibeCirclePages.jsx",
                                            lineNumber: 336,
                                            columnNumber: 15
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/components/VibeCirclePages.jsx",
                                    lineNumber: 331,
                                    columnNumber: 13
                                }, this)
                            }, void 0, false, {
                                fileName: "[project]/components/VibeCirclePages.jsx",
                                lineNumber: 330,
                                columnNumber: 11
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])(Reveal, {
                                    delay: 0.15,
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])(Tag, {
                                            children: "Vision"
                                        }, void 0, false, {
                                            fileName: "[project]/components/VibeCirclePages.jsx",
                                            lineNumber: 343,
                                            columnNumber: 15
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("h2", {
                                            style: {
                                                fontFamily: "'Bebas Neue', sans-serif",
                                                fontSize: "clamp(36px,4vw,52px)",
                                                color: C.white,
                                                lineHeight: 1.05,
                                                margin: "20px 0 24px"
                                            },
                                            children: [
                                                "A world where every city has",
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("br", {}, void 0, false, {
                                                    fileName: "[project]/components/VibeCirclePages.jsx",
                                                    lineNumber: 345,
                                                    columnNumber: 45
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                    style: {
                                                        color: C.orange
                                                    },
                                                    children: "a visible heartbeat."
                                                }, void 0, false, {
                                                    fileName: "[project]/components/VibeCirclePages.jsx",
                                                    lineNumber: 345,
                                                    columnNumber: 51
                                                }, this)
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/components/VibeCirclePages.jsx",
                                            lineNumber: 344,
                                            columnNumber: 15
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                            style: {
                                                fontFamily: "'DM Sans', sans-serif",
                                                fontSize: "17px",
                                                color: C.dim,
                                                lineHeight: 1.8
                                            },
                                            children: "We're building the living map of culture — the layer on top of the city that shows you where energy actually lives."
                                        }, void 0, false, {
                                            fileName: "[project]/components/VibeCirclePages.jsx",
                                            lineNumber: 347,
                                            columnNumber: 15
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/components/VibeCirclePages.jsx",
                                    lineNumber: 342,
                                    columnNumber: 13
                                }, this)
                            }, void 0, false, {
                                fileName: "[project]/components/VibeCirclePages.jsx",
                                lineNumber: 341,
                                columnNumber: 11
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/components/VibeCirclePages.jsx",
                        lineNumber: 329,
                        columnNumber: 9
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/components/VibeCirclePages.jsx",
                lineNumber: 327,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])(Divider, {}, void 0, false, {
                fileName: "[project]/components/VibeCirclePages.jsx",
                lineNumber: 355,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("section", {
                style: {
                    padding: "100px 64px",
                    background: C.bg2
                },
                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    style: {
                        maxWidth: "1000px",
                        margin: "0 auto"
                    },
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])(Reveal, {
                            style: {
                                marginBottom: "60px"
                            },
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])(Tag, {
                                    children: "Manifesto"
                                }, void 0, false, {
                                    fileName: "[project]/components/VibeCirclePages.jsx",
                                    lineNumber: 361,
                                    columnNumber: 13
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("h2", {
                                    style: {
                                        fontFamily: "'Bebas Neue', sans-serif",
                                        fontSize: "clamp(36px,5vw,60px)",
                                        color: C.white,
                                        marginTop: "16px",
                                        lineHeight: 1
                                    },
                                    children: [
                                        "We ",
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                            style: {
                                                color: C.orange
                                            },
                                            children: "believe"
                                        }, void 0, false, {
                                            fileName: "[project]/components/VibeCirclePages.jsx",
                                            lineNumber: 363,
                                            columnNumber: 18
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/components/VibeCirclePages.jsx",
                                    lineNumber: 362,
                                    columnNumber: 13
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "[project]/components/VibeCirclePages.jsx",
                            lineNumber: 360,
                            columnNumber: 11
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            children: MANIFESTO.map((line, i)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])(Reveal, {
                                    delay: i * 0.1,
                                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        style: {
                                            display: "flex",
                                            alignItems: "center",
                                            gap: "28px",
                                            padding: "28px 0",
                                            borderBottom: `1px solid rgba(255,255,255,0.06)`
                                        },
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                style: {
                                                    fontFamily: "'Bebas Neue', sans-serif",
                                                    fontSize: "clamp(28px,3.5vw,46px)",
                                                    color: C.white,
                                                    flex: 1
                                                },
                                                children: line
                                            }, void 0, false, {
                                                fileName: "[project]/components/VibeCirclePages.jsx",
                                                lineNumber: 374,
                                                columnNumber: 19
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                style: {
                                                    fontFamily: "'Bebas Neue', sans-serif",
                                                    fontSize: "11px",
                                                    letterSpacing: "3px",
                                                    color: C.orange,
                                                    opacity: 0.6,
                                                    minWidth: "28px"
                                                },
                                                children: [
                                                    "0",
                                                    i + 1
                                                ]
                                            }, void 0, true, {
                                                fileName: "[project]/components/VibeCirclePages.jsx",
                                                lineNumber: 379,
                                                columnNumber: 19
                                            }, this)
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/components/VibeCirclePages.jsx",
                                        lineNumber: 369,
                                        columnNumber: 17
                                    }, this)
                                }, i, false, {
                                    fileName: "[project]/components/VibeCirclePages.jsx",
                                    lineNumber: 368,
                                    columnNumber: 15
                                }, this))
                        }, void 0, false, {
                            fileName: "[project]/components/VibeCirclePages.jsx",
                            lineNumber: 366,
                            columnNumber: 11
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "[project]/components/VibeCirclePages.jsx",
                    lineNumber: 359,
                    columnNumber: 9
                }, this)
            }, void 0, false, {
                fileName: "[project]/components/VibeCirclePages.jsx",
                lineNumber: 358,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])(Divider, {}, void 0, false, {
                fileName: "[project]/components/VibeCirclePages.jsx",
                lineNumber: 392,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("section", {
                style: {
                    padding: "100px 64px"
                },
                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    style: {
                        maxWidth: "1100px",
                        margin: "0 auto"
                    },
                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        style: {
                            display: "grid",
                            gridTemplateColumns: "1fr 1fr",
                            gap: "80px",
                            alignItems: "center"
                        },
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])(Reveal, {
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])(Tag, {
                                            children: "The Team"
                                        }, void 0, false, {
                                            fileName: "[project]/components/VibeCirclePages.jsx",
                                            lineNumber: 400,
                                            columnNumber: 17
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("h2", {
                                            style: {
                                                fontFamily: "'Bebas Neue', sans-serif",
                                                fontSize: "clamp(36px,5vw,60px)",
                                                color: C.white,
                                                lineHeight: 1,
                                                margin: "20px 0 24px"
                                            },
                                            children: [
                                                "Meet the builders",
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("br", {}, void 0, false, {
                                                    fileName: "[project]/components/VibeCirclePages.jsx",
                                                    lineNumber: 402,
                                                    columnNumber: 36
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                    style: {
                                                        color: C.orange
                                                    },
                                                    children: "of the vibe."
                                                }, void 0, false, {
                                                    fileName: "[project]/components/VibeCirclePages.jsx",
                                                    lineNumber: 402,
                                                    columnNumber: 42
                                                }, this)
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/components/VibeCirclePages.jsx",
                                            lineNumber: 401,
                                            columnNumber: 17
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                            style: {
                                                fontFamily: "'DM Sans', sans-serif",
                                                fontSize: "17px",
                                                color: C.dim,
                                                lineHeight: 1.8
                                            },
                                            children: "We are developers, designers, strategists, creatives, and systems thinkers. Each team member contributes to building a living ecosystem — not just an app."
                                        }, void 0, false, {
                                            fileName: "[project]/components/VibeCirclePages.jsx",
                                            lineNumber: 404,
                                            columnNumber: 17
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/components/VibeCirclePages.jsx",
                                    lineNumber: 399,
                                    columnNumber: 15
                                }, this)
                            }, void 0, false, {
                                fileName: "[project]/components/VibeCirclePages.jsx",
                                lineNumber: 398,
                                columnNumber: 13
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                style: {
                                    display: "flex",
                                    flexDirection: "column",
                                    gap: "16px"
                                },
                                children: TEAM_BELIEFS.map((b, i)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])(Reveal, {
                                        delay: i * 0.1,
                                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            style: {
                                                display: "flex",
                                                alignItems: "center",
                                                gap: "20px",
                                                padding: "22px 28px",
                                                background: "rgba(255,255,255,0.02)",
                                                border: "1px solid rgba(255,255,255,0.07)",
                                                borderRadius: "4px",
                                                transition: "all 0.3s",
                                                cursor: "default"
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
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                    style: {
                                                        fontSize: "22px"
                                                    },
                                                    children: b.icon
                                                }, void 0, false, {
                                                    fileName: "[project]/components/VibeCirclePages.jsx",
                                                    lineNumber: 423,
                                                    columnNumber: 21
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                    style: {
                                                        fontFamily: "'DM Sans', sans-serif",
                                                        fontSize: "16px",
                                                        color: "rgba(255,255,255,0.8)"
                                                    },
                                                    children: b.text
                                                }, void 0, false, {
                                                    fileName: "[project]/components/VibeCirclePages.jsx",
                                                    lineNumber: 424,
                                                    columnNumber: 21
                                                }, this)
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/components/VibeCirclePages.jsx",
                                            lineNumber: 412,
                                            columnNumber: 19
                                        }, this)
                                    }, i, false, {
                                        fileName: "[project]/components/VibeCirclePages.jsx",
                                        lineNumber: 411,
                                        columnNumber: 17
                                    }, this))
                            }, void 0, false, {
                                fileName: "[project]/components/VibeCirclePages.jsx",
                                lineNumber: 409,
                                columnNumber: 13
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/components/VibeCirclePages.jsx",
                        lineNumber: 397,
                        columnNumber: 11
                    }, this)
                }, void 0, false, {
                    fileName: "[project]/components/VibeCirclePages.jsx",
                    lineNumber: 396,
                    columnNumber: 9
                }, this)
            }, void 0, false, {
                fileName: "[project]/components/VibeCirclePages.jsx",
                lineNumber: 395,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("section", {
                style: {
                    padding: "100px 64px",
                    background: C.bg2,
                    position: "relative",
                    overflow: "hidden"
                },
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])(Orb, {
                        bottom: "-20%",
                        right: "-5%",
                        size: 500,
                        color: C.pink,
                        opacity: 0.08,
                        delay: "2s"
                    }, void 0, false, {
                        fileName: "[project]/components/VibeCirclePages.jsx",
                        lineNumber: 435,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        style: {
                            maxWidth: "780px",
                            margin: "0 auto",
                            position: "relative"
                        },
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])(Reveal, {
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])(Tag, {
                                        children: "Founder's Story"
                                    }, void 0, false, {
                                        fileName: "[project]/components/VibeCirclePages.jsx",
                                        lineNumber: 438,
                                        columnNumber: 13
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("h2", {
                                        style: {
                                            fontFamily: "'Bebas Neue', sans-serif",
                                            fontSize: "clamp(36px,5vw,60px)",
                                            color: C.white,
                                            lineHeight: 1,
                                            margin: "20px 0 48px"
                                        },
                                        children: [
                                            "What if maps",
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("br", {}, void 0, false, {
                                                fileName: "[project]/components/VibeCirclePages.jsx",
                                                lineNumber: 440,
                                                columnNumber: 27
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                style: {
                                                    color: C.orange
                                                },
                                                children: "were alive?"
                                            }, void 0, false, {
                                                fileName: "[project]/components/VibeCirclePages.jsx",
                                                lineNumber: 440,
                                                columnNumber: 33
                                            }, this)
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/components/VibeCirclePages.jsx",
                                        lineNumber: 439,
                                        columnNumber: 13
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/components/VibeCirclePages.jsx",
                                lineNumber: 437,
                                columnNumber: 11
                            }, this),
                            [
                                "VibeCircle started with a simple realization: social media shows opinions — but not what's happening around you.",
                                "Scrolling felt endless. Cities felt invisible. Events felt disconnected.",
                                "So we imagined something different. What if social media had a pulse? What if creators could light up a city?",
                                "VibeCircle was built to connect digital expression to physical reality. We're not chasing trends. We're building infrastructure for culture."
                            ].map((p, i)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])(Reveal, {
                                    delay: i * 0.1,
                                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                        style: {
                                            fontFamily: "'DM Sans', sans-serif",
                                            fontSize: i === 1 ? "22px" : "18px",
                                            fontStyle: i === 1 ? "italic" : "normal",
                                            color: i === 0 ? "rgba(255,255,255,0.8)" : C.dim,
                                            lineHeight: 1.8,
                                            marginBottom: "24px"
                                        },
                                        children: p
                                    }, void 0, false, {
                                        fileName: "[project]/components/VibeCirclePages.jsx",
                                        lineNumber: 450,
                                        columnNumber: 15
                                    }, this)
                                }, i, false, {
                                    fileName: "[project]/components/VibeCirclePages.jsx",
                                    lineNumber: 449,
                                    columnNumber: 13
                                }, this))
                        ]
                    }, void 0, true, {
                        fileName: "[project]/components/VibeCirclePages.jsx",
                        lineNumber: 436,
                        columnNumber: 9
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/components/VibeCirclePages.jsx",
                lineNumber: 434,
                columnNumber: 7
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/components/VibeCirclePages.jsx",
        lineNumber: 301,
        columnNumber: 5
    }, this);
}
// ══════════════════════════════════════════════════════════════════════════════
// PAGE: ADVERTISE
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
        desc: "Embed your brand inside cultural moments — not beside them. Authentic, contextual, powerful.",
        color: "#FF2D78"
    },
    {
        icon: "🗺️",
        title: "Event Promotion",
        desc: "Put your event on the live map. Watch RSVPs grow as your pin pulses across the city.",
        color: "#00D4FF"
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
        color: "#FF2D78"
    },
    {
        icon: "📊",
        title: "Real-Time Analytics",
        desc: "Track impressions, foot traffic correlation, and engagement as they happen.",
        color: "#00D4FF"
    }
];
const IDEAL_FOR = [
    "Restaurants",
    "Clubs & Venues",
    "Campuses",
    "Retail",
    "Event Organizers",
    "Creators & Artists"
];
function AdvertisePage() {
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        style: {
            background: C.bg,
            color: C.white
        },
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])(PageHero, {
                tag: "Advertise",
                title: "Ads that integrate,",
                accent: "not interrupt.",
                sub: "Traditional ads interrupt. VibeCircle ads integrate. We power discovery, not distraction."
            }, void 0, false, {
                fileName: "[project]/components/VibeCirclePages.jsx",
                lineNumber: 482,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])(Divider, {}, void 0, false, {
                fileName: "[project]/components/VibeCirclePages.jsx",
                lineNumber: 489,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("section", {
                style: {
                    padding: "100px 64px",
                    background: C.bg2
                },
                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    style: {
                        maxWidth: "1100px",
                        margin: "0 auto"
                    },
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])(Reveal, {
                            style: {
                                marginBottom: "64px"
                            },
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])(Tag, {
                                    children: "What You Get"
                                }, void 0, false, {
                                    fileName: "[project]/components/VibeCirclePages.jsx",
                                    lineNumber: 495,
                                    columnNumber: 13
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("h2", {
                                    style: {
                                        fontFamily: "'Bebas Neue', sans-serif",
                                        fontSize: "clamp(36px,5vw,60px)",
                                        color: C.white,
                                        lineHeight: 1,
                                        marginTop: "16px"
                                    },
                                    children: [
                                        "Every tool to make your",
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("br", {}, void 0, false, {
                                            fileName: "[project]/components/VibeCirclePages.jsx",
                                            lineNumber: 497,
                                            columnNumber: 38
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                            style: {
                                                color: C.orange
                                            },
                                            children: "energy visible."
                                        }, void 0, false, {
                                            fileName: "[project]/components/VibeCirclePages.jsx",
                                            lineNumber: 497,
                                            columnNumber: 44
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/components/VibeCirclePages.jsx",
                                    lineNumber: 496,
                                    columnNumber: 13
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "[project]/components/VibeCirclePages.jsx",
                            lineNumber: 494,
                            columnNumber: 11
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            style: {
                                display: "grid",
                                gridTemplateColumns: "repeat(auto-fit, minmax(300px,1fr))",
                                gap: "20px"
                            },
                            children: AD_FEATURES.map((f, i)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])(Reveal, {
                                    delay: i * 0.08,
                                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        style: {
                                            padding: "36px 32px",
                                            borderRadius: "4px",
                                            background: "rgba(255,255,255,0.02)",
                                            border: "1px solid rgba(255,255,255,0.07)",
                                            height: "100%",
                                            transition: "all 0.3s",
                                            cursor: "default"
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
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                style: {
                                                    fontSize: "28px",
                                                    marginBottom: "16px"
                                                },
                                                children: f.icon
                                            }, void 0, false, {
                                                fileName: "[project]/components/VibeCirclePages.jsx",
                                                lineNumber: 512,
                                                columnNumber: 19
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                style: {
                                                    fontFamily: "'Bebas Neue', sans-serif",
                                                    fontSize: "21px",
                                                    letterSpacing: "0.5px",
                                                    color: f.color,
                                                    marginBottom: "12px"
                                                },
                                                children: f.title
                                            }, void 0, false, {
                                                fileName: "[project]/components/VibeCirclePages.jsx",
                                                lineNumber: 513,
                                                columnNumber: 19
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                style: {
                                                    fontFamily: "'DM Sans', sans-serif",
                                                    fontSize: "15px",
                                                    color: C.dim,
                                                    lineHeight: 1.7
                                                },
                                                children: f.desc
                                            }, void 0, false, {
                                                fileName: "[project]/components/VibeCirclePages.jsx",
                                                lineNumber: 514,
                                                columnNumber: 19
                                            }, this)
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/components/VibeCirclePages.jsx",
                                        lineNumber: 503,
                                        columnNumber: 17
                                    }, this)
                                }, i, false, {
                                    fileName: "[project]/components/VibeCirclePages.jsx",
                                    lineNumber: 502,
                                    columnNumber: 15
                                }, this))
                        }, void 0, false, {
                            fileName: "[project]/components/VibeCirclePages.jsx",
                            lineNumber: 500,
                            columnNumber: 11
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "[project]/components/VibeCirclePages.jsx",
                    lineNumber: 493,
                    columnNumber: 9
                }, this)
            }, void 0, false, {
                fileName: "[project]/components/VibeCirclePages.jsx",
                lineNumber: 492,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])(Divider, {}, void 0, false, {
                fileName: "[project]/components/VibeCirclePages.jsx",
                lineNumber: 522,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("section", {
                style: {
                    padding: "100px 64px",
                    position: "relative",
                    overflow: "hidden"
                },
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])(Orb, {
                        top: "10%",
                        right: "-5%",
                        size: 500,
                        opacity: 0.1
                    }, void 0, false, {
                        fileName: "[project]/components/VibeCirclePages.jsx",
                        lineNumber: 526,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        style: {
                            maxWidth: "1100px",
                            margin: "0 auto",
                            display: "grid",
                            gridTemplateColumns: "1fr 1fr",
                            gap: "80px",
                            alignItems: "center"
                        },
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])(Reveal, {
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])(Tag, {
                                            children: "Ideal For"
                                        }, void 0, false, {
                                            fileName: "[project]/components/VibeCirclePages.jsx",
                                            lineNumber: 530,
                                            columnNumber: 15
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("h2", {
                                            style: {
                                                fontFamily: "'Bebas Neue', sans-serif",
                                                fontSize: "clamp(36px,5vw,58px)",
                                                color: C.white,
                                                lineHeight: 1.05,
                                                margin: "20px 0 40px"
                                            },
                                            children: [
                                                "Built for businesses",
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("br", {}, void 0, false, {
                                                    fileName: "[project]/components/VibeCirclePages.jsx",
                                                    lineNumber: 532,
                                                    columnNumber: 37
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                    style: {
                                                        color: C.orange
                                                    },
                                                    children: "with energy."
                                                }, void 0, false, {
                                                    fileName: "[project]/components/VibeCirclePages.jsx",
                                                    lineNumber: 532,
                                                    columnNumber: 43
                                                }, this)
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/components/VibeCirclePages.jsx",
                                            lineNumber: 531,
                                            columnNumber: 15
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            style: {
                                                display: "flex",
                                                flexWrap: "wrap",
                                                gap: "12px"
                                            },
                                            children: IDEAL_FOR.map((item, i)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])(Reveal, {
                                                    delay: i * 0.06,
                                                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                        style: {
                                                            fontFamily: "'DM Sans', sans-serif",
                                                            fontSize: "15px",
                                                            color: "rgba(255,255,255,0.8)",
                                                            padding: "10px 20px",
                                                            border: `1px solid ${C.border}`,
                                                            borderRadius: "2px",
                                                            transition: "all 0.25s",
                                                            cursor: "default"
                                                        },
                                                        onMouseEnter: (e)=>{
                                                            e.currentTarget.style.borderColor = C.orange;
                                                            e.currentTarget.style.color = C.white;
                                                            e.currentTarget.style.background = "rgba(255,107,0,0.08)";
                                                        },
                                                        onMouseLeave: (e)=>{
                                                            e.currentTarget.style.borderColor = C.border;
                                                            e.currentTarget.style.color = "rgba(255,255,255,0.8)";
                                                            e.currentTarget.style.background = "transparent";
                                                        },
                                                        children: item
                                                    }, void 0, false, {
                                                        fileName: "[project]/components/VibeCirclePages.jsx",
                                                        lineNumber: 537,
                                                        columnNumber: 21
                                                    }, this)
                                                }, i, false, {
                                                    fileName: "[project]/components/VibeCirclePages.jsx",
                                                    lineNumber: 536,
                                                    columnNumber: 19
                                                }, this))
                                        }, void 0, false, {
                                            fileName: "[project]/components/VibeCirclePages.jsx",
                                            lineNumber: 534,
                                            columnNumber: 15
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/components/VibeCirclePages.jsx",
                                    lineNumber: 529,
                                    columnNumber: 13
                                }, this)
                            }, void 0, false, {
                                fileName: "[project]/components/VibeCirclePages.jsx",
                                lineNumber: 528,
                                columnNumber: 11
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])(Reveal, {
                                delay: 0.2,
                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    style: {
                                        padding: "56px 48px",
                                        background: `linear-gradient(135deg, ${C.orange}16 0%, transparent 100%)`,
                                        border: `1px solid ${C.orange}30`,
                                        borderRadius: "4px"
                                    },
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            style: {
                                                fontFamily: "'Bebas Neue', sans-serif",
                                                fontSize: "clamp(28px,3vw,40px)",
                                                color: C.white,
                                                lineHeight: 1.1,
                                                marginBottom: "20px"
                                            },
                                            children: [
                                                "Ready to make your",
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("br", {}, void 0, false, {
                                                    fileName: "[project]/components/VibeCirclePages.jsx",
                                                    lineNumber: 561,
                                                    columnNumber: 35
                                                }, this),
                                                "brand pulse?"
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/components/VibeCirclePages.jsx",
                                            lineNumber: 560,
                                            columnNumber: 15
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                            style: {
                                                fontFamily: "'DM Sans', sans-serif",
                                                fontSize: "16px",
                                                color: C.dim,
                                                lineHeight: 1.7,
                                                marginBottom: "36px"
                                            },
                                            children: "Join thousands of local businesses already turning discovery into foot traffic."
                                        }, void 0, false, {
                                            fileName: "[project]/components/VibeCirclePages.jsx",
                                            lineNumber: 563,
                                            columnNumber: 15
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                            style: {
                                                fontFamily: "'Bebas Neue', sans-serif",
                                                fontSize: "16px",
                                                letterSpacing: "3px",
                                                padding: "16px 40px",
                                                background: C.orange,
                                                color: C.bg,
                                                border: "none",
                                                borderRadius: "2px",
                                                cursor: "pointer",
                                                width: "100%",
                                                transition: "box-shadow 0.2s"
                                            },
                                            onMouseEnter: (e)=>e.target.style.boxShadow = `0 12px 40px ${C.orange}40`,
                                            onMouseLeave: (e)=>e.target.style.boxShadow = "none",
                                            children: "Start Advertising"
                                        }, void 0, false, {
                                            fileName: "[project]/components/VibeCirclePages.jsx",
                                            lineNumber: 566,
                                            columnNumber: 15
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                            style: {
                                                fontFamily: "'DM Sans', sans-serif",
                                                fontSize: "12px",
                                                color: C.dimmer,
                                                textAlign: "center",
                                                marginTop: "16px"
                                            },
                                            children: "Contact partners@vibecircle.com for enterprise plans"
                                        }, void 0, false, {
                                            fileName: "[project]/components/VibeCirclePages.jsx",
                                            lineNumber: 577,
                                            columnNumber: 15
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/components/VibeCirclePages.jsx",
                                    lineNumber: 554,
                                    columnNumber: 13
                                }, this)
                            }, void 0, false, {
                                fileName: "[project]/components/VibeCirclePages.jsx",
                                lineNumber: 553,
                                columnNumber: 11
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/components/VibeCirclePages.jsx",
                        lineNumber: 527,
                        columnNumber: 9
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/components/VibeCirclePages.jsx",
                lineNumber: 525,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                style: {
                    background: C.orange,
                    padding: "20px 0",
                    overflow: "hidden"
                },
                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
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
                        ].map((w, i)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                style: {
                                    fontFamily: "'Bebas Neue', sans-serif",
                                    fontSize: "16px",
                                    letterSpacing: "3px",
                                    color: "rgba(5,5,10,0.7)",
                                    marginRight: "32px"
                                },
                                children: w
                            }, `${x}-${i}`, false, {
                                fileName: "[project]/components/VibeCirclePages.jsx",
                                lineNumber: 590,
                                columnNumber: 15
                            }, this)))
                }, void 0, false, {
                    fileName: "[project]/components/VibeCirclePages.jsx",
                    lineNumber: 587,
                    columnNumber: 9
                }, this)
            }, void 0, false, {
                fileName: "[project]/components/VibeCirclePages.jsx",
                lineNumber: 586,
                columnNumber: 7
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/components/VibeCirclePages.jsx",
        lineNumber: 481,
        columnNumber: 5
    }, this);
}
// ══════════════════════════════════════════════════════════════════════════════
// PAGE: BUSINESS
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
function BusinessPage() {
    const [active, setActive] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["useState"])(0);
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        style: {
            background: C.bg,
            color: C.white
        },
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])(PageHero, {
                tag: "VibeCircle for Business",
                title: "Turn foot traffic into",
                accent: "digital gravity.",
                sub: "When your location pulses on the map, people don't just see you — they find you."
            }, void 0, false, {
                fileName: "[project]/components/VibeCirclePages.jsx",
                lineNumber: 620,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])(Divider, {}, void 0, false, {
                fileName: "[project]/components/VibeCirclePages.jsx",
                lineNumber: 627,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("section", {
                style: {
                    padding: "100px 64px",
                    background: C.bg2
                },
                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    style: {
                        maxWidth: "1100px",
                        margin: "0 auto"
                    },
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])(Reveal, {
                            style: {
                                marginBottom: "64px"
                            },
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])(Tag, {
                                    children: "Business Tools"
                                }, void 0, false, {
                                    fileName: "[project]/components/VibeCirclePages.jsx",
                                    lineNumber: 633,
                                    columnNumber: 13
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("h2", {
                                    style: {
                                        fontFamily: "'Bebas Neue', sans-serif",
                                        fontSize: "clamp(36px,5vw,58px)",
                                        color: C.white,
                                        lineHeight: 1,
                                        marginTop: "16px"
                                    },
                                    children: [
                                        "Everything you need",
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("br", {}, void 0, false, {
                                            fileName: "[project]/components/VibeCirclePages.jsx",
                                            lineNumber: 635,
                                            columnNumber: 34
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                            style: {
                                                color: C.orange
                                            },
                                            children: "in one place."
                                        }, void 0, false, {
                                            fileName: "[project]/components/VibeCirclePages.jsx",
                                            lineNumber: 635,
                                            columnNumber: 40
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/components/VibeCirclePages.jsx",
                                    lineNumber: 634,
                                    columnNumber: 13
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "[project]/components/VibeCirclePages.jsx",
                            lineNumber: 632,
                            columnNumber: 11
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            style: {
                                display: "grid",
                                gridTemplateColumns: "1fr 1.4fr",
                                gap: "32px"
                            },
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    style: {
                                        display: "flex",
                                        flexDirection: "column",
                                        gap: "8px"
                                    },
                                    children: BIZ_TOOLS.map((t, i)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            onClick: ()=>setActive(i),
                                            style: {
                                                padding: "20px 24px",
                                                background: active === i ? "rgba(255,107,0,0.1)" : "rgba(255,255,255,0.02)",
                                                border: active === i ? `1px solid ${C.orange}60` : "1px solid rgba(255,255,255,0.06)",
                                                borderRadius: "4px",
                                                display: "flex",
                                                alignItems: "center",
                                                gap: "16px",
                                                cursor: "pointer",
                                                transition: "all 0.25s"
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
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                    style: {
                                                        fontSize: "18px"
                                                    },
                                                    children: t.icon
                                                }, void 0, false, {
                                                    fileName: "[project]/components/VibeCirclePages.jsx",
                                                    lineNumber: 656,
                                                    columnNumber: 19
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                    children: [
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                            style: {
                                                                fontFamily: "'Bebas Neue', sans-serif",
                                                                fontSize: "17px",
                                                                color: active === i ? C.orange : C.white,
                                                                letterSpacing: "0.5px"
                                                            },
                                                            children: t.title
                                                        }, void 0, false, {
                                                            fileName: "[project]/components/VibeCirclePages.jsx",
                                                            lineNumber: 658,
                                                            columnNumber: 21
                                                        }, this),
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                            style: {
                                                                fontFamily: "'DM Sans', sans-serif",
                                                                fontSize: "11px",
                                                                letterSpacing: "2px",
                                                                color: C.dimmer,
                                                                textTransform: "uppercase",
                                                                marginTop: "2px"
                                                            },
                                                            children: t.num
                                                        }, void 0, false, {
                                                            fileName: "[project]/components/VibeCirclePages.jsx",
                                                            lineNumber: 659,
                                                            columnNumber: 21
                                                        }, this)
                                                    ]
                                                }, void 0, true, {
                                                    fileName: "[project]/components/VibeCirclePages.jsx",
                                                    lineNumber: 657,
                                                    columnNumber: 19
                                                }, this),
                                                active === i && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                    style: {
                                                        marginLeft: "auto",
                                                        color: C.orange
                                                    },
                                                    children: "→"
                                                }, void 0, false, {
                                                    fileName: "[project]/components/VibeCirclePages.jsx",
                                                    lineNumber: 661,
                                                    columnNumber: 36
                                                }, this)
                                            ]
                                        }, i, true, {
                                            fileName: "[project]/components/VibeCirclePages.jsx",
                                            lineNumber: 643,
                                            columnNumber: 17
                                        }, this))
                                }, void 0, false, {
                                    fileName: "[project]/components/VibeCirclePages.jsx",
                                    lineNumber: 641,
                                    columnNumber: 13
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    style: {
                                        padding: "48px",
                                        background: "rgba(255,255,255,0.02)",
                                        border: `1px solid ${C.border}`,
                                        borderRadius: "4px",
                                        animation: "fadeIn 0.3s ease forwards",
                                        position: "relative",
                                        overflow: "hidden"
                                    },
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])(Orb, {
                                            top: "-30%",
                                            right: "-20%",
                                            size: 300,
                                            opacity: 0.15
                                        }, void 0, false, {
                                            fileName: "[project]/components/VibeCirclePages.jsx",
                                            lineNumber: 675,
                                            columnNumber: 15
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            style: {
                                                fontSize: "48px",
                                                marginBottom: "24px"
                                            },
                                            children: BIZ_TOOLS[active].icon
                                        }, void 0, false, {
                                            fileName: "[project]/components/VibeCirclePages.jsx",
                                            lineNumber: 676,
                                            columnNumber: 15
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            style: {
                                                fontFamily: "'Bebas Neue', sans-serif",
                                                fontSize: "clamp(28px,3vw,42px)",
                                                color: C.orange,
                                                lineHeight: 1,
                                                marginBottom: "20px"
                                            },
                                            children: BIZ_TOOLS[active].title
                                        }, void 0, false, {
                                            fileName: "[project]/components/VibeCirclePages.jsx",
                                            lineNumber: 677,
                                            columnNumber: 15
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                            style: {
                                                fontFamily: "'DM Sans', sans-serif",
                                                fontSize: "18px",
                                                color: C.dim,
                                                lineHeight: 1.8,
                                                marginBottom: "36px"
                                            },
                                            children: BIZ_TOOLS[active].desc
                                        }, void 0, false, {
                                            fileName: "[project]/components/VibeCirclePages.jsx",
                                            lineNumber: 678,
                                            columnNumber: 15
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            style: {
                                                width: "100%",
                                                height: "2px",
                                                background: `linear-gradient(90deg, ${C.orange}, ${C.pink})`,
                                                borderRadius: "1px",
                                                transformOrigin: "left",
                                                animation: "lineGrow 0.4s ease forwards"
                                            }
                                        }, void 0, false, {
                                            fileName: "[project]/components/VibeCirclePages.jsx",
                                            lineNumber: 679,
                                            columnNumber: 15
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                            style: {
                                                fontFamily: "'DM Sans', sans-serif",
                                                fontSize: "13px",
                                                color: C.dimmer,
                                                marginTop: "24px"
                                            },
                                            children: [
                                                "Step ",
                                                BIZ_TOOLS[active].num,
                                                " of 06"
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/components/VibeCirclePages.jsx",
                                            lineNumber: 686,
                                            columnNumber: 15
                                        }, this)
                                    ]
                                }, active, true, {
                                    fileName: "[project]/components/VibeCirclePages.jsx",
                                    lineNumber: 667,
                                    columnNumber: 13
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "[project]/components/VibeCirclePages.jsx",
                            lineNumber: 639,
                            columnNumber: 11
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "[project]/components/VibeCirclePages.jsx",
                    lineNumber: 631,
                    columnNumber: 9
                }, this)
            }, void 0, false, {
                fileName: "[project]/components/VibeCirclePages.jsx",
                lineNumber: 630,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])(Divider, {}, void 0, false, {
                fileName: "[project]/components/VibeCirclePages.jsx",
                lineNumber: 694,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("section", {
                style: {
                    padding: "100px 64px",
                    overflow: "hidden",
                    position: "relative"
                },
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])(Orb, {
                        bottom: "-10%",
                        left: "30%",
                        size: 500,
                        color: C.pink,
                        opacity: 0.07,
                        delay: "1s"
                    }, void 0, false, {
                        fileName: "[project]/components/VibeCirclePages.jsx",
                        lineNumber: 698,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        style: {
                            maxWidth: "1100px",
                            margin: "0 auto"
                        },
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])(Reveal, {
                                style: {
                                    marginBottom: "72px"
                                },
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])(Tag, {
                                        children: "How It Works"
                                    }, void 0, false, {
                                        fileName: "[project]/components/VibeCirclePages.jsx",
                                        lineNumber: 701,
                                        columnNumber: 13
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("h2", {
                                        style: {
                                            fontFamily: "'Bebas Neue', sans-serif",
                                            fontSize: "clamp(36px,5vw,58px)",
                                            color: C.white,
                                            lineHeight: 1,
                                            marginTop: "16px"
                                        },
                                        children: [
                                            "Three steps to",
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("br", {}, void 0, false, {
                                                fileName: "[project]/components/VibeCirclePages.jsx",
                                                lineNumber: 703,
                                                columnNumber: 29
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                style: {
                                                    color: C.orange
                                                },
                                                children: "becoming a vibe."
                                            }, void 0, false, {
                                                fileName: "[project]/components/VibeCirclePages.jsx",
                                                lineNumber: 703,
                                                columnNumber: 35
                                            }, this)
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/components/VibeCirclePages.jsx",
                                        lineNumber: 702,
                                        columnNumber: 13
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/components/VibeCirclePages.jsx",
                                lineNumber: 700,
                                columnNumber: 11
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                style: {
                                    display: "grid",
                                    gridTemplateColumns: "repeat(3,1fr)",
                                    gap: "2px"
                                },
                                children: [
                                    {
                                        n: "1",
                                        h: "Claim & Set Up",
                                        b: "Register your business, claim your location on the map, and customize your profile to reflect your brand's energy."
                                    },
                                    {
                                        n: "2",
                                        h: "Activate & Broadcast",
                                        b: "Launch promotions, create events, go live, and start sending your energy out into the city ecosystem."
                                    },
                                    {
                                        n: "3",
                                        h: "Grow & Measure",
                                        b: "Watch engagement climb. Track real-world foot traffic. Iterate with real-time data and keep your vibe growing."
                                    }
                                ].map((s, i)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])(Reveal, {
                                        delay: i * 0.15,
                                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            style: {
                                                padding: "48px 36px",
                                                background: i === 1 ? "rgba(255,107,0,0.06)" : "rgba(255,255,255,0.02)",
                                                border: i === 1 ? `1px solid ${C.orange}40` : "1px solid rgba(255,255,255,0.06)",
                                                height: "100%"
                                            },
                                            children: [
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                    style: {
                                                        fontFamily: "'Bebas Neue', sans-serif",
                                                        fontSize: "64px",
                                                        color: i === 1 ? C.orange : "rgba(255,255,255,0.08)",
                                                        lineHeight: 1,
                                                        marginBottom: "20px"
                                                    },
                                                    children: s.n
                                                }, void 0, false, {
                                                    fileName: "[project]/components/VibeCirclePages.jsx",
                                                    lineNumber: 719,
                                                    columnNumber: 19
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                    style: {
                                                        fontFamily: "'Bebas Neue', sans-serif",
                                                        fontSize: "22px",
                                                        color: C.white,
                                                        marginBottom: "16px"
                                                    },
                                                    children: s.h
                                                }, void 0, false, {
                                                    fileName: "[project]/components/VibeCirclePages.jsx",
                                                    lineNumber: 724,
                                                    columnNumber: 19
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                    style: {
                                                        fontFamily: "'DM Sans', sans-serif",
                                                        fontSize: "15px",
                                                        color: C.dim,
                                                        lineHeight: 1.7
                                                    },
                                                    children: s.b
                                                }, void 0, false, {
                                                    fileName: "[project]/components/VibeCirclePages.jsx",
                                                    lineNumber: 725,
                                                    columnNumber: 19
                                                }, this)
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/components/VibeCirclePages.jsx",
                                            lineNumber: 713,
                                            columnNumber: 17
                                        }, this)
                                    }, i, false, {
                                        fileName: "[project]/components/VibeCirclePages.jsx",
                                        lineNumber: 712,
                                        columnNumber: 15
                                    }, this))
                            }, void 0, false, {
                                fileName: "[project]/components/VibeCirclePages.jsx",
                                lineNumber: 706,
                                columnNumber: 11
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/components/VibeCirclePages.jsx",
                        lineNumber: 699,
                        columnNumber: 9
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/components/VibeCirclePages.jsx",
                lineNumber: 697,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("section", {
                style: {
                    padding: "80px 64px",
                    background: C.bg2
                },
                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])(Reveal, {
                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        style: {
                            maxWidth: "1100px",
                            margin: "0 auto",
                            padding: "60px 64px",
                            background: `linear-gradient(135deg, rgba(255,107,0,0.12) 0%, rgba(255,45,120,0.06) 100%)`,
                            border: `1px solid ${C.orange}25`,
                            borderRadius: "4px",
                            display: "flex",
                            alignItems: "center",
                            justifyContent: "space-between",
                            gap: "32px",
                            flexWrap: "wrap"
                        },
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    style: {
                                        fontFamily: "'Bebas Neue', sans-serif",
                                        fontSize: "clamp(28px,4vw,48px)",
                                        color: C.white,
                                        lineHeight: 1
                                    },
                                    children: [
                                        "Ready to make your",
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("br", {}, void 0, false, {
                                            fileName: "[project]/components/VibeCirclePages.jsx",
                                            lineNumber: 747,
                                            columnNumber: 35
                                        }, this),
                                        "location ",
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                            style: {
                                                color: C.orange
                                            },
                                            children: "pulse?"
                                        }, void 0, false, {
                                            fileName: "[project]/components/VibeCirclePages.jsx",
                                            lineNumber: 747,
                                            columnNumber: 50
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/components/VibeCirclePages.jsx",
                                    lineNumber: 746,
                                    columnNumber: 15
                                }, this)
                            }, void 0, false, {
                                fileName: "[project]/components/VibeCirclePages.jsx",
                                lineNumber: 745,
                                columnNumber: 13
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                style: {
                                    display: "flex",
                                    gap: "16px",
                                    flexWrap: "wrap"
                                },
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                        style: {
                                            fontFamily: "'Bebas Neue', sans-serif",
                                            fontSize: "15px",
                                            letterSpacing: "3px",
                                            padding: "16px 40px",
                                            background: C.orange,
                                            color: C.bg,
                                            border: "none",
                                            borderRadius: "2px",
                                            cursor: "pointer",
                                            transition: "box-shadow 0.2s"
                                        },
                                        onMouseEnter: (e)=>e.target.style.boxShadow = `0 12px 40px ${C.orange}40`,
                                        onMouseLeave: (e)=>e.target.style.boxShadow = "none",
                                        children: "Get Started Free"
                                    }, void 0, false, {
                                        fileName: "[project]/components/VibeCirclePages.jsx",
                                        lineNumber: 751,
                                        columnNumber: 15
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                        style: {
                                            fontFamily: "'Bebas Neue', sans-serif",
                                            fontSize: "15px",
                                            letterSpacing: "3px",
                                            padding: "16px 40px",
                                            background: "transparent",
                                            color: C.white,
                                            border: "1px solid rgba(255,255,255,0.2)",
                                            borderRadius: "2px",
                                            cursor: "pointer",
                                            transition: "all 0.2s"
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
                                        lineNumber: 760,
                                        columnNumber: 15
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/components/VibeCirclePages.jsx",
                                lineNumber: 750,
                                columnNumber: 13
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/components/VibeCirclePages.jsx",
                        lineNumber: 736,
                        columnNumber: 11
                    }, this)
                }, void 0, false, {
                    fileName: "[project]/components/VibeCirclePages.jsx",
                    lineNumber: 735,
                    columnNumber: 9
                }, this)
            }, void 0, false, {
                fileName: "[project]/components/VibeCirclePages.jsx",
                lineNumber: 734,
                columnNumber: 7
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/components/VibeCirclePages.jsx",
        lineNumber: 619,
        columnNumber: 5
    }, this);
}
// ══════════════════════════════════════════════════════════════════════════════
// PAGE: JOBS
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
    }
];
const PERKS = [
    {
        icon: "🏛️",
        title: "Real Ownership",
        desc: "Every role carries real responsibility. No busywork, no hand-holding."
    },
    {
        icon: "💎",
        title: "Equity Opportunities",
        desc: "Build something you co-own. Equity offered across roles."
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
const DEPT_COLORS = {
    Engineering: C.orange,
    Design: "#00D4FF",
    Marketing: "#FF2D78",
    Community: "#9B59FF",
    Creators: "#FFD700"
};
function JobsPage() {
    const [filter, setFilter] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["useState"])("All");
    const [expanded, setExpanded] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["useState"])(null);
    const depts = [
        "All",
        ...Object.keys(DEPT_COLORS)
    ];
    const filtered = filter === "All" ? ROLES : ROLES.filter((r)=>r.dept === filter);
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        style: {
            background: C.bg,
            color: C.white
        },
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])(PageHero, {
                tag: "Careers",
                title: "We don't hire for roles.",
                accent: "We hire builders.",
                sub: "Ambitious, fast-moving, impact-driven. Join a team building infrastructure for modern city culture."
            }, void 0, false, {
                fileName: "[project]/components/VibeCirclePages.jsx",
                lineNumber: 813,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])(Divider, {}, void 0, false, {
                fileName: "[project]/components/VibeCirclePages.jsx",
                lineNumber: 820,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("section", {
                style: {
                    padding: "100px 64px",
                    background: C.bg2
                },
                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    style: {
                        maxWidth: "1100px",
                        margin: "0 auto"
                    },
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])(Reveal, {
                            style: {
                                marginBottom: "56px"
                            },
                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])(Tag, {
                                children: "What You Get"
                            }, void 0, false, {
                                fileName: "[project]/components/VibeCirclePages.jsx",
                                lineNumber: 826,
                                columnNumber: 13
                            }, this)
                        }, void 0, false, {
                            fileName: "[project]/components/VibeCirclePages.jsx",
                            lineNumber: 825,
                            columnNumber: 11
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            style: {
                                display: "grid",
                                gridTemplateColumns: "repeat(auto-fit, minmax(220px,1fr))",
                                gap: "20px"
                            },
                            children: PERKS.map((p, i)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])(Reveal, {
                                    delay: i * 0.1,
                                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        style: {
                                            padding: "36px 28px",
                                            background: "rgba(255,255,255,0.02)",
                                            border: "1px solid rgba(255,255,255,0.07)",
                                            borderRadius: "4px",
                                            height: "100%",
                                            transition: "all 0.3s"
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
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                style: {
                                                    fontSize: "28px",
                                                    marginBottom: "16px"
                                                },
                                                children: p.icon
                                            }, void 0, false, {
                                                fileName: "[project]/components/VibeCirclePages.jsx",
                                                lineNumber: 841,
                                                columnNumber: 19
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                style: {
                                                    fontFamily: "'Bebas Neue', sans-serif",
                                                    fontSize: "20px",
                                                    color: C.white,
                                                    marginBottom: "12px"
                                                },
                                                children: p.title
                                            }, void 0, false, {
                                                fileName: "[project]/components/VibeCirclePages.jsx",
                                                lineNumber: 842,
                                                columnNumber: 19
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                style: {
                                                    fontFamily: "'DM Sans', sans-serif",
                                                    fontSize: "14px",
                                                    color: C.dim,
                                                    lineHeight: 1.7
                                                },
                                                children: p.desc
                                            }, void 0, false, {
                                                fileName: "[project]/components/VibeCirclePages.jsx",
                                                lineNumber: 843,
                                                columnNumber: 19
                                            }, this)
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/components/VibeCirclePages.jsx",
                                        lineNumber: 831,
                                        columnNumber: 17
                                    }, this)
                                }, i, false, {
                                    fileName: "[project]/components/VibeCirclePages.jsx",
                                    lineNumber: 830,
                                    columnNumber: 15
                                }, this))
                        }, void 0, false, {
                            fileName: "[project]/components/VibeCirclePages.jsx",
                            lineNumber: 828,
                            columnNumber: 11
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "[project]/components/VibeCirclePages.jsx",
                    lineNumber: 824,
                    columnNumber: 9
                }, this)
            }, void 0, false, {
                fileName: "[project]/components/VibeCirclePages.jsx",
                lineNumber: 823,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])(Divider, {}, void 0, false, {
                fileName: "[project]/components/VibeCirclePages.jsx",
                lineNumber: 851,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("section", {
                style: {
                    padding: "100px 64px",
                    position: "relative",
                    overflow: "hidden"
                },
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])(Orb, {
                        top: "0%",
                        right: "-5%",
                        size: 450,
                        opacity: 0.08
                    }, void 0, false, {
                        fileName: "[project]/components/VibeCirclePages.jsx",
                        lineNumber: 855,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        style: {
                            maxWidth: "1100px",
                            margin: "0 auto"
                        },
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])(Reveal, {
                                style: {
                                    marginBottom: "48px"
                                },
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])(Tag, {
                                        children: "Open Roles"
                                    }, void 0, false, {
                                        fileName: "[project]/components/VibeCirclePages.jsx",
                                        lineNumber: 858,
                                        columnNumber: 13
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("h2", {
                                        style: {
                                            fontFamily: "'Bebas Neue', sans-serif",
                                            fontSize: "clamp(36px,5vw,58px)",
                                            color: C.white,
                                            lineHeight: 1,
                                            marginTop: "16px"
                                        },
                                        children: [
                                            "Find your",
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("br", {}, void 0, false, {
                                                fileName: "[project]/components/VibeCirclePages.jsx",
                                                lineNumber: 860,
                                                columnNumber: 24
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                style: {
                                                    color: C.orange
                                                },
                                                children: "position in the vibe."
                                            }, void 0, false, {
                                                fileName: "[project]/components/VibeCirclePages.jsx",
                                                lineNumber: 860,
                                                columnNumber: 30
                                            }, this)
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/components/VibeCirclePages.jsx",
                                        lineNumber: 859,
                                        columnNumber: 13
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/components/VibeCirclePages.jsx",
                                lineNumber: 857,
                                columnNumber: 11
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                style: {
                                    display: "flex",
                                    gap: "8px",
                                    flexWrap: "wrap",
                                    marginBottom: "40px"
                                },
                                children: depts.map((d)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                        onClick: ()=>setFilter(d),
                                        style: {
                                            fontFamily: "'Bebas Neue', sans-serif",
                                            fontSize: "13px",
                                            letterSpacing: "2px",
                                            padding: "9px 20px",
                                            background: filter === d ? DEPT_COLORS[d] || C.orange : "transparent",
                                            color: filter === d ? C.bg : C.dim,
                                            border: `1px solid ${filter === d ? DEPT_COLORS[d] || C.orange : "rgba(255,255,255,0.12)"}`,
                                            borderRadius: "2px",
                                            cursor: "pointer",
                                            transition: "all 0.2s"
                                        },
                                        onMouseEnter: (e)=>{
                                            if (filter !== d) {
                                                e.currentTarget.style.borderColor = DEPT_COLORS[d] || C.orange;
                                                e.currentTarget.style.color = C.white;
                                            }
                                        },
                                        onMouseLeave: (e)=>{
                                            if (filter !== d) {
                                                e.currentTarget.style.borderColor = "rgba(255,255,255,0.12)";
                                                e.currentTarget.style.color = C.dim;
                                            }
                                        },
                                        children: d
                                    }, d, false, {
                                        fileName: "[project]/components/VibeCirclePages.jsx",
                                        lineNumber: 867,
                                        columnNumber: 15
                                    }, this))
                            }, void 0, false, {
                                fileName: "[project]/components/VibeCirclePages.jsx",
                                lineNumber: 865,
                                columnNumber: 11
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                style: {
                                    display: "flex",
                                    flexDirection: "column",
                                    gap: "12px"
                                },
                                children: filtered.map((role, i)=>{
                                    const isOpen = expanded === i;
                                    const dColor = DEPT_COLORS[role.dept] || C.orange;
                                    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])(Reveal, {
                                        delay: i * 0.06,
                                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            style: {
                                                background: isOpen ? `${dColor}0A` : "rgba(255,255,255,0.02)",
                                                border: `1px solid ${isOpen ? dColor + "50" : "rgba(255,255,255,0.07)"}`,
                                                borderRadius: "4px",
                                                overflow: "hidden",
                                                transition: "all 0.3s"
                                            },
                                            children: [
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                    onClick: ()=>setExpanded(isOpen ? null : i),
                                                    style: {
                                                        padding: "24px 32px",
                                                        display: "flex",
                                                        alignItems: "center",
                                                        gap: "20px",
                                                        cursor: "pointer"
                                                    },
                                                    children: [
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                            style: {
                                                                flex: 1
                                                            },
                                                            children: [
                                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                                    style: {
                                                                        fontFamily: "'DM Sans', sans-serif",
                                                                        fontSize: "17px",
                                                                        fontWeight: 600,
                                                                        color: C.white
                                                                    },
                                                                    children: role.title
                                                                }, void 0, false, {
                                                                    fileName: "[project]/components/VibeCirclePages.jsx",
                                                                    lineNumber: 907,
                                                                    columnNumber: 25
                                                                }, this),
                                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                                    style: {
                                                                        display: "flex",
                                                                        gap: "12px",
                                                                        marginTop: "6px",
                                                                        flexWrap: "wrap"
                                                                    },
                                                                    children: [
                                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                                            style: {
                                                                                fontFamily: "'Bebas Neue', sans-serif",
                                                                                fontSize: "11px",
                                                                                letterSpacing: "2px",
                                                                                color: dColor
                                                                            },
                                                                            children: role.dept
                                                                        }, void 0, false, {
                                                                            fileName: "[project]/components/VibeCirclePages.jsx",
                                                                            lineNumber: 909,
                                                                            columnNumber: 27
                                                                        }, this),
                                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                                            style: {
                                                                                fontFamily: "'DM Sans', sans-serif",
                                                                                fontSize: "12px",
                                                                                color: C.dimmer
                                                                            },
                                                                            children: "·"
                                                                        }, void 0, false, {
                                                                            fileName: "[project]/components/VibeCirclePages.jsx",
                                                                            lineNumber: 910,
                                                                            columnNumber: 27
                                                                        }, this),
                                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                                            style: {
                                                                                fontFamily: "'DM Sans', sans-serif",
                                                                                fontSize: "12px",
                                                                                color: C.dimmer
                                                                            },
                                                                            children: role.type
                                                                        }, void 0, false, {
                                                                            fileName: "[project]/components/VibeCirclePages.jsx",
                                                                            lineNumber: 911,
                                                                            columnNumber: 27
                                                                        }, this),
                                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                                            style: {
                                                                                fontFamily: "'DM Sans', sans-serif",
                                                                                fontSize: "12px",
                                                                                color: C.dimmer
                                                                            },
                                                                            children: "·"
                                                                        }, void 0, false, {
                                                                            fileName: "[project]/components/VibeCirclePages.jsx",
                                                                            lineNumber: 912,
                                                                            columnNumber: 27
                                                                        }, this),
                                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                                            style: {
                                                                                fontFamily: "'DM Sans', sans-serif",
                                                                                fontSize: "12px",
                                                                                color: C.dimmer
                                                                            },
                                                                            children: role.level
                                                                        }, void 0, false, {
                                                                            fileName: "[project]/components/VibeCirclePages.jsx",
                                                                            lineNumber: 913,
                                                                            columnNumber: 27
                                                                        }, this)
                                                                    ]
                                                                }, void 0, true, {
                                                                    fileName: "[project]/components/VibeCirclePages.jsx",
                                                                    lineNumber: 908,
                                                                    columnNumber: 25
                                                                }, this)
                                                            ]
                                                        }, void 0, true, {
                                                            fileName: "[project]/components/VibeCirclePages.jsx",
                                                            lineNumber: 906,
                                                            columnNumber: 23
                                                        }, this),
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                            style: {
                                                                width: "32px",
                                                                height: "32px",
                                                                border: `1px solid ${isOpen ? dColor : "rgba(255,255,255,0.12)"}`,
                                                                borderRadius: "50%",
                                                                display: "flex",
                                                                alignItems: "center",
                                                                justifyContent: "center",
                                                                color: isOpen ? dColor : C.dimmer,
                                                                fontSize: "18px",
                                                                transition: "all 0.3s",
                                                                transform: isOpen ? "rotate(45deg)" : "none"
                                                            },
                                                            children: "+"
                                                        }, void 0, false, {
                                                            fileName: "[project]/components/VibeCirclePages.jsx",
                                                            lineNumber: 916,
                                                            columnNumber: 23
                                                        }, this)
                                                    ]
                                                }, void 0, true, {
                                                    fileName: "[project]/components/VibeCirclePages.jsx",
                                                    lineNumber: 898,
                                                    columnNumber: 21
                                                }, this),
                                                isOpen && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                    style: {
                                                        padding: "0 32px 32px",
                                                        animation: "fadeUp 0.3s ease forwards"
                                                    },
                                                    children: [
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                            style: {
                                                                height: "1px",
                                                                background: `${dColor}30`,
                                                                marginBottom: "28px"
                                                            }
                                                        }, void 0, false, {
                                                            fileName: "[project]/components/VibeCirclePages.jsx",
                                                            lineNumber: 934,
                                                            columnNumber: 25
                                                        }, this),
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                            style: {
                                                                fontFamily: "'DM Sans', sans-serif",
                                                                fontSize: "16px",
                                                                color: C.dim,
                                                                lineHeight: 1.8,
                                                                marginBottom: "28px"
                                                            },
                                                            children: role.desc
                                                        }, void 0, false, {
                                                            fileName: "[project]/components/VibeCirclePages.jsx",
                                                            lineNumber: 935,
                                                            columnNumber: 25
                                                        }, this),
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                                            style: {
                                                                fontFamily: "'Bebas Neue', sans-serif",
                                                                fontSize: "14px",
                                                                letterSpacing: "3px",
                                                                padding: "13px 32px",
                                                                background: dColor,
                                                                color: C.bg,
                                                                border: "none",
                                                                borderRadius: "2px",
                                                                cursor: "pointer"
                                                            },
                                                            children: "Apply for This Role"
                                                        }, void 0, false, {
                                                            fileName: "[project]/components/VibeCirclePages.jsx",
                                                            lineNumber: 936,
                                                            columnNumber: 25
                                                        }, this)
                                                    ]
                                                }, void 0, true, {
                                                    fileName: "[project]/components/VibeCirclePages.jsx",
                                                    lineNumber: 930,
                                                    columnNumber: 23
                                                }, this)
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/components/VibeCirclePages.jsx",
                                            lineNumber: 890,
                                            columnNumber: 19
                                        }, this)
                                    }, role.title, false, {
                                        fileName: "[project]/components/VibeCirclePages.jsx",
                                        lineNumber: 889,
                                        columnNumber: 17
                                    }, this);
                                })
                            }, void 0, false, {
                                fileName: "[project]/components/VibeCirclePages.jsx",
                                lineNumber: 884,
                                columnNumber: 11
                            }, this),
                            filtered.length === 0 && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                style: {
                                    textAlign: "center",
                                    padding: "60px",
                                    color: C.dimmer,
                                    fontFamily: "'DM Sans', sans-serif"
                                },
                                children: "No roles in this department right now. Check back soon."
                            }, void 0, false, {
                                fileName: "[project]/components/VibeCirclePages.jsx",
                                lineNumber: 951,
                                columnNumber: 13
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/components/VibeCirclePages.jsx",
                        lineNumber: 856,
                        columnNumber: 9
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/components/VibeCirclePages.jsx",
                lineNumber: 854,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("section", {
                style: {
                    background: C.orange,
                    padding: "80px 64px"
                },
                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    style: {
                        maxWidth: "1100px",
                        margin: "0 auto",
                        display: "flex",
                        alignItems: "center",
                        justifyContent: "space-between",
                        flexWrap: "wrap",
                        gap: "32px"
                    },
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    style: {
                                        fontFamily: "'Bebas Neue', sans-serif",
                                        fontSize: "clamp(28px,4vw,48px)",
                                        color: C.bg,
                                        lineHeight: 1
                                    },
                                    children: [
                                        "Don't see your role?",
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("br", {}, void 0, false, {
                                            fileName: "[project]/components/VibeCirclePages.jsx",
                                            lineNumber: 963,
                                            columnNumber: 35
                                        }, this),
                                        "Build your own."
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/components/VibeCirclePages.jsx",
                                    lineNumber: 962,
                                    columnNumber: 13
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                    style: {
                                        fontFamily: "'DM Sans', sans-serif",
                                        fontSize: "16px",
                                        color: "rgba(5,5,10,0.6)",
                                        marginTop: "12px"
                                    },
                                    children: "Send us your story at careers@vibecircle.com"
                                }, void 0, false, {
                                    fileName: "[project]/components/VibeCirclePages.jsx",
                                    lineNumber: 965,
                                    columnNumber: 13
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "[project]/components/VibeCirclePages.jsx",
                            lineNumber: 961,
                            columnNumber: 11
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                            style: {
                                fontFamily: "'Bebas Neue', sans-serif",
                                fontSize: "16px",
                                letterSpacing: "3px",
                                padding: "18px 44px",
                                background: C.bg,
                                color: C.orange,
                                border: "none",
                                borderRadius: "2px",
                                cursor: "pointer",
                                transition: "transform 0.2s"
                            },
                            onMouseEnter: (e)=>e.target.style.transform = "translateY(-2px)",
                            onMouseLeave: (e)=>e.target.style.transform = "",
                            children: "Get in Touch"
                        }, void 0, false, {
                            fileName: "[project]/components/VibeCirclePages.jsx",
                            lineNumber: 969,
                            columnNumber: 11
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "[project]/components/VibeCirclePages.jsx",
                    lineNumber: 960,
                    columnNumber: 9
                }, this)
            }, void 0, false, {
                fileName: "[project]/components/VibeCirclePages.jsx",
                lineNumber: 959,
                columnNumber: 7
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/components/VibeCirclePages.jsx",
        lineNumber: 812,
        columnNumber: 5
    }, this);
}
// ══════════════════════════════════════════════════════════════════════════════
// HOME LANDING
// ══════════════════════════════════════════════════════════════════════════════
function HomePage({ setPage }) {
    const words = [
        "Pulse",
        "Gravity",
        "Energy",
        "Discovery",
        "Movement",
        "Culture",
        "Alive"
    ];
    const [wi, setWi] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["useState"])(0);
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["useEffect"])(()=>{
        const id = setInterval(()=>setWi((w)=>w + 1), 2200);
        return ()=>clearInterval(id);
    }, []);
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("section", {
        style: {
            minHeight: "100vh",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            background: C.bg,
            position: "relative",
            overflow: "hidden",
            padding: "120px 48px"
        },
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                style: {
                    position: "absolute",
                    inset: 0,
                    backgroundImage: `linear-gradient(${C.orange}05 1px, transparent 1px), linear-gradient(90deg, ${C.orange}05 1px, transparent 1px)`,
                    backgroundSize: "60px 60px"
                }
            }, void 0, false, {
                fileName: "[project]/components/VibeCirclePages.jsx",
                lineNumber: 999,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])(Orb, {
                top: "5%",
                left: "-8%",
                size: 600,
                opacity: 0.12
            }, void 0, false, {
                fileName: "[project]/components/VibeCirclePages.jsx",
                lineNumber: 1004,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])(Orb, {
                bottom: "0%",
                right: "-5%",
                size: 500,
                color: C.pink,
                opacity: 0.08,
                delay: "3s"
            }, void 0, false, {
                fileName: "[project]/components/VibeCirclePages.jsx",
                lineNumber: 1005,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                style: {
                    position: "relative",
                    zIndex: 2,
                    textAlign: "center",
                    maxWidth: "950px"
                },
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        style: {
                            fontFamily: "'Bebas Neue', sans-serif",
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
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                style: {
                                    width: 40,
                                    height: 1,
                                    background: C.orange,
                                    display: "inline-block"
                                }
                            }, void 0, false, {
                                fileName: "[project]/components/VibeCirclePages.jsx",
                                lineNumber: 1009,
                                columnNumber: 11
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                style: {
                                    display: "inline-block",
                                    animation: "fadeUp 0.4s ease forwards",
                                    opacity: 0
                                },
                                children: words[wi % words.length]
                            }, wi, false, {
                                fileName: "[project]/components/VibeCirclePages.jsx",
                                lineNumber: 1010,
                                columnNumber: 11
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                style: {
                                    width: 40,
                                    height: 1,
                                    background: C.orange,
                                    display: "inline-block"
                                }
                            }, void 0, false, {
                                fileName: "[project]/components/VibeCirclePages.jsx",
                                lineNumber: 1011,
                                columnNumber: 11
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/components/VibeCirclePages.jsx",
                        lineNumber: 1008,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("h1", {
                        style: {
                            fontFamily: "'Bebas Neue', sans-serif",
                            fontSize: "clamp(56px,10vw,120px)",
                            lineHeight: 0.9,
                            color: C.white,
                            marginBottom: "16px"
                        },
                        children: [
                            "IT'S NOT",
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("br", {}, void 0, false, {
                                fileName: "[project]/components/VibeCirclePages.jsx",
                                lineNumber: 1014,
                                columnNumber: 19
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                style: {
                                    WebkitTextStroke: "2px #FF6B00",
                                    color: "transparent"
                                },
                                children: "SOCIAL MEDIA."
                            }, void 0, false, {
                                fileName: "[project]/components/VibeCirclePages.jsx",
                                lineNumber: 1015,
                                columnNumber: 11
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("br", {}, void 0, false, {
                                fileName: "[project]/components/VibeCirclePages.jsx",
                                lineNumber: 1015,
                                columnNumber: 103
                            }, this),
                            "IT'S SOCIAL",
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("br", {}, void 0, false, {
                                fileName: "[project]/components/VibeCirclePages.jsx",
                                lineNumber: 1016,
                                columnNumber: 22
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                style: {
                                    color: C.orange
                                },
                                children: "GRAVITY."
                            }, void 0, false, {
                                fileName: "[project]/components/VibeCirclePages.jsx",
                                lineNumber: 1017,
                                columnNumber: 11
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/components/VibeCirclePages.jsx",
                        lineNumber: 1013,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                        style: {
                            fontFamily: "'DM Sans', sans-serif",
                            fontSize: "clamp(16px,2vw,20px)",
                            color: C.dim,
                            margin: "36px auto 52px",
                            maxWidth: "520px",
                            lineHeight: 1.75
                        },
                        children: "Where creators, cities, events, and businesses connect in real time."
                    }, void 0, false, {
                        fileName: "[project]/components/VibeCirclePages.jsx",
                        lineNumber: 1019,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        style: {
                            display: "flex",
                            gap: "16px",
                            justifyContent: "center",
                            flexWrap: "wrap",
                            marginBottom: "72px"
                        },
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                style: {
                                    fontFamily: "'Bebas Neue', sans-serif",
                                    fontSize: "16px",
                                    letterSpacing: "3px",
                                    padding: "16px 48px",
                                    background: C.orange,
                                    color: C.bg,
                                    border: "none",
                                    borderRadius: "2px",
                                    cursor: "pointer",
                                    transition: "transform 0.2s, box-shadow 0.2s"
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
                                lineNumber: 1023,
                                columnNumber: 11
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                style: {
                                    fontFamily: "'Bebas Neue', sans-serif",
                                    fontSize: "16px",
                                    letterSpacing: "3px",
                                    padding: "16px 48px",
                                    background: "transparent",
                                    color: C.white,
                                    border: "1px solid rgba(255,255,255,0.22)",
                                    borderRadius: "2px",
                                    cursor: "pointer",
                                    transition: "all 0.2s"
                                },
                                onMouseEnter: (e)=>{
                                    e.currentTarget.style.borderColor = C.orange;
                                    e.currentTarget.style.color = C.orange;
                                },
                                onMouseLeave: (e)=>{
                                    e.currentTarget.style.borderColor = "rgba(255,255,255,0.22)";
                                    e.currentTarget.style.color = C.white;
                                },
                                children: "Explore the Map"
                            }, void 0, false, {
                                fileName: "[project]/components/VibeCirclePages.jsx",
                                lineNumber: 1032,
                                columnNumber: 11
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/components/VibeCirclePages.jsx",
                        lineNumber: 1022,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        style: {
                            display: "flex",
                            gap: "12px",
                            justifyContent: "center",
                            flexWrap: "wrap"
                        },
                        children: [
                            {
                                label: "About Us",
                                page: "About",
                                icon: "🧠"
                            },
                            {
                                label: "Advertise",
                                page: "Advertise",
                                icon: "📢"
                            },
                            {
                                label: "For Business",
                                page: "Business",
                                icon: "🏢"
                            },
                            {
                                label: "Join the Team",
                                page: "Jobs",
                                icon: "💼"
                            },
                            {
                                label: "Brand Marketplace",
                                page: "Marketplace",
                                icon: "🏪"
                            }
                        ].map(({ label, page, icon })=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                onClick: ()=>{
                                    setPage(page);
                                    window.scrollTo(0, 0);
                                },
                                style: {
                                    fontFamily: "'DM Sans', sans-serif",
                                    fontSize: "14px",
                                    padding: "12px 20px",
                                    background: "rgba(255,255,255,0.04)",
                                    border: "1px solid rgba(255,255,255,0.1)",
                                    borderRadius: "2px",
                                    color: C.dim,
                                    cursor: "pointer",
                                    display: "flex",
                                    alignItems: "center",
                                    gap: "8px",
                                    transition: "all 0.25s"
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
                                    icon,
                                    " ",
                                    label
                                ]
                            }, page, true, {
                                fileName: "[project]/components/VibeCirclePages.jsx",
                                lineNumber: 1052,
                                columnNumber: 13
                            }, this))
                    }, void 0, false, {
                        fileName: "[project]/components/VibeCirclePages.jsx",
                        lineNumber: 1044,
                        columnNumber: 9
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/components/VibeCirclePages.jsx",
                lineNumber: 1007,
                columnNumber: 7
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/components/VibeCirclePages.jsx",
        lineNumber: 995,
        columnNumber: 5
    }, this);
}
// ─── FOOTER ───────────────────────────────────────────────────────────────────
function Footer({ setPage }) {
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("footer", {
        style: {
            background: "#02020A",
            borderTop: `1px solid ${C.border}`,
            padding: "48px 64px"
        },
        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            style: {
                maxWidth: "1100px",
                margin: "0 auto",
                display: "flex",
                justifyContent: "space-between",
                alignItems: "center",
                flexWrap: "wrap",
                gap: "24px"
            },
            children: [
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                    onClick: ()=>setPage("home"),
                    style: {
                        fontFamily: "'Bebas Neue', sans-serif",
                        fontSize: "22px",
                        letterSpacing: "3px",
                        color: C.orange,
                        background: "none",
                        border: "none",
                        cursor: "pointer"
                    },
                    children: "VIBECIRCLE"
                }, void 0, false, {
                    fileName: "[project]/components/VibeCirclePages.jsx",
                    lineNumber: 1076,
                    columnNumber: 9
                }, this),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    style: {
                        display: "flex",
                        gap: "32px"
                    },
                    children: PAGES.map((p)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                            onClick: ()=>{
                                setPage(p);
                                window.scrollTo(0, 0);
                            },
                            style: {
                                fontFamily: "'DM Sans', sans-serif",
                                fontSize: "12px",
                                letterSpacing: "1px",
                                textTransform: "uppercase",
                                color: C.dimmer,
                                background: "none",
                                border: "none",
                                cursor: "pointer",
                                transition: "color 0.2s"
                            },
                            onMouseEnter: (e)=>e.target.style.color = C.orange,
                            onMouseLeave: (e)=>e.target.style.color = C.dimmer,
                            children: p
                        }, p, false, {
                            fileName: "[project]/components/VibeCirclePages.jsx",
                            lineNumber: 1079,
                            columnNumber: 13
                        }, this))
                }, void 0, false, {
                    fileName: "[project]/components/VibeCirclePages.jsx",
                    lineNumber: 1077,
                    columnNumber: 9
                }, this),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                    style: {
                        fontFamily: "'DM Sans', sans-serif",
                        fontSize: "12px",
                        color: C.dimmer
                    },
                    children: "© 2025 VibeCircle — Making energy visible."
                }, void 0, false, {
                    fileName: "[project]/components/VibeCirclePages.jsx",
                    lineNumber: 1090,
                    columnNumber: 9
                }, this)
            ]
        }, void 0, true, {
            fileName: "[project]/components/VibeCirclePages.jsx",
            lineNumber: 1075,
            columnNumber: 7
        }, this)
    }, void 0, false, {
        fileName: "[project]/components/VibeCirclePages.jsx",
        lineNumber: 1074,
        columnNumber: 5
    }, this);
}
// ══════════════════════════════════════════════════════════════════════════════
// PAGE: BRAND MARKETPLACE
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
        desc: "We're an indie craft energy drink brand built for the late-night creator. Looking for authentic city-based creators to showcase our cans in real environments.",
        tags: [
            "Nightlife",
            "Creators",
            "Urban"
        ],
        color: "#FF6B00",
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
        color: "#FF2D78",
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
        color: "#00D4FF",
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
        color: "#9B59FF",
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
        color: "#FFD700",
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
        color: "#00D4FF",
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
        desc: "A chain of culture-forward barbershops looking for local city creators to showcase the shop's vibe, culture, and craft to their neighborhoods.",
        tags: [
            "Local",
            "Culture",
            "Beauty"
        ],
        color: "#FF6B00",
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
        desc: "50,000 person music and culture festival needs a creator army. We want real coverage, raw moments, and full creative freedom. Apply for full access passes.",
        tags: [
            "Festival",
            "Music",
            "Events"
        ],
        color: "#FF2D78",
        slots: 25,
        filled: 18,
        logo: "🎵"
    }
];
const MKT_CATEGORIES = [
    "All",
    "Food & Drink",
    "Fashion",
    "Health & Wellness",
    "Entertainment",
    "Tech",
    "Beauty & Grooming",
    "Events"
];
const MKT_TYPES = [
    "All Types",
    "Sponsored Post",
    "Event Collab",
    "Campus Campaign",
    "Live Coverage",
    "Food Review",
    "Creator Kit",
    "Local Partnership",
    "Festival Coverage"
];
const BADGE_COLORS = {
    "HOT": "#FF6B00",
    "FEATURED": "#FF2D78",
    "NEW": "#00D4FF",
    "PREMIUM": "#9B59FF"
};
const HOW_IT_WORKS_CREATOR = [
    {
        n: "01",
        icon: "🔍",
        title: "Browse Deals",
        desc: "Explore brand opportunities filtered by category, budget, location, and campaign type."
    },
    {
        n: "02",
        icon: "📬",
        title: "Apply in Seconds",
        desc: "Submit your VibeCircle creator profile with one tap. No lengthy forms, no lengthy waits."
    },
    {
        n: "03",
        icon: "🤝",
        title: "Get Matched",
        desc: "Brands review your profile and reach out directly through the platform."
    },
    {
        n: "04",
        icon: "💸",
        title: "Create & Get Paid",
        desc: "Deliver your content, post it live on VibeCircle, and collect your payment."
    }
];
const HOW_IT_WORKS_BRAND = [
    {
        n: "01",
        icon: "🏷️",
        title: "Post a Deal",
        desc: "Describe your campaign, set your budget, and define what kind of creator you're looking for."
    },
    {
        n: "02",
        icon: "📡",
        title: "Get Discovered",
        desc: "Your deal is surfaced to matching creators in your target cities and demographics."
    },
    {
        n: "03",
        icon: "✅",
        title: "Review & Accept",
        desc: "Browse applicant profiles and pick the creators who match your brand's energy."
    },
    {
        n: "04",
        icon: "📊",
        title: "Track Results",
        desc: "Monitor campaign performance in real time with VibeCircle's analytics dashboard."
    }
];
function ProgressBar({ filled, slots, color }) {
    const pct = Math.round(filled / slots * 100);
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        style: {
            marginTop: "12px"
        },
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                style: {
                    display: "flex",
                    justifyContent: "space-between",
                    marginBottom: "6px"
                },
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                        style: {
                            fontFamily: "'DM Sans', sans-serif",
                            fontSize: "11px",
                            color: "rgba(255,255,255,0.35)",
                            letterSpacing: "0.5px"
                        },
                        children: [
                            filled,
                            "/",
                            slots,
                            " slots filled"
                        ]
                    }, void 0, true, {
                        fileName: "[project]/components/VibeCirclePages.jsx",
                        lineNumber: 1190,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                        style: {
                            fontFamily: "'Bebas Neue', sans-serif",
                            fontSize: "11px",
                            letterSpacing: "2px",
                            color: filled >= slots ? "#FF2D78" : color
                        },
                        children: filled >= slots ? "FULL" : `${slots - filled} LEFT`
                    }, void 0, false, {
                        fileName: "[project]/components/VibeCirclePages.jsx",
                        lineNumber: 1193,
                        columnNumber: 9
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/components/VibeCirclePages.jsx",
                lineNumber: 1189,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                style: {
                    height: "3px",
                    background: "rgba(255,255,255,0.08)",
                    borderRadius: "2px",
                    overflow: "hidden"
                },
                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    style: {
                        height: "100%",
                        width: `${pct}%`,
                        background: filled >= slots ? "#FF2D78" : color,
                        borderRadius: "2px",
                        transition: "width 0.6s ease"
                    }
                }, void 0, false, {
                    fileName: "[project]/components/VibeCirclePages.jsx",
                    lineNumber: 1198,
                    columnNumber: 9
                }, this)
            }, void 0, false, {
                fileName: "[project]/components/VibeCirclePages.jsx",
                lineNumber: 1197,
                columnNumber: 7
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/components/VibeCirclePages.jsx",
        lineNumber: 1188,
        columnNumber: 5
    }, this);
}
function BrandCard({ brand, onApply }) {
    const [hovered, setHovered] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["useState"])(false);
    const isFull = brand.filled >= brand.slots;
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        onMouseEnter: ()=>setHovered(true),
        onMouseLeave: ()=>setHovered(false),
        style: {
            background: hovered ? `${brand.color}08` : "rgba(255,255,255,0.02)",
            border: `1px solid ${hovered ? brand.color + "50" : "rgba(255,255,255,0.07)"}`,
            borderRadius: "4px",
            padding: "28px",
            transition: "all 0.3s",
            transform: hovered ? "translateY(-4px)" : "none",
            display: "flex",
            flexDirection: "column",
            height: "100%",
            position: "relative",
            overflow: "hidden"
        },
        children: [
            hovered && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                style: {
                    position: "absolute",
                    top: 0,
                    right: 0,
                    width: 120,
                    height: 120,
                    background: `radial-gradient(circle at top right, ${brand.color}18, transparent 70%)`,
                    pointerEvents: "none"
                }
            }, void 0, false, {
                fileName: "[project]/components/VibeCirclePages.jsx",
                lineNumber: 1224,
                columnNumber: 19
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                style: {
                    display: "flex",
                    alignItems: "flex-start",
                    justifyContent: "space-between",
                    marginBottom: "16px"
                },
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        style: {
                            display: "flex",
                            alignItems: "center",
                            gap: "12px"
                        },
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                style: {
                                    width: "44px",
                                    height: "44px",
                                    borderRadius: "4px",
                                    background: `${brand.color}18`,
                                    border: `1px solid ${brand.color}30`,
                                    display: "flex",
                                    alignItems: "center",
                                    justifyContent: "center",
                                    fontSize: "20px"
                                },
                                children: brand.logo
                            }, void 0, false, {
                                fileName: "[project]/components/VibeCirclePages.jsx",
                                lineNumber: 1229,
                                columnNumber: 11
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        style: {
                                            fontFamily: "'Bebas Neue', sans-serif",
                                            fontSize: "17px",
                                            color: C.white,
                                            letterSpacing: "0.5px"
                                        },
                                        children: brand.name
                                    }, void 0, false, {
                                        fileName: "[project]/components/VibeCirclePages.jsx",
                                        lineNumber: 1236,
                                        columnNumber: 13
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        style: {
                                            fontFamily: "'DM Sans', sans-serif",
                                            fontSize: "11px",
                                            color: "rgba(255,255,255,0.35)",
                                            letterSpacing: "1px",
                                            textTransform: "uppercase",
                                            marginTop: "2px"
                                        },
                                        children: brand.category
                                    }, void 0, false, {
                                        fileName: "[project]/components/VibeCirclePages.jsx",
                                        lineNumber: 1237,
                                        columnNumber: 13
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/components/VibeCirclePages.jsx",
                                lineNumber: 1235,
                                columnNumber: 11
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/components/VibeCirclePages.jsx",
                        lineNumber: 1228,
                        columnNumber: 9
                    }, this),
                    brand.badge && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                        style: {
                            fontFamily: "'Bebas Neue', sans-serif",
                            fontSize: "10px",
                            letterSpacing: "2px",
                            padding: "4px 10px",
                            borderRadius: "2px",
                            background: `${BADGE_COLORS[brand.badge]}22`,
                            border: `1px solid ${BADGE_COLORS[brand.badge]}60`,
                            color: BADGE_COLORS[brand.badge]
                        },
                        children: brand.badge
                    }, void 0, false, {
                        fileName: "[project]/components/VibeCirclePages.jsx",
                        lineNumber: 1241,
                        columnNumber: 11
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/components/VibeCirclePages.jsx",
                lineNumber: 1227,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                style: {
                    fontFamily: "'DM Sans', sans-serif",
                    fontSize: "14px",
                    color: C.dim,
                    lineHeight: 1.7,
                    flex: 1,
                    marginBottom: "16px"
                },
                children: brand.desc
            }, void 0, false, {
                fileName: "[project]/components/VibeCirclePages.jsx",
                lineNumber: 1252,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                style: {
                    display: "flex",
                    gap: "6px",
                    flexWrap: "wrap",
                    marginBottom: "16px"
                },
                children: brand.tags.map((t)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                        style: {
                            fontFamily: "'DM Sans', sans-serif",
                            fontSize: "11px",
                            color: "rgba(255,255,255,0.4)",
                            letterSpacing: "0.5px",
                            padding: "3px 10px",
                            background: "rgba(255,255,255,0.05)",
                            borderRadius: "2px"
                        },
                        children: [
                            "#",
                            t
                        ]
                    }, t, true, {
                        fileName: "[project]/components/VibeCirclePages.jsx",
                        lineNumber: 1257,
                        columnNumber: 11
                    }, this))
            }, void 0, false, {
                fileName: "[project]/components/VibeCirclePages.jsx",
                lineNumber: 1255,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                style: {
                    display: "flex",
                    justifyContent: "space-between",
                    alignItems: "center",
                    marginBottom: "4px",
                    flexWrap: "wrap",
                    gap: "6px"
                },
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        style: {
                            display: "flex",
                            gap: "16px"
                        },
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        style: {
                                            fontFamily: "'Bebas Neue', sans-serif",
                                            fontSize: "14px",
                                            color: brand.color
                                        },
                                        children: brand.budget
                                    }, void 0, false, {
                                        fileName: "[project]/components/VibeCirclePages.jsx",
                                        lineNumber: 1271,
                                        columnNumber: 13
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        style: {
                                            fontFamily: "'DM Sans', sans-serif",
                                            fontSize: "10px",
                                            color: "rgba(255,255,255,0.25)",
                                            textTransform: "uppercase",
                                            letterSpacing: "1px"
                                        },
                                        children: "Budget"
                                    }, void 0, false, {
                                        fileName: "[project]/components/VibeCirclePages.jsx",
                                        lineNumber: 1272,
                                        columnNumber: 13
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/components/VibeCirclePages.jsx",
                                lineNumber: 1270,
                                columnNumber: 11
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        style: {
                                            fontFamily: "'Bebas Neue', sans-serif",
                                            fontSize: "14px",
                                            color: C.white
                                        },
                                        children: brand.type
                                    }, void 0, false, {
                                        fileName: "[project]/components/VibeCirclePages.jsx",
                                        lineNumber: 1275,
                                        columnNumber: 13
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        style: {
                                            fontFamily: "'DM Sans', sans-serif",
                                            fontSize: "10px",
                                            color: "rgba(255,255,255,0.25)",
                                            textTransform: "uppercase",
                                            letterSpacing: "1px"
                                        },
                                        children: "Type"
                                    }, void 0, false, {
                                        fileName: "[project]/components/VibeCirclePages.jsx",
                                        lineNumber: 1276,
                                        columnNumber: 13
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/components/VibeCirclePages.jsx",
                                lineNumber: 1274,
                                columnNumber: 11
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/components/VibeCirclePages.jsx",
                        lineNumber: 1269,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                        onClick: ()=>!isFull && onApply(brand),
                        style: {
                            fontFamily: "'Bebas Neue', sans-serif",
                            fontSize: "12px",
                            letterSpacing: "2px",
                            padding: "9px 20px",
                            background: isFull ? "transparent" : brand.color,
                            color: isFull ? "rgba(255,255,255,0.25)" : C.bg,
                            border: isFull ? "1px solid rgba(255,255,255,0.1)" : "none",
                            borderRadius: "2px",
                            cursor: isFull ? "not-allowed" : "pointer",
                            transition: "all 0.2s",
                            flexShrink: 0
                        },
                        children: isFull ? "Full" : "Apply"
                    }, void 0, false, {
                        fileName: "[project]/components/VibeCirclePages.jsx",
                        lineNumber: 1279,
                        columnNumber: 9
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/components/VibeCirclePages.jsx",
                lineNumber: 1268,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])(ProgressBar, {
                filled: brand.filled,
                slots: brand.slots,
                color: brand.color
            }, void 0, false, {
                fileName: "[project]/components/VibeCirclePages.jsx",
                lineNumber: 1294,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                style: {
                    display: "flex",
                    alignItems: "center",
                    gap: "6px",
                    marginTop: "12px"
                },
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                        style: {
                            fontSize: "11px"
                        },
                        children: "📍"
                    }, void 0, false, {
                        fileName: "[project]/components/VibeCirclePages.jsx",
                        lineNumber: 1298,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                        style: {
                            fontFamily: "'DM Sans', sans-serif",
                            fontSize: "11px",
                            color: "rgba(255,255,255,0.3)"
                        },
                        children: brand.location
                    }, void 0, false, {
                        fileName: "[project]/components/VibeCirclePages.jsx",
                        lineNumber: 1299,
                        columnNumber: 9
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/components/VibeCirclePages.jsx",
                lineNumber: 1297,
                columnNumber: 7
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/components/VibeCirclePages.jsx",
        lineNumber: 1209,
        columnNumber: 5
    }, this);
}
function ApplyModal({ brand, onClose }) {
    const [step, setStep] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["useState"])(1);
    const [form, setForm] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["useState"])({
        name: "",
        handle: "",
        city: "",
        audience: "",
        why: ""
    });
    if (!brand) return null;
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        style: {
            position: "fixed",
            inset: 0,
            zIndex: 500,
            background: "rgba(0,0,0,0.85)",
            backdropFilter: "blur(12px)",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            padding: "24px",
            animation: "fadeIn 0.2s ease forwards"
        },
        onClick: (e)=>{
            if (e.target === e.currentTarget) onClose();
        },
        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            style: {
                background: "#0C0C18",
                border: `1px solid ${brand.color}40`,
                borderRadius: "4px",
                padding: "48px",
                maxWidth: "520px",
                width: "100%",
                position: "relative",
                animation: "fadeUp 0.3s ease forwards"
            },
            children: [
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                    onClick: onClose,
                    style: {
                        position: "absolute",
                        top: "20px",
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
                    lineNumber: 1327,
                    columnNumber: 9
                }, this),
                step === 1 ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["Fragment"], {
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            style: {
                                display: "flex",
                                alignItems: "center",
                                gap: "12px",
                                marginBottom: "28px"
                            },
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    style: {
                                        width: "48px",
                                        height: "48px",
                                        borderRadius: "4px",
                                        background: `${brand.color}18`,
                                        display: "flex",
                                        alignItems: "center",
                                        justifyContent: "center",
                                        fontSize: "22px"
                                    },
                                    children: brand.logo
                                }, void 0, false, {
                                    fileName: "[project]/components/VibeCirclePages.jsx",
                                    lineNumber: 1336,
                                    columnNumber: 15
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            style: {
                                                fontFamily: "'Bebas Neue', sans-serif",
                                                fontSize: "20px",
                                                color: C.white
                                            },
                                            children: brand.name
                                        }, void 0, false, {
                                            fileName: "[project]/components/VibeCirclePages.jsx",
                                            lineNumber: 1338,
                                            columnNumber: 17
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            style: {
                                                fontFamily: "'DM Sans', sans-serif",
                                                fontSize: "12px",
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
                                            lineNumber: 1339,
                                            columnNumber: 17
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/components/VibeCirclePages.jsx",
                                    lineNumber: 1337,
                                    columnNumber: 15
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "[project]/components/VibeCirclePages.jsx",
                            lineNumber: 1335,
                            columnNumber: 13
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("h3", {
                            style: {
                                fontFamily: "'Bebas Neue', sans-serif",
                                fontSize: "28px",
                                color: C.white,
                                marginBottom: "8px"
                            },
                            children: "Apply for this deal"
                        }, void 0, false, {
                            fileName: "[project]/components/VibeCirclePages.jsx",
                            lineNumber: 1342,
                            columnNumber: 13
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                            style: {
                                fontFamily: "'DM Sans', sans-serif",
                                fontSize: "14px",
                                color: C.dim,
                                lineHeight: 1.7,
                                marginBottom: "28px"
                            },
                            children: "Fill in your creator details. Brands typically respond within 48 hours."
                        }, void 0, false, {
                            fileName: "[project]/components/VibeCirclePages.jsx",
                            lineNumber: 1343,
                            columnNumber: 13
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            style: {
                                display: "flex",
                                flexDirection: "column",
                                gap: "14px"
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
                                        "Audience Size (e.g. 5K followers)"
                                    ]
                                ].map(([k, ph])=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
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
                                            padding: "14px 16px",
                                            fontFamily: "'DM Sans', sans-serif",
                                            fontSize: "15px",
                                            color: C.white,
                                            outline: "none",
                                            transition: "border-color 0.2s"
                                        },
                                        onFocus: (e)=>e.target.style.borderColor = brand.color,
                                        onBlur: (e)=>e.target.style.borderColor = "rgba(255,255,255,0.1)"
                                    }, k, false, {
                                        fileName: "[project]/components/VibeCirclePages.jsx",
                                        lineNumber: 1346,
                                        columnNumber: 17
                                    }, this)),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("textarea", {
                                    placeholder: "Why are you the right creator for this brand? (2–3 sentences)",
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
                                        padding: "14px 16px",
                                        fontFamily: "'DM Sans', sans-serif",
                                        fontSize: "15px",
                                        color: C.white,
                                        outline: "none",
                                        resize: "vertical",
                                        transition: "border-color 0.2s"
                                    },
                                    onFocus: (e)=>e.target.style.borderColor = brand.color,
                                    onBlur: (e)=>e.target.style.borderColor = "rgba(255,255,255,0.1)"
                                }, void 0, false, {
                                    fileName: "[project]/components/VibeCirclePages.jsx",
                                    lineNumber: 1357,
                                    columnNumber: 15
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                    onClick: ()=>form.name && form.handle ? setStep(2) : null,
                                    style: {
                                        fontFamily: "'Bebas Neue', sans-serif",
                                        fontSize: "16px",
                                        letterSpacing: "3px",
                                        padding: "16px",
                                        background: brand.color,
                                        color: C.bg,
                                        border: "none",
                                        borderRadius: "2px",
                                        cursor: "pointer",
                                        transition: "box-shadow 0.2s"
                                    },
                                    onMouseEnter: (e)=>e.target.style.boxShadow = `0 10px 30px ${brand.color}40`,
                                    onMouseLeave: (e)=>e.target.style.boxShadow = "none",
                                    children: "Submit Application"
                                }, void 0, false, {
                                    fileName: "[project]/components/VibeCirclePages.jsx",
                                    lineNumber: 1367,
                                    columnNumber: 15
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "[project]/components/VibeCirclePages.jsx",
                            lineNumber: 1344,
                            columnNumber: 13
                        }, this)
                    ]
                }, void 0, true) : /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    style: {
                        textAlign: "center",
                        padding: "20px 0"
                    },
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            style: {
                                fontSize: "52px",
                                marginBottom: "20px"
                            },
                            children: "🚀"
                        }, void 0, false, {
                            fileName: "[project]/components/VibeCirclePages.jsx",
                            lineNumber: 1380,
                            columnNumber: 13
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            style: {
                                fontFamily: "'Bebas Neue', sans-serif",
                                fontSize: "36px",
                                color: brand.color,
                                marginBottom: "12px"
                            },
                            children: "Application Sent!"
                        }, void 0, false, {
                            fileName: "[project]/components/VibeCirclePages.jsx",
                            lineNumber: 1381,
                            columnNumber: 13
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                            style: {
                                fontFamily: "'DM Sans', sans-serif",
                                fontSize: "16px",
                                color: C.dim,
                                lineHeight: 1.7,
                                marginBottom: "32px"
                            },
                            children: [
                                brand.name,
                                " will review your profile and get back to you within 48 hours. Keep creating."
                            ]
                        }, void 0, true, {
                            fileName: "[project]/components/VibeCirclePages.jsx",
                            lineNumber: 1382,
                            columnNumber: 13
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                            onClick: onClose,
                            style: {
                                fontFamily: "'Bebas Neue', sans-serif",
                                fontSize: "14px",
                                letterSpacing: "3px",
                                padding: "14px 36px",
                                background: brand.color,
                                color: C.bg,
                                border: "none",
                                borderRadius: "2px",
                                cursor: "pointer"
                            },
                            children: "Back to Marketplace"
                        }, void 0, false, {
                            fileName: "[project]/components/VibeCirclePages.jsx",
                            lineNumber: 1385,
                            columnNumber: 13
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "[project]/components/VibeCirclePages.jsx",
                    lineNumber: 1379,
                    columnNumber: 11
                }, this)
            ]
        }, void 0, true, {
            fileName: "[project]/components/VibeCirclePages.jsx",
            lineNumber: 1319,
            columnNumber: 7
        }, this)
    }, void 0, false, {
        fileName: "[project]/components/VibeCirclePages.jsx",
        lineNumber: 1312,
        columnNumber: 5
    }, this);
}
function MarketplacePage() {
    const [catFilter, setCatFilter] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["useState"])("All");
    const [typeFilter, setTypeFilter] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["useState"])("All Types");
    const [search, setSearch] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["useState"])("");
    const [sortBy, setSortBy] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["useState"])("Featured");
    const [activeTab, setActiveTab] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["useState"])("Creator");
    const [applyBrand, setApplyBrand] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["useState"])(null);
    const [postForm, setPostForm] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["useState"])({
        brand: "",
        category: "",
        budget: "",
        type: "",
        location: "",
        desc: ""
    });
    const [postSent, setPostSent] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["useState"])(false);
    const filtered = MARKETPLACE_BRANDS.filter((b)=>{
        const matchCat = catFilter === "All" || b.category === catFilter;
        const matchType = typeFilter === "All Types" || b.type === typeFilter;
        const matchSearch = !search || b.name.toLowerCase().includes(search.toLowerCase()) || b.tags.some((t)=>t.toLowerCase().includes(search.toLowerCase()));
        return matchCat && matchType && matchSearch;
    }).sort((a, b)=>{
        if (sortBy === "Budget ↑") return parseInt(b.budget) - parseInt(a.budget);
        if (sortBy === "Slots Left") return a.slots - a.filled - (b.slots - b.filled);
        if (sortBy === "Featured") return (b.badge ? 1 : 0) - (a.badge ? 1 : 0);
        return 0;
    });
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        style: {
            background: C.bg,
            color: C.white
        },
        children: [
            applyBrand && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])(ApplyModal, {
                brand: applyBrand,
                onClose: ()=>setApplyBrand(null)
            }, void 0, false, {
                fileName: "[project]/components/VibeCirclePages.jsx",
                lineNumber: 1421,
                columnNumber: 22
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("section", {
                style: {
                    minHeight: "52vh",
                    display: "flex",
                    flexDirection: "column",
                    justifyContent: "flex-end",
                    padding: "140px 64px 72px",
                    position: "relative",
                    overflow: "hidden",
                    background: C.bg
                },
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        style: {
                            position: "absolute",
                            inset: 0,
                            backgroundImage: `linear-gradient(${C.orange}06 1px, transparent 1px), linear-gradient(90deg, ${C.orange}06 1px, transparent 1px)`,
                            backgroundSize: "60px 60px"
                        }
                    }, void 0, false, {
                        fileName: "[project]/components/VibeCirclePages.jsx",
                        lineNumber: 1431,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])(Orb, {
                        top: "-5%",
                        right: "5%",
                        size: 550,
                        opacity: 0.13
                    }, void 0, false, {
                        fileName: "[project]/components/VibeCirclePages.jsx",
                        lineNumber: 1436,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])(Orb, {
                        bottom: "-15%",
                        left: "25%",
                        size: 400,
                        color: C.pink,
                        opacity: 0.08,
                        delay: "2s"
                    }, void 0, false, {
                        fileName: "[project]/components/VibeCirclePages.jsx",
                        lineNumber: 1437,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])(Orb, {
                        top: "20%",
                        left: "-5%",
                        size: 300,
                        color: "#9B59FF",
                        opacity: 0.07,
                        delay: "4s"
                    }, void 0, false, {
                        fileName: "[project]/components/VibeCirclePages.jsx",
                        lineNumber: 1438,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        style: {
                            position: "relative",
                            zIndex: 2,
                            maxWidth: "1100px",
                            margin: "0 auto",
                            width: "100%"
                        },
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                style: {
                                    animation: "fadeUp 0.5s ease forwards",
                                    opacity: 0,
                                    marginBottom: "20px"
                                },
                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])(Tag, {
                                    children: "Brand Marketplace"
                                }, void 0, false, {
                                    fileName: "[project]/components/VibeCirclePages.jsx",
                                    lineNumber: 1442,
                                    columnNumber: 13
                                }, this)
                            }, void 0, false, {
                                fileName: "[project]/components/VibeCirclePages.jsx",
                                lineNumber: 1441,
                                columnNumber: 11
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("h1", {
                                style: {
                                    fontFamily: "'Bebas Neue', sans-serif",
                                    fontSize: "clamp(52px,8vw,100px)",
                                    lineHeight: 0.92,
                                    color: C.white,
                                    animation: "fadeUp 0.55s 0.08s ease forwards",
                                    opacity: 0,
                                    marginBottom: "24px"
                                },
                                children: [
                                    "Where brands meet",
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("br", {}, void 0, false, {
                                        fileName: "[project]/components/VibeCirclePages.jsx",
                                        lineNumber: 1451,
                                        columnNumber: 30
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                        style: {
                                            color: C.orange
                                        },
                                        children: "creators who live it."
                                    }, void 0, false, {
                                        fileName: "[project]/components/VibeCirclePages.jsx",
                                        lineNumber: 1451,
                                        columnNumber: 36
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/components/VibeCirclePages.jsx",
                                lineNumber: 1444,
                                columnNumber: 11
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                style: {
                                    fontFamily: "'DM Sans', sans-serif",
                                    fontSize: "clamp(16px,1.8vw,20px)",
                                    color: C.dim,
                                    maxWidth: "540px",
                                    lineHeight: 1.75,
                                    animation: "fadeUp 0.55s 0.16s ease forwards",
                                    opacity: 0
                                },
                                children: "Browse live brand deals, apply in seconds, and turn your city presence into paid partnerships."
                            }, void 0, false, {
                                fileName: "[project]/components/VibeCirclePages.jsx",
                                lineNumber: 1453,
                                columnNumber: 11
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                style: {
                                    display: "flex",
                                    gap: "32px",
                                    marginTop: "40px",
                                    flexWrap: "wrap",
                                    animation: "fadeUp 0.55s 0.24s ease forwards",
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
                                ].map(([v, l])=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                style: {
                                                    fontFamily: "'Bebas Neue', sans-serif",
                                                    fontSize: "clamp(22px,2.5vw,30px)",
                                                    color: C.orange,
                                                    lineHeight: 1
                                                },
                                                children: v
                                            }, void 0, false, {
                                                fileName: "[project]/components/VibeCirclePages.jsx",
                                                lineNumber: 1468,
                                                columnNumber: 17
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                style: {
                                                    fontFamily: "'DM Sans', sans-serif",
                                                    fontSize: "11px",
                                                    letterSpacing: "1.5px",
                                                    color: C.dimmer,
                                                    textTransform: "uppercase",
                                                    marginTop: "4px"
                                                },
                                                children: l
                                            }, void 0, false, {
                                                fileName: "[project]/components/VibeCirclePages.jsx",
                                                lineNumber: 1469,
                                                columnNumber: 17
                                            }, this)
                                        ]
                                    }, l, true, {
                                        fileName: "[project]/components/VibeCirclePages.jsx",
                                        lineNumber: 1467,
                                        columnNumber: 15
                                    }, this))
                            }, void 0, false, {
                                fileName: "[project]/components/VibeCirclePages.jsx",
                                lineNumber: 1462,
                                columnNumber: 11
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/components/VibeCirclePages.jsx",
                        lineNumber: 1440,
                        columnNumber: 9
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/components/VibeCirclePages.jsx",
                lineNumber: 1424,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                style: {
                    background: C.bg2,
                    borderTop: `1px solid ${C.border}`,
                    borderBottom: `1px solid ${C.border}`
                },
                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    style: {
                        maxWidth: "1100px",
                        margin: "0 auto",
                        padding: "0 64px",
                        display: "flex",
                        gap: 0
                    },
                    children: [
                        "Creator",
                        "Brand"
                    ].map((tab)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                            onClick: ()=>setActiveTab(tab),
                            style: {
                                fontFamily: "'Bebas Neue', sans-serif",
                                fontSize: "14px",
                                letterSpacing: "3px",
                                padding: "20px 32px",
                                background: "none",
                                color: activeTab === tab ? C.orange : C.dimmer,
                                border: "none",
                                borderBottom: `2px solid ${activeTab === tab ? C.orange : "transparent"}`,
                                cursor: "pointer",
                                transition: "all 0.2s"
                            },
                            children: tab === "Creator" ? "I'm a Creator" : "I'm a Brand"
                        }, tab, false, {
                            fileName: "[project]/components/VibeCirclePages.jsx",
                            lineNumber: 1480,
                            columnNumber: 13
                        }, this))
                }, void 0, false, {
                    fileName: "[project]/components/VibeCirclePages.jsx",
                    lineNumber: 1478,
                    columnNumber: 9
                }, this)
            }, void 0, false, {
                fileName: "[project]/components/VibeCirclePages.jsx",
                lineNumber: 1477,
                columnNumber: 7
            }, this),
            activeTab === "Creator" ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["Fragment"], {
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("section", {
                        style: {
                            padding: "48px 64px 0",
                            background: C.bg2
                        },
                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            style: {
                                maxWidth: "1100px",
                                margin: "0 auto"
                            },
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    style: {
                                        position: "relative",
                                        marginBottom: "28px"
                                    },
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                            style: {
                                                position: "absolute",
                                                left: "18px",
                                                top: "50%",
                                                transform: "translateY(-50%)",
                                                color: "rgba(255,255,255,0.25)",
                                                fontSize: "16px"
                                            },
                                            children: "🔍"
                                        }, void 0, false, {
                                            fileName: "[project]/components/VibeCirclePages.jsx",
                                            lineNumber: 1499,
                                            columnNumber: 17
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
                                            placeholder: "Search by brand name or vibe tag...",
                                            value: search,
                                            onChange: (e)=>setSearch(e.target.value),
                                            style: {
                                                width: "100%",
                                                background: "rgba(255,255,255,0.04)",
                                                border: "1px solid rgba(255,255,255,0.1)",
                                                borderRadius: "2px",
                                                padding: "16px 20px 16px 48px",
                                                fontFamily: "'DM Sans', sans-serif",
                                                fontSize: "15px",
                                                color: C.white,
                                                outline: "none",
                                                transition: "border-color 0.2s"
                                            },
                                            onFocus: (e)=>e.target.style.borderColor = C.orange,
                                            onBlur: (e)=>e.target.style.borderColor = "rgba(255,255,255,0.1)"
                                        }, void 0, false, {
                                            fileName: "[project]/components/VibeCirclePages.jsx",
                                            lineNumber: 1500,
                                            columnNumber: 17
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/components/VibeCirclePages.jsx",
                                    lineNumber: 1498,
                                    columnNumber: 15
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    style: {
                                        display: "flex",
                                        gap: "12px",
                                        flexWrap: "wrap",
                                        alignItems: "center",
                                        paddingBottom: "28px"
                                    },
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            style: {
                                                display: "flex",
                                                gap: "6px",
                                                flexWrap: "wrap",
                                                flex: 1
                                            },
                                            children: MKT_CATEGORIES.map((c)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                                    onClick: ()=>setCatFilter(c),
                                                    style: {
                                                        fontFamily: "'DM Sans', sans-serif",
                                                        fontSize: "12px",
                                                        padding: "7px 14px",
                                                        borderRadius: "2px",
                                                        cursor: "pointer",
                                                        background: catFilter === c ? C.orange : "rgba(255,255,255,0.04)",
                                                        color: catFilter === c ? C.bg : C.dim,
                                                        border: catFilter === c ? "none" : "1px solid rgba(255,255,255,0.1)",
                                                        transition: "all 0.2s"
                                                    },
                                                    children: c
                                                }, c, false, {
                                                    fileName: "[project]/components/VibeCirclePages.jsx",
                                                    lineNumber: 1520,
                                                    columnNumber: 21
                                                }, this))
                                        }, void 0, false, {
                                            fileName: "[project]/components/VibeCirclePages.jsx",
                                            lineNumber: 1518,
                                            columnNumber: 17
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("select", {
                                            value: sortBy,
                                            onChange: (e)=>setSortBy(e.target.value),
                                            style: {
                                                background: "rgba(255,255,255,0.04)",
                                                border: "1px solid rgba(255,255,255,0.1)",
                                                color: C.dim,
                                                padding: "8px 14px",
                                                borderRadius: "2px",
                                                fontFamily: "'DM Sans', sans-serif",
                                                fontSize: "12px",
                                                outline: "none",
                                                cursor: "pointer"
                                            },
                                            children: [
                                                "Featured",
                                                "Budget ↑",
                                                "Slots Left"
                                            ].map((s)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("option", {
                                                    value: s,
                                                    style: {
                                                        background: "#0C0C18"
                                                    },
                                                    children: s
                                                }, s, false, {
                                                    fileName: "[project]/components/VibeCirclePages.jsx",
                                                    lineNumber: 1535,
                                                    columnNumber: 68
                                                }, this))
                                        }, void 0, false, {
                                            fileName: "[project]/components/VibeCirclePages.jsx",
                                            lineNumber: 1530,
                                            columnNumber: 17
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/components/VibeCirclePages.jsx",
                                    lineNumber: 1517,
                                    columnNumber: 15
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "[project]/components/VibeCirclePages.jsx",
                            lineNumber: 1496,
                            columnNumber: 13
                        }, this)
                    }, void 0, false, {
                        fileName: "[project]/components/VibeCirclePages.jsx",
                        lineNumber: 1495,
                        columnNumber: 11
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("section", {
                        style: {
                            padding: "32px 64px 100px",
                            background: C.bg2
                        },
                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            style: {
                                maxWidth: "1100px",
                                margin: "0 auto"
                            },
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    style: {
                                        display: "flex",
                                        justifyContent: "space-between",
                                        alignItems: "center",
                                        marginBottom: "28px"
                                    },
                                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                        style: {
                                            fontFamily: "'DM Sans', sans-serif",
                                            fontSize: "14px",
                                            color: C.dimmer
                                        },
                                        children: [
                                            "Showing ",
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                style: {
                                                    color: C.orange
                                                },
                                                children: filtered.length
                                            }, void 0, false, {
                                                fileName: "[project]/components/VibeCirclePages.jsx",
                                                lineNumber: 1546,
                                                columnNumber: 27
                                            }, this),
                                            " deals"
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/components/VibeCirclePages.jsx",
                                        lineNumber: 1545,
                                        columnNumber: 17
                                    }, this)
                                }, void 0, false, {
                                    fileName: "[project]/components/VibeCirclePages.jsx",
                                    lineNumber: 1544,
                                    columnNumber: 15
                                }, this),
                                filtered.length > 0 ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    style: {
                                        display: "grid",
                                        gridTemplateColumns: "repeat(auto-fill, minmax(320px,1fr))",
                                        gap: "20px"
                                    },
                                    children: filtered.map((brand, i)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])(Reveal, {
                                            delay: i * 0.05,
                                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])(BrandCard, {
                                                brand: brand,
                                                onApply: setApplyBrand
                                            }, void 0, false, {
                                                fileName: "[project]/components/VibeCirclePages.jsx",
                                                lineNumber: 1554,
                                                columnNumber: 23
                                            }, this)
                                        }, brand.id, false, {
                                            fileName: "[project]/components/VibeCirclePages.jsx",
                                            lineNumber: 1553,
                                            columnNumber: 21
                                        }, this))
                                }, void 0, false, {
                                    fileName: "[project]/components/VibeCirclePages.jsx",
                                    lineNumber: 1551,
                                    columnNumber: 17
                                }, this) : /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    style: {
                                        textAlign: "center",
                                        padding: "80px",
                                        color: C.dimmer
                                    },
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            style: {
                                                fontSize: "40px",
                                                marginBottom: "16px"
                                            },
                                            children: "🔍"
                                        }, void 0, false, {
                                            fileName: "[project]/components/VibeCirclePages.jsx",
                                            lineNumber: 1560,
                                            columnNumber: 19
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            style: {
                                                fontFamily: "'Bebas Neue', sans-serif",
                                                fontSize: "24px",
                                                color: C.white,
                                                marginBottom: "8px"
                                            },
                                            children: "No deals found"
                                        }, void 0, false, {
                                            fileName: "[project]/components/VibeCirclePages.jsx",
                                            lineNumber: 1561,
                                            columnNumber: 19
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                            style: {
                                                fontFamily: "'DM Sans', sans-serif",
                                                fontSize: "14px"
                                            },
                                            children: "Try adjusting your filters or search term."
                                        }, void 0, false, {
                                            fileName: "[project]/components/VibeCirclePages.jsx",
                                            lineNumber: 1562,
                                            columnNumber: 19
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/components/VibeCirclePages.jsx",
                                    lineNumber: 1559,
                                    columnNumber: 17
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "[project]/components/VibeCirclePages.jsx",
                            lineNumber: 1543,
                            columnNumber: 13
                        }, this)
                    }, void 0, false, {
                        fileName: "[project]/components/VibeCirclePages.jsx",
                        lineNumber: 1542,
                        columnNumber: 11
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("section", {
                        style: {
                            padding: "100px 64px",
                            background: C.bg,
                            position: "relative",
                            overflow: "hidden"
                        },
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])(Orb, {
                                top: "10%",
                                right: "-8%",
                                size: 450,
                                opacity: 0.1,
                                delay: "1s"
                            }, void 0, false, {
                                fileName: "[project]/components/VibeCirclePages.jsx",
                                lineNumber: 1570,
                                columnNumber: 13
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                style: {
                                    maxWidth: "1100px",
                                    margin: "0 auto"
                                },
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])(Reveal, {
                                        style: {
                                            marginBottom: "64px"
                                        },
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])(Tag, {
                                                children: "For Creators"
                                            }, void 0, false, {
                                                fileName: "[project]/components/VibeCirclePages.jsx",
                                                lineNumber: 1573,
                                                columnNumber: 17
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("h2", {
                                                style: {
                                                    fontFamily: "'Bebas Neue', sans-serif",
                                                    fontSize: "clamp(36px,5vw,58px)",
                                                    color: C.white,
                                                    lineHeight: 1,
                                                    marginTop: "16px"
                                                },
                                                children: [
                                                    "Four steps to your",
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("br", {}, void 0, false, {
                                                        fileName: "[project]/components/VibeCirclePages.jsx",
                                                        lineNumber: 1575,
                                                        columnNumber: 37
                                                    }, this),
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                        style: {
                                                            color: C.orange
                                                        },
                                                        children: "first brand deal."
                                                    }, void 0, false, {
                                                        fileName: "[project]/components/VibeCirclePages.jsx",
                                                        lineNumber: 1575,
                                                        columnNumber: 43
                                                    }, this)
                                                ]
                                            }, void 0, true, {
                                                fileName: "[project]/components/VibeCirclePages.jsx",
                                                lineNumber: 1574,
                                                columnNumber: 17
                                            }, this)
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/components/VibeCirclePages.jsx",
                                        lineNumber: 1572,
                                        columnNumber: 15
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        style: {
                                            display: "grid",
                                            gridTemplateColumns: "repeat(auto-fit, minmax(220px,1fr))",
                                            gap: "20px"
                                        },
                                        children: HOW_IT_WORKS_CREATOR.map((s, i)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])(Reveal, {
                                                delay: i * 0.1,
                                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                    style: {
                                                        padding: "36px 28px",
                                                        background: i % 2 === 0 ? "rgba(255,107,0,0.04)" : "rgba(255,255,255,0.02)",
                                                        border: `1px solid ${i % 2 === 0 ? C.orange + "20" : "rgba(255,255,255,0.07)"}`,
                                                        borderRadius: "4px",
                                                        height: "100%"
                                                    },
                                                    children: [
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                            style: {
                                                                fontFamily: "'Bebas Neue', sans-serif",
                                                                fontSize: "11px",
                                                                letterSpacing: "3px",
                                                                color: C.orange,
                                                                marginBottom: "12px"
                                                            },
                                                            children: s.n
                                                        }, void 0, false, {
                                                            fileName: "[project]/components/VibeCirclePages.jsx",
                                                            lineNumber: 1587,
                                                            columnNumber: 23
                                                        }, this),
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                            style: {
                                                                fontSize: "28px",
                                                                marginBottom: "14px"
                                                            },
                                                            children: s.icon
                                                        }, void 0, false, {
                                                            fileName: "[project]/components/VibeCirclePages.jsx",
                                                            lineNumber: 1588,
                                                            columnNumber: 23
                                                        }, this),
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                            style: {
                                                                fontFamily: "'Bebas Neue', sans-serif",
                                                                fontSize: "20px",
                                                                color: C.white,
                                                                marginBottom: "12px"
                                                            },
                                                            children: s.title
                                                        }, void 0, false, {
                                                            fileName: "[project]/components/VibeCirclePages.jsx",
                                                            lineNumber: 1589,
                                                            columnNumber: 23
                                                        }, this),
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                            style: {
                                                                fontFamily: "'DM Sans', sans-serif",
                                                                fontSize: "14px",
                                                                color: C.dim,
                                                                lineHeight: 1.7
                                                            },
                                                            children: s.desc
                                                        }, void 0, false, {
                                                            fileName: "[project]/components/VibeCirclePages.jsx",
                                                            lineNumber: 1590,
                                                            columnNumber: 23
                                                        }, this)
                                                    ]
                                                }, void 0, true, {
                                                    fileName: "[project]/components/VibeCirclePages.jsx",
                                                    lineNumber: 1581,
                                                    columnNumber: 21
                                                }, this)
                                            }, i, false, {
                                                fileName: "[project]/components/VibeCirclePages.jsx",
                                                lineNumber: 1580,
                                                columnNumber: 19
                                            }, this))
                                    }, void 0, false, {
                                        fileName: "[project]/components/VibeCirclePages.jsx",
                                        lineNumber: 1578,
                                        columnNumber: 15
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/components/VibeCirclePages.jsx",
                                lineNumber: 1571,
                                columnNumber: 13
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/components/VibeCirclePages.jsx",
                        lineNumber: 1569,
                        columnNumber: 11
                    }, this)
                ]
            }, void 0, true) : /* BRAND TAB — POST A DEAL */ /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["Fragment"], {
                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("section", {
                    style: {
                        padding: "80px 64px",
                        background: C.bg2
                    },
                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        style: {
                            maxWidth: "1100px",
                            margin: "0 auto",
                            display: "grid",
                            gridTemplateColumns: "1fr 1fr",
                            gap: "80px",
                            alignItems: "start"
                        },
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])(Reveal, {
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])(Tag, {
                                                children: "For Brands"
                                            }, void 0, false, {
                                                fileName: "[project]/components/VibeCirclePages.jsx",
                                                lineNumber: 1605,
                                                columnNumber: 19
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("h2", {
                                                style: {
                                                    fontFamily: "'Bebas Neue', sans-serif",
                                                    fontSize: "clamp(36px,5vw,58px)",
                                                    color: C.white,
                                                    lineHeight: 1,
                                                    margin: "20px 0 24px"
                                                },
                                                children: [
                                                    "Post a deal.",
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("br", {}, void 0, false, {
                                                        fileName: "[project]/components/VibeCirclePages.jsx",
                                                        lineNumber: 1607,
                                                        columnNumber: 33
                                                    }, this),
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                        style: {
                                                            color: C.orange
                                                        },
                                                        children: "Find your creators."
                                                    }, void 0, false, {
                                                        fileName: "[project]/components/VibeCirclePages.jsx",
                                                        lineNumber: 1607,
                                                        columnNumber: 39
                                                    }, this)
                                                ]
                                            }, void 0, true, {
                                                fileName: "[project]/components/VibeCirclePages.jsx",
                                                lineNumber: 1606,
                                                columnNumber: 19
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                style: {
                                                    fontFamily: "'DM Sans', sans-serif",
                                                    fontSize: "17px",
                                                    color: C.dim,
                                                    lineHeight: 1.8,
                                                    marginBottom: "40px"
                                                },
                                                children: "Access thousands of verified creators who are already embedded in your target cities and culture niches. No agencies, no overhead — direct creative partnerships."
                                            }, void 0, false, {
                                                fileName: "[project]/components/VibeCirclePages.jsx",
                                                lineNumber: 1609,
                                                columnNumber: 19
                                            }, this)
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/components/VibeCirclePages.jsx",
                                        lineNumber: 1604,
                                        columnNumber: 17
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        style: {
                                            display: "flex",
                                            flexDirection: "column",
                                            gap: "16px"
                                        },
                                        children: HOW_IT_WORKS_BRAND.map((s, i)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])(Reveal, {
                                                delay: i * 0.08,
                                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                    style: {
                                                        display: "flex",
                                                        gap: "16px",
                                                        alignItems: "flex-start"
                                                    },
                                                    children: [
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                            style: {
                                                                width: "36px",
                                                                height: "36px",
                                                                borderRadius: "2px",
                                                                flexShrink: 0,
                                                                background: "rgba(255,107,0,0.12)",
                                                                border: `1px solid ${C.orange}30`,
                                                                display: "flex",
                                                                alignItems: "center",
                                                                justifyContent: "center",
                                                                fontFamily: "'Bebas Neue', sans-serif",
                                                                fontSize: "14px",
                                                                color: C.orange
                                                            },
                                                            children: s.n
                                                        }, void 0, false, {
                                                            fileName: "[project]/components/VibeCirclePages.jsx",
                                                            lineNumber: 1617,
                                                            columnNumber: 25
                                                        }, this),
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                            children: [
                                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                                    style: {
                                                                        fontFamily: "'Bebas Neue', sans-serif",
                                                                        fontSize: "18px",
                                                                        color: C.white,
                                                                        marginBottom: "4px"
                                                                    },
                                                                    children: [
                                                                        s.icon,
                                                                        " ",
                                                                        s.title
                                                                    ]
                                                                }, void 0, true, {
                                                                    fileName: "[project]/components/VibeCirclePages.jsx",
                                                                    lineNumber: 1624,
                                                                    columnNumber: 27
                                                                }, this),
                                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                                    style: {
                                                                        fontFamily: "'DM Sans', sans-serif",
                                                                        fontSize: "14px",
                                                                        color: C.dim,
                                                                        lineHeight: 1.6
                                                                    },
                                                                    children: s.desc
                                                                }, void 0, false, {
                                                                    fileName: "[project]/components/VibeCirclePages.jsx",
                                                                    lineNumber: 1625,
                                                                    columnNumber: 27
                                                                }, this)
                                                            ]
                                                        }, void 0, true, {
                                                            fileName: "[project]/components/VibeCirclePages.jsx",
                                                            lineNumber: 1623,
                                                            columnNumber: 25
                                                        }, this)
                                                    ]
                                                }, void 0, true, {
                                                    fileName: "[project]/components/VibeCirclePages.jsx",
                                                    lineNumber: 1616,
                                                    columnNumber: 23
                                                }, this)
                                            }, i, false, {
                                                fileName: "[project]/components/VibeCirclePages.jsx",
                                                lineNumber: 1615,
                                                columnNumber: 21
                                            }, this))
                                    }, void 0, false, {
                                        fileName: "[project]/components/VibeCirclePages.jsx",
                                        lineNumber: 1613,
                                        columnNumber: 17
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/components/VibeCirclePages.jsx",
                                lineNumber: 1603,
                                columnNumber: 15
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])(Reveal, {
                                delay: 0.1,
                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    style: {
                                        padding: "44px",
                                        background: "rgba(255,255,255,0.02)",
                                        border: `1px solid ${C.border}`,
                                        borderRadius: "4px",
                                        position: "sticky",
                                        top: "80px"
                                    },
                                    children: postSent ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        style: {
                                            textAlign: "center",
                                            padding: "40px 0"
                                        },
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                style: {
                                                    fontSize: "48px",
                                                    marginBottom: "16px"
                                                },
                                                children: "🎯"
                                            }, void 0, false, {
                                                fileName: "[project]/components/VibeCirclePages.jsx",
                                                lineNumber: 1644,
                                                columnNumber: 23
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                style: {
                                                    fontFamily: "'Bebas Neue', sans-serif",
                                                    fontSize: "32px",
                                                    color: C.orange,
                                                    marginBottom: "12px"
                                                },
                                                children: "Deal Posted!"
                                            }, void 0, false, {
                                                fileName: "[project]/components/VibeCirclePages.jsx",
                                                lineNumber: 1645,
                                                columnNumber: 23
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                style: {
                                                    fontFamily: "'DM Sans', sans-serif",
                                                    fontSize: "15px",
                                                    color: C.dim,
                                                    lineHeight: 1.7
                                                },
                                                children: "Your campaign is under review and will go live within 24 hours. Creators will start applying soon."
                                            }, void 0, false, {
                                                fileName: "[project]/components/VibeCirclePages.jsx",
                                                lineNumber: 1646,
                                                columnNumber: 23
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
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
                                                    fontFamily: "'Bebas Neue', sans-serif",
                                                    fontSize: "14px",
                                                    letterSpacing: "2px",
                                                    padding: "12px 28px",
                                                    background: C.orange,
                                                    color: C.bg,
                                                    border: "none",
                                                    borderRadius: "2px",
                                                    cursor: "pointer",
                                                    marginTop: "28px"
                                                },
                                                children: "Post Another Deal"
                                            }, void 0, false, {
                                                fileName: "[project]/components/VibeCirclePages.jsx",
                                                lineNumber: 1649,
                                                columnNumber: 23
                                            }, this)
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/components/VibeCirclePages.jsx",
                                        lineNumber: 1643,
                                        columnNumber: 21
                                    }, this) : /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["Fragment"], {
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                style: {
                                                    fontFamily: "'Bebas Neue', sans-serif",
                                                    fontSize: "24px",
                                                    color: C.white,
                                                    marginBottom: "28px"
                                                },
                                                children: "Post a Campaign Deal"
                                            }, void 0, false, {
                                                fileName: "[project]/components/VibeCirclePages.jsx",
                                                lineNumber: 1657,
                                                columnNumber: 23
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                style: {
                                                    display: "flex",
                                                    flexDirection: "column",
                                                    gap: "14px"
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
                                                    ].map(([k, ph])=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
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
                                                                padding: "14px 16px",
                                                                fontFamily: "'DM Sans', sans-serif",
                                                                fontSize: "14px",
                                                                color: C.white,
                                                                outline: "none",
                                                                transition: "border-color 0.2s"
                                                            },
                                                            onFocus: (e)=>e.target.style.borderColor = C.orange,
                                                            onBlur: (e)=>e.target.style.borderColor = "rgba(255,255,255,0.1)"
                                                        }, k, false, {
                                                            fileName: "[project]/components/VibeCirclePages.jsx",
                                                            lineNumber: 1662,
                                                            columnNumber: 27
                                                        }, this)),
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                        style: {
                                                            display: "grid",
                                                            gridTemplateColumns: "1fr 1fr",
                                                            gap: "12px"
                                                        },
                                                        children: [
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("select", {
                                                                value: postForm.category,
                                                                onChange: (e)=>setPostForm({
                                                                        ...postForm,
                                                                        category: e.target.value
                                                                    }),
                                                                style: {
                                                                    background: "rgba(255,255,255,0.04)",
                                                                    border: "1px solid rgba(255,255,255,0.1)",
                                                                    color: postForm.category ? C.white : "rgba(255,255,255,0.25)",
                                                                    padding: "14px 16px",
                                                                    borderRadius: "2px",
                                                                    fontFamily: "'DM Sans', sans-serif",
                                                                    fontSize: "14px",
                                                                    outline: "none",
                                                                    cursor: "pointer"
                                                                },
                                                                children: [
                                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("option", {
                                                                        value: "",
                                                                        style: {
                                                                            background: "#0C0C18"
                                                                        },
                                                                        children: "Category"
                                                                    }, void 0, false, {
                                                                        fileName: "[project]/components/VibeCirclePages.jsx",
                                                                        lineNumber: 1675,
                                                                        columnNumber: 29
                                                                    }, this),
                                                                    MKT_CATEGORIES.slice(1).map((c)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("option", {
                                                                            value: c,
                                                                            style: {
                                                                                background: "#0C0C18"
                                                                            },
                                                                            children: c
                                                                        }, c, false, {
                                                                            fileName: "[project]/components/VibeCirclePages.jsx",
                                                                            lineNumber: 1676,
                                                                            columnNumber: 63
                                                                        }, this))
                                                                ]
                                                            }, void 0, true, {
                                                                fileName: "[project]/components/VibeCirclePages.jsx",
                                                                lineNumber: 1674,
                                                                columnNumber: 27
                                                            }, this),
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("select", {
                                                                value: postForm.type,
                                                                onChange: (e)=>setPostForm({
                                                                        ...postForm,
                                                                        type: e.target.value
                                                                    }),
                                                                style: {
                                                                    background: "rgba(255,255,255,0.04)",
                                                                    border: "1px solid rgba(255,255,255,0.1)",
                                                                    color: postForm.type ? C.white : "rgba(255,255,255,0.25)",
                                                                    padding: "14px 16px",
                                                                    borderRadius: "2px",
                                                                    fontFamily: "'DM Sans', sans-serif",
                                                                    fontSize: "14px",
                                                                    outline: "none",
                                                                    cursor: "pointer"
                                                                },
                                                                children: [
                                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("option", {
                                                                        value: "",
                                                                        style: {
                                                                            background: "#0C0C18"
                                                                        },
                                                                        children: "Campaign Type"
                                                                    }, void 0, false, {
                                                                        fileName: "[project]/components/VibeCirclePages.jsx",
                                                                        lineNumber: 1679,
                                                                        columnNumber: 29
                                                                    }, this),
                                                                    MKT_TYPES.slice(1).map((t)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("option", {
                                                                            value: t,
                                                                            style: {
                                                                                background: "#0C0C18"
                                                                            },
                                                                            children: t
                                                                        }, t, false, {
                                                                            fileName: "[project]/components/VibeCirclePages.jsx",
                                                                            lineNumber: 1680,
                                                                            columnNumber: 58
                                                                        }, this))
                                                                ]
                                                            }, void 0, true, {
                                                                fileName: "[project]/components/VibeCirclePages.jsx",
                                                                lineNumber: 1678,
                                                                columnNumber: 27
                                                            }, this)
                                                        ]
                                                    }, void 0, true, {
                                                        fileName: "[project]/components/VibeCirclePages.jsx",
                                                        lineNumber: 1673,
                                                        columnNumber: 25
                                                    }, this),
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("textarea", {
                                                        placeholder: "Describe your campaign and what you're looking for in a creator...",
                                                        rows: 4,
                                                        value: postForm.desc,
                                                        onChange: (e)=>setPostForm({
                                                                ...postForm,
                                                                desc: e.target.value
                                                            }),
                                                        style: {
                                                            background: "rgba(255,255,255,0.04)",
                                                            border: "1px solid rgba(255,255,255,0.1)",
                                                            borderRadius: "2px",
                                                            padding: "14px 16px",
                                                            fontFamily: "'DM Sans', sans-serif",
                                                            fontSize: "14px",
                                                            color: C.white,
                                                            outline: "none",
                                                            resize: "vertical",
                                                            transition: "border-color 0.2s"
                                                        },
                                                        onFocus: (e)=>e.target.style.borderColor = C.orange,
                                                        onBlur: (e)=>e.target.style.borderColor = "rgba(255,255,255,0.1)"
                                                    }, void 0, false, {
                                                        fileName: "[project]/components/VibeCirclePages.jsx",
                                                        lineNumber: 1683,
                                                        columnNumber: 25
                                                    }, this),
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                                        onClick: ()=>postForm.brand && postForm.budget ? setPostSent(true) : null,
                                                        style: {
                                                            fontFamily: "'Bebas Neue', sans-serif",
                                                            fontSize: "15px",
                                                            letterSpacing: "3px",
                                                            padding: "16px",
                                                            background: C.orange,
                                                            color: C.bg,
                                                            border: "none",
                                                            borderRadius: "2px",
                                                            cursor: "pointer",
                                                            transition: "box-shadow 0.2s"
                                                        },
                                                        onMouseEnter: (e)=>e.target.style.boxShadow = `0 10px 30px ${C.orange}40`,
                                                        onMouseLeave: (e)=>e.target.style.boxShadow = "none",
                                                        children: "Post My Deal"
                                                    }, void 0, false, {
                                                        fileName: "[project]/components/VibeCirclePages.jsx",
                                                        lineNumber: 1693,
                                                        columnNumber: 25
                                                    }, this),
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                        style: {
                                                            fontFamily: "'DM Sans', sans-serif",
                                                            fontSize: "11px",
                                                            color: C.dimmer,
                                                            textAlign: "center"
                                                        },
                                                        children: "Enterprise plans: partners@vibecircle.com"
                                                    }, void 0, false, {
                                                        fileName: "[project]/components/VibeCirclePages.jsx",
                                                        lineNumber: 1702,
                                                        columnNumber: 25
                                                    }, this)
                                                ]
                                            }, void 0, true, {
                                                fileName: "[project]/components/VibeCirclePages.jsx",
                                                lineNumber: 1660,
                                                columnNumber: 23
                                            }, this)
                                        ]
                                    }, void 0, true)
                                }, void 0, false, {
                                    fileName: "[project]/components/VibeCirclePages.jsx",
                                    lineNumber: 1635,
                                    columnNumber: 17
                                }, this)
                            }, void 0, false, {
                                fileName: "[project]/components/VibeCirclePages.jsx",
                                lineNumber: 1634,
                                columnNumber: 15
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/components/VibeCirclePages.jsx",
                        lineNumber: 1602,
                        columnNumber: 13
                    }, this)
                }, void 0, false, {
                    fileName: "[project]/components/VibeCirclePages.jsx",
                    lineNumber: 1601,
                    columnNumber: 11
                }, this)
            }, void 0, false),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                style: {
                    background: C.orange,
                    padding: "24px 64px",
                    overflow: "hidden"
                },
                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
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
                        ].map((w, i)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                style: {
                                    fontFamily: "'Bebas Neue', sans-serif",
                                    fontSize: "15px",
                                    letterSpacing: "3px",
                                    color: "rgba(5,5,10,0.65)",
                                    marginRight: "28px"
                                },
                                children: w
                            }, `${x}-${i}`, false, {
                                fileName: "[project]/components/VibeCirclePages.jsx",
                                lineNumber: 1720,
                                columnNumber: 15
                            }, this)))
                }, void 0, false, {
                    fileName: "[project]/components/VibeCirclePages.jsx",
                    lineNumber: 1717,
                    columnNumber: 9
                }, this)
            }, void 0, false, {
                fileName: "[project]/components/VibeCirclePages.jsx",
                lineNumber: 1716,
                columnNumber: 7
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/components/VibeCirclePages.jsx",
        lineNumber: 1420,
        columnNumber: 5
    }, this);
}
function App() {
    const [page, setPage] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["useState"])("home");
    const PageMap = {
        home: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])(HomePage, {
            setPage: setPage
        }, void 0, false, {
            fileName: "[project]/components/VibeCirclePages.jsx",
            lineNumber: 1734,
            columnNumber: 11
        }, this),
        About: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])(AboutPage, {}, void 0, false, {
            fileName: "[project]/components/VibeCirclePages.jsx",
            lineNumber: 1735,
            columnNumber: 12
        }, this),
        Advertise: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])(AdvertisePage, {}, void 0, false, {
            fileName: "[project]/components/VibeCirclePages.jsx",
            lineNumber: 1736,
            columnNumber: 16
        }, this),
        Business: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])(BusinessPage, {}, void 0, false, {
            fileName: "[project]/components/VibeCirclePages.jsx",
            lineNumber: 1737,
            columnNumber: 15
        }, this),
        Jobs: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])(JobsPage, {}, void 0, false, {
            fileName: "[project]/components/VibeCirclePages.jsx",
            lineNumber: 1738,
            columnNumber: 11
        }, this),
        Marketplace: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])(MarketplacePage, {}, void 0, false, {
            fileName: "[project]/components/VibeCirclePages.jsx",
            lineNumber: 1739,
            columnNumber: 18
        }, this)
    };
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["Fragment"], {
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("style", {
                children: GLOBAL_CSS
            }, void 0, false, {
                fileName: "[project]/components/VibeCirclePages.jsx",
                lineNumber: 1744,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])(Nav, {
                current: page,
                setPage: setPage
            }, void 0, false, {
                fileName: "[project]/components/VibeCirclePages.jsx",
                lineNumber: 1745,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("main", {
                children: PageMap[page] || PageMap.home
            }, void 0, false, {
                fileName: "[project]/components/VibeCirclePages.jsx",
                lineNumber: 1746,
                columnNumber: 7
            }, this),
            page !== "home" && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])(Footer, {
                setPage: setPage
            }, void 0, false, {
                fileName: "[project]/components/VibeCirclePages.jsx",
                lineNumber: 1747,
                columnNumber: 27
            }, this)
        ]
    }, void 0, true);
}
}),
"[project]/app/advertise/page.jsx [app-rsc] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>AdvertisePageRoute,
    "metadata",
    ()=>metadata
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/server/route-modules/app-page/vendored/rsc/react-jsx-dev-runtime.js [app-rsc] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$components$2f$VibeCirclePages$2e$jsx__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/components/VibeCirclePages.jsx [app-rsc] (ecmascript)");
;
;
const metadata = {
    title: "Advertise - VibeCircle"
};
function AdvertisePageRoute() {
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$components$2f$VibeCirclePages$2e$jsx__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["AdvertisePage"], {}, void 0, false, {
        fileName: "[project]/app/advertise/page.jsx",
        lineNumber: 6,
        columnNumber: 10
    }, this);
}
}),
"[project]/app/advertise/page.jsx [app-rsc] (ecmascript, Next.js Server Component)", ((__turbopack_context__) => {

__turbopack_context__.n(__turbopack_context__.i("[project]/app/advertise/page.jsx [app-rsc] (ecmascript)"));
}),
];

//# sourceMappingURL=%5Broot-of-the-server%5D__fd90a0c7._.js.map
"use client";

import { useState } from "react";
import { C } from "@/components/shared/vibeTheme";
import { Divider, FAQ, Orb, PageHero, Reveal, Tag } from "@/components/shared/ui";

const ROLES_DISABLED=true;
const ROLES=[
  {
    title:"Frontend Engineer",dept:"Engineering",type:"Full-Time",level:"Mid---Senior",
    location:"Remote (South Africa)",salary:" equity",
    summary:"Build the interfaces that make cities feel alive. You'll own the core consumer product --- the living map, creator feeds, real-time streams, and brand marketplace --- from design system to shipped pixel.",
    responsibilities:["Architect and build complex React/TypeScript components for the live city map and creator tools","Own the geo-visualization layer using Mapbox GL and WebGL","Collaborate with Design to implement pixel-perfect motion and micro-interactions","Drive performance optimization --- the map must feel instant at city scale","Lead code reviews and raise engineering quality standards across the frontend team","Contribute to our design system and component library","Work directly with users: join creator calls, watch sessions, ship fast based on real feedback"],
    requirements:["4+ years of React and TypeScript production experience","Deep knowledge of browser performance, layout, and rendering pipelines","Experience with mapping libraries (Mapbox GL, Leaflet, or similar)","Strong CSS fundamentals --- you know why it works, not just that it works","Experience with WebSockets or real-time data (we move fast)","Portfolio with shipped consumer products you're proud of"],
    niceToHave:["WebGL or canvas rendering experience","React Native / cross-platform experience","Experience building at scale (1M+ DAU products)"],
    techStack:["React 18","TypeScript","Mapbox GL","WebGL","Framer Motion","TanStack Query","Vite","Vitest"],
    deadline:"Rolling",
  },
  {
    title:"Backend Engineer",dept:"Engineering",type:"Full-Time",level:"Mid---Senior",
    location:"Remote (South Africa)",salary:"R1.0m---R1.5m + equity",
    summary:"Power the infrastructure that makes cities discoverable in real time. You'll build the APIs, real-time event systems, and data pipelines that serve 50K+ creators and millions of map interactions per day.",
    responsibilities:["Design and build high-throughput APIs for the map, feeds, events, and creator tools","Architect real-time systems using WebSockets and pub/sub for live map updates","Build and optimize the geo-spatial query layer (PostGIS) powering location-based discovery","Own database design, query performance, and data integrity at scale","Collaborate on the brand marketplace matching algorithm","Implement robust authentication, permissions, and creator/business role systems","Set up and maintain observability, alerting, and incident runbooks"],
    requirements:["4+ years of backend engineering in Python, Go, or Node.js","Deep knowledge of PostgreSQL with PostGIS or equivalent spatial databases","Experience designing RESTful and/or GraphQL APIs consumed by millions","Solid understanding of caching (Redis), queuing (BullMQ/Kafka), and async architecture","Experience with cloud infrastructure (AWS or GCP)","You've debugged a production outage at 2am and shipped a postmortem by 10am"],
    niceToHave:["Geospatial data experience at scale","Experience with real-time event streaming (Kafka, Kinesis)","Machine learning pipeline exposure"],
    techStack:["Node.js / Python","PostgreSQL + PostGIS","Redis","AWS","Docker / Kubernetes","Kafka"],
    deadline:"Rolling",
  },
  {
    title:"UX Designer",dept:"Design",type:"Full-Time",level:"Mid",
    location:"Remote (South Africa)",salary:"R750k---R1.05m + equity",
    summary:"Design experiences that feel as alive as the cities we're mapping. Every flow you design will be used by creators building their livelihoods and businesses turning their neighborhoods into digital gravity.",
    responsibilities:["Own end-to-end design for creator tools --- from concept to shipped product","Run user research: creator interviews, usability sessions, synthesis","Design the VibeCircle mobile and web experience across map, feeds, and marketplace","Build and maintain a living design system in Figma","Partner with engineers to ship interactions that actually match your intent","Define motion principles and microinteraction standards","Present work clearly and defend decisions with user data --- not just aesthetics"],
    requirements:["3+ years of UX/product design at a consumer app or marketplace","Strong portfolio demonstrating complex interaction design and systems thinking","Expert-level Figma (components, variants, auto-layout, prototyping)","Experience running your own user research","Ability to work in a fast-moving environment where designs ship in days, not months","Strong written communication --- most design critiques happen async"],
    niceToHave:["Experience with map-based UI or location products","Motion design skills (After Effects, Rive, or Framer)","Basic HTML/CSS knowledge"],
    techStack:["Figma","Maze","Hotjar","Notion","Loom"],
    deadline:"Rolling",
  },
  {
    title:"Growth Marketer",dept:"Marketing",type:"Full-Time",level:"Mid",
    location:"Remote (South Africa)",salary:"R600k---R900k + equity",
    summary:"Own the growth engine that brings creators, businesses, and cities onto VibeCircle. You'll identify and scale the acquisition channels that compound --- not just ones that spike.",
    responsibilities:["Build and optimize paid and organic acquisition funnels across creator and business verticals","Own SEO strategy and content marketing pipeline from briefs to distribution","Design and run A/B tests on landing pages, emails, and in-app messaging","Manage the campus ambassador program across 50+ universities","Analyze cohort data to identify and fix retention leaks","Collaborate with creators on co-marketing and city launch campaigns","Build weekly growth dashboards and present findings to the leadership team"],
    requirements:["3+ years in growth or performance marketing at a consumer or marketplace startup","Strong analytical skills --- comfortable with SQL and attribution modeling","Experience managing paid channels (Meta, TikTok, Google) with real budgets","Track record of growing a user base, not just traffic","Exceptional written communication and copywriting instincts"],
    niceToHave:["Experience marketing to Gen Z creators or college students","Influencer / creator marketing background","City-based launch playbook experience"],
    techStack:["Google Analytics 4","Mixpanel","Segment","Meta Ads","HubSpot","Notion"],
    deadline:"Rolling",
  },
  {
    title:"Campus Ambassador",dept:"Community",type:"Part-Time",level:"Entry",
    location:"On-campus (South African Universities)",salary:"R150---R220/hr + performance bonuses",
    summary:"Be the pulse of VibeCircle on your campus. You're not promoting an app --- you're launching a movement. Campus Ambassadors are VibeCircle's most powerful distribution channel.",
    responsibilities:["Drive creator signups and map adoption among students on your campus","Organize and host VibeCircle-branded events and activations","Build relationships with student organizations, campus media, and event planners","Create authentic content from campus life and post to VibeCircle","Submit weekly reports: signups, events, content engagement","Identify and onboard local businesses and venues near campus","Be the face of VibeCircle in your city"],
    requirements:["Currently enrolled at a South African university (junior or senior preferred)","Genuine social presence and credibility on your campus","Organized, self-motivated, and able to hit weekly targets independently","Strong communication skills --- you'll represent the brand publicly","Prior event planning or brand ambassador experience is a plus, not required"],
    niceToHave:["Greek life, student government, or sports organization involvement","Content creation background","Prior startup or community-building experience"],
    techStack:["VibeCircle app","Notion (reporting)","Canva (content)"],
    deadline:"Rolling --- cohort starts each semester",
  },
  {
    title:"Creator Partnership Intern",dept:"Creators",type:"Internship",level:"Entry",
    location:"Remote (South Africa)",salary:"R150---R180/hr",
    summary:"Help onboard, support, and scale the creator ecosystem that is the lifeblood of VibeCircle. You'll work directly with the Head of Creator Partnerships to find, activate, and retain the creators who make cities come alive.",
    responsibilities:["Source and outreach to creators in our priority cities","Manage the creator onboarding pipeline from application to first post","Build and maintain creator relationships --- you're their primary point of contact","Assist with brand marketplace matching between creators and brand deals","Track creator performance metrics and surface insights to the team","Help create creator-facing documentation, guides, and onboarding flows","Support the planning and execution of creator events and activations"],
    requirements:["Currently enrolled or recently graduated (within 12 months)","Passionate about creator culture, city life, and social media","Excellent written communication and relationship-building instincts","Organized and detail-oriented --- you'll manage multiple creators at once","Familiar with Instagram, TikTok, and content creation workflows"],
    niceToHave:["Personal experience as a content creator or community builder","Talent management or influencer marketing internship experience","Familiarity with creator economy tools and platforms"],
    techStack:["VibeCircle app","Notion","Airtable","Slack"],
    deadline:"Rolling --- 3-month paid internship with potential to extend",
  },
  {
    title:"Data Engineer",dept:"Engineering",type:"Full-Time",level:"Senior",
    location:"Remote (South Africa)",salary:"R1.1m---R1.7m + equity",
    summary:"Build the data infrastructure that tells us how cities move. Your pipelines will power creator analytics, business dashboards, map discovery algorithms, and real-time engagement metrics at scale.",
    responsibilities:["Design and maintain scalable data pipelines from event ingestion to analytical tables","Build the real-time analytics infrastructure behind creator and business dashboards","Own the data warehouse (Snowflake/BigQuery) --- schema design, quality, governance","Partner with product and engineering to instrument new features with correct event tracking","Build geo-spatial analytics capabilities --- city heatmaps, movement patterns, discovery funnels","Create internal BI dashboards for leadership, growth, and creator partnerships teams","Define data quality standards and lead the build-out of our monitoring layer"],
    requirements:["5+ years of data engineering experience","Expert SQL and proficiency in Python for data pipelines","Experience with a modern data warehouse (Snowflake, BigQuery, or Redshift)","Strong understanding of streaming vs batch processing trade-offs","Experience with dbt, Airflow, or similar orchestration tools","Track record of building data products used by non-technical stakeholders"],
    niceToHave:["Geo-spatial analytics or PostGIS experience","Real-time streaming with Kafka or Kinesis","ML feature engineering experience"],
    techStack:["dbt","Snowflake","Airflow","Python","Kafka","Looker","PostGIS"],
    deadline:"Rolling",
  },
  {
    title:"Brand Partnerships Manager",dept:"Business",type:"Full-Time",level:"Mid---Senior",
    location:"Johannesburg or Cape Town (Hybrid)",salary:"R750k---R1.1m + commission + equity",
    summary:"Close and grow the brand relationships that fund VibeCircle's creator economy. You'll own the full sales cycle --- from initial outreach to signed deal to campaign success --- across restaurants, venues, fashion brands, and event companies.",
    responsibilities:["Own a pipeline of 50+ brand opportunities across your assigned verticals","Run end-to-end sales cycles: outreach, demos, proposals, negotiation, close","Build long-term relationships with brand and agency partners --- not transactional deals","Partner with the creator team to structure brand-creator match campaigns","Collaborate with product to shape brand marketplace features based on partner feedback","Hit and exceed quarterly revenue targets","Represent VibeCircle at industry events, trade shows, and creator economy conferences"],
    requirements:["3+ years in brand partnerships, media sales, or sponsorship sales","Proven track record of closing deals above R900k","Strong existing relationships in fashion, F&B, entertainment, or tech","Excellent written and verbal communication --- you close with confidence","Comfort operating in an early-stage startup with limited process"],
    niceToHave:["Creator economy or influencer marketing sales experience","Experience selling geo-targeted or experiential marketing products","Existing relationships with CMOs or brand managers at mid-market brands"],
    techStack:["Salesforce","HubSpot","Notion","Looker","Slack"],
    deadline:"Rolling",
  },
];
const DEPT_COLORS={Engineering:C.orange,Design:C.blue,Marketing:C.pink,Community:C.purple,Creators:C.gold,Business:C.orange};
const JOBS_FAQS=[
  {q:"How do I apply?",a:"Applications must be submitted through the Careers page. We do not accept applications via email or social media. Only shortlisted candidates will be contacted.."},
  {q:"Where is VibeCircle based?",a:"Remote-first with hub in South Africa."},
  {q:"Can non-South African citizens apply?",a:"At this time, we only consider applicants who are South African citizens or hold valid authorization to work in South Africa. We do not offer visa sponsorship."},
  {q:"What does the interview process look like?",a:"Intro call (30 min) ? skills review ? take-home project (2---4 hours) ? final team interview. We complete the process within 2 weeks."},
  {q:"Do you offer internships?",a:"Yes. We offer internships and graduate opportunities throughout the year. Internship openings will be listed on the Careers page when available."},
  {q:"I don't see a role that fits. Can I still apply?",a:"Absolutely. Send your story to careers@vibecircle.com. We care more about builders who are excited about our mission than fitting into a specific job description. If your background and passion align, we want to hear from you."},
];

export default function JobsPage({openWaitlist,addToast}){
  const[filter,setFilter]=useState("All");
  const[expanded,setExpanded]=useState(null);
  const[jobTab,setJobTab]=useState({});
  const[applyOpen,setApplyOpen]=useState(null);
  const depts=["All",...Object.keys(DEPT_COLORS)];
  const filtered=filter==="All"?ROLES:ROLES.filter(r=>r.dept===filter);
  const getTab=(i)=>jobTab[i]||"Overview";
  const setTab=(i,t)=>setJobTab(p=>({...p,[i]:t}));
  return(
    <div style={{background:C.bg,color:C.white}}>
      <PageHero tag="Careers" title="We don't hire for roles." accent="We hire builders." sub="Ambitious, fast-moving, impact-driven. Join the team building infrastructure for modern city culture."/>
      <Divider/>
      {/* PERKS */}
      <section className="sec-pad" style={{background:C.bg2}}><div style={{maxWidth:"1100px",margin:"0 auto"}}><Reveal style={{marginBottom:"44px"}}><Tag>What You Get</Tag></Reveal><div className="grid-4">{[
        {icon:"-------",t:"Real Impact",d:"Your work ships. It goes live. It matters."},
        {icon:"----",t:"Serious Skill Growth",d:"You build real features, solve real problems, and level up fast."},
        {icon:"----",t:"Creative Freedom",d:"Ideas are welcomed. Experiments are encouraged. Ownership is real."},
        {icon:"---",t:"A Team That Builds Bold",d:"No ego. No politics. Just smart people creating something meaningful."}
        ].map((p,i)=><Reveal key={i} delay={i*.1}><div style={{padding:"28px 22px",background:"rgba(255,255,255,0.02)",border:"1px solid rgba(255,255,255,0.07)",borderRadius:"4px",height:"100%",transition:"all .3s"}} onMouseEnter={e=>{e.currentTarget.style.borderColor=C.orange;e.currentTarget.style.background="rgba(255,107,0,0.06)";e.currentTarget.style.transform="translateY(-4px)";}} onMouseLeave={e=>{e.currentTarget.style.borderColor="rgba(255,255,255,0.07)";e.currentTarget.style.background="rgba(255,255,255,0.02)";e.currentTarget.style.transform="";}}><div style={{fontSize:"24px",marginBottom:"12px"}}>{p.icon}</div><div style={{fontFamily:"'Bebas Neue',sans-serif",fontSize:"18px",color:C.white,marginBottom:"8px"}}>{p.t}</div><div style={{fontFamily:"'DM Sans',sans-serif",fontSize:"13px",color:C.dim,lineHeight:1.7}}>{p.d}</div></div></Reveal>)}</div></div></section>
      <Divider/>
      {/* ROLES */}
      <section className="sec-pad" style={{position:"relative",overflow:"hidden"}}>
        <Orb top="0%" right="-5%" size={450} opacity={0.08}/>
        <div style={{maxWidth:"1100px",margin:"0 auto"}}>
          <Reveal style={{marginBottom:"36px"}}><Tag>Open Roles</Tag><h2 style={{fontFamily:"'Bebas Neue',sans-serif",fontSize:"clamp(30px,5vw,54px)",color:C.white,lineHeight:1,marginTop:"16px"}}>Find your position<br/><span style={{color:C.orange}}>in the vibe.</span></h2></Reveal>
          {!ROLES_DISABLED&&ROLES.length>0&&(
            <div style={{display:"flex",gap:"7px",flexWrap:"wrap",marginBottom:"32px"}}>
              {depts.map(d=><button key={d} onClick={()=>{setFilter(d);setExpanded(null);}} style={{fontFamily:"'Bebas Neue',sans-serif",fontSize:"12px",letterSpacing:"2px",padding:"8px 16px",background:filter===d?(DEPT_COLORS[d]||C.orange):"transparent",color:filter===d?C.bg:C.dim,border:`1px solid ${filter===d?(DEPT_COLORS[d]||C.orange):"rgba(255,255,255,0.12)"}`,borderRadius:"2px",cursor:"pointer",transition:"all .2s"}}>{d}</button>)}
            </div>
          )}
          {ROLES_DISABLED||ROLES.length===0?(
            <div style={{padding:"22px 24px",background:"rgba(255,255,255,0.03)",border:"1px solid rgba(255,255,255,0.08)",borderRadius:"4px"}}>
              <div style={{fontFamily:"'Bebas Neue',sans-serif",fontSize:"18px",letterSpacing:"2px",color:C.orange,marginBottom:"8px"}}>No openings at the moment</div>
              <div style={{fontFamily:"'DM Sans',sans-serif",fontSize:"14px",color:C.dim,lineHeight:1.6}}>We are not hiring right now. Check back soon.</div>
            </div>
          ):(
          <div style={{display:"flex",flexDirection:"column",gap:"10px"}}>
            {filtered.map((role,i)=>{
              const isOpen=expanded===i;
              const dc=DEPT_COLORS[role.dept]||C.orange;
              const tab=getTab(i);
              const TABS=["Overview","Responsibilities","Requirements","Stack & Perks"];
              return(
                <Reveal key={role.title+filter} delay={i*.05}>
                  <div style={{background:isOpen?`${dc}07`:"rgba(255,255,255,0.02)",border:`1px solid ${isOpen?dc+"50":"rgba(255,255,255,0.07)"}`,borderRadius:"4px",overflow:"hidden",transition:"all .3s"}}>
                    {/* HEADER ROW */}
                    <div onClick={()=>setExpanded(isOpen?null:i)} style={{padding:"20px 26px",display:"flex",alignItems:"center",gap:"16px",cursor:"pointer"}}>
                      <div style={{flex:1}}>
                        <div style={{fontFamily:"'DM Sans',sans-serif",fontSize:"16px",fontWeight:600,color:C.white,marginBottom:"6px"}}>{role.title}</div>
                        <div style={{display:"flex",gap:"8px",flexWrap:"wrap",alignItems:"center"}}>
                          <span style={{fontFamily:"'Bebas Neue',sans-serif",fontSize:"10px",letterSpacing:"2px",color:dc,background:`${dc}18`,padding:"3px 9px",borderRadius:"2px"}}>{role.dept}</span>
                          <span style={{fontFamily:"'DM Sans',sans-serif",fontSize:"11px",color:C.dimmer}}>--</span>
                          <span style={{fontFamily:"'DM Sans',sans-serif",fontSize:"12px",color:C.dimmer}}>{role.type}</span>
                          <span style={{fontFamily:"'DM Sans',sans-serif",fontSize:"11px",color:C.dimmer}}>--</span>
                          <span style={{fontFamily:"'DM Sans',sans-serif",fontSize:"12px",color:C.dimmer}}>{role.location}</span>
                          <span style={{fontFamily:"'DM Sans',sans-serif",fontSize:"11px",color:C.dimmer}}>--</span>
                          <span style={{fontFamily:"'Bebas Neue',sans-serif",fontSize:"12px",letterSpacing:"1px",color:C.orange}}>{role.salary}</span>
                        </div>
                      </div>
                      <div style={{width:"26px",height:"26px",border:`1px solid ${isOpen?dc:"rgba(255,255,255,0.12)"}`,borderRadius:"50%",display:"flex",alignItems:"center",justifyContent:"center",color:isOpen?dc:C.dimmer,fontSize:"16px",transition:"all .3s",transform:isOpen?"rotate(45deg)":"none",flexShrink:0,fontWeight:300}}>+</div>
                    </div>
                    {/* EXPANDED BODY */}
                    {isOpen&&(
                      <div style={{padding:"0 26px 28px",animation:"fadeUp .3s ease"}}>
                        <div style={{height:"1px",background:`${dc}25`,marginBottom:"24px"}}/>
                        {/* INTERNAL TABS */}
                        <div style={{display:"flex",gap:"4px",marginBottom:"24px",flexWrap:"wrap"}}>
                          {TABS.map(t=>(
                            <button key={t} onClick={()=>setTab(i,t)} style={{fontFamily:"'DM Sans',sans-serif",fontSize:"12px",letterSpacing:".5px",padding:"7px 14px",background:tab===t?dc:"rgba(255,255,255,0.04)",color:tab===t?C.bg:C.dim,border:`1px solid ${tab===t?dc:"rgba(255,255,255,0.08)"}`,borderRadius:"2px",cursor:"pointer",transition:"all .2s"}}>{t}</button>
                          ))}
                        </div>
                        {/* TAB CONTENT */}
                        {tab==="Overview"&&(
                          <div>
                            <p style={{fontFamily:"'DM Sans',sans-serif",fontSize:"15px",color:"rgba(255,255,255,0.8)",lineHeight:1.8,marginBottom:"20px"}}>{role.summary}</p>
                            <div style={{display:"flex",gap:"10px",flexWrap:"wrap",marginBottom:"20px"}}>
                              {[{l:"---- Location",v:role.location},{l:"--- Type",v:role.type},{l:"---- Level",v:role.level},{l:"---- Deadline",v:role.deadline}].map(({l,v})=>(
                                <div key={l} style={{padding:"10px 16px",background:"rgba(255,255,255,0.03)",border:"1px solid rgba(255,255,255,0.08)",borderRadius:"3px"}}>
                                  <div style={{fontFamily:"'DM Sans',sans-serif",fontSize:"10px",color:C.dimmer,letterSpacing:"1px",textTransform:"uppercase"}}>{l}</div>
                                  <div style={{fontFamily:"'DM Sans',sans-serif",fontSize:"13px",color:C.white,marginTop:"3px",fontWeight:600}}>{v}</div>
                                </div>
                              ))}
                            </div>
                          </div>
                        )}
                        {tab==="Responsibilities"&&(
                          <div style={{display:"flex",flexDirection:"column",gap:"10px"}}>
                            {role.responsibilities.map((r,idx)=>(
                              <div key={idx} style={{display:"flex",gap:"12px",alignItems:"flex-start",padding:"12px 16px",background:"rgba(255,255,255,0.02)",borderRadius:"3px",border:"1px solid rgba(255,255,255,0.06)"}}>
                                <span style={{color:dc,fontSize:"14px",marginTop:"1px",flexShrink:0}}>---</span>
                                <span style={{fontFamily:"'DM Sans',sans-serif",fontSize:"14px",color:"rgba(255,255,255,0.75)",lineHeight:1.6}}>{r}</span>
                              </div>
                            ))}
                          </div>
                        )}
                        {tab==="Requirements"&&(
                          <div>
                            <div style={{marginBottom:"20px"}}>
                              <div style={{fontFamily:"'Bebas Neue',sans-serif",fontSize:"13px",letterSpacing:"2px",color:dc,marginBottom:"12px"}}>Requirements</div>
                              <div style={{display:"flex",flexDirection:"column",gap:"8px"}}>
                                {role.requirements.map((r,idx)=>(
                                  <div key={idx} style={{display:"flex",gap:"10px",alignItems:"flex-start"}}>
                                    <span style={{color:dc,fontSize:"14px",flexShrink:0,marginTop:"1px"}}>---</span>
                                    <span style={{fontFamily:"'DM Sans',sans-serif",fontSize:"14px",color:"rgba(255,255,255,0.75)",lineHeight:1.6}}>{r}</span>
                                  </div>
                                ))}
                              </div>
                            </div>
                            {role.niceToHave&&<div><div style={{fontFamily:"'Bebas Neue',sans-serif",fontSize:"13px",letterSpacing:"2px",color:C.dimmer,marginBottom:"12px"}}>Nice to Have</div><div style={{display:"flex",flexDirection:"column",gap:"8px"}}>{role.niceToHave.map((r,idx)=><div key={idx} style={{display:"flex",gap:"10px",alignItems:"flex-start"}}><span style={{color:C.dimmer,fontSize:"14px",flexShrink:0,marginTop:"1px"}}>---</span><span style={{fontFamily:"'DM Sans',sans-serif",fontSize:"14px",color:C.dim,lineHeight:1.6}}>{r}</span></div>)}</div></div>}
                          </div>
                        )}
                        {tab==="Stack & Perks"&&(
                          <div>
                            {role.techStack&&<div style={{marginBottom:"24px"}}><div style={{fontFamily:"'Bebas Neue',sans-serif",fontSize:"13px",letterSpacing:"2px",color:dc,marginBottom:"12px"}}>Tech Stack</div><div style={{display:"flex",gap:"8px",flexWrap:"wrap"}}>{role.techStack.map(t=><span key={t} style={{fontFamily:"'DM Sans',sans-serif",fontSize:"12px",color:C.white,padding:"6px 14px",background:`${dc}15`,border:`1px solid ${dc}30`,borderRadius:"2px"}}>{t}</span>)}</div></div>}
                            <div><div style={{fontFamily:"'Bebas Neue',sans-serif",fontSize:"13px",letterSpacing:"2px",color:dc,marginBottom:"12px"}}>Benefits</div><div style={{display:"grid",gridTemplateColumns:"1fr 1fr",gap:"8px"}}>{["Equity for all full-time roles","Remote-first & flexible hours","R30,000/yr learning budget","Medical aid stipend","Home office stipend (R7,500)","Quarterly team retreats","Unlimited PTO (we mean it)","Free VibeCircle Orbit plan"].map(b=><div key={b} style={{display:"flex",gap:"8px",alignItems:"center",padding:"10px 14px",background:"rgba(255,255,255,0.02)",border:"1px solid rgba(255,255,255,0.06)",borderRadius:"3px"}}><span style={{color:dc,fontSize:"12px",flexShrink:0}}>---</span><span style={{fontFamily:"'DM Sans',sans-serif",fontSize:"12px",color:"rgba(255,255,255,0.7)"}}>{b}</span></div>)}</div></div>
                          </div>
                        )}
                        <div style={{marginTop:"24px"}}>
                          <button
                            onClick={()=>setApplyOpen(applyOpen===i?null:i)}
                            style={{fontFamily:"'Bebas Neue',sans-serif",fontSize:"13px",letterSpacing:"3px",padding:"12px 28px",background:dc,color:C.bg,border:"none",borderRadius:"2px",cursor:"pointer",transition:"box-shadow .2s,transform .2s",marginRight:"10px"}}
                            onMouseEnter={e=>{e.target.style.boxShadow=`0 8px 24px ${dc}45`;e.target.style.transform="translateY(-2px)";}}
                            onMouseLeave={e=>{e.target.style.boxShadow="";e.target.style.transform="";}}
                          >{applyOpen===i?"Close Form":"Apply Now"}</button>
                          <span style={{fontFamily:"'DM Sans',sans-serif",fontSize:"11px",color:C.dimmer}}>or email <a href="mailto:careers@vibecircle.com" style={{color:dc,textDecoration:"none"}}>careers@vibecircle.com</a></span>
                        </div>
                        {applyOpen===i&&(
                          <div style={{marginTop:"20px",padding:"20px",background:"rgba(255,255,255,0.02)",border:`1px solid ${dc}30`,borderRadius:"4px",animation:"fadeUp .3s ease"}}>
                            <div style={{display:"grid",gridTemplateColumns:"repeat(auto-fit,minmax(220px,1fr))",gap:"12px",marginBottom:"12px"}}>
                              {[
                                {label:"Full Name",type:"text",placeholder:"Alex Rivera"},
                                {label:"Email",type:"email",placeholder:"alex@email.com"},
                                {label:"Location",type:"text",placeholder:"City, Country"},
                                {label:"Portfolio / LinkedIn",type:"url",placeholder:"https://"},
                              ].map((f)=>(
                                <label key={f.label} style={{display:"flex",flexDirection:"column",gap:"8px"}}>
                                  <span style={{fontFamily:"'DM Sans',sans-serif",fontSize:"11px",color:C.dimmer,letterSpacing:"1px",textTransform:"uppercase"}}>{f.label}</span>
                                  <input type={f.type} placeholder={f.placeholder} style={{height:"42px",padding:"0 12px",background:"#0C0C18",border:`1px solid rgba(255,255,255,0.12)`,color:C.white,borderRadius:"3px",fontFamily:"'DM Sans',sans-serif",fontSize:"13px",outline:"none"}}/>
                                </label>
                              ))}
                            </div>
                            <label style={{display:"flex",flexDirection:"column",gap:"8px",marginBottom:"12px"}}>
                              <span style={{fontFamily:"'DM Sans',sans-serif",fontSize:"11px",color:C.dimmer,letterSpacing:"1px",textTransform:"uppercase"}}>Why VibeCircle?</span>
                              <textarea rows={4} placeholder="Tell us what you want to build." style={{padding:"10px 12px",background:"#0C0C18",border:`1px solid rgba(255,255,255,0.12)`,color:C.white,borderRadius:"3px",fontFamily:"'DM Sans',sans-serif",fontSize:"13px",outline:"none",resize:"vertical"}}/>
                            </label>
                            <label
                              style={{display:"flex",alignItems:"center",justifyContent:"space-between",gap:"16px",padding:"14px 16px",background:"rgba(255,255,255,0.02)",border:`1px dashed ${dc}55`,borderRadius:"4px",cursor:"pointer",transition:"all .2s"}}
                              onMouseEnter={e=>{e.currentTarget.style.background=`${dc}10`;e.currentTarget.style.borderColor=dc;}}
                              onMouseLeave={e=>{e.currentTarget.style.background="rgba(255,255,255,0.02)";e.currentTarget.style.borderColor=`${dc}55`;}}
                            >
                              <div>
                                <div style={{fontFamily:"'Bebas Neue',sans-serif",fontSize:"14px",letterSpacing:"3px",color:dc}}>Upload CV</div>
                                <div style={{fontFamily:"'DM Sans',sans-serif",fontSize:"12px",color:C.dimmer,marginTop:"4px"}}>PDF or DOCX -- up to 10MB</div>
                              </div>
                              <div style={{fontFamily:"'DM Sans',sans-serif",fontSize:"12px",color:C.white,background:`${dc}18`,border:`1px solid ${dc}40`,padding:"6px 12px",borderRadius:"3px"}}>Choose File</div>
                              <input type="file" accept=".pdf,.doc,.docx" style={{display:"none"}}/>
                            </label>
                            <div style={{display:"flex",gap:"10px",alignItems:"center",marginTop:"16px",flexWrap:"wrap"}}>
                              <button
                                onClick={()=>{addToast({type:"success",title:"Application Received!",message:`We'll review your application for ${role.title} within 5 business days.`});setApplyOpen(null);}}
                                style={{fontFamily:"'Bebas Neue',sans-serif",fontSize:"13px",letterSpacing:"3px",padding:"12px 26px",background:dc,color:C.bg,border:"none",borderRadius:"2px",cursor:"pointer",transition:"box-shadow .2s"}}
                                onMouseEnter={e=>e.target.style.boxShadow=`0 8px 24px ${dc}45`}
                                onMouseLeave={e=>e.target.style.boxShadow=""}
                              >Submit Application</button>
                              <span style={{fontFamily:"'DM Sans',sans-serif",fontSize:"11px",color:C.dimmer}}>We respond within 5 business days.</span>
                            </div>
                          </div>
                        )}
                      </div>
                    )}
                  </div>
                </Reveal>
              );
            })}
          </div>
          )}
        </div>
      </section>
      <Divider/>
      <section className="sec-pad" style={{background:C.bg2}}><div style={{maxWidth:"800px",margin:"0 auto"}}><Reveal style={{marginBottom:"44px"}}><Tag>Hiring FAQ</Tag><h2 style={{fontFamily:"'Bebas Neue',sans-serif",fontSize:"clamp(26px,4vw,44px)",color:C.white,lineHeight:1,marginTop:"16px"}}>About joining <span style={{color:C.orange}}>VibeCircle.</span></h2></Reveal><FAQ items={JOBS_FAQS}/></div></section>
      <section style={{background:C.orange,padding:"64px clamp(20px,6vw,64px)"}}><div style={{maxWidth:"1100px",margin:"0 auto",display:"flex",alignItems:"center",justifyContent:"space-between",flexWrap:"wrap",gap:"24px"}}><div><div style={{fontFamily:"'Bebas Neue',sans-serif",fontSize:"clamp(24px,4vw,44px)",color:C.bg,lineHeight:1}}>Don't see your role?<br/>Build your own.</div><p style={{fontFamily:"'DM Sans',sans-serif",fontSize:"14px",color:"rgba(5,5,10,0.6)",marginTop:"8px"}}>careers@vibecircle.com</p></div><button onClick={()=>openWaitlist("Custom Role")} style={{fontFamily:"'Bebas Neue',sans-serif",fontSize:"14px",letterSpacing:"3px",padding:"14px 36px",background:C.bg,color:C.orange,border:"none",borderRadius:"2px",cursor:"pointer",transition:"transform .2s"}} onMouseEnter={e=>e.target.style.transform="translateY(-2px)"} onMouseLeave={e=>e.target.style.transform=""}>Get in Touch</button></div></section>
    </div>
  );
}

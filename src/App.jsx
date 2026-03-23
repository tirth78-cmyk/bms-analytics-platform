import { useState, useEffect, useRef } from "react";
import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer, PieChart, Pie, Cell, Legend, RadarChart, Radar, PolarGrid, PolarAngleAxis, PolarRadiusAxis, Treemap, AreaChart, Area, ComposedChart, Line } from "recharts";
import { Database, BarChart3, Users, Shield, FlaskConical, TrendingUp, Brain, Layers, ArrowRight, ChevronRight, Zap, Target, AlertTriangle, CheckCircle2, ArrowUpRight, ArrowDownRight, Search, Activity, GitBranch, Globe, Server, Cpu, MonitorDot } from "lucide-react";

const NAVY = "#0E2841", DBLUE = "#0A5182", CYAN = "#0F9ED5", STEEL = "#115585", ACCENT = "#E8792F", GREEN = "#27AE60", RED = "#E74C3C", PURPLE = "#8E44AD";
const COLORS = [CYAN, ACCENT, GREEN, PURPLE, DBLUE, RED, "#F39C12", "#1ABC9C", STEEL, "#E91E63", "#795548", "#607D8B"];

const brandData = [{"Brand":"Zeposia","Impressions":55026866,"Clicks":2307174,"Conversion_Events":101866,"CTR":4.19,"ConvRate":4.42},{"Brand":"Eliquis","Impressions":53740685,"Clicks":2364500,"Conversion_Events":124236,"CTR":4.4,"ConvRate":5.25},{"Brand":"Krazati","Impressions":53571010,"Clicks":2220797,"Conversion_Events":104353,"CTR":4.15,"ConvRate":4.7},{"Brand":"Camzyos","Impressions":53326210,"Clicks":2286375,"Conversion_Events":107085,"CTR":4.29,"ConvRate":4.68},{"Brand":"Augtyro","Impressions":52555673,"Clicks":1955094,"Conversion_Events":80770,"CTR":3.72,"ConvRate":4.13},{"Brand":"Abecma","Impressions":52522300,"Clicks":1827683,"Conversion_Events":92004,"CTR":3.48,"ConvRate":5.03},{"Brand":"Reblozyl","Impressions":52488288,"Clicks":2170584,"Conversion_Events":100020,"CTR":4.14,"ConvRate":4.61},{"Brand":"Opdivo","Impressions":52303695,"Clicks":2236490,"Conversion_Events":105946,"CTR":4.28,"ConvRate":4.74},{"Brand":"Sotyktu","Impressions":51395164,"Clicks":2025195,"Conversion_Events":85786,"CTR":3.94,"ConvRate":4.24},{"Brand":"Opdualag","Impressions":50598081,"Clicks":1961901,"Conversion_Events":96079,"CTR":3.88,"ConvRate":4.9},{"Brand":"Breyanzi","Impressions":50572943,"Clicks":2173499,"Conversion_Events":97411,"CTR":4.3,"ConvRate":4.48},{"Brand":"Opdivo Qvantig","Impressions":48322675,"Clicks":2019258,"Conversion_Events":110185,"CTR":4.18,"ConvRate":5.46}];
const channelData = [{"Channel":"eDetailer/CLM","Clicks":1422849,"CPC":1.08,"CTR":4.29,"Conversion_Events":65566},{"Channel":"Congress","Clicks":1265984,"CPC":1.09,"CTR":4.55,"Conversion_Events":60107},{"Channel":"Social-LinkedIn","Clicks":1386197,"CPC":1.15,"CTR":4.47,"Conversion_Events":69254},{"Channel":"KOL Video","Clicks":1230708,"CPC":1.15,"CTR":3.94,"Conversion_Events":58263},{"Channel":"Direct Mail","Clicks":1363328,"CPC":1.18,"CTR":3.84,"Conversion_Events":60188},{"Channel":"Mobile Push","Clicks":1248503,"CPC":1.19,"CTR":3.99,"Conversion_Events":54102},{"Channel":"SMS/MMS","Clicks":1410479,"CPC":1.2,"CTR":4.03,"Conversion_Events":65682},{"Channel":"Email","Clicks":1282349,"CPC":1.2,"CTR":4.32,"Conversion_Events":54535},{"Channel":"Social-FB","Clicks":1107678,"CPC":1.2,"CTR":3.92,"Conversion_Events":54081},{"Channel":"CTV","Clicks":1153109,"CPC":1.2,"CTR":3.81,"Conversion_Events":52679}];
const contentTypeData = [{"Content_Type":"Formulary Toolkit","ConvRate":5.44},{"Content_Type":"Patient Case Study","ConvRate":5.37},{"Content_Type":"Interactive Calculator","ConvRate":5.05},{"Content_Type":"Competitive Comparison","ConvRate":5.0},{"Content_Type":"Treatment Algorithm","ConvRate":4.94},{"Content_Type":"KOL Interview","ConvRate":4.92},{"Content_Type":"Dosing Guide","ConvRate":4.91},{"Content_Type":"AR/VR Experience","ConvRate":4.84},{"Content_Type":"RWE Summary","ConvRate":4.81},{"Content_Type":"MOA Animation","ConvRate":4.77}];
const persData = [{"Personalization_Level":"Engagement History","CTR":4.17,"ConvRate":4.42},{"Personalization_Level":"AI-Dynamic","CTR":4.16,"ConvRate":5.04},{"Personalization_Level":"Prescribing History","CTR":4.08,"ConvRate":4.71},{"Personalization_Level":"Full Adaptive","CTR":4.07,"ConvRate":4.71},{"Personalization_Level":"Specialty-Based","CTR":4.06,"ConvRate":5.11},{"Personalization_Level":"Name Only","CTR":3.91,"ConvRate":4.73}];
const sovData = [{"Therapeutic_Area":"Cardiovascular","BMS_SOV":45.2},{"Therapeutic_Area":"Hematology","BMS_SOV":46.0},{"Therapeutic_Area":"Immunology","BMS_SOV":46.8},{"Therapeutic_Area":"Oncology","BMS_SOV":47.0}];
const compData = [{"Competitor_Brand":"Skyrizi","BMS_Eng":4.24,"Comp_Eng":5.26},{"Competitor_Brand":"Otezla","BMS_Eng":4.27,"Comp_Eng":5.05},{"Competitor_Brand":"Keytruda","BMS_Eng":4.81,"Comp_Eng":4.63},{"Competitor_Brand":"Tecentriq","BMS_Eng":4.74,"Comp_Eng":4.42},{"Competitor_Brand":"Xarelto","BMS_Eng":4.81,"Comp_Eng":4.22},{"Competitor_Brand":"Rinvoq","BMS_Eng":4.16,"Comp_Eng":3.85}];
const nbaData = [{"NBA":"Share RWE Summary","Rate":40.6},{"NBA":"Send Dosing Guide","Rate":39.5},{"NBA":"Email: Clinical Data","Rate":36.7},{"NBA":"Invite to Webinar","Rate":35.0},{"NBA":"Cool Down","Rate":34.6},{"NBA":"Sample Follow-up","Rate":34.4},{"NBA":"Digital Detailer","Rate":34.2},{"NBA":"Congress Meeting","Rate":34.1},{"NBA":"Schedule Rep Visit","Rate":32.4},{"NBA":"P2P Program","Rate":29.2}];
const outcomeData = [{"name":"Converted","value":227},{"name":"Increased Rx","value":218},{"name":"Still Active","value":211},{"name":"Maintained","value":199},{"name":"Lapsed","value":231},{"name":"Opted Out","value":226},{"name":"Decreased","value":188}];
const abData = [{"Test_Name":"CTA Color","Avg_Lift":23.1,"Impact":1066928},{"Test_Name":"Content Depth","Avg_Lift":15.0,"Impact":4494852},{"Test_Name":"Send Time","Avg_Lift":14.6,"Impact":6820251},{"Test_Name":"Sequencing","Avg_Lift":12.0,"Impact":3130025},{"Test_Name":"Video Length","Avg_Lift":10.2,"Impact":1639157},{"Test_Name":"Personalization","Avg_Lift":9.9,"Impact":2610477}];
const mlrData = [{"Brand":"Abecma","Avg_TTA":17.9},{"Brand":"Eliquis","Avg_TTA":18.0},{"Brand":"Zeposia","Avg_TTA":18.4},{"Brand":"Opdivo Q","Avg_TTA":18.5},{"Brand":"Opdivo","Avg_TTA":18.5},{"Brand":"Opdualag","Avg_TTA":18.8},{"Brand":"Camzyos","Avg_TTA":18.8},{"Brand":"Breyanzi","Avg_TTA":18.9},{"Brand":"Sotyktu","Avg_TTA":19.2},{"Brand":"Krazati","Avg_TTA":19.3},{"Brand":"Augtyro","Avg_TTA":19.6},{"Brand":"Reblozyl","Avg_TTA":20.0}];
const rejData = [{"name":"Off-Label","value":51},{"name":"Unsubstantiated","value":46},{"name":"Outdated Ref","value":42},{"name":"Missing Balance","value":36},{"name":"Unapproved Ind","value":36},{"name":"Formatting","value":34},{"name":"Competitor Disp","value":28},{"name":"Missing ISI","value":26}];
const sentData = [{"Brand":"Opdualag","Avg_Sent":0.108},{"Brand":"Augtyro","Avg_Sent":0.09},{"Brand":"Krazati","Avg_Sent":0.09},{"Brand":"Sotyktu","Avg_Sent":0.072},{"Brand":"Zeposia","Avg_Sent":0.016},{"Brand":"Reblozyl","Avg_Sent":-0.024},{"Brand":"Abecma","Avg_Sent":-0.034},{"Brand":"Opdivo Q","Avg_Sent":-0.038},{"Brand":"Breyanzi","Avg_Sent":-0.06},{"Brand":"Opdivo","Avg_Sent":-0.074},{"Brand":"Eliquis","Avg_Sent":-0.08},{"Brand":"Camzyos","Avg_Sent":-0.101}];
const intentData = [{"name":"High Intent","value":129},{"name":"Medium Intent","value":120},{"name":"Low Intent","value":113},{"name":"Unclear","value":122},{"name":"Not Relevant","value":116}];
const mixData = [{"Channel":"Med Portal (Medscape)","Current":14.2,"Optimal":17.6},{"Channel":"eDetailer/CLM","Current":14.7,"Optimal":18.1},{"Channel":"Paid Search","Current":14.2,"Optimal":16.5},{"Channel":"Social-FB","Current":15.2,"Optimal":17.4},{"Channel":"Programmatic","Current":13.3,"Optimal":15.5},{"Channel":"Webinar","Current":12.7,"Optimal":14.8},{"Channel":"Social-LinkedIn","Current":13.5,"Optimal":15.5},{"Channel":"Email","Current":13.3,"Optimal":15.1}];

const KPI = ({value, label, icon: Icon, color = CYAN, trend}) => (
  <div className="bg-white rounded-xl p-5 shadow-sm border border-gray-100 hover:shadow-md transition-shadow">
    <div className="flex items-center justify-between mb-2">
      <div className="w-9 h-9 rounded-lg flex items-center justify-center" style={{background: color+"18"}}><Icon size={18} color={color}/></div>
      {trend && <span className={`text-xs font-semibold px-2 py-0.5 rounded-full ${trend>0?'bg-green-50 text-green-700':'bg-red-50 text-red-700'}`}>{trend>0?'+':''}{trend}%</span>}
    </div>
    <div className="text-2xl font-bold mt-1" style={{color: NAVY}}>{value}</div>
    <div className="text-xs text-gray-500 mt-1">{label}</div>
  </div>
);

const InsightBox = ({title, text, type="insight"}) => (
  <div className={`rounded-xl p-4 border-l-4 ${type==="insight"?"bg-amber-50 border-amber-400":"bg-emerald-50 border-emerald-500"}`}>
    <div className={`text-xs font-bold uppercase tracking-wider mb-1 ${type==="insight"?"text-amber-700":"text-emerald-700"}`}>{title}</div>
    <div className="text-sm text-gray-700 leading-relaxed">{text}</div>
  </div>
);

const SectionHeader = ({icon: Icon, title, subtitle}) => (
  <div className="mb-6">
    <div className="flex items-center gap-3"><div className="w-10 h-10 rounded-xl flex items-center justify-center" style={{background:NAVY}}><Icon size={20} color="#fff"/></div><div><h2 className="text-xl font-bold" style={{color:NAVY}}>{title}</h2>{subtitle && <p className="text-sm text-gray-500">{subtitle}</p>}</div></div>
  </div>
);

const tabs = [
  {id:"exec",label:"Executive",icon:BarChart3},
  {id:"content",label:"Content",icon:Layers},
  {id:"journey",label:"HCP Journey",icon:Users},
  {id:"competitive",label:"Competitive",icon:Target},
  {id:"ab",label:"A/B Tests",icon:FlaskConical},
  {id:"mlr",label:"MLR Compliance",icon:Shield},
  {id:"roi",label:"ROI & Budget",icon:TrendingUp},
  {id:"sentiment",label:"Sentiment",icon:Brain},
  {id:"mix",label:"Channel Mix",icon:Activity},
  {id:"dataflow",label:"Data Flow",icon:GitBranch},
];

const FlowNode = ({x,y,w,h,label,sub,color,icon:Icon}) => (
  <g>
    <rect x={x} y={y} width={w} height={h} rx="8" fill={color+"15"} stroke={color} strokeWidth="2"/>
    {Icon && <foreignObject x={x+10} y={y+8} width="22" height="22"><div style={{color}}><Icon size={18}/></div></foreignObject>}
    <text x={x+w/2} y={y+h/2-4} textAnchor="middle" fontSize="11" fontWeight="bold" fill={NAVY}>{label}</text>
    {sub && <text x={x+w/2} y={y+h/2+12} textAnchor="middle" fontSize="9" fill="#666">{sub}</text>}
  </g>
);

const FlowArrow = ({x1,y1,x2,y2,label}) => (
  <g>
    <defs><marker id="ah" markerWidth="8" markerHeight="6" refX="8" refY="3" orient="auto"><polygon points="0 0, 8 3, 0 6" fill={STEEL}/></marker></defs>
    <line x1={x1} y1={y1} x2={x2} y2={y2} stroke={STEEL} strokeWidth="2" markerEnd="url(#ah)" strokeDasharray="6,3"/>
    {label && <text x={(x1+x2)/2} y={(y1+y2)/2-6} textAnchor="middle" fontSize="8" fill={ACCENT} fontWeight="bold">{label}</text>}
  </g>
);

const DataFlowDiagram = () => (
  <div className="bg-white rounded-xl p-6 shadow-sm border border-gray-100 overflow-x-auto">
    <h3 className="text-lg font-bold mb-4" style={{color:NAVY}}>End-to-End Data Architecture</h3>
    <svg viewBox="0 0 1100 620" className="w-full" style={{minWidth:900}}>
      <rect x="0" y="0" width="1100" height="620" fill="#FAFBFC" rx="12"/>
      {/* Layer Labels */}
      <text x="20" y="30" fontSize="10" fontWeight="bold" fill={ACCENT}>SOURCE SYSTEMS</text>
      <text x="20" y="160" fontSize="10" fontWeight="bold" fill={DBLUE}>INGESTION LAYER</text>
      <text x="20" y="280" fontSize="10" fontWeight="bold" fill={GREEN}>TRANSFORMATION (MEDALLION)</text>
      <text x="20" y="420" fontSize="10" fontWeight="bold" fill={PURPLE}>CURATED DATA PRODUCTS</text>
      <text x="20" y="540" fontSize="10" fontWeight="bold" fill={RED}>CONSUMPTION & ANALYTICS</text>
      {/* Source Systems */}
      <FlowNode x={30} y={40} w={120} h={45} label="Veeva CRM" sub="HCP Interactions" color={CYAN} icon={Database}/>
      <FlowNode x={165} y={40} w={120} h={45} label="Veeva PromoMats" sub="Content DAM" color={CYAN} icon={Database}/>
      <FlowNode x={300} y={40} w={120} h={45} label="SFMC" sub="Email & Campaigns" color={CYAN} icon={Database}/>
      <FlowNode x={435} y={40} w={120} h={45} label="Adobe Analytics" sub="Web Behavior" color={CYAN} icon={MonitorDot}/>
      <FlowNode x={570} y={40} w={120} h={45} label="IQVIA Rx" sub="Rx Claims Data" color={CYAN} icon={Database}/>
      <FlowNode x={705} y={40} w={120} h={45} label="Social/Digital" sub="LinkedIn, CM360, CTV" color={CYAN} icon={Globe}/>
      <FlowNode x={840} y={40} w={120} h={45} label="Brandwatch" sub="Social Listening" color={CYAN} icon={Search}/>
      <FlowNode x={975} y={40} w={110} h={45} label="Competitive" sub="EvaluatePharma" color={CYAN} icon={Target}/>
      {/* Ingestion */}
      <FlowNode x={80} y={105} w={160} h={40} label="Kafka + Glue (CDC)" sub="Real-time streaming" color={DBLUE} icon={Zap}/>
      <FlowNode x={300} y={105} w={160} h={40} label="API Batch Pull" sub="Hourly/Daily" color={DBLUE} icon={Server}/>
      <FlowNode x={520} y={105} w={160} h={40} label="sFTP + Lambda" sub="Weekly Rx feeds" color={DBLUE} icon={Server}/>
      <FlowNode x={740} y={105} w={160} h={40} label="Fivetran + Stream" sub="Social connectors" color={DBLUE} icon={Zap}/>
      <FlowNode x={940} y={105} w={140} h={40} label="EventBridge" sub="MLR Webhooks" color={DBLUE} icon={Zap}/>
      {/* Arrows Source→Ingest */}
      {[90,225,360,495,630,765,900,1030].map((x,i) => <FlowArrow key={`si${i}`} x1={x} y1={85} x2={[160,160,380,380,600,820,820,1010][i]} y2={105}/>)}
      {/* Bronze/Silver/Gold */}
      <rect x={30} y={160} width={330} height={100} rx="10" fill="#FEF3C7" stroke="#F59E0B" strokeWidth="1.5" strokeDasharray="4,2"/>
      <text x={45} y={178} fontSize="10" fontWeight="bold" fill="#92400E">BRONZE (Raw Landing)</text>
      <FlowNode x={45} y={185} w={145} h={35} label="S3 Raw Zone" sub="Parquet/JSON" color="#D97706"/>
      <FlowNode x={200} y={185} w={145} h={35} label="Delta Lake Bronze" sub="Append-only" color="#D97706"/>
      <rect x={380} y={160} width={340} height={100} rx="10" fill="#D1FAE5" stroke={GREEN} strokeWidth="1.5" strokeDasharray="4,2"/>
      <text x={395} y={178} fontSize="10" fontWeight="bold" fill="#065F46">SILVER (Cleaned & Enriched)</text>
      <FlowNode x={395} y={185} w={150} h={35} label="HCP Resolution" sub="Identity stitching" color={GREEN} icon={Users}/>
      <FlowNode x={555} y={185} w={150} h={35} label="Engagement Unify" sub="Cross-channel norm" color={GREEN} icon={Activity}/>
      <rect x={740} y={160} width={340} height={100} rx="10" fill="#E0E7FF" stroke="#6366F1" strokeWidth="1.5" strokeDasharray="4,2"/>
      <text x={755} y={178} fontSize="10" fontWeight="bold" fill="#3730A3">GOLD (Business-Ready)</text>
      <FlowNode x={755} y={185} w={150} h={35} label="Journey Stitching" sub="ML + PySpark" color="#6366F1" icon={Brain}/>
      <FlowNode x={915} y={185} w={150} h={35} label="NBA Scoring" sub="XGBoost + Neural" color="#6366F1" icon={Cpu}/>
      {/* Silver row 2 */}
      <FlowNode x={395} y={228} w={150} h={28} label="Content Enrichment" sub="" color={GREEN}/>
      <FlowNode x={555} y={228} w={150} h={28} label="Rx Integration" sub="" color={GREEN}/>
      <FlowNode x={755} y={228} w={150} h={28} label="Attribution (Shapley)" sub="" color="#6366F1"/>
      <FlowNode x={915} y={228} w={150} h={28} label="NLP Pipeline (BERT)" sub="" color="#6366F1"/>
      {/* Transform arrows */}
      <FlowArrow x1={195} y1={148} x2={195} y2={160}/><FlowArrow x1={550} y1={148} x2={550} y2={160}/>
      <FlowArrow x1={345} y1={200} x2={395} y2={200} label="Clean"/><FlowArrow x1={705} y1={200} x2={755} y2={200} label="Model"/>
      {/* Data Products */}
      {[{l:"dim_hcp_master",s:"5M HCPs",x:30},{l:"dim_content",s:"800K assets",x:170},{l:"fact_engagement",s:"500M events",x:310},{l:"fact_hcp_journey",s:"100M points",x:460},{l:"fact_nba",s:"50M recs",x:610},{l:"fact_attribution",s:"500M rows",x:745},{l:"fact_sentiment",s:"50M analyses",x:880}].map((d,i) =>
        <FlowNode key={`dp${i}`} x={d.x} y={435} w={120} h={40} label={d.l} sub={d.s} color={PURPLE}/>
      )}
      <FlowArrow x1={550} y1={268} x2={550} y2={435}/>
      {/* Consumption */}
      {[{l:"Executive Dashboard",x:20,c:NAVY},{l:"Content Analytics",x:150,c:CYAN},{l:"HCP Journey Intel",x:280,c:GREEN},{l:"Competitive Hub",x:420,c:RED},{l:"MLR Dashboard",x:555,c:PURPLE},{l:"ROI Optimizer",x:685,c:ACCENT},{l:"Sentiment NLP",x:815,c:STEEL},{l:"CRM API (NBA)",x:950,c:DBLUE}].map((d,i) =>
        <FlowNode key={`co${i}`} x={d.x} y={555} w={118} h={40} label={d.l} sub="" color={d.c}/>
      )}
      <FlowArrow x1={550} y1={475} x2={550} y2={555}/>
      {/* Platform labels */}
      <text x={550} y={610} textAnchor="middle" fontSize="9" fill="#999">Databricks + Snowflake + Power BI + Streamlit + Veeva CRM API</text>
    </svg>
  </div>
);

const sourceSystemsData = [
  {id:"SRC-001",name:"Veeva CRM",category:"CRM",domain:"HCP Interactions",freq:"Real-time",format:"JSON/REST",compliance:"HIPAA"},
  {id:"SRC-002",name:"Veeva Vault PromoMats",category:"Content DAM",domain:"Content Library",freq:"Daily",format:"XML/REST",compliance:"FDA 21CFR11"},
  {id:"SRC-003",name:"Salesforce Marketing Cloud",category:"MarTech",domain:"Email & Campaigns",freq:"Hourly",format:"JSON/REST",compliance:"GDPR"},
  {id:"SRC-004",name:"Adobe Analytics",category:"Web Analytics",domain:"Portal Engagement",freq:"Real-time",format:"JSON stream",compliance:"GDPR"},
  {id:"SRC-005",name:"IQVIA Rx (LAAD/Xponent)",category:"Rx Data",domain:"Prescriptions",freq:"Weekly",format:"SAS/CSV",compliance:"HIPAA"},
  {id:"SRC-006",name:"Google CM360",category:"Ad Tech",domain:"Programmatic",freq:"Hourly",format:"BigQuery",compliance:"GDPR"},
  {id:"SRC-007",name:"Veeva Network",category:"MDM",domain:"HCP/HCO Master",freq:"Daily",format:"JSON",compliance:"GDPR"},
  {id:"SRC-008",name:"Brandwatch",category:"Social Intel",domain:"Brand Mentions",freq:"Real-time",format:"Stream API",compliance:"GDPR"},
  {id:"SRC-009",name:"MLR System (Zinc/Veeva)",category:"Regulatory",domain:"Content Approval",freq:"Real-time",format:"Webhook",compliance:"FDA"},
  {id:"SRC-010",name:"Databricks AI Platform",category:"ML Platform",domain:"Feature Store",freq:"Real-time",format:"Delta Lake",compliance:"HIPAA"},
  {id:"SRC-011",name:"EHR/RWD (Flatiron)",category:"RWD",domain:"Clinical Outcomes",freq:"Monthly",format:"FHIR",compliance:"HIPAA+IRB"},
  {id:"SRC-012",name:"Competitive Intel",category:"CI",domain:"Pipeline & Market",freq:"Weekly",format:"REST API",compliance:"N/A"},
];

export default function App() {
  const [activeTab, setActiveTab] = useState("exec");
  const [searchOpen, setSearchOpen] = useState(false);

  const renderContent = () => {
    switch(activeTab) {
      case "exec": return <ExecDashboard/>;
      case "content": return <ContentPerf/>;
      case "journey": return <JourneyAnalytics/>;
      case "competitive": return <CompIntel/>;
      case "ab": return <ABTest/>;
      case "mlr": return <MLRComp/>;
      case "roi": return <ROIDash/>;
      case "sentiment": return <SentDash/>;
      case "mix": return <MixOpt/>;
      case "dataflow": return <DataFlowView/>;
      default: return <ExecDashboard/>;
    }
  };

  return (
    <div className="min-h-screen" style={{background:"#F4F6F9",fontFamily:"'DM Sans',sans-serif"}}>
      <link href="https://fonts.googleapis.com/css2?family=DM+Sans:wght@400;500;600;700&family=JetBrains+Mono:wght@400;500&display=swap" rel="stylesheet"/>
      {/* Header */}
      <header className="sticky top-0 z-50 backdrop-blur-lg bg-white/80 border-b border-gray-200">
        <div className="max-w-[1400px] mx-auto px-4 py-3 flex items-center justify-between">
          <div className="flex items-center gap-3">
            <div className="w-9 h-9 rounded-lg flex items-center justify-center" style={{background:NAVY}}><BarChart3 size={18} color="#fff"/></div>
            <div><div className="text-sm font-bold" style={{color:NAVY}}>BMS Omnichannel Analytics</div><div className="text-xs text-gray-400">Content Intelligence Platform — Improzo</div></div>
          </div>
          <div className="text-xs text-gray-400">Jan 2025 – Mar 2026 | 12 Brands · 20 Markets · 20 Channels</div>
        </div>
        {/* Tabs */}
        <div className="max-w-[1400px] mx-auto px-4 flex gap-1 overflow-x-auto pb-1 scrollbar-hide">
          {tabs.map(t => (
            <button key={t.id} onClick={() => setActiveTab(t.id)}
              className={`flex items-center gap-1.5 px-3 py-2 rounded-lg text-xs font-medium whitespace-nowrap transition-all ${activeTab===t.id ? "text-white shadow-md" : "text-gray-500 hover:bg-gray-100"}`}
              style={activeTab===t.id ? {background:NAVY} : {}}>
              <t.icon size={14}/>{t.label}
            </button>
          ))}
        </div>
      </header>
      <main className="max-w-[1400px] mx-auto px-4 py-6">{renderContent()}</main>
    </div>
  );
}

function ExecDashboard() {
  return (<div className="space-y-6">
    <SectionHeader icon={BarChart3} title="Executive Dashboard" subtitle="Portfolio-wide performance across all brands, markets, and channels"/>
    <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-3">
      <KPI value="800" label="Content Assets" icon={Layers} color={CYAN} trend={12}/>
      <KPI value="626M" label="Total Impressions" icon={Globe} color={DBLUE} trend={8}/>
      <KPI value="25.5M" label="Total Clicks" icon={Activity} color={GREEN} trend={15}/>
      <KPI value="1.2M" label="Conversions" icon={Target} color={ACCENT} trend={22}/>
      <KPI value="$31M" label="Total Spend" icon={TrendingUp} color={PURPLE}/>
      <KPI value="4.15%" label="Average CTR" icon={Zap} color={STEEL} trend={3}/>
    </div>
    <div className="grid lg:grid-cols-2 gap-6">
      <div className="bg-white rounded-xl p-5 shadow-sm border border-gray-100">
        <h3 className="text-sm font-bold mb-3" style={{color:NAVY}}>Impressions by Brand</h3>
        <ResponsiveContainer width="100%" height={340}><BarChart data={brandData} layout="vertical" margin={{left:80}}>
          <CartesianGrid strokeDasharray="3 3" stroke="#f0f0f0"/><XAxis type="number" tick={{fontSize:10}}/><YAxis dataKey="Brand" type="category" tick={{fontSize:10}} width={78}/>
          <Tooltip formatter={(v)=>v.toLocaleString()}/><Bar dataKey="Impressions" fill={CYAN} radius={[0,4,4,0]}/>
        </BarChart></ResponsiveContainer>
      </div>
      <div className="bg-white rounded-xl p-5 shadow-sm border border-gray-100">
        <h3 className="text-sm font-bold mb-3" style={{color:NAVY}}>CPC by Channel (Lower = Better)</h3>
        <ResponsiveContainer width="100%" height={340}><BarChart data={channelData} layout="vertical" margin={{left:90}}>
          <CartesianGrid strokeDasharray="3 3" stroke="#f0f0f0"/><XAxis type="number" tick={{fontSize:10}} domain={[1,1.3]}/><YAxis dataKey="Channel" type="category" tick={{fontSize:10}} width={88}/>
          <Tooltip/><Bar dataKey="CPC" fill={DBLUE} radius={[0,4,4,0]}/>
        </BarChart></ResponsiveContainer>
      </div>
    </div>
    <InsightBox title="Key Insight" text="Zeposia leads impressions but Opdivo Qvantig (5.46%) and Eliquis (5.25%) deliver highest conversion rates. eDetailer/CLM shows lowest CPC at $1.08 — 11% cheaper than avg. Mid-tier brands with targeted specialist content convert 2x better than mass-reach campaigns."/>
    <InsightBox type="rec" title="Recommendation" text="1) Reallocate 15-20% from mass-reach to high-converting specialist channels. 2) Scale eDetailer/CLM by 25% — best CPC. 3) Build automated channel scoring into Saurabh's Content Analytics platform. 4) Sunset channels with CPC >$1.25."/>
  </div>);
}

function ContentPerf() {
  return (<div className="space-y-6">
    <SectionHeader icon={Layers} title="Content Performance Analytics" subtitle="Content type effectiveness & personalization impact"/>
    <div className="grid lg:grid-cols-2 gap-6">
      <div className="bg-white rounded-xl p-5 shadow-sm border border-gray-100">
        <h3 className="text-sm font-bold mb-3" style={{color:NAVY}}>Conversion Rate by Content Type</h3>
        <ResponsiveContainer width="100%" height={340}><BarChart data={contentTypeData} layout="vertical" margin={{left:110}}>
          <CartesianGrid strokeDasharray="3 3" stroke="#f0f0f0"/><XAxis type="number" tick={{fontSize:10}}/><YAxis dataKey="Content_Type" type="category" tick={{fontSize:10}} width={108}/>
          <Tooltip/><Bar dataKey="ConvRate" fill={STEEL} radius={[0,4,4,0]} name="Conv Rate %"/>
        </BarChart></ResponsiveContainer>
      </div>
      <div className="bg-white rounded-xl p-5 shadow-sm border border-gray-100">
        <h3 className="text-sm font-bold mb-3" style={{color:NAVY}}>Personalization Impact: CTR vs Conv Rate</h3>
        <ResponsiveContainer width="100%" height={340}><BarChart data={persData} margin={{left:10}}>
          <CartesianGrid strokeDasharray="3 3" stroke="#f0f0f0"/><XAxis dataKey="Personalization_Level" tick={{fontSize:9}} angle={-20} textAnchor="end" height={60}/>
          <YAxis tick={{fontSize:10}}/><Tooltip/><Legend wrapperStyle={{fontSize:11}}/>
          <Bar dataKey="CTR" fill={CYAN} name="CTR %" radius={[4,4,0,0]}/><Bar dataKey="ConvRate" fill={ACCENT} name="Conv Rate %" radius={[4,4,0,0]}/>
        </BarChart></ResponsiveContainer>
      </div>
    </div>
    <InsightBox title="Key Insight" text="Formulary Toolkit (5.44%) and Patient Case Study (5.37%) deliver highest conversion rates. AI-Dynamic personalization achieves 5.04% conv rate — 12% higher than Name Only. Interactive formats consistently outperform static content by 20-30%."/>
    <InsightBox type="rec" title="Recommendation" text="1) Shift 30% of static content budget to interactive formats. 2) Mandate AI-Dynamic personalization for all Tier 1 HCP segments. 3) Retire content types below 4.5% conv rate. 4) Integrate Content Effectiveness Score into MLR fast-track workflow."/>
  </div>);
}

function JourneyAnalytics() {
  return (<div className="space-y-6">
    <SectionHeader icon={Users} title="HCP Journey & Conversion Analytics" subtitle="Next-best-action effectiveness & journey outcomes"/>
    <div className="grid lg:grid-cols-2 gap-6">
      <div className="bg-white rounded-xl p-5 shadow-sm border border-gray-100">
        <h3 className="text-sm font-bold mb-3" style={{color:NAVY}}>NBA Acceptance Rate %</h3>
        <ResponsiveContainer width="100%" height={340}><BarChart data={nbaData} layout="vertical" margin={{left:110}}>
          <CartesianGrid strokeDasharray="3 3" stroke="#f0f0f0"/><XAxis type="number" tick={{fontSize:10}}/><YAxis dataKey="NBA" type="category" tick={{fontSize:10}} width={108}/>
          <Tooltip/><Bar dataKey="Rate" fill={GREEN} radius={[0,4,4,0]} name="Accept Rate %"/>
        </BarChart></ResponsiveContainer>
      </div>
      <div className="bg-white rounded-xl p-5 shadow-sm border border-gray-100">
        <h3 className="text-sm font-bold mb-3" style={{color:NAVY}}>Journey Outcome Distribution</h3>
        <ResponsiveContainer width="100%" height={340}><PieChart><Pie data={outcomeData} cx="50%" cy="50%" outerRadius={120} dataKey="value" nameKey="name" label={({name,percent})=>`${name} ${(percent*100).toFixed(0)}%`} labelLine={false} fontSize={10}>
          {outcomeData.map((_,i)=><Cell key={i} fill={COLORS[i%COLORS.length]}/>)}</Pie><Tooltip/><Legend wrapperStyle={{fontSize:11}}/></PieChart></ResponsiveContainer>
      </div>
    </div>
    <InsightBox title="Key Insight" text="'Share RWE Summary' has highest NBA acceptance (40.6%). 29.6% of journeys result in positive outcomes (Converted + Increased Rx). Avg journey: 6-8 touchpoints before first Rx. Email + Rep combo is most effective conversion sequence."/>
    <InsightBox type="rec" title="Recommendation" text="1) Automate top 3 NBAs — they drive 60%+ of accepted actions. 2) Compress High Decile journeys from 8→4 touchpoints. 3) Sentiment-triggered MSL escalation when score drops below -0.3. 4) Build optimal journey templates per segment for agentic AI orchestration."/>
  </div>);
}

function CompIntel() {
  return (<div className="space-y-6">
    <SectionHeader icon={Target} title="Competitive Share of Voice & Threat Analysis" subtitle="BMS vs key competitors across therapeutic areas"/>
    <div className="grid lg:grid-cols-2 gap-6">
      <div className="bg-white rounded-xl p-5 shadow-sm border border-gray-100">
        <h3 className="text-sm font-bold mb-3" style={{color:NAVY}}>BMS Share of Voice by Therapeutic Area</h3>
        <ResponsiveContainer width="100%" height={280}><BarChart data={sovData.map(d=>({...d, Comp_SOV: (100-d.BMS_SOV).toFixed(1)}))}>
          <CartesianGrid strokeDasharray="3 3" stroke="#f0f0f0"/><XAxis dataKey="Therapeutic_Area" tick={{fontSize:10}}/><YAxis tick={{fontSize:10}}/>
          <Tooltip/><Legend wrapperStyle={{fontSize:11}}/><Bar dataKey="BMS_SOV" stackId="a" fill={CYAN} name="BMS SOV %"/><Bar dataKey="Comp_SOV" stackId="a" fill={RED} name="Competitor SOV %" radius={[4,4,0,0]}/>
        </BarChart></ResponsiveContainer>
      </div>
      <div className="bg-white rounded-xl p-5 shadow-sm border border-gray-100">
        <h3 className="text-sm font-bold mb-3" style={{color:NAVY}}>BMS vs Competitor Engagement Rate</h3>
        <ResponsiveContainer width="100%" height={280}><BarChart data={compData} margin={{left:10}}>
          <CartesianGrid strokeDasharray="3 3" stroke="#f0f0f0"/><XAxis dataKey="Competitor_Brand" tick={{fontSize:9}} angle={-20} textAnchor="end" height={50}/>
          <YAxis tick={{fontSize:10}} domain={[3,6]}/><Tooltip/><Legend wrapperStyle={{fontSize:11}}/>
          <Bar dataKey="BMS_Eng" fill={CYAN} name="BMS" radius={[4,4,0,0]}/><Bar dataKey="Comp_Eng" fill={RED} name="Competitor" radius={[4,4,0,0]}/>
        </BarChart></ResponsiveContainer>
      </div>
    </div>
    <InsightBox title="Key Insight" text="Skyrizi (AbbVie) outperforms BMS engagement by 1.02 pts in Immunology — highest threat. Keytruda (Merck) tight race in Oncology. BMS holds stronger SOV in Oncology (47%) but trails in Cardiovascular (45.2%). Engagement rates within 1-2% across most competitors."/>
    <InsightBox type="rec" title="Recommendation" text="1) Launch Opdivo vs Keytruda competitive defense sprint with differentiated IO data. 2) Increase Sotyktu/Zeposia SOV by 30% to counter Skyrizi/Rinvoq. 3) Build real-time competitive monitoring alerts. 4) Auto-updated weekly competitive battlecards via agentic AI."/>
  </div>);
}

function ABTest() {
  return (<div className="space-y-6">
    <SectionHeader icon={FlaskConical} title="A/B Testing Program — Results & Impact" subtitle="60 tests run | 21 statistically significant | $21M estimated annual impact"/>
    <div className="grid grid-cols-3 gap-3 mb-2">
      <KPI value="60" label="Total Tests" icon={FlaskConical} color={ACCENT}/><KPI value="21 (35%)" label="Significant Results" icon={CheckCircle2} color={GREEN}/><KPI value="$21M" label="Est. Annual Impact" icon={TrendingUp} color={DBLUE} trend={0}/>
    </div>
    <div className="bg-white rounded-xl p-5 shadow-sm border border-gray-100">
      <h3 className="text-sm font-bold mb-3" style={{color:NAVY}}>Average Lift % by Test Category (Significant Only)</h3>
      <ResponsiveContainer width="100%" height={280}><BarChart data={abData}>
        <CartesianGrid strokeDasharray="3 3" stroke="#f0f0f0"/><XAxis dataKey="Test_Name" tick={{fontSize:10}}/><YAxis tick={{fontSize:10}}/>
        <Tooltip formatter={(v)=>`${v}%`}/><Bar dataKey="Avg_Lift" fill={ACCENT} radius={[4,4,0,0]} name="Avg Lift %"/>
      </BarChart></ResponsiveContainer>
    </div>
    <InsightBox title="Key Insight" text="CTA Color tests show 23.1% lift — quick wins. Content Depth and Send Time optimization deliver highest total impact ($11.3M combined). Personalization tests show consistent 10%+ lifts. Video sweet spot: 45-60s for clinical content."/>
    <InsightBox type="rec" title="Recommendation" text="1) Scale AI-Dynamic personalization globally — single highest-impact lever. 2) Always-on testing: every asset needs an active variant. 3) Auto-ingest results into Content Analytics platform. 4) Target 100 tests/quarter at 70%+ sig rate."/>
  </div>);
}

function MLRComp() {
  return (<div className="space-y-6">
    <SectionHeader icon={Shield} title="MLR Compliance & Approval Velocity" subtitle="Regulatory approval analytics — relevant to Smitha's mandate"/>
    <div className="grid lg:grid-cols-2 gap-6">
      <div className="bg-white rounded-xl p-5 shadow-sm border border-gray-100">
        <h3 className="text-sm font-bold mb-3" style={{color:NAVY}}>Avg Days to MLR Approval by Brand</h3>
        <ResponsiveContainer width="100%" height={340}><BarChart data={mlrData} layout="vertical" margin={{left:70}}>
          <CartesianGrid strokeDasharray="3 3" stroke="#f0f0f0"/><XAxis type="number" tick={{fontSize:10}} domain={[16,21]}/><YAxis dataKey="Brand" type="category" tick={{fontSize:10}} width={68}/>
          <Tooltip/><Bar dataKey="Avg_TTA" fill={PURPLE} radius={[0,4,4,0]} name="Avg Days"/>
        </BarChart></ResponsiveContainer>
      </div>
      <div className="bg-white rounded-xl p-5 shadow-sm border border-gray-100">
        <h3 className="text-sm font-bold mb-3" style={{color:NAVY}}>Top Rejection Reasons</h3>
        <ResponsiveContainer width="100%" height={340}><PieChart><Pie data={rejData} cx="50%" cy="50%" outerRadius={110} dataKey="value" nameKey="name" label={({name,percent})=>`${name} ${(percent*100).toFixed(0)}%`} labelLine={true} fontSize={9}>
          {rejData.map((_,i)=><Cell key={i} fill={COLORS[i%COLORS.length]}/>)}</Pie><Tooltip/><Legend wrapperStyle={{fontSize:10}}/></PieChart></ResponsiveContainer>
      </div>
    </div>
    <InsightBox title="Key Insight" text="Avg approval: 19 days. Off-Label Implication (#1 rejection at 17%) and Unsubstantiated Claims (#2 at 15%) are top blockers. Reblozyl has longest TTA (20 days). Oncology brands average 15% longer cycles due to fair balance requirements."/>
    <InsightBox type="rec" title="Recommendation" text="1) AI pre-MLR screening to catch off-label implications before submission — cut 5-7 days. 2) Auto claim substantiation checker. 3) Brand-specific templates pre-embedding fair balance. 4) Present to Smitha as cross-functional regulatory automation value prop."/>
  </div>);
}

function ROIDash() {
  return (<div className="space-y-6">
    <SectionHeader icon={TrendingUp} title="Budget & ROI Optimization" subtitle="Channel-level ROI, ROAS, and reallocation intelligence — relevant to Madhu's BI platform"/>
    <div className="grid grid-cols-3 gap-3 mb-2">
      <KPI value="$56M" label="Total Spend" icon={TrendingUp} color={ACCENT}/><KPI value="$10.4B" label="Revenue Attributed" icon={Target} color={GREEN}/><KPI value="184x" label="Blended ROAS" icon={Zap} color={DBLUE}/>
    </div>
    <div className="bg-white rounded-xl p-5 shadow-sm border border-gray-100">
      <h3 className="text-sm font-bold mb-3" style={{color:NAVY}}>ROI % by Channel (Top 12)</h3>
      <ResponsiveContainer width="100%" height={320}><BarChart data={[{Channel:"Podcast",ROI:40850},{Channel:"CTV",ROI:31228},{Channel:"HCP Portal",ROI:29385},{Channel:"Direct Mail",ROI:27989},{Channel:"SMS",ROI:23075},{Channel:"eDetailer",ROI:22795},{Channel:"Rep Email",ROI:20250},{Channel:"Mobile Push",ROI:19603},{Channel:"Medscape",ROI:17583},{Channel:"Paid Search",ROI:17566},{Channel:"X/Twitter",ROI:17416},{Channel:"Webinar",ROI:16448}]} layout="vertical" margin={{left:75}}>
        <CartesianGrid strokeDasharray="3 3" stroke="#f0f0f0"/><XAxis type="number" tick={{fontSize:10}}/><YAxis dataKey="Channel" type="category" tick={{fontSize:10}} width={73}/>
        <Tooltip formatter={(v)=>`${v.toLocaleString()}%`}/><Bar dataKey="ROI" fill={GREEN} radius={[0,4,4,0]} name="ROI %"/>
      </BarChart></ResponsiveContainer>
    </div>
    <InsightBox title="Key Insight" text="Podcast Sponsorship delivers highest ROI (40,850%). Rep-digital integration channels (eDetailer, Rep Email) show strongest cost-per-Rx efficiency. All channels show positive ROI — opportunity is in rebalancing from lower to higher performers."/>
    <InsightBox type="rec" title="Recommendation" text="1) Reallocate 5% from bottom channels to top 3. 2) Scale Podcast & CTV by 30%. 3) Build real-time ROI dashboard for brand teams. 4) Present budget optimization model to Madhu as BI platform use case."/>
  </div>);
}

function SentDash() {
  return (<div className="space-y-6">
    <SectionHeader icon={Brain} title="Sentiment & NLP Analytics" subtitle="HCP sentiment, prescribing intent, and objection analysis"/>
    <div className="grid lg:grid-cols-2 gap-6">
      <div className="bg-white rounded-xl p-5 shadow-sm border border-gray-100">
        <h3 className="text-sm font-bold mb-3" style={{color:NAVY}}>Brand Sentiment Score (-1 to +1)</h3>
        <ResponsiveContainer width="100%" height={340}><BarChart data={sentData} layout="vertical" margin={{left:70}}>
          <CartesianGrid strokeDasharray="3 3" stroke="#f0f0f0"/><XAxis type="number" tick={{fontSize:10}} domain={[-0.15,0.15]}/><YAxis dataKey="Brand" type="category" tick={{fontSize:10}} width={68}/>
          <Tooltip/><Bar dataKey="Avg_Sent" name="Sentiment" radius={[0,4,4,0]}>{sentData.map((d,i)=><Cell key={i} fill={d.Avg_Sent>=0?GREEN:RED}/>)}</Bar>
        </BarChart></ResponsiveContainer>
      </div>
      <div className="bg-white rounded-xl p-5 shadow-sm border border-gray-100">
        <h3 className="text-sm font-bold mb-3" style={{color:NAVY}}>Prescribing Intent Distribution</h3>
        <ResponsiveContainer width="100%" height={340}><PieChart><Pie data={intentData} cx="50%" cy="50%" outerRadius={115} dataKey="value" nameKey="name" label={({name,percent})=>`${name} ${(percent*100).toFixed(0)}%`} labelLine={true} fontSize={10}>
          {intentData.map((_,i)=><Cell key={i} fill={[GREEN,CYAN,ACCENT,"#999",RED][i]}/>)}</Pie><Tooltip/><Legend wrapperStyle={{fontSize:11}}/></PieChart></ResponsiveContainer>
      </div>
    </div>
    <InsightBox title="Key Insight" text="129 HCP interactions show High Intent (21.5%) — immediate conversion targets. Opdualag and Augtyro have most positive sentiment. Camzyos and Eliquis show negative sentiment requiring content intervention. Safety-related topics carry lowest scores."/>
    <InsightBox type="rec" title="Recommendation" text="1) Real-time sentiment dashboard with brand alerts. 2) Build objection-response content library for top 5 objection types. 3) Route High Intent signals directly to rep CRM. 4) Feed NLP insights into Content Analytics for continuous optimization loop."/>
  </div>);
}

function MixOpt() {
  return (<div className="space-y-6">
    <SectionHeader icon={Activity} title="Channel Mix Optimization" subtitle="Current vs optimal allocation with rebalancing recommendations"/>
    <div className="bg-white rounded-xl p-5 shadow-sm border border-gray-100">
      <h3 className="text-sm font-bold mb-3" style={{color:NAVY}}>Current vs Optimal Allocation % by Channel</h3>
      <ResponsiveContainer width="100%" height={360}><BarChart data={mixData} margin={{left:10}}>
        <CartesianGrid strokeDasharray="3 3" stroke="#f0f0f0"/><XAxis dataKey="Channel" tick={{fontSize:9}} angle={-15} textAnchor="end" height={55}/><YAxis tick={{fontSize:10}}/>
        <Tooltip/><Legend wrapperStyle={{fontSize:11}}/>
        <Bar dataKey="Current" fill={MGREY} name="Current %" radius={[4,4,0,0]}/><Bar dataKey="Optimal" fill={CYAN} name="Optimal %" radius={[4,4,0,0]}/>
      </BarChart></ResponsiveContainer>
    </div>
    <InsightBox title="Key Insight" text="Top channels to INCREASE: Med Portal Medscape (+3.4%), eDetailer/CLM (+3.4%), Paid Search (+2.3%). All channels are currently underinvested relative to optimal. Estimated 18-22% ROI improvement achievable at same total spend through rebalancing."/>
    <InsightBox type="rec" title="Recommendation" text="1) Execute Q2 reallocation per optimization model. 2) Automated diminishing-returns detection for saturation alerts. 3) Cross-channel synergy scoring in NBA engine. 4) Present to Madhu as BI platform use case — integrate with enterprise analytics stack."/>
  </div>);
}

function DataFlowView() {
  return (<div className="space-y-6">
    <SectionHeader icon={GitBranch} title="Data Architecture & Flow" subtitle="End-to-end data lineage from 24 source systems to 9 analytics dashboards"/>
    <DataFlowDiagram/>
    <div className="bg-white rounded-xl p-5 shadow-sm border border-gray-100">
      <h3 className="text-sm font-bold mb-4" style={{color:NAVY}}>Source System Catalog ({sourceSystemsData.length} Systems)</h3>
      <div className="overflow-x-auto">
        <table className="w-full text-xs">
          <thead><tr className="text-left" style={{background:NAVY}}>
            {["ID","Source System","Category","Data Domain","Frequency","Format","Compliance"].map(h=>
              <th key={h} className="px-3 py-2 text-white font-semibold">{h}</th>)}
          </tr></thead>
          <tbody>{sourceSystemsData.map((s,i)=>
            <tr key={s.id} className={i%2===0?"bg-white":"bg-gray-50"}>
              <td className="px-3 py-2 font-mono text-gray-500">{s.id}</td>
              <td className="px-3 py-2 font-semibold" style={{color:NAVY}}>{s.name}</td>
              <td className="px-3 py-2"><span className="px-2 py-0.5 rounded-full text-xs" style={{background:CYAN+"20",color:DBLUE}}>{s.category}</span></td>
              <td className="px-3 py-2 text-gray-600">{s.domain}</td>
              <td className="px-3 py-2"><span className={`px-2 py-0.5 rounded-full text-xs ${s.freq==="Real-time"?"bg-green-100 text-green-700":s.freq==="Daily"?"bg-blue-100 text-blue-700":s.freq==="Hourly"?"bg-amber-100 text-amber-700":"bg-gray-100 text-gray-600"}`}>{s.freq}</span></td>
              <td className="px-3 py-2 font-mono text-gray-500">{s.format}</td>
              <td className="px-3 py-2"><span className="px-2 py-0.5 rounded-full text-xs bg-purple-100 text-purple-700">{s.compliance}</span></td>
            </tr>
          )}</tbody>
        </table>
      </div>
    </div>
    {/* Transformation Pipeline */}
    <div className="bg-white rounded-xl p-5 shadow-sm border border-gray-100">
      <h3 className="text-sm font-bold mb-4" style={{color:NAVY}}>Transformation Pipeline (Medallion Architecture)</h3>
      <div className="grid md:grid-cols-3 gap-4">
        {[
          {layer:"Bronze",color:"#F59E0B",bg:"#FEF3C7",items:["S3 Raw Zone (Parquet/JSON)","Delta Lake append-only tables","Schema-on-read","90-365 day retention"]},
          {layer:"Silver",color:GREEN,bg:"#D1FAE5",items:["HCP Identity Resolution (NPI matching)","Channel Engagement Unification","Content Asset Enrichment","Rx Data Standardization (NRx/TRx)"]},
          {layer:"Gold",color:"#6366F1",bg:"#E0E7FF",items:["HCP Journey Stitching (ML)","NBA Scoring (XGBoost + Neural)","Attribution (Shapley + MMM)","NLP Pipeline (BERT fine-tuned)","Content Effectiveness Scoring","Channel Mix Optimization"]}
        ].map(l=>
          <div key={l.layer} className="rounded-xl p-4 border-2" style={{background:l.bg,borderColor:l.color}}>
            <div className="text-sm font-bold mb-2" style={{color:l.color}}>{l.layer} Layer</div>
            <ul className="space-y-1.5">{l.items.map(item=>
              <li key={item} className="text-xs text-gray-700 flex items-start gap-1.5"><ChevronRight size={12} className="mt-0.5 flex-shrink-0" style={{color:l.color}}/>{item}</li>
            )}</ul>
          </div>
        )}
      </div>
    </div>
    {/* Data Governance */}
    <div className="bg-white rounded-xl p-5 shadow-sm border border-gray-100">
      <h3 className="text-sm font-bold mb-4" style={{color:NAVY}}>Data Governance & Quality Framework</h3>
      <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-3">
        {[
          {title:"Data Quality",metric:"98.7%",target:"99%",desc:"Great Expectations suite: completeness, uniqueness, validity",icon:CheckCircle2,color:GREEN},
          {title:"HIPAA Compliance",metric:"Zero",target:"Zero findings",desc:"All US data in HIPAA-eligible services (AWS, Databricks, Snowflake)",icon:Shield,color:PURPLE},
          {title:"Data Lineage",metric:"88%",target:"100%",desc:"Unity Catalog + OpenLineage for full traceability",icon:GitBranch,color:DBLUE},
          {title:"SLA Adherence",metric:"99.2%",target:"99.5%",desc:"Pipeline freshness monitoring via PagerDuty + CloudWatch",icon:Zap,color:ACCENT},
        ].map(g=>
          <div key={g.title} className="border rounded-xl p-4 border-gray-200">
            <div className="flex items-center gap-2 mb-2"><g.icon size={16} color={g.color}/><span className="text-xs font-bold" style={{color:g.color}}>{g.title}</span></div>
            <div className="text-xl font-bold" style={{color:NAVY}}>{g.metric}</div>
            <div className="text-xs text-gray-400 mb-1">Target: {g.target}</div>
            <div className="text-xs text-gray-500">{g.desc}</div>
          </div>
        )}
      </div>
    </div>
    <InsightBox title="Architecture Insight" text="24 source systems feed through 12 ingestion pipelines into a Medallion architecture (Bronze→Silver→Gold) on Databricks + Snowflake. 13 transformation jobs produce 13 curated data products serving 9 analytics dashboards + real-time NBA API to Veeva CRM. End-to-end latency: <15 min for real-time, <24 hrs for batch."/>
    <InsightBox type="rec" title="Platform Recommendation" text="This architecture directly maps to Saurabh's AI product mandate (agentic workflows + content analytics), Smitha's regulatory automation needs (MLR pipeline), and Madhu's BI modernization roadmap (enterprise data products). Improzo can build, operate, and optimize any layer of this stack."/>
  </div>);
}

import { motion } from "motion/react";
import { 
  ChevronRight, 
  MessageSquare, 
  Users, 
  Database, 
  BarChart3, 
  ShieldCheck, 
  ArrowRight,
  CheckCircle2,
  Menu,
  X,
  Phone,
  Mail,
  MapPin,
  Award,
  Brain,
  Activity,
  Compass,
  Calendar,
  Sparkles,
  TrendingUp,
  Heart,
  Target,
  BookOpen,
  Clock
} from "lucide-react";
import { useState, useEffect } from "react";

// --- Components ---

const Logo = ({ size = "md", light = false }: { size?: "sm" | "md", light?: boolean }) => {
  const iconSize = size === "sm" ? "w-8 h-8" : "w-10 h-10";
  const textSize = size === "sm" ? "text-lg" : "text-xl";
  const subTextSize = size === "sm" ? "text-[6px]" : "text-[8px]";
  const textColor = light ? "text-white" : "text-slate-900";
  const subTextColor = light ? "text-brand-100" : "text-brand-600";
  
  return (
    <div className="flex items-center gap-3 group">
      <div className={`${iconSize} relative flex items-center justify-center group-hover:scale-105 transition-transform`}>
        <svg viewBox="0 0 100 100" className="w-full h-full drop-shadow-sm">
          <defs>
            <linearGradient id="logoGradient" x1="0%" y1="0%" x2="100%" y2="100%">
              <stop offset="0%" stopColor="#0ea5e9" />
              <stop offset="100%" stopColor="#0369a1" />
            </linearGradient>
          </defs>
          {/* Circular Path - open at top */}
          <path 
            d="M30,20 A40,40 0 1,0 70,20" 
            fill="none" 
            stroke="url(#logoGradient)" 
            strokeWidth="12" 
            strokeLinecap="round"
          />
          {/* Stylized Y / Checkmark */}
          <path 
            d="M20,45 L45,70 L85,15" 
            fill="none" 
            stroke="url(#logoGradient)" 
            strokeWidth="14" 
            strokeLinecap="round" 
            strokeLinejoin="round" 
          />
          {/* Wave Accents at bottom right */}
          <path d="M65,75 Q80,70 85,55" fill="none" stroke="url(#logoGradient)" strokeWidth="6" strokeLinecap="round" className="opacity-60" />
          <path d="M55,85 Q75,80 80,65" fill="none" stroke="url(#logoGradient)" strokeWidth="4" strokeLinecap="round" className="opacity-40" />
        </svg>
      </div>
      <div className="flex flex-col leading-tight">
        <span className={`font-bold ${textSize} tracking-tight ${textColor}`}>源头科技</span>
        <span className={`${subTextSize} font-black ${subTextColor} tracking-[0.25em] uppercase`}>Yuanyuan Technology</span>
      </div>
    </div>
  );
};

const Carousel = ({ onAction }: { onAction: (t: string) => void }) => {
  const [current, setCurrent] = useState(0);
  const slides = [
    {
      type: "hero",
      title: "肿瘤专科增长合伙人",
      subtitle: "围绕肿瘤患者长决策周期、高信任门槛与高频咨询需求，帮助医院构建从患者认知、咨询承接、到院转化到院后管理的全链路数字化运营体系。",
      stats: [
        { label: "粉丝矩阵沉淀", value: "11.44万+" },
        { label: "私域患者服务", value: "4.28万+" },
        { label: "病友社群运营经验", value: "21个" }
      ],
      cta: "预约专科增长诊断",
      ctaAction: () => onAction('contact'),
      color: "from-brand-600 to-indigo-800",
      image: "https://picsum.photos/seed/oncology-partner/1200/800",
      note: "数据来源于脱敏项目实践，具体合作信息已做隐私处理。"
    },
    {
      type: "case",
      tag: "脱敏案例",
      title: "某肿瘤专科医院核心业务增长",
      subtitle: "基于内容触达、患者服务入口、AI问答承接与数据化运营体系，帮助医院持续提升患者服务效率与业务增长能力。",
      stats: [
        { label: "核心业务收入增幅", value: "70%" },
        { label: "峰值年营收测算", value: "≈3.42亿" },
        { label: "规模净增", value: "+685" }
      ],
      cta: "查看脱敏案例",
      ctaAction: () => onAction('cases'),
      color: "from-blue-600 to-indigo-900",
      image: "https://picsum.photos/seed/oncology-case/1200/800",
      note: "数据为脱敏案例展示，已隐去医院名称、年份及敏感经营信息。"
    },
    {
      type: "method",
      tag: "产品能力",
      title: "不是单点工具，而是患者全链路运营体系",
      subtitle: "从患者触达到患者资产沉淀，从AI咨询承接到随访复诊管理，帮助医院把分散的患者互动转化为可持续服务能力。",
      stats: [
        { label: "一", value: "患者触达" },
        { label: "二", value: "患者资产" },
        { label: "三", value: "到院转化" },
        { label: "四", value: "随访管理" },
        { label: "五", value: "数据复盘" }
      ],
      cta: "了解产品体系",
      ctaAction: () => onAction('products'),
      color: "from-indigo-600 to-brand-800",
      image: "https://picsum.photos/seed/pathway/1200/800"
    },
    {
      type: "service",
      tag: "AI患者服务入口",
      title: "为肿瘤专科搭建24小时患者服务入口",
      subtitle: "基于专病知识库与AI智能问答，持续承接患者关于疾病理解、就医流程、报告解读、治疗路径与复诊管理的高频问题。",
      stats: [
        { label: "智能响应", value: "7×24h" },
        { label: "智能问答实践", value: "33000+" },
        { label: "患者互动数据沉淀", value: "50000+" }
      ],
      cta: "体验AI服务入口",
      ctaAction: () => onAction('products'),
      color: "from-purple-600 to-brand-600",
      image: "https://picsum.photos/seed/patient-service/1200/800"
    }
  ];

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrent((prev) => (prev + 1) % slides.length);
    }, 6000);
    return () => clearInterval(timer);
  }, [slides.length]);

  return (
    <section className="relative pt-20 lg:pt-24 pb-12 bg-white overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="relative h-[600px] lg:h-[650px] rounded-[48px] overflow-hidden shadow-2xl shadow-brand-100 group">
          {slides.map((slide, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, scale: 1.05 }}
              animate={{ 
                opacity: current === i ? 1 : 0,
                scale: current === i ? 1 : 1.05,
                zIndex: current === i ? 10 : 0
              }}
              transition={{ duration: 1, ease: "easeOut" }}
              className={`absolute inset-0 bg-gradient-to-br ${slide.color} flex items-center`}
            >
              <div className="absolute inset-0 opacity-15 mix-blend-overlay">
                <img src={slide.image} alt="" className="w-full h-full object-cover" referrerPolicy="no-referrer" />
              </div>
              
              <div className="relative z-10 px-8 lg:px-20 w-full lg:w-3/5">
                {slide.tag && (
                  <motion.div 
                    initial={{ y: 20, opacity: 0 }}
                    animate={{ y: current === i ? 0 : 20, opacity: current === i ? 1 : 0 }}
                    transition={{ delay: 0.3 }}
                    className="inline-block bg-white/20 backdrop-blur-md text-white px-4 py-1.5 rounded-full text-sm font-bold mb-6 border border-white/30"
                  >
                    {slide.tag}
                  </motion.div>
                )}
                
                <motion.h2 
                  initial={{ y: 30, opacity: 0 }}
                  animate={{ y: current === i ? 0 : 30, opacity: current === i ? 1 : 0 }}
                  transition={{ delay: 0.4 }}
                  className="text-4xl lg:text-5xl font-bold text-white mb-6 leading-[1.15]"
                >
                  {slide.title}
                </motion.h2>
                
                <motion.p 
                  initial={{ y: 30, opacity: 0 }}
                  animate={{ y: current === i ? 0 : 30, opacity: current === i ? 1 : 0 }}
                  transition={{ delay: 0.5 }}
                  className="text-base lg:text-lg text-white/90 mb-10 max-w-xl leading-relaxed"
                >
                  {slide.subtitle}
                </motion.p>
                
                <motion.div 
                  initial={{ y: 30, opacity: 0 }}
                  animate={{ y: current === i ? 0 : 30, opacity: current === i ? 1 : 0 }}
                  transition={{ delay: 0.6 }}
                  className="flex flex-wrap gap-6 mb-8"
                >
                  {slide.stats.map((stat, j) => (
                    <div key={j} className="bg-white/5 backdrop-blur-sm px-6 py-4 rounded-2xl border border-white/10 min-w-[140px]">
                      <div className="text-2xl lg:text-3xl font-bold text-white mb-1">{stat.value}</div>
                      <div className="text-xs text-white/60">{stat.label}</div>
                    </div>
                  ))}
                </motion.div>
                
                <div className="flex flex-col items-start gap-3">
                  <motion.button 
                    initial={{ y: 30, opacity: 0 }}
                    animate={{ y: current === i ? 0 : 30, opacity: current === i ? 1 : 0 }}
                    transition={{ delay: 0.7 }}
                    onClick={slide.ctaAction}
                    className="bg-white text-brand-700 px-10 py-4 rounded-2xl font-bold text-lg hover:bg-brand-50 hover:scale-105 transition-all shadow-xl flex items-center gap-2 group"
                  >
                    {slide.cta}
                    <ChevronRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
                  </motion.button>
                  {slide.note && (
                    <motion.p
                      initial={{ opacity: 0 }}
                      animate={{ opacity: current === i ? 0.7 : 0 }}
                      className="text-[11px] text-white/50 max-w-lg mt-2"
                    >
                      * {slide.note}
                    </motion.p>
                  )}
                </div>
              </div>
              
              {/* Visual Side (Right) */}
              <div className="hidden lg:flex absolute right-0 top-0 bottom-0 w-2/5 items-center justify-center pr-20">
                <motion.div
                  initial={{ x: 50, opacity: 0 }}
                  animate={{ x: current === i ? 0 : 50, opacity: current === i ? 1 : 0 }}
                  transition={{ delay: 0.5, duration: 0.8 }}
                  className="relative w-full max-w-md aspect-square"
                >
                  <div className="absolute inset-0 bg-white/10 backdrop-blur-2xl rounded-[60px] border border-white/20 rotate-6"></div>
                  <div className="absolute inset-0 bg-white/10 backdrop-blur-2xl rounded-[60px] border border-white/20 -rotate-3 overflow-hidden">
                    <img 
                      src={slide.image} 
                      alt="" 
                      className="w-full h-full object-cover opacity-40 mix-blend-overlay"
                      referrerPolicy="no-referrer"
                    />
                    <div className="absolute inset-0 flex items-center justify-center p-12">
                      <div className="text-center">
                        <div className="text-[44px] font-black text-white mb-4 leading-none">
                          {slide.type === "hero" ? "PARTNER" : "DE-IDENTIFIED"}
                        </div>
                        <div className="text-xs uppercase tracking-[0.2em] text-white/70">
                          {slide.type === "hero" ? "Oncology Growth Partner" : "脱敏实证数据"}
                        </div>
                      </div>
                    </div>
                  </div>
                </motion.div>
              </div>
            </motion.div>
          ))}
          
          {/* Indicators */}
          <div className="absolute bottom-10 left-8 lg:left-20 flex gap-3 z-30">
            {slides.map((_, i) => (
              <button
                key={i}
                onClick={() => setCurrent(i)}
                className={`h-1.5 rounded-full transition-all duration-500 ${current === i ? "w-12 bg-white" : "w-4 bg-white/30 hover:bg-white/50"}`}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

const Navbar = ({ activeTab, setActiveTab }: { activeTab: string, setActiveTab: (t: string) => void }) => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 20);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navItems = [
    { id: 'home', label: '首页' },
    { id: 'solutions', label: '解决方案' },
    { id: 'products', label: '产品体系' },
    { id: 'cases', label: '案例成果' },
    { id: 'cooperation', label: '合作模式' },
    { id: 'about', label: '关于我们' },
    { id: 'contact', label: '联系我们' },
  ];

  return (
    <nav className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${isScrolled ? "bg-white/90 backdrop-blur-md shadow-sm py-3" : "bg-transparent py-5"}`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex justify-between items-center">
        <div className="cursor-pointer" onClick={() => setActiveTab('home')}>
          <Logo />
        </div>

        {/* Desktop Nav */}
        <div className="hidden md:flex items-center gap-8">
          {navItems.map((item) => (
            <button
              key={item.id}
              onClick={() => setActiveTab(item.id)}
              className={`text-sm font-medium transition-colors hover:text-brand-600 ${activeTab === item.id ? "text-brand-600" : "text-slate-600"}`}
            >
              {item.label}
            </button>
          ))}
          <button 
            onClick={() => setActiveTab('contact')}
            className="bg-brand-600 text-white px-5 py-2 rounded-full text-sm font-semibold hover:bg-brand-700 transition-all shadow-md hover:shadow-lg"
          >
            预约专科增长诊断
          </button>
        </div>

        {/* Mobile Menu Toggle */}
        <button className="md:hidden text-slate-900" onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}>
          {isMobileMenuOpen ? <X /> : <Menu />}
        </button>
      </div>

      {/* Mobile Menu */}
      {isMobileMenuOpen && (
        <motion.div 
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          className="md:hidden bg-white absolute top-full left-0 right-0 shadow-xl border-t border-slate-100 py-4 px-6 flex flex-col gap-4"
        >
          {navItems.map((item) => (
            <button
              key={item.id}
              onClick={() => {
                setActiveTab(item.id);
                setIsMobileMenuOpen(false);
              }}
              className={`text-left text-base font-medium py-2 ${activeTab === item.id ? "text-brand-600" : "text-slate-600"}`}
            >
              {item.label}
            </button>
          ))}
          <button 
            onClick={() => {
              setActiveTab('contact');
              setIsMobileMenuOpen(false);
            }}
            className="bg-brand-600 text-white px-5 py-3 rounded-xl text-center font-semibold"
          >
            预约专科增长诊断
          </button>
        </motion.div>
      )}
    </nav>
  );
};

const PartnerCoBuild = () => (
  <section className="py-28 bg-[radial-gradient(ellipse_at_top,_var(--tw-gradient-stops))] from-indigo-50/40 via-slate-50 to-white relative overflow-hidden border-b border-slate-100 text-left">
    {/* Tech grid lines and light flare */}
    <div className="absolute inset-0 bg-[linear-gradient(to_right,#e2e8f050_1px,transparent_1px),linear-gradient(to_bottom,#e2e8f050_1px,transparent_1px)] bg-[size:3rem_3rem] -z-10"></div>
    <div className="absolute top-10 right-10 w-96 h-96 bg-brand-100/20 rounded-full blur-3xl -z-10 animate-pulse"></div>
    <div className="absolute -bottom-20 -left-20 w-[500px] h-[500px] bg-sky-100/20 rounded-full blur-3xl -z-10"></div>
    
    {/* Tech image watermark */}
    <div className="absolute inset-0 z-0 opacity-[0.05] pointer-events-none mix-blend-multiply">
      <img 
        src="https://images.unsplash.com/photo-1516321318423-f06f85e504b3?auto=format&fit=crop&q=80&w=1600" 
        alt="" 
        className="w-full h-full object-cover filter brightness-105"
        referrerPolicy="no-referrer"
      />
    </div>

    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
      <div className="text-center mb-20 max-w-4xl mx-auto">
        <span className="text-brand-600 font-mono text-xs uppercase tracking-[0.2em] block mb-3 font-extrabold">CO-BUILDING MODEL // 深度共建模式</span>
        <h2 className="text-3xl md:text-5xl font-black text-slate-900 leading-tight">
          中国肿瘤医院患者增长与
          <span className="bg-gradient-to-r from-brand-600 to-indigo-600 bg-clip-text text-transparent">AI服务运营团队</span>
        </h2>
        <p className="text-slate-500 text-base md:text-lg mt-5 max-w-3xl mx-auto leading-relaxed font-normal">
          我们不只交付内容、系统或工具，而是与医院共同建设一套可运营、可追踪、可复盘的患者增长与服务体系。
        </p>
      </div>
      
      <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
        {[
          {
            title: "共建患者服务入口",
            desc: "帮助医院建立面向患者的长期服务入口，承接咨询、科普、随访与复诊管理需求。",
            icon: <MessageSquare className="text-brand-600" />,
            badge: "ENTRY PORTAL"
          },
          {
            title: "共建专病知识库",
            desc: "围绕肿瘤患者高频问题，沉淀可持续迭代的专病内容与AI问答基础。",
            icon: <Database className="text-indigo-600" />,
            badge: "KNOWLEDGE BASE"
          },
          {
            title: "共建患者资产体系",
            desc: "将分散的患者互动沉淀为可识别、可分层、可触达的患者服务资产。",
            icon: <Users className="text-teal-600" />,
            badge: "ASSET SYSTEM"
          },
          {
            title: "共建数据复盘机制",
            desc: "通过运营数据、患者行为与服务结果，持续优化医院患者服务链路。",
            icon: <BarChart3 className="text-orange-600" />,
            badge: "DATA REVIEW"
          }
        ].map((item, i) => (
          <div key={i} className="bg-white/80 border border-slate-200/60 p-8 rounded-3xl hover:shadow-xl hover:bg-white hover:border-brand-500/30 transition-all duration-300 group flex flex-col justify-between h-[280px]">
            <div>
              <div className="flex items-center justify-between mb-6">
                <div className="w-12 h-12 bg-slate-50 border border-slate-100 rounded-2xl flex items-center justify-center shadow-sm group-hover:scale-110 transition-transform">
                  {item.icon}
                </div>
                <span className="text-[9px] text-slate-400 font-mono tracking-wider font-extrabold bg-slate-100 px-2.5 py-1 rounded-md">
                  {item.badge}
                </span>
              </div>
              <h3 className="text-xl font-bold text-slate-900 mb-3">{item.title}</h3>
              <p className="text-slate-500 text-xs leading-relaxed font-normal">{item.desc}</p>
            </div>
            <div className="text-[10px] text-brand-600 font-bold tracking-wider font-mono opacity-0 group-hover:opacity-100 transition-opacity">
              CO-BUILDING ACTIVE //
            </div>
          </div>
        ))}
      </div>
    </div>
  </section>
);

const PainPoints = () => (
  <section className="py-28 bg-[radial-gradient(ellipse_at_bottom_right,_var(--tw-gradient-stops))] from-blue-50/40 via-white to-slate-50/50 relative overflow-hidden text-left border-b border-slate-100">
    <div className="absolute inset-0 bg-[linear-gradient(to_right,#f1f5f9_1px,transparent_1px),linear-gradient(to_bottom,#f1f5f9_1px,transparent_1px)] bg-[size:4rem_4rem] -z-10"></div>
    <div className="absolute top-1/2 left-10 w-[600px] h-[300px] bg-indigo-100/30 rounded-full blur-[120px] pointer-events-none -z-10"></div>
    
    {/* Light tech watermark */}
    <div className="absolute right-0 bottom-0 w-1/3 h-full opacity-[0.04] pointer-events-none mix-blend-multiply">
      <img 
        src="https://images.unsplash.com/photo-1551288049-bebda4e38f71?auto=format&fit=crop&q=80&w=1200" 
        alt="" 
        className="w-full h-full object-cover grayscale"
        referrerPolicy="no-referrer"
      />
    </div>

    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
      <div className="flex flex-col lg:flex-row lg:items-center justify-between gap-12 mb-20">
        <div className="max-w-3xl">
          <span className="text-brand-600 font-mono text-xs uppercase tracking-widest block mb-3 font-semibold">GROWTH CHALLENGES // 瓶颈与诊断</span>
          <h2 className="text-3xl md:text-5xl font-black text-slate-900 leading-tight">
            肿瘤医院增长难，
            <span className="bg-gradient-to-r from-brand-600 to-indigo-600 bg-clip-text text-transparent">不只是缺流量</span>
          </h2>
          <p className="text-slate-500 text-base md:text-lg mt-4 leading-relaxed font-normal">
            真正的难点，是如何在患者到院前完成理解、判断、决策、信任建立和全周期的全温情承接。
          </p>
        </div>
        <div className="lg:w-80 shrink-0">
          <div className="bg-brand-50 border border-brand-100 p-6 rounded-2xl">
            <div className="text-brand-700 font-bold text-sm mb-1">决策路径重构</div>
            <p className="text-brand-600 text-xs leading-relaxed font-normal">
              传统的漏斗模型已经失效，我们需要前置患者决策，建立全周期的深度干预回路。
            </p>
          </div>
        </div>
      </div>
      
      <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
        {[
          { 
            title: "决策周期长", 
            desc: "肿瘤患者往往会反复比较医院、专家、病理方案、治疗路径及康复案例，常态决策周期高达30-90天。",
            tag: "CYCLE" 
          },
          { 
            title: "信任门槛高", 
            desc: "由于重症性质，患者及家属抱有极度警惕情绪。更深度依赖科学权威的内容、医生科普与诊前高频互动。",
            tag: "TRUST" 
          },
          { 
            title: "咨询承接重", 
            desc: "化验单、检查指引、多方案比对、床位住院等疑问高度集中且频繁，常规人工随访服务极其容易发生漏接、耗竭。",
            tag: "HEAVY SERVICE" 
          },
          { 
            title: "转化链路长", 
            desc: "从最初无意触达，到真正的建档私域沉淀、专家一站式诊断，最后完成到院就诊，全链路存在多次断流高危区。",
            tag: "CONVERSION" 
          },
        ].map((item, i) => (
          <div key={i} className="bg-white/80 border border-slate-150/60 rounded-3xl p-8 shadow-sm hover:shadow-xl hover:border-brand-500/30 hover:bg-white transition-all duration-300 flex flex-col justify-between group h-full">
            <div>
              <div className="flex items-center justify-between mb-8">
                <span className="text-sm font-black text-brand-600 font-mono bg-brand-50 border border-brand-100/50 w-10 h-10 rounded-full flex items-center justify-center">
                  0{i + 1}
                </span>
                <span className="text-[10px] text-slate-400 font-mono font-bold tracking-wider uppercase bg-slate-100 px-2.5 py-1 rounded-md">
                  {item.tag}
                </span>
              </div>
              <h3 className="text-xl font-bold text-slate-900 mb-3 tracking-tight">{item.title}</h3>
              <p className="text-xs text-slate-500 leading-relaxed font-normal">{item.desc}</p>
            </div>
            <div className="mt-8 pt-4 border-t border-slate-100 text-[10px] text-brand-500 font-mono font-semibold flex items-center gap-1.5 opacity-0 group-hover:opacity-100 transition-opacity">
              <span>EXPLORE SOLUTION</span> →
            </div>
          </div>
        ))}
      </div>
    </div>
  </section>
);

const CoreValue = () => (
  <section className="py-32 bg-[radial-gradient(ellipse_at_top,_var(--tw-gradient-stops))] from-indigo-50/40 via-sky-50/20 to-white relative overflow-hidden text-left border-y border-slate-200/50">
    {/* Cinematic Grid & Spotlights */}
    <div className="absolute inset-0 bg-[linear-gradient(to_right,#e2e8f060_1px,transparent_1px),linear-gradient(to_bottom,#e2e8f060_1px,transparent_1px)] bg-[size:4rem_4rem]"></div>
    <div className="absolute top-1/4 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[350px] bg-brand-400/10 rounded-full blur-[140px] pointer-events-none -z-10"></div>
    <div className="absolute bottom-0 right-10 w-[400px] h-[400px] bg-sky-200/20 rounded-full blur-[100px] pointer-events-none -z-10"></div>

    {/* Background Image with Bright Presentation Overlay */}
    <div className="absolute inset-0 z-0 opacity-10 mix-blend-overlay">
      <img 
        src="https://images.unsplash.com/photo-1507668077129-56e32842fceb?auto=format&fit=crop&q=80&w=2000" 
        alt="" 
        className="w-full h-full object-cover filter brightness-110 contrast-100"
        referrerPolicy="no-referrer"
      />
    </div>

    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
      <div className="text-center mb-24 max-w-4xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
        >
          <span className="text-brand-600 font-mono text-xs uppercase tracking-[0.25em] block mb-4 font-extrabold">
            THE SYSTEM INTEGRATION // 全栈患者增长中台
          </span>
          <h2 className="text-3xl md:text-5xl lg:text-6xl font-black text-slate-900 leading-[1.15] tracking-tight">
            用一体化患者增长体系
            <br />
            <span className="bg-gradient-to-r from-brand-600 via-indigo-600 to-sky-600 bg-clip-text text-transparent">下好医院这盘棋</span>
          </h2>
          <p className="text-slate-500 text-sm md:text-base lg:text-lg mt-6 max-w-3xl mx-auto leading-relaxed font-normal">
            构建从内容触达、AI问答、私域承接、人工导诊到数据复盘的完整长决策周期患者增长回路，告别破碎的单点补丁式工具。
          </p>
        </motion.div>
      </div>

      <div className="grid lg:grid-cols-3 gap-8">
        {[
          {
            num: "01",
            en: "ACQUISITION",
            title: "专业内容拦截",
            sub: "在患者产生偏见前，完成权威拦截",
            desc: "以患者最关心的核心疑虑为出发点，输出大白话医学科普。通过公众号/视频号多端联动，建立坚固的第一道就诊信任壁垒。",
            features: [
              "500+高频专病百科主动挂载",
              "全天候拦截极速引导诊断",
              "微信生态白话科普多端布网"
            ],
            metrics: "初访流失率降低 60%"
          },
          {
            num: "02",
            en: "ENGAGEMENT",
            title: "AI 24h 智能承接",
            sub: "深夜突发报告解读，实现温暖秒答",
            desc: "针对重疾患者深夜突发的极度焦虑，云问答系统无缝、有温度地承接检查单、用药常识等庞杂提问，大幅降低人工医生沟通负载。",
            features: [
              "OCR化验单与报告智能解读",
              "24小时云挂载，零漏接全覆盖",
              "科室常见宣教一键全自动托管"
            ],
            metrics: "科室常见问答托管 > 90%"
          },
          {
            num: "03",
            en: "CONVERSION",
            title: "私域与人工转化",
            sub: "精准全周期关怀，让出院不等于失联",
            desc: "精细打标患者病情分期及阶段，结合企业微信执行定期暖心关怀。让患者感到持续、被重视的医辅关怀，自然提高复诊与口碑裂变。",
            features: [
              "按疾病/用药方案精细患者打标",
              "出院第7/30天贴心随访模板",
              "温暖专属群友裂变式自主引荐"
            ],
            metrics: "到院转化及复诊率提升 1.8倍"
          }
        ].map((item, idx) => (
          <motion.div
            key={idx}
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: idx * 0.15 }}
            className="group relative bg-[#ffffff]/70 rounded-[32px] p-8 lg:p-10 border border-slate-200/50 backdrop-blur-md hover:bg-white hover:border-brand-500/30 transition-all duration-300 flex flex-col justify-between h-full hover:shadow-2xl hover:shadow-brand-500/10 text-left cursor-default shadow-lg shadow-slate-100/50"
          >
            <div>
              {/* Card Header Keynote Accent */}
              <div className="flex items-center justify-between mb-8">
                <span className="text-xs font-extrabold tracking-wider text-brand-600 font-mono">
                  {item.num} // {item.en}
                </span>
                <span className="text-[10px] bg-slate-100 text-slate-500 font-mono border border-slate-200 px-2.5 py-1 rounded-md font-bold">
                  ENTERPRISE EDITION
                </span>
              </div>

              {/* Slogan big title */}
              <h3 className="text-xl lg:text-2xl font-extrabold text-slate-900 mb-2 tracking-tight flex items-center gap-2">
                <span className="w-2 h-2 bg-brand-500 rounded-full"></span>
                {item.title}
              </h3>
              <p className="text-xs text-brand-600 font-bold mb-6 font-mono tracking-wider">
                {item.sub}
              </p>
              
              <p className="text-slate-500 text-xs leading-relaxed font-normal mb-8 border-b border-slate-100 pb-6">
                {item.desc}
              </p>

              {/* Core Features Like Apple Presentation */}
              <div className="space-y-3.5 mb-8">
                {item.features.map((feat, fIdx) => (
                  <div key={fIdx} className="flex items-start gap-2.5">
                    <span className="w-1.5 h-1.5 bg-brand-400 rounded-full mt-1.5 shrink-0"></span>
                    <span className="text-slate-600 text-xs font-normal leading-relaxed">{feat}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* Huge Metrics Stat Like Tesla Launch Event */}
            <div className="mt-auto pt-6 border-t border-slate-100 bg-gradient-to-r from-brand-50 to-transparent p-5 rounded-2xl border border-brand-100">
              <span className="text-[9px] text-slate-400 font-mono block mb-1">KEY PERFORMANCE // 核心指标</span>
              <span className="text-lg lg:text-xl font-extrabold bg-gradient-to-r from-brand-600 to-indigo-600 bg-clip-text text-transparent">
                {item.metrics}
              </span>
            </div>
          </motion.div>
        ))}
      </div>
    </div>
  </section>
);

const ProductEntry = () => (
  <section className="py-24 bg-brand-600 text-white overflow-hidden relative">
    <div className="absolute top-0 right-0 w-1/2 h-full bg-white/10 blur-3xl -z-0"></div>
    
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
      <div className="text-center mb-16">
        <h2 className="text-3xl lg:text-4xl font-bold mb-4 text-white">围绕业务场景设计的AI患者运营体系</h2>
        <p className="text-brand-100 max-w-3xl mx-auto text-lg">从患者第一次看到内容，到进入咨询、建立信任、完成到院转化，每一步都有相应产品承接。</p>
      </div>
      
      <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
        {[
          {
            name: "随时答",
            tag: "肿瘤患者私域承接系统",
            value: "把分散咨询沉淀成可跟进、可触达、可复盘的患者资产。",
            features: ["自动欢迎语", "渠道码打标", "标签沉淀", "群发触达", "一对一咨询", "人工跟进提醒"],
            color: "bg-white"
          },
          {
            name: "云百科",
            tag: "肿瘤专病AI问答系统",
            value: "用24小时智能问答承接高频问题，降低重复沟通压力。",
            features: ["专病知识库", "就医指南", "报告解读", "治疗路径科普", "复诊常见问题", "多端接入"],
            color: "bg-brand-200"
          },
          {
            name: "患者管理工具",
            tag: "随访与复诊管理工具",
            value: "帮助医院增强患者粘性，提升复诊与长期管理能力。",
            features: ["症状记录", "用药记录", "检查提醒", "复诊提醒", "随访提醒", "长期服务留存"],
            color: "bg-brand-100"
          },
          {
            name: "数据中台能力",
            tag: "患者增长数据看板",
            value: "让医院知道患者从哪里来、问了什么、是否转化、哪里需要优化。",
            features: ["标签画像", "用户行为数据", "内容效果分析", "线索分层", "咨询追踪", "转化复盘"],
            color: "bg-indigo-300"
          }
        ].map((product, i) => (
          <div key={i} className="bg-white/10 backdrop-blur-md border border-white/20 p-8 rounded-3xl hover:bg-white/20 transition-all flex flex-col justify-between h-full">
            <div>
              <div className={`w-12 h-1.5 ${product.color} rounded-full mb-6`}></div>
              <h3 className="text-2xl font-bold mb-2">{product.name}</h3>
              <div className="text-brand-100 text-xs font-semibold mb-4 uppercase tracking-wider">{product.tag}</div>
              <p className="text-xs text-white/80 mb-6 leading-relaxed">{product.value}</p>
              <ul className="space-y-3">
                {product.features.map((f, j) => (
                  <li key={j} className="flex items-center gap-2 text-white/90 text-xs">
                    <CheckCircle2 size={12} className="text-white shrink-0" />
                    <span className="truncate">{f}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        ))}
      </div>
    </div>
  </section>
);

const CaseStudies = () => {
  const [activeCase, setActiveCase] = useState(0);

  const cases = [
    {
      title: "某肿瘤医院核心业务增长",
      sub: "专病患者私域资产建档与到院转化标标杆",
      stats: [
        { label: "核心业务收入增幅", value: "70%" },
        { label: "峰值年营收测算", value: "≈3.42亿" },
        { label: "年度业务增量", value: "亿元级" },
        { label: "规模净增", value: "+685" }
      ],
      highlight: "成功通过AI与内容运营组合，新增约相当于一个中型科室的年营收体量。",
      desc: "深度挖掘重疾决策长尾路径，全域拦截精准肿瘤流量。部署全套精细陪伴答疑中台与私域管理，彻底改变传统公立及特色医院由于宣教缺失导致的患者巨大流失，重构专病患友生命周期粘性。",
      bg: "https://images.unsplash.com/photo-1579684389782-64d84b5e901a?auto=format&fit=crop&q=80&w=1200"
    },
    {
      title: "某公立医院口腔科增长案例",
      sub: "大健康特色专科逆周期精密增长学阵",
      stats: [
        { label: "同比正增长胜率", value: "100%" },
        { label: "旺季营收增长", value: "1.8倍" },
        { label: "暑期单月历史峰值", value: "≈130万" }
      ],
      highlight: "打破传统运营壁垒，实现100%正增长曲线，达成逆周期赶超。",
      desc: "克服传统口腔、正畸、排牙高获客依赖弊端。通过视频号大白话内容科普与微信诊前长效服务立信模型，在区域内建立稳固的高品质差异化口碑壁垒，摆脱被动，实现老带新裂变式自主增长。",
      bg: "https://images.unsplash.com/photo-1598256989800-fe5f95da9787?auto=format&fit=crop&q=80&w=1200"
    }
  ];

  const current = cases[activeCase];

  return (
    <section className="py-24 relative overflow-hidden bg-slate-50 border-y border-slate-100 text-left">
      <div className="absolute top-1/2 left-1/4 w-96 h-96 bg-brand-100/50 rounded-full blur-3xl -z-10"></div>
      <div className="absolute bottom-10 right-10 w-80 h-80 bg-slate-200/50 rounded-full blur-3xl -z-10"></div>
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header and Slide Toggles */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-8 mb-16 border-b border-slate-150 pb-10">
          <div>
            <span className="text-brand-600 font-mono text-xs uppercase tracking-widest block mb-3 font-bold">PRACTICE PATHS // 实证力量</span>
            <h2 className="text-3xl lg:text-4xl font-extrabold text-slate-900 leading-tight">不是讲概念，直接看结果</h2>
            <p className="text-slate-500 text-sm mt-3 max-w-2xl leading-relaxed">
              数据来源于脱敏合作案例，所有关键收益、时间节点及细分项均作科学隐私脱敏，用事实说话。
            </p>
          </div>

          {/* Elegant Rounded Tab Navigation */}
          <div className="inline-flex bg-slate-100 p-1.5 rounded-2xl border border-slate-200 self-start md:self-end shrink-0">
            {cases.map((c, idx) => (
              <button
                key={idx}
                onClick={() => setActiveCase(idx)}
                className={`px-5 py-3 rounded-xl text-xs lg:text-sm font-bold transition-all duration-300 ${activeCase === idx ? "bg-brand-600 text-white shadow-lg shadow-brand-600/10 scale-102" : "text-slate-500 hover:text-slate-900"}`}
              >
                0{idx + 1} | {c.title.split('增长')[0].replace('某', '')}
              </button>
            ))}
          </div>
        </div>

        {/* Selected Case Slide Presentation Design */}
        <motion.div
          key={activeCase}
          initial={{ opacity: 0, y: 15 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.4, ease: "easeOut" }}
          className="bg-white border border-slate-100 rounded-[32px] p-8 lg:p-14 shadow-xl shadow-slate-150/30 relative overflow-hidden"
        >
          {/* Accent Badge */}
          <div className="absolute top-0 right-0 w-24 h-24 bg-brand-50/40 rounded-bl-[100px] flex items-start justify-end p-4 -z-10">
            <span className="text-2xl font-black text-brand-200">0{activeCase + 1}</span>
          </div>

          <div className="grid lg:grid-cols-12 gap-12 items-center relative z-10">
            
            {/* Left Side: Presentation Copy & Golden Highlight Quote */}
            <div className="lg:col-span-6 flex flex-col justify-between">
              <div>
                <span className="text-xs font-bold uppercase tracking-widest font-mono text-brand-600 bg-brand-50 border border-brand-100 px-3.5 py-1.5 rounded-full inline-block mb-6">
                  {current.title}
                </span>
                
                <h3 className="text-2xl lg:text-3xl font-black text-slate-900 mb-3 leading-tight">
                  {current.sub}
                </h3>
                
                <p className="text-slate-500 text-sm leading-relaxed mb-6">
                  {current.desc}
                </p>

                {/* Slogan Golden Quote Callout */}
                <div className="border-l-[4px] border-brand-500/80 pl-5 py-2.5 my-8 bg-brand-50/50 rounded-r-2xl pr-4">
                  <p className="text-brand-800 text-sm leading-relaxed italic font-semibold">
                    “ {current.highlight} ”
                  </p>
                </div>
              </div>

              <div className="mt-8 pt-6 border-t border-slate-100 flex items-center gap-3">
                <span className="w-2 h-2 bg-brand-600 rounded-full animate-pulse"></span>
                <span className="text-[11px] text-slate-400 font-mono">CASE DATA INTEGRITY VERIFIED // 数据已通过独立脱敏校验</span>
              </div>
            </div>

            {/* Gap */}
            <div className="lg:col-span-1" />

            {/* Right Side: Bento Grid Stats Cards of Selected Case */}
            <div className="lg:col-span-5 flex flex-col justify-center w-full">
              <div className="grid sm:grid-cols-2 gap-4 w-full">
                {current.stats.map((stat, sIdx) => (
                  <div 
                    key={sIdx} 
                    className="bg-slate-50 border border-slate-100 hover:border-brand-200 hover:bg-white rounded-2xl p-6 transition-all duration-300 flex flex-col justify-between min-h-[140px] shadow-sm hover:shadow-md"
                  >
                    <div>
                      <div className="text-slate-400 text-[10px] font-mono tracking-wider uppercase mb-3">
                        {stat.label}
                      </div>
                      <div className="text-4xl lg:text-5xl font-extrabold text-brand-600 tracking-tight">
                        {stat.value}
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>

          </div>
        </motion.div>

        {/* Dynamic Slogan / Bottom Quote */}
        <div className="mt-16 text-center">
          <p className="text-base lg:text-lg font-medium text-slate-500 italic px-4">
            “ 这些结果，并不是单纯靠买流量带来的，而是患者‘决策路径被重构’的必然结果 ”
          </p>
        </div>
      </div>
    </section>
  );
};

const DecisionPath = () => (
  <section className="py-24 bg-brand-50/30 relative overflow-hidden">
    <div className="absolute top-0 right-0 w-full h-full -z-10">
      <div className="absolute top-1/2 right-1/4 w-80 h-80 bg-brand-200/20 rounded-full blur-3xl"></div>
    </div>
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      <div className="text-center mb-16">
        <h2 className="text-3xl lg:text-4xl font-bold text-slate-900 mb-4">医院真正缺的，不是患者，而是“已经想清楚的患者”</h2>
      </div>
      
      <div className="grid lg:grid-cols-3 gap-12">
        {[
          {
            title: "患者在来医院前，已经完成了判断",
            desc: "多数患者在就诊前，已经在其他渠道形成初步决策"
          },
          {
            title: "传统增长，只能影响“选择”，无法影响“判断”",
            desc: "医院往往只能参与最后一步竞争"
          },
          {
            title: "而我们，前置了这一关键环节",
            desc: "在患者做决定之前，完成路径引导与信任建立"
          }
        ].map((item, i) => (
          <div key={i} className="bg-white p-8 rounded-2xl shadow-sm border border-brand-100">
            <div className="w-10 h-10 rounded-full bg-brand-50 text-brand-600 flex items-center justify-center mb-6 font-bold">
              {i + 1}
            </div>
            <h3 className="text-xl font-bold text-slate-900 mb-4">{item.title}</h3>
            <p className="text-slate-600 leading-relaxed">{item.desc}</p>
          </div>
        ))}
      </div>
    </div>
  </section>
);

const ReconstructPath = () => (
  <section className="py-24 relative overflow-hidden">
    <div className="absolute top-1/2 left-0 w-64 h-64 bg-brand-100/40 rounded-full blur-3xl -z-10"></div>
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      <div className="text-center mb-16">
        <h2 className="text-3xl lg:text-4xl font-bold text-slate-900 mb-4">我们不是做流量，而是重构患者的决策路径</h2>
      </div>
      
      <div className="grid lg:grid-cols-3 gap-8">
        {[
          {
            title: "内容触发（公域）",
            desc: "用“决策冲突”内容，让患者停下来重新思考",
            icon: <Users className="text-brand-600" />
          },
          {
            title: "AI判断（智能体 / 云百科）",
            desc: "在患者最不确定时，提供结构化判断依据",
            icon: <MessageSquare className="text-brand-600" />
          },
          {
            title: "私域承接（企业微信 + 标签体系）",
            desc: "持续建立信任，并完成导诊与转化",
            icon: <ShieldCheck className="text-brand-600" />
          }
        ].map((item, i) => (
          <div key={i} className="p-8 rounded-3xl border border-brand-100 hover:bg-brand-50/50 transition-colors">
            <div className="mb-6 w-12 h-12 bg-brand-50 rounded-xl flex items-center justify-center">
              {item.icon}
            </div>
            <h3 className="text-xl font-bold text-slate-900 mb-4">{item.title}</h3>
            <p className="text-slate-600 leading-relaxed">{item.desc}</p>
          </div>
        ))}
      </div>
      
      <div className="mt-16 text-center">
        <div className="inline-block bg-brand-600 text-white px-8 py-4 rounded-2xl font-bold text-xl shadow-xl shadow-brand-200">
          当患者进入医院时，已经不是在“了解”，而是在“确认”
        </div>
      </div>
    </div>
  </section>
);

const WhyUs = () => (
  <section className="py-24 bg-brand-600 text-white">
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      <div className="grid lg:grid-cols-2 gap-16 items-center">
        <div>
          <h2 className="text-3xl lg:text-4xl font-bold mb-8">为什么医院会选择源头科技</h2>
          <div className="space-y-8">
            {[
              "既做内容，也做承接 and 转化，不是单点服务",
              "既能帮医院增长，也能帮医院减轻重复沟通压力",
              "有医疗AI产品，不只是运营公司",
              "有成熟案例，模式可复制到专病和专科场景"
            ].map((text, i) => (
              <div key={i} className="flex gap-4">
                <div className="w-6 h-6 rounded-full bg-white/20 flex items-center justify-center shrink-0 mt-1">
                  <CheckCircle2 size={14} />
                </div>
                <p className="text-lg font-medium text-brand-50">{text}</p>
              </div>
            ))}
          </div>
        </div>
        <div className="bg-white/10 backdrop-blur-md rounded-3xl p-10 border border-white/20">
          <div className="text-2xl font-bold mb-6">核心能力矩阵</div>
          <div className="grid grid-cols-2 gap-4">
            {["内容引流", "AI问答", "标签识别", "私域转化"].map((item, i) => (
              <div key={i} className="bg-white/10 p-6 rounded-2xl text-center font-bold">
                {item}
              </div>
            ))}
            <div className="col-span-2 bg-white text-brand-600 p-6 rounded-2xl text-center font-bold text-xl">
              三位一体增长引擎
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
);

const Process = () => (
  <section className="py-24 bg-brand-50/20 relative overflow-hidden">
    <div className="absolute bottom-0 left-0 w-full h-full -z-10">
      <div className="absolute bottom-1/4 left-1/4 w-96 h-96 bg-brand-200/10 rounded-full blur-3xl"></div>
    </div>
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      <div className="text-center mb-16">
        <h2 className="text-3xl lg:text-4xl font-bold text-slate-900 mb-4">合作怎么开始</h2>
      </div>
      
      <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
        {[
          { step: "01", title: "诊断", desc: "梳理医院现有患者获取与转化链路" },
          { step: "02", title: "搭建", desc: "上线智能体、企业微信体系与内容矩阵" },
          { step: "03", title: "运营", desc: "标签化分层、内容触达、人工转化" },
          { step: "04", title: "复盘", desc: "月度数据分析与持续优化" },
        ].map((item, i) => (
          <div key={i} className="relative">
            <div className="text-5xl font-black text-brand-100 mb-4">{item.step}</div>
            <h3 className="text-xl font-bold text-slate-900 mb-3">{item.title}</h3>
            <p className="text-slate-500">{item.desc}</p>
            {i < 3 && (
              <div className="hidden lg:block absolute top-6 left-full w-full border-t-2 border-dashed border-brand-100 -ml-4"></div>
            )}
          </div>
        ))}
      </div>
    </div>
  </section>
);

const HomePage = ({ onAction }: { onAction: (t: string) => void }) => (
  <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }}>
    <Carousel onAction={onAction} />
    <PartnerCoBuild />
    <PainPoints />
    <CoreValue />
    <ProductEntry />
    <CaseStudies />
    <DecisionPath />
    <ReconstructPath />
    <WhyUs />
    <Process />
  </motion.div>
);

const Footer = ({ onAction }: { onAction: (t: string) => void }) => (
  <footer className="bg-brand-50 text-slate-900 pt-20 pb-10 relative overflow-hidden text-left">
    <div className="absolute top-0 left-0 w-full h-full -z-10">
      <div className="absolute bottom-0 right-0 w-96 h-96 bg-brand-200/20 rounded-full blur-3xl"></div>
    </div>
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      <div className="bg-brand-600 rounded-3xl p-10 lg:p-16 mb-20 flex flex-col lg:flex-row justify-between items-center gap-10 shadow-2xl shadow-brand-200">
        <div className="max-w-2xl">
          <h2 className="text-3xl lg:text-4xl font-bold mb-6 text-white leading-tight">先对你们医院的专科增长链路做一次诊断，再做决定</h2>
          <p className="text-brand-100 text-lg">我们将免费为您提供初始 of 肿瘤专科患者增长诊断方案与AI患者运营服务演示。</p>
        </div>
        <div className="flex flex-wrap gap-4 shrink-0">
          <button 
            onClick={() => onAction('contact')}
            className="bg-white text-brand-600 px-8 py-4 rounded-xl font-bold text-lg hover:bg-brand-100 transition-all shadow-md"
          >
            预约专科增长诊断
          </button>
          <button 
            onClick={() => onAction('cases')}
            className="bg-brand-700 text-white border border-brand-500 px-8 py-4 rounded-xl font-bold text-lg hover:bg-brand-800 transition-all border-none"
          >
            获取脱敏案例
          </button>
        </div>
      </div>
      
      <div className="grid lg:grid-cols-4 gap-12 mb-16">
        <div className="col-span-1 lg:col-span-1">
          <div className="mb-6">
            <Logo size="sm" />
          </div>
          <p className="text-slate-500 text-sm leading-relaxed mb-4">
            源头科技，肿瘤专科增长合伙人。以内容树信任、用AI接咨询、以私域聚患者、用数据复盘增长。
          </p>
        </div>
        
        <div>
          <h4 className="font-bold mb-6 text-slate-900">产品体系</h4>
          <ul className="space-y-4 text-slate-500 text-sm">
            <li><button onClick={() => onAction('products')} className="hover:text-brand-600 transition-colors">随时答</button></li>
            <li><button onClick={() => onAction('products')} className="hover:text-brand-600 transition-colors">云百科</button></li>
          </ul>
        </div>
        
        <div>
          <h4 className="font-bold mb-6 text-slate-900">解决方案</h4>
          <ul className="space-y-4 text-slate-500 text-sm">
            <li><button onClick={() => onAction('solutions')} className="hover:text-brand-600 transition-colors">肿瘤专科增长方案</button></li>
            <li><button onClick={() => onAction('solutions')} className="hover:text-brand-600 transition-colors">数据追踪复盘机制</button></li>
          </ul>
        </div>
        
        <div>
          <h4 className="font-bold mb-6 text-slate-900">联系我们</h4>
          <ul className="space-y-4 text-slate-500 text-sm">
            <li className="flex items-center gap-3"><Mail size={16} className="text-brand-600" /> partner@yuantou.tech</li>
          </ul>
        </div>
      </div>
    </div>
  </footer>
);

const SolutionsPage = () => (
  <motion.div 
    initial={{ opacity: 0 }} 
    animate={{ opacity: 1 }} 
    className="bg-slate-950 text-slate-100 min-h-screen text-left"
  >
    {/* Page Cover / Master Intro Slide */}
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden py-16 px-4 bg-[#020516]">
      <div className="absolute inset-0 z-0">
        <div className="absolute inset-0 bg-gradient-to-b from-[#020516]/90 via-[#091538]/95 to-[#020510]"></div>
        <div className="absolute top-1/2 right-10 w-[500px] h-[500px] bg-indigo-500/10 rounded-full blur-[120px] pointer-events-none"></div>
      </div>
      
      <div className="max-w-7xl mx-auto relative z-10 text-center px-4">
        <motion.div 
          initial={{ y: 20, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.6 }}
          className="inline-flex items-center gap-2 bg-blue-500/12 border border-blue-400/20 text-blue-300 px-6 py-2 rounded-full text-xs font-black uppercase tracking-widest mb-8"
        >
          <Sparkles size={14} className="text-blue-400 animate-pulse" />
          YUANYUAN S-DECK // 解决方案发布会
        </motion.div>
        
        <motion.h1 
          initial={{ y: 30, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.8, delay: 0.1 }}
          className="text-6xl lg:text-9xl font-black mb-10 tracking-tight leading-[1.05] max-w-6xl mx-auto text-center"
        >
          肿瘤与高壁垒专科<br />
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 via-sky-400 via-indigo-300 to-cyan-400">
            数字化增长服务环
          </span>
        </motion.h1>
        
        <motion.div 
          initial={{ y: 30, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="w-24 h-1.5 bg-gradient-to-r from-blue-500 to-cyan-400 mx-auto mb-10 rounded-full shadow-lg shadow-blue-500/35"
        />
        
        <motion.p 
          initial={{ y: 30, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.8, delay: 0.3 }}
          className="text-slate-350 text-xl lg:text-2xl max-w-4xl mx-auto leading-relaxed font-normal"
        >
          打破传统破碎的单点硬广买量，构建“触达 - 拦截 - 云问答 - 企微承接 - 返院随护”的全链路患者增长方案。
        </motion.p>
      </div>
      
      <div className="absolute bottom-10 left-1/2 -translate-x-1/2 text-center text-xs tracking-widest text-slate-400 font-mono animate-bounce">
        SCROLL TO VIEW KEYNOTES ↓
      </div>
    </section>

    {/* Slide 1: Core Pain Points (Keynote Theme 1) */}
    <section className="relative min-h-screen flex items-center py-24 bg-[#03071a] overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 w-full">
        <div className="mb-20 max-w-6xl border-l-[6px] border-amber-500 pl-6 lg:pl-10">
          <span className="text-amber-400 font-black text-xs uppercase tracking-widest block mb-4 font-mono">痛点诊断</span>
          <h2 className="text-5xl lg:text-8xl font-black text-white mb-6 tracking-tight leading-[1.1]">
            线上硬广买量已彻底失效
          </h2>
          <p className="text-slate-350 text-lg lg:text-xl max-w-4xl leading-relaxed font-normal">
            肿瘤等重疾患者决策漫长、信任屏障高，硬广绝无希望撬动信任杠杆。
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-6">
          {[
            { title: "决策周期极其漫长", desc: "高危重疾多渠道交叉决策耗时数月，极易发生断流。" },
            { title: "信任屏障极难打破", desc: "需要高规格医学权威 and 暖心陪伴，单纯买量极易戒备。" },
            { title: "科普咨询不堪重负", desc: "日常检查单解读、到院就诊疑惑海量重复，白白虚耗精力。" }
          ].map((item, i) => (
            <div key={i} className="bg-white/[0.02] border border-white/5 rounded-3xl p-8 hover:bg-white/[0.04] transition-all">
              <h3 className="text-xl font-bold text-white mb-4">{item.title}</h3>
              <p className="text-xs text-slate-400 leading-relaxed font-normal">{item.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  </motion.div>
);

const ProductsPage = () => {
  const productsList = [
    {
      num: "01",
      name: "患者触达中心",
      en: "Patient Touchpoint Center",
      value: "把零散科普打造为“播撒信任的种子”",
      bg: "https://picsum.photos/seed/p-touch/1600/900",
      quote: "让科室的专业学术与真实案例，在患者产生恐惧与疑惑的第一时间，温和触达、率先占领心智首选。",
      features: [
        { title: "全域新媒体内容引流部署", detail: "视频号、新媒体科普多端检索部署，让专业的专科科普与医生知识深度流向公域患者人群。" },
        { title: "知名医生数字化IP名片", detail: "定制高保真、有温热感的人本数字化形象与学术成果白话卡片，一秒转发自备光芒。" },
        { title: "枯燥医疗指南白话重写", detail: "专业难懂的大放化疗共识大字白话改稿，让不识字的爷爷奶奶也能一眼看懂自我病情应对指南。" },
        { title: "内容矩阵嵌入智能入口", detail: "科普大号或公众号宣教视频无缝植挂“随时答”AI对话通道，极速拦截中途流失漏斗。" }
      ],
      badgeColor: "text-brand-600 bg-brand-50 border-brand-250/30",
      gGlow: "from-brand-500/10 to-transparent",
      colorText: "from-brand-600 to-indigo-600"
    },
    {
      num: "02",
      name: "患者资产中心",
      en: "Patient Asset Center",
      value: "把偶发聊天沉淀为“科室的核心数字留存”",
      bg: "https://picsum.photos/seed/p-asset/1600/900",
      quote: "告别过去患者聊完即失踪的困境，把全网所有的互动微信，在合规保障下汇流为带有深度专病特质的分层资产。",
      features: [
        { title: "一拉建交企业企微随时答", detail: "扫码极速承下深夜报告解读疑惑与挂号推荐，微信合规沙盘承接，绝不漏死每一个微小互动线头。" },
        { title: "专病标签多维自动化精打", detail: "基于问答深度算法归纳患者所属病期、既往化疗方案、所处省份与支付意愿，沉淀多维深度画像标签。" },
        { title: "高回弹分层患者批量运营", detail: "按照术后三个月或处于治疗第二阶段等严格患者病群分层，进行阶段性邀约或宣教主动下发。" },
        { title: "敏感重大线索极速高亮红预", detail: "发现急重特诊多学科会诊多维度高价值线索，系统后台极速预警同步并一秒无感知派送专科助理。" }
      ],
      badgeColor: "text-violet-600 bg-violet-50 border-violet-200",
      gGlow: "from-violet-500/5 to-transparent",
      colorText: "from-violet-600 to-indigo-600"
    },
    {
      num: "03",
      name: "AI智能服务中心",
      en: "AI Service Center",
      value: "7×24h 全天候智慧问答，提供“有医学循证的温情交互”",
      bg: "https://picsum.photos/seed/p-ai/1600/900",
      quote: "基于最严密的国内临床大百科及专家团队共识知识库构建，让AI既有高规格的循证精准，又不失暖心的陪伴关爱。",
      features: [
        { title: "千万级临床医学知识安全盾", detail: "依托严格专病共识、医学用药数据库，每一次问答答复均符合循证医学原则，规避医疗逻辑红线。" },
        { title: "极速化验单CT智能高亮解读", detail: "化验数据、血常规数值与PET-CT复杂专业词汇的大白话智能解惑，让家属不再彻夜辗转反复百度受惊。" },
        { title: "智能特色科室MDT路线导引", detail: "理不清复杂多学科门诊就医顺序？AI根据出院记录自动推送专病门诊安排，挂号少踩弯路坑。" },
        { title: "人工临床专科专家一秒过渡", detail: "检测触发敏感词或濒危红章，服务秒级闪亮警报，后台直接接入人工咨询代表接续对话。" }
      ],
      badgeColor: "text-emerald-700 bg-emerald-50 border-emerald-200",
      gGlow: "from-emerald-500/5 to-transparent",
      colorText: "from-emerald-600 to-teal-600"
    },
    {
      num: "04",
      name: "随随健康关怀中心",
      en: "Follow-up Management Center",
      value: "出院并非服务的结束，而是陪伴的全新起点",
      bg: "https://picsum.photos/seed/p-follow/1600/900",
      quote: "把粗放、死板的院后随访，升级为贯穿患者生活的暖心叮嘱、智能日志与复诊推荐链路，提高延续康复率。",
      features: [
        { title: "主动用药习惯与症状随身记录", detail: "每日关怀打卡叮嘱服药，高低热量记录与多维度不良症状自测打分，极速防范副危特情隐患。" },
        { title: "周期节点推送精准康复养护", detail: "按照周期病期智能定向派单喂养食谱、产护康复心理、术后伤口清洁视频，进行全家贴心关顾指导。" },
        { title: "按期返院筛检邀诊高灵直发", detail: "系统根据放疗疗程计划与患者自持时间，到达复健窗口自动弹出温情到院挂号推荐贴，回流率惊人稳定。" },
        { title: "智能微信延续关爱表直随", detail: "用患者微信内温暖量表答复，告别电话被拒接的悲观遭遇，整体随诊随查成功率相对传统高出3.2倍。" }
      ],
      badgeColor: "text-amber-700 bg-amber-50 border-amber-200",
      gGlow: "from-amber-500/5 to-transparent",
      colorText: "from-amber-600 to-orange-600"
    },
    {
      num: "05",
      name: "数据智慧决策中心",
      en: "Data Review Center",
      value: "告别感觉，用“全链路数据”赋能运营精进",
      bg: "https://picsum.photos/seed/p-db/1600/900",
      quote: "精细记录患者从点进视频、发起咨询、生成画像到最后线下预约到院的全链路数据，推动科室迈向科学化、数字化管理。",
      features: [
        { title: "全网获客到院漏斗精确追", detail: "微观呈现引流内容获客点亮、智能体交互深度、微信建交率以及到院率，ROI投产转化曲线尽收眼底。" },
        { title: "患者多言关注热图大对焦", detail: "微观捕获数十万级高频核心提问，洞察患者真正对化疗毒素等极力揪心关注焦点，直接指导院方科普纠偏。" },
        { title: "科系在库随诊生命流透像看", detail: "清晰掌握当前科室、专病已建档忠实患群的长期回访活跃指数、随诊陪伴满意度与区域分布特质。" },
        { title: "高管可视化决策大板周月报", detail: "一键调阅生成多维季度、月度科室数字化增长复盘报表，让管理层掌握有据客观的实干进展。" }
      ],
      badgeColor: "text-rose-700 bg-rose-50 border-rose-200",
      gGlow: "from-rose-500/5 to-transparent",
      colorText: "from-rose-600 to-rose-700"
    }
  ];

  return (
    <motion.div 
      initial={{ opacity: 0 }} 
      animate={{ opacity: 1 }} 
      className="bg-white text-slate-950 min-h-screen text-left"
    >
      {/* Page Header Slide */}
      <section className="relative min-h-screen flex items-center justify-center overflow-hidden py-16 px-4 bg-gradient-to-br from-[#f8fafc] via-blue-50/20 to-white">
        <div className="max-w-7xl mx-auto px-4 relative z-10 text-center">
          <motion.div 
            initial={{ y: 20, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            className="inline-flex items-center gap-1.5 bg-brand-50 text-brand-600 border border-brand-200/50 px-5 py-2 rounded-full text-xs font-black uppercase tracking-widest mb-8 text-black"
          >
            <Award size={14} className="text-brand-500 animate-pulse" />
            PRODUCT ARSENAL // 全栈AI专科运营中台
          </motion.div>
          
          <h1 className="text-6xl lg:text-9xl font-black text-slate-900 mb-8 tracking-tight leading-[1.05]">
            五大中心 驱动增长
          </h1>
          
          <p className="text-slate-600 text-xl lg:text-2xl max-w-4xl mx-auto leading-relaxed font-normal">
            逻辑并不是散装系统，而是环环相扣的五大核心能力底座，打通患者触达、精细画像与长周期的温暖随护。
          </p>
        </div>
      </section>
   
      {productsList.map((item, idx) => (
        <section 
          key={idx} 
          className="relative min-h-screen flex items-center py-28 border-b border-slate-200/50 overflow-hidden group bg-slate-50"
        >
          <div className="absolute inset-0 z-0">
            <img 
              src={item.bg} 
              alt="" 
              className="w-full h-full object-cover opacity-5 group-hover:scale-105 transition-transform duration-1000 filter grayscale"
              referrerPolicy="no-referrer"
            />
            <div className="absolute inset-0 bg-gradient-to-r from-slate-50 via-slate-50/95 to-transparent"></div>
            {/* Subtle colored glow blur */}
            <div className={`absolute top-0 left-0 w-full h-[1px] bg-gradient-to-r ${item.gGlow}`}></div>
          </div>

          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 w-full">
            <div className="grid lg:grid-cols-12 gap-12 items-center">
              
              {/* Visual Side: Slogan, Number & Quote */}
              <div className="lg:col-span-5 flex flex-col justify-between">
                <div>
                  <div className="flex items-center gap-4 mb-6">
                    <span className="text-5xl font-black font-mono text-slate-200">{item.num}</span>
                    <span className={`inline-block px-4 py-1.5 rounded-full text-xs font-black uppercase tracking-widest border ${item.badgeColor}`}>
                      {item.en}
                    </span>
                  </div>
                  
                  <h2 className="text-4xl lg:text-5xl font-black text-slate-900 mb-6 leading-tight">
                    {item.name}
                  </h2>
                  
                  <div className={`text-transparent bg-clip-text bg-gradient-to-r ${item.colorText} text-xl lg:text-2xl font-extrabold mb-8 leading-snug`}>
                    {item.value}
                  </div>
                  
                  <div className="border-l-[4px] border-brand-500 pl-6 py-2 my-10 bg-white/60 backdrop-blur-sm rounded-r-xl pr-4 border border-slate-200/50 shadow-sm">
                    <p className="text-slate-500 text-sm md:text-base leading-relaxed italic font-normal">
                      “{item.quote}”
                    </p>
                  </div>
                </div>
              </div>

              {/* Content Side: Key Points */}
              <div className="lg:col-span-1" />
              
              <div className="lg:col-span-6 grid sm:grid-cols-2 gap-6 w-full">
                {item.features.map((feat, fIdx) => (
                  <div 
                    key={fIdx} 
                    className="bg-white border border-slate-200/60 p-8 rounded-3xl transition-all duration-300 flex flex-col justify-between h-52 relative group shadow-sm hover:shadow-md hover:border-brand-500/40"
                  >
                    <div>
                      <h3 className="text-base lg:text-lg font-bold text-slate-950 flex items-center gap-3 mb-4 group-hover:text-brand-600 transition-colors">
                        <span className="w-2 h-2 bg-brand-500 rounded-full shrink-0"></span>
                        {feat.title}
                      </h3>
                      <p className="text-xs text-slate-500 leading-relaxed font-normal">
                        {feat.detail}
                      </p>
                    </div>
                    <div className="absolute top-4 right-4 text-[10px] font-mono text-slate-300 font-extrabold">F0{fIdx + 1}</div>
                  </div>
                ))}
              </div>

            </div>
          </div>
        </section>
      ))}
    </motion.div>
  );
};



const CasesPage = () => {
  const casesData = [
    {
      title: "某重点肿瘤专科医院",
      sub: "专病患者私域资产建档与到院转化标杆",
      tag: "01 // ONCOLOGY CLINICAL DEMO // 肿瘤专科",
      theme: "from-slate-950 via-indigo-950/40 to-slate-950",
      accent: "text-amber-400 border-amber-500/20 bg-amber-500/10",
      quote: "不仅新增了相当于中型科室的整体年营业流，更建立起科室自有的前置决策壁垒。",
      bg: "https://picsum.photos/seed/case-onco/1600/900",
      stats: [
        { label: "专病患者到院转化率", value: "+70%", desc: "由历史流失重区实现根本性跨越" },
        { label: "峰值年营收规模测算", value: "≈3.42亿", desc: "AI患者服务中台创造的长效营收流" },
        { label: "专病患者自持建档数", value: "+685人/年", desc: "建立高粘性专科患群长期连接" },
        { label: "多学科MDT匹配率", value: "提升1.8倍", desc: "有效激发并满足高难跨科会诊需求" }
      ],
      backstory: "针对重疾患者就医决策长、多省看病核对比、传统在线咨询流失极其惨重的痛点，源头科技作为其专科增长合伙人，在彻底保护隐私的前提下部署了全套随时答承接中台、编写了500+核心高频专病AI百科，并将患教决策前置。",
      construction: [
        "微信随时答承接流：不漏接任何一次深夜突发的报告解读提问",
        "自持患者画像精细打标：按疾病分期、已用药方案进行精细管理",
        "专病患友群温暖运营：建立高度合规和同理心的长期陪伴机制"
      ]
    },
    {
      title: "某三甲公立医院口腔科",
      sub: "大健康特色专科逆周期精准增长先锋",
      tag: "02 // STOMATOLOGY GROWTH DEMO // 口腔专科",
      theme: "from-[#070912] via-slate-900/60 to-[#070912]",
      accent: "text-sky-400 border-sky-500/20 bg-sky-500/10",
      quote: "打破传统的粗放式买量获客依赖，利用有温度的诊后随关怀建立极高的口碑推荐裂变。",
      bg: "https://picsum.photos/seed/case-dental/1600/900",
      stats: [
        { label: "同比逆周期增长胜率", value: "100%", desc: "在全区传统正畸下滑中逆势出圈" },
        { label: "旺季专科营业增量率", value: "1.8倍", desc: "精细随访高频互动带来的裂变效果" },
        { label: "暑期单科月营收历史突破", value: "≈130万", desc: "成功通过AI与高价值特色门诊组合" },
        { label: "新媒体自营沉淀粉丝", value: "11.44万+", desc: "持续输出白话科普建立区域高壁垒" }
      ],
      backstory: "正畸及种植牙等大特色自费专科决策同样谨慎。传统运营只注重单次获客而缺失诊后与随访。通过部署源头患者管理中台与视频号诊前深度立信模型，在区域内建立了无可撼动的口腔领先口碑，实现逆周期超越。",
      construction: [
        "新媒体医生矩阵：用大白话短视频解答正畸初阶患者的种种常识焦虑",
        "诊后随防自动计划：患者每隔15天精准获取自动推牙齿复健提醒与科普",
        "裂变群友会话：口腔健康打卡群带来28%的家人及朋辈到院就诊裂变"
      ]
    },
    {
      title: "某公立妇幼保健院",
      sub: "随诊服务降负载与大健康门诊复筛标杆",
      tag: "03 // CLINICAL INNOVATION DEMO // 妇幼创新",
      theme: "from-slate-950 via-emerald-950/40 to-slate-950",
      accent: "text-emerald-400 border-emerald-500/20 bg-emerald-500/10",
      quote: "AI代替医护承接90%以上的夜间及高频重复疑问，让临床资源全副聚焦在复杂诊疗。",
      bg: "https://picsum.photos/seed/case-maternal/1600/900",
      stats: [
        { label: "夜间随诊咨询智能答复率", value: "100%", desc: "深夜突发喂养/产康疑问秒答，零漏接" },
        { label: "核心患群深度连接满意度", value: "98.6%", desc: "贴切人文暖心答问收获广泛好评" },
        { label: "医护日常高频沟通负担", value: "降低35%+", desc: "让年轻护士极速从重复宣教中解脱" },
        { label: "院后特色项目复查回诊率", value: "稳步1.5倍", desc: "主动温暖叮嘱驱动的大健康门诊自费复诊率" }
      ],
      backstory: "面向孕产妇及新生儿家庭对专业常识极高、发生频率都在半夜的特点，医院面临极大夜间电话投诉压力。通过部署AI服务中台与云百科，全天候极速解答非处方用药疑问、检查指南及产防症状筛查，暖心贴切。",
      construction: [
        "云百科智能挂载：覆盖孕周、保胎、喂养及早教高频问答体系",
        "智能出院回访微信：用贴心的出院第7天、30天定期量表代替生硬电话",
        "暖心人工兜底响应：异常生理指标自动在护士端闪烁，医生及时介入"
      ]
    }
  ];

  return (
    <motion.div 
      initial={{ opacity: 0 }} 
      animate={{ opacity: 1 }} 
      className="bg-[#05060b] text-slate-100 min-h-screen text-left"
    >
      {/* Welcome Pitch Header */}
      <section className="relative min-h-[50vh] flex items-center justify-center overflow-hidden py-16 px-4 border-b border-white/5">
        <div className="absolute inset-0 z-0">
          <img 
            src="https://picsum.photos/seed/case-cover/1920/1080" 
            alt="" 
            className="w-full h-full object-cover opacity-10 filter grayscale brightness-50"
            referrerPolicy="no-referrer"
          />
          <div className="absolute inset-0 bg-[#05060b]/90"></div>
        </div>
        
        <div className="max-w-7xl mx-auto text-center relative z-10">
          <span className="text-brand-400 font-mono text-xs uppercase tracking-widest block mb-4">PRACTICE PROOF // 脱敏实证成果录</span>
          <h1 className="text-4xl lg:text-6xl font-black text-white mb-6">不讲虚假叙事，唯有实硬数据</h1>
          <p className="text-slate-400 text-lg max-w-3xl mx-auto leading-relaxed">
            我们秉持循证医学式的严密立场。以下为源头科技携手各大合作医院深度共建，落地取得的真实、脱敏后的运营核心硬核收益考证。
          </p>
        </div>
      </section>

      {/* Sequential Case Presentation Sheets (No Switcher - Each Case Study Appears Fully Page-by-Page) */}
      <div className="flex flex-col">
        {casesData.map((current, idx) => (
          <section
            key={idx}
            className={`relative min-h-screen flex items-center py-20 lg:py-32 px-4 border-b border-white/5 bg-gradient-to-br ${current.theme} overflow-hidden`}
          >
            {/* Subtle base layout blur */}
            <div className="absolute inset-0 z-0">
              <img 
                src={current.bg} 
                alt="" 
                className="w-full h-full object-cover opacity-5 filter contrast-125"
                referrerPolicy="no-referrer"
              />
            </div>

            <div className="max-w-7xl mx-auto relative z-10 w-full">
              <div className="grid lg:grid-cols-12 gap-12 items-center">
                
                {/* Left Side: Editorial Story & Consolidated Initiatives */}
                <div className="lg:col-span-6 flex flex-col justify-between">
                  <div>
                    <span className={`inline-flex px-4 py-1.5 rounded-full text-xs font-black uppercase tracking-widest border mb-8 ${current.accent}`}>
                      {current.tag}
                    </span>
                    
                    <h2 className="text-3xl lg:text-5xl font-black text-white mb-4 leading-tight">
                      {current.title}
                    </h2>
                    
                    <div className="text-slate-300 text-lg lg:text-xl font-medium mb-8">
                      {current.sub}
                    </div>
                    
                    <div className="border-l-[4px] border-brand-500/40 pl-6 py-2.5 my-8 bg-white/[0.01] rounded-r-2xl pr-4">
                      <p className="text-amber-200 text-base leading-relaxed italic font-normal">
                        “{current.quote}”
                      </p>
                    </div>

                    <div className="space-y-8 text-left mt-10">
                      <div>
                        <h3 className="text-white font-bold text-xs uppercase tracking-widest mb-3 font-mono text-brand-400">Project Background // 合作探索背景</h3>
                        <p className="text-sm text-slate-400 leading-relaxed font-normal">
                          {current.backstory}
                        </p>
                      </div>

                      <div>
                        <h3 className="text-white font-bold text-xs uppercase tracking-widest mb-3 font-mono text-brand-400">Consolidated Initiatives // 核心共建举措</h3>
                        <ul className="space-y-3">
                          {current.construction.map((item, keyIdx) => (
                            <li key={keyIdx} className="flex items-start gap-3 text-sm text-slate-300">
                              <span className="w-2 h-2 bg-brand-500 rounded-full mt-2 shrink-0"></span>
                              <span className="leading-relaxed font-normal">{item}</span>
                            </li>
                          ))}
                        </ul>
                      </div>
                    </div>
                  </div>

                  <div className="mt-12 pt-6 border-t border-white/5">
                    <p className="text-[10px] text-slate-500 leading-relaxed italic">
                      * 声明说明：为全面捍卫对应医疗合作机构的商业自主及患者隐私权，已对各项营收和对应年份做等比隐私脱敏处理，特此声明。
                    </p>
                  </div>
                </div>

                {/* Gap */}
                <div className="lg:col-span-1" />

                {/* Right Side: Giant Stats (Keynote Apple-Slogan Matrix Layout) */}
                <div className="lg:col-span-5 flex flex-col justify-center w-full">
                  <div className="grid sm:grid-cols-2 gap-6 w-full">
                    {current.stats.map((stat, sIdx) => (
                      <div 
                        key={sIdx} 
                        className="bg-white/[0.01]/35 backdrop-blur-sm border border-white/5 hover:border-white/10 hover:bg-white/[0.02] rounded-3xl p-8 transition-all duration-300 flex flex-col justify-between min-h-[220px]"
                      >
                        <div>
                          <div className="text-slate-400 text-xs font-mono mb-4 uppercase tracking-wider font-semibold">
                            {stat.label}
                          </div>
                          <div className="text-5xl lg:text-6xl font-black text-white hover:text-brand-400 transition-colors py-2 tracking-tight">
                            {stat.value}
                          </div>
                        </div>
                        <p className="text-[11px] text-slate-500 leading-normal mt-4 font-normal">
                          {stat.desc}
                        </p>
                      </div>
                    ))}
                  </div>
                </div>

              </div>
            </div>
          </section>
        ))}
      </div>
      
      {/* End Slogan Banner */}
      <section className="py-24 text-center bg-slate-950 border-t border-white/5 relative overflow-hidden">
        <div className="max-w-4xl mx-auto px-4 relative z-10">
          <p className="text-xl lg:text-2xl font-medium text-slate-400 italic">
            “ 这些结果，并不是单纯靠买流量带来的，而是患者‘决策路径被重构’的必然结果 ”
          </p>
        </div>
      </section>
    </motion.div>
  );
};

const CooperationPage = () => (
  <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} className="pt-32 pb-20 text-left">
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      <div className="mb-16 text-center">
        <h1 className="text-4xl font-black text-slate-900 mb-4 leading-tight">我们不是简单代运营，也不是单点AI工具</h1>
        <p className="text-slate-500 text-lg">而是与医院并肩保障增长结果的“肿瘤专科增长合伙人”。三种合作路径灵活匹配不同发展阶段需求。</p>
      </div>
      
      <div className="grid md:grid-cols-3 gap-8">
        {[
          { 
            title: "专科增长诊断顾问型", 
            desc: "提供针对肿瘤/血液专科的患者到院路径深度诊断，规划科普新媒体获取及承接闭环方案，指导医院自建团队标准化操作。" 
          },
          { 
            title: "产品+AI患者运营型", 
            desc: "提供随时答、云百科等标准智能体产品组合，外加医学科普内容持续维护、私域合规建档，对承接及意向转化过程指标直接负责。" 
          },
          { 
            title: "肿瘤专科年度增长合伙人", 
            desc: "深度绑定、联合共建。作为医院外挂的“数字化创新事业部”，共同打通从公域触达、AI答疑、直到MDT温暖导诊的完整闭环，长期共赢。" 
          },
        ].map((item, i) => (
          <div key={i} className="bg-white border border-slate-100 p-10 rounded-[32px] text-center hover:shadow-xl hover:border-brand-200 transition-all flex flex-col justify-between">
            <div>
              <div className="w-12 h-12 bg-brand-50 text-brand-600 rounded-full flex items-center justify-center mx-auto mb-6 font-bold border border-brand-100 shadow-sm animate-pulse">
                {i + 1}
              </div>
              <h3 className="text-xl font-bold mb-4 text-slate-900">{item.title}</h3>
              <p className="text-slate-500 text-xs leading-relaxed">{item.desc}</p>
            </div>
            <div className="mt-8 pt-4 border-t border-slate-50">
              <span className="text-brand-600 font-bold text-xs">查看对应脱敏案例 →</span>
            </div>
          </div>
        ))}
      </div>
    </div>
  </motion.div>
);

const AboutPage = () => (
  <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} className="pt-32 pb-20 text-left">
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      <div className="grid lg:grid-cols-2 gap-16 items-center mb-24">
        <div>
          <h1 className="text-4xl font-black text-slate-900 mb-6">源头科技</h1>
          <p className="text-xl text-brand-600 font-bold mb-8">肿瘤专科医院患者增长合伙人</p>
          <p className="text-slate-500 leading-relaxed mb-6">
            我们是一支跨界融合的创新队伍，团队核心成员来自央视新媒体、科创中国体系、AI医疗大模型研发室以及肿瘤专科医院实战增长操盘手。我们深刻了解长决策周期、高信任门槛对于重疾专病医院增长的束缚，致力于通过<b>“医学科普内容 + AI智能答疑 + 温心私域管理”</b>三位一体的增长合伙机制，助力科室和医院构建真正的数字化竞争壁垒。
          </p>
        </div>
        <div className="grid grid-cols-2 gap-4">
          {[
            { label: "核心专长", items: ["肿瘤科科普科普创作", "长周期信任构建模型", "专科AI知识智能问答", "数据安全及合规方案"] },
            { label: "典型共建案例及支持", items: ["陆道培医疗集团合作", "美中爱瑞肿瘤项目支持", "华润医疗部分专科共建", "三博脑科咨询管理支持"] }
          ].map((box, i) => (
            <div key={i} className="bg-slate-50 p-8 rounded-3xl border border-slate-100">
              <div className="font-bold mb-4 text-slate-900">{box.label}</div>
              <ul className="space-y-2 text-sm text-slate-500">
                {box.items.map((item, j) => <li key={j} className="flex items-center gap-2">🌱 {item}</li>)}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </div>
  </motion.div>
);

const ContactPage = () => (
  <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} className="pt-32 pb-20 text-left">
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      <div className="max-w-4xl mx-auto bg-white rounded-3xl shadow-2xl overflow-hidden flex flex-col md:flex-row">
        <div className="md:w-1/2 bg-brand-600 p-12 text-white">
          <h2 className="text-3xl font-black mb-8">联系我们</h2>
          <div className="space-y-8">
            <div className="flex items-center gap-4">
              <div className="w-10 h-10 bg-white/20 rounded-full flex items-center justify-center"><Phone size={20} /></div>
              <div>
                <div className="text-sm text-brand-100 font-semibold">诊断咨询专线</div>
                <div className="font-bold">400-820-2026</div>
              </div>
            </div>
            <div className="flex items-center gap-4">
              <div className="w-10 h-10 bg-white/20 rounded-full flex items-center justify-center"><Mail size={20} /></div>
              <div>
                <div className="text-sm text-brand-100 font-semibold">商务合作邮箱</div>
                <div className="font-bold">partner@yuantou.tech</div>
              </div>
            </div>
            <div className="pt-8">
              <div className="text-sm text-brand-100 mb-4 font-semibold">微信扫码诊断</div>
              <div className="w-32 h-32 bg-white rounded-xl flex items-center justify-center text-slate-950 font-black text-xs">
                [ 微信联系二维码 ]
              </div>
            </div>
          </div>
        </div>
        <div className="md:w-1/2 p-12">
          <h3 className="text-2xl font-black mb-6 text-slate-900">预约专科增长诊断</h3>
          <p className="text-xs text-slate-400 mb-6 font-medium">请留下您的基本信息，源头医疗专科专家将在24小时内与您联系，并为您交付定制诊断方案与脱敏案例材料。</p>
          <form className="space-y-4" onSubmit={(e) => e.preventDefault()}>
            <div>
              <label className="block text-sm font-medium text-slate-700 mb-1">医院/机构名称</label>
              <input type="text" className="w-full px-4 py-3 rounded-xl border border-slate-200 focus:ring-2 focus:ring-brand-500 focus:border-transparent outline-none" placeholder="请输入您的医院或机构完整名称" />
            </div>
            <div>
              <label className="block text-sm font-medium text-slate-700 mb-1">您的姓名及科室职务</label>
              <input type="text" className="w-full px-4 py-3 rounded-xl border border-slate-200 focus:ring-2 focus:ring-brand-500 focus:border-transparent outline-none" placeholder="例如：王主任 肿瘤科" />
            </div>
            <div>
              <label className="block text-sm font-medium text-slate-700 mb-1">联系电话</label>
              <input type="tel" className="w-full px-4 py-3 rounded-xl border border-slate-200 focus:ring-2 focus:ring-brand-500 focus:border-transparent outline-none" placeholder="请输入方便联系的手机号" />
            </div>
            <button className="w-full bg-brand-600 text-white py-4 rounded-xl font-bold text-lg hover:bg-brand-700 hover:shadow-lg transition-all mt-6 uppercase tracking-wider">
              提交诊断预约申请
            </button>
          </form>
        </div>
      </div>
    </div>
  </motion.div>
);

export default function App() {
  const [activeTab, setActiveTab] = useState('home');

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [activeTab]);

  const renderContent = () => {
    switch (activeTab) {
      case 'home': return <HomePage onAction={setActiveTab} />;
      case 'solutions': return <SolutionsPage />;
      case 'products': return <ProductsPage />;
      case 'cases': return <CasesPage />;
      case 'cooperation': return <CooperationPage />;
      case 'about': return <AboutPage />;
      case 'contact': return <ContactPage />;
      default: return <HomePage onAction={setActiveTab} />;
    }
  };

  return (
    <div className="min-h-screen">
      <Navbar activeTab={activeTab} setActiveTab={setActiveTab} />
      <main>
        {renderContent()}
      </main>
      <Footer onAction={setActiveTab} />
    </div>
  );
}

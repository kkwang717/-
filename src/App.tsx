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
  Clock,
  Building,
  Smile
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
      cta: "预约科室业务提升",
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
    <section className="relative w-[1920px] h-[1080px] pt-[72px] bg-white overflow-hidden mx-auto shrink-0 flex flex-col justify-center">
      <div className="w-full h-full relative">
        <div className="relative w-full h-[950px] overflow-hidden group">
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
              
              <div className="absolute inset-0 z-10 flex items-center w-full">
                <div className="max-w-7xl mx-auto w-full px-6 sm:px-12 lg:px-20 flex items-center justify-between">
                  <div className="w-full lg:w-3/5 text-left">
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
                      className="text-4xl lg:text-5xl font-extrabold text-white mb-6 leading-[1.15]"
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
                        className="bg-white text-brand-700 px-10 py-4 rounded-2xl font-bold text-lg hover:bg-brand-50 hover:scale-105 transition-all shadow-xl flex items-center gap-2 group border-none cursor-pointer"
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
                  <div className="hidden lg:flex w-2/5 items-center justify-end">
                    <motion.div
                      initial={{ x: 50, opacity: 0 }}
                      animate={{ x: current === i ? 0 : 50, opacity: current === i ? 1 : 0 }}
                      transition={{ delay: 0.5, duration: 0.8 }}
                      className="relative w-full max-w-sm aspect-square"
                    >
                      <div className="absolute inset-0 bg-white/10 backdrop-blur-xl rounded-[60px] border border-white/20 rotate-6"></div>
                      <div className="absolute inset-0 bg-white/10 backdrop-blur-xl rounded-[60px] border border-white/20 -rotate-3 overflow-hidden">
                        <img 
                          src={slide.image} 
                          alt="" 
                          className="w-full h-full object-cover opacity-40 mix-blend-overlay"
                          referrerPolicy="no-referrer"
                        />
                        <div className="absolute inset-0 flex items-center justify-center p-12">
                          <div className="text-center">
                            <div className="text-[36px] font-black text-white mb-4 leading-none">
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

                </div>
              </div>
            </motion.div>
          ))}
          
          {/* Indicators */}
          <div className="absolute bottom-10 left-8 lg:left-24 flex gap-3 z-30">
            {slides.map((_, i) => (
              <button
                key={i}
                onClick={() => setCurrent(i)}
                className={`h-1.5 rounded-full transition-all duration-500 border-none cursor-pointer ${current === i ? "w-12 bg-white" : "w-4 bg-white/30 hover:bg-white/50"}`}
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
            预约科室业务提升
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
            预约科室业务提升
          </button>
        </motion.div>
      )}
    </nav>
  );
};

const PartnerCoBuild = () => (
  <section className="py-24 bg-white relative overflow-hidden border-b border-slate-100 text-left">
    <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full h-full -z-10">
      <div className="absolute top-0 right-0 w-96 h-96 bg-brand-50/50 rounded-full blur-3xl"></div>
    </div>
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      <div className="text-center mb-16">
        <h2 className="text-3xl lg:text-4xl font-bold text-slate-900 mb-4">中国肿瘤医院患者增长与AI服务运营团队</h2>
        <p className="text-slate-500 text-lg max-w-3xl mx-auto">我们不只交付内容、系统或工具，而是与医院共同建设一套可运营、可追踪、可复盘的患者增长与服务体系。</p>
      </div>
      
      <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
        {[
          {
            title: "共建患者服务入口",
            desc: "帮助医院建立面向患者的长期服务入口，承接咨询、科普、随访与复诊管理需求。",
            icon: <MessageSquare className="text-brand-600" />
          },
          {
            title: "共建专病知识库",
            desc: "围绕肿瘤患者高频问题，沉淀可持续迭代的专病内容与AI问答基础。",
            icon: <Database className="text-indigo-600" />
          },
          {
            title: "共建患者资产体系",
            desc: "将分散的患者互动沉淀为可识别、可分层、可触达的患者服务资产。",
            icon: <Users className="text-teal-600" />
          },
          {
            title: "共建数据复盘机制",
            desc: "通过运营数据、患者行为与服务结果，持续优化医院患者服务链路。",
            icon: <BarChart3 className="text-orange-600" />
          }
        ].map((item, i) => (
          <div key={i} className="bg-slate-50 p-8 rounded-3xl border border-slate-100 hover:shadow-xl hover:bg-white transition-all group">
            <div className="w-12 h-12 bg-white rounded-2xl flex items-center justify-center mb-6 shadow-sm group-hover:scale-110 transition-transform">
              {item.icon}
            </div>
            <h3 className="text-xl font-bold text-slate-900 mb-4">{item.title}</h3>
            <p className="text-slate-500 text-sm leading-relaxed">{item.desc}</p>
          </div>
        ))}
      </div>
    </div>
  </section>
);

const PainPoints = () => (
  <section className="py-24 bg-brand-50/50 relative overflow-hidden">
    <div className="absolute top-0 left-0 w-full h-full -z-10">
      <div className="absolute top-1/4 left-1/4 w-64 h-64 bg-brand-200/30 rounded-full blur-3xl"></div>
    </div>
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      <div className="text-center mb-16">
        <h2 className="text-3xl lg:text-4xl font-bold text-slate-900 mb-4">肿瘤医院增长难，不只是缺流量</h2>
        <p className="text-slate-500 max-w-3xl mx-auto text-lg leading-relaxed">
          真正的难点，是如何在患者到院前完成理解、判断、信任建立和持续承接。
        </p>
      </div>
      
      <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
        {[
          { title: "决策周期长", desc: "肿瘤患者往往会反复比较医院、专家、治疗路径和成功案例。" },
          { title: "信任门槛高", desc: "患者更依赖权威内容、专业解释和持续沟通。" },
          { title: "咨询承接重", desc: "报告、治疗方案、费用、住院、复诊等问题高度集中，人工压力大。" },
          { title: "转化链路长", desc: "从初次了解到账户沉淀、人工跟进、到院转化，需要持续运营。" },
        ].map((item, i) => (
          <div key={i} className="bg-white p-8 rounded-2xl border border-brand-100 hover:shadow-xl transition-shadow group">
            <div className="w-10 h-10 rounded-full bg-brand-50 text-brand-600 flex items-center justify-center mb-6 font-bold text-sm">
              0{i + 1}
            </div>
            <h3 className="text-lg font-bold text-slate-900 mb-3">{item.title}</h3>
            <p className="text-sm text-slate-500 leading-relaxed">{item.desc}</p>
          </div>
        ))}
      </div>
    </div>
  </section>
);

const CoreValue = () => (
  <section className="py-24 bg-white relative overflow-hidden">
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      <div className="text-center mb-16">
        <h2 className="text-3xl lg:text-4xl font-bold text-slate-900 mb-4">用一体化患者增长体系下好医院这盘棋</h2>
        <p className="text-slate-500 text-lg max-w-3xl mx-auto">构建从内容触达、AI问答、私域承接、人工导诊到数据复盘的完整长决策周期患者增长回路，告别断裂式单点工具。</p>
      </div>
      
      <div className="grid lg:grid-cols-3 gap-12">
        {[
          { 
            title: "专业内容触达", 
            desc: "以患者最关心的核心问题与疾病常识为出发点，输出优质权威的医学科普与就诊建议，赢得初始信任。",
            icon: <Users className="text-brand-600" />
          },
          { 
            title: "AI 24h 智能承接", 
            desc: "智能问答系统随时解答关于检查报告、治疗路径、专家信息等海量问题，深度沉淀患者咨询需求。",
            icon: <MessageSquare className="text-brand-600" />
          },
          { 
            title: "私域与人工无缝转化", 
            desc: "运用专业的标签画像及细致的企业微信运营，实现温暖而专业的深度对话及到院转化。",
            icon: <ShieldCheck className="text-brand-600" />
          },
        ].map((item, i) => (
          <div key={i} className="relative group p-8 bg-slate-50 rounded-3xl border border-slate-100 hover:bg-white hover:shadow-xl transition-all">
            <div className="mb-6 w-16 h-16 bg-brand-50 rounded-2xl flex items-center justify-center group-hover:scale-110 transition-transform">
              {item.icon}
            </div>
            <h3 className="text-xl font-bold text-slate-900 mb-4">{item.title}</h3>
            <p className="text-slate-600 text-sm leading-relaxed">{item.desc}</p>
          </div>
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

const CaseStudies = () => (
  <section className="py-24 relative overflow-hidden bg-slate-50 border-y border-slate-100">
    <div className="absolute bottom-0 right-0 w-96 h-96 bg-brand-100/50 rounded-full blur-3xl -z-10"></div>
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      <div className="text-center mb-16">
        <h2 className="text-3xl lg:text-4xl font-bold text-slate-900 mb-4">不是讲概念，直接看结果</h2>
        <p className="text-slate-500 text-lg max-w-2xl mx-auto">数据来源于脱敏合作案例，已隐去医院名称、具体年份与敏感经营信息。</p>
      </div>
      
      <div className="grid lg:grid-cols-2 gap-8">
        {[
          {
            title: "某肿瘤医院核心业务增长",
            stats: [
              { label: "核心业务收入增幅", value: "70%" },
              { label: "峰值年营收测算", value: "≈3.42亿" },
              { label: "年度业务增量", value: "亿元级" },
              { label: "规模净增", value: "+685" }
            ],
            highlight: "成功通过AI与内容运营组合，新增约相当于一个中型科室的年营收体量。"
          },
          {
            title: "某公立医院口腔科增长案例",
            stats: [
              { label: "同比正增长胜率", value: "100%" },
              { label: "旺季营收增长", value: "1.8倍" },
              { label: "暑期单月历史峰值", value: "≈130万" }
            ],
            highlight: "打破传统运营壁垒，实现100%正增长曲线，达成逆周期赶超。"
          }
        ].map((caseItem, i) => (
          <div key={i} className="bg-white rounded-3xl p-10 border border-brand-100 shadow-sm hover:shadow-md transition-shadow flex flex-col justify-between">
            <div>
              <h3 className="text-2xl font-bold text-slate-900 mb-8">{caseItem.title}</h3>
              <div className="grid grid-cols-2 gap-4 mb-4">
                {caseItem.stats.map((stat, j) => (
                  <div key={j} className="bg-slate-50 p-4 rounded-xl border border-slate-100">
                    <div className="text-xl lg:text-2xl font-bold text-brand-600 mb-1">{stat.value}</div>
                    <div className="text-xs text-slate-500">{stat.label}</div>
                  </div>
                ))}
              </div>
            </div>
            <div className="bg-brand-50 p-4 rounded-2xl text-brand-700 font-medium text-sm border border-brand-100">
              {caseItem.highlight}
            </div>
          </div>
        ))}
      </div>
      
      <div className="mt-12 text-center">
        <p className="text-lg font-medium text-slate-600 italic">
          “ 这些结果，并不是单纯靠买流量带来的，而是患者‘决策路径被重构’的必然结果 ”
        </p>
      </div>
    </div>
  </section>
);

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
              "既做内容，也做承接和转化，不是单点服务",
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
    
    {/* Beautiful Highlight Stat Strip exactly below Carousel (Widescreen 1920x1080 Keynote Slide) */}
    <section className="relative w-[1920px] h-[1080px] flex flex-col items-center justify-center bg-white border-b border-slate-100 overflow-hidden text-center mx-auto shrink-0 select-none">
      {/* Decorative blurry spheres for high quality layout */}
      <div className="absolute -left-32 top-1/2 -translate-y-1/2 w-[500px] h-[550px] bg-brand-50/40 rounded-full blur-[120px] pointer-events-none"></div>
      <div className="absolute -right-32 top-1/2 -translate-y-1/2 w-[500px] h-[550px] bg-indigo-50/40 rounded-full blur-[120px] pointer-events-none"></div>
      
      <div className="max-w-5xl mx-auto px-12 relative z-10 flex flex-col items-center justify-center gap-10">
        <span className="flex h-5 w-5 relative shrink-0">
          <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75"></span>
          <span className="relative inline-flex rounded-full h-5 w-5 bg-emerald-500"></span>
        </span>
        <h2 className="text-7xl lg:text-8xl font-black text-slate-900 tracking-tight leading-none flex flex-col items-center justify-center gap-6">
          <span className="text-3xl font-black tracking-[0.2em] text-slate-400 uppercase font-mono">YUAN TOU MEDICAL METRICS // 数字见证硬核疗效</span>
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-brand-600 via-indigo-600 to-indigo-700 font-extrabold font-sans text-9xl lg:text-[11rem] leading-none my-6 select-text">
            14万+
          </span>
          <span className="text-5xl font-black text-slate-800">已贴心随诊陪伴的中国肿瘤人群</span>
        </h2>
        <p className="text-slate-500 text-xl font-semibold max-w-3xl leading-relaxed mt-6">
          筹算严密，源于各大知名专科医疗集团与地方公卫慢病及肿瘤精细随防护航体系的长期脱敏运营深厚沉淀，以最硬核的产品技术与专业科普构建医患长周期强健信任纽带。
        </p>
      </div>
    </section>

    <SolutionsPage />
    <CasesPage />
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
          <h2 className="text-3xl lg:text-4xl font-bold mb-6 text-white">先对你们医院的专科增长链路做一次诊断，再做决定</h2>
          <p className="text-brand-100 text-lg">我们将免费为您提供初始的肿瘤专科患者增长诊断方案与AI患者运营服务演示。</p>
        </div>
        <div className="flex flex-wrap gap-4 shrink-0">
          <button 
            onClick={() => onAction('contact')}
            className="bg-white text-brand-600 px-8 py-4 rounded-xl font-bold text-lg hover:bg-brand-100 transition-all shadow-md"
          >
            预约科室业务提升
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
            <li><button onClick={() => onAction('products')} className="hover:text-brand-600 transition-colors">患者管理工具</button></li>
            <li><button onClick={() => onAction('products')} className="hover:text-brand-600 transition-colors">数据中台能力</button></li>
          </ul>
        </div>
        
        <div>
          <h4 className="font-bold mb-6 text-slate-900">解决方案</h4>
          <ul className="space-y-4 text-slate-500 text-sm">
            <li><button onClick={() => onAction('solutions')} className="hover:text-brand-600 transition-colors">肿瘤专科增长方案</button></li>
            <li><button onClick={() => onAction('solutions')} className="hover:text-brand-600 transition-colors">血液科患者增长体系</button></li>
            <li><button onClick={() => onAction('solutions')} className="hover:text-brand-600 transition-colors">专科患者运营入口</button></li>
            <li><button onClick={() => onAction('solutions')} className="hover:text-brand-600 transition-colors">数据追踪复盘机制</button></li>
          </ul>
        </div>
        
        <div>
          <h4 className="font-bold mb-6 text-slate-900">联系我们</h4>
          <ul className="space-y-4 text-slate-500 text-sm">
            <li className="flex items-center gap-3"><Phone size={16} className="text-brand-600" /> 400-820-2026</li>
            <li className="flex items-center gap-3"><Mail size={16} className="text-brand-600" /> partner@yuantou.tech</li>
            <li className="flex items-center gap-3"><MapPin size={16} className="text-brand-600" /> 上海市徐汇区万科中心</li>
          </ul>
        </div>
      </div>
      <div className="border-t border-slate-200 pt-8 flex flex-col md:flex-row justify-between items-center gap-4 text-slate-500 text-sm">
        <p>© {new Date().getFullYear()} 源头科技. All rights reserved.</p>
        <p>沪ICP备2021000000号-1</p>
      </div>
    </div>
  </footer>
);

const SolutionsPage = () => (
  <motion.div 
    initial={{ opacity: 0 }} 
    animate={{ opacity: 1 }} 
    className="bg-[#f4f7fc] text-slate-800 min-h-screen text-left animate-fade-in"
  >
    {/* Page Cover / Master Intro Slide */}
    <section className="relative w-[1920px] h-[1080px] flex items-center justify-center overflow-hidden bg-gradient-to-b from-white to-[#f4f7fc] mx-auto shrink-0 border-b border-slate-100">
      <div className="absolute inset-0 z-0">
        <img 
          src="https://picsum.photos/seed/solutions-hero/1920/1080" 
          alt="" 
          className="w-full h-full object-cover opacity-5 filter contrast-125"
          referrerPolicy="no-referrer"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-white/20 via-[#f4f7fc]/95 to-[#f4f7fc]"></div>
        {/* Glow Spheres */}
        <div className="absolute -top-40 -left-40 w-96 h-96 bg-brand-500/10 rounded-full blur-[120px] pointer-events-none"></div>
        <div className="absolute top-1/2 right-10 w-90 h-90 bg-indigo-500/10 rounded-full blur-[110px] pointer-events-none"></div>
      </div>
      
      <div className="max-w-7xl mx-auto relative z-10 text-center px-4">
        <motion.div 
          initial={{ y: 20, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.6 }}
          className="inline-flex items-center gap-2 bg-gradient-to-r from-brand-50 to-indigo-50 text-brand-750 border border-brand-200 px-6 py-2 rounded-full text-xs font-black uppercase tracking-widest mb-8 shadow-sm"
        >
          <Sparkles size={14} className="text-brand-500 animate-pulse" />
          YUANYUAN SOLUTIONS // 数字化增长与服务解决方案
        </motion.div>
        
        <motion.h1 
          initial={{ y: 30, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.8, delay: 0.1 }}
          className="text-5xl lg:text-7xl font-black text-slate-950 mb-8 tracking-tight leading-[1.1] max-w-5xl mx-auto text-center"
        >
          肿瘤与高壁垒专科的<br />
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-brand-600 via-indigo-600 to-teal-600">
            数字化增长与服务闭环
          </span>
        </motion.h1>
        
        <motion.div 
          initial={{ y: 30, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="w-24 h-1 bg-gradient-to-r from-brand-500 to-indigo-500 mx-auto mb-8 rounded-full"
        />
        
        <motion.p 
          initial={{ y: 30, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.8, delay: 0.3 }}
          className="text-slate-600 text-lg lg:text-xl max-w-3xl mx-auto leading-relaxed font-semibold"
        >
          打破传统单点买量的枷锁，建立从公域患者触达、AI高频问答、合规伴随管理到多学科专家会诊协作的生命级服务大版图。
        </motion.p>
      </div>
      
      <div className="absolute bottom-10 left-1/2 -translate-x-1/2 text-center text-xs tracking-widest text-slate-400 font-mono animate-bounce">
        SCROLL TO VIEW KEYNOTES ↓
      </div>
    </section>

    {/* Section: What We Sell (我们卖的是什么) */}
    <section className="relative w-[1920px] h-[1080px] flex flex-col justify-center bg-white border-b border-slate-100 overflow-hidden text-left mx-auto shrink-0 p-20">
      <div className="absolute top-0 right-0 w-80 h-80 bg-brand-50/40 rounded-full blur-3xl pointer-events-none -z-10"></div>
      <div className="absolute bottom-0 left-0 w-80 h-80 bg-indigo-50/40 rounded-full blur-3xl pointer-events-none -z-10"></div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full">
        <div className="mb-16 border-l-[6px] border-brand-500 pl-6 lg:pl-10">
          <span className="text-zinc-400 font-extrabold text-xs uppercase tracking-widest block mb-4 font-mono">
            PORTFOLIO OFFERINGS // 我们卖的是什么
          </span>
          <h2 className="text-4xl lg:text-5xl font-black text-slate-900 mb-6 tracking-tight leading-tight flex items-center gap-3 flex-wrap">
            我们卖的是什么
            <span className="text-brand-500 flex items-center ml-2 tracking-tighter shrink-0 select-none">
              <ChevronRight size={28} className="-mr-4 opacity-40 animate-pulse" />
              <ChevronRight size={28} className="-mr-4 opacity-70" />
              <ChevronRight size={28} className="opacity-100" />
            </span>
          </h2>
          <p className="text-slate-600 text-base lg:text-lg max-w-5xl font-semibold leading-relaxed">
            我们不止提供高灵敏度的智能软硬件，更提供一整套温心帮患者释疑、给科室构建患者信任与可持续回院增长的<strong className="text-brand-600 font-black">“临床特色运营服务机制”</strong>。
          </p>
        </div>

        {/* 3-Column Offerings Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          
          {/* Card 1: 软件系统 */}
          <div className="bg-slate-50 border border-slate-150 rounded-[32px] p-8 flex flex-col justify-between transition-all duration-300 hover:border-brand-500 hover:shadow-xl hover:shadow-brand-500/5 min-h-[660px] group">
            <div>
              {/* Pill Category Badge */}
              <div className="inline-flex items-center gap-2 bg-brand-600 text-white px-5 py-2 rounded-full text-xs font-black uppercase tracking-widest mb-6 shadow-md shadow-brand-500/10">
                <span className="w-2 h-2 bg-green-300 rounded-full animate-ping shrink-0"></span>
                软件系统
              </div>
              <p className="text-xs text-brand-600 font-black mb-4">真正能懂大白话、深夜随时秒回应的暖心软件</p>

              {/* Feature Points */}
              <ul className="space-y-4 text-left my-6">
                {[
                  { title: "微信随时答", desc: "扫个码拉进群或单独聊！深夜里患者在家里最惊惶无助时，能随时搜到本院名医的权威大白话科普解答，不恐慌了，挂号自然首选你们科。" },
                  { title: "智慧就诊咨询", desc: "AI在诊前和患者深度沟通。通过温暖问答帮患者梳理就诊方向与特需需求，精准筛选并对接需要做大手术的高价值患者。" },
                  { title: "下沉随时答", desc: "在病房和诊区扫扫床头卡。患者等候放化疗或住院期间，随时查、随时懂，不占用护士时间，患者家属也跟着踏实放心。" },
                  { title: "增长看板监控", desc: "来了多少人、咨询了哪些高频词、科系ROI增长曲线，后台完全公开透明，在一张大屏里给主任理得清清楚楚。" }
                ].map((item, i) => (
                  <li key={i} className="flex gap-3">
                    <CheckCircle2 size={18} className="text-brand-500 mt-1 shrink-0" />
                    <div>
                      <h4 className="font-bold text-slate-900 text-sm leading-snug">{item.title}</h4>
                      <p className="text-xs text-slate-500 leading-snug mt-0.5">{item.desc}</p>
                    </div>
                  </li>
                ))}
              </ul>
            </div>

            {/* Simulated Desktop + Mobile Software Mockup */}
            <div className="mt-8 bg-white border border-slate-200 rounded-2xl p-4 shadow-inner relative overflow-hidden h-52 select-none">
              {/* Browser chrome headers */}
              <div className="flex items-center gap-1.5 mb-1.5 border-b border-slate-100 pb-1.5">
                <span className="w-2 h-2 rounded-full bg-red-400"></span>
                <span className="w-2 h-2 rounded-full bg-amber-400"></span>
                <span className="w-2 h-2 rounded-full bg-emerald-400"></span>
                <span className="text-[9px] font-mono text-slate-350 ml-4 font-bold">yuantou-system.tech</span>
              </div>

              <div className="grid grid-cols-12 gap-2 h-full text-[9px]">
                {/* Simulated Panel sidebar */}
                <div className="col-span-3 border-r border-slate-100 pr-1 space-y-1">
                  <div className="bg-brand-50 text-brand-700 font-bold p-1 rounded scale-95 origin-left">随时答控制台</div>
                  <div className="p-1 rounded text-slate-400 scale-90 origin-left">检验科普</div>
                  <div className="p-1 rounded text-slate-400 scale-90 origin-left">病友随护</div>
                  <div className="p-1 rounded text-slate-400 scale-90 origin-left">数据看板</div>
                </div>

                {/* Simulated Chat Interface */}
                <div className="col-span-9 pl-1 flex flex-col justify-between h-[80%]">
                  <div className="space-y-1 overflow-y-auto pr-1">
                    <div className="bg-slate-100 text-slate-700 p-1 rounded-lg rounded-tl-none max-w-[90%] font-semibold scale-90 origin-left">
                      患者A：打完放疗第一阶段后很虚弱，可以吃高蛋白食物吗？
                    </div>
                    <div className="bg-brand-500 text-white p-1 rounded-lg rounded-tr-none max-w-[95%] scale-90 origin-right ml-auto text-[8px] leading-relaxed">
                      随时答白大夫助手：您好！可以的。化疗期急需补充足量优质蛋白。推荐清蒸鱼、鸡蛋羹、去皮鸡肉等...
                    </div>
                  </div>
                  <div className="border-t border-slate-100 pt-1 flex justify-between items-center text-[7px] text-slate-300">
                    <span>临床级安全防线机制保护中</span>
                    <span className="bg-emerald-500 text-white px-1 rounded-full font-bold scale-90 shrink-0">运行正常</span>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Card 2: 硬件终端 */}
          <div className="bg-slate-50 border border-slate-150 rounded-[32px] p-8 flex flex-col justify-between transition-all duration-300 hover:border-blue-500 hover:shadow-xl hover:shadow-blue-500/5 min-h-[660px] group">
            <div>
              {/* Pill Category Badge */}
              <div className="inline-flex items-center gap-2 bg-gradient-to-r from-blue-600 to-indigo-600 text-white px-5 py-2 rounded-full text-xs font-black uppercase tracking-widest mb-6 shadow-md shadow-blue-500/10">
                <span className="w-2 h-2 bg-sky-300 rounded-full animate-ping shrink-0"></span>
                硬件终端
              </div>
              <p className="text-xs text-indigo-600 font-black mb-4">挪到候诊区、搬进社区街道的数字触屏，老人一摸就会</p>

              {/* Feature Points */}
              <ul className="space-y-4 text-left my-6">
                {[
                  { title: "院内宣教服务屏", desc: "大号立式超清液晶触碰屏。直接挪到放化疗登记等候处、门诊前厅。字超级大、操作极简，老人点一点就能查看化解疑问，还能点按直连服务助理。" },
                  { title: "社区基层随时屏", desc: "桌面触摸交互式平板终端。免费连入并借给辖区基层的卫生中心、社区养老站，把你们本院专家的数字分身推到全辖区老百姓的眼皮子底下。" },
                  { title: "多功能看板大屏", desc: "挂在MDT联合会诊中心或专家科室走廊。实时展现今天哪位患者需要精准打卡随访、化验单科普解答，哪里的流量又在蓄积，一清二楚。" }
                ].map((item, i) => (
                  <li key={i} className="flex gap-3">
                    <CheckCircle2 size={18} className="text-blue-500 mt-1 shrink-0" />
                    <div>
                      <h4 className="font-bold text-slate-900 text-sm leading-snug">{item.title}</h4>
                      <p className="text-xs text-slate-500 leading-snug mt-0.5">{item.desc}</p>
                    </div>
                  </li>
                ))}
              </ul>
            </div>

            {/* Beautiful Smart Kiosk simulated with CSS/Tailwind */}
            <div className="mt-8 flex justify-center items-center h-52 bg-slate-100 rounded-2xl p-4 shadow-inner relative overflow-hidden select-none">
              {/* Miniature Standing Kiosk Mockup */}
              <div className="w-14 h-44 bg-zinc-700 rounded-2xl border-2 border-zinc-500 shadow-lg p-1.5 flex flex-col justify-between relative">
                {/* Camera / Indicator */}
                <div className="flex justify-center mb-0.5">
                  <span className="w-1 h-1 rounded-full bg-blue-300"></span>
                </div>
                {/* UI Display */}
                <div className="w-full h-32 bg-gradient-to-b from-blue-600 to-indigo-800 rounded-lg p-1 flex flex-col justify-between border border-blue-400/30">
                  <div className="text-[6px] text-white/90 scale-90 text-center font-bold">您好，欢迎使用<br />全天候患者随时答</div>
                  {/* Action buttons inside kiosk */}
                  <div className="space-y-0.5 my-1">
                    <div className="bg-white/10 text-white text-[5px] scale-95 py-0.5 rounded text-center">专家门诊排班</div>
                    <div className="bg-white/10 text-white text-[5px] scale-95 py-0.5 rounded text-center">报告解读指南</div>
                    <div className="bg-white text-blue-700 text-[5px] scale-95 py-0.5 rounded text-center font-bold">自助科普问诊</div>
                  </div>
                  <div className="text-[4px] text-white/50 text-center scale-90">源头科技共建</div>
                </div>
                {/* Scanner/Sensor area on kiosk */}
                <div className="w-full h-4 bg-zinc-800 rounded-md border border-zinc-650 flex items-center justify-center">
                  <div className="w-3.5 h-1.5 bg-cyan-400/40 animate-pulse rounded-sm"></div>
                </div>
                {/* Floor stand neck */}
                <div className="absolute top-[103%] left-1/2 -translate-x-1/2 w-4 h-5 bg-zinc-600 flex flex-col justify-end">
                  <div className="w-10 h-1 bg-zinc-500 rounded mx-auto translate-y-1"></div>
                </div>
              </div>

              {/* Smaller Desktop Assistant Terminal beside */}
              <div className="w-16 h-20 bg-slate-300 rounded-lg border border-slate-400 shadow p-1 flex flex-col justify-between absolute right-8 bottom-6 rotate-3">
                <div className="w-full h-12 bg-indigo-900 rounded flex flex-col justify-between p-0.5">
                  <span className="text-[5px] text-white/40 scale-75 origin-left">基层随时屏</span>
                  <div className="bg-white/10 h-6 rounded flex items-center justify-center">
                    <span className="text-[6px] text-white font-bold scale-95">7×24h 连线</span>
                  </div>
                </div>
                <div className="w-full h-1.5 bg-slate-400 rounded-sm"></div>
                <div className="w-6 h-3 bg-slate-400 absolute top-full left-1/2 -translate-x-1/2 rounded-b"></div>
              </div>

              {/* Hospital Big Data screen floating above */}
              <div className="w-24 h-16 bg-zinc-900 rounded-lg border border-zinc-700 shadow p-1 flex flex-col justify-between absolute left-6 top-4 scale-95 border-b-2">
                <div className="flex justify-between items-center text-[4px] scale-75 text-zinc-400 tracking-tighter">
                  <span>多科就医数据流向大屏</span>
                  <span className="text-green-400 font-bold">● LIVE</span>
                </div>
                <div className="grid grid-cols-3 gap-0.5 my-1">
                  <div className="bg-zinc-800 h-6 rounded flex items-center justify-center">
                    <div className="text-[5px] text-sky-400 font-bold scale-75">125k</div>
                  </div>
                  <div className="bg-zinc-800 h-6 rounded flex items-center justify-center">
                    <div className="text-[5px] text-violet-400 font-bold scale-75">12.5k</div>
                  </div>
                  <div className="bg-zinc-800 h-6 rounded flex items-center justify-center">
                    <div className="text-[5px] text-emerald-400 font-bold scale-75">328</div>
                  </div>
                </div>
                <div className="bg-blue-500/10 h-2 rounded flex items-center px-1">
                  <div className="w-full bg-blue-500/20 h-0.5 rounded-full overflow-hidden">
                    <div className="bg-blue-400 h-full w-[70%]"></div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Card 3: 特色运营 */}
          <div className="bg-slate-50 border border-slate-150 rounded-[32px] p-8 flex flex-col justify-between transition-all duration-300 hover:border-violet-500 hover:shadow-xl hover:shadow-violet-500/5 min-h-[660px] group">
            <div>
              {/* Pill Category Badge */}
              <div className="inline-flex items-center gap-2 bg-gradient-to-r from-violet-600 to-indigo-600 text-white px-5 py-2 rounded-full text-xs font-black uppercase tracking-widest mb-6 shadow-md shadow-violet-500/10">
                <span className="w-2 h-2 bg-violet-300 rounded-full animate-ping shrink-0"></span>
                特色运营
              </div>
              <p className="text-xs text-violet-600 font-black mb-4">不当甩手掌柜！我们派“临床主管助理”帮你做全套脏活累活</p>

              {/* Feature Points */}
              <ul className="space-y-4 text-left my-6">
                {[
                  { title: "真人助理客服盯守", desc: "软件和机器人上线不够，我们为你配备了高素质的运营助理团队。全天候盯守，一旦AI解答完发现是高意向想做高精诊治特需的患者，真人客服秒速连线服务，防止任何一个病人流失。" },
                  { title: "学科科普IP包装营", desc: "帮医院建立吸粉利器。不讲枯燥晦涩的学术名词，而是把专家、教授的权威知识编译成能和病友“知冷知热对话”的大白话说白手册与数字分身，患者听得懂自然就愿意听你的。" },
                  { title: "病友推荐线下物料", desc: "写好大字版的‘放化疗白化科普手册’并帮助印刷排版出街；组织策划社区大健康科普讲堂、病友暖冬卡片。裂变玩法、线下物料设计和出街推广方案我们全包。" },
                  { title: "患者提问数据不懈精进", desc: "梳理几千条甚至万余条真实患者最挂心、最生硬的提问。我们的工程团队每天都在校正问答库、扩充数据库，堵住每个极易由于没答好而让患者不信任的漏风墙洞。" }
                ].map((item, i) => (
                  <li key={i} className="flex gap-3">
                    <CheckCircle2 size={18} className="text-violet-500 mt-1 shrink-0" />
                    <div>
                      <h4 className="font-bold text-slate-900 text-sm leading-snug">{item.title}</h4>
                      <p className="text-xs text-slate-500 leading-snug mt-0.5">{item.desc}</p>
                    </div>
                  </li>
                ))}
              </ul>
            </div>

            {/* Interactive Operations Coordinator Panel */}
            <div className="mt-8 bg-white border border-slate-200 rounded-2xl p-4 shadow-inner relative overflow-hidden h-52 select-none flex flex-col justify-between">
              <div className="flex justify-between items-center border-b border-slate-100 pb-1.5">
                <span className="text-[9px] font-bold text-slate-900">特色运营服务中心状态</span>
                <span className="text-[8px] text-brand-600 font-extrabold bg-brand-50 px-1.5 py-0.5 rounded-full shrink-0">满意度: 98.6%</span>
              </div>

              {/* Simulated Shifts */}
              <div className="space-y-1.5 text-[9px] my-1.5">
                <div className="flex items-center gap-1.5 bg-slate-50 p-1.5 rounded-xl">
                  <div className="w-5 h-5 rounded-full bg-violet-100 text-violet-700 flex items-center justify-center font-bold text-[8px] shrink-0">李</div>
                  <div className="flex-1 min-w-0">
                    <div className="flex justify-between font-bold text-slate-800 text-[8px]">
                      <span className="truncate">李晓晴 (特聘运营主协调)</span>
                      <span className="text-emerald-500 shrink-0">正在盯守接诊中</span>
                    </div>
                    <div className="text-[7px] text-slate-400 truncate">承运：血液病/肿瘤特色科系出院随访群</div>
                  </div>
                </div>

                <div className="flex items-center gap-1.5 bg-slate-50 p-1.5 rounded-xl">
                  <div className="w-5 h-5 rounded-full bg-indigo-100 text-indigo-700 flex items-center justify-center font-bold text-[8px] shrink-0">张</div>
                  <div className="flex-1 min-w-0">
                    <div className="flex justify-between font-bold text-slate-800 text-[8px]">
                      <span className="truncate">张建医生数字化分身</span>
                      <span className="text-blue-500 shrink-0">7x24h 智能看护</span>
                    </div>
                    <div className="text-[7px] text-slate-400 truncate">承运：微信科普库自动拦截流量漏斗</div>
                  </div>
                </div>
              </div>

              {/* metrics */}
              <div className="grid grid-cols-3 gap-1 text-center text-[7px] border-t border-slate-100 pt-1.5 font-bold text-slate-400">
                <div>
                  <div className="text-[9px] text-violet-600 font-extrabold font-mono leading-none">1.75倍</div>
                  <div className="scale-90 origin-top">患群粘性提升</div>
                </div>
                <div>
                  <div className="text-[9px] text-violet-600 font-extrabold font-mono leading-none">&lt; 12秒</div>
                  <div className="scale-90 origin-top">真人响应时间</div>
                </div>
                <div>
                  <div className="text-[9px] text-violet-600 font-extrabold font-mono leading-none">+149%</div>
                  <div className="scale-90 origin-top">放化疗科引流</div>
                </div>
              </div>
            </div>
          </div>

        </div>
      </div>
    </section>

    {/* Section: How Service Generates Growth (服务如何形成增长) */}
    <section className="relative w-[1920px] h-[1080px] flex flex-col justify-center bg-gradient-to-b from-white to-[#f4f7fc] border-b border-slate-100 overflow-hidden text-left mx-auto shrink-0 p-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full">
        
        {/* Header Block matching the standard */}
        <div className="mb-20 max-w-5xl border-l-[6px] border-brand-500 pl-6 lg:pl-10 text-left">
          <span className="text-zinc-400 font-extrabold text-xs uppercase tracking-widest block mb-4 font-mono">
            GROWTH PIPELINE & OPERATIONS // 服务如何形成增长
          </span>
          <h2 className="text-4xl lg:text-5xl font-black text-slate-900 mb-6 tracking-tight leading-tight flex items-center gap-3 flex-wrap">
            服务如何形成增长
            <span className="text-brand-500 flex items-center ml-2 tracking-tighter shrink-0 select-none">
              <ChevronRight size={28} className="-mr-4 opacity-40 animate-pulse" />
              <ChevronRight size={28} className="-mr-4 opacity-70" />
              <ChevronRight size={28} className="opacity-100" />
            </span>
          </h2>
          <p className="text-slate-650 text-base lg:text-lg max-w-4xl font-semibold text-slate-605 leading-relaxed">
            我们的增长秘诀，就是靠这套“七步温暖关照随护闭环”：
          </p>
        </div>

        {/* 7-Step Horizontal Connected Pipeline */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-7 gap-6 lg:gap-3 relative items-stretch mb-16">
          {[
            {
              step: "01",
              title: "1. 遇事找AI",
              desc: "患者深夜惊惶发问，AI医生化身深夜点灯人，极其温暖大白话释疑，打住患者的第一重焦躁恐慌。",
              icon: <MessageSquare size={20} className="text-white" />,
              color: "bg-blue-600 shadow-blue-500/20"
            },
            {
              step: "02",
              title: "2. 摸清真实病情",
              desc: "AI像个从业二三十年的资深暖心护士一样问诊、归纳病情，无形中给患者打深度精细化标签。",
              icon: <Brain size={20} className="text-white" />,
              color: "bg-indigo-600 shadow-indigo-500/20"
            },
            {
              step: "03",
              title: "3. 精准推荐专家",
              desc: "根据病情精细度识别，自动推荐最对路子的放化、微创专家，不推垃圾硬广，免得家属走冤枉路。",
              icon: <Sparkles size={20} className="text-white" />,
              color: "bg-violet-600 shadow-violet-500/20"
            },
            {
              step: "04",
              title: "4. 真诚做深信任",
              desc: "给患者推送‘科室白话版放疗注意事项手册’。真诚、专业、不套路，让家长和患者觉得这家名院真是暖心！",
              icon: <ShieldCheck size={20} className="text-white" />,
              color: "bg-teal-600 shadow-teal-500/20"
            },
            {
              step: "05",
              title: "5. 一键到院挂号",
              desc: "提供一键直连绿色快速就医卡片，顺利预约多学科专家联合会诊。顺承无摩擦，患者和家属自然顺利到院看上病。",
              icon: <Heart size={20} className="text-white" />,
              color: "bg-rose-500 shadow-rose-500/20"
            },
            {
              step: "06",
              title: "6. 数据直接能看",
              desc: "门诊量提升了多少、预约ROI效果好不好、关键词点击漏斗如何，后台一秒自动出图表，数字说话绝不灌水。",
              icon: <BarChart3 size={20} className="text-white" />,
              color: "bg-emerald-600 shadow-emerald-500/20"
            },
            {
              step: "07",
              title: "7. 离院细致回访",
              desc: "患者出院可不算完。继续推送定期跟进、随诊打卡。体验过这种五星级暖意的人，回院复查粘性极高，更自发一拉十给你带病友！",
              icon: <TrendingUp size={20} className="text-white" />,
              color: "bg-brand-600 shadow-brand-500/20"
            }
          ].map((node, i) => (
            <div key={i} className="flex flex-col items-center relative group w-full text-center">
              
              {/* Outer Card wrapper */}
              <div className="bg-white border border-slate-100 rounded-3xl p-6 shadow-sm hover:shadow-md hover:border-slate-300 transition-all duration-300 flex flex-col items-center justify-between h-[270px] w-full text-center relative">
                
                {/* Step Index Circle */}
                <div className="absolute top-4 left-4 text-xs font-black font-mono text-slate-300">
                  {node.step}
                </div>

                {/* Glowing Colored Icon Plate */}
                <div className={`w-12 h-12 rounded-2xl ${node.color} flex items-center justify-center shadow-lg transition-transform duration-300 group-hover:scale-110 mt-1 shrink-0`}>
                  {node.icon}
                </div>

                <div className="mt-4 flex-1 flex flex-col justify-center">
                  <h4 className="font-extrabold text-slate-900 text-sm mb-1.5 leading-tight">{node.title}</h4>
                  <p className="text-[10px] text-slate-500 leading-relaxed font-normal text-slate-500">{node.desc}</p>
                </div>
              </div>

              {/* Linear connection to show flow (shown on desktop only) */}
              {i < 6 && (
                <div className="hidden lg:flex items-center justify-center absolute top-24 left-[96%] w-[11%] z-20 pointer-events-none select-none text-brand-300">
                  <span className="font-bold flex tracking-tighter leading-none text-slate-300 animate-pulse">▶</span>
                </div>
              )}
            </div>
          ))}
        </div>

        {/* Dynamic Blue Banner Button */}
        <div className="mt-12 text-center w-full">
          <div className="inline-flex justify-center items-center bg-gradient-to-r from-brand-650 via-brand-600 to-indigo-700 text-white rounded-full py-4 px-10 text-sm md:text-base lg:text-lg font-black tracking-wide leading-none shadow-xl shadow-brand-600/10 hover:shadow-brand-600/25 transition-all duration-300 cursor-default">
            不是冷冰冰的单点工具，而是一整套帮你和病友拉近距离、持续带来源源不断新希望的温暖增长系统。
          </div>
        </div>

      </div>
    </section>

    {/* Slide 1: Core Pain Points (Keynote Theme 1) */}
    <section className="relative w-[1920px] h-[1080px] flex flex-col justify-center border-b border-blue-50 bg-[#eff5fc] overflow-hidden mx-auto shrink-0 p-20">
      <div className="absolute inset-0 z-0">
        <img 
          src="https://picsum.photos/seed/painpoints-dark/1600/900" 
          alt="" 
          className="w-full h-full object-cover opacity-5 filter contrast-125 brightness-110 grayscale"
          referrerPolicy="no-referrer"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-[#eff5fc]/90 via-[#eff5fc] to-[#eff5fc]"></div>
      </div>
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 w-full">
        {/* Golden Quote Block */}
        <div className="mb-20 max-w-5xl border-l-[6px] border-amber-500 pl-6 lg:pl-10 text-left">
          <span className="text-amber-600 font-extrabold text-xs uppercase tracking-widest block mb-4 font-mono">01 // THE BIG PAIN // 增长痛点</span>
          <h2 className="text-4xl lg:text-6xl font-black text-slate-900 mb-6 tracking-tight leading-[1.12]">
            患者就诊决策在到院前早已结束，<br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-amber-600 to-orange-650 font-black">
              常规硬印广告及低效买量已经彻底失效。
            </span>
          </h2>
          <p className="text-slate-600 text-base lg:text-lg max-w-4xl leading-relaxed font-semibold">
            重疾/肿瘤患者由于性命攸关，做就医选择极度慎重、心里防备重。他们彻底厌恶了网络满天飞的生硬推销广告，只在乎高度专业的诊断依据与延续性的贴身温暖陪伴。
          </p>
        </div>

        {/* 4 Core Points Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {[
            {
              title: "患者决策周期漫长沉重",
              desc: "面对重病摧残，患者需要建立极致的确定性，他们会反复对调各家病例方案、治疗周期。如果在到院前的这一两个月没有温情承接，极易在中途流失错失治疗时机。",
              icon: <Clock size={28} className="text-amber-500" />
            },
            {
              title: "信任屏障极厚无法扎根",
              desc: "网上各种伪科普鱼龙混杂，重症患者及家属长期处于怀疑焦虑防守状态。普通的单向生硬通知根本无法打破那堵坚不可摧的怀疑围墙。",
              icon: <Activity size={28} className="text-rose-500" />
            },
            {
              title: "科室日常高频咨询消耗巨大",
              desc: "治疗前怎么准备、看不懂化验单报告单、吃药要避开啥、手术排班等大量重复且繁琐的家长里短提问，耗尽了科室医生和护士的精力，无法全天24小时贴身盯着。",
              icon: <Brain size={28} className="text-blue-500" />
            },
            {
              title: "出院关怀断炊流失惨痛",
              desc: "以往患者出院了，科室关怀就彻底断炊了。随访电话十个九拒，没答疑不暖心，久而久之致使回院复查的失访率和患者流失率成了无法解决的心病。",
              icon: <Target size={28} className="text-indigo-500" />
            }
          ].map((item, i) => (
            <div 
              key={i} 
              className="group relative bg-white border border-blue-100/50 rounded-3xl p-8 hover:bg-white hover:border-amber-400 hover:shadow-2xl hover:shadow-sky-900/5 transition-all duration-300"
            >
              <div className="w-14 h-14 rounded-2xl bg-[#f0f6fc] border border-blue-100/80 flex items-center justify-center mb-8 group-hover:scale-105 transition-transform">
                {item.icon}
              </div>
              <h3 className="text-xl font-bold text-slate-900 mb-4">{item.title}</h3>
              <p className="text-sm text-slate-500 leading-relaxed font-normal">{item.desc}</p>
              <div className="absolute top-6 right-8 text-blue-100 font-black text-3xl font-mono select-none">0{i+1}</div>
            </div>
          ))}
        </div>
      </div>
    </section>

    {/* Slide 2: Path Reconstruction (Keynote Theme 2) */}
    <section className="relative w-[1920px] h-[1080px] flex flex-col justify-center border-b border-blue-100/50 bg-[#f4f7fc] overflow-hidden mx-auto shrink-0 p-20">
      <div className="absolute inset-0 z-0">
        <img 
          src="https://picsum.photos/seed/pathway-dark/1600/900" 
          alt="" 
          className="w-full h-full object-cover opacity-5 filter grayscale contrast-75 brightness-110"
          referrerPolicy="no-referrer"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-[#f4f7fc]/90 via-[#f4f7fc] to-[#f4f7fc]"></div>
      </div>
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 w-full">
        {/* Golden Quote Block */}
        <div className="mb-20 max-w-5xl border-l-[6px] border-brand-500 pl-6 lg:pl-10 text-left">
          <span className="text-brand-600 font-extrabold text-xs uppercase tracking-widest block mb-4 font-mono">02 // PATH RECONSTRUCT // 模式颠覆</span>
          <h2 className="text-4xl lg:text-6xl font-black text-slate-900 mb-6 tracking-tight leading-[1.12]">
            从断章死板的买量买广告，<br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-brand-600 via-indigo-600 to-sky-600 font-black">
              重构成一整套病患赞不绝口、知冷知热的就医陪伴。
            </span>
          </h2>
          <p className="text-slate-650 text-base lg:text-lg max-w-4xl leading-relaxed font-semibold">
            把患者与科室名医接触的每一个微小瞬间深度数字化，全天候全方位真诚打消家属顾虑，建立起牢不可破的终身信赖纽带。
          </p>
        </div>

        {/* 7 step process presentation slide */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-7 gap-4">
          {[
            { title: "前置大白话引流", desc: "把高深的专科学术内容翻译成有温度的科普，在各大平台悄然播撒第一信赖火种。" },
            { title: "微信随时秒答", desc: "微信随时答闪速响应，不让患者独自面对深夜或周末突发的对检验单/用药疑问的惊慌。" },
            { title: "了解患者急需", desc: "在亲切的一对一问答里智能理顺病情、了解病程，精细化给患者分流贴上关键标签。" },
            { title: "数字医生解惑", desc: "AI大脑给出兼具高度临床规制和人情关怀的名医级医学指导，辅以贴心的MDT会诊说明。" },
            { title: "直连专家门诊", desc: "一键调取科室专家门诊，顺理成章缩短患者求医挂号通路，免除中途折腾流失。" },
            { title: "出院暖心打卡", desc: "离院自动开启细水长流的院外关怀和一秒打卡。用心随访，大幅回拉科室的终身复诊率。" },
            { title: "数据分析懂人心", desc: "精确梳理最近患群对什么药好奇、对放化疗有什么疑问。根据高频疑惑不断精准填充名医知识库。" }
          ].map((item, i) => (
            <div 
              key={i} 
              className="bg-white border border-slate-105 p-6 rounded-2xl flex flex-col justify-between h-64 hover:border-brand-500 hover:shadow-xl hover:shadow-brand-900/5 transition-all duration-350 relative group"
            >
              <div>
                <div className="text-brand-600 font-black text-xs font-mono mb-4">STEP 0{i + 1}</div>
                <h3 className="text-base font-bold text-slate-900 mb-3 group-hover:text-brand-700 transition-colors leading-tight">{item.title}</h3>
              </div>
              <p className="text-xs text-slate-505 leading-relaxed font-normal">{item.desc}</p>
              <div className="absolute bottom-4 right-4 text-brand-300 group-hover:text-brand-500 font-bold transition-all group-hover:translate-x-1 select-none">→</div>
            </div>
          ))}
        </div>
      </div>
    </section>

    {/* Slide 3: Target Scenarios (Keynote Theme 3) */}
    <section className="relative w-[1920px] h-[1080px] flex flex-col justify-center bg-[#eff5fc] overflow-hidden mx-auto shrink-0 p-20">
      <div className="absolute inset-0 z-0">
        <img 
          src="https://picsum.photos/seed/scenarios-dark/1600/900" 
          alt="" 
          className="w-full h-full object-cover opacity-5 filter grayscale contrast-75 brightness-110"
          referrerPolicy="no-referrer"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-[#eff5fc]/90 via-[#eff5fc] to-[#eff5fc]"></div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 w-full">
        {/* Golden Quote Block */}
        <div className="mb-20 max-w-5xl border-l-[6px] border-emerald-500 pl-6 lg:pl-10 text-left">
          <span className="text-emerald-600 font-extrabold text-xs uppercase tracking-widest block mb-4 font-mono">03 // CLINICAL SCENARIOS // 落地场景</span>
          <h2 className="text-4xl lg:text-6xl font-black text-slate-900 mb-6 tracking-tight leading-[1.12]">
            专门为长决策周期、极高专业信任壁垒、<br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-emerald-600 to-teal-600 font-black">
              以及对医学严谨度要求极高的重点临床科系而生。
            </span>
          </h2>
          <p className="text-slate-650 text-base lg:text-lg max-w-4xl leading-relaxed font-semibold">
            我们已将最严苛的临床知识库审核盾牌 and 隐私合规安全锁注入系统底层，帮助医院的主力临床科室将学术深度与服务宽度融为一体。
          </p>
        </div>

        {/* 6 targets layout matching presentation standard */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {[
            { 
              name: "肿瘤专科医院 / 大放疗特需科", 
              tag: "全盘重构", 
              desc: "重组以肿瘤外科放化疗、特需综合门诊等高附加值技术科室主导的专家数字人矩阵与温暖服务漏斗。"
            },
            { 
              name: "血液学重点前列科室", 
              tag: "深度画像", 
              desc: "满足白血病、急重淋巴瘤等对高频放化复查周期提醒、极其精细出院标签管理、强人文温度陪伴的科室痛点。"
            },
            { 
              name: "大三甲重点优势临床科室", 
              tag: "科室定制", 
              desc: "强强联合，由源头专家辅助团队协助科系建立包含上千个医学知识的智能AI入口，从高频低效答疑中彻底解放医生年轻劳力。"
            },
            { 
              name: "特色微创与放疗靶向研究院", 
              tag: "专科智答", 
              desc: "7x24小时全盲区快速且权威地解答患者极其渴望弄明白的放疗靶向不良反应、用药禁忌与自我调理技巧。"
            },
            { 
              name: "康复伴随与术后随护监护中心", 
              tag: "长期留存", 
              desc: "把单一随访数据微信打卡和暖心问候，主动唤起患者的品牌强记忆，拉升长期回诊率。"
            },
            { 
              name: "大壁垒、高意向大型专科综合体", 
              tag: "口碑转介绍", 
              desc: "满足产科、生殖辅助、齿科及微创心脑外科等高品质科系极度看重“在到院前就把名医信任立稳、靠温情口碑一传十”的战略选择。"
            }
          ].map((item, i) => (
            <div 
              key={i} 
              className="bg-white border border-slate-150 p-8 rounded-3xl hover:border-emerald-500 hover:shadow-2xl hover:shadow-sky-900/5 transition-all duration-300 flex flex-col justify-between min-h-[180px]"
            >
              <div>
                <div className="flex justify-between items-center mb-6">
                  <span className="text-xs font-black bg-emerald-50 text-emerald-600 border border-emerald-250 px-3 py-1 rounded-full uppercase tracking-wider">
                    {item.tag}
                  </span>
                  <div className="w-1.5 h-1.5 bg-emerald-500 rounded-full animate-pulse"></div>
                </div>
                <h3 className="text-xl font-bold text-slate-900 mb-3">{item.name}</h3>
                <p className="text-sm text-slate-505 leading-relaxed font-normal">{item.desc}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  </motion.div>
);

const ProductsPage = () => (
  <motion.div 
    initial={{ opacity: 0 }} 
    animate={{ opacity: 1 }} 
    className="bg-[#f4f7fc] text-slate-800 min-h-screen text-left"
  >
    {/* Page Header Slide */}
    <section className="relative w-[1920px] h-[1080px] flex items-center justify-center overflow-hidden bg-gradient-to-b from-white to-[#f4f7fc] mx-auto shrink-0 border-b border-slate-100">
      <div className="absolute inset-0 z-0">
        <img 
          src="https://picsum.photos/seed/products-hero/1920/1080" 
          alt="" 
          className="w-full h-full object-cover opacity-5 filter contrast-125"
          referrerPolicy="no-referrer"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-white/20 via-[#f4f7fc]/95 to-[#f4f7fc]"></div>
        {/* Glow Spheres */}
        <div className="absolute top-1/4 left-1/3 w-96 h-96 bg-brand-600/10 rounded-full blur-[130px] pointer-events-none"></div>
      </div>
      
      <div className="max-w-7xl mx-auto px-4 relative z-10 text-center">
        <motion.div 
          initial={{ y: 20, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          className="inline-flex items-center gap-1.5 bg-gradient-to-r from-brand-50 to-indigo-50 text-brand-700 border border-brand-200 px-5 py-2 rounded-full text-xs font-bold uppercase tracking-widest mb-8 shadow-sm"
        >
          <Award size={14} className="text-brand-400" />
          PRODUCT ARSENAL // 全栈AI专科患者运营中台
        </motion.div>
        
        <motion.h1 
          initial={{ y: 30, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ delay: 0.1 }}
          className="text-5xl lg:text-7xl font-black text-slate-950 mb-8 tracking-tight leading-tight"
        >
          五大能力中心，组合驱动增长
        </motion.h1>
        
        <motion.div 
          initial={{ y: 30, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ delay: 0.2 }}
          className="w-24 h-1 bg-gradient-to-r from-brand-500 to-indigo-500 mx-auto mb-8 rounded-full"
        />
        
        <motion.p 
          initial={{ y: 30, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ delay: 0.3 }}
          className="text-slate-650 text-lg lg:text-xl max-w-4xl mx-auto leading-relaxed font-semibold"
        >
          这不仅仅是零落散装的系统插件，而是全方位捆绑、互相咬合推进的五大核心底座，无缝解决每一位肿瘤病患“看到/提问/留存/随诊/复筛”的生硬阻塞难题。
        </motion.p>
      </div>
    </section>

    {/* Product Slide Slices in Full Keynote Slides Presentation Layout */}
    {[
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
        badgeColor: "text-sky-400 bg-sky-500/10 border-sky-500/20",
        gGlow: "from-sky-500/10 to-transparent"
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
          { title: "敏感重大线索极速高亮红预", detail: "发现急重特诊多学科会诊多维度高价值线索，系统后台极警系统并一秒无感知派送专科助理。" }
        ],
        badgeColor: "text-violet-400 bg-violet-500/10 border-violet-500/20",
        gGlow: "from-violet-500/10 to-transparent"
      },
      {
        num: "03",
        name: "AI智能服务中心",
        en: "AI Service Center",
        value: "7×24h 全天候智慧问答，提供“有医学循证的温情交互”",
        bg: "https://picsum.photos/seed/p-ai/1600/900",
        quote: "基于最严密的国内临床大百科及专家团队共识知识库构建，让AI既有高规格的循证精准，又不失暖心的陪伴关爱。",
        features: [
          { title: "科普医学知识安全盾", detail: "依托严格专病共识、医学用药数据库，每一次问答答复均符合循证医学原则，规避医疗逻辑红线。" },
          { title: "极速化验单CT智能高亮解读", detail: "化验数据、血常规数值与PET-CT复杂专业词汇的大白话智能解惑，让家属不再彻夜转换反复百度受惊。" },
          { title: "智能特色科室MDT路线导引", detail: "理不清复杂多学科门诊就医顺序？AI根据出院记录自动推送专病门诊安排，挂号少踩弯路坑。" },
          { title: "人工临床专科专家一秒过渡", detail: "检测触发敏感词或真实红章，服务秒级闪亮警报，后台直接接入人工咨询代表接续对话。" }
        ],
        badgeColor: "text-emerald-400 bg-emerald-500/10 border-emerald-500/20",
        gGlow: "from-emerald-500/10 to-transparent"
      },
      {
        num: "04",
        name: "随访与长期管理中心",
        en: "Follow-up Management Center",
        value: "出院并非服务的结束，而是陪伴的全新起点",
        bg: "https://picsum.photos/seed/p-follow/1600/900",
        quote: "把粗放、死板的院后随访，升级为贯穿患者生活的暖心叮嘱、智能日志与复诊推荐链路，提高延续康复率。",
        features: [
          { title: "主动用药习惯与症状随身记录", detail: "每日关怀打卡叮嘱服药，高低热量记录与多维度不良症状自测打分，极速防范副危特情隐患。" },
          { title: "周期节点推送精准康复养护", detail: "按照周期病期智能定向派单喂养食谱、产护康复心理、术后伤口清洗视频，进行全家贴心关顾指导。" },
          { title: "按期返院筛检邀诊高灵直发", detail: "系统根据放疗疗程计划与患者自持时间，到达复健窗口自动弹出温情到院挂号推荐贴，回流率惊人稳定。" },
          { title: "智能微信延续关爱表直随", detail: "用患者微信内温暖量表答复，告别电话被拒接的悲观遭遇，整体随诊随查成功率相对传统高出3.2倍。" }
        ],
        badgeColor: "text-amber-400 bg-amber-500/10 border-amber-500/20",
        gGlow: "from-amber-500/10 to-transparent"
      },
      {
        num: "05",
        name: "数据智慧决策中心",
        en: "Data Review Center",
        value: "告别感觉，用“全链路数据”赋能运营精进",
        bg: "https://picsum.photos/seed/p-db/1600/900",
        quote: "精细记录患者从点进视频、发起咨询、生成画像到最后线下预约到院的全链路数据，推动科室迈向科学化、数字化管理。",
        features: [
          { title: "全网获患者到院漏斗精确追", detail: "微观呈现引流内容获客点亮、智能体交互深度、微信建交率以及到院率，ROI投产转化曲线尽收眼底。" },
          { title: "患者多言关注热图大对焦", detail: "微观捕获数十万级高频核心提问，洞察患者真正对化疗毒素等极力揪心关注焦点，直接指导院方科普纠偏。" },
          { title: "科系在库随诊生命流透像看", detail: "清晰掌握当前科室、专病已建档忠实患群的长期回访活跃指数、随诊陪伴满意度与区域分布特质。" },
          { title: "高管可视化决策大板周月报", detail: "一键调阅生成多维季度、月度科室数字化增长增长复盘报表，让管理层掌握有据客观的实干进展。" }
        ],
        badgeColor: "text-rose-400 bg-rose-500/10 border-rose-500/20",
        gGlow: "from-rose-500/10 to-transparent"
      }
    ].map((item, idx) => (
      <section 
        key={idx} 
        className="relative w-[1920px] h-[1080px] flex flex-col justify-center border-b border-slate-100/60 overflow-hidden group bg-gradient-to-b from-white to-[#f4f7fc] mx-auto shrink-0 p-20"
      >
        <div className="absolute inset-0 z-0">
          <img 
            src={item.bg} 
            alt="" 
            className="w-full h-full object-cover opacity-5 group-hover:scale-105 transition-transform duration-1000 filter grayscale"
            referrerPolicy="no-referrer"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-white via-[#f4f7fc]/95 to-transparent"></div>
          {/* Subtle colored glow blur */}
          <div className={`absolute top-0 left-0 w-full h-[1px] bg-gradient-to-r ${item.gGlow}`}></div>
        </div>

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 w-full">
          <div className="grid lg:grid-cols-12 gap-12 items-center">
            
            {/* Visual Side: Slogan, Number & Quote */}
            <div className="lg:col-span-12 xl:col-span-5 flex flex-col justify-between">
              <div className="text-left">
                <div className="flex items-center gap-4 mb-6">
                  <span className="text-5xl font-black font-mono text-brand-500/10 select-none">{item.num}</span>
                  <span className={`inline-block px-4 py-1.5 rounded-full text-xs font-black uppercase tracking-widest border border-brand-200 bg-white shadow-sm ${item.badgeColor}`}>
                    {item.en}
                  </span>
                </div>
                
                <h2 className="text-4xl lg:text-5xl font-black text-slate-900 mb-6 leading-tight">
                  {item.name}
                </h2>
                
                <div className="text-transparent bg-clip-text bg-gradient-to-r from-brand-600 via-indigo-650 to-teal-600 text-xl font-extrabold mb-8 leading-relaxed">
                  {item.value}
                </div>
                
                <div className="border-l-[4px] border-brand-500 pl-6 py-4 my-10 bg-brand-50/40 rounded-r-xl pr-4">
                  <p className="text-slate-600 text-base leading-relaxed italic font-semibold">
                    “{item.quote}”
                  </p>
                </div>
              </div>
            </div>

            {/* Content Side: Key Points */}
            <div className="hidden xl:block lg:col-span-1" />
            
            <div className="lg:col-span-12 xl:col-span-6 grid sm:grid-cols-2 gap-6 w-full text-left">
              {item.features.map((feat, fIdx) => (
                <div 
                  key={fIdx} 
                  className="bg-white border border-slate-100 hover:border-brand-500 hover:shadow-2xl hover:shadow-blue-900/5 p-8 rounded-3xl transition-all duration-300 flex flex-col justify-between h-56 relative group cursor-default"
                >
                  <div>
                    <h3 className="text-lg font-black text-slate-900 flex items-center gap-3 mb-4 group-hover:text-brand-650 transition-colors">
                      <span className="w-2.5 h-2.5 bg-brand-500 rounded-full shrink-0"></span>
                      {feat.title}
                    </h3>
                    <p className="text-sm text-slate-500 leading-relaxed font-normal">
                      {feat.detail}
                    </p>
                  </div>
                  <div className="absolute top-4 right-4 text-[10px] font-mono text-slate-200 font-extrabold">F0{fIdx + 1}</div>
                </div>
              ))}
            </div>

          </div>
        </div>
      </section>
    ))}
  </motion.div>
);

const CasesPage = () => {
  const casesData = [
    {
      title: "某知名血液学专科医疗集团",
      sub: "造血干细胞移植与血液学病专科患者增长与服务标杆",
      tag: "01 // HEMATOLOGY CLINICAL DEMO // 某血液专科医疗集团",
      theme: "from-white via-[#eff5fc] to-[#eff5fc]",
      accent: "text-brand-700 border-brand-200 bg-brand-50 shadow-sm",
      quote: "自2021年合作以来，打破原有规模瓶颈，净新增移植期核心患者并创造可观新增营收流。",
      bg: "https://picsum.photos/seed/case-onco/1600/900",
      stats: [
        { label: "患者规模增长率", value: "+70%", desc: "打破原有瓶颈，实现移植期患者大量提升" },
        { label: "新增收入贡献测算", value: "≈3.42亿", desc: "685人 * 50万单价测算的硬增长收益" },
        { label: "移植量规模净增", value: "+685人", desc: "合作前基准977提升至历史最高1662人" },
        { label: "长期患群建立粘性", value: "提升1.75倍", desc: "通过AI数字化服务增强患者家庭信任连接" }
      ],
      backstory: "血液学重症如白血病、淋巴瘤决策极重、疗程极长。患者家属在极度焦虑中，最需要高规格循证内容与温暖伴随服务。源头科技深度共建血液中枢，设计 and 部署专科名医专属AI数字人、随时答和小爱云百科，将患者诊前决策冲突温和消除，筑起强韧的医疗信任护城河。",
      construction: [
        "名医数字人生态宣教：定制研发专家数字人科普，已广泛应用于合作医院各场景",
        "化验单常识白话AI智答：提供24小时抗排异与高频检查指南说明，消除病人家属深夜恐惧",
        "血液病多周期智能随护：覆盖初诊、化疗排期及术后追踪节点，长周期提升复诊配合率"
      ]
    },
    {
      title: "某区级妇幼保健院",
      sub: "全区首创 AI+妇幼健康暖心服务与15分钟健康服务圈标杆",
      tag: "02 // CLINICAL DEMO // 某区级妇幼保健院",
      theme: "from-white via-[#f4f7fc] to-[#f4f7fc]",
      accent: "text-blue-700 border-blue-200 bg-blue-50 shadow-sm",
      quote: "通过唯一入口、持续咨询承接与温暖陪伴服务，医院在挂号引流、大健康咨询及机构触达方面取得爆发性突破。",
      bg: "https://picsum.photos/seed/case-maternal-main/1600/900",
      stats: [
        { label: "覆盖区域居民", value: "9万+", desc: "大健康咨询与触达运营覆盖广", icon: <Users size={20} className="text-brand-500" /> },
        { label: "累计健康咨询", value: "4万+", desc: "7x24小时智能AI与患教问答解决率高", icon: <MessageSquare size={20} className="text-[#818cf8]" /> },
        { label: "社区卫生中心触达", value: "17+", desc: "全辖公卫与医联体快速绿色宣教打通", icon: <Building size={20} className="text-emerald-500" /> },
        { label: "托幼托育机构触达", value: "40+", desc: "大健康宣介机制深入到每位适龄家属", icon: <Heart size={20} className="text-rose-500" /> }
      ],
      primaryStats: [
        { label: "全院新增挂号量 (2025 vs 2024)", value: "57,903人次" },
        { label: "全网总媒体传播量", value: "170万+人次" }
      ],
      bottomCards: [
        { label: "口腔科整体收入增幅 (单月最高83.9%)", value: "32.53%", icon: <Award size={18} className="text-amber-500" /> },
        { label: "儿科专家门诊收入增幅", value: "149.7%", icon: <Activity size={18} className="text-indigo-500" /> },
        { label: "妇科盆底疾病门诊收入增幅", value: "61.9%", icon: <Smile size={18} className="text-rose-500" /> },
        { label: "儿科急诊接收人次同比增幅", value: "45.3%", icon: <Activity size={18} className="text-red-500" /> }
      ],
      backstory: "医院推出Dr.小爱健康随时答，打通了新媒体科普、线上高频问答与公卫服务场景。在托育和学龄前筛查中提供连续关怀 support，不仅使原本耗时的妇、儿、特费特需门诊流量剧增，还获得了新华网、人民网、光明网、健康报专题点赞报道。",
      construction: [
        "全区15分钟健康服务圈：部署微信随时答为核心的智能服务系统，全方位解答百姓疑惑",
        "多层级公卫绿色通道建立：针对社区中心、学龄前托幼托育机构植入大健康筛查卡完成引流闭环",
        "妇幼诊后多科室自动连动：根据自查指引导引、疫苗期提醒，实现复诊无缝激活"
      ]
    },
    {
      title: "某大型肿瘤专科医院",
      sub: "‘抗癌帮’知识智慧平台与MDT多学科诊疗全病程伴随标杆",
      tag: "03 // ONCOLOGY CO-BUILD PROJECT // 某大型肿瘤专科项目",
      theme: "from-white via-[#eff5fc] to-[#eff5fc]",
      accent: "text-emerald-700 border-emerald-200 bg-emerald-50 shadow-sm",
      quote: "以多维度精细内容保障与7x24小时全程智能伴随，提供极具医学循证的人本关爱体验。",
      bg: "https://picsum.photos/seed/case-maternal/1600/900",
      stats: [
        { label: "多学科MDT会诊参与率", value: "+150%", desc: "智能多端筛选，大幅激发并对接联合会诊" },
        { label: "科普内容无缝审核通过率", value: "98.2%", desc: "顶尖专家层层把关，保障指南高临床标准" },
        { label: "医疗风险词触发警报率", value: "100%", desc: "高敏感词识别自动提醒临床客服无缝过渡" },
        { label: "患者满意度高位反馈率", value: "98.6%", desc: "极大地满足家属对高精专业常识的热切渴求" }
      ],
      backstory: "肿瘤重疾决策长、恐慌感大，患者需要极具专业说服力的内容支撑。某大型肿瘤专科医院与源头科技深度共建‘抗癌帮’平台，提供患者提问意图引擎、最新疗法资讯、大白话报告解读模板及决策路径导航，温和消除诊前决策疑虑，转化粘性显著倍增。",
      construction: [
        "抗癌帮底层知识检索：梳理脱敏临床精细化病例库，在公域及触达端部署随时自策智答",
        "检验/病理复杂报告科普翻译：一秒理清各种肿瘤因子与复杂指标，摆脱家属百度误读恐慌",
        "MDT多学科专家精准直连：发现高价值患者后，自动推送绿色就诊方案并提供专科助理直连"
      ]
    }
  ];

  return (
    <motion.div 
      initial={{ opacity: 0 }} 
      animate={{ opacity: 1 }} 
      className="bg-[#f4f7fc] text-slate-800 min-h-screen text-left animate-fade-in"
    >
      {/* Welcome Pitch Header */}
      <section className="relative w-[1920px] h-[1080px] flex items-center justify-center overflow-hidden border-b border-slate-100 bg-gradient-to-b from-white to-[#f4f7fc] mx-auto shrink-0">
        <div className="absolute inset-0 z-0">
          <img 
            src="https://picsum.photos/seed/case-cover/1920/1080" 
            alt="" 
            className="w-full h-full object-cover opacity-5 filter grayscale contrast-125"
            referrerPolicy="no-referrer"
          />
          <div className="absolute inset-0 bg-gradient-to-b from-white/20 via-[#f4f7fc]/95 to-[#f4f7fc]"></div>
        </div>
        
        <div className="max-w-7xl mx-auto text-center relative z-10 px-4">
          <span className="text-brand-600 font-mono text-xs uppercase tracking-widest block mb-4 font-black">PRACTICE PROOF // 脱敏实证成果录</span>
          <h1 className="text-4xl lg:text-6xl font-black text-slate-950 mb-6 tracking-tight leading-tight">不讲虚假叙事，唯有实硬数据</h1>
          <p className="text-slate-600 text-lg lg:text-xl max-w-3xl mx-auto leading-relaxed font-semibold">
            我们秉持循证医学式的严密立场。以下为源头科技携手各大合作医院深度共建，落地取得的真实、脱敏后的运营核心硬核收益考证。
          </p>
        </div>
      </section>

      {/* Sequential Case Presentation Sheets */}
      <div className="flex flex-col">
        {casesData.map((current, idx) => {
          // Special Rendering for Case 2 (idx === 1):北京市某妇幼保健院
          if (idx === 1) {
            return (
              <section
                key={idx}
                className="relative w-[1920px] h-[1080px] flex flex-col justify-center px-20 border-b border-blue-100 bg-gradient-to-br from-white via-[#f4f7fc] to-[#f4f7fc] overflow-hidden mx-auto shrink-0"
              >
                <div className="absolute inset-0 z-0">
                  <img 
                    src={current.bg} 
                    alt="" 
                    className="w-full h-full object-cover opacity-5 filter contrast-125 brightness-110 grayscale"
                    referrerPolicy="no-referrer"
                  />
                </div>

                <div className="max-w-7xl mx-auto relative z-10 w-full">
                  <div className="grid lg:grid-cols-12 gap-12 items-start">
                    
                    {/* Left Side: Hospital Profile, backstory, and narration */}
                    <div className="lg:col-span-5 flex flex-col justify-between text-left">
                      <div>
                        <span className={`inline-block px-4 py-1.5 rounded-full text-xs font-black uppercase tracking-widest border mb-8 ${current.accent}`}>
                          [02] 真实案例：北京市某妇幼保健院案例
                        </span>
                        
                        <h2 className="text-3xl lg:text-5xl font-black text-slate-990 mb-4 tracking-tight leading-tight">
                          {current.title}
                        </h2>
                        
                        <div className="text-slate-600 text-lg font-bold mb-6">
                          {current.sub}
                        </div>
                        
                        {/* High-quality clinic illustration placeholder */}
                        <div className="w-full h-[220px] rounded-3xl overflow-hidden mb-6 shadow-md relative border border-slate-100">
                          <img 
                            src="https://picsum.photos/seed/beijing-maternal-build/800/400" 
                            alt="北京市某妇幼保健院" 
                            className="w-full h-full object-cover"
                            referrerPolicy="no-referrer"
                          />
                          <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-transparent to-transparent flex items-end p-4">
                            <span className="text-white text-xs font-bold bg-brand-600/90 px-3 py-1 rounded-md shadow-sm">BEIJING MATERNAL HEALTH CENTER</span>
                          </div>
                        </div>

                        <div className="border-l-[4px] border-brand-500 pl-6 py-3 my-8 bg-brand-50/50 rounded-r-2xl pr-4">
                          <p className="text-slate-650 text-base leading-relaxed italic font-semibold">
                            “{current.quote}”
                          </p>
                        </div>

                        <div className="space-y-8 text-left mt-10">
                          <div>
                            <h3 className="text-brand-600 font-extrabold text-xs uppercase tracking-widest mb-3 font-mono">Project Background // 合作探索背景</h3>
                            <p className="text-sm text-slate-500 leading-relaxed font-normal">
                              {current.backstory}
                            </p>
                          </div>

                          <div>
                            <h3 className="text-brand-600 font-extrabold text-xs uppercase tracking-widest mb-3 font-mono">Consolidated Initiatives // 核心共建举措</h3>
                            <ul className="space-y-3">
                              {current.construction.map((item, keyIdx) => (
                                <li key={keyIdx} className="flex items-start gap-3 text-sm text-slate-600">
                                  <span className="w-2.5 h-2.5 bg-brand-500 rounded-full mt-1 shrink-0"></span>
                                  <span className="leading-relaxed font-normal">{item}</span>
                                </li>
                              ))}
                            </ul>
                          </div>
                        </div>
                      </div>

                      <div className="mt-12 pt-6 border-t border-slate-100">
                        <p className="text-[10px] text-slate-400 leading-relaxed italic">
                          * 声明说明：为全面捍卫对应医疗合作机构的商业自主及患者隐私权，已对各项业务量和科室比率做等比脱敏处理，特此声明。
                        </p>
                      </div>
                    </div>

                    {/* Gap */}
                    <div className="lg:col-span-1" />

                    {/* Right Side: Beautiful grid from image 2 with residents, consultations, community centers, daycares, first visit metrics and department growths */}
                    <div className="lg:col-span-6 flex flex-col justify-start w-full space-y-8 text-left">
                      
                      {/* Metric Area Title */}
                      <div className="border-b border-slate-200/60 pb-4">
                        <span className="text-xs text-brand-600 font-black font-mono tracking-widest uppercase">KEY PERFORMANCE METRICS // 业务成果指标大闭环</span>
                      </div>

                      {/* Row 1: 4 columns smaller badges */}
                      <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 w-full">
                        {current.stats.map((stat, sIdx) => (
                          <div 
                            key={sIdx} 
                            className="bg-white border border-blue-50 hover:border-brand-300 hover:shadow-lg rounded-2xl p-5 transition-all duration-300 flex flex-col justify-between h-36"
                          >
                            <div className="w-9 h-9 rounded-xl bg-blue-50/70 border border-blue-100 flex items-center justify-center mb-2">
                              {stat.icon}
                            </div>
                            <div>
                              <div className="text-2xl lg:text-3xl font-black text-slate-950 py-0.5 tracking-tight">
                                {stat.value}
                              </div>
                              <div className="text-slate-500 text-[10px] sm:text-xs font-bold uppercase tracking-wider">
                                {stat.label}
                              </div>
                            </div>
                          </div>
                        ))}
                      </div>

                      {/* Row 2: 2 Column Large Metric Cards */}
                      <div className="grid sm:grid-cols-2 gap-4 w-full">
                        {current.primaryStats?.map((pStat, pIdx) => (
                          <div
                            key={pIdx}
                            className="bg-white border border-slate-100 hover:border-brand-500 hover:shadow-xl rounded-2xl p-6 transition-all duration-300 flex flex-col justify-between h-36 relative overflow-hidden"
                          >
                            <div className="absolute right-[-10px] bottom-[-10px] opacity-5 text-brand-600 font-mono text-8xl font-black select-none pointer-events-none">
                              {pIdx + 1}
                            </div>
                            <div className="text-slate-500 text-xs font-black uppercase tracking-wider">
                              {pStat.label}
                            </div>
                            <div className="text-3xl lg:text-4xl font-black text-brand-600 tracking-tight py-2">
                              {pStat.value}
                            </div>
                            <div className="text-[10px] text-slate-400 font-medium">脱敏实证数据积累</div>
                          </div>
                        ))}
                      </div>

                      {/* Row 3: 4 detailed clinical departments revenue expansions */}
                      <div className="bg-white grid grid-cols-1 sm:grid-cols-2 gap-4 p-6 rounded-3xl border border-slate-100 shadow-sm w-full">
                        <div className="col-span-1 sm:col-span-2 border-b border-slate-100 pb-3 mb-2 flex justify-between items-center">
                          <span className="text-xs font-black text-slate-950 uppercase tracking-widest font-mono">SPECIFIC CLINICAL DEPARTMENTS // 特色专科业务收入同比增幅</span>
                          <span className="text-[10px] text-indigo-500 bg-indigo-50 px-2.5 py-1 rounded-full font-bold">2021-2023 对比</span>
                        </div>
                        {current.bottomCards?.map((bCard, bIdx) => (
                          <div 
                            key={bIdx}
                            className="flex items-center gap-4 p-3 hover:bg-slate-50 rounded-xl transition-all"
                          >
                            <div className="w-10 h-10 rounded-xl bg-blue-50/50 border border-blue-100 shrink-0 flex items-center justify-center">
                              {bCard.icon}
                            </div>
                            <div className="text-left">
                              <div className="text-[11px] text-slate-500 font-semibold leading-relaxed">
                                {bCard.label}
                              </div>
                              <div className="text-lg font-black text-slate-900 flex items-baseline gap-1">
                                <span className="text-emerald-500 font-black">↑</span>
                                {bCard.value}
                              </div>
                            </div>
                          </div>
                        ))}
                      </div>

                    </div>

                  </div>



                </div>
              </section>
            );
          }

          // Default Rendering for Case 1 and Case 3
          return (
            <section
              key={idx}
              className="relative w-[1920px] h-[1080px] flex flex-col justify-center px-20 border-b border-slate-100 bg-gradient-to-br from-white via-[#eff5fc] to-[#eff5fc] overflow-hidden mx-auto shrink-0"
            >
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
                  <div className="lg:col-span-6 flex flex-col justify-between text-left">
                    <div>
                      <span className={`inline-flex px-4 py-1.5 rounded-full text-xs font-black uppercase tracking-widest border mb-8 ${current.accent}`}>
                        {current.tag}
                      </span>
                      
                      <h2 className="text-3xl lg:text-5xl font-black text-slate-950 mb-4 tracking-tight leading-tight">
                        {current.title}
                      </h2>
                      
                      <div className="text-slate-600 text-lg lg:text-xl font-medium mb-8">
                        {current.sub}
                      </div>
                      
                      <div className="border-l-[4px] border-brand-500 pl-6 py-3 my-8 bg-brand-50/50 rounded-r-2xl pr-4">
                        <p className="text-slate-650 text-base leading-relaxed italic font-semibold">
                          “{current.quote}”
                        </p>
                      </div>

                      <div className="space-y-8 text-left mt-10">
                        <div>
                          <h3 className="text-brand-600 font-extrabold text-xs uppercase tracking-widest mb-3 font-mono">Project Background // 合作探索背景</h3>
                          <p className="text-sm text-slate-500 leading-relaxed font-normal">
                            {current.backstory}
                          </p>
                        </div>

                        <div>
                          <h3 className="text-brand-600 font-extrabold text-xs uppercase tracking-widest mb-3 font-mono">Consolidated Initiatives // 核心共建举措</h3>
                          <ul className="space-y-3">
                            {current.construction.map((item, keyIdx) => (
                              <li key={keyIdx} className="flex items-start gap-3 text-sm text-slate-600">
                                <span className="w-2.5 h-2.5 bg-brand-500 rounded-full mt-1.5 shrink-0"></span>
                                <span className="leading-relaxed font-normal">{item}</span>
                              </li>
                            ))}
                          </ul>
                        </div>
                      </div>
                    </div>

                    <div className="mt-12 pt-6 border-t border-slate-100">
                      <p className="text-[10px] text-slate-400 leading-relaxed italic">
                        * 声明说明：为全面捍卫对应医疗合作机构的商业自主及患者隐私权，已对各项营收和对应年份做等比隐私脱敏处理，特此声明。
                      </p>
                    </div>
                  </div>

                  {/* Gap */}
                  <div className="lg:col-span-1" />

                  {/* Right Side: Giant Stats (Keynote Apple-Slogan Matrix Layout) */}
                  <div className="lg:col-span-12 lg:mt-6 xl:mt-0 xl:col-span-5 flex flex-col justify-center w-full">
                    <div className="grid sm:grid-cols-2 gap-6 w-full text-left">
                      {current.stats.map((stat, sIdx) => (
                        <div 
                          key={sIdx} 
                          className="bg-white border border-slate-100 hover:border-brand-500 hover:shadow-2xl hover:shadow-blue-900/5 rounded-3xl p-8 transition-all duration-300 flex flex-col justify-between min-h-[220px]"
                        >
                          <div>
                            <div className="text-slate-500 text-xs font-mono mb-4 uppercase tracking-wider font-semibold">
                              {stat.label}
                            </div>
                            <div className="text-5xl lg:text-6xl font-black text-brand-600 hover:text-brand-700 transition-colors py-2 tracking-tight">
                              {stat.value}
                            </div>
                          </div>
                          <p className="text-xs text-slate-400 leading-normal mt-4 font-normal">
                            {stat.desc}
                          </p>
                        </div>
                      ))}
                    </div>
                  </div>

                </div>
              </div>
            </section>
          );
        })}
      </div>
      
      {/* End Slogan Banner */}
      <section className="relative w-[1920px] h-[1080px] flex flex-col items-center justify-center bg-gradient-to-r from-brand-600 to-indigo-700 text-white overflow-hidden mx-auto shrink-0 text-center px-20 pt-16">
        <div className="absolute inset-0 z-0 opacity-10">
          <img src="https://picsum.photos/seed/slogan-bg/1600/900" alt="" className="w-full h-full object-cover" referrerPolicy="no-referrer" />
        </div>
        <div className="max-w-5xl mx-auto px-4 relative z-10 flex flex-col items-center gap-12">
          <div className="w-20 h-20 rounded-full bg-white/10 flex items-center justify-center text-white text-5xl mb-4">“</div>
          <p className="text-4xl lg:text-5xl font-black text-white/95 leading-relaxed tracking-tight max-w-4xl italic">
            这些结果，并不是单纯靠买流量带来的，<br />
            而是患者<span className="text-indigo-200">“决策路径被重构”</span>的必然结果。
          </p>
          <div className="w-16 h-1 bg-white/30 rounded-full mt-6" />
        </div>
      </section>
    </motion.div>
  );
};

const CooperationPage = () => (
  <motion.div 
    initial={{ opacity: 0, y: 20 }} 
    animate={{ opacity: 1, y: 0 }} 
    className="bg-white"
  >
    <section className="relative w-[1920px] h-[1080px] flex flex-col justify-center overflow-hidden bg-gradient-to-b from-white to-[#f4f7fc] mx-auto shrink-0 border-b border-slate-100 p-20 text-left">
      <div className="max-w-7xl mx-auto w-full">
        <div className="mb-14 text-center">
          <span className="text-brand-600 font-mono text-xs uppercase tracking-widest block mb-4 font-black">PARTNERSHIP SCHEMA // 合作生态模式</span>
          <h1 className="text-4xl lg:text-5xl font-black text-slate-900 mb-6 leading-tight">我们不是简单代运营，也不是单点AI工具</h1>
          <p className="text-slate-505 text-lg lg:text-xl max-w-4xl mx-auto font-semibold leading-relaxed">
            而是与医院并肩保障增长结果的“肿瘤专科增长合伙人”。三种合作路径灵活匹配不同发展阶段需求。
          </p>
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
            <div key={i} className="bg-white border border-slate-105 p-10 rounded-[32px] text-center hover:shadow-2xl hover:border-brand-500 transition-all flex flex-col justify-between h-[420px]">
              <div>
                <div className="w-16 h-16 bg-brand-50 text-brand-650 rounded-full flex items-center justify-center mx-auto mb-8 font-black border border-brand-200 shadow-md animate-pulse text-xl">
                  {i + 1}
                </div>
                <h3 className="text-2xl font-black mb-4 text-slate-900">{item.title}</h3>
                <p className="text-slate-500 text-sm leading-relaxed font-normal">{item.desc}</p>
              </div>
              <div className="mt-8 pt-4 border-t border-slate-100">
                <span className="text-brand-600 font-bold text-sm hover:text-brand-700 transition-colors">查看对应脱敏案例 →</span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  </motion.div>
);

const AboutPage = () => (
  <motion.div 
    initial={{ opacity: 0, y: 20 }} 
    animate={{ opacity: 1, y: 0 }}
    className="bg-white"
  >
    <section className="relative w-[1920px] h-[1080px] flex flex-col justify-center overflow-hidden bg-gradient-to-b from-white to-[#f4f7fc] mx-auto shrink-0 border-b border-slate-100 p-20 text-left">
      <div className="max-w-7xl mx-auto w-full">
        <div className="grid lg:grid-cols-12 gap-16 items-center">
          <div className="lg:col-span-6">
            <span className="text-brand-600 font-mono text-xs uppercase tracking-widest block mb-4 font-black">ABOUT CO-FOUNDERS // 关于源头科技</span>
            <h1 className="text-5xl lg:text-7xl font-black text-slate-900 mb-6">源头科技</h1>
            <p className="text-2xl text-brand-600 font-black mb-8">肿瘤专科医院患者增长合伙人</p>
            <p className="text-slate-500 text-base leading-relaxed mb-6 font-normal">
              我们是一支跨界融合的创新队伍，团队核心成员来自央视新媒体、科创中国体系、AI医疗大模型研发室以及肿瘤专科医院实战增长操盘手。我们深刻了解长决策周期、高信任门槛对于重疾专病医院增长的束缚，致力于通过<b>“医学科普内容 + AI智能答疑 + 温心私域管理”</b>三位一体的增长合伙机制，助力科室和医院构建真正的数字化竞争壁垒。
            </p>
          </div>
          <div className="lg:col-span-6 grid grid-cols-2 gap-6">
            {[
              { label: "核心专长", items: ["肿瘤科科普创作储备", "长周期信任构建模型", "专科AI知识智能问答", "医患数据安全及安全防线"] },
              { label: "典型共建案例及长期支持", items: ["某知名血液专科深度共建", "某大型肿瘤专科项目共建", "地方三甲级优势重点科室", "大健康下沉科普宣教普及"] }
            ].map((box, i) => (
              <div key={i} className="bg-slate-50 p-10 rounded-[32px] border border-slate-150 shadow-sm hover:border-brand-500 hover:shadow-xl transition-all h-[380px] flex flex-col justify-between">
                <div>
                  <div className="font-black text-xl mb-6 text-slate-900 border-l-[4px] border-brand-500 pl-4">{box.label}</div>
                  <ul className="space-y-4 text-sm text-slate-600">
                    {box.items.map((item, j) => (
                      <li key={j} className="flex items-center gap-3 font-semibold text-slate-600">
                        <span className="text-brand-500 text-lg font-normal">🌱</span> {item}
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  </motion.div>
);

const ContactPage = () => (
  <motion.div 
    initial={{ opacity: 0, y: 20 }} 
    animate={{ opacity: 1, y: 0 }}
    className="bg-[#f4f7fc]"
  >
    <section className="relative w-[1920px] h-[1080px] flex items-center justify-center overflow-hidden mx-auto shrink-0 p-20 text-left">
      <div className="max-w-6xl mx-auto w-full bg-white rounded-[40px] shadow-2xl overflow-hidden flex flex-col md:flex-row border border-slate-100 h-[680px]">
        <div className="md:w-1/2 bg-gradient-to-b from-brand-600 to-indigo-800 p-16 text-white flex flex-col justify-between">
          <div>
            <span className="text-white/60 font-mono text-xs uppercase tracking-widest block mb-4 font-black">SECURE CONSULTING // 诊断咨询</span>
            <h2 className="text-5xl font-black mb-8 leading-none">联系我们</h2>
            <p className="text-brand-100 text-sm leading-relaxed max-w-sm font-semibold mb-10">
              致力于为肿瘤专科提供兼具高度专业临床合规以及极致人文关怀的增长伴随闭环数字化机制。
            </p>
          </div>
          <div className="space-y-10">
            <div className="flex items-center gap-6">
              <div className="w-14 h-14 bg-white/10 rounded-2xl flex items-center justify-center text-white shadow-inner"><Phone size={24} /></div>
              <div>
                <div className="text-xs text-brand-200 font-extrabold font-mono uppercase tracking-wider">Consultation Hotline</div>
                <div className="font-black text-2xl">400-820-2026</div>
              </div>
            </div>
            <div className="flex items-center gap-6">
              <div className="w-14 h-14 bg-white/10 rounded-2xl flex items-center justify-center text-white shadow-inner"><Mail size={24} /></div>
              <div>
                <div className="text-xs text-brand-200 font-extrabold font-mono uppercase tracking-wider">Business Email</div>
                <div className="font-black text-2xl">partner@yuantou.tech</div>
              </div>
            </div>
          </div>
          
          <div className="flex items-center gap-6 pt-6 border-t border-white/10">
            <div>
              <div className="text-xs text-brand-200 font-extrabold tracking-wider uppercase font-mono mb-2">WeChat Contact</div>
              <div className="text-xs text-white/80 font-bold">微信扫码一键连接高级医疗业务负责人</div>
            </div>
            <div className="w-20 h-20 bg-white rounded-xl flex items-center justify-center text-slate-950 font-black text-[9px] p-2 text-center select-none shadow-lg">
              [ 二维码 ]
            </div>
          </div>
        </div>
        
        <div className="md:w-1/2 p-16 flex flex-col justify-center">
          <h3 className="text-3xl font-black mb-4 text-slate-900 leading-none">预约科室业务提升</h3>
          <p className="text-xs text-slate-400 mb-8 font-semibold leading-relaxed">
            请留下您的基本信息，源头医疗专科专家将在24小时内与您联系，并为您交付定制诊断方案与脱敏案例材料。
          </p>
          <form className="space-y-5" onSubmit={(e) => e.preventDefault()}>
            <div>
              <label className="block text-xs font-black text-slate-650 uppercase tracking-widest mb-1.5 font-mono">Hospital / Institution Name</label>
              <input type="text" className="w-full px-5 py-3.5 rounded-xl border border-slate-200 focus:ring-2 focus:ring-brand-500 focus:border-transparent outline-none text-sm transition-all shadow-sm" placeholder="请输入您的医院或机构完整名称" />
            </div>
            <div>
              <label className="block text-xs font-black text-slate-650 uppercase tracking-widest mb-1.5 font-mono">My Position / Department</label>
              <input type="text" className="w-full px-5 py-3.5 rounded-xl border border-slate-200 focus:ring-2 focus:ring-brand-500 focus:border-transparent outline-none text-sm transition-all shadow-sm" placeholder="例如：王主任 肿瘤科" />
            </div>
            <div>
              <label className="block text-xs font-black text-slate-650 uppercase tracking-widest mb-1.5 font-mono">Contact Phone Number</label>
              <input type="tel" className="w-full px-5 py-3.5 rounded-xl border border-slate-200 focus:ring-2 focus:ring-brand-500 focus:border-transparent outline-none text-sm transition-all shadow-sm" placeholder="请输入您的微信或手机号" />
            </div>
            <button className="w-full bg-brand-600 text-white py-4.5 rounded-xl font-bold text-lg hover:bg-brand-700 transition-all mt-6 uppercase tracking-wider shadow-lg shadow-brand-600/10 hover:shadow-brand-600/25">
              提交诊断预约申请
            </button>
          </form>
        </div>
      </div>
    </section>
  </motion.div>
);

const FloatingConsultButton = ({ onAction }: { onAction: () => void }) => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="fixed bottom-8 right-8 z-50 flex flex-col items-end gap-3 font-sans">
      {/* Expanded popover options */}
      {isOpen && (
        <motion.div 
          initial={{ opacity: 0, scale: 0.9, y: 10 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          className="bg-white rounded-3xl shadow-2xl p-6 border border-slate-100 flex flex-col gap-4 w-72 text-left mb-2 text-slate-900"
        >
          <div className="flex items-center justify-between border-b border-slate-100 pb-3">
            <h4 className="font-bold text-base text-slate-900 flex items-center gap-2">
              <span className="w-2.5 h-2.5 rounded-full bg-emerald-500 animate-pulse"></span>
              24h 智能咨询
            </h4>
            <button onClick={() => setIsOpen(false)} className="text-slate-400 hover:text-slate-600 transition-colors border-none bg-transparent cursor-pointer">
              <X size={16} />
            </button>
          </div>
          
          <div className="space-y-4">
            <button 
              onClick={() => {
                onAction();
                setIsOpen(false);
              }}
              className="w-full bg-brand-600 text-white rounded-2xl py-3 px-4 flex items-center gap-3 font-semibold text-sm hover:bg-brand-700 transition-all shadow-md group border-none cursor-pointer"
            >
              <MessageSquare size={16} className="shrink-0" />
              <span>预约科室业务提升</span>
              <ChevronRight size={14} className="ml-auto group-hover:translate-x-0.5 transition-transform" />
            </button>

            <div className="bg-slate-50 rounded-2xl p-4 border border-slate-100 flex items-center gap-4">
              <div className="w-10 h-10 rounded-xl bg-brand-50 flex items-center justify-center text-brand-600 shrink-0">
                <Phone size={18} />
              </div>
              <div>
                <div className="text-xs text-slate-400 font-medium">全国诊断咨询专线</div>
                <a href="tel:400-820-2026" className="font-bold text-slate-800 text-sm hover:text-brand-600 transition-colors">400-820-2026</a>
              </div>
            </div>

            <div className="bg-slate-50 rounded-2xl p-4 border border-slate-100 flex items-center gap-4">
              <div className="w-10 h-10 rounded-xl bg-indigo-50 flex items-center justify-center text-indigo-600 shrink-0">
                <Users size={18} />
              </div>
              <div>
                <div className="text-xs text-slate-400 font-medium font-bold text-slate-800 flex items-center gap-1">微信扫码沟通</div>
                <div className="text-[10px] text-brand-600 font-semibold cursor-pointer" onClick={() => { onAction(); setIsOpen(false); }}>获取脱敏案例资料 →</div>
              </div>
              <div className="ml-auto w-10 h-10 bg-white border border-slate-200 rounded p-1 text-[8px] text-center font-bold flex flex-col items-center justify-center select-none shrink-0" title="WeChat QR">
                <span className="text-[8px] scale-90 text-slate-700">微信</span>
                <span className="text-[8px] scale-90 text-slate-750">扫码</span>
              </div>
            </div>
          </div>
        </motion.div>
      )}

      {/* Main trigger button */}
      <div className="relative group">
        <div className="absolute -inset-1.5 rounded-full bg-brand-500/25 blur-sm opacity-75 group-hover:opacity-100 animate-pulse"></div>
        <button 
          onClick={() => setIsOpen(!isOpen)}
          className="relative bg-gradient-to-r from-brand-600 to-indigo-600 hover:from-brand-500 hover:to-indigo-500 text-white font-bold rounded-full py-4 px-6 flex items-center gap-2.5 shadow-2xl transition-all hover:scale-105 border-none cursor-pointer"
        >
          <MessageSquare size={20} className="animate-pulse shrink-0" />
          <span className="text-sm tracking-wide">诊断咨询</span>
          {isOpen ? <X size={16} className="ml-1 shrink-0" /> : <ChevronRight size={14} className="ml-1 group-hover:translate-x-0.5 transition-transform shrink-0" />}
        </button>
      </div>
    </div>
  );
};

export default function App() {
  const [activeTab, setActiveTab] = useState('home');
  const [scale, setScale] = useState(1);

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [activeTab]);

  useEffect(() => {
    const handleResize = () => {
      const currentWidth = window.innerWidth;
      setScale(currentWidth / 1920);
    };
    window.addEventListener('resize', handleResize);
    handleResize();
    return () => window.removeEventListener('resize', handleResize);
  }, []);

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
    <div className="min-h-screen relative bg-[#f4f7fc] overflow-x-hidden">
      <style>{`
        body {
          overflow-x: hidden;
        }
      `}</style>
      <div 
        style={{ 
          zoom: scale
        }}
        className="w-[1920px] relative origin-top-left"
      >
        <Navbar activeTab={activeTab} setActiveTab={setActiveTab} />
        <main className="pt-[72px]">
          {renderContent()}
        </main>
        <Footer onAction={setActiveTab} />
      </div>
      <FloatingConsultButton onAction={() => setActiveTab('contact')} />
    </div>
  );
}

import React, { useState, useEffect } from 'react';
import { ChevronRight, ArrowRight, X, Star, Briefcase, GraduationCap, Lightbulb } from 'lucide-react';
import { PieChart, Pie, Cell } from 'recharts'


export default function AlumniImpactPathways() {
  const [currentView, setCurrentView] = useState('main');
  const [selectedStory, setSelectedStory] = useState(null);
  const [selectedJobCategory, setSelectedJobCategory] = useState(null);
  const [showEmployersModal, setShowEmployersModal] = useState(false);
  const [showUniversitiesModal, setShowUniversitiesModal] = useState(false);
  const [selectedScholar, setSelectedScholar] = useState(null);
  const [selectedVenture, setSelectedVenture] = useState(null);
  const [showVentureModal, setShowVentureModal] = useState(false);
  const [counterStats, setCounterStats] = useState({ percentage: 0 });

  useEffect(() => {
    if (currentView === 'professional-career') {
      let start = 0;
      const interval = setInterval(() => {
        if (start < 79.2) {
          start += 2;
          setCounterStats({ percentage: Math.min(start, 79.2) });
        } else clearInterval(interval);
      }, 20);
      return () => clearInterval(interval);
    }
  }, [currentView]);

  

  const scholars = [
    {
      name: 'Noha',
      degree: 'MSc in Social Data Science',
      university: 'University of Oxford',
      teaser: 'Noha\'s path to Oxford was anything but easy. Two years ago, the war left her without access to her academic papers, and pursuing graduate studies felt impossible...',
      fullStory: 'Noha\'s path to Oxford was anything but easy. Two years ago, the war left her without access to her academic papers, and pursuing graduate studies felt impossible. Through resilience, community support, and unwavering determination, she earned a fully funded place in the MSc in Social Data Science program at the University of Oxford, supported by the Mastercard Foundation Scholarship. Her journey reflects hope, gratitude, and a powerful new beginning.',
      quote: 'a powerful new beginning'
    },
    {
      name: 'Mona',
      degree: 'Master in Interdisciplinary Data Science (MIDS)',
      university: 'Duke University',
      teaser: 'Mona began her graduate journey at Duke University after earning a highly competitive full-tuition scholarship awarded to one student per cohort...',
      fullStory: 'Mona began her graduate journey at Duke University after earning a highly competitive full-tuition scholarship awarded to one student per cohort. Despite the challenges of applying with a Sudanese passport and navigating a rigorous application cycle, she received multiple offers from top US and UK programs. She chose Duke for its interdisciplinary focus and alignment with her commitment to social impact. Today, she is thriving academically and personally, embracing a transformative chapter surrounded by brilliant peers and mentors.',
      quote: 'thriving academically and personally'
    },
    {
      name: 'Morteza',
      degree: 'Master of Science in Analytics (MSA)',
      university: 'Georgia Institute of Technology',
      teaser: 'Morteza\'s journey reflects steady growth and real impact in the tech world. Starting from the MIT ReACT program, he built strong expertise in analytics...',
      fullStory: 'Morteza\'s journey reflects steady growth and real impact in the tech world. Starting from the MIT ReACT program, he built strong expertise in analytics and problem-solving that led him to PwC\'s Digital Technology and Innovation team. There, he supports Fortune 500 companies by delivering data-driven solutions across business, manufacturing, and financial sectors. Along the way, he completed a Master of Science in Analytics at Georgia Tech, strengthening his ability to turn data into meaningful, scalable insights.',
      quote: 'turn data into meaningful, scalable insights'
  ,  }];

  

  const jobCategories = [
    {
      name: 'Data & Analytics',
      percentage: 27,
      bgColor: 'bg-turquoise',
      textColor: 'text-white',
      jobs: ['Assistant Research', 'Revenue Operations Analyst', 'Data Scientist', 'Senior Business Analyst', 'Data Analyst', 'Financial Analyst']
    },
    {
      name: 'Engineering & IT',
      percentage: 27,
      bgColor: 'bg-sunset',
      textColor: 'text-white',
      jobs: ['ML Engineer', 'AI Engineer', 'AI Automation Engineer', 'Lead AI Consultant', 'Senior Backend Developer', 'Senior Software Engineer']
    },
    {
      name: 'Business & Operations',
      percentage: 15,
      bgColor: 'bg-rose-600',
      textColor: 'text-white',
      jobs: ['Risk Prevention Specialist', 'Business Consultant', 'Business Analyst', 'SAP Consulting', 'Process Analyst', 'Business Development Specialist']
    }
  ];

  const stories = [
    { name: 'Adel', before: 'Waiter', after: 'Senior Software Engineer', story: 'Adel moved from hospitality into tech by investing in continuous learning, earning an MIT certificate, and building strong technical skills in Java, Spring Boot, and microservice architectures. Today, he works as a Senior Software Engineer leading high-impact projects in Europe.' },
    { name: 'Dmytro', before: 'Driver', after: 'ML Project Manager', story: 'Dmytro transitioned from driving to leading ML projects by building strong skills in data, AI evaluation, and project management. Today, he manages high-impact Responsible AI initiatives and multimodal model workflows at Amazon.' },
    { name: 'Mutombo', before: 'Receptionist', after: 'Software Engineer Intern', story: 'Mutombo moved from a receptionist role to breaking into tech as a Software Engineer Intern. Through persistence, learning, and practical coding projects, he earned an internship opportunity where he now contributes to software development at Hallmark Limited.' }
  ];

  const advancedStories = [
    { name: 'Tariq', before: 'Data Analyst Intern', after: 'Lead AI Consultant', story :'Tariq began his career as a Data Analyst Intern and steadily advanced by deepening his expertise in data science and AI solutions. Through continuous growth and hands-on consulting experience, he now leads AI initiatives and drives strategic transformation projects as a Lead AI Consultant at Devoteam.' },
    { name: 'Kaung Hein', before: 'Python Developer', after: 'AI Team Lead', story: 'Kaung Hein started as a Python Developer and grew his career by mastering AI development, project leadership, and cross-functional collaboration. His strong technical foundation and leadership mindset led him to become an AI Team Lead, where he now oversees AI projects and guides engineering teams.' },
    { name: 'Anas', before: 'Business Analyst', after: 'Senior Data Management Consultant', story: 'Anas began as a Business Analyst and developed advanced skills in data science, predictive modeling, and data management. By continuously expanding his technical capabilities, he progressed into a specialized consulting role and now works as a Senior Data Management Consultant, supporting organizations in data-driven transformation.' }
  ];

  const employers = {
    'Big Tech': ['Apple', 'Amazon', 'Microsoft', 'Meta', 'Samsung', 'Google', 'Facebook', 'Tesla'],
    'Multinational': ['Nestle', 'Shell', 'Boeing', 'Caterpillar', 'Hitachi', 'Siemens'],
    'Finance & Services': ['Deloitte', 'PWC', 'JP Morgan', 'IMF', 'Goldman Sachs'],
    'Telecom & IT': ['Bell Canada', 'Infosys', 'TCS', 'Nokia', 'IBM'],
    'UN Agencies': ['UNOPS', 'UNHCR', 'UNRWA', 'UNICEF', 'UNDP', 'WFP']
  };

  const universities = [
    'MIT University', 'University of Oxford', 'Harvard University', 'Duke University', 'London School of Economics', 'Georgia Institute of Technology', 'University of California, San Diego', 'Cornell University', 'University of Bristol', 'RWTH Aachen University'
  ];

  const scholarships = ['Chevening Scholarship', 'MasterCard Foundation Scholarship', 'Fulbright Scholarship'];

  const ventures = [
    { name: 'SheRise Afghanistan', alumni: 'Nasrin & Niloufar', focus: 'Women Empowerment', category: 'Education', impact: '200 Women Empowered' },
    { name: 'ADAI Circle', alumni: 'Amisi', focus: 'Refugee Education', category: 'Education', impact: '1000 Trained' },
    { name: 'Up With Africa', alumni: 'Justin & Jack', focus: 'Digital Skills', category: 'Education', impact: '50 Jobs Created' },
    { name: 'Agartha Academy', alumni: 'Batoul', focus: 'Tech Education', category: 'Education', impact: 'MENA Region' },
    { name: 'Electrogami', alumni: 'Mouaz', focus: 'STEAM & Robotics', category: 'Education', impact: 'Youth Dev' },
    { name: 'Bionl.ai', alumni: 'Ahmad', focus: 'Bioinformatics', category: 'AI & Tech', impact: 'Healthcare' },
    { name: 'Infiniteup', alumni: 'Malaz', focus: 'Business Superapp', category: 'AI & Tech', impact: 'African Markets' },
    { name: 'Everpesa', alumni: 'Jerry Vance', focus: 'Financial Inclusion', category: 'Fintech', impact: 'Banking' },
    { name: 'Battuta Hostel', alumni: 'Minwer', focus: 'Cultural Exchange', category: 'Hospitality', impact: 'Global' },
    { name: 'Sarenia', alumni: 'Tahmina', focus: 'Mentorship', category: 'Education', impact: 'Career Dev' }
  ];

  const ventureDescriptions = {
    'Electrogami': 'A STEAM education startup that teaches youth (ages 8–14) programming and robotics through creative kits and mobile-controlled projects. It emphasizes hands-on learning and imagination.',
    'ADAI Circle': 'A mentorship and education initiative based in Dzaleka Refugee Camp. It offers training in AI, data science, and software development to empower refugees and reduce poverty through job creation.',
    'Up With Africa': 'A refugee-led nonprofit that provides digital skills, leadership training, and entrepreneurship education to displaced and low-income communities. It was founded by refugee students who benefited from advanced computer training.',
    'SheRise Afghanistan': 'A nonprofit dedicated to empowering Afghan women and girls through education, economic opportunities, and advocacy. It offers access to online courses and community-based learning programs.',
    'Agartha Academy': 'An online learning platform offering Arabic-language courses in AI, data science, programming, and business. It aims to make professional education accessible across the MENA region.',
    'Sarenia': 'A mentorship-driven platform that connects learners and professionals to growth opportunities. It fosters equitable access to education and career development through community support and guided pathways.',
    'Bionl.ai': 'A no-code bioinformatics platform that helps researchers automate biomedical data analysis using GenAI. It\'s designed to simplify complex workflows in life sciences and healthcare.',
    'Infiniteup': 'A superapp for African small businesses. It provides AI-powered tools for productivity, digital coaching, and business growth supporting entrepreneurs in scaling efficiently.',
    'Everpesa': 'A fintech company driving financial inclusion in Africa. It offers core banking infrastructure, digital financial services, and investment platforms tailored to underserved markets.',
    'Battuta Hostel': 'A hospitality venture offering affordable lodging and cultural experiences for travellers. It fosters global connection through shared spaces, rooftop events, and local tours.'
  };

  // Background Shapes
  const BackgroundShapes = () => (
    <div className="fixed inset-0 pointer-events-none overflow-hidden">
      <div className="absolute top-10 left-10 w-12 h-12 opacity-20 animate-pulse">
        <div className="text-4xl text-rose-600">+</div>
      </div>
      <div className="absolute top-1/3 right-20 w-16 h-16 opacity-20 animate-bounce" style={{animationDuration: '4s'}}>
        <div className="w-full h-full bg-sunset rotate-45"></div>
      </div>
      <div className="absolute bottom-20 left-1/4 w-20 h-20 rounded-full opacity-15 animate-pulse border-2 border-turquoise"></div>
      <div className="absolute top-1/2 right-1/3 text-5xl opacity-15 text-sunset animate-spin" style={{animationDuration: '8s'}}>+</div>
    </div>
  );

  // Main View
  const MainView = () => (
    <div className="min-h-screen bg-gradient-to-br from-deep-blue to-deep-blue-alt text-white p-8 relative overflow-hidden">
      <BackgroundShapes />
      
      <div className="max-w-7xl mx-auto relative z-10">
        {/* Title Section */}
        <div className="text-center mb-16 animate-fadeIn">
          <h1 className="text-5xl font-bold mb-4 text-white">MIT Emerging Talent ALUMNI PATHWAYS</h1>
          <p className="text-lg text-white opacity-90 mb-2">Our Alumni Don't Choose One Path. They Build Portfolios of Impact.</p>
        </div>

        {/* 3 Cards in a Row */}
        <div className="grid grid-cols-3 gap-6 mb-16">
          {[
            {
              title: 'Professional Career',
              icon: Briefcase,
              bgColor: 'bg-turquoise',
              textColor: 'text-deep-blue',
              view: 'professional-career'
            },
            {
              title: 'Higher Education',
              icon: GraduationCap,
              bgColor: 'bg-sunset',
              textColor: 'text-deep-blue',
              view: 'higher-education'
            },
            {
              title: 'Entrepreneurship',
              icon: Lightbulb,
              bgColor: 'bg-turquoise',
              textColor: 'text-deep-blue',
              view: 'entrepreneurship'
            }
          ].map((pathway, idx) => {
            const Icon = pathway.icon;
            return (
              <div
                key={idx}
                onClick={() => setCurrentView(pathway.view)}
                className={`group ${pathway.bgColor} rounded-3xl p-12 cursor-pointer transition-all transform hover:scale-105 hover:shadow-2xl animate-slideUp relative overflow-hidden flex flex-col items-center justify-center text-center`}
                style={{animationDelay: `${0.1 * (idx + 1)}s`}}
              >
                <Icon className={`w-20 h-20 mb-6 ${pathway.textColor} group-hover:scale-125 transition-transform`} />
                <h2 className={`text-2xl font-bold ${pathway.textColor}`}>{pathway.title}</h2>
                
                <div className="absolute top-4 right-4 w-12 h-12 opacity-10 group-hover:opacity-20 transition-opacity">
                  <div className="text-4xl text-white">+</div>
                </div>
              </div>
            );
          })}
        </div>

        {/* Callout Stat */}
        <div className="bg-white rounded-3xl p-8 text-center shadow-lg border-4 border-sunset">
          <p className="text-2xl font-bold text-deep-blue">Over 85% of alumni are continuing to grow and advance in their paths</p>
        </div>
      </div>

      <style>{`
        @keyframes slideUp {
          from {
            opacity: 0;
            transform: translateY(30px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }
        @keyframes fadeIn {
          from { opacity: 0; }
          to { opacity: 1; }
        }
        .animate-slideUp {
          animation: slideUp 0.6s ease-out forwards;
          opacity: 0;
        }
        .animate-fadeIn {
          animation: fadeIn 0.8s ease-out;
        }
      `}</style>
    </div>
  );

  // Professional Career View
  const ProfessionalView = () => (
    <div className="min-h-screen bg-gradient-to-br from-deep-blue to-deep-blue-alt text-white p-8 overflow-y-auto relative">
      <BackgroundShapes />
      
      <button
        onClick={() => setCurrentView('main')}
        className="mb-8 text-sunset hover:text-sunset-sub flex items-center font-semibold relative z-10"
      >
        ← Back to Overview
      </button>

      <div className="max-w-7xl mx-auto space-y-16 relative z-10">
        <section className="animate-slideUp">
          <h1 className="text-5xl font-bold mb-8 text-white">THE PROFESSIONAL PATHWAY</h1>
          <p className="text-xl text-white opacity-90 mb-8">A Proven Pathway to High-Impact Careers</p>
        </section>

        {/* Pie Chart Section */}
        <section className="animate-slideUp" style={{animationDelay: '0.2s'}}>
          <div className="grid grid-cols-2 gap-12 items-center">
            <div className="space-y-6">
              <div>
                <p className="text-5xl font-bold text-sunset mb-2">{counterStats.percentage.toFixed(1)}%</p>
                <p className="text-2xl font-semibold text-white mb-2">of Alumni are Employed</p>
                <p className="text-lg text-white opacity-80 mb-8">1 Year Post-Program</p>
              </div>
              <div className="bg-white bg-opacity-10 rounded-2xl p-6 border-2 border-turquoise">
                <div className="text-sm text-turquoise mb-3 font-bold">BREAKDOWN</div>
                <div className="space-y-3">
                  <div className="flex justify-between items-center">
                    <span className="text-white">Employed</span>
                    <span className="font-bold text-sunset text-lg">171 alumni</span>
                  </div>
                  <div className="flex justify-between items-center text-white opacity-80">
                    <span>Other Pathways</span>
                    <span className="font-semibold">45 alumni</span>
                  </div>
                </div>
              </div>
            </div>

            <div className="flex items-center justify-center h-80">
              <PieChart width={300} height={300}>
                <Pie data={[{name: 'Employed', value: 79.2}, {name: 'Other', value: 20.8}]} cx={150} cy={150} innerRadius={60} outerRadius={100} startAngle={90} endAngle={-270} dataKey="value">
                  <Cell fill="#f98f0f" />
                  <Cell fill="rgba(255,255,255,0.2)" />
                </Pie>
              </PieChart>
                <div className="absolute ml-32 space-y-4">
                <div className="flex items-center gap-3">
                  <div className="w-4 h-4 bg-sunset rounded"></div>
                  <span className="text-white font-semibold">Employed</span>
                </div>
                <div className="flex items-center gap-3">
                  <div className="w-4 h-4 bg-gray-500 rounded"></div>
                  <span className="text-white font-semibold">Other Pathway</span>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Not All Employment is Equal Section */}
        <section className="animate-slideUp" style={{animationDelay: '0.3s'}}>
          <h2 className="text-3xl font-bold mb-8 text-white text-center">Redefining "Employed": MIT Emerging Talent Difference</h2>
          
          <div className="grid grid-cols-2 gap-8">
            {/* Pre */}
            <div className="bg-white bg-opacity-10 rounded-2xl p-8 border-2 border-turquoise text-center">
              <h3 className="text-lg font-bold text-white mb-6">But what did "employed" mean?</h3>
              <p className="text-sm text-turquoise-alt mb-6">Pre MIT Emerging Talent</p>
              
              <div className="flex justify-center mb-8">
                <PieChart width={200} height={200}>
                  <Pie data={[{name: 'Employed', value: 43}, {name: 'Other', value: 57}]} cx={100} cy={100} innerRadius={40} outerRadius={70} startAngle={90} endAngle={-270} dataKey="value">
                    <Cell fill="#f97316" />
                    <Cell fill="#9d2030" />
                  </Pie>
                </PieChart>
              </div>
              <div className="text-sunset font-bold text-sm mb-6">BREAKDOWN OF THAT 43%</div>
              
                <div className="space-y-3 text-left bg-white bg-opacity-5 p-4 rounded-lg border border-turquoise">
                <div className="flex items-center gap-3 text-white text-sm">
                  <div className="w-2 h-2 bg-sunset rounded-full"></div>
                  <span>Entry-Level/Service</span>
                </div>
                <div className="flex items-center gap-3 text-white text-sm">
                  <div className="w-2 h-2 bg-sunset rounded-full"></div>
                  <span>Non-Tech Professional</span>
                </div>
                <div className="flex items-center gap-3 text-white text-sm">
                  <div className="w-2 h-2 bg-sunset rounded-full"></div>
                  <span>Tech (Entry-Level)</span>
                </div>
              </div>
            </div>

            {/* Post */}
            <div className="bg-white bg-opacity-10 rounded-2xl p-8 border-2 border-turquoise text-center">
              <h3 className="text-lg font-bold text-white mb-6">Now "employed" means</h3>
              <p className="text-sm text-turquoise-alt mb-6">Post MIT Emerging Talent</p>
              
              <div className="flex justify-center mb-8">
                <PieChart width={200} height={200}>
                  <Pie data={[{name: 'Employed', value: 79.2}, {name: 'Other', value: 20.8}]} cx={100} cy={100} innerRadius={40} outerRadius={70} startAngle={90} endAngle={-270} dataKey="value">
                    <Cell fill="#f97316" />
                    <Cell fill="#9d2030" />
                  </Pie>
                </PieChart>
              </div>

              <div className="text-sunset font-bold text-sm mb-6">BREAKDOWN OF THAT 79%</div>
              
              <div className="space-y-3 text-left bg-white bg-opacity-5 p-4 rounded-lg border border-turquoise">
                <div className="flex items-center gap-3 text-white text-sm">
                  <div className="w-2 h-2 bg-sunset rounded-full"></div>
                  <span>Senior-Level Tech</span>
                </div>
                <div className="flex items-center gap-3 text-white text-sm">
                  <div className="w-2 h-2 bg-sunset rounded-full"></div>
                  <span>Mid-Level Professional</span>
                </div>
                <div className="flex items-center gap-3 text-white text-sm">
                  <div className="w-2 h-2 bg-sunset rounded-full"></div>
                  <span>Specialized Roles</span>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Career Transformations */}
        <section className="animate-slideUp" style={{animationDelay: '0.4s'}}>
          <h2 className="text-3xl font-bold mb-12 text-white">From Entry-Level to Tech Leadership</h2>

          <div className="mb-16">
            <h3 className="text-2xl font-bold mb-6 text-turquoise">Pivoting to Tech</h3>
            <div className="grid grid-cols-3 gap-6">
              {stories.map((story, idx) => (
                <div
                  key={idx}
                  onClick={() => setSelectedStory(idx)}
                  className="group bg-turquoise rounded-2xl p-6 hover:shadow-xl transition-all cursor-pointer transform hover:scale-105 border-2 border-sunset hover:border-white animate-slideUp relative h-full flex flex-col"
                  style={{animationDelay: `${0.1 * idx}s`}}
                >
                  <div className="text-sm text-deep-blue mb-2 font-bold uppercase tracking-wider">Before</div>
                  <div className="text-lg font-bold mb-3 text-deep-blue">{story.before}</div>
                  <div className="flex justify-center mb-3 group-hover:scale-125 transition-transform">
                    <ArrowRight className="w-6 h-6 text-sunset-sub" />
                  </div>
                  <div className="text-sm text-deep-blue mb-2 font-bold uppercase tracking-wider">After</div>
                  <div className="text-lg font-bold mb-3 text-deep-blue">{story.after}</div>
                  <div className="text-xs font-bold text-sunset mb-4">{story.name}</div>
                  
                  <button className="mt-auto text-sm bg-sunset hover:bg-sunset-sub text-deep-blue px-4 py-2 rounded-lg font-semibold transition-colors self-start">
                    Read Story
                  </button>
                </div>
              ))}
            </div>
          </div>

          <div>
            <h3 className="text-2xl font-bold mb-6 text-sunset">Advancing in Tech</h3>
            <div className="grid grid-cols-3 gap-6">
              {advancedStories.map((person, idx) => (
                <div
                  key={idx}
                  onClick={() => setSelectedStory(stories.length + idx)}
                  className="group bg-sunset rounded-2xl p-6 hover:shadow-xl transition-all cursor-pointer transform hover:scale-105 border-2 border-turquoise hover:border-white animate-slideUp relative h-full flex flex-col"
                  style={{animationDelay: `${0.1 * idx}s`}}
                >
                  <div className="text-sm text-deep-blue mb-2 font-bold uppercase tracking-wider">Before</div>
                  <div className="text-lg font-bold mb-3 text-deep-blue">{person.before}</div>
                  <div className="flex justify-center mb-3 group-hover:scale-125 transition-transform">
                    <ArrowRight className="w-6 h-6 text-deep-blue" />
                  </div>
                  <div className="text-sm text-deep-blue mb-2 font-bold uppercase tracking-wider">After</div>
                  <div className="text-lg font-bold mb-3 text-deep-blue">{person.after}</div>
                  <div className="text-xs font-bold text-turquoise-alt mb-4">{person.name}</div>
                  
                  <button className="mt-auto text-sm bg-deep-blue hover:bg-deep-blue-alt text-white px-4 py-2 rounded-lg font-semibold transition-colors self-start">
                    Read Story
                  </button>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Job Categories */}
        <section className="animate-slideUp" style={{animationDelay: '0.6s'}}>
          <h2 className="text-3xl font-bold mb-8 text-white">A Landscape of Tech Expertise</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {jobCategories.map((category, idx) => (
              <div
                key={idx}
                onClick={() => setSelectedJobCategory(selectedJobCategory === idx ? null : idx)}
                className={`group ${category.bgColor} rounded-2xl p-8 cursor-pointer hover:shadow-xl transition-all transform hover:scale-105 border-2 border-deep-blue hover:border-white animate-slideUp`}
                style={{animationDelay: `${0.1 * idx}s`}}
              >
                <h3 className={`text-2xl font-bold mb-4 ${category.textColor}`}>{category.name}</h3>
                <div className={`text-5xl font-bold mb-2 ${category.textColor}`}>{category.percentage}%</div>
                <p className={`text-sm ${category.textColor} opacity-80 mb-6`}>of Alumni</p>
                <button className={`text-sm font-bold flex items-center ${category.textColor} hover:text-orange-600 transition-colors`}>
                  Explore Jobs Titles<ChevronRight className="w-5 h-5 ml-2" />
                </button>
              </div>
            ))}
          </div>
        </section>

        {/* Employers */}
        <section className="animate-slideUp" style={{animationDelay: '0.8s'}}>
          <h2 className="text-3xl font-bold mb-8 text-white">Trusted by the Top-Tier Organizations</h2>
            <button
            onClick={() => setShowEmployersModal(!showEmployersModal)}
            className="bg-sunset hover:bg-sunset-sub text-deep-blue rounded-2xl p-8 shadow-lg hover:shadow-xl transition-all transform hover:scale-105 text-left w-full group border-2 border-sunset"
          >
            <div className="text-2xl font-bold mb-2 group-hover:text-deep-blue-alt">Explore Top Employers</div>
            <p className="text-deep-blue mb-4 opacity-90">40+ organizations where our alumni work worldwide</p>
            <div className="flex items-center text-deep-blue group-hover:translate-x-2 transition-transform">
              View Employers <ChevronRight className="ml-2 w-5 h-5" />
            </div>
          </button>
        </section>
      </div>

      {/* Story Modal */}
      {selectedStory !== null && (
        <div className="fixed inset-0 bg-black bg-opacity-75 flex items-center justify-center p-4 z-50 animate-fadeIn">
          <div className="bg-deep-blue rounded-2xl p-8 max-w-2xl w-full shadow-2xl transform animate-slideUp border-2 border-turquoise">
            <div className="flex justify-between items-center mb-6">
              <h2 className="text-3xl font-bold text-white">{(selectedStory < stories.length ? stories : advancedStories)[selectedStory < stories.length ? selectedStory : selectedStory - stories.length].name}'s Journey</h2>
              <button onClick={() => setSelectedStory(null)} className="text-sunset hover:text-sunset-sub hover:rotate-90 transition-transform">
                <X className="w-6 h-6" />
              </button>
            </div>
            {(() => {
              const story = selectedStory < stories.length ? stories[selectedStory] : advancedStories[selectedStory - stories.length];
              return (
                <div className="space-y-6">
                  <div className="grid grid-cols-2 gap-4">
                    <div className="bg-turquoise rounded-xl p-4 border-2 border-sunset">
                      <p className="text-sm text-deep-blue mb-2 font-bold uppercase">Before</p>
                      <p className="text-2xl font-bold text-deep-blue">{story.before}</p>
                    </div>
                    <div className="bg-sunset rounded-xl p-4 border-2 border-turquoise">
                      <p className="text-sm text-deep-blue mb-2 font-bold uppercase">After</p>
                      <p className="text-2xl font-bold text-deep-blue">{story.after}</p>
                    </div>
                  </div>
                  <div className="bg-white bg-opacity-10 rounded-xl p-6 border-2 border-turquoise">
                    <p className="text-lg text-white">{story.story}</p>
                  </div>
                </div>
              );
            })()}
          </div>
        </div>
      )}

      {/* Job Category Modal */}
      {selectedJobCategory !== null && (
        <div className="fixed inset-0 bg-black bg-opacity-75 flex items-center justify-center p-4 z-50 animate-fadeIn">
          <div className="bg-deep-blue rounded-2xl p-8 max-w-2xl w-full shadow-2xl transform animate-slideUp border-2 border-turquoise">
            <div className="flex justify-between items-center mb-6">
              <h2 className="text-3xl font-bold text-white">{jobCategories[selectedJobCategory].name}</h2>
              <button onClick={() => setSelectedJobCategory(null)} className="text-sunset hover:text-sunset-sub hover:rotate-90 transition-transform">
                <X className="w-6 h-6" />
              </button>
            </div>
            <div className={`${jobCategories[selectedJobCategory].bgColor} rounded-xl p-6 mb-6 border-2 border-white`}>
              <p className="text-sm text-deep-blue mb-2 font-bold uppercase">Alumni Distribution</p>
              <div className="text-5xl font-bold text-deep-blue">{jobCategories[selectedJobCategory].percentage}%</div>
            </div>
            <div>
              <h3 className="text-lg font-bold mb-4 text-white"> Alumni Job Highlights</h3>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
                {jobCategories[selectedJobCategory].jobs.map((job, idx) => (
                  <div key={idx} className="bg-white bg-opacity-10 rounded-lg p-4 flex items-start border-2 border-turquoise hover:border-sunset transition-colors animate-slideUp" style={{animationDelay: `${0.05 * idx}s`}}>
                    <Star className="w-5 h-5 mr-3 flex-shrink-0 text-sunset" />
                    <span className="font-semibold text-white">{job}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      )}

      {/* Employers Modal */}
      {showEmployersModal && (
        <div className="fixed inset-0 bg-black bg-opacity-75 flex items-center justify-center p-4 z-50 overflow-y-auto animate-fadeIn">
          <div className="bg-deep-blue rounded-2xl p-8 max-w-5xl w-full my-8 shadow-2xl transform animate-slideUp border-2 border-turquoise">
            <div className="flex justify-between items-center mb-8">
              <h2 className="text-3xl font-bold text-white">Our Top Employers</h2>
              <button onClick={() => setShowEmployersModal(false)} className="text-sunset hover:text-sunset-sub hover:rotate-90 transition-transform">
                <X className="w-6 h-6" />
              </button>
            </div>
            <div className="space-y-8 max-h-96 overflow-y-auto">
              {Object.entries(employers).map((category, idx) => (
                <div key={idx} className="animate-slideUp" style={{animationDelay: `${0.1 * idx}s`}}>
                  <h3 className="text-lg font-bold text-sunset mb-4">{category[0]}</h3>
                  <div className="grid grid-cols-2 md:grid-cols-4 gap-3">
                    {category[1].map((company, cidx) => (
                      <div key={cidx} className="bg-turquoise rounded-lg p-4 text-center font-semibold text-deep-blue hover:bg-sunset hover:border-white transition-all transform cursor-pointer border-2 border-deep-blue animate-slideUp" style={{animationDelay: `${0.03 * cidx}s`}}>
                        {company}
                      </div>
                    ))}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      )}
    </div>
  );

  // Academic View
  const AcademicView = () => (
    <div className="min-h-screen bg-gradient-to-br from-deep-blue to-deep-blue-alt text-white p-8 overflow-y-auto relative">
      <BackgroundShapes />

      <button
        onClick={() => setCurrentView('main')}
        className="mb-8 text-sunset hover:text-sunset-sub flex items-center font-semibold relative z-10"
      >
        ← Back to Overview
      </button>

      <div className="max-w-6xl mx-auto space-y-16 relative z-10">
        <section className="animate-slideUp">
          <h1 className="text-5xl font-bold mb-8 text-white">THE ACADEMIC PATHWAY</h1>
          
          {/* Key Stat */}
          <div className="bg-white bg-opacity-10 rounded-2xl p-8 border-2 border-turquoise shadow-lg mb-12">
            <div className="flex items-center gap-4">
              <div className="text-6xl font-bold text-sunset">53.3%</div>
              <div className="text-xl text-white">of unemployed alumni are pursuing undergraduate or graduate degrees at top universities worldwide</div>
            </div>
          </div>

          <div className="bg-sunset rounded-2xl p-10 border-2 border-turquoise shadow-lg">
            <div className="text-6xl font-bold text-deep-blue">80%+</div>
            <p className="text-2xl mt-3 text-deep-blue">of Alumni Hold a University Degree</p>
          </div>
        </section>

        <section className="animate-slideUp" style={{animationDelay: '0.2s'}}>
          <h2 className="text-3xl font-bold mb-8 text-white">A Focus on In-Demand Fields</h2>
          <p className="text-lg text-white opacity-90 mb-8">Our alumni choose disciplines at the heart of today's critical industries, aligning education with opportunity and driving innovation across global institutions.</p>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
            {[
              { field: 'Computer & IT', percentage: 30 },
              { field: 'Business & Economics', percentage: 19 },
              { field: 'Engineering', percentage: 18 }
            ].map((item, idx) => (
              <div key={idx} className="bg-turquoise rounded-xl p-6 hover:shadow-lg transition-all transform hover:scale-105 border-2 border-sunset animate-slideUp group" style={{animationDelay: `${0.1 * idx}s`}}>
                <div className="text-5xl font-bold mb-2 text-deep-blue group-hover:text-sunset-sub transition-colors">{item.percentage}%</div>
                <p className="text-lg font-semibold text-deep-blue">{item.field}</p>
              </div>
            ))}
          </div>
        </section>

        <section className="animate-slideUp" style={{animationDelay: '0.8s'}}>
          <h2 className="text-3xl font-bold mb-8 text-white">Placements at World-Class Institutions</h2>
          <button
            onClick={() => setShowUniversitiesModal(!showUniversitiesModal)}
            className="bg-turquoise hover:bg-turquoise-alt text-deep-blue rounded-2xl p-8 shadow-lg hover:shadow-xl transition-all transform hover:scale-105 text-left w-full group border-2 border-turquoise"
          >
            <div className="text-2xl font-bold mb-2 group-hover:text-deep-blue-alt">Top University Placements</div>
            <p className="text-deep-blue mb-4">Explore institutions where our alumni study</p>
            <div className="flex items-center text-deep-blue group-hover:translate-x-2 transition-transform">
              Explore <ChevronRight className="ml-2 w-5 h-5" />
            </div>
          </button>

                    <div className="mt-8">
            <h3 className="text-2xl font-bold text-white mb-6">Discover the Scholarships Our Alumni Have Secured</h3>
            <div className="grid grid-cols-3 gap-6">
              {scholarships.map((scholarship, idx) => (
                <div key={idx} className="bg-sunset rounded-xl p-6 text-center transform hover:scale-105 transition-transform border-2 border-white hover:border-turquoise animate-slideUp" style={{animationDelay: `${0.1 * idx}s`}}>
                  <div className="text-lg font-bold text-deep-blue">{scholarship}</div>
                </div>
              ))}
            </div>
          </div>
        </section>

        <section className="animate-slideUp" style={{animationDelay: '1s'}}>
          <h2 className="text-3xl font-bold mb-8 text-white">Meet Our Scholars: Journeys of Resilience and Excellence</h2>
          <div className="grid grid-cols-3 gap-6">
            {scholars.map((scholar, idx) => (
              <div
                key={idx}
                onClick={() => setSelectedScholar(idx)}
                className="group bg-turquoise rounded-3xl overflow-hidden hover:shadow-2xl transition-all cursor-pointer transform hover:scale-105 border-4 border-sunset hover:border-white animate-slideUp relative flex flex-col h-full"
                style={{animationDelay: `${0.1 * idx}s`}}
              >
                {/* Header with Degree and University */}
                <div className="p-6 text-center">
                  <div className="text-lg font-bold text-deep-blue mb-2">{scholar.degree}</div>
                  <div className="text-sm font-semibold text-deep-blue italic opacity-80">{scholar.university}</div>
                </div>

                {/* Scholar name and story */}
                <div className="px-6 pb-6 flex flex-col flex-grow">
                  <h3 className="text-xl font-bold mb-4 text-deep-blue text-center">{scholar.name}'s Journey</h3>
                  <p className="text-sm text-deep-blue mb-6 flex-grow line-clamp-4">{scholar.teaser}</p>
                </div>

                {/* Button */}
                <div className="px-6 pb-6">
                  <button className="w-full text-base bg-sunset hover:bg-sunset-sub text-white font-semibold px-4 py-2 rounded-lg transition-colors">
                    Read {scholar.name === 'Morteza' ? 'His' : 'Her'} Story
                  </button>
                </div>
              </div>
            ))}
          </div>
        </section>
      </div>

      {showUniversitiesModal && (
        <div className="fixed inset-0 bg-black bg-opacity-75 flex items-center justify-center p-4 z-50 overflow-y-auto animate-fadeIn">
          <div className="bg-deep-blue rounded-2xl p-8 max-w-4xl w-full my-8 shadow-2xl transform animate-slideUp border-2 border-turquoise">
            <div className="flex justify-between items-center mb-8">
              <h2 className="text-3xl font-bold text-white">Top University Placements</h2>
              <button onClick={() => setShowUniversitiesModal(false)} className="text-sunset hover:text-sunset-sub hover:rotate-90 transition-transform">
                <X className="w-6 h-6" />
              </button>
            </div>
            <div className="grid grid-cols-2 md:grid-cols-3 gap-4 max-h-80 overflow-y-auto">
              {universities.map((uni, idx) => (
                <div key={idx} className="bg-turquoise rounded-lg p-4 hover:shadow-lg transition-all hover:scale-105 transform cursor-pointer border-2 border-sunset animate-slideUp font-bold text-deep-blue" style={{animationDelay: `${0.05 * idx}s`}}>
                  {uni}
                </div>
              ))}
            </div>
          </div>
        </div>
      )}

      {/* Scholar Story Modal */}
      {selectedScholar !== null && (
        <div className="fixed inset-0 bg-black bg-opacity-75 flex items-center justify-center p-4 z-50 animate-fadeIn">
          <div className="bg-deep-blue rounded-2xl p-8 max-w-2xl w-full shadow-2xl transform animate-slideUp border-2 border-turquoise">
            <div className="flex justify-between items-center mb-6">
              <h2 className="text-3xl font-bold text-white">{scholars[selectedScholar].name}'s Journey</h2>
              <button onClick={() => setSelectedScholar(null)} className="text-sunset hover:text-sunset-sub hover:rotate-90 transition-transform">
                <X className="w-6 h-6" />
              </button>
            </div>
            <div className="space-y-6">
              <div className="bg-turquoise rounded-xl p-6 border-2 border-sunset">
                <p className="font-bold text-deep-blue mb-2">{scholars[selectedScholar].degree}</p>
                <p className="italic text-deep-blue">{scholars[selectedScholar].university}</p>
              </div>
              <div className="bg-white bg-opacity-10 rounded-xl p-6 border-2 border-turquoise">
                <p className="text-lg text-white mb-6">{scholars[selectedScholar].fullStory}</p>
                <div className="text-2xl italic text-sunset font-semibold">"{scholars[selectedScholar].quote}"</div>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );

  // Entrepreneurship View
  const EntrepreneurshipView = () => (
    <div className="min-h-screen bg-gradient-to-br from-deep-blue to-deep-blue-alt text-white p-8 overflow-y-auto relative">
      <BackgroundShapes />

      <button
        onClick={() => setCurrentView('main')}
        className="mb-8 text-sunset hover:text-sunset-sub flex items-center font-semibold relative z-10"
      >
        ← Back to Overview
      </button>

      <div className="max-w-7xl mx-auto space-y-16 relative z-10">
        <section className="animate-slideUp">
          <h1 className="text-5xl font-bold mb-8 text-white">THE ENTREPRENEURIAL PATHWAY</h1>
          <p className="text-xl text-white opacity-90 mb-8">A diverse portfolio of {ventures.length}+ Initiatives creating tangible community impact</p>
        </section>

        <section className="animate-slideUp" style={{animationDelay: '0.2s'}}>
          <h2 className="text-3xl font-bold mb-8 text-white">A Diverse Portfolio of Initiatives</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-6">
            {ventures.map((venture, idx) => (
              <div
                key={idx}
                onClick={() => { setSelectedVenture(venture.name); setShowVentureModal(true); }}
                className="group bg-turquoise rounded-xl p-6 hover:shadow-xl transition-all transform hover:scale-105 cursor-pointer border-2 border-sunset hover:border-white animate-slideUp flex flex-col"
                style={{animationDelay: `${0.05 * idx}s`}}
              >
                <div>
                  <h3 className="text-xl font-bold mb-1 text-deep-blue">{venture.name}</h3>
                  <div className="text-sm text-deep-blue mb-2">by: <span className="font-semibold">{venture.alumni}</span></div>
                  <p className="text-sm text-deep-blue mb-3 opacity-90">{venture.focus}</p>
                  <div className="text-xs bg-sunset text-deep-blue px-3 py-1 rounded inline-block mb-3 font-semibold">{venture.category}</div>
                  <p className="font-semibold text-deep-blue text-sm mb-4">{venture.impact}</p>
                </div>

                <div className="mt-auto text-right">
                  <button
                    onClick={() => { setSelectedVenture(venture.name); setShowVentureModal(true); }}
                    className="text-sm font-bold flex items-center text-white bg-deep-blue hover:bg-deep-blue-alt px-3 py-2 rounded transition-colors"
                  >
                    Explore Initiative <ChevronRight className="ml-2 w-4 h-4" />
                  </button>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* Venture Modal (shows ventureDescriptions content) */}
        {showVentureModal && selectedVenture && (
          <div className="fixed inset-0 bg-black bg-opacity-75 flex items-center justify-center p-4 z-50 animate-fadeIn">
            <div className="bg-deep-blue rounded-2xl p-8 max-w-3xl w-full my-8 shadow-2xl transform animate-slideUp border-2 border-turquoise">
              <div className="flex justify-between items-start mb-6">
                <div>
                  <h2 className="text-2xl font-bold text-white">{selectedVenture}</h2>
                  <div className="text-sm text-sunset font-semibold mt-1">by: {ventures.find(v => v.name === selectedVenture)?.alumni || '—'}</div>
                </div>
                <button onClick={() => { setShowVentureModal(false); setSelectedVenture(null); }} className="text-sunset hover:text-sunset-sub">
                  <X className="w-6 h-6" />
                </button>
              </div>
              <div className="space-y-4">
                <div className="bg-white bg-opacity-5 rounded-xl p-4 border-2 border-turquoise">
                  <p className="text-white">{ventureDescriptions[selectedVenture] || 'Description not available.'}</p>
                </div>
                <div className="text-sm text-deep-blue">
                  <div className="inline-block bg-sunset px-3 py-1 rounded mr-2 font-semibold text-deep-blue">{ventures.find(v => v.name === selectedVenture)?.category}</div>
                  <span className="font-semibold text-deep-blue">{ventures.find(v => v.name === selectedVenture)?.impact}</span>
                </div>
              </div>
            </div>
          </div>
        )}

        {/* Impact Multiplier */}
        <section className="animate-slideUp" style={{animationDelay: '0.4s'}}>
          <h2 className="text-3xl font-bold mb-8 text-white">The Multiplier Effect</h2>
          <div className="bg-white bg-opacity-10 rounded-2xl p-8 mb-8 border-2 border-turquoise">
            <p className="text-lg text-white italic">
              "Our entrepreneurs are not just building businesses; they are building communities. Their initiatives are a testament to the program's focus on agency and problem-solving."
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              { stat: '1000+', label: 'People Trained', desc: 'via ADAI Circle', bgColor: 'bg-turquoise' },
              { stat: '200+', label: 'Women & Girls Empowered', desc: 'via SheRise', bgColor: 'bg-sunset' },
              { stat: '500+', label: 'People Mentored', desc: 'Across all initiatives', bgColor: 'bg-turquoise' }
            ].map((metric, idx) => (
              <div key={idx} className={`${metric.bgColor} rounded-xl p-8 text-center transform hover:scale-105 transition-transform border-2 border-deep-blue hover:border-white animate-slideUp`} style={{animationDelay: `${0.1 * idx}s`}}>
                <div className="text-6xl font-bold mb-2 text-deep-blue animate-pulse">{metric.stat}</div>
                <p className="text-lg font-semibold mb-1 text-deep-blue">{metric.label}</p>
                <p className="text-sm text-deep-blue opacity-80">{metric.desc}</p>
              </div>
            ))}
          </div>
        </section>
      </div>
    </div>
  );

  return (
    <>
      {currentView === 'main' && <MainView />}
      {currentView === 'professional-career' && <ProfessionalView />}
      {currentView === 'higher-education' && <AcademicView />}
      {currentView === 'entrepreneurship' && <EntrepreneurshipView />}
    </>
  );
}
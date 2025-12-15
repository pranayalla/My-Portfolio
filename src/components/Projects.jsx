import React, { useState } from 'react';
import { Github, ExternalLink, Code } from 'lucide-react';
import CodeModal from './CodeModal';
import '../index.css';

const Projects = () => {
  const [selectedProject, setSelectedProject] = useState(null);

  const projects = [
    {
      title: "Cen Skill Connect",
      subtitle: "Full Stack Recruitment Platform",
      tech: ["React.js", "Firebase", "Gemini API", "Node.js", "Material UI"],
      description: "An AI-powered job recruitment platform connecting 500+ job seekers with recruiters. Features intelligent matching algorithms, real-time communication, and automated resume parsing.",
      points: [
        "Reduced recruiter screening time by 60% with automated matching.",
        "Integrated Gemini API for AI-driven skill matching (85% accuracy).",
        "Implemented RESTful APIs and Firebase Cloud Functions."
      ],
      links: {
        github: "#",
        live: "#"
      },
      files: [
        {
          name: "App.jsx",
          code: `import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { Toaster } from 'react-hot-toast';
import Login from './pages/Login';
import Dashboard from './pages/Dashboard';
import Internships from './pages/Internships';
import Jobs from './pages/Jobs';
import Practice from './pages/Practice';
import Mentorship from './pages/Mentorship';
import CodingTest from './pages/CodingTest';
import AptitudeTest from './pages/AptitudeTest';
import ReasoningTest from './pages/ReasoningTest';
import ResumeBuilder from './pages/ResumeBuilder';
import ApplicationForm from './pages/ApplicationForm';
import Chatbot from './components/Chatbot';

function App() {
  return (
    <BrowserRouter>
      <div className="min-h-screen bg-gradient-to-br from-gray-900 via-gray-800 to-black text-gray-100">
        <Routes>
          <Route path="/" element={<Login />} />
          <Route path="/dashboard" element={<Dashboard />} />
          <Route path="/internships" element={<Internships />} />
          <Route path="/jobs" element={<Jobs />} />
          <Route path="/practice" element={<Practice />} />
          <Route path="/mentorship" element={<Mentorship />} />
          <Route path="/practice/coding" element={<CodingTest />} />
          <Route path="/practice/aptitude" element={<AptitudeTest />} />
          <Route path="/practice/reasoning" element={<ReasoningTest />} />
          <Route path="/practice/resume" element={<ResumeBuilder />} />
          <Route path="/apply" element={<ApplicationForm />} />
        </Routes>
        <Chatbot />
        <Toaster position="top-right" />
      </div>
    </BrowserRouter>
  );
}

// Ensure that App is exported as default
export default App;`
        },
        {
          name: "chatbot.tsx",
          code: `import React, { useState } from 'react';
import { MessageCircle, X, Send } from 'lucide-react';

const botResponses = {
  internships: "We offer internships in Software Development, Data Science, UI/UX Design, and more. Let me know your area of interest!",
  jobs: "Explore fresher and experienced roles across cities. Let me know your preferred job type or location.",
  practice: "Our practice section includes Coding, Aptitude, Reasoning, and Resume Builder sections to help you prepare.",
  account: "Create an account with Sign Up, or log in if you already have one.",
  contact: "For support, reach us at support@censkillconnect.com",
  default: ["I'm here to help! You can ask me about internships, jobs, practice tests, or account-related questions.", 
            "Feel free to ask about any internships, job roles, or practice sessions you’re interested in.",
            "I'm your assistant! Ask me anything related to jobs, internships, or practice options."]
};

const GEMINI_API_KEY = "AIzaSyAyTvKJ-7x-x93uiAgfYR3YmVWImVYFreY"; // Update with your actual key

async function fetchGeminiResponse(query, history) {
  try {
    const response = await fetch("GEMINI_API_ENDPOINT", {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        'Authorization': \`Bearer \${GEMINI_API_KEY}\`
      },
      body: JSON.stringify({ query, history })
    });

    if (!response.ok) {
      console.error(\`API error: \${response.status} - \${response.statusText}\`);
      return null;
    }

    const data = await response.json();
    console.log("Gemini API response:", data); // Log the raw API response

    return data?.answer || null;
  } catch (error) {
    console.error("Fetch error:", error);
    return null;
  }
}

export default function Chatbot() {
  const [isOpen, setIsOpen] = useState(false);
  const [messages, setMessages] = useState([
    { text: "Hi! How can I help you today?", isBot: true }
  ]);
  const [input, setInput] = useState('');

  const handleSend = async () => {
    if (!input.trim()) return;

    setMessages(prev => [...prev, { text: input, isBot: false }]);
    const history = messages.map(msg => ({ role: msg.isBot ? 'assistant' : 'user', content: msg.text }));

    // Try fetching a response from Gemini
    let response = await fetchGeminiResponse(input, history);

    // Use regex keyword-based fallback if Gemini response is unavailable
    if (!response) {
      const keywordMatch = Object.entries(botResponses).find(([key]) => 
        new RegExp(\`\\\\b\${key}\\\\b\`, 'i').test(input)
      );
      response = keywordMatch ? keywordMatch[1] : botResponses.default[Math.floor(Math.random() * botResponses.default.length)];
    }

    setMessages(prev => [...prev, { text: response, isBot: true }]);
    setInput('');
  };

  return (
    <>
      <button
        onClick={() => setIsOpen(true)}
        className="fixed bottom-4 right-4 bg-red-500 text-white p-3 rounded-full shadow-lg hover:bg-red-600 transition-all z-50"
      >
        <MessageCircle className="w-6 h-6" />
      </button>

      {isOpen && (
        <div className="fixed bottom-20 right-4 w-80 bg-gray-900 rounded-xl shadow-2xl border border-gray-700 z-50">
          <div className="flex items-center justify-between p-4 border-b border-gray-700">
            <h3 className="font-semibold">CenSkill Assistant</h3>
            <button onClick={() => setIsOpen(false)}>
              <X className="w-5 h-5 text-gray-400 hover:text-white" />
            </button>
          </div>

          <div className="h-96 overflow-y-auto p-4 space-y-4">
            {messages.map((msg, i) => (
              <div
                key={i}
                className={\`flex \${msg.isBot ? 'justify-start' : 'justify-end'}\`}
              >
                <div
                  className={\`max-w-[80%] p-3 rounded-lg \${
                    msg.isBot
                      ? 'bg-gray-800 text-white'
                      : 'bg-red-500 text-white'
                  }\`}
                >
                  {msg.text}
                </div>
              </div>
            ))}
          </div>

          <div className="p-4 border-t border-gray-700">
            <div className="flex items-center space-x-2">
              <input
                type="text"
                value={input}
                onChange={(e) => setInput(e.target.value)}
                onKeyPress={(e) => e.key === 'Enter' && handleSend()}
                placeholder="Type your message..."
                className="flex-1 bg-gray-800 border border-gray-700 rounded-lg px-4 py-2 focus:outline-none focus:ring-2 focus:ring-red-500"
              />
              <button
                onClick={handleSend}
                className="p-2 bg-red-500 text-white rounded-lg hover:bg-red-600"
              >
                <Send className="w-5 h-5" />
              </button>
            </div>
          </div>
        </div>
      )}
    </>
  );
}`
        },
        {
          name: "TopCompanies.tsx",
          code: `import React from 'react';

const companies = [
  {
    name: 'Shell',
    industry: 'Consulting & Technology Services',
    openings: 20,
    logo: 'https://1000logos.net/wp-content/uploads/2017/06/Shell-Logo-500x421.png',
    description: 'Shell provides consulting, technology services, and solutions to clients worldwide.'
  },
  {
    name: 'Amazon',
    industry: 'E-Commerce & Cloud Computing',
    openings: 35,
    logo: 'https://upload.wikimedia.org/wikipedia/commons/a/a9/Amazon_logo.svg',
    description: 'Amazon is a global leader in e-commerce and cloud computing services.'
  },
  {
    name: 'Google',
    industry: 'Technology & Internet Services',
    openings: 30,
    logo: 'https://upload.wikimedia.org/wikipedia/commons/2/2f/Google_2015_logo.svg',
    description: 'Google specializes in internet services, software, and hardware development.'
  },
  {
    name: 'Microsoft',
    industry: 'Software & Technology',
    openings: 25,
    logo: 'https://upload.wikimedia.org/wikipedia/commons/4/44/Microsoft_logo.svg',
    description: 'Microsoft is a technology company known for its software products and services.'
  },
  {
    name: 'IBM',
    industry: 'Cloud Computing & AI',
    openings: 18,
    logo: 'https://upload.wikimedia.org/wikipedia/commons/5/51/IBM_logo.svg',
    description: 'IBM is a global technology and consulting company specializing in cloud computing and AI solutions.'
  },
  {
    name: 'Facebook (Meta)',
    industry: 'Social Media & Technology',
    openings: 15,
    logo: 'https://logos-world.net/wp-content/uploads/2020/05/Facebook-Logo.png',
    description: 'Meta is the parent company of Facebook, focusing on social media and the metaverse.'
  },
  {
    name: 'Oracle',
    industry: 'Database Software & Cloud Solutions',
    openings: 12,
    logo: 'https://logos-world.net/wp-content/uploads/2020/09/Oracle-Logo-700x394.png',
    description: 'Oracle is a leader in database software and offers cloud solutions for enterprises.'
  },
  {
    name: 'SAP',
    industry: 'Enterprise Software',
    openings: 10,
    logo: 'https://e7.pngegg.com/pngimages/25/122/png-clipart-sap-se-business-logo-sap-erp-successfactors-business-blue-text.png',
    description: 'SAP provides enterprise software to manage business operations and customer relations.'
  }
];

export default function TopCompanies() {
  return (
    <div className="mt-12">
      <h2 className="text-2xl font-semibold mb-6">Top Hiring Companies</h2>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        {companies.map((company, index) => (
          <div
            key={company.name}
            className="group text-center hover:scale-105 transform transition-all duration-300 animate-fade-in"
            style={{ animationDelay: \`\${index * 150}ms\` }}
          >
            <img
              src={company.logo}
              alt={company.name}
              className="w-full h-auto mb-2" // Remove rounding and use full logo
              style={{ maxHeight: '50px', objectFit: 'contain' }} // Maintain aspect ratio
            />
            <div>
              <h3 className="font-semibold text-white">{company.name}</h3>
              <p className="text-sm text-gray-300">{company.industry}</p>
            </div>
            <div className="text-sm text-white font-light mt-2 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
              {company.description}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
`
        }
      ]
    },
    {
      title: "Nunito - AI Conversational Chatbot",
      subtitle: "Computer Vision & NLP Bot",
      tech: ["React.js", "Gemini API", "Computer Vision", "REST APIs"],
      description: "Interactive full-stack chatbot with computer vision capabilities for real-time image analysis. Handles 200+ concurrent sessions with sub-second response times.",
      points: [
        "Processed and analyzed 500+ images daily with multi-modal AI.",
        "Engineered responsive frontend with robust state management.",
        "Seamless natural language responses using Gemini Vision API."
      ],
      links: {
        github: "#",
        live: "#"
      },
      files: [
        {
          name: "App.jsx",
          code: `import React from 'react';
import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom';
import { useChatStore } from './store/chatStore';
import Login from './pages/Login';
import Chat from './pages/Chat';

function PrivateRoute({ children }: { children: React.ReactNode }) {
  const { user } = useChatStore();
  return user ? <>{children}</> : <Navigate to="/" />;
}

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Login />} />
        <Route
          path="/chat"
          element={
            <PrivateRoute>
              <Chat />
            </PrivateRoute>
          }
        />
      </Routes>
    </BrowserRouter>
  );
}

export default App;`
        },
        {
          name: "ChatControls.tsx",
          code: `import React from 'react';
import { Download, Trash2 } from 'lucide-react';
import { useChatStore } from '../store/chatStore';

export default function ChatControls() {
  const { messages, clearMessages } = useChatStore();

  const downloadTranscript = () => {
    const transcript = messages
      .map((msg) => \`\${msg.role}: \${msg.content}\`)
      .join('\\n\\n');
    
    const blob = new Blob([transcript], { type: 'text/plain' });
    const url = URL.createObjectURL(blob);
    const a = document.createElement('a');
    a.href = url;
    a.download = \`nunito-chat-\${new Date().toISOString()}.txt\`;
    document.body.appendChild(a);
    a.click();
    document.body.removeChild(a);
    URL.revokeObjectURL(url);
  };

  if (messages.length === 0) return null;

  return (
    <div className="fixed bottom-20 right-4 flex flex-col gap-2">
      <button
        onClick={downloadTranscript}
        className="p-2 rounded-full bg-blue-500 text-white hover:bg-blue-600 transition-colors"
        title="Download chat transcript"
      >
        <Download size={20} />
      </button>
      <button
        onClick={clearMessages}
        className="p-2 rounded-full bg-red-500 text-white hover:bg-red-600 transition-colors"
        title="Clear chat"
      >
        <Trash2 size={20} />
      </button>
    </div>
  );
}`
        },
        {
          name: "ChatInput.tsx",
          code: `import React, { useState, useRef } from 'react';
import { Mic, Image, Send, Loader2 } from 'lucide-react';
import { useChatStore } from '../store/chatStore';
import { generateTextResponse, analyzeImage } from '../services/gemini';
import { SpeechService } from '../services/speech';

export default function ChatInput() {
  const [input, setInput] = useState('');
  const [isRecording, setIsRecording] = useState(false);
  const fileInputRef = useRef<HTMLInputElement>(null);
  const { addMessage, isThinking, setThinking, currentMode, autoSpeak } = useChatStore();
  const speechService = useRef(new SpeechService());

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!input.trim() || isThinking) return;

    const userMessage = input.trim();
    addMessage({
      role: 'user',
      content: userMessage,
      type: currentMode,
    });
    setInput('');
    setThinking(true);

    try {
      const response = await generateTextResponse(userMessage);
      addMessage({
        role: 'assistant',
        content: response,
        type: 'text',
      });
      if (autoSpeak) {
        speechService.current.speak(response);
      }
    } catch (error) {
      addMessage({
        role: 'assistant',
        content: 'I apologize, but I encountered an error processing your request.',
        type: 'text',
      });
    } finally {
      setThinking(false);
    }
  };

  const handleVoiceInput = () => {
    if (isRecording) {
      speechService.current.stopListening();
      setIsRecording(false);
    } else {
      setIsRecording(true);
      speechService.current.startListening(
        (text) => setInput(text),
        () => setIsRecording(false)
      );
    }
  };

  const handleImageUpload = async (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (!file) return;

    const reader = new FileReader();
    reader.onload = async (event) => {
      const imageData = event.target?.result as string;
      addMessage({
        role: 'user',
        content: 'Can you analyze this image?',
        type: 'image',
        imageUrl: imageData,
      });
      setThinking(true);

      try {
        const response = await analyzeImage(imageData, 'Please analyze this image and describe what you see.');
        addMessage({
          role: 'assistant',
          content: response,
          type: 'text',
        });
        if (autoSpeak) {
          speechService.current.speak(response);
        }
      } catch (error) {
        addMessage({
          role: 'assistant',
          content: 'I apologize, but I encountered an error analyzing the image.',
          type: 'text',
        });
      } finally {
        setThinking(false);
      }
    };
    reader.readAsDataURL(file);
  };

  const renderInput = () => {
    switch (currentMode) {
      case 'voice':
        return (
          <>
            <button
              type="button"
              onClick={handleVoiceInput}
              className={\`p-2 rounded-full \${
                isRecording ? 'bg-red-500 text-white' : 'bg-gray-100 dark:bg-gray-700'
              } hover:opacity-80 transition-opacity\`}
            >
              <Mic size={20} />
            </button>
            <input
              type="text"
              value={input}
              onChange={(e) => setInput(e.target.value)}
              placeholder="Speak or type your message..."
              className="flex-1 p-2 rounded-lg border dark:border-gray-700 bg-gray-50 dark:bg-gray-900 focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
          </>
        );
      case 'image':
        return (
          <>
            <button
              type="button"
              onClick={() => fileInputRef.current?.click()}
              className="p-2 rounded-full bg-gray-100 dark:bg-gray-700 hover:opacity-80 transition-opacity"
            >
              <Image size={20} />
            </button>
            <input
              type="file"
              ref={fileInputRef}
              onChange={handleImageUpload}
              accept="image/*"
              className="hidden"
            />
            <input
              type="text"
              value={input}
              onChange={(e) => setInput(e.target.value)}
              placeholder="Upload an image or ask a question..."
              className="flex-1 p-2 rounded-lg border dark:border-gray-700 bg-gray-50 dark:bg-gray-900 focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
          </>
        );
      default:
        return (
          <input
            type="text"
            value={input}
            onChange={(e) => setInput(e.target.value)}
            placeholder="Type your message..."
            className="flex-1 p-2 rounded-lg border dark:border-gray-700 bg-gray-50 dark:bg-gray-900 focus:outline-none focus:ring-2 focus:ring-blue-500"
          />
        );
    }
  };

  return (
    <form onSubmit={handleSubmit} className="p-4 border-t dark:border-gray-700 bg-white dark:bg-gray-800">
      <div className="flex items-center gap-2 max-w-4xl mx-auto">
        {renderInput()}
        <button
          type="submit"
          disabled={isThinking || !input.trim()}
          className="p-2 rounded-full bg-blue-500 text-white hover:bg-blue-600 disabled:opacity-50 transition-all"
        >
          {isThinking ? <Loader2 className="animate-spin" size={20} /> : <Send size={20} />}
        </button>
      </div>
    </form>
  );
}`
        },
        {
          name: "ChatMessage.tsx",
          code: `import React from 'react';
import { User, MessageSquare } from 'lucide-react';
import ReactMarkdown from 'react-markdown';
import { Prism as SyntaxHighlighter } from 'react-syntax-highlighter';
import { tomorrow } from 'react-syntax-highlighter/dist/esm/styles/prism';
import { Message } from '../types';

interface ChatMessageProps {
  message: Message;
}

export default function ChatMessage({ message }: ChatMessageProps) {
  const isUser = message.role === 'user';

  return (
    <div className={\`flex gap-3 \${isUser ? 'flex-row-reverse' : ''} p-4\`}>
      <div className="flex-shrink-0">
        {isUser ? (
          <div className="w-8 h-8 rounded-full bg-blue-500 flex items-center justify-center">
            <User size={20} className="text-white" />
          </div>
        ) : (
          <div className="w-8 h-8 rounded-full bg-purple-500 flex items-center justify-center">
            <MessageSquare size={20} className="text-white" />
          </div>
        )}
      </div>
      <div
        className={\`flex-1 max-w-2xl \${
          isUser ? 'bg-blue-500 text-white' : 'bg-gray-100 dark:bg-gray-800'
        } rounded-lg p-4\`}
      >
        {message.type === 'image' && message.imageUrl && (
          <img src={message.imageUrl} alt="User upload" className="max-w-sm rounded-lg mb-2" />
        )}
        <ReactMarkdown
          components={{
            code({ node, inline, className, children, ...props }) {
              const match = /language-(\\w+)/.exec(className || '');
              return !inline && match ? (
                <SyntaxHighlighter
                  style={tomorrow}
                  language={match[1]}
                  PreTag="div"
                  {...props}
                >
                  {String(children).replace(/\\n$/, '')}
                </SyntaxHighlighter>
              ) : (
                <code className={className} {...props}>
                  {children}
                </code>
              );
            },
          }}
        >
          {message.content}
        </ReactMarkdown>
      </div>
    </div>
  );
}`
        }
      ]
    },
    {
      title: "AR Car Comparison App",
      subtitle: "Augmented Reality & AI-Based Mobile Application",
      tech: ["Kotlin", "ARCore", "Jetpack Compose", "TensorFlow Lite", "OpenCV", "Android Studio"],
      description: "An Android-based AR application that allows users to compare two cars in real time using augmented reality and AI-powered object detection. The app visualizes cars in real-world environments and intelligently analyzes similarities and differences.",
      points: [
        "Enabled real-time AR visualization of two cars using mobile camera and ARCore.",
        "Implemented AI-based object detection and similarity matching for accurate comparisons.",
        "Optimized on-device ML models (TensorFlow Lite) for low-latency performance.",
        "Designed a side-by-side comparison UI for visual and feature-level analysis."
      ],
      links: {
        github: "#",
        live: "#"
      }
    }
  ];

  return (
    <section id="projects" style={{ padding: '6rem 0', background: 'var(--bg-secondary)' }}>
      <div className="container">
        <h2 className="section-title">Full Stack <span className="text-gradient">Projects</span></h2>

        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(350px, 1fr))', gap: '2.5rem' }}>
          {projects.map((project, index) => (
            <div key={index} className="project-card" style={{
              background: 'var(--bg-primary)',
              borderRadius: '16px',
              overflow: 'hidden',
              border: '1px solid rgba(255,255,255,0.05)',
              display: 'flex',
              flexDirection: 'column'
            }}>
              <div style={{ padding: '2rem', flex: 1 }}>
                <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'start', marginBottom: '1rem' }}>
                  <div>
                    <h3 style={{ fontSize: '1.5rem', fontWeight: '700', marginBottom: '0.5rem' }}>{project.title}</h3>
                    <p style={{ color: 'var(--accent-primary)', fontSize: '0.9rem', fontWeight: '500' }}>{project.subtitle}</p>
                  </div>
                  <div style={{ display: 'flex', gap: '0.8rem' }}>
                    <button
                      onClick={(e) => {
                        e.preventDefault();
                        if (project.files && project.files.length > 0) {
                          setSelectedProject(project);
                        } else {
                          window.open(project.links.github, '_blank');
                        }
                      }}
                      className="hover-accent"
                      title={project.files ? "View Code Snippet" : "View Source"}
                      style={{ cursor: 'pointer', color: 'inherit' }}
                    >
                      {project.files ? <Code size={20} /> : <Github size={20} />}
                    </button>
                    <a href={project.links.live} className="hover-accent" title="Live Demo"><ExternalLink size={20} /></a>
                  </div>
                </div>

                <p style={{ color: 'var(--text-secondary)', marginBottom: '1.5rem', fontSize: '0.95rem' }}>
                  {project.description}
                </p>

                <ul style={{
                  listStyle: 'none',
                  marginBottom: '1.5rem',
                  display: 'flex',
                  flexDirection: 'column',
                  gap: '0.5rem',
                  fontSize: '0.9rem',
                  color: 'var(--text-secondary)'
                }}>
                  {project.points.map((point, i) => (
                    <li key={i} style={{ display: 'flex', gap: '0.5rem' }}>
                      <span style={{ color: 'var(--accent-secondary)' }}>•</span> {point}
                    </li>
                  ))}
                </ul>
              </div>

              <div style={{
                padding: '1.5rem 2rem',
                background: 'rgba(255,255,255,0.02)',
                borderTop: '1px solid rgba(255,255,255,0.05)',
                display: 'flex',
                flexWrap: 'wrap',
                gap: '0.6rem'
              }}>
                {project.tech.map((tech, i) => (
                  <span key={i} style={{
                    fontSize: '0.8rem',
                    padding: '0.3rem 0.8rem',
                    borderRadius: '15px',
                    background: 'rgba(56, 189, 248, 0.1)',
                    color: 'var(--accent-primary)',
                    fontWeight: '500'
                  }}>
                    {tech}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>

      <CodeModal
        isOpen={!!selectedProject}
        onClose={() => setSelectedProject(null)}
        title={selectedProject?.title}
        files={selectedProject?.files || []}
      />
    </section>
  );
};

export default Projects;

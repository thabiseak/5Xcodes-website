
'use client';

import { useMemo, useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import {
  ChatBubbleLeftRightIcon,
  XMarkIcon,
  PaperAirplaneIcon,
  SparklesIcon
} from '@heroicons/react/24/outline';
import { services } from '@/data/services';
import { products } from '@/data/products';
import { portfolioItems } from '@/data/portfolio';
import { testimonials } from '@/data/testimonials';
import { teamMembers } from '@/data/team';

type ChatMessage = { type: 'user' | 'bot'; content: string };

type ResponseRule = {
  keywords: string[];
  response: string;
};

const quickResponses = [
  'What services do you offer?',
  'Can you show recent projects?',
  'How much do projects cost?',
  'Do you provide ongoing support?',
  'How do I get started?'
];

const truncate = (text: string, max = 180) =>
  text.length > max ? `${text.slice(0, max).trim()}…` : text;

const DEFAULT_TOPICS =
  'You can ask about services, pricing, project timelines, industries, technology stack, support, or how to speak with a specialist.';

export function AIChatbot() {
  const [isOpen, setIsOpen] = useState(false);
  const [messages, setMessages] = useState<ChatMessage[]>([]);
  const [inputValue, setInputValue] = useState('');

  const responseRules = useMemo<ResponseRule[]>(() => {
    const serviceHighlights = services
      .map((service) => `• ${service.name} — ${service.description}`)
      .join('\n');

    const productHighlights = products
      .slice(0, 3)
      .map((product) => `• ${product.name} — ${product.shortDescription ?? product.description}`)
      .join('\n');

    const industryList = Array.from(new Set(portfolioItems.map((item) => item.industry)));

    const portfolioHighlights = portfolioItems
      .slice(0, 3)
      .map((item) => `• ${item.title} (${item.industry}) — ${item.description}`)
      .join('\n');

    const testimonialHighlights = testimonials
      .slice(0, 2)
      .map((testimonial) => `• ${testimonial.name} (${testimonial.company}): "${truncate(testimonial.content, 160)}"`)
      .join('\n\n');

    const teamHighlights = teamMembers
      .slice(0, 4)
      .map((member) => `• ${member.name}, ${member.role} — ${truncate(member.bio, 120)}`)
      .join('\n');

    return [
      {
        keywords: ['hello', 'hi', 'hey', 'greetings'],
        response: `Hi there! 👋 I'm the 5X AI Assistant. ${DEFAULT_TOPICS}`
      },
      {
        keywords: ['thank', 'thanks'],
        response: 'Happy to help! If you have any more questions just let me know.'
      },
      {
        keywords: ['service', 'services', 'offer', 'capability', 'capabilities', 'solution', 'solutions'],
        response: `Here’s a quick overview of what 5Xcodes delivers:
${serviceHighlights}

Need something more specific? Tell me about your idea and I’ll suggest the best fit.`
      },
      {
        keywords: ['product', 'products', 'platform', 'tool', 'system', 'prebuilt'],
        response: `We also have ready-to-launch products you can leverage immediately:
${productHighlights}

Want a live demo or customisation tips? I can arrange that.`
      },
      {
        keywords: ['price', 'pricing', 'cost', 'budget', 'rate', 'quote', 'estimate', 'fees', 'fee'],
        response: `We keep pricing flexible—projects can be fixed-price, milestone-based, or handled by dedicated teams. Typical SaaS implementations start around $15K, while enterprise builds vary with scope and integration needs.

The fastest way to get an accurate estimate is to share your requirements at hello@5xcodes.com or call +94 76 895 4797. We’ll send a tailored proposal within 24 hours.`
      },
      {
        keywords: ['start', 'get started', 'onboard', 'begin', 'kickoff'],
        response: `Getting started is easy: we schedule a discovery call, map the scope, and send a detailed plan with timeline and budget. Most MVPs launch in 6–8 weeks, and we stay with you through growth and maintenance.`
      },
      {
        keywords: ['timeline', 'timeframe', 'duration', 'how long', 'deadline', 'schedule'],
        response: `Our typical delivery cadence:
• Discovery & planning: 1–2 weeks
• Design & architecture: 2–3 weeks
• Build & QA: 4–8 weeks (depends on scope)
• Launch & optimisation: 1–2 weeks

Already have a deadline? Share it and we’ll shape a delivery plan.`
      },
      {
        keywords: ['support', 'maintenance', 'aftercare', 'post launch', 'monitoring', 'sla'],
        response: `Yes—we provide full post-launch support including 24/7 monitoring, incident response, feature enhancements, and success reviews. We can tailor SLAs from startup-friendly to enterprise-grade coverage.`
      },
      {
        keywords: ['industry', 'industries', 'sector', 'vertical'],
        response: `We regularly work with teams across ${industryList.join(', ')}. Have a niche requirement? Let me know and I’ll share relevant case studies.`
      },
      {
        keywords: ['portfolio', 'case study', 'case studies', 'examples', 'project', 'projects', 'work'],
        response: `Here are a few recent wins:
${portfolioHighlights}

Want the full story or metrics for a specific industry? Just ask.`
      },
      {
        keywords: ['testimonial', 'client', 'review', 'reference', 'feedback'],
        response: `Clients love partnering with 5Xcodes:
${testimonialHighlights}

I can connect you directly with a reference if you’d like to hear more.`
      },
      {
        keywords: ['team', 'people', 'expert', 'leadership', 'founder', 'who are you'],
        response: `Meet a few of the leaders you’ll work with:
${teamHighlights}

Our multidisciplinary team covers strategy, product, engineering, AI, and experience design end-to-end.`
      },
      {
        keywords: ['technology', 'tech', 'stack', 'tool', 'framework', 'language', 'architecture'],
        response: 'We build with modern stacks: React/Next.js, TypeScript, Node.js, Python, Go, mobile (React Native & Flutter), cloud-native deployments on AWS/GCP/Azure, and integrated AI/ML pipelines. Let me know your stack preference and we’ll align with it.'
      },
      {
        keywords: ['consult', 'consultation', 'meeting', 'call', 'contact', 'reach', 'schedule', 'book'],
        response: 'You can book a consultation by emailing hello@5xcodes.com, calling +94 76 895 4797, or using the contact form. We respond within one business day and can jump on a call or workshop when it suits you.'
      },
      {
        keywords: ['location', 'where', 'office', 'based'],
        response: 'We’re headquartered in Jaffna, Sri Lanka, and collaborate with clients worldwide through distributed delivery hubs. Remote workshops and on-site visits are both available.'
      },
      {
        keywords: ['ai', 'artificial', 'machine learning', 'ml', 'automation'],
        response: 'AI is one of our core practices—we deliver predictive analytics, intelligent automation, NLP, computer vision, and custom ML models. Share your data or challenge and we’ll outline a roadmap with quick wins and long-term scaling.'
      },
      {
        keywords: ['bye', 'goodbye', 'see you', 'later'],
        response: 'Talk soon! If anything else comes up just reopen the assistant and I’ll be here.'
      }
    ];
  }, []);

  const handleSendMessage = (message: string) => {
    if (!message.trim()) return;

    const userMessage: ChatMessage = { type: 'user', content: message };
    setMessages(prev => [...prev, userMessage]);

    // Simulate bot response
    setTimeout(() => {
      const botResponse = getBotResponse(message.toLowerCase());
      const botMessage: ChatMessage = { type: 'bot', content: botResponse };
      setMessages(prev => [...prev, botMessage]);
    }, 1000);

    setInputValue('');
  };

  const getBotResponse = (message: string): string => {
    const matchedRule = responseRules.find((rule) =>
      rule.keywords.some((keyword) => message.includes(keyword))
    );

    if (matchedRule) {
      return matchedRule.response;
    }

    return `I’ll find the best person to help with that. ${DEFAULT_TOPICS} You can also email hello@5xcodes.com or call +94 76 895 4797 and we’ll respond within 24 hours.`;
  };

  const handleQuickResponse = (response: string) => {
    handleSendMessage(response);
  };

  return (
    <>
      {/* Chat Button */}
      <motion.button
        onClick={() => setIsOpen(true)}
        className="fixed bottom-6 right-6 z-50 p-4 bg-gradient-to-r from-electric-blue to-neon-purple text-white rounded-full shadow-neon hover:shadow-neon-lg transition-all duration-300"
        whileHover={{ scale: 1.1 }}
        whileTap={{ scale: 0.95 }}
        initial={{ scale: 0 }}
        animate={{ scale: 1 }}
        transition={{ delay: 2, type: 'spring', stiffness: 200 }}
      >
        <ChatBubbleLeftRightIcon className="w-6 h-6" />
      </motion.button>

      {/* Chat Window */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, scale: 0.8, y: 20 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.8, y: 20 }}
            transition={{ duration: 0.3 }}
            className="fixed bottom-24 right-6 z-50 w-80 h-96 bg-white/90 backdrop-blur-xl rounded-2xl shadow-glass border border-white/20 overflow-hidden"
          >
            {/* Header */}
            <div className="flex items-center justify-between p-4 bg-gradient-to-r from-electric-blue to-neon-purple text-white">
              <div className="flex items-center space-x-2">
                <SparklesIcon className="w-5 h-5" />
                <span className="font-semibold">5X AI Assistant</span>
              </div>
              <button
                onClick={() => setIsOpen(false)}
                className="p-1 hover:bg-white/20 rounded-lg transition-colors duration-200"
              >
                <XMarkIcon className="w-5 h-5" />
              </button>
            </div>

            {/* Messages */}
            <div className="flex-1 p-4 space-y-4 overflow-y-auto max-h-64">
              {messages.length === 0 ? (
                <div className="text-center text-gray-600">
                  <p className="text-sm">Hi! I'm your AI assistant. How can I help you today?</p>
                </div>
              ) : (
                messages.map((message, index) => (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    className={`flex ${message.type === 'user' ? 'justify-end' : 'justify-start'}`}
                  >
                    <div
                      className={`max-w-xs px-3 py-2 rounded-lg text-sm whitespace-pre-line ${
                        message.type === 'user'
                          ? 'bg-gradient-to-r from-electric-blue to-neon-purple text-white'
                          : 'bg-gray-100 text-gray-800'
                      }`}
                    >
                      {message.content}
                    </div>
                  </motion.div>
                ))
              )}
            </div>

            {/* Quick Responses */}
            {messages.length === 0 && (
              <div className="p-4 border-t border-gray-200">
                <p className="text-xs text-gray-500 mb-2">Quick responses:</p>
                <div className="flex flex-wrap gap-2">
                  {quickResponses.map((response, index) => (
                    <button
                      key={index}
                      onClick={() => handleQuickResponse(response)}
                      className="px-2 py-1 text-xs bg-gray-100 hover:bg-gray-200 rounded-full transition-colors duration-200"
                    >
                      {response}
                    </button>
                  ))}
                </div>
              </div>
            )}

            {/* Input */}
            <div className="p-4 border-t border-gray-200">
              <div className="flex space-x-2">
                <input
                  type="text"
                  value={inputValue}
                  onChange={(e) => setInputValue(e.target.value)}
                  onKeyDown={(e) => {
                    if (e.key === 'Enter') {
                      e.preventDefault();
                      handleSendMessage(inputValue);
                    }
                  }}
                  placeholder="Type your message..."
                  className="flex-1 px-3 py-2 text-sm border border-gray-300 rounded-lg focus:ring-2 focus:ring-electric-blue focus:border-transparent outline-none"
                />
                <button
                  onClick={() => handleSendMessage(inputValue)}
                  className="p-2 bg-gradient-to-r from-electric-blue to-neon-purple text-white rounded-lg hover:shadow-neon transition-all duration-200"
                >
                  <PaperAirplaneIcon className="w-4 h-4" />
                </button>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
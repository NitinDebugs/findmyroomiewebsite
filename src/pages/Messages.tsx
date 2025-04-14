
import { useState } from "react";
import { GlassmorphismCard } from "@/components/ui/glassmorphism-card";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { Send } from "lucide-react";

// Mock data for conversations
const CONVERSATIONS = [
  {
    id: 1,
    name: "Alex Johnson",
    lastMessage: "Hey, I'm interested in being roommates!",
    time: "10:30 AM",
    profilePic: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTZ8fHByb2ZpbGUlMjBwaWN0dXJlfGVufDB8fDB8fHww",
    messages: [
      { id: 1, sender: "Alex", text: "Hey, I'm interested in being roommates!", time: "10:30 AM" },
      { id: 2, sender: "You", text: "Hi Alex! Thanks for reaching out. What area are you looking to live in?", time: "10:32 AM" },
      { id: 3, sender: "Alex", text: "I'm looking for something in Downtown, close to the tech district if possible.", time: "10:35 AM" }
    ],
    unread: true
  },
  {
    id: 2,
    name: "Sophia Lee",
    lastMessage: "The apartment sounds great! When can we visit?",
    time: "Yesterday",
    profilePic: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8cHJvZmlsZSUyMHBpY3R1cmV8ZW58MHx8MHx8fDA%3D",
    messages: [
      { id: 1, sender: "You", text: "Hi Sophia, I found a great 2BHK in Midtown!", time: "Yesterday" },
      { id: 2, sender: "Sophia", text: "That sounds promising! What's the rent like?", time: "Yesterday" },
      { id: 3, sender: "You", text: "It's $1400 total, so $700 each. Utilities included.", time: "Yesterday" },
      { id: 4, sender: "Sophia", text: "The apartment sounds great! When can we visit?", time: "Yesterday" }
    ],
    unread: false
  }
];

const Messages = () => {
  const [activeConversation, setActiveConversation] = useState(CONVERSATIONS[0]);
  const [messageText, setMessageText] = useState("");
  const [conversations, setConversations] = useState(CONVERSATIONS);
  
  const handleSendMessage = () => {
    if (!messageText.trim()) return;
    
    const newMessage = {
      id: activeConversation.messages.length + 1,
      sender: "You",
      text: messageText,
      time: new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' })
    };
    
    // Update conversations with new message
    const updatedConversations = conversations.map(convo => {
      if (convo.id === activeConversation.id) {
        return {
          ...convo,
          messages: [...convo.messages, newMessage],
          lastMessage: messageText,
          time: "Just now"
        };
      }
      return convo;
    });
    
    setConversations(updatedConversations);
    setActiveConversation({
      ...activeConversation,
      messages: [...activeConversation.messages, newMessage],
      lastMessage: messageText,
      time: "Just now"
    });
    setMessageText("");
  };
  
  const handleKeyDown = (e: React.KeyboardEvent) => {
    if (e.key === 'Enter' && !e.shiftKey) {
      e.preventDefault();
      handleSendMessage();
    }
  };
  
  const handleConversationClick = (convo: any) => {
    // Mark as read when clicked
    const updatedConversations = conversations.map(c => {
      if (c.id === convo.id) {
        return { ...c, unread: false };
      }
      return c;
    });
    
    setConversations(updatedConversations);
    setActiveConversation({ ...convo, unread: false });
  };

  return (
    <div className="min-h-screen py-20">
      <div className="container mx-auto px-4">
        <h1 className="text-3xl font-bold mb-8 text-center">
          <span className="neon-text">Messages</span>
        </h1>
        
        <div className="flex flex-col md:flex-row gap-6">
          {/* Conversation list */}
          <div className="md:w-1/3">
            <GlassmorphismCard className="h-[70vh] overflow-hidden flex flex-col animate-fade-in">
              <h2 className="text-xl font-semibold mb-4">Conversations</h2>
              
              <div className="overflow-y-auto flex-grow pr-2">
                {conversations.map(convo => (
                  <div 
                    key={convo.id}
                    className={`flex items-center gap-3 p-3 rounded-lg transition-colors cursor-pointer mb-2 ${
                      activeConversation.id === convo.id 
                        ? 'bg-white/10' 
                        : 'hover:bg-white/5'
                    }`}
                    onClick={() => handleConversationClick(convo)}
                  >
                    <div className="relative">
                      <img 
                        src={convo.profilePic} 
                        alt={convo.name}
                        className="w-12 h-12 rounded-full object-cover" 
                      />
                      {convo.unread && (
                        <div className="absolute -top-1 -right-1 w-3 h-3 bg-neon-pink rounded-full"></div>
                      )}
                    </div>
                    
                    <div className="flex-grow min-w-0">
                      <div className="flex justify-between items-center">
                        <h3 className="font-medium truncate">{convo.name}</h3>
                        <span className="text-xs text-white/50">{convo.time}</span>
                      </div>
                      <p className="text-sm text-white/70 truncate">{convo.lastMessage}</p>
                    </div>
                  </div>
                ))}
              </div>
            </GlassmorphismCard>
          </div>
          
          {/* Message thread */}
          <div className="md:w-2/3">
            <GlassmorphismCard className="h-[70vh] flex flex-col animate-fade-in">
              <div className="flex items-center gap-3 pb-4 border-b border-white/10">
                <img 
                  src={activeConversation.profilePic} 
                  alt={activeConversation.name}
                  className="w-10 h-10 rounded-full object-cover" 
                />
                <h2 className="font-semibold">{activeConversation.name}</h2>
              </div>
              
              <div className="flex-grow overflow-y-auto py-4 space-y-4">
                {activeConversation.messages.map(message => (
                  <div 
                    key={message.id}
                    className={`flex ${message.sender === "You" ? "justify-end" : "justify-start"}`}
                  >
                    <div 
                      className={`max-w-[80%] rounded-2xl px-4 py-2 ${
                        message.sender === "You" 
                          ? "bg-neon-gradient-1 text-white rounded-tr-none" 
                          : "bg-white/10 rounded-tl-none"
                      }`}
                    >
                      <p>{message.text}</p>
                      <p className="text-xs opacity-70 text-right mt-1">{message.time}</p>
                    </div>
                  </div>
                ))}
              </div>
              
              <div className="pt-4 border-t border-white/10">
                <div className="flex gap-2">
                  <Input
                    placeholder="Type your message..."
                    value={messageText}
                    onChange={(e) => setMessageText(e.target.value)}
                    onKeyDown={handleKeyDown}
                    className="bg-white/5 border-white/10"
                  />
                  <Button 
                    onClick={handleSendMessage}
                    className="neon-button aspect-square p-2"
                    disabled={!messageText.trim()}
                  >
                    <Send className="h-5 w-5" />
                  </Button>
                </div>
              </div>
            </GlassmorphismCard>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Messages;

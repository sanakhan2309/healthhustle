import { useState } from 'react';
import { 
  Search, 
  Send, 
  MoreVertical, 
  Phone, 
  Video, 
  Image as ImageIcon,
  Paperclip,
  CheckCheck
} from 'lucide-react';
import { mockMessages } from '../data/enterpriseMock';
import { cn } from '../utils/cn';
import { toast } from 'react-hot-toast';

const Messaging = () => {
  const [selectedThread, setSelectedThread] = useState(mockMessages[0]);
  const [message, setMessage] = useState('');
  const [chatMessages, setChatMessages] = useState([
    { id: 1, sender: 'them', text: selectedThread.text, time: selectedThread.time },
  ]);

  const handleSendMessage = (e) => {
    e.preventDefault();
    if (!message.trim()) return;

    const newMessage = {
      id: chatMessages.length + 1,
      sender: 'me',
      text: message,
      time: new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' })
    };

    setChatMessages([...chatMessages, newMessage]);
    setMessage('');
    toast.success('Message Sent!');
  };

  return (
    <div className="h-[calc(100vh-160px)] flex bg-[#0f172a] rounded-[2.5rem] border border-slate-800 shadow-2xl overflow-hidden">
      {/* Sidebar */}
      <div className="w-80 border-r border-slate-800 flex flex-col bg-[#0f172a]/50">
        <div className="p-6 border-b border-slate-800">
          <h2 className="text-xl font-bold text-white mb-4">Messages</h2>
          <div className="relative">
            <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-slate-500" />
            <input 
              type="text" 
              placeholder="Search chats..."
              className="w-full bg-slate-900 border border-slate-800 rounded-xl pl-10 pr-4 py-2 text-sm focus:ring-2 focus:ring-emerald-500 focus:outline-none transition-all"
            />
          </div>
        </div>
        
        <div className="flex-1 overflow-y-auto custom-scrollbar p-2">
          {mockMessages.map((msg) => (
            <button
              key={msg.id}
              onClick={() => {
                setSelectedThread(msg);
                setChatMessages([{ id: 1, sender: 'them', text: msg.text, time: msg.time }]);
              }}
              className={cn(
                "w-full flex items-center space-x-4 p-4 rounded-2xl transition-all mb-1",
                selectedThread.id === msg.id ? "bg-emerald-600/10 border border-emerald-500/20" : "hover:bg-slate-800/50 border border-transparent"
              )}
            >
              <div className="relative">
                <img src={msg.avatar} alt={msg.sender} className="w-12 h-12 rounded-xl" />
                {msg.unread && <div className="absolute -top-1 -right-1 w-3 h-3 bg-emerald-500 rounded-full border-2 border-[#0f172a]" />}
              </div>
              <div className="flex-1 text-left min-w-0">
                <div className="flex justify-between items-start">
                  <h4 className="text-sm font-bold text-white truncate">{msg.sender}</h4>
                  <span className="text-[10px] text-slate-500 font-bold uppercase">{msg.time}</span>
                </div>
                <p className="text-xs text-slate-400 truncate mt-1">{msg.text}</p>
              </div>
            </button>
          ))}
        </div>
      </div>

      {/* Chat Area */}
      <div className="flex-1 flex flex-col">
        {/* Chat Header */}
        <div className="p-6 border-b border-slate-800 flex items-center justify-between bg-[#0f172a]">
          <div className="flex items-center space-x-4">
            <img src={selectedThread.avatar} alt={selectedThread.sender} className="w-10 h-10 rounded-xl" />
            <div>
              <h3 className="text-sm font-bold text-white">{selectedThread.sender}</h3>
              <p className="text-[10px] text-emerald-500 font-black uppercase tracking-widest">Online</p>
            </div>
          </div>
          <div className="flex items-center space-x-2">
            <button 
              onClick={() => toast.success('Starting Audio Call...')}
              className="p-2 text-slate-400 hover:bg-slate-800 rounded-xl transition-all"
            >
              <Phone className="w-5 h-5" />
            </button>
            <button 
              onClick={() => toast.success('Starting Video Consultation...')}
              className="p-2 text-slate-400 hover:bg-slate-800 rounded-xl transition-all"
            >
              <Video className="w-5 h-5" />
            </button>
            <div className="h-6 w-[1px] bg-slate-800 mx-2" />
            <button className="p-2 text-slate-400 hover:bg-slate-800 rounded-xl transition-all"><MoreVertical className="w-5 h-5" /></button>
          </div>
        </div>

        {/* Messages */}
        <div className="flex-1 overflow-y-auto custom-scrollbar p-8 space-y-6">
          <div className="flex justify-center">
            <span className="text-[10px] font-black text-slate-500 uppercase tracking-widest bg-slate-900 px-3 py-1 rounded-full">Today</span>
          </div>
          
          {chatMessages.map((msg) => (
            <div key={msg.id} className={cn(
              "flex items-start space-x-4",
              msg.sender === 'me' ? "flex-row-reverse space-x-reverse" : ""
            )}>
              {msg.sender === 'them' ? (
                <img src={selectedThread.avatar} alt={selectedThread.sender} className="w-8 h-8 rounded-lg" />
              ) : (
                <div className="w-8 h-8 bg-emerald-600 rounded-lg flex items-center justify-center text-[10px] font-bold text-white">ME</div>
              )}
              <div className={cn(
                "max-w-[70%] p-4 rounded-2xl border transition-all shadow-lg",
                msg.sender === 'me' 
                  ? "bg-emerald-600 border-transparent rounded-tr-none text-white shadow-emerald-600/10" 
                  : "bg-slate-800/50 border-slate-700/50 rounded-tl-none text-slate-200 shadow-black/5"
              )}>
                <p className="text-sm leading-relaxed">{msg.text}</p>
                <div className={cn(
                  "flex items-center mt-2 space-x-1",
                  msg.sender === 'me' ? "justify-end" : "justify-start"
                )}>
                  <span className={cn(
                    "text-[10px] font-bold",
                    msg.sender === 'me' ? "text-emerald-100" : "text-slate-500"
                  )}>{msg.time}</span>
                  {msg.sender === 'me' && <CheckCheck className="w-3 h-3 text-emerald-100" />}
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Input Area */}
        <form onSubmit={handleSendMessage} className="p-6 border-t border-slate-800">
          <div className="bg-slate-900 border border-slate-800 rounded-2xl p-2 flex items-center space-x-2">
            <div className="flex items-center px-2 space-x-1">
              <button type="button" className="p-2 text-slate-500 hover:text-emerald-500 transition-colors"><Paperclip className="w-5 h-5" /></button>
              <button type="button" className="p-2 text-slate-500 hover:text-emerald-500 transition-colors"><ImageIcon className="w-5 h-5" /></button>
            </div>
            <input 
              type="text" 
              value={message}
              onChange={(e) => setMessage(e.target.value)}
              placeholder="Type your message here..."
              className="flex-1 bg-transparent border-none focus:ring-0 text-sm text-white placeholder:text-slate-600"
            />
            <button 
              type="submit"
              disabled={!message.trim()}
              className="bg-emerald-600 hover:bg-emerald-700 disabled:opacity-50 disabled:hover:bg-emerald-600 text-white p-3 rounded-xl transition-all shadow-lg shadow-emerald-600/20"
            >
              <Send className="w-5 h-5" />
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default Messaging;

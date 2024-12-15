import { DatacommAddConversation } from '../add-conversation/datacomm-add-conversation';
import { DatacommSideBar } from '../side-bar/datacomm-side-bar';
import { Switch } from '@/components/ui/switch';
import { Separator } from '@/components/ui/separator';
import { DatacommSearchbar } from '../search-bar/datacomm-search-bar';
import DatacommChatSection from '../chat-section/datacomm-chat-section';
import { useEffect, useState } from 'react';
import { DatacommUserInformation } from '../user-information-tab/datacomm-user-information-tab';
import {
 DatacommChatbotMessage,
 DatacommChatbotMessagesTypes,
} from '../chatbot-messages/datacomm-chatbot-messages';
import { DatacommChatbotInput } from '../chatbot-input/datacomm-chatbot-input';

export const DatacommMockDashboard = () => {
 const [isSidebarCollapsed, setIsSidebarCollapsed] = useState(false);
 const [sideBarWidth, setSideBarWidth] = useState('280px');
 const [messages, setMessages] = useState<DatacommChatbotMessagesTypes[]>([]);

 useEffect(() => {
  if (isSidebarCollapsed) {
   setSideBarWidth('10px');
  } else {
   setSideBarWidth('280px');
  }
 }, [isSidebarCollapsed]);
 const handleOnInputSubmit = async (prompt: string) => {
  if (!prompt) return;

  // Add user message
  setMessages((prevMessages) => [
   ...prevMessages,
   {
    user: 'Person',
    text: prompt,
    onCopy: () => {},
    onRefresh: () => {},
    onShare: () => {},
    isGoodFeedback: (feedback: boolean) => {},
   },
  ]);

  // Simulate async response
  await new Promise((resolve) => setTimeout(resolve, Math.random() * 2000));

  // Add bot response
  setMessages((prevMessages) => [
   ...prevMessages,
   {
    user: 'Bot',
    text: 'Hello, how can I help you today?',
    onCopy: () => {},
    onRefresh: () => {},
    onShare: () => {},
    isGoodFeedback: (feedback: boolean) => {},
   },
  ]);
 };

 const onHandleSidebarCollapsed = (collapsed: boolean) => {
  setIsSidebarCollapsed(collapsed);
 };

 return (
  <div className="w-screen h-screen grid grid-cols-12 gap-0">
   {/* Sidebar Section */}
   <div
    className={`${
     isSidebarCollapsed ? 'col-span-1' : 'col-span-2'
    } h-screen flex transition-all duration-300`}>
    <DatacommSideBar
     logo={'/assets/images/mock-logo.svg'}
     isCollapsed={onHandleSidebarCollapsed}
     topItems={[
      {
       title: 'Conversations',
       url: '#',
       leftIcon: '/assets/icons/conversation-icon.svg',
       notificationCount: 7,
      },
      { title: 'Clients', url: '#', leftIcon: '/assets/icons/client-icon.svg' },
      {
       title: 'Properties',
       url: '#',
       leftIcon: '/assets/icons/buliding-icon.svg',
      },
      {
       title: 'Tasks',
       url: '#',
       leftIcon: '/assets/icons/tasks-icon.svg',
       notificationCount: 3,
      },
      {
       title: 'To-Do Lists',
       url: '#',
       leftIcon: '/assets/icons/todolist-icon.svg',
      },
     ]}
     bottomItems={[
      {
       title: 'Settings',
       url: '#',
       leftIcon: '/assets/icons/setting-icon.svg',
      },
      { title: 'Help', url: '#', leftIcon: '/assets/icons/help-icon.svg' },
     ]}
     accountPreviewProps={{
      profileIcon: '/assets/icons/user-profile-icon.svg',
      fullname: 'John Doe',
      jobDescription: 'Software Engineer',
      dropdownItems: [
       { name: 'Theme', id: '1', leftIcon: '/assets/icons/theme-icon.svg' },
       {
        name: 'Help & Support',
        id: '2',
        leftIcon: '/assets/icons/help-icon.svg',
       },
       {
        name: 'Settings',
        id: '3',
        leftIcon: '/assets/icons/setting-icon.svg',
       },
       { name: 'Log Out', id: '4', leftIcon: '/assets/icons/logout-icon.svg' },
      ],
     }}
    />
   </div>

   {/* Middle Section */}
   <div className="col-span-3 w-full h-screen flex flex-col border-r border-gray-200">
    <DatacommChatSection />
   </div>

   {/* Chatbot & User Information Section */}
   <div
    className={`${
     isSidebarCollapsed ? 'col-span-7' : 'col-span-6'
    } h-screen flex flex-col overflow-hidden transition-all duration-300 `}>
    <div className="px-8 pt-4 pb-2">
     <DatacommUserInformation
      username={'Ajeng Cinta Purwanti'}
      userAvatar={'/assets/icons/user-profile-icon.svg'}
      purchasedItemsCount={21}
      lifetimeValue={1235.73}
     />
     <Separator orientation="horizontal" className="w-screen my-8" />
    </div>

    <div className="flex-1 overflow-y-auto px-8 space-y-4">
     {messages.map((chat, index) => (
      <div key={index} className="flex justify-center">
       <DatacommChatbotMessage
        user={chat.user}
        text={chat.text}
        onCopy={chat.onCopy}
        onRefresh={chat.onRefresh}
        onShare={chat.onShare}
        isGoodFeedback={chat.isGoodFeedback}
       />
      </div>
     ))}
    </div>

    <div className="flex justify-center items-center p-4">
     <DatacommChatbotInput
      placeholder="Type a message"
      onSubmit={handleOnInputSubmit}
     />
    </div>
   </div>
  </div>
 );
};

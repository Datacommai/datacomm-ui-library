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
  <div className="w-full h-[100vh] flex overflow-hidden gap-1">
   <div className={`flex justify-evenly w-[${sideBarWidth}] h-fit`}>
    <DatacommSideBar
     logo={'/assets/images/mock-logo.svg'}
     isCollapsed={onHandleSidebarCollapsed}
     topItems={[
      {
       title: 'Conversations',
       url: '#',
       leftIcon: '/assets/icons/conversation-icon.svg',
       notificationCount: 7,
       onClick: () => console.log('Navigating to Conversations'),
      },
      {
       title: 'Clients',
       url: '#',
       leftIcon: '/assets/icons/client-icon.svg',
       onClick: () => console.log('Navigating to Clients'),
      },
      {
       title: 'Properties',
       url: '#',
       leftIcon: '/assets/icons/buliding-icon.svg',
       onClick: () => console.log('Navigating to Properties'),
      },
      {
       title: 'Tasks',
       url: '#',
       leftIcon: '/assets/icons/tasks-icon.svg',
       notificationCount: 3,
       onClick: () => console.log('Navigating to Tasks'),
      },
      {
       title: 'To-Do Lists',
       url: '#',
       leftIcon: '/assets/icons/todolist-icon.svg',
       onClick: () => console.log('Navigating to To-Do Lists'),
      },
     ]}
     bottomItems={[
      {
       title: 'Settings',
       url: '#',
       leftIcon: '/assets/icons/setting-icon.svg',
       onClick: () => console.log('Navigating to Settings'),
      },
      {
       title: 'Help',
       url: '#',
       leftIcon: '/assets/icons/help-icon.svg',
       onClick: () => console.log('Navigating to Help'),
      },
     ]}
     accountPreviewProps={{
      profileIcon: '/assets/icons/user-profile-icon.svg',
      fullname: 'John Doe',
      jobDescription: 'Software Engineer',
      dropdownItems: [
       {
        name: 'Theme',
        id: '1',
        leftIcon: '/assets/icons/theme-icon.svg',
        rightElement: (
         <div
          onClick={(e) => e.stopPropagation()}
          className="flex w-full items-center">
          <Switch />
         </div>
        ),
       },
       {
        name: 'Help & Support',
        id: '2',
        leftIcon: '/assets/icons/help-icon.svg',
        rightElement: null,
       },
       {
        name: 'Settings',
        id: '3',
        leftIcon: '/assets/icons/setting-icon.svg',
        rightElement: null,
       },
       {
        name: 'Log Out',
        id: '4',
        leftIcon: '/assets/icons/logout-icon.svg',
        rightElement: null,
       },
      ],
     }}
    />
   </div>

   <div className="w-[414px] h-[100vh] relative -mx-4">
    <DatacommChatSection />
   </div>

   <div
    className={`w-[${
     isSidebarCollapsed ? '70%' : '50%'
    }] h-[100vh] relative x-4 overflow-hidden  `}>
    <div className="mx-8">
     <DatacommUserInformation
      username={'Ajeng Cinta Purwanti'}
      userAvatar={'/assets/icons/user-profile-icon.svg'}
      purchasedItemsCount={21}
      lifetimeValue={1235.73}
     />
     <Separator orientation="horizontal" className="w-full my-4" />
    </div>
    <div className="mx-10 w-full h-[80%] overflow-y-scroll gap-2 flex flex-col justify-center items-center ">
     {messages.map((chat, index) => (
      <div
       key={index}
       className=" flex  justify-center items-center w-[500px] ">
       <DatacommChatbotMessage
        user={chat.user}
        key={index}
        text={chat.text}
        onCopy={chat.onCopy}
        onRefresh={chat.onRefresh}
        onShare={chat.onShare}
        isGoodFeedback={chat.isGoodFeedback}
       />
      </div>
     ))}
    </div>
    <div className="m-4 flex justify-center">
     <DatacommChatbotInput
      placeholder="Type a message"
      onSubmit={handleOnInputSubmit}
     />
    </div>
   </div>
  </div>
 );
};

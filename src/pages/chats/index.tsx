import React, { useState } from 'react'
import { Layout } from '@/components/custom/layout'
import { TopNav } from '@/components/top-nav'
import { Search } from '@/components/search'
import ThemeSwitch from '@/components/theme-switch'
import { UserNav } from '@/components/user-nav'
import { Card, CardHeader, CardTitle, CardContent } from '@/components/ui/card'
import { Message, MessageForm } from './components/ChatComponents' // Ensure these components are correctly imported

// Sample data for multiple users
const initialMessages = [
  {
    id: 1,
    user: 'John Doe',
    text: 'Hello! How can I assist you today?',
    timestamp: '10:00 AM',
  },
  {
    id: 2,
    user: 'Jane Smith',
    text: 'I need help with my account.',
    timestamp: '10:05 AM',
  },
  {
    id: 3,
    user: 'John Doe',
    text: 'Sure! Can you please provide more details?',
    timestamp: '10:10 AM',
  },
  {
    id: 4,
    user: 'Jane Smith',
    text: 'I am unable to login to my account.',
    timestamp: '10:15 AM',
  },
  {
    id: 5,
    user: 'John Doe',
    text: 'I will help you with that.',
    timestamp: '10:20 AM',
  },
  {
    id: 6,
    user: 'John Doe',
    text: 'Please provide your email address.',
    timestamp: '10:25 AM',
  },
  {
    id: 7,
    user: 'Alice Johnson',
    text: 'Hey there, I have a question about my order.',
    timestamp: '11:00 AM',
  },
  {
    id: 8,
    user: 'Bob Brown',
    text: 'Good morning! Could you assist with a billing issue?',
    timestamp: '11:05 AM',
  },
  {
    id: 9,
    user: 'Eve Green',
    text: 'Hi! I need to update my shipping address.',
    timestamp: '11:10 AM',
  },
  {
    id: 10,
    user: 'Mike White',
    text: 'I’m having trouble with my recent purchase.',
    timestamp: '11:15 AM',
  },
  {
    id: 11,
    user: 'Sarah Black',
    text: 'Can you help me with a refund request?',
    timestamp: '11:20 AM',
  },
  {
    id: 12,
    user: 'Tom Grey',
    text: 'I’d like to cancel an order. How do I do that?',
    timestamp: '11:25 AM',
  },
  {
    id: 13,
    user: 'John Doe',
    text: 'Alice, could you provide your order number?',
    timestamp: '12:00 PM',
  },
  {
    id: 14,
    user: 'Bob Brown',
    text: 'I’ve sent you an email with the details.',
    timestamp: '12:05 PM',
  },
  {
    id: 15,
    user: 'Eve Green',
    text: 'Sure, I’ll send that over now.',
    timestamp: '12:10 PM',
  },
  {
    id: 16,
    user: 'Mike White',
    text: 'I’ve already reached out to customer support.',
    timestamp: '12:15 PM',
  },
  {
    id: 17,
    user: 'Sarah Black',
    text: 'Thank you for your help. I appreciate it!',
    timestamp: '12:20 PM',
  },
  {
    id: 18,
    user: 'Tom Grey',
    text: 'I’ve processed your cancellation request.',
    timestamp: '12:25 PM',
  },
]

const users = [
  { name: 'John Doe' },
  { name: 'Jane Smith' },
  { name: 'Alice Johnson' },
  { name: 'Bob Brown' },
  { name: 'Eve Green' },
  { name: 'Mike White' },
  { name: 'Sarah Black' },
  { name: 'Tom Grey' },
  { name: 'Laura Blue' },
]

const ChatPage: React.FC = () => {
  const [messages, setMessages] = useState(initialMessages)
  const [newMessage, setNewMessage] = useState('')
  const [currentUser] = useState('John Doe') // Default user
  const [selectedUser, setSelectedUser] = useState(users[0])

  const handleSendMessage = () => {
    if (newMessage.trim()) {
      const newMsg = {
        id: messages.length + 1,
        user: currentUser,
        text: newMessage,
        timestamp: new Date().toLocaleTimeString().slice(0, 5),
      }
      setMessages([...messages, newMsg])
      setNewMessage('')
    }
  }

  return (
    <Layout>
      <Layout.Header>
        <TopNav links={topNav} />
        <div className='ml-auto flex items-center space-x-2'>
          <Search />
          <ThemeSwitch />
          <UserNav />
        </div>
      </Layout.Header>
      <Layout.Body>
        <div className='flex h-[calc(100vh-84px)]'>
          {/* Sidebar for Users */}
          <aside className='flex w-1/4 flex-col rounded-xl bg-zinc-900 p-4 text-white shadow-sm'>
            <h1 className='mb-4 text-2xl font-bold text-white'>
              Realtime Chat
            </h1>
            <Card className='rounded-xl border border-zinc-800 bg-zinc-900 shadow-sm'>
              <CardHeader>
                <CardTitle className='text-lg text-white'>Users</CardTitle>
              </CardHeader>
              <CardContent className='p-0'>
                <ul className='space-y-1'>
                  {users.map((user, index) => (
                    <li
                      key={index}
                      className={`cursor-pointer rounded-lg px-3 py-2 transition duration-200 ${selectedUser.name === user.name ? 'bg-zinc-800 font-semibold text-white' : 'text-zinc-200 hover:bg-zinc-800'}`}
                      onClick={() => setSelectedUser(user)}
                    >
                      {user.name}
                    </li>
                  ))}
                </ul>
              </CardContent>
            </Card>
          </aside>

          {/* Main Chat Area */}
          <main className='flex w-3/4 flex-col bg-transparent p-6'>
            <Card className='flex h-full flex-col rounded-xl border border-zinc-300 bg-white shadow-sm dark:border-zinc-800 dark:bg-zinc-900'>
              <CardHeader className='rounded-t-xl border-b border-zinc-200 bg-transparent dark:border-zinc-800'>
                <CardTitle className='text-base font-semibold tracking-tight text-zinc-900 dark:text-white'>
                  Chat with {selectedUser.name}
                </CardTitle>
              </CardHeader>
              <CardContent className='flex flex-1 flex-col overflow-y-auto p-4'>
                {/* Chat Messages */}
                <div className='flex-1 space-y-3 overflow-y-auto'>
                  {messages
                    .filter((msg) => msg.user === selectedUser.name)
                    .map((msg) => (
                      <Message
                        key={msg.id}
                        user={msg.user}
                        text={msg.text}
                        timestamp={msg.timestamp}
                      />
                    ))}
                </div>
                {/* Message Input Form */}
                <div className='mt-4 border-t border-zinc-200 pt-4 dark:border-zinc-800'>
                  <MessageForm
                    newMessage={newMessage}
                    onMessageChange={(e) => setNewMessage(e.target.value)}
                    onSendMessage={handleSendMessage}
                  />
                </div>
              </CardContent>
            </Card>
          </main>
        </div>
      </Layout.Body>
    </Layout>
  )
}

export default ChatPage

const topNav = [
  {
    title: 'Overview',
    href: '/',
    isActive: false,
  },
  {
    title: 'Chats',
    href: '/chats',
    isActive: true,
  },
  {
    title: 'Settings',
    href: '/settings',
    isActive: false,
  },
]

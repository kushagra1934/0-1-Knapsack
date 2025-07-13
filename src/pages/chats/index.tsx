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
          <aside className='bg-white-800 w-1/4 p-2 text-white'>
            <h1 className='text-2xl font-bold text-black'>Realtime Chat</h1>
            <Card className='bg-white-300 border-none p-1'>
              <CardHeader>
                <CardTitle className='text-lg text-black'>Users</CardTitle>
                <hr />
              </CardHeader>
              <CardContent className='p-3'>
                <ul className='space-y-1'>
                  {users.map((user, index) => (
                    <li
                      key={index}
                      className={`hover:bg-white-700 cursor-pointer rounded-lg p-2 transition duration-300 ${selectedUser.name === user.name ? 'bg-gray-200' : ''}`}
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
          <main className='flex w-3/4 flex-col bg-gray-100 p-2'>
            <Card className='h-1/8 flex flex-col bg-white'>
              <CardHeader className='border-b border-gray-200'>
                <CardTitle className='text-sm font-bold'>
                  Chat with {selectedUser.name}
                </CardTitle>
              </CardHeader>
              <CardContent className='h-1/8 flex flex-col'>
                {/* Chat Messages */}
                <div className='flex-1 overflow-y-auto p-2'>
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
                <div className='border-t border-gray-200 p-2'>
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

import React from 'react'

interface MessageProps {
  user: string
  text: string
  timestamp: string
}

export const Message: React.FC<MessageProps> = ({ user, text, timestamp }) => {
  return (
    <div className='mb-2 rounded-lg border border-gray-300 bg-white p-2'>
      <div className='mb-1 flex justify-between'>
        <span className='font-semibold text-black'>{user}</span>
        <span className='text-sm text-gray-500'>{timestamp}</span>
      </div>
      <p className='text-black'>{text}</p>
    </div>
  )
}

interface MessageFormProps {
  newMessage: string
  onMessageChange: React.ChangeEventHandler<HTMLTextAreaElement>
  onSendMessage: () => void
}

export const MessageForm: React.FC<MessageFormProps> = ({
  newMessage,
  onMessageChange,
  onSendMessage,
}) => {
  return (
    <div className='flex items-center'>
      <textarea
        value={newMessage}
        onChange={onMessageChange}
        className='flex-1 resize-none rounded-lg border border-gray-300 p-2'
        rows={3}
        placeholder='Type your message...'
      />
      <button
        onClick={onSendMessage}
        className='ml-2 rounded-lg bg-black px-4 py-2 text-white'
      >
        Send
      </button>
    </div>
  )
}

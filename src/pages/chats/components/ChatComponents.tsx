import React from 'react'

interface MessageProps {
  user: string
  text: string
  timestamp: string
}

export const Message: React.FC<MessageProps> = ({ user, text, timestamp }) => {
  return (
    <div className='mb-2 rounded-xl border border-zinc-300 bg-white p-4 shadow-sm dark:border-zinc-800 dark:bg-zinc-900'>
      <div className='mb-1 flex items-center justify-between'>
        <span className='font-semibold text-zinc-900 dark:text-white'>
          {user}
        </span>
        <span className='text-xs text-muted-foreground'>{timestamp}</span>
      </div>
      <p className='text-zinc-800 dark:text-zinc-100'>{text}</p>
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
    <div className='flex items-end gap-2'>
      <textarea
        value={newMessage}
        onChange={onMessageChange}
        className='flex-1 resize-none rounded-xl border border-zinc-300 bg-white p-3 text-zinc-900 shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500 dark:border-zinc-800 dark:bg-zinc-900 dark:text-white'
        rows={2}
        placeholder='Type your message...'
      />
      <button
        onClick={onSendMessage}
        className='rounded-xl bg-zinc-900 px-5 py-2 font-semibold text-white shadow-sm transition hover:bg-zinc-800 dark:bg-zinc-100 dark:text-zinc-900 dark:hover:bg-zinc-200'
      >
        Send
      </button>
    </div>
  )
}

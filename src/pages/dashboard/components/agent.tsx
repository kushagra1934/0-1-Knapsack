import React, { useState, useRef, useEffect } from 'react'
import { Button } from '@/components/custom/button'
import { Input } from '@/components/ui/input'
import { cn } from '@/lib/utils'
import { IconSend, IconUser, IconRobot, IconCopy, IconCheck, IconTrash, IconRefresh } from '@tabler/icons-react'

interface Message {
    id: string
    content: string
    sender: 'user' | 'bot'
    timestamp: Date
}

export default function Agent() {
    const [messages, setMessages] = useState<Message[]>([
        {
            id: '1',
            content: 'Hello! I\'m your logistics AI assistant. I can help you with:\n\n📢 **Notifications:**\n• Notify workers, drivers, owners, or all team members\n\n📦 **Shipment Management:**\n• Update shipment statuses\n• Check shipment status\n• Create new orders\n\nTry asking me to "notify workers" or "update shipment status". Type "help" for more commands!',
            sender: 'bot',
            timestamp: new Date()
        }
    ])
    const [inputValue, setInputValue] = useState('')
    const [isTyping, setIsTyping] = useState(false)
    const [copiedMessageId, setCopiedMessageId] = useState<string | null>(null)
    const messagesEndRef = useRef<HTMLDivElement>(null)
    const inputRef = useRef<HTMLInputElement>(null)

    const scrollToBottom = () => {
        messagesEndRef.current?.scrollIntoView({ behavior: 'smooth' })
    }

    useEffect(() => {
        scrollToBottom()
    }, [messages])

    const generateBotResponse = (userInput: string): string => {
        const input = userInput.toLowerCase().trim()

        // Notification commands
        if (input.includes('notify') || input.includes('notification')) {
            if (input.includes('worker') || input.includes('workers')) {
                return `✅ **Notification Sent to Workers**\n\n📋 **Message:** "New task assignments available. Please check your dashboard for updates."\n\n👥 **Recipients:** 15 active workers\n📤 **Delivery Status:** Successfully sent via SMS and app notifications\n⏰ **Sent at:** ${new Date().toLocaleTimeString()}\n\n💡 Workers have been notified about their new assignments and priority tasks.`
            }

            if (input.includes('driver') || input.includes('drivers')) {
                return `✅ **Notification Sent to Drivers**\n\n📋 **Message:** "Route updates and new delivery schedules are available."\n\n🚛 **Recipients:** 8 active drivers\n📤 **Delivery Status:** Successfully sent via SMS and app notifications\n⏰ **Sent at:** ${new Date().toLocaleTimeString()}\n\n💡 Drivers have been alerted about route changes and priority deliveries.`
            }

            if (input.includes('owner') || input.includes('owners')) {
                return `✅ **Notification Sent to Owners**\n\n📋 **Message:** "Weekly performance report and critical alerts summary."\n\n👔 **Recipients:** 3 business owners\n📤 **Delivery Status:** Successfully sent via email and app notifications\n⏰ **Sent at:** ${new Date().toLocaleTimeString()}\n\n💡 Owners have been updated on business metrics and urgent matters.`
            }

            if (input.includes('all') || input.includes('everyone')) {
                return `✅ **Broadcast Notification Sent**\n\n📋 **Message:** "System maintenance scheduled for tonight 11 PM - 1 AM EST."\n\n👥 **Recipients:** All users (26 total)\n• 15 Workers\n• 8 Drivers  \n• 3 Owners\n\n📤 **Delivery Status:** Successfully sent via all channels\n⏰ **Sent at:** ${new Date().toLocaleTimeString()}\n\n💡 All team members have been notified about the scheduled maintenance.`
            }

            return `🔔 **Notification System Ready**\n\nAvailable notification targets:\n• **Workers** - Task and assignment updates\n• **Drivers** - Route and delivery updates\n• **Owners** - Business reports and alerts\n• **All** - System-wide announcements\n\nTry: "Notify workers about new tasks" or "Send notification to all"`
        }

        // Shipment/Order update commands
        if (input.includes('update') && (input.includes('shipment') || input.includes('order') || input.includes('delivery'))) {
            const shipmentId = `SHP-${Math.floor(Math.random() * 9000) + 1000}`
            const statuses = ['In Transit', 'Out for Delivery', 'Delivered', 'Processing', 'Picked Up']
            const randomStatus = statuses[Math.floor(Math.random() * statuses.length)]

            return `✅ **Shipment Updated Successfully**\n\n📦 **Shipment ID:** ${shipmentId}\n📊 **Status:** ${randomStatus}\n⏰ **Updated at:** ${new Date().toLocaleTimeString()}\n🚛 **Driver:** Driver-${Math.floor(Math.random() * 8) + 1}\n📍 **Location:** Distribution Center ${Math.floor(Math.random() * 5) + 1}\n\n📝 **Recent Updates:**\n• Package sorted and loaded\n• GPS tracking activated\n• Customer notification sent\n• ETA calculated: ${Math.floor(Math.random() * 4) + 1}-${Math.floor(Math.random() * 4) + 5} hours\n\n💡 All stakeholders have been automatically notified of this update.`
        }

        if (input.includes('shipment') && input.includes('status')) {
            const shipments = [
                { id: 'SHP-1001', status: 'Delivered' as const, customer: 'Acme Corp' },
                { id: 'SHP-1002', status: 'In Transit' as const, customer: 'TechStart LLC' },
                { id: 'SHP-1003', status: 'Processing' as const, customer: 'Global Industries' },
                { id: 'SHP-1004', status: 'Out for Delivery' as const, customer: 'Local Business' },
                { id: 'SHP-1005', status: 'Picked Up' as const, customer: 'Enterprise Co' }
            ]

            let response = `📊 **Current Shipment Status Overview**\n\n`
            shipments.forEach(shipment => {
                const statusEmoji: Record<string, string> = {
                    'Delivered': '✅',
                    'In Transit': '🚛',
                    'Processing': '⚙️',
                    'Out for Delivery': '📦',
                    'Picked Up': '📤'
                }
                response += `${statusEmoji[shipment.status] || '📋'} **${shipment.id}** - ${shipment.status}\n   Customer: ${shipment.customer}\n\n`
            })

            response += `📈 **Summary:** ${shipments.length} active shipments\n⏰ **Last updated:** ${new Date().toLocaleTimeString()}`
            return response
        }

        // Order management commands
        if (input.includes('create') && (input.includes('order') || input.includes('shipment'))) {
            const orderId = `ORD-${Math.floor(Math.random() * 9000) + 1000}`
            return `✅ **New Order Created**\n\n🆔 **Order ID:** ${orderId}\n📅 **Created:** ${new Date().toLocaleString()}\n📊 **Status:** Processing\n🏪 **Warehouse:** Main Distribution Center\n📦 **Items:** ${Math.floor(Math.random() * 10) + 1} items\n💰 **Value:** $${(Math.random() * 5000 + 100).toFixed(2)}\n\n📝 **Next Steps:**\n• Inventory allocation\n• Picking and packing\n• Driver assignment\n• Customer notification\n\n💡 Order has been added to the processing queue.`
        }

        // General help
        if (input.includes('help') || input.includes('command') || input.includes('what can you do')) {
            return `🤖 **AI Assistant Commands**\n\n**📢 Notification Commands:**\n• "Notify workers" - Send alerts to all workers\n• "Notify drivers" - Send alerts to all drivers\n• "Notify owners" - Send alerts to business owners\n• "Notify all" - Broadcast to everyone\n\n**📦 Shipment Commands:**\n• "Update shipment" - Update shipment status\n• "Shipment status" - View all shipment statuses\n• "Create order" - Generate new order\n\n**💡 Examples:**\n• "Notify workers about new tasks"\n• "Update shipment delivery status"\n• "Show me shipment status"\n• "Create new order for customer"`
        }

        // Default response
        const defaultResponses = [
            `I understand you said: "${userInput}". I'm ready to help with notifications and shipment management. Try asking me to "notify workers" or "update shipment status".`,
            `Got it! "${userInput}" - I can help you manage notifications for workers, drivers, owners, or update shipment information. What would you like me to do?`,
            `Thanks for your message: "${userInput}". I'm equipped to handle team notifications and shipment updates. Type "help" to see available commands.`
        ]

        return defaultResponses[Math.floor(Math.random() * defaultResponses.length)]
    }

    const handleSendMessage = async () => {
        if (!inputValue.trim()) return

        const userMessage: Message = {
            id: Date.now().toString(),
            content: inputValue,
            sender: 'user',
            timestamp: new Date()
        }

        setMessages(prev => [...prev, userMessage])
        const userInput = inputValue
        setInputValue('')
        setIsTyping(true)

        // Generate contextual bot response
        setTimeout(() => {
            const botMessage: Message = {
                id: (Date.now() + 1).toString(),
                content: generateBotResponse(userInput),
                sender: 'bot',
                timestamp: new Date()
            }
            setMessages(prev => [...prev, botMessage])
            setIsTyping(false)
        }, 1000 + Math.random() * 2000)
    }

    const handleKeyPress = (e: React.KeyboardEvent) => {
        if (e.key === 'Enter' && !e.shiftKey) {
            e.preventDefault()
            handleSendMessage()
        }
    }

    const clearChat = () => {
        setMessages([{
            id: '1',
            content: 'Hello! I\'m your logistics AI assistant. I can help you with:\n\n📢 **Notifications:**\n• Notify workers, drivers, owners, or all team members\n\n📦 **Shipment Management:**\n• Update shipment statuses\n• Check shipment status\n• Create new orders\n\nTry asking me to "notify workers" or "update shipment status". Type "help" for more commands!',
            sender: 'bot',
            timestamp: new Date()
        }])
    }

    const regenerateLastResponse = () => {
        if (messages.length < 2) return

        const lastUserMessage = messages.slice().reverse().find(msg => msg.sender === 'user')
        if (!lastUserMessage) return

        // Remove the last bot message
        setMessages(prev => {
            const lastBotIndex = prev.slice().reverse().findIndex(msg => msg.sender === 'bot')
            if (lastBotIndex === -1) return prev
            const indexToRemove = prev.length - 1 - lastBotIndex
            return prev.slice(0, indexToRemove)
        })

        setIsTyping(true)

        // Generate new response
        setTimeout(() => {
            const responses = [
                `Let me provide a different perspective on "${lastUserMessage.content}". This is an alternative response to show the regeneration feature.`,
                `I'll approach your question about "${lastUserMessage.content}" differently this time. This demonstrates how responses can vary.`,
                `Here's another way to think about "${lastUserMessage.content}". Each regeneration can offer fresh insights.`
            ]

            const botMessage: Message = {
                id: Date.now().toString(),
                content: responses[Math.floor(Math.random() * responses.length)],
                sender: 'bot',
                timestamp: new Date()
            }
            setMessages(prev => [...prev, botMessage])
            setIsTyping(false)
        }, 1000 + Math.random() * 2000)
    }

    const copyToClipboard = async (text: string, messageId: string) => {
        try {
            await navigator.clipboard.writeText(text)
            setCopiedMessageId(messageId)
            setTimeout(() => setCopiedMessageId(null), 2000)
        } catch (err) {
            console.error('Failed to copy text: ', err)
        }
    }

    const formatTime = (date: Date) => {
        return date.toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' })
    }

    const canRegenerate = () => {
        return messages.length > 1 && messages[messages.length - 1]?.sender === 'bot'
    }

    return (
        <div className="flex flex-col h-full max-h-[calc(100vh-2rem)] bg-background">
            {/* Header */}
            <div className="flex items-center justify-between p-4 border-b border-border bg-card">
                <div className="flex items-center gap-2">
                    <div className="w-8 h-8 rounded-full bg-primary/10 flex items-center justify-center">
                        <IconRobot className="w-4 h-4 text-primary" />
                    </div>
                    <div>
                        <h2 className="font-semibold text-sm">AI Assistant</h2>
                        <p className="text-xs text-muted-foreground">Always here to help</p>
                    </div>
                </div>

                {/* Action buttons */}
                <div className="flex items-center gap-2">
                    {canRegenerate() && (
                        <Button
                            variant="ghost"
                            size="icon"
                            onClick={regenerateLastResponse}
                            disabled={isTyping}
                            className="h-8 w-8"
                            title="Regenerate last response"
                        >
                            <IconRefresh className="w-4 h-4" />
                        </Button>
                    )}
                    <Button
                        variant="ghost"
                        size="icon"
                        onClick={clearChat}
                        disabled={isTyping}
                        className="h-8 w-8"
                        title="Clear chat"
                    >
                        <IconTrash className="w-4 h-4" />
                    </Button>
                </div>
            </div>

            {/* Messages Container */}
            <div className="flex-1 overflow-y-auto p-4 space-y-4">
                {messages.map((message) => (
                    <div
                        key={message.id}
                        className={cn(
                            "flex gap-3 group",
                            message.sender === 'user' ? 'flex-row-reverse' : 'flex-row'
                        )}
                    >
                        {/* Avatar */}
                        <div className={cn(
                            "w-8 h-8 rounded-full flex items-center justify-center flex-shrink-0 mt-1",
                            message.sender === 'user'
                                ? 'bg-primary text-primary-foreground'
                                : 'bg-muted'
                        )}>
                            {message.sender === 'user' ? (
                                <IconUser className="w-4 h-4" />
                            ) : (
                                <IconRobot className="w-4 h-4" />
                            )}
                        </div>

                        {/* Message Content */}
                        <div className={cn(
                            "flex flex-col gap-1 max-w-[80%] md:max-w-[70%]",
                            message.sender === 'user' ? 'items-end' : 'items-start'
                        )}>
                            <div className={cn(
                                "rounded-lg px-3 py-2 text-sm whitespace-pre-wrap break-words relative group",
                                message.sender === 'user'
                                    ? 'bg-primary text-primary-foreground'
                                    : 'bg-muted hover:bg-muted/80'
                            )}>
                                {message.content}

                                {/* Copy button for bot messages */}
                                {message.sender === 'bot' && (
                                    <Button
                                        variant="ghost"
                                        size="icon"
                                        className="absolute -top-2 -right-2 w-6 h-6 opacity-0 group-hover:opacity-100 transition-opacity bg-background border border-border shadow-sm"
                                        onClick={() => copyToClipboard(message.content, message.id)}
                                    >
                                        {copiedMessageId === message.id ? (
                                            <IconCheck className="w-3 h-3 text-green-500" />
                                        ) : (
                                            <IconCopy className="w-3 h-3" />
                                        )}
                                    </Button>
                                )}
                            </div>

                            <span className="text-xs text-muted-foreground px-1">
                                {formatTime(message.timestamp)}
                            </span>
                        </div>
                    </div>
                ))}

                {/* Typing Indicator */}
                {isTyping && (
                    <div className="flex gap-3">
                        <div className="w-8 h-8 rounded-full bg-muted flex items-center justify-center flex-shrink-0 mt-1">
                            <IconRobot className="w-4 h-4" />
                        </div>
                        <div className="bg-muted rounded-lg px-3 py-2 text-sm">
                            <div className="flex items-center gap-1">
                                <div className="flex gap-1">
                                    <div className="w-2 h-2 bg-muted-foreground/50 rounded-full animate-pulse" style={{ animationDelay: '0ms' }}></div>
                                    <div className="w-2 h-2 bg-muted-foreground/50 rounded-full animate-pulse" style={{ animationDelay: '150ms' }}></div>
                                    <div className="w-2 h-2 bg-muted-foreground/50 rounded-full animate-pulse" style={{ animationDelay: '300ms' }}></div>
                                </div>
                                <span className="text-muted-foreground ml-2">AI is typing...</span>
                            </div>
                        </div>
                    </div>
                )}

                <div ref={messagesEndRef} />
            </div>

            {/* Input Area */}
            <div className="p-4 border-t border-border bg-card">
                <div className="flex gap-2 items-end">
                    <div className="flex-1 relative">
                        <Input
                            ref={inputRef}
                            value={inputValue}
                            onChange={(e) => setInputValue(e.target.value)}
                            onKeyPress={handleKeyPress}
                            placeholder="Type your message..."
                            className="pr-12 resize-none min-h-[40px] max-h-[120px]"
                            disabled={isTyping}
                        />
                    </div>
                    <Button
                        onClick={handleSendMessage}
                        disabled={!inputValue.trim() || isTyping}
                        size="icon"
                        className="h-10 w-10 flex-shrink-0"
                    >
                        <IconSend className="w-4 h-4" />
                    </Button>
                </div>
                <p className="text-xs text-muted-foreground mt-2 text-center">
                    Press Enter to send, Shift + Enter for new line
                </p>
            </div>
        </div>
    )
}

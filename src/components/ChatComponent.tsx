'use client'

import { useRef, useState } from "react";
import { Send } from "lucide-react";
import { Input, TextArea } from "@heroui/react";

export default function ChatInput() {
    const [message, setMessage] = useState("");

    const handleSend = () => {
        if (!message.trim()) return;

        console.log("Message:", message);

        setMessage("");
    };

    const handleKeyDown = (e: any) => {
        if (e.key === "Enter" && e.ctrlKey) {
            e.preventDefault();
            handleSend();
        }
    };

    const textareaRef = useRef<HTMLTextAreaElement>(null);

    const handleChange = (e: React.ChangeEvent<HTMLTextAreaElement>) => {
        setMessage(e.target.value);

        const textarea = e.target;
        textarea.style.height = "auto"; // اول ارتفاع قبلی را ریست می‌کند
        textarea.style.height = `${Math.min(textarea.scrollHeight, 200)}px`;
    };

    return (
        <div className="flex flex-col gap-14 w-full">
            <p className="mb-4 text-center text-4xl font-bold text-white">
                Codebase RAG آماده به شروع برای چت کردن
            </p>
            <div className="mx-auto flex w-8/12 items-center rounded-2xl border border-white/10 bg-white/10 px-3 py-2 shadow-lg backdrop-blur-md">

                <TextArea
                    ref={textareaRef}
                    value={message}
                    onChange={handleChange}
                    onKeyDown={handleKeyDown}
                    placeholder="پیامت رو اینجا بنویس..."
                    className="
        flex-1
        border-none
        bg-transparent
        text-white
        placeholder:text-white/40
        outline-none
        focus:ring-0
        resize-none
        overflow-y-auto
    "
                />

                <button
                    onClick={handleSend}
                    className="
                    flex h-10 w-10
                    items-center justify-center
                    rounded-xl
                    bg-white/15
                    text-white
                    cursor-pointer
                    transition-all
                    hover:bg-white/25
                    active:scale-95
                "
                >
                    <Send size={18} />
                </button>

            </div>
        </div>
    );
}
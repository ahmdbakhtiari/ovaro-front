'use client'

import { useEffect, useRef, useState } from "react";
import { Send, Paperclip } from "lucide-react";
import { Spinner, TextArea } from "@heroui/react";
import { postMessageInChat } from "../actions/action";

type Message = {
    id: number;
    role: "user" | "assistant";
    content: string;
}

export default function ChatInput() {
    const messagesContainerRef = useRef<HTMLDivElement>(null);
    const textareaRef = useRef<HTMLTextAreaElement>(null);
    const fileInputRef = useRef<HTMLInputElement>(null);

    const [message, setMessage] = useState("");
    const [messages, setMessages] = useState<Message[]>([]);
    const [loading, setLoading] = useState(false);
    const [selectedFile, setSelectedFile] = useState<File | null>(null);

    // Auto scroll
    useEffect(() => {
        if (messagesContainerRef.current) {
            messagesContainerRef.current.scrollTo({
                top: messagesContainerRef.current.scrollHeight,
                behavior: "smooth",
            });
        }
    }, [messages, loading]);

    const handleSend = async () => {
        if (!message.trim() && !selectedFile) return;

        const userMessage = message;

        setMessages((prev) => [
            ...prev,
            {
                id: prev.length + 1,
                content: userMessage,
                role: "user",
            },
        ]);

        setMessage("");
        setLoading(true);

        const res = await postMessageInChat({
            message: userMessage,
        });

        setLoading(false);

        setMessages((prev) => [
            ...prev,
            {
                id: prev.length + 1,
                content: res.body.response,
                role: "assistant",
            },
        ]);

        setSelectedFile(null);
    };

    const handleKeyDown = (
        e: React.KeyboardEvent<HTMLTextAreaElement>
    ) => {
        if (e.key === "Enter" && e.ctrlKey) {
            e.preventDefault();
            handleSend();
        }
    };

    const handleChange = (
        e: React.ChangeEvent<HTMLTextAreaElement>
    ) => {
        setMessage(e.target.value);

        const textarea = e.target;

        textarea.style.height = "auto";
        textarea.style.height = `${Math.min(
            textarea.scrollHeight,
            200
        )}px`;
    };

    const handleAttach = () => {
        fileInputRef.current?.click();
    };

    const handleFileChange = (
        e: React.ChangeEvent<HTMLInputElement>
    ) => {
        const file = e.target.files?.[0];

        if (!file) return;

        setSelectedFile(file);

        console.log("Attached file:", file);
    };

    return (
        <div className="
            flex
            w-full
            flex-col
            gap-6
            px-3
            sm:px-5
            md:px-6
        ">

            {/* Messages */}

            <div
                ref={messagesContainerRef}
                className="
                    chat-scroll
                    mx-auto
                    w-full
                    max-w-3xl
                    max-h-[55vh]
                    min-h-[200px]
                    overflow-y-auto
                    px-1
                    sm:px-2
                    md:px-3
                "
            >

                {messages.length < 1 && (
                    <p className="
                        mb-4
                        text-center
                        text-2xl
                        font-bold
                        leading-relaxed
                        text-white
                        sm:text-3xl
                        md:text-4xl
                    ">
                        Codebase RAG آماده به شروع برای چت کردن
                    </p>
                )}

                <div className="flex flex-col gap-3 sm:gap-4">
                    {messages.map((message) => (
                        message.role === "user" ? (
                            <div
                                key={message.id}
                                className="flex justify-start px-1"
                            >
                                <div className="
                                    max-w-[90%]
                                    rounded-2xl
                                    rounded-br-md
                                    bg-blue-600
                                    px-4
                                    py-2.5
                                    text-white
                                    shadow-lg
                                    sm:max-w-[80%]
                                    sm:px-5
                                    sm:py-3
                                    md:max-w-[75%]
                                ">
                                    <p className="
                                        break-words
                                        text-sm
                                        leading-6
                                        md:text-base
                                        md:leading-7
                                    ">
                                        {message.content}
                                    </p>
                                </div>
                            </div>
                        ) : (
                            <div
                                key={message.id}
                                className="flex justify-end px-1"
                            >
                                <div className="
                                    max-w-[90%]
                                    rounded-2xl
                                    rounded-bl-md
                                    border
                                    border-white/10
                                    bg-white/[0.06]
                                    px-4
                                    py-2.5
                                    text-white
                                    shadow-lg
                                    sm:max-w-[80%]
                                    sm:px-5
                                    sm:py-3
                                    md:max-w-[75%]
                                ">
                                    <p className="
                                        break-words
                                        text-sm
                                        leading-6
                                        md:text-base
                                        md:leading-7
                                    ">
                                        {message.content}
                                    </p>
                                </div>
                            </div>
                        )
                    ))}
                </div>

                {loading && (
                    <div className="
                        mt-6
                        flex
                        justify-center
                        sm:mt-8
                    ">
                        <Spinner
                            color="accent"
                            size="xl"
                        />
                    </div>
                )}

            </div>


            {/* Selected File */}

            {selectedFile && (
                <div className="
                    mx-auto
                    flex
                    w-full
                    max-w-3xl
                    items-center
                    justify-between
                    rounded-xl
                    border
                    border-white/10
                    bg-white/5
                    px-4
                    py-2
                    text-sm
                    text-white
                ">
                    <span className="truncate">
                        📎 {selectedFile.name}
                    </span>

                    <button
                        type="button"
                        onClick={() => setSelectedFile(null)}
                        className="
                            ml-3
                            text-white/50
                            hover:text-white
                        "
                    >
                        ×
                    </button>
                </div>
            )}


            {/* Input */}

            <div className="
                mx-auto
                flex
                w-full
                max-w-3xl
                items-end
                rounded-2xl
                border
                border-white/10
                bg-white/10
                px-2
                py-2
                shadow-lg
                backdrop-blur-md
                sm:px-3
            ">

                {/* Hidden File Input */}

                <input
                    ref={fileInputRef}
                    type="file"
                    className="hidden"
                    onChange={handleFileChange}
                />




                {/* TextArea */}

                <TextArea
                    ref={textareaRef}
                    value={message}
                    onChange={handleChange}
                    onKeyDown={handleKeyDown}
                    placeholder="پیامت رو اینجا بنویس..."
                    className="
        textarea-scroll
        flex-1
        border-none
        bg-transparent
        text-sm
        text-white
        placeholder:text-white/30
        outline-none
        focus:ring-0
        resize-none
        overflow-y-auto
        sm:text-base
    "
                />

                <div>
                    <button
                        type="button"
                        onClick={handleAttach}
                        className="
                        flex
                        h-9
                        w-9
                        shrink-0
                        items-center
                        justify-center
                        rounded-xl
                        text-white/60
                        transition-all
                        hover:bg-white/10
                        hover:text-white
                        active:scale-95
                        sm:h-10
                        sm:w-10
                    "
                        title="Attach file"
                    >
                        <Paperclip size={19} />
                    </button>

                    {/* Send */}

                    <button
                        type="button"
                        onClick={handleSend}
                        disabled={loading || (!message.trim() && !selectedFile)}
                        className="
                        ml-2
                        flex
                        h-9
                        w-9
                        shrink-0
                        items-center
                        justify-center
                        rounded-xl
                        bg-white/15
                        text-white
                        transition-all
                        hover:bg-white/25
                        active:scale-95
                        disabled:cursor-not-allowed
                        disabled:opacity-40
                        sm:h-10
                        sm:w-10
                    "
                        title="Send"
                    >
                        <Send size={18} />
                    </button>


                    {/* Attach */}


                </div>

            </div>

        </div>
    );
}

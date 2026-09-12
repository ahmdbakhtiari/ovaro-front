'use client'

import { useEffect, useRef, useState } from "react";
import { Send } from "lucide-react";
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

    const [message, setMessage] = useState("");
    const [messages, setMessages] = useState<Message[]>([]);
    const [loading, setLoading] = useState(false);

    // Auto scroll to bottom
    useEffect(() => {
        if (messagesContainerRef.current) {
            messagesContainerRef.current.scrollTo({
                top: messagesContainerRef.current.scrollHeight,
                behavior: "smooth",
            });
        }
    }, [messages, loading]);

    const handleSend = async () => {
        if (!message.trim()) return;

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
    };

    const handleKeyDown = (e: React.KeyboardEvent<HTMLTextAreaElement>) => {
        if (e.key === "Enter" && e.ctrlKey) {
            e.preventDefault();
            handleSend();
        }
    };

    const handleChange = (e: React.ChangeEvent<HTMLTextAreaElement>) => {
        setMessage(e.target.value);

        const textarea = e.target;

        textarea.style.height = "auto";
        textarea.style.height = `${Math.min(textarea.scrollHeight, 200)}px`;
    };

    return (
        <div className="
            flex
            w-full
            flex-col
            gap-6
            px-3
            sm:gap-8
            sm:px-5
            md:gap-10
            md:px-6
            lg:gap-14
        ">

            {/* ================= CHAT MESSAGES ================= */}

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

                    pb-2
                "
            >

                {/* Empty State */}

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

                {/* Messages */}

                <div className="
                    flex
                    flex-col
                    gap-3

                    sm:gap-4

                    md:gap-5
                ">

                    {messages.map((message) => (
                        message.role === "user" ? (

                            /* ================= USER ================= */

                            <div
                                key={message.id}
                                className="
                                    flex
                                    justify-start
                                    px-1

                                    sm:px-2
                                "
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

                                        sm:text-sm
                                        sm:leading-7

                                        md:text-base
                                        md:leading-7
                                    ">
                                        {message.content}
                                    </p>
                                </div>
                            </div>

                        ) : (

                            /* ================= ASSISTANT ================= */

                            <div
                                key={message.id}
                                className="
                                    flex
                                    justify-end
                                    px-1

                                    sm:px-2
                                "
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

                                        sm:text-sm
                                        sm:leading-7

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

                {/* ================= LOADING ================= */}

                {loading && (
                    <div className="
                        mt-6
                        flex
                        flex-col
                        items-center
                        gap-2

                        sm:mt-8

                        md:mt-12
                    ">
                        <Spinner
                            color="accent"
                            size="xl"
                        />
                    </div>
                )}

            </div>


            {/* ================= INPUT ================= */}

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

                md:py-2.5
            ">

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

                        text-sm
                        text-white

                        placeholder:text-white/40

                        outline-none

                        focus:ring-0

                        resize-none

                        overflow-y-auto

                        sm:text-base
                    "
                />

                <button
                    onClick={handleSend}
                    disabled={loading || !message.trim()}

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

                        cursor-pointer

                        transition-all

                        hover:bg-white/25

                        active:scale-95

                        disabled:cursor-not-allowed
                        disabled:opacity-40

                        sm:h-10
                        sm:w-10
                    "
                >
                    <Send
                        size={18}
                        className="sm:size-5"
                    />
                </button>

            </div>

        </div>
    );
}

import {
  useVoiceAssistant,
  BarVisualizer,
  VoiceAssistantControlBar,
  useTrackTranscription,
  useLocalParticipant,
} from "@livekit/components-react";
import { Track } from "livekit-client";
import { useEffect, useState } from "react";
import type { MessageType } from "../types/message";

const Message = ({ type, text }: Omit<MessageType, "id">) => {
  const isAgent = type === "agent";
  return (
    <div
      className={`flex flex-col gap-0.75 px-3.5 py-2.5 rounded-xl max-w-[85%] text-sm leading-relaxed ${
        isAgent
          ? "self-start bg-white border border-slate-200 shadow-xs"
          : "self-end bg-primary-blue"
      }`}
    >
      <strong
        className={`text-[0.7rem] font-bold uppercase tracking-[0.05em] ${
          isAgent ? "text-primary-blue" : "text-sky-200"
        }`}
      >
        {isAgent ? "AI Assistant" : "You"}
      </strong>
      <span className={isAgent ? "text-slate-700" : "text-white"}>{text}</span>
    </div>
  );
};

const VoiceAssistantComp = () => {
  const { state, audioTrack, agentTranscriptions } = useVoiceAssistant();
  const localParticipant = useLocalParticipant();
  const { segments: userTranscriptions } = useTrackTranscription({
    publication: localParticipant.microphoneTrack,
    source: Track.Source.Microphone,
    participant: localParticipant.localParticipant,
  });

  const [messages, setMessages] = useState<MessageType[]>([]);

  useEffect(() => {
    const allMessages = [
      ...(agentTranscriptions?.map((t) => ({ ...t, type: "agent" })) ?? []),
      ...(userTranscriptions?.map((t) => ({ ...t, type: "user" })) ?? []),
    ].sort((a, b) => a.firstReceivedTime - b.firstReceivedTime);

    setMessages(allMessages);
  }, [agentTranscriptions, userTranscriptions]);

  return (
    <div className="flex flex-col items-center w-full h-full px-5 pt-6 pb-4 overflow-hidden">
      <div className="w-full max-w-[600px] h-[120px] mx-auto shrink-0">
        <BarVisualizer state={state} barCount={7} trackRef={audioTrack} />
      </div>
      <div className="w-full max-w-[600px] flex flex-col flex-1 min-h-0 mt-4">
        <VoiceAssistantControlBar />
        <div className="conversation flex-1 min-h-0 overflow-y-auto p-4 border border-slate-200 rounded-2xl mt-4 bg-slate-50 flex flex-col gap-2.5">
          {messages.map((msg, index) => (
            <Message key={msg.id || index} type={msg.type} text={msg.text} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default VoiceAssistantComp;

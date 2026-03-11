import { useState, useCallback } from "react";
import { LiveKitRoom, RoomAudioRenderer } from "@livekit/components-react";
import "@livekit/components-styles";
import VoiceAssistantComp from "./VoiceAssistantComp";

interface LiveKitModalProps {
  setShowSupport: (show: boolean) => void;
}

const LiveKitModal = ({ setShowSupport }: LiveKitModalProps) => {
  const [isSubmittingName, setIsSubmittingName] = useState<boolean>(true);
  const [name, setName] = useState<string>("");
  const [token, setToken] = useState<string | null>(null);
  const [isLoading, setIsLoading] = useState<boolean>(false);

  const API_URL = import.meta.env.VITE_API_URL;

  const getToken = useCallback(async (userName: string) => {
    setIsLoading(true);
    try {
      const response = await fetch(
        `${API_URL}/api/getToken?name=${encodeURIComponent(userName)}`,
      );
      const token = await response.text();
      setToken(token);
      setIsSubmittingName(false);
    } catch (error) {
      console.error(error);
    } finally {
      setIsLoading(false);
    }
  }, []);

  const handleNameSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (name.trim()) {
      getToken(name);
    }
  };

  return (
    <div className="fixed inset-0 bg-slate-900/60 backdrop-blur-sm flex justify-center items-center z-1000 p-4">
      <div className="bg-white rounded-2xl w-full max-w-190 h-[80vh] overflow-hidden shadow-2xl flex flex-col">
        {/* Modal Header */}
        <div className="flex items-center justify-between px-6 py-4 border-b border-gray-100 shrink-0">
          <div className="flex items-center gap-3">
            <div className="w-8 h-8 bg-primary-blue rounded-lg flex items-center justify-center">
              <svg
                className="w-4 h-4 text-white"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2.5}
                  d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z"
                />
              </svg>
            </div>
            <div>
              <p className="font-bold text-gray-900 text-sm leading-tight">
                MediApt AI Assistant
              </p>
              <p className="text-xs text-gray-400 leading-tight">
                Book your appointment by voice
              </p>
            </div>
          </div>
          <button
            onClick={() => setShowSupport(false)}
            className="w-8 h-8 flex items-center justify-center rounded-lg bg-gray-50 hover:bg-gray-100 text-gray-400 hover:text-gray-700 transition-colors text-lg leading-none"
            aria-label="Close"
          >
            ×
          </button>
        </div>

        {/* Modal Body */}
        <div className="flex-1 overflow-hidden">
          {isSubmittingName ? (
            <div className="flex flex-col items-center justify-center h-full px-6 py-8">
              <div className="w-full max-w-sm text-center">
                {/* Icon */}
                <div className="w-14 h-14 bg-blue-50 rounded-2xl flex items-center justify-center mx-auto mb-5">
                  <svg
                    className="w-7 h-7 text-primary-blue"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z"
                    />
                  </svg>
                </div>

                <h2 className="text-xl font-black text-gray-900 mb-2">
                  Let's get started
                </h2>
                <p className="text-sm text-gray-500 mb-7 leading-relaxed">
                  Enter your name below to connect with our AI assistant and
                  book your appointment.
                </p>

                <form
                  onSubmit={handleNameSubmit}
                  className="flex flex-col gap-3"
                >
                  <input
                    type="text"
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                    placeholder="Your full name"
                    required
                    className="w-full px-4 py-3.5 border-2 border-gray-200 rounded-xl text-sm bg-gray-50 focus:outline-none focus:border-primary-blue focus:bg-white focus:shadow-[0_0_0_3px_rgba(3,105,161,0.1)] transition-all placeholder-gray-400"
                  />
                  <button
                    type="submit"
                    disabled={isLoading}
                    className="w-full py-3.5 bg-linear-to-br from-primary-blue to-secondary-blue text-white rounded-xl font-bold text-sm hover:opacity-90 active:scale-[0.98] transition-all disabled:opacity-60 disabled:cursor-not-allowed flex items-center justify-center gap-2"
                  >
                    {isLoading ? (
                      <>
                        <span className="w-4 h-4 border-2 border-white/40 border-t-white rounded-full animate-spin" />
                        Connecting...
                      </>
                    ) : (
                      <>
                        <svg
                          className="w-4 h-4"
                          fill="none"
                          stroke="currentColor"
                          viewBox="0 0 24 24"
                        >
                          <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth={2.5}
                            d="M19 11a7 7 0 01-7 7m0 0a7 7 0 01-7-7m7 7v4m0 0H8m4 0h4m-4-8a3 3 0 01-3-3V5a3 3 0 116 0v6a3 3 0 01-3 3z"
                          />
                        </svg>
                        Connect to AI Assistant
                      </>
                    )}
                  </button>
                  <button
                    type="button"
                    onClick={() => setShowSupport(false)}
                    className="w-full py-3.5 bg-transparent text-gray-500 border-2 border-gray-200 rounded-xl font-semibold text-sm hover:bg-gray-50 hover:text-gray-800 transition-all"
                  >
                    Cancel
                  </button>
                </form>

                <p className="text-xs text-gray-400 mt-5">
                  🔒 Your information is kept private and secure.
                </p>
              </div>
            </div>
          ) : token ? (
            <LiveKitRoom
              serverUrl={import.meta.env.VITE_LIVEKIT_URL}
              token={token}
              connect={true}
              video={false}
              audio={true}
              onDisconnected={() => {
                setShowSupport(false);
                setIsSubmittingName(true);
              }}
            >
              <RoomAudioRenderer />
              <VoiceAssistantComp />
            </LiveKitRoom>
          ) : null}
        </div>
      </div>
    </div>
  );
};

export default LiveKitModal;

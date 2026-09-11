import { waLink } from "@/lib/site";

export default function WhatsAppFab() {
  return (
    <a
      href={waLink("Hi Utkarsh! I'd like to know more about classes at Martial Mystery Dojo.")}
      target="_blank"
      rel="noopener noreferrer"
      aria-label="Chat with Utkarsh on WhatsApp"
      className="group fixed bottom-[calc(1.25rem+env(safe-area-inset-bottom))] right-4 sm:right-6 z-50 flex items-center gap-2.5 rounded-full bg-[#25D366] py-3 px-3 sm:px-4 text-white shadow-[0_8px_30px_rgba(0,0,0,0.5)] transition-all hover:scale-105 active:scale-95"
    >
      <div className="relative grid h-7 w-7 place-items-center">
        <span className="absolute -top-0.5 -right-0.5 h-2.5 w-2.5 rounded-full bg-white animate-ping" />
        <span className="absolute -top-0.5 -right-0.5 h-2.5 w-2.5 rounded-full bg-white" />
        <svg width="26" height="26" viewBox="0 0 24 24" fill="currentColor">
          <path d="M12.04 2C6.58 2 2.13 6.45 2.13 11.91c0 1.75.46 3.45 1.32 4.95L2 22l5.29-1.39a9.9 9.9 0 0 0 4.75 1.21h.01c5.46 0 9.9-4.45 9.9-9.91C21.96 6.45 17.5 2 12.04 2Zm0 18.1h-.01a8.2 8.2 0 0 1-4.19-1.15l-.3-.18-3.12.82.83-3.04-.2-.31a8.18 8.18 0 0 1-1.26-4.37c0-4.53 3.7-8.22 8.26-8.22 2.2 0 4.28.86 5.83 2.42a8.18 8.18 0 0 1 2.42 5.82c0 4.54-3.7 8.23-8.26 8.23Zm4.52-6.16c-.25-.12-1.47-.72-1.69-.81-.23-.08-.39-.12-.56.13-.17.24-.64.8-.78.97-.14.16-.29.18-.53.06-.25-.12-1.05-.38-1.99-1.22-.74-.65-1.23-1.46-1.38-1.7-.14-.25-.02-.38.11-.5.11-.11.25-.29.37-.43.12-.15.16-.25.24-.41.08-.17.04-.31-.02-.43-.06-.12-.56-1.34-.76-1.83-.2-.48-.41-.42-.56-.42-.14-.01-.3-.01-.47-.01a.9.9 0 0 0-.65.3c-.22.24-.86.84-.86 2.04 0 1.2.88 2.36 1 2.52.12.17 1.74 2.66 4.22 3.72.59.26 1.05.4 1.41.52.59.19 1.13.16 1.55.1.47-.07 1.47-.6 1.68-1.18.21-.58.21-1.08.14-1.18-.06-.1-.22-.16-.47-.28Z" />
        </svg>
      </div>
      <span className="hidden sm:inline-block text-xs font-bold uppercase tracking-wider pr-1">
        Chat with Utkarsh
      </span>
    </a>
  );
}

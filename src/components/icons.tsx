import type { LucideProps } from "lucide-react";
import {
  Home,
  FileText,
  Image,
  MessageSquareText,
  BookText,
  Hospital,
  CalendarDays, // Ensured import
  Bell,
  ShieldCheck,
  HeartPulse,
  Settings,
  LogOut,
  UserCircle,
  ChevronDown,
  ChevronRight,
  PlusCircle,
  UploadCloud,
  Search,
  AlertTriangle,
  LifeBuoy,
  Languages,
  ClipboardList,
  Microscope,
  Stethoscope,
  Download,
  Trash2,
  Loader2,
  Phone,
  Clock,
  MapPin,
  SendHorizonal as Send,
  Star,
  ChevronLeft,
  FilePlus2,
  Sun,
  Moon,
  Tablet,
  MessageCircle,
} from "lucide-react";

export const Icons = {
  logo: (props: LucideProps) => (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
      {...props}
    >
      <path d="M12 2L2 7l10 5 10-5-10-5z"></path>
      <path d="M2 17l10 5 10-5"></path>
      <path d="M2 12l10 5 10-5"></path>
      <line x1="12" y1="22" x2="12" y2="12.5"></line>
      <line x1="10" y1="18.5" x2="10" y2="15.5"></line>
      <line x1="14" y1="18.5" x2="14" y2="15.5"></line>
      <line x1="8" y1="17" x2="8" y2="14"></line>
      <line x1="16" y1="17" x2="16" y2="14"></line>
    </svg>
  ),
  home: Home,
  file: FileText,
  imageDiagnosis: Image,
  symptomChecker: MessageSquareText,
  reportSimplifier: BookText,
  hospitals: Hospital,
  appointments: CalendarDays,
  notifications: Bell,
  emergency: AlertTriangle,
  settings: Settings,
  logout: LogOut,
  user: UserCircle,
  chevronDown: ChevronDown,
  chevronRight: ChevronRight,
  chevronLeft: ChevronLeft,
  add: PlusCircle,
  upload: UploadCloud,
  search: Search,
  alertTriangle: AlertTriangle,
  security: ShieldCheck,
  translate: Languages,
  records: ClipboardList,
  analysis: Microscope,
  diagnosis: Stethoscope,
  heartPulse: HeartPulse,
  pills: (props: LucideProps) => (
    <svg
      {...props}
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="M8.5 8.5v7h7v-7h-7z" />
      <path d="M10.5 12.5v-3h3v3" />
      <path d="M19.5 12.5h-5v5h-5v-5h-5v-5h5v-5h5v5h5z" />
    </svg>
  ),
  tablet: Tablet,
  chatbot: MessageCircle,
  filePdf: (props: LucideProps) => (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="M14.5 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V7.5L14.5 2z" />
      <polyline points="14 2 14 8 20 8" />
      <path d="M10 12v6H9" />
      <path d="M11 18h2a1 1 0 0 0 0-2h-2v-2h2a1 1 0 0 0 0-2h-2V9.5a1.5 1.5 0 0 1 3 0v1" />
    </svg>
  ),
  fileImage: Image,
  fileWord: FileText,
  download: Download,
  trash: Trash2,
  loader: Loader2,
  phone: Phone,
  clock: Clock,
  mapPin: MapPin,
  send: Send,
  star: Star,
  tooth: (props: LucideProps) => (
    <svg
      {...props}
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="M12 2c1.1 0 2 .9 2 2s-.9 2-2 2-2-.9-2-2 .9-2 2-2zm0 4c-2.6 0-4.8 2.2-4.8 4.8S9.4 16 12 16s4.8-2.2 4.8-4.8S14.6 6 12 6zm0 7.2c-1.3 0-2.4-.9-2.4-2.1s1.1-2.1 2.4-2.1 2.4.9 2.4 2.1-1.1 2.1-2.4 2.1zM7.2 18.4c.3 1 .9 1.8 1.7 2.4.8.6 1.8.9 2.9.9s2.1-.3 2.9-.9c.8-.6 1.4-1.4 1.7-2.4h-9.2z" />
    </svg>
  ),
  bone: (props: LucideProps) => (
    <svg
      {...props}
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="M18.5 4.5a2.5 2.5 0 0 1 0 5H16v5l-2.1 2.1a2.5 2.5 0 0 1-3.5 0L8 14.5V9.5H5.5a2.5 2.5 0 0 1 0-5C8.5 4.5 10 3 12 3s3.5 1.5 3.5 1.5S18.5 4.5 18.5 4.5Z" />
      <path d="M5.5 19.5a2.5 2.5 0 0 0 0-5H8V9.5l2.5-2.5a2.5 2.5 0 0 1 3.5 0L16 9.5V14.5h2.5a2.5 2.5 0 0 0 0-5c-3 0-4.5 1.5-4.5 1.5S8.5 19.5 5.5 19.5Z" />
    </svg>
  ),
  filePlus: FilePlus2,
  sun: Sun,
  moon: Moon,
  shieldCheck: ShieldCheck,
  calendarDays: CalendarDays, // Ensured definition
  spinner: Loader2,
  google: (props: LucideProps) => (
    <svg
      {...props}
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z" />
      <path d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z" />
      <path d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l2.85-2.22.81-.62z" />
      <path d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z" />
    </svg>
  ),
  facebook: (props: LucideProps) => (
    <svg
      {...props}
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z" />
    </svg>
  ),
};

export type IconKey = keyof typeof Icons;

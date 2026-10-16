export interface ProductionMeta {
  title: string;
  subtitle: string;
  genre?: string;
  dates: string;
  venue: string;
  runningTime: string;
  intermission?: string;
  ageRating?: string;
  ticketPrice: string;
  synopsis?: string[];
  credits: {
    role: string;
    names: string;
  }[];
  cast?: {
    character: string;
    actor: string;
    description?: string;
  }[];
  collectiveIntro?: string | string[];
}

export type LanguageCode = 'ko' | 'fr' | 'en';

export interface LocalizedNote {
  authorTitle?: string;
  authorName?: string;
  heading: string;
  subheading?: string;
  paragraphs: string[];
  closing?: string;
}

export interface ProducerNote {
  authorTitle: string;
  authorName: string;
  heading: string;
  paragraphs: string[];
  closing: string;
  translations?: {
    fr?: LocalizedNote;
    en?: LocalizedNote;
  };
}

export interface DramaturgNote {
  authorTitle: string;
  authorName: string;
  heading: string;
  subheading: string;
  paragraphs: string[];
  closing: string;
  translations?: {
    fr?: LocalizedNote;
    en?: LocalizedNote;
  };
}

export interface NoticeCategory {
  categoryTitle: string;
  items: string[];
}

export interface PerformanceNotice {
  heading: string;
  lead: string;
  categories: NoticeCategory[];
  emergencyGuide: string[];
  inquiry: {
    phone: string;
    email: string;
    operatingHours: string;
  };
}

export interface ProgramScheduleItem {
  step?: string;
  title: string;
  duration?: string;
  description?: string;
}

export interface ProgramSchedule {
  heading: string;
  note?: string;
  firstGroupLabel?: string;
  secondGroupLabel?: string;
  items: ProgramScheduleItem[];
}

export interface ProgramBookContent {
  meta: ProductionMeta;
  schedule?: ProgramSchedule;
  producerNote: ProducerNote;
  dramaturgNote: DramaturgNote;
  notices: PerformanceNotice;
}

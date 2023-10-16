export interface ApodResponse {
  copyright?: string;
  date: string;
  explanation: string;
  hdurl?: string;
  media_type?: string;
  service_version?: string;
  title: string;
  url: string;
}

interface ImageContentProps {
  apodObject: ApodResponse | null;
  errorMessage: boolean;
  date: Date | null;
  setDate: React.Dispatch<React.SetStateAction<Date | null>>;
  showCalendar: boolean;
  setShowCalendar: React.Dispatch<React.SetStateAction<boolean>>;
  button: boolean;
  setShowButton: React.Dispatch<React.SetStateAction<boolean>>;
  today: Date;
  startDate: Date;
  fetchDateImage: () => void;
  showDetails: boolean;
  setShowDetails: React.Dispatch<React.SetStateAction<boolean>>;
  hideDetails: boolean;
  setHideDetails: React.Dispatch<React.SetStateAction<boolean>>;
  closeModal: boolean;
  setCloseModal: React.Dispatch<React.SetStateAction<boolean>>;
}

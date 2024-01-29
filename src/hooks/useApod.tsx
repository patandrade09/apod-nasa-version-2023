import { useEffect, useState } from "react";
import * as service from "../service/service";
import { ApodResponse } from "../models/general";
import { formatDate } from "../utils/formatters";

const useApod = () => {
  const [apodObject, setApodObject] = useState<ApodResponse | null>();
  const [errorMessage, setErrorMessage] = useState(false);
  const [date, setDate] = useState<Date | null>(new Date());
  const [showCalendar, setShowCalendar] = useState(false);
  const [dateModified, setDateModified] = useState(false);
  const [button, setShowButton] = useState(true);
  const [isLoading, setIsLoading] = useState(false);

  const today = new Date();
  const startDate = new Date("1995-06-21");

  useEffect(() => {
    fetchDefaultImage();
  }, []);

  useEffect(() => {
    if (dateModified) {
      setShowCalendar(false);
      fetchDateImage();
    }
  }, [date, dateModified]);

  const handleDateChange = (newDate) => {
    setDate(newDate);
    if (!dateModified) {
      setDateModified(true);
    }
  };

  const fetchDefaultImage = () => {
    setIsLoading(true);
    service.fetchDefaultImageUrl().then((response) => {
      if (!response.status) {
        setErrorMessage(false);
        setApodObject(response);
        setTimeout(() => {
          setShowButton(true);
          setIsLoading(false);
        }, 5000);
      } else {
        setErrorMessage(true);
        setShowButton(false);
        setApodObject(null);
      }
    });
  };

  const fetchDateImage = () => {
    if (date && date !== today) {
      const formatted = formatDate(date).toString();
      setIsLoading(true);
      service.fecthDateImageUrl(formatted).then((response) => {
        if (!response.status) {
          setErrorMessage(false);
          setApodObject(response);
          setTimeout(() => {
            setShowButton(true);
            setIsLoading(false);
          }, 5000);
        } else {
          setErrorMessage(true);
          setShowButton(false);
          setApodObject(null);
        }
      });
    }
  };

  return {
    apodObject,
    setApodObject,
    errorMessage,
    setErrorMessage,
    date,
    setDate,
    showCalendar,
    setShowCalendar,
    dateModified,
    setDateModified,
    button,
    setShowButton,
    today,
    startDate,
    handleDateChange,
    fetchDateImage,
    isLoading,
    setIsLoading,
  };
};

export default useApod;

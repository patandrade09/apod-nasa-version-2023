import { useEffect, useState } from "react";
import "./App.css";
import Header from "./Header";
import ImageContent from "./Image";
import VideoContent from "./VideoContent";
import * as service from "./service/service";
import { ApodResponse } from "./models/general";
import "animate.css";
import { format } from "date-fns";

function App() {
  const [apodObject, setApodObject] = useState<ApodResponse | null>();
  const [errorMessage, setErrorMessage] = useState(false);
  const [date, setDate] = useState<Date | null>(new Date());
  const [showCalendar, setShowCalendar] = useState(false);
  const [button, setShowButton] = useState(true);
  const [showDetails, setShowDetails] = useState(false);
  const [hideDetails, setHideDetails] = useState(false);

  const today = new Date();
  const startDate = new Date("1995-06-21");

  useEffect(() => {
    service.fetchDefaultImageUrl().then((response) => {
      if (response.status) {
        setErrorMessage(true);
        setShowButton(false);
        setApodObject(null);
      } else {
        setErrorMessage(false);
        setApodObject(response);
      }
    });
  }, []);

  useEffect(() => {
    setShowCalendar(false);
    fetchDateImage();
  }, [date]);

  const formatDate = (date: Date) => {
    return format(date, "yyyy-MM-dd");
  };

  const fetchDateImage = () => {
    if (date) {
      const formatted = formatDate(date).toString();
      service.fecthDateImageUrl(formatted).then((response) => {
        if (response.status) {
          setErrorMessage(true);
          setShowButton(false);
          setApodObject(null);
        } else {
          setErrorMessage(false);
          setApodObject(response);
          setTimeout(() => {
            setShowButton(true);
          }, 5000);
        }
      });
    }
  };

  return (
    <>
      <Header />
      {apodObject?.media_type === "image" ? (
        <ImageContent
          apodObject={apodObject}
          errorMessage={errorMessage}
          date={date}
          setDate={setDate}
          showCalendar={showCalendar}
          setShowCalendar={setShowCalendar}
          button={button}
          setShowButton={setShowButton}
          today={today}
          startDate={startDate}
          fetchDateImage={fetchDateImage}
          showDetails={showDetails}
          setShowDetails={setShowDetails}
          hideDetails={hideDetails}
          setHideDetails={setHideDetails}
        />
      ) : (
        <VideoContent
          apodObject={apodObject}
          errorMessage={errorMessage}
          date={date}
          setDate={setDate}
          showCalendar={showCalendar}
          setShowCalendar={setShowCalendar}
          button={button}
          setShowButton={setShowButton}
          today={today}
          startDate={startDate}
          fetchDateImage={fetchDateImage}
          showDetails={showDetails}
          setShowDetails={setShowDetails}
          hideDetails={hideDetails}
          setHideDetails={setHideDetails}
        />
      )}
    </>
  );
}

export default App;

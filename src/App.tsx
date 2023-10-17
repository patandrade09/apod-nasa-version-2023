import { useState } from "react";
import "./App.css";
import Header from "./components/Header/Header";
import ImageContent from "./components/Contents/ImageContent";
import VideoContent from "./components/Contents/VideoContent";
import useApod from "./hooks/useApod";
import Loading from "./components/Loading/Loading";

function App() {
  const [showDetails, setShowDetails] = useState(false);
  const [hideDetails, setHideDetails] = useState(false);
  const [close, setClose] = useState(false);

  const {
    apodObject,
    errorMessage,
    date,
    showCalendar,
    setShowCalendar,
    button,
    setShowButton,
    today,
    startDate,
    handleDateChange,
    fetchDateImage,
    isLoading
  } = useApod();

  if(isLoading){
    return <Loading/>
  }

  return (
    <>
      <Header />
      {apodObject?.media_type === "image" ? (
        <ImageContent
          apodObject={apodObject}
          errorMessage={errorMessage}
          date={date}
          setDate={handleDateChange}
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
          closeModal={close}
          setCloseModal={setClose}
        />
      ) : (
        <VideoContent
          apodObject={apodObject}
          errorMessage={errorMessage}
          date={date}
          setDate={handleDateChange}
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
          closeModal={close}
          setCloseModal={setClose}
        />
      )}
    </>
  );
}

export default App;

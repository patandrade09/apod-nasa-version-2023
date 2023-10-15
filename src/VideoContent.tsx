import React from "react";
import { FaAngleDoubleLeft, FaAngleDoubleRight } from "react-icons/fa";
import DatePicker from "react-datepicker";
import { ImageContentProps } from "./models/general";

const VideoContent: React.FC<ImageContentProps> = ({
  apodObject,
  errorMessage,
  date,
  setDate,
  showCalendar,
  setShowCalendar,
  button,
  today,
  startDate,
  showDetails,
  setShowDetails,
  hideDetails,
  setHideDetails,
}) => {
  return (
    <div style={{ background: "black" }} className="app-container">
      {errorMessage && (
        <div className="title" style={{ color: "black" }}>
          <h1>Ops... something's wrong. Try again later!</h1>
        </div>
      )}
      <div>
        <div className="titleContainer">
          <h1 className="title animate__animated animate__fadeInDown animate__slow">
            {apodObject?.title}
          </h1>
          {showCalendar ? (
            <div className="datepicker-container">
              <DatePicker
                selected={date}
                onChange={(date) => setDate(date)}
                className="calendar-custom"
                peekNextMonth
                showMonthDropdown
                showYearDropdown
                dropdownMode="select"
                withPortal
                portalId="root-portal"
                scrollableYearDropdown
                maxDate={today}
                minDate={startDate}
              />
            </div>
          ) : (
            button && (
              <button
                className="button animate__animated animate__fadeInDown animate__delay-1s"
                onClick={() => setShowCalendar(true)}
              >
                Choose a date
              </button>
            )
          )}
        </div>
        <div className="video-container">
          <iframe
            width="1280"
            height="720"
            src={apodObject?.url}
            title={apodObject?.title}
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
            allowFullScreen
          ></iframe>
        </div>
        <div className="arrowContainer animate__animated animate__fadeInDown">
          {showDetails ? (
            <div>
              <button
                onClick={() => {
                  showDetails && setShowDetails(false), setHideDetails(true);
                }}
                className="hideButton"
              >
                HIDE DETAILS
              </button>
              <FaAngleDoubleLeft
                className={
                  "arrowStyle animate__animated animate__rotateInUpLeft"
                }
              />
            </div>
          ) : (
            <div className="animate__animated animate__pulse animate__infinite animate__delay-2s">
              <button
                onClick={() => {
                  !showDetails && setShowDetails(true), setHideDetails(false);
                }}
                className="showButton"
              >
                SHOW DETAILS
              </button>
              <FaAngleDoubleRight
                className={
                  "arrowStyle animate__animated animate__rotateInDownLeft"
                }
              />
            </div>
          )}
        </div>
        {showDetails && (
          <p className="paragraph paragraph-video  animate__animated animate__fadeInLeft">
            {apodObject?.explanation}
          </p>
        )}
        {hideDetails && (
          <p className="paragraph paragraph-video  animate__animated animate__fadeOutLeft">
            {apodObject?.explanation}
          </p>
        )}
      </div>
    </div>
  );
};

export default VideoContent;

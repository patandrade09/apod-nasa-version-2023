import React from "react";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import { FaAngleDoubleLeft, FaAngleDoubleRight, FaWindowClose } from "react-icons/fa";
import { ImageContentProps } from "../../models/general";
import { formatDate } from "../../utils/formatters";
import "animate.css";
import "./contents.css"

const ImageContent: React.FC<ImageContentProps> = ({
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
  closeModal,
  setCloseModal
}) => {

  return (
    <div
      className="app-container"
      style={{ backgroundImage: `url(${apodObject?.url})` }}
    >
      {formatDate(today) === formatDate(date) && !closeModal && (
        <div className="modal animate__animated animate__fadeInDown animate__slow">
        <h1 className="presentation">
          Discover the cosmos! Each day a different image or photograph of our
          fascinating universe is featured, along with a brief explanation
          written by a professional astronomer.
        </h1>
        <FaWindowClose onClick={() => setCloseModal(true)} className="modal-close"/>
        </div>
      )}
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
        <div className="arrowContainer animate__animated animate__fadeInDown">
          {showDetails ? (
            <div className="">
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
          <p className="paragraph  animate__animated animate__fadeInLeft">
            {apodObject?.explanation}
          </p>
        )}
        {hideDetails && (
          <p className="paragraph  animate__animated animate__fadeOutLeft">
            {apodObject?.explanation}
          </p>
        )}
      </div>
    </div>
  );
};

export default ImageContent;

import React from "react";
import FocusInput from "./demo1";
import PreviousStateExample from "./demo2";
import RenderCounter from "./demo3";
import TimerExample from "./demo4";
import EventListenerExample from "./demo5";
import ScrollToBottom from "./demo6";
import SaveDraft from "./demo7";
import VideoControl from "./demo8";
import MeasureDiv from "./demo9";
import WebcamCapture from "./demo10";

function UseRefExamples() {
    return (
      <div>
        <h2>useRef Examples</h2>
        <p>useRef is a React Hook that allows you to create a mutable reference that persists across renders without causing re-renders.
            In simple terms, it lets you store a value that does not trigger a re-render when updated.
        </p>
        <FocusInput/>
        <PreviousStateExample/>
        <RenderCounter/>
        <TimerExample/>
        <EventListenerExample/>
        <ScrollToBottom/>
        <SaveDraft/>
        <VideoControl/>
        <MeasureDiv/>
        <WebcamCapture/>
      </div>
    );
  }
  
  export default UseRefExamples;
  
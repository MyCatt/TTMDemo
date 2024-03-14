import './styles/run.css';
import React, { useState, useEffect, forceUpdate } from 'react';
import { useNavigate  } from "react-router-dom";


function Run() {
    let navigate = useNavigate();
    let [isLoading, toggleLoading] = useState(true);
  return (
    <div id="run">
        <div id="video-wrap" style={{ display: isLoading ? 'none': 'flex' }}>
            <button onClick={() => navigate("/")}>
                <span class="material-symbols-outlined">
                    keyboard_backspace
                </span>
                Go back
            </button>
            <video 
                id="video" 
                autoPlay={true} 
                controls={false} 
                type={"video/mp4"}
                src={"https://thetestmart-recorded-tests.s3.ap-southeast-2.amazonaws.com/chrome-90-0-9bbac129-1b22-47bf-86f2-4705b639c869/video.mp4"}
                muted="muted"
                onLoadedData={(e) => { e.target.currentTime = 22; toggleLoading(false) }}
            />
        </div>
        <span class="loader" style={{ display: isLoading ? 'inline-block': 'none' }}></span>
    </div>
  );
}

export default Run;

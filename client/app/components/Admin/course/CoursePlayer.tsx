import axios from "axios";
import React, { FC, useEffect, useState } from "react";

type Props = {
    videoUrl:string;
    title: string
};

const CoursePlayer:FC<Props> = ({title, videoUrl}) => {
  // getVdoChiperOTP

  const [videoData, setVideoData] = useState({
    otp: "",
    playbackInfo: ""
  })
  console.log(videoUrl);

  useEffect(()=>{
    axios.post(`http://192.168.0.103:4000/api/v1/getVdoChiperOTP`,{
      videoId: videoUrl
    }).then((res)=>{

      console.log(res.data, "res.data");
      setVideoData(res.data)
    })
  }, [videoUrl])

  return (
    <div style={{paddingTop: "41%", position: "relative"}}>
      <iframe  src={`https://player.vdocipher.com/v2/?otp=${videoData?.otp}&playbackInfo=${videoData?.playbackInfo}&player=HK2AGQU0XVQWLRNG`} style={{
        border: 0,
        width: "90%",
        height: "100%",
        position: "absolute",
        top: 0,
        left: 0
      }}
      allowFullScreen={true}
      allow="encrypted-media"
      ></iframe>
    </div>
  );
};

export default CoursePlayer;

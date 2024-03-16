import React, { FC } from "react";

type Props = {
    videoUrl:string;
    title: string
};

const CoursePlayer:FC<Props> = ({title, videoUrl}) => {
  return <div>CoursePlayer</div>;
};

export default CoursePlayer;

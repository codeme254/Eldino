import React from "react";
import Explanation from "./Explanation";
import { Plane, Camp, Hike } from "../Assets/Icons/Icons";

const MiniExplanation = () => {
    return(
        <div className="m-explanations__container">
            <Explanation icon={<Plane />} subtitle="try our services" heading="we take them for trips around the world"/>
            <Explanation icon={<Camp />} subtitle="try our services" heading="best night time activities"/>
            <Explanation icon={<Hike />} subtitle="try our services" heading="we take them for adventures."/>
        </div>
    )
}

export default MiniExplanation;

import React from 'react';
import {View} from "react-native";
import Svg, {Ellipse} from "react-native-svg";

const HeaderDesign = () => {
    return (
        <View style={{ position: "relative"}}>
            <Svg style={{ position: "absolute", top: 0, left: 0,opacity:.5 }}  height="300" width="300">
                <Ellipse  cx="50" cy="20" rx="50" ry="50" fill="#8AE2E7" />
            </Svg>
            <Svg style={{ position: "absolute", top: 0, left: 0,opacity:.36 }}  height="300" width="300">
                <Ellipse cx="20" cy="50" rx="50" ry="50" fill="#8AE2E7" />
            </Svg>
        </View>
    );
};

export default HeaderDesign;
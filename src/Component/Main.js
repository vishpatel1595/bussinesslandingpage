import { Box } from "@chakra-ui/react";
import React from "react";
import Carousel from "./carsoual";
import CardContents from "./CardContents";
import ThreeTierPricingHorizontal from "./Pricing";
import StatsTitleDescription from "./statics";
import WithSpeechBubbles from "./testimonial";



function Main() {
    return (
        <Box>
            <Box as="section">
        
                <Carousel/>  
                
            </Box>
            <Box as="section" pt='40'>
                <CardContents/>
            </Box>
            <Box as="section" py='40'>
                <ThreeTierPricingHorizontal/>
            </Box>
            <Box as="section" pb="40">
            <StatsTitleDescription/>
            </Box>
            <Box as="section" >
            <WithSpeechBubbles/>
            </Box>
        </Box>
    );
}

export default Main;
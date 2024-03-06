import React from "react";
import Perspective from "../components/Perspective";

function Index() {
 
    return (
        <div className="h-screen bg-slate-700 flex flex-col items-center">
            <header>
                <div className="text-3xl font-bold underline "></div>
            </header>
            <Perspective />
        </div>
    );
}

export default Index;

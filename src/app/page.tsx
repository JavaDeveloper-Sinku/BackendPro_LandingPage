'use client';

import React, { useState } from "react";
import JavaService from "./java-service/page";

export default function Home() {
  const [activeSection, setActiveSection] = useState('menu');

  return (
    <div>
      <JavaService/>
    </div>
   
  );
}

unit06DeckJsonString = `[
  {
    "unit": "6",
    "topic": "6.3",
    "category": "Definitions",
    "learned": "false",
    "active": "false",
    "questionFontSize": "w3-xlarge",
    "question": [
      "The Definite Integral as a Riemann Sum",
      "$$ \\\\int_{a}^{b} f(x) dx $$",
      ""
    ],   
    "answerFontSize" : "w3-xlarge",
    "answer": [
        "$$ \\\\lim_{\\\\max \\\\Delta x_i \\\\to 0} \\\\sum_{i=1}^{n} f(x_i) \\\\Delta x_i$$",
        "",
        ""
    ]
  },
  {
    "unit": "6",
    "topic": "6.3",
    "category": "Definitions",
    "learned": "false",
    "active": "false",
    "questionFontSize": "w3-xlarge",
    "question": [
      "The Definite Integral as a left Riemann Sum",
      "$$ \\\\int_{a}^{b} f(x) dx $$",
      ""
    ],   
    "answerFontSize" : "w3-xlarge",
    "answer": [
        "$$ \\\\lim_{n \\\\to \\\\infty } \\\\sum_{i=1}^{n} f(a + \\\\Delta x \\\\cdot (i-1)) \\\\cdot \\\\Delta x $$",
        "where \\\\(\\\\Delta x = \\\\frac{b-a}{b}\\\\)",
        ""
    ]
  },
  {
    "unit": "6",
    "topic": "6.3",
    "category": "Definitions",
    "learned": "false",
    "active": "false",
    "questionFontSize": "w3-xlarge",
    "question": [
      "The Definite Integral as a right Riemann Sum",
      "$$ \\\\int_{a}^{n} f(x) dx $$",
      ""
    ],   
    "answerFontSize" : "w3-xlarge",
    "answer": [
        "$$ \\\\lim_{n \\\\to \\\\infty } \\\\sum_{i=1}^{n} f(a + \\\\Delta x \\\\cdot i) \\\\cdot \\\\Delta x $$",
        "where \\\\(\\\\Delta x = \\\\frac{b-a}{n}\\\\)",
        ""
    ]
  },
  {
    "unit": "6",
    "topic": "6.5",
    "category": "Definitions",
    "learned": "false",
    "active": "true",
    "questionFontSize": "w3-xlarge",
    "question": [
      "The Accumulation Function \\\\( g(x) \\\\)",
      "(the accumulation of \\\\(f\\\\) on \\\\([a, x]\\\\))",
      ""
    ],   
    "answerFontSize" : "w3-xlarge",
    "answer": [
        "$$ g(x) = \\\\int_{a}^{x} f(t) dt$$",
        ""
    ]
  },
  {
    "unit": "6",
    "topic": "6.6",
    "category": "Integration Rules",
    "learned": "false",
    "active": "true",
    "questionFontSize": "w3-xlarge",
    "question": [
      "$$ \\\\int_{a}^{b} k \\\\cdot f(x) dx$$",
      ""
    ],   
    "answerFontSize" : "w3-xlarge",
    "answer": [
      "$$ k \\\\cdot \\\\int_{a}^{b} f(x) dx$$",
        ""
    ]
  },
  {
    "unit": "6",
    "topic": "6.6",
    "category": "Integration Rules",
    "learned": "false",
    "active": "true",
    "questionFontSize": "w3-xlarge",
    "question": [
      "$$ \\\\int_{a}^{c} f(x) dx + \\\\int_{c}^{b} f(x) dx$$", 
      ""
    ],   
    "answerFontSize" : "w3-xlarge",
    "answer": [
      "$$\\\\int_{a}^{b} f(x) dx$$",
        ""
    ]
  },
  {
    "unit": "6",
    "topic": "6.6",
    "category": "Integration Rules",
    "learned": "false",
    "active": "true",
    "questionFontSize": "w3-xlarge",
    "question": [
      "$$ - \\\\int_{b}^{a} f(x) dx $$", 
      ""
    ],   
    "answerFontSize" : "w3-xlarge",
    "answer": [
      "$$\\\\int_{a}^{b} f(x) dx$$",
        ""
    ]
  },
  {
    "unit": "6",
    "topic": "6.7",
    "category": "Theorems",
    "learned": "false",
    "active": "true",
    "questionFontSize": "w3-xlarge",
    "question": [
      "The Fundamental Theorem of Calculus",  
      "$$ \\\\int_{a}^{b} f(x) dx $$", 
      ""
    ],   
    "answerFontSize" : "w3-xlarge",
    "answer": [
      "$$F(b) - F(a)$$",
        ""
    ]
  },
  {
    "unit": "6",
    "topic": "6.7",
    "category": "Theorems",
    "learned": "false",
    "active": "true",
    "questionFontSize": "w3-xlarge",
    "question": [
      "The Fundamental Theorem of Calculus",  
      "$$ \\\\frac{d}{dx} \\\\left( \\\\int_{a}^{x} f(t) dt \\\\right )$$", 
      ""
    ],   
    "answerFontSize" : "w3-xlarge",
    "answer": [
      "$$f(x)$$",
        ""
    ]
  },
  {
    "unit": "6",
    "topic": "6.8",
    "category": "Integration Rules",
    "learned": "false",
    "active": "true",
    "questionFontSize": "w3-xlarge",
    "question": [
      "The Fundamental Theorem of Calculus",  
      "$$ \\\\int x^n dx $$", 
      "for \\\\(n \\\\neq -1\\\\)",
      ""
    ],   
    "answerFontSize" : "w3-xlarge",
    "answer": [
      "$$\\\\frac{x^{n+1}}{n+1} + C$$",
        ""
    ]
  },
  {
    "unit": "6",
    "topic": "6.8",
    "category": "Integration Rules",
    "learned": "false",
    "active": "true",
    "questionFontSize": "w3-xlarge",
    "question": [
      "The Fundamental Theorem of Calculus",  
      "$$ \\\\int \\\\frac{1}{x}dx $$", 
      ""
    ],   
    "answerFontSize" : "w3-xlarge",
    "answer": [
      "$$\\\\ln |x| + C$$",
        ""
    ]
  },
    {
    "unit": "6",
    "topic": "6.8",
    "category": "Integration Rules",
    "learned": "false",
    "active": "true",
    "questionFontSize": "w3-xlarge",
    "question": [
      "$$ \\\\int \\\\cos{x}dx $$", 
      ""
    ],   
    "answerFontSize" : "w3-xlarge",
    "answer": [
      "$$\\\\sin{x} + C$$",
        ""
    ]
  },
   {
    "unit": "6",
    "topic": "6.8",
    "category": "Integration Rules",
    "learned": "false",
    "active": "true",
    "questionFontSize": "w3-xlarge",
    "question": [
      "$$ \\\\int \\\\sin{x}dx $$", 
      ""
    ],   
    "answerFontSize" : "w3-xlarge",
    "answer": [
      "$$-\\\\cos{x} + C$$",
        ""
    ]
  },
   {
    "unit": "6",
    "topic": "6.8",
    "category": "Integration Rules",
    "learned": "false",
    "active": "true",
    "questionFontSize": "w3-xlarge",
    "question": [
      "$$ \\\\int \\\\sec^2{x}dx $$", 
      ""
    ],   
    "answerFontSize" : "w3-xlarge",
    "answer": [
      "$$\\\\tan{x} + C$$",
        ""
    ]
  },
  {
    "unit": "6",
    "topic": "6.8",
    "category": "Integration Rules",
    "learned": "false",
    "active": "true",
    "questionFontSize": "w3-xlarge",
    "question": [
      "$$ \\\\int \\\\csc^2{x}dx $$", 
      ""
    ],   
    "answerFontSize" : "w3-xlarge",
    "answer": [
      "$$-\\\\cot{x} + C$$",
        ""
    ]
  },
  {
    "unit": "6",
    "topic": "6.8",
    "category": "Integration Rules",
    "learned": "false",
    "active": "true",
    "questionFontSize": "w3-xlarge",
    "question": [
      "$$ \\\\int \\\\sec{x} \\\\tan{x}dx $$", 
      ""
    ],   
    "answerFontSize" : "w3-xlarge",
    "answer": [
      "$$\\\\sec{x} + C$$",
        ""
    ]
  },
  {
    "unit": "6",
    "topic": "6.8",
    "category": "Integration Rules",
    "learned": "false",
    "active": "true",
    "questionFontSize": "w3-xlarge",
    "question": [
      "$$ \\\\int \\\\csc{x} \\\\cot{x}dx $$", 
      ""
    ],   
    "answerFontSize" : "w3-xlarge",
    "answer": [
      "$$-\\\\csc{x} + C$$",
        ""
    ]
  },
  {
    "unit": "6",
    "topic": "6.8",
    "category": "Integration Rules",
    "learned": "false",
    "active": "true",
    "questionFontSize": "w3-xlarge",
    "question": [
      "$$ \\\\int e^x dx $$", 
      ""
    ],   
    "answerFontSize" : "w3-xlarge",
    "answer": [
      "$$e^x + C$$",
        ""
    ]
  },
  {
    "unit": "6",
    "topic": "6.8",
    "category": "Integration Rules",
    "learned": "false",
    "active": "true",
    "questionFontSize": "w3-xlarge",
    "question": [
      "$$ \\\\int a^x dx $$", 
      ""
    ],   
    "answerFontSize" : "w3-xlarge",
    "answer": [
      "$$\\\\left ( \\\\frac{1}{\\\\ln {a} } \\\\right) a^x + C$$",
        ""
    ]
  },
  {
    "unit": "6",
    "topic": "6.9",
    "category": "Integration Rules",
    "learned": "false",
    "active": "true",
    "questionFontSize": "w3-xlarge",
    "question": [
      "$$ \\\\int \\\\frac{du}{\\\\sqrt{a^2 - u^2 }} $$", 
      ""
    ],   
    "answerFontSize" : "w3-xlarge",
    "answer": [
      "$$\\\\arcsin \\\\left ( \\\\frac{u}{a} \\\\right)  + C$$",
        ""
    ]
  },
  {
    "unit": "6",
    "topic": "6.9",
    "category": "Integration Rules",
    "learned": "false",
    "active": "true",
    "questionFontSize": "w3-xlarge",
    "question": [
      "$$ \\\\int \\\\frac{du}{u\\\\sqrt{u^2 - a^2 }} $$", 
      ""
    ],   
    "answerFontSize" : "w3-xlarge",
    "answer": [
      "$$\\\\frac{1}{a} \\\\mbox{arcsec} \\\\left ( \\\\frac{u}{a} \\\\right)  + C$$",
        ""
    ]
  },
    {
    "unit": "6",
    "topic": "6.9",
    "category": "Integration Rules",
    "learned": "false",
    "active": "true",
    "questionFontSize": "w3-xlarge",
    "question": [
      "$$ \\\\int \\\\frac{du}{u^2 + a^2 } $$", 
      ""
    ],   
    "answerFontSize" : "w3-xlarge",
    "answer": [
      "$$\\\\frac{1}{a} \\\\arctan \\\\left ( \\\\frac{u}{a} \\\\right)  + C$$",
        ""
    ]
  }

 ]`;

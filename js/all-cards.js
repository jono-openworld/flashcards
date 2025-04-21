// Note: all "\" characters in Latex must be double-escaped.
//       Once for Javascript "\" -> "\\"
//       And again for MathJax "\\" -> "\\\\"
//
// MathJax: /(.. . . /) delimits and inline equation
//          $$.. . . $$ delimits and diplayed equation

// Note: JSON does not allow multi-line strings
//       This is why "answer" is an array of lines.
//
//
//

allCardsJsonString = `[
  {
    "subject": "AP Calculus AB",
    "unit": "1",
    "topic": "1.8",
    "category": "Theorems",
    "learned": "false",
    "active": "true",
    "questionFontSize": "w3-xlarge",
    "question": [
      "Squeeze Theorem",
      "Condition(s):",
      "Conclusion:"
    ],   
    "answerFontSize" : "w3-large",
    "answer": [
        "Conditions:",
        "(1) \\\\(g(x) \\\\leq f(x) \\\\leq h(x)\\\\) for all \\\\(x\\\\) in an open interval containing \\\\(c\\\\), except possibly at \\\\(c\\\\) itself." ,
        "(2) \\\\(\\\\lim_{x\\\\to c}g(x) = \\\\lim_{x\\\\to c}h(x) = L\\\\)",
        "",
        "Conclusion:",
        "\\\\(\\\\lim_{x\\\\to c} f(x) = L\\\\)"
    ]
  },
    {
    "subject": "AP Calculus AB",
    "unit": "1",
    "topic": "1.11",
    "category": "Definitions",
    "learned": "false",
    "active": "true",
    "questionFontSize": "w3-xlarge",
    "question": [
      "Definition of Continuity at a Point",
      "(List conditions that must be met for \\\\(f(x)\\\\) to be continuous at \\\\(x=c\\\\).)"
    ],   
    "answerFontSize" : "w3-xlarge",
    "answer": [
        "Conditions:",
        "(1) \\\\(f(c)\\\\) must be defined" ,
        "(2) \\\\(\\\\lim_{x\\\\to c}f(x)\\\\) must exist",
        "(3) \\\\(\\\\lim_{x\\\\to c}f(x) = f(c)\\\\)",
        ""
    ]
  },
  
  {
    "subject": "AP Calculus AB",
    "unit": "1",
    "topic": "1.14",
    "category": "Definitions",
    "learned": "false",
    "active": "true",
    "questionFontSize" : "w3-xlarge",
    "question": [
      "Definition a Vertical Asymptote",
      "(List all circumstances in which \\\\(f(x)\\\\) has a vertical asymptote at \\\\(x = c\\\\))"
    ],   
    "answerFontSize" : "w3-xlarge",
    "answer": [
        "$$\\\\lim_{x\\\\to c^{-}}f(x)\\\\to \\\\infty \\\\mbox{ or } -\\\\infty$$",
        "or",
        "$$\\\\lim_{x\\\\to c^{+}}f(x)\\\\to \\\\infty \\\\mbox{ or } -\\\\infty$$",
        ""
    ]
  },
    
  {
    "subject": "AP Calculus AB",
    "unit": "1",
    "topic": "1.15",
    "category": "Definitions",
    "learned": "false",
    "active": "true",
    "questionFontSize" : "w3-xlarge",
    "question": [
      "Definition a Horizontal Asymptote",
      "(List all circumstances in which \\\\(f(x)\\\\) has a horizontal asymptote of \\\\(y = b\\\\))"
    ],   
    "answerFontSize" : "w3-xlarge",
    "answer": [
        "$$\\\\lim_{x\\\\to \\\\infty}f(x) = b$$",
        "or",
        "$$\\\\lim_{x\\\\to -\\\\infty}f(x) = b$$",
        ""
    ]
  },
  {
    "subject": "AP Calculus AB",
    "unit": "1",
    "topic": "1.16",
    "category": "Theorems",
    "learned": "false",
    "active": "true",
    "questionFontSize": "w3-xlarge",
    "question": [
      "Intermediate Value Theorem",
      "Condition(s):",
      "Conclusion:"
    ],   
    "answerFontSize" : "w3-large",
    "answer": [
        "Conditions:",
        "(1) \\\\(f\\\\) is continuous on \\\\([a, b]\\\\)",
        "(2) \\\\(k\\\\) is any number between \\\\(f(a)\\\\) and \\\\(f(b)\\\\)",
        "",
        "Conclusion:",
        "There is at least one \\\\(c\\\\) in \\\\([a, b]\\\\) such that \\\\(f(c)=k\\\\)",
        ""
    ]
  },
  {
    "subject": "AP Calculus AB",
    "unit": "2",
    "topic": "2.2",
    "category": "Definitions",
    "learned": "false",
    "active": "true",
    "questionFontSize": "w3-xlarge",
    "question": [
      "Definition of the General Derivative of \\\\(f\\\\)",
      ""
    ],   
    "answerFontSize" : "w3-large",
    "answer": [
        "$$ f'(x) = \\\\lim_{h\\\\to 0} \\\\frac{f(x+h)-f(x)}{h}$$",
        ""
    ]
  },
    {
    "subject": "AP Calculus AB",
    "unit": "2",
    "topic": "2.4",
    "category": "Definitions",
    "learned": "false",
    "active": "true",
    "questionFontSize": "w3-xlarge",
    "question": [
      "Definition of the Derivative of \\\\(f\\\\) at \\\\(x = a\\\\)",
      ""
    ],   
    "answerFontSize" : "w3-xlarge",
    "answer": [
        "$$f'(a) = \\\\lim_{x\\\\to a} \\\\frac{f(x)-f(a)}{x-a}$$",
        ""
    ]
  },
    {
    "subject": "AP Calculus AB",
    "unit": "2",
    "topic": "2.4",
    "category": "Definitions",
    "learned": "false",
    "active": "true",
    "questionFontSize": "w3-xlarge",
    "question": [
      "Differentiability of \\\\(f\\\\) at \\\\(x = a\\\\)",
      ""
    ],   
    "answerFontSize" : "w3-large",
    "answer": [
        "\\\\(f'(a)\\\\) exists, if and only if,",
        "(1) \\\\(f \\\\) is continuous at \\\\(x=a\\\\)",
        "(2) $$\\\\lim_{x\\\\to a^{-}} \\\\frac{f(x)-f(a)}{x-a} = \\\\lim_{x\\\\to a^{+}} \\\\frac{f(x)-f(a)}{x-a}$$",
        ""
    ]
  },
      {
    "subject": "AP Calculus AB",
    "unit": "2",
    "topic": "2.4",
    "category": "Definitions",
    "learned": "false",
    "active": "true",
    "questionFontSize": "w3-xlarge",
    "question": [
      "The Equation of the Line Tangent to \\\\(f\\\\) at \\\\(x = c\\\\)",
      ""
    ],   
    "answerFontSize" : "w3-xlarge",
    "answer": [
        "$$y=f'(c)(x-c)+f(c)$$",
        ""
    ]
  },
  {
    "subject": "AP Calculus AB",
    "unit": "2",
    "topic": "2.5",    
    "category": "Derivatives",
    "learned": "false",
    "active": "true",
    "questionFontSize": "w3-xlarge",
    "question": [
      "$$\\\\frac{d}{dx} (x^n)$$",
      ""
    ],   
    "answerFontSize" : "w3-xlarge",
    "answer": [
        "$$n x^{n-1}$$",
        ""
    ]
  },
  {
    "subject": "AP Calculus AB",
    "unit": "2",
    "topic": "2.7",
    "learned": "false",
    "active": "true",
    "category": "Derivatives",
    "questionFontSize": "w3-xlarge",
    "question": [
      "$$\\\\frac{d}{dx} (\\\\sin x)$$",
      ""
    ],   
    "answerFontSize" : "w3-xlarge",
    "answer": [
        "$$\\\\cos x$$",
        ""
    ]
  },
  {
    "subject": "AP Calculus AB",
    "unit": "2",
    "topic": "2.7",
    "category": "Derivatives",
    "learned": "false",
    "active": "true",
    "questionFontSize": "w3-xlarge",
    "question": [
      "$$\\\\frac{d}{dx} (\\\\cos x)$$",
      ""
    ],   
    "answerFontSize" : "w3-xlarge",
    "answer": [
        "$$-\\\\sin x$$",
        ""
    ]
  },
   {
    "subject": "AP Calculus AB",
    "unit": "2",
    "topic": "2.7",
    "category": "Derivatives",
    "learned": "false",
    "active": "true",
    "questionFontSize": "w3-xlarge",
    "question": [
      "$$\\\\frac{d}{dx} (e^x)$$",
      ""
    ],   
    "answerFontSize" : "w3-xlarge",
    "answer": [
        "$$e^x$$",
        ""
    ]
  },
  {
    "subject": "AP Calculus AB",
    "unit": "2",
    "topic": "2.7",
    "category": "Derivatives",
    "learned": "false",
    "active": "true",
    "questionFontSize": "w3-xlarge",
    "question": [
      "$$\\\\frac{d}{dx} (\\\\ln x)$$",
      ""
    ],   
    "answerFontSize" : "w3-xlarge",
    "answer": [
        "$$\\\\frac{1}{x}$$",
        ""
    ]
  },
    {
    "subject": "AP Calculus AB",
    "unit": "2",
    "topic": "2.8",
    "category": "Derivatives",
    "learned": "false",
    "active": "true",
    "questionFontSize": "w3-xlarge",
    "question": [
      "The Product Rule",
      "$$\\\\frac{d}{dx} (f(x)g(x))$$",
      ""
    ],   
    "answerFontSize" : "w3-xlarge",
    "answer": [
        "$$f'(x)g(x) + g'(x)f(x)$$",
        ""
    ]
  },
    {
    "subject": "AP Calculus AB",
    "unit": "2",
    "topic": "2.9",
    "category": "Derivatives",
    "learned": "false",
    "active": "true",
    "questionFontSize": "w3-xlarge",
    "question": [
      "The Quotient Rule",
      "$$\\\\frac{d}{dx} \\\\left(\\\\frac{f(x)}{g(x)}\\\\right)$$",
      ""
    ],   
    "answerFontSize" : "w3-xlarge",
    "answer": [
        "$$\\\\frac{f'(x)g(x) - g'(x)f(x)}{[g(x)]^2}$$",
        ""
    ]
  },
  {
    "subject": "AP Calculus AB",
    "unit": "2",
    "topic": "2.10",
    "category": "Derivatives",
    "learned": "false",
    "active": "true",
    "questionFontSize": "w3-xlarge",
    "question": [
      "$$\\\\frac{d}{dx} (\\\\tan x)$$",
      ""
    ],   
    "answerFontSize" : "w3-xlarge",
    "answer": [
        "$$\\\\sec^2 x$$",
        ""
    ]
  },
    {
    "subject": "AP Calculus AB",
    "unit": "2",
    "topic": "2.10",
    "category": "Derivatives",
    "learned": "false",
    "active": "true",
    "questionFontSize": "w3-xlarge",
    "question": [
      "$$\\\\frac{d}{dx} (\\\\cot x)$$",
      ""
    ],   
    "answerFontSize" : "w3-xlarge",
    "answer": [
        "$$-\\\\csc^2 x$$",
        ""
    ]
  },
      {
    "subject": "AP Calculus AB",
    "unit": "2",
    "topic": "2.10",
    "category": "Derivatives",
    "learned": "false",
    "active": "true",
    "questionFontSize": "w3-xlarge",
    "question": [
      "$$\\\\frac{d}{dx} (\\\\sec x)$$",
      ""
    ],   
    "answerFontSize" : "w3-xlarge",
    "answer": [
        "$$\\\\sec x \\\\tan x$$",
        ""
    ]
  },
    {
    "subject": "AP Calculus AB",
    "unit": "2",
    "topic": "2.10",
    "category": "Derivatives",
    "learned": "false",
    "active": "true",
    "questionFontSize": "w3-xlarge",
    "question": [
      "$$\\\\frac{d}{dx} (\\\\csc x)$$",
      ""
    ],   
    "answerFontSize" : "w3-xlarge",
    "answer": [
        "$$-\\\\csc x \\\\cot x$$",
        ""
    ]
  },
  {
    "subject": "AP Calculus AB",
    "unit": "3",
    "topic": "3.1",
    "category": "Derivatives",
    "learned": "false",
    "active": "true",
    "questionFontSize": "w3-xlarge",
    "question": [
      "The Chain Rule",
      "$$\\\\frac{d}{dx} (f(g(x)))$$",
      ""
    ],   
    "answerFontSize" : "w3-xlarge",
    "answer": [
        "$$f'(g(x))g'(x)$$",
        ""
    ]
  },
      {
    "subject": "AP Calculus AB",
    "unit": "3",
    "topic": "3.1",
    "category": "Derivatives",
    "learned": "false",
    "active": "true",
    "questionFontSize": "w3-xlarge",
    "question": [
      "The Chain Rule",
      "\\\\(y(u)\\\\) and \\\\(u(x)\\\\) are functions",
      "$$\\\\frac{dy}{dx} = $$"
    ],   
    "answerFontSize" : "w3-xlarge",
    "answer": [
        "$$\\\\frac{dy}{dx} = \\\\frac{dy}{du} \\\\cdot \\\\frac{du}{dx}$$",
        ""
    ]
  },
      {
    "subject": "AP Calculus AB",
    "unit": "3",
    "topic": "3.3",
    "category": "Derivatives",
    "learned": "false",
    "active": "true",
    "questionFontSize": "w3-xlarge",
    "question": [
      "The Derivative of an Inverse Function",
      "$$(f^{-1})'(x)$$",
      ""
    ],   
    "answerFontSize" : "w3-xlarge",
    "answer": [
        "$$\\\\frac{1}{f'(f^{-1}(x))}$$",
        ""
    ]
  },
    {
    "subject": "AP Calculus AB",
    "unit": "3",
    "topic": "3.4",
    "category": "Derivatives",
    "learned": "false",
    "active": "true",
    "questionFontSize": "w3-xlarge",
    "question": [
      "$$\\\\frac{d}{dx}(\\\\arcsin x)$$",
      ""
    ],   
    "answerFontSize" : "w3-xlarge",
    "answer": [
        "$$\\\\frac{1}{\\\\sqrt{1-x^2}}$$",
        ""
    ]
  },
      {
    "subject": "AP Calculus AB",
    "unit": "3",
    "topic": "3.4",
    "category": "Derivatives",
    "learned": "false",
    "active": "true",
    "questionFontSize": "w3-xlarge",
    "question": [
      "$$\\\\frac{d}{dx}(\\\\arccos x)$$",
      ""
    ],   
    "answerFontSize" : "w3-xlarge",
    "answer": [
        "$$-\\\\frac{1}{\\\\sqrt{1-x^2}}$$",
        ""
    ]
  },
  {
    "subject": "AP Calculus AB",
    "unit": "3",
    "topic": "3.4",
    "category": "Derivatives",
    "learned": "false",
    "active": "true",
    "questionFontSize": "w3-xlarge",
    "question": [
      "$$\\\\frac{d}{dx}(\\\\sec^{-1} x)$$",
      ""
    ],   
    "answerFontSize" : "w3-xlarge",
    "answer": [
        "$$\\\\frac{1}{|x|\\\\sqrt{x^2-1}}$$",
        ""
    ]
  },
    {
    "subject": "AP Calculus AB",
    "unit": "3",
    "topic": "3.4",
    "category": "Derivatives",
    "learned": "false",
    "active": "true",
    "questionFontSize": "w3-xlarge",
    "question": [
      "$$\\\\frac{d}{dx}(\\\\csc^{-1} x)$$",
      ""
    ],   
    "answerFontSize" : "w3-xlarge",
    "answer": [
        "$$-\\\\frac{1}{|x|\\\\sqrt{x^2-1}}$$",
        ""
    ]
  },
      {
    "subject": "AP Calculus AB",
    "unit": "3",
    "topic": "3.4",
    "category": "Derivatives",
    "learned": "false",
    "active": "true",
    "questionFontSize": "w3-xlarge",
    "question": [
      "$$\\\\frac{d}{dx}(\\\\arctan x)$$",
      ""
    ],   
    "answerFontSize" : "w3-xlarge",
    "answer": [
        "$$\\\\frac{1}{x^2+1}$$",
        ""
    ]
  },
      {
    "subject": "AP Calculus AB",
    "unit": "3",
    "topic": "3.4",
    "category": "Derivatives",
    "learned": "false",
    "active": "true",
    "questionFontSize": "w3-xlarge",
    "question": [
      "$$\\\\frac{d}{dx}(\\\\cot^{-1} x)$$",
      ""
    ],   
    "answerFontSize" : "w3-xlarge",
    "answer": [
        "$$-\\\\frac{1}{x^2+1}$$",
        ""
    ]
  },
  {
    "subject": "AP Calculus AB",
    "unit": "4",
    "topic": "4.1",
    "category": "Motion",
    "learned": "false",
    "active": "true",
    "questionFontSize": "w3-xlarge",
    "question": [
      "Velocity",
      "(Given the position function \\\\(s(t)\\\\))",
      ""
    ],   
    "answerFontSize" : "w3-xlarge",
    "answer": [
        "$$v(t)=s'(t)$$",
        ""
    ]
  },
        {
    "subject": "AP Calculus AB",
    "unit": "4",
    "topic": "4.1",
    "category": "Motion",
    "learned": "false",
    "active": "true",
    "questionFontSize": "w3-xlarge",
    "question": [
      "Acceleration",
      "(Given the velocity function \\\\(v(t)\\\\) and/or the position function \\\\(s(t)\\\\))",
      ""
    ],   
    "answerFontSize" : "w3-xlarge",
    "answer": [
        "$$a(t)=v'(t)=s''(t)$$",
        ""
    ]
  },
          {
    "subject": "AP Calculus AB",
    "unit": "4",
    "topic": "4.1",
    "category": "Motion",
    "learned": "false",
    "active": "true",
    "questionFontSize": "w3-xlarge",
    "question": [
      "Speed",
      ""
    ],   
    "answerFontSize" : "w3-xlarge",
    "answer": [
        "$$|v(t)|$$",
        ""
    ]
  },
            {
    "subject": "AP Calculus AB",
    "unit": "4",
    "topic": "4.1",
    "category": "Motion",
    "learned": "false",
    "active": "true",
    "questionFontSize": "w3-xlarge",
    "question": [
      "Speeding up",
      ""
    ],   
    "answerFontSize" : "w3-xlarge",
    "answer": [
        "\\\\(v(t)\\\\) and \\\\(a(t)\\\\) have the same sign",
        ""
    ]
  },
  {
    "subject": "AP Calculus AB",
    "unit": "4",
    "topic": "4.1",
    "category": "Motion",
    "learned": "false",
    "active": "true",
    "questionFontSize": "w3-xlarge",
    "question": [
      "Slowing down",
      ""
    ],   
    "answerFontSize" : "w3-xlarge",
    "answer": [
        "\\\\(v(t)\\\\) and \\\\(a(t)\\\\) have opposite signs",
        ""
    ]
  },
  {
    "subject": "AP Calculus AB",
    "unit": "4",
    "topic": "4.6",
    "category": "Definitions",
    "learned": "false",
    "active": "true",
    "questionFontSize": "w3-xlarge",
    "question": [
      "Linear Approximator",
      "(\\\\(L(x)\\\\) is the linear approximator of \\\\(f\\\\) at \\\\(x=a\\\\))",
      ""
    ],   
    "answerFontSize" : "w3-large",
    "answer": [
        "\\\\(f(x) \\\\approx L(x) = f'(a)(x-a)+f(a)\\\\)",
        ""
    ]
  },
  
  {
    "subject": "AP Calculus AB",
    "unit": "4",
    "topic": "4.7",
    "category": "Theorems",
    "learned": "false",
    "active": "true",
    "questionFontSize": "w3-xlarge",
    "question": [
      "L'Hospital's Rule",
      "$$\\\\lim_{x\\\\to c}\\\\frac{f(x)}{g(x)}$$",
      "Condition(s):",
      "Conclusion:"
    ],   
    "answerFontSize" : "w3-large",
    "answer": [
        "Conditions:",
        "(1) \\\\(\\\\lim_{x\\\\to c} f(x) = 0 \\\\) and \\\\(\\\\lim_{x\\\\to c} g(x) = 0 \\\\)",
        "or",
        "(2) \\\\(\\\\lim_{x\\\\to c} f(x) = \\\\pm \\\\infty\\\\) and \\\\(\\\\lim_{x\\\\to c} g(x) = \\\\pm \\\\infty\\\\)",
        "",
        "",
        "Conclusion: \\\\(\\\\lim_{x\\\\to c}\\\\frac{f(x)}{g(x)} = \\\\lim_{x\\\\to c}\\\\frac{f'(x)}{g'(x)}\\\\)",
        ""
    ]
  },
  {
    "subject": "AP Calculus AB",
    "unit": "5",
    "topic": "5.1",
    "category": "Theorems",
    "learned": "false",
    "active": "true",
    "questionFontSize": "w3-xlarge",
    "question": [
      "Mean Value Theorem",
      "(for derivatives)",
      "Condition(s):",
      "Conclusion:"
    ],   
    "answerFontSize" : "w3-large",
    "answer": [
        "Conditions:",
        "(1) \\\\( f \\\\) is continuous on \\\\([a, b]\\\\)",
        "(2) \\\\( f \\\\) is differentiable on \\\\((a, b)\\\\)",
        "",
        "Conclusion:",
        "There is a \\\\(c\\\\) in \\\\((a,b)\\\\) such that",
        "$$f'(c) = \\\\frac{f(b)-f(a)}{b-a}$$",
        ""
    ]
  },
    {
    "subject": "AP Calculus AB",
    "unit": "5",
    "topic": "5.2",
    "category": "Theorems",
    "learned": "false",
    "active": "true",
    "questionFontSize": "w3-xlarge",
    "question": [
      "Extreme Value Theorem",
      "(for derivatives)",
      "Condition(s):",
      "Conclusion:"
    ],   
    "answerFontSize" : "w3-large",
    "answer": [
        "Condition:",
        "\\\\( f \\\\) is continuous on \\\\([a, b]\\\\)",
        "<br>",
        "Conclusion:",
        "\\\\( f \\\\) has both a maximum and a minimum on \\\\([a,b]\\\\)",
        ""
    ]
  },
      {
    "subject": "AP Calculus AB",
    "unit": "5",
    "topic": "5.2",
    "category": "Definitions",
    "learned": "false",
    "active": "true",
    "questionFontSize": "w3-xlarge",
    "question": [
      "Critical Numbers",
      "(\\\\(f\\\\) has a critical number at \\\\(x\\\\) values for which  . . .)",
      ""
    ],   
    "answerFontSize" : "w3-xlarge",
    "answer": [
        "\\\\(f'(x) = 0\\\\)",
        "or",
        "\\\\(f'(x) \\\\) is undefined.",
        ""
    ]
  },
  {
    "subject": "AP Calculus AB",
    "unit": "5",
    "topic": "5.2",
    "category": "Definitions",
    "learned": "false",
    "active": "true",
    "questionFontSize": "w3-xlarge",
    "question": [
      "Increasing (Decreasing) Functions",
      "Let \\\\(f\\\\) be continuous on \\\\([a,b]\\\\) and differentiable on \\\\((a,b)\\\\).",
      ""
    ],   
    "answerFontSize" : "w3-large",
    "answer": [
        "\\\\( f'(x) > 0 \\\\) on \\\\((a, b) \\\\implies f(x) \\\\) is increasing \\\\([a, b]\\\\)",
        "<br>",
        "\\\\( f'(x) < 0 \\\\) on \\\\((a, b) \\\\implies f(x) \\\\) is decreasing \\\\([a, b]\\\\)",
        ""
    ]
  },
  {
    "subject": "AP Calculus AB",
    "unit": "5",
    "topic": "5.4",
    "category": "Definitions",
    "learned": "false",
    "active": "true",
    "questionFontSize": "w3-xlarge",
    "question": [
      "Relative Maxima (Minima)",
      "(First Derivative Test)",
      ""
    ],   
    "answerFontSize" : "w3-large",
    "answer": [
        "\\\\(f\\\\) has relative maxima (minima) at all critical numbers \\\\(x=c\\\\) where \\\\(f'(x)\\\\) changes from positive to negative (negative to positive).",
        "\\\\(f\\\\) has neither a relative minimum nor a relative maximum at all critical numbers \\\\(x=c\\\\) where \\\\(f'(x)\\\\) does not change sign.",
        ""
    ]
  },
  {    
    "unit": "5",
    "topic": "5.5",
    "category": "Definitions",
    "learned": "false",
    "active": "true",
    "questionFontSize": "w3-xlarge",
    "question": [
      "Candidates Test for Finding Absolute Extream of \\\\(f\\\\) on \\\\([a,b]\\\\)",
      "(What are the steps?)",
      ""
    ],   
    "answerFontSize" : "w3-large",
    "answer": [
        "(1) Find the critical numbers of \\\\(f\\\\) on \\\\([a,b]\\\\)",
        "(2) Evalute \\\\(f\\\\) at all critical numbers and the endpoints \\\\(a\\\\) and \\\\(b\\\\)",
        "(3) Identify the extreme value(s) of \\\\(f\\\\)"
    ]
  },
  {
    "subject": "AP Calculus AB",
    "unit": "5",
    "topic": "5.6",
    "category": "Definitions",
    "learned": "false",
    "active": "true",
    "questionFontSize": "w3-xlarge",
    "question": [
      "\\\\(f\\\\) is concave up (down) where",
      ""
    ],   
    "answerFontSize" : "w3-xlarge",
    "answer": [
        "Concave up where \\\\(f''(x) > 0 \\\\)",
        "<br>",
        "(Concave down where \\\\(f''(x) < 0 \\\\))",
        ""
    ]
  },
  {
    "subject": "AP Calculus AB",
    "unit": "5",
    "topic": "5.6",
    "category": "Definitions",
    "learned": "false",
    "active": "true",
    "questionFontSize": "w3-xlarge",
    "question": [
      "\\\\(f\\\\) is has a point of inflection where",
      ""
    ],   
    "answerFontSize" : "w3-xlarge",
    "answer": [
        "\\\\(f''(x) \\\\) changes sign",
        ""
    ]
  },
  {
    "subject": "AP Calculus AB",
    "unit": "5",
    "topic": "5.7",
    "category": "Definitions",
    "learned": "false",
    "active": "true",
    "questionFontSize": "w3-xlarge",
    "question": [
      "Relative Maxima (Minima)",
      "(Second Derivative Test)",
      ""
    ],   
    "answerFontSize" : "w3-large",
    "answer": [
        "\\\\(f'(c) = 0 \\\\) and \\\\(f''(c) < 0\\\\) \\\\(or (f''(c) > 0)\\\\) \\\\(\\\\implies f \\\\) has a relative maximum (or minimum) at \\\\(x=c\\\\)",
        "<br>",
        "\\\\(f'(c) = 0 \\\\implies \\\\) the Second Derivative Test is inconclusive",
        ""
    ]
  },
  {
    "subject": "AP Calculus AB",
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
    "subject": "AP Calculus AB",
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
    "subject": "AP Calculus AB",
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
    "subject": "AP Calculus AB",
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
    "subject": "AP Calculus AB",
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
    "subject": "AP Calculus AB",
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
    "subject": "AP Calculus AB",
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
    "subject": "AP Calculus AB",
    "unit": "6",
    "topic": "6.7",
    "category": "Theorems",
    "learned": "false",
    "active": "true",
    "questionFontSize": "w3-xlarge",
    "question": [
      "The Fundamental Theorem of Calculus (Part 1)",  
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
    "subject": "AP Calculus AB",
    "unit": "6",
    "topic": "6.7",
    "category": "Theorems",
    "learned": "false",
    "active": "true",
    "questionFontSize": "w3-xlarge",
    "question": [
      "The Fundamental Theorem of Calculus (Part 2)",  
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
    "subject": "AP Calculus AB",
    "unit": "6",
    "topic": "6.7",
    "category": "Theorems",
    "learned": "false",
    "active": "true",
    "questionFontSize": "w3-xlarge",
    "question": [
      "The Fundamental Theorem of Calculus (Part 2 w/ Chain Rule)",  
      "$$ \\\\frac{d}{dx} \\\\left( \\\\int_{a}^{u} f(t) dt \\\\right )$$", 
      ""
    ],   
    "answerFontSize" : "w3-xlarge",
    "answer": [
      "$$f(u) \\\\cdot u'$$",
        ""
    ]
  },
  {
    "subject": "AP Calculus AB",
    "unit": "6",
    "topic": "6.8",
    "category": "Integration Rules",
    "learned": "false",
    "active": "true",
    "questionFontSize": "w3-xlarge",
    "question": [
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
    "subject": "AP Calculus AB",
    "unit": "6",
    "topic": "6.8",
    "category": "Integration Rules",
    "learned": "false",
    "active": "true",
    "questionFontSize": "w3-xlarge",
    "question": [
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
    "subject": "AP Calculus AB",
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
    "subject": "AP Calculus AB",
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
    "subject": "AP Calculus AB",
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
    "subject": "AP Calculus AB",
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
    "subject": "AP Calculus AB",
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
    "subject": "AP Calculus AB",
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
    "subject": "AP Calculus AB",
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
    "subject": "AP Calculus AB",
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
    "subject": "AP Calculus AB",
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
    "subject": "AP Calculus AB",
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
    "subject": "AP Calculus AB",
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
  },
  {
    "subject": "AP Calculus AB",
    "unit": "7",
    "topic": "7.1",
    "category": "Definitions",
    "learned": "false",
    "active": "true",
    "questionFontSize": "w3-xlarge",
    "question": [
      "Direct Variation",
      "",
      "\\\\( \\\\frac{dy}{dx} \\\\) is directly proporational to \\\\(y\\\\)", 
      ""
    ],   
    "answerFontSize" : "w3-xlarge",
    "answer": [
      "\\\\( \\\\frac{dy}{dx}  = ky\\\\)", 
      ""
    ]
  },  
  {
    "subject": "AP Calculus AB",
    "unit": "7",
    "topic": "7.1",
    "category": "Definitions",
    "learned": "false",
    "active": "true",
    "questionFontSize": "w3-xlarge",
    "question": [
      "Direct Variation",
      "",
      "\\\\( \\\\frac{dy}{dx} \\\\) is inversely proporational to \\\\(y\\\\)", 
      ""
    ],   
    "answerFontSize" : "w3-xlarge",
    "answer": [
      "\\\\( \\\\frac{dy}{dx}  = \\\\frac{k}{y}\\\\)", 
      ""
    ]
  },  
  {
    "subject": "AP Calculus AB",
    "unit": "7",
    "topic": "7.8",
    "category": "Definitions",
    "learned": "false",
    "active": "false",
    "questionFontSize": "w3-xlarge",
    "question": [
      "Exponential Growth and Decay Model",
      "",
      "(In a differential equation in which the rate of growth is proportional to the amount, what is the general solution?)",
      "$$ \\\\frac{dy}{dt} = k y $$", 
      ""
    ],   
    "answerFontSize" : "w3-xlarge",
    "answer": [
      "$$y = C e^{kt}$$",
      ""
    ]
  },
  {
    "subject": "AP Calculus AB",
    "unit": "8",
    "topic": "8.1",
    "category": "Applications of Integration",
    "learned": "false",
    "active": "true",
    "questionFontSize": "w3-xlarge",
    "question": [
      "Average Value",
      "of \\\\( f \\\\) on \\\\( [a, b] \\\\)",
      ""
    ],   
    "answerFontSize" : "w3-xlarge",
    "answer": [
      "$$\\\\frac{1}{b-a} \\\\int_a^b f(x)dx$$",
      ""
    ]
  },
  {
    "subject": "AP Calculus AB",
    "unit": "8",
    "topic": "8.2",
    "category": "Motion",
    "learned": "false",
    "active": "true",
    "questionFontSize": "w3-xlarge",
    "question": [
      "Total Distance Traveled",
      "given \\\\(v(t)\\\\) on \\\\( [t_1, t_2] \\\\)",
      ""
    ],   
    "answerFontSize" : "w3-xlarge",
    "answer": [
      "$$\\\\int_{t_1}^{t_2} |v(t)| dt$$",
      ""
    ]
  },
    {
    "subject": "AP Calculus AB",
    "unit": "8",
    "topic": "8.2",
    "category": "Motion",
    "learned": "false",
    "active": "true",
    "questionFontSize": "w3-xlarge",
    "question": [
      "Position at \\\\( t_2 \\\\) given", 
      "position \\\\(s(t_1)\\\\) and \\\\(v(t)\\\\)",
      ""
    ],   
    "answerFontSize" : "w3-xlarge",
    "answer": [
      "$$ s(t_2) = s(t_1) + \\\\int_{t_1}^{t_2} v(t) dt$$",
      "Think: (final position) = (initial position) + displacement "
    ]
  },
    {
    "subject": "AP Calculus AB",
    "unit": "8",
    "topic": "8.4",
    "category": "Applications of Integration",
    "learned": "false",
    "active": "true",
    "questionFontSize": "w3-xlarge",
    "question": [
      "The Area of a Region Between Two Curves",
      "(\\\\( f\\\\) and \\\\(g\\\\) on \\\\([a,b]\\\\) where \\\\(g(x) \\\\leq f(x)\\\\))",
      ""
    ],   
    "answerFontSize" : "w3-xlarge",
    "answer": [
      "$$A = \\\\int_{a}^{b} \\\\left( f(x) - g(x) \\\\right)  dx$$",
      "Think: upper \\\\(-\\\\) lower",
      ""
    ]
  },
  {
    "subject": "AP Calculus AB",
    "unit": "8",
    "topic": "8.4",
    "category": "Applications of Integration",
    "learned": "false",
    "active": "true",
    "questionFontSize": "w3-xlarge",
    "question": [
      "The Area of a Region Between Two Curves",
      "(\\\\( f\\\\) and \\\\(g\\\\) on \\\\([c,d]\\\\) where \\\\(g(y) \\\\leq f(y)\\\\))",
      ""
    ],   
    "answerFontSize" : "w3-xlarge",
    "answer": [
      "$$A = \\\\int_{c}^{d} \\\\left( f(y) - g(y) \\\\right)  dy$$",
      "Think: left \\\\(-\\\\) right",
      ""
    ]
  },
  {
    "subject": "AP Calculus AB",
    "unit": "8",
    "topic": "8.5",
    "category": "Applications of Integration",
    "learned": "false",
    "active": "true",
    "questionFontSize": "w3-xlarge",
    "question": [
      "Volume of a Solid with Cross Sections", 
      "(with cross section area \\\\(A(x)\\\\) taken perpendicular to the \\\\(x\\\\)-axis)",
      ""
    ],   
    "answerFontSize" : "w3-xlarge",
    "answer": [
      "$$V = \\\\int_{a}^{b} A(x) dx$$",
      ""
    ]
  },
  {
    "subject": "AP Calculus AB",
    "unit": "8",
    "topic": "8.5",
    "category": "Applications of Integration",
    "learned": "false",
    "active": "true",
    "questionFontSize": "w3-xlarge",
    "question": [
      "Volume of a Solid with Cross Sections", 
      "(with cross section area \\\\(A(y)\\\\) taken perpendicular to the \\\\(y\\\\)-axis)",
      ""
    ],   
    "answerFontSize" : "w3-xlarge",
    "answer": [
      "$$ V= \\\\int_{c}^{d} A(y) dy$$",
      ""
    ]
  },
  {
    "subject": "AP Calculus AB",
    "unit": "8",
    "topic": "8.6",
    "category": "Applications of Integration",
    "learned": "false",
    "active": "true",
    "questionFontSize": "w3-xlarge",
    "question": [
      "Volume with Disc Method", 
      "(with horizontal axis of revolution)",
      ""
    ],   
    "answerFontSize" : "w3-xlarge",
    "answer": [
      "$$V = \\\\pi \\\\int_{a}^{b} \\\\left[ R(x) \\\\right]^2 dx$$",
      ""
    ]
  },
    {
    "subject": "AP Calculus AB",
    "unit": "8",
    "topic": "8.6",
    "category": "Applications of Integration",
    "learned": "false",
    "active": "true",
    "questionFontSize": "w3-xlarge",
    "question": [
      "Volume with Disc Method", 
      "(with vertical axis of revolution)",
      ""
    ],   
    "answerFontSize" : "w3-xlarge",
    "answer": [
      "$$V = \\\\pi \\\\int_{c}^{d} \\\\left[ R(y) \\\\right]^2 dy$$",
      ""
    ]
  },
  {
    "subject": "AP Calculus AB",
    "unit": "8",
    "topic": "8.11",
    "category": "Applications of Integration",
    "learned": "false",
    "active": "true",
    "questionFontSize": "w3-xlarge",
    "question": [
      "Volume with Washer Method", 
      "(with horizontal axis of revolution)",
      ""
    ],   
    "answerFontSize" : "w3-large",
    "answer": [
      "$$V = \\\\pi \\\\int_{a}^{b} \\\\left( \\\\left[ R(x) \\\\right]^2 - \\\\left[ r(x) \\\\right]^2 \\\\right) dx$$",
      ""
    ]
  },
  {
    "subject": "AP Calculus AB",
    "unit": "8",
    "topic": "8.11",
    "category": "Applications of Integration",
    "learned": "false",
    "active": "true",
    "questionFontSize": "w3-xlarge",
    "question": [
      "Volume with Washer Method", 
      "(with vertical axis of revolution)",
      ""
    ],   
    "answerFontSize" : "w3-large",
    "answer": [
      "$$V = \\\\pi \\\\int_{c}^{d} \\\\left( \\\\left[ R(y) \\\\right]^2 - \\\\left[ r(y) \\\\right]^2 \\\\right) dy$$",
      ""
    ]
  },
  {
    "subject": "Trigonometry",
    "unit": "Unit Circle",
    "topic": "Sine, Cosine, Tangent",
    "category": "",
    "learned": "false",
    "active": "true",
    "questionFontSize": "w3-xxlarge",
    "question": [
      "$$0$$",
      ""
    ],   
    "answerFontSize" : "w3-xlarge",
    "answer": [
      "\\\\(\\\\sin 0 = 0\\\\)",
      "\\\\(\\\\cos 0 = 1\\\\)",
      "\\\\(\\\\tan 0 = 0\\\\)",
      ""
    ]
  },
  {
    "subject": "Trigonometry",
    "unit": "Unit Circle",
    "topic": "Sine, Cosine, Tangent",
    "category": "",
    "learned": "false",
    "active": "true",
    "questionFontSize": "w3-xxlarge",
    "question": [
      "$$\\\\frac{\\\\pi}{6}$$",
      ""
    ],   
    "answerFontSize" : "w3-xlarge",
    "answer": [
      "\\\\(\\\\sin \\\\frac{\\\\pi}{6} = \\\\frac{1}{2}\\\\)",
      "\\\\(\\\\cos \\\\frac{\\\\pi}{6} = \\\\frac{\\\\sqrt{3}}{2}\\\\)",
      "\\\\(\\\\tan \\\\frac{\\\\pi}{6} = \\\\frac{1}{\\\\sqrt{3}} = \\\\frac{\\\\sqrt{3}}{3}\\\\)",
      ""
    ]
  },
    {
    "subject": "Trigonometry",
    "unit": "Unit Circle",
    "topic": "Sine, Cosine, Tangent",
    "category": "",
    "learned": "false",
    "active": "true",
    "questionFontSize": "w3-xxlarge",
    "question": [
      "$$\\\\frac{\\\\pi}{4}$$",
      ""
    ],   
    "answerFontSize" : "w3-xlarge",
    "answer": [
      "\\\\(\\\\sin \\\\frac{\\\\pi}{4} = \\\\frac{1}{\\\\sqrt{2}} = \\\\frac{\\\\sqrt{2}}{2}\\\\)",
      "\\\\(\\\\cos \\\\frac{\\\\pi}{4} = \\\\frac{1}{\\\\sqrt{2}} = \\\\frac{\\\\sqrt{2}}{2}\\\\)",
      "\\\\(\\\\tan \\\\frac{\\\\pi}{4} = 1\\\\)",
      ""
    ]
  },
    {
    "subject": "Trigonometry",
    "unit": "Unit Circle",
    "topic": "Sine, Cosine, Tangent",
    "category": "",
    "learned": "false",
    "active": "true",
    "questionFontSize": "w3-xxlarge",
    "question": [
      "$$\\\\frac{\\\\pi}{3}$$",
      ""
    ],   
    "answerFontSize" : "w3-xlarge",
    "answer": [
      "\\\\(\\\\sin \\\\frac{\\\\pi}{3} = \\\\frac{\\\\sqrt{3}}{2}\\\\)",
      "\\\\(\\\\cos \\\\frac{\\\\pi}{3} = \\\\frac{1}{2}\\\\)",
      "\\\\(\\\\tan \\\\frac{\\\\pi}{3} = \\\\sqrt{3}\\\\)",
      ""
    ]
  },
  {
    "subject": "Trigonometry",
    "unit": "Unit Circle",
    "topic": "Sine, Cosine, Tangent",
    "category": "",
    "learned": "false",
    "active": "true",
    "questionFontSize": "w3-xxlarge",
    "question": [
      "$$\\\\frac{\\\\pi}{2}$$",
      ""
    ],   
    "answerFontSize" : "w3-xlarge",
    "answer": [
      "\\\\(\\\\sin \\\\frac{\\\\pi}{2} = 1\\\\)",
      "\\\\(\\\\cos \\\\frac{\\\\pi}{2} = 0\\\\)",
      "\\\\(\\\\tan \\\\frac{\\\\pi}{2} \\\\) is undefined",
      ""
    ]
  },
  {
    "subject": "Trigonometry",
    "unit": "Unit Circle",
    "topic": "Sine, Cosine, Tangent",
    "category": "",
    "learned": "false",
    "active": "true",
    "questionFontSize": "w3-xxlarge",
    "question": [
      "$$\\\\frac{2\\\\pi}{3}$$",
      ""
    ],   
    "answerFontSize" : "w3-xlarge",
    "answer": [
      "\\\\(\\\\sin \\\\frac{2\\\\pi}{3} = \\\\frac{\\\\sqrt{3}}{2}\\\\)",
      "\\\\(\\\\cos \\\\frac{2\\\\pi}{3} = -\\\\frac{1}{2}\\\\)",
      "\\\\(\\\\tan \\\\frac{2\\\\pi}{3} = -\\\\sqrt{3}\\\\)",
      ""
    ]
  },
  {
    "subject": "Trigonometry",
    "unit": "Unit Circle",
    "topic": "Sine, Cosine, Tangent",
    "category": "",
    "learned": "false",
    "active": "true",
    "questionFontSize": "w3-xxlarge",
    "question": [
      "$$\\\\frac{3\\\\pi}{4}$$",
      ""
    ],   
    "answerFontSize" : "w3-xlarge",
    "answer": [
      "\\\\(\\\\sin \\\\frac{3\\\\pi}{4} = \\\\frac{1}{\\\\sqrt{2}} = \\\\frac{\\\\sqrt{2}}{2}\\\\)",
      "\\\\(\\\\cos \\\\frac{3\\\\pi}{4} = -\\\\frac{1}{\\\\sqrt{2}} = -\\\\frac{\\\\sqrt{2}}{2}\\\\)",
      "\\\\(\\\\tan \\\\frac{3\\\\pi}{4} = -1\\\\)",
      ""
    ]
  },
  {
    "subject": "Trigonometry",
    "unit": "Unit Circle",
    "topic": "Sine, Cosine, Tangent",
    "category": "",
    "learned": "false",
    "active": "true",
    "questionFontSize": "w3-xxlarge",
    "question": [
      "$$\\\\frac{5\\\\pi}{6}$$",
      ""
    ],   
    "answerFontSize" : "w3-xlarge",
    "answer": [
      "\\\\(\\\\sin \\\\frac{5\\\\pi}{6} = \\\\frac{1}{2}\\\\)",
      "\\\\(\\\\cos \\\\frac{5\\\\pi}{6} = - \\\\frac{\\\\sqrt{3}}{2}\\\\)",
      "\\\\(\\\\tan \\\\frac{5\\\\pi}{6} = - \\\\frac{1}{\\\\sqrt{3}} = - \\\\frac{\\\\sqrt{3}}{3}\\\\)",
      ""
    ]
  },
  {
    "subject": "Trigonometry",
    "unit": "Unit Circle",
    "topic": "Sine, Cosine, Tangent",
    "category": "",
    "learned": "false",
    "active": "true",
    "questionFontSize": "w3-xxlarge",
    "question": [
      "$$\\\\pi$$",
      ""
    ],   
    "answerFontSize" : "w3-xlarge",
    "answer": [
      "\\\\(\\\\sin \\\\pi = 0\\\\)",
      "\\\\(\\\\cos \\\\pi = -1\\\\)",
      "\\\\(\\\\tan \\\\pi = 0\\\\)",
      ""
    ]
  }, 
  {
    "subject": "Trigonometry",
    "unit": "Unit Circle",
    "topic": "Sine, Cosine, Tangent",
    "category": "",
    "learned": "false",
    "active": "true",
    "questionFontSize": "w3-xxlarge",
    "question": [
      "$$\\\\frac{7\\\\pi}{6}$$",
      ""
    ],   
    "answerFontSize" : "w3-xlarge",
    "answer": [
      "\\\\(\\\\sin \\\\frac{7\\\\pi}{6} = - \\\\frac{1}{2}\\\\)",
      "\\\\(\\\\cos \\\\frac{7\\\\pi}{6} = - \\\\frac{\\\\sqrt{3}}{2}\\\\)",
      "\\\\(\\\\tan \\\\frac{7\\\\pi}{6} = \\\\frac{1}{\\\\sqrt{3}} = \\\\frac{\\\\sqrt{3}}{3}\\\\)",
      ""
    ]
  },
  {
    "subject": "Trigonometry",
    "unit": "Unit Circle",
    "topic": "Sine, Cosine, Tangent",
    "category": "",
    "learned": "false",
    "active": "true",
    "questionFontSize": "w3-xxlarge",
    "question": [
      "$$\\\\frac{5\\\\pi}{4}$$",
      ""
    ],   
    "answerFontSize" : "w3-xlarge",
    "answer": [
      "\\\\(\\\\sin \\\\frac{5\\\\pi}{4} = - \\\\frac{1}{\\\\sqrt{2}} = - \\\\frac{\\\\sqrt{2}}{2}\\\\)",
      "\\\\(\\\\cos \\\\frac{5\\\\pi}{4} = -\\\\frac{1}{\\\\sqrt{2}} = -\\\\frac{\\\\sqrt{2}}{2}\\\\)",
      "\\\\(\\\\tan \\\\frac{5\\\\pi}{4} = 1\\\\)",
      ""
    ]
  },
  {
    "subject": "Trigonometry",
    "unit": "Unit Circle",
    "topic": "Sine, Cosine, Tangent",
    "category": "",
    "learned": "false",
    "active": "true",
    "questionFontSize": "w3-xxlarge",
    "question": [
      "$$\\\\frac{4\\\\pi}{3}$$",
      ""
    ],   
    "answerFontSize" : "w3-xlarge",
    "answer": [
      "\\\\(\\\\sin \\\\frac{4\\\\pi}{3} = -\\\\frac{\\\\sqrt{3}}{2}\\\\)",
      "\\\\(\\\\cos \\\\frac{4\\\\pi}{3} = -\\\\frac{1}{2}\\\\)",
      "\\\\(\\\\tan \\\\frac{4\\\\pi}{3} = \\\\sqrt{3}\\\\)",
      ""
    ]
  },
   {
    "subject": "Trigonometry",
    "unit": "Unit Circle",
    "topic": "Sine, Cosine, Tangent",
    "category": "",
    "learned": "false",
    "active": "true",
    "questionFontSize": "w3-xxlarge",
    "question": [
      "$$\\\\frac{3\\\\pi}{2}$$",
      ""
    ],   
    "answerFontSize" : "w3-xlarge",
    "answer": [
      "\\\\(\\\\sin \\\\frac{3\\\\pi}{2} = -1\\\\)",
      "\\\\(\\\\cos \\\\frac{3\\\\pi}{2} = 0\\\\)",
      "\\\\(\\\\tan \\\\frac{3\\\\pi}{2} \\\\) is undefined",
      ""
    ]
  },
    {
    "subject": "Trigonometry",
    "unit": "Unit Circle",
    "topic": "Sine, Cosine, Tangent",
    "category": "",
    "learned": "false",
    "active": "true",
    "questionFontSize": "w3-xxlarge",
    "question": [
      "$$\\\\frac{5\\\\pi}{3}$$",
      ""
    ],   
    "answerFontSize" : "w3-xlarge",
    "answer": [
      "\\\\(\\\\sin \\\\frac{5\\\\pi}{3} = -\\\\frac{\\\\sqrt{3}}{2}\\\\)",
      "\\\\(\\\\cos \\\\frac{5\\\\pi}{3} = \\\\frac{1}{2}\\\\)",
      "\\\\(\\\\tan \\\\frac{5\\\\pi}{3} = -\\\\sqrt{3}\\\\)",
      ""
    ]
  },
  {
    "subject": "Trigonometry",
    "unit": "Unit Circle",
    "topic": "Sine, Cosine, Tangent",
    "category": "",
    "learned": "false",
    "active": "true",
    "questionFontSize": "w3-xxlarge",
    "question": [
      "$$\\\\frac{7\\\\pi}{4}$$",
      ""
    ],   
    "answerFontSize" : "w3-xlarge",
    "answer": [
      "\\\\(\\\\sin \\\\frac{7\\\\pi}{4} = - \\\\frac{1}{\\\\sqrt{2}} = - \\\\frac{\\\\sqrt{2}}{2}\\\\)",
      "\\\\(\\\\cos \\\\frac{7\\\\pi}{4} = \\\\frac{1}{\\\\sqrt{2}} = \\\\frac{\\\\sqrt{2}}{2}\\\\)",
      "\\\\(\\\\tan \\\\frac{7\\\\pi}{4} = -1\\\\)",
      ""
    ]
  },  
  {
    "subject": "Trigonometry",
    "unit": "Unit Circle",
    "topic": "Sine, Cosine, Tangent",
    "category": "",
    "learned": "false",
    "active": "true",
    "questionFontSize": "w3-xxlarge",
    "question": [
      "$$\\\\frac{11\\\\pi}{6}$$",
      ""
    ],   
    "answerFontSize" : "w3-xlarge",
    "answer": [
      "\\\\(\\\\sin \\\\frac{11\\\\pi}{6} = - \\\\frac{1}{2}\\\\)",
      "\\\\(\\\\cos \\\\frac{11\\\\pi}{6} = \\\\frac{\\\\sqrt{3}}{2}\\\\)",
      "\\\\(\\\\tan \\\\frac{11\\\\pi}{6} = - \\\\frac{1}{\\\\sqrt{3}} = - \\\\frac{\\\\sqrt{3}}{3}\\\\)",
      ""
    ]
  },
  {
    "subject": "Trigonometry",
    "unit": "Unit Circle",
    "topic": "Sine, Cosine, Tangent",
    "category": "",
    "learned": "false",
    "active": "true",
    "questionFontSize": "w3-xxlarge",
    "question": [
      "$$2\\\\pi$$",
      ""
    ],   
    "answerFontSize" : "w3-xlarge",
    "answer": [
      "\\\\(\\\\sin 2\\\\pi = 0\\\\)",
      "\\\\(\\\\cos 2\\\\pi = 1\\\\)",
      "\\\\(\\\\tan 2\\\\pi = 0\\\\)",
      ""
    ]
  },
  {
    "subject": "Logarithms",
    "unit": "",
    "topic": "Properties",
    "category": "",
    "learned": "false",
    "active": "true",
    "questionFontSize": "w3-xlarge",
    "question": [
      "$$\\\\ln 1$$",
      ""
    ],   
    "answerFontSize" : "w3-xlarge",
    "answer": [
      "$$0$$",
      ""
    ]
  },  
  {
    "subject": "Logarithms",
    "unit": "",
    "topic": "Properties",
    "category": "",
    "learned": "false",
    "active": "true",
    "questionFontSize": "w3-xlarge",
    "question": [
      "$$\\\\ln e$$",
      ""
    ],   
    "answerFontSize" : "w3-xlarge",
    "answer": [
      "$$1$$",
      ""
    ]
  },  
  {
    "subject": "Logarithms",
    "unit": "",
    "topic": "Properties",
    "category": "",
    "learned": "false",
    "active": "true",
    "questionFontSize": "w3-xlarge",
    "question": [
      "Multiplication Property",
      "$$\\\\ln (ab)$$",
      ""
    ],   
    "answerFontSize" : "w3-xlarge",
    "answer": [
      "$$\\\\ln a + \\\\ln b$$",
      ""
    ]
  },
  {
    "subject": "Logarithms",
    "unit": "",
    "topic": "Properties",
    "category": "",
    "learned": "false",
    "active": "true",
    "questionFontSize": "w3-xlarge",
    "question": [
      "Division Property",
      "$$\\\\ln \\\\left(\\\\frac{a}{b}\\\\right)$$",
      ""
    ],   
    "answerFontSize" : "w3-xlarge",
    "answer": [
      "$$\\\\ln a - \\\\ln b$$",
      ""
    ]
  },
    {
    "subject": "Logarithms",
    "unit": "",
    "topic": "Properties",
    "category": "",
    "learned": "false",
    "active": "true",
    "questionFontSize": "w3-xlarge",
    "question": [
      "Power Property",
      "$$\\\\ln {x^r}$$",
      ""
    ],   
    "answerFontSize" : "w3-xlarge",
    "answer": [
      "$$r \\\\ln x$$",
      ""
    ]
  },
  {
    "subject": "Logarithms",
    "unit": "",
    "topic": "Properties",
    "category": "",
    "learned": "false",
    "active": "true",
    "questionFontSize": "w3-xlarge",
    "question": [
      "Change of Base",
      "$$\\\\log_b x$$",
      ""
    ],   
    "answerFontSize" : "w3-xlarge",
    "answer": [
      "$$\\\\frac{\\\\log_a b}{\\\\log_a x}$$",
      ""
    ]
  },
  {
    "subject": "Logarithms",
    "unit": "",
    "topic": "Properties",
    "category": "",
    "learned": "false",
    "active": "true",
    "questionFontSize": "w3-xlarge",
    "question": [
      "$$e^{\\\\ln x}$$",
      ""
    ],   
    "answerFontSize" : "w3-xlarge",
    "answer": [
      "$$x$$",
      ""
    ]
  },
    {
    "subject": "Logarithms",
    "unit": "",
    "topic": "Properties",
    "category": "",
    "learned": "false",
    "active": "true",
    "questionFontSize": "w3-xlarge",
    "question": [
      "$$\\\\ln {e^x}$$",
      ""
    ],   
    "answerFontSize" : "w3-xlarge",
    "answer": [
      "$$x$$",
      ""
    ]
  }
 ]`;

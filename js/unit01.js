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

unit01DeckJsonString = `[
  {
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
  }
 ]`;

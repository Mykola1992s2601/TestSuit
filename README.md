# Practice page
JavaScript Coding Conventions
                               
                       Variable Names
We use camelCase for identifier names (variables and functions).
All names start with 'a' letter.
                             Spaces Around Operators
Always put spaces around operators ( = + - * / ), and after commas
                             Code Indentation
Always use 2 spaces for indentation of code blocks
                             Statement Rules
General rules for simple statements:
Always end a simple statement with a semicolon.
General rules for complex (compound) statements:
Put the opening bracket at the end of the first line.
Use one space before the opening bracket.
Put the closing bracket on a new line, without leading spaces.
Do not end a complex statement with a semicolon.
                            Object Rules
General rules for object definitions:
Place the opening bracket on the same line as the object name.
Use colon plus one space between each property and its value.
Use quotes around string values, not around numeric values.
Do not add a comma after the last property-value pair.
Place the closing bracket on a new line, without leading spaces.
Always end an object definition with a semicolon.
Short objects can be written compressed, on one line, using spaces only between properties
                          Line Length < 80
For readability, avoid lines longer than 80 characters.
If a JavaScript statement does not fit on one line, the best place to break it, is after an operator or a comma.
                          Naming Conventions
Always use the same naming convention for all your code. For example:
Variable and function names are written as camelCase
Global variables are written in UPPERCASE 
Constants (like PI) written in UPPERCASE
Should you use hyphens, camelCase, or under_scores in variable names?
This is a question programmers often discuss. The answer depends on who you ask:
Hyphens in HTML and CSS:
HTML5 attributes can start with data- (data-quantity, data-price).
CSS uses hyphens in property names (font size).
Underscores:
Many programmers prefer to use underscores (date_of_birth), especially in SQL databases.
Underscores are often used in PHP documentation.
PascalCase:
PascalCase is often preferred by C programmers.
camelCase:
camelCase is used by JavaScript itself, jQuery, and other JavaScript libraries.
                          Loading JavaScript in HTML
Use simple syntax for loading external scripts (the type attribute is not necessary)
                          Accessing HTML Elements
A consequence of using "untidy" HTML styles, might result in JavaScript errors.
These two JavaScript statements will produce different results:
                          File Extensions
HTML files should have a .html extension (.htm is allowed).
CSS files should have a .css extension.
JavaScript files should have a .js extension.

                          Use Lower Case File Names
Most web servers (Apache, Unix) are case-sensitive about file names:
london.jpg cannot be accessed as London.jpg.
Other web servers (Microsoft, IIS) are not case-sensitive:
london.jpg can be accessed as London.jpg or london.jpg.
If you use a mix of upper and lower case, you have to be extremely consistent.
If you move from a case-insensitive to a case-sensitive server, even small errors can break your website.
To avoid these problems, always use lowercase file names (if possible).

                         Performance
Coding conventions are not used by computers. Most rules have little impact on the execution of programs.
Indentation and extra spaces are not significant in small scripts.
For code in development, readability should be preferred. Larger production scripts should be minimized.


                        JavaScript Best Practices


                        Avoid Global Variables
Minimize the use of global variables.
This includes all data types, objects, and functions.
Global variables and functions can be overwritten by other scripts.
Use local variables instead, and learn how to use closures.

                       Always Declare Local Variables
All variables used in a function should be declared as local variables.
Local variables must be declared with the var, the let, or the const keyword, otherwise, they will become global variables.
Strict mode does not allow undeclared variables.

                       Declarations on Top
It is a good coding practice to put all declarations at the top of each script or function.
This will:
Give cleaner code
Provide a single place to look for local variables
Make it easier to avoid unwanted (implied) global variables
Reduce the possibility of unwanted re-declarations


                      Initialize Variables
It is a good coding practice to initialize variables when you declare them.
This will:
Give cleaner code
Provide a single place to initialize variables
Avoid undefined values
Initializing variables provides an idea of the intended use (and intended data type).


                      Declare Objects with const
Declaring objects with const will prevent any accidental change of type:


                      Declare Arrays with const
Declaring arrays with const will prevent any accidental change of type:
                      Don't Use new Object()
Use "" instead of new String()
Use 0 instead of new Number()
Use false instead of new Boolean()
Use {} instead of new Object()
Use [] instead of new Array()
Use /()/ instead of new RegExp()
Use function (){} instead of new Function()
Beware of Automatic Type Conversions
                      JavaScript is loosely typed.
A variable can contain all data types.
A variable can change its data type:
                      Beware that numbers can accidentally be converted to strings or NaN (Not a Number).
When doing mathematical operations, JavaScript can convert numbers to strings:
Subtracting a string from a string does not generate an error but returns NaN (Not a Number):
                      Use === Comparison
The == comparison operator always converts (to matching types) before comparison.
The === operator forces a comparison of values and types:
                      Use Parameter Defaults
If a function is called with a missing argument, the value of the missing argument is set to undefined.
Undefined values can break your code. It is a good habit to assign default values to arguments.
                     End Your Switches with Defaults
Always end your switch statements with a default. Even if you think there is no need for it.
                    Avoid Number, String, and Boolean as Objects
Always treat numbers, strings, or booleans as primitive values. Not as objects.
Declaring these types as objects, slows down execution speed, and produces nasty side effects:
                    Avoid Using eval()
The eval() function is used to run text as code. In almost all cases, it should not be necessary to use it.
Because it allows arbitrary code to be run, it also represents a security problem.

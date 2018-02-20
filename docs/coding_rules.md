# Coding Rules For Modules
This document explains how to write code for typescript modules in bacardi project.

- ts file should have one module such as a class, an interface or so on.
- If there are more than one class, interface or so on, create a folder, split them.
  - index.ts should be in a folder.
  - ts files can be imported in the same folder. For the other cases, import index.ts only.
- The processing order is pro parser, construtor and generator.
  - There is a dependency in reverse order.
  - ts files in types folder are split into each folder.
- The exception is base folder.

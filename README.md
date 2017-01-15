# Overview
Overview of the project, the project was built for testing on online
psychological testing. It will be on a web-based technology and will be
housed in a cloud based server.

## Purpose
The company wanted to have an online testing for psychological need for HR
companies who needed it.

## Following are the Key Features:
- Admin and Users Access
- Randomized Sorting for Test questions
- Form Validation for required fields
- 5 Online tests applicable for Module
- Overview login for 5 tests
- Automated questions response and appropriate analyses
- PDF form Email output
- Client Company database Archive
- Reports Management (Samples will be provided for excel design document)
- `Unlimited` Testing


## The following are the five tests:

| Name | Market | Short Description | Remarks |
| --- | --- | --- | --- |
| Nonverbal Personality Questionnaire and Five-Factor Nonverbal Personality Questionnaire | Blue coloured | __ | NPQ with Pictures |
| Manchester Personality Questionnaire | General Population | __ | MPQ |
| Management Development Questionnaire | Upper Management | Inventory of management competencies | MDQ |
| BarOn EQ | Intelligent test (EQ) | __ | BarOn EQ |
| Employee Aptitude Survey | Mental Ability Test | __ | MAT With Timer and 10 sub test |

## Build

1. BarOn EQ
  * Required Fields

| Name | Remark |
| :---: | --- |
| Given Name |  |
| Gender |  |
| Birthdate |  |
| Age | _To be automatically computed_ |
| Today's Date | _To be automatically filled_ |
| Position | _Show file differences that haven't been staged_ |
| Company |  __ |

## Instructions
  1. Firebase - Database Queries
    * Users by Login
    * Users by Test
    * Users by Companies
  2. EaselJS - Timed game GUI

## VIEWS
  1. Login.html
  2. Nav.html
  3. Register.html
  4. Success.html
  5. Dashboard.hmtl

## SERVICES
  1. Authentication.js

## CONTROLLERS
  1. Registration.js
  2. Success.js

## ROUTING
  1. Check routeProvider in App.js

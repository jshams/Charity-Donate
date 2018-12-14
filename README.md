# Jake's Charity  Mongo Node app

## TO DO's
- [X] Add bootstrap
- [X] Create bootstrap navbar
- [X] Create CharityProject Model
    - Name of Project
    - Description
    - Total Funding Goal
    - Project Progress
    - Categories
- [X] Create Category Model
    - title
    - Description
    - funding Goal
    - funding Progress
- [X] Set up database
- [X] Create a .gitignore from www.gitignore.io
- [X] Create index route
- [X] Create basic index view
- [ ] Create new charity project route
- [ ] Create new charity project form

*********Scoping the Bare Minimal Viable Product for my Contractor Project in BEW 1.1.*********
Let's create 2 resources. 1 for Charities and 1 for the Categories.
So users can create a charity project, and add information to it (Project name, funding goal(automatically generated from the total of category costs), description, and Categories), users can edit this and delete it.
Every category will have it's own unique page that shows it's title, image, description, funding goal and funding progress. Users can donate towards this cause and write their name and why they donated. People can see who's donated to the project.


*********PROJECT BRAINSTORM*********
Donate
What are donations being used towards.

Charity accounts
Charities can post their project.
  Project:
    - Items(Kids clothing, new building basement, new Islam 101 class)
      Item
        - Description.
        - Pictures.

People can view their Charities projects and choose what they want to donate towards.
When you donate, you transparently see the impact your donation has.

How is it transparent? Every project has a progress number. So when u donate towards something, you immediately see the progress tracker go up. Additionally, you can see who donated for what and why.

Send donation to a charity.
See very transparently where exactly that money is being used.

# MyBudget - Made by Oceanida

WARNING: This is a work made for a an School application, any company names, characters, places and incidents either are products of the author's imagination or are used fictitiously.

##### Description

The present application has been made for following the instructions of a statement proposed by our teacher. The main idea we had to follow is sentenced by the following points:

1. The application needs to have a cognitive tracking of the transactions that are made by the user.
2. The main screen has to show in all the time, the total balance of the budget. In case that the total balance is negative, it has to been shown in red.
3. The user needs the poisibility to add a new budget, that can be considerated an 'Income' or an 'Expense'
4. All the registered movements need a Description, Amount, Date and Id. In this application, the first two are needed to introduce for creating a new budget, the date in case of not selecting it, will be placed with the current one.
5. The movements list (that one that will have the transactions) has to be implemented the most efficiency as possible, allowing the user to delete items. Sadly, this application (currently), doesnt allow to update the values, but it has a button for it prepared (it has a console.log that warns its malfunctioning).
6. There will be a Constants folder, including the styleSheet with the theme of the application.

### Conditions for the correct use of the application

There is 2 lists, a positive list with the income data and a negative list with the expenses. 

There is a button on the bottom, that allows the user to add a new Transaction, it has 4 parameters. A quantity input (maxmimum 8 length values), a description input, and a Calendar.
By default, the date set on the Calendar will be the day is launched the form, meaning the "today" of that moment, but the quantity and description must be setted so its added to its formal list.

After we submit a correct form, we will be able to see the result in 2 spots, the list where it has been added, and the Total Display (The big one on the top), if we click on Income, or Expenses on the main screen, we will see the elements on each list.

For using it we must download the main branch and do the property run commands and install for the using of the project.

1. We install the node_modules

> npm install

2. Then we init the project

> npm start
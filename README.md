# quiz_platform
This project is intended to help students study and track their progress over time

Project Console: https://console.firebase.google.com/project/quiz-6ceb9/overview <br>

The front end is build using React and the back end is build using JavaScript and Firestore. 

When logging in, any email is valid. The password can also be whatever you would like, any 6 digit string would suffice.

Login page:
![Login Image](./images/login.png)

When logged in, the home page is where you will be routed. You can hover over the question mark in the bottom left to see where the different options in the nav bar take you.

Home page:
![Home Image](./images/home.png)

Under the quiz tab, you can take quizzes and see your results live.

Quiz page:
![Quiz Image](./images/results.png)

Track your progress and see previous results in the results tab.

Results page:
![Results Image](./images/table.png)

Allow friends access to your quizzes and create courses/groups in the manage tab.

Manage page:
![Manage Image](./images/roster.png)


Hosting URL: https://quiz-6ceb9.web.app



To deploy run the following commands:

npm run build <br>
npm run export <br>
firebase deploy <br>


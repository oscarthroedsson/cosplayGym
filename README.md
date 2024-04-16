# cosplayGym

This application was an assignment for an internship.

🏁 How to start and run the application:

- Clone it
- Run this command in the right directory on your PC.

The postman files is exported and under the postman directory. Add this to your postman and follow the data structure that is provided to add/delete/edit.

↓ Down below can you read my reflections on the assignment ↓

# The assignment

With this assignment could I choose different functionalitys to implement on an exercise called "The Cosplay Gym". I choose to implement a booking calander where the user should be able to see avaible session to book, and book it. Which the UI does.

Before I began coding a way I should take some time and think about the problem I´m facing and possible solutions. This is my reflections.

> ## Possible solutions
>
> Building a calendar comes with some dynamic challenges. Using and operating with dates involves complex data structures. JavaScript provides a Date object, but it has some limitations in >methods, such as providing the first/last date/day of the month in an easy way. When handling dates, it is often advantageous to use a third-party library, like date-fns.
>
> Because of the complexity of handling dates, it could be argued that using a component library would make it easier to implement, saving time and money for the client. What we need to consider here is that booking an instructor at a gym is one of the core services that could lead to increased sales for the gym in the end. This argues for having full control over the implementation and gaining the freedom to implement new features in the future to enhance gym services or adapt to customer feedback. While using a component library may offer some freedom, we will never have complete control.
>
> When considering UX for when the user lands on the website, we need to consider how much data to fetch to ensure that we don’t make the page too slow. Considering that the gym is just starting up and likely only has one gym and not too many instructors, we could fetch all available sessions. However, if they expand to more facilities and hire more instructors, and we observe a significant load on the webpage, we could consider implementing lazy-loading or other alternatives.
>
> In the initial phase, the choice of database may not have a significant impact. However, we need to consider what would be beneficial if the gym grows and expands. This includes handling large volumes of data, performing analytics, and making frequent updates due to client progress. Opting for SQL databases would be advantageous in this scenario, as we can organize data into separate tables and establish relationships as needed. This approach will prove beneficial as the gym's operations expand, requiring retrieval of mixed data and frequent updates.
>
> > Possible future
> > Considering potential future requirements, such as storing a training program, we must store detailed information about exercises, including their names, the muscles they target, and more. Additionally, we need to track the exercises performed by users and calculate their progress over time. In this scenario, SQL databases are more advantageous than document databases, such as MongoDB, for instance.
>
> For styling, it would be wise to utilize a third-party library that offers pre-styled components, thereby saving us time on CSS. Examples of such libraries include Bootstrap, Tailwind CSS, > Pure CSS, and others.
>
> After this I should motivate my conclusion before I started

> ## Conclusion
>
> Based on the reasoning above, I conclude that we will build the full calendar without utilizing a component library for designing the calendar, and instead, we will employ the third-party library date-fns for handling dates. Additionally, we will begin fetching all available sessions for all instructors.
>
> The back-end will consist of a small Express API, and we will utilize an ORM called Prisma. The rationale behind selecting an ORM like Prisma is its ease of readability and learning. Additionally, Prisma boasts excellent documentation, which is not always common in similar tools.
>
> I have decided to use Tailwind for styling. Tailwind offers numerous open-source component libraries that are free and provide 100% of the code, allowing us to maintain full control over our design. Additionally, Tailwind components adhere to an 8pt design system, which minimizes the need for adjustments when incorporating components from a library. Moreover, Tailwind is a rapidly growing CSS framework that is beginning to rival Bootstrap. It appears to be a secure choice for the long term.

And when I was done, I answered a few questions that let me explain the process

> ## Most challenging part
>
> The most challenging aspect of this assignment has been working with dates, primarily due to formatting issues and TypeScript integration.
>
> Regarding this assignment, when we load data in Postman or in the seed.ts file, the time format is not considered, but it is when we retrieve the data from the database. This means that if we add a session starting at 07:00, it will be converted to 09:00 when fetched from the database due to the UTC formatting function in date-fns and the web browser. However, I don't perceive this as a significant issue for this assignment. If we had implemented a user interface for adding sessions, the date would have been automatically formatted correctly by using the JavaScript Date object or date-fns.
>
> ## Most enjoyable part
>
> I enjoy building UI components, and constructing a calendar presented an interesting challenge due to its reliance on dates, which are essential for many applications today. This aspect of the project was particularly enjoyable because I believe the experience gained from it will be valuable in my future work. Additionally, there's a certain satisfaction in transforming an empty page into a fully functional and visually appealing component.
>
> ## What I learned
>
> I gained a deeper understanding of TSX and its functionality. TypeScript, in general, presents a challenge for me, as its logic doesn't come naturally to me. However, I am pleased to have gained more experience with it through this assignment.
>
> ## Things I would do if I had more time (box och punktlista)
>
> If I had more time, I would focus on several key areas:
>
> - **Enhancing UI Functionality**: I would expand the user interface (UI) to include features for registering, adding, updating, and removing sessions, instructors, and clients. Currently, the UI only allows booking sessions. Additionally, I would refine the process of creating a client simultaneously with booking, breaking it down into separate functionalities if possible.
> - **Improved Instructor Session Display**: I would implement a more detailed functionality where clicking on an instructor's name would display only their available sessions. This would provide a more streamlined user experience.
>
> - **Enhanced Validation Streams**: I would dedicate more energy and time to writing better validation streams for the API routes. To achieve this, I would utilize either Express Validator or Joi. Express Validator is suitable for straightforward implementation with Express APIs, while Joi offers easier customization for validation logic. The choice between them ultimately depends on personal preference.
>
> - **Component Breakdown for Calendar**: I would divide the calendar into two separate components: one for the calendar UI and another for the day view. This separation would enhance reusability, as there may be scenarios where only one of these views is needed. By breaking them down into distinct components, we gain flexibility in reusing them across different parts of the application.
>
> - **Session Time Flexibility**: I would implement the ability to add sessions starting at specific times, such as 07:30. Currently, sessions can only be added via Postman and must start at full hours. This enhancement would provide users with more flexibility in scheduling sessions.

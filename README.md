# Online SQL Editor
You can see this web app at **https://sqldb-viewer.herokuapp.com/**

This is an online SQL editor built specifically for the frontend task of Atlan's front-end internship. This particular project is built using **[React](https://reactjs.org/)**, and the **[React Bootstrap](https://react-bootstrap.github.io/)** front-end framework. It originally contains a data dump borrowed from [this](https://github.com/graphql-compose/graphql-compose-examples/tree/master/examples/northwind/data/csv) repository. The sections below detail the salient features of this project.

## Features

1. **Tab Based Interface**: An easy-to-use tab based interface allows the user to switch between multiple queries at once. Want to view a table _and_ run a query at the same time? Sure, go right ahead. Each tab maintains its own separate state, so as long as you don't reload the page, you can jump right back to where you left a tab.
2. **Dynamic Table Views**: The list of tables is fetched at first, but the actual data isn't. Only when you click on the name of a table, are the entries fetched. Keeping the application lightweight, and blazing fast.
3. **Reduce loading time by lazy loading** Used React.lazy() function to load unused js after page has loaded. 
4. **Result Statistics**: The user will also be alerted about the time taken to complete a query, giving the user a measure to check the performance of the system.
5. **Analytics feature**:User can se how many query were performed 
6. **Ability to save the results as JSON, XML, or CSV**: This application includes functionality to save the save and export query result.

## Performance Audit

- **[GTmetrix](https://gtmetrix.com/)**: The fully loaded time is **0.849ms seconds**, with the first contentful paint at **502 ms**. The site receives 100% performance and 92% structure and A grade.
- **[pingdom](https://tools.pingdom.com/)**: The load time according to pingdom **1.27 seconds**. The site also scores **92 points and grade A in performance** . 


## Optimisations

- **Lazy loading**. Loading or rendering components on demand.It can improve the application’s performance, and at the same time can save us a lot of resources. 
- The most time-saving optimisation would be **dynamic fetching**. The rows of a table are fetched only when the user requests it. Not a second before. This saves a lot of seconds off our initial load time, by distributing that across requests.
- **Extensive use of the `useMemo` hook**. The `useMemo` hook reduces the number of re-computations by storing the results of computations with the same dependencies. The data of tables is entirely 'memoised'.
- **Keeping the number of state changes as low as possible**. While this has been accompanied by a slight reduction in the feature set, it has more than made up for it in the load time of a re-render.
- **Reduced the number of API calls**. I have reduced the number of API calls, by using the `useEffect` hook, which shaved off almost 2 seconds after each click.

## Available Scripts

In the project directory, you can run:

### `npm start`

Runs the app in the development mode.\
Open [http://localhost:3000](http://localhost:3000) to view it in the browser.




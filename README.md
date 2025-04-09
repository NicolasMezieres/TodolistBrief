# Best todolist you have never see (or not) 
## How to install this on your machine
            Use `git clone 'code of SSH or HTTPS' 
            
            Like this :
![Screen Clone](https://github.com/NicolasMezieres/TodolistBrief/blob/main/assets/img/Screen%20Clone.png)

Launch your index.html for see the result.

If everything working you gonna see this : 

![TodoList](https://github.com/NicolasMezieres/TodolistBrief/blob/main/assets/img/Result.png)

If you wan't to add a task, enter some text on the input, then click on the button " + " for appear your task.

Example : 

![Example Task](https://github.com/NicolasMezieres/TodolistBrief/blob/main/assets/img/Todolist.png)

# How this works ?
## Screen Of Html
If you see at line 22, we have a input text for read your task. After this we have a button at line 23 with a onclick function for create a task.

This function gonna insert your task, in tag :  `<ul>` at line 26.

![Html](https://github.com/NicolasMezieres/TodolistBrief/blob/main/assets/img/Html.png)

### Explain JavaScript

We initilialize a counter : `todoItems`.
If you click on the button, the function `createTodo` gonna create an instance. This instance gonna play method : `addTodo`, and add your task on tag `<ul>`. On this tag we have now 3 buttons on the same `<li>`.

### First button :
This button use the method: `changeTodo` of class `todo`, gonna toogle Attribute `disabled` at your text task.

### Second button :
This button use the method: `checkTodo` of class `todo`, gonna toogle Class `check`, for validate your task with a change style on your text.

### Third button :
This button use the method: `removeTodo` of class `todo`, gonna remove your task.

![CodeJs](https://github.com/NicolasMezieres/TodolistBrief/blob/main/assets/img/Code%20JS.png)

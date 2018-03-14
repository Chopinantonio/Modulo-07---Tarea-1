# Task 1

## Barchart creation

The aim of this task is to build a graph like then next one:


![alt text](https://github.com/Chopinantonio/Modulo-07---Tarea-1/blob/master/Pictures/Gr%C3%A1fica%20Completa.png)


We will start with the following one and we will change some things in order to obtain a barchart similar to the first one.


![alt text](https://github.com/Chopinantonio/Modulo-07---Tarea-1/blob/master/Pictures/Original.png)

Let's see the steps that must be followed to obtain the graph that is requested in the task from this one:

## Steps

Firstly, let's show the barchart vertically. We will use the following code fragment and we will change some things in order to achieve it:


![alt text](https://github.com/Chopinantonio/Modulo-07---Tarea-1/blob/master/Pictures/CodeToChangeXY.png)


In this case, we have to define the X axis like the Y axis was defined before, and the Y axis like the X axis was. Now, in X axis, we use a band scale in order to insert every product name. Also, since we want the total number of sales to be on the Y axis, a linear scale will be used on that axis to enter the sales data. The domains have been changed too. Let´s see the code created to solve this matter:


![alt text](https://github.com/Chopinantonio/Modulo-07---Tarea-1/blob/master/Pictures/Rotate.png)


Once the graph rotated, let´s add some space between the rects. In this case the solution is easier, let´s see it:


![alt text](https://github.com/Chopinantonio/Modulo-07---Tarea-1/blob/master/Pictures/Space%20between%20Rects.png)


When the width of the band is defined, we have to add the distance that will be between each band.

After that, it´s time to add different colours to the bands. In the #####data.js document, we have created a  new variable called "color" in which we have defined different colours for each product. 


![alt text](https://github.com/Chopinantonio/Modulo-07---Tarea-1/blob/master/Pictures/Data%20Color.png)


Now we want to fill the rects with their colours. In order to obtaint that, when the rectangles are being created, we defined a new attribute 
about style which returns the colour for each band. 


![alt text](https://github.com/Chopinantonio/Modulo-07---Tarea-1/blob/master/Pictures/Rects%20Color.png)


Finally, we add a legend to our graph. The next function will be used:


![alt text](https://github.com/Chopinantonio/Modulo-07---Tarea-1/blob/master/Pictures/Legend.png)

Firstly, a new group is created in the svg and a transformation is used to correctly place the legend in the body. Finally, each product has to be related with its respective rect and the text corresponding to that product.

## THE END -- José Antonio Montes Cervantes





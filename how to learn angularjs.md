##Resumen 
(del artículo [How to Learn AngularJS - Your AngularJS Sherpa](http://lmgtfy.com/))

##componentes principales de AngularJS:
	- Directivas
 	- Ámbitos
 	- Controladores
 	- Servicios
 	- Inyección de Dependencias

##Directivas 
	+ Nos permite crear nuestras propias 'etiquetas'(elementos) en html para darle un compartamiento personalizado.
	+ Una función que devuelve un elemento DOM para darle funcionalidad extra.
	+ En aplicaciones angular es muy comun encontrarnos con etiqueta ng- que son directivas provistas por el propioi angular.
	+ Las directivas hacen posible extender HTML con funcionalidades propias.

>###ngApp
>>	- Permite settear aplicaciones sobre elementos html, lo cual nos permitira tener el control sobre este elemento y sus hijos.
>>	- Esl el módulo principal de la página

	<div ngApp></div>
	
	or
	
	<div ngApp="myApp"></div>
	
>Módulos  
>>####Analogía

>>Al igual que en un coche esta formado por módulos independientes: motor, ruedas que trabajan de forma conjunta realizando tareas individuales, Angular funciona de manera similar, podemos escribir pequeños componentes que sean fácilmente mantenibles y testeables para conseguir el objetivo que quieran alcanzar.


	angular.module('myApp', []); //setter

	or  

	angular.module('myApp'); //getter


##Ámbitos($scope).
	- Es el enlace entre nuestro código javascript y lo que se muestra en el navegador.
	- Forma de organizar pares atributo - valor

>###$rootScope
>>Es el ámbito de mayor nivel

>###Scope
>>Esta en una jerarquía menor al $rootScope y es importante porque permite mantener varialbes y datos ubicados en una parte específica de la página sin tener conflictos con otras partes de la página.


##Controladores.
	- Define funcionalidad a una parte del código.

	```
	<div ng-controller='HomeController'>
	
	Aqui tenemos acceso al objeto $scope definido en el HomeController
	
	</div>
	```

	- Cada vez que se crea un nuevo controlador, Angular crea un nuevo objeto $scope


##Recursos
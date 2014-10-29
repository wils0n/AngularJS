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


###¿Como podemos interactuar con APIs de backend con Angular?
>##Promesas
>>Ayudan a trabajar con código asincrónico sintienod que estamos escibiendo código síncrónico.
>>>####¿Cómo accedemos al objeto $http en el controlador?

```
angular.module('myApp', [])
.controller('HomeController', function($scope, $http) { //Angular inyectará las dependencias $scope, $http
  // Tenemos el objeto $scope y el objeto $http
  // disponibles en este punto
});
```
##Inyección de dependencias
Cuando usamos otros lenguajes y necesimos usar dependencias usamos `import` o `
require`

En Angular se hace de la siguiente forma:
```
.controller('HomeController', function($scope, $q) {
```
or
```
.controller('HomeController', function($q, $scope) {
```
El orden no importa


##Servicios.
Cuando usamos $http, estamos usando un servicio de Angular, los servicios son objeros single que realizan tareas comunes.

###Ejemplo.
Vamos a crear una aplicacion que nos informe del clime. Podemos desarrollar nuestro `WeatherService` que contenga las taras comunes para usar en cualquier lugar de neustra aplicación.


angular.module('myApp.services', [])
.service('WeatherService',
  function($http) {
    this.weatherFor = function(zip) {
    // hacer algo con $http para obtener el clima aquí
    };
  });


angular.module('myApp.controllers')
.controller('WeatherController', function($scope, WeatherService) {
  $scope.weather = WeatherService.weatherFor(90210);
});

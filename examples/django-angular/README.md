###Resolviendo conflictos entre Django y Angular

Cuando trabajamos con estas 2 tecnologías, existe el problema que para mostar expresiones o varialbes usan el similar sistama de tags, es decir usan {{ variable }}.

Existen 2 soluciones para resolver esto:

1. ####Configurando Angular con $interpolateProvider
Al usar $interpolateProvider, se puede configurar(personalizar) para que los símbolos en su sistema de plantillas, por ejm:

	```js
	var app = angular.module('myApp', []).
		config(function($interpolateProvider){
	  	$interpolateProvider.startSymbol('[[').endSymbol(']]');
	});
	```

	y ya se podría usar en django algo como:

	```js
	<ul ng-repeat="item in items">
		<li>[[ item ]]</li>
	</ul>
	```


2. ###usando el tag `{% verbatim %}`
Al usar el tag {% verbatim %}  detiene el uso de plantillas de django en el bloque indicado por verbatim

	```js
	{%verbatim%}
	{{ variable }}
	{%endverbatim%}
	```


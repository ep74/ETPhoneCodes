# ETPhoneCodes

## Version Beta 1

Actuellement en développement voici la Beta 1.

## Intégration HTML

Ajoutez le CSS, le JSON et le JS :

```html
<link rel="stylesheet" type="text/css" href="./etphonecodes/css/etphonecodes.min.css" media="all" />
<script type="text/javascript" src="./etphonecodes/etphonecodes.data.min.js"></script>
<script type="text/javascript" src="./etphonecodes/etphonecodes.min.js"></script>
```

Puis lancer le script en remplaçant "my-id-input" par l'ID de votre balise \<input /\>:
```html
<script type="text/javascript">
	document.addEventListener("DOMContentLoaded", function(event) {
		var my_etphonecodes = new ETPhoneCodes("my-id-input");
	});
</script>
```

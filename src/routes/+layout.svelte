<script>
  import "../app.css";

	import { loadTranslations } from '$lib/translations/translations';

	const defaultLanguage = "ja_jp"
	loadTranslations(defaultLanguage, "/"); 
</script>

<slot />
<script lang="ts">
	// Please refer `tsconfig.ts`'s "include" key so that typescript/vscode's language server considers files in `common` folder.
	import { variable1, type UserType } from '../../../common/utils';
	const user1: UserType = {
		name: 'sahil',
		age: 10
	};
</script>

<h1>Svelte + Expressjs with common files usage</h1>

{variable1}

<br />
Hello, {user1.name} ({user1.age})

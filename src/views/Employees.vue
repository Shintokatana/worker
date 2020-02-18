<template>
    <div class="entry-content">
        <userTable />
    </div>
</template>

<script>
	import userTable from '@/components/userTable/index'

	export default {
		name: "Employees",
		components: {
			userTable
		}
	}
</script>

<style scoped>

</style>

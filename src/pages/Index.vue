<script setup lang="ts">
const router = useRouter()
const name = packageJson.config.name
router.push('/' + name)
</script>

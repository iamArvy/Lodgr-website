<script setup lang="ts">
import redirectHome from '~/middleware/redirect-home';
definePageMeta({
  middleware: redirectHome
})
</script>
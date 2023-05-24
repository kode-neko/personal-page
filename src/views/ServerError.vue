<template>
  <ErrorContent title="Server Error" icon="face-kiss" />
</template>

<script>
import ErrorContent from "../components/common/ErrorContent.vue";

export default {
  name: "ServerError",
  components: { ErrorContent },
};
</script>

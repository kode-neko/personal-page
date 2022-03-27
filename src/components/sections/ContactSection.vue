<template>
  <form novalidate @submit.prevent="sendMsg()">
    <div :class="$style.field">
      <input
        v-model="msg.name"
        name="name"
        type="text"
        :placeholder="$t('contact.name')"
      />
      <div :class="$style.hint">es un ejemplo de un hint</div>
    </div>
    <div :class="$style.field">
      <input
        v-model="msg.mail"
        name="mail"
        type="text"
        placeholder="example@gmail.com"
      />
      <div :class="$style.hint">es un ejemplo de un hint</div>
    </div>
    <div :class="$style.field">
      <textarea
        v-model="msg.content"
        name="content"
        :placeholder="$t('contact.msg')"
      ></textarea>
      <div :class="$style.hint">500/500 caracteres</div>
    </div>
    <div :class="$style.footer">
      <div :class="$style.info">Complete los campos para enviar el mensaje</div>
      <div :class="$style.actions">
        <ActionBtn label="contact.send" action="submit" />
      </div>
    </div>
  </form>
</template>

<script>
import ActionBtn from "../ActionBtn.vue";
export default {
  name: "ContactSection",
  components: { ActionBtn },
  data() {
    return {
      msg: {
        name: "",
        mail: "",
        content: "",
      },
    };
  },
  methods: {
    sendMsg() {
      console.log("form", this.msg);
    },
  },
};
</script>

<style module>
form {
  max-width: 600px;
}
.field {
  margin-bottom: 20px;
}
.field input,
.field textarea {
  width: 100%;
  background: none;
  border: none;
  border-bottom: 1px solid var(--purple-light);
  color: var(--white);
  padding: 8px 0;
  font-size: 18px;
  margin-bottom: 10px;
  font-family: "Roboto", sans-serif;
}
.field input::placeholder,
.field textarea::placeholder {
  color: var(--purple-light);
}
.field input:focus-visible,
.field textarea:focus-visible {
  outline: none;
  border-bottom: 4px solid var(--purple-light);
}
.field input {
  height: 22px;
}
.field textarea {
  height: 300px;
}
.hint {
  font-style: italic;
  color: var(--purple-dark);
}
.footer {
  margin-top: 40px;
}
.info {
  display: none;
}
.actions {
  display: flex;
  justify-content: flex-end;
  margin-top: 10px;
}
</style>

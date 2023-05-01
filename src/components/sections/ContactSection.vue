<template>
  <form id="contact" novalidate @submit.prevent="sendMsg()">
    <div :class="$style.field">
      <input
        v-model="msg.name"
        name="name"
        type="text"
        :placeholder="$t('contact.name')"
        @blur="v$.msg.name.$touch"
      />
      <div :class="$style.hint">
        {{
          v$.msg.name.$dirty && v$.msg.name.$error
            ? $t(v$.msg.name.$errors[0].$message)
            : ""
        }}
      </div>
    </div>
    <div :class="$style.field">
      <input
        v-model="msg.mail"
        name="mail"
        type="text"
        placeholder="example@gmail.com"
        @blur="v$.msg.mail.$touch"
      />
      <div :class="$style.hint">
        {{
          v$.msg.mail.$dirty && v$.msg.mail.$error
            ? $t(v$.msg.mail.$errors[0].$message)
            : ""
        }}
      </div>
    </div>
    <div :class="$style.field">
      <textarea
        v-model="msg.content"
        name="content"
        :placeholder="$t('contact.msg')"
        @blur="v$.msg.content.$touch"
      ></textarea>
      <div :class="$style.hint">
        {{
          v$.msg.content.$dirty && v$.msg.content.$error
            ? $t(v$.msg.content.$errors[0].$message)
            : ""
        }}
      </div>
    </div>
    <div :class="$style.footer">
      <div :class="$style.info">Complete los campos para enviar el mensaje</div>
      <div :class="$style.actions">
        <ActionBtn
          label="contact.send"
          action="submit"
          :spinner="sending"
          :disabled="v$.$invalid"
        />
      </div>
    </div>
  </form>
</template>

<script>
import axios from "axios";
import ActionBtn from "../common/ActionBtn.vue";
import useVuelidate from "@vuelidate/core";
import {
  required,
  email,
  minLength,
  maxLength,
  helpers,
} from "@vuelidate/validators";

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
      sending: false,
    };
  },
  setup() {
    return {
      v$: useVuelidate(),
    };
  },
  methods: {
    sendMsg() {
      this.sending = true;
      axios
        .post(import.meta.env.VITE_CONTACT, this.msg)
        .then(() =>
          this.$notify({
            text: "📭 El mensaje ha sido enviado con éxito",
            duration: -1,
          })
        )
        .catch(() =>
          this.$notify({
            text: "💀 Hubo un error al enviar el mensaje",
            duration: -1,
          })
        )
        .finally(() => {
          this.sending = false;
        });
    },
  },
  validations() {
    return {
      msg: {
        name: {
          required: helpers.withMessage("contact.required", required),
        },
        mail: {
          email: helpers.withMessage("contact.formatMail", email),
          required: helpers.withMessage("contact.required", required),
        },
        content: {
          minLengthValue: helpers.withMessage("contact.minMsg", minLength(0)),
          maxLengthValue: helpers.withMessage("contact.maxMsg", maxLength(600)),
          required: helpers.withMessage("contact.requiredMsg", required),
        },
      },
    };
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
  margin-bottom: 13px;
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
  margin-bottom: 10px;
}
.field input {
  height: 22px;
}
.field textarea {
  height: 200px;
}
.hint {
  font-style: italic;
  color: var(--purple-mid);
  height: 16px;
  text-align: right;
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
